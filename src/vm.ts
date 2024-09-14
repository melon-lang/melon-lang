import "reflect-metadata";
import { Type, serialize, deserialize, Transform } from 'class-transformer';
import { CompilerBug, DivisionByZero, FunctionArgumentNumberMismatch, IndexError, InvalidFormat, InvalidType, NativeFunctionArgumentNumberMismatch, NoSuchMemberMethod, VariableAlreadyDeclared, VariableNotDeclared } from './error';
import natives from './native';
import syscalls from './syscall';
import { BooleanValue, Function, FunctionValue, NativeValue, ListValue, NullValue, NumberValue, StringValue, SyscallValue, TupleValue, Value, ValueTransform, MemberMethodValue, DictValue } from './value';

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
    MOD = "MOD",
    MAKE_TUPLE = "make_tuple",
    MAKE_LIST = "make_list",
    MAKE_DICT = "make_dict",
    SUBSCRIPT = "subscript",
    STORE_SUBSCRIPT = "store_subscript",
    MEMBER_ACCESS = "member_access"
}

export class Stack extends Array<Value> {
    pop() {
        if (this.length === 0)
            throw new CompilerBug("Stack underflow. There is nothing to pop from the VM stack.");

        return super.pop();
    }
}

export class Instruction {
    type: Opcode;
    lineNumber: number;
    value?: number;

    constructor(type: Opcode, lineNumber: number, value?: number,) {
        this.type = type;
        this.lineNumber = lineNumber;
        this.value = value;
    }
}

export class Program {
    text: Instruction[];
    @ValueTransform()
    @Type(()=>Value)
    data: Value[];
    names: string[];

    constructor(text: Instruction[], data: Value[], names: string[] = []) {
        this.text = text;
        this.data = data;
        this.names = names;
    }
}

class CallFrame {
    ip: number;

    @Type(()=>Value)
    @ValueTransform()
    stack: Stack;

    @Type(() => Instruction)
    text: Instruction[];

    constructor(ip: number, stack: Value[], text: Instruction[]) {
        this.ip = ip;
        this.stack = new Stack();

        // Related with class-transformers. Might look unnecesarry to check if undefined, but it is needed.
        if(stack)
            this.stack.push(...stack);

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

export class Syscall {
    name: string;
    @ValueTransform()
    @Type(()=>Value)
    args: Value[];

    constructor(name = "", args = []){
        this.name = name;
        this.args = args;
    }
}

export default class VM {
    @ValueTransform()
    @Type(()=>Value)
    private data: Value[];

    private names: string[];

    @Type(() => CallFrame)
    private frames: CallFrame[];

    @ValueTransform()
    @Type(()=>Value)
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

    public run(timeLimitInMilliseconds: number = Infinity): VMImage {
        
        const startTime = Date.now();

        while (Date.now() - startTime  < timeLimitInMilliseconds && this.frames.length > 0 && !this.syscall) {
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
        const { type, value = 0, lineNumber } = instruction;

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

                    const result = b.__or__(lineNumber, a);
                    this.stack.push(result);
                    break;
                }
            case Opcode.AND:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__and__(lineNumber, a);
                    this.stack.push(result);
                    break;
                }
            case Opcode.ADD:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();
                    
                    let result;
                    if (value  === 0) 
                        result = b.__add__(lineNumber, a);
                    else if (value === 1)
                        result = b.__extend__(lineNumber, a);
                    else
                        throw new CompilerBug("ADD instruction can only get 0 or 1 as value");

                    this.stack.push(result);
                    break;
                }
            case Opcode.SUB: {
                const a = this.stack.pop();
                const b = this.stack.pop();

                const result = b.__sub__(lineNumber, a);

                this.stack.push(result);
                break;
            }
            case Opcode.MUL:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__mul__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.DIV:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__div__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.MOD:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__mod__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.LT:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__lt__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.GT:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__gt__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.LTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__lte__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.GTE:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__gte__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.EQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__eq__(lineNumber, a);

                    this.stack.push(result);
                    break;
                }
            case Opcode.NEQ:
                {
                    const a = this.stack.pop();
                    const b = this.stack.pop();

                    const result = b.__neq__(lineNumber, a);

                    this.stack.push(result);
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

                    if (func instanceof NativeValue) {
                        const nativeInfo = natives[func.value];
                        if (nativeInfo === undefined)
                            throw new CompilerBug(`Native function ${func.value} is not defined`);

                        if (nativeInfo.args !== value)
                            throw new NativeFunctionArgumentNumberMismatch(lineNumber, func.value, nativeInfo.args, value);

                        const result = nativeInfo.function(lineNumber, args);

                        this.stack.push(result);
                    } else if (func instanceof FunctionValue) {
                        if (func.value.args.length !== value)
                            throw new FunctionArgumentNumberMismatch(lineNumber, func.value.name, func.value.args.length, value);
                        args.unshift(func);
                        this.frames.push(new CallFrame(
                            -1,
                            args,
                            func.value.body
                        ));
                    } else if (func instanceof SyscallValue) {

                        let syscallName = func.value;
                        const syscallInfo = syscalls[syscallName];

                        if (syscallInfo === undefined)
                            throw new CompilerBug(`Syscall ${syscallName} is not defined`);

                        let syscallId = syscallInfo.syscallId;

                        const processedArgs = syscallInfo.preprocessor(args, lineNumber);

                        // Special case for `syscall()`, the syscall id is the first argument
                        if (syscallName === 'syscall') {
                            if (!(processedArgs[0] instanceof StringValue))
                                throw new InvalidType(lineNumber, StringValue.typeName, processedArgs[0].typeName, `Syscall name must be a string`);

                            syscallId = processedArgs.shift().value;
                        }

                        this.syscall = new Syscall(
                            syscallId,
                            processedArgs
                        );
                    } else if (func instanceof MemberMethodValue){
                        const [obj, method] = func.resolve();

                        const result = obj[method](lineNumber, ...args);

                        this.stack.push(result);
                    }
                    else {
                        throw new InvalidType(lineNumber, FunctionValue.typeName, func.typeName, `Cannot call non-function ${func.value}`);
                    }

                    break;
                }
            case Opcode.RET:
                if (value === 1)
                    this.frames.at(-2).stack.push(this.stack.pop());
                else
                    this.frames.at(-2).stack.push(new NullValue());

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

                    const result = a.__neg__(lineNumber);

                    this.stack.push(result);
                    break;
                }
            case Opcode.INC:
                {
                    const a = this.stack.pop();

                    const result = a.__inc__(lineNumber);

                    this.stack.push(result);
                    break;
                }
            case Opcode.DEC:
                {
                    const a = this.stack.pop();

                    const result = a.__dec__(lineNumber);

                    this.stack.push(result);
                    break;
                }
            case Opcode.COPY:
                {
                    const a = this.stack.pop();

                    this.stack.push(a);
                    this.stack.push(a);
                    break;
                }
            case Opcode.MAKE_TUPLE:
                {
                    const elements = [];

                    for (let i = 0; i < value; i++)
                        elements.unshift(this.stack.pop());

                    this.stack.push(new TupleValue(elements));
                    break;
                }
            case Opcode.MAKE_LIST:
                {
                    const elements = [];

                    for (let i = 0; i < value; i++)
                        elements.unshift(this.stack.pop());

                    this.stack.push(new ListValue(elements));
                    break;
                }
                case Opcode.MAKE_DICT: 
                {
                    const keys = this.stack.pop();
                    const entries = new Map<string, Value>;

                    for(let key of keys.value){
                        const value = this.stack.pop();

                        entries.set(key.value, value);
                    }
                    
                    const dict = new DictValue(entries);

                    this.stack.push(dict);
                    break;
                }
            case Opcode.SUBSCRIPT: {
                const key = this.stack.pop();
                const container = this.stack.pop();
                const result = container.__getitem__(lineNumber, key);

                this.stack.push(result);
                break;
            }
            case Opcode.STORE_SUBSCRIPT: {
                const key = this.stack.pop();
                const name = this.stack.pop();

                const result = name.__setitem__(lineNumber, key, this.stack.pop());

                this.stack.push(result);

                break;
            }
            case Opcode.NOT: {
                const a = this.stack.pop();

                const result = a.__not__(lineNumber);

                this.stack.push(result);
                break;
            }
            case Opcode.MEMBER_ACCESS:
                {
                    const object = this.stack.pop();
                    const name = this.names.at(value);
                    
                    const result = object.getMemberMethodValue(name);
                    
                    if(!result)
                        throw new NoSuchMemberMethod(lineNumber, object.repr, name)
                    
                    this.stack.push(result);
                    break;
                }
            case Opcode.NOP:
                break;

            default:
                throw new CompilerBug(`Unknown opcode ${type}`);
        }
    }

    private defineNatives() {
        for (const [name, _] of Object.entries(natives)) {
            this.globals.set(name, new NativeValue(name));
        }
    }

    private defineSyscalls() {
        for (const [name, _] of Object.entries(syscalls)) {
            this.globals.set(name, new SyscallValue(name));
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
        vm.names = program.names;
        vm.frames = [new CallFrame(0, [], program.text)];
        vm.globals = new Map();
        vm.defineNatives();
        vm.defineSyscalls();

        return vm;
    }
}