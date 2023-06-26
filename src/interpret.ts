import { Chunk } from './chunk';
import VM, { InterpretResult, VMStatus } from './vm';
import Compiler from './compiler';

const interpret = (source: string): InterpretResult => {
	const compiler = new Compiler();

	let chunk: Chunk;
	try {
		chunk = compiler.compile(source);
	} catch (e) {
		console.log(e);
		return {status : VMStatus.INTERPRET_COMPILE_ERROR, interruptCode: undefined};
	}

	const vm = new VM({ debug: false });
	const res = vm.interpret(chunk);

	return res;
};

export default interpret;