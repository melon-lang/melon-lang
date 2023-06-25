import Scanner, { TokenType, Token } from "./scanner.js";
import { Chunk } from "./common.js";
import { Opcode } from "./common.js";
import { StringObj, Value } from "./value.js";

enum Precedence {
    PREC_NONE,
    PREC_ASSIGNMENT,  // =
    PREC_OR,          // or
    PREC_AND,         // and
    PREC_EQUALITY,    // == !=
    PREC_COMPARISON,  // < > <= >=
    PREC_TERM,        // + -
    PREC_FACTOR,      // * /
    PREC_UNARY,       // ! -
    PREC_CALL,        // . ()
    PREC_PRIMARY
};

interface ParseRule {
    prefix: string;
    infix: string;
    precedence: Precedence;
};

const parseRule = (args): ParseRule => {
    return {
        prefix: args[0],
        infix: args[1],
        precedence: args[2]
    };
}

const rules = {
    [TokenType.TOKEN_LEFT_PAREN]: parseRule(['grouping', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_RIGHT_PAREN]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_LEFT_BRACE]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_RIGHT_BRACE]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_COMMA]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_DOT]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_MINUS]: parseRule(['unary', 'binary', Precedence.PREC_TERM]),
    [TokenType.TOKEN_PLUS]: parseRule(['NULL', 'binary', Precedence.PREC_TERM]),
    [TokenType.TOKEN_SEMICOLON]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_SLASH]: parseRule(['NULL', 'binary', Precedence.PREC_FACTOR]),
    [TokenType.TOKEN_STAR]: parseRule(['NULL', 'binary', Precedence.PREC_FACTOR]),
    [TokenType.TOKEN_BANG]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_BANG_EQUAL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_EQUAL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_EQUAL_EQUAL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_GREATER]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_GREATER_EQUAL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_LESS]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_LESS_EQUAL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_IDENTIFIER]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_STRING]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_NUMBER]: parseRule(['number', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_AND]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_CLASS]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_ELSE]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_FALSE]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_FOR]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_FUN]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_IF]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_NIL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_OR]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_PRINT]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_RETURN]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_SUPER]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_THIS]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_TRUE]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_VAR]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_WHILE]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_ERROR]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_EOF]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_FALSE]: parseRule(['literal', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_TRUE]: parseRule(['literal', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_NIL]: parseRule(['literal', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_BANG]: parseRule(['unary', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_BANG_EQUAL]: parseRule(['NULL', 'binary', Precedence.PREC_EQUALITY]),
    [TokenType.TOKEN_EQUAL]: parseRule(['NULL', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_EQUAL_EQUAL]: parseRule(['NULL', 'binary', Precedence.PREC_EQUALITY]),
    [TokenType.TOKEN_GREATER]: parseRule(['NULL', 'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_GREATER_EQUAL]: parseRule(['NULL', 'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_LESS]: parseRule(['NULL', 'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_LESS_EQUAL]: parseRule(['NULL', 'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_STRING]: parseRule(['string', 'NULL', Precedence.PREC_NONE]),
    [TokenType.TOKEN_IDENTIFIER]: parseRule(['variable', 'NULL', Precedence.PREC_NONE]),
};

class Parser {
    private previous: Token;
    private current: Token;
    private scanner: Scanner;
    private hadError: boolean;

    constructor(source: string) {
        this.scanner = new Scanner(source);
        this.hadError = false;
    }

    consume(type: TokenType, message: string): void {
        if (this.current.type == type) {
            this.advance();
            return;
        }

        this.errorAtCurrent(message);
    }

    advance(): void {
        this.previous = this.current;

        while (true) {
            this.current = this.scanner.scanToken();
            if (this.current.type != TokenType.TOKEN_ERROR) break;

            this.errorAtCurrent('Invalid token.');
        }
    }

    private errorAtCurrent(message: string) {
        this.errorAt(this.current, message);
    }

    private errorAt(token: Token, message: string) {
        console.log(`[line ${token.line}] Error${token.type} at ${token.start}: ${message}`);
        this.hadError = true;
    }

    get previousToken(): Token {
        return this.previous;
    }

    get currentToken(): Token {
        return this.current;
    }
}

interface Local {
    name: Token;
    depth: number;
}

class Compiler {

    private parser: Parser;
    private chunk: Chunk;
    private source: string;
    private locals: Local[];
    private localCount: number;
    private scopeDepth: number;

    compile(source: string): Chunk {
        this.source = source;
        this.parser = new Parser(source);
        this.chunk = new Chunk();
        this.locals = [];

        this.parser.advance();

        while (!this.match(TokenType.TOKEN_EOF)) {
            this.declaration();
        }

        this.parser.consume(TokenType.TOKEN_EOF, "Expect end of expression.");

        this.endCompiler();

        return this.chunk;
    }

    private declaration(): void {
        if (this.match(TokenType.TOKEN_VAR)) {
            this.varDeclaration();
        } else {
            this.statement();
        }
    }

    private statement(): void {
        if (this.match(TokenType.TOKEN_PRINT)) {
            this.printStatement();
        } else if (this.match(TokenType.TOKEN_IF)) {
            this.ifStatement();
        } else if (this.match(TokenType.TOKEN_LEFT_BRACE)) {
            this.beginScope();
            this.block();
            this.endScope();
        }
        else {
            this.expressionStatement();
        }
    }

    private ifStatement(): void {
        this.parser.consume(TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'if'.");
        this.expression();
        this.parser.consume(TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after condition.");

        const thenJump: number = this.emitJump(Opcode.OP_JUMP_IF_FALSE);
        this.emitByte(Opcode.OP_POP);
        this.statement();

        const elseJump: number = this.emitJump(Opcode.OP_JUMP);

        this.patchJump(thenJump);
        this.emitByte(Opcode.OP_POP);

        if (this.match(TokenType.TOKEN_ELSE)) this.statement();
        this.patchJump(elseJump);
    }

    private emitJump(opcode: Opcode): number {
        this.emitByte(opcode);
        this.emitByte(0xff);
        this.emitByte(0xff);
        return this.chunk.size - 2;
    }

    private patchJump(offset: number): void {
        const jump: number = this.chunk.size - offset - 2;

        if (jump > 0xffff) {
            throw Error("Too much code to jump over.");
        }

        this.chunk.view[offset] = (jump >> 8) & 0xff;
        this.chunk.view[offset + 1] = jump & 0xff;
    }

    private beginScope(): void {
        this.scopeDepth++;
    }

    private endScope(): void {
        this.scopeDepth--;

        while (this.localCount > 0 && this.locals[this.localCount - 1].depth > this.scopeDepth) {
            this.emitByte(Opcode.OP_POP);
            this.localCount--;
        }
    }

    private block(): void {
        while ((this.parser.currentToken.type != TokenType.TOKEN_RIGHT_BRACE) && !this.match(TokenType.TOKEN_EOF)) {
            this.declaration();
        }

        this.parser.consume(TokenType.TOKEN_RIGHT_BRACE, "Expect '}' after block.");
    }

    private varDeclaration(): void {
        const global: number = this.parseVariable("Expect variable name.");

        if (this.match(TokenType.TOKEN_EQUAL)) {
            this.expression();
        } else {
            this.emitByte(Opcode.OP_NIL);
        }

        this.parser.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after variable declaration.");
        this.defineVariable(global);
    }

    private defineVariable(global: number): void {
        this.emitBytes(Opcode.OP_DEFINE_GLOBAL, global);
    }

    private parseVariable(errorMessage: string): number {
        this.parser.consume(TokenType.TOKEN_IDENTIFIER, errorMessage);

        this.declareVariable();
        if (this.scopeDepth > 0) {
            this.markInitialized();
            return 0
        };

        return this.identifierConstant(this.parser.previousToken);
    }

    private markInitialized(): void {
        this.locals[this.localCount - 1].depth = this.scopeDepth;
    }

    private declareVariable(): void {
        if (this.scopeDepth == 0) return;

        const name: Token = this.parser.previousToken;
        for (let i = this.locals.length - 1; i >= 0; i--) {
            const local: Local = this.locals[i];
            if (local.depth != -1 && local.depth < this.scopeDepth) break;

            if (this.sourceSubstring(name.start, name.length) == this.sourceSubstring(local.name.start, local.name.length)) {
                throw Error("Already variable with this name in this scope.");
            }
        }

        this.locals.push({ name, depth: -1 });
    }

    private identifierConstant(token: Token): number {
        return this.chunk.makeConstant(Value.obj(new StringObj(this.sourceSubstring(token.start, token.length))));
    }

    private printStatement(): void {
        this.expression();
        this.parser.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after value.");
        this.emitByte(Opcode.OP_PRINT);
    }

    private expressionStatement(): void {
        this.expression();
        this.parser.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after value.");
        this.emitByte(Opcode.OP_POP);
    }

    private match(type: TokenType): boolean {
        if (!(this.parser.currentToken.type == type)) return false;

        this.parser.advance();
        return true;
    }

    private expression(): void {
        this.precedence(Precedence.PREC_ASSIGNMENT);
    }

    private variable(canAssign: boolean): void {
        this.namedVariable(this.parser.previousToken, canAssign);
    }

    private namedVariable(name: Token, canAssign: boolean): void {
        let getOp: Opcode, setOp: Opcode;
        let arg: number = this.resolveLocal(name);

        if (arg != -1) {
            getOp = Opcode.OP_GET_LOCAL;
            setOp = Opcode.OP_SET_LOCAL;
        } else {
            arg = this.identifierConstant(name);
            getOp = Opcode.OP_GET_GLOBAL;
            setOp = Opcode.OP_SET_GLOBAL;
        }

        if (canAssign && this.match(TokenType.TOKEN_EQUAL)) {
            this.expression();
            this.emitBytes(setOp, arg);
        } else {
            this.emitBytes(getOp, arg);
        }
    }


    private resolveLocal(name: Token): number {
        for (let i = this.localCount - 1; i >= 0; i--) {
            const local: Local = this.locals[i];
            if (this.sourceSubstring(name.start, name.length) == this.sourceSubstring(local.name.start, local.name.length)) {
                if (local.depth == -1) {
                    throw Error("Cannot read local variable in its own initializer.");
                }
                return i;
            }
        }

        return -1;
    }

    private string(): void {
        const value: string = this.sourceSubstring(this.parser.previousToken.start + 1, this.parser.previousToken.length - 2);
        this.emitConstant(Value.obj(new StringObj(value)));
    }

    private literal(): void {
        switch (this.parser.previousToken.type) {
            case TokenType.TOKEN_FALSE: this.emitByte(Opcode.OP_FALSE); break;
            case TokenType.TOKEN_NIL: this.emitByte(Opcode.OP_NIL); break;
            case TokenType.TOKEN_TRUE: this.emitByte(Opcode.OP_TRUE); break;
            default: return;
        }
    }

    private number(): void {
        const value: number = Number(this.sourceSubstring(this.parser.previousToken.start, this.parser.previousToken.length));

        this.emitConstant(Value.number(value));
    }

    private grouping(): void {
        this.expression();
        this.parser.consume(TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after expression.");
    }

    private unary(): void {
        const operatorType: TokenType = this.parser.previousToken.type;

        this.precedence(Precedence.PREC_UNARY);

        switch (operatorType) {
            case TokenType.TOKEN_MINUS: this.emitByte(Opcode.OP_NEGATE); break;
            case TokenType.TOKEN_BANG: this.emitByte(Opcode.OP_NOT); break;
            default: return;
        }

    }

    private binary(): void {
        const operatorType: TokenType = this.parser.previousToken.type;

        const rule: ParseRule = rules[operatorType];
        this.precedence(rule.precedence + 1);

        switch (operatorType) {
            case TokenType.TOKEN_PLUS: this.emitByte(Opcode.OP_ADD); break;
            case TokenType.TOKEN_MINUS: this.emitByte(Opcode.OP_SUBTRACT); break;
            case TokenType.TOKEN_STAR: this.emitByte(Opcode.OP_MULTIPLY); break;
            case TokenType.TOKEN_SLASH: this.emitByte(Opcode.OP_DIVIDE); break;
            case TokenType.TOKEN_BANG_EQUAL: this.emitBytes(Opcode.OP_EQUAL, Opcode.OP_NOT); break;
            case TokenType.TOKEN_EQUAL_EQUAL: this.emitByte(Opcode.OP_EQUAL); break;
            case TokenType.TOKEN_GREATER: this.emitByte(Opcode.OP_GREATER); break;
            case TokenType.TOKEN_GREATER_EQUAL: this.emitBytes(Opcode.OP_LESS, Opcode.OP_NOT); break;
            case TokenType.TOKEN_LESS: this.emitByte(Opcode.OP_LESS); break;
            case TokenType.TOKEN_LESS_EQUAL: this.emitBytes(Opcode.OP_GREATER, Opcode.OP_NOT); break;

            default: return;
        }
    }

    private precedence(precedence: Precedence): void {
        this.parser.advance();

        const prefixRule = rules[this.parser.previousToken.type].prefix;
        if (prefixRule == 'NULL') {
            throw new Error("Expect expression.");
        }

        const canAssign = precedence <= Precedence.PREC_ASSIGNMENT;
        this[prefixRule](canAssign);

        while (precedence <= rules[this.parser.currentToken.type].precedence) {
            this.parser.advance();
            const infixRule = rules[this.parser.previousToken.type].infix;
            this[infixRule](canAssign);
        }

        if (canAssign && this.match(TokenType.TOKEN_EQUAL)) {
            throw new Error("Invalid assignment target.");
        }
    }

    private endCompiler(): void {
        this.emitReturn();
    }

    private emitByte(byte: number): void {
        this.chunk.write(byte, this.parser.previousToken.line);
    }

    private emitConstant(value: Value): void {
        this.emitBytes(Opcode.OP_CONSTANT, this.chunk.makeConstant(value));
    }

    private emitReturn(): void {
        this.emitByte(Opcode.OP_RETURN);
    }

    private emitBytes(byte1: number, byte2: number): void {
        this.emitByte(byte1);
        this.emitByte(byte2);
    }

    private sourceSubstring(start: number, length: number): string {
        return this.source.substring(start, start + length);
    }
}



export default Compiler;