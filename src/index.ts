import Compiler from './compiler';
import Lexer from './lexer';
import Parser from './parser';
import Disassembler from './disassembler';
import VM from './vm';

const compile = (source: string) => {
    const tokens = new Lexer(source).run();
    const ast = new Parser(tokens).run();
    
    return new Compiler(ast).run();
}

const program = compile(`
    
`);

const assembly = Disassembler.disassemble(program);

console.log(assembly);

const vm = new VM(program);
vm.run();