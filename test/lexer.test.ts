import { expect, test } from '@jest/globals';
import  Lexer, { TokenType } from '../src/lexer';

test('should tokenize a simple expression', () => {
    const lexer = new Lexer('1 + 2');
    const tokens = lexer.run();

    expect(tokens).toEqual([
        { line: 1, type: TokenType.NUMBER, value: '1'},
        { line: 1,type: TokenType.PLUS, value: '+' },
        { line: 1,type: TokenType.NUMBER, value: '2' },
        { line: 1,type: TokenType.EOF, value: '\0' }
    ]);
});

test('should tokenize an expression', () => {
    const lexer = new Lexer('for + 2 { "looooooo32423"');
    const tokens = lexer.run();

    expect(tokens).toEqual([
        { line: 1,type: TokenType.FOR, value: 'for' },
        { line: 1,type: TokenType.PLUS, value: '+' },
        { line: 1,type: TokenType.NUMBER, value: '2' },
        { line: 1,type: TokenType.LBRACE, value: '{' },
        { line: 1,type: TokenType.STRING, value: 'looooooo32423' },
        { line: 1,type: TokenType.EOF, value: '\0' }

    ]);
});

test('should tokenize an expression with a string', () => {
    const lexer = new Lexer('for + / && if while continue break { "123_00**"');
    const tokens = lexer.run();

    expect(tokens).toEqual([
        { line: 1,type: TokenType.FOR, value: 'for' },
        { line: 1,type: TokenType.PLUS, value: '+' },
        { line: 1,type: TokenType.DIV, value: '/' },
        { line: 1,type: TokenType.AND, value: '&&' },
        { line: 1,type: TokenType.IF, value: 'if' },
        { line: 1,type: TokenType.WHILE, value: 'while' },
        { line: 1,type: TokenType.CONTINUE, value: 'continue' },
        { line: 1,type: TokenType.BREAK, value: 'break' },
        { line: 1,type: TokenType.LBRACE, value: '{' },
        { line: 1,type: TokenType.STRING, value: '123_00**' },
        { line: 1,type: TokenType.EOF, value: '\0' }
    ]);
});