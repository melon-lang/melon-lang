import "reflect-metadata";
import 'es6-shim';
import { Type, Expose, Transform } from "class-transformer";
import { Instruction } from "./vm";
import { CompilerBug, DivisionByZero, IndexError, InvalidOperationOnType, InvalidType, KeyError, NativeFunctionArgumentNumberMismatch } from './error';

const getAsValue = (value) => {
    switch (value.___serialization_type) {
        case BooleanValue.typeName:
            return new BooleanValue(value.value);
        case StringValue.typeName:
            return new StringValue(value.value);
        case NativeValue.typeName:
            return new NativeValue(value.value);
        case NullValue.typeName:
            return new NullValue();
        case NumberValue.typeName:
            return new NumberValue(value.value);
        case ListValue.typeName:
            return new ListValue(value.value.map(v => getAsValue(v)));
        case TupleValue.typeName:
            return new TupleValue(value.value.map(v => getAsValue(v)));
        case SyscallValue.typeName:
            return new SyscallValue(value.value);
        case FunctionValue.typeName:
            return new FunctionValue(value.value)
        case MemberMethodValue.typeName:
            return new MemberMethodValue(value.value, value.obj)
        case DictValue.typeName:
        {   
            const keys = Object.keys(value.value);
            const entries = new Map<string, Value>();

            for(const key of keys){
                entries.set(key, getAsValue(value.value[key]));
            }

            return new DictValue(entries);
        }
        default:
            throw new CompilerBug(`No such value type: ${value.___serialization_type}`);
    }
}

export const ValueTransform = () => (Transform(({ value, obj }) => {

    if (Array.isArray(value)) {
        return value.map((val) => getAsValue(val))
    } else if (value instanceof Map) {
        const newEntries = Array.from(value, (([key, val]) => {
            return [key, getAsValue(val)]
        })) as [any, any];
        return new Map(newEntries);
    } else {
        throw new CompilerBug(`Cannot transform such type: ${typeof value}`);
    }
}, { toClassOnly: true }))

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

interface NativeFunctionSignature {
    args: typeof Value[];
    optionals?: typeof Value[];
    infinite?: typeof Value;
}

// Decorator for member functions
function ValueMethod(signature: NativeFunctionSignature) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        const methodName = ValueMethodAsString[propertyKey] || propertyKey;

        descriptor.value = function (...args) {
            if (args.length == 0) {
                throw new CompilerBug('Method must at least one argument in ' + methodName);
            }

            const lineNumber = args[0];
            const methodArguments = args.slice(1,);

            // check if first argument is a number
            if (typeof lineNumber !== 'number') {
                throw new CompilerBug('First argument must be a number');
            }

            // check signature
            let currentMethodArgumentIndex = 0;

            for (let i = 0; i < signature.args.length; i++) {
                if (!(methodArguments[currentMethodArgumentIndex] instanceof signature.args[i])) {
                    throw new InvalidType(lineNumber, signature.args[i].typeName, methodArguments[currentMethodArgumentIndex].typeName, `${methodName} used with an invalid type.`);
                }

                currentMethodArgumentIndex++;
            }

            if (signature.optionals) {
                for (let i = 0; i < signature.optionals.length; i++) {
                    if (currentMethodArgumentIndex >= methodArguments.length)
                        break;

                    if (!(methodArguments[currentMethodArgumentIndex] instanceof signature.optionals[i])) {
                        throw new InvalidType(lineNumber, signature.optionals[i].typeName, methodArguments[currentMethodArgumentIndex].typeName, `${methodName} used with an invalid type.`);
                    }

                    currentMethodArgumentIndex++;
                }
            }

            if (signature.infinite) {
                for (let i = currentMethodArgumentIndex; i < methodArguments.length; i++) {
                    if (!(methodArguments[i] instanceof signature.infinite)) {
                        throw new InvalidType(lineNumber, signature.infinite.typeName, methodArguments[i], `${methodName} used with an invalid type.`);
                    }
                }
            }

            if (currentMethodArgumentIndex < methodArguments.length)
                throw new NativeFunctionArgumentNumberMismatch(lineNumber, methodName, currentMethodArgumentIndex, methodArguments.length);

            return method.apply(this, arguments);
        };

        Reflect.defineMetadata(
            // this here is to reference the data later when we retrieve it.
            "method",
            {
                // we put this spread operator in case you have decorated already, so
                // we dont want to lose the old data
                ...Reflect.getMetadata(propertyKey, target),
                // then we append whatever else we need
                isMemberMethod: true,
            },
            target,
            propertyKey,
        );

        return descriptor;
    }
}

const ValueMethodAsString = {
    "__add__": "+",
    "__sub__": "-",
    "__mul__": "*",
    "__div__": "/",
    "__mod__": "%",
    "__pow__": "**",
    "__lt__": "<",
    "__lte__": "<=",
    "__gt__": ">",
    "__gte__": ">=",
    "__neg__": "-",
    "__not__": "!",
    "__len__": "len",
    "__and__": "&&",
    "__or__": "||",
    "__inc__": "++",
    "__dec__": "--",
    "__getitem__": "__getitem__",
    "__setitem__": "__setitem__",
    "__extend__": "__extend__",
    "__delitem__": "__delitem__",
}

export abstract class Value {
    public value: any;
    public static readonly typeName: string = 'value';

    get typeName(): string { return this.constructor['typeName'] }
    private ___serialization_type: string; // Be careful when altering its behaviour.

    getMemberMethodValue(name: string): MemberMethodValue {
        const method = this[name];

        if (!method)
            return undefined;
        
        const isMember = Reflect.getMetadata("method", this.constructor.prototype, name)?.isMemberMethod || false;

        if (!isMember)
            return undefined;

        return new MemberMethodValue(name, this);
    }

    constructor(value: any) {
        this.value = value;
        this.___serialization_type = this.typeName;
    }

    abstract get repr(): string;
    abstract get str(): string;

    abstract equals(other: Value): boolean;

    __add__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "+", this.typeName); };
    __sub__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "-", this.typeName); };
    __mul__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "*", this.typeName); };
    __div__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "/", this.typeName); };
    __mod__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "%", this.typeName); };
    __pow__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "**", this.typeName); };
    __lt__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "<", this.typeName); };
    __lte__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "<=", this.typeName); };
    __gt__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, ">", this.typeName); };
    __gte__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, ">=", this.typeName); };
    __neg__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "-", this.typeName); };
    __not__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "!", this.typeName); };
    __len__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "len", this.typeName); };
    __and__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "&&", this.typeName); };
    __or__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "||", this.typeName); };
    __inc__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "++", this.typeName); };
    __dec__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "--", this.typeName); };
    __getitem__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "getitem", this.typeName); };
    __setitem__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "setitem", this.typeName); };
    __extend__(lineNumber: number, ...args: Value[]): Value { return this.__add__(lineNumber, ...args); };
    __delitem__(lineNumber: number, ...args: Value[]): Value { throw new InvalidOperationOnType(lineNumber, "delitem", this.typeName); };

    @ValueMethod({ args: [] })
    __repr__(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.repr);
    }

    @ValueMethod({ args: [] })
    __str__(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.str);
    }

    @ValueMethod({ args: [Value] })
    __eq__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.equals(args[0]));
    }

    @ValueMethod({ args: [Value] })
    __neq__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(!this.equals(args[0]));
    }

    @ValueMethod({ args: [] })
    __type__(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.typeName);
    }
}

export class MemberMethodValue extends Value {

    public static readonly typeName = 'member_method';
    @ValueTransform()
    @Type(() => Value)
    public obj: Value;

    constructor(value: string, obj: Value) {
        super(value);
        this.obj = obj;
    }

    resolve() {
        return [this.obj, this.value];
    }

    get repr(): string {
        return `<member_function ${this.obj.typeName}::${this.value}>`;
    }

    get str(): string {
        return this.repr;
    }

    equals(other: Value): boolean {
        return other instanceof MemberMethodValue && this.value === other.value;
    }
}

export class BooleanValue extends Value {

    public static readonly typeName = 'boolean';

    constructor(value: boolean) {
        super(value);
    }

    get repr(): string {
        return this.value ? "true" : "false";
    }

    get str(): string {
        return this.value ? "true" : "false";
    }

    equals(other: Value): boolean {
        return other instanceof BooleanValue && this.value === other.value;
    }

    @ValueMethod({ args: [BooleanValue] })
    __and__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value && args[0].value);
    }

    @ValueMethod({ args: [BooleanValue] })
    __or__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value || args[0].value);
    }

    @ValueMethod({ args: [] })
    __not__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(!this.value);
    }
}

export class NumberValue extends Value {

    public static readonly typeName = 'number';

    constructor(value: number) {
        super(value);
    }

    get repr(): string {
        return this.value.toString();
    }

    get str(): string {
        return this.value.toString();
    }

    equals(other: Value): boolean {
        return other instanceof NumberValue && this.value === other.value;
    }

    @ValueMethod({ args: [NumberValue] })
    __add__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value + args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __sub__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value - args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __mul__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value * args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __div__(lineNumber: number, ...args: Value[]): Value {
        if (args[0].value === 0)
            throw new DivisionByZero(lineNumber);

        return new NumberValue(this.value / args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __mod__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value % args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __pow__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value ** args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __lt__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value < args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __lte__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value <= args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __gt__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value > args[0].value);
    }

    @ValueMethod({ args: [NumberValue] })
    __gte__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value >= args[0].value);
    }

    @ValueMethod({ args: [] })
    __neg__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(-this.value);
    }

    @ValueMethod({ args: [] })
    __inc__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value + 1);
    }

    @ValueMethod({ args: [] })
    __dec__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value - 1);
    }
}

export class StringValue extends Value {

    public static readonly typeName = 'string';

    constructor(value: string) {
        super(value);
    }

    get repr(): string {
        return `"${this.value}"`;
    }

    get str(): string {
        return this.value;
    }

    equals(other: Value): boolean {
        return other instanceof StringValue && this.value === other.value;
    }

    @ValueMethod({ args: [StringValue] })
    __add__(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value + args[0].value);
    }

    @ValueMethod({ args: [StringValue] })
    __extend__(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value + args[0].value);
    }

    @ValueMethod({ args: [StringValue] })
    __lte__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value < args[0].value);
    }

    @ValueMethod({ args: [StringValue] })
    __le__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value <= args[0].value);
    }

    @ValueMethod({ args: [StringValue] })
    __gte__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value > args[0].value);
    }

    @ValueMethod({ args: [StringValue] })
    __ge__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value >= args[0].value);
    }

    @ValueMethod({ args: [] })
    __len__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value.length);
    }

    @ValueMethod({ args: [NumberValue] })
    __getitem__(lineNumber: number, ...args: Value[]): Value {
        if (args[0].value < 0 || args[0].value >= this.value.length)
            throw new IndexError(lineNumber);

        return new StringValue(this.value[args[0].value]);
    }

    @ValueMethod({ args: [StringValue] })
    __contains__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value.includes(args[0].value));
    }

    @ValueMethod({ args: [], optionals: [StringValue] })
    split(lineNumber: number, ...args: Value[]): Value {
        return new ListValue(this.value.split(args[0] ? args[0].value : " ")
            .map(v => new StringValue(v)));
    }

    @ValueMethod({ args: [] })
    lower(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value.toLowerCase());
    }

    @ValueMethod({ args: [] })
    upper(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value.toUpperCase());
    }

    @ValueMethod({ args: [] })
    trim(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value.trim());
    }

    @ValueMethod({ args: [StringValue, StringValue] })
    replace(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value.replaceAll(args[0].value, args[1].value));
    }

    @ValueMethod({ args: [] })
    reverse(lineNumber: number, ...args: Value[]): Value {
        return new StringValue(this.value.split("").reverse().join(""));
    }

    @ValueMethod({ args: [StringValue] })
    contains(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value.includes(args[0].value))
    }
}

export class ListValue extends Value {

    public static readonly typeName = 'list';

    constructor(value: Value[]) {
        super(value);
    }

    get repr(): string {
        return `[${this.value.map(v => v.repr).join(", ")}]`;
    }

    get str(): string {
        return `[${this.value.map(v => v.repr).join(", ")}]`;
    }

    equals(other: Value): boolean {
        return other instanceof ListValue && this.value === other.value;
    }

    @ValueMethod({ args: [ListValue] })
    __extend__(lineNumber: number, ...args: Value[]): Value {
        this.value.push(...(args[0].value));

        return this;
    }

    @ValueMethod({ args: [ListValue] })
    __add__(lineNumber: number, ...args: Value[]): Value {
        return new ListValue(this.value.concat(args[0].value));
    }

    @ValueMethod({ args: [NumberValue] })
    __getitem__(lineNumber: number, ...args: Value[]): Value {
        if (args[0].value < 0 || args[0].value >= this.value.length)
            throw new IndexError(lineNumber);

        return this.value[args[0].value];
    }

    @ValueMethod({ args: [NumberValue, Value] })
    __setitem__(lineNumber: number, ...args: Value[]): Value {
        if (args[0].value < 0 || args[0].value >= this.value.length)
            throw new IndexError(lineNumber);

        this.value[args[0].value] = args[1];
        return this;
    }

    @ValueMethod({ args: [], optionals: [NumberValue] })
    __delitem__(lineNumber: number, ...args: Value[]): Value {
        const index = (args.length === 1) ? args[0].value : this.value.length - 1;

        if (index < 0 || index >= this.value.length)
            throw new IndexError(lineNumber);

        const element = this.value[index];
        
        this.value.splice(index, 1);

        return element;
    }

    @ValueMethod({ args: [Value] })
    __contains__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value.some(v => v.__eq__(lineNumber, args[0])));
    }

    @ValueMethod({ args: [] })
    __len__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value.length);
    }

    @ValueMethod({ args: [Value] })
    append(lineNumber: number, ...args: Value[]): Value {
        this.value.push(args[0]);
        return this;
    }

    @ValueMethod({ args: [ListValue] })
    extend(lineNumber: number, ...args: Value[]): Value {
        return this.__extend__(lineNumber, ...args);
    }

    @ValueMethod({ args: [] })
    reverse(lineNumber: number, ...args: Value[]): Value {
        this.value.reverse();

        return this;
    }

    @ValueMethod({ args: [NumberValue, Value] })
    insert(lineNumber: number, ...args: Value[]): Value {
        this.value.splice(args[0].value, 0, args[1]);
        return this;
    }

    @ValueMethod({ args: [], optionals: [NumberValue] })
    pop(lineNumber: number, ...args: Value[]): Value {
        console.log(this.value)
       return this.__delitem__(lineNumber, ...args);
    }
}

export class TupleValue extends Value {

    public static readonly typeName = 'tuple';

    constructor(value: Value[]) {
        super(value);
    }

    get repr(): string {
        return `(${this.value.map(v => v.repr).join(", ")})`;
    }

    get str(): string {
        return `(${this.value.map(v => v.repr).join(", ")})`;
    }

    equals(other: Value): boolean {
        return other instanceof TupleValue && this.value === other.value;
    }

    @ValueMethod({ args: [NumberValue] })
    __getitem__(lineNumber: number, ...args: Value[]): Value {
        return this.value[args[0].value];
    }

    @ValueMethod({ args: [] })
    __len__(lineNumber: number): Value {
        return new NumberValue(this.value.length);
    }
}

export class DictValue extends Value {

    public static readonly typeName = 'dict';

    constructor(value: Map<string, Value>) {
        super(value);
    }

    get repr(): string {
        let repr = "{\n"

        for(const [key, val] of this.value.entries()){
            const lines = val.repr.split("\n")
                                  .map((line, index)=> {
                                    if(index === 0) return line;

                                    return "  " + line;
                                  })
                                  .join("\n");

            repr += `  "${key}" : ${lines},\n`;
        }
        
        repr += "}"

        return repr;
    }
    
    get str(): string {
        return this.repr;
    }

    equals(other: Value): boolean {
        return other instanceof DictValue && this.value === other.value;
    }

    @ValueMethod({args: [StringValue]})
    __getitem__(lineNumber: number, ...args: Value[]): Value {
        const key = args[0].value;
        const item = this.value.get(key);

        if(!item)
            throw new KeyError(lineNumber, key);

        return item;
    }

    @ValueMethod({args: [StringValue, Value]})
    __setitem__(lineNumber: number, ...args: Value[]): Value {
        const key = args[0].value;
        const value = args[1];

        this.value.set(key, value);

        return new NullValue();
    }

    @ValueMethod({args: []})
    __len__(lineNumber: number, ...args: Value[]): Value {
        return new NumberValue(this.value.size);
    }

    @ValueMethod({args: [StringValue]})
    __delitem__(lineNumber: number, ...args: Value[]): Value {
        const key = args[0].value;
        
        if (!this.value.has(key))
            throw new KeyError(lineNumber, key);

        const item = this.value.get(key);
        const deleted = this.value.delete(key);

        if(!deleted)
            throw new KeyError(lineNumber, key);

        return item;
    }

    @ValueMethod({args: [StringValue]})
    __contains__(lineNumber: number, ...args: Value[]): Value {
        return new BooleanValue(this.value.has(args[0].value));
    }

    @ValueMethod({args: [StringValue]})
    get(lineNumber: number, ...args: Value[]): Value {
        return this.__getitem__(lineNumber, ...args);
    }

    @ValueMethod({args: [StringValue, Value]})
    set(lineNumber: number, ...args: Value[]): Value {
        return this.__setitem__(lineNumber, ...args);
    }

    @ValueMethod({args: []})
    values(lineNumber: number, ...args: Value[]): Value {
        const values = Array.from(this.value.values()) as Value[];
        
        return new ListValue(values);
    }

    @ValueMethod({args: []})
    keys(lineNumber: number, ...args: Value[]): Value {
        const keys = Array.from(this.value.keys()) as string[];
        const keysAsValue = keys.map((key) => new StringValue(key));

        return new ListValue(keysAsValue);
    }

    @ValueMethod({args: [StringValue]})
    pop(lineNumber: number, ...args: Value[]): Value {
        return this.__delitem__(lineNumber, ...args);
    }

    @ValueMethod({args: [StringValue]})
    has(lineNumber: number, ...args: Value[]): Value {
        return this.__contains__(lineNumber, ...args);
    }

    @ValueMethod({args: []})
    clear(lineNumber: number, ...args: Value[]): Value {
        this.value.clear();
        return new NullValue();
    }

    @ValueMethod({args: [DictValue]})
    update(lineNumber: number, ...args: Value[]): Value {
        for(const [key, value] of args[0].value.entries()){
            this.value.set(key, value);
        }

        return new NullValue();
    }
}

export class FunctionValue extends Value {

    public static readonly typeName = 'function';

    constructor(value: Function) {
        super(value);
    }

    get repr(): string {
        return `<function ${this.value.name}>`;
    }

    get str(): string {
        return `<function ${this.value.name}>`;
    }

    equals(other: Value): boolean {
        return other instanceof FunctionValue && this.value === other.value;
    }
}

export class NativeValue extends Value {

    public static readonly typeName = 'native_function';

    constructor(value: string) {
        super(value);
    }

    get repr(): string {
        return `<native ${this.value}>`;
    }

    get str(): string {
        return `<native ${this.value}>`;
    }

    equals(other: Value): boolean {
        return other instanceof NativeValue && this.value === other.value;
    }
}

export class SyscallValue extends Value {

    public static readonly typeName = 'syscall';

    constructor(value: string) {
        super(value);
    }

    get repr(): string {
        return `<syscall ${this.value}>`;
    }

    get str(): string {
        return `<syscall ${this.value}>`;
    }

    equals(other: Value): boolean {
        return other instanceof SyscallValue && this.value === other.value;
    }
}

export class NullValue extends Value {

    public static readonly typeName = 'null';

    constructor() {
        super(null);
    }

    get repr(): string {
        return "null";
    }

    get str(): string {
        return "null";
    }

    equals(other: Value): boolean {
        return other instanceof NullValue;
    }
}
