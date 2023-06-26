import interpret from "./interpret";
import { InterpretResult, VMStatus } from "./vm";

const runFromQueryParams = () : void => {
    const params = new URLSearchParams(window.location.search);
    const _ = `
        if(true)
            syscall "is.workflow.actions.pausemusic";
    `

    console.log(encodeURIComponent(_));
    
    const source = params.get('source');
    
    if (!source) {
        console.log('No source code found in query params.');
        return;
    }

    const {status, interruptCode} = interpret(source);

    if(status === VMStatus.INTERPRET_INTERRUPT) {
        console.log(`Interrupted with code ${interruptCode}`);
        
        document.write(JSON.stringify({status, interruptCode}));
    }
}

runFromQueryParams();