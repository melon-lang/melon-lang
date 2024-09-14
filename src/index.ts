import "reflect-metadata";
import 'es6-shim';

import Compiler from './compiler';
import Lexer from './lexer';
import Parser from './parser';
import VM, { Program } from './vm';
import { deserialize } from 'class-transformer';

export const compile = (source: string) => {
    const tokens = new Lexer(source).run();
    const ast = new Parser(tokens).run();

    return new Compiler(ast).run();
}

export const evaluate = (program: Program) => {
    let vm = VM.create(program);
    const state = vm.run();

    return state
}