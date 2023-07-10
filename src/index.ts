import 'reflect-metadata';
import VM, { InterpretResult, Opcode, VMStatus } from "./vm";
import Compiler from "./compiler";
import { Chunk } from "./chunk";
import Value from './value';

export { VM, InterpretResult, Opcode, VMStatus, Compiler, Chunk, Value };