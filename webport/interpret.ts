import { compile } from '../src/index';
import VM, { VMImage } from '../src/vm';

const interpret = (source: string, steps: number = Infinity): VMImage => {
	const program = compile(source);

	const vm = VM.create(program);

	const res = vm.run(steps);

	return res;
};

export default interpret;
