import { Token, TokenType } from './lexer';
import { SyntaxError } from './error';

export type AST = (Declaration | Statement)[];
export type Declaration = FunctionDeclaration | VariableDeclaration | Statement;
export type Statement = Expression | Call | If | While | For | Return | VariableAssignment | Block | ExpressionStatement | ImportStatement | BreakStatement | EmptyStatement;
export type Expression = Literal | Identifier | Call | Block | BinaryOperation | UnaryOperation;

export class ASTNode {

    lineNumber: number;

    static Literal(value: Token, lineNumber: number): Literal {
        const res = new Literal();
        res.value = value;
        res.lineNumber = lineNumber;

        return res;
    }

    static Identifier(name: Token, lineNumber: number): Identifier {
        const res = new Identifier();
        res.name = name;
        res.lineNumber = lineNumber;

        return res;
    }

    static VariableDeclaration(name: Token, value: Expression, lineNumber: number): VariableDeclaration {
        const res = new VariableDeclaration();

        res.name = name;
        res.value = value;
        res.lineNumber = lineNumber;

        return res;
    }

    static VariableAssignment(name: Token, value: Expression, lineNumber: number): VariableAssignment {
        const res = new VariableAssignment();
        res.name = name;
        res.value = value;
        res.lineNumber = lineNumber;

        return res;
    }

    static Call(func: Expression, args: Expression[], lineNumber: number): Call {
        const res = new Call();
        res.func = func;
        res.args = args;
        res.lineNumber = lineNumber;

        return res;
    }

    static Block(nodes: ASTNode[], lineNumber: number): Block {
        const res = new Block();
        res.nodes = nodes;
        res.lineNumber = lineNumber;

        return res;
    }

    static BreakStatement(lineNumber: number): BreakStatement {
        const res = new BreakStatement();
        res.lineNumber = lineNumber;

        return res;
    }

    static UnaryOperation(op: Token, rand: Expression, prefix: boolean, lineNumber: number): UnaryOperation {
        const res = new UnaryOperation();
        res.op = op;
        res.rand = rand;
        res.prefix = prefix;
        res.lineNumber = lineNumber;

        return res;
    }

    static BinaryOperation(op: Token, lhs: Expression, rhs: Expression, lineNumber: number): BinaryOperation {
        const res = new BinaryOperation();
        res.op = op;
        res.lhs = lhs;
        res.rhs = rhs;
        res.lineNumber = lineNumber;

        return res;
    }

    static If(condition: Expression, then: Block, lineNumber: number, elseBlock?: Block,): If {
        const res = new If();
        res.condition = condition;
        res.then = then;
        res.else = elseBlock;
        res.lineNumber = lineNumber;

        return res;
    }

    static While(condition: Expression, body: Block, lineNumber: number): While {
        const res = new While();
        res.condition = condition;
        res.body = body;
        res.lineNumber = lineNumber;

        return res;
    }

    static For(init: Statement, condition: Expression, update: Statement, body: Block, lineNumber: number): For {
        const res = new For();
        res.init = init;
        res.condition = condition;
        res.update = update;
        res.body = body;
        res.lineNumber = lineNumber;

        return res;
    }

    static FunctionDeclaration(name: Token, params: Token[], body: Block, lineNumber: number): FunctionDeclaration {
        const res = new FunctionDeclaration();
        res.name = name;
        res.params = params;
        res.body = body;
        res.lineNumber = lineNumber;

        return res;
    }

    static Return(value: Expression, lineNumber: number): Return {
        const res = new Return();
        res.value = value;
        res.lineNumber = lineNumber;

        return res;
    }

    static ExpressionStatement(value: Expression, lineNumber: number): ExpressionStatement {
        const res = new ExpressionStatement();
        res.expression = value;
        res.lineNumber = lineNumber;

        return res;
    }

    static ImportStatement(path: Token, lineNumber: number): ImportStatement {
        const res = new ImportStatement();
        res.path = path;
        res.lineNumber = lineNumber;

        return res;
    }

    static EmptyStatement(lineNumber: number): EmptyStatement {
        const res = new EmptyStatement();
        res.lineNumber = lineNumber;

        return res;
    }
}

export class ImportStatement extends ASTNode {
    path: Token
}

export class Literal extends ASTNode {
    value: Token
}

export class Identifier extends ASTNode {
    name: Token
}

export class Call extends ASTNode {
    func: Expression
    args: Expression[]
}

export class Block extends ASTNode {
    nodes: ASTNode[]
}

export class UnaryOperation extends ASTNode {
    op: Token
    rand: Expression
    prefix: boolean
}

export class BinaryOperation extends ASTNode {
    op: Token
    lhs: Expression
    rhs: Expression
}

export class BreakStatement extends ASTNode {}

export class If extends ASTNode {
    condition: Expression
    then: Block
    else?: Block
}

export class While extends ASTNode {
    condition: Expression
    body: Block
}

export class For extends ASTNode {
    init: Statement
    condition: Expression
    update: Statement
    body: Block
}

export class FunctionDeclaration extends ASTNode {
    name: Token
    params: Token[]
    body: Block
}

export class Return extends ASTNode {
    value: Expression
}

export class VariableDeclaration extends ASTNode {
    name: Token
    value: Expression
}

export class VariableAssignment extends ASTNode {
    name: Token
    value: Expression
}

export class ExpressionStatement extends ASTNode {
    expression: Expression
}

export class EmptyStatement extends ASTNode {
    // Empty
}

export default class Parser {

    private tokens: Token[];
    private pos = 0;
    private loopDepth = 0;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    private peek(n = 0): Token {
        if (this.pos + n >= this.tokens.length)
            return this.tokens[this.tokens.length - 1];

        return this.tokens[this.pos + n];
    }

    private advance(n = 1): void {
        for (let i = 0; i < n; i++) {
            this.pos++;
        }
    }

    public run(): AST {
        const ast: AST = [];

        while (this.peek().type !== TokenType.EOF) {
            const declaration = this.declaration();
            ast.push(declaration);
        }

        return ast;
    }

    private declaration(): Declaration {
        const t = this.peek();

        if (t.type === TokenType.FUNCTION)
            return this.function();
        else if (t.type === TokenType.LET)
            return this.variableDecleration();
        else
            return this.statement();
    }

    private statement(): Statement {
        const t = this.peek();

        switch (t.type) {
            case TokenType.RETURN:
                return this.return();
            case TokenType.IF:
                return this.if();
            case TokenType.WHILE:
                return this.while();
            case TokenType.FOR:
                return this.for();
            case TokenType.LBRACE:
                return this.block();
            case TokenType.IMPORT:
                return this.import();
            case TokenType.SEMICOLON:
                return this.empty();
            case TokenType.BREAK:
                return this.break();
            default:
                return this.expressionStatement();
        }
    }

    private break(): BreakStatement {
        if (this.loopDepth === 0)
            this.error(this.peek().line, "Unexpected 'break' statement outside of loop");

        const lineNumber = this.peek().line;
        this.advance();

        if (this.peek().type !== TokenType.SEMICOLON)
            this.error(lineNumber, "Expected ';' after 'break' statement");

        this.advance();

        return ASTNode.BreakStatement(lineNumber);
    }

    private empty(): EmptyStatement {
        const lineNumber = this.peek().line;
        this.advance();

        return ASTNode.EmptyStatement(lineNumber);
    }

    private import(): ImportStatement {
        const lineNumber = this.peek().line;
        this.advance();
        
        const path = this.peek();
        if (path.type !== TokenType.IDENTIFIER)
            this.error(lineNumber,"Expected identifier after 'import'");

        this.advance();

        if (this.peek().type === TokenType.SEMICOLON) {
            this.advance();
        }

        return ASTNode.ImportStatement(path, lineNumber);
    }

    private expressionStatement(forceSemicolon = false): ExpressionStatement {
        const lineNumber = this.peek().line;
        
        const expr = this.expression();

        if (forceSemicolon && this.peek().type !== TokenType.SEMICOLON)
            this.error(lineNumber, "Expected ';' after variable declaration");

        if (this.peek().type === TokenType.SEMICOLON)
            this.advance();

        return ASTNode.ExpressionStatement(expr, lineNumber);
    }

    private variableDecleration(forceSemicolon = false): VariableDeclaration {
        this.advance();

        const lineNumber = this.peek().line;

        const name = this.peek();
        if (name.type !== TokenType.IDENTIFIER)
            this.error(lineNumber,"Expected identifier after 'let'");

        this.advance();
        if (this.peek().type !== TokenType.ASSIGN)
            this.error(lineNumber,"Expected '=' after identifier");

        this.advance();
        const value = this.expression();

        if (forceSemicolon && this.peek().type !== TokenType.SEMICOLON)
            this.error(lineNumber, "Expected ';' after variable declaration");

        if (this.peek().type === TokenType.SEMICOLON)
            this.advance();

        return ASTNode.VariableDeclaration(name, value, lineNumber);
    }

    private while(): While {
        const lineNumber = this.peek().line;

        this.loopDepth++;

        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error(lineNumber,"Expected '(' after 'while'");

        this.advance();
        const condition = this.expression();

        if (this.peek().type !== TokenType.RPAREN)
            this.error(lineNumber,"Expected ')' after condition");

        this.advance();
        const body = this.block();

        this.loopDepth--;

        return ASTNode.While(condition, body, lineNumber);
    }

    private for(): For {
        const lineNumber = this.peek().line;

        this.loopDepth++;

        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error(lineNumber,"Expected '(' after 'for'");

        this.advance();
        let init: Statement;
        if (this.peek().type === TokenType.LET)
            init = this.variableDecleration(true);
        else if (this.peek().type === TokenType.SEMICOLON)
            init = this.empty();
        else
            init = this.expressionStatement(true);


        let condition;
        if (this.peek().type === TokenType.SEMICOLON)
            condition = this.empty();
        else {
            condition = this.expression();

            if (this.peek().type !== TokenType.SEMICOLON) 
                this.error(lineNumber, "Expected ';' after condition");
            
            this.advance();
        }

        let update;
        if (this.peek().type === TokenType.RPAREN)
            update = this.empty();
        else {
            update = this.expressionStatement(false);

            if (this.peek().type !== TokenType.RPAREN)
                this.error(lineNumber,"Expected ')' after update statement");
            
            this.advance();
        }

        const body = this.block();

        this.loopDepth--;

        return ASTNode.For(init, condition, update, body, lineNumber);
    }

    private if(): If {
        const lineNumber = this.peek().line;

        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error(lineNumber,"Expected '(' after 'if'");

        this.advance();
        const condition = this.expression();

        if (this.peek().type !== TokenType.RPAREN)
            this.error(lineNumber,"Expected ')' after condition");

        this.advance();
        const then = this.block();

        if (this.peek().type === TokenType.ELSE) {
            this.advance();
            const els = this.block();
            return ASTNode.If(condition, then, lineNumber, els);
        }

        return ASTNode.If(condition, then, lineNumber);
    }


    private return(): Return {
        const lineNumber = this.peek().line;

        this.advance();
        const value = this.expression();

        const t = this.peek();

        if (this.peek().type === TokenType.SEMICOLON) {
            this.advance();
        }

        return ASTNode.Return(value, lineNumber);
    }

    private function(): FunctionDeclaration {
        const lineNumber = this.peek().line;

        this.advance();
        const name = this.peek();
        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error(lineNumber,"Expected '(' after function name");

        this.advance();
        const params: Token[] = [];

        while (this.peek().type !== TokenType.RPAREN) {
            if (this.peek().type !== TokenType.IDENTIFIER)
                this.error(lineNumber,"Expected identifier in parameter list");

            params.push(this.peek());
            this.advance();

            if (this.peek().type !== TokenType.COMMA) {
                if (this.peek().type !== TokenType.RPAREN)
                    this.error(lineNumber,"Expected ')' after parameter list");
                break;
            } else {
                this.advance();
            }
        }
        this.advance();

        const body = this.block();

        return ASTNode.FunctionDeclaration(name, params, body, lineNumber);
    }

    private block(): Block {
        const lineNumber = this.peek().line;

        if (this.peek().type !== TokenType.LBRACE)
            return ASTNode.Block([this.statement()], lineNumber);

        this.advance();
        const nodes: ASTNode[] = [];

        while (this.peek().type !== TokenType.RBRACE) {
            nodes.push(this.declaration());
        }

        this.advance();
        return ASTNode.Block(nodes, lineNumber);
    }

    private expression(): Expression {
        return this.andOr();
    }

    private andOr(): Expression {
        const lineNumber = this.peek().line;
        let expr = this.equality();

        while (this.peek().type === TokenType.AND || this.peek().type === TokenType.OR) {
            const op = this.peek();
            this.advance();
            const rhs = this.equality();

            expr = ASTNode.BinaryOperation(op, expr, rhs, lineNumber);
        }

        return expr;
    }

    private equality(): Expression {
        const lineNumber = this.peek().line;
        
        let expr = this.comparison();

        while (this.peek().type === TokenType.EQ || this.peek().type === TokenType.NEQ) {
            const op = this.peek();
            this.advance();
            const rhs = this.comparison();

            expr = ASTNode.BinaryOperation(op, expr, rhs, lineNumber);
        }

        return expr;
    }

    private comparison(): Expression {
        const lineNumber = this.peek().line;

        let expr = this.term();

        while (this.peek().type === TokenType.GT || this.peek().type === TokenType.GTE || this.peek().type === TokenType.LT || this.peek().type === TokenType.LTE) {
            const op = this.peek();
            this.advance();
            const rhs = this.term();

            expr = ASTNode.BinaryOperation(op, expr, rhs, lineNumber);
        }

        return expr;
    }

    private term(): Expression {
        const lineNumber = this.peek().line;

        let expr = this.factor();

        while (this.peek().type === TokenType.PLUS || this.peek().type === TokenType.MINUS) {
            const op = this.peek();
            this.advance();
            const rhs = this.factor();

            expr = ASTNode.BinaryOperation(op, expr, rhs, lineNumber);
        }

        return expr;
    }

    private factor(): Expression {
        const lineNumber = this.peek().line;

        let expr: Expression = this.unary();

        while (this.peek().type === TokenType.MUL || this.peek().type === TokenType.DIV) {
            const op = this.peek();
            this.advance();
            const rhs = this.unary();

            expr = ASTNode.BinaryOperation(op, expr, rhs, lineNumber);
        }

        return expr;
    }

    private unary(): Expression {
        let op = this.peek();
        const lineNumber = this.peek().line;

        if (op.type === TokenType.MINUS || op.type === TokenType.NOT) {
            this.advance();
            const rand = this.primary();

            return ASTNode.UnaryOperation(op, rand, true, lineNumber);
        } else if (op.type === TokenType.INC || op.type === TokenType.DEC) {
            this.advance();
            const rand = this.primary();

            if (!(rand instanceof Identifier))
                this.error(lineNumber, "Expected identifier after increment/decrement operator");

            return ASTNode.UnaryOperation(op, rand, true, lineNumber);
        }

        const primary = this.primary();

        op = this.peek();
        if (op.type === TokenType.INC || op.type === TokenType.DEC) {
            this.advance();

            if (!(primary instanceof Identifier))
                this.error(lineNumber, "Expected identifier before increment/decrement operator");

            return ASTNode.UnaryOperation(op, primary, false, lineNumber);
        } else if (op.type === TokenType.LPAREN) {
            this.advance();
            const args: Expression[] = [];

            while (this.peek().type !== TokenType.RPAREN) {
                args.push(this.expression());

                if (this.peek().type !== TokenType.COMMA) {
                    if (this.peek().type !== TokenType.RPAREN)
                        this.error(lineNumber, "Expected ')' after argument list");
                    break;
                } else {
                    this.advance();
                }
            }
            this.advance();

            return ASTNode.Call(primary, args, lineNumber);
        }

        return primary;
    }

    private primary(): Expression {
        const t = this.peek();
        const lineNumber = t.line;

        switch (t.type) {
            case TokenType.NULL:
                this.advance();
                return ASTNode.Literal(t, lineNumber);
            case TokenType.TRUE:
                this.advance();
                return ASTNode.Literal(t, lineNumber);
            case TokenType.FALSE:
                this.advance();
                return ASTNode.Literal(t, lineNumber);
            case TokenType.NUMBER:
                this.advance();
                return ASTNode.Literal(t, lineNumber);

            case TokenType.STRING:
                this.advance();
                return ASTNode.Literal(t, lineNumber);
            case TokenType.IDENTIFIER:
                this.advance();

                if (this.peek().type === TokenType.ASSIGN) {
                    this.advance();
                    const rhs = this.expression();

                    return ASTNode.VariableAssignment(t, rhs, lineNumber);
                }
                return ASTNode.Identifier(t, lineNumber);
            case TokenType.LPAREN:
                this.advance();
                const expr = this.expression();

                if (this.peek().type !== TokenType.RPAREN)
                    this.error(lineNumber, "Expected ')' after expression");

                this.advance();
                return expr;

            default:
                this.error(lineNumber, "Unexpected token in expression: " + t.type);

                // Unreachable
                return ASTNode.Literal({ type: TokenType.NUMBER, value: ``, line: 0 }, lineNumber);
        }
    }

    private error(lineNumber: number, msg?: string) {
        throw new SyntaxError(lineNumber, "Parser error at line " + this.peek().line + ": " + (msg || "Unexpected token"));
    }
}
