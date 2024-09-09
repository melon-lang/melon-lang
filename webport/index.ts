import 'es6-shim';
import 'reflect-metadata';
import interpret from './interpret';
import VM, { VMImage } from '../src/vm';
import {StringValue, Value} from '../src/value';

const MAX_VM_STEPS_BEFORE_PAUSE = 500;

const getParams = () => {
	const data = window.location.href;

	const matches = [
		...data.matchAll(/data:text\/html;((?:[^=;]*=[^;]*;)+)base64/g),
	];

	const params = {};

	matches[0][1].split(';').forEach((param) => {
		const [key, value] = param.split('=');

		if (!key) return;

		params[key] = decodeURIComponent(value);
	});

	return params;
};

const begin = (sourceCode: string): void => {
	const source = sourceCode;

	if (!source) {
		console.log('No source code found in query params.');
		return;
	}

	const result = interpret(atob(source), MAX_VM_STEPS_BEFORE_PAUSE);

	document.write(btoa(JSON.stringify(result)));
};

const resume = (save: string, value): void => {
	const image = JSON.parse(atob(save)) as VMImage;
	const vm = VM.deserialize(image, new StringValue(atob(value)));
	const result = vm.run(MAX_VM_STEPS_BEFORE_PAUSE);

	document.write(btoa(JSON.stringify(result)));
};

((): void => {
	const params = getParams();

	const state = params['resume'];
	const sourceCode = params['begin'];
	const value = params['value'];

	try {
		if (state) {
			resume(state, value);
		} else if (sourceCode) {
			begin(sourceCode);
		} else {
			document.write(
				btoa(JSON.stringify({
					error: 'No source code found in query params.'
				}))
			);
		}
	} catch (e) {
		document.write(btoa(
			JSON.stringify({
				error: e.message,
			})));
	}
})();
