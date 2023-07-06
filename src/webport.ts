import 'es6-shim';
import 'reflect-metadata'
import interpret from './interpret';

import { VMStatus } from './vm';

const begin = (sourceCode: string): void => {
    const _ = `
        if(false)
            syscall "is.workflow.actions.pausemusic";
        
        let i = 10;
        while(i>5)
            i = i - 1;

        syscall "is.workflow.actions.showresult";
    `;

    console.log(encodeURIComponent(_));

    const source = _; //sourceCode;

    if (!source) {
        console.log('No source code found in query params.');
        return;
    }

    const { status, interrupt, save } = interpret(source);

    if (status === VMStatus.INTERPRET_INTERRUPT) {
        document.write(save);
    }
};

const resume = (state: string): void => {
    /*const vm = VM.load(state);

    if (!source) {
        console.log('No source code found in query params.');
        return;
    }

    const { status, interrupt, save } = interpret(source);*/
};

((): void => {
    const params = new URLSearchParams(window.location.search);

    const state = params.get('resume');
    const sourceCode = params.get('begin');

    if (state) {
        resume(state);
    }
    else if (sourceCode) {
        begin(sourceCode);
    }
})();