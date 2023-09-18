import "reflect-metadata";
import Compiler from './compiler';
import Lexer from './lexer';
import Parser from './parser';
import Disassembler from './disassembler';
import VM, { Program, Value } from './vm';
import { deserialize } from 'class-transformer';

export const disassemble = (program: Program) => Disassembler.disassemble(program);

export const compile = (source: string) => {
    const tokens = new Lexer(source).run();
    const ast = new Parser(tokens).run();

    return new Compiler(ast).run();
}

export const evaluate = (program: Program) => {
    let vm = VM.create(program);
    const state = vm.run();

    vm = VM.deserialize(state, Value.string(`hello worlds`));
    vm.run();
}