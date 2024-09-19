import { InvalidType, SycallArgumentNumberMismatch } from "./error";
import { List } from "./parser";
import {Value, StringValue, ListValue, BooleanValue} from './value'

export default {
    'syscall': {
        syscallId: 'is.melon.syscall',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'syscall', 2, args.length);

            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of syscall (syscall id) must be a string');

            return args;
        },
    },
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        preprocessor: (args: Value[], lineNumber: number) => {
            return [new StringValue(args.map(arg => arg.str).join(' '))];
        }
    },
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'input', 1, args.length);

            if (args.length === 1 && !(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of input must be a string.');

            return args;
        }
    },
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'exit', 1, args.length);
            else if (args.length === 1)
                return [new StringValue(args[0].str)];
            else
                return [new StringValue("")];
        }
    },
    'tts': {
        syscallId: 'is.workflow.actions.speaktext',
        preprocessor: (args: Value[], lineNumber: number) => {
            return [new StringValue(args.map(arg => arg.str).join(' '))];
        }
    },
    'stt': {
        syscallId: 'is.workflow.actions.dictatetext',
        preprocessor: (args : Value[], lineNumber: number) => {
            if (args.length > 1) {
                if (args.length > 2)
                    throw new SycallArgumentNumberMismatch(lineNumber, 'stt', 2, args.length);
                if (!(args[0] instanceof BooleanValue))
                    throw new InvalidType(lineNumber, BooleanValue.typeName, args[0].typeName, 'First argument of input must be a boolean.');
                if (args[0])
                    return new StringValue("On Tap")
                if (args.length === 2) {
                    if (!(args[1] instanceof BooleanValue))
                        throw new InvalidType(lineNumber, BooleanValue.typeName, args[1].typeName, 'Second argument of input must be a boolean.');
                    if(args[1])
                        return new StringValue('After Short Pause');
                }
            }
            return new StringValue("After Pause");
        }
    }
}