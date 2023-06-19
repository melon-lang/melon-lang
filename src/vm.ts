import { Chunk, Opcode, Disassembler } from "./common.js";
import { Value, printValue, ValueType } from "./value.js";

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
                    console.log(`          [ ${printValue(value)} ]`);
                });
                this.dissambler.disassembleInstruction(this.ip - 1);
            }

            switch (instruction) {
                case Opcode.OP_RETURN:
                    console.log(printValue(this.pop()));
                    return InterpretResult.INTERPRET_OK;
                case Opcode.OP_NEGATE:

                    if (!this.peek().is(ValueType.VAL_NUMBER))
                        throw new Error("Operand must be a number.");

                    this.push(Value.number(-this.pop().value));
                    break;
                case Opcode.OP_ADD:
                case Opcode.OP_SUBTRACT:
                case Opcode.OP_MULTIPLY:
                case Opcode.OP_DIVIDE:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_CONSTANT:
                    const constant = this.readByte();
                    this.stack.push(Value.number(this.chunk.getConstant(constant)));
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
            }
        }
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