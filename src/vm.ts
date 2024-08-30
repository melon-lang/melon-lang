import "reflect-metadata";
import { Type, serialize, deserialize } from 'class-transformer';
import { CompilerBug, DivisionByZero, FunctionArgumentNumberMismatch, InvalidFormat, InvalidType, NativeFunctionArgumentNumberMismatch, VariableAlreadyDeclared, VariableNotDeclared } from './error';
import natives from './native';
import syscalls from './syscall';

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
    INPUT = "input",
    SYSCALL = "syscall",
    DATA = "data",
    INC = "inc",
    DEC = "dec",
    NEG = "neg",
    COPY = "copy",
    SETGL = "setgl",
    DECLAREGL = "declaregl",
    LOADGL = "loadgl",
    NATIVE = "native",
    NOP = "nop",
    MOD = "MOD"
}

export enum ValueType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    FUNCTION = "function",
    NATIVE = 'native',
    SYSCALL = "syscall",    
    NULL = "null",
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

    static syscall(value: string) {
        return new Value(ValueType.SYSCALL, value);
    }

    static null() {
        return new Value(ValueType.NULL, null);
    }
}

export class Stack extends Array<Value> {

    constructor(values: Value[] = []) {
        super(...values);
    }

    pop() {
        if (this.length === 0)
            throw new CompilerBug("Stack underflow. There is nothing to pop from the VM stack.");

        return super.pop();
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
    lineNumber?: number;

    constructor(type: Opcode, lineNumber: number, value?: number,) {
        this.type = type;
        this.lineNumber = lineNumber;
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
    stack: Stack;

    @Type(() => Instruction)
    text: Instruction[];

    constructor(ip: number, stack: Value[], text: Instruction[]) {
        this.ip = ip;
        this.stack = new Stack(stack);
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

    constructor(program: Program) {
        this.data = program.data;
        this.frames = [new CallFrame(0, [], program.text)];
        this.globals = new Map();
        this.defineNatives();
        this.defineSyscalls();
    }

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

    public run(steps: number = Infinity): VMImage {
        while (steps-- > 0 && this.frames.length > 0 && !this.syscall) {
            const instruction = this.text[this.ip];

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
        const { type, value, lineNumber } = instruction;
        switch (type) {
            case Opcode.PUSH:
                this.stack.push(this.data[value]);
                break;
            case Opcode.POP:
                this.stack.pop();
                break;
            case Opcode.OR:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.BOOLEAN || b.type !== ValueType.BOOLEAN)
                        throw new InvalidType(lineNumber, ValueType.BOOLEAN, a.type);

                    this.stack.push(Value.boolean(b.value || a.value));
                    break;
                }
            case Opcode.AND:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.BOOLEAN || b.type !== ValueType.BOOLEAN)
                        throw new InvalidType(lineNumber, ValueType.BOOLEAN, a.type);

                    this.stack.push(Value.boolean(b.value && a.value));
                    break;
                }
            case Opcode.ADD:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type === ValueType.NUMBER && b.type === ValueType.NUMBER)
                        this.stack.push(Value.number(b.value + a.value));
                    else if (a.type === ValueType.STRING && b.type === ValueType.STRING)
                        this.stack.push(Value.string(b.value + a.value));
                    else
                        throw new InvalidType(lineNumber, a.type, b.type, `Cannot add ${a.type} ${a.value} with ${b.type} ${b.value}`);
                    break;
                }
            case Opcode.SUB: {
                const a = this.stack.pop();
                const b = this.stack.pop();

                if (a.type !== ValueType.NUMBER || b.type !== ValueType.NUMBER)
                    throw new InvalidType(lineNumber, a.type, b.type, `Cannot subtract non-numbers ${a.value} and ${b.value}`);

                this.stack.push(Value.number(b.value - a.value));
                break;
            }
            case Opcode.MUL:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot multiply non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot multiply non-numbers");

                    this.stack.push(Value.number(a.value * b.value));
                    break;
                }
            case Opcode.DIV:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot divide non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot divide non-numbers");

                    if (a.value === 0)
                        throw new DivisionByZero(lineNumber);

                    this.stack.push(Value.number(b.value / a.value));
                    break;
                }
            case Opcode.MOD:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot divide non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot divide non-numbers");

                    if (a.value === 0)
                        throw new DivisionByZero(lineNumber);

                    this.stack.push(Value.number(b.value % a.value));
                    break;
                }
            case Opcode.LT:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot compare (<) non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot compare (<) non-numbers");


                    this.stack.push(Value.boolean(b.value < a.value));
                    break;
                }
            case Opcode.GT:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot compare (>) non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot compare (>) non-numbers");

                    this.stack.push(Value.boolean(b.value > a.value));
                    break;
                }
            case Opcode.LTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot compare (<=) non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot compare (<=) non-numbers");

                    this.stack.push(Value.boolean(b.value <= a.value));
                    break;
                }
            case Opcode.GTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, "Cannot compare (>=) non-numbers");
                    if (b.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, b.type, "Cannot compare (>=) non-numbers");

                    this.stack.push(Value.boolean(b.value >= a.value));
                    break;
                }
            case Opcode.EQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    this.stack.push(Value.boolean(a.type === b.type && b.value === a.value));
                    break;
                }
            case Opcode.NEQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    this.stack.push(Value.boolean(a.type !== b.type || b.value !== a.value));
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
                    const args = [];
                    for (let i = 0; i < value; i++)
                        args.unshift(this.stack.pop());

                    const func = this.stack.pop();

                    if (func.type === ValueType.NATIVE) {
                        const nativeInfo = natives[func.value];
                        
                        if (nativeInfo === undefined)
                            throw new CompilerBug(`Native function ${func.value} is not defined`);

                        if (nativeInfo.args !== value)
                            throw new NativeFunctionArgumentNumberMismatch(lineNumber, func.value, nativeInfo.args, value);

                        const result = nativeInfo.function(lineNumber, args);

                        this.stack.push(result);
                    } else if (func.type === ValueType.FUNCTION) {
                        if (func.value.args.length !== value)
                            throw new FunctionArgumentNumberMismatch(lineNumber, func.value.name, func.value.args.length, value);
    
                        args.unshift(func);
    
                        this.frames.push(new CallFrame(
                            -1,
                            args,
                            func.value.body
                        ));
                    } else if (func.type === ValueType.SYSCALL) {
                        let syscallId = func.value;
                        const syscallInfo = syscalls[syscallId];

                        if (syscallInfo === undefined)
                            throw new CompilerBug(`Syscall ${syscallId} is not defined`);

                        if (syscallInfo.args !== value)
                            throw new NativeFunctionArgumentNumberMismatch(lineNumber, syscallId, syscallInfo.args, value);

                        // Special case for `syscall()`, the syscall name is the first argument
                        if(syscallId === 'syscall'){
                            if (args[0].type !== ValueType.STRING)
                                throw new InvalidType(lineNumber, ValueType.STRING, args[0].type, `Syscall name must be a string`);

                            syscallId = args.shift().value;
                        }

                        this.syscall = {
                            name: syscallId,
                            args
                        };
                    }
                    else {
                        throw new InvalidType(lineNumber, ValueType.FUNCTION, func.type, `Cannot call non-function ${func.value}`);
                    }

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

                    if (this.globals.has(id))
                        throw new VariableAlreadyDeclared(lineNumber, id);

                    this.globals.set(id, this.stack.pop());
                    break;
                }
            case Opcode.LOADGL:
                {
                    const id = this.data[value].value;

                    if (!this.globals.has(id))
                        throw new VariableNotDeclared(lineNumber, id);

                    this.stack.push(this.globals.get(id));
                    break;
                }
            case Opcode.SETGL:
                {
                    const id = this.data[value].value;

                    if (!this.globals.has(id))
                        throw new VariableNotDeclared(lineNumber, id);

                    this.globals.set(id, this.stack.at(-1));
                    break;
                }
            case Opcode.NEG:
                {
                    const a = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, `Cannot negate non-number ${a.value}`);

                    this.stack.push(Value.number(-a.value));
                    break;
                }
            case Opcode.INC:
                {
                    const a = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, `Cannot increment non-number ${a.value}`);

                    this.stack.push(Value.number(a.value + 1));
                    break;
                }
            case Opcode.DEC:
                {
                    const a = this.stack.pop();

                    if (a.type !== ValueType.NUMBER)
                        throw new InvalidType(lineNumber, ValueType.NUMBER, a.type, `Cannot decrement non-number ${a.value}`);

                    this.stack.push(Value.number(a.value - 1));
                    break;
                }
            case Opcode.COPY:
                {
                    const a = this.stack.pop();

                    this.stack.push(a);
                    this.stack.push(a);
                    break;
                }
            case Opcode.NOP:
                break;

            default:
                throw new CompilerBug(`Unknown opcode ${type}`);
        }
    }

    private defineNatives() {
       for(const [name, _] of Object.entries(natives)){
           this.globals.set(name, Value.native(name));
       }
    }

    private defineSyscalls() {
        for(const [name, _] of Object.entries(syscalls)){
            this.globals.set(name, Value.syscall(name));
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
}