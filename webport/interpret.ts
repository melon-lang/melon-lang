import { compile } from '../src/index';
import VM, { VMImage } from '../src/vm';

const interpret = (source: string, timeLimitMilliseconds: number = Infinity): VMImage => {
	const program = compile(source);

	const vm = VM.create(program);

	const res = vm.run(timeLimitMilliseconds);

	return res;
};

export default interpret;
