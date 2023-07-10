import Scanner, { TokenType, Token } from './scanner';
import { Chunk } from './chunk';
import { Opcode } from './vm';
import Value from './value';

interface Local {
	name: Token;
	depth: number;
}

enum Precedence {
	PREC_NONE,
	PREC_ASSIGNMENT, // =
	PREC_OR, // or
	PREC_AND, // and
	PREC_EQUALITY, // == !=
	PREC_COMPARISON, // < > <= >=
	PREC_TERM, // + -
	PREC_FACTOR, // * /
	PREC_UNARY, // ! -
	PREC_CALL, // . ()
	PREC_PRIMARY,
}

interface ParseRule {
	prefix: string;
	infix: string;
	precedence: Precedence;
}

/* eslint-disable no-console, no-control-regex*/
const ParseRules = {
	[TokenType.TOKEN_LEFT_PAREN]: {
		prefix: 'grouping',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_RIGHT_PAREN]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_LEFT_BRACE]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_RIGHT_BRACE]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_COMMA]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_DOT]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_MINUS]: {
		prefix: 'unary',
		infix: 'binary',
		precedence: Precedence.PREC_TERM,
	},
	[TokenType.TOKEN_PLUS]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_TERM,
	},
	[TokenType.TOKEN_SEMICOLON]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_SLASH]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_FACTOR,
	},
	[TokenType.TOKEN_STAR]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_FACTOR,
	},
	[TokenType.TOKEN_BANG]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_BANG_EQUAL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_EQUAL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_EQUAL_EQUAL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_GREATER]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_GREATER_EQUAL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_LESS]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_LESS_EQUAL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_IDENTIFIER]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_STRING]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_NUMBER]: {
		prefix: 'number',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_AND]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_CLASS]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_ELSE]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_FALSE]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_FOR]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_FUN]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_IF]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_NIL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_OR]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_PRINT]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_RETURN]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_SUPER]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_THIS]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_TRUE]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_VAR]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_WHILE]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_ERROR]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_EOF]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_FALSE]: {
		prefix: 'literal',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_TRUE]: {
		prefix: 'literal',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_NIL]: {
		prefix: 'literal',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_BANG]: {
		prefix: 'unary',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_BANG_EQUAL]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_EQUALITY,
	},
	[TokenType.TOKEN_EQUAL]: {
		prefix: 'NULL',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_EQUAL_EQUAL]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_EQUALITY,
	},
	[TokenType.TOKEN_GREATER]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_COMPARISON,
	},
	[TokenType.TOKEN_GREATER_EQUAL]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_COMPARISON,
	},
	[TokenType.TOKEN_LESS]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_COMPARISON,
	},
	[TokenType.TOKEN_LESS_EQUAL]: {
		prefix: 'NULL',
		infix: 'binary',
		precedence: Precedence.PREC_COMPARISON,
	},
	[TokenType.TOKEN_STRING]: {
		prefix: 'string',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
	[TokenType.TOKEN_IDENTIFIER]: {
		prefix: 'variable',
		infix: 'NULL',
		precedence: Precedence.PREC_NONE,
	},
};
/* eslint-enable */

class Compiler {
	private previous: Token;
	private current: Token;
	private scanner: Scanner;

	private chunk: Chunk;
	private locals: Local[];
	private localCount: number;
	private scopeDepth: number;

	compile(source: string): Chunk {
		this.scanner = new Scanner(source);

		this.chunk = new Chunk();
		this.locals = [];

		this.advance();

		while (!this.match(TokenType.TOKEN_EOF)) {
			this.declaration();
		}

		this.consume(TokenType.TOKEN_EOF, 'Expect end of expression.');

		this.endCompiler();

		return this.chunk;
	}

	/**
	 *      DECLARATIONS, STATEMENTS, BLOCKS, EXPRESSIONS
	 */

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
		} else if (this.match(TokenType.TOKEN_WHILE)) {
			this.whileStatement();
		} else if (this.match(TokenType.TOKEN_SYSCALL)) {
			this.syscallStatement();
		} else if (this.match(TokenType.TOKEN_FOR)) {
			this.forStatement();
		} else if (this.match(TokenType.TOKEN_LEFT_BRACE)) {
			this.beginScope();
			this.block();
			this.endScope();
		} else if (this.match(TokenType.TOKEN_RETURN)) {
			this.returnStatement();
		} else {
			this.expressionStatement();
		}
	}

	private returnStatement(): void {
		if (this.current.type === TokenType.TOKEN_SEMICOLON) {
			this.emitReturn();
		} else {
			this.expression();
			this.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after return.");
			this.emitByte(Opcode.OP_RETURN);
		}
	}

	private syscallStatement(): void {
		this.expression();

		while (this.match(TokenType.TOKEN_COMMA)) {
			this.expression();
		}

		this.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after syscall.");
		this.emitByte(Opcode.OP_INTERRUPT);
	}

	private ifStatement(): void {
		this.consume(TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'if'.");
		this.expression();
		this.consume(
			TokenType.TOKEN_RIGHT_PAREN,
			"Expect ')' after condition.",
		);

		const thenJump: number = this.emitJump(Opcode.OP_JUMP_IF_FALSE);
		this.emitByte(Opcode.OP_POP);
		this.statement();

		const elseJump: number = this.emitJump(Opcode.OP_JUMP);

		this.patchJump(thenJump);
		this.emitByte(Opcode.OP_POP);

		if (this.match(TokenType.TOKEN_ELSE)) this.statement();
		this.patchJump(elseJump);
	}

	private varDeclaration(): void {
		const global: number = this.parseVariable('Expect variable name.');

		if (this.match(TokenType.TOKEN_EQUAL)) {
			this.expression();
		} else {
			this.emitByte(Opcode.OP_NIL);
		}

		this.consume(
			TokenType.TOKEN_SEMICOLON,
			"Expect ';' after variable declaration.",
		);
		this.defineVariable(global);
	}

	private printStatement(): void {
		this.expression();
		this.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after value.");
		this.emitByte(Opcode.OP_PRINT);
	}

	private expressionStatement(): void {
		this.expression();
		this.consume(TokenType.TOKEN_SEMICOLON, "Expect ';' after value.");
		this.emitByte(Opcode.OP_POP);
	}

	private forStatement(): void {
		this.beginScope();

		this.consume(TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'for'.");
		if (this.match(TokenType.TOKEN_SEMICOLON)) {
			// No initializer.
		} else if (this.match(TokenType.TOKEN_VAR)) {
			this.varDeclaration();
		} else {
			this.expressionStatement();
		}

		let loopStart = this.chunk.size;

		let exitJump = -1;
		if (!this.match(TokenType.TOKEN_SEMICOLON)) {
			this.expression();
			this.consume(
				TokenType.TOKEN_SEMICOLON,
				"Expect ';' after loop condition.",
			);

			// Jump out of the loop if the condition is false.
			exitJump = this.emitJump(Opcode.OP_JUMP_IF_FALSE);
			this.emitByte(Opcode.OP_POP); // Condition.
		}

		if (!this.match(TokenType.TOKEN_RIGHT_PAREN)) {
			const bodyJump = this.emitJump(Opcode.OP_JUMP);

			const incrementStart = this.chunk.size;
			this.expression();
			this.emitByte(Opcode.OP_POP);
			this.consume(
				TokenType.TOKEN_RIGHT_PAREN,
				"Expect ')' after for clauses.",
			);

			this.emitLoop(loopStart);
			loopStart = incrementStart;
			this.patchJump(bodyJump);
		}

		this.statement();

		this.emitLoop(loopStart);

		if (exitJump != -1) {
			this.patchJump(exitJump);
			this.emitByte(Opcode.OP_POP); // Condition.
		}

		this.endScope();
	}

	private whileStatement(): void {
		const loopStart: number = this.chunk.size;

		this.consume(TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'while'.");
		this.expression();
		this.consume(
			TokenType.TOKEN_RIGHT_PAREN,
			"Expect ')' after condition.",
		);

		const exitJump: number = this.emitJump(Opcode.OP_JUMP_IF_FALSE);

		this.emitByte(Opcode.OP_POP);

		this.statement();

		this.emitLoop(loopStart);

		this.patchJump(exitJump);
		this.emitByte(Opcode.OP_POP);
	}

	private expression(): void {
		this.precedence(Precedence.PREC_ASSIGNMENT);
	}

	private precedence(precedence: Precedence): void {
		this.advance();

		const prefixRule = ParseRules[this.previous.type].prefix;
		if (prefixRule == 'NULL') {
			throw new Error('Expect expression.');
		}

		const canAssign = precedence <= Precedence.PREC_ASSIGNMENT;
		this[prefixRule](canAssign);

		while (precedence <= ParseRules[this.current.type].precedence) {
			this.advance();
			const infixRule = ParseRules[this.previous.type].infix;
			this[infixRule](canAssign);
		}

		if (canAssign && this.match(TokenType.TOKEN_EQUAL)) {
			throw new Error('Invalid assignment target.');
		}
	}

	private variable(canAssign: boolean): void {
		this.namedVariable(this.previous, canAssign);
	}

	private string(): void {
		const value: string = this.previous.str.substring(1, this.previous.str.length - 1);
		this.emitConstant(Value.str(value));
	}

	private literal(): void {
		switch (this.previous.type) {
			case TokenType.TOKEN_FALSE:
				this.emitByte(Opcode.OP_FALSE);
				break;
			case TokenType.TOKEN_NIL:
				this.emitByte(Opcode.OP_NIL);
				break;
			case TokenType.TOKEN_TRUE:
				this.emitByte(Opcode.OP_TRUE);
				break;
			default:
				return;
		}
	}

	private number(): void {
		const value = Number(this.previous.str);

		this.emitConstant(Value.number(value));
	}

	private grouping(): void {
		this.expression();
		this.consume(
			TokenType.TOKEN_RIGHT_PAREN,
			"Expect ')' after expression.",
		);
	}

	private unary(): void {
		const operatorType: TokenType = this.previous.type;

		this.precedence(Precedence.PREC_UNARY);

		switch (operatorType) {
			case TokenType.TOKEN_MINUS:
				this.emitByte(Opcode.OP_NEGATE);
				break;
			case TokenType.TOKEN_BANG:
				this.emitByte(Opcode.OP_NOT);
				break;
			default:
				return;
		}
	}

	private binary(): void {
		const operatorType: TokenType = this.previous.type;

		const rule: ParseRule = ParseRules[operatorType];
		this.precedence(rule.precedence + 1);

		switch (operatorType) {
			case TokenType.TOKEN_PLUS:
				this.emitByte(Opcode.OP_ADD);
				break;
			case TokenType.TOKEN_MINUS:
				this.emitByte(Opcode.OP_SUBTRACT);
				break;
			case TokenType.TOKEN_STAR:
				this.emitByte(Opcode.OP_MULTIPLY);
				break;
			case TokenType.TOKEN_SLASH:
				this.emitByte(Opcode.OP_DIVIDE);
				break;
			case TokenType.TOKEN_BANG_EQUAL:
				this.emitBytes(Opcode.OP_EQUAL, Opcode.OP_NOT);
				break;
			case TokenType.TOKEN_EQUAL_EQUAL:
				this.emitByte(Opcode.OP_EQUAL);
				break;
			case TokenType.TOKEN_GREATER:
				this.emitByte(Opcode.OP_GREATER);
				break;
			case TokenType.TOKEN_GREATER_EQUAL:
				this.emitBytes(Opcode.OP_LESS, Opcode.OP_NOT);
				break;
			case TokenType.TOKEN_LESS:
				this.emitByte(Opcode.OP_LESS);
				break;
			case TokenType.TOKEN_LESS_EQUAL:
				this.emitBytes(Opcode.OP_GREATER, Opcode.OP_NOT);
				break;

			default:
				return;
		}
	}

	private block(): void {
		while (
			this.current.type != TokenType.TOKEN_RIGHT_BRACE &&
			!this.match(TokenType.TOKEN_EOF)
		) {
			this.declaration();
		}

		this.consume(TokenType.TOKEN_RIGHT_BRACE, "Expect '}' after block.");
	}

	/**
	 *      HELPER FUNCTIONS FOR PARSING & COMPILING
	 *      ::todo:: move to separate file or class
	 */

	consume(type: TokenType, message: string): void {
		if (this.current.type == type) {
			this.advance();
			return;
		}

		this.errorAtCurrent(message);
	}

	private match(type: TokenType): boolean {
		if (!(this.current.type == type)) return false;

		this.advance();
		return true;
	}

	advance(): void {
		this.previous = this.current;

		for (; ;) {
			this.current = this.scanner.scanToken();
			if (this.current.type != TokenType.TOKEN_ERROR) break;

			this.errorAtCurrent('Invalid token.');
		}
	}

	/**
	 *      ERROR HANDLING
	 */

	private errorAtCurrent(message: string): void {
		this.errorAt(this.current, message);
	}

	private errorAt(token: Token, message: string): void {
		throw Error(
			`[line ${token.line}] Error${token.type} at ${token.str}: ${message}`,
		);
	}

	/**
	 *      VARIABLES & LOCALS
	 */

	private beginScope(): void {
		this.scopeDepth++;
	}

	private endScope(): void {
		this.scopeDepth--;

		while (
			this.localCount > 0 &&
			this.locals[this.localCount - 1].depth > this.scopeDepth
		) {
			this.emitByte(Opcode.OP_POP);
			this.localCount--;
		}
	}

	private defineVariable(global: number): void {
		this.emitBytes(Opcode.OP_DEFINE_GLOBAL, global);
	}

	private parseVariable(errorMessage: string): number {
		this.consume(TokenType.TOKEN_IDENTIFIER, errorMessage);

		this.declareVariable();
		if (this.scopeDepth > 0) {
			this.markInitialized();
			return 0;
		}

		return this.identifierConstant(this.previous);
	}

	private markInitialized(): void {
		this.locals[this.localCount - 1].depth = this.scopeDepth;
	}

	private declareVariable(): void {
		if (this.scopeDepth == 0) return;

		const name: Token = this.previous;
		for (let i = this.locals.length - 1; i >= 0; i--) {
			const local: Local = this.locals[i];
			if (local.depth != -1 && local.depth < this.scopeDepth) break;

			if (name.str == local.name.str) {
				throw Error('Already variable with this name in this scope.');
			}
		}

		this.locals.push({ name, depth: -1 });
	}

	private identifierConstant(token: Token): number {
		return this.chunk.makeConstant(Value.str(token.str));
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
			if (name.str == local.name.str) {
				if (local.depth == -1) {
					throw Error(
						'Cannot read local variable in its own initializer.',
					);
				}
				return i;
			}
		}

		return -1;
	}

	/**
	 *      EMITTING BYTECODE FUNCTIONS
	 */

	private patchJump(offset: number): void {
		const jump: number = this.chunk.size - offset - 2;

		if (jump > 0xffff) {
			throw Error('Too much code to jump over.');
		}

		this.chunk.view[offset] = (jump >> 8) & 0xff;
		this.chunk.view[offset + 1] = jump & 0xff;
	}

	private emitLoop(loopStart: number): void {
		this.emitByte(Opcode.OP_LOOP);

		const offset: number = this.chunk.size - loopStart + 2;
		if (offset > 0xffff) throw Error('Loop body too large.');

		this.emitByte((offset >> 8) & 0xff);
		this.emitByte(offset & 0xff);
	}

	private emitJump(opcode: Opcode): number {
		this.emitByte(opcode);
		this.emitByte(0xff);
		this.emitByte(0xff);
		return this.chunk.size - 2;
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

	private emitByte(byte: number): void {
		this.chunk.write(byte, this.previous.line);
	}

	/**
	 *    COMPILER END FUNCTION
	 */

	private endCompiler(): void {
		this.emitReturn();
	}
}

export default Compiler;
