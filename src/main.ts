import {Chunk} from "./common.js";
import VM, {InterpretResult} from './vm.js';
import Compiler from "./compiler.js";

const interpret = (source: string): InterpretResult => {
    const compiler = new Compiler();    

    let chunk: Chunk;
    try{
        chunk = compiler.compile(source);
    }catch(e){
        console.log(e);
        return InterpretResult.INTERPRET_COMPILE_ERROR;
    }

    const vm = new VM({debug: false});
    const res = vm.interpret(chunk);

    return res;
}

const program = `
    let x = "hello"; 
    if(false) {
        print "lol";
    }
    else  {
        print x; print "world";
    }
    x= 1+2; 
    let y = 4+x;
    print y;
`;

interpret(program);