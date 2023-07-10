import { describe, expect, test } from '@jest/globals';
import { Compiler, VM, VMStatus, Value } from '../src/index';

const compile = (source: string) => {
	const compiler = new Compiler();
	const chunk = compiler.compile(source);

	return chunk;
};

const evaluateTillDone = (source: string) => {
	const chunk = compile(source)

	const vm = new VM({ debug: false });
	vm.init(chunk);

	let res = vm.run();

	console.log(res);
	console.log(VMStatus.INTERPRET_OK);

	while (res.status != VMStatus.INTERPRET_OK) {
		res = vm.run();

		if (res.status == VMStatus.INTERPRET_COMPILE_ERROR || res.status == VMStatus.INTERPRET_RUNTIME_ERROR)
			throw new Error();
	}
	console.log(res.return_value)
	return res.return_value;
};

test('While block', () => {
	const source = `
		let a = 1;
		
		while (a < 10) {
			a = a + 1;
		}

		return a;
  `;

	const result: Value = evaluateTillDone(source);

	expect(result).toStrictEqual(Value.number(10));
});

test('While block two variables', () => {
	const source = `
		let a = 1;
		let b = 100;

		while (a < b) {
			b = b - a;
			a = a + 1;
		}

		return a;
  `;

	const result: Value = evaluateTillDone(source);

	expect(result).toStrictEqual(Value.number(14));
});

test('If block', () => {
	const source = `
		let a = 1;
		if (a == 1) {
			return 1;
		}
		return 2;		
  `;

	const result: Value = evaluateTillDone(source);

	expect(result).toStrictEqual(Value.number(1));
});

test('If block else', () => {

	const source = `
		let a = 1;
		if (a == 2) {
			return 1;
		} else {
			return 2;
		}
  `;

	const result: Value = evaluateTillDone(source);

	expect(result).toStrictEqual(Value.number(2));
});

