import { expect, test } from '@jest/globals';
import { compile, evaluate } from '../src/index';
import { ValueType } from '../src/vm';

const evalProgram = (program: string) => {
    program += 'syscall("dummy", result);';

    const state = evaluate(compile(program));
    const syscall = state.syscall;

    if (!syscall) {
        throw new Error('No syscall found');
    }

    const result = syscall.args[0];

    return result;
}

const testPrograms = [
    {
        program: 'let result = 1 + 2;',
        expected: {type: ValueType.NUMBER, value: 3}
    },
    {
        program: 'let result = 1 + 2 * 3;',
        expected: {type: ValueType.NUMBER, value: 7}
    },
    {
        program: `
            let x = 1;

            while (x < 10) {
                x = x + 1;
            }

            let result = x;
        `,
        expected: {type: ValueType.NUMBER, value: 10}
    },
    {
        program: `
            let x = 2;

            while( x < 12) {
                x = x * 87;
            }

            let result = x;
        `,
        expected: {type: ValueType.NUMBER, value: 2*87}
    },
    {
        program: `
            let x = 2;

            for(let i = 0; i < 10; i = i + 1) {
                x = x * 2;
            }

            let result = x;
        `,
        expected: {type: ValueType.NUMBER, value: 2**11}
    },
    {
        program: `
            let result =  19 > 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let result =  19 < 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let result =  19 >= 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let result =  19 <= 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let result =  19 == 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let result =  19 != 10;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let result =  19 == 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let result =  19 != 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let result =  19 <= 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let result =  19 >= 19;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
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
        program: `
            let result = "hello" + " " + "world";
        `,
        expected: {type: ValueType.STRING, value: 'hello world'}
    },
    {
        program: `
            let result = 0;
            result++;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        program: `
            let result = 0;
            ++result;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        program: `
            let dummy = 0;
            result = dummy++;
        `,
        expected: {type: ValueType.NUMBER, value: 1}
    },
    {
        program: `
            let dummy = 0;
            result = ++dummy;
        `,
        expected: {type: ValueType.NUMBER, value: 0}
    },
    {
        program: `
            let dummy = 0;
            result = (++dummy) + 54;
        `,
        expected: {type: ValueType.NUMBER, value: 54}
    },
    {
        program: `
            let dummy = 0;
            result = (dummy++) + 34;
        `,
        expected: {type: ValueType.NUMBER, value: 35}
    },
    {
        program: `
            let dummy = 5 == 5 || 4 == 5;
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = 5 == 5 && 4 == 5;
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = 4 == 9000 && "string" == "string" || 5 == 5;
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `  
            let dummy = bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = bool("true") && bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = bool("true") || bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("true") && bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("false") || bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = bool("false") || bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("false") && bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = bool("false") && bool("true") || bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("false") && bool("true") || bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = bool("false") && bool("false") || bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: false}
    },
    {
        program: `
            let dummy = bool("true") && bool("true") || bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("true") && bool("true") || bool("false");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let dummy = bool("true") && bool("false") || bool("true");
            result = dummy;
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            let num = "123";
            
            result = num + 1;
        `,
        expected: {type: ValueType.STRING, value: '1231'}
    },
    {
        program: ``,
        expected: {type: ValueType.NULL, value: null}
    },
    {
        program: `
            let num = "123";
            num = number(num);
            result = num + 1;
        `,
        expected: {type: ValueType.NUMBER, value: 124}
    },
    {
        program: `
            let a = 0;
            let b = 1;

            result = a + b;
            result = bool(a+b);
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
    {
        program: `
            function add(a, b) {
                return a + b;
            }

            function sub(a, b) {
                return a - b;
            }

            result = add(1, -100);
            result = sub(result, -100);
            result = bool(result);
        `,
        expected: {type: ValueType.BOOLEAN, value: true}
    },
]


test.each(testPrograms)('.eval($program)',
    ({ program, expected }) => {
        const result = evalProgram(program);
        expect(result).toEqual(expected);
    }
);