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