import { Chunk } from "./chunk.js";
import Disassembler from "./disassembler.js";
import Value, { ValueType, StringObj } from "./value.js";

export enum Opcode {
    OP_CONSTANT,
    OP_NIL,
    OP_TRUE,
    OP_FALSE,
    OP_ADD,
    OP_SUBTRACT,
    OP_MULTIPLY,
    OP_DIVIDE,
    OP_NEGATE,
    OP_RETURN,
    OP_NOT,
    OP_EQUAL,
    OP_GREATER,
    OP_LESS,
    OP_PRINT,
    OP_POP,
    OP_DEFINE_GLOBAL,
    OP_GET_GLOBAL,
    OP_SET_GLOBAL,
    OP_GET_LOCAL,
    OP_SET_LOCAL,
    OP_JUMP_IF_FALSE,
    OP_JUMP,
    OP_LOOP,

};

export enum InterpretResult {
    INTERPRET_OK,
    INTERPRET_COMPILE_ERROR,
    INTERPRET_RUNTIME_ERROR
};

class VM {
    private chunk: Chunk;
    private ip: number = 0;
    private debug: boolean;
    private dissambler: Disassembler;
    private stack: Value[] = [];
    private globals: Value[] = [];

    constructor({ debug = false }) {
        this.debug = debug;
    }

    interpret(chunk): InterpretResult {
        this.chunk = chunk;
        this.ip = 0;
        this.dissambler = new Disassembler(chunk);

        return this.run();
    }

    private readByte(): number {
        const byte = this.chunk.get(this.ip);
        this.ip++;
        return byte;
    }

    private run(): InterpretResult {

        for (; ;) {
            const instruction = this.readByte();

            // This part should be optimized.
            if (this.debug) {
                this.stack.forEach((value) => {
                    console.log(`          [ ${value.toString()} ]`);
                });
                this.dissambler.disassembleInstruction(this.ip - 1);
            }

            switch (instruction) {
                case Opcode.OP_RETURN:
                    return InterpretResult.INTERPRET_OK;
                case Opcode.OP_NEGATE:

                    if (!this.peek().is(ValueType.VAL_NUMBER))
                        throw new Error("Operand must be a number.");

                    this.push(Value.number(-this.pop().value));
                    break;
                case Opcode.OP_ADD: {
                    const b = this.pop();
                    const a = this.pop();

                    if (a.is(ValueType.VAL_NUMBER) && b.is(ValueType.VAL_NUMBER)) {
                        this.push(Value.number(a.value + b.value));
                    }
                    else if (a.is(ValueType.VAL_OBJ) && b.is(ValueType.VAL_OBJ)) {
                        this.push(Value.obj(new StringObj(a.toString() + b.toString())));
                    }
                    else {
                        throw new Error("Operands must be two numbers or two strings.");
                    }
                    break;
                }
                case Opcode.OP_SUBTRACT:
                case Opcode.OP_MULTIPLY:
                case Opcode.OP_DIVIDE:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_CONSTANT:
                    const constant = this.readByte();
                    this.stack.push(this.chunk.getConstant(constant));
                    break;
                case Opcode.OP_NIL:
                    this.push(Value.nil());
                    break;
                case Opcode.OP_TRUE:
                    this.push(Value.bool(true));
                    break;
                case Opcode.OP_FALSE:
                    this.push(Value.bool(false));
                    break;
                case Opcode.OP_NOT:
                    this.push(Value.bool(this.isFalsey(this.pop())));
                    break;
                case Opcode.OP_EQUAL:
                    const b = this.pop();
                    const a = this.pop();
                    this.push(Value.bool(a.equalsTo(b)));
                    break;
                case Opcode.OP_GREATER:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_LESS:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_PRINT:
                    {
                        const a = this.pop();
                        console.log(a.toString());
                        break;
                    }
                case Opcode.OP_POP:
                    this.pop();
                    break;
                case Opcode.OP_DEFINE_GLOBAL:
                    {
                        const name = (this.chunk.getConstant(this.readByte()).obj as StringObj).value;
                        this.globals[name] = this.pop();
                        break;
                    }
                case Opcode.OP_GET_GLOBAL:
                    {
                        const name = (this.chunk.getConstant(this.readByte()).obj as StringObj).value;
                        const value = this.globals[name];
                        if (!value) {
                            throw new Error(`Undefined variable '${name}'.`);
                        }
                        this.push(value);
                        break;
                    }
                case Opcode.OP_SET_GLOBAL:
                    {
                        const name = (this.chunk.getConstant(this.readByte()).obj as StringObj).value;
                        if (!this.globals[name]) {
                            throw new Error(`Undefined variable '${name}'.`);
                        }

                        this.globals[name] = this.peek();
                        break;
                    }
                case Opcode.OP_GET_LOCAL:
                    {
                        const slot = this.readByte();
                        this.push(this.stack[slot]);
                        break;

                    }
                case Opcode.OP_SET_LOCAL:
                    {
                        const slot = this.readByte();
                        this.stack[slot] = this.peek();
                        break;
                    }
                case Opcode.OP_JUMP_IF_FALSE:
                    {
                        const offset = this.readShort();
                        if (this.isFalsey(this.peek())) {
                            this.ip += offset;
                        }
                        break;
                    }
                case Opcode.OP_JUMP:
                    {
                        const offset = this.readShort();
                        this.ip += offset;
                        break;
                    }

                case Opcode.OP_LOOP:
                    {
                        const offset = this.readShort();
                        this.ip -= offset;
                        break;
                    }
            }
        }
    }

    private readShort(): number {
        const byte1 = this.readByte();
        const byte2 = this.readByte();
        return (byte1 << 8) | byte2;
    }

    private isFalsey(value: Value): boolean {
        return value.is(ValueType.VAL_NIL) || (value.is(ValueType.VAL_BOOL) && !value.value);
    }

    private binaryOp(op: Opcode): void {
        if (!this.peek().is(ValueType.VAL_NUMBER))
            throw new Error("Operand must be a number.");

        const b = this.pop();

        if (!this.peek().is(ValueType.VAL_NUMBER))
            throw new Error("Operand must be a number.");

        const a = this.pop();

        switch (op) {
            case Opcode.OP_ADD:
                this.push(Value.number(a.value + b.value));
                break;
            case Opcode.OP_SUBTRACT:
                this.push(Value.number(a.value - b.value));
                break;
            case Opcode.OP_MULTIPLY:
                this.push(Value.number(a.value * b.value));
                break;
            case Opcode.OP_DIVIDE:
                this.push(Value.number(a.value / b.value));
                break;
            case Opcode.OP_GREATER:
                this.push(Value.bool(a.value > b.value));
                break;
            case Opcode.OP_LESS:
                this.push(Value.bool(a.value < b.value));
                break;
        }
    }

    /**
     *      STACK OPERATIONS
     */

    private push(value: Value): void {
        this.stack.push(value);
    }

    private pop(): Value {
        return this.stack.pop();
    }

    private peek(): Value {
        return this.stack[this.stack.length - 1];
    }
}

export default VM;