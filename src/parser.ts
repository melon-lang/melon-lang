import { Token, TokenType } from './lexer';

export type AST = (Declaration | Statement)[];
export type Declaration = FunctionDeclaration | VariableDeclaration | Statement;
export type Statement = Expression | Call | If | While | For | Return | VariableAssignment | Block | ExpressionStatement | ImportStatement | EmptyStatement;
export type Expression = Literal | Identifier | Call | Block | BinaryOperation | UnaryOperation;

export class ASTNode {
    static Literal(value: Token): Literal {
        const res = new Literal();
        res.value = value;

        return res;
    }

    static Identifier(name: Token): Identifier {
        const res = new Identifier();
        res.name = name;

        return res;
    }

    static VariableDeclaration(name: Token, value: Expression): VariableDeclaration {
        const res = new VariableDeclaration();

        res.name = name;
        res.value = value;

        return res;
    }

    static VariableAssignment(name: Token, value: Expression): VariableAssignment {
        const res = new VariableAssignment();
        res.name = name;
        res.value = value;

        return res;
    }

    static Call(func: Expression, args: Expression[]): Call {
        const res = new Call();
        res.func = func;
        res.args = args;

        return res;
    }

    static Block(nodes: ASTNode[]): Block {
        const res = new Block();
        res.nodes = nodes;

        return res;
    }

    static UnaryOperation(op: Token, rand: Expression, prefix: boolean): UnaryOperation {
        const res = new UnaryOperation();
        res.op = op;
        res.rand = rand;
        res.prefix = prefix;

        return res;
    }

    static BinaryOperation(op: Token, lhs: Expression, rhs: Expression): BinaryOperation {
        const res = new BinaryOperation();
        res.op = op;
        res.lhs = lhs;
        res.rhs = rhs;

        return res;
    }

    static If(condition: Expression, then: Block, elseBlock?: Block): If {
        const res = new If();
        res.condition = condition;
        res.then = then;
        res.else = elseBlock;

        return res;
    }

    static While(condition: Expression, body: Block): While {
        const res = new While();
        res.condition = condition;
        res.body = body;

        return res;
    }

    static For(init: Statement, condition: Expression, update: Statement, body: Block): For {
        const res = new For();
        res.init = init;
        res.condition = condition;
        res.update = update;
        res.body = body;

        return res;
    }

    static FunctionDeclaration(name: Token, params: Token[], body: Block): FunctionDeclaration {
        const res = new FunctionDeclaration();
        res.name = name;
        res.params = params;
        res.body = body;

        return res;
    }

    static Return(value: Expression): Return {
        const res = new Return();
        res.value = value;

        return res;
    }

    static ExpressionStatement(value: Expression): ExpressionStatement {
        const res = new ExpressionStatement();
        res.expression = value;

        return res;
    }

    static ImportStatement(path: Token): ImportStatement {
        const res = new ImportStatement();
        res.path = path;

        return res;
    }

    static EmptyStatement(): EmptyStatement {
        return new EmptyStatement();
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
            default:
                return this.expressionStatement();
        }
    }

    private empty(): EmptyStatement {
        this.advance();

        return ASTNode.EmptyStatement();
    }

    private import(): ImportStatement {
        this.advance();

        const path = this.peek();
        if (path.type !== TokenType.IDENTIFIER)
            this.error("Expected identifier after 'import'");

        this.advance();

        if (this.peek().type === TokenType.SEMICOLON) {
            this.advance();
        }

        return ASTNode.ImportStatement(path);
    }

    private expressionStatement(forceSemicolon = false): ExpressionStatement {
        const expr = this.expression();

        if (forceSemicolon && this.peek().type !== TokenType.SEMICOLON)
            throw new Error("Expected ';' after variable declaration");

        if (this.peek().type === TokenType.SEMICOLON)
            this.advance();

        return ASTNode.ExpressionStatement(expr);
    }

    private variableDecleration(forceSemicolon = false): VariableDeclaration {
        this.advance();

        const name = this.peek();
        if (name.type !== TokenType.IDENTIFIER)
            this.error("Expected identifier after 'let'");

        this.advance();
        if (this.peek().type !== TokenType.ASSIGN)
            this.error("Expected '=' after identifier");

        this.advance();
        const value = this.expression();

        if (forceSemicolon && this.peek().type !== TokenType.SEMICOLON)
            throw new Error("Expected ';' after variable declaration");

        if (this.peek().type === TokenType.SEMICOLON)
            this.advance();

        return ASTNode.VariableDeclaration(name, value);
    }

    private while(): While {
        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error("Expected '(' after 'while'");

        this.advance();
        const condition = this.expression();

        if (this.peek().type !== TokenType.RPAREN)
            this.error("Expected ')' after condition");

        this.advance();
        const body = this.block();

        return ASTNode.While(condition, body);
    }

    private for(): For {
        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error("Expected '(' after 'for'");

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
                throw new Error("Expected ';' after condition");
            
            this.advance();
        }

        let update;
        if (this.peek().type === TokenType.RPAREN)
            update = this.empty();
        else {
            update = this.expressionStatement(false);

            if (this.peek().type !== TokenType.RPAREN)
                this.error("Expected ')' after update statement");
            
            this.advance();
        }

        const body = this.block();

        return ASTNode.For(init, condition, update, body);
    }

    private if(): If {
        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error("Expected '(' after 'if'");

        this.advance();
        const condition = this.expression();

        if (this.peek().type !== TokenType.RPAREN)
            this.error("Expected ')' after condition");

        this.advance();
        const then = this.block();

        if (this.peek().type === TokenType.ELSE) {
            this.advance();
            const els = this.block();
            return ASTNode.If(condition, then, els);
        }

        return ASTNode.If(condition, then);
    }


    private return(): Return {
        this.advance();
        const value = this.expression();

        const t = this.peek();

        if (this.peek().type === TokenType.SEMICOLON) {
            this.advance();
        }

        return ASTNode.Return(value);
    }

    private function(): FunctionDeclaration {
        this.advance();
        const name = this.peek();
        this.advance();

        if (this.peek().type !== TokenType.LPAREN)
            this.error("Expected '(' after function name");

        this.advance();
        const params: Token[] = [];

        while (this.peek().type !== TokenType.RPAREN) {
            if (this.peek().type !== TokenType.IDENTIFIER)
                this.error("Expected identifier in parameter list");

            params.push(this.peek());
            this.advance();

            if (this.peek().type !== TokenType.COMMA) {
                if (this.peek().type !== TokenType.RPAREN)
                    this.error("Expected ')' after parameter list");
                break;
            } else {
                this.advance();
            }
        }
        this.advance();

        const body = this.block();

        return ASTNode.FunctionDeclaration(name, params, body);
    }

    private block(): Block {
        if (this.peek().type !== TokenType.LBRACE)
            return ASTNode.Block([this.statement()]);

        this.advance();
        const nodes: ASTNode[] = [];

        while (this.peek().type !== TokenType.RBRACE) {
            nodes.push(this.declaration());
        }

        this.advance();
        return ASTNode.Block(nodes);
    }

    private expression(): Expression {
        return this.andOr();
    }

    private andOr(): Expression {
        let expr = this.equality();

        while (this.peek().type === TokenType.AND || this.peek().type === TokenType.OR) {
            const op = this.peek();
            this.advance();
            const rhs = this.equality();

            expr = ASTNode.BinaryOperation(op, expr, rhs);
        }

        return expr;
    }

    private equality(): Expression {
        let expr = this.comparison();

        while (this.peek().type === TokenType.EQ || this.peek().type === TokenType.NEQ) {
            const op = this.peek();
            this.advance();
            const rhs = this.comparison();

            expr = ASTNode.BinaryOperation(op, expr, rhs);
        }

        return expr;
    }

    private comparison(): Expression {
        let expr = this.term();

        while (this.peek().type === TokenType.GT || this.peek().type === TokenType.GTE || this.peek().type === TokenType.LT || this.peek().type === TokenType.LTE) {
            const op = this.peek();
            this.advance();
            const rhs = this.term();

            expr = ASTNode.BinaryOperation(op, expr, rhs);
        }

        return expr;
    }

    private term(): Expression {
        let expr = this.factor();

        while (this.peek().type === TokenType.PLUS || this.peek().type === TokenType.MINUS) {
            const op = this.peek();
            this.advance();
            const rhs = this.factor();

            expr = ASTNode.BinaryOperation(op, expr, rhs);
        }

        return expr;
    }

    private factor(): Expression {
        let expr: Expression = this.unary();

        while (this.peek().type === TokenType.MUL || this.peek().type === TokenType.DIV) {
            const op = this.peek();
            this.advance();
            const rhs = this.unary();

            expr = ASTNode.BinaryOperation(op, expr, rhs);
        }

        return expr;
    }

    private unary(): Expression {
        let op = this.peek();

        if (op.type === TokenType.MINUS || op.type === TokenType.NOT) {
            this.advance();
            const rand = this.primary();

            return ASTNode.UnaryOperation(op, rand, true);
        } else if (op.type === TokenType.INC || op.type === TokenType.DEC) {
            this.advance();
            const rand = this.primary();

            if (!(rand instanceof Identifier))
                this.error("Expected identifier after increment/decrement operator");

            return ASTNode.UnaryOperation(op, rand, true);
        }

        const primary = this.primary();

        op = this.peek();
        if (op.type === TokenType.INC || op.type === TokenType.DEC) {
            this.advance();

            if (!(primary instanceof Identifier))
                this.error("Expected identifier before increment/decrement operator");

            return ASTNode.UnaryOperation(op, primary, false);
        } else if (op.type === TokenType.LPAREN) {
            this.advance();
            const args: Expression[] = [];

            while (this.peek().type !== TokenType.RPAREN) {
                args.push(this.expression());

                if (this.peek().type !== TokenType.COMMA) {
                    if (this.peek().type !== TokenType.RPAREN)
                        this.error("Expected ')' after argument list");
                    break;
                } else {
                    this.advance();
                }
            }
            this.advance();

            return ASTNode.Call(primary, args);
        }

        return primary;
    }

    private primary(): Expression {
        const t = this.peek();

        switch (t.type) {
            case TokenType.NULL:
                this.advance();
                return ASTNode.Literal(t);
            case TokenType.TRUE:
                this.advance();
                return ASTNode.Literal(t);
            case TokenType.FALSE:
                this.advance();
                return ASTNode.Literal(t);
            case TokenType.NUMBER:
                this.advance();
                return ASTNode.Literal(t);

            case TokenType.STRING:
                this.advance();
                return ASTNode.Literal(t);
            case TokenType.IDENTIFIER:
                this.advance();

                if (this.peek().type === TokenType.ASSIGN) {
                    this.advance();
                    const rhs = this.expression();

                    return ASTNode.VariableAssignment(t, rhs);
                }
                return ASTNode.Identifier(t);
            case TokenType.LPAREN:
                this.advance();
                const expr = this.expression();

                if (this.peek().type !== TokenType.RPAREN)
                    this.error("Expected ')' after expression");

                this.advance();
                return expr;

            default:
                this.error("Unexpected token in expression: " + t.type);

                // Unreachable
                return ASTNode.Literal({ type: TokenType.NUMBER, value: ``, line: 0 });
        }
    }

    private error(msg?: string) {
        throw new Error("Parser error at line " + this.peek().line + ": " + (msg || "Unexpected token"));
    }
}
