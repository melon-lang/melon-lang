import { CompilerBug, InvalidFormat, InvalidType } from "./error";
import { FunctionSignature } from "./util";
import { Value, ValueType } from "./vm";

const number = (lineNumber, args: Value[]) => {
    const str = args[0].value as string;

    if (isNaN(Number(str)))
        throw new InvalidFormat(lineNumber, `Cannot parse ${str} as number`);

   return { type: ValueType.NUMBER, value: parseFloat(str) };
}

const bool = (lineNumber, args: Value[]) => {
    const str = args[0].value;

    if (str !== "true" && str !== "false" && str !== "1" && str !== "0" && str !== 1 && str !== 0)
        throw new InvalidType(lineNumber, ValueType.BOOLEAN, str.type);

    return  Value.boolean(str === "true" || str === "1" || str === 1);
}

const random = (lineNumber) => {
    return { type: ValueType.NUMBER, value: Math.random() };
}

const str = (lineNumber, args: Value[]) => {
    const a = args[0];

    if (a.type == ValueType.STRING)
       return (Value.string(a.value));
    else if (a.type == ValueType.BOOLEAN)
        return (Value.string(a.value));
    else if (a.type == ValueType.NUMBER)
        return (Value.string(a.value.toString()));
    else if (a.type == ValueType.NULL)
        return (Value.string(a.value));
    else if (a.type == ValueType.NATIVE)
        return (Value.string(`<melon.native.${a.value}()>`));
    else if (a.type == ValueType.FUNCTION)
        return (Value.string(`<${a.value.name}()>`))
    else
        throw new CompilerBug(`Invalid type for a value: ${a.type}`);
}

interface NativeMap {
    [name: string]: {
        function: Function;
        signature: FunctionSignature;
    }
}

const natives : NativeMap = {
    'number': {
        function: number,
        signature: {
            allowStarArgs: false,
            arguments: [
                { name: 'str', optional: false }
            ]
        }
    },
    'random': {
        function: random,
        signature: {
            allowStarArgs: false,
            arguments: []
        }
    },
    'bool': {
        function: bool,
        signature: {
            allowStarArgs: false,
            arguments: [
                { name: 'str', optional: false }
            ]
        }
    },
    'str': {
        function: str,
        signature: {
            allowStarArgs: false,
            arguments: [
                { name: 'value', optional: false }
            ]
        }
    },
}

export default natives;