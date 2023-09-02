import Compiler from './compiler';
import Lexer from './lexer';
import Parser from './parser';
import Disassembler from './disassembler';
import VM, { Program } from './vm';

export const compile = (source: string) => {
    const tokens = new Lexer(source).run();
    const ast = new Parser(tokens).run();

    return new Compiler(ast).run();
}

export const evaluate = (program: Program) => {
    const vm = new VM(program);
    vm.run();
}

export const disassemble = (program: Program) => Disassembler.disassemble(program);