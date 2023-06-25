import { Chunk } from './chunk.js';
import VM, { InterpretResult } from './vm.js';
import Compiler from './compiler.js';

const interpret = (source: string): InterpretResult => {
	const compiler = new Compiler();

	let chunk: Chunk;
	try {
		chunk = compiler.compile(source);
	} catch (e) {
		console.log(e);
		return InterpretResult.INTERPRET_COMPILE_ERROR;
	}

	const vm = new VM({ debug: false });
	const res = vm.interpret(chunk);

	return res;
};

const program = `
    for (let i = 0; i< 5; i = i + 1)
    {
        i = i + 10;
        print i;
    }
`;

interpret(program);
