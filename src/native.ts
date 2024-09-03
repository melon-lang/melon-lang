import { CompilerBug, InvalidFormat, InvalidType } from "./error";
import { Value, ValueType } from "./vm";

const number = (lineNumber, args: Value[]) => {
    const str = args[0].value as string;

    if (isNaN(Number(str)))
        throw new InvalidFormat(lineNumber, `Cannot parse ${str} as number`);

   return Value.number(parseFloat(str));
}

const bool = (lineNumber, args: Value[]) => {
    const str = args[0].value;

    if (str !== "true" && str !== "false" && str !== "1" && str !== "0" && str !== 1 && str !== 0)
        throw new InvalidType(lineNumber, ValueType.BOOLEAN, str.type);

    return  Value.boolean(str === "true" || str === "1" || str === 1);
}

const random = (lineNumber) => {
    return Value.number(Math.random());
}

const str = (lineNumber, args: Value[]) => {
    const a = args[0];

    return (Value.string(a.str));
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
};