import { expect, test } from '@jest/globals';
import  Lexer, { TokenType } from '../src/lexer';

test('should tokenize a simple expression', () => {
    const lexer = new Lexer('1 + 2');
    const tokens = lexer.run();

    expect(tokens.map(t=> ({type: t.type, value: t.value}))).toEqual([
        { type: TokenType.NUMBER, value: '1' },
        { type: TokenType.PLUS, value: '+' },
        { type: TokenType.NUMBER, value: '2' }
    ]);
});

test('should tokenize an expression', () => {
    const lexer = new Lexer('for + 2 { "looooooo32423"');
    const tokens = lexer.run();

    expect(tokens).toEqual([
        { type: TokenType.FOR, value: 'for' },
        { type: TokenType.PLUS, value: '+' },
        { type: TokenType.NUMBER, value: '2' },
        { type: TokenType.LBRACE, value: '{' },
        { type: TokenType.STRING, value: 'looooooo32423' }
    ]);
});

test('should tokenize an expression with a string', () => {
    const lexer = new Lexer('for + / && if while continue break { "123_00**"');
    const tokens = lexer.run();

    expect(tokens).toEqual([
        { type: TokenType.FOR, value: 'for' },
        { type: TokenType.PLUS, value: '+' },
        { type: TokenType.DIV, value: '/' },
        { type: TokenType.AND, value: '&&' },
        { type: TokenType.IF, value: 'if' },
        { type: TokenType.WHILE, value: 'while' },
        { type: TokenType.CONTINUE, value: 'continue' },
        { type: TokenType.BREAK, value: 'break' },
        { type: TokenType.LBRACE, value: '{' },
        { type: TokenType.STRING, value: '123_00**' }
    ]);
});