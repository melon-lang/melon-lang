import { Type, serialize, deserialize } from 'class-transformer';

export enum Opcode {
    PUSH = "push",
    POP = "pop",
    ADD = "add",
    SUB = "sub",
    MUL = "mul",
    DIV = "div",
    LT = "lt",
    GT = "gt",
    LTE = "lte",
    GTE = "gte",
    EQ = "eq",
    GTEQ = "gteq",
    LTEQ = "lteq",
    NEQ = "neq",
    AND = "and",
    OR = "or",
    NOT = "not",
    JUMP = "jump",
    JUMPF = "jumpf",
    JUMPT = "jumpt",
    JUMPTF = "jumptf",
    LOAD = "load",
    STORE = "store",
    CALL = "call",
    RET = "ret",
    HALT = "halt",
    PRINT = "print",
    PRINTLN = "println",
    INPUT = "input",
    INPUTLN = "inputln",
    SYSCALL = "syscall",
    DATA = "data",
    INC = "inc",
    DEC = "dec",
    NEG = "neg",
    COPY = "copy",

    SETGL = "setgl",
    DECLAREGL = "declaregl",
    LOADGL = "loadgl",

    CLOSURE = "closure",

    NATIVE = "native",

    PARSE_NUMBER = "parse_number",

    RANDOM = "random",
    IMPORT = "import",

    NOP = "nop"
}

export enum ValueType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    FUNCTION = "function",
    CLOSURE = "closure",
    NATIVE = 'native',
    NULL = "null"
}

export class Value {
    public type: ValueType;
    public value: any;

    constructor(type: ValueType, value: any) {
        this.type = type;
        this.value = value;
    }

    static string(value: string) {
        return new Value(ValueType.STRING, value);
    }

    static number(value: number) {
        return new Value(ValueType.NUMBER, value);
    }

    static boolean(value: boolean) {
        return new Value(ValueType.BOOLEAN, value);
    }

    static function(value: Function) {
        return new Value(ValueType.FUNCTION, value);
    }

    static native(value: string) {
        return new Value(ValueType.NATIVE, value);
    }

    static null() {
        return new Value(ValueType.NULL, null);
    }
}

export class Function {
    name: string;
    args: string[];

    @Type(() => Instruction)
    body: Instruction[];

    constructor(name: string, args: string[], body: Instruction[]) {
        this.name = name;
        this.args = args;
        this.body = body;
    }
}

export class Instruction {
    type: Opcode;
    value?: number;

    constructor(type: Opcode, value?: number) {
        this.type = type;
        this.value = value;
    }
}

export class Program {
    text: Instruction[];
    data: Value[];

    constructor(text: Instruction[], data: Value[]) {
        this.text = text;
        this.data = data;
    }
}

class CallFrame {
    ip: number;

    @Type(() => Value)
    stack: Value[];

    @Type(() => Instruction)
    text: Instruction[];

    constructor(ip: number, stack: Value[], text: Instruction[]) {
        this.ip = ip;
        this.stack = stack;
        this.text = text;
    }
}

export enum VMStatus {
    RUNNING = "running",
    HALTED = "halted",
    ERROR = "error",
    SYSCALL = "syscall"
}

export interface VMImage {
    state: string;
    status: VMStatus;

    syscall?: Syscall;
}

export interface Syscall {
    name: string;
    args: Value[];
}
export default class VM {
    @Type(() => Value)
    private data: Value[];

    @Type(() => CallFrame)
    private frames: CallFrame[];

    @Type(() => Value)
    private globals: Map<string, Value>;

    private syscall?: Syscall = undefined;

    public get halted() {
        return this.frames.length === 0;
    }

    private get ip() {
        return this.frames[this.frames.length - 1].ip;
    }

    private set ip(value: number) {
        this.frames[this.frames.length - 1].ip = value;
    }

    private get stack() {
        return this.frames[this.frames.length - 1].stack;
    }

    private get text() {
        return this.frames[this.frames.length - 1].text;
    }

    public run(steps: number = Infinity) {
        while (steps-- > 0 && this.frames.length > 0 && !this.syscall) {
            const instruction = this.text[this.ip];

            console.log(''.padStart(this.frames.length, '\t'), this.ip + ":", instruction.type, instruction.value)

            this.execute(instruction);

            this.ip++;

            if (this.ip >= this.text.length) {
                this.frames.pop();

                if (this.frames.length === 0) {
                    break;
                }
            }
        }

        return this.serialize(this.syscall ? VMStatus.SYSCALL : this.frames.length === 0 ? VMStatus.HALTED : VMStatus.RUNNING, this.syscall);
    }

    private execute(instruction: Instruction) {
        const { type, value } = instruction;
        switch (type) {
            case Opcode.PUSH:
                this.stack.push(this.data[value]);
                break;
            case Opcode.POP:
                this.stack.pop();
                break;
            case Opcode.ADD:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type === ValueType.NUMBER || b.type === ValueType.NUMBER)
                        this.stack.push(Value.number(b.value + a.value));
                    else if (a.type === ValueType.STRING || b.type === ValueType.STRING)
                        this.stack.push(Value.string(b.value + a.value));
                    else
                        throw new Error("Cannot add non-numbers or non-strings");
                    break;
                }
            case Opcode.SUB: {
                const a = this.stack.pop();
                const b = this.stack.pop();

                if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                    throw new Error("Cannot subtract non-numbers");

                this.stack.push(Value.number(a.value - b.value));
                break;
            }
            case Opcode.MUL:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot multiply non-numbers");

                    this.stack.push(Value.number(a.value * b.value));
                    break;
                }
            case Opcode.DIV:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot divide non-numbers");

                    this.stack.push(Value.number(a.value / b.value));
                    break;
                }
            case Opcode.LT:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers: " + a.type + " " + b.type);

                    this.stack.push(Value.boolean(b.value < a.value));
                    break;
                }
            case Opcode.GT:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers");

                    this.stack.push(Value.boolean(a.value > b.value));
                    break;
                }
            case Opcode.LTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers");

                    this.stack.push(Value.boolean(a.value <= b.value));
                    break;
                }
            case Opcode.GTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers");

                    this.stack.push(Value.boolean(a.value >= b.value));
                    break;
                }
            case Opcode.EQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    this.stack.push(Value.boolean(b.value === a.value));
                    break;
                }
            case Opcode.GTEQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers");

                    this.stack.push(Value.boolean(a.value >= b.value));
                    break;
                }
            case Opcode.NEQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    this.stack.push(Value.boolean(b.value !== a.value));
                    break;
                }
            case Opcode.JUMP:
                this.ip = value - 1;
                break;
            case Opcode.JUMPF:
                if (!this.stack.pop().value)
                    this.ip = value - 1;
                break;
            case Opcode.JUMPT:
                if (this.stack.pop().value)
                    this.ip = value - 1;
                break;
            case Opcode.CALL:
                {
                    const func = this.stack.pop();

                    if (func.type === ValueType.NATIVE) {
                        const args = [];
                        for (let i = 0; i < value; i++)
                            args.unshift(this.stack.pop());

                        if (func.value === `syscall`) {
                            console.log(`syscall INVOKED WITH ARGS : ${args.map(a => a).join(`, `)}`);
                            this.syscall = {
                                name: args[0].value,
                                args: args.slice(1)
                            };
                        }
                        break;
                    }

                    const args = [func];
                    for (let i = 0; i < value; i++)
                        args.unshift(this.stack.pop());

                    this.frames.push(new CallFrame(
                        -1,
                        args,
                        func.value.body
                    ));

                    break;
                }
            case Opcode.RET:
                if (value === 1)
                    this.frames.at(-2).stack.push(this.stack.pop());
                else
                    this.frames.at(-2).stack.push(Value.null());

                this.frames.pop();
                break;
            case Opcode.DATA:
                this.stack.push(this.data[value]);
                break;
            case Opcode.STORE:
                this.stack[value] = this.stack.at(-1);
                break;
            case Opcode.LOAD:
                this.stack.push(this.stack[value]);
                break;
            case Opcode.DECLAREGL:
                {
                    const id = this.data[value].value;
                    this.globals.set(id, this.stack.pop());
                    break;
                }

            case Opcode.LOADGL:
                {
                    const id = this.data[value].value;
                    this.stack.push(this.globals.get(id));
                    break;
                }
            case Opcode.SETGL:
                {
                    const id = this.data[value].value;
                    this.globals.set(id, this.stack.at(-1));
                    break;
                }
            case Opcode.PARSE_NUMBER:
                {
                    const str = this.stack.pop().value;

                    if (isNaN(Number(str)))
                        throw new Error(`Cannot parse ${str} as number`);

                    this.stack.push(Value.number(Number(str)));
                    break;
                }
            case Opcode.RANDOM:
                {
                    this.stack.push(Value.number(Math.random()));

                    break;
                }
            case Opcode.IMPORT:
                {
                    break;
                }
            case Opcode.NOP:
                break;

            default:
                throw new Error(`Unknown opcode ${type}`);
        }
    }

    private serialize(status: VMStatus = VMStatus.RUNNING, syscall?: Syscall): VMImage {
        return {
            state: btoa(serialize(this)),
            status: status,
            syscall
        };
    }

    public static deserialize(image: VMImage, arg: Value): VM {
        const vm = deserialize(VM, atob(image.state));

        if (image.status === VMStatus.SYSCALL && arg !== undefined)
            vm.frames.at(-1).stack.push(arg);

        vm.syscall = undefined;

        return vm;
    }

    public static create(program: Program): VM {
        const vm = new VM();

        vm.data = program.data;
        vm.frames = [new CallFrame(0, [], program.text)];
        vm.globals = new Map();

        return vm;
    }
}