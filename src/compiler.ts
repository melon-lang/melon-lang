import { VariableAlreadyDeclaredInScope } from './error';
import { TokenType } from './lexer';
import { AST, Literal, Identifier, BinaryOperation, While, If, Block, Call, Return, For, FunctionDeclaration, Expression, Statement, UnaryOperation, ASTNode, VariableAssignment, VariableDeclaration, ExpressionStatement, ImportStatement, EmptyStatement } from './parser';
import { Program, Opcode, Value, Instruction } from './vm';

interface Local {
    name: string;
    depth: number;
}

const nativesWithSyscall = {
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        args: Infinity
    },
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        args: 1
    },
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        args: 0
    },
}

const nativesWithOpcode = {
    'number': {
        opcode: Opcode.PARSE_NUMBER,
        args: 1
    },
    'random': {
        opcode: Opcode.RANDOM,
        args: 0
    },
    'bool': {
        opcode: Opcode.PARSE_BOOL,
        args: 1
    },
    'str': {
        opcode: Opcode.TO_STRING,
        args: 1
    }
}

class Compiler {

    private ast: AST;
    private program: Program;

    private locals: Local[] = [];
    private depth: number = 0;

    constructor(ast: AST, locals?: Local[], data?: Value[]) {
        this.ast = ast;
        this.program = {
            text: [],
            data: data || []
        };

        this.locals = locals || [];
    }

    public run(): Program {
        for (const node of this.ast) {
            this.codegen(node);
        }

        return this.program;
    }

    private codegen(node: ASTNode) {
        if (node instanceof Literal)
            this.literal(node);
        else if (node instanceof Call)
            this.call(node);
        else if (node instanceof Return)
            this.return(node);
        else if (node instanceof Identifier)
            this.identifier(node);
        else if (node instanceof BinaryOperation)
            this.binaryOperation(node);
        else if (node instanceof UnaryOperation)
            this.unaryOperation(node);
        else if (node instanceof VariableAssignment)
            this.variableAssignment(node);
        else if (node instanceof VariableDeclaration)
            this.variableDeclaration(node);
        else if (node instanceof Block)
            this.block(node)
        else if (node instanceof If)
            this.if(node);
        else if (node instanceof While)
            this.while(node);
        else if (node instanceof For)
            this.for(node);
        else if (node instanceof FunctionDeclaration)
            this.function(node);
        else if (node instanceof ExpressionStatement)
            this.expressionStatement(node);
        else if (node instanceof ImportStatement)
            this.import(node);
        else if (node instanceof EmptyStatement)
            this.empty(node);
        else {
            throw new Error(`Unknown node type ${node.constructor.name}`);
        }
    }

    private empty(node: EmptyStatement) {
        this.emitText(Opcode.NOP);
    }

    private import(node: ImportStatement) {
        this.emitData(Value.string(node.path.value));
        this.emitText(
            Opcode.IMPORT,
            this.program.data.length - 1
        );
    }

    private literal(node: Literal) {
        const str = node.value.value;
        let constant;

        if (node.value.type === TokenType.NUMBER)
            constant = Value.number(parseFloat(str));
        else if (node.value.type === TokenType.STRING)
            constant = Value.string(str);
        else if (node.value.type === TokenType.TRUE)
            constant = Value.boolean(true);
        else if (node.value.type === TokenType.FALSE)
            constant = Value.boolean(false);
        else if (node.value.type === TokenType.NULL)
            constant = Value.null();
        else
            throw new Error(`Unknown literal type ${node.value.type}`);

        this.program.data.push(constant);

        this.emitText(
            Opcode.DATA,
            this.program.data.length - 1
        );
    }

    private call(node: Call) {
        if (node.func instanceof Identifier) {
            const name = node.func.name.value;

            if (name in nativesWithSyscall) {
                const { syscallId, args } = nativesWithSyscall[name];

                if (node.args.length > args) {
                    throw new Error(`Too many arguments passed to ${name}`);
                }

                this.program.data.push(Value.string(syscallId));

                this.emitText(
                    Opcode.DATA,
                    this.program.data.length - 1
                );

                for (const arg of node.args) {
                    this.codegen(arg);
                }

                this.program.data.push(Value.native("syscall"));

                this.emitText(
                    Opcode.DATA,
                    this.program.data.length - 1
                );

                this.emitText(
                    Opcode.CALL,
                    node.args.length + 1
                );

                return;
            } else if (name in nativesWithOpcode) {
                const { opcode, args } = nativesWithOpcode[name];

                if (node.args.length > args) {
                    throw new Error(`Too many arguments passed to ${name}`);
                }

                for (const arg of node.args) {
                    this.codegen(arg);
                }

                this.emitText(opcode);

                return;
            } else if (node.func.name.value === "syscall") {
                for (const arg of node.args) {
                    this.codegen(arg);
                }

                this.program.data.push(Value.native("syscall"));

                this.emitText(
                    Opcode.DATA,
                    this.program.data.length - 1
                );

                this.emitText(
                    Opcode.CALL,
                    node.args.length
                );

                return;
            }
        }

        for (const arg of node.args) {
            this.codegen(arg);
        }

        this.codegen(node.func);

        this.emitText(
            Opcode.CALL,
            node.args.length
        );
    }

    private return(node: Return) {
        if (node.value)
            this.codegen(node.value);


        this.emitText(
            Opcode.RET,
            node.value ? 1 : 0
        );

    }

    private expressionStatement(node: ExpressionStatement) {
        this.codegen(node.expression);
        this.emitText(
            Opcode.POP,
        );
    }

    private identifier(node: Identifier) {
        this.loadVariable(node.name.value);
    }

    private unaryOperation(node: UnaryOperation) {

        const type = node.op.type;
        let opcode;

        if (type === TokenType.MINUS)
            opcode = Opcode.NEG;
        else if (type === TokenType.NOT)
            opcode = Opcode.NOT;
        else if (type === TokenType.INC)
            opcode = Opcode.INC;
        else if (type === TokenType.DEC)
            opcode = Opcode.DEC;
        else
            throw new Error(`Unknown unary operator ${type}`);

        if (opcode === Opcode.INC || opcode === Opcode.DEC) {
            if (!(node.rand instanceof Identifier))
                throw new Error(`Invalid operand for ${type}`);

            this.loadVariable(node.rand.name.value);

            if (node.prefix) {
                this.emitText(
                    Opcode.COPY,
                );
            }

            this.emitText(
                opcode,
            );

            this.assignVariable(node.rand.name.value);

            if (node.prefix) {
                this.emitText(
                    Opcode.POP,
                );
            }
        } else {
            this.codegen(node.rand);

            this.emitText(
                opcode,
            );
        }
    }

    private binaryOperation(node: BinaryOperation) {
        this.codegen(node.lhs)
        this.codegen(node.rhs)

        const type = node.op.type;
        let opcode;

        if (type === TokenType.PLUS)
            opcode = Opcode.ADD;
        else if (type === TokenType.MINUS)
            opcode = Opcode.SUB;
        else if (type === TokenType.MUL)
            opcode = Opcode.MUL;
        else if (type === TokenType.DIV)
            opcode = Opcode.DIV;
        else if (type === TokenType.EQ)
            opcode = Opcode.EQ;
        else if (type === TokenType.NEQ)
            opcode = Opcode.NEQ;
        else if (type === TokenType.LT)
            opcode = Opcode.LT;
        else if (type === TokenType.LTE)
            opcode = Opcode.LTE;
        else if (type === TokenType.GT)
            opcode = Opcode.GT;
        else if (type === TokenType.GTE)
            opcode = Opcode.GTE;
        else if (type === TokenType.AND)
            opcode = Opcode.AND;
        else if (type === TokenType.OR)
            opcode = Opcode.OR;
        else
            throw new Error(`Unknown binary operator ${type}`);

        this.emitText(opcode);
    }

    private variableAssignment(node: VariableAssignment) {
        this.codegen(node.value);

        const name = node.name.value;

        this.assignVariable(name);
    }

    private variableDeclaration(node: VariableDeclaration) {
        this.codegen(node.value);

        const name = node.name.value;

        this.declareVariable(name);
    }

    private block(node: Block) {
        this.depth++;
        for (const child of node.nodes) {
            this.codegen(child);
        }
        this.depth--;

        for (let i = this.locals.length - 1; i >= 0; i--) {
            if (this.locals[i].depth <= this.depth)
                break;

            this.emitText(Opcode.POP);
            this.locals.pop();
        }
    }

    private if(node: If) {
        this.codegen(node.condition);

        const jumpf: Instruction = new Instruction(
            Opcode.JUMPF,
        );

        this.program.text.push(jumpf);
        this.codegen(node.then);
        jumpf.value = this.program.text.length;

        if (node.else) {
            const jump: Instruction = new Instruction(
                Opcode.JUMP,
            );
            this.program.text.push(jump);

            jumpf.value++;

            this.codegen(node.else);
            jump.value = this.program.text.length;
        }
    }

    private while(node: While) {
        const start = this.program.text.length;
        this.codegen(node.condition);

        const jumpf: Instruction = new Instruction(
            Opcode.JUMPF,
        );

        this.program.text.push(jumpf);
        this.codegen(node.body);

        const jump: Instruction = new Instruction(
            Opcode.JUMP,
            start
        );

        this.program.text.push(jump);
        jumpf.value = this.program.text.length;
    }

    private for(node: For) {
        this.codegen(node.init);

        const start = this.program.text.length;
        this.codegen(node.condition);

        const jumpf: Instruction = new Instruction(
             (node.condition instanceof EmptyStatement) ? Opcode.NOP : Opcode.JUMPF,
        );

        this.program.text.push(jumpf);

        this.codegen(node.body);
        this.codegen(node.update);

        const jump: Instruction = new Instruction(
            Opcode.JUMP,
            start
        );

        this.program.text.push(jump);
        jumpf.value = this.program.text.length;
    }

    private function(node: FunctionDeclaration) {
        const func = {
            body: [],
            args: node.params.map(arg => arg.value),
            name: node.name.value
        };

        this.program.data.push(Value.function(func));
        const index = this.program.data.length - 1;

        const locals = [{ name: node.name.value, depth: 0 }]

        if (node.params.length > 0) {
            locals.push(...node.params.map(arg => ({ name: arg.value, depth: 1 })));
        }

        const compiler = new Compiler([node.body], locals, this.program.data);
        const program = compiler.run();

        func.body = program.text;

        func.body.push(new Instruction(
            Opcode.RET,
            0
        ));

        this.emitText(
            Opcode.DATA,
            index
        );

        this.declareVariable(node.name.value);
    }

    private loadVariable(name: string) {
        for (let i = this.locals.length - 1; i >= 0; i--) {
            if (this.locals[i].name === name) {
                this.emitText(
                    Opcode.LOAD,
                    i
                );
                return;
            }
        }

        this.program.data.push(Value.string(name));

        this.emitText(
            Opcode.LOADGL,
            this.program.data.length - 1
        );
    }

    private declareVariable(name: string) {
        if (this.depth === 0) {
            this.program.data.push(Value.string(name));

            this.emitText(
                Opcode.DECLAREGL,
                this.program.data.length - 1
            );
        } else {
            let index = this.locals.findIndex(local => local.name === name);

            if (index === -1) {
                this.locals.push({
                    name,
                    depth: this.depth
                });
            } else {
                throw new VariableAlreadyDeclaredInScope(name);
            }
        }
    }

    private assignVariable(name: string) {
        if (this.depth === 0) {
            this.program.data.push(Value.string(name));

            this.emitText(
                Opcode.SETGL,
                this.program.data.length - 1
            );
        } else {
            let index = this.locals.findIndex(local => local.name === name);

            if (index === -1) {
                this.program.data.push(Value.string(name));

                this.emitText(
                    Opcode.SETGL,
                    this.program.data.length - 1
                );
            } else {
                this.emitText(
                    Opcode.STORE,
                    index
                );
            }
        }
    }

    private emitText(opcode: Opcode, value?: number) {
        this.program.text.push(new Instruction(
            opcode,
            value
        ));
    }

    private emitData(value: Value) {
        this.program.data.push(value);
    }
}

export default Compiler;