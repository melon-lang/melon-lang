export default {
    'syscall': {
        syscallId: 'is.melon.syscall',
        args: 2
    },
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        args: 1
    },
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        args: 1
    },
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        args: 0
    },
}