import { expect, test } from '@jest/globals';
import { compile, evaluate } from '../src/index';
import { ValueType } from '../src/vm';
import { FunctionArgumentNumberMismatch, InvalidType, NativeFunctionArgumentNumberMismatch, SyntaxError, VariableAlreadyDeclared, VariableAlreadyDeclaredInScope, VariableNotDeclared } from '../src/error';
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
        expected: {type: ValueType.NUMBER, value: 3}
    },
    {
        sourceCode: 'let result = 1 + 2 * 3;',
        expected: {type: ValueType.NUMBER, value: 7}
    },
    {
        sourceCode: `
            let x = 1;

            while (x < 10) {
                x = x + 1;
            }

            let result = x;
        `,
        expected: {type: ValueType.NUMBER, value: 10}
    },
    {
        sourceCode: `
            let x = 2;

            while( x < 12) {
                x = x * 87;
            }

            let result = x;
        `,
        expected: {type: ValueType.NUMBER, value: 2*87}
    },
    {
        sourceCode: `
            let x = 2;

            for(let i = 0; i < 10; i = i + 1) {
                x = x * 2;
            }

            let result = x;
        `,
        expected: {type: ValueType.NUMBER, value: 2**11}
    },
    {
        sourceCode: `
            let result =  19 > 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let result =  19 < 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let result =  19 >= 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let result =  19 <= 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let result =  19 == 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let result =  19 != 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let result =  19 == 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let result =  19 != 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let result =  19 <= 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let result =  19 >= 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
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
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let result = "hello" + " " + "world";
        `,
        expected: {type: ValueType.STRING, value: 'hello world'}
    },
    {
        sourceCode: `
            let result = 0;
            result++;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let result = 0;
            ++result;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = dummy++;
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = ++dummy;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = (++dummy) + 54;
        `,
        expected: {type: ValueType.NUMBER, value: 55}
    },
    {
        sourceCode: `
            let dummy = 0;
            let result = (dummy++) + 34;
        `,
        expected: {type: ValueType.NUMBER, value: 34}
    },
    {
        sourceCode: `
            let dummy = 5 == 5 || 4 == 5;
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = 5 == 5 && 4 == 5;
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = 4 == 9000 && "string" == "string" || 5 == 5;
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `  
            let dummy = bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = bool("true") || bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("false") || bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = bool("false") || bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true") || bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("true") || bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = bool("false") && bool("false") || bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true") || bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("true") || bool("false");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let dummy = bool("true") && bool("false") || bool("true");
            let result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        sourceCode: `
            let num = "123";
            let result = num + str(1);
        `,
        expected: {type: ValueType.STRING, value: '1231'}
    },
    {
        sourceCode: `let result = null;`,
        expected: {type: ValueType.NULL, value: null}
    },
    {
        sourceCode: `
            let num = "123";
            num = number(num);
            let result = num + 1;
        `,
        expected: {type: ValueType.NUMBER, value: 124}
    },
    {
        sourceCode: `
            let a = 0;
            let b = 1;

            let result = a + b;
            result = bool(a+b);
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
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
        expected: {type: ValueType.BOOLEAN, value: true}
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
        expected: {type: ValueType.NUMBER, value: 55}
    },
    {
        sourceCode: `
        function decToZero(i){
            if (i == 0) return 0;
            return decToZero(i-1);
        }

        let result = decToZero(10);
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    {
        sourceCode: `
        function decToNegative(i, j){
            if (i < 0) return 0;
            return decToNegative(i-j, j);
        }

        let result = decToNegative(10, 1);
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    // Overrides the built-in random function
    {
        sourceCode: `
        let i = 0;
        let result = i++;
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    {
        sourceCode: `
        let i = 0;
        let result = ++i;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
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
        expected: {type: ValueType.NUMBER, value: 9}
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
        expected: {type: ValueType.NUMBER, value: 9}
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
        expected: {type: ValueType.NUMBER, value: 9}
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
        expected: {type: ValueType.NUMBER, value: 9}
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
        expected: {type: ValueType.NUMBER, value: 5}
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
        expected: {type: ValueType.NUMBER, value: 5}
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
        expected: {type: ValueType.NUMBER, value: 4}
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
        expected: {type: ValueType.NUMBER, value: 11}
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
        expected: {type: ValueType.NUMBER, value: 7}
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
        expected: {type: ValueType.NUMBER, value: 3}
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
        expected: {type: ValueType.NUMBER, value: 3}
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
        expected: {type: ValueType.NUMBER, value: 9}
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
        expected: {type: ValueType.NUMBER, value: 9}
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
        expected: {type: ValueType.NUMBER, value: 18}
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
        expected: {type: ValueType.NUMBER, value: 27}
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
        expected: {type: ValueType.NUMBER, value: 16}
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
        expected: {type: ValueType.NUMBER, value: 35}
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
        expected: {type: ValueType.NUMBER, value: -9}
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
        expected: {type: ValueType.NUMBER, value: -8}
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
        expected: {type: ValueType.NUMBER, value: -6}
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
        expected: {type: ValueType.NUMBER, value: 47}
    },
    {
        sourceCode: `
            let x = 10;
            let y = x % 3;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let x = 25;
            let y = x % 5;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    {
        sourceCode: `
            let x = 13;
            let y = x % 4;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let x = 100;
            let y = x % 7;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 2}
    },
    {
        sourceCode: `
            let x = 0;
            let y = x % 5;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    {
        sourceCode: `
            let x = 15;
            let y = x % 6;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 3}
    },
    {
        sourceCode: `
            let x = 9;
            let y = x % 2;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let x = 18;
            let y = x % 7;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 4}
    },
    {
        sourceCode: `
            let x = 33;
            let y = x % 10;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 3}
    },
    {
        sourceCode: `
            let x = 45;
            let y = x % 4;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        sourceCode: `
            let x = 45/2;
            let y = x % 4;

            let result = y;
        `,
        expected: {type: ValueType.NUMBER, value: 2.5}
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
        sourceCode:`
        x++;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode:`
        if(true){
            let y = 100;    
        }
        let y = x + 1000;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode:`
        let y = 100;
        for(let i = 0; i < 100; i++){
            y = y - 1;   
        }
        x = y;
        `,
        expected: VariableNotDeclared
    },
    {
        sourceCode:`
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