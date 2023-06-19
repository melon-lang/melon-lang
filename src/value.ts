export enum ValueType {
    VAL_BOOL,
    VAL_NIL,
    VAL_NUMBER,
};

export class Value {
    public readonly type: ValueType;
    public readonly value: number;

    constructor(type: ValueType, value: number) {
        this.type = type;
        this.value = value;
    }

    is(valueType: ValueType): boolean {
        return this.type === valueType;
    }

    static number(value: number): Value {
        return new Value(ValueType.VAL_NUMBER, value);
    }

    static bool(value: boolean): Value {
        return new Value(ValueType.VAL_BOOL, value ? 1 : 0);
    }

    static nil(): Value {
        return new Value(ValueType.VAL_NIL, 0);
    }

    public toString(): string {
        switch (this.type) {
            case ValueType.VAL_BOOL: return this.value === 1 ? "true" : "false";
            case ValueType.VAL_NIL: return "nil";
            case ValueType.VAL_NUMBER: return this.value.toString();
        }
    }

    public equalsTo(other: Value): boolean {
        if (this.type !== other.type) return false;
        return this.value === other.value;
    }
}
 
export const printValue = (value: Value): string => {
    return value.toString();
}