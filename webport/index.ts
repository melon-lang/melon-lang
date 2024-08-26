import 'es6-shim';
import 'reflect-metadata';
import interpret from './interpret';
import VM, { VMImage, VMStatus, Value } from '../src/vm';

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

const debug = (value) => {
  return;

  fetch('http://localhost:8080', {
    method: `post`,
    body: value,
  });
};

const begin = (sourceCode: string): void => {
  const _ = `
    let a = syscall("is.workflow.actions.showresult", "asdas", 1);
    print(a);

    let i = 0; 
    for(let j=0; j<1; j=j+1){
        while(i< 100) 
            i = i + 1;         
    }
    `;

  const source = sourceCode;

  if (!source) {
    console.log('No source code found in query params.');
    return;
  }

  const result = interpret(atob(source));

  document.write(btoa(JSON.stringify(result)));
};

const resume = (save: string, value): void => {
  const image = JSON.parse(atob(save)) as VMImage;
  const vm = VM.deserialize(image, Value.string(atob(value)));
  const result = vm.run();

  debug(JSON.stringify(result));

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
