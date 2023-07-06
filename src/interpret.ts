import { Chunk } from './chunk';
import VM, { InterpretResult, VMStatus } from './vm';
import Compiler from './compiler';
import { plainToInstance } from 'class-transformer';

const interpret = (source: string): InterpretResult => {
	const compiler = new Compiler();

	let chunk: Chunk;
	try {
		chunk = compiler.compile(source);
	} catch (e) {
		return { status: VMStatus.INTERPRET_COMPILE_ERROR, interrupt: undefined, save: "" };
	}

	let vm = new VM({ debug: true });
	let res = vm.initAndRun(chunk);

	while (res.status !== VMStatus.INTERPRET_INTERRUPT) {
		console.log(JSON.parse(res.save));
		vm = plainToInstance(VM, JSON.parse(res.save))

		res = vm.run(5);

	}

	return res;
};

export default interpret;