/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./chunk.ts":
/*!******************!*\
  !*** ./chunk.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chunk: () => (/* binding */ Chunk)
/* harmony export */ });
class Chunk {
    view;
    buffer;
    count;
    capacity;
    constants;
    // Related with source code of higher level language
    lineBuffer;
    lineView;
    constructor(capacity = 16) {
        this.count = 0;
        this.capacity = capacity;
        this.buffer = new ArrayBuffer(capacity * Uint8Array.BYTES_PER_ELEMENT);
        this.view = new Uint8Array(this.buffer);
        this.constants = new ValueArray();
        this.lineBuffer = new ArrayBuffer(capacity * Uint8Array.BYTES_PER_ELEMENT);
        this.lineView = new Uint8Array(this.lineBuffer);
    }
    write(byte, line) {
        if (this.count >= this.capacity) {
            this.capacity *= 2;
            const newBuffer = new ArrayBuffer(this.capacity * Uint8Array.BYTES_PER_ELEMENT);
            const newView = new Uint8Array(newBuffer);
            newView.set(this.view);
            this.buffer = newBuffer;
            this.view = newView;
            const newLineBuffer = new ArrayBuffer(this.capacity * Uint8Array.BYTES_PER_ELEMENT);
            const newLineView = new Uint8Array(newLineBuffer);
            newLineView.set(this.lineView);
            this.lineBuffer = newLineBuffer;
            this.lineView = newLineView;
        }
        this.view[this.count] = byte;
        this.lineView[this.count] = line;
        this.count++;
    }
    read() {
        const slice = this.buffer.slice(0, this.count * Uint8Array.BYTES_PER_ELEMENT);
        return new Uint8Array(slice);
    }
    get size() {
        return this.count;
    }
    get(index) {
        return this.view[index];
    }
    getLine(index) {
        return this.lineView[index];
    }
    makeConstant(value) {
        const constant = this.addConstant(value);
        if (constant > 255) {
            throw new Error('Too many constants in one chunk.');
        }
        return constant;
    }
    addConstant(value) {
        this.constants.write(value);
        return this.constants.size - 1;
    }
    getConstant(index) {
        return this.constants.get(index);
    }
}
class ValueArray {
    arr;
    constructor() {
        this.arr = [];
    }
    write(value) {
        this.arr.push(value);
    }
    get(index) {
        return this.arr[index];
    }
    get size() {
        return this.arr.length;
    }
}


/***/ }),

/***/ "./compiler.ts":
/*!*********************!*\
  !*** ./compiler.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./scanner.ts");
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk */ "./chunk.ts");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm */ "./vm.ts");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./value */ "./value.ts");




var Precedence;
(function (Precedence) {
    Precedence[Precedence["PREC_NONE"] = 0] = "PREC_NONE";
    Precedence[Precedence["PREC_ASSIGNMENT"] = 1] = "PREC_ASSIGNMENT";
    Precedence[Precedence["PREC_OR"] = 2] = "PREC_OR";
    Precedence[Precedence["PREC_AND"] = 3] = "PREC_AND";
    Precedence[Precedence["PREC_EQUALITY"] = 4] = "PREC_EQUALITY";
    Precedence[Precedence["PREC_COMPARISON"] = 5] = "PREC_COMPARISON";
    Precedence[Precedence["PREC_TERM"] = 6] = "PREC_TERM";
    Precedence[Precedence["PREC_FACTOR"] = 7] = "PREC_FACTOR";
    Precedence[Precedence["PREC_UNARY"] = 8] = "PREC_UNARY";
    Precedence[Precedence["PREC_CALL"] = 9] = "PREC_CALL";
    Precedence[Precedence["PREC_PRIMARY"] = 10] = "PREC_PRIMARY";
})(Precedence || (Precedence = {}));
/* eslint-disable no-console, no-control-regex*/
const ParseRules = {
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LEFT_PAREN]: {
        prefix: 'grouping',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_PAREN]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LEFT_BRACE]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_BRACE]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_COMMA]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_DOT]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_MINUS]: {
        prefix: 'unary',
        infix: 'binary',
        precedence: Precedence.PREC_TERM,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_PLUS]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_TERM,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SLASH]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_FACTOR,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_STAR]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_FACTOR,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_BANG]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_BANG_EQUAL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL_EQUAL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_GREATER]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_GREATER_EQUAL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LESS]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LESS_EQUAL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_IDENTIFIER]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_STRING]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_NUMBER]: {
        prefix: 'number',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_AND]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_CLASS]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_ELSE]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_FALSE]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_FOR]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_FUN]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_IF]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_NIL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_OR]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_PRINT]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RETURN]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SUPER]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_THIS]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_TRUE]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_VAR]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_WHILE]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_ERROR]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EOF]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_FALSE]: {
        prefix: 'literal',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_TRUE]: {
        prefix: 'literal',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_NIL]: {
        prefix: 'literal',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_BANG]: {
        prefix: 'unary',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_BANG_EQUAL]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_EQUALITY,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL]: {
        prefix: 'NULL',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL_EQUAL]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_EQUALITY,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_GREATER]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_COMPARISON,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_GREATER_EQUAL]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_COMPARISON,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LESS]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_COMPARISON,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LESS_EQUAL]: {
        prefix: 'NULL',
        infix: 'binary',
        precedence: Precedence.PREC_COMPARISON,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_STRING]: {
        prefix: 'string',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
    [_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_IDENTIFIER]: {
        prefix: 'variable',
        infix: 'NULL',
        precedence: Precedence.PREC_NONE,
    },
};
/* eslint-enable */
class Compiler {
    previous;
    current;
    scanner;
    chunk;
    locals;
    localCount;
    scopeDepth;
    compile(source) {
        this.scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__["default"](source);
        this.chunk = new _chunk__WEBPACK_IMPORTED_MODULE_1__.Chunk();
        this.locals = [];
        this.advance();
        while (!this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EOF)) {
            this.declaration();
        }
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EOF, 'Expect end of expression.');
        this.endCompiler();
        return this.chunk;
    }
    /**
     *      DECLARATIONS, STATEMENTS, BLOCKS, EXPRESSIONS
     */
    declaration() {
        if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_VAR)) {
            this.varDeclaration();
        }
        else {
            this.statement();
        }
    }
    statement() {
        if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_PRINT)) {
            this.printStatement();
        }
        else if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_IF)) {
            this.ifStatement();
        }
        else if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_WHILE)) {
            this.whileStatement();
        }
        else if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SYSCALL)) {
            console.log("lol");
            this.syscallStatement();
        }
        else if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_FOR)) {
            this.forStatement();
        }
        else if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LEFT_BRACE)) {
            this.beginScope();
            this.block();
            this.endScope();
        }
        else {
            this.expressionStatement();
        }
    }
    syscallStatement() {
        this.expression();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON, "Expect ';' after syscall.");
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_INTERRUPT);
    }
    ifStatement() {
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'if'.");
        this.expression();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after condition.");
        const thenJump = this.emitJump(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_JUMP_IF_FALSE);
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
        this.statement();
        const elseJump = this.emitJump(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_JUMP);
        this.patchJump(thenJump);
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
        if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_ELSE))
            this.statement();
        this.patchJump(elseJump);
    }
    varDeclaration() {
        const global = this.parseVariable('Expect variable name.');
        if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL)) {
            this.expression();
        }
        else {
            this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NIL);
        }
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON, "Expect ';' after variable declaration.");
        this.defineVariable(global);
    }
    printStatement() {
        this.expression();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON, "Expect ';' after value.");
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_PRINT);
    }
    expressionStatement() {
        this.expression();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON, "Expect ';' after value.");
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
    }
    forStatement() {
        this.beginScope();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'for'.");
        if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON)) {
            // No initializer.
        }
        else if (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_VAR)) {
            this.varDeclaration();
        }
        else {
            this.expressionStatement();
        }
        let loopStart = this.chunk.size;
        let exitJump = -1;
        if (!this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON)) {
            this.expression();
            this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SEMICOLON, "Expect ';' after loop condition.");
            // Jump out of the loop if the condition is false.
            exitJump = this.emitJump(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_JUMP_IF_FALSE);
            this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP); // Condition.
        }
        if (!this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_PAREN)) {
            const bodyJump = this.emitJump(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_JUMP);
            const incrementStart = this.chunk.size;
            this.expression();
            this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
            this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after for clauses.");
            this.emitLoop(loopStart);
            loopStart = incrementStart;
            this.patchJump(bodyJump);
        }
        this.statement();
        this.emitLoop(loopStart);
        if (exitJump != -1) {
            this.patchJump(exitJump);
            this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP); // Condition.
        }
        this.endScope();
    }
    whileStatement() {
        const loopStart = this.chunk.size;
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LEFT_PAREN, "Expect '(' after 'while'.");
        this.expression();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after condition.");
        const exitJump = this.emitJump(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_JUMP_IF_FALSE);
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
        this.statement();
        this.emitLoop(loopStart);
        this.patchJump(exitJump);
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
    }
    expression() {
        this.precedence(Precedence.PREC_ASSIGNMENT);
    }
    precedence(precedence) {
        this.advance();
        const prefixRule = ParseRules[this.previous.type].prefix;
        if (prefixRule == 'NULL') {
            throw new Error('Expect expression.');
        }
        const canAssign = precedence <= Precedence.PREC_ASSIGNMENT;
        this[prefixRule](canAssign);
        while (precedence <= ParseRules[this.current.type].precedence) {
            this.advance();
            const infixRule = ParseRules[this.previous.type].infix;
            this[infixRule](canAssign);
        }
        if (canAssign && this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL)) {
            throw new Error('Invalid assignment target.');
        }
    }
    variable(canAssign) {
        this.namedVariable(this.previous, canAssign);
    }
    string() {
        const value = this.previous.str;
        this.emitConstant(_value__WEBPACK_IMPORTED_MODULE_3__["default"].obj(new _value__WEBPACK_IMPORTED_MODULE_3__.StringObj(value)));
    }
    literal() {
        switch (this.previous.type) {
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_FALSE:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_FALSE);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_NIL:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NIL);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_TRUE:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_TRUE);
                break;
            default:
                return;
        }
    }
    number() {
        const value = Number(this.previous.str);
        this.emitConstant(_value__WEBPACK_IMPORTED_MODULE_3__["default"].number(value));
    }
    grouping() {
        this.expression();
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_PAREN, "Expect ')' after expression.");
    }
    unary() {
        const operatorType = this.previous.type;
        this.precedence(Precedence.PREC_UNARY);
        switch (operatorType) {
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_MINUS:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NEGATE);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_BANG:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NOT);
                break;
            default:
                return;
        }
    }
    binary() {
        const operatorType = this.previous.type;
        const rule = ParseRules[operatorType];
        this.precedence(rule.precedence + 1);
        switch (operatorType) {
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_PLUS:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_ADD);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_MINUS:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_SUBTRACT);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_STAR:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_MULTIPLY);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_SLASH:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_DIVIDE);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_BANG_EQUAL:
                this.emitBytes(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_EQUAL, _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NOT);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL_EQUAL:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_EQUAL);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_GREATER:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_GREATER);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_GREATER_EQUAL:
                this.emitBytes(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_LESS, _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NOT);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LESS:
                this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_LESS);
                break;
            case _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_LESS_EQUAL:
                this.emitBytes(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_GREATER, _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_NOT);
                break;
            default:
                return;
        }
    }
    block() {
        while (this.current.type != _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_BRACE &&
            !this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EOF)) {
            this.declaration();
        }
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_RIGHT_BRACE, "Expect '}' after block.");
    }
    /**
     *      HELPER FUNCTIONS FOR PARSING & COMPILING
     *      ::todo:: move to separate file or class
     */
    consume(type, message) {
        if (this.current.type == type) {
            this.advance();
            return;
        }
        this.errorAtCurrent(message);
    }
    match(type) {
        if (!(this.current.type == type))
            return false;
        this.advance();
        return true;
    }
    advance() {
        this.previous = this.current;
        for (;;) {
            this.current = this.scanner.scanToken();
            if (this.current.type != _scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_ERROR)
                break;
            this.errorAtCurrent('Invalid token.');
        }
    }
    /**
     *      ERROR HANDLING
     */
    errorAtCurrent(message) {
        this.errorAt(this.current, message);
    }
    errorAt(token, message) {
        throw Error(`[line ${token.line}] Error${token.type} at ${token.str}: ${message}`);
    }
    /**
     *      VARIABLES & LOCALS
     */
    beginScope() {
        this.scopeDepth++;
    }
    endScope() {
        this.scopeDepth--;
        while (this.localCount > 0 &&
            this.locals[this.localCount - 1].depth > this.scopeDepth) {
            this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_POP);
            this.localCount--;
        }
    }
    defineVariable(global) {
        this.emitBytes(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_DEFINE_GLOBAL, global);
    }
    parseVariable(errorMessage) {
        this.consume(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_IDENTIFIER, errorMessage);
        this.declareVariable();
        if (this.scopeDepth > 0) {
            this.markInitialized();
            return 0;
        }
        return this.identifierConstant(this.previous);
    }
    markInitialized() {
        this.locals[this.localCount - 1].depth = this.scopeDepth;
    }
    declareVariable() {
        if (this.scopeDepth == 0)
            return;
        const name = this.previous;
        for (let i = this.locals.length - 1; i >= 0; i--) {
            const local = this.locals[i];
            if (local.depth != -1 && local.depth < this.scopeDepth)
                break;
            if (name.str == local.name.str) {
                throw Error('Already variable with this name in this scope.');
            }
        }
        this.locals.push({ name, depth: -1 });
    }
    identifierConstant(token) {
        return this.chunk.makeConstant(_value__WEBPACK_IMPORTED_MODULE_3__["default"].obj(new _value__WEBPACK_IMPORTED_MODULE_3__.StringObj(token.str)));
    }
    namedVariable(name, canAssign) {
        let getOp, setOp;
        let arg = this.resolveLocal(name);
        if (arg != -1) {
            getOp = _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_GET_LOCAL;
            setOp = _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_SET_LOCAL;
        }
        else {
            arg = this.identifierConstant(name);
            getOp = _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_GET_GLOBAL;
            setOp = _vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_SET_GLOBAL;
        }
        if (canAssign && this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_EQUAL)) {
            this.expression();
            this.emitBytes(setOp, arg);
        }
        else {
            this.emitBytes(getOp, arg);
        }
    }
    resolveLocal(name) {
        for (let i = this.localCount - 1; i >= 0; i--) {
            const local = this.locals[i];
            if (name.str == local.name.str) {
                if (local.depth == -1) {
                    throw Error('Cannot read local variable in its own initializer.');
                }
                return i;
            }
        }
        return -1;
    }
    /**
     *      EMITTING BYTECODE FUNCTIONS
     */
    patchJump(offset) {
        const jump = this.chunk.size - offset - 2;
        if (jump > 0xffff) {
            throw Error('Too much code to jump over.');
        }
        this.chunk.view[offset] = (jump >> 8) & 0xff;
        this.chunk.view[offset + 1] = jump & 0xff;
    }
    emitLoop(loopStart) {
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_LOOP);
        const offset = this.chunk.size - loopStart + 2;
        if (offset > 0xffff)
            throw Error('Loop body too large.');
        this.emitByte((offset >> 8) & 0xff);
        this.emitByte(offset & 0xff);
    }
    emitJump(opcode) {
        this.emitByte(opcode);
        this.emitByte(0xff);
        this.emitByte(0xff);
        return this.chunk.size - 2;
    }
    emitConstant(value) {
        this.emitBytes(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_CONSTANT, this.chunk.makeConstant(value));
    }
    emitReturn() {
        this.emitByte(_vm__WEBPACK_IMPORTED_MODULE_2__.Opcode.OP_RETURN);
    }
    emitBytes(byte1, byte2) {
        this.emitByte(byte1);
        this.emitByte(byte2);
    }
    emitByte(byte) {
        this.chunk.write(byte, this.previous.line);
    }
    /**
     *    COMPILER END FUNCTION
     */
    endCompiler() {
        this.emitReturn();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compiler);


/***/ }),

/***/ "./disassembler.ts":
/*!*************************!*\
  !*** ./disassembler.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Disassembler)
/* harmony export */ });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm */ "./vm.ts");

class Disassembler {
    chunk;
    constructor(chunk) {
        this.chunk = chunk;
    }
    disassemble(name) {
        console.log(`== ${name} ==`);
        for (let offset = 0; offset < this.chunk.size;) {
            offset = this.disassembleInstruction(offset);
        }
    }
    disassembleInstruction(offset) {
        const instruction = this.chunk.get(offset);
        switch (instruction) {
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_CONSTANT:
                return this.constantInstruction('OP_CONSTANT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_NEGATE:
                return this.simpleInstruction('OP_NEGATE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_RETURN:
                return this.simpleInstruction('OP_RETURN', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_ADD:
                return this.simpleInstruction('OP_ADD', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_SUBTRACT:
                return this.simpleInstruction('OP_SUBTRACT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_MULTIPLY:
                return this.simpleInstruction('OP_MULTIPLY', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_DIVIDE:
                return this.simpleInstruction('OP_DIVIDE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_NIL:
                return this.simpleInstruction('OP_NIL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_TRUE:
                return this.simpleInstruction('OP_TRUE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_FALSE:
                return this.simpleInstruction('OP_FALSE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_NOT:
                return this.simpleInstruction('OP_NOT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_EQUAL:
                return this.simpleInstruction('OP_EQUAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_GREATER:
                return this.simpleInstruction('OP_GREATER', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_LESS:
                return this.simpleInstruction('OP_LESS', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_PRINT:
                return this.simpleInstruction('OP_PRINT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_POP:
                return this.simpleInstruction('OP_POP', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_DEFINE_GLOBAL:
                return this.constantInstruction('OP_DEFINE_GLOBAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_GET_GLOBAL:
                return this.constantInstruction('OP_GET_GLOBAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_SET_GLOBAL:
                return this.constantInstruction('OP_SET_GLOBAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_GET_LOCAL:
                return this.byteInstruction('OP_GET_LOCAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_SET_LOCAL:
                return this.byteInstruction('OP_SET_LOCAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_JUMP_IF_FALSE:
                return this.jumpInstruction('OP_JUMP_IF_FALSE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_JUMP:
                return this.jumpInstruction('OP_JUMP', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_0__.Opcode.OP_LOOP:
                return this.jumpInstruction('OP_LOOP', offset);
            default:
                console.log(`Unknown opcode ${instruction}`);
                return offset + 1;
        }
    }
    jumpInstruction(name, offset) {
        const jump = this.chunk.get(offset + 1);
        const line = this.chunk.getLine(offset + 1);
        this.logWithOffset(offset, name + '\t' + jump + '\t\t(line ' + line + ')');
        return offset + 2;
    }
    byteInstruction(name, offset) {
        const slot = this.chunk.get(offset + 1);
        this.logWithOffset(offset, name + '\t' + slot);
        return offset + 2;
    }
    logWithOffset(offset, rest) {
        let log = offset.toString().padStart(4, '0');
        if (offset != 0 &&
            this.chunk.getLine(offset) === this.chunk.getLine(offset - 1)) {
            log += '\t|';
        }
        else {
            log += ` ${this.chunk.getLine(offset).toString().padStart(4, '0')}`;
        }
        log += ' ';
        log += rest;
        console.log(log);
    }
    constantInstruction(name, offset) {
        const loc = this.chunk.get(offset + 1);
        const constant = this.chunk.getConstant(loc);
        this.logWithOffset(offset, name + '\t' + loc + "'" + constant + "'");
        return offset + 2;
    }
    simpleInstruction(name, offset) {
        this.logWithOffset(offset, name);
        return offset + 1;
    }
}


/***/ }),

/***/ "./interpret.ts":
/*!**********************!*\
  !*** ./interpret.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm */ "./vm.ts");
/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ "./compiler.ts");


const interpret = (source) => {
    const compiler = new _compiler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let chunk;
    try {
        chunk = compiler.compile(source);
    }
    catch (e) {
        console.log(e);
        return { status: _vm__WEBPACK_IMPORTED_MODULE_0__.VMStatus.INTERPRET_COMPILE_ERROR, interruptCode: undefined };
    }
    const vm = new _vm__WEBPACK_IMPORTED_MODULE_0__["default"]({ debug: false });
    const res = vm.interpret(chunk);
    return res;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interpret);


/***/ }),

/***/ "./scanner.ts":
/*!********************!*\
  !*** ./scanner.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Token: () => (/* binding */ Token),
/* harmony export */   TokenType: () => (/* binding */ TokenType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TokenType;
(function (TokenType) {
    // Single-character tokens.
    TokenType[TokenType["TOKEN_LEFT_PAREN"] = 0] = "TOKEN_LEFT_PAREN";
    TokenType[TokenType["TOKEN_RIGHT_PAREN"] = 1] = "TOKEN_RIGHT_PAREN";
    TokenType[TokenType["TOKEN_LEFT_BRACE"] = 2] = "TOKEN_LEFT_BRACE";
    TokenType[TokenType["TOKEN_RIGHT_BRACE"] = 3] = "TOKEN_RIGHT_BRACE";
    TokenType[TokenType["TOKEN_COMMA"] = 4] = "TOKEN_COMMA";
    TokenType[TokenType["TOKEN_DOT"] = 5] = "TOKEN_DOT";
    TokenType[TokenType["TOKEN_MINUS"] = 6] = "TOKEN_MINUS";
    TokenType[TokenType["TOKEN_PLUS"] = 7] = "TOKEN_PLUS";
    TokenType[TokenType["TOKEN_SEMICOLON"] = 8] = "TOKEN_SEMICOLON";
    TokenType[TokenType["TOKEN_SLASH"] = 9] = "TOKEN_SLASH";
    TokenType[TokenType["TOKEN_STAR"] = 10] = "TOKEN_STAR";
    // One or two character tokens.
    TokenType[TokenType["TOKEN_BANG"] = 11] = "TOKEN_BANG";
    TokenType[TokenType["TOKEN_BANG_EQUAL"] = 12] = "TOKEN_BANG_EQUAL";
    TokenType[TokenType["TOKEN_EQUAL"] = 13] = "TOKEN_EQUAL";
    TokenType[TokenType["TOKEN_EQUAL_EQUAL"] = 14] = "TOKEN_EQUAL_EQUAL";
    TokenType[TokenType["TOKEN_GREATER"] = 15] = "TOKEN_GREATER";
    TokenType[TokenType["TOKEN_GREATER_EQUAL"] = 16] = "TOKEN_GREATER_EQUAL";
    TokenType[TokenType["TOKEN_LESS"] = 17] = "TOKEN_LESS";
    TokenType[TokenType["TOKEN_LESS_EQUAL"] = 18] = "TOKEN_LESS_EQUAL";
    // Literals.
    TokenType[TokenType["TOKEN_IDENTIFIER"] = 19] = "TOKEN_IDENTIFIER";
    TokenType[TokenType["TOKEN_STRING"] = 20] = "TOKEN_STRING";
    TokenType[TokenType["TOKEN_NUMBER"] = 21] = "TOKEN_NUMBER";
    // Keywords.
    TokenType[TokenType["TOKEN_AND"] = 22] = "TOKEN_AND";
    TokenType[TokenType["TOKEN_CLASS"] = 23] = "TOKEN_CLASS";
    TokenType[TokenType["TOKEN_ELSE"] = 24] = "TOKEN_ELSE";
    TokenType[TokenType["TOKEN_FALSE"] = 25] = "TOKEN_FALSE";
    TokenType[TokenType["TOKEN_FOR"] = 26] = "TOKEN_FOR";
    TokenType[TokenType["TOKEN_FUN"] = 27] = "TOKEN_FUN";
    TokenType[TokenType["TOKEN_IF"] = 28] = "TOKEN_IF";
    TokenType[TokenType["TOKEN_NIL"] = 29] = "TOKEN_NIL";
    TokenType[TokenType["TOKEN_OR"] = 30] = "TOKEN_OR";
    TokenType[TokenType["TOKEN_PRINT"] = 31] = "TOKEN_PRINT";
    TokenType[TokenType["TOKEN_RETURN"] = 32] = "TOKEN_RETURN";
    TokenType[TokenType["TOKEN_SUPER"] = 33] = "TOKEN_SUPER";
    TokenType[TokenType["TOKEN_THIS"] = 34] = "TOKEN_THIS";
    TokenType[TokenType["TOKEN_TRUE"] = 35] = "TOKEN_TRUE";
    TokenType[TokenType["TOKEN_VAR"] = 36] = "TOKEN_VAR";
    TokenType[TokenType["TOKEN_WHILE"] = 37] = "TOKEN_WHILE";
    TokenType[TokenType["TOKEN_SYSCALL"] = 38] = "TOKEN_SYSCALL";
    TokenType[TokenType["TOKEN_ERROR"] = 39] = "TOKEN_ERROR";
    TokenType[TokenType["TOKEN_EOF"] = 40] = "TOKEN_EOF";
})(TokenType || (TokenType = {}));
class Token {
    type;
    str;
    line;
    constructor(type, source, start, length, line) {
        this.type = type;
        this.str = source.substring(start, start + length);
        this.line = line;
    }
}
class Scanner {
    source;
    start;
    current;
    line;
    constructor(source) {
        this.source = source;
        this.line = 1;
        this.start = 0;
        this.current = 0;
    }
    scan() {
        const tokens = [];
        while (!this.atTheEnd()) {
            this.start = this.current;
            tokens.push(this.scanToken());
        }
        tokens.push(new Token(TokenType.TOKEN_EOF, this.source, this.current, 0, this.line));
        return tokens;
    }
    scanToken() {
        this.skipWhitespace();
        this.start = this.current;
        if (this.atTheEnd())
            return this.makeToken(TokenType.TOKEN_EOF);
        const c = this.advance();
        if (this.isDigit(c))
            return this.number();
        if (this.isAlpha(c))
            return this.identifier();
        switch (c) {
            case '(':
                return this.makeToken(TokenType.TOKEN_LEFT_PAREN);
            case ')':
                return this.makeToken(TokenType.TOKEN_RIGHT_PAREN);
            case '{':
                return this.makeToken(TokenType.TOKEN_LEFT_BRACE);
            case '}':
                return this.makeToken(TokenType.TOKEN_RIGHT_BRACE);
            case ';':
                return this.makeToken(TokenType.TOKEN_SEMICOLON);
            case ',':
                return this.makeToken(TokenType.TOKEN_COMMA);
            case '.':
                return this.makeToken(TokenType.TOKEN_DOT);
            case '-':
                return this.makeToken(TokenType.TOKEN_MINUS);
            case '+':
                return this.makeToken(TokenType.TOKEN_PLUS);
            case '/':
                return this.makeToken(TokenType.TOKEN_SLASH);
            case '*':
                return this.makeToken(TokenType.TOKEN_STAR);
            case '!':
                return this.makeToken(this.match('=')
                    ? TokenType.TOKEN_BANG_EQUAL
                    : TokenType.TOKEN_BANG);
            case '=':
                return this.makeToken(this.match('=')
                    ? TokenType.TOKEN_EQUAL_EQUAL
                    : TokenType.TOKEN_EQUAL);
            case '<':
                return this.makeToken(this.match('=')
                    ? TokenType.TOKEN_LESS_EQUAL
                    : TokenType.TOKEN_LESS);
            case '>':
                return this.makeToken(this.match('=')
                    ? TokenType.TOKEN_GREATER_EQUAL
                    : TokenType.TOKEN_GREATER);
            case '"':
                return this.string();
        }
        return this.errorToken('Unexpected character.');
    }
    number() {
        while (this.isDigit(this.peek()))
            this.advance();
        if (this.peek() == '.' && this.isDigit(this.peekNext())) {
            this.advance();
            while (this.isDigit(this.peek()))
                this.advance();
        }
        return this.makeToken(TokenType.TOKEN_NUMBER);
    }
    identifier() {
        while (this.isAlphaNumeric(this.peek()))
            this.advance();
        return this.makeToken(this.identifierType());
    }
    identifierType() {
        switch (this.source.charAt(this.start)) {
            case 'a':
                return this.checkKeyword(1, 2, 'nd', TokenType.TOKEN_AND);
            case 'c':
                return this.checkKeyword(1, 4, 'lass', TokenType.TOKEN_CLASS);
            case 'e':
                return this.checkKeyword(1, 3, 'lse', TokenType.TOKEN_ELSE);
            case 'f':
                if (this.current - this.start > 1) {
                    switch (this.source.charAt(this.start + 1)) {
                        case 'a':
                            return this.checkKeyword(2, 3, 'lse', TokenType.TOKEN_FALSE);
                        case 'o':
                            return this.checkKeyword(2, 1, 'r', TokenType.TOKEN_FOR);
                        case 'u':
                            return this.checkKeyword(2, 1, 'n', TokenType.TOKEN_FUN);
                    }
                }
                break;
            case 'i':
                return this.checkKeyword(1, 1, 'f', TokenType.TOKEN_IF);
            case 'n':
                return this.checkKeyword(1, 2, 'il', TokenType.TOKEN_NIL);
            case 'o':
                return this.checkKeyword(1, 1, 'r', TokenType.TOKEN_OR);
            case 'p':
                return this.checkKeyword(1, 4, 'rint', TokenType.TOKEN_PRINT);
            case 'r':
                return this.checkKeyword(1, 5, 'eturn', TokenType.TOKEN_RETURN);
            case 's':
                if (this.current - this.start > 1) {
                    switch (this.source.charAt(this.start + 1)) {
                        case 'u':
                            return this.checkKeyword(1, 4, 'uper', TokenType.TOKEN_SUPER);
                        case 'y':
                            return this.checkKeyword(1, 6, 'yscall', TokenType.TOKEN_SYSCALL);
                    }
                }
                break;
            case 't':
                if (this.current - this.start > 1) {
                    switch (this.source.charAt(this.start + 1)) {
                        case 'h':
                            return this.checkKeyword(2, 2, 'is', TokenType.TOKEN_THIS);
                        case 'r':
                            return this.checkKeyword(2, 2, 'ue', TokenType.TOKEN_TRUE);
                    }
                }
                break;
            case 'l':
                return this.checkKeyword(1, 2, 'et', TokenType.TOKEN_VAR);
            case 'w':
                return this.checkKeyword(1, 4, 'hile', TokenType.TOKEN_WHILE);
        }
        return TokenType.TOKEN_IDENTIFIER;
    }
    checkKeyword(start, length, rest, type) {
        if (this.current - this.start == start + length &&
            this.source.substr(this.start + start, length) == rest) {
            return type;
        }
        return TokenType.TOKEN_IDENTIFIER;
    }
    isAlpha(c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_';
    }
    isAlphaNumeric(c) {
        return this.isAlpha(c) || this.isDigit(c);
    }
    isDigit(c) {
        return c >= '0' && c <= '9';
    }
    string() {
        while (this.peek() != '"' && !this.atTheEnd()) {
            if (this.peek() == '\n')
                this.line++;
            this.advance();
        }
        if (this.atTheEnd())
            return this.errorToken('Unterminated string.');
        this.advance();
        return this.makeToken(TokenType.TOKEN_STRING);
    }
    skipWhitespace() {
        for (;;) {
            const c = this.peek();
            switch (c) {
                case ' ':
                case '\r':
                case '\t':
                    this.advance();
                    break;
                case '\n':
                    this.line++;
                    this.advance();
                    break;
                case '/':
                    if (this.peekNext() == '/') {
                        while (this.peek() != '\n' && !this.atTheEnd())
                            this.advance();
                    }
                    else {
                        return;
                    }
                    break;
                default:
                    return;
            }
        }
    }
    peekNext() {
        if (this.current + 1 >= this.source.length)
            return '\0';
        return this.source.charAt(this.current + 1);
    }
    peek() {
        return this.source.charAt(this.current);
    }
    match(expected) {
        if (this.atTheEnd())
            return false;
        if (this.source.charAt(this.current) != expected)
            return false;
        this.current++;
        return true;
    }
    advance() {
        this.current++;
        return this.source.charAt(this.current - 1);
    }
    atTheEnd() {
        return this.current >= this.source.length;
    }
    makeToken(type) {
        return new Token(type, this.source, this.start, this.current - this.start, this.line);
    }
    errorToken(message) {
        return new Token(TokenType.TOKEN_ERROR, this.source, 0, message.length, this.line);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scanner);


/***/ }),

/***/ "./value.ts":
/*!******************!*\
  !*** ./value.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Obj: () => (/* binding */ Obj),
/* harmony export */   StringObj: () => (/* binding */ StringObj),
/* harmony export */   ValueType: () => (/* binding */ ValueType),
/* harmony export */   "default": () => (/* binding */ Value)
/* harmony export */ });
var ValueType;
(function (ValueType) {
    ValueType[ValueType["VAL_BOOL"] = 0] = "VAL_BOOL";
    ValueType[ValueType["VAL_NIL"] = 1] = "VAL_NIL";
    ValueType[ValueType["VAL_NUMBER"] = 2] = "VAL_NUMBER";
    ValueType[ValueType["VAL_OBJ"] = 3] = "VAL_OBJ";
})(ValueType || (ValueType = {}));
class Obj {
}
class StringObj extends Obj {
    value;
    constructor(chars) {
        super();
        this.value = chars;
    }
    toString() {
        return this.value.substring(1, this.value.length - 1);
    }
}
class Value {
    type;
    value;
    obj;
    constructor(type, value = 0, obj = null) {
        this.type = type;
        this.value = value;
        this.obj = obj;
    }
    /**
     *      STATIC CONSTRUCTORS
     */
    static number(value) {
        return new Value(ValueType.VAL_NUMBER, value);
    }
    static bool(value) {
        return new Value(ValueType.VAL_BOOL, value ? 1 : 0);
    }
    static nil() {
        return new Value(ValueType.VAL_NIL, 0);
    }
    static obj(obj) {
        return new Value(ValueType.VAL_OBJ, 0, obj);
    }
    /**
     *     UTILITY METHODS : COMPARISON, TYPE CHECKING, ETC.
     */
    is(valueType) {
        return this.type === valueType;
    }
    toString() {
        switch (this.type) {
            case ValueType.VAL_BOOL:
                return this.value === 1 ? 'true' : 'false';
            case ValueType.VAL_NIL:
                return 'nil';
            case ValueType.VAL_NUMBER:
                return this.value + '';
            case ValueType.VAL_OBJ:
                return this.obj.toString();
        }
    }
    equalsTo(other) {
        if (this.type !== other.type)
            return false;
        return this.value === other.value;
    }
}


/***/ }),

/***/ "./vm.ts":
/*!***************!*\
  !*** ./vm.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Opcode: () => (/* binding */ Opcode),
/* harmony export */   VMStatus: () => (/* binding */ VMStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _disassembler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disassembler */ "./disassembler.ts");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value */ "./value.ts");


var Opcode;
(function (Opcode) {
    Opcode[Opcode["OP_CONSTANT"] = 0] = "OP_CONSTANT";
    Opcode[Opcode["OP_NIL"] = 1] = "OP_NIL";
    Opcode[Opcode["OP_TRUE"] = 2] = "OP_TRUE";
    Opcode[Opcode["OP_FALSE"] = 3] = "OP_FALSE";
    Opcode[Opcode["OP_ADD"] = 4] = "OP_ADD";
    Opcode[Opcode["OP_SUBTRACT"] = 5] = "OP_SUBTRACT";
    Opcode[Opcode["OP_MULTIPLY"] = 6] = "OP_MULTIPLY";
    Opcode[Opcode["OP_DIVIDE"] = 7] = "OP_DIVIDE";
    Opcode[Opcode["OP_NEGATE"] = 8] = "OP_NEGATE";
    Opcode[Opcode["OP_RETURN"] = 9] = "OP_RETURN";
    Opcode[Opcode["OP_NOT"] = 10] = "OP_NOT";
    Opcode[Opcode["OP_EQUAL"] = 11] = "OP_EQUAL";
    Opcode[Opcode["OP_GREATER"] = 12] = "OP_GREATER";
    Opcode[Opcode["OP_LESS"] = 13] = "OP_LESS";
    Opcode[Opcode["OP_PRINT"] = 14] = "OP_PRINT";
    Opcode[Opcode["OP_POP"] = 15] = "OP_POP";
    Opcode[Opcode["OP_DEFINE_GLOBAL"] = 16] = "OP_DEFINE_GLOBAL";
    Opcode[Opcode["OP_GET_GLOBAL"] = 17] = "OP_GET_GLOBAL";
    Opcode[Opcode["OP_SET_GLOBAL"] = 18] = "OP_SET_GLOBAL";
    Opcode[Opcode["OP_GET_LOCAL"] = 19] = "OP_GET_LOCAL";
    Opcode[Opcode["OP_SET_LOCAL"] = 20] = "OP_SET_LOCAL";
    Opcode[Opcode["OP_JUMP_IF_FALSE"] = 21] = "OP_JUMP_IF_FALSE";
    Opcode[Opcode["OP_JUMP"] = 22] = "OP_JUMP";
    Opcode[Opcode["OP_LOOP"] = 23] = "OP_LOOP";
    Opcode[Opcode["OP_INTERRUPT"] = 24] = "OP_INTERRUPT";
})(Opcode || (Opcode = {}));
var VMStatus;
(function (VMStatus) {
    VMStatus[VMStatus["INTERPRET_OK"] = 0] = "INTERPRET_OK";
    VMStatus[VMStatus["INTERPRET_COMPILE_ERROR"] = 1] = "INTERPRET_COMPILE_ERROR";
    VMStatus[VMStatus["INTERPRET_RUNTIME_ERROR"] = 2] = "INTERPRET_RUNTIME_ERROR";
    VMStatus[VMStatus["INTERPRET_INTERRUPT"] = 3] = "INTERPRET_INTERRUPT";
})(VMStatus || (VMStatus = {}));
class VM {
    chunk;
    ip = 0;
    debug;
    dissambler;
    stack = [];
    globals = [];
    constructor({ debug = false }) {
        this.debug = debug;
    }
    interpret(chunk) {
        this.chunk = chunk;
        this.ip = 0;
        this.dissambler = new _disassembler__WEBPACK_IMPORTED_MODULE_0__["default"](chunk);
        return this.run();
    }
    readByte() {
        const byte = this.chunk.get(this.ip);
        this.ip++;
        return byte;
    }
    run() {
        for (;;) {
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
                    return { status: VMStatus.INTERPRET_OK, interruptCode: undefined };
                case Opcode.OP_NEGATE:
                    if (!this.peek().is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_NUMBER))
                        throw new Error('Operand must be a number.');
                    this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].number(-this.pop().value));
                    break;
                case Opcode.OP_ADD: {
                    const b = this.pop();
                    const a = this.pop();
                    if (a.is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_NUMBER) &&
                        b.is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_NUMBER)) {
                        this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].number(a.value + b.value));
                    }
                    else if (a.is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_OBJ) &&
                        b.is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_OBJ)) {
                        this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].obj(new _value__WEBPACK_IMPORTED_MODULE_1__.StringObj(a.toString() + b.toString())));
                    }
                    else {
                        throw new Error('Operands must be two numbers or two strings.');
                    }
                    break;
                }
                case Opcode.OP_SUBTRACT:
                case Opcode.OP_MULTIPLY:
                case Opcode.OP_DIVIDE:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_CONSTANT: {
                    const constant = this.readByte();
                    this.stack.push(this.chunk.getConstant(constant));
                    break;
                }
                case Opcode.OP_NIL:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].nil());
                    break;
                case Opcode.OP_TRUE:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].bool(true));
                    break;
                case Opcode.OP_FALSE:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].bool(false));
                    break;
                case Opcode.OP_NOT:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].bool(this.isFalsey(this.pop())));
                    break;
                case Opcode.OP_EQUAL: {
                    const b = this.pop();
                    const a = this.pop();
                    this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].bool(a.equalsTo(b)));
                    break;
                }
                case Opcode.OP_GREATER:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_LESS:
                    this.binaryOp(instruction);
                    break;
                case Opcode.OP_PRINT: {
                    const a = this.pop();
                    console.log(a.toString());
                    break;
                }
                case Opcode.OP_POP:
                    this.pop();
                    break;
                case Opcode.OP_DEFINE_GLOBAL: {
                    const name = this.chunk.getConstant(this.readByte()).obj.value;
                    this.globals[name] = this.pop();
                    break;
                }
                case Opcode.OP_GET_GLOBAL: {
                    const name = this.chunk.getConstant(this.readByte()).obj.value;
                    const value = this.globals[name];
                    if (!value) {
                        throw new Error(`Undefined variable '${name}'.`);
                    }
                    this.push(value);
                    break;
                }
                case Opcode.OP_SET_GLOBAL: {
                    const name = this.chunk.getConstant(this.readByte()).obj.value;
                    if (!this.globals[name]) {
                        throw new Error(`Undefined variable '${name}'.`);
                    }
                    this.globals[name] = this.peek();
                    break;
                }
                case Opcode.OP_GET_LOCAL: {
                    const slot = this.readByte();
                    this.push(this.stack[slot]);
                    break;
                }
                case Opcode.OP_SET_LOCAL: {
                    const slot = this.readByte();
                    this.stack[slot] = this.peek();
                    break;
                }
                case Opcode.OP_JUMP_IF_FALSE: {
                    const offset = this.readShort();
                    if (this.isFalsey(this.peek())) {
                        this.ip += offset;
                    }
                    break;
                }
                case Opcode.OP_JUMP: {
                    const offset = this.readShort();
                    this.ip += offset;
                    break;
                }
                case Opcode.OP_LOOP: {
                    const offset = this.readShort();
                    this.ip -= offset;
                    break;
                }
                case Opcode.OP_INTERRUPT: {
                    const interruptCode = this.pop();
                    return {
                        status: VMStatus.INTERPRET_INTERRUPT,
                        interruptCode: interruptCode.obj.toString() + "",
                    };
                }
            }
        }
    }
    readShort() {
        const byte1 = this.readByte();
        const byte2 = this.readByte();
        return (byte1 << 8) | byte2;
    }
    isFalsey(value) {
        return (value.is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_NIL) ||
            (value.is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_BOOL) && !value.value));
    }
    binaryOp(op) {
        if (!this.peek().is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_NUMBER))
            throw new Error('Operand must be a number.');
        const b = this.pop();
        if (!this.peek().is(_value__WEBPACK_IMPORTED_MODULE_1__.ValueType.VAL_NUMBER))
            throw new Error('Operand must be a number.');
        const a = this.pop();
        switch (op) {
            case Opcode.OP_ADD:
                this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].number(a.value + b.value));
                break;
            case Opcode.OP_SUBTRACT:
                this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].number(a.value - b.value));
                break;
            case Opcode.OP_MULTIPLY:
                this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].number(a.value * b.value));
                break;
            case Opcode.OP_DIVIDE:
                this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].number(a.value / b.value));
                break;
            case Opcode.OP_GREATER:
                this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].bool(a.value > b.value));
                break;
            case Opcode.OP_LESS:
                this.push(_value__WEBPACK_IMPORTED_MODULE_1__["default"].bool(a.value < b.value));
                break;
        }
    }
    /**
     *      STACK OPERATIONS
     */
    push(value) {
        this.stack.push(value);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VM);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./webport.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interpret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpret */ "./interpret.ts");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm */ "./vm.ts");


const runFromQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const _ = `
        if(true)
            syscall "is.workflow.actions.pausemusic";
    `;
    console.log(encodeURIComponent(_));
    const source = params.get('source');
    if (!source) {
        console.log('No source code found in query params.');
        return;
    }
    const { status, interruptCode } = (0,_interpret__WEBPACK_IMPORTED_MODULE_0__["default"])(source);
    if (status === _vm__WEBPACK_IMPORTED_MODULE_1__.VMStatus.INTERPRET_INTERRUPT) {
        console.log(`Interrupted with code ${interruptCode}`);
        document.write(JSON.stringify({ status, interruptCode }));
    }
};
runFromQueryParams();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdDLEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdDLEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNkLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCO29CQUM1QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdkIsQ0FBQztZQUNILEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNkLENBQUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCO29CQUM3QixDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDeEIsQ0FBQztZQUNILEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNkLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCO29CQUM1QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdkIsQ0FBQztZQUNILEtBQUssR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ3BCLElBQUksQ0FB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QUU7SUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsR0FBRzs7O0tBR1Q7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELE9BQU87S0FDVjtJQUVELE1BQU0sRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLEdBQUcsc0RBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRCxJQUFHLE1BQU0sS0FBSyx5Q0FBUSxDQUFDLG1CQUFtQixFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFFdEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQztLQUMzRDtBQUNMLENBQUM7QUFFRCxrQkFBa0IsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2h1bmsudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL2ludGVycHJldC50cyIsIndlYnBhY2s6Ly8vLi9zY2FubmVyLnRzIiwid2VicGFjazovLy8uL3ZhbHVlLnRzIiwid2VicGFjazovLy8uL3ZtLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3dlYnBvcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZhbHVlIGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgY2xhc3MgQ2h1bmsge1xuXHRwdWJsaWMgdmlldzogVWludDhBcnJheTtcblx0cHJpdmF0ZSBidWZmZXI6IEFycmF5QnVmZmVyO1xuXHRwcml2YXRlIGNvdW50OiBudW1iZXI7XG5cdHByaXZhdGUgY2FwYWNpdHk6IG51bWJlcjtcblx0cHJpdmF0ZSBjb25zdGFudHM6IFZhbHVlQXJyYXk7XG5cblx0Ly8gUmVsYXRlZCB3aXRoIHNvdXJjZSBjb2RlIG9mIGhpZ2hlciBsZXZlbCBsYW5ndWFnZVxuXHRwcml2YXRlIGxpbmVCdWZmZXI6IEFycmF5QnVmZmVyO1xuXHRwcml2YXRlIGxpbmVWaWV3OiBVaW50OEFycmF5O1xuXG5cdGNvbnN0cnVjdG9yKGNhcGFjaXR5ID0gMTYpIHtcblx0XHR0aGlzLmNvdW50ID0gMDtcblx0XHR0aGlzLmNhcGFjaXR5ID0gY2FwYWNpdHk7XG5cblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihjYXBhY2l0eSAqIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuXHRcdHRoaXMudmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcblx0XHR0aGlzLmNvbnN0YW50cyA9IG5ldyBWYWx1ZUFycmF5KCk7XG5cblx0XHR0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoXG5cdFx0XHRjYXBhY2l0eSAqIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXG5cdFx0KTtcblx0XHR0aGlzLmxpbmVWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5saW5lQnVmZmVyKTtcblx0fVxuXG5cdHdyaXRlKGJ5dGU6IG51bWJlciwgbGluZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY291bnQgPj0gdGhpcy5jYXBhY2l0eSkge1xuXHRcdFx0dGhpcy5jYXBhY2l0eSAqPSAyO1xuXHRcdFx0Y29uc3QgbmV3QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKFxuXHRcdFx0XHR0aGlzLmNhcGFjaXR5ICogVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBuZXdWaWV3ID0gbmV3IFVpbnQ4QXJyYXkobmV3QnVmZmVyKTtcblx0XHRcdG5ld1ZpZXcuc2V0KHRoaXMudmlldyk7XG5cdFx0XHR0aGlzLmJ1ZmZlciA9IG5ld0J1ZmZlcjtcblx0XHRcdHRoaXMudmlldyA9IG5ld1ZpZXc7XG5cblx0XHRcdGNvbnN0IG5ld0xpbmVCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoXG5cdFx0XHRcdHRoaXMuY2FwYWNpdHkgKiBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IG5ld0xpbmVWaWV3ID0gbmV3IFVpbnQ4QXJyYXkobmV3TGluZUJ1ZmZlcik7XG5cdFx0XHRuZXdMaW5lVmlldy5zZXQodGhpcy5saW5lVmlldyk7XG5cdFx0XHR0aGlzLmxpbmVCdWZmZXIgPSBuZXdMaW5lQnVmZmVyO1xuXHRcdFx0dGhpcy5saW5lVmlldyA9IG5ld0xpbmVWaWV3O1xuXHRcdH1cblxuXHRcdHRoaXMudmlld1t0aGlzLmNvdW50XSA9IGJ5dGU7XG5cdFx0dGhpcy5saW5lVmlld1t0aGlzLmNvdW50XSA9IGxpbmU7XG5cblx0XHR0aGlzLmNvdW50Kys7XG5cdH1cblxuXHRyZWFkKCk6IFVpbnQ4QXJyYXkge1xuXHRcdGNvbnN0IHNsaWNlID0gdGhpcy5idWZmZXIuc2xpY2UoXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5jb3VudCAqIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXG5cdFx0KTtcblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc2xpY2UpO1xuXHR9XG5cblx0Z2V0IHNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb3VudDtcblx0fVxuXG5cdGdldChpbmRleCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmlld1tpbmRleF07XG5cdH1cblxuXHRnZXRMaW5lKGluZGV4KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5saW5lVmlld1tpbmRleF07XG5cdH1cblxuXHRtYWtlQ29uc3RhbnQodmFsdWU6IFZhbHVlKTogbnVtYmVyIHtcblx0XHRjb25zdCBjb25zdGFudCA9IHRoaXMuYWRkQ29uc3RhbnQodmFsdWUpO1xuXHRcdGlmIChjb25zdGFudCA+IDI1NSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUb28gbWFueSBjb25zdGFudHMgaW4gb25lIGNodW5rLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb25zdGFudDtcblx0fVxuXG5cdGFkZENvbnN0YW50KHZhbHVlOiBWYWx1ZSk6IG51bWJlciB7XG5cdFx0dGhpcy5jb25zdGFudHMud3JpdGUodmFsdWUpO1xuXHRcdHJldHVybiB0aGlzLmNvbnN0YW50cy5zaXplIC0gMTtcblx0fVxuXG5cdGdldENvbnN0YW50KGluZGV4OiBudW1iZXIpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RhbnRzLmdldChpbmRleCk7XG5cdH1cbn1cblxuY2xhc3MgVmFsdWVBcnJheSB7XG5cdHByaXZhdGUgYXJyOiBWYWx1ZVtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYXJyID0gW107XG5cdH1cblxuXHR3cml0ZSh2YWx1ZTogVmFsdWUpOiB2b2lkIHtcblx0XHR0aGlzLmFyci5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdGdldChpbmRleDogbnVtYmVyKTogVmFsdWUge1xuXHRcdHJldHVybiB0aGlzLmFycltpbmRleF07XG5cdH1cblxuXHRnZXQgc2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFyci5sZW5ndGg7XG5cdH1cbn1cbiIsImltcG9ydCBTY2FubmVyLCB7IFRva2VuVHlwZSwgVG9rZW4gfSBmcm9tICcuL3NjYW5uZXInO1xuaW1wb3J0IHsgQ2h1bmsgfSBmcm9tICcuL2NodW5rJztcbmltcG9ydCB7IE9wY29kZSB9IGZyb20gJy4vdm0nO1xuaW1wb3J0IFZhbHVlLCB7IFN0cmluZ09iaiB9IGZyb20gJy4vdmFsdWUnO1xuXG5pbnRlcmZhY2UgTG9jYWwge1xuXHRuYW1lOiBUb2tlbjtcblx0ZGVwdGg6IG51bWJlcjtcbn1cblxuZW51bSBQcmVjZWRlbmNlIHtcblx0UFJFQ19OT05FLFxuXHRQUkVDX0FTU0lHTk1FTlQsIC8vID1cblx0UFJFQ19PUiwgLy8gb3Jcblx0UFJFQ19BTkQsIC8vIGFuZFxuXHRQUkVDX0VRVUFMSVRZLCAvLyA9PSAhPVxuXHRQUkVDX0NPTVBBUklTT04sIC8vIDwgPiA8PSA+PVxuXHRQUkVDX1RFUk0sIC8vICsgLVxuXHRQUkVDX0ZBQ1RPUiwgLy8gKiAvXG5cdFBSRUNfVU5BUlksIC8vICEgLVxuXHRQUkVDX0NBTEwsIC8vIC4gKClcblx0UFJFQ19QUklNQVJZLFxufVxuXG5pbnRlcmZhY2UgUGFyc2VSdWxlIHtcblx0cHJlZml4OiBzdHJpbmc7XG5cdGluZml4OiBzdHJpbmc7XG5cdHByZWNlZGVuY2U6IFByZWNlZGVuY2U7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIG5vLWNvbnRyb2wtcmVnZXgqL1xuY29uc3QgUGFyc2VSdWxlcyA9IHtcblx0W1Rva2VuVHlwZS5UT0tFTl9MRUZUX1BBUkVOXToge1xuXHRcdHByZWZpeDogJ2dyb3VwaW5nJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTEVGVF9CUkFDRV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1JJR0hUX0JSQUNFXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQ09NTUFdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9ET1RdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9NSU5VU106IHtcblx0XHRwcmVmaXg6ICd1bmFyeScsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19URVJNLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1BMVVNdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19URVJNLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1NFTUlDT0xPTl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1NMQVNIXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfRkFDVE9SLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1NUQVJdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19GQUNUT1IsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQkFOR106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0JBTkdfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VRVUFMX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fR1JFQVRFUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0dSRUFURVJfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9MRVNTXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTEVTU19FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0lERU5USUZJRVJdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9TVFJJTkddOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9OVU1CRVJdOiB7XG5cdFx0cHJlZml4OiAnbnVtYmVyJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0FORF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0NMQVNTXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRUxTRV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0ZBTFNFXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRk9SXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRlVOXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fSUZdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9OSUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9PUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1BSSU5UXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fUkVUVVJOXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fU1VQRVJdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9USElTXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fVFJVRV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1ZBUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1dISUxFXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRVJST1JdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FT0ZdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9GQUxTRV06IHtcblx0XHRwcmVmaXg6ICdsaXRlcmFsJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1RSVUVdOiB7XG5cdFx0cHJlZml4OiAnbGl0ZXJhbCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9OSUxdOiB7XG5cdFx0cHJlZml4OiAnbGl0ZXJhbCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9CQU5HXToge1xuXHRcdHByZWZpeDogJ3VuYXJ5Jyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0JBTkdfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19FUVVBTElUWSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VRVUFMX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfRVFVQUxJVFksXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fR1JFQVRFUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0NPTVBBUklTT04sXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fR1JFQVRFUl9FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0NPTVBBUklTT04sXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTEVTU106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0NPTVBBUklTT04sXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTEVTU19FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0NPTVBBUklTT04sXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fU1RSSU5HXToge1xuXHRcdHByZWZpeDogJ3N0cmluZycsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9JREVOVElGSUVSXToge1xuXHRcdHByZWZpeDogJ3ZhcmlhYmxlJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxufTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxuY2xhc3MgQ29tcGlsZXIge1xuXHRwcml2YXRlIHByZXZpb3VzOiBUb2tlbjtcblx0cHJpdmF0ZSBjdXJyZW50OiBUb2tlbjtcblx0cHJpdmF0ZSBzY2FubmVyOiBTY2FubmVyO1xuXG5cdHByaXZhdGUgY2h1bms6IENodW5rO1xuXHRwcml2YXRlIGxvY2FsczogTG9jYWxbXTtcblx0cHJpdmF0ZSBsb2NhbENvdW50OiBudW1iZXI7XG5cdHByaXZhdGUgc2NvcGVEZXB0aDogbnVtYmVyO1xuXG5cdGNvbXBpbGUoc291cmNlOiBzdHJpbmcpOiBDaHVuayB7XG5cdFx0dGhpcy5zY2FubmVyID0gbmV3IFNjYW5uZXIoc291cmNlKTtcblxuXHRcdHRoaXMuY2h1bmsgPSBuZXcgQ2h1bmsoKTtcblx0XHR0aGlzLmxvY2FscyA9IFtdO1xuXG5cdFx0dGhpcy5hZHZhbmNlKCk7XG5cblx0XHR3aGlsZSAoIXRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX0VPRikpIHtcblx0XHRcdHRoaXMuZGVjbGFyYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX0VPRiwgJ0V4cGVjdCBlbmQgb2YgZXhwcmVzc2lvbi4nKTtcblxuXHRcdHRoaXMuZW5kQ29tcGlsZXIoKTtcblxuXHRcdHJldHVybiB0aGlzLmNodW5rO1xuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgREVDTEFSQVRJT05TLCBTVEFURU1FTlRTLCBCTE9DS1MsIEVYUFJFU1NJT05TXG5cdCAqL1xuXG5cdHByaXZhdGUgZGVjbGFyYXRpb24oKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1ZBUikpIHtcblx0XHRcdHRoaXMudmFyRGVjbGFyYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZW1lbnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fUFJJTlQpKSB7XG5cdFx0XHR0aGlzLnByaW50U3RhdGVtZW50KCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9JRikpIHtcblx0XHRcdHRoaXMuaWZTdGF0ZW1lbnQoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1dISUxFKSkge1xuXHRcdFx0dGhpcy53aGlsZVN0YXRlbWVudCgpO1xuXHRcdH0gZWxzZSBpZih0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9TWVNDQUxMKSl7XG5cdFx0XHRjb25zb2xlLmxvZyhcImxvbFwiKVxuXHRcdFx0dGhpcy5zeXNjYWxsU3RhdGVtZW50KCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9GT1IpKSB7XG5cdFx0XHR0aGlzLmZvclN0YXRlbWVudCgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fTEVGVF9CUkFDRSkpIHtcblx0XHRcdHRoaXMuYmVnaW5TY29wZSgpO1xuXHRcdFx0dGhpcy5ibG9jaygpO1xuXHRcdFx0dGhpcy5lbmRTY29wZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN5c2NhbGxTdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sIFwiRXhwZWN0ICc7JyBhZnRlciBzeXNjYWxsLlwiKTtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9JTlRFUlJVUFQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpZlN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX0xFRlRfUEFSRU4sIFwiRXhwZWN0ICcoJyBhZnRlciAnaWYnLlwiKTtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4sXG5cdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgY29uZGl0aW9uLlwiLFxuXHRcdCk7XG5cblx0XHRjb25zdCB0aGVuSnVtcDogbnVtYmVyID0gdGhpcy5lbWl0SnVtcChPcGNvZGUuT1BfSlVNUF9JRl9GQUxTRSk7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXG5cdFx0Y29uc3QgZWxzZUp1bXA6IG51bWJlciA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVApO1xuXG5cdFx0dGhpcy5wYXRjaEp1bXAodGhlbkp1bXApO1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRUxTRSkpIHRoaXMuc3RhdGVtZW50KCk7XG5cdFx0dGhpcy5wYXRjaEp1bXAoZWxzZUp1bXApO1xuXHR9XG5cblx0cHJpdmF0ZSB2YXJEZWNsYXJhdGlvbigpOiB2b2lkIHtcblx0XHRjb25zdCBnbG9iYWw6IG51bWJlciA9IHRoaXMucGFyc2VWYXJpYWJsZSgnRXhwZWN0IHZhcmlhYmxlIG5hbWUuJyk7XG5cblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRVFVQUwpKSB7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTklMKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OLFxuXHRcdFx0XCJFeHBlY3QgJzsnIGFmdGVyIHZhcmlhYmxlIGRlY2xhcmF0aW9uLlwiLFxuXHRcdCk7XG5cdFx0dGhpcy5kZWZpbmVWYXJpYWJsZShnbG9iYWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBwcmludFN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX1NFTUlDT0xPTiwgXCJFeHBlY3QgJzsnIGFmdGVyIHZhbHVlLlwiKTtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QUklOVCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sIFwiRXhwZWN0ICc7JyBhZnRlciB2YWx1ZS5cIik7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0fVxuXG5cdHByaXZhdGUgZm9yU3RhdGVtZW50KCk6IHZvaWQge1xuXHRcdHRoaXMuYmVnaW5TY29wZSgpO1xuXG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9MRUZUX1BBUkVOLCBcIkV4cGVjdCAnKCcgYWZ0ZXIgJ2ZvcicuXCIpO1xuXHRcdGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04pKSB7XG5cdFx0XHQvLyBObyBpbml0aWFsaXplci5cblx0XHR9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1ZBUikpIHtcblx0XHRcdHRoaXMudmFyRGVjbGFyYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XG5cdFx0fVxuXG5cdFx0bGV0IGxvb3BTdGFydCA9IHRoaXMuY2h1bmsuc2l6ZTtcblxuXHRcdGxldCBleGl0SnVtcCA9IC0xO1xuXHRcdGlmICghdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OKSkge1xuXHRcdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sXG5cdFx0XHRcdFwiRXhwZWN0ICc7JyBhZnRlciBsb29wIGNvbmRpdGlvbi5cIixcblx0XHRcdCk7XG5cblx0XHRcdC8vIEp1bXAgb3V0IG9mIHRoZSBsb29wIGlmIHRoZSBjb25kaXRpb24gaXMgZmFsc2UuXG5cdFx0XHRleGl0SnVtcCA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVBfSUZfRkFMU0UpO1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTsgLy8gQ29uZGl0aW9uLlxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4pKSB7XG5cdFx0XHRjb25zdCBib2R5SnVtcCA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVApO1xuXG5cdFx0XHRjb25zdCBpbmNyZW1lbnRTdGFydCA9IHRoaXMuY2h1bmsuc2l6ZTtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0XHRcdHRoaXMuY29uc3VtZShcblx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOLFxuXHRcdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgZm9yIGNsYXVzZXMuXCIsXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmVtaXRMb29wKGxvb3BTdGFydCk7XG5cdFx0XHRsb29wU3RhcnQgPSBpbmNyZW1lbnRTdGFydDtcblx0XHRcdHRoaXMucGF0Y2hKdW1wKGJvZHlKdW1wKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXG5cdFx0dGhpcy5lbWl0TG9vcChsb29wU3RhcnQpO1xuXG5cdFx0aWYgKGV4aXRKdW1wICE9IC0xKSB7XG5cdFx0XHR0aGlzLnBhdGNoSnVtcChleGl0SnVtcCk7XG5cdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QT1ApOyAvLyBDb25kaXRpb24uXG5cdFx0fVxuXG5cdFx0dGhpcy5lbmRTY29wZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHRjb25zdCBsb29wU3RhcnQ6IG51bWJlciA9IHRoaXMuY2h1bmsuc2l6ZTtcblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fTEVGVF9QQVJFTiwgXCJFeHBlY3QgJygnIGFmdGVyICd3aGlsZScuXCIpO1xuXHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdHRoaXMuY29uc3VtZShcblx0XHRcdFRva2VuVHlwZS5UT0tFTl9SSUdIVF9QQVJFTixcblx0XHRcdFwiRXhwZWN0ICcpJyBhZnRlciBjb25kaXRpb24uXCIsXG5cdFx0KTtcblxuXHRcdGNvbnN0IGV4aXRKdW1wOiBudW1iZXIgPSB0aGlzLmVtaXRKdW1wKE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFKTtcblxuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cblx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXG5cdFx0dGhpcy5lbWl0TG9vcChsb29wU3RhcnQpO1xuXG5cdFx0dGhpcy5wYXRjaEp1bXAoZXhpdEp1bXApO1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cHJlc3Npb24oKTogdm9pZCB7XG5cdFx0dGhpcy5wcmVjZWRlbmNlKFByZWNlZGVuY2UuUFJFQ19BU1NJR05NRU5UKTtcblx0fVxuXG5cdHByaXZhdGUgcHJlY2VkZW5jZShwcmVjZWRlbmNlOiBQcmVjZWRlbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5hZHZhbmNlKCk7XG5cblx0XHRjb25zdCBwcmVmaXhSdWxlID0gUGFyc2VSdWxlc1t0aGlzLnByZXZpb3VzLnR5cGVdLnByZWZpeDtcblx0XHRpZiAocHJlZml4UnVsZSA9PSAnTlVMTCcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRXhwZWN0IGV4cHJlc3Npb24uJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FuQXNzaWduID0gcHJlY2VkZW5jZSA8PSBQcmVjZWRlbmNlLlBSRUNfQVNTSUdOTUVOVDtcblx0XHR0aGlzW3ByZWZpeFJ1bGVdKGNhbkFzc2lnbik7XG5cblx0XHR3aGlsZSAocHJlY2VkZW5jZSA8PSBQYXJzZVJ1bGVzW3RoaXMuY3VycmVudC50eXBlXS5wcmVjZWRlbmNlKSB7XG5cdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdGNvbnN0IGluZml4UnVsZSA9IFBhcnNlUnVsZXNbdGhpcy5wcmV2aW91cy50eXBlXS5pbmZpeDtcblx0XHRcdHRoaXNbaW5maXhSdWxlXShjYW5Bc3NpZ24pO1xuXHRcdH1cblxuXHRcdGlmIChjYW5Bc3NpZ24gJiYgdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRVFVQUwpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXNzaWdubWVudCB0YXJnZXQuJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB2YXJpYWJsZShjYW5Bc3NpZ246IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm5hbWVkVmFyaWFibGUodGhpcy5wcmV2aW91cywgY2FuQXNzaWduKTtcblx0fVxuXG5cdHByaXZhdGUgc3RyaW5nKCk6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLnByZXZpb3VzLnN0cjtcblx0XHR0aGlzLmVtaXRDb25zdGFudChWYWx1ZS5vYmoobmV3IFN0cmluZ09iaih2YWx1ZSkpKTtcblx0fVxuXG5cdHByaXZhdGUgbGl0ZXJhbCgpOiB2b2lkIHtcblx0XHRzd2l0Y2ggKHRoaXMucHJldmlvdXMudHlwZSkge1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fRkFMU0U6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0ZBTFNFKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9OSUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX05JTCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fVFJVRTpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfVFJVRSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbnVtYmVyKCk6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlID0gTnVtYmVyKHRoaXMucHJldmlvdXMuc3RyKTtcblxuXHRcdHRoaXMuZW1pdENvbnN0YW50KFZhbHVlLm51bWJlcih2YWx1ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBncm91cGluZygpOiB2b2lkIHtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4sXG5cdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgZXhwcmVzc2lvbi5cIixcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSB1bmFyeSgpOiB2b2lkIHtcblx0XHRjb25zdCBvcGVyYXRvclR5cGU6IFRva2VuVHlwZSA9IHRoaXMucHJldmlvdXMudHlwZTtcblxuXHRcdHRoaXMucHJlY2VkZW5jZShQcmVjZWRlbmNlLlBSRUNfVU5BUlkpO1xuXG5cdFx0c3dpdGNoIChvcGVyYXRvclR5cGUpIHtcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX01JTlVTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9ORUdBVEUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX0JBTkc6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYmluYXJ5KCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wZXJhdG9yVHlwZTogVG9rZW5UeXBlID0gdGhpcy5wcmV2aW91cy50eXBlO1xuXG5cdFx0Y29uc3QgcnVsZTogUGFyc2VSdWxlID0gUGFyc2VSdWxlc1tvcGVyYXRvclR5cGVdO1xuXHRcdHRoaXMucHJlY2VkZW5jZShydWxlLnByZWNlZGVuY2UgKyAxKTtcblxuXHRcdHN3aXRjaCAob3BlcmF0b3JUeXBlKSB7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9QTFVTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9BREQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX01JTlVTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9TVUJUUkFDVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fU1RBUjpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTVVMVElQTFkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX1NMQVNIOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9ESVZJREUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX0JBTkdfRVFVQUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGVzKE9wY29kZS5PUF9FUVVBTCwgT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fRVFVQUxfRVFVQUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0VRVUFMKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9HUkVBVEVSOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9HUkVBVEVSKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9HUkVBVEVSX0VRVUFMOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlcyhPcGNvZGUuT1BfTEVTUywgT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fTEVTUzpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTEVTUyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fTEVTU19FUVVBTDpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZXMoT3Bjb2RlLk9QX0dSRUFURVIsIE9wY29kZS5PUF9OT1QpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYmxvY2soKTogdm9pZCB7XG5cdFx0d2hpbGUgKFxuXHRcdFx0dGhpcy5jdXJyZW50LnR5cGUgIT0gVG9rZW5UeXBlLlRPS0VOX1JJR0hUX0JSQUNFICYmXG5cdFx0XHQhdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRU9GKVxuXHRcdCkge1xuXHRcdFx0dGhpcy5kZWNsYXJhdGlvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fUklHSFRfQlJBQ0UsIFwiRXhwZWN0ICd9JyBhZnRlciBibG9jay5cIik7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBIRUxQRVIgRlVOQ1RJT05TIEZPUiBQQVJTSU5HICYgQ09NUElMSU5HXG5cdCAqICAgICAgOjp0b2RvOjogbW92ZSB0byBzZXBhcmF0ZSBmaWxlIG9yIGNsYXNzXG5cdCAqL1xuXG5cdGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jdXJyZW50LnR5cGUgPT0gdHlwZSkge1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5lcnJvckF0Q3VycmVudChtZXNzYWdlKTtcblx0fVxuXG5cdHByaXZhdGUgbWF0Y2godHlwZTogVG9rZW5UeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEodGhpcy5jdXJyZW50LnR5cGUgPT0gdHlwZSkpIHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0YWR2YW5jZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuXHRcdFxuXHRcdGZvciAoOzspIHtcblx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMuc2Nhbm5lci5zY2FuVG9rZW4oKTtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnQudHlwZSAhPSBUb2tlblR5cGUuVE9LRU5fRVJST1IpIGJyZWFrO1xuXG5cdFx0XHR0aGlzLmVycm9yQXRDdXJyZW50KCdJbnZhbGlkIHRva2VuLicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgIEVSUk9SIEhBTkRMSU5HXG5cdCAqL1xuXG5cdHByaXZhdGUgZXJyb3JBdEN1cnJlbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5lcnJvckF0KHRoaXMuY3VycmVudCwgbWVzc2FnZSk7XG5cdH1cblxuXHRwcml2YXRlIGVycm9yQXQodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aHJvdyBFcnJvcihcblx0XHRcdGBbbGluZSAke3Rva2VuLmxpbmV9XSBFcnJvciR7dG9rZW4udHlwZX0gYXQgJHt0b2tlbi5zdHJ9OiAke21lc3NhZ2V9YCxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgVkFSSUFCTEVTICYgTE9DQUxTXG5cdCAqL1xuXG5cdHByaXZhdGUgYmVnaW5TY29wZSgpOiB2b2lkIHtcblx0XHR0aGlzLnNjb3BlRGVwdGgrKztcblx0fVxuXG5cdHByaXZhdGUgZW5kU2NvcGUoKTogdm9pZCB7XG5cdFx0dGhpcy5zY29wZURlcHRoLS07XG5cblx0XHR3aGlsZSAoXG5cdFx0XHR0aGlzLmxvY2FsQ291bnQgPiAwICYmXG5cdFx0XHR0aGlzLmxvY2Fsc1t0aGlzLmxvY2FsQ291bnQgLSAxXS5kZXB0aCA+IHRoaXMuc2NvcGVEZXB0aFxuXHRcdCkge1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0XHRcdHRoaXMubG9jYWxDb3VudC0tO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVmaW5lVmFyaWFibGUoZ2xvYmFsOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRCeXRlcyhPcGNvZGUuT1BfREVGSU5FX0dMT0JBTCwgZ2xvYmFsKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VWYXJpYWJsZShlcnJvck1lc3NhZ2U6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9JREVOVElGSUVSLCBlcnJvck1lc3NhZ2UpO1xuXG5cdFx0dGhpcy5kZWNsYXJlVmFyaWFibGUoKTtcblx0XHRpZiAodGhpcy5zY29wZURlcHRoID4gMCkge1xuXHRcdFx0dGhpcy5tYXJrSW5pdGlhbGl6ZWQoKTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmlkZW50aWZpZXJDb25zdGFudCh0aGlzLnByZXZpb3VzKTtcblx0fVxuXG5cdHByaXZhdGUgbWFya0luaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMubG9jYWxzW3RoaXMubG9jYWxDb3VudCAtIDFdLmRlcHRoID0gdGhpcy5zY29wZURlcHRoO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWNsYXJlVmFyaWFibGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2NvcGVEZXB0aCA9PSAwKSByZXR1cm47XG5cblx0XHRjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMucHJldmlvdXM7XG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMubG9jYWxzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBsb2NhbDogTG9jYWwgPSB0aGlzLmxvY2Fsc1tpXTtcblx0XHRcdGlmIChsb2NhbC5kZXB0aCAhPSAtMSAmJiBsb2NhbC5kZXB0aCA8IHRoaXMuc2NvcGVEZXB0aCkgYnJlYWs7XG5cblx0XHRcdGlmIChuYW1lLnN0ciA9PSBsb2NhbC5uYW1lLnN0cikge1xuXHRcdFx0XHR0aHJvdyBFcnJvcignQWxyZWFkeSB2YXJpYWJsZSB3aXRoIHRoaXMgbmFtZSBpbiB0aGlzIHNjb3BlLicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMubG9jYWxzLnB1c2goeyBuYW1lLCBkZXB0aDogLTEgfSk7XG5cdH1cblxuXHRwcml2YXRlIGlkZW50aWZpZXJDb25zdGFudCh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNodW5rLm1ha2VDb25zdGFudChWYWx1ZS5vYmoobmV3IFN0cmluZ09iaih0b2tlbi5zdHIpKSk7XG5cdH1cblxuXHRwcml2YXRlIG5hbWVkVmFyaWFibGUobmFtZTogVG9rZW4sIGNhbkFzc2lnbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdGxldCBnZXRPcDogT3Bjb2RlLCBzZXRPcDogT3Bjb2RlO1xuXHRcdGxldCBhcmc6IG51bWJlciA9IHRoaXMucmVzb2x2ZUxvY2FsKG5hbWUpO1xuXG5cdFx0aWYgKGFyZyAhPSAtMSkge1xuXHRcdFx0Z2V0T3AgPSBPcGNvZGUuT1BfR0VUX0xPQ0FMO1xuXHRcdFx0c2V0T3AgPSBPcGNvZGUuT1BfU0VUX0xPQ0FMO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmcgPSB0aGlzLmlkZW50aWZpZXJDb25zdGFudChuYW1lKTtcblx0XHRcdGdldE9wID0gT3Bjb2RlLk9QX0dFVF9HTE9CQUw7XG5cdFx0XHRzZXRPcCA9IE9wY29kZS5PUF9TRVRfR0xPQkFMO1xuXHRcdH1cblxuXHRcdGlmIChjYW5Bc3NpZ24gJiYgdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRVFVQUwpKSB7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHRcdHRoaXMuZW1pdEJ5dGVzKHNldE9wLCBhcmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVtaXRCeXRlcyhnZXRPcCwgYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVMb2NhbChuYW1lOiBUb2tlbik6IG51bWJlciB7XG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMubG9jYWxDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBsb2NhbDogTG9jYWwgPSB0aGlzLmxvY2Fsc1tpXTtcblx0XHRcdGlmIChuYW1lLnN0ciA9PSBsb2NhbC5uYW1lLnN0cikge1xuXHRcdFx0XHRpZiAobG9jYWwuZGVwdGggPT0gLTEpIHtcblx0XHRcdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0XHRcdCdDYW5ub3QgcmVhZCBsb2NhbCB2YXJpYWJsZSBpbiBpdHMgb3duIGluaXRpYWxpemVyLicsXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBFTUlUVElORyBCWVRFQ09ERSBGVU5DVElPTlNcblx0ICovXG5cblx0cHJpdmF0ZSBwYXRjaEp1bXAob2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCBqdW1wOiBudW1iZXIgPSB0aGlzLmNodW5rLnNpemUgLSBvZmZzZXQgLSAyO1xuXG5cdFx0aWYgKGp1bXAgPiAweGZmZmYpIHtcblx0XHRcdHRocm93IEVycm9yKCdUb28gbXVjaCBjb2RlIHRvIGp1bXAgb3Zlci4nKTtcblx0XHR9XG5cblx0XHR0aGlzLmNodW5rLnZpZXdbb2Zmc2V0XSA9IChqdW1wID4+IDgpICYgMHhmZjtcblx0XHR0aGlzLmNodW5rLnZpZXdbb2Zmc2V0ICsgMV0gPSBqdW1wICYgMHhmZjtcblx0fVxuXG5cdHByaXZhdGUgZW1pdExvb3AobG9vcFN0YXJ0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9MT09QKTtcblxuXHRcdGNvbnN0IG9mZnNldDogbnVtYmVyID0gdGhpcy5jaHVuay5zaXplIC0gbG9vcFN0YXJ0ICsgMjtcblx0XHRpZiAob2Zmc2V0ID4gMHhmZmZmKSB0aHJvdyBFcnJvcignTG9vcCBib2R5IHRvbyBsYXJnZS4nKTtcblxuXHRcdHRoaXMuZW1pdEJ5dGUoKG9mZnNldCA+PiA4KSAmIDB4ZmYpO1xuXHRcdHRoaXMuZW1pdEJ5dGUob2Zmc2V0ICYgMHhmZik7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRKdW1wKG9wY29kZTogT3Bjb2RlKTogbnVtYmVyIHtcblx0XHR0aGlzLmVtaXRCeXRlKG9wY29kZSk7XG5cdFx0dGhpcy5lbWl0Qnl0ZSgweGZmKTtcblx0XHR0aGlzLmVtaXRCeXRlKDB4ZmYpO1xuXHRcdHJldHVybiB0aGlzLmNodW5rLnNpemUgLSAyO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0Q29uc3RhbnQodmFsdWU6IFZhbHVlKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0Qnl0ZXMoT3Bjb2RlLk9QX0NPTlNUQU5ULCB0aGlzLmNodW5rLm1ha2VDb25zdGFudCh2YWx1ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0UmV0dXJuKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1JFVFVSTik7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRCeXRlcyhieXRlMTogbnVtYmVyLCBieXRlMjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0Qnl0ZShieXRlMSk7XG5cdFx0dGhpcy5lbWl0Qnl0ZShieXRlMik7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRCeXRlKGJ5dGU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY2h1bmsud3JpdGUoYnl0ZSwgdGhpcy5wcmV2aW91cy5saW5lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgICBDT01QSUxFUiBFTkQgRlVOQ1RJT05cblx0ICovXG5cblx0cHJpdmF0ZSBlbmRDb21waWxlcigpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRSZXR1cm4oKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21waWxlcjtcbiIsImltcG9ydCB7IENodW5rIH0gZnJvbSAnLi9jaHVuayc7XG5pbXBvcnQgeyBPcGNvZGUgfSBmcm9tICcuL3ZtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYXNzZW1ibGVyIHtcblx0cHJpdmF0ZSBjaHVuazogQ2h1bms7XG5cblx0Y29uc3RydWN0b3IoY2h1bms6IENodW5rKSB7XG5cdFx0dGhpcy5jaHVuayA9IGNodW5rO1xuXHR9XG5cblx0ZGlzYXNzZW1ibGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coYD09ICR7bmFtZX0gPT1gKTtcblx0XHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCB0aGlzLmNodW5rLnNpemU7ICkge1xuXHRcdFx0b2Zmc2V0ID0gdGhpcy5kaXNhc3NlbWJsZUluc3RydWN0aW9uKG9mZnNldCk7XG5cdFx0fVxuXHR9XG5cblx0ZGlzYXNzZW1ibGVJbnN0cnVjdGlvbihvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG5cdFx0Y29uc3QgaW5zdHJ1Y3Rpb24gPSB0aGlzLmNodW5rLmdldChvZmZzZXQpO1xuXHRcdHN3aXRjaCAoaW5zdHJ1Y3Rpb24pIHtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0NPTlNUQU5UOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdGFudEluc3RydWN0aW9uKCdPUF9DT05TVEFOVCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9ORUdBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9ORUdBVEUnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfUkVUVVJOOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfUkVUVVJOJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0FERDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0FERCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9TVUJUUkFDVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX1NVQlRSQUNUJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX01VTFRJUExZOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfTVVMVElQTFknLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfRElWSURFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfRElWSURFJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX05JTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX05JTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9UUlVFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfVFJVRScsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9GQUxTRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0ZBTFNFJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX05PVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX05PVCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9FUVVBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0VRVUFMJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dSRUFURVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9HUkVBVEVSJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xFU1M6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9MRVNTJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX1BSSU5UOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfUFJJTlQnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfUE9QOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfUE9QJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0RFRklORV9HTE9CQUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0YW50SW5zdHJ1Y3Rpb24oJ09QX0RFRklORV9HTE9CQUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfR0VUX0dMT0JBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RhbnRJbnN0cnVjdGlvbignT1BfR0VUX0dMT0JBTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9TRVRfR0xPQkFMOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdGFudEluc3RydWN0aW9uKCdPUF9TRVRfR0xPQkFMJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dFVF9MT0NBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYnl0ZUluc3RydWN0aW9uKCdPUF9HRVRfTE9DQUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfU0VUX0xPQ0FMOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ieXRlSW5zdHJ1Y3Rpb24oJ09QX1NFVF9MT0NBTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5qdW1wSW5zdHJ1Y3Rpb24oJ09QX0pVTVBfSUZfRkFMU0UnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfSlVNUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuanVtcEluc3RydWN0aW9uKCdPUF9KVU1QJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xPT1A6XG5cdFx0XHRcdHJldHVybiB0aGlzLmp1bXBJbnN0cnVjdGlvbignT1BfTE9PUCcsIG9mZnNldCk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmxvZyhgVW5rbm93biBvcGNvZGUgJHtpbnN0cnVjdGlvbn1gKTtcblx0XHRcdFx0cmV0dXJuIG9mZnNldCArIDE7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBqdW1wSW5zdHJ1Y3Rpb24obmFtZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG5cdFx0Y29uc3QganVtcCA9IHRoaXMuY2h1bmsuZ2V0KG9mZnNldCArIDEpO1xuXHRcdGNvbnN0IGxpbmUgPSB0aGlzLmNodW5rLmdldExpbmUob2Zmc2V0ICsgMSk7XG5cdFx0dGhpcy5sb2dXaXRoT2Zmc2V0KFxuXHRcdFx0b2Zmc2V0LFxuXHRcdFx0bmFtZSArICdcXHQnICsganVtcCArICdcXHRcXHQobGluZSAnICsgbGluZSArICcpJyxcblx0XHQpO1xuXHRcdHJldHVybiBvZmZzZXQgKyAyO1xuXHR9XG5cblx0cHJpdmF0ZSBieXRlSW5zdHJ1Y3Rpb24obmFtZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuY2h1bmsuZ2V0KG9mZnNldCArIDEpO1xuXHRcdHRoaXMubG9nV2l0aE9mZnNldChvZmZzZXQsIG5hbWUgKyAnXFx0JyArIHNsb3QpO1xuXHRcdHJldHVybiBvZmZzZXQgKyAyO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2dXaXRoT2Zmc2V0KG9mZnNldCwgcmVzdCk6IHZvaWQge1xuXHRcdGxldCBsb2cgPSBvZmZzZXQudG9TdHJpbmcoKS5wYWRTdGFydCg0LCAnMCcpO1xuXG5cdFx0aWYgKFxuXHRcdFx0b2Zmc2V0ICE9IDAgJiZcblx0XHRcdHRoaXMuY2h1bmsuZ2V0TGluZShvZmZzZXQpID09PSB0aGlzLmNodW5rLmdldExpbmUob2Zmc2V0IC0gMSlcblx0XHQpIHtcblx0XHRcdGxvZyArPSAnXFx0fCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZyArPSBgICR7dGhpcy5jaHVuay5nZXRMaW5lKG9mZnNldCkudG9TdHJpbmcoKS5wYWRTdGFydCg0LCAnMCcpfWA7XG5cdFx0fVxuXHRcdGxvZyArPSAnICc7XG5cdFx0bG9nICs9IHJlc3Q7XG5cdFx0Y29uc29sZS5sb2cobG9nKTtcblx0fVxuXG5cdHByaXZhdGUgY29uc3RhbnRJbnN0cnVjdGlvbihuYW1lOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRjb25zdCBsb2MgPSB0aGlzLmNodW5rLmdldChvZmZzZXQgKyAxKTtcblx0XHRjb25zdCBjb25zdGFudCA9IHRoaXMuY2h1bmsuZ2V0Q29uc3RhbnQobG9jKTtcblxuXHRcdHRoaXMubG9nV2l0aE9mZnNldChvZmZzZXQsIG5hbWUgKyAnXFx0JyArIGxvYyArIFwiJ1wiICsgY29uc3RhbnQgKyBcIidcIik7XG5cblx0XHRyZXR1cm4gb2Zmc2V0ICsgMjtcblx0fVxuXG5cdHByaXZhdGUgc2ltcGxlSW5zdHJ1Y3Rpb24obmFtZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG5cdFx0dGhpcy5sb2dXaXRoT2Zmc2V0KG9mZnNldCwgbmFtZSk7XG5cblx0XHRyZXR1cm4gb2Zmc2V0ICsgMTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2h1bmsgfSBmcm9tICcuL2NodW5rJztcbmltcG9ydCBWTSwgeyBJbnRlcnByZXRSZXN1bHQsIFZNU3RhdHVzIH0gZnJvbSAnLi92bSc7XG5pbXBvcnQgQ29tcGlsZXIgZnJvbSAnLi9jb21waWxlcic7XG5cbmNvbnN0IGludGVycHJldCA9IChzb3VyY2U6IHN0cmluZyk6IEludGVycHJldFJlc3VsdCA9PiB7XG5cdGNvbnN0IGNvbXBpbGVyID0gbmV3IENvbXBpbGVyKCk7XG5cblx0bGV0IGNodW5rOiBDaHVuaztcblx0dHJ5IHtcblx0XHRjaHVuayA9IGNvbXBpbGVyLmNvbXBpbGUoc291cmNlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB7c3RhdHVzIDogVk1TdGF0dXMuSU5URVJQUkVUX0NPTVBJTEVfRVJST1IsIGludGVycnVwdENvZGU6IHVuZGVmaW5lZH07XG5cdH1cblxuXHRjb25zdCB2bSA9IG5ldyBWTSh7IGRlYnVnOiBmYWxzZSB9KTtcblx0Y29uc3QgcmVzID0gdm0uaW50ZXJwcmV0KGNodW5rKTtcblxuXHRyZXR1cm4gcmVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJwcmV0OyIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG5cdC8vIFNpbmdsZS1jaGFyYWN0ZXIgdG9rZW5zLlxuXHRUT0tFTl9MRUZUX1BBUkVOLFxuXHRUT0tFTl9SSUdIVF9QQVJFTixcblx0VE9LRU5fTEVGVF9CUkFDRSxcblx0VE9LRU5fUklHSFRfQlJBQ0UsXG5cdFRPS0VOX0NPTU1BLFxuXHRUT0tFTl9ET1QsXG5cdFRPS0VOX01JTlVTLFxuXHRUT0tFTl9QTFVTLFxuXHRUT0tFTl9TRU1JQ09MT04sXG5cdFRPS0VOX1NMQVNILFxuXHRUT0tFTl9TVEFSLFxuXHQvLyBPbmUgb3IgdHdvIGNoYXJhY3RlciB0b2tlbnMuXG5cdFRPS0VOX0JBTkcsXG5cdFRPS0VOX0JBTkdfRVFVQUwsXG5cdFRPS0VOX0VRVUFMLFxuXHRUT0tFTl9FUVVBTF9FUVVBTCxcblx0VE9LRU5fR1JFQVRFUixcblx0VE9LRU5fR1JFQVRFUl9FUVVBTCxcblx0VE9LRU5fTEVTUyxcblx0VE9LRU5fTEVTU19FUVVBTCxcblx0Ly8gTGl0ZXJhbHMuXG5cdFRPS0VOX0lERU5USUZJRVIsXG5cdFRPS0VOX1NUUklORyxcblx0VE9LRU5fTlVNQkVSLFxuXHQvLyBLZXl3b3Jkcy5cblx0VE9LRU5fQU5ELFxuXHRUT0tFTl9DTEFTUyxcblx0VE9LRU5fRUxTRSxcblx0VE9LRU5fRkFMU0UsXG5cdFRPS0VOX0ZPUixcblx0VE9LRU5fRlVOLFxuXHRUT0tFTl9JRixcblx0VE9LRU5fTklMLFxuXHRUT0tFTl9PUixcblx0VE9LRU5fUFJJTlQsXG5cdFRPS0VOX1JFVFVSTixcblx0VE9LRU5fU1VQRVIsXG5cdFRPS0VOX1RISVMsXG5cdFRPS0VOX1RSVUUsXG5cdFRPS0VOX1ZBUixcblx0VE9LRU5fV0hJTEUsXG5cdFRPS0VOX1NZU0NBTEwsXG5cdFRPS0VOX0VSUk9SLFxuXHRUT0tFTl9FT0YsXG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG5cdHB1YmxpYyByZWFkb25seSB0eXBlOiBUb2tlblR5cGU7XG5cdHB1YmxpYyByZWFkb25seSBzdHI6IHN0cmluZztcblx0cHVibGljIHJlYWRvbmx5IGxpbmU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlLCBzb3VyY2UsIHN0YXJ0LCBsZW5ndGgsIGxpbmUpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuc3RyID0gc291cmNlLnN1YnN0cmluZyhzdGFydCwgc3RhcnQgKyBsZW5ndGgpO1xuXHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdH1cbn1cblxuY2xhc3MgU2Nhbm5lciB7XG5cdHByaXZhdGUgc291cmNlOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBzdGFydDogbnVtYmVyO1xuXHRwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcblxuXHRwcml2YXRlIGxpbmU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMubGluZSA9IDE7XG5cblx0XHR0aGlzLnN0YXJ0ID0gMDtcblx0XHR0aGlzLmN1cnJlbnQgPSAwO1xuXHR9XG5cblx0c2NhbigpOiBUb2tlbltdIHtcblx0XHRjb25zdCB0b2tlbnMgPSBbXTtcblx0XHR3aGlsZSAoIXRoaXMuYXRUaGVFbmQoKSkge1xuXHRcdFx0dGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcblx0XHRcdHRva2Vucy5wdXNoKHRoaXMuc2NhblRva2VuKCkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0bmV3IFRva2VuKFxuXHRcdFx0XHRUb2tlblR5cGUuVE9LRU5fRU9GLFxuXHRcdFx0XHR0aGlzLnNvdXJjZSxcblx0XHRcdFx0dGhpcy5jdXJyZW50LFxuXHRcdFx0XHQwLFxuXHRcdFx0XHR0aGlzLmxpbmUsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0cmV0dXJuIHRva2Vucztcblx0fVxuXG5cdHNjYW5Ub2tlbigpOiBUb2tlbiB7XG5cdFx0dGhpcy5za2lwV2hpdGVzcGFjZSgpO1xuXHRcdHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG5cblx0XHRpZiAodGhpcy5hdFRoZUVuZCgpKSByZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0VPRik7XG5cblx0XHRjb25zdCBjID0gdGhpcy5hZHZhbmNlKCk7XG5cdFx0aWYgKHRoaXMuaXNEaWdpdChjKSkgcmV0dXJuIHRoaXMubnVtYmVyKCk7XG5cdFx0aWYgKHRoaXMuaXNBbHBoYShjKSkgcmV0dXJuIHRoaXMuaWRlbnRpZmllcigpO1xuXG5cdFx0c3dpdGNoIChjKSB7XG5cdFx0XHRjYXNlICcoJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9MRUZUX1BBUkVOKTtcblx0XHRcdGNhc2UgJyknOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOKTtcblx0XHRcdGNhc2UgJ3snOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0xFRlRfQlJBQ0UpO1xuXHRcdFx0Y2FzZSAnfSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fUklHSFRfQlJBQ0UpO1xuXHRcdFx0Y2FzZSAnOyc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OKTtcblx0XHRcdGNhc2UgJywnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0NPTU1BKTtcblx0XHRcdGNhc2UgJy4nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0RPVCk7XG5cdFx0XHRjYXNlICctJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9NSU5VUyk7XG5cdFx0XHRjYXNlICcrJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9QTFVTKTtcblx0XHRcdGNhc2UgJy8nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1NMQVNIKTtcblx0XHRcdGNhc2UgJyonOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1NUQVIpO1xuXHRcdFx0Y2FzZSAnISc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihcblx0XHRcdFx0XHR0aGlzLm1hdGNoKCc9Jylcblx0XHRcdFx0XHRcdD8gVG9rZW5UeXBlLlRPS0VOX0JBTkdfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0JBTkcsXG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICc9Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFxuXHRcdFx0XHRcdHRoaXMubWF0Y2goJz0nKVxuXHRcdFx0XHRcdFx0PyBUb2tlblR5cGUuVE9LRU5fRVFVQUxfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0VRVUFMLFxuXHRcdFx0XHQpO1xuXHRcdFx0Y2FzZSAnPCc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihcblx0XHRcdFx0XHR0aGlzLm1hdGNoKCc9Jylcblx0XHRcdFx0XHRcdD8gVG9rZW5UeXBlLlRPS0VOX0xFU1NfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0xFU1MsXG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICc+Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFxuXHRcdFx0XHRcdHRoaXMubWF0Y2goJz0nKVxuXHRcdFx0XHRcdFx0PyBUb2tlblR5cGUuVE9LRU5fR1JFQVRFUl9FUVVBTFxuXHRcdFx0XHRcdFx0OiBUb2tlblR5cGUuVE9LRU5fR1JFQVRFUixcblx0XHRcdFx0KTtcblx0XHRcdGNhc2UgJ1wiJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JUb2tlbignVW5leHBlY3RlZCBjaGFyYWN0ZXIuJyk7XG5cdH1cblxuXHRwcml2YXRlIG51bWJlcigpOiBUb2tlbiB7XG5cdFx0d2hpbGUgKHRoaXMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHRoaXMuYWR2YW5jZSgpO1xuXG5cdFx0aWYgKHRoaXMucGVlaygpID09ICcuJyAmJiB0aGlzLmlzRGlnaXQodGhpcy5wZWVrTmV4dCgpKSkge1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cblx0XHRcdHdoaWxlICh0aGlzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB0aGlzLmFkdmFuY2UoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX05VTUJFUik7XG5cdH1cblxuXHRwcml2YXRlIGlkZW50aWZpZXIoKTogVG9rZW4ge1xuXHRcdHdoaWxlICh0aGlzLmlzQWxwaGFOdW1lcmljKHRoaXMucGVlaygpKSkgdGhpcy5hZHZhbmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4odGhpcy5pZGVudGlmaWVyVHlwZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgaWRlbnRpZmllclR5cGUoKTogVG9rZW5UeXBlIHtcblx0XHRzd2l0Y2ggKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLnN0YXJ0KSkge1xuXHRcdFx0Y2FzZSAnYSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAyLCAnbmQnLCBUb2tlblR5cGUuVE9LRU5fQU5EKTtcblx0XHRcdGNhc2UgJ2MnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNCwgJ2xhc3MnLCBUb2tlblR5cGUuVE9LRU5fQ0xBU1MpO1xuXHRcdFx0Y2FzZSAnZSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAzLCAnbHNlJywgVG9rZW5UeXBlLlRPS0VOX0VMU0UpO1xuXHRcdFx0Y2FzZSAnZic6XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ID4gMSkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuc3RhcnQgKyAxKSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnYSc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDMsXG5cdFx0XHRcdFx0XHRcdFx0J2xzZScsXG5cdFx0XHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX0ZBTFNFLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnbyc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDEsXG5cdFx0XHRcdFx0XHRcdFx0J3InLFxuXHRcdFx0XHRcdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9GT1IsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjYXNlICd1Jzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKFxuXHRcdFx0XHRcdFx0XHRcdDIsXG5cdFx0XHRcdFx0XHRcdFx0MSxcblx0XHRcdFx0XHRcdFx0XHQnbicsXG5cdFx0XHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX0ZVTixcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDEsICdmJywgVG9rZW5UeXBlLlRPS0VOX0lGKTtcblx0XHRcdGNhc2UgJ24nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgMiwgJ2lsJywgVG9rZW5UeXBlLlRPS0VOX05JTCk7XG5cdFx0XHRjYXNlICdvJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDEsICdyJywgVG9rZW5UeXBlLlRPS0VOX09SKTtcblx0XHRcdGNhc2UgJ3AnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNCwgJ3JpbnQnLCBUb2tlblR5cGUuVE9LRU5fUFJJTlQpO1xuXHRcdFx0Y2FzZSAncic6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCA1LCAnZXR1cm4nLCBUb2tlblR5cGUuVE9LRU5fUkVUVVJOKTtcblx0XHRcdGNhc2UgJ3MnOlxuXHRcdFx0XHRpZih0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ID4gMSkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuc3RhcnQgKyAxKSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAndSc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCA0LCAndXBlcicsIFRva2VuVHlwZS5UT0tFTl9TVVBFUik7XG5cdFx0XHRcdFx0XHRjYXNlICd5Jzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDYsICd5c2NhbGwnLCBUb2tlblR5cGUuVE9LRU5fU1lTQ0FMTCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndCc6XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ID4gMSkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuc3RhcnQgKyAxKSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnaCc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDIsXG5cdFx0XHRcdFx0XHRcdFx0J2lzJyxcblx0XHRcdFx0XHRcdFx0XHRUb2tlblR5cGUuVE9LRU5fVEhJUyxcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNhc2UgJ3InOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoXG5cdFx0XHRcdFx0XHRcdFx0Mixcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdCd1ZScsXG5cdFx0XHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX1RSVUUsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbCc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAyLCAnZXQnLCBUb2tlblR5cGUuVE9LRU5fVkFSKTtcblx0XHRcdGNhc2UgJ3cnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNCwgJ2hpbGUnLCBUb2tlblR5cGUuVE9LRU5fV0hJTEUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBUb2tlblR5cGUuVE9LRU5fSURFTlRJRklFUjtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tLZXl3b3JkKFxuXHRcdHN0YXJ0OiBudW1iZXIsXG5cdFx0bGVuZ3RoOiBudW1iZXIsXG5cdFx0cmVzdDogc3RyaW5nLFxuXHRcdHR5cGU6IFRva2VuVHlwZSxcblx0KTogVG9rZW5UeXBlIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ID09IHN0YXJ0ICsgbGVuZ3RoICYmXG5cdFx0XHR0aGlzLnNvdXJjZS5zdWJzdHIodGhpcy5zdGFydCArIHN0YXJ0LCBsZW5ndGgpID09IHJlc3Rcblx0XHQpIHtcblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBUb2tlblR5cGUuVE9LRU5fSURFTlRJRklFUjtcblx0fVxuXG5cdHByaXZhdGUgaXNBbHBoYShjOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKGMgPj0gJ2EnICYmIGMgPD0gJ3onKSB8fCAoYyA+PSAnQScgJiYgYyA8PSAnWicpIHx8IGMgPT0gJ18nO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0FscGhhTnVtZXJpYyhjOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FscGhhKGMpIHx8IHRoaXMuaXNEaWdpdChjKTtcblx0fVxuXG5cdHByaXZhdGUgaXNEaWdpdChjOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYyA+PSAnMCcgJiYgYyA8PSAnOSc7XG5cdH1cblxuXHRwcml2YXRlIHN0cmluZygpOiBUb2tlbiB7XG5cdFx0d2hpbGUgKHRoaXMucGVlaygpICE9ICdcIicgJiYgIXRoaXMuYXRUaGVFbmQoKSkge1xuXHRcdFx0aWYgKHRoaXMucGVlaygpID09ICdcXG4nKSB0aGlzLmxpbmUrKztcblx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmF0VGhlRW5kKCkpIHJldHVybiB0aGlzLmVycm9yVG9rZW4oJ1VudGVybWluYXRlZCBzdHJpbmcuJyk7XG5cblx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1NUUklORyk7XG5cdH1cblxuXHRwcml2YXRlIHNraXBXaGl0ZXNwYWNlKCk6IHZvaWQge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnBlZWsoKTtcblx0XHRcdHN3aXRjaCAoYykge1xuXHRcdFx0XHRjYXNlICcgJzpcblx0XHRcdFx0Y2FzZSAnXFxyJzpcblx0XHRcdFx0Y2FzZSAnXFx0Jzpcblx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnXFxuJzpcblx0XHRcdFx0XHR0aGlzLmxpbmUrKztcblx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnLyc6XG5cdFx0XHRcdFx0aWYgKHRoaXMucGVla05leHQoKSA9PSAnLycpIHtcblx0XHRcdFx0XHRcdHdoaWxlICh0aGlzLnBlZWsoKSAhPSAnXFxuJyAmJiAhdGhpcy5hdFRoZUVuZCgpKVxuXHRcdFx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwZWVrTmV4dCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkgcmV0dXJuICdcXDAnO1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XG5cdH1cblxuXHRwcml2YXRlIHBlZWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XG5cdH1cblxuXHRwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5hdFRoZUVuZCgpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9IGV4cGVjdGVkKSByZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLmN1cnJlbnQrKztcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGFkdmFuY2UoKTogc3RyaW5nIHtcblx0XHR0aGlzLmN1cnJlbnQrKztcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCAtIDEpO1xuXHR9XG5cblx0cHJpdmF0ZSBhdFRoZUVuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcblx0fVxuXG5cdHByaXZhdGUgbWFrZVRva2VuKHR5cGU6IFRva2VuVHlwZSk6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFxuXHRcdFx0dHlwZSxcblx0XHRcdHRoaXMuc291cmNlLFxuXHRcdFx0dGhpcy5zdGFydCxcblx0XHRcdHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnQsXG5cdFx0XHR0aGlzLmxpbmUsXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZXJyb3JUb2tlbihtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihcblx0XHRcdFRva2VuVHlwZS5UT0tFTl9FUlJPUixcblx0XHRcdHRoaXMuc291cmNlLFxuXHRcdFx0MCxcblx0XHRcdG1lc3NhZ2UubGVuZ3RoLFxuXHRcdFx0dGhpcy5saW5lLFxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nhbm5lcjtcbiIsImV4cG9ydCBlbnVtIFZhbHVlVHlwZSB7XG5cdFZBTF9CT09MLFxuXHRWQUxfTklMLFxuXHRWQUxfTlVNQkVSLFxuXHRWQUxfT0JKLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT2JqIHtcblx0YWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nT2JqIGV4dGVuZHMgT2JqIHtcblx0cHVibGljIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2hhcnM6IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy52YWx1ZSA9IGNoYXJzO1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDEsIHRoaXMudmFsdWUubGVuZ3RoIC0gMSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsdWUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZTogVmFsdWVUeXBlO1xuXHRwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG9iajogT2JqO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFZhbHVlVHlwZSwgdmFsdWUgPSAwLCBvYmogPSBudWxsKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5vYmogPSBvYmo7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBTVEFUSUMgQ09OU1RSVUNUT1JTXG5cdCAqL1xuXG5cdHN0YXRpYyBudW1iZXIodmFsdWU6IG51bWJlcik6IFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKFZhbHVlVHlwZS5WQUxfTlVNQkVSLCB2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgYm9vbCh2YWx1ZTogYm9vbGVhbik6IFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKFZhbHVlVHlwZS5WQUxfQk9PTCwgdmFsdWUgPyAxIDogMCk7XG5cdH1cblxuXHRzdGF0aWMgbmlsKCk6IFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKFZhbHVlVHlwZS5WQUxfTklMLCAwKTtcblx0fVxuXG5cdHN0YXRpYyBvYmoob2JqOiBPYmopOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZShWYWx1ZVR5cGUuVkFMX09CSiwgMCwgb2JqKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgVVRJTElUWSBNRVRIT0RTIDogQ09NUEFSSVNPTiwgVFlQRSBDSEVDS0lORywgRVRDLlxuXHQgKi9cblxuXHRpcyh2YWx1ZVR5cGU6IFZhbHVlVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09IHZhbHVlVHlwZTtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAodGhpcy50eXBlKSB7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfQk9PTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgPT09IDEgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXHRcdFx0Y2FzZSBWYWx1ZVR5cGUuVkFMX05JTDpcblx0XHRcdFx0cmV0dXJuICduaWwnO1xuXHRcdFx0Y2FzZSBWYWx1ZVR5cGUuVkFMX05VTUJFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgKyAnJztcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9PQko6XG5cdFx0XHRcdHJldHVybiB0aGlzLm9iai50b1N0cmluZygpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBlcXVhbHNUbyhvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50eXBlICE9PSBvdGhlci50eXBlKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDaHVuayB9IGZyb20gJy4vY2h1bmsnO1xuaW1wb3J0IERpc2Fzc2VtYmxlciBmcm9tICcuL2Rpc2Fzc2VtYmxlcic7XG5pbXBvcnQgVmFsdWUsIHsgVmFsdWVUeXBlLCBTdHJpbmdPYmogfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGVudW0gT3Bjb2RlIHtcblx0T1BfQ09OU1RBTlQsXG5cdE9QX05JTCxcblx0T1BfVFJVRSxcblx0T1BfRkFMU0UsXG5cdE9QX0FERCxcblx0T1BfU1VCVFJBQ1QsXG5cdE9QX01VTFRJUExZLFxuXHRPUF9ESVZJREUsXG5cdE9QX05FR0FURSxcblx0T1BfUkVUVVJOLFxuXHRPUF9OT1QsXG5cdE9QX0VRVUFMLFxuXHRPUF9HUkVBVEVSLFxuXHRPUF9MRVNTLFxuXHRPUF9QUklOVCxcblx0T1BfUE9QLFxuXHRPUF9ERUZJTkVfR0xPQkFMLFxuXHRPUF9HRVRfR0xPQkFMLFxuXHRPUF9TRVRfR0xPQkFMLFxuXHRPUF9HRVRfTE9DQUwsXG5cdE9QX1NFVF9MT0NBTCxcblx0T1BfSlVNUF9JRl9GQUxTRSxcblx0T1BfSlVNUCxcblx0T1BfTE9PUCxcblx0T1BfSU5URVJSVVBUXG59XG5cbmV4cG9ydCBlbnVtIFZNU3RhdHVzIHtcblx0SU5URVJQUkVUX09LLFxuXHRJTlRFUlBSRVRfQ09NUElMRV9FUlJPUixcblx0SU5URVJQUkVUX1JVTlRJTUVfRVJST1IsXG5cdElOVEVSUFJFVF9JTlRFUlJVUFRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnByZXRSZXN1bHQge1xuXHRzdGF0dXM6IFZNU3RhdHVzO1xuXHRpbnRlcnJ1cHRDb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmNsYXNzIFZNIHtcblx0cHJpdmF0ZSBjaHVuazogQ2h1bms7XG5cdHByaXZhdGUgaXAgPSAwO1xuXHRwcml2YXRlIGRlYnVnOiBib29sZWFuO1xuXHRwcml2YXRlIGRpc3NhbWJsZXI6IERpc2Fzc2VtYmxlcjtcblx0cHJpdmF0ZSBzdGFjazogVmFsdWVbXSA9IFtdO1xuXHRwcml2YXRlIGdsb2JhbHM6IFZhbHVlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcih7IGRlYnVnID0gZmFsc2UgfSkge1xuXHRcdHRoaXMuZGVidWcgPSBkZWJ1Zztcblx0fVxuXG5cdGludGVycHJldChjaHVuayk6IEludGVycHJldFJlc3VsdCB7XG5cdFx0dGhpcy5jaHVuayA9IGNodW5rO1xuXHRcdHRoaXMuaXAgPSAwO1xuXHRcdHRoaXMuZGlzc2FtYmxlciA9IG5ldyBEaXNhc3NlbWJsZXIoY2h1bmspO1xuXG5cdFx0cmV0dXJuIHRoaXMucnVuKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRCeXRlKCk6IG51bWJlciB7XG5cdFx0Y29uc3QgYnl0ZSA9IHRoaXMuY2h1bmsuZ2V0KHRoaXMuaXApO1xuXHRcdHRoaXMuaXArKztcblx0XHRyZXR1cm4gYnl0ZTtcblx0fVxuXG5cdHByaXZhdGUgcnVuKCk6IEludGVycHJldFJlc3VsdCB7XG5cdFx0Zm9yICg7Oykge1xuXHRcdFx0Y29uc3QgaW5zdHJ1Y3Rpb24gPSB0aGlzLnJlYWRCeXRlKCk7XG5cblx0XHRcdC8vIFRoaXMgcGFydCBzaG91bGQgYmUgb3B0aW1pemVkLlxuXHRcdFx0aWYgKHRoaXMuZGVidWcpIHtcblx0XHRcdFx0dGhpcy5zdGFjay5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGAgICAgICAgICAgWyAke3ZhbHVlLnRvU3RyaW5nKCl9IF1gKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuZGlzc2FtYmxlci5kaXNhc3NlbWJsZUluc3RydWN0aW9uKHRoaXMuaXAgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoIChpbnN0cnVjdGlvbikge1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9SRVRVUk46XG5cdFx0XHRcdFx0cmV0dXJuIHtzdGF0dXM6IFZNU3RhdHVzLklOVEVSUFJFVF9PSywgaW50ZXJydXB0Q29kZTogdW5kZWZpbmVkfTtcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfTkVHQVRFOlxuXHRcdFx0XHRcdGlmICghdGhpcy5wZWVrKCkuaXMoVmFsdWVUeXBlLlZBTF9OVU1CRVIpKVxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPcGVyYW5kIG11c3QgYmUgYSBudW1iZXIuJyk7XG5cblx0XHRcdFx0XHR0aGlzLnB1c2goVmFsdWUubnVtYmVyKC10aGlzLnBvcCgpLnZhbHVlKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0FERDoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0YS5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUikgJiZcblx0XHRcdFx0XHRcdGIuaXMoVmFsdWVUeXBlLlZBTF9OVU1CRVIpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnB1c2goVmFsdWUubnVtYmVyKGEudmFsdWUgKyBiLnZhbHVlKSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdGEuaXMoVmFsdWVUeXBlLlZBTF9PQkopICYmXG5cdFx0XHRcdFx0XHRiLmlzKFZhbHVlVHlwZS5WQUxfT0JKKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGhpcy5wdXNoKFxuXHRcdFx0XHRcdFx0XHRWYWx1ZS5vYmooXG5cdFx0XHRcdFx0XHRcdFx0bmV3IFN0cmluZ09iaihhLnRvU3RyaW5nKCkgKyBiLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHQnT3BlcmFuZHMgbXVzdCBiZSB0d28gbnVtYmVycyBvciB0d28gc3RyaW5ncy4nLFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfU1VCVFJBQ1Q6XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX01VTFRJUExZOlxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9ESVZJREU6XG5cdFx0XHRcdFx0dGhpcy5iaW5hcnlPcChpbnN0cnVjdGlvbik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0NPTlNUQU5UOiB7XG5cdFx0XHRcdFx0Y29uc3QgY29uc3RhbnQgPSB0aGlzLnJlYWRCeXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKHRoaXMuY2h1bmsuZ2V0Q29uc3RhbnQoY29uc3RhbnQpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9OSUw6XG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm5pbCgpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfVFJVRTpcblx0XHRcdFx0XHR0aGlzLnB1c2goVmFsdWUuYm9vbCh0cnVlKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0ZBTFNFOlxuXHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5ib29sKGZhbHNlKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX05PVDpcblx0XHRcdFx0XHR0aGlzLnB1c2goVmFsdWUuYm9vbCh0aGlzLmlzRmFsc2V5KHRoaXMucG9wKCkpKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0VRVUFMOiB7XG5cdFx0XHRcdFx0Y29uc3QgYiA9IHRoaXMucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IHRoaXMucG9wKCk7XG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2woYS5lcXVhbHNUbyhiKSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dSRUFURVI6XG5cdFx0XHRcdFx0dGhpcy5iaW5hcnlPcChpbnN0cnVjdGlvbik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xFU1M6XG5cdFx0XHRcdFx0dGhpcy5iaW5hcnlPcChpbnN0cnVjdGlvbik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1BSSU5UOiB7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IHRoaXMucG9wKCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9QT1A6XG5cdFx0XHRcdFx0dGhpcy5wb3AoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfREVGSU5FX0dMT0JBTDoge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSAoXG5cdFx0XHRcdFx0XHR0aGlzLmNodW5rLmdldENvbnN0YW50KHRoaXMucmVhZEJ5dGUoKSkub2JqIGFzIFN0cmluZ09ialxuXHRcdFx0XHRcdCkudmFsdWU7XG5cdFx0XHRcdFx0dGhpcy5nbG9iYWxzW25hbWVdID0gdGhpcy5wb3AoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9HRVRfR0xPQkFMOiB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IChcblx0XHRcdFx0XHRcdHRoaXMuY2h1bmsuZ2V0Q29uc3RhbnQodGhpcy5yZWFkQnl0ZSgpKS5vYmogYXMgU3RyaW5nT2JqXG5cdFx0XHRcdFx0KS52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2xvYmFsc1tuYW1lXTtcblx0XHRcdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAnJHtuYW1lfScuYCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfU0VUX0dMT0JBTDoge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSAoXG5cdFx0XHRcdFx0XHR0aGlzLmNodW5rLmdldENvbnN0YW50KHRoaXMucmVhZEJ5dGUoKSkub2JqIGFzIFN0cmluZ09ialxuXHRcdFx0XHRcdCkudmFsdWU7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmdsb2JhbHNbbmFtZV0pIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICcke25hbWV9Jy5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmdsb2JhbHNbbmFtZV0gPSB0aGlzLnBlZWsoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9HRVRfTE9DQUw6IHtcblx0XHRcdFx0XHRjb25zdCBzbG90ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMucHVzaCh0aGlzLnN0YWNrW3Nsb3RdKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9TRVRfTE9DQUw6IHtcblx0XHRcdFx0XHRjb25zdCBzbG90ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2tbc2xvdF0gPSB0aGlzLnBlZWsoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0ZhbHNleSh0aGlzLnBlZWsoKSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXAgKz0gb2Zmc2V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHR0aGlzLmlwICs9IG9mZnNldDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xPT1A6IHtcblx0XHRcdFx0XHRjb25zdCBvZmZzZXQgPSB0aGlzLnJlYWRTaG9ydCgpO1xuXHRcdFx0XHRcdHRoaXMuaXAgLT0gb2Zmc2V0O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX0lOVEVSUlVQVDoge1xuXHRcdFx0XHRcdGNvbnN0IGludGVycnVwdENvZGUgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRzdGF0dXM6IFZNU3RhdHVzLklOVEVSUFJFVF9JTlRFUlJVUFQsXG5cdFx0XHRcdFx0XHRpbnRlcnJ1cHRDb2RlOiBpbnRlcnJ1cHRDb2RlLm9iai50b1N0cmluZygpICsgXCJcIixcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZWFkU2hvcnQoKTogbnVtYmVyIHtcblx0XHRjb25zdCBieXRlMSA9IHRoaXMucmVhZEJ5dGUoKTtcblx0XHRjb25zdCBieXRlMiA9IHRoaXMucmVhZEJ5dGUoKTtcblx0XHRyZXR1cm4gKGJ5dGUxIDw8IDgpIHwgYnl0ZTI7XG5cdH1cblxuXHRwcml2YXRlIGlzRmFsc2V5KHZhbHVlOiBWYWx1ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHR2YWx1ZS5pcyhWYWx1ZVR5cGUuVkFMX05JTCkgfHxcblx0XHRcdCh2YWx1ZS5pcyhWYWx1ZVR5cGUuVkFMX0JPT0wpICYmICF2YWx1ZS52YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBiaW5hcnlPcChvcDogT3Bjb2RlKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBlZWsoKS5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUikpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ09wZXJhbmQgbXVzdCBiZSBhIG51bWJlci4nKTtcblxuXHRcdGNvbnN0IGIgPSB0aGlzLnBvcCgpO1xuXG5cdFx0aWYgKCF0aGlzLnBlZWsoKS5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUikpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ09wZXJhbmQgbXVzdCBiZSBhIG51bWJlci4nKTtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXG5cdFx0c3dpdGNoIChvcCkge1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfQUREOlxuXHRcdFx0XHR0aGlzLnB1c2goVmFsdWUubnVtYmVyKGEudmFsdWUgKyBiLnZhbHVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfU1VCVFJBQ1Q6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5udW1iZXIoYS52YWx1ZSAtIGIudmFsdWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9NVUxUSVBMWTpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcihhLnZhbHVlICogYi52YWx1ZSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0RJVklERTpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcihhLnZhbHVlIC8gYi52YWx1ZSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dSRUFURVI6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5ib29sKGEudmFsdWUgPiBiLnZhbHVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfTEVTUzpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2woYS52YWx1ZSA8IGIudmFsdWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgU1RBQ0sgT1BFUkFUSU9OU1xuXHQgKi9cblxuXHRwcml2YXRlIHB1c2godmFsdWU6IFZhbHVlKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFjay5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgcG9wKCk6IFZhbHVlIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFjay5wb3AoKTtcblx0fVxuXG5cdHByaXZhdGUgcGVlaygpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBWTTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGludGVycHJldCBmcm9tIFwiLi9pbnRlcnByZXRcIjtcbmltcG9ydCB7IEludGVycHJldFJlc3VsdCwgVk1TdGF0dXMgfSBmcm9tIFwiLi92bVwiO1xuXG5jb25zdCBydW5Gcm9tUXVlcnlQYXJhbXMgPSAoKSA6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgXyA9IGBcbiAgICAgICAgaWYodHJ1ZSlcbiAgICAgICAgICAgIHN5c2NhbGwgXCJpcy53b3JrZmxvdy5hY3Rpb25zLnBhdXNlbXVzaWNcIjtcbiAgICBgXG5cbiAgICBjb25zb2xlLmxvZyhlbmNvZGVVUklDb21wb25lbnQoXykpO1xuICAgIFxuICAgIGNvbnN0IHNvdXJjZSA9IHBhcmFtcy5nZXQoJ3NvdXJjZScpO1xuICAgIFxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBzb3VyY2UgY29kZSBmb3VuZCBpbiBxdWVyeSBwYXJhbXMuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7c3RhdHVzLCBpbnRlcnJ1cHRDb2RlfSA9IGludGVycHJldChzb3VyY2UpO1xuXG4gICAgaWYoc3RhdHVzID09PSBWTVN0YXR1cy5JTlRFUlBSRVRfSU5URVJSVVBUKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcnJ1cHRlZCB3aXRoIGNvZGUgJHtpbnRlcnJ1cHRDb2RlfWApO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoSlNPTi5zdHJpbmdpZnkoe3N0YXR1cywgaW50ZXJydXB0Q29kZX0pKTtcbiAgICB9XG59XG5cbnJ1bkZyb21RdWVyeVBhcmFtcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==