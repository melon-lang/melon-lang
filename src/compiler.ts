import Scanner, {TokenType, Token} from "./scanner.js";
import { Chunk } from "./common.js";
import { Opcode } from "./common.js";

enum Precedence{
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

interface ParseRule{
    prefix: string;
    infix: string;
    precedence: Precedence;
};

const parseRule = (args):ParseRule => {
    return {
        prefix: args[0],
        infix: args[1],
        precedence: args[2]
    };
}

const rules = {
    [TokenType.TOKEN_LEFT_PAREN]    : parseRule(['grouping', 'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_RIGHT_PAREN]   : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_LEFT_BRACE]    : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]), 
    [TokenType.TOKEN_RIGHT_BRACE]   : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_COMMA]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_DOT]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_MINUS]         : parseRule(['unary',    'binary',  Precedence.PREC_TERM]),
    [TokenType.TOKEN_PLUS]          : parseRule(['NULL',     'binary',  Precedence.PREC_TERM]),
    [TokenType.TOKEN_SEMICOLON]     : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_SLASH]         : parseRule(['NULL',     'binary', Precedence.PREC_FACTOR]),
    [TokenType.TOKEN_STAR]          : parseRule(['NULL',     'binary', Precedence.PREC_FACTOR]),
    [TokenType.TOKEN_BANG]          : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_BANG_EQUAL]    : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_EQUAL]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_EQUAL_EQUAL]   : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_GREATER]       : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_GREATER_EQUAL] : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_LESS]          : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_LESS_EQUAL]    : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_IDENTIFIER]    : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_STRING]        : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_NUMBER]        : parseRule(['number',   'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_AND]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_CLASS]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_ELSE]          : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_FALSE]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_FOR]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_FUN]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_IF]            : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_NIL]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_OR]            : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_PRINT]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_RETURN]        : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_SUPER]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_THIS]          : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_TRUE]          : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_VAR]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_WHILE]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_ERROR]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_EOF]           : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_FALSE]         : parseRule(['literal',  'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_TRUE]          : parseRule(['literal',  'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_NIL]           : parseRule(['literal',  'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_BANG]          : parseRule(['unary',    'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_BANG_EQUAL]    : parseRule(['NULL',     'binary', Precedence.PREC_EQUALITY]),
    [TokenType.TOKEN_EQUAL]         : parseRule(['NULL',     'NULL',   Precedence.PREC_NONE]),
    [TokenType.TOKEN_EQUAL_EQUAL]   : parseRule(['NULL',     'binary', Precedence.PREC_EQUALITY]),
    [TokenType.TOKEN_GREATER]       : parseRule(['NULL',     'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_GREATER_EQUAL] : parseRule(['NULL',     'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_LESS]          : parseRule(['NULL',     'binary', Precedence.PREC_COMPARISON]),
    [TokenType.TOKEN_LESS_EQUAL]    : parseRule(['NULL',     'binary', Precedence.PREC_COMPARISON]),
};

class Parser {
    private previous: Token;
    private current: Token;
    private scanner: Scanner;
    private hadError: boolean;

    constructor(source: string){    
        this.scanner = new Scanner(source);
        this.hadError = false;
    }

    consume(type: TokenType, message: string): void{
        if(this.current.type == type){
            this.advance();
            return;
        }
        
        this.errorAtCurrent(message);
    }

    advance(): void{
        this.previous = this.current;

        while(true){
            this.current = this.scanner.scanToken();
            if(this.current.type != TokenType.TOKEN_ERROR) break;

            this.errorAtCurrent('Invalid token.');
        }
    }
 
    private errorAtCurrent(message: string){
        this.errorAt(this.current, message);
    }

    private errorAt(token: Token, message: string){
        console.log(`[line ${token.line}] Error${token.type} at ${token.start}: ${message}`);
        this.hadError = true;
    }

    get previousToken(): Token{
        return this.previous;
    }

    get currentToken(): Token{
        return this.current;
    }  
}

class Compiler{

    private parser: Parser;
    private chunk: Chunk;
    private source: string;
    
    compile(source:string): Chunk{
        this.source = source;
        this.parser = new Parser(source);
        this.chunk = new Chunk();

        this.parser.advance();
        this.expression();

        this.parser.consume(TokenType.TOKEN_EOF, "Expect end of expression.");

        this.endCompiler();

        return this.chunk;
    }

    private expression(): void{
        this.precedence(Precedence.PREC_ASSIGNMENT);
    }

    private literal(): void {
        switch(this.parser.previousToken.type){
            case TokenType.TOKEN_FALSE: this.emitByte(Opcode.OP_FALSE); break;
            case TokenType.TOKEN_NIL: this.emitByte(Opcode.OP_NIL); break;
            case TokenType.TOKEN_TRUE: this.emitByte(Opcode.OP_TRUE); break;
            default: return;   
        }
    }

    private number():void{
        const value : number = Number(this.sourceSubstring(this.parser.previousToken.start, this.parser.previousToken.length));

        this.emitConstant(value);
    }

    private grouping(): void{
        this.expression();
        this.parser.consume(TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after expression.");
    }

    private unary(): void{
        const operatorType: TokenType = this.parser.previousToken.type;

        this.precedence(Precedence.PREC_UNARY);

        switch(operatorType){
            case TokenType.TOKEN_MINUS: this.emitByte(Opcode.OP_NEGATE); break;
            case TokenType.TOKEN_BANG: this.emitByte(Opcode.OP_NOT); break;
            default: return;
        }

    }

    private binary(): void{
        const operatorType: TokenType = this.parser.previousToken.type;

        const rule: ParseRule = rules[operatorType];
        this.precedence(rule.precedence + 1);

        switch(operatorType){
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

    private precedence(precedence: Precedence): void{
        this.parser.advance();

        const prefixRule = rules[this.parser.previousToken.type].prefix;
        if(prefixRule == 'NULL'){
            throw new Error("Expect expression.");
        }

        this[prefixRule]();

        while(precedence <= rules[this.parser.currentToken.type].precedence){
            this.parser.advance();
            const infixRule = rules[this.parser.previousToken.type].infix;
            this[infixRule]();
        }
    }

    private endCompiler(): void{
        this.emitReturn();
    }

    private emitByte(byte: number): void{
        this.chunk.write(byte, this.parser.previousToken.line);
    }

    private emitConstant(value: number): void{
        this.emitBytes(Opcode.OP_CONSTANT, this.chunk.makeConstant(value));
    }

    private emitReturn(): void{
        this.emitByte(Opcode.OP_RETURN);
    }

    private emitBytes(byte1: number, byte2: number): void{
        this.emitByte(byte1);
        this.emitByte(byte2);
    }

    private sourceSubstring(start: number, length: number): string{
        return this.source.substring(start, start+length);
    }
}



export default Compiler;