import { FunctionSignature } from "./util";

interface SyscallMap {
    [name: string]: {
        syscallId: string;
        signature: FunctionSignature;
    }
}

const syscalls: SyscallMap = {
    'syscall': {
        syscallId: 'is.melon.syscall',
        signature: {
            allowStarArgs: true,
            arguments: []
        }
    },
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        signature: {
            allowStarArgs: false,
            arguments: [
                { name: 'value', optional: false },
            ]
        }
    },
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        signature: {
            allowStarArgs: false,

            arguments: [
                { name: 'name', optional: false },
                { name: 'args', optional: true },
            ]
        }
    },
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        signature: {
            allowStarArgs: false,

            arguments: [
                { name: 'name', optional: false },
                { name: 'args', optional: true },
            ]
        }
    },
}

export default syscalls;