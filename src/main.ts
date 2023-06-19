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

    const vm = new VM({debug: true});
    const res = vm.interpret(chunk);

    return res;
}


const program = "!(5 - 4 > 3 * 2 == !nil)";

console.log(interpret(program));