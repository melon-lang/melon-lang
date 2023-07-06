import { Chunk } from './chunk';
import Disassembler from './disassembler';
import Value, { ValueType } from './value';
import 'reflect-metadata';
import { Type, serialize } from 'class-transformer';

export enum Opcode {
	OP_CONSTANT,
	OP_NIL,
	OP_TRUE,
	OP_FALSE,
	OP_ADD,
	OP_SUBTRACT,
	OP_MULTIPLY,
	OP_DIVIDE,
	OP_NEGATE,
	OP_RETURN,
	OP_NOT,
	OP_EQUAL,
	OP_GREATER,
	OP_LESS,
	OP_PRINT,
	OP_POP,
	OP_DEFINE_GLOBAL,
	OP_GET_GLOBAL,
	OP_SET_GLOBAL,
	OP_GET_LOCAL,
	OP_SET_LOCAL,
	OP_JUMP_IF_FALSE,
	OP_JUMP,
	OP_LOOP,
	OP_INTERRUPT
}

export enum VMStatus {
	INTERPRET_OK,
	INTERPRET_COMPILE_ERROR,
	INTERPRET_RUNTIME_ERROR,
	INTERPRET_INTERRUPT
}

export interface InterpretResult {
	status: VMStatus;
	interrupt: {
		code: string;
		args: [];
	} | undefined;
	save: string;
}

class VM {
	@Type(() => Chunk)
	private chunk: Chunk;

	private ip = 0;
	private debug: boolean;

	@Type(() => Disassembler)
	private dissambler: Disassembler;

	@Type(() => Value)
	private stack: Value[];

	@Type(() => Value)
	private globals: Map<string, Value>;

	constructor({
		debug = false,
	}: {
		debug?: boolean;
	} = {}) {
		this.debug = debug;

		this.stack = [];
		this.globals = new Map();
	}

	initAndRun(chunk): InterpretResult {
		this.chunk = chunk;
		this.ip = 0;

		this.dissambler = new Disassembler(chunk);

		return this.run(3);
	}

	public run(numInstructions = 1): InterpretResult {
		const startIp = this.ip;
		const endIp = startIp + numInstructions;

		while (this.ip < endIp) {
			const instruction = this.readByte();

			// This part should be optimized.
			if (this.debug) {
				this.stack.forEach((value) => {
					console.log(`          [ ${value.toString()} ]`);
				});
				this.dissambler.disassembleInstruction(this.ip - 1);
			}

			switch (instruction) {
				case Opcode.OP_RETURN:
					return { status: VMStatus.INTERPRET_OK, interrupt: undefined, save: serialize(this) };
				case Opcode.OP_NEGATE:
					if (!this.peek().is(ValueType.VAL_NUMBER))
						throw new Error('Operand must be a number.');

					this.push(Value.number(-this.pop().number));
					break;
				case Opcode.OP_ADD: {
					const b = this.pop();
					const a = this.pop();

					if (
						a.is(ValueType.VAL_NUMBER) &&
						b.is(ValueType.VAL_NUMBER)
					) {
						this.push(Value.number(a.number + b.number));
					} else if (
						a.is(ValueType.VAL_OBJ) &&
						b.is(ValueType.VAL_OBJ)
					) {
						this.push(
							Value.str(
								a.toString() + b.toString(),
							),
						);
					} else {
						throw new Error(
							'Operands must be two numbers or two strings.',
						);
					}
					break;
				}
				case Opcode.OP_SUBTRACT:
				case Opcode.OP_MULTIPLY:
				case Opcode.OP_DIVIDE:
					this.binaryOp(instruction);
					break;
				case Opcode.OP_CONSTANT: {
					const constant = this.readByte();
					this.stack.push(this.chunk.getConstant(constant));
					break;
				}
				case Opcode.OP_NIL:
					this.push(Value.nil());
					break;
				case Opcode.OP_TRUE:
					this.push(Value.bool(true));
					break;
				case Opcode.OP_FALSE:
					this.push(Value.bool(false));
					break;
				case Opcode.OP_NOT:
					this.push(Value.bool(this.isFalsey(this.pop())));
					break;
				case Opcode.OP_EQUAL: {
					const b = this.pop();
					const a = this.pop();
					this.push(Value.bool(a.equalsTo(b)));
					break;
				}
				case Opcode.OP_GREATER:
					this.binaryOp(instruction);
					break;
				case Opcode.OP_LESS:
					this.binaryOp(instruction);
					break;
				case Opcode.OP_PRINT: {
					const a = this.pop();
					break;
				}
				case Opcode.OP_POP:
					this.pop();
					break;
				case Opcode.OP_DEFINE_GLOBAL: {
					const name = (
						this.chunk.getConstant(this.readByte())
					).str;
					this.globals.set(name, this.pop());
					break;
				}
				case Opcode.OP_GET_GLOBAL: {
					const name = (
						this.chunk.getConstant(this.readByte()).str
					);
					const value = this.globals.get(name);

					if (!value) {
						throw new Error(`Undefined variable '${name}'.`);
					}
					this.push(value);
					break;
				}
				case Opcode.OP_SET_GLOBAL: {
					const name = (
						this.chunk.getConstant(this.readByte()).str
					);
					if (!this.globals.get(name)) {
						throw new Error(`Undefined variable '${name}'.`);
					}

					this.globals.set(name, this.peek());
					break;
				}
				case Opcode.OP_GET_LOCAL: {
					const slot = this.readByte();
					this.push(this.stack[slot]);
					break;
				}
				case Opcode.OP_SET_LOCAL: {
					const slot = this.readByte();
					this.stack[slot] = this.peek();
					break;
				}
				case Opcode.OP_JUMP_IF_FALSE: {
					const offset = this.readShort();
					if (this.isFalsey(this.peek())) {
						this.ip += offset;
					}
					break;
				}
				case Opcode.OP_JUMP: {
					const offset = this.readShort();
					this.ip += offset;
					break;
				}
				case Opcode.OP_LOOP: {
					const offset = this.readShort();
					this.ip -= offset;
					break;
				}
				case Opcode.OP_INTERRUPT: {
					const interruptCode = this.pop();
					return {
						status: VMStatus.INTERPRET_INTERRUPT,
						save: serialize(this),
						interrupt: {
							code: interruptCode.str,
							args: []
						}
					};
				}
			}
		}

		return { status: VMStatus.INTERPRET_OK, interrupt: undefined, save: serialize(this) };
	}

	private readByte(): number {
		const byte = this.chunk.get(this.ip);
		this.ip++;
		return byte;
	}

	private readShort(): number {
		const byte1 = this.readByte();
		const byte2 = this.readByte();
		return (byte1 << 8) | byte2;
	}

	private isFalsey(value: Value): boolean {
		return (
			value.is(ValueType.VAL_NIL) ||
			!value.bool
		);
	}

	private binaryOp(op: Opcode): void {
		if (!this.peek().is(ValueType.VAL_NUMBER))
			throw new Error('Operand must be a number.');

		const b = this.pop();

		if (!this.peek().is(ValueType.VAL_NUMBER))
			throw new Error('Operand must be a number.');

		const a = this.pop();

		switch (op) {
			case Opcode.OP_ADD:
				this.push(Value.number(a.number + b.number));
				break;
			case Opcode.OP_SUBTRACT:
				this.push(Value.number(a.number - b.number));
				break;
			case Opcode.OP_MULTIPLY:
				this.push(Value.number(a.number * b.number));
				break;
			case Opcode.OP_DIVIDE:
				this.push(Value.number(a.number / b.number));
				break;
			case Opcode.OP_GREATER:
				this.push(Value.bool(a.number > b.number));
				break;
			case Opcode.OP_LESS:
				this.push(Value.bool(a.number < b.number));
				break;
		}
	}

	/**
	 *      STACK OPERATIONS
	 */

	private push(value: Value): void {
		this.stack.push(value);
	}

	private pop(): Value {
		return this.stack.pop();
	}

	private peek(): Value {
		return this.stack[this.stack.length - 1];
	}
}

export default VM;
