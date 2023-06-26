import Value from './value';

export class Chunk {
	public view: Uint8Array;
	private buffer: ArrayBuffer;
	private count: number;
	private capacity: number;
	private constants: ValueArray;

	// Related with source code of higher level language
	private lineBuffer: ArrayBuffer;
	private lineView: Uint8Array;

	constructor(capacity = 16) {
		this.count = 0;
		this.capacity = capacity;

		this.buffer = new ArrayBuffer(capacity * Uint8Array.BYTES_PER_ELEMENT);
		this.view = new Uint8Array(this.buffer);
		this.constants = new ValueArray();

		this.lineBuffer = new ArrayBuffer(
			capacity * Uint8Array.BYTES_PER_ELEMENT,
		);
		this.lineView = new Uint8Array(this.lineBuffer);
	}

	write(byte: number, line: number): void {
		if (this.count >= this.capacity) {
			this.capacity *= 2;
			const newBuffer = new ArrayBuffer(
				this.capacity * Uint8Array.BYTES_PER_ELEMENT,
			);
			const newView = new Uint8Array(newBuffer);
			newView.set(this.view);
			this.buffer = newBuffer;
			this.view = newView;

			const newLineBuffer = new ArrayBuffer(
				this.capacity * Uint8Array.BYTES_PER_ELEMENT,
			);
			const newLineView = new Uint8Array(newLineBuffer);
			newLineView.set(this.lineView);
			this.lineBuffer = newLineBuffer;
			this.lineView = newLineView;
		}

		this.view[this.count] = byte;
		this.lineView[this.count] = line;

		this.count++;
	}

	read(): Uint8Array {
		const slice = this.buffer.slice(
			0,
			this.count * Uint8Array.BYTES_PER_ELEMENT,
		);
		return new Uint8Array(slice);
	}

	get size(): number {
		return this.count;
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
		this.constants.write(value);
		return this.constants.size - 1;
	}

	getConstant(index: number): Value {
		return this.constants.get(index);
	}
}

class ValueArray {
	private arr: Value[];

	constructor() {
		this.arr = [];
	}

	write(value: Value): void {
		this.arr.push(value);
	}

	get(index: number): Value {
		return this.arr[index];
	}

	get size(): number {
		return this.arr.length;
	}
}
