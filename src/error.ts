import { ValueType } from "./vm"

export class MelonError extends Error {
    constructor(lineNumber: number, message: string){
        super(`[melon] ${message} at line ${lineNumber}.`)
    }
}

export class RuntimeError extends MelonError {
    constructor(lineNumber: number, message: string){
        super(lineNumber, `Runtime Error: ${message}`)
    }
}

export class CompilationError extends MelonError {
    constructor(lineNumber: number, message: string){
        super(lineNumber, `Compilation Error: ${message}`)
    }
}

export class SyntaxError extends MelonError {
    constructor(lineNumber: number, message: string){
        super(lineNumber, `Syntax Error: ${message}`)
    }
}

export class CompilerBug extends MelonError {
    constructor(message: string){
        super(-1, `There might be a bug in the melon compiler: ${message}`)
    }
}

export class VariableNotDeclared extends RuntimeError {
    constructor(lineNumber: number, variableName: string){
        super(lineNumber, `Variable ${variableName} was not declared`)
    }
}

export class VariableAlreadyDeclared extends RuntimeError {
    constructor(lineNumber: number, variableName: string){
        super(lineNumber, `Variable ${variableName} is already declared`)
    }
}

export class VariableAlreadyDeclaredInScope extends CompilationError {
    constructor(lineNumber: number, variableName: string){
        super(lineNumber, `Variable ${variableName} is already declared in this scope`)
    }
}

export class FunctionArgumentNumberMismatch extends RuntimeError {
    constructor(lineNumber: number, functionName: string, expected: number, got: number){
        super(lineNumber, `Function ${functionName} expects ${expected} argument(s), got ${got}`)
    }
}

export class SycallArgumentNumberMismatch extends RuntimeError {
    constructor(lineNumber: number, syscallName: string, expected: number, got: number){
        super(lineNumber, `Function ${syscallName} expects ${expected} argument(s), got ${got}`)
    }
}

export class NativeFunctionArgumentNumberMismatch extends CompilationError {
    constructor(lineNumber: number, functionName: string, expected: number, got: number){
        super(lineNumber, `Native function ${functionName} expects ${expected} argument(s), got ${got}`)
    }
}

export class InvalidType extends RuntimeError {
   constructor(lineNumber: number, expected: ValueType, got: ValueType, message: string = ''){
         super(lineNumber, `${message} Expected ${expected}, got ${got}`)
    }
}

export class DivisionByZero extends RuntimeError {
    constructor(lineNumber: number){
        super(lineNumber, `Division by zero`)
    }
}

export class InvalidFormat extends RuntimeError {
    constructor(lineNumber: number, message){
        super(lineNumber, message);
    }
}

export class IndexError extends RuntimeError {
    constructor(lineNumber: number){
        super(lineNumber, "List index out of range");
    }
}