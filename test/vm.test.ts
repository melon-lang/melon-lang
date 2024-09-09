import { expect, test } from '@jest/globals';
import VM, { Opcode, Program, VMImage, VMStatus } from '../src/vm';
import { CompilerBug,  } from '../src/error';
import { NumberValue, StringValue, SyscallValue } from '../src/value';

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
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 1, lineNumber: 0  },
                        { type: Opcode.ADD, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(1),
                        new NumberValue(2),
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [new NumberValue(1), new NumberValue(2)],
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(3)],
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
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 1, lineNumber: 0  },
                        { type: Opcode.SUB, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(56),
                        new NumberValue(-2),
                   ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [new NumberValue(56), new NumberValue(-2)],
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(58)],
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
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.SUB, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(100000),
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [new NumberValue(100000)],
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(0)],
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
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 1, lineNumber: 0  },
                        { type: Opcode.SUB, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(3),
                        new NumberValue(2),
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [new NumberValue(3), new NumberValue(2)],
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(1)],
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
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 1, lineNumber: 0  },
                        { type: Opcode.MUL, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(3),
                        new NumberValue(2),
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [new NumberValue(3), new NumberValue(2),],
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(6),],
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
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 1, lineNumber: 0  },
                        { type: Opcode.DIV, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(6),
                        new NumberValue(2),
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "data": [new NumberValue(6), new NumberValue(2),],
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(3)],
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
                        { type: Opcode.NOP, lineNumber: 0  },
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
                        { type: Opcode.DATA, value: 1, lineNumber: 0  }, // function
                        { type: Opcode.DATA, value: 0, lineNumber: 0  }, // arg 0
                        { type: Opcode.DATA, value: 2, lineNumber: 0  }, // arg 1
                        { type: Opcode.CALL, value: 2, lineNumber: 0  },
                    ],
                    [
                        new StringValue("dummy-syscall"),
                        new SyscallValue("syscall"),
                        new NumberValue(5.453),
                    ]
                ),
            steps: 4,
            expected: {
                state: {
                    "frames": [],
                },
                status: VMStatus.SYSCALL,
                syscall: { name: 'dummy-syscall', args: [
                    new NumberValue(5.453)
                ] }
            }
        },
        // div
        {
            program:
                new Program(
                    [
                        { type: Opcode.DATA, value: 0, lineNumber: 0  },
                        { type: Opcode.DATA, value: 1, lineNumber: 0  },
                        { type: Opcode.DIV, lineNumber: 0  },
                        { type: Opcode.NOP, lineNumber: 0  },
                    ],
                    [
                        new NumberValue(33),
                        new NumberValue(3),
                    ]
                ),
            steps: 3,
            expected: {
                state: {
                    "frames": [
                        {
                            ip: 3,
                            stack: [new NumberValue(11)],
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
                        { type: Opcode.DATA, value: 1, lineNumber: 0 },
                        { type: Opcode.DATA, value: 2, lineNumber: 0 },
                        { type: Opcode.CALL, value: 2, lineNumber: 0 },
                    ],
                    [
                        new StringValue("dum"),
                        new NumberValue(5),
                        new SyscallValue("syscall"),
                    ]
                ),
            steps: 3,
            expected: CompilerBug
        },
    ]


test.each(validTestCases)('.eval($program)',
    ({ program, steps, expected }) => {

        const vm = VM.create(program);
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
            const vm = VM.create(program);
            vm.run(steps);
        }).toThrow(expected);
    }
);