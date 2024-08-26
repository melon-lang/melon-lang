import { ValueType } from "./vm"

class MelonError extends Error {
    constructor(message: string){
        super(`[melon] ${message}`)
    }
}

class RuntimeError extends MelonError {
    constructor(message: string){
        super(`Runtime Error: ${message}`)
    }
}

class CompilationError extends MelonError {
    constructor(message: string){
        super(`Compilation Error: ${message}`)
    }
}

export class SyntaxError extends CompilationError {
    constructor(message: string){
        super(`Syntax Error: ${message}`)
    }
}

export class CompilerBug extends MelonError {
    constructor(message: string){
        super(`There might be a bug in the melon compiler: ${message}`)
    }
}

export class VariableNotDeclared extends RuntimeError {
    constructor(variableName: string){
        super(`Variable ${variableName} was not declared.`)
    }
}

export class VariableAlreadyDeclared extends RuntimeError {
    constructor(variableName: string){
        super(`Variable ${variableName} is already declared.`)
    }
}

export class VariableAlreadyDeclaredInScope extends CompilationError {
    constructor(variableName: string){
        super(`Variable ${variableName} is already declared in this scope.`)
    }
}

export class FunctionArgumentNumberMismatch extends RuntimeError {
    constructor(functionName: string, expected: number, got: number){
        super(`Function ${functionName} expects ${expected} argument(s), got ${got}.`)
    }
}

export class NativeFunctionArgumentNumberMismatch extends CompilationError {
    constructor(functionName: string, expected: number, got: number){
        super(`Native function ${functionName} expects ${expected} argument(s), got ${got}.`)
    }
}

export class InvalidType extends CompilationError {
   constructor(expected: ValueType, got: ValueType){
         super(`Expected ${expected}, got ${got}.`)
    }
}