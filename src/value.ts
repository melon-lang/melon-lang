import { Type } from "class-transformer";

export enum ValueType {
	VAL_BOOL,
	VAL_NIL,
	VAL_NUMBER,
	VAL_OBJ,
	VAL_STR,
}

export abstract class Obj {
	abstract toString(): string;
	abstract toJSON(): object;
}

export default class Value {
	public readonly type: ValueType;

	private readonly _number: number;

	@Type(() => Obj)
	private readonly _obj: Obj;

	private readonly _str: string;

	static readonly TYPE_VALUE_FIELD_MAP = {
		[ValueType.VAL_BOOL]: 'bool',
		[ValueType.VAL_NIL]: 'nil',
		[ValueType.VAL_NUMBER]: 'number',
		[ValueType.VAL_OBJ]: 'obj',
		[ValueType.VAL_STR]: 'str',
	};

	constructor(type: ValueType, number = NaN, obj = null, str = null) {
		this.type = type;
		this._number = number;
		this._obj = obj;
		this._str = str;
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
		return new Value(ValueType.VAL_NIL, NaN);
	}

	static str(str: string): Value {
		return new Value(ValueType.VAL_STR, NaN, null, str);
	}

	static obj(obj: Obj): Value {
		return new Value(ValueType.VAL_OBJ, NaN, obj);
	}

	static fromJSON(json: object): Value {
		const { type, value } = json as any;

		switch (type) {
			case ValueType.VAL_BOOL:
				return Value.bool(value);
			case ValueType.VAL_NIL:
				return Value.nil();
			case ValueType.VAL_NUMBER:
				return Value.number(value);
			case ValueType.VAL_OBJ:
				return Value.obj(value);
			case ValueType.VAL_STR:
				return Value.str(value);
		}
		throw new Error('Invalid value type.');
	}

	get number(): number {
		if (this.type !== ValueType.VAL_NUMBER)
			throw new Error('Value is not a number.');
		return this._number;
	}

	get bool(): boolean {
		if (this.type !== ValueType.VAL_BOOL)
			throw new Error('Value is not a boolean.');

		return this._number === 1;
	}

	get obj(): Obj {
		if (this.type !== ValueType.VAL_OBJ)
			throw new Error('Value is not an object.');

		return this._obj;
	}

	get str(): string {
		if (this.type !== ValueType.VAL_STR)
			throw new Error('Value is not a string.');

		return this._str;
	}

	/**
	 *     UTILITY METHODS : COMPARISON, TYPE CHECKING, ETC.
	 */

	is(valueType: ValueType): boolean {
		return this.type === valueType;
	}

	public toString(): string {
		switch (this.type) {
			case ValueType.VAL_BOOL:
				return this._number === 1 ? 'true' : 'false';
			case ValueType.VAL_NIL:
				return 'nil';
			case ValueType.VAL_NUMBER:
				return this._number + '';
			case ValueType.VAL_OBJ:
				return this._obj.toString();
			case ValueType.VAL_STR:
				return this._str;
		}
	}

	public equalsTo(other: Value): boolean {
		if (this.type !== other.type) return false;

		switch (this.type) {
			case ValueType.VAL_BOOL:
				return this.bool === other.bool;
			case ValueType.VAL_NIL:
				return true;
			case ValueType.VAL_NUMBER:
				return this.number === other.number;
			case ValueType.VAL_OBJ:
				return this.obj === other.obj;
			case ValueType.VAL_STR:
				return this.str === other.str;
		}
	}

	public toJSON(): object {
		const field = Value.TYPE_VALUE_FIELD_MAP[this.type];

		return {
			type: this.type,
			value: this[field]
		};
	}
}
