import Value from './value';
import { Type } from 'class-transformer';
export class Chunk {
	public view: number[];
	private count: number;

	@Type(() => Value)
	private constants: Value[];

	// Related with source code of higher level language
	private lineView: number[];

	constructor() {
		this.count = 0;

		this.constants = [];

		this.view = [];
		this.lineView = [];
	}

	write(byte: number, line: number): void {
		this.view.push(byte);
		this.lineView.push(line);
	}

	read(): Array<number> {
		return this.view;
	}

	get size(): number {
		return this.view.length;
	}

	get(index): number {
		return this.view[index];
	}

	getLine(index): number {
		return this.lineView[index];
	}

	makeConstant(value: Value): number {
		const constant = this.addConstant(value);
		if (constant > 255) {
			throw new Error('Too many constants in one chunk.');
		}

		return constant;
	}

	addConstant(value: Value): number {
		this.constants.push(value);
		return this.constants.length - 1;
	}

	getConstant(index: number): Value {
		return this.constants[index];
	}
}