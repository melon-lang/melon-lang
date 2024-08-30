import { expect, test } from '@jest/globals';
import VM, { Opcode, Program, ValueType, VMImage, VMStatus } from '../src/vm';
import { CompilerBug,  } from '../src/error';

const decodeString = (str: string) => (JSON.parse(atob(str)));

const validTestCases: {
    program: Program;
    steps: number;
    expected: { state: any, status: VMStatus, syscall?: any };
}[] = [
        // Sum to numbers
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.ADD },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 1 },
                        { type: ValueType.NUMBER, value: 2 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [{ "type": ValueType.NUMBER, "value": 1 }, { "type": ValueType.NUMBER, "value": 2 }],
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 3 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
        // Subtract two numbers
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.SUB },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 56 },
                        { type: ValueType.NUMBER, value: -2 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [{ "type": ValueType.NUMBER, "value": 56 }, { "type": ValueType.NUMBER, "value": -2 }],
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 58 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
        // Subtract two numbers
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.SUB },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 100000 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [{ "type": ValueType.NUMBER, "value": 100000 }],
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 0 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.SUB },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 3 }, { type: ValueType.NUMBER, value: 2 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [{ "type": ValueType.NUMBER, "value": 3 }, { "type": ValueType.NUMBER, "value": 2 }],
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 1 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
        // Multiply two numbers
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.MUL },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 3 },
                        { type: ValueType.NUMBER, value: 2 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [{ "type": ValueType.NUMBER, "value": 3 }, { "type": ValueType.NUMBER, "value": 2 }],
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 6 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
        // Divide two numbers
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.DIV },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 6 },
                        { type: ValueType.NUMBER, value: 2 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [{ "type": ValueType.NUMBER, "value": 6 }, { "type": ValueType.NUMBER, "value": 2 }],
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 3 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
        // noop
        {
            program:
                new Program(
                    [
                        { type: Opcode.NOP },
                    ],
                    []
                ),
            steps: 1,
            expected: {
                state: {
                    "data": [],
                    "frames": [],
                },
                status: VMStatus.HALTED,
            }
        },
        // syscall
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 1 }, // function
                        { type: Opcode.DATA, value: 0 }, // arg 0
                        { type: Opcode.DATA, value: 2 }, // arg 1
                        { type: Opcode.CALL, value: 2 },
                    ],
                    [
                        { type: ValueType.STRING, value: "dummy-syscall" },
                        { type: ValueType.SYSCALL, value: "syscall" },
                        { type: ValueType.NUMBER, value: 5.453 },
                    ]
                ),
            steps: 4,
            expected: {
                state: {
                    "frames": [],
                },
                status: VMStatus.SYSCALL,
                syscall: { name: 'dummy-syscall', args: [
                    { type: ValueType.NUMBER, value: 5.453 }
                ] }
            }
        },
        // div
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0 },
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.DIV },
                        { type: Opcode.NOP },
                    ],
                    [
                        { type: ValueType.NUMBER, value: 33 },
                        { type: ValueType.NUMBER, value: 3 },
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "frames": [
                        {
                            ip: 3,
                            stack: [{ type: ValueType.NUMBER, value: 11 }],
                        }
                    ],
                },
                status: VMStatus.RUNNING,
            }
        },
    ]

const invalidTestCases: {
    program: Program;
    steps: number;
    expected: any;
}[] = [
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 1 },
                        { type: Opcode.DATA, value: 2 },
                        { type: Opcode.CALL, value: 2 },
                    ],
                    [
                        { type: ValueType.STRING, value: "dum" },
                        { type: ValueType.NUMBER, value: "5" },
                        { type: ValueType.SYSCALL, value: "syscall" },
                    ]
                ),
            steps: 3,
            expected: CompilerBug
        },
    ]


test.each(validTestCases)('.eval($program)',
    ({ program, steps, expected }) => {

        const vm = new VM(program);
        const image = vm.run(steps);

        const decodedState = decodeString(image.state);

        expect(decodedState).toMatchObject(expected.state);

        expect(image.status).toEqual(expected.status);

        expect(image.syscall).toEqual(expected.syscall);
    }
);

test.each(invalidTestCases)('.eval($program)',
    ({ program, steps, expected }) => {

        expect(() => {
            const vm = new VM(program);
            vm.run(steps);
        }).toThrow(expected);
    }
);