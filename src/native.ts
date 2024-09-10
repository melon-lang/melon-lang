import { CompilerBug, InvalidFormat, InvalidType, InvalidTypeMultiple, NativeFunctionArgumentNumberMismatch } from "./error";
import { BooleanValue, NumberValue, StringValue, Value } from "./value";


const number = (lineNumber, args: Value[]) => {
    const str = args[0].value as string;

    if (isNaN(Number(str)))
        throw new InvalidFormat(lineNumber, `Cannot parse ${str} as number`);

   return new NumberValue(parseFloat(str));
}

const bool = (lineNumber, args: Value[]) => {
    const str = args[0].value;

    if (str !== "true" && str !== "false" && str !== "1" && str !== "0" && str !== 1 && str !== 0)
        throw new InvalidType(lineNumber, BooleanValue.typeName, str.type);

    return new BooleanValue(str === "true" || str === "1" || str === 1);
}

const random = (lineNumber) => {
    return new NumberValue(Math.random());
}

const str = (lineNumber, args: Value[]) => {
    const a = args.at(0);

    if(!a)
        throw new NativeFunctionArgumentNumberMismatch(lineNumber, "str", 1, 0);

    return a.__str__(lineNumber, ...args.slice(1,));
}

const len = (lineNumber, args: Value[]) => {
    const a = args[0];

    if(!a)
        throw new NativeFunctionArgumentNumberMismatch(lineNumber, "len", 1, 0);

    const result = a.__len__(lineNumber, ...args.slice(1,));

    return result;
}

const type = (lineNumber, args: Value[]) => {
    const a = args[0];

    if(!a)
        throw new NativeFunctionArgumentNumberMismatch(lineNumber, "type", 1, 0);

    return a.__type__(lineNumber, ...args.slice(1,))
}

export default {
    'number': {
        function: number,
        args: 1
    },
    'random': {
        function: random,
        args: 0
    },
    'bool': {
        function: bool,
        args: 1
    },
    'str': {
        function: str,
        args: 1
    },
    'len': {
        function: len,
        args: 1
    },
    'type': {
        function: type,
        args: 1
    }
};