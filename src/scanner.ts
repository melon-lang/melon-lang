export enum TokenType {
    // Single-character tokens.
    TOKEN_LEFT_PAREN, TOKEN_RIGHT_PAREN,
    TOKEN_LEFT_BRACE, TOKEN_RIGHT_BRACE,
    TOKEN_COMMA, TOKEN_DOT, TOKEN_MINUS, TOKEN_PLUS,
    TOKEN_SEMICOLON, TOKEN_SLASH, TOKEN_STAR,
    // One or two character tokens.
    TOKEN_BANG, TOKEN_BANG_EQUAL,
    TOKEN_EQUAL, TOKEN_EQUAL_EQUAL,
    TOKEN_GREATER, TOKEN_GREATER_EQUAL,
    TOKEN_LESS, TOKEN_LESS_EQUAL,
    // Literals.
    TOKEN_IDENTIFIER, TOKEN_STRING, TOKEN_NUMBER,
    // Keywords.
    TOKEN_AND, TOKEN_CLASS, TOKEN_ELSE, TOKEN_FALSE,
    TOKEN_FOR, TOKEN_FUN, TOKEN_IF, TOKEN_NIL, TOKEN_OR,
    TOKEN_PRINT, TOKEN_RETURN, TOKEN_SUPER, TOKEN_THIS,
    TOKEN_TRUE, TOKEN_VAR, TOKEN_WHILE,

    TOKEN_ERROR, TOKEN_EOF
};

export class Token {
    public readonly type: TokenType;
    public readonly start: number;
    public readonly length: number;
    public readonly line: number;

    constructor(type, start, length, line) {
        this.type = type;
        this.start = start;
        this.length = length;
        this.line = line;
    }
};

class Scanner {
    private source: string;

    private start: number;
    private current: number;

    private line: number;

    constructor(source: string) {
        this.source = source;
        this.line = 1;

        this.start = 0;
        this.current = 0;
    }

    scan(): Token[] {
        const tokens = [];
        while (!this.atTheEnd()) {
            this.start = this.current;
            tokens.push(this.scanToken());
        }

        tokens.push(new Token(TokenType.TOKEN_EOF, this.current, 0, this.line));
        return tokens;
    }

    scanToken(): Token {
        this.skipWhitespace();
        this.start = this.current;

        if (this.atTheEnd()) return this.makeToken(TokenType.TOKEN_EOF);

        const c = this.advance();
        if (this.isDigit(c)) return this.number();
        if (this.isAlpha(c)) return this.identifier();

        switch (c) {
            case '(': return this.makeToken(TokenType.TOKEN_LEFT_PAREN);
            case ')': return this.makeToken(TokenType.TOKEN_RIGHT_PAREN);
            case '{': return this.makeToken(TokenType.TOKEN_LEFT_BRACE);
            case '}': return this.makeToken(TokenType.TOKEN_RIGHT_BRACE);
            case ';': return this.makeToken(TokenType.TOKEN_SEMICOLON);
            case ',': return this.makeToken(TokenType.TOKEN_COMMA);
            case '.': return this.makeToken(TokenType.TOKEN_DOT);
            case '-': return this.makeToken(TokenType.TOKEN_MINUS);
            case '+': return this.makeToken(TokenType.TOKEN_PLUS);
            case '/': return this.makeToken(TokenType.TOKEN_SLASH);
            case '*': return this.makeToken(TokenType.TOKEN_STAR);
            case '!': return this.makeToken(this.match('=') ? TokenType.TOKEN_BANG_EQUAL : TokenType.TOKEN_BANG);
            case '=': return this.makeToken(this.match('=') ? TokenType.TOKEN_EQUAL_EQUAL : TokenType.TOKEN_EQUAL);
            case '<': return this.makeToken(this.match('=') ? TokenType.TOKEN_LESS_EQUAL : TokenType.TOKEN_LESS);
            case '>': return this.makeToken(this.match('=') ? TokenType.TOKEN_GREATER_EQUAL : TokenType.TOKEN_GREATER);
            case '"': return this.string();
        }
        
        return this.errorToken('Unexpected character.');
    }

    private number(): Token {
        while (this.isDigit(this.peek())) this.advance();

        if (this.peek() == '.' && this.isDigit(this.peekNext())) {
            this.advance();

            while (this.isDigit(this.peek())) this.advance();
        }

        return this.makeToken(TokenType.TOKEN_NUMBER);
    }

    private identifier(): Token {
        while (this.isAlphaNumeric(this.peek())) this.advance();

        return this.makeToken(this.identifierType());
    }

    private identifierType(): TokenType {
        switch (this.source.charAt(this.start)) {
            case 'a': return this.checkKeyword(1, 2, 'nd', TokenType.TOKEN_AND);
            case 'c': return this.checkKeyword(1, 4, 'lass', TokenType.TOKEN_CLASS);
            case 'e': return this.checkKeyword(1, 3, 'lse', TokenType.TOKEN_ELSE);
            case 'f':
                if (this.current - this.start > 1) {
                    switch (this.source.charAt(this.start + 1)) {
                        case 'a': return this.checkKeyword(2, 3, 'lse', TokenType.TOKEN_FALSE);
                        case 'o': return this.checkKeyword(2, 1, 'r', TokenType.TOKEN_FOR);
                        case 'u': return this.checkKeyword(2, 1, 'n', TokenType.TOKEN_FUN);
                    }
                }
                break;
            case 'i': return this.checkKeyword(1, 1, 'f', TokenType.TOKEN_IF);
            case 'n': return this.checkKeyword(1, 2, 'il', TokenType.TOKEN_NIL);
            case 'o': return this.checkKeyword(1, 1, 'r', TokenType.TOKEN_OR);
            case 'p': return this.checkKeyword(1, 4, 'rint', TokenType.TOKEN_PRINT);
            case 'r': return this.checkKeyword(1, 5, 'eturn', TokenType.TOKEN_RETURN);
            case 's': return this.checkKeyword(1, 4, 'uper', TokenType.TOKEN_SUPER);
            case 't':
                if (this.current - this.start > 1) {
                    switch (this.source.charAt(this.start + 1)) {
                        case 'h': return this.checkKeyword(2, 2, 'is', TokenType.TOKEN_THIS);
                        case 'r': return this.checkKeyword(2, 2, 'ue', TokenType.TOKEN_TRUE);
                    }
                }
                break;
            case 'l': return this.checkKeyword(1, 2, 'et', TokenType.TOKEN_VAR);
            case 'w': return this.checkKeyword(1, 4, 'hile', TokenType.TOKEN_WHILE);
        }

        return TokenType.TOKEN_IDENTIFIER;
    }

    private checkKeyword(start: number, length: number, rest: string, type: TokenType): TokenType {
        if (this.current - this.start == start + length && this.source.substr(this.start + start, length) == rest) {
            return type;
        }

        return TokenType.TOKEN_IDENTIFIER;
    }


    private isAlpha(c: string): boolean {
        return (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            c == '_';
    }

    private isAlphaNumeric(c: string): boolean {
        return this.isAlpha(c) || this.isDigit(c);
    }

    private isDigit(c: string): boolean {
        return c >= '0' && c <= '9';
    }

    private string(): Token {
        while (this.peek() != '"' && !this.atTheEnd()) {
            if (this.peek() == '\n') this.line++;
            this.advance();
        }

        if (this.atTheEnd()) return this.errorToken('Unterminated string.');

        this.advance();
        return this.makeToken(TokenType.TOKEN_STRING);
    }

    private skipWhitespace(): void {
        while (true) {
            const c = this.peek();
            switch (c) {
                case ' ':
                case '\r':
                case '\t':
                    this.advance();
                    break;
                case '\n':
                    this.line++;
                    this.advance();
                    break;
                case '/':
                    if (this.peekNext() == '/') {
                        while (this.peek() != '\n' && !this.atTheEnd()) this.advance();
                    } else {
                        return;
                    }
                    break;
                default:
                    return;
            }
        }
    }

    private peekNext(): string {
        if (this.current + 1 >= this.source.length) return '\0';
        return this.source.charAt(this.current + 1);
    }

    private peek(): string {
        return this.source.charAt(this.current);
    }

    private match(expected: string): boolean {
        if (this.atTheEnd()) return false;
        if (this.source.charAt(this.current) != expected) return false;

        this.current++;
        return true;
    }

    advance(): string {
        this.current++;
        return this.source.charAt(this.current - 1);
    }

    private atTheEnd(): boolean {
        return this.current >= this.source.length;
    }

    private makeToken(type: TokenType): Token {
        return new Token(type, this.start, this.current - this.start, this.line);
    }

    private errorToken(message: string): Token {
        return new Token(TokenType.TOKEN_ERROR, 0, message.length, this.line);
    }
}

export default Scanner;