import { expect, test } from '@jest/globals';
import  Lexer, { TokenType } from '../src/lexer';
import  Parser from '../src/parser';

test('should parse a function declaration', () => {
    const lexer = new Lexer('function x() { return 1 ; }');
    const tokens = lexer.run();
    

    const parser = new Parser(tokens);

    const ast = parser.run();
    console.log(ast);
});


test('should parse an if statement', () => {
    const lexer = new Lexer('if (x) { return 1 ; }');
    const tokens = lexer.run();
    const parser = new Parser(tokens);

    const ast = parser.run();
    console.log(ast);
});

test('should parse an expression', () => {
    const lexer = new Lexer('-2*5+6*2;');
    const tokens = lexer.run();
    const parser = new Parser(tokens);

    const ast = parser.run();
    console.log(ast);
});

test('should parse an assignment', () => {
    const lexer = new Lexer('x = 100;');
    const tokens = lexer.run();
    const parser = new Parser(tokens);

    const ast = parser.run();
    console.log(ast);
});

test('should parse a declaration', () => {
    const lexer = new Lexer('let x = 100; \n let y = 100;');
    const tokens = lexer.run();
    const parser = new Parser(tokens);

    const ast = parser.run();
    console.log(ast);
});

test('should parse a while loop', () => {
    const lexer = new Lexer('while (x) { return 1 ; }');
    const tokens = lexer.run();
    const parser = new Parser(tokens);

    const ast = parser.run();
    console.log(ast);
});
