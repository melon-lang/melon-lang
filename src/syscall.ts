import { InvalidType, SycallArgumentNumberMismatch } from "./error";
import { Value, ValueType } from "./vm";

export default {
    'syscall': {
        syscallId: 'is.melon.syscall',
        preprocessor : (args: Value[], lineNumber: number) => {
            if (args.length < 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'syscall', 2, args.length);
    
            if (args[0].type !== ValueType.STRING)
                throw new InvalidType(lineNumber, ValueType.STRING, args[0].type, 'First argument of syscall (syscall id) must be a string');
            
            return args;
        },
    },
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        preprocessor : (args: Value[], lineNumber: number) => {
            return [ Value.string(args.map(arg => arg.str).join(' ')) ];
        }
    },
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'input', 1, args.length);
    
            if (args.length === 1 && args[0].type !== ValueType.STRING)
                throw new InvalidType(lineNumber, ValueType.STRING, args[0].type, 'First argument of input must be a string.');
    
            return args;
        }
    },
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'exit', 0, args.length);

            return args
        }
    },
}