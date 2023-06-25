export enum ValueType {
    VAL_BOOL,
    VAL_NIL,
    VAL_NUMBER,
    VAL_OBJ
};

export abstract class Obj {
    abstract toString(): string;
}

export class StringObj extends Obj {

    public readonly value: string;

    constructor(chars: string) {
        super();
        this.value = chars;
    }

    public toString(): string {
        return this.value;
    }
}

export default class Value {
    public readonly type: ValueType;
    public readonly value: number;
    public readonly obj: Obj;

    constructor(type: ValueType, value = 0, obj = null) {
        this.type = type;
        this.value = value;
        this.obj = obj;
    }

    /**
     *      STATIC CONSTRUCTORS
     */

    static number(value: number): Value {
        return new Value(ValueType.VAL_NUMBER, value);
    }

    static bool(value: boolean): Value {
        return new Value(ValueType.VAL_BOOL, value ? 1 : 0);
    }

    static nil(): Value {
        return new Value(ValueType.VAL_NIL, 0);
    }

    static obj(obj: Obj): Value {
        return new Value(ValueType.VAL_OBJ, 0, obj);
    }

    /**
     *     UTILITY METHODS : COMPARISON, TYPE CHECKING, ETC.
     */


    is(valueType: ValueType): boolean {
        return this.type === valueType;
    }

    public toString(): string {
        switch (this.type) {
            case ValueType.VAL_BOOL: return this.value === 1 ? "true" : "false";
            case ValueType.VAL_NIL: return "nil";
            case ValueType.VAL_NUMBER: return this.value + "";
            case ValueType.VAL_OBJ: return this.obj.toString();
        }
    }

    public equalsTo(other: Value): boolean {
        if (this.type !== other.type) return false;
        return this.value === other.value;
    }
}