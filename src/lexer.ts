export interface Token {
    type: TokenType;
    value: string;
    line: number;
}

export enum TokenType {
    NUMBER = "NUMBER",
    PLUS = "PLUS",
    MINUS = "MINUS",
    MUL = "MUL",
    DIV = "DIV",
    LPAREN = "LPAREN",
    RPAREN = "RPAREN",
    MOD = "MOD",
    EOF = "EOF",
    IF = "IF",
    ELSE = "ELSE",
    WHILE = "WHILE",
    FOR = "FOR",
    FUNCTION = "FUNCTION",
    IDENTIFIER = "IDENTIFIER",
    STRING = "STRING",
    COMMA = "COMMA",
    LBRACE = "LBRACE",
    RBRACE = "RBRACE",
    LBRACKET = "LBRACKET",
    RBRACKET = "RBRACKET",
    ASSIGN = "ASSIGN",

    PLUS_ASSIGN = "PLUS_ASSIGN",
    MINUS_ASSIGN = "MINUS_ASSIGN",
    MUL_ASSIGN = "MUL_ASSIGN",
    DIV_ASSIGN = "DIV_ASSIGN",
    MOD_ASSIGN = "MOD_ASSIGN",

    EQ = "EQ",
    NEQ = "NEQ",
    LT = "LT",
    GT = "GT",
    LTE = "LTE",
    GTE = "GTE",
    AND = "AND",
    OR = "OR",
    NOT = "NOT",
    TRUE = "TRUE",
    FALSE = "FALSE",
    RETURN = "RETURN",
    BREAK = "BREAK",
    CONTINUE = "CONTINUE",
    SEMICOLON = "SEMICOLON",
    COLON = "COLON",
    LET = "LET",
    INC = "INC",
    DEC = "DEC",
    NULL = "NULL",
    IMPORT = "IMPORT",

    DOT = "DOT",
}

class Lexer {

    private text: string;
    private pos: number;

    private line: number;
    private column: number;

    constructor(text: string) {
        this.text = text;
        this.pos = 0;
        this.line = 1;
        this.column = 1;
    }

    private peek(n = 0): string {
        if (this.pos + n >= this.text.length)
            return "\0";

        return this.text[this.pos + n];
    }

    private advance(n = 1): void {
        for (let i = 0; i < n; i++) {
            this.pos++;
            if (this.pos > this.text.length)
                this.error();

            if (this.peek() === "\n") {
                this.line++;
                this.column = 1;
            } else {
                this.column++;
            }
        }
    }

    private error(msg?: string): void {
        throw new SyntaxError(`Invalid character at ${this.line}:${this.column}`
            + ` '${this.peek() === "\0" ? "EOF" : this.peek()}'` + (msg ? `: ${msg}` : "")
        );
    }

    public run(): Token[] {
        const tokens: Token[] = [];

        do {
            const c = this.peek();

            if (c === " " || c === "\t" || c === "\n") {
                this.advance();
            } else if (c === "+") {
                if (this.peek(1) === "+") {
                    tokens.push({ type: TokenType.INC, value: "++", line: this.line });
                    this.advance(2);
                } else if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.PLUS_ASSIGN, value: "+=", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.PLUS, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === "-") {
                if (this.peek(1) === "-") {
                    tokens.push({ type: TokenType.DEC, value: "--", line: this.line });
                    this.advance(2);
                } else if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.MINUS_ASSIGN, value: "-=", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.MINUS, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === "*") {
                if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.MUL_ASSIGN, value: "*=", line: this.line });
                    this.advance(2);
                }
                else {
                    tokens.push({ type: TokenType.MUL, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === "%") {
                if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.MOD_ASSIGN, value: "%=", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.MOD, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === ":") {
                tokens.push({ type: TokenType.COLON, value: ":", line: this.line});
                this.advance();
            } else if (c === "/") {
                if (this.peek(1) === "/") {
                    while (this.peek() !== "\n" && this.peek() !== "\0") {
                        this.advance();
                    }
                }
                else if (this.peek(1) === "*") {
                    this.advance(2);
                    while (this.peek() !== "*" || this.peek(1) !== "/") {
                        this.advance();
                    }
                    this.advance(2);
                }
                else if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.DIV_ASSIGN, value: "/=", line: this.line });
                    this.advance(2);
                }
                else {
                    tokens.push({ type: TokenType.DIV, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === "(") {
                tokens.push({ type: TokenType.LPAREN, value: c, line: this.line });
                this.advance();
            } else if (c === ")") {
                tokens.push({ type: TokenType.RPAREN, value: c, line: this.line });
                this.advance();
            } else if (c === "{") {
                tokens.push({ type: TokenType.LBRACE, value: c, line: this.line });
                this.advance();
            } else if (c === "}") {
                tokens.push({ type: TokenType.RBRACE, value: c, line: this.line });
                this.advance();
            } else if (c === "[") {
                tokens.push({ type: TokenType.LBRACKET, value: c, line: this.line });
                this.advance();
            } else if (c === "]") {
                tokens.push({ type: TokenType.RBRACKET, value: c, line: this.line });
                this.advance();
            } else if (c === ",") {
                tokens.push({ type: TokenType.COMMA, value: c, line: this.line });
                this.advance();
            } else if (c === "=") {
                if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.EQ, value: "==", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.ASSIGN, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === "<") {
                if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.LTE, value: "<=", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.LT, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === ">") {
                if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.GTE, value: ">=", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.GT, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === "!") {
                if (this.peek(1) === "=") {
                    tokens.push({ type: TokenType.NEQ, value: "!=", line: this.line });
                    this.advance(2);
                } else {
                    tokens.push({ type: TokenType.NOT, value: c, line: this.line });
                    this.advance();
                }
            } else if (c === ";") {
                tokens.push({ type: TokenType.SEMICOLON, value: c, line: this.line });
                this.advance();
            } else if (c === "&") {
                if (this.peek(1) === "&") {
                    tokens.push({ type: TokenType.AND, value: "&&", line: this.line });
                    this.advance(2);
                } else {
                    this.error();
                }
            } else if (c === "|") {
                if (this.peek(1) === "|") {
                    tokens.push({ type: TokenType.OR, value: "||", line: this.line });
                    this.advance(2);
                } else {
                    this.error();
                }
            } else if (c === '"') {
                let value = "";
                this.advance();
                while (this.peek() !== '"') {
                    if (this.peek() === "\\") {
                        this.advance();
                        if (this.peek() === "n") {
                            value += "\n";
                        } else if (this.peek() === "t") {
                            value += "\t";
                        } else if (this.peek() === "r") {
                            value += "\r";
                        } else if (this.peek() === "0") {
                            value += "\0";
                        } else if (this.peek() === "\\") {
                            value += "\\";
                        } else if (this.peek() === '"') {
                            value += '"';
                        } else {
                            this.error("Invalid escape character");
                        }

                        this.advance();
                    } else {
                        value += this.peek();
                        this.advance();
                    }
                }
                this.advance();
                tokens.push({ type: TokenType.STRING, value, line: this.line });
            } else if (c === '.') {
                let value = c;
                this.advance();

                while (/[0-9]/.test(this.peek())) {
                    value += this.peek();
                    this.advance();
                }

                if (value === ".") {
                    tokens.push({ type: TokenType.DOT, value, line: this.line });
                } else {
                    tokens.push({ type: TokenType.NUMBER, value, line: this.line });
                }
            }
            else if (/[0-9]/.test(c)) {
                let value = "";
                while (/[0-9]/.test(this.peek())) {
                    value += this.peek();
                    this.advance();
                }

                if (this.peek() === ".") {
                    value += ".";
                    this.advance();
                    while (/[0-9]/.test(this.peek())) {
                        value += this.peek();
                        this.advance();
                    }
                }

                tokens.push({ type: TokenType.NUMBER, value, line: this.line });
            } else if (/[a-zA-Z_]/.test(c)) {
                let value = "";
                while (/[a-zA-Z_0-9]/.test(this.peek())) {
                    value += this.peek();
                    this.advance();
                }
                if (value === "if") {
                    tokens.push({ type: TokenType.IF, value, line: this.line });
                } else if (value === "else") {
                    tokens.push({ type: TokenType.ELSE, value, line: this.line });
                } else if (value === "while") {
                    tokens.push({ type: TokenType.WHILE, value, line: this.line });
                } else if (value === "for") {
                    tokens.push({ type: TokenType.FOR, value, line: this.line });
                } else if (value === "function") {
                    tokens.push({ type: TokenType.FUNCTION, value, line: this.line });
                } else if (value === "true") {
                    tokens.push({ type: TokenType.TRUE, value, line: this.line });
                } else if (value === "false") {
                    tokens.push({ type: TokenType.FALSE, value, line: this.line });
                } else if (value === "return") {
                    tokens.push({ type: TokenType.RETURN, value, line: this.line });
                } else if (value === "break") {
                    tokens.push({ type: TokenType.BREAK, value, line: this.line });
                } else if (value === "continue") {
                    tokens.push({ type: TokenType.CONTINUE, value, line: this.line });
                } else if (value === "let") {
                    tokens.push({ type: TokenType.LET, value, line: this.line });
                } else if (value === "null") {
                    tokens.push({ type: TokenType.NULL, value, line: this.line });
                } else if (value === "import") {
                    tokens.push({ type: TokenType.IMPORT, value, line: this.line });
                } else {
                    tokens.push({ type: TokenType.IDENTIFIER, value, line: this.line });
                }
            } else if (c === "\0") {
                tokens.push({ type: TokenType.EOF, value: c, line: this.line });
            } else {
                this.error();
            }
        }
        while (this.pos <= this.text.length && tokens.at(-1)?.type !== TokenType.EOF);

        return tokens;
    }
}

export default Lexer;