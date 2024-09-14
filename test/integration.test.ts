import { expect, test } from '@jest/globals';
import { compile, evaluate } from '../src/index';
import {BooleanValue, FunctionValue, ListValue, MemberMethodValue, NativeValue,NullValue,NumberValue,StringValue,SyscallValue,TupleValue} from '../src/value';
import { DivisionByZero, FunctionArgumentNumberMismatch, InvalidOperationOnType, KeyError, NativeFunctionArgumentNumberMismatch, NoSuchMemberMethod, SycallArgumentNumberMismatch, SyntaxError, VariableAlreadyDeclared, VariableAlreadyDeclaredInScope, VariableNotDeclared } from '../src/error';

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
        expected: new NumberValue(3)
    },
    {
        sourceCode: 'let result = 1 + 2 * 3;',
        expected: new NumberValue(7)
    },
    {
        sourceCode: `
            let x = 1;

            while (x < 10) {
                x = x + 1;
            }

            let result = x;
        `,
        expected: new NumberValue(10)
    },
    {
        sourceCode: `
            let x = 2;

            while( x < 12) {
                x = x * 87;
            }

            let result = x;
        `,
        expected: new NumberValue(2*87)
    },
    {
        sourceCode: `
            let x = 2;

            for(let i = 0; i < 10; i = i + 1) {
                x = x * 2;
            }

            let result = x;
        `,
        expected: new NumberValue(2**11)
    },
    {
        sourceCode: `
            let result =  19 > 10;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let result =  19 < 10;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let result =  19 >= 10;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let result =  19 <= 10;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let result =  19 == 10;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let result =  19 != 10;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let result =  19 == 19;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let result =  19 != 19;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let result =  19 <= 19;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let result =  19 >= 19;
        `,
        expected: new BooleanValue(true)
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
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let result = "hello" + " " + "world";
        `,
        expected: new StringValue('hello world')
    },
    {
        sourceCode: `
            let result = 0;
            result++;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let result = 0;
            ++result;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = dummy++;
        `,
        expected: new NumberValue(0)
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = ++dummy;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = (++dummy) + 54;
        `,
        expected: new NumberValue(55)
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = (dummy++) + 34;
        `,
        expected: new NumberValue(34)
    },
    {
        sourceCode: `
            let dummy = 5 == 5 || 4 == 5;
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = 5 == 5 && 4 == 5;
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = 4 == 9000 && "string" == "string" || 5 == 5;
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `  
            let dummy = bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = bool("true") || bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("false") || bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = bool("false") || bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true") || bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true") || bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("false") || bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true") || bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true") || bool("false");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("false") || bool("true");
            let result = dummy;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let num = "123";
            let result = num + str(1);
        `,
        expected: new StringValue('1231')
    },
    {
        sourceCode: `let result = null;`,
        expected: new NullValue()
    },
    {
        sourceCode: `
            let num = "123";
            num = number(num);
            let result = num + 1;
        `,
        expected: new NumberValue(124)
    },
    {
        sourceCode: `
            let a = 0;
            let b = 1;

            let result = a + b;
            result = bool(a+b);
        `,
        expected: new BooleanValue(true)
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
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
        function fib(i){
            if (i < 2) return i;
            return fib(i-1) + fib(i-2);
        }

        let result = fib(10);
        `,
        expected: new NumberValue(55)
    },
    {
        sourceCode: `
        function decToZero(i){
            if (i == 0) return 0;
            return decToZero(i-1);
        }

        let result = decToZero(10);
        `,
        expected: new NumberValue(0)
    },
    {
        sourceCode: `
        function decToNegative(i, j){
            if (i < 0) return 0;
            return decToNegative(i-j, j);
        }

        let result = decToNegative(10, 1);
        `,
        expected: new NumberValue(0)
    },
    // Overrides the built-in random function
    {
        sourceCode: `
        let i = 0;
        let result = i++;
        `,
        expected: new NumberValue(0)
    },
    {
        sourceCode: `
        let i = 0;
        let result = ++i;
        `,
        expected: new NumberValue(1)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(5)
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
        expected: new NumberValue(5)
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
        expected: new NumberValue(4)
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
        expected: new NumberValue(11)
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
        expected: new NumberValue(7)
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
        expected: new NumberValue(3)
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
        expected: new NumberValue(3)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(18)
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
        expected: new NumberValue(27)
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
        expected: new NumberValue(16)
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
        expected: new NumberValue(35)
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
        expected: new NumberValue(-9)
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
        expected: new NumberValue(-8)
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
        expected: new NumberValue(-6)
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
        expected: new NumberValue(47)
    },
    {
        sourceCode: `
            let x = 10;
            let y = x % 3;

            let result = y;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let x = 25;
            let y = x % 5;

            let result = y;
        `,
        expected: new NumberValue(0)
    },
    {
        sourceCode: `
            let x = 13;
            let y = x % 4;

            let result = y;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let x = 100;
            let y = x % 7;

            let result = y;
        `,
        expected: new NumberValue(2)
    },
    {
        sourceCode: `
            let x = 0;
            let y = x % 5;

            let result = y;
        `,
        expected: new NumberValue(0)
    },
    {
        sourceCode: `
            let x = 15;
            let y = x % 6;

            let result = y;
        `,
        expected: new NumberValue(3)
    },
    {
        sourceCode: `
            let x = 9;
            let y = x % 2;

            let result = y;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let x = 18;
            let y = x % 7;

            let result = y;
        `,
        expected: new NumberValue(4)
    },
    {
        sourceCode: `
            let x = 33;
            let y = x % 10;

            let result = y;
        `,
        expected: new NumberValue(3)
    },
    {
        sourceCode: `
            let x = 45;
            let y = x % 4;

            let result = y;
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let x = 45/2;
            let y = x % 4;

            let result = y;
        `,
        expected: new NumberValue(2.5)
    },
    {
        sourceCode: `
            let x = 4;
            x += 1;

            let result = x;
        `,
        expected: new NumberValue(5)
    },

    {
        sourceCode: '\n' +
            '            let x = 1;\n' +
            '            x += 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(3)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x += 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(15)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x -= 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(8)
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x -= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(15)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x /= 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(5)
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x /= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(5)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x %= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(1)
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x %= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(2)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x *= 2;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(20)
    },
    {
        sourceCode: '\n' +
            '            let x = 5;\n' +
            '            x *= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(20)
    },
    {
        sourceCode: '\n' +
            '            let x = 3;\n' +
            '            x += 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(6)
    },
    {
        sourceCode: '\n' +
            '            let x = 6;\n' +
            '            x -= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(3)
    },
    {
        sourceCode: '\n' +
            '            let x = 30;\n' +
            '            x /= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 30;\n' +
            '            x %= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 3;\n' +
            '            x *= 3;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(9)
    },
    {
        sourceCode: '\n' +
            '            let x = 4;\n' +
            '            x += 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(8)
    },
    {
        sourceCode: '\n' +
            '            let x = 8;\n' +
            '            x -= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(4)
    },
    {
        sourceCode: '\n' +
            '            let x = 40;\n' +
            '            x /= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 40;\n' +
            '            x %= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 4;\n' +
            '            x *= 4;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(16)
    },
    {
        sourceCode: '\n' +
            '            let x = 5;\n' +
            '            x += 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x -= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(5)
    },
    {
        sourceCode: '\n' +
            '            let x = 50;\n' +
            '            x /= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 50;\n' +
            '            x %= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 5;\n' +
            '            x *= 5;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(25)
    },
    {
        sourceCode: '\n' +
            '            let x = 6;\n' +
            '            x += 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(12)
    },
    {
        sourceCode: '\n' +
            '            let x = 12;\n' +
            '            x -= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(6)
    },
    {
        sourceCode: '\n' +
            '            let x = 60;\n' +
            '            x /= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 60;\n' +
            '            x %= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 6;\n' +
            '            x *= 6;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(36)
    },
    {
        sourceCode: '\n' +
            '            let x = 7;\n' +
            '            x += 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(14)
    },
    {
        sourceCode: '\n' +
            '            let x = 14;\n' +
            '            x -= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(7)
    },
    {
        sourceCode: '\n' +
            '            let x = 70;\n' +
            '            x /= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 70;\n' +
            '            x %= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 7;\n' +
            '            x *= 7;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(49)
    },
    {
        sourceCode: '\n' +
            '            let x = 8;\n' +
            '            x += 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(16)
    },
    {
        sourceCode: '\n' +
            '            let x = 16;\n' +
            '            x -= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(8)
    },
    {
        sourceCode: '\n' +
            '            let x = 80;\n' +
            '            x /= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 80;\n' +
            '            x %= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 8;\n' +
            '            x *= 8;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(64)
    },
    {
        sourceCode: '\n' +
            '            let x = 9;\n' +
            '            x += 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(18)
    },
    {
        sourceCode: '\n' +
            '            let x = 18;\n' +
            '            x -= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(9)
    },
    {
        sourceCode: '\n' +
            '            let x = 90;\n' +
            '            x /= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 90;\n' +
            '            x %= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 9;\n' +
            '            x *= 9;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(81)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x += 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(20)
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x -= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 100;\n' +
            '            x /= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 100;\n' +
            '            x %= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 10;\n' +
            '            x *= 10;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(100)
    },
    {
        sourceCode: '\n' +
            '            let x = 11;\n' +
            '            x += 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(22)
    },
    {
        sourceCode: '\n' +
            '            let x = 22;\n' +
            '            x -= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(11)
    },
    {
        sourceCode: '\n' +
            '            let x = 110;\n' +
            '            x /= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 110;\n' +
            '            x %= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 11;\n' +
            '            x *= 11;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(121)
    },
    {
        sourceCode: '\n' +
            '            let x = 12;\n' +
            '            x += 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(24)
    },
    {
        sourceCode: '\n' +
            '            let x = 24;\n' +
            '            x -= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(12)
    },
    {
        sourceCode: '\n' +
            '            let x = 120;\n' +
            '            x /= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 120;\n' +
            '            x %= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 12;\n' +
            '            x *= 12;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(144)
    },
    {
        sourceCode: '\n' +
            '            let x = 13;\n' +
            '            x += 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(26)
    },
    {
        sourceCode: '\n' +
            '            let x = 26;\n' +
            '            x -= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(13)
    },
    {
        sourceCode: '\n' +
            '            let x = 130;\n' +
            '            x /= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 130;\n' +
            '            x %= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 13;\n' +
            '            x *= 13;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(169)
    },
    {
        sourceCode: '\n' +
            '            let x = 14;\n' +
            '            x += 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(28)
    },
    {
        sourceCode: '\n' +
            '            let x = 28;\n' +
            '            x -= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(14)
    },
    {
        sourceCode: '\n' +
            '            let x = 140;\n' +
            '            x /= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 140;\n' +
            '            x %= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 14;\n' +
            '            x *= 14;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(196)
    },
    {
        sourceCode: '\n' +
            '            let x = 15;\n' +
            '            x += 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(30)
    },
    {
        sourceCode: '\n' +
            '            let x = 30;\n' +
            '            x -= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(15)
    },
    {
        sourceCode: '\n' +
            '            let x = 150;\n' +
            '            x /= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 150;\n' +
            '            x %= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 15;\n' +
            '            x *= 15;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(225)
    },
    {
        sourceCode: '\n' +
            '            let x = 16;\n' +
            '            x += 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(32)
    },
    {
        sourceCode: '\n' +
            '            let x = 32;\n' +
            '            x -= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(16)
    },
    {
        sourceCode: '\n' +
            '            let x = 160;\n' +
            '            x /= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 160;\n' +
            '            x %= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 16;\n' +
            '            x *= 16;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(256)
    },
    {
        sourceCode: '\n' +
            '            let x = 17;\n' +
            '            x += 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(34)
    },
    {
        sourceCode: '\n' +
            '            let x = 34;\n' +
            '            x -= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(17)
    },
    {
        sourceCode: '\n' +
            '            let x = 170;\n' +
            '            x /= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 170;\n' +
            '            x %= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 17;\n' +
            '            x *= 17;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(289)
    },
    {
        sourceCode: '\n' +
            '            let x = 18;\n' +
            '            x += 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(36)
    },
    {
        sourceCode: '\n' +
            '            let x = 36;\n' +
            '            x -= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(18)
    },
    {
        sourceCode: '\n' +
            '            let x = 180;\n' +
            '            x /= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 180;\n' +
            '            x %= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 18;\n' +
            '            x *= 18;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(324)
    },
    {
        sourceCode: '\n' +
            '            let x = 19;\n' +
            '            x += 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(38)
    },
    {
        sourceCode: '\n' +
            '            let x = 38;\n' +
            '            x -= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(19)
    },
    {
        sourceCode: '\n' +
            '            let x = 190;\n' +
            '            x /= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 190;\n' +
            '            x %= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 19;\n' +
            '            x *= 19;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(361)
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x += 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(40)
    },
    {
        sourceCode: '\n' +
            '            let x = 40;\n' +
            '            x -= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(20)
    },
    {
        sourceCode: '\n' +
            '            let x = 200;\n' +
            '            x /= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(10)
    },
    {
        sourceCode: '\n' +
            '            let x = 200;\n' +
            '            x %= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(0)
    },
    {
        sourceCode: '\n' +
            '            let x = 20;\n' +
            '            x *= 20;\n' +
            '\n' +
            '            let result = x;\n' +
            '        ',
        expected: new NumberValue(400)
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
        expected: new NumberValue(414)
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
        expected: new NumberValue(7469)
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
        expected: new NumberValue(7373)
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
        expected: new NumberValue(-4956)
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
        expected: new NumberValue(94)
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
        expected: new NumberValue(96)
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
        expected: new NumberValue(0.09206349206349207)
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
        expected: new NumberValue(-2244)
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
        expected: new NumberValue(9)
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
        expected: new NumberValue(24)
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
        expected: new NumberValue(46)
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
        expected: new NumberValue(165)
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
        expected: new NumberValue(2.886579864025407e-15)
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
        expected: new NumberValue(43)
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
        expected: new NumberValue(224)
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
        expected: new NumberValue(48)
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
        expected: new NumberValue(65.35714285714286)
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
        expected: new NumberValue(213)
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
        expected: new NumberValue(91)
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
        expected: new NumberValue(-153)
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
        expected: new NumberValue(-109)
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
        expected: new NumberValue(41)
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
        expected: new NumberValue(32)
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
        expected: new NumberValue(0.04559915164369035)
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
        expected: new NumberValue(92)
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
        expected: new NumberValue(33)
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
        expected: new NumberValue(376470)
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
        expected: new NumberValue(139.12)
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
        expected: new NumberValue(3836)
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
        expected: new NumberValue(125)
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
        expected: new NumberValue(83.08)
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
        expected: new NumberValue(362576)
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
        expected: new NumberValue(7.891304347826087)
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
        expected: new NumberValue(-76)
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
        expected: new NumberValue(40.26315789473684)
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
        expected: new NumberValue(26)
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
        expected: new NumberValue(22)
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
        expected: new NumberValue(-139)
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
        expected: new NumberValue(10293)
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
        expected: new NumberValue(10528)
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
        expected: new NumberValue(14.057142857142857)
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
        expected: new NumberValue(10)
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
        expected: new NumberValue(1.1666666666666685)
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
        expected: new NumberValue(33)
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
        expected: new NumberValue(14)
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
        expected: new NumberValue(1800)
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
        expected: new NumberValue(3880)
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
        expected: new NumberValue(131)
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
        expected: new NumberValue(78)
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
        expected: new NumberValue(0.4632352941176471)
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
        expected: new NumberValue(2)
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
        expected: new NumberValue(15232)
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
        expected: new NumberValue(650)
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
        expected: new NumberValue(65)
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
        expected: new NumberValue(19)
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
        expected: new NumberValue(57)
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
        expected: new NumberValue(2576)
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
        expected: new NumberValue(7290)
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
        expected: new NumberValue(4416)
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
        expected: new NumberValue(2.5833333333333335)
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
        expected: new NumberValue(31)
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
        expected: new NumberValue(51.599999999999994)
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
        expected: new NumberValue(11)
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
        expected: new NumberValue(0.037037037037037035)
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
        expected: new NumberValue(19)
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
        expected: new NumberValue(183)
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
        expected: new NumberValue(-3.5384615384615383)
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
        expected: new NumberValue(-4306)
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
        expected: new NumberValue(90)
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
        expected: new NumberValue(20.423076923076923)
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
        expected: new NumberValue(6003)
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
        expected: new NumberValue(4)
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
        expected: new NumberValue(63336)
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
        expected: new NumberValue(52.104166666666664)
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
        expected: new NumberValue(57)
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
        expected: new NumberValue(1)
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
        expected: new NumberValue(0.14912280701754385)
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
        expected: new NumberValue(29)
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
        expected: new NumberValue(10)
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
        expected: new NumberValue(69.48484848484848)
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
        expected: new NumberValue(5.328947368421052)
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
        expected: new NumberValue(6)
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
        expected: new NumberValue(29)
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
        expected: new NumberValue(106)
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
        expected: new NumberValue(11286)
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
        expected: new NumberValue(4474)
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
        expected: new NumberValue(46)
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
        expected: new NumberValue(15)
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
        expected: new NumberValue(19)
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
        expected: new NumberValue(131)
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
        expected: new NumberValue(54)
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
        expected: new NumberValue(86)
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
        expected: new NumberValue(41.51764705882353)
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
        expected: new NumberValue(5.2)
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
        expected: new NumberValue(24.61764705882353)
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
        expected: new NumberValue(52)
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
        expected: new NumberValue(0.00014367816091954023)
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
        expected: new NumberValue(-5382)
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
        expected: new NumberValue(495)
    },
    {
        sourceCode: `
            let x= 0.56;
            let y = 0.56;
            let z = 0.56 + 32;
        
            let result = x + y + z;
        `,
        expected: new NumberValue(33.68)
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
        expected: new NumberValue(0.95)
    },
    {
        sourceCode: `
            let result = 234534543.999992
        `,
        expected: new NumberValue(234534543.999992)
    },
    {
        sourceCode: `
            let result = 234534543.
        `,
        expected: new NumberValue(234534543)
    },
    {
        sourceCode: `
            let result = .5
        `,
        expected: new NumberValue(0.5)
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
        expected: new NumberValue(0.5)
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
        expected: new NumberValue(0.5)
    },
    {
        sourceCode: `
            function a(){
                function b(){
                    return (random(), 56);
                }

                return b;
            }

            while(a()()[0] == a()()[0]); // this is a really low chance of happening

            let result = "done" + str(a()()[1]);
        `,
        expected: new StringValue("done56")
    },
    {
        sourceCode: `
            function a(){
                function b(){
                    return (random(), 93, (0, 1.9));
                }

                let c = random();

                return (b, c);
            }

            while(a()[0]()[0] == a()[1]); // this is a really low chance of happening

            let result = (a()[0]()[2][1]);
        `,
        expected: new NumberValue(1.9)
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
        expected: new NumberValue(51)
    },
    {
        sourceCode: `
            let x = 100 * (24/6);
            let steps = 0;
            while(x-- > 0){steps++;}

            let result = steps;
            `,
        expected: new NumberValue(400)
    },
    {
        sourceCode: `
            {let x=1;{{{{{{{{let helloWorld = 1;x++;x--;--x;++x;}}let result = x*100;}}}let result = x;}}let result = x;}
            let result = x;
            }
            
            let result = 0;
            `,
        expected: new NumberValue(0)
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
        expected: new NumberValue(45)
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
        expected: new NumberValue(45)
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
        expected: new NumberValue(5)
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
        expected: new NumberValue(13245)
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
        expected: new NumberValue(6)
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
        expected: new NumberValue(6)
    },
    {
        sourceCode: `
            let y = syscall;

            let result = y;

            // Premature syscall
            y("dummy", result);
        `,
        expected: new SyscallValue("syscall")
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
        expected: new NumberValue(0)
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
        expected: new NumberValue(10)
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
        expected: new NumberValue(0)
    },
    {
        sourceCode: `
            let my_tuple = (1.,);
            
            let result = my_tuple[0];
            `
        ,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let result = (1,2);
        `,
        expected: new TupleValue([
            new NumberValue(1),
            new NumberValue(2)
        ])
    },
    {
        sourceCode: `
            let result = (1,2,4,);
        `,
        expected: new TupleValue([
            new NumberValue(1),
            new NumberValue(2),
            new NumberValue(4)
        ])
    },
    {
        sourceCode: `
            let result = (1,(1,true));
        `,
        expected: new TupleValue([
            new NumberValue(1),
            new TupleValue([
                new NumberValue(1),
                new BooleanValue(true)
            ])
        ])
    },
    {
        sourceCode: `
            function xyz(a){
                return (1 + a) / 100;
            }

            function abc(a){
                return xyz(a);
            }

            let my_functions = (
                xyz,
                abc
            );

            let result = my_functions[0](1) + my_functions[1](1);
        `,
        expected: new NumberValue(0.04)
    },
    {
        sourceCode: `

            let result = !!!!true;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            function x(){
                function y(){
                    return (-100,);
                }
                return (y,2,3,4,5,6,7,8,9,10);
            }
            
            let result = x()[0]()[0];
        `,
        expected: new NumberValue(-100)
    },
    {
        sourceCode: `
            let a = [1];

            let result = a[0];
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
            let a = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];

            let result = a[1][1][1][1][1][1][1][1][1][0];
        `,
        expected: new NumberValue(10)
    },
    {
        sourceCode: `
            let a = [4.5,6,89];
            a[0] = 2;

            let result = a[0];
        `,
        expected: new NumberValue(2)
    },
    {
        sourceCode: `
            let a = [4.5,6,89];
            a += [1,2,3];

            let result = a[5] + a[5-1*1*0+1-2];
        `,
        expected: new NumberValue(5)
    },
    {
        sourceCode: `
            let result = ([1,2,3] + [4,5,6,])[5];
        `,
        expected: new NumberValue(6)
    },
    {
        sourceCode: `
            let result = true || false && false;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let a = [1,2,3];
            let b = a;
            b[0] = 2;

            let result = a[0];
        `,
        expected: new NumberValue(2)
    },
    {
        sourceCode: `
            let a = [1,2,3];
            let b = a;
            
            a += [4,5,6];

            let result = b[3];
        `,
        expected: new NumberValue(4)
    },
    {
        sourceCode: `
            let a = [1,2,3];
            let b = a;
            
            a = a + [4,5,6];

            let result = b == a;
        `,
        expected: new BooleanValue(false)
    },
    {
        sourceCode: `
            let a = [1];
            let b = a;
            
            let result = b == a;
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let a = 3.44;
            
            let result = str(a);
        `,
        expected: new StringValue("3.44")
    },
    {
        sourceCode: `
            let a = 3.44;
            
            print(a);
        `,
        expected: new StringValue("3.44")
    },
    {
        sourceCode: `
            let a = 3.44;
            
            print(a); // line ends with comment
        `,
        expected: new StringValue("3.44")
    },
    {
        sourceCode: `
            let a = 3.44;
            
            print(a);
            // line ends with comment`,
        expected: new StringValue("3.44")
    },
    {
        sourceCode: `
            let a = [3.44];
            
            exit(a)
            // line ends with comment`,
        expected: new StringValue("[3.44]")
    },
    {
        sourceCode: `
            exit(true);
        `,
        expected: new StringValue("true")
             
    },
    {
         sourceCode: `
            print("\\\" Hello my man!");
        `,
        expected: new StringValue("\" Hello my man!")
    },
    {
        sourceCode: `
             print("{\\\"name\\\":\\\"John\\\"}");
            
        `,
        expected: new StringValue("{\"name\":\"John\"}")
    },
    {
        sourceCode: `
            let result = len([1,2,3,4,5]);
            
        `,
        expected: new NumberValue(5)
    },
    {
        sourceCode: `
            let result = len("Hello World!");
            
        `,
        expected: new NumberValue(12)
    },
    {
        sourceCode: `
            let result = len((1,2,));
            
        `,
        expected: new NumberValue(2)

    },
    {
        sourceCode: `
            let result = len([1,[1,2]]);
            
        `,
        expected: new NumberValue(2)
    },
    {
        sourceCode: `
            let people = ["john", "doe"];
            let message = "Welcome to ";

            for (let i = 0; i < len(people); i++){
                let person = people[i];
                
                if(i > 0)
                    message += " and ";

                message += person;
            }

            let result = message;
        `,
        expected: new StringValue("Welcome to john and doe")
    },
    {
        sourceCode: `
            let result = 100 / 5 * 25;
        `,
        expected: new NumberValue(500)
    },
    {
        sourceCode: `
            let result = 1 < 5;
            
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
            let result = ([1,12]).__len__()
        `,
        expected: new NumberValue(2)
    },
    {
        sourceCode: `
            let result =  "hello world".split(" ")
        `,
        expected: new ListValue([
            new StringValue("hello"),
            new StringValue("world")
        ])
    },
    {
        sourceCode: `
            let result =  "hello world".split(" ")
            let y = "";
            for(let i= 0;i<len(result); i++)
                y += "a";

            result = y.upper();
        `,
        expected: new StringValue("AA")
    },
    {
        sourceCode: `
            let result =  "hello worldx".reverse()
            
        `,
        expected: new StringValue("xdlrow olleh")
    },
    {
        sourceCode: `
            let result =  "hello worldx".split().reverse()
            
        `,
        expected: new ListValue([new StringValue("worldx"), new StringValue("hello")])
    },
    {
        sourceCode: `
            let result =  "hello world!".split().reverse().insert(10, "lol")
            
        `,
        expected: new ListValue([new StringValue("world!"), new StringValue("hello"), new StringValue("lol")])
    },
    {
        sourceCode: `
            let result =  "hello world!".split().reverse().insert(0, "lol")
            
        `,
        expected: new ListValue([new StringValue("lol"), new StringValue("world!"), new StringValue("hello")])
    },
    {
        sourceCode: `
            let result = [1,2,3,(1,2,3),[[[234234,[[],[],[233432]]]]]].reverse().insert(0, (1,2,3,4))
            
            result = result[0]
        `,
        expected: new TupleValue([new NumberValue(1),new NumberValue(2),new NumberValue(3),new NumberValue(4),])
    },
    {
        sourceCode: `
            let result = [1,2,3,(1,2,3),[[[234234,[[],[],[233432]]]]]].append((1,2,3,4)).reverse()
            
            result = result[0]
        `,
        expected: new TupleValue([new NumberValue(1),new NumberValue(2),new NumberValue(3),new NumberValue(4),])
    },
    {
        sourceCode: `
            let result = [1,2,3,(1,2,3),[[[234234,[[],[],[233432]]]]]].append((1,2,3,4))
            
            result = result[4][0][0][0]
        `,
        expected: new NumberValue(234234)
    },
    {
        sourceCode: `
        let result = []
        for(let i=0; i<100; i++)
            result.append(i);

        result = result[34]
        `,
        expected: new NumberValue(34)
    },
    {
        sourceCode: `
        let result = []
        for(let i=0; i<100; i++)
            result.insert(0, i);

        result = result[0]
        `,
        expected: new NumberValue(99)
    },
    {
        sourceCode: `
        let a = [];
        let b = a;

        b.append(1);

        let result = a[0];
        `,
        expected: new NumberValue(1)
    },
    {
        sourceCode: `
        let a = "asdf";

        let result = a.upper();
        result = result.lower();

        result = result.reverse();

        result = result.contains("fds");
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
        let a = "asdf";

        let result = a.upper();
        result = result.lower().lower().lower();

        result = result.contains("asd");
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
        let _______dumy = "hello-world-WOAH-\\\"OMAGAD\\\"-ARE-YOU--READING-THIS?".split("-");

        let result = _______dumy[3];
        `,
        expected: new StringValue("\"OMAGAD\"")
    },
    {
        sourceCode: `
        let _______dumy = "lollollol"

        let result = _______dumy.replace("lol", "wow")
        `,
        expected: new StringValue("wowwowwow")
    },
    {
        sourceCode: `
        let _______dumy = "        \tlollollol\t\t\t\n".trim()

        let result = _______dumy.replace("lol", "wow")
        `,
        expected: new StringValue("wowwowwow")
    },
    {
        sourceCode: `
        let my_dict = {"first" : 31};

        let result = my_dict["first"];
        `,
        expected: new NumberValue(31)
    },
    {
        sourceCode: `
        let my_dict = {"first" : 31, "second": {"lol": {"lol": 42}}};

        let result = my_dict["second"]["lol"]["lol"];
        `,
        expected: new NumberValue(42)
    },
    {
        sourceCode: `
        let my_dict = {"first" : 31, "second": {"lol": {"lol": 42}}};

        let result = my_dict["second"]["lol"].set("woah", 1);
        `,
        expected: new NullValue()
    },
    {
        sourceCode: `
        {}.set("lolzxxx_sdfdsfsdml", 1);

        let result = {"___00023423": true}.get("___00023423")
        `,
        expected: new BooleanValue(true)
    },
    {
        sourceCode: `
        {}.set("lolzxxx_sdfdsfsdml", 1);

        let result = {"___00023423": true, "LOL": {"DSFS": 32234}}.get("LOL").get("DSFS")
        `,
        expected: new NumberValue(32234)
    },
    {
        sourceCode: `
        {}.set("lolzxxx_sdfdsfsdml", 1);

        let result = {"___00023423": true, "LOL": {"DSFS": 32234}}.get("LOL")["DSFS"]
        `,
        expected: new NumberValue(32234)
    },
    {
        sourceCode: `
        {}["lolzxxx_sdfdsfsdml"] =  1;

        let result = {"___00023423": true, "LOL": {"DSFS": 32234}}.get("LOL")["DSFS"]
        `,
        expected: new NumberValue(32234)
    },
    {
        sourceCode: `
        {}["lolzxxx_sdfdsfsdml"] =  1;

        let result = {"___00023423": true, "LOL": {"DSFS": 32234}}["LOL"]["DSFS"]
        `,
        expected: new NumberValue(32234)
    },
    {
        sourceCode: `
        let tuple = (1,2,3);

        let list = [1,2,3];

        let dict = {"0": 123};

        let result = tuple[0] + tuple[1] + list[1] + dict["0"];
        `,
        expected: new NumberValue(128)
    },
    {
        sourceCode: `
        let tuple = (1,2,3);

        let list = [1,2,3];

        let dict = {"0": 123};

        let result = tuple[0] + tuple[1] + list[1] + dict["0"];

        result = str(dict);
        `,
        expected: new StringValue("{\n  \"0\" : 123,\n}")
    },
    {
        sourceCode: `
        let my_dict___000 = {"a": [], "b": [], "c": (), "d": 2423423};

        let result = my_dict___000.keys();
        `,
        expected: new ListValue([
            new StringValue("a"),
            new StringValue("b"),
            new StringValue("c"),
            new StringValue("d"),
        ])
    },
    {
        sourceCode: `
        let my_dict___000 = {"a": [], "b": [], "c": (), "d": 2423423};

        let result = my_dict___000.values();
        `,
        expected: new ListValue([
            new ListValue([]),
            new ListValue([]),
            new TupleValue([]),
            new NumberValue(2423423),
        ])
    },
    {
        sourceCode: `
        function search(dict, value){
            let n = len(dict);
            let keys = dict.keys();

            for(let i=0; i<n; i++){
                if(dict[keys[i]] == value)
                    return keys[i];
            }
            
            return -1;
        }
        
        let xxxxxxxx = {"a": [], "b": [], "c": (), "d": 2423423};



        let result = search(xxxxxxxx, 2423423);
        `,
        expected: new StringValue("d")
    },
    {
        sourceCode: `
        function search(dict, value){
            let n = len(dict);
            let keys = dict.keys();

            for(let i=0; i<n; i++){
                if(dict[keys[i]] == value)
                    return keys[i];
            }
            
            return -1;
        }
        

        let result = search({}, 234324);
        `,
        expected: new NumberValue(-1)
    },
    {
        sourceCode: `
        function search(dict, value){
            let n = len(dict);
            let keys = dict.keys();

            for(let i=0; i<n; i++){
                if(dict[keys[i]] == value)
                    return keys[i];
            }
            
            return -1;
        }
        

        let result = search({"lol": {}, "sdasdasdasdas": [2432,23423,2423423,{}],}, 234324);
        `,
        expected: new NumberValue(-1)
    },
    {
        sourceCode: `
        function search(dict, value){
            let n = len(dict);
            let keys = dict.keys();

            for(let i=0; i<n; i++){
                if(dict[keys[i]] == value)
                    return keys[i];
            }
            
            return -1;
        }
        
        let result = search({"H": 1.1}, 1.1) + search({"e": 1.1}, 1.1) +search({"l": 1.1}, 1.1) +search({"l": 1.1}, 1.1) +search({"o": 1.1}, 1.1);
        `,
        expected: new StringValue("Hello")
    },
    {
        sourceCode: `
        let result = type({});
        `,
        expected: new StringValue("dict")
    },
    {
        sourceCode: `
        let result = type([]);
        `,
        expected: new StringValue("list")
    },
    {
        sourceCode: `
        let result = type(123);
        `,
        expected: new StringValue("number")
    },
    {
        sourceCode: `
        let result = type(true);
        `,
        expected: new StringValue("boolean")
    },
    {
        sourceCode: `
        let result = type(null);
        `,
        expected: new StringValue("null")
    },
    {
        sourceCode: `

        function a(){}

        let result = type(a);
        `,
        expected: new StringValue("function")
    },
    {
        sourceCode: `
        function a(){}

        let result = type(len);
        `,
        expected: new StringValue("native_function")
    },
    {
        sourceCode: `
        function a(){}

        let result = type(print);
        `,
        expected: new StringValue("syscall")
    },
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
        input("sdfasdas", "asdasdas");
        `,
        expected: SycallArgumentNumberMismatch
    },
    {
        sourceCode: `
        1 && true;
        `,
        expected: InvalidOperationOnType
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
         let 23423432432423_ = 1;
        `,
        expected: SyntaxError
    },
    {
        sourceCode: `
            // define a closure

            while(true){
                function x(){
                    break;
                }

                x();
            }
        
            let result = null;
        `,
        expected: SyntaxError
    },
    {
        sourceCode: `
            // define a closure

            function result(){return 0}
        
            let result = null;
        `,
        expected: VariableAlreadyDeclared
    },
    {
        sourceCode: `
            let result = len(1);
        `,
        expected: InvalidOperationOnType
    },
    {
        sourceCode: `
        let tuple = (1,2,3);

        tuple[0] = 1;
        `,
        expected: InvalidOperationOnType
    },
    {
        sourceCode: `
        let tuple = (1,2,3);

        tuple.__setitem__(0, 1);
        `,
        expected: NoSuchMemberMethod
    },
    {
        sourceCode: `
        let tuple = ()[0] = 1;
        `,
        expected: InvalidOperationOnType
    },
    {
        sourceCode: `
        let dict = {
            "key1": 2423423423423423.23423423
        }

        dict["non_existent"]
        `,
        expected: KeyError
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