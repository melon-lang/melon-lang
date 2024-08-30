import { expect, test } from '@jest/globals';
import { compile, evaluate } from '../src/index';
import { ValueType } from '../src/vm';
import { DivisionByZero, FunctionArgumentNumberMismatch, InvalidType, NativeFunctionArgumentNumberMismatch, SyntaxError, VariableAlreadyDeclared, VariableAlreadyDeclaredInScope, VariableNotDeclared } from '../src/error';
import exp from 'constants';

const evalValidSourceCode = (sourceCode: string) => {
    sourceCode += 'syscall("dummy", result);';

    const state = evaluate(compile(sourceCode));
    const syscall = state.syscall;

    if (!syscall) {
        throw new Error('No syscall found');
    }

    const result = syscall.args[0];

    return result;
}

const evalInvalidSourceCode = (sourceCode: string) => {
    evaluate(compile(sourceCode));
}

const validTestSourceCodes = [
    {
        sourceCode: 'let result = 1 + 2;',
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: 'let result = 1 + 2 * 3;',
        expected: { type: ValueType.NUMBER, value: 7 }
    },
    {
        sourceCode: `
            let x = 1;

            while (x < 10) {
                x = x + 1;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: `
            let x = 2;

            while( x < 12) {
                x = x * 87;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 2 * 87 }
    },
    {
        sourceCode: `
            let x = 2;

            for(let i = 0; i < 10; i = i + 1) {
                x = x * 2;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 2 ** 11 }
    },
    {
        sourceCode: `
            let result =  19 > 10;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let result =  19 < 10;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let result =  19 >= 10;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let result =  19 <= 10;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let result =  19 == 10;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let result =  19 != 10;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let result =  19 == 19;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let result =  19 != 19;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let result =  19 <= 19;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let result =  19 >= 19;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let x = 3;

            let result = null;

            if (x == 3) {
                result = 1;
            } else {
                result = 2;
            }
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let result = "hello" + " " + "world";
        `,
        expected: { type: ValueType.STRING, value: 'hello world' }
    },
    {
        sourceCode: `
            let result = 0;
            result++;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let result = 0;
            ++result;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = dummy++;
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = ++dummy;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = (++dummy) + 54;
        `,
        expected: { type: ValueType.NUMBER, value: 55 }
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = (dummy++) + 34;
        `,
        expected: { type: ValueType.NUMBER, value: 34 }
    },
    {
        sourceCode: `
            let dummy = 5 == 5 || 4 == 5;
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = 5 == 5 && 4 == 5;
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = 4 == 9000 && "string" == "string" || 5 == 5;
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `  
            let dummy = bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = bool("true") || bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("false") || bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = bool("false") || bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true") || bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true") || bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("false") || bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: false }
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true") || bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true") || bool("false");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("false") || bool("true");
            let result = dummy;
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            let num = "123";
            let result = num + str(1);
        `,
        expected: { type: ValueType.STRING, value: '1231' }
    },
    {
        sourceCode: `let result = null;`,
        expected: { type: ValueType.NULL, value: null }
    },
    {
        sourceCode: `
            let num = "123";
            num = number(num);
            let result = num + 1;
        `,
        expected: { type: ValueType.NUMBER, value: 124 }
    },
    {
        sourceCode: `
            let a = 0;
            let b = 1;

            let result = a + b;
            result = bool(a+b);
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
            function add(a, b) {
                return a + b;
            }

            function sub(a, b) {
                return a - b;
            }

            let result = add(1, -100);
            result = sub(result, -100);
            result = bool(result);
        `,
        expected: { type: ValueType.BOOLEAN, value: true }
    },
    {
        sourceCode: `
        function fib(i){
            if (i == 0) return 0;
            if (i == 1) return 1;
            return fib(i-1) + fib(i-2);
        }

        let result = fib(10);
        `,
        expected: { type: ValueType.NUMBER, value: 55 }
    },
    {
        sourceCode: `
        function decToZero(i){
            if (i == 0) return 0;
            return decToZero(i-1);
        }

        let result = decToZero(10);
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: `
        function decToNegative(i, j){
            if (i < 0) return 0;
            return decToNegative(i-j, j);
        }

        let result = decToNegative(10, 1);
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    // Overrides the built-in random function
    {
        sourceCode: `
        let i = 0;
        let result = i++;
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: `
        let i = 0;
        let result = ++i;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let x = 10;
            for(let i = 0; i < 10; i++){
                x = x - 1;
                break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: `
            let x = 10;
            for(let i = 0; i < 10; i++){
                x = x - 1;
                break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: `
            let x = 10;
            for(let i = 0; i < 10; i++){
                x = x - 1;
                break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: `
            let x = 10;
            let i = 0;
            while (i < 10) {
                x = x - 1;
                break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: `
            let x = 10;
            for(let i = 0; i < 10; i++){
                if (i == 5) break;
                x = x - 1;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 5 }
    },
    {
        sourceCode: `
            let x = 10;
            let i = 0;
            while (i < 10) {
                if (i == 5) break;
                x = x - 1;
                i++;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 5 }
    },
    {
        sourceCode: `
            let x = 0;
            for(let i = 0; i < 10; i++){
                x++;
                if (x > 3) break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 4 }
    },
    {
        sourceCode: `
            let x = 5;
            for(let i = 0; i < 10; i++){
                x = x + 2;
                if (x > 10) break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 11 }
    },
    {
        sourceCode: `
            let x = 0;
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 5; j++){
                    x++;
                    if (x == 7) break;
                }
                if (x == 7) break;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 7 }
    },
    {
        sourceCode: `
            let x = 0;
            let i = 0;
            while (i < 10) {
                x++;
                if (x == 3) break;
                i++;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: `
            let x = 1;
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 5; j++){
                    if (x == 3) break;
                    x++;
                }
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: `
            let x = 0;
            for(let i = 0; i < 10; i++){
                if (i == 5) continue;
                x = x + 1;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: `
            let x = 0;
            let i = 0;
            while (i < 10) {
                i++;
                if (i == 5) continue;
                x = x + 1;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: `
            let x = 0;
            for(let i = 0; i < 10; i++){
                if (i == 3) continue;
                x = x + 2;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 18 }
    },
    {
        sourceCode: `
            let x = 0;
            let i = 0;
            while (i < 10) {
                i++;
                if (i == 4) continue;
                x = x + 3;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 27 }
    },
    {
        sourceCode: `
            let x = 1;
            for(let i = 0; i < 5; i++){
                if (i == 2) continue;
                x = x * 2;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 16 }
    },
    {
        sourceCode: `
            let x = 0;
            for(let i = 0; i < 8; i++){
                if (i == 1) continue;
                x = x + 5;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 35 }
    },
    {
        sourceCode: `
            let x = 0;
            for(let i = 0; i < 10; i++){
                if (i == 6) continue;
                x = x - 1;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: -9 }
    },
    {
        sourceCode: `
            let x = 0;
            let i = 0;
            while (i < 5) {
                i++;
                if (i == 3) continue;
                x = x - 2;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: -8 }
    },
    {
        sourceCode: `
            let x = 10;
            for(let i = 0; i < 5; i++){
                if (i == 1) continue;
                x = x - 4;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: -6 }
    },
    {
        sourceCode: `
            let x = 5;
            for(let i = 0; i < 7; i++){
                if (i == 4) continue;
                x = x + 7;
            }

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 47 }
    },
    {
        sourceCode: `
            let x = 10;
            let y = x % 3;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let x = 25;
            let y = x % 5;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: `
            let x = 13;
            let y = x % 4;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let x = 100;
            let y = x % 7;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 2 }
    },
    {
        sourceCode: `
            let x = 0;
            let y = x % 5;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: `
            let x = 15;
            let y = x % 6;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: `
            let x = 9;
            let y = x % 2;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let x = 18;
            let y = x % 7;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 4 }
    },
    {
        sourceCode: `
            let x = 33;
            let y = x % 10;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: `
            let x = 45;
            let y = x % 4;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: `
            let x = 45/2;
            let y = x % 4;

            let result = y;
        `,
        expected: { type: ValueType.NUMBER, value: 2.5 }
    },
    {
        sourceCode: `
            let x = 4;
            x += 1;

            let result = x;
        `,
        expected: { type: ValueType.NUMBER, value: 5 }
    },

    {
        sourceCode: '\n' +
            '            let x = 1;\n' +
            '            x += 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x += 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 15 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x -= 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 8 }
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x -= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 15 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x /= 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 5 }
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x /= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 5 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x %= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x %= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 2 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x *= 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 20 }
    },
    {
        sourceCode: '\n' +
            '            let x = 5;\n' +
            '            x *= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 20 }
    },
    {
        sourceCode: '\n' +
            '            let x = 3;\n' +
            '            x += 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 6 }
    },
    {
        sourceCode: '\n' +
            '            let x = 6;\n' +
            '            x -= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 3 }
    },
    {
        sourceCode: '\n' +
            '            let x = 30;\n' +
            '            x /= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 30;\n' +
            '            x %= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 3;\n' +
            '            x *= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: '\n' +
            '            let x = 4;\n' +
            '            x += 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 8 }
    },
    {
        sourceCode: '\n' +
            '            let x = 8;\n' +
            '            x -= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 4 }
    },
    {
        sourceCode: '\n' +
            '            let x = 40;\n' +
            '            x /= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 40;\n' +
            '            x %= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 4;\n' +
            '            x *= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 16 }
    },
    {
        sourceCode: '\n' +
            '            let x = 5;\n' +
            '            x += 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x -= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 5 }
    },
    {
        sourceCode: '\n' +
            '            let x = 50;\n' +
            '            x /= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 50;\n' +
            '            x %= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 5;\n' +
            '            x *= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 25 }
    },
    {
        sourceCode: '\n' +
            '            let x = 6;\n' +
            '            x += 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 12 }
    },
    {
        sourceCode: '\n' +
            '            let x = 12;\n' +
            '            x -= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 6 }
    },
    {
        sourceCode: '\n' +
            '            let x = 60;\n' +
            '            x /= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 60;\n' +
            '            x %= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 6;\n' +
            '            x *= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 36 }
    },
    {
        sourceCode: '\n' +
            '            let x = 7;\n' +
            '            x += 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 14 }
    },
    {
        sourceCode: '\n' +
            '            let x = 14;\n' +
            '            x -= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 7 }
    },
    {
        sourceCode: '\n' +
            '            let x = 70;\n' +
            '            x /= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 70;\n' +
            '            x %= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 7;\n' +
            '            x *= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 49 }
    },
    {
        sourceCode: '\n' +
            '            let x = 8;\n' +
            '            x += 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 16 }
    },
    {
        sourceCode: '\n' +
            '            let x = 16;\n' +
            '            x -= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 8 }
    },
    {
        sourceCode: '\n' +
            '            let x = 80;\n' +
            '            x /= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 80;\n' +
            '            x %= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 8;\n' +
            '            x *= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 64 }
    },
    {
        sourceCode: '\n' +
            '            let x = 9;\n' +
            '            x += 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 18 }
    },
    {
        sourceCode: '\n' +
            '            let x = 18;\n' +
            '            x -= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: '\n' +
            '            let x = 90;\n' +
            '            x /= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 90;\n' +
            '            x %= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 9;\n' +
            '            x *= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 81 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x += 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 20 }
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x -= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 100;\n' +
            '            x /= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 100;\n' +
            '            x %= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x *= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 100 }
    },
    {
        sourceCode: '\n' +
            '            let x = 11;\n' +
            '            x += 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 22 }
    },
    {
        sourceCode: '\n' +
            '            let x = 22;\n' +
            '            x -= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 11 }
    },
    {
        sourceCode: '\n' +
            '            let x = 110;\n' +
            '            x /= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 110;\n' +
            '            x %= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 11;\n' +
            '            x *= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 121 }
    },
    {
        sourceCode: '\n' +
            '            let x = 12;\n' +
            '            x += 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 24 }
    },
    {
        sourceCode: '\n' +
            '            let x = 24;\n' +
            '            x -= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 12 }
    },
    {
        sourceCode: '\n' +
            '            let x = 120;\n' +
            '            x /= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 120;\n' +
            '            x %= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 12;\n' +
            '            x *= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 144 }
    },
    {
        sourceCode: '\n' +
            '            let x = 13;\n' +
            '            x += 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 26 }
    },
    {
        sourceCode: '\n' +
            '            let x = 26;\n' +
            '            x -= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 13 }
    },
    {
        sourceCode: '\n' +
            '            let x = 130;\n' +
            '            x /= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 130;\n' +
            '            x %= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 13;\n' +
            '            x *= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 169 }
    },
    {
        sourceCode: '\n' +
            '            let x = 14;\n' +
            '            x += 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 28 }
    },
    {
        sourceCode: '\n' +
            '            let x = 28;\n' +
            '            x -= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 14 }
    },
    {
        sourceCode: '\n' +
            '            let x = 140;\n' +
            '            x /= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 140;\n' +
            '            x %= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 14;\n' +
            '            x *= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 196 }
    },
    {
        sourceCode: '\n' +
            '            let x = 15;\n' +
            '            x += 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 30 }
    },
    {
        sourceCode: '\n' +
            '            let x = 30;\n' +
            '            x -= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 15 }
    },
    {
        sourceCode: '\n' +
            '            let x = 150;\n' +
            '            x /= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 150;\n' +
            '            x %= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 15;\n' +
            '            x *= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 225 }
    },
    {
        sourceCode: '\n' +
            '            let x = 16;\n' +
            '            x += 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 32 }
    },
    {
        sourceCode: '\n' +
            '            let x = 32;\n' +
            '            x -= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 16 }
    },
    {
        sourceCode: '\n' +
            '            let x = 160;\n' +
            '            x /= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 160;\n' +
            '            x %= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 16;\n' +
            '            x *= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 256 }
    },
    {
        sourceCode: '\n' +
            '            let x = 17;\n' +
            '            x += 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 34 }
    },
    {
        sourceCode: '\n' +
            '            let x = 34;\n' +
            '            x -= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 17 }
    },
    {
        sourceCode: '\n' +
            '            let x = 170;\n' +
            '            x /= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 170;\n' +
            '            x %= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 17;\n' +
            '            x *= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 289 }
    },
    {
        sourceCode: '\n' +
            '            let x = 18;\n' +
            '            x += 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 36 }
    },
    {
        sourceCode: '\n' +
            '            let x = 36;\n' +
            '            x -= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 18 }
    },
    {
        sourceCode: '\n' +
            '            let x = 180;\n' +
            '            x /= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 180;\n' +
            '            x %= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 18;\n' +
            '            x *= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 324 }
    },
    {
        sourceCode: '\n' +
            '            let x = 19;\n' +
            '            x += 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 38 }
    },
    {
        sourceCode: '\n' +
            '            let x = 38;\n' +
            '            x -= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 19 }
    },
    {
        sourceCode: '\n' +
            '            let x = 190;\n' +
            '            x /= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 190;\n' +
            '            x %= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 19;\n' +
            '            x *= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 361 }
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x += 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 40 }
    },
    {
        sourceCode: '\n' +
            '            let x = 40;\n' +
            '            x -= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 20 }
    },
    {
        sourceCode: '\n' +
            '            let x = 200;\n' +
            '            x /= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '            let x = 200;\n' +
            '            x %= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x *= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: { type: ValueType.NUMBER, value: 400 }
    },
    {
        sourceCode: '\n' +
            '        let a = 47;\n' +
            '        let b = 41;\n' +
            '        let c = 69;\n' +
            '        a %= b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 414 }
    },
    {
        sourceCode: '\n' +
            '        let a = 77;\n' +
            '        let b = 95;\n' +
            '        let c = 97;\n' +
            '        a %= b;\n' +
            '        b -= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 7469 }
    },
    {
        sourceCode: '\n' +
            '        let a = 83;\n' +
            '        let b = 18;\n' +
            '        let c = 73;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 7373 }
    },
    {
        sourceCode: '\n' +
            '        let a = 92;\n' +
            '        let b = 54;\n' +
            '        let c = 12;\n' +
            '        a *= b;\n' +
            '        b += c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -4956 }
    },
    {
        sourceCode: '\n' +
            '        let a = 42;\n' +
            '        let b = 73;\n' +
            '        let c = 94;\n' +
            '        a += b;\n' +
            '        b %= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 94 }
    },
    {
        sourceCode: '\n' +
            '        let a = 76;\n' +
            '        let b = 30;\n' +
            '        let c = 96;\n' +
            '        a += b;\n' +
            '        b -= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 96 }
    },
    {
        sourceCode: '\n' +
            '        let a = 27;\n' +
            '        let b = 35;\n' +
            '        let c = 87;\n' +
            '        a *= b;\n' +
            '        b /= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 0.09206349206349207 }
    },
    {
        sourceCode: '\n' +
            '        let a = 25;\n' +
            '        let b = 92;\n' +
            '        let c = 56;\n' +
            '        a *= b;\n' +
            '        b %= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -2244 }
    },
    {
        sourceCode: '\n' +
            '        let a = 100;\n' +
            '        let b = 14;\n' +
            '        let c = 9;\n' +
            '        a -= b;\n' +
            '        b -= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 9 }
    },
    {
        sourceCode: '\n' +
            '        let a = 28;\n' +
            '        let b = 34;\n' +
            '        let c = 86;\n' +
            '        a += b;\n' +
            '        b %= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 24 }
    },
    {
        sourceCode: '\n' +
            '        let a = 44;\n' +
            '        let b = 43;\n' +
            '        let c = 46;\n' +
            '        a -= b;\n' +
            '        b /= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 46 }
    },
    {
        sourceCode: '\n' +
            '        let a = 78;\n' +
            '        let b = 7;\n' +
            '        let c = 80;\n' +
            '        a += b;\n' +
            '        b -= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 165 }
    },
    {
        sourceCode: '\n' +
            '        let a = 7;\n' +
            '        let b = 49;\n' +
            '        let c = 52;\n' +
            '        a /= b;\n' +
            '        b *= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 2.886579864025407e-15 }
    },
    {
        sourceCode: '\n' +
            '        let a = 52;\n' +
            '        let b = 17;\n' +
            '        let c = 43;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 43 }
    },
    {
        sourceCode: '\n' +
            '        let a = 56;\n' +
            '        let b = 20;\n' +
            '        let c = 14;\n' +
            '        a %= b;\n' +
            '        b -= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 224 }
    },
    {
        sourceCode: '\n' +
            '        let a = 2;\n' +
            '        let b = 80;\n' +
            '        let c = 50;\n' +
            '        a %= b;\n' +
            '        b /= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 48 }
    },
    {
        sourceCode: '\n' +
            '        let a = 89;\n' +
            '        let b = 14;\n' +
            '        let c = 59;\n' +
            '        a /= b;\n' +
            '        b %= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 65.35714285714286 }
    },
    {
        sourceCode: '\n' +
            '        let a = 69;\n' +
            '        let b = 94;\n' +
            '        let c = 50;\n' +
            '        a += b;\n' +
            '        b %= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 213 }
    },
    {
        sourceCode: '\n' +
            '        let a = 28;\n' +
            '        let b = 8;\n' +
            '        let c = 95;\n' +
            '        a %= b;\n' +
            '        b += c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 91 }
    },
    {
        sourceCode: '\n' +
            '        let a = 93;\n' +
            '        let b = 78;\n' +
            '        let c = 18;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -153 }
    },
    {
        sourceCode: '\n' +
            '        let a = 61;\n' +
            '        let b = 95;\n' +
            '        let c = 47;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -109 }
    },
    {
        sourceCode: '\n' +
            '        let a = 39;\n' +
            '        let b = 43;\n' +
            '        let c = 37;\n' +
            '        a -= b;\n' +
            '        b += c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 41 }
    },
    {
        sourceCode: '\n' +
            '        let a = 95;\n' +
            '        let b = 60;\n' +
            '        let c = 32;\n' +
            '        a -= b;\n' +
            '        b %= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 32 }
    },
    {
        sourceCode: '\n' +
            '        let a = 41;\n' +
            '        let b = 23;\n' +
            '        let c = 43;\n' +
            '        a *= b;\n' +
            '        b -= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 0.04559915164369035 }
    },
    {
        sourceCode: '\n' +
            '        let a = 70;\n' +
            '        let b = 39;\n' +
            '        let c = 92;\n' +
            '        a *= b;\n' +
            '        b *= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 92 }
    },
    {
        sourceCode: '\n' +
            '        let a = 45;\n' +
            '        let b = 14;\n' +
            '        let c = 36;\n' +
            '        a %= b;\n' +
            '        b /= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 33 }
    },
    {
        sourceCode: '\n' +
            '        let a = 89;\n' +
            '        let b = 45;\n' +
            '        let c = 94;\n' +
            '        a *= b;\n' +
            '        b += c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 376470 }
    },
    {
        sourceCode: '\n' +
            '        let a = 94;\n' +
            '        let b = 25;\n' +
            '        let c = 37;\n' +
            '        a /= b;\n' +
            '        b -= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 139.12 }
    },
    {
        sourceCode: '\n' +
            '        let a = 45;\n' +
            '        let b = 92;\n' +
            '        let c = 28;\n' +
            '        a += b;\n' +
            '        b += c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 3836 }
    },
    {
        sourceCode: '\n' +
            '        let a = 39;\n' +
            '        let b = 71;\n' +
            '        let c = 93;\n' +
            '        a -= b;\n' +
            '        b %= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 125 }
    },
    {
        sourceCode: '\n' +
            '        let a = 92;\n' +
            '        let b = 100;\n' +
            '        let c = 84;\n' +
            '        a /= b;\n' +
            '        b *= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 83.08 }
    },
    {
        sourceCode: '\n' +
            '        let a = 68;\n' +
            '        let b = 86;\n' +
            '        let c = 62;\n' +
            '        a *= b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 362576 }
    },
    {
        sourceCode: '\n' +
            '        let a = 66;\n' +
            '        let b = 92;\n' +
            '        let c = 11;\n' +
            '        a /= b;\n' +
            '        b /= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 7.891304347826087 }
    },
    {
        sourceCode: '\n' +
            '        let a = 52;\n' +
            '        let b = 73;\n' +
            '        let c = 49;\n' +
            '        a += b;\n' +
            '        b -= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -76 }
    },
    {
        sourceCode: '\n' +
            '        let a = 38;\n' +
            '        let b = 34;\n' +
            '        let c = 45;\n' +
            '        a /= b;\n' +
            '        b %= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 40.26315789473684 }
    },
    {
        sourceCode: '\n' +
            '        let a = 99;\n' +
            '        let b = 89;\n' +
            '        let c = 16;\n' +
            '        a %= b;\n' +
            '        b += c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 26 }
    },
    {
        sourceCode: '\n' +
            '        let a = 31;\n' +
            '        let b = 28;\n' +
            '        let c = 22;\n' +
            '        a *= b;\n' +
            '        b += c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 22 }
    },
    {
        sourceCode: '\n' +
            '        let a = 48;\n' +
            '        let b = 99;\n' +
            '        let c = 8;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -139 }
    },
    {
        sourceCode: '\n' +
            '        let a = 88;\n' +
            '        let b = 53;\n' +
            '        let c = 73;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 10293 }
    },
    {
        sourceCode: '\n' +
            '        let a = 4;\n' +
            '        let b = 47;\n' +
            '        let c = 56;\n' +
            '        a *= b;\n' +
            '        b *= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 10528 }
    },
    {
        sourceCode: '\n' +
            '        let a = 70;\n' +
            '        let b = 82;\n' +
            '        let c = 12;\n' +
            '        a /= b;\n' +
            '        b /= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 14.057142857142857 }
    },
    {
        sourceCode: '\n' +
            '        let a = 17;\n' +
            '        let b = 85;\n' +
            '        let c = 78;\n' +
            '        a -= b;\n' +
            '        b -= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '        let a = 11;\n' +
            '        let b = 6;\n' +
            '        let c = 47;\n' +
            '        a /= b;\n' +
            '        b /= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 1.1666666666666685 }
    },
    {
        sourceCode: '\n' +
            '        let a = 1;\n' +
            '        let b = 9;\n' +
            '        let c = 34;\n' +
            '        a %= b;\n' +
            '        b *= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 33 }
    },
    {
        sourceCode: '\n' +
            '        let a = 70;\n' +
            '        let b = 16;\n' +
            '        let c = 84;\n' +
            '        a %= b;\n' +
            '        b += c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 14 }
    },
    {
        sourceCode: '\n' +
            '        let a = 80;\n' +
            '        let b = 70;\n' +
            '        let c = 12;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 1800 }
    },
    {
        sourceCode: '\n' +
            '        let a = 73;\n' +
            '        let b = 52;\n' +
            '        let c = 84;\n' +
            '        a *= b;\n' +
            '        b -= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 3880 }
    },
    {
        sourceCode: '\n' +
            '        let a = 89;\n' +
            '        let b = 18;\n' +
            '        let c = 24;\n' +
            '        a += b;\n' +
            '        b /= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 131 }
    },
    {
        sourceCode: '\n' +
            '        let a = 62;\n' +
            '        let b = 41;\n' +
            '        let c = 57;\n' +
            '        a -= b;\n' +
            '        b += c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 78 }
    },
    {
        sourceCode: '\n' +
            '        let a = 78;\n' +
            '        let b = 58;\n' +
            '        let c = 63;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 0.4632352941176471 }
    },
    {
        sourceCode: '\n' +
            '        let a = 25;\n' +
            '        let b = 43;\n' +
            '        let c = 2;\n' +
            '        a -= b;\n' +
            '        b -= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 2 }
    },
    {
        sourceCode: '\n' +
            '        let a = 68;\n' +
            '        let b = 4;\n' +
            '        let c = 56;\n' +
            '        a *= b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 15232 }
    },
    {
        sourceCode: '\n' +
            '        let a = 67;\n' +
            '        let b = 57;\n' +
            '        let c = 65;\n' +
            '        a %= b;\n' +
            '        b /= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 650 }
    },
    {
        sourceCode: '\n' +
            '        let a = 87;\n' +
            '        let b = 2;\n' +
            '        let c = 65;\n' +
            '        a %= b;\n' +
            '        b *= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 65 }
    },
    {
        sourceCode: '\n' +
            '        let a = 39;\n' +
            '        let b = 21;\n' +
            '        let c = 79;\n' +
            '        a += b;\n' +
            '        b += c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 19 }
    },
    {
        sourceCode: '\n' +
            '        let a = 87;\n' +
            '        let b = 75;\n' +
            '        let c = 69;\n' +
            '        a %= b;\n' +
            '        b += c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 57 }
    },
    {
        sourceCode: '\n' +
            '        let a = 30;\n' +
            '        let b = 83;\n' +
            '        let c = 86;\n' +
            '        a *= b;\n' +
            '        b *= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 2576 }
    },
    {
        sourceCode: '\n' +
            '        let a = 46;\n' +
            '        let b = 35;\n' +
            '        let c = 90;\n' +
            '        a += b;\n' +
            '        b *= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 7290 }
    },
    {
        sourceCode: '\n' +
            '        let a = 59;\n' +
            '        let b = 33;\n' +
            '        let c = 48;\n' +
            '        a += b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 4416 }
    },
    {
        sourceCode: '\n' +
            '        let a = 47;\n' +
            '        let b = 35;\n' +
            '        let c = 31;\n' +
            '        a -= b;\n' +
            '        b *= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 2.5833333333333335 }
    },
    {
        sourceCode: '\n' +
            '        let a = 48;\n' +
            '        let b = 64;\n' +
            '        let c = 47;\n' +
            '        a -= b;\n' +
            '        b *= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 31 }
    },
    {
        sourceCode: '\n' +
            '        let a = 50;\n' +
            '        let b = 43;\n' +
            '        let c = 60;\n' +
            '        a /= b;\n' +
            '        b %= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 51.599999999999994 }
    },
    {
        sourceCode: '\n' +
            '        let a = 31;\n' +
            '        let b = 68;\n' +
            '        let c = 73;\n' +
            '        a %= b;\n' +
            '        b /= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 11 }
    },
    {
        sourceCode: '\n' +
            '        let a = 27;\n' +
            '        let b = 76;\n' +
            '        let c = 76;\n' +
            '        a *= b;\n' +
            '        b += c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 0.037037037037037035 }
    },
    {
        sourceCode: '\n' +
            '        let a = 91;\n' +
            '        let b = 26;\n' +
            '        let c = 19;\n' +
            '        a += b;\n' +
            '        b += c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 19 }
    },
    {
        sourceCode: '\n' +
            '        let a = 60;\n' +
            '        let b = 96;\n' +
            '        let c = 27;\n' +
            '        a += b;\n' +
            '        b -= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 183 }
    },
    {
        sourceCode: '\n' +
            '        let a = 47;\n' +
            '        let b = 60;\n' +
            '        let c = 46;\n' +
            '        a -= b;\n' +
            '        b %= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -3.5384615384615383 }
    },
    {
        sourceCode: '\n' +
            '        let a = 86;\n' +
            '        let b = 51;\n' +
            '        let c = 80;\n' +
            '        a *= b;\n' +
            '        b -= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -4306 }
    },
    {
        sourceCode: '\n' +
            '        let a = 83;\n' +
            '        let b = 26;\n' +
            '        let c = 90;\n' +
            '        a *= b;\n' +
            '        b *= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 90 }
    },
    {
        sourceCode: '\n' +
            '        let a = 26;\n' +
            '        let b = 59;\n' +
            '        let c = 9;\n' +
            '        a /= b;\n' +
            '        b %= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 20.423076923076923 }
    },
    {
        sourceCode: '\n' +
            '        let a = 78;\n' +
            '        let b = 9;\n' +
            '        let c = 69;\n' +
            '        a += b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 6003 }
    },
    {
        sourceCode: '\n' +
            '        let a = 86;\n' +
            '        let b = 93;\n' +
            '        let c = 90;\n' +
            '        a %= b;\n' +
            '        b -= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 4 }
    },
    {
        sourceCode: '\n' +
            '        let a = 21;\n' +
            '        let b = 58;\n' +
            '        let c = 52;\n' +
            '        a *= b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 63336 }
    },
    {
        sourceCode: '\n' +
            '        let a = 53;\n' +
            '        let b = 48;\n' +
            '        let c = 51;\n' +
            '        a /= b;\n' +
            '        b += c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 52.104166666666664 }
    },
    {
        sourceCode: '\n' +
            '        let a = 74;\n' +
            '        let b = 9;\n' +
            '        let c = 57;\n' +
            '        a *= b;\n' +
            '        b *= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 57 }
    },
    {
        sourceCode: '\n' +
            '        let a = 25;\n' +
            '        let b = 22;\n' +
            '        let c = 58;\n' +
            '        a %= b;\n' +
            '        b -= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 1 }
    },
    {
        sourceCode: '\n' +
            '        let a = 28;\n' +
            '        let b = 86;\n' +
            '        let c = 17;\n' +
            '        a += b;\n' +
            '        b %= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 0.14912280701754385 }
    },
    {
        sourceCode: '\n' +
            '        let a = 15;\n' +
            '        let b = 25;\n' +
            '        let c = 39;\n' +
            '        a -= b;\n' +
            '        b /= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 29 }
    },
    {
        sourceCode: '\n' +
            '        let a = 33;\n' +
            '        let b = 77;\n' +
            '        let c = 98;\n' +
            '        a -= b;\n' +
            '        b %= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: '\n' +
            '        let a = 16;\n' +
            '        let b = 33;\n' +
            '        let c = 69;\n' +
            '        a /= b;\n' +
            '        b += c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 69.48484848484848 }
    },
    {
        sourceCode: '\n' +
            '        let a = 9;\n' +
            '        let b = 76;\n' +
            '        let c = 45;\n' +
            '        a /= b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 5.328947368421052 }
    },
    {
        sourceCode: '\n' +
            '        let a = 46;\n' +
            '        let b = 58;\n' +
            '        let c = 66;\n' +
            '        a -= b;\n' +
            '        b /= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 6 }
    },
    {
        sourceCode: '\n' +
            '        let a = 39;\n' +
            '        let b = 45;\n' +
            '        let c = 23;\n' +
            '        a -= b;\n' +
            '        b /= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 29 }
    },
    {
        sourceCode: '\n' +
            '        let a = 96;\n' +
            '        let b = 3;\n' +
            '        let c = 7;\n' +
            '        a += b;\n' +
            '        b -= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 106 }
    },
    {
        sourceCode: '\n' +
            '        let a = 99;\n' +
            '        let b = 38;\n' +
            '        let c = 3;\n' +
            '        a *= b;\n' +
            '        b -= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 11286 }
    },
    {
        sourceCode: '\n' +
            '        let a = 60;\n' +
            '        let b = 74;\n' +
            '        let c = 34;\n' +
            '        a *= b;\n' +
            '        b -= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 4474 }
    },
    {
        sourceCode: '\n' +
            '        let a = 70;\n' +
            '        let b = 78;\n' +
            '        let c = 46;\n' +
            '        a *= b;\n' +
            '        b *= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 46 }
    },
    {
        sourceCode: '\n' +
            '        let a = 46;\n' +
            '        let b = 98;\n' +
            '        let c = 15;\n' +
            '        a *= b;\n' +
            '        b /= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 15 }
    },
    {
        sourceCode: '\n' +
            '        let a = 65;\n' +
            '        let b = 41;\n' +
            '        let c = 19;\n' +
            '        a += b;\n' +
            '        b -= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 19 }
    },
    {
        sourceCode: '\n' +
            '        let a = 4;\n' +
            '        let b = 64;\n' +
            '        let c = 71;\n' +
            '        a -= b;\n' +
            '        b %= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 131 }
    },
    {
        sourceCode: '\n' +
            '        let a = 30;\n' +
            '        let b = 24;\n' +
            '        let c = 54;\n' +
            '        a *= b;\n' +
            '        b /= c;\n' +
            '        c %= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 54 }
    },
    {
        sourceCode: '\n' +
            '        let a = 8;\n' +
            '        let b = 17;\n' +
            '        let c = 77;\n' +
            '        a -= b;\n' +
            '        b /= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 86 }
    },
    {
        sourceCode: '\n' +
            '        let a = 41;\n' +
            '        let b = 85;\n' +
            '        let c = 42;\n' +
            '        a /= b;\n' +
            '        b %= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 41.51764705882353 }
    },
    {
        sourceCode: '\n' +
            '        let a = 27;\n' +
            '        let b = 17;\n' +
            '        let c = 52;\n' +
            '        a %= b;\n' +
            '        b *= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 5.2 }
    },
    {
        sourceCode: '\n' +
            '        let a = 81;\n' +
            '        let b = 34;\n' +
            '        let c = 27;\n' +
            '        a /= b;\n' +
            '        b *= c;\n' +
            '        c -= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 24.61764705882353 }
    },
    {
        sourceCode: '\n' +
            '        let a = 37;\n' +
            '        let b = 12;\n' +
            '        let c = 27;\n' +
            '        a -= b;\n' +
            '        b *= c;\n' +
            '        c += a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 52 }
    },
    {
        sourceCode: '\n' +
            '        let a = 80;\n' +
            '        let b = 87;\n' +
            '        let c = 1;\n' +
            '        a *= b;\n' +
            '        b /= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 0.00014367816091954023 }
    },
    {
        sourceCode: '\n' +
            '        let a = 19;\n' +
            '        let b = 97;\n' +
            '        let c = 69;\n' +
            '        a -= b;\n' +
            '        b %= c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: -5382 }
    },
    {
        sourceCode: '\n' +
            '        let a = 30;\n' +
            '        let b = 25;\n' +
            '        let c = 99;\n' +
            '        a -= b;\n' +
            '        b += c;\n' +
            '        c *= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: { type: ValueType.NUMBER, value: 495 }
    },
    {
        sourceCode: `
            let x= 0.56;
            let y = 0.56;
            let z = 0.56 + 32;
        
            let result = x + y + z;
        `,
        expected: { type: ValueType.NUMBER, value: 33.68 }
    },
    {
        sourceCode: `
            let result = null;
            if(0.1 == 0.05 + 0.05){
                result = 0.95;
            }else{
                result = 0.76;
            }
        `,
        expected: { type: ValueType.NUMBER, value: 0.95 }
    },
    {
        sourceCode: `
            let result = 234534543.999992
        `,
        expected: { type: ValueType.NUMBER, value: 234534543.999992 }
    },
    {
        sourceCode: `
            let result = 234534543.
        `,
        expected: { type: ValueType.NUMBER, value: 234534543 }
    },
    {
        sourceCode: `
            let result = .5
        `,
        expected: { type: ValueType.NUMBER, value: 0.5 }
    },
    {
        sourceCode: `
            let x = .54;

            for (let i = 0; i < 10; i++){
                x  += .05;
            }

            let result = .900;
            if (x > 1){
                result = .5;
            }
        `,
        expected: { type: ValueType.NUMBER, value: 0.5 }
    },
    {
        sourceCode: `
            function a(){
                function b(){
                    return 0.5;
                }

                return b;
            }

            let result = a()();
        `,
        expected: { type: ValueType.NUMBER, value: 0.5 }
    },
    {
        sourceCode: `
            let a= 1;

            function x(){
                function y(){
                    function z(){
                        a += 5; 
                    }

                    return z;
                }

                return y;
            }

            let incrementor = x()();

            for(let i = 0; i < 10; i++){
                incrementor();
            }
            
            let result = a;
        `,
        expected: { type: ValueType.NUMBER, value: 51 }
    },
    {
        sourceCode: `
            let x = 100 * (24/6);
            let steps = 0;
            while(x-- > 0){steps++;}

            let result = steps;
            `,
        expected: { type: ValueType.NUMBER, value: 400 }
    },
    {
        sourceCode: `
            {let x=1;{{{{{{{{let helloWorld = 1;x++;x--;--x;++x;}}let result = x*100;}}}let result = x;}}let result = x;}
            let result = x;
            }
            
            let result = 0;
            `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    {
        sourceCode: `
            let x = 1;
            let y = 2;
            let z = 3;
            let a = 4;
            let b = 5;
            let c = 6;
            let d = 7;
            let e = 8;
            let f = 9;
                
            let result = x + y + z + a + b + c + d + e + f;
            `,
        expected: { type: ValueType.NUMBER, value: 45 }
    },
    {
        sourceCode: `
            function x(){
                return 23423423423.32432;
            }

            let result = x() - x();

            for(let i = 0; i < 10; i++){
                function x(){
                    return i;
                }

                result += x();
            }
            `,
        expected: { type: ValueType.NUMBER, value: 45 }
    },
    {
        sourceCode: `
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    if (i == 5 && j == 5)
                        break;
                }
                    
                if (i == 5)
                    break;
            }
            let result = i;
            `,
        expected: { type: ValueType.NUMBER, value: 5 }
    },
    {
        sourceCode: `
            while(true){
                break;
            }
            for(let i = 0; i < 10; i++){
                break;
            }
            
            i = 0;
            while(true){
                if(i++ <= 13243.234) continue;
                else break;
            }

            let result = i;
            `,
        expected: { type: ValueType.NUMBER, value: 13245 }
    },
    {
        sourceCode: `
            // This is a comment
            let x = 1;
            let y = 2;

            // This is another comment
            let z = 3; // This is a comment at the end of the line

            let result = x + y + z;
            `,
        expected: { type: ValueType.NUMBER, value: 6 }
    },
    {
        sourceCode: `
            /* This is a comment */
            let x = 1;

            /* 
                This is another comment
            /* 
            
                */
            let y =2
            /**************** 
             * 
             * *******/

            let z = 3; /* This is a comment at the end of the line */

            let result = x + y + z;
            `,
        expected: { type: ValueType.NUMBER, value: 6 }
    },
    {
        sourceCode: `
            let y = syscall;

            let result = y;

            // Premature syscall
            y("dummy", result);
        `,
        expected: { type: ValueType.SYSCALL, value: "syscall" }
    },
    {
        sourceCode: `
            function add(a, b){
                return a + b;
            }

            function addOne(a){
                return add(a, 1);
            }

            function subTwo(a){
                return add(a, - 2);
            }

            function zero(a){
                return add(a, -a);
            }

            function mul(a, b){return a * b;}

            function zeroer(){
               
                function zero(a, shouldZero){
                    if (shouldZero){
                        return mul(a, 0);
                    }
                    else {
                        return a;
                    }
                }

                return zero;
            }

            let result = zero(addOne(subTwo(0))) + zeroer()(addOne(subTwo(0)), true);
        `,
        expected: { type: ValueType.NUMBER, value: 0 }
    },
    // numbers in identifiers, underscores in identifiers
    {
        sourceCode: `
            let xX_23423432_asdasdsa = 1;
            let _ = 2;
            let __ = 3;
            let ___ = 4;

            let result = xX_23423432_asdasdsa + _ + __ + ___;
            `
        ,
        expected: { type: ValueType.NUMBER, value: 10 }
    },
    {
        sourceCode: `
            let came_case_is_my_life    = 1.23432;
            if (came_case_is_my_life > 2.23432){
                let result = 1;
            }
            else{
                let result = 0;
            }

            let result = 0;
            `
        ,
        expected: { type: ValueType.NUMBER, value: 0 }
    }
]

const invalidTestSourceCodes = [
    {
        sourceCode: `
        let x = 1;
        let x = 2;
        `,
        expected: VariableAlreadyDeclared
    },
    {
        sourceCode: `
        {
            let x = 1;
            let x = "lol";
        }
        `,
        expected: VariableAlreadyDeclaredInScope
    },
    {
        sourceCode: `
        if(true){
            let x = 1;
            {
                {
                    {
                        let x = "lol"
                    }
                }
            };
        }
        `,
        expected: VariableAlreadyDeclaredInScope
    },
    {
        sourceCode: `
        x++;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode: `
        if(true){
            let y = 100;    
        }
        let y = x + 1000;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode: `
        let y = 100;
        for(let i = 0; i < 100; i++){
            y = y - 1;   
        }
        x = y;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode: `
        let y = 100;
        for(let i = 0; i < 100; i++){
            y = y - 1;
        }
        
        if (y == 0){
            x = y;
        }
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode: `
        function decToNegative(i, j){
            if (i < 0) return 0;
            return decToNegative(i-j);
        }

        let result = decToNegative(10, 1);
        `,
        expected: FunctionArgumentNumberMismatch
    },
    {
        sourceCode: `
        print(1,2);
        `,
        expected: NativeFunctionArgumentNumberMismatch
    },
    {
        sourceCode: `
        1 && true;
        `,
        expected: InvalidType
    },
    {
        sourceCode: `
        let x = 1;
        for(let i = 0; i < 10; i++){
            x = x + 1;
        }
        break;
        `,
        expected: SyntaxError
    },
    {
        sourceCode: `
        let x = 10;
        x+`,
        expected: SyntaxError
    },
    {
        sourceCode: '\n' +
            '        let a = 48;\n' +
            '        let b = 16;\n' +
            '        let c = 66;\n' +
            '        a %= b;\n' +
            '        b /= c;\n' +
            '        c /= a;\n' +
            '        let result = c;\n' +
            '    ',
        expected: DivisionByZero
    },
    {
        sourceCode:
        `
        x;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode:
        `
        x()()();
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode:
        `
         let 0xxx = 1; // variable name cannot start with a number
        `,
        expected: SyntaxError
    },
    {
        sourceCode:
        `
         let 23423432432423_ = 1; // variable name cannot start with a number
        `,
        expected: SyntaxError
    },
];

test.each(validTestSourceCodes)('.eval($sourceCode)',
    ({ sourceCode, expected }) => {
        const result = evalValidSourceCode(sourceCode);
        expect(result).toEqual(expected);
    }
);

test.each(invalidTestSourceCodes)('.eval($sourceCode)',
    ({ sourceCode, expected }) => {
        expect(() => evalInvalidSourceCode(sourceCode)).toThrowError(expected);
    }
);