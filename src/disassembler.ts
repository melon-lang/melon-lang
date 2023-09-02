import { Function, Program, ValueType } from "./vm";

class Disassembler {

    static toHex(value: number): string {
        return '0x' + value.toString(16).padStart(4, '0');
    }

    static disassemble(program: Program): string {
        let text = 'section:\t.text\n\n_start\n';

        let line = 0;
        for (const instruction of program.text) {
            text += Disassembler.toHex(line++) + `\t\t${instruction.type.padEnd(16)}${instruction.value == undefined ? '' : Disassembler.toHex(instruction.value)}\n`;
        }

        let data = 'section:\t.data\n\n';

        line = 0;
        for (const constant of program.data) {
            data += Disassembler.toHex(line++) + '\t\t';

            if (constant.type === ValueType.FUNCTION) {
                text += Disassembler.disassembleProcedure(constant.value) + '\n';
                data += `${constant.type}\t\t${constant.value.name}\n`;
            }
            else
                data += `${constant.type}\t\t${constant.value}\n`;
        }

        return text + '\n' + data;
    }

    static disassembleProcedure(procedure: Function): string {
        let output = `\n__${procedure.name}__\n`;

        let line = 0;
        for (const instruction of procedure.body) {
            output += Disassembler.toHex(line++) + `\t\t${instruction.type.padEnd(16)}${instruction.value == undefined ? '' : Disassembler.toHex(instruction.value)}\n`;
        }

        return output;
    }
}

export default Disassembler;