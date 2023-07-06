import { Chunk } from './chunk';
import { Opcode } from './vm';
import { Type } from 'class-transformer';

export default class Disassembler {
	@Type(() => Chunk)
	private chunk: Chunk;

	constructor(chunk: Chunk) {
		this.chunk = chunk;
	}

	disassemble(name: string): void {
		console.log(`== ${name} ==`);
		for (let offset = 0; offset < this.chunk.size;) {
			offset = this.disassembleInstruction(offset);
		}
	}

	disassembleInstruction(offset: number): number {
		const instruction = this.chunk.get(offset);
		switch (instruction) {
			case Opcode.OP_CONSTANT:
				return this.constantInstruction('OP_CONSTANT', offset);
			case Opcode.OP_NEGATE:
				return this.simpleInstruction('OP_NEGATE', offset);
			case Opcode.OP_RETURN:
				return this.simpleInstruction('OP_RETURN', offset);
			case Opcode.OP_ADD:
				return this.simpleInstruction('OP_ADD', offset);
			case Opcode.OP_SUBTRACT:
				return this.simpleInstruction('OP_SUBTRACT', offset);
			case Opcode.OP_MULTIPLY:
				return this.simpleInstruction('OP_MULTIPLY', offset);
			case Opcode.OP_DIVIDE:
				return this.simpleInstruction('OP_DIVIDE', offset);
			case Opcode.OP_NIL:
				return this.simpleInstruction('OP_NIL', offset);
			case Opcode.OP_TRUE:
				return this.simpleInstruction('OP_TRUE', offset);
			case Opcode.OP_FALSE:
				return this.simpleInstruction('OP_FALSE', offset);
			case Opcode.OP_NOT:
				return this.simpleInstruction('OP_NOT', offset);
			case Opcode.OP_EQUAL:
				return this.simpleInstruction('OP_EQUAL', offset);
			case Opcode.OP_GREATER:
				return this.simpleInstruction('OP_GREATER', offset);
			case Opcode.OP_LESS:
				return this.simpleInstruction('OP_LESS', offset);
			case Opcode.OP_PRINT:
				return this.simpleInstruction('OP_PRINT', offset);
			case Opcode.OP_POP:
				return this.simpleInstruction('OP_POP', offset);
			case Opcode.OP_DEFINE_GLOBAL:
				return this.constantInstruction('OP_DEFINE_GLOBAL', offset);
			case Opcode.OP_GET_GLOBAL:
				return this.constantInstruction('OP_GET_GLOBAL', offset);
			case Opcode.OP_SET_GLOBAL:
				return this.constantInstruction('OP_SET_GLOBAL', offset);
			case Opcode.OP_GET_LOCAL:
				return this.byteInstruction('OP_GET_LOCAL', offset);
			case Opcode.OP_SET_LOCAL:
				return this.byteInstruction('OP_SET_LOCAL', offset);
			case Opcode.OP_JUMP_IF_FALSE:
				return this.jumpInstruction('OP_JUMP_IF_FALSE', offset);
			case Opcode.OP_JUMP:
				return this.jumpInstruction('OP_JUMP', offset);
			case Opcode.OP_LOOP:
				return this.jumpInstruction('OP_LOOP', offset);
			case Opcode.OP_INTERRUPT:
				return this.byteInstruction('OP_INTERRUPT', offset);

			default:
				console.log(`Unknown opcode ${instruction}`);
				return offset + 1;
		}
	}

	private jumpInstruction(name: string, offset: number): number {
		const jump = this.chunk.get(offset + 1);
		const line = this.chunk.getLine(offset + 1);
		this.logWithOffset(
			offset,
			name + '\t' + jump + '\t\t(line ' + line + ')',
		);
		return offset + 2;
	}

	private byteInstruction(name: string, offset: number): number {
		const slot = this.chunk.get(offset + 1);
		this.logWithOffset(offset, name + '\t' + slot);
		return offset + 2;
	}

	private logWithOffset(offset, rest): void {
		let log = offset.toString().padStart(4, '0');

		if (
			offset != 0 &&
			this.chunk.getLine(offset) === this.chunk.getLine(offset - 1)
		) {
			log += '\t|';
		} else {
			log += ` ${this.chunk.getLine(offset).toString().padStart(4, '0')}`;
		}
		log += ' ';
		log += rest;
		console.log(log);
	}

	private constantInstruction(name: string, offset: number): number {
		const loc = this.chunk.get(offset + 1);
		const constant = this.chunk.getConstant(loc);

		this.logWithOffset(offset, name + '\t' + loc + "'" + constant + "'");

		return offset + 2;
	}

	private simpleInstruction(name: string, offset: number): number {
		this.logWithOffset(offset, name);

		return offset + 1;
	}
}
