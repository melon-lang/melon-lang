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

    NATIVE = "native"
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

    static closure(value: Closure) {
        return new Value(ValueType.CLOSURE, value);
    }

    static native(value: string) {
        return new Value(ValueType.NATIVE, value);
    }

    static null() {
        return new Value(ValueType.NULL, null);
    }
}

export interface Closure {
    func: Function;
    env: undefined;
}

export interface Function {
    name: string;
    args: string[];
    body: Instruction[];
}

export interface Instruction {
    type: Opcode;
    value?: number;
}

export interface Program {
    text: Instruction[];
    data: Value[];
}

interface CallFrame {
    ip: number;
    stack: Value[];
    text: Instruction[];
}

export default class VM {

    private data: Value[];
    private frames: CallFrame[];
    private globals: Map<string, Value>;

    constructor(program: Program) {
        this.data = program.data;
        this.frames = [{ ip: 0, stack: [], text: program.text }];
        this.globals = new Map();
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

    public run() {
        while (true) {
            const instruction = this.text[this.ip];

            console.log(''.padStart(this.frames.length, '\t'),this.ip + ":", instruction.type, instruction.value, (`[` + this.stack.map(v => `'` + v.value + `'`).join(', ') + `]` ))

            this.execute(instruction);

            this.ip++;

            if (this.ip >= this.text.length) {
                if(this.frames.length === 1)
                    break;

                this.frames.pop();
            }
        }
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
                this.stack.push(Value.number(this.stack.pop().value + this.stack.pop().value));
                break;
            case Opcode.SUB: {
                const a = this.stack.pop();
                const b = this.stack.pop();

                if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                    throw new Error("Cannot subtract non-numbers");

                this.stack.push(Value.number(b.value - a.value));
                break;
            }
            case Opcode.MUL:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot multiply non-numbers");

                    this.stack.push(Value.number(b.value * a.value));
                    break;
                }
            case Opcode.DIV:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot divide non-numbers");

                    this.stack.push(Value.number(b.value / a.value));
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

                    this.stack.push(Value.boolean(b.value > a.value));
                    break;
                }
            case Opcode.LTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers");

                    this.stack.push(Value.boolean(b.value <= a.value));
                    break;
                }
            case Opcode.GTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                        throw new Error("Cannot compare non-numbers");

                    this.stack.push(Value.boolean(b.value >= a.value));
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

                    this.stack.push(Value.boolean(b.value >= a.value));
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
                        for(let i = 0; i < value; i++)
                            args.push(this.stack.pop());
                        
                        if (func.value === `print`) {
                            for (let i = 0; i < value; i++)
                                console.log(args[i].value);

                            this.stack.push(Value.null());
                        }
                        else if (func.value === `syscall`) {
                            console.log(`syscall INVOKED WITH ARGS : ${args.map(a => a).join(`, `)}`);
                            this.stack.push(Value.null());
                        }

                        break;
                    } 

                    const args = [func];
                    for(let i = 0; i < value; i++)
                        args.push(this.stack.pop());

                    this.frames.push({
                        ip: -1,
                        stack: args,
                        text: func.value.body
                    });

                    break;
                }
            case Opcode.RET:
                if(value === 1)
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
                    this.globals[id] = this.stack.pop();
                    break;
                }

            case Opcode.LOADGL:
                {
                    const id = this.data[value].value;
                    this.stack.push(this.globals[id]);
                    break;
                }
            case Opcode.SETGL:
                {
                    const id = this.data[value].value;
                    this.globals[id] = this.stack.at(-1);
                    break;
                }
        }
    }










}