import { CompilerBug, InvalidFormat, InvalidType, InvalidTypeMultiple } from "./error";
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

    return  new BooleanValue(str === "true" || str === "1" || str === 1);
}

const random = (lineNumber) => {
    return new NumberValue(Math.random());
}

const str = (lineNumber, args: Value[]) => {
    const a = args[0];

    return new StringValue(a.str);
}

const len = (lineNumber, args: Value[]) => {
    const a = args[0];

    const result = a.__len__(lineNumber);

    return result;
}

const len = (lineNumber, args: Value[]) => {
    const a = args[0];

    if (a.type !== ValueType.STRING && a.type !== ValueType.LIST && a.type !== ValueType.TUPLE)
        throw new InvalidTypeMultiple(lineNumber, [ValueType.STRING, ValueType.LIST, ValueType.TUPLE], a.type);

    return Value.number(a.value.length);
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
};