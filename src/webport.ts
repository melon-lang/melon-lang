import 'es6-shim';
import 'reflect-metadata'
import interpret from './interpret';

import VM, { VMStatus } from './vm';

import { plainToInstance } from 'class-transformer';

const begin = (sourceCode: string): void => {

    const _ = `
    syscall "is.workflow.actions.showresult", "asdas";
    
    let i = 0; 
    for(let j=0; j<1; j=j+1){
        while(i< 100) 
            i = i + 1;         
    }
    syscall "is.workflow.actions.skipforward";
    `;

    //console.log(encodeURIComponent(_));

    const source = _ //sourceCode; //sourceCode;

    if (!source) {
        console.log('No source code found in query params.');
        return;
    }

    const result = interpret(source);

    console.log(result);
    document.write(JSON.stringify(result));
};

const resume = (save: string): void => {
    const vm = plainToInstance(VM, JSON.parse(save));

    const res = vm.run(50);

    document.write(JSON.stringify(res));
    console.log(res);
};

((): void => {
    const params = new URLSearchParams(window.location.search);

    const state = params.get('resume');
    const sourceCode = params.get('begin');

    try {
        if (state) {
            resume(state);
        }
        else if (sourceCode) {
            begin(decodeURIComponent(sourceCode));
        }
    } catch (e) {
        document.write(JSON.stringify(e));
    }
})();