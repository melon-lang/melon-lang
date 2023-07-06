import "reflect-metadata";

export function SerializableField(target, propertyKey): void {
    const variables = Reflect.getOwnMetadata("serialized", target.constructor) || [];
    variables.push(propertyKey);
    Reflect.defineMetadata("serialized", variables, target.constructor);
}

export function serialize(a: any): string {
    const _serialize = (a: any) => {
        const fields = Reflect.getOwnMetadata("serialized", a.constructor);

        if (fields === undefined) {
            return a;
        }

        const serialized = {};
        fields.forEach((field) => {
            serialized[field] = _serialize(a[field])
        });

        return serialized;
    }

    return JSON.stringify(_serialize(a));
}

export function deserialize(src: string, dest: any): any {
    const _deserialize = (src: Object, dest: any) => {
        if (dest?.constructor === undefined) return dest;

        const fields = Reflect.getOwnMetadata("serialized", dest.constructor);

        if (Array.isArray(dest) && Array.isArray(src)) {
            src.forEach((element, index) => {
                dest.push(_deserialize(element, dest[index]));
            });
            return dest;
        }

        if (fields === undefined) {
            return dest;
        }

        fields.forEach((field) => {
            if (dest[field] instanceof Object)
                _deserialize(src[field], dest[field]);
            else
                dest[field] = src[field];
        });
    };

    const parsed = JSON.parse(src);
    return _deserialize(parsed, dest);
}