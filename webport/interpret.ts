import { compile } from '../src/index';
import VM, { VMImage } from '../src/vm';

const interpret = (source: string): VMImage => {
	const program = compile(source);

	const vm = new VM(program);

	const res = vm.run();

	return res;
};

export default interpret;
