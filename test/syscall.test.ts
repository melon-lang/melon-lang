import { expect, test } from '@jest/globals';
import { compile, evaluate } from '../src/index';
import VM from '../src/vm';
import { NullValue, NumberValue, StringValue, Value } from '../src/value';

const evalResumeSourceCode = (sourceCode: string, valueToFeed: Value ) => {
    sourceCode += 'syscall("dummy", result);';

    const image = evaluate(compile(sourceCode));
    const syscall = image.syscall;

    if (!syscall) {
        throw new Error('The test case doesn\'t include a syscall');
    }

	const vm = VM.deserialize(image, valueToFeed);
    const finalImage = vm.run();

    if (!finalImage.syscall) {
        // This shouldn't happen as we add the last line to the source code.
        throw new Error('No syscall found');
    }

    const result = finalImage.syscall.args[0];

    return result;
}

const validTestSourceCodesWithSyscalls = [
    {
        sourceCode: `
            let a = input("enter a number");
            print(["2", "4"], "hello");
        `
        ,
        valueToFeed: new StringValue("3"),
        expected: new StringValue('["2", "4"] hello')
    },
    {
        sourceCode: `
            let a = number(input("enter a number"));

            let result = 4 + a;
        `
        ,
        valueToFeed: new StringValue("3"),
        expected: new NumberValue(7)
    }
]

test.each(validTestSourceCodesWithSyscalls)('.eval($sourceCode)',
    ({ sourceCode, valueToFeed, expected, }) => {
        const result = evalResumeSourceCode(sourceCode, valueToFeed);
        expect(result).toEqual(expected);
    }
);