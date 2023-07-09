import { Chunk } from './chunk';
import VM, { InterpretResult, VMStatus } from './vm';
import Compiler from './compiler';

const interpret = (source: string): InterpretResult => {
	const compiler = new Compiler();

	let chunk: Chunk;
	try {
		chunk = compiler.compile(source);
	} catch (e) {
		document.write((e));
		return { status: VMStatus.INTERPRET_COMPILE_ERROR, interrupt: undefined, save: "" };
	}

	const vm = new VM({ debug: true });
	vm.init(chunk);

	const res = vm.run(50);
	/*
	while (res.status !== VMStatus.INTERPRET_INTERRUPT) {
		vm = plainToInstance(VM, JSON.parse(res.save))

		res = vm.run(5);
	}*/

	return res;
};

export default interpret;