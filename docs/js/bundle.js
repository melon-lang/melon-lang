/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/class-transformer/esm5/ClassTransformer.js":
/*!******************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/ClassTransformer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassTransformer: () => (/* binding */ ClassTransformer)
/* harmony export */ });
/* harmony import */ var _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransformOperationExecutor */ "../node_modules/class-transformer/esm5/TransformOperationExecutor.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "../node_modules/class-transformer/esm5/enums/transformation-type.enum.js");
/* harmony import */ var _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/default-options.constant */ "../node_modules/class-transformer/esm5/constants/default-options.constant.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ClassTransformer = /** @class */ (function () {
    function ClassTransformer() {
    }
    ClassTransformer.prototype.instanceToPlain = function (object, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.classToPlainFromExist = function (object, plainObject, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(plainObject, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.plainToInstance = function (cls, plain, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(undefined, plain, cls, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.plainToClassFromExist = function (clsObject, plain, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(clsObject, plain, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.instanceToInstance = function (object, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.classToClassFromExist = function (object, fromObject, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(fromObject, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.serialize = function (object, options) {
        return JSON.stringify(this.instanceToPlain(object, options));
    };
    /**
     * Deserializes given JSON string to a object of the given class.
     */
    ClassTransformer.prototype.deserialize = function (cls, json, options) {
        var jsonObject = JSON.parse(json);
        return this.plainToInstance(cls, jsonObject, options);
    };
    /**
     * Deserializes given JSON string to an array of objects of the given class.
     */
    ClassTransformer.prototype.deserializeArray = function (cls, json, options) {
        var jsonObject = JSON.parse(json);
        return this.plainToInstance(cls, jsonObject, options);
    };
    return ClassTransformer;
}());

//# sourceMappingURL=ClassTransformer.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/MetadataStorage.js":
/*!*****************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/MetadataStorage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataStorage: () => (/* binding */ MetadataStorage)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "../node_modules/class-transformer/esm5/enums/transformation-type.enum.js");

/**
 * Storage all library metadata.
 */
var MetadataStorage = /** @class */ (function () {
    function MetadataStorage() {
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this._typeMetadatas = new Map();
        this._transformMetadatas = new Map();
        this._exposeMetadatas = new Map();
        this._excludeMetadatas = new Map();
        this._ancestorsMap = new Map();
    }
    // -------------------------------------------------------------------------
    // Adder Methods
    // -------------------------------------------------------------------------
    MetadataStorage.prototype.addTypeMetadata = function (metadata) {
        if (!this._typeMetadatas.has(metadata.target)) {
            this._typeMetadatas.set(metadata.target, new Map());
        }
        this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
    };
    MetadataStorage.prototype.addTransformMetadata = function (metadata) {
        if (!this._transformMetadatas.has(metadata.target)) {
            this._transformMetadatas.set(metadata.target, new Map());
        }
        if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
            this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
        }
        this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
    };
    MetadataStorage.prototype.addExposeMetadata = function (metadata) {
        if (!this._exposeMetadatas.has(metadata.target)) {
            this._exposeMetadatas.set(metadata.target, new Map());
        }
        this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
    };
    MetadataStorage.prototype.addExcludeMetadata = function (metadata) {
        if (!this._excludeMetadatas.has(metadata.target)) {
            this._excludeMetadatas.set(metadata.target, new Map());
        }
        this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    MetadataStorage.prototype.findTransformMetadatas = function (target, propertyName, transformationType) {
        return this.findMetadatas(this._transformMetadatas, target, propertyName).filter(function (metadata) {
            if (!metadata.options)
                return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                return true;
            if (metadata.options.toClassOnly === true) {
                return (transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS ||
                    transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS);
            }
            if (metadata.options.toPlainOnly === true) {
                return transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
        });
    };
    MetadataStorage.prototype.findExcludeMetadata = function (target, propertyName) {
        return this.findMetadata(this._excludeMetadatas, target, propertyName);
    };
    MetadataStorage.prototype.findExposeMetadata = function (target, propertyName) {
        return this.findMetadata(this._exposeMetadatas, target, propertyName);
    };
    MetadataStorage.prototype.findExposeMetadataByCustomName = function (target, name) {
        return this.getExposedMetadatas(target).find(function (metadata) {
            return metadata.options && metadata.options.name === name;
        });
    };
    MetadataStorage.prototype.findTypeMetadata = function (target, propertyName) {
        return this.findMetadata(this._typeMetadatas, target, propertyName);
    };
    MetadataStorage.prototype.getStrategy = function (target) {
        var excludeMap = this._excludeMetadatas.get(target);
        var exclude = excludeMap && excludeMap.get(undefined);
        var exposeMap = this._exposeMetadatas.get(target);
        var expose = exposeMap && exposeMap.get(undefined);
        if ((exclude && expose) || (!exclude && !expose))
            return 'none';
        return exclude ? 'excludeAll' : 'exposeAll';
    };
    MetadataStorage.prototype.getExposedMetadatas = function (target) {
        return this.getMetadata(this._exposeMetadatas, target);
    };
    MetadataStorage.prototype.getExcludedMetadatas = function (target) {
        return this.getMetadata(this._excludeMetadatas, target);
    };
    MetadataStorage.prototype.getExposedProperties = function (target, transformationType) {
        return this.getExposedMetadatas(target)
            .filter(function (metadata) {
            if (!metadata.options)
                return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                return true;
            if (metadata.options.toClassOnly === true) {
                return (transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS ||
                    transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS);
            }
            if (metadata.options.toPlainOnly === true) {
                return transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
        })
            .map(function (metadata) { return metadata.propertyName; });
    };
    MetadataStorage.prototype.getExcludedProperties = function (target, transformationType) {
        return this.getExcludedMetadatas(target)
            .filter(function (metadata) {
            if (!metadata.options)
                return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                return true;
            if (metadata.options.toClassOnly === true) {
                return (transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS ||
                    transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS);
            }
            if (metadata.options.toPlainOnly === true) {
                return transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
        })
            .map(function (metadata) { return metadata.propertyName; });
    };
    MetadataStorage.prototype.clear = function () {
        this._typeMetadatas.clear();
        this._exposeMetadatas.clear();
        this._excludeMetadatas.clear();
        this._ancestorsMap.clear();
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    MetadataStorage.prototype.getMetadata = function (metadatas, target) {
        var metadataFromTargetMap = metadatas.get(target);
        var metadataFromTarget;
        if (metadataFromTargetMap) {
            metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter(function (meta) { return meta.propertyName !== undefined; });
        }
        var metadataFromAncestors = [];
        for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
            var ancestor = _a[_i];
            var ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
                var metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter(function (meta) { return meta.propertyName !== undefined; });
                metadataFromAncestors.push.apply(metadataFromAncestors, metadataFromAncestor);
            }
        }
        return metadataFromAncestors.concat(metadataFromTarget || []);
    };
    MetadataStorage.prototype.findMetadata = function (metadatas, target, propertyName) {
        var metadataFromTargetMap = metadatas.get(target);
        if (metadataFromTargetMap) {
            var metadataFromTarget = metadataFromTargetMap.get(propertyName);
            if (metadataFromTarget) {
                return metadataFromTarget;
            }
        }
        for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
            var ancestor = _a[_i];
            var ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
                var ancestorResult = ancestorMetadataMap.get(propertyName);
                if (ancestorResult) {
                    return ancestorResult;
                }
            }
        }
        return undefined;
    };
    MetadataStorage.prototype.findMetadatas = function (metadatas, target, propertyName) {
        var metadataFromTargetMap = metadatas.get(target);
        var metadataFromTarget;
        if (metadataFromTargetMap) {
            metadataFromTarget = metadataFromTargetMap.get(propertyName);
        }
        var metadataFromAncestorsTarget = [];
        for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
            var ancestor = _a[_i];
            var ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
                if (ancestorMetadataMap.has(propertyName)) {
                    metadataFromAncestorsTarget.push.apply(metadataFromAncestorsTarget, ancestorMetadataMap.get(propertyName));
                }
            }
        }
        return metadataFromAncestorsTarget
            .slice()
            .reverse()
            .concat((metadataFromTarget || []).slice().reverse());
    };
    MetadataStorage.prototype.getAncestors = function (target) {
        if (!target)
            return [];
        if (!this._ancestorsMap.has(target)) {
            var ancestors = [];
            for (var baseClass = Object.getPrototypeOf(target.prototype.constructor); typeof baseClass.prototype !== 'undefined'; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
                ancestors.push(baseClass);
            }
            this._ancestorsMap.set(target, ancestors);
        }
        return this._ancestorsMap.get(target);
    };
    return MetadataStorage;
}());

//# sourceMappingURL=MetadataStorage.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/TransformOperationExecutor.js":
/*!****************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/TransformOperationExecutor.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformOperationExecutor: () => (/* binding */ TransformOperationExecutor)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "../node_modules/class-transformer/esm5/storage.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "../node_modules/class-transformer/esm5/enums/transformation-type.enum.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/class-transformer/esm5/utils/get-global.util.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/class-transformer/esm5/utils/is-promise.util.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



function instantiateArrayType(arrayType) {
    var array = new arrayType();
    if (!(array instanceof Set) && !('push' in array)) {
        return [];
    }
    return array;
}
var TransformOperationExecutor = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function TransformOperationExecutor(transformationType, options) {
        this.transformationType = transformationType;
        this.options = options;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this.recursionStack = new Set();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    TransformOperationExecutor.prototype.transform = function (source, value, targetType, arrayType, isMap, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        if (Array.isArray(value) || value instanceof Set) {
            var newValue_1 = arrayType && this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS
                ? instantiateArrayType(arrayType)
                : [];
            value.forEach(function (subValue, index) {
                var subSource = source ? source[index] : undefined;
                if (!_this.options.enableCircularCheck || !_this.isCircular(subValue)) {
                    var realTargetType = void 0;
                    if (typeof targetType !== 'function' &&
                        targetType &&
                        targetType.options &&
                        targetType.options.discriminator &&
                        targetType.options.discriminator.property &&
                        targetType.options.discriminator.subTypes) {
                        if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                            realTargetType = targetType.options.discriminator.subTypes.find(function (subType) {
                                return subType.name === subValue[targetType.options.discriminator.property];
                            });
                            var options = { newObject: newValue_1, object: subValue, property: undefined };
                            var newType = targetType.typeFunction(options);
                            realTargetType === undefined ? (realTargetType = newType) : (realTargetType = realTargetType.value);
                            if (!targetType.options.keepDiscriminatorProperty)
                                delete subValue[targetType.options.discriminator.property];
                        }
                        if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                            realTargetType = subValue.constructor;
                        }
                        if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN) {
                            subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find(function (subType) { return subType.value === subValue.constructor; }).name;
                        }
                    }
                    else {
                        realTargetType = targetType;
                    }
                    var value_1 = _this.transform(subSource, subValue, realTargetType, undefined, subValue instanceof Map, level + 1);
                    if (newValue_1 instanceof Set) {
                        newValue_1.add(value_1);
                    }
                    else {
                        newValue_1.push(value_1);
                    }
                }
                else if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                    if (newValue_1 instanceof Set) {
                        newValue_1.add(subValue);
                    }
                    else {
                        newValue_1.push(subValue);
                    }
                }
            });
            return newValue_1;
        }
        else if (targetType === String && !isMap) {
            if (value === null || value === undefined)
                return value;
            return String(value);
        }
        else if (targetType === Number && !isMap) {
            if (value === null || value === undefined)
                return value;
            return Number(value);
        }
        else if (targetType === Boolean && !isMap) {
            if (value === null || value === undefined)
                return value;
            return Boolean(value);
        }
        else if ((targetType === Date || value instanceof Date) && !isMap) {
            if (value instanceof Date) {
                return new Date(value.valueOf());
            }
            if (value === null || value === undefined)
                return value;
            return new Date(value);
        }
        else if (!!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().Buffer && (targetType === Buffer || value instanceof Buffer) && !isMap) {
            if (value === null || value === undefined)
                return value;
            return Buffer.from(value);
        }
        else if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isPromise)(value) && !isMap) {
            return new Promise(function (resolve, reject) {
                value.then(function (data) { return resolve(_this.transform(undefined, data, targetType, undefined, undefined, level + 1)); }, reject);
            });
        }
        else if (!isMap && value !== null && typeof value === 'object' && typeof value.then === 'function') {
            // Note: We should not enter this, as promise has been handled above
            // This option simply returns the Promise preventing a JS error from happening and should be an inaccessible path.
            return value; // skip promise transformation
        }
        else if (typeof value === 'object' && value !== null) {
            // try to guess the type
            if (!targetType && value.constructor !== Object /* && TransformationType === TransformationType.CLASS_TO_PLAIN*/)
                if (!Array.isArray(value) && value.constructor === Array) {
                    // Somebody attempts to convert special Array like object to Array, eg:
                    // const evilObject = { '100000000': '100000000', __proto__: [] };
                    // This could be used to cause Denial-of-service attack so we don't allow it.
                    // See prevent-array-bomb.spec.ts for more details.
                }
                else {
                    // We are good we can use the built-in constructor
                    targetType = value.constructor;
                }
            if (!targetType && source)
                targetType = source.constructor;
            if (this.options.enableCircularCheck) {
                // add transformed type to prevent circular references
                this.recursionStack.add(value);
            }
            var keys = this.getKeys(targetType, value, isMap);
            var newValue = source ? source : {};
            if (!source &&
                (this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS ||
                    this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS)) {
                if (isMap) {
                    newValue = new Map();
                }
                else if (targetType) {
                    newValue = new targetType();
                }
                else {
                    newValue = {};
                }
            }
            var _loop_1 = function (key) {
                if (key === '__proto__' || key === 'constructor') {
                    return "continue";
                }
                var valueKey = key;
                var newValueKey = key, propertyName = key;
                if (!this_1.options.ignoreDecorators && targetType) {
                    if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                        var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key);
                        if (exposeMetadata) {
                            propertyName = exposeMetadata.propertyName;
                            newValueKey = exposeMetadata.propertyName;
                        }
                    }
                    else if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN ||
                        this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                        var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(targetType, key);
                        if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                            newValueKey = exposeMetadata.options.name;
                        }
                    }
                }
                // get a subvalue
                var subValue = undefined;
                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                    /**
                     * This section is added for the following report:
                     * https://github.com/typestack/class-transformer/issues/596
                     *
                     * We should not call functions or constructors when transforming to class.
                     */
                    subValue = value[valueKey];
                }
                else {
                    if (value instanceof Map) {
                        subValue = value.get(valueKey);
                    }
                    else if (value[valueKey] instanceof Function) {
                        subValue = value[valueKey]();
                    }
                    else {
                        subValue = value[valueKey];
                    }
                }
                // determine a type
                var type = undefined, isSubValueMap = subValue instanceof Map;
                if (targetType && isMap) {
                    type = targetType;
                }
                else if (targetType) {
                    var metadata_1 = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findTypeMetadata(targetType, propertyName);
                    if (metadata_1) {
                        var options = { newObject: newValue, object: value, property: propertyName };
                        var newType = metadata_1.typeFunction ? metadata_1.typeFunction(options) : metadata_1.reflectedType;
                        if (metadata_1.options &&
                            metadata_1.options.discriminator &&
                            metadata_1.options.discriminator.property &&
                            metadata_1.options.discriminator.subTypes) {
                            if (!(value[valueKey] instanceof Array)) {
                                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                                    type = metadata_1.options.discriminator.subTypes.find(function (subType) {
                                        if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                                            return subType.name === subValue[metadata_1.options.discriminator.property];
                                        }
                                    });
                                    type === undefined ? (type = newType) : (type = type.value);
                                    if (!metadata_1.options.keepDiscriminatorProperty) {
                                        if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                                            delete subValue[metadata_1.options.discriminator.property];
                                        }
                                    }
                                }
                                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                                    type = subValue.constructor;
                                }
                                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN) {
                                    if (subValue) {
                                        subValue[metadata_1.options.discriminator.property] = metadata_1.options.discriminator.subTypes.find(function (subType) { return subType.value === subValue.constructor; }).name;
                                    }
                                }
                            }
                            else {
                                type = metadata_1;
                            }
                        }
                        else {
                            type = newType;
                        }
                        isSubValueMap = isSubValueMap || metadata_1.reflectedType === Map;
                    }
                    else if (this_1.options.targetMaps) {
                        // try to find a type in target maps
                        this_1.options.targetMaps
                            .filter(function (map) { return map.target === targetType && !!map.properties[propertyName]; })
                            .forEach(function (map) { return (type = map.properties[propertyName]); });
                    }
                    else if (this_1.options.enableImplicitConversion &&
                        this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                        // if we have no registererd type via the @Type() decorator then we check if we have any
                        // type declarations in reflect-metadata (type declaration is emited only if some decorator is added to the property.)
                        var reflectedType = Reflect.getMetadata('design:type', targetType.prototype, propertyName);
                        if (reflectedType) {
                            type = reflectedType;
                        }
                    }
                }
                // if value is an array try to get its custom array type
                var arrayType_1 = Array.isArray(value[valueKey])
                    ? this_1.getReflectedType(targetType, propertyName)
                    : undefined;
                // const subValueKey = TransformationType === TransformationType.PLAIN_TO_CLASS && newKeyName ? newKeyName : key;
                var subSource = source ? source[valueKey] : undefined;
                // if its deserialization then type if required
                // if we uncomment this types like string[] will not work
                // if (this.transformationType === TransformationType.PLAIN_TO_CLASS && !type && subValue instanceof Object && !(subValue instanceof Date))
                //     throw new Error(`Cannot determine type for ${(targetType as any).name }.${propertyName}, did you forget to specify a @Type?`);
                // if newValue is a source object that has method that match newKeyName then skip it
                if (newValue.constructor.prototype) {
                    var descriptor = Object.getOwnPropertyDescriptor(newValue.constructor.prototype, newValueKey);
                    if ((this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS ||
                        this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) &&
                        // eslint-disable-next-line @typescript-eslint/unbound-method
                        ((descriptor && !descriptor.set) || newValue[newValueKey] instanceof Function))
                        return "continue";
                }
                if (!this_1.options.enableCircularCheck || !this_1.isCircular(subValue)) {
                    var transformKey = this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS ? newValueKey : key;
                    var finalValue = void 0;
                    if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN) {
                        // Get original value
                        finalValue = value[transformKey];
                        // Apply custom transformation
                        finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
                        // If nothing change, it means no custom transformation was applied, so use the subValue.
                        finalValue = value[transformKey] === finalValue ? subValue : finalValue;
                        // Apply the default transformation
                        finalValue = this_1.transform(subSource, finalValue, type, arrayType_1, isSubValueMap, level + 1);
                    }
                    else {
                        if (subValue === undefined && this_1.options.exposeDefaultValues) {
                            // Set default value if nothing provided
                            finalValue = newValue[newValueKey];
                        }
                        else {
                            finalValue = this_1.transform(subSource, subValue, type, arrayType_1, isSubValueMap, level + 1);
                            finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
                        }
                    }
                    if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
                        if (newValue instanceof Map) {
                            newValue.set(newValueKey, finalValue);
                        }
                        else {
                            newValue[newValueKey] = finalValue;
                        }
                    }
                }
                else if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                    var finalValue = subValue;
                    finalValue = this_1.applyCustomTransformations(finalValue, targetType, key, value, this_1.transformationType);
                    if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
                        if (newValue instanceof Map) {
                            newValue.set(newValueKey, finalValue);
                        }
                        else {
                            newValue[newValueKey] = finalValue;
                        }
                    }
                }
            };
            var this_1 = this;
            // traverse over keys
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
            if (this.options.enableCircularCheck) {
                this.recursionStack.delete(value);
            }
            return newValue;
        }
        else {
            return value;
        }
    };
    TransformOperationExecutor.prototype.applyCustomTransformations = function (value, target, key, obj, transformationType) {
        var _this = this;
        var metadatas = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType);
        // apply versioning options
        if (this.options.version !== undefined) {
            metadatas = metadatas.filter(function (metadata) {
                if (!metadata.options)
                    return true;
                return _this.checkVersion(metadata.options.since, metadata.options.until);
            });
        }
        // apply grouping options
        if (this.options.groups && this.options.groups.length) {
            metadatas = metadatas.filter(function (metadata) {
                if (!metadata.options)
                    return true;
                return _this.checkGroups(metadata.options.groups);
            });
        }
        else {
            metadatas = metadatas.filter(function (metadata) {
                return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
            });
        }
        metadatas.forEach(function (metadata) {
            value = metadata.transformFn({ value: value, key: key, obj: obj, type: transformationType, options: _this.options });
        });
        return value;
    };
    // preventing circular references
    TransformOperationExecutor.prototype.isCircular = function (object) {
        return this.recursionStack.has(object);
    };
    TransformOperationExecutor.prototype.getReflectedType = function (target, propertyName) {
        if (!target)
            return undefined;
        var meta = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findTypeMetadata(target, propertyName);
        return meta ? meta.reflectedType : undefined;
    };
    TransformOperationExecutor.prototype.getKeys = function (target, object, isMap) {
        var _this = this;
        // determine exclusion strategy
        var strategy = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getStrategy(target);
        if (strategy === 'none')
            strategy = this.options.strategy || 'exposeAll'; // exposeAll is default strategy
        // get all keys that need to expose
        var keys = [];
        if (strategy === 'exposeAll' || isMap) {
            if (object instanceof Map) {
                keys = Array.from(object.keys());
            }
            else {
                keys = Object.keys(object);
            }
        }
        if (isMap) {
            // expose & exclude do not apply for map keys only to fields
            return keys;
        }
        /**
         * If decorators are ignored but we don't want the extraneous values, then we use the
         * metadata to decide which property is needed, but doesn't apply the decorator effect.
         */
        if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && target) {
            var exposedProperties = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
            var excludedProperties = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
            keys = __spreadArray(__spreadArray([], exposedProperties, true), excludedProperties, true);
        }
        if (!this.options.ignoreDecorators && target) {
            // add all exposed to list of keys
            var exposedProperties = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
            if (this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                exposedProperties = exposedProperties.map(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                        return exposeMetadata.options.name;
                    }
                    return key;
                });
            }
            if (this.options.excludeExtraneousValues) {
                keys = exposedProperties;
            }
            else {
                keys = keys.concat(exposedProperties);
            }
            // exclude excluded properties
            var excludedProperties_1 = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
            if (excludedProperties_1.length > 0) {
                keys = keys.filter(function (key) {
                    return !excludedProperties_1.includes(key);
                });
            }
            // apply versioning options
            if (this.options.version !== undefined) {
                keys = keys.filter(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    if (!exposeMetadata || !exposeMetadata.options)
                        return true;
                    return _this.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
                });
            }
            // apply grouping options
            if (this.options.groups && this.options.groups.length) {
                keys = keys.filter(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    if (!exposeMetadata || !exposeMetadata.options)
                        return true;
                    return _this.checkGroups(exposeMetadata.options.groups);
                });
            }
            else {
                keys = keys.filter(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    return (!exposeMetadata ||
                        !exposeMetadata.options ||
                        !exposeMetadata.options.groups ||
                        !exposeMetadata.options.groups.length);
                });
            }
        }
        // exclude prefixed properties
        if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
            keys = keys.filter(function (key) {
                return _this.options.excludePrefixes.every(function (prefix) {
                    return key.substr(0, prefix.length) !== prefix;
                });
            });
        }
        // make sure we have unique keys
        keys = keys.filter(function (key, index, self) {
            return self.indexOf(key) === index;
        });
        return keys;
    };
    TransformOperationExecutor.prototype.checkVersion = function (since, until) {
        var decision = true;
        if (decision && since)
            decision = this.options.version >= since;
        if (decision && until)
            decision = this.options.version < until;
        return decision;
    };
    TransformOperationExecutor.prototype.checkGroups = function (groups) {
        if (!groups)
            return true;
        return this.options.groups.some(function (optionGroup) { return groups.includes(optionGroup); });
    };
    return TransformOperationExecutor;
}());

//# sourceMappingURL=TransformOperationExecutor.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/constants/default-options.constant.js":
/*!************************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/constants/default-options.constant.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/**
 * These are the default options used by any transformation operation.
 */
var defaultOptions = {
    enableCircularCheck: false,
    enableImplicitConversion: false,
    excludeExtraneousValues: false,
    excludePrefixes: undefined,
    exposeDefaultValues: false,
    exposeUnsetFields: true,
    groups: undefined,
    ignoreDecorators: false,
    strategy: undefined,
    targetMaps: undefined,
    version: undefined,
};
//# sourceMappingURL=default-options.constant.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/exclude.decorator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/exclude.decorator.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exclude: () => (/* binding */ Exclude)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "../node_modules/class-transformer/esm5/storage.js");

/**
 * Marks the given class or property as excluded. By default the property is excluded in both
 * constructorToPlain and plainToConstructor transformations. It can be limited to only one direction
 * via using the `toPlainOnly` or `toClassOnly` option.
 *
 * Can be applied to class definitions and properties.
 */
function Exclude(options) {
    if (options === void 0) { options = {}; }
    /**
     * NOTE: The `propertyName` property must be marked as optional because
     * this decorator used both as a class and a property decorator and the
     * Typescript compiler will freak out if we make it mandatory as a class
     * decorator only receives one parameter.
     */
    return function (object, propertyName) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addExcludeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName: propertyName,
            options: options,
        });
    };
}
//# sourceMappingURL=exclude.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/expose.decorator.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/expose.decorator.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expose: () => (/* binding */ Expose)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "../node_modules/class-transformer/esm5/storage.js");

/**
 * Marks the given class or property as included. By default the property is included in both
 * constructorToPlain and plainToConstructor transformations. It can be limited to only one direction
 * via using the `toPlainOnly` or `toClassOnly` option.
 *
 * Can be applied to class definitions and properties.
 */
function Expose(options) {
    if (options === void 0) { options = {}; }
    /**
     * NOTE: The `propertyName` property must be marked as optional because
     * this decorator used both as a class and a property decorator and the
     * Typescript compiler will freak out if we make it mandatory as a class
     * decorator only receives one parameter.
     */
    return function (object, propertyName) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addExposeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName: propertyName,
            options: options,
        });
    };
}
//# sourceMappingURL=expose.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exclude: () => (/* reexport safe */ _exclude_decorator__WEBPACK_IMPORTED_MODULE_0__.Exclude),
/* harmony export */   Expose: () => (/* reexport safe */ _expose_decorator__WEBPACK_IMPORTED_MODULE_1__.Expose),
/* harmony export */   Transform: () => (/* reexport safe */ _transform_decorator__WEBPACK_IMPORTED_MODULE_5__.Transform),
/* harmony export */   TransformInstanceToInstance: () => (/* reexport safe */ _transform_instance_to_instance_decorator__WEBPACK_IMPORTED_MODULE_2__.TransformInstanceToInstance),
/* harmony export */   TransformInstanceToPlain: () => (/* reexport safe */ _transform_instance_to_plain_decorator__WEBPACK_IMPORTED_MODULE_3__.TransformInstanceToPlain),
/* harmony export */   TransformPlainToInstance: () => (/* reexport safe */ _transform_plain_to_instance_decorator__WEBPACK_IMPORTED_MODULE_4__.TransformPlainToInstance),
/* harmony export */   Type: () => (/* reexport safe */ _type_decorator__WEBPACK_IMPORTED_MODULE_6__.Type)
/* harmony export */ });
/* harmony import */ var _exclude_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exclude.decorator */ "../node_modules/class-transformer/esm5/decorators/exclude.decorator.js");
/* harmony import */ var _expose_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expose.decorator */ "../node_modules/class-transformer/esm5/decorators/expose.decorator.js");
/* harmony import */ var _transform_instance_to_instance_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-instance-to-instance.decorator */ "../node_modules/class-transformer/esm5/decorators/transform-instance-to-instance.decorator.js");
/* harmony import */ var _transform_instance_to_plain_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform-instance-to-plain.decorator */ "../node_modules/class-transformer/esm5/decorators/transform-instance-to-plain.decorator.js");
/* harmony import */ var _transform_plain_to_instance_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transform-plain-to-instance.decorator */ "../node_modules/class-transformer/esm5/decorators/transform-plain-to-instance.decorator.js");
/* harmony import */ var _transform_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transform.decorator */ "../node_modules/class-transformer/esm5/decorators/transform.decorator.js");
/* harmony import */ var _type_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type.decorator */ "../node_modules/class-transformer/esm5/decorators/type.decorator.js");







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/transform-instance-to-instance.decorator.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/transform-instance-to-instance.decorator.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformInstanceToInstance: () => (/* binding */ TransformInstanceToInstance)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClassTransformer */ "../node_modules/class-transformer/esm5/ClassTransformer.js");

/**
 * Return the class instance only with the exposed properties.
 *
 * Can be applied to functions and getters/setters only.
 */
function TransformInstanceToInstance(params) {
    return function (target, propertyKey, descriptor) {
        var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise
                ? result.then(function (data) { return classTransformer.instanceToInstance(data, params); })
                : classTransformer.instanceToInstance(result, params);
        };
    };
}
//# sourceMappingURL=transform-instance-to-instance.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/transform-instance-to-plain.decorator.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/transform-instance-to-plain.decorator.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformInstanceToPlain: () => (/* binding */ TransformInstanceToPlain)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClassTransformer */ "../node_modules/class-transformer/esm5/ClassTransformer.js");

/**
 * Transform the object from class to plain object and return only with the exposed properties.
 *
 * Can be applied to functions and getters/setters only.
 */
function TransformInstanceToPlain(params) {
    return function (target, propertyKey, descriptor) {
        var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise
                ? result.then(function (data) { return classTransformer.instanceToPlain(data, params); })
                : classTransformer.instanceToPlain(result, params);
        };
    };
}
//# sourceMappingURL=transform-instance-to-plain.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/transform-plain-to-instance.decorator.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/transform-plain-to-instance.decorator.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformPlainToInstance: () => (/* binding */ TransformPlainToInstance)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClassTransformer */ "../node_modules/class-transformer/esm5/ClassTransformer.js");

/**
 * Return the class instance only with the exposed properties.
 *
 * Can be applied to functions and getters/setters only.
 */
function TransformPlainToInstance(classType, params) {
    return function (target, propertyKey, descriptor) {
        var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise
                ? result.then(function (data) { return classTransformer.plainToInstance(classType, data, params); })
                : classTransformer.plainToInstance(classType, result, params);
        };
    };
}
//# sourceMappingURL=transform-plain-to-instance.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/transform.decorator.js":
/*!********************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/transform.decorator.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "../node_modules/class-transformer/esm5/storage.js");

/**
 * Defines a custom logic for value transformation.
 *
 * Can be applied to properties only.
 */
function Transform(transformFn, options) {
    if (options === void 0) { options = {}; }
    return function (target, propertyName) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addTransformMetadata({
            target: target.constructor,
            propertyName: propertyName,
            transformFn: transformFn,
            options: options,
        });
    };
}
//# sourceMappingURL=transform.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/decorators/type.decorator.js":
/*!***************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/decorators/type.decorator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Type: () => (/* binding */ Type)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "../node_modules/class-transformer/esm5/storage.js");

/**
 * Specifies a type of the property.
 * The given TypeFunction can return a constructor. A discriminator can be given in the options.
 *
 * Can be applied to properties only.
 */
function Type(typeFunction, options) {
    if (options === void 0) { options = {}; }
    return function (target, propertyName) {
        var reflectedType = Reflect.getMetadata('design:type', target, propertyName);
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addTypeMetadata({
            target: target.constructor,
            propertyName: propertyName,
            reflectedType: reflectedType,
            typeFunction: typeFunction,
            options: options,
        });
    };
}
//# sourceMappingURL=type.decorator.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/enums/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/enums/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformationType: () => (/* reexport safe */ _transformation_type_enum__WEBPACK_IMPORTED_MODULE_0__.TransformationType)
/* harmony export */ });
/* harmony import */ var _transformation_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformation-type.enum */ "../node_modules/class-transformer/esm5/enums/transformation-type.enum.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/enums/transformation-type.enum.js":
/*!********************************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/enums/transformation-type.enum.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformationType: () => (/* binding */ TransformationType)
/* harmony export */ });
var TransformationType;
(function (TransformationType) {
    TransformationType[TransformationType["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
    TransformationType[TransformationType["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
    TransformationType[TransformationType["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
})(TransformationType || (TransformationType = {}));
//# sourceMappingURL=transformation-type.enum.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/class-transformer/esm5/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassTransformer: () => (/* reexport safe */ _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer),
/* harmony export */   Exclude: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Exclude),
/* harmony export */   Expose: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Expose),
/* harmony export */   Transform: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Transform),
/* harmony export */   TransformInstanceToInstance: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.TransformInstanceToInstance),
/* harmony export */   TransformInstanceToPlain: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.TransformInstanceToPlain),
/* harmony export */   TransformPlainToInstance: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.TransformPlainToInstance),
/* harmony export */   TransformationType: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_2__.TransformationType),
/* harmony export */   Type: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Type),
/* harmony export */   classToClassFromExist: () => (/* binding */ classToClassFromExist),
/* harmony export */   classToPlain: () => (/* binding */ classToPlain),
/* harmony export */   classToPlainFromExist: () => (/* binding */ classToPlainFromExist),
/* harmony export */   deserialize: () => (/* binding */ deserialize),
/* harmony export */   deserializeArray: () => (/* binding */ deserializeArray),
/* harmony export */   instanceToInstance: () => (/* binding */ instanceToInstance),
/* harmony export */   instanceToPlain: () => (/* binding */ instanceToPlain),
/* harmony export */   plainToClass: () => (/* binding */ plainToClass),
/* harmony export */   plainToClassFromExist: () => (/* binding */ plainToClassFromExist),
/* harmony export */   plainToInstance: () => (/* binding */ plainToInstance),
/* harmony export */   serialize: () => (/* binding */ serialize)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassTransformer */ "../node_modules/class-transformer/esm5/ClassTransformer.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ "../node_modules/class-transformer/esm5/decorators/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "../node_modules/class-transformer/esm5/enums/index.js");





var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
function classToPlain(object, options) {
    return classTransformer.instanceToPlain(object, options);
}
function instanceToPlain(object, options) {
    return classTransformer.instanceToPlain(object, options);
}
function classToPlainFromExist(object, plainObject, options) {
    return classTransformer.classToPlainFromExist(object, plainObject, options);
}
function plainToClass(cls, plain, options) {
    return classTransformer.plainToInstance(cls, plain, options);
}
function plainToInstance(cls, plain, options) {
    return classTransformer.plainToInstance(cls, plain, options);
}
function plainToClassFromExist(clsObject, plain, options) {
    return classTransformer.plainToClassFromExist(clsObject, plain, options);
}
function instanceToInstance(object, options) {
    return classTransformer.instanceToInstance(object, options);
}
function classToClassFromExist(object, fromObject, options) {
    return classTransformer.classToClassFromExist(object, fromObject, options);
}
function serialize(object, options) {
    return classTransformer.serialize(object, options);
}
/**
 * Deserializes given JSON string to a object of the given class.
 *
 * @deprecated This function is being removed. Please use the following instead:
 * ```
 * instanceToClass(cls, JSON.parse(json), options)
 * ```
 */
function deserialize(cls, json, options) {
    return classTransformer.deserialize(cls, json, options);
}
/**
 * Deserializes given JSON string to an array of objects of the given class.
 *
 * @deprecated This function is being removed. Please use the following instead:
 * ```
 * JSON.parse(json).map(value => instanceToClass(cls, value, options))
 * ```
 *
 */
function deserializeArray(cls, json, options) {
    return classTransformer.deserializeArray(cls, json, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/storage.js":
/*!*********************************************************!*\
  !*** ../node_modules/class-transformer/esm5/storage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMetadataStorage: () => (/* binding */ defaultMetadataStorage)
/* harmony export */ });
/* harmony import */ var _MetadataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataStorage */ "../node_modules/class-transformer/esm5/MetadataStorage.js");

/**
 * Default metadata storage is used as singleton and can be used to storage all metadatas.
 */
var defaultMetadataStorage = new _MetadataStorage__WEBPACK_IMPORTED_MODULE_0__.MetadataStorage();
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/utils/get-global.util.js":
/*!***********************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/utils/get-global.util.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGlobal: () => (/* binding */ getGlobal)
/* harmony export */ });
/**
 * This function returns the global object across Node and browsers.
 *
 * Note: `globalThis` is the standardized approach however it has been added to
 * Node.js in version 12. We need to include this snippet until Node 12 EOL.
 */
function getGlobal() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'window'.
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'window'.
        return window;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'self'.
    if (typeof self !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'self'.
        return self;
    }
}
//# sourceMappingURL=get-global.util.js.map

/***/ }),

/***/ "../node_modules/class-transformer/esm5/utils/is-promise.util.js":
/*!***********************************************************************!*\
  !*** ../node_modules/class-transformer/esm5/utils/is-promise.util.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
function isPromise(p) {
    return p !== null && typeof p === 'object' && typeof p.then === 'function';
}
//# sourceMappingURL=is-promise.util.js.map

/***/ }),

/***/ "../node_modules/es6-shim/es6-shim.js":
/*!********************************************!*\
  !*** ../node_modules/es6-shim/es6-shim.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/paulmillr/es6-shim
 * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
 *   and contributors,  MIT License
 * es6-shim: v0.35.4
 * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
 * Details and documentation:
 * https://github.com/paulmillr/es6-shim/
 */

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  /*global define */
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  'use strict';

  var _apply = Function.call.bind(Function.apply);
  var _call = Function.call.bind(Function.call);
  var isArray = Array.isArray;
  var keys = Object.keys;

  var not = function notThunker(func) {
    return function notThunk() {
      return !_apply(func, this, arguments);
    };
  };
  var throwsError = function (func) {
    try {
      func();
      return false;
    } catch (e) {
      return true;
    }
  };
  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
    try {
      return func();
    } catch (e) {
      return false;
    }
  };

  var isCallableWithoutNew = not(throwsError);
  var arePropertyDescriptorsSupported = function () {
    // if Object.defineProperty exists but throws, it's IE 8
    return !throwsError(function () {
      return Object.defineProperty({}, 'x', { get: function () { } }); // eslint-disable-line getter-return
    });
  };
  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
  var functionsHaveNames = (function foo() {}).name === 'foo';

  var _forEach = Function.call.bind(Array.prototype.forEach);
  var _reduce = Function.call.bind(Array.prototype.reduce);
  var _filter = Function.call.bind(Array.prototype.filter);
  var _some = Function.call.bind(Array.prototype.some);

  var defineProperty = function (object, name, value, force) {
    if (!force && name in object) { return; }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  // Define configurable, writable and non-enumerable props
  // if they don’t exist.
  var defineProperties = function (object, map, forceOverride) {
    _forEach(keys(map), function (name) {
      var method = map[name];
      defineProperty(object, name, method, !!forceOverride);
    });
  };

  var _toString = Function.call.bind(Object.prototype.toString);
  var isCallable =  false ? 0 : function IsCallableFast(x) { return typeof x === 'function'; };

  var Value = {
    getter: function (object, name, getter) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        get: getter
      });
    },
    proxy: function (originalObject, key, targetObject) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
      Object.defineProperty(targetObject, key, {
        configurable: originalDescriptor.configurable,
        enumerable: originalDescriptor.enumerable,
        get: function getKey() { return originalObject[key]; },
        set: function setKey(value) { originalObject[key] = value; }
      });
    },
    redefine: function (object, property, newValue) {
      if (supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(object, property);
        descriptor.value = newValue;
        Object.defineProperty(object, property, descriptor);
      } else {
        object[property] = newValue;
      }
    },
    defineByDescriptor: function (object, property, descriptor) {
      if (supportsDescriptors) {
        Object.defineProperty(object, property, descriptor);
      } else if ('value' in descriptor) {
        object[property] = descriptor.value;
      }
    },
    preserveToString: function (target, source) {
      if (source && isCallable(source.toString)) {
        defineProperty(target, 'toString', source.toString.bind(source), true);
      }
    }
  };

  // Simple shim for Object.create on ES3 browsers
  // (unlike real shim, no attempt to support `prototype === null`)
  var create = Object.create || function (prototype, properties) {
    var Prototype = function Prototype() {};
    Prototype.prototype = prototype;
    var object = new Prototype();
    if (typeof properties !== 'undefined') {
      keys(properties).forEach(function (key) {
        Value.defineByDescriptor(object, key, properties[key]);
      });
    }
    return object;
  };

  var supportsSubclassing = function (C, f) {
    if (!Object.setPrototypeOf) { return false; /* skip test on IE < 11 */ }
    return valueOrFalseIfThrows(function () {
      var Sub = function Subclass(arg) {
        var o = new C(arg);
        Object.setPrototypeOf(o, Subclass.prototype);
        return o;
      };
      Object.setPrototypeOf(Sub, C);
      Sub.prototype = create(C.prototype, {
        constructor: { value: Sub }
      });
      return f(Sub);
    });
  };

  var getGlobal = function () {
    /* global self, window */
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof __webpack_require__.g !== 'undefined') { return __webpack_require__.g; }
    throw new Error('unable to locate global object');
  };

  var globals = getGlobal();
  var globalIsFinite = globals.isFinite;
  var _indexOf = Function.call.bind(String.prototype.indexOf);
  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
  var _concat = Function.call.bind(Array.prototype.concat);
  // var _sort = Function.call.bind(Array.prototype.sort);
  var _strSlice = Function.call.bind(String.prototype.slice);
  var _push = Function.call.bind(Array.prototype.push);
  var _pushApply = Function.apply.bind(Array.prototype.push);
  var _join = Function.call.bind(Array.prototype.join);
  var _shift = Function.call.bind(Array.prototype.shift);
  var _max = Math.max;
  var _min = Math.min;
  var _floor = Math.floor;
  var _abs = Math.abs;
  var _exp = Math.exp;
  var _log = Math.log;
  var _sqrt = Math.sqrt;
  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
  var ArrayIterator; // make our implementation private
  var noop = function () {};

  var OrigMap = globals.Map;
  var origMapDelete = OrigMap && OrigMap.prototype['delete'];
  var origMapGet = OrigMap && OrigMap.prototype.get;
  var origMapHas = OrigMap && OrigMap.prototype.has;
  var origMapSet = OrigMap && OrigMap.prototype.set;

  var Symbol = globals.Symbol || {};
  var symbolSpecies = Symbol.species || '@@species';

  var numberIsNaN = Number.isNaN || function isNaN(value) {
    // NaN !== NaN, but they are identical.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN('foo') => true
    return value !== value;
  };
  var numberIsFinite = Number.isFinite || function isFinite(value) {
    return typeof value === 'number' && globalIsFinite(value);
  };
  var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
    var number = Number(value);
    if (number === 0) { return number; }
    if (numberIsNaN(number)) { return number; }
    return number < 0 ? -1 : 1;
  };
  var _log1p = function log1p(value) {
    var x = Number(value);
    if (x < -1 || numberIsNaN(x)) { return NaN; }
    if (x === 0 || x === Infinity) { return x; }
    if (x === -1) { return -Infinity; }

    return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
  };

  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
  // can be replaced with require('is-arguments') if we ever use a build process instead
  var isStandardArguments = function isArguments(value) {
    return _toString(value) === '[object Arguments]';
  };
  var isLegacyArguments = function isArguments(value) {
    return value !== null
      && typeof value === 'object'
      && typeof value.length === 'number'
      && value.length >= 0
      && _toString(value) !== '[object Array]'
      && _toString(value.callee) === '[object Function]';
  };
  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

  var Type = {
    primitive: function (x) { return x === null || (typeof x !== 'function' && typeof x !== 'object'); },
    string: function (x) { return _toString(x) === '[object String]'; },
    regex: function (x) { return _toString(x) === '[object RegExp]'; },
    symbol: function (x) {
      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
    }
  };

  var overrideNative = function overrideNative(object, property, replacement) {
    var original = object[property];
    defineProperty(object, property, replacement, true);
    Value.preserveToString(object[property], original);
  };

  // eslint-disable-next-line no-restricted-properties
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());

  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
  // we're going to use an arbitrary _-prefixed name to make our shims
  // work properly with each other, even though we don't have full Iterator
  // support.  That is, `Array.from(map.keys())` will work, but we don't
  // pretend to export a "real" Iterator interface.
  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
  // Firefox ships a partial implementation using the name @@iterator.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
  // So use that name if we detect it.
  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }

  // Reflect
  if (!globals.Reflect) {
    defineProperty(globals, 'Reflect', {}, true);
  }
  var Reflect = globals.Reflect;

  var $String = String;

  /* global document */
  var domAll = (typeof document === 'undefined' || !document) ? null : document.all;
  var isNullOrUndefined = domAll == null ? function isNullOrUndefined(x) {
    return x == null;
  } : function isNullOrUndefinedAndNotDocumentAll(x) {
    return x == null && x !== domAll;
  };

  var ES = {
    // http://www.ecma-international.org/ecma-262/6.0/#sec-call
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!ES.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return _apply(F, V, args);
    },

    RequireObjectCoercible: function (x, optMessage) {
      if (isNullOrUndefined(x)) {
        throw new TypeError(optMessage || 'Cannot call method on ' + x);
      }
      return x;
    },

    // This might miss the "(non-standard exotic and does not implement
    // [[Call]])" case from
    // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation
    // but we can't find any evidence these objects exist in practice.
    // If we find some in the future, you could test `Object(x) === x`,
    // which is reliable according to
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject
    // but is not well optimized by runtimes and creates an object
    // whenever it returns false, and thus is very slow.
    TypeIsObject: function (x) {
      if (x === void 0 || x === null || x === true || x === false) {
        return false;
      }
      return typeof x === 'function' || typeof x === 'object' || x === domAll;
    },

    ToObject: function (o, optMessage) {
      return Object(ES.RequireObjectCoercible(o, optMessage));
    },

    IsCallable: isCallable,

    IsConstructor: function (x) {
      // We can't tell callables from constructors in ES5
      return ES.IsCallable(x);
    },

    ToInt32: function (x) {
      return ES.ToNumber(x) >> 0;
    },

    ToUint32: function (x) {
      return ES.ToNumber(x) >>> 0;
    },

    ToNumber: function (value) {
      if (hasSymbols && _toString(value) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return +value;
    },

    ToInteger: function (value) {
      var number = ES.ToNumber(value);
      if (numberIsNaN(number)) { return 0; }
      if (number === 0 || !numberIsFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * _floor(_abs(number));
    },

    ToLength: function (value) {
      var len = ES.ToInteger(value);
      if (len <= 0) { return 0; } // includes converting -0 to +0
      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
      return len;
    },

    SameValue: function (a, b) {
      if (a === b) {
        // 0 === -0, but they are not identical.
        if (a === 0) { return 1 / a === 1 / b; }
        return true;
      }
      return numberIsNaN(a) && numberIsNaN(b);
    },

    SameValueZero: function (a, b) {
      // same as SameValue except for SameValueZero(+0, -0) == true
      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
    },

    GetIterator: function (o) {
      if (isArguments(o)) {
        // special case support for `arguments`
        return new ArrayIterator(o, 'value');
      }
      var itFn = ES.GetMethod(o, $iterator$);
      if (!ES.IsCallable(itFn)) {
        // Better diagnostics if itFn is null or undefined
        throw new TypeError('value is not an iterable');
      }
      var it = ES.Call(itFn, o);
      if (!ES.TypeIsObject(it)) {
        throw new TypeError('bad iterator');
      }
      return it;
    },

    GetMethod: function (o, p) {
      var func = ES.ToObject(o)[p];
      if (isNullOrUndefined(func)) {
        return void 0;
      }
      if (!ES.IsCallable(func)) {
        throw new TypeError('Method not callable: ' + p);
      }
      return func;
    },

    IteratorComplete: function (iterResult) {
      return !!iterResult.done;
    },

    IteratorClose: function (iterator, completionIsThrow) {
      var returnMethod = ES.GetMethod(iterator, 'return');
      if (returnMethod === void 0) {
        return;
      }
      var innerResult, innerException;
      try {
        innerResult = ES.Call(returnMethod, iterator);
      } catch (e) {
        innerException = e;
      }
      if (completionIsThrow) {
        return;
      }
      if (innerException) {
        throw innerException;
      }
      if (!ES.TypeIsObject(innerResult)) {
        throw new TypeError("Iterator's return method returned a non-object.");
      }
    },

    IteratorNext: function (it) {
      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
      if (!ES.TypeIsObject(result)) {
        throw new TypeError('bad iterator');
      }
      return result;
    },

    IteratorStep: function (it) {
      var result = ES.IteratorNext(it);
      var done = ES.IteratorComplete(result);
      return done ? false : result;
    },

    Construct: function (C, args, newTarget, isES6internal) {
      var target = typeof newTarget === 'undefined' ? C : newTarget;

      if (!isES6internal && Reflect.construct) {
        // Try to use Reflect.construct if available
        return Reflect.construct(C, args, target);
      }
      // OK, we have to fake it.  This will only work if the
      // C.[[ConstructorKind]] == "base" -- but that's the only
      // kind we can make in ES5 code anyway.

      // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
      var proto = target.prototype;
      if (!ES.TypeIsObject(proto)) {
        proto = Object.prototype;
      }
      var obj = create(proto);
      // Call the constructor.
      var result = ES.Call(C, obj, args);
      return ES.TypeIsObject(result) ? result : obj;
    },

    SpeciesConstructor: function (O, defaultConstructor) {
      var C = O.constructor;
      if (C === void 0) {
        return defaultConstructor;
      }
      if (!ES.TypeIsObject(C)) {
        throw new TypeError('Bad constructor');
      }
      var S = C[symbolSpecies];
      if (isNullOrUndefined(S)) {
        return defaultConstructor;
      }
      if (!ES.IsConstructor(S)) {
        throw new TypeError('Bad @@species');
      }
      return S;
    },

    CreateHTML: function (string, tag, attribute, value) {
      var S = ES.ToString(string);
      var p1 = '<' + tag;
      if (attribute !== '') {
        var V = ES.ToString(value);
        var escapedV = V.replace(/"/g, '&quot;');
        p1 += ' ' + attribute + '="' + escapedV + '"';
      }
      var p2 = p1 + '>';
      var p3 = p2 + S;
      return p3 + '</' + tag + '>';
    },

    IsRegExp: function IsRegExp(argument) {
      if (!ES.TypeIsObject(argument)) {
        return false;
      }
      var isRegExp = argument[Symbol.match];
      if (typeof isRegExp !== 'undefined') {
        return !!isRegExp;
      }
      return Type.regex(argument);
    },

    ToString: function ToString(string) {
      if (hasSymbols && _toString(string) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return $String(string);
    }
  };

  // Well-known Symbol shims
  if (supportsDescriptors && hasSymbols) {
    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
      if (Type.symbol(Symbol[name])) {
        return Symbol[name];
      }
      // eslint-disable-next-line no-restricted-properties
      var sym = Symbol['for']('Symbol.' + name);
      Object.defineProperty(Symbol, name, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: sym
      });
      return sym;
    };
    if (!Type.symbol(Symbol.search)) {
      var symbolSearch = defineWellKnownSymbol('search');
      var originalSearch = String.prototype.search;
      defineProperty(RegExp.prototype, symbolSearch, function search(string) {
        return ES.Call(originalSearch, string, [this]);
      });
      var searchShim = function search(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(regexp)) {
          var searcher = ES.GetMethod(regexp, symbolSearch);
          if (typeof searcher !== 'undefined') {
            return ES.Call(searcher, regexp, [O]);
          }
        }
        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'search', searchShim);
    }
    if (!Type.symbol(Symbol.replace)) {
      var symbolReplace = defineWellKnownSymbol('replace');
      var originalReplace = String.prototype.replace;
      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
        return ES.Call(originalReplace, string, [this, replaceValue]);
      });
      var replaceShim = function replace(searchValue, replaceValue) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(searchValue)) {
          var replacer = ES.GetMethod(searchValue, symbolReplace);
          if (typeof replacer !== 'undefined') {
            return ES.Call(replacer, searchValue, [O, replaceValue]);
          }
        }
        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
      };
      overrideNative(String.prototype, 'replace', replaceShim);
    }
    if (!Type.symbol(Symbol.split)) {
      var symbolSplit = defineWellKnownSymbol('split');
      var originalSplit = String.prototype.split;
      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
        return ES.Call(originalSplit, string, [this, limit]);
      });
      var splitShim = function split(separator, limit) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(separator)) {
          var splitter = ES.GetMethod(separator, symbolSplit);
          if (typeof splitter !== 'undefined') {
            return ES.Call(splitter, separator, [O, limit]);
          }
        }
        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
      };
      overrideNative(String.prototype, 'split', splitShim);
    }
    var symbolMatchExists = Type.symbol(Symbol.match);
    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function () {
      // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.
      // Firefox 40 and below have Symbol.match but String#match works fine.
      var o = {};
      o[Symbol.match] = function () { return 42; };
      return 'a'.match(o) !== 42;
    }());
    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
      var symbolMatch = defineWellKnownSymbol('match');

      var originalMatch = String.prototype.match;
      defineProperty(RegExp.prototype, symbolMatch, function match(string) {
        return ES.Call(originalMatch, string, [this]);
      });

      var matchShim = function match(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(regexp)) {
          var matcher = ES.GetMethod(regexp, symbolMatch);
          if (typeof matcher !== 'undefined') {
            return ES.Call(matcher, regexp, [O]);
          }
        }
        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'match', matchShim);
    }
  }

  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
    Value.preserveToString(replacement, original);
    if (Object.setPrototypeOf) {
      // sets up proper prototype chain where possible
      Object.setPrototypeOf(original, replacement);
    }
    if (supportsDescriptors) {
      _forEach(Object.getOwnPropertyNames(original), function (key) {
        if (key in noop || keysToSkip[key]) { return; }
        Value.proxy(original, key, replacement);
      });
    } else {
      _forEach(Object.keys(original), function (key) {
        if (key in noop || keysToSkip[key]) { return; }
        replacement[key] = original[key];
      });
    }
    replacement.prototype = original.prototype;
    Value.redefine(original.prototype, 'constructor', replacement);
  };

  var defaultSpeciesGetter = function () { return this; };
  var addDefaultSpecies = function (C) {
    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
    }
  };

  var addIterator = function (prototype, impl) {
    var implementation = impl || function iterator() { return this; };
    defineProperty(prototype, $iterator$, implementation);
    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
      // implementations are buggy when $iterator$ is a Symbol
      prototype[$iterator$] = implementation;
    }
  };

  var createDataProperty = function createDataProperty(object, name, value) {
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };
  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
    createDataProperty(object, name, value);
    if (!ES.SameValue(object[name], value)) {
      throw new TypeError('property is nonconfigurable');
    }
  };

  var emulateES6construct = function (o, defaultNewTarget, defaultProto, slots) {
    // This is an es5 approximation to es6 construct semantics.  in es6,
    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
    // just sets the internal variable NewTarget (in es6 syntax `new.target`)
    // to Foo and then returns Foo().

    // Many ES6 object then have constructors of the form:
    // 1. If NewTarget is undefined, throw a TypeError exception
    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)

    // So we're going to emulate those first two steps.
    if (!ES.TypeIsObject(o)) {
      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
    }
    var proto = defaultNewTarget.prototype;
    if (!ES.TypeIsObject(proto)) {
      proto = defaultProto;
    }
    var obj = create(proto);
    for (var name in slots) {
      if (_hasOwnProperty(slots, name)) {
        var value = slots[name];
        defineProperty(obj, name, value, true);
      }
    }
    return obj;
  };

  // Firefox 31 reports this function's length as 0
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
    var originalFromCodePoint = String.fromCodePoint;
    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
      return ES.Call(originalFromCodePoint, this, arguments);
    });
  }

  var StringShims = {
    fromCodePoint: function fromCodePoint(codePoints) {
      var result = [];
      var next;
      for (var i = 0, length = arguments.length; i < length; i++) {
        next = Number(arguments[i]);
        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
          throw new RangeError('Invalid code point ' + next);
        }

        if (next < 0x10000) {
          _push(result, String.fromCharCode(next));
        } else {
          next -= 0x10000;
          _push(result, String.fromCharCode((next >> 10) + 0xD800));
          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
        }
      }
      return _join(result, '');
    },

    raw: function raw(template) {
      var numberOfSubstitutions = arguments.length - 1;
      var cooked = ES.ToObject(template, 'bad template');
      var raw = ES.ToObject(cooked.raw, 'bad raw value');
      var len = raw.length;
      var literalSegments = ES.ToLength(len);
      if (literalSegments <= 0) {
        return '';
      }

      var stringElements = [];
      var nextIndex = 0;
      var nextKey, next, nextSeg, nextSub;
      while (nextIndex < literalSegments) {
        nextKey = ES.ToString(nextIndex);
        nextSeg = ES.ToString(raw[nextKey]);
        _push(stringElements, nextSeg);
        if (nextIndex + 1 >= literalSegments) {
          break;
        }
        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
        nextSub = ES.ToString(next);
        _push(stringElements, nextSub);
        nextIndex += 1;
      }
      return _join(stringElements, '');
    }
  };
  if (String.raw && String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {
    // IE 11 TP has a broken String.raw implementation
    overrideNative(String, 'raw', StringShims.raw);
  }
  defineProperties(String, StringShims);

  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
  // Perf: http://jsperf.com/string-repeat2/2
  var stringRepeat = function repeat(s, times) {
    if (times < 1) { return ''; }
    if (times % 2) { return repeat(s, times - 1) + s; }
    var half = repeat(s, times / 2);
    return half + half;
  };
  var stringMaxLength = Infinity;

  var StringPrototypeShims = {
    repeat: function repeat(times) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var numTimes = ES.ToInteger(times);
      if (numTimes < 0 || numTimes >= stringMaxLength) {
        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
      }
      return stringRepeat(thisStr, numTimes);
    },

    startsWith: function startsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "startsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      var start = _max(ES.ToInteger(position), 0);
      return _strSlice(S, start, start + searchStr.length) === searchStr;
    },

    endsWith: function endsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "endsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var len = S.length;
      var endPosition;
      if (arguments.length > 1) {
        endPosition = arguments[1];
      }
      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
      var end = _min(_max(pos, 0), len);
      return _strSlice(S, end - searchStr.length, end) === searchStr;
    },

    includes: function includes(searchString) {
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('"includes" does not accept a RegExp');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      // Somehow this trick makes method 100% compat with the spec.
      return _indexOf(this, searchStr, position) !== -1;
    },

    codePointAt: function codePointAt(pos) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var position = ES.ToInteger(pos);
      var length = thisStr.length;
      if (position >= 0 && position < length) {
        var first = thisStr.charCodeAt(position);
        var isEnd = position + 1 === length;
        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
        var second = thisStr.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) { return first; }
        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
      }
    }
  };
  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
  }

  if (String.prototype.startsWith && String.prototype.endsWith) {
    var startsWithRejectsRegex = throwsError(function () {
      /* throws if spec-compliant */
      return '/a/'.startsWith(/a/);
    });
    var startsWithHandlesInfinity = valueOrFalseIfThrows(function () {
      return 'abc'.startsWith('a', Infinity) === false;
    });
    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
      // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
  }
  if (hasSymbols) {
    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.startsWith(re);
    });
    if (!startsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
    }
    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.endsWith(re);
    });
    if (!endsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function () {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.includes(re);
    });
    if (!includesSupportsSymbolMatch) {
      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
    }
  }

  defineProperties(String.prototype, StringPrototypeShims);

  // whitespace from: http://es5.github.io/#x15.5.4.20
  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
  var ws = [
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
    '\u2029\uFEFF'
  ].join('');
  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
  var trimShim = function trim() {
    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
  };
  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
  var isBadHexRegex = /^[-+]0x[0-9a-f]+$/i;
  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);

  // Given an argument x, it will return an IteratorResult object,
  // with value set to x and done to false.
  // Given no arguments, it will return an iterator completion object.
  var iteratorResult = function (x) {
    return { value: x, done: arguments.length === 0 };
  };

  // see http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator
  var StringIterator = function (s) {
    ES.RequireObjectCoercible(s);
    defineProperty(this, '_s', ES.ToString(s));
    defineProperty(this, '_i', 0);
  };
  StringIterator.prototype.next = function () {
    var s = this._s;
    var i = this._i;
    if (typeof s === 'undefined' || i >= s.length) {
      this._s = void 0;
      return iteratorResult();
    }
    var first = s.charCodeAt(i);
    var second, len;
    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
      len = 1;
    } else {
      second = s.charCodeAt(i + 1);
      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
    }
    this._i = i + len;
    return iteratorResult(s.substr(i, len));
  };
  addIterator(StringIterator.prototype);
  addIterator(String.prototype, function () {
    return new StringIterator(this);
  });

  var ArrayShims = {
    from: function from(items) {
      var C = this;
      var mapFn;
      if (arguments.length > 1) {
        mapFn = arguments[1];
      }
      var mapping, T;
      if (typeof mapFn === 'undefined') {
        mapping = false;
      } else {
        if (!ES.IsCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
        mapping = true;
      }

      // Note that that Arrays will use ArrayIterator:
      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
      var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';

      var length, result, i;
      if (usingIterator) {
        result = ES.IsConstructor(C) ? Object(new C()) : [];
        var iterator = ES.GetIterator(items);
        var next, nextValue;

        i = 0;
        while (true) {
          next = ES.IteratorStep(iterator);
          if (next === false) {
            break;
          }
          nextValue = next.value;
          try {
            if (mapping) {
              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
            }
            result[i] = nextValue;
          } catch (e) {
            ES.IteratorClose(iterator, true);
            throw e;
          }
          i += 1;
        }
        length = i;
      } else {
        var arrayLike = ES.ToObject(items);
        length = ES.ToLength(arrayLike.length);
        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
        var value;
        for (i = 0; i < length; ++i) {
          value = arrayLike[i];
          if (mapping) {
            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
          }
          createDataPropertyOrThrow(result, i, value);
        }
      }

      result.length = length;
      return result;
    },

    of: function of() {
      var len = arguments.length;
      var C = this;
      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
      for (var k = 0; k < len; ++k) {
        createDataPropertyOrThrow(A, k, arguments[k]);
      }
      A.length = len;
      return A;
    }
  };
  defineProperties(Array, ArrayShims);
  addDefaultSpecies(Array);

  // Our ArrayIterator is private; see
  // https://github.com/paulmillr/es6-shim/issues/252
  ArrayIterator = function (array, kind) {
    defineProperty(this, 'i', 0);
    defineProperty(this, 'array', array);
    defineProperty(this, 'kind', kind);
  };

  defineProperties(ArrayIterator.prototype, {
    next: function () {
      var i = this.i;
      var array = this.array;
      if (!(this instanceof ArrayIterator)) {
        throw new TypeError('Not an ArrayIterator');
      }
      if (typeof array !== 'undefined') {
        var len = ES.ToLength(array.length);
        if (i < len) {
        //for (; i < len; i++) {
          var kind = this.kind;
          var retval;
          if (kind === 'key') {
            retval = i;
          } else if (kind === 'value') {
            retval = array[i];
          } else if (kind === 'entry') {
            retval = [i, array[i]];
          }
          this.i = i + 1;
          return iteratorResult(retval);
        }
      }
      this.array = void 0;
      return iteratorResult();
    }
  });
  addIterator(ArrayIterator.prototype);

  /*
  var orderKeys = function orderKeys(a, b) {
    var aNumeric = String(ES.ToInteger(a)) === a;
    var bNumeric = String(ES.ToInteger(b)) === b;
    if (aNumeric && bNumeric) {
      return b - a;
    } else if (aNumeric && !bNumeric) {
      return -1;
    } else if (!aNumeric && bNumeric) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  };

  var getAllKeys = function getAllKeys(object) {
    var ownKeys = [];
    var keys = [];

    for (var key in object) {
      _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);
    }
    _sort(ownKeys, orderKeys);
    _sort(keys, orderKeys);

    return _concat(ownKeys, keys);
  };
  */

  // note: this is positioned here because it depends on ArrayIterator
  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function () {
    // Detects a bug in Webkit nightly r181886
    var Foo = function Foo(len) { this.length = len; };
    Foo.prototype = [];
    var fooArr = Array.of.apply(Foo, [1, 2]);
    return fooArr instanceof Foo && fooArr.length === 2;
  }());
  if (!arrayOfSupportsSubclassing) {
    overrideNative(Array, 'of', ArrayShims.of);
  }

  var ArrayPrototypeShims = {
    copyWithin: function copyWithin(target, start) {
      var o = ES.ToObject(this);
      var len = ES.ToLength(o.length);
      var relativeTarget = ES.ToInteger(target);
      var relativeStart = ES.ToInteger(start);
      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
      var count = _min(finalItem - from, len - to);
      var direction = 1;
      if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count > 0) {
        if (from in o) {
          o[to] = o[from];
        } else {
          delete o[to];
        }
        from += direction;
        to += direction;
        count -= 1;
      }
      return o;
    },

    fill: function fill(value) {
      var start;
      if (arguments.length > 1) {
        start = arguments[1];
      }
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var O = ES.ToObject(this);
      var len = ES.ToLength(O.length);
      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
      end = ES.ToInteger(typeof end === 'undefined' ? len : end);

      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
      var relativeEnd = end < 0 ? len + end : end;

      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
        O[i] = value;
      }
      return O;
    },

    find: function find(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#find: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0, value; i < length; i++) {
        value = list[i];
        if (thisArg) {
          if (_call(predicate, thisArg, value, i, list)) {
            return value;
          }
        } else if (predicate(value, i, list)) {
          return value;
        }
      }
    },

    findIndex: function findIndex(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#findIndex: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0; i < length; i++) {
        if (thisArg) {
          if (_call(predicate, thisArg, list[i], i, list)) {
            return i;
          }
        } else if (predicate(list[i], i, list)) {
          return i;
        }
      }
      return -1;
    },

    keys: function keys() {
      return new ArrayIterator(this, 'key');
    },

    values: function values() {
      return new ArrayIterator(this, 'value');
    },

    entries: function entries() {
      return new ArrayIterator(this, 'entry');
    }
  };
  // Safari 7.1 defines Array#keys and Array#entries natively,
  // but the resulting ArrayIterator objects don't have a "next" method.
  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
    delete Array.prototype.keys;
  }
  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
    delete Array.prototype.entries;
  }

  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
    defineProperties(Array.prototype, {
      values: Array.prototype[$iterator$]
    });
    if (Type.symbol(Symbol.unscopables)) {
      Array.prototype[Symbol.unscopables].values = true;
    }
  }
  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
    var originalArrayPrototypeValues = Array.prototype.values;
    overrideNative(Array.prototype, 'values', function values() { return ES.Call(originalArrayPrototypeValues, this, arguments); });
    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
  }
  defineProperties(Array.prototype, ArrayPrototypeShims);

  if (1 / [true].indexOf(true, -0) < 0) {
    // indexOf when given a position arg of -0 should return +0.
    // https://github.com/tc39/ecma262/pull/316
    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
      var value = _arrayIndexOfApply(this, arguments);
      if (value === 0 && (1 / value) < 0) {
        return 0;
      }
      return value;
    }, true);
  }

  addIterator(Array.prototype, function () { return this.values(); });
  // Chrome defines keys/values/entries on Array, but doesn't give us
  // any way to identify its iterator.  So add our own shimmed field.
  if (Object.getPrototypeOf) {
    var ChromeArrayIterator = Object.getPrototypeOf([].values());
    if (ChromeArrayIterator) { // in WSH, this is `undefined`
      addIterator(ChromeArrayIterator);
    }
  }

  // note: this is positioned here because it relies on Array#entries
  var arrayFromSwallowsNegativeLengths = (function () {
    // Detects a Firefox bug in v32
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
    return valueOrFalseIfThrows(function () {
      return Array.from({ length: -1 }).length === 0;
    });
  }());
  var arrayFromHandlesIterables = (function () {
    // Detects a bug in Webkit nightly r181886
    var arr = Array.from([0].entries());
    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
  }());
  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
    overrideNative(Array, 'from', ArrayShims.from);
  }
  var arrayFromHandlesUndefinedMapFunction = (function () {
    // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
    // but the spec doesn't care if it's provided or not - undefined doesn't throw.
    return valueOrFalseIfThrows(function () {
      return Array.from([0], void 0);
    });
  }());
  if (!arrayFromHandlesUndefinedMapFunction) {
    var origArrayFrom = Array.from;
    overrideNative(Array, 'from', function from(items) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        return ES.Call(origArrayFrom, this, arguments);
      }
      return _call(origArrayFrom, this, items);

    });
  }

  var int32sAsOne = -(Math.pow(2, 32) - 1);
  var toLengthsCorrectly = function (method, reversed) {
    var obj = { length: int32sAsOne };
    obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
    return valueOrFalseIfThrows(function () {
      _call(method, obj, function () {
        // note: in nonconforming browsers, this will be called
        // -1 >>> 0 times, which is 4294967295, so the throw matters.
        throw new RangeError('should not reach here');
      }, []);
      return true;
    });
  };
  if (!toLengthsCorrectly(Array.prototype.forEach)) {
    var originalForEach = Array.prototype.forEach;
    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!toLengthsCorrectly(Array.prototype.map)) {
    var originalMap = Array.prototype.map;
    overrideNative(Array.prototype, 'map', function map(callbackFn) {
      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!toLengthsCorrectly(Array.prototype.filter)) {
    var originalFilter = Array.prototype.filter;
    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!toLengthsCorrectly(Array.prototype.some)) {
    var originalSome = Array.prototype.some;
    overrideNative(Array.prototype, 'some', function some(callbackFn) {
      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!toLengthsCorrectly(Array.prototype.every)) {
    var originalEvery = Array.prototype.every;
    overrideNative(Array.prototype, 'every', function every(callbackFn) {
      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!toLengthsCorrectly(Array.prototype.reduce)) {
    var originalReduce = Array.prototype.reduce;
    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
    });
  }
  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
    var originalReduceRight = Array.prototype.reduceRight;
    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
    });
  }

  var lacksOctalSupport = Number('0o10') !== 8;
  var lacksBinarySupport = Number('0b10') !== 2;
  var trimsNonWhitespace = _some(nonWS, function (c) {
    return Number(c + 0 + c) === 0;
  });
  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
    var OrigNumber = Number;
    var binaryRegex = /^0b[01]+$/i;
    var octalRegex = /^0o[0-7]+$/i;
    // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
    var isBinary = binaryRegex.test.bind(binaryRegex);
    var isOctal = octalRegex.test.bind(octalRegex);
    var toPrimitive = function (O, hint) { // need to replace this with `es-to-primitive/es6`
      var result;
      if (typeof O.valueOf === 'function') {
        result = O.valueOf();
        if (Type.primitive(result)) {
          return result;
        }
      }
      if (typeof O.toString === 'function') {
        result = O.toString();
        if (Type.primitive(result)) {
          return result;
        }
      }
      throw new TypeError('No default value');
    };
    var hasNonWS = nonWSregex.test.bind(nonWSregex);
    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
    var NumberShim = (function () {
      // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
      var NumberShim = function Number(value) {
        var primValue;
        if (arguments.length > 0) {
          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
        } else {
          primValue = 0;
        }
        if (typeof primValue === 'string') {
          primValue = ES.Call(trimShim, primValue);
          if (isBinary(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 2);
          } else if (isOctal(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 8);
          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
            primValue = NaN;
          }
        }
        var receiver = this;
        var valueOfSucceeds = valueOrFalseIfThrows(function () {
          OrigNumber.prototype.valueOf.call(receiver);
          return true;
        });
        if (receiver instanceof NumberShim && !valueOfSucceeds) {
          return new OrigNumber(primValue);
        }
        return OrigNumber(primValue);
      };
      return NumberShim;
    }());
    wrapConstructor(OrigNumber, NumberShim, {});
    // this is necessary for ES3 browsers, where these properties are non-enumerable.
    defineProperties(NumberShim, {
      NaN: OrigNumber.NaN,
      MAX_VALUE: OrigNumber.MAX_VALUE,
      MIN_VALUE: OrigNumber.MIN_VALUE,
      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
    });
    Number = NumberShim; // eslint-disable-line no-global-assign
    Value.redefine(globals, 'Number', NumberShim);
  }

  var maxSafeInteger = Math.pow(2, 53) - 1;
  defineProperties(Number, {
    MAX_SAFE_INTEGER: maxSafeInteger,
    MIN_SAFE_INTEGER: -maxSafeInteger,
    EPSILON: 2.220446049250313e-16,

    parseInt: globals.parseInt,
    parseFloat: globals.parseFloat,

    isFinite: numberIsFinite,

    isInteger: function isInteger(value) {
      return numberIsFinite(value) && ES.ToInteger(value) === value;
    },

    isSafeInteger: function isSafeInteger(value) {
      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
    },

    isNaN: numberIsNaN
  });
  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);

  // Work around bugs in Array#find and Array#findIndex -- early
  // implementations skipped holes in sparse arrays. (Note that the
  // implementations of find/findIndex indirectly use shimmed
  // methods of Number, so this test has to happen down here.)
  /* eslint-disable no-sparse-arrays */
  if ([, 1].find(function () { return true; }) === 1) {
    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
  }
  if ([, 1].findIndex(function () { return true; }) !== 0) {
    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
  }
  /* eslint-enable no-sparse-arrays */

  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
  var ensureEnumerable = function ensureEnumerable(obj, prop) {
    if (supportsDescriptors && isEnumerableOn(obj, prop)) {
      Object.defineProperty(obj, prop, { enumerable: false });
    }
  };
  var sliceArgs = function sliceArgs() {
    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
    var initial = Number(this);
    var len = arguments.length;
    var desiredArgCount = len - initial;
    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
    for (var i = initial; i < len; ++i) {
      args[i - initial] = arguments[i];
    }
    return args;
  };
  var assignTo = function assignTo(source) {
    return function assignToSource(target, key) {
      target[key] = source[key];
      return target;
    };
  };
  var assignReducer = function (target, source) {
    var sourceKeys = keys(Object(source));
    var symbols;
    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
    }
    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
  };

  var ObjectShims = {
    // 19.1.3.1
    assign: function (target, source) {
      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
    },

    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
    is: function is(a, b) {
      return ES.SameValue(a, b);
    }
  };
  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function () {
    // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
    // which is 72% slower than our shim, and Firefox 40's native implementation.
    var thrower = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }
  }());
  if (assignHasPendingExceptions) {
    overrideNative(Object, 'assign', ObjectShims.assign);
  }
  defineProperties(Object, ObjectShims);

  if (supportsDescriptors) {
    var ES5ObjectShims = {
      // 19.1.3.9
      // shim from https://gist.github.com/WebReflection/5593554
      setPrototypeOf: (function (Object) {
        var set;

        var checkArgs = function (O, proto) {
          if (!ES.TypeIsObject(O)) {
            throw new TypeError('cannot set prototype on a non-object');
          }
          if (!(proto === null || ES.TypeIsObject(proto))) {
            throw new TypeError('can only set prototype to an object or null' + proto);
          }
        };

        var setPrototypeOf = function (O, proto) {
          checkArgs(O, proto);
          _call(set, O, proto);
          return O;
        };

        try {
          // this works already in Firefox and Safari
          set = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          _call(set, {}, null);
        } catch (e) {
          if (Object.prototype !== ({}).__proto__) { // eslint-disable-line no-proto
            // IE < 11 cannot be shimmed
            return;
          }
          // probably Chrome or some old Mobile stock browser
          set = function (proto) {
            this.__proto__ = proto; // eslint-disable-line no-proto
          };
          // please note that this will **not** work
          // in those browsers that do not inherit
          // __proto__ by mistake from Object.prototype
          // in these cases we should probably throw an error
          // or at least be informed about the issue
          setPrototypeOf.polyfill = setPrototypeOf(
            setPrototypeOf({}, null),
            Object.prototype
          ) instanceof Object;
          // setPrototypeOf.polyfill === true means it works as meant
          // setPrototypeOf.polyfill === false means it's not 100% reliable
          // setPrototypeOf.polyfill === undefined
          // or
          // setPrototypeOf.polyfill ==  null means it's not a polyfill
          // which means it works as expected
          // we can even delete Object.prototype.__proto__;
        }
        return setPrototypeOf;
      }(Object))
    };

    defineProperties(Object, ES5ObjectShims);
  }

  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
  // but Object.create(null) does.
  if (
    Object.setPrototypeOf
    && Object.getPrototypeOf
    && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null
    && Object.getPrototypeOf(Object.create(null)) === null
  ) {
    (function () {
      var FAKENULL = Object.create(null);
      var gpo = Object.getPrototypeOf;
      var spo = Object.setPrototypeOf;
      Object.getPrototypeOf = function (o) {
        var result = gpo(o);
        return result === FAKENULL ? null : result;
      };
      Object.setPrototypeOf = function (o, p) {
        var proto = p === null ? FAKENULL : p;
        return spo(o, proto);
      };
      Object.setPrototypeOf.polyfill = false;
    }());
  }

  var objectKeysAcceptsPrimitives = !throwsError(function () { return Object.keys('foo'); });
  if (!objectKeysAcceptsPrimitives) {
    var originalObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      return originalObjectKeys(ES.ToObject(value));
    });
    keys = Object.keys;
  }
  var objectKeysRejectsRegex = throwsError(function () { return Object.keys(/a/g); });
  if (objectKeysRejectsRegex) {
    var regexRejectingObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      if (Type.regex(value)) {
        var regexKeys = [];
        for (var k in value) {
          if (_hasOwnProperty(value, k)) {
            _push(regexKeys, k);
          }
        }
        return regexKeys;
      }
      return regexRejectingObjectKeys(value);
    });
    keys = Object.keys;
  }

  if (Object.getOwnPropertyNames) {
    var objectGOPNAcceptsPrimitives = !throwsError(function () { return Object.getOwnPropertyNames('foo'); });
    if (!objectGOPNAcceptsPrimitives) {
      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
        var val = ES.ToObject(value);
        if (_toString(val) === '[object Window]') {
          try {
            return originalObjectGetOwnPropertyNames(val);
          } catch (e) {
            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
            return _concat([], cachedWindowNames);
          }
        }
        return originalObjectGetOwnPropertyNames(val);
      });
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    var objectGOPDAcceptsPrimitives = !throwsError(function () { return Object.getOwnPropertyDescriptor('foo', 'bar'); });
    if (!objectGOPDAcceptsPrimitives) {
      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
      });
    }
  }
  if (Object.seal) {
    var objectSealAcceptsPrimitives = !throwsError(function () { return Object.seal('foo'); });
    if (!objectSealAcceptsPrimitives) {
      var originalObjectSeal = Object.seal;
      overrideNative(Object, 'seal', function seal(value) {
        if (!ES.TypeIsObject(value)) { return value; }
        return originalObjectSeal(value);
      });
    }
  }
  if (Object.isSealed) {
    var objectIsSealedAcceptsPrimitives = !throwsError(function () { return Object.isSealed('foo'); });
    if (!objectIsSealedAcceptsPrimitives) {
      var originalObjectIsSealed = Object.isSealed;
      overrideNative(Object, 'isSealed', function isSealed(value) {
        if (!ES.TypeIsObject(value)) { return true; }
        return originalObjectIsSealed(value);
      });
    }
  }
  if (Object.freeze) {
    var objectFreezeAcceptsPrimitives = !throwsError(function () { return Object.freeze('foo'); });
    if (!objectFreezeAcceptsPrimitives) {
      var originalObjectFreeze = Object.freeze;
      overrideNative(Object, 'freeze', function freeze(value) {
        if (!ES.TypeIsObject(value)) { return value; }
        return originalObjectFreeze(value);
      });
    }
  }
  if (Object.isFrozen) {
    var objectIsFrozenAcceptsPrimitives = !throwsError(function () { return Object.isFrozen('foo'); });
    if (!objectIsFrozenAcceptsPrimitives) {
      var originalObjectIsFrozen = Object.isFrozen;
      overrideNative(Object, 'isFrozen', function isFrozen(value) {
        if (!ES.TypeIsObject(value)) { return true; }
        return originalObjectIsFrozen(value);
      });
    }
  }
  if (Object.preventExtensions) {
    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () { return Object.preventExtensions('foo'); });
    if (!objectPreventExtensionsAcceptsPrimitives) {
      var originalObjectPreventExtensions = Object.preventExtensions;
      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
        if (!ES.TypeIsObject(value)) { return value; }
        return originalObjectPreventExtensions(value);
      });
    }
  }
  if (Object.isExtensible) {
    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () { return Object.isExtensible('foo'); });
    if (!objectIsExtensibleAcceptsPrimitives) {
      var originalObjectIsExtensible = Object.isExtensible;
      overrideNative(Object, 'isExtensible', function isExtensible(value) {
        if (!ES.TypeIsObject(value)) { return false; }
        return originalObjectIsExtensible(value);
      });
    }
  }
  if (Object.getPrototypeOf) {
    var objectGetProtoAcceptsPrimitives = !throwsError(function () { return Object.getPrototypeOf('foo'); });
    if (!objectGetProtoAcceptsPrimitives) {
      var originalGetProto = Object.getPrototypeOf;
      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
        return originalGetProto(ES.ToObject(value));
      });
    }
  }

  var hasFlags = supportsDescriptors && (function () {
    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
    return desc && ES.IsCallable(desc.get);
  }());
  if (supportsDescriptors && !hasFlags) {
    var regExpFlagsGetter = function flags() {
      if (!ES.TypeIsObject(this)) {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      var result = '';
      if (this.global) {
        result += 'g';
      }
      if (this.ignoreCase) {
        result += 'i';
      }
      if (this.multiline) {
        result += 'm';
      }
      if (this.unicode) {
        result += 'u';
      }
      if (this.sticky) {
        result += 'y';
      }
      return result;
    };

    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
  }

  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function () {
    return String(new RegExp(/a/g, 'i')) === '/a/i';
  });
  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function () {
    // Edge 0.12 supports flags fully, but does not support Symbol.match
    var regex = /./;
    regex[Symbol.match] = false;
    return RegExp(regex) === regex;
  }());

  var regexToStringIsGeneric = valueOrFalseIfThrows(function () {
    return RegExp.prototype.toString.call({ source: 'abc' }) === '/abc/';
  });
  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function () {
    return RegExp.prototype.toString.call({ source: 'a', flags: 'b' }) === '/a/b';
  });
  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
    var origRegExpToString = RegExp.prototype.toString;
    defineProperty(RegExp.prototype, 'toString', function toString() {
      var R = ES.RequireObjectCoercible(this);
      if (Type.regex(R)) {
        return _call(origRegExpToString, R);
      }
      var pattern = $String(R.source);
      var flags = $String(R.flags);
      return '/' + pattern + '/' + flags;
    }, true);
    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
    RegExp.prototype.toString.prototype = void 0;
  }

  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
    var legacySourceGetter = function () {
      // prior to it being a getter, it's own + nonconfigurable
      return this.source;
    };
    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;

    var OrigRegExp = RegExp;
    var RegExpShim = (function () {
      return function RegExp(pattern, flags) {
        var patternIsRegExp = ES.IsRegExp(pattern);
        var calledWithNew = this instanceof RegExp;
        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
          return pattern;
        }

        var P = pattern;
        var F = flags;
        if (Type.regex(pattern)) {
          P = ES.Call(sourceGetter, pattern);
          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
          return new RegExp(P, F);
        } else if (patternIsRegExp) {
          P = pattern.source;
          F = typeof flags === 'undefined' ? pattern.flags : flags;
        }
        return new OrigRegExp(pattern, flags);
      };
    }());
    wrapConstructor(OrigRegExp, RegExpShim, {
      $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
    });
    RegExp = RegExpShim; // eslint-disable-line no-global-assign
    Value.redefine(globals, 'RegExp', RegExpShim);
  }

  if (supportsDescriptors) {
    var regexGlobals = {
      input: '$_',
      lastMatch: '$&',
      lastParen: '$+',
      leftContext: '$`',
      rightContext: '$\''
    };
    _forEach(keys(regexGlobals), function (prop) {
      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
        Value.getter(RegExp, regexGlobals[prop], function get() {
          return RegExp[prop];
        });
      }
    });
  }
  addDefaultSpecies(RegExp);

  var inverseEpsilon = 1 / Number.EPSILON;
  var roundTiesToEven = function roundTiesToEven(n) {
    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
    return (n + inverseEpsilon) - inverseEpsilon;
  };
  var BINARY_32_EPSILON = Math.pow(2, -23);
  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
  var E = Math.E;
  var LOG2E = Math.LOG2E;
  var LOG10E = Math.LOG10E;
  var numberCLZ = Number.prototype.clz;
  delete Number.prototype.clz; // Safari 8 has Number#clz

  var MathShims = {
    acosh: function acosh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || value < 1) { return NaN; }
      if (x === 1) { return 0; }
      if (x === Infinity) { return x; }

      var xInvSquared = 1 / (x * x);
      if (x < 2) {
        return _log1p(x - 1 + (_sqrt(1 - xInvSquared) * x));
      }
      var halfX = x / 2;
      return _log1p(halfX + (_sqrt(1 - xInvSquared) * halfX) - 1) + (1 / LOG2E);
    },

    asinh: function asinh(value) {
      var x = Number(value);
      if (x === 0 || !globalIsFinite(x)) {
        return x;
      }

      var a = _abs(x);
      var aSquared = a * a;
      var s = _sign(x);
      if (a < 1) {
        return s * _log1p(a + (aSquared / (_sqrt(aSquared + 1) + 1)));
      }
      return s * (_log1p((a / 2) + (_sqrt(1 + (1 / aSquared)) * a / 2) - 1) + (1 / LOG2E));
    },

    atanh: function atanh(value) {
      var x = Number(value);

      if (x === 0) { return x; }
      if (x === -1) { return -Infinity; }
      if (x === 1) { return Infinity; }
      if (numberIsNaN(x) || x < -1 || x > 1) {
        return NaN;
      }

      var a = _abs(x);
      return _sign(x) * _log1p(2 * a / (1 - a)) / 2;
    },

    cbrt: function cbrt(value) {
      var x = Number(value);
      if (x === 0) { return x; }
      var negate = x < 0;
      var result;
      if (negate) { x = -x; }
      if (x === Infinity) {
        result = Infinity;
      } else {
        result = _exp(_log(x) / 3);
        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
        result = ((x / (result * result)) + (2 * result)) / 3;
      }
      return negate ? -result : result;
    },

    clz32: function clz32(value) {
      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
      var x = Number(value);
      var number = ES.ToUint32(x);
      if (number === 0) {
        return 32;
      }
      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
    },

    cosh: function cosh(value) {
      var x = Number(value);
      if (x === 0) { return 1; } // +0 or -0
      if (numberIsNaN(x)) { return NaN; }
      if (!globalIsFinite(x)) { return Infinity; }

      var t = _exp(_abs(x) - 1);
      return (t + (1 / (t * E * E))) * (E / 2);
    },

    expm1: function expm1(value) {
      var x = Number(value);
      if (x === -Infinity) { return -1; }
      if (!globalIsFinite(x) || x === 0) { return x; }
      if (_abs(x) > 0.5) {
        return _exp(x) - 1;
      }
      // A more precise approximation using Taylor series expansion
      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
      var t = x;
      var sum = 0;
      var n = 1;
      while (sum + t !== sum) {
        sum += t;
        n += 1;
        t *= x / n;
      }
      return sum;
    },

    hypot: function hypot(x, y) {
      var result = 0;
      var largest = 0;
      for (var i = 0; i < arguments.length; ++i) {
        var value = _abs(Number(arguments[i]));
        if (largest < value) {
          result *= (largest / value) * (largest / value);
          result += 1;
          largest = value;
        } else {
          result += value > 0 ? (value / largest) * (value / largest) : value;
        }
      }
      return largest === Infinity ? Infinity : largest * _sqrt(result);
    },

    log2: function log2(value) {
      return _log(value) * LOG2E;
    },

    log10: function log10(value) {
      return _log(value) * LOG10E;
    },

    log1p: _log1p,

    sign: _sign,

    sinh: function sinh(value) {
      var x = Number(value);
      if (!globalIsFinite(x) || x === 0) { return x; }

      var a = _abs(x);
      if (a < 1) {
        var u = Math.expm1(a);
        return _sign(x) * u * (1 + (1 / (u + 1))) / 2;
      }
      var t = _exp(a - 1);
      return _sign(x) * (t - (1 / (t * E * E))) * (E / 2);
    },

    tanh: function tanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x === 0) { return x; }
      // can exit early at +-20 as JS loses precision for true value at this integer
      if (x >= 20) { return 1; }
      if (x <= -20) { return -1; }

      return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
    },

    trunc: function trunc(value) {
      var x = Number(value);
      return x < 0 ? -_floor(-x) : _floor(x);
    },

    imul: function imul(x, y) {
      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
      var a = ES.ToUint32(x);
      var b = ES.ToUint32(y);
      var ah = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      // the shift by 0 fixes the sign on the high part
      // the final |0 converts the unsigned value into a signed value
      return (al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0) | 0;
    },

    fround: function fround(x) {
      var v = Number(x);
      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
        return v;
      }
      var sign = _sign(v);
      var abs = _abs(v);
      if (abs < BINARY_32_MIN_VALUE) {
        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
      }
      // Veltkamp's splitting (?)
      var a = (1 + (BINARY_32_EPSILON / Number.EPSILON)) * abs;
      var result = a - (a - abs);
      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
        return sign * Infinity;
      }
      return sign * result;
    }
  };

  var withinULPDistance = function withinULPDistance(result, expected, distance) {
    return _abs(1 - (result / expected)) / Number.EPSILON < (distance || 8);
  };

  defineProperties(Math, MathShims);
  // Chrome < 40 sinh returns ∞ for large numbers
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(710) === Infinity);
  // Chrome < 40 cosh returns ∞ for large numbers
  defineProperty(Math, 'cosh', MathShims.cosh, Math.cosh(710) === Infinity);
  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
  // Chrome < 54 asinh returns ∞ for large numbers and should not
  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(1e+300) === Infinity);
  // Chrome < 54 atanh incorrectly returns 0 for large numbers
  defineProperty(Math, 'atanh', MathShims.atanh, Math.atanh(1e-300) === 0);
  // Chrome 40 has an imprecise Math.tanh with very small numbers
  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
  // Chrome 40 loses Math.acosh precision with high numbers
  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
  // Chrome < 54 has an inaccurate acosh for EPSILON deltas
  defineProperty(Math, 'acosh', MathShims.acosh, !withinULPDistance(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON)));
  // Firefox 38 on Windows
  defineProperty(Math, 'cbrt', MathShims.cbrt, !withinULPDistance(Math.cbrt(1e-300), 1e-100));
  // node 0.11 has an imprecise Math.sinh with very small numbers
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
  var expm1OfTen = Math.expm1(10);
  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
  // node v12.11 - v12.15 report NaN
  defineProperty(Math, 'hypot', MathShims.hypot, Math.hypot(Infinity, NaN) !== Infinity);

  var origMathRound = Math.round;
  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
  var roundHandlesBoundaryConditions = Math.round(0.5 - (Number.EPSILON / 4)) === 0
    && Math.round(-0.5 + (Number.EPSILON / 3.99)) === 1;

  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
  // This behavior should be governed by "round to nearest, ties to even mode"
  // see http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-number-type
  // These are the boundary cases where it breaks.
  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
  var largestPositiveNumberWhereRoundBreaks = (2 * inverseEpsilon) - 1;
  var roundDoesNotIncreaseIntegers = [
    smallestPositiveNumberWhereRoundBreaks,
    largestPositiveNumberWhereRoundBreaks
  ].every(function (num) {
    return Math.round(num) === num;
  });
  defineProperty(Math, 'round', function round(x) {
    var floor = _floor(x);
    var ceil = floor === -1 ? -0 : floor + 1;
    return x - floor < 0.5 ? floor : ceil;
  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
  Value.preserveToString(Math.round, origMathRound);

  var origImul = Math.imul;
  if (Math.imul(0xffffffff, 5) !== -5) {
    // Safari 6.1, at least, reports "0" for this value
    Math.imul = MathShims.imul;
    Value.preserveToString(Math.imul, origImul);
  }
  if (Math.imul.length !== 2) {
    // Safari 8.0.4 has a length of 1
    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
    overrideNative(Math, 'imul', function imul(x, y) {
      return ES.Call(origImul, Math, arguments);
    });
  }

  // Promises
  // Simplest possible implementation; use a 3rd-party library if you
  // want the best possible speed and/or long stack traces.
  var PromiseShim = (function () {
    var setTimeout = globals.setTimeout;
    // some environments don't have setTimeout - no way to shim here.
    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') { return; }

    ES.IsPromise = function (promise) {
      if (!ES.TypeIsObject(promise)) {
        return false;
      }
      if (typeof promise._promise === 'undefined') {
        return false; // uninitialized, or missing our hidden field.
      }
      return true;
    };

    // "PromiseCapability" in the spec is what most promise implementations
    // call a "deferred".
    var PromiseCapability = function (C) {
      if (!ES.IsConstructor(C)) {
        throw new TypeError('Bad promise constructor');
      }
      var capability = this;
      var resolver = function (resolve, reject) {
        if (capability.resolve !== void 0 || capability.reject !== void 0) {
          throw new TypeError('Bad Promise implementation!');
        }
        capability.resolve = resolve;
        capability.reject = reject;
      };
      // Initialize fields to inform optimizers about the object shape.
      capability.resolve = void 0;
      capability.reject = void 0;
      capability.promise = new C(resolver);
      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
        throw new TypeError('Bad promise constructor');
      }
    };

    // find an appropriate setImmediate-alike
    var makeZeroTimeout;
    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
      makeZeroTimeout = function () {
        // from http://dbaron.org/log/20100309-faster-timeouts
        var timeouts = [];
        var messageName = 'zero-timeout-message';
        var setZeroTimeout = function (fn) {
          _push(timeouts, fn);
          window.postMessage(messageName, '*');
        };
        var handleMessage = function (event) {
          if (event.source === window && event.data === messageName) {
            event.stopPropagation();
            if (timeouts.length === 0) { return; }
            var fn = _shift(timeouts);
            fn();
          }
        };
        window.addEventListener('message', handleMessage, true);
        return setZeroTimeout;
      };
    }
    var makePromiseAsap = function () {
      // An efficient task-scheduler based on a pre-existing Promise
      // implementation, which we can use even if we override the
      // global Promise below (in order to workaround bugs)
      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
      var P = globals.Promise;
      var pr = P && P.resolve && P.resolve();
      return pr && function (task) {
        return pr.then(task);
      };
    };
    var enqueue = ES.IsCallable(globals.setImmediate)
      ? globals.setImmediate
      : (
        typeof process === 'object' && process.nextTick
          ? process.nextTick
          : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function (task) { setTimeout(task, 0); })
      ); // fallback

    // Constants for Promise implementation
    var PROMISE_IDENTITY = function (x) { return x; };
    var PROMISE_THROWER = function (e) { throw e; };
    var PROMISE_PENDING = 0;
    var PROMISE_FULFILLED = 1;
    var PROMISE_REJECTED = 2;
    // We store fulfill/reject handlers and capabilities in a single array.
    var PROMISE_FULFILL_OFFSET = 0;
    var PROMISE_REJECT_OFFSET = 1;
    var PROMISE_CAPABILITY_OFFSET = 2;
    // This is used in an optimization for chaining promises via then.
    var PROMISE_FAKE_CAPABILITY = {};

    var enqueuePromiseReactionJob = function (handler, capability, argument) {
      enqueue(function () {
        promiseReactionJob(handler, capability, argument);
      });
    };

    var promiseReactionJob = function (handler, promiseCapability, argument) {
      var handlerResult, f;
      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
        // Fast case, when we don't actually need to chain through to a
        // (real) promiseCapability.
        return handler(argument);
      }
      try {
        handlerResult = handler(argument);
        f = promiseCapability.resolve;
      } catch (e) {
        handlerResult = e;
        f = promiseCapability.reject;
      }
      f(handlerResult);
    };

    var fulfillPromise = function (promise, value) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(
          _promise.fulfillReactionHandler0,
          _promise.reactionCapability0,
          value
        );
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(
              _promise[idx + PROMISE_FULFILL_OFFSET],
              _promise[idx + PROMISE_CAPABILITY_OFFSET],
              value
            );
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = value;
      _promise.state = PROMISE_FULFILLED;
      _promise.reactionLength = 0;
    };

    var rejectPromise = function (promise, reason) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(
          _promise.rejectReactionHandler0,
          _promise.reactionCapability0,
          reason
        );
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(
              _promise[idx + PROMISE_REJECT_OFFSET],
              _promise[idx + PROMISE_CAPABILITY_OFFSET],
              reason
            );
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = reason;
      _promise.state = PROMISE_REJECTED;
      _promise.reactionLength = 0;
    };

    var createResolvingFunctions = function (promise) {
      var alreadyResolved = false;
      var resolve = function (resolution) {
        var then;
        if (alreadyResolved) { return; }
        alreadyResolved = true;
        if (resolution === promise) {
          return rejectPromise(promise, new TypeError('Self resolution'));
        }
        if (!ES.TypeIsObject(resolution)) {
          return fulfillPromise(promise, resolution);
        }
        try {
          then = resolution.then;
        } catch (e) {
          return rejectPromise(promise, e);
        }
        if (!ES.IsCallable(then)) {
          return fulfillPromise(promise, resolution);
        }
        enqueue(function () {
          promiseResolveThenableJob(promise, resolution, then);
        });
      };
      var reject = function (reason) {
        if (alreadyResolved) { return; }
        alreadyResolved = true;
        return rejectPromise(promise, reason);
      };
      return { resolve: resolve, reject: reject };
    };

    var optimizedThen = function (then, thenable, resolve, reject) {
      // Optimization: since we discard the result, we can pass our
      // own then implementation a special hint to let it know it
      // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
      // object is local to this implementation and unforgeable outside.)
      if (then === Promise$prototype$then) {
        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
      } else {
        _call(then, thenable, resolve, reject);
      }
    };
    var promiseResolveThenableJob = function (promise, thenable, then) {
      var resolvingFunctions = createResolvingFunctions(promise);
      var resolve = resolvingFunctions.resolve;
      var reject = resolvingFunctions.reject;
      try {
        optimizedThen(then, thenable, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };

    var Promise$prototype, Promise$prototype$then;
    var Promise = (function () {
      var PromiseShim = function Promise(resolver) {
        if (!(this instanceof PromiseShim)) {
          throw new TypeError('Constructor Promise requires "new"');
        }
        if (this && this._promise) {
          throw new TypeError('Bad construction');
        }
        // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
        if (!ES.IsCallable(resolver)) {
          throw new TypeError('not a valid resolver');
        }
        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
          _promise: {
            result: void 0,
            state: PROMISE_PENDING,
            // The first member of the "reactions" array is inlined here,
            // since most promises only have one reaction.
            // We've also exploded the 'reaction' object to inline the
            // "handler" and "capability" fields, since both fulfill and
            // reject reactions share the same capability.
            reactionLength: 0,
            fulfillReactionHandler0: void 0,
            rejectReactionHandler0: void 0,
            reactionCapability0: void 0
          }
        });
        var resolvingFunctions = createResolvingFunctions(promise);
        var reject = resolvingFunctions.reject;
        try {
          resolver(resolvingFunctions.resolve, reject);
        } catch (e) {
          reject(e);
        }
        return promise;
      };
      return PromiseShim;
    }());
    Promise$prototype = Promise.prototype;

    var _promiseAllResolver = function (index, values, capability, remaining) {
      var alreadyCalled = false;
      return function (x) {
        if (alreadyCalled) { return; }
        alreadyCalled = true;
        values[index] = x;
        if ((--remaining.count) === 0) {
          var resolve = capability.resolve;
          resolve(values); // call w/ this===undefined
        }
      };
    };

    var performPromiseAll = function (iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var values = [];
      var remaining = { count: 1 };
      var next, nextValue;
      var index = 0;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        values[index] = void 0;
        var nextPromise = C.resolve(nextValue);
        var resolveElement = _promiseAllResolver(
          index,
          values,
          resultCapability,
          remaining
        );
        remaining.count += 1;
        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
        index += 1;
      }
      if ((--remaining.count) === 0) {
        var resolve = resultCapability.resolve;
        resolve(values); // call w/ this===undefined
      }
      return resultCapability.promise;
    };

    var performPromiseRace = function (iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var next, nextValue, nextPromise;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            // NOTE: If iterable has no items, resulting promise will never
            // resolve; see:
            // https://github.com/domenic/promises-unwrapping/issues/75
            // https://bugs.ecmascript.org/show_bug.cgi?id=2515
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        nextPromise = C.resolve(nextValue);
        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
      }
      return resultCapability.promise;
    };

    defineProperties(Promise, {
      all: function all(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator, iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = { iterator: iterator, done: false };
          return performPromiseAll(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },

      race: function race(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator, iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = { iterator: iterator, done: false };
          return performPromiseRace(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },

      reject: function reject(reason) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        var capability = new PromiseCapability(C);
        var rejectFunc = capability.reject;
        rejectFunc(reason); // call with this===undefined
        return capability.promise;
      },

      resolve: function resolve(v) {
        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        if (ES.IsPromise(v)) {
          var constructor = v.constructor;
          if (constructor === C) {
            return v;
          }
        }
        var capability = new PromiseCapability(C);
        var resolveFunc = capability.resolve;
        resolveFunc(v); // call with this===undefined
        return capability.promise;
      }
    });

    defineProperties(Promise$prototype, {
      'catch': function (onRejected) {
        return this.then(null, onRejected);
      },

      then: function then(onFulfilled, onRejected) {
        var promise = this;
        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
        var C = ES.SpeciesConstructor(promise, Promise);
        var resultCapability;
        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
        if (returnValueIsIgnored && C === Promise) {
          resultCapability = PROMISE_FAKE_CAPABILITY;
        } else {
          resultCapability = new PromiseCapability(C);
        }
        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
        // Note that we've split the 'reaction' object into its two
        // components, "capabilities" and "handler"
        // "capabilities" is always equal to `resultCapability`
        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
        var _promise = promise._promise;
        var value;
        if (_promise.state === PROMISE_PENDING) {
          if (_promise.reactionLength === 0) {
            _promise.fulfillReactionHandler0 = fulfillReactionHandler;
            _promise.rejectReactionHandler0 = rejectReactionHandler;
            _promise.reactionCapability0 = resultCapability;
          } else {
            var idx = 3 * (_promise.reactionLength - 1);
            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
          }
          _promise.reactionLength += 1;
        } else if (_promise.state === PROMISE_FULFILLED) {
          value = _promise.result;
          enqueuePromiseReactionJob(
            fulfillReactionHandler,
            resultCapability,
            value
          );
        } else if (_promise.state === PROMISE_REJECTED) {
          value = _promise.result;
          enqueuePromiseReactionJob(
            rejectReactionHandler,
            resultCapability,
            value
          );
        } else {
          throw new TypeError('unexpected Promise state');
        }
        return resultCapability.promise;
      }
    });
    // This helps the optimizer by ensuring that methods which take
    // capabilities aren't polymorphic.
    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
    Promise$prototype$then = Promise$prototype.then;

    return Promise;
  }());

  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
  if (globals.Promise) {
    delete globals.Promise.accept;
    delete globals.Promise.defer;
    delete globals.Promise.prototype.chain;
  }

  if (typeof PromiseShim === 'function') {
    // export the Promise constructor.
    defineProperties(globals, { Promise: PromiseShim });
    // In Chrome 33 (and thereabouts) Promise is defined, but the
    // implementation is buggy in a number of ways.  Let's check subclassing
    // support to see if we have a buggy implementation.
    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
      return S.resolve(42).then(function () {}) instanceof S;
    });
    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () {
      return globals.Promise.reject(42).then(null, 5).then(null, noop);
    });
    var promiseRequiresObjectContext = throwsError(function () { return globals.Promise.call(3, noop); });
    // Promise.resolve() was errata'ed late in the ES6 process.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
    //      https://code.google.com/p/v8/issues/detail?id=4161
    // It serves as a proxy for a number of other bugs in early Promise
    // implementations.
    var promiseResolveBroken = (function (Promise) {
      var p = Promise.resolve(5);
      p.constructor = {};
      var p2 = Promise.resolve(p);
      try {
        p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
      } catch (e) {
        return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314
      }
      return p === p2; // This *should* be false!
    }(globals.Promise));

    // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously
    var getsThenSynchronously = supportsDescriptors && (function () {
      var count = 0;
      // eslint-disable-next-line getter-return
      var thenable = Object.defineProperty({}, 'then', { get: function () { count += 1; } });
      Promise.resolve(thenable);
      return count === 1;
    }());

    var BadResolverPromise = function BadResolverPromise(executor) {
      var p = new Promise(executor);
      executor(3, function () {});
      this.then = p.then;
      this.constructor = BadResolverPromise;
    };
    BadResolverPromise.prototype = Promise.prototype;
    BadResolverPromise.all = Promise.all;
    // Chrome Canary 49 (probably older too) has some implementation bugs
    var hasBadResolverPromise = valueOrFalseIfThrows(function () {
      return !!BadResolverPromise.all([1, 2]);
    });

    if (
      !promiseSupportsSubclassing
      || !promiseIgnoresNonFunctionThenCallbacks
      || !promiseRequiresObjectContext
      || promiseResolveBroken
      || !getsThenSynchronously
      || hasBadResolverPromise
    ) {
      Promise = PromiseShim; // eslint-disable-line no-global-assign
      overrideNative(globals, 'Promise', PromiseShim);
    }
    if (Promise.all.length !== 1) {
      var origAll = Promise.all;
      overrideNative(Promise, 'all', function all(iterable) {
        return ES.Call(origAll, this, arguments);
      });
    }
    if (Promise.race.length !== 1) {
      var origRace = Promise.race;
      overrideNative(Promise, 'race', function race(iterable) {
        return ES.Call(origRace, this, arguments);
      });
    }
    if (Promise.resolve.length !== 1) {
      var origResolve = Promise.resolve;
      overrideNative(Promise, 'resolve', function resolve(x) {
        return ES.Call(origResolve, this, arguments);
      });
    }
    if (Promise.reject.length !== 1) {
      var origReject = Promise.reject;
      overrideNative(Promise, 'reject', function reject(r) {
        return ES.Call(origReject, this, arguments);
      });
    }
    ensureEnumerable(Promise, 'all');
    ensureEnumerable(Promise, 'race');
    ensureEnumerable(Promise, 'resolve');
    ensureEnumerable(Promise, 'reject');
    addDefaultSpecies(Promise);
  }

  // Map and Set require a true ES5 environment
  // Their fast path also requires that the environment preserve
  // property insertion order, which is not guaranteed by the spec.
  var testOrder = function (a) {
    var b = keys(_reduce(a, function (o, k) {
      o[k] = true;
      return o;
    }, {}));
    return a.join(':') === b.join(':');
  };
  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
  // some engines (eg, Chrome) only preserve insertion order for string keys
  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);

  if (supportsDescriptors) {

    var fastkey = function fastkey(key, skipInsertionOrderCheck) {
      if (!skipInsertionOrderCheck && !preservesInsertionOrder) {
        return null;
      }
      if (isNullOrUndefined(key)) {
        return '^' + ES.ToString(key);
      } else if (typeof key === 'string') {
        return '$' + key;
      } else if (typeof key === 'number') {
        // note that -0 will get coerced to "0" when used as a property key
        if (!preservesNumericInsertionOrder) {
          return 'n' + key;
        }
        return key;
      } else if (typeof key === 'boolean') {
        return 'b' + key;
      }
      return null;
    };

    var emptyObject = function emptyObject() {
      // accomodate some older not-quite-ES5 browsers
      return Object.create ? Object.create(null) : {};
    };

    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function (entry) {
          if (!ES.TypeIsObject(entry)) {
            throw new TypeError('Iterator value ' + entry + ' is not an entry object');
          }
          map.set(entry[0], entry[1]);
        });
      } else if (iterable instanceof MapConstructor) {
        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
          map.set(key, value);
        });
      } else {
        var iter, adder;
        if (!isNullOrUndefined(iterable)) {
          adder = map.set;
          if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) { break; }
            var nextItem = next.value;
            try {
              if (!ES.TypeIsObject(nextItem)) {
                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
              }
              _call(adder, map, nextItem[0], nextItem[1]);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function (value) {
          set.add(value);
        });
      } else if (iterable instanceof SetConstructor) {
        _call(SetConstructor.prototype.forEach, iterable, function (value) {
          set.add(value);
        });
      } else {
        var iter, adder;
        if (!isNullOrUndefined(iterable)) {
          adder = set.add;
          if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) { break; }
            var nextValue = next.value;
            try {
              _call(adder, set, nextValue);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };

    var collectionShims = {
      Map: (function () {

        var empty = {};

        var MapEntry = function MapEntry(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
        };

        MapEntry.prototype.isRemoved = function isRemoved() {
          return this.key === empty;
        };

        var isMap = function isMap(map) {
          return !!map._es6map;
        };

        var requireMapSlot = function requireMapSlot(map, method) {
          if (!ES.TypeIsObject(map) || !isMap(map)) {
            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
          }
        };

        var MapIterator = function MapIterator(map, kind) {
          requireMapSlot(map, '[[MapIterator]]');
          defineProperty(this, 'head', map._head);
          defineProperty(this, 'i', this.head);
          defineProperty(this, 'kind', kind);
        };

        MapIterator.prototype = {
          isMapIterator: true,
          next: function next() {
            if (!this.isMapIterator) {
              throw new TypeError('Not a MapIterator');
            }
            var i = this.i;
            var kind = this.kind;
            var head = this.head;
            if (typeof this.i === 'undefined') {
              return iteratorResult();
            }
            while (i.isRemoved() && i !== head) {
              // back up off of removed entries
              i = i.prev;
            }
            // advance to next unreturned element.
            var result;
            while (i.next !== head) {
              i = i.next;
              if (!i.isRemoved()) {
                if (kind === 'key') {
                  result = i.key;
                } else if (kind === 'value') {
                  result = i.value;
                } else {
                  result = [i.key, i.value];
                }
                this.i = i;
                return iteratorResult(result);
              }
            }
            // once the iterator is done, it is done forever.
            this.i = void 0;
            return iteratorResult();
          }
        };
        addIterator(MapIterator.prototype);

        var Map$prototype;
        var MapShim = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          if (this && this._es6map) {
            throw new TypeError('Bad construction');
          }
          var map = emulateES6construct(this, Map, Map$prototype, {
            _es6map: true,
            _head: null,
            _map: OrigMap ? new OrigMap() : null,
            _size: 0,
            _storage: emptyObject()
          });

          var head = new MapEntry(null, null);
          // circular doubly-linked list.
          /* eslint no-multi-assign: 1 */
          head.next = head.prev = head;
          map._head = head;

          // Optionally initialize map from iterable
          if (arguments.length > 0) {
            addIterableToMap(Map, map, arguments[0]);
          }
          return map;
        };
        Map$prototype = MapShim.prototype;

        Value.getter(Map$prototype, 'size', function () {
          if (typeof this._size === 'undefined') {
            throw new TypeError('size method called on incompatible Map');
          }
          return this._size;
        });

        defineProperties(Map$prototype, {
          get: function get(key) {
            requireMapSlot(this, 'get');
            var entry;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              entry = this._storage[fkey];
              if (entry) {
                return entry.value;
              }
              return;

            }
            if (this._map) {
              // fast object key path
              entry = origMapGet.call(this._map, key);
              if (entry) {
                return entry.value;
              }
              return;

            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return i.value;
              }
            }
          },

          has: function has(key) {
            requireMapSlot(this, 'has');
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              return typeof this._storage[fkey] !== 'undefined';
            }
            if (this._map) {
              // fast object key path
              return origMapHas.call(this._map, key);
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return true;
              }
            }
            return false;
          },

          set: function set(key, value) {
            requireMapSlot(this, 'set');
            var head = this._head;
            var i = head;
            var entry;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] !== 'undefined') {
                this._storage[fkey].value = value;
                return this;
              }
              entry = this._storage[fkey] = new MapEntry(key, value); /* eslint no-multi-assign: 1 */
              i = head.prev;
              // fall through

            } else if (this._map) {
              // fast object key path
              if (origMapHas.call(this._map, key)) {
                origMapGet.call(this._map, key).value = value;
              } else {
                entry = new MapEntry(key, value);
                origMapSet.call(this._map, key, entry);
                i = head.prev;
                // fall through
              }
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.value = value;
                return this;
              }
            }
            entry = entry || new MapEntry(key, value);
            if (ES.SameValue(-0, key)) {
              entry.key = +0; // coerce -0 to +0 in entry
            }
            entry.next = this._head;
            entry.prev = this._head.prev;
            entry.prev.next = entry;
            entry.next.prev = entry;
            this._size += 1;
            return this;
          },

          'delete': function (key) {
            requireMapSlot(this, 'delete');
            var head = this._head;
            var i = head;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] === 'undefined') {
                return false;
              }
              i = this._storage[fkey].prev;
              delete this._storage[fkey];
              // fall through
            } else if (this._map) {
              // fast object key path
              if (!origMapHas.call(this._map, key)) {
                return false;
              }
              i = origMapGet.call(this._map, key).prev;
              origMapDelete.call(this._map, key);
              // fall through
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.key = empty;
                i.value = empty;
                i.prev.next = i.next;
                i.next.prev = i.prev;
                this._size -= 1;
                return true;
              }
            }
            return false;
          },

          clear: function clear() {
            /* eslint no-multi-assign: 1 */
            requireMapSlot(this, 'clear');
            this._map = OrigMap ? new OrigMap() : null;
            this._size = 0;
            this._storage = emptyObject();
            var head = this._head;
            var i = head;
            var p = i.next;
            while ((i = p) !== head) {
              i.key = empty;
              i.value = empty;
              p = i.next;
              i.next = i.prev = head;
            }
            head.next = head.prev = head;
          },

          keys: function keys() {
            requireMapSlot(this, 'keys');
            return new MapIterator(this, 'key');
          },

          values: function values() {
            requireMapSlot(this, 'values');
            return new MapIterator(this, 'value');
          },

          entries: function entries() {
            requireMapSlot(this, 'entries');
            return new MapIterator(this, 'key+value');
          },

          forEach: function forEach(callback) {
            requireMapSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var it = this.entries();
            for (var entry = it.next(); !entry.done; entry = it.next()) {
              if (context) {
                _call(callback, context, entry.value[1], entry.value[0], this);
              } else {
                callback(entry.value[1], entry.value[0], this);
              }
            }
          }
        });
        addIterator(Map$prototype, Map$prototype.entries);

        return MapShim;
      }()),

      Set: (function () {
        var isSet = function isSet(set) {
          return set._es6set && typeof set._storage !== 'undefined';
        };
        var requireSetSlot = function requireSetSlot(set, method) {
          if (!ES.TypeIsObject(set) || !isSet(set)) {
            // https://github.com/paulmillr/es6-shim/issues/176
            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
          }
        };

        // Creating a Map is expensive.  To speed up the common case of
        // Sets containing only string or numeric keys, we use an object
        // as backing storage and lazily create a full Map only when
        // required.
        var Set$prototype;
        var SetShim = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          if (this && this._es6set) {
            throw new TypeError('Bad construction');
          }
          var set = emulateES6construct(this, Set, Set$prototype, {
            _es6set: true,
            '[[SetData]]': null,
            _storage: emptyObject()
          });
          if (!set._es6set) {
            throw new TypeError('bad set');
          }

          // Optionally initialize Set from iterable
          if (arguments.length > 0) {
            addIterableToSet(Set, set, arguments[0]);
          }
          return set;
        };
        Set$prototype = SetShim.prototype;

        var decodeKey = function (key) {
          var k = key;
          if (k === '^null') {
            return null;
          } else if (k === '^undefined') {
            return void 0;
          }
          var first = k.charAt(0);
          if (first === '$') {
            return _strSlice(k, 1);
          } else if (first === 'n') {
            return +_strSlice(k, 1);
          } else if (first === 'b') {
            return k === 'btrue';
          }

          return +k;
        };
        // Switch from the object backing storage to a full Map.
        var ensureMap = function ensureMap(set) {
          if (!set['[[SetData]]']) {
            var m = new collectionShims.Map();
            set['[[SetData]]'] = m;
            _forEach(keys(set._storage), function (key) {
              var k = decodeKey(key);
              m.set(k, k);
            });
            set['[[SetData]]'] = m;
          }
          set._storage = null; // free old backing storage
        };

        Value.getter(SetShim.prototype, 'size', function () {
          requireSetSlot(this, 'size');
          if (this._storage) {
            return keys(this._storage).length;
          }
          ensureMap(this);
          return this['[[SetData]]'].size;
        });

        defineProperties(SetShim.prototype, {
          has: function has(key) {
            requireSetSlot(this, 'has');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              return !!this._storage[fkey];
            }
            ensureMap(this);
            return this['[[SetData]]'].has(key);
          },

          add: function add(key) {
            requireSetSlot(this, 'add');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              this._storage[fkey] = true;
              return this;
            }
            ensureMap(this);
            this['[[SetData]]'].set(key, key);
            return this;
          },

          'delete': function (key) {
            requireSetSlot(this, 'delete');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              var hasFKey = _hasOwnProperty(this._storage, fkey);
              return (delete this._storage[fkey]) && hasFKey;
            }
            ensureMap(this);
            return this['[[SetData]]']['delete'](key);
          },

          clear: function clear() {
            requireSetSlot(this, 'clear');
            if (this._storage) {
              this._storage = emptyObject();
            }
            if (this['[[SetData]]']) {
              this['[[SetData]]'].clear();
            }
          },

          values: function values() {
            requireSetSlot(this, 'values');
            ensureMap(this);
            return new SetIterator(this['[[SetData]]'].values());
          },

          entries: function entries() {
            requireSetSlot(this, 'entries');
            ensureMap(this);
            return new SetIterator(this['[[SetData]]'].entries());
          },

          forEach: function forEach(callback) {
            requireSetSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var entireSet = this;
            ensureMap(entireSet);
            this['[[SetData]]'].forEach(function (value, key) {
              if (context) {
                _call(callback, context, key, key, entireSet);
              } else {
                callback(key, key, entireSet);
              }
            });
          }
        });
        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
        addIterator(SetShim.prototype, SetShim.prototype.values);

        var SetIterator = function SetIterator(it) {
          defineProperty(this, 'it', it);
        };
        SetIterator.prototype = {
          isSetIterator: true,
          next: function next() {
            if (!this.isSetIterator) {
              throw new TypeError('Not a SetIterator');
            }
            return this.it.next();
          }
        };
        addIterator(SetIterator.prototype);

        return SetShim;
      }())
    };

    var isGoogleTranslate = globals.Set && !Set.prototype['delete'] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray(new Set().keys);
    if (isGoogleTranslate) {
      // special-case force removal of wildly invalid Set implementation in Google Translate iframes
      // see https://github.com/paulmillr/es6-shim/issues/438 / https://twitter.com/ljharb/status/849335573114363904
      globals.Set = collectionShims.Set;
    }
    if (globals.Map || globals.Set) {
      // Safari 8, for example, doesn't accept an iterable.
      var mapAcceptsArguments = valueOrFalseIfThrows(function () { return new Map([[1, 2]]).get(1) === 2; });
      if (!mapAcceptsArguments) {
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, globals.Map.prototype);
          return m;
        };
        globals.Map.prototype = create(OrigMap.prototype);
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var testMap = new Map();
      var mapUsesSameValueZero = (function () {
        // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
        m.set(-0, m);
        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
      }());
      var mapSupportsChaining = testMap.set(1, 2) === testMap;
      if (!mapUsesSameValueZero || !mapSupportsChaining) {
        overrideNative(Map.prototype, 'set', function set(k, v) {
          _call(origMapSet, this, k === 0 ? 0 : k, v);
          return this;
        });
      }
      if (!mapUsesSameValueZero) {
        defineProperties(Map.prototype, {
          get: function get(k) {
            return _call(origMapGet, this, k === 0 ? 0 : k);
          },
          has: function has(k) {
            return _call(origMapHas, this, k === 0 ? 0 : k);
          }
        }, true);
        Value.preserveToString(Map.prototype.get, origMapGet);
        Value.preserveToString(Map.prototype.has, origMapHas);
      }
      var testSet = new Set();
      var setUsesSameValueZero = Set.prototype['delete'] && Set.prototype.add && Set.prototype.has && (function (s) {
        s['delete'](0);
        s.add(-0);
        return !s.has(0);
      }(testSet));
      var setSupportsChaining = testSet.add(1) === testSet;
      if (!setUsesSameValueZero || !setSupportsChaining) {
        var origSetAdd = Set.prototype.add;
        Set.prototype.add = function add(v) {
          _call(origSetAdd, this, v === 0 ? 0 : v);
          return this;
        };
        Value.preserveToString(Set.prototype.add, origSetAdd);
      }
      if (!setUsesSameValueZero) {
        var origSetHas = Set.prototype.has;
        Set.prototype.has = function has(v) {
          return _call(origSetHas, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype.has, origSetHas);
        var origSetDel = Set.prototype['delete'];
        Set.prototype['delete'] = function SetDelete(v) {
          return _call(origSetDel, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype['delete'], origSetDel);
      }
      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
        var m = new M([]);
        // Firefox 32 is ok with the instantiating the subclass but will
        // throw when the map is used.
        m.set(42, 42);
        return m instanceof M;
      });
      // without Object.setPrototypeOf, subclassing is not possible
      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;
      var mapRequiresNew = (function () {
        try {
          return !(globals.Map() instanceof globals.Map);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, Map.prototype);
          return m;
        };
        globals.Map.prototype = OrigMap.prototype;
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
        var s = new S([]);
        s.add(42, 42);
        return s instanceof S;
      });
      // without Object.setPrototypeOf, subclassing is not possible
      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;
      var setRequiresNew = (function () {
        try {
          return !(globals.Set() instanceof globals.Set);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
        var OrigSet = globals.Set;
        globals.Set = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          var s = new OrigSet();
          if (arguments.length > 0) {
            addIterableToSet(Set, s, arguments[0]);
          }
          delete s.constructor;
          Object.setPrototypeOf(s, Set.prototype);
          return s;
        };
        globals.Set.prototype = OrigSet.prototype;
        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
        Value.preserveToString(globals.Set, OrigSet);
      }
      var newMap = new globals.Map();
      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
        return newMap.keys().next().done;
      });
      /*
        - In Firefox < 23, Map#size is a function.
        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
        - In Firefox 24, Map and Set do not implement forEach
        - In Firefox 25 at least, Map and Set are callable without "new"
      */
      if (
        typeof globals.Map.prototype.clear !== 'function'
        || new globals.Set().size !== 0
        || newMap.size !== 0
        || typeof globals.Map.prototype.keys !== 'function'
        || typeof globals.Set.prototype.keys !== 'function'
        || typeof globals.Map.prototype.forEach !== 'function'
        || typeof globals.Set.prototype.forEach !== 'function'
        || isCallableWithoutNew(globals.Map)
        || isCallableWithoutNew(globals.Set)
        || typeof newMap.keys().next !== 'function' // Safari 8
        || mapIterationThrowsStopIterator // Firefox 25
        || !mapSupportsSubclassing
      ) {
        defineProperties(globals, {
          Map: collectionShims.Map,
          Set: collectionShims.Set
        }, true);
      }

      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
        // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
      }

      // Shim incomplete iterator implementations.
      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));

      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
        // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
        var anonymousSetHas = globals.Set.prototype.has;
        overrideNative(globals.Set.prototype, 'has', function has(key) {
          return _call(anonymousSetHas, this, key);
        });
      }
    }
    defineProperties(globals, collectionShims);
    addDefaultSpecies(globals.Map);
    addDefaultSpecies(globals.Set);
  }

  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
    if (!ES.TypeIsObject(target)) {
      throw new TypeError('target must be an object');
    }
  };

  // Some Reflect methods are basically the same as
  // those on the Object global, except that a TypeError is thrown if
  // target isn't an object. As well as returning a boolean indicating
  // the success of the operation.
  var ReflectShims = {
    // Apply method in a functional form.
    apply: function apply() {
      return ES.Call(ES.Call, null, arguments);
    },

    // New operator in a functional form.
    construct: function construct(constructor, args) {
      if (!ES.IsConstructor(constructor)) {
        throw new TypeError('First argument must be a constructor.');
      }
      var newTarget = arguments.length > 2 ? arguments[2] : constructor;
      if (!ES.IsConstructor(newTarget)) {
        throw new TypeError('new.target must be a constructor.');
      }
      return ES.Construct(constructor, args, newTarget, 'internal');
    },

    // When deleting a non-existent or configurable property,
    // true is returned.
    // When attempting to delete a non-configurable property,
    // it will return false.
    deleteProperty: function deleteProperty(target, key) {
      throwUnlessTargetIsObject(target);
      if (supportsDescriptors) {
        var desc = Object.getOwnPropertyDescriptor(target, key);

        if (desc && !desc.configurable) {
          return false;
        }
      }

      // Will return true.
      return delete target[key];
    },

    has: function has(target, key) {
      throwUnlessTargetIsObject(target);
      return key in target;
    }
  };

  if (Object.getOwnPropertyNames) {
    Object.assign(ReflectShims, {
      // Basically the result of calling the internal [[OwnPropertyKeys]].
      // Concatenating propertyNames and propertySymbols should do the trick.
      // This should continue to work together with a Symbol shim
      // which overrides Object.getOwnPropertyNames and implements
      // Object.getOwnPropertySymbols.
      ownKeys: function ownKeys(target) {
        throwUnlessTargetIsObject(target);
        var keys = Object.getOwnPropertyNames(target);

        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
          _pushApply(keys, Object.getOwnPropertySymbols(target));
        }

        return keys;
      }
    });
  }

  var callAndCatchException = function ConvertExceptionToBoolean(func) {
    return !throwsError(func);
  };

  if (Object.preventExtensions) {
    Object.assign(ReflectShims, {
      isExtensible: function isExtensible(target) {
        throwUnlessTargetIsObject(target);
        return Object.isExtensible(target);
      },
      preventExtensions: function preventExtensions(target) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          return Object.preventExtensions(target);
        });
      }
    });
  }

  if (supportsDescriptors) {
    var internalGet = function get(target, key, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent === null) {
          return void 0;
        }

        return internalGet(parent, key, receiver);
      }

      if ('value' in desc) {
        return desc.value;
      }

      if (desc.get) {
        return ES.Call(desc.get, receiver);
      }

      return void 0;
    };

    var internalSet = function set(target, key, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent !== null) {
          return internalSet(parent, key, value, receiver);
        }

        desc = {
          value: void 0,
          writable: true,
          enumerable: true,
          configurable: true
        };
      }

      if ('value' in desc) {
        if (!desc.writable) {
          return false;
        }

        if (!ES.TypeIsObject(receiver)) {
          return false;
        }

        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);

        if (existingDesc) {
          return Reflect.defineProperty(receiver, key, {
            value: value
          });
        }
        return Reflect.defineProperty(receiver, key, {
          value: value,
          writable: true,
          enumerable: true,
          configurable: true
        });

      }

      if (desc.set) {
        _call(desc.set, receiver, value);
        return true;
      }

      return false;
    };

    Object.assign(ReflectShims, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          return Object.defineProperty(target, propertyKey, attributes);
        });
      },

      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        throwUnlessTargetIsObject(target);
        return Object.getOwnPropertyDescriptor(target, propertyKey);
      },

      // Syntax in a functional form.
      get: function get(target, key) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 2 ? arguments[2] : target;

        return internalGet(target, key, receiver);
      },

      set: function set(target, key, value) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 3 ? arguments[3] : target;

        return internalSet(target, key, value, receiver);
      }
    });
  }

  if (Object.getPrototypeOf) {
    var objectDotGetPrototypeOf = Object.getPrototypeOf;
    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
      throwUnlessTargetIsObject(target);
      return objectDotGetPrototypeOf(target);
    };
  }

  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
    var willCreateCircularPrototype = function (object, lastProto) {
      var proto = lastProto;
      while (proto) {
        if (object === proto) {
          return true;
        }
        proto = ReflectShims.getPrototypeOf(proto);
      }
      return false;
    };

    Object.assign(ReflectShims, {
      // Sets the prototype of the given object.
      // Returns true on success, otherwise false.
      setPrototypeOf: function setPrototypeOf(object, proto) {
        throwUnlessTargetIsObject(object);
        if (proto !== null && !ES.TypeIsObject(proto)) {
          throw new TypeError('proto must be an object or null');
        }

        // If they already are the same, we're done.
        if (proto === Reflect.getPrototypeOf(object)) {
          return true;
        }

        // Cannot alter prototype if object not extensible.
        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
          return false;
        }

        // Ensure that we do not create a circular prototype chain.
        if (willCreateCircularPrototype(object, proto)) {
          return false;
        }

        Object.setPrototypeOf(object, proto);

        return true;
      }
    });
  }
  var defineOrOverrideReflectProperty = function (key, shim) {
    if (!ES.IsCallable(globals.Reflect[key])) {
      defineProperty(globals.Reflect, key, shim);
    } else {
      var acceptsPrimitives = valueOrFalseIfThrows(function () {
        globals.Reflect[key](1);
        globals.Reflect[key](NaN);
        globals.Reflect[key](true);
        return true;
      });
      if (acceptsPrimitives) {
        overrideNative(globals.Reflect, key, shim);
      }
    }
  };
  Object.keys(ReflectShims).forEach(function (key) {
    defineOrOverrideReflectProperty(key, ReflectShims[key]);
  });
  var originalReflectGetProto = globals.Reflect.getPrototypeOf;
  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
      return _call(originalReflectGetProto, globals.Reflect, target);
    });
  }
  if (globals.Reflect.setPrototypeOf) {
    if (valueOrFalseIfThrows(function () {
      globals.Reflect.setPrototypeOf(1, {});
      return true;
    })) {
      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
    }
  }
  if (globals.Reflect.defineProperty) {
    if (!valueOrFalseIfThrows(function () {
      var basic = !globals.Reflect.defineProperty(1, 'test', { value: 1 });
      // "extensible" fails on Edge 0.12
      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
      return basic && extensible;
    })) {
      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
    }
  }
  if (globals.Reflect.construct) {
    if (!valueOrFalseIfThrows(function () {
      var F = function F() {};
      return globals.Reflect.construct(function () {}, [], F) instanceof F;
    })) {
      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
    }
  }

  if (String(new Date(NaN)) !== 'Invalid Date') {
    var dateToString = Date.prototype.toString;
    var shimmedDateToString = function toString() {
      var valueOf = +this;
      if (valueOf !== valueOf) {
        return 'Invalid Date';
      }
      return ES.Call(dateToString, this);
    };
    overrideNative(Date.prototype, 'toString', shimmedDateToString);
  }

  // Annex B HTML methods
  // http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-string.prototype-object
  var stringHTMLshims = {
    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },
    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },
    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },
    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },
    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },
    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },
    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },
    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },
    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },
    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },
    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },
    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },
    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }
  };
  _forEach(Object.keys(stringHTMLshims), function (key) {
    var method = String.prototype[key];
    var shouldOverwrite = false;
    if (ES.IsCallable(method)) {
      var output = _call(method, '', ' " ');
      var quotesCount = _concat([], output.match(/"/g)).length;
      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
    } else {
      shouldOverwrite = true;
    }
    if (shouldOverwrite) {
      overrideNative(String.prototype, key, stringHTMLshims[key]);
    }
  });

  var JSONstringifiesSymbols = (function () {
    // Microsoft Edge v0.12 stringifies Symbols incorrectly
    if (!hasSymbols) { return false; } // Symbols are not supported
    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
    if (!stringify) { return false; } // JSON.stringify is not supported
    if (typeof stringify(Symbol()) !== 'undefined') { return true; } // Symbols should become `undefined`
    if (stringify([Symbol()]) !== '[null]') { return true; } // Symbols in arrays should become `null`
    var obj = { a: Symbol() };
    obj[Symbol()] = true;
    if (stringify(obj) !== '{}') { return true; } // Symbol-valued keys *and* Symbol-valued properties should be omitted
    return false;
  }());
  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {
    // Chrome 45 throws on stringifying object symbols
    if (!hasSymbols) { return true; } // Symbols are not supported
    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
  });
  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
    var origStringify = JSON.stringify;
    overrideNative(JSON, 'stringify', function stringify(value) {
      if (typeof value === 'symbol') { return; }
      var replacer;
      if (arguments.length > 1) {
        replacer = arguments[1];
      }
      var args = [value];
      if (!isArray(replacer)) {
        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
        var wrappedReplacer = function (key, val) {
          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
          if (typeof parsedValue !== 'symbol') {
            if (Type.symbol(parsedValue)) {
              return assignTo({})(parsedValue);
            }
            return parsedValue;

          }
        };
        args.push(wrappedReplacer);
      } else {
        // create wrapped replacer that handles an array replacer?
        args.push(replacer);
      }
      if (arguments.length > 2) {
        args.push(arguments[2]);
      }
      return origStringify.apply(this, args);
    });
  }

  return globals;
}));


/***/ }),

/***/ "../node_modules/reflect-metadata/Reflect.js":
/*!***************************************************!*\
  !*** ../node_modules/reflect-metadata/Reflect.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ "./chunk.ts":
/*!******************!*\
  !*** ./chunk.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chunk: () => (/* binding */ Chunk)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./value.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/decorators/type.decorator.js");



class Chunk {
    view;
    count;
    constants;
    // Related with source code of higher level language
    lineView;
    constructor() {
        this.count = 0;
        this.constants = [];
        this.view = [];
        this.lineView = [];
    }
    write(byte, line) {
        this.view.push(byte);
        this.lineView.push(line);
    }
    read() {
        return this.view;
    }
    get size() {
        return this.view.length;
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
        this.constants.push(value);
        return this.constants.length - 1;
    }
    getConstant(index) {
        return this.constants[index];
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.Type)(() => ArrayBuffer),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], Chunk.prototype, "count", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.Type)(() => _value__WEBPACK_IMPORTED_MODULE_0__["default"]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)
], Chunk.prototype, "constants", void 0);


/***/ }),

/***/ "./compiler.ts":
/*!*********************!*\
  !*** ./compiler.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        while (this.match(_scanner__WEBPACK_IMPORTED_MODULE_0__.TokenType.TOKEN_COMMA)) {
            this.expression();
        }
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
        const value = this.previous.str.substring(1, this.previous.str.length - 1);
        this.emitConstant(_value__WEBPACK_IMPORTED_MODULE_3__["default"].str(value));
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
        return this.chunk.makeConstant(_value__WEBPACK_IMPORTED_MODULE_3__["default"].str(token.str));
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Disassembler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk */ "./chunk.ts");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm */ "./vm.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/decorators/type.decorator.js");




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
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_CONSTANT:
                return this.constantInstruction('OP_CONSTANT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_NEGATE:
                return this.simpleInstruction('OP_NEGATE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_RETURN:
                return this.simpleInstruction('OP_RETURN', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_ADD:
                return this.simpleInstruction('OP_ADD', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_SUBTRACT:
                return this.simpleInstruction('OP_SUBTRACT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_MULTIPLY:
                return this.simpleInstruction('OP_MULTIPLY', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_DIVIDE:
                return this.simpleInstruction('OP_DIVIDE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_NIL:
                return this.simpleInstruction('OP_NIL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_TRUE:
                return this.simpleInstruction('OP_TRUE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_FALSE:
                return this.simpleInstruction('OP_FALSE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_NOT:
                return this.simpleInstruction('OP_NOT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_EQUAL:
                return this.simpleInstruction('OP_EQUAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_GREATER:
                return this.simpleInstruction('OP_GREATER', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_LESS:
                return this.simpleInstruction('OP_LESS', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_PRINT:
                return this.simpleInstruction('OP_PRINT', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_POP:
                return this.simpleInstruction('OP_POP', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_DEFINE_GLOBAL:
                return this.constantInstruction('OP_DEFINE_GLOBAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_GET_GLOBAL:
                return this.constantInstruction('OP_GET_GLOBAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_SET_GLOBAL:
                return this.constantInstruction('OP_SET_GLOBAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_GET_LOCAL:
                return this.byteInstruction('OP_GET_LOCAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_SET_LOCAL:
                return this.byteInstruction('OP_SET_LOCAL', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_JUMP_IF_FALSE:
                return this.jumpInstruction('OP_JUMP_IF_FALSE', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_JUMP:
                return this.jumpInstruction('OP_JUMP', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_LOOP:
                return this.jumpInstruction('OP_LOOP', offset);
            case _vm__WEBPACK_IMPORTED_MODULE_1__.Opcode.OP_INTERRUPT:
                return this.byteInstruction('OP_INTERRUPT', offset);
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
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.Type)(() => _chunk__WEBPACK_IMPORTED_MODULE_0__.Chunk),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _chunk__WEBPACK_IMPORTED_MODULE_0__.Chunk)
], Disassembler.prototype, "chunk", void 0);


/***/ }),

/***/ "./interpret.ts":
/*!**********************!*\
  !*** ./interpret.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        document.write((e));
        return { status: _vm__WEBPACK_IMPORTED_MODULE_0__.VMStatus.INTERPRET_COMPILE_ERROR, interrupt: undefined, save: "" };
    }
    const vm = new _vm__WEBPACK_IMPORTED_MODULE_0__["default"]({ debug: true });
    vm.init(chunk);
    const res = vm.run(50);
    /*
    while (res.status !== VMStatus.INTERPRET_INTERRUPT) {
        vm = plainToInstance(VM, JSON.parse(res.save))

        res = vm.run(5);
    }*/
    return res;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interpret);


/***/ }),

/***/ "./scanner.ts":
/*!********************!*\
  !*** ./scanner.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Obj: () => (/* binding */ Obj),
/* harmony export */   ValueType: () => (/* binding */ ValueType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/decorators/type.decorator.js");


var ValueType;
(function (ValueType) {
    ValueType[ValueType["VAL_BOOL"] = 0] = "VAL_BOOL";
    ValueType[ValueType["VAL_NIL"] = 1] = "VAL_NIL";
    ValueType[ValueType["VAL_NUMBER"] = 2] = "VAL_NUMBER";
    ValueType[ValueType["VAL_OBJ"] = 3] = "VAL_OBJ";
    ValueType[ValueType["VAL_STR"] = 4] = "VAL_STR";
})(ValueType || (ValueType = {}));
class Obj {
}
class Value {
    type;
    _number;
    _obj;
    _str;
    static TYPE_VALUE_FIELD_MAP = {
        [ValueType.VAL_BOOL]: 'bool',
        [ValueType.VAL_NIL]: 'nil',
        [ValueType.VAL_NUMBER]: 'number',
        [ValueType.VAL_OBJ]: 'obj',
        [ValueType.VAL_STR]: 'str',
    };
    constructor(type, number = 0, obj = null, str = null) {
        this.type = type;
        this._number = number;
        this._obj = obj;
        this._str = str;
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
    static str(str) {
        return new Value(ValueType.VAL_STR, 0, null, str);
    }
    static obj(obj) {
        return new Value(ValueType.VAL_OBJ, 0, obj);
    }
    static fromJSON(json) {
        const { type, value } = json;
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
    get number() {
        if (this.type !== ValueType.VAL_NUMBER)
            throw new Error('Value is not a number.');
        return this._number;
    }
    get bool() {
        if (this.type !== ValueType.VAL_BOOL)
            throw new Error('Value is not a boolean.');
        return this._number === 1;
    }
    get obj() {
        if (this.type !== ValueType.VAL_OBJ)
            throw new Error('Value is not an object.');
        return this._obj;
    }
    get str() {
        if (this.type !== ValueType.VAL_STR)
            throw new Error('Value is not a string.');
        return this._str;
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
    equalsTo(other) {
        if (this.type !== other.type)
            return false;
        return this.number === other.number;
    }
    toJSON() {
        const field = Value.TYPE_VALUE_FIELD_MAP[this.type];
        return {
            type: this.type,
            value: this[field]
        };
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.Type)(() => Obj),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Obj)
], Value.prototype, "_obj", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Value);


/***/ }),

/***/ "./vm.ts":
/*!***************!*\
  !*** ./vm.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Opcode: () => (/* binding */ Opcode),
/* harmony export */   VMStatus: () => (/* binding */ VMStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk */ "./chunk.ts");
/* harmony import */ var _disassembler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disassembler */ "./disassembler.ts");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value */ "./value.ts");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/decorators/type.decorator.js");






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
    VMStatus[VMStatus["INTERPRET_FREEZE"] = 0] = "INTERPRET_FREEZE";
    VMStatus[VMStatus["INTERPRET_INTERRUPT"] = 1] = "INTERPRET_INTERRUPT";
    VMStatus[VMStatus["INTERPRET_OK"] = 2] = "INTERPRET_OK";
    VMStatus[VMStatus["INTERPRET_COMPILE_ERROR"] = 3] = "INTERPRET_COMPILE_ERROR";
    VMStatus[VMStatus["INTERPRET_RUNTIME_ERROR"] = 4] = "INTERPRET_RUNTIME_ERROR";
})(VMStatus || (VMStatus = {}));
class VM {
    chunk;
    ip = 0;
    debug;
    dissambler;
    stack;
    globals;
    constructor({ debug = false, } = {}) {
        this.debug = debug;
        this.stack = [];
        this.globals = new Map();
    }
    init(chunk) {
        this.chunk = chunk;
        this.ip = 0;
        this.dissambler = new _disassembler__WEBPACK_IMPORTED_MODULE_1__["default"](chunk);
    }
    run(numInstructions = 1) {
        const startIp = this.ip;
        const endIp = startIp + numInstructions;
        while (this.ip < endIp) {
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
                    return { status: VMStatus.INTERPRET_OK, interrupt: undefined, save: this.getSave() };
                case Opcode.OP_NEGATE:
                    if (!this.peek().is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_NUMBER))
                        throw new Error('Operand must be a number.');
                    this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].number(-this.pop().number));
                    break;
                case Opcode.OP_ADD: {
                    const b = this.pop();
                    const a = this.pop();
                    if (a.is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_NUMBER) &&
                        b.is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_NUMBER)) {
                        this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].number(a.number + b.number));
                    }
                    else if (a.is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_OBJ) &&
                        b.is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_OBJ)) {
                        this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].str(a.toString() + b.toString()));
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
                    this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].nil());
                    break;
                case Opcode.OP_TRUE:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].bool(true));
                    break;
                case Opcode.OP_FALSE:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].bool(false));
                    break;
                case Opcode.OP_NOT:
                    this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].bool(this.isFalsey(this.pop())));
                    break;
                case Opcode.OP_EQUAL: {
                    const b = this.pop();
                    const a = this.pop();
                    this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].bool(a.equalsTo(b)));
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
                    break;
                }
                case Opcode.OP_POP:
                    this.pop();
                    break;
                case Opcode.OP_DEFINE_GLOBAL: {
                    const name = (this.chunk.getConstant(this.readByte())).str;
                    this.globals.set(name, this.pop());
                    break;
                }
                case Opcode.OP_GET_GLOBAL: {
                    const name = (this.chunk.getConstant(this.readByte()).str);
                    const value = this.globals.get(name);
                    if (!value) {
                        throw new Error(`Undefined variable '${name}'.`);
                    }
                    this.push(value);
                    break;
                }
                case Opcode.OP_SET_GLOBAL: {
                    const name = (this.chunk.getConstant(this.readByte()).str);
                    if (!this.globals.get(name)) {
                        throw new Error(`Undefined variable '${name}'.`);
                    }
                    this.globals.set(name, this.peek());
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
                    const arg = this.pop();
                    const interruptCode = this.pop();
                    return {
                        status: VMStatus.INTERPRET_INTERRUPT,
                        save: this.getSave(),
                        interrupt: {
                            code: interruptCode.str,
                            arg: arg
                        }
                    };
                }
            }
        }
        return { status: this.ip < endIp ? VMStatus.INTERPRET_FREEZE : VMStatus.INTERPRET_OK, interrupt: undefined, save: this.getSave() };
    }
    readByte() {
        const byte = this.chunk.get(this.ip);
        this.ip++;
        return byte;
    }
    readShort() {
        const byte1 = this.readByte();
        const byte2 = this.readByte();
        return (byte1 << 8) | byte2;
    }
    isFalsey(value) {
        return (value.is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_NIL) ||
            !value.bool);
    }
    binaryOp(op) {
        if (!this.peek().is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_NUMBER))
            throw new Error('Operand must be a number.');
        const b = this.pop();
        if (!this.peek().is(_value__WEBPACK_IMPORTED_MODULE_2__.ValueType.VAL_NUMBER))
            throw new Error('Operand must be a number.');
        const a = this.pop();
        switch (op) {
            case Opcode.OP_ADD:
                this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].number(a.number + b.number));
                break;
            case Opcode.OP_SUBTRACT:
                this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].number(a.number - b.number));
                break;
            case Opcode.OP_MULTIPLY:
                this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].number(a.number * b.number));
                break;
            case Opcode.OP_DIVIDE:
                this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].number(a.number / b.number));
                break;
            case Opcode.OP_GREATER:
                this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].bool(a.number > b.number));
                break;
            case Opcode.OP_LESS:
                this.push(_value__WEBPACK_IMPORTED_MODULE_2__["default"].bool(a.number < b.number));
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
    /**
     * MISC
     */
    getSave() {
        return encodeURIComponent((0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.serialize)(this));
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_6__.Type)(() => _chunk__WEBPACK_IMPORTED_MODULE_0__.Chunk),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _chunk__WEBPACK_IMPORTED_MODULE_0__.Chunk)
], VM.prototype, "chunk", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_6__.Type)(() => _disassembler__WEBPACK_IMPORTED_MODULE_1__["default"]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _disassembler__WEBPACK_IMPORTED_MODULE_1__["default"])
], VM.prototype, "dissambler", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_6__.Type)(() => _value__WEBPACK_IMPORTED_MODULE_2__["default"]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Array)
], VM.prototype, "stack", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_6__.Type)(() => _value__WEBPACK_IMPORTED_MODULE_2__["default"]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Map)
], VM.prototype, "globals", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VM);


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.mjs":
/*!*******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./webport.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-shim */ "../node_modules/es6-shim/es6-shim.js");
/* harmony import */ var es6_shim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_shim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interpret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpret */ "./interpret.ts");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "./vm.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/index.js");





const begin = (sourceCode) => {
    const _ = `
    syscall "is.workflow.actions.showresult", "asdas";
    
    let i = 0; 
    for(let j=0; j<1; j=j+1){
        while(i< 100) 
            i = i + 1;         
    }
    syscall "is.workflow.actions.skipforward";
    `;
    //console.log(encodeURIComponent(_));
    const source = _; //sourceCode; //sourceCode;
    if (!source) {
        console.log('No source code found in query params.');
        return;
    }
    const result = (0,_interpret__WEBPACK_IMPORTED_MODULE_2__["default"])(source);
    console.log(result);
    document.write(JSON.stringify(result));
};
const resume = (save) => {
    const vm = (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.plainToInstance)(_vm__WEBPACK_IMPORTED_MODULE_3__["default"], JSON.parse(save));
    const res = vm.run(50);
    document.write(JSON.stringify(res));
    console.log(res);
};
(() => {
    const params = new URLSearchParams(window.location.search);
    const state = params.get('resume');
    const sourceCode = params.get('begin');
    try {
        if (state) {
            resume(state);
        }
        else if (sourceCode) {
            begin(decodeURIComponent(sourceCode));
        }
    }
    catch (e) {
        document.write(JSON.stringify(e));
    }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNkNBQTZDLHVCQUF1QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7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QUNBLHVDQUF1QztBQUN2QztBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7O0FBRXRCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLHNCQUFzQjtBQUMvSCxTQUFTOztBQUVUO0FBQ0EsMENBQTBDO0FBQzFDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFD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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxVQUFVO0FBQ3pFO0FBQ0Esb0lBQW9JLGFBQWE7QUFDako7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQWdEO0FBQ3BGLDBCQUEwQiw0Q0FBNEM7QUFDdEUsOEJBQThCLDhDQUE4QztBQUM1RSw0QkFBNEIsMENBQTBDO0FBQ3RFLDhCQUE4QiwyQ0FBMkM7QUFDekUsMkNBQTJDLHFEQUFxRDtBQUNoRyx3Q0FBd0MsbURBQW1EO0FBQzNGLGtDQUFrQywwQ0FBMEM7QUFDNUUsK0JBQStCLCtDQUErQztBQUM5RSw4QkFBOEIsOENBQThDO0FBQzVFLGdDQUFnQywrQ0FBK0M7QUFDL0UsMEJBQTBCLDRDQUE0QztBQUN0RSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEMsc0RBQXNELGVBQWU7QUFDckUsOENBQThDLGVBQWU7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0EsOEJBQThCLEtBQUssZUFBZTtBQUNsRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEMsbURBQW1ELGdEQUFnRDtBQUNuRyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3R6SEQ7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQU0sZ0JBQWdCLHFCQUFNO0FBQ3REO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrREFBa0Q7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFLDhCQUE4QixnQkFBZ0Isa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esb0NBQW9DLHdCQUF3QixpQkFBaUI7QUFDN0Usb0NBQW9DLHdCQUF3QixJQUFJO0FBQ2hFO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx1QkFBdUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMEJBQTBCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtB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QUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLElBQUk7UUFDQSxJQUFJLEtBQUssRUFBRTtZQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjthQUNJLElBQUksVUFBVSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0o7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9DbGFzc1RyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9NZXRhZGF0YVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L1RyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9jb25zdGFudHMvZGVmYXVsdC1vcHRpb25zLmNvbnN0YW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9kZWNvcmF0b3JzL2V4Y2x1ZGUuZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9kZWNvcmF0b3JzL2V4cG9zZS5kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2RlY29yYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2RlY29yYXRvcnMvdHJhbnNmb3JtLWluc3RhbmNlLXRvLWluc3RhbmNlLmRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvZGVjb3JhdG9ycy90cmFuc2Zvcm0taW5zdGFuY2UtdG8tcGxhaW4uZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9kZWNvcmF0b3JzL3RyYW5zZm9ybS1wbGFpbi10by1pbnN0YW5jZS5kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2RlY29yYXRvcnMvdHJhbnNmb3JtLmRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvZGVjb3JhdG9ycy90eXBlLmRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvZW51bXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2VudW1zL3RyYW5zZm9ybWF0aW9uLXR5cGUuZW51bS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L3V0aWxzL2dldC1nbG9iYWwudXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvdXRpbHMvaXMtcHJvbWlzZS51dGlsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZXM2LXNoaW0vZXM2LXNoaW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWZsZWN0LW1ldGFkYXRhL1JlZmxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2h1bmsudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL2ludGVycHJldC50cyIsIndlYnBhY2s6Ly8vLi9zY2FubmVyLnRzIiwid2VicGFjazovLy8uL3ZhbHVlLnRzIiwid2VicGFjazovLy8uL3ZtLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vd2VicG9ydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IgfSBmcm9tICcuL1RyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yJztcbmltcG9ydCB7IFRyYW5zZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL2NvbnN0YW50cy9kZWZhdWx0LW9wdGlvbnMuY29uc3RhbnQnO1xudmFyIENsYXNzVHJhbnNmb3JtZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xhc3NUcmFuc2Zvcm1lcigpIHtcbiAgICB9XG4gICAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuaW5zdGFuY2VUb1BsYWluID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZXhlY3V0b3IgPSBuZXcgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IoVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiBleGVjdXRvci50cmFuc2Zvcm0odW5kZWZpbmVkLCBvYmplY3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5jbGFzc1RvUGxhaW5Gcm9tRXhpc3QgPSBmdW5jdGlvbiAob2JqZWN0LCBwbGFpbk9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZXhlY3V0b3IgPSBuZXcgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IoVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiBleGVjdXRvci50cmFuc2Zvcm0ocGxhaW5PYmplY3QsIG9iamVjdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLnBsYWluVG9JbnN0YW5jZSA9IGZ1bmN0aW9uIChjbHMsIHBsYWluLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBleGVjdXRvciA9IG5ldyBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcihUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dG9yLnRyYW5zZm9ybSh1bmRlZmluZWQsIHBsYWluLCBjbHMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIH07XG4gICAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUucGxhaW5Ub0NsYXNzRnJvbUV4aXN0ID0gZnVuY3Rpb24gKGNsc09iamVjdCwgcGxhaW4sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGV4ZWN1dG9yID0gbmV3IFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yKFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUywgX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gZXhlY3V0b3IudHJhbnNmb3JtKGNsc09iamVjdCwgcGxhaW4sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5pbnN0YW5jZVRvSW5zdGFuY2UgPSBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBleGVjdXRvciA9IG5ldyBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcihUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dG9yLnRyYW5zZm9ybSh1bmRlZmluZWQsIG9iamVjdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLmNsYXNzVG9DbGFzc0Zyb21FeGlzdCA9IGZ1bmN0aW9uIChvYmplY3QsIGZyb21PYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGV4ZWN1dG9yID0gbmV3IFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yKFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUywgX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gZXhlY3V0b3IudHJhbnNmb3JtKGZyb21PYmplY3QsIG9iamVjdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaW5zdGFuY2VUb1BsYWluKG9iamVjdCwgb3B0aW9ucykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIGdpdmVuIEpTT04gc3RyaW5nIHRvIGEgb2JqZWN0IG9mIHRoZSBnaXZlbiBjbGFzcy5cbiAgICAgKi9cbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5kZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChjbHMsIGpzb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGpzb25PYmplY3QgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFpblRvSW5zdGFuY2UoY2xzLCBqc29uT2JqZWN0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyBnaXZlbiBKU09OIHN0cmluZyB0byBhbiBhcnJheSBvZiBvYmplY3RzIG9mIHRoZSBnaXZlbiBjbGFzcy5cbiAgICAgKi9cbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5kZXNlcmlhbGl6ZUFycmF5ID0gZnVuY3Rpb24gKGNscywganNvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIganNvbk9iamVjdCA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWluVG9JbnN0YW5jZShjbHMsIGpzb25PYmplY3QsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIENsYXNzVHJhbnNmb3JtZXI7XG59KCkpO1xuZXhwb3J0IHsgQ2xhc3NUcmFuc2Zvcm1lciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xhc3NUcmFuc2Zvcm1lci5qcy5tYXAiLCJpbXBvcnQgeyBUcmFuc2Zvcm1hdGlvblR5cGUgfSBmcm9tICcuL2VudW1zJztcbi8qKlxuICogU3RvcmFnZSBhbGwgbGlicmFyeSBtZXRhZGF0YS5cbiAqL1xudmFyIE1ldGFkYXRhU3RvcmFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXRhZGF0YVN0b3JhZ2UoKSB7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gUHJvcGVydGllc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMuX3R5cGVNZXRhZGF0YXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybU1ldGFkYXRhcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fZXhwb3NlTWV0YWRhdGFzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9leGNsdWRlTWV0YWRhdGFzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9hbmNlc3RvcnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBBZGRlciBNZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuYWRkVHlwZU1ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5fdHlwZU1ldGFkYXRhcy5oYXMobWV0YWRhdGEudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5fdHlwZU1ldGFkYXRhcy5zZXQobWV0YWRhdGEudGFyZ2V0LCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3R5cGVNZXRhZGF0YXMuZ2V0KG1ldGFkYXRhLnRhcmdldCkuc2V0KG1ldGFkYXRhLnByb3BlcnR5TmFtZSwgbWV0YWRhdGEpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5hZGRUcmFuc2Zvcm1NZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zZm9ybU1ldGFkYXRhcy5oYXMobWV0YWRhdGEudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtTWV0YWRhdGFzLnNldChtZXRhZGF0YS50YXJnZXQsIG5ldyBNYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2Zvcm1NZXRhZGF0YXMuZ2V0KG1ldGFkYXRhLnRhcmdldCkuaGFzKG1ldGFkYXRhLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybU1ldGFkYXRhcy5nZXQobWV0YWRhdGEudGFyZ2V0KS5zZXQobWV0YWRhdGEucHJvcGVydHlOYW1lLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtTWV0YWRhdGFzLmdldChtZXRhZGF0YS50YXJnZXQpLmdldChtZXRhZGF0YS5wcm9wZXJ0eU5hbWUpLnB1c2gobWV0YWRhdGEpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5hZGRFeHBvc2VNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuX2V4cG9zZU1ldGFkYXRhcy5oYXMobWV0YWRhdGEudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5fZXhwb3NlTWV0YWRhdGFzLnNldChtZXRhZGF0YS50YXJnZXQsIG5ldyBNYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZXhwb3NlTWV0YWRhdGFzLmdldChtZXRhZGF0YS50YXJnZXQpLnNldChtZXRhZGF0YS5wcm9wZXJ0eU5hbWUsIG1ldGFkYXRhKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuYWRkRXhjbHVkZU1ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5fZXhjbHVkZU1ldGFkYXRhcy5oYXMobWV0YWRhdGEudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5fZXhjbHVkZU1ldGFkYXRhcy5zZXQobWV0YWRhdGEudGFyZ2V0LCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2V4Y2x1ZGVNZXRhZGF0YXMuZ2V0KG1ldGFkYXRhLnRhcmdldCkuc2V0KG1ldGFkYXRhLnByb3BlcnR5TmFtZSwgbWV0YWRhdGEpO1xuICAgIH07XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFB1YmxpYyBNZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZmluZFRyYW5zZm9ybU1ldGFkYXRhcyA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSwgdHJhbnNmb3JtYXRpb25UeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRNZXRhZGF0YXModGhpcy5fdHJhbnNmb3JtTWV0YWRhdGFzLCB0YXJnZXQsIHByb3BlcnR5TmFtZSkuZmlsdGVyKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFtZXRhZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm9wdGlvbnMudG9DbGFzc09ubHkgPT09IHRydWUgJiYgbWV0YWRhdGEub3B0aW9ucy50b1BsYWluT25seSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5vcHRpb25zLnRvQ2xhc3NPbmx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUyB8fFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEub3B0aW9ucy50b1BsYWluT25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19QTEFJTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZmluZEV4Y2x1ZGVNZXRhZGF0YSA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kTWV0YWRhdGEodGhpcy5fZXhjbHVkZU1ldGFkYXRhcywgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5maW5kRXhwb3NlTWV0YWRhdGEgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZE1ldGFkYXRhKHRoaXMuX2V4cG9zZU1ldGFkYXRhcywgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5maW5kRXhwb3NlTWV0YWRhdGFCeUN1c3RvbU5hbWUgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4cG9zZWRNZXRhZGF0YXModGFyZ2V0KS5maW5kKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhLm9wdGlvbnMgJiYgbWV0YWRhdGEub3B0aW9ucy5uYW1lID09PSBuYW1lO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZmluZFR5cGVNZXRhZGF0YSA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kTWV0YWRhdGEodGhpcy5fdHlwZU1ldGFkYXRhcywgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRTdHJhdGVneSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGV4Y2x1ZGVNYXAgPSB0aGlzLl9leGNsdWRlTWV0YWRhdGFzLmdldCh0YXJnZXQpO1xuICAgICAgICB2YXIgZXhjbHVkZSA9IGV4Y2x1ZGVNYXAgJiYgZXhjbHVkZU1hcC5nZXQodW5kZWZpbmVkKTtcbiAgICAgICAgdmFyIGV4cG9zZU1hcCA9IHRoaXMuX2V4cG9zZU1ldGFkYXRhcy5nZXQodGFyZ2V0KTtcbiAgICAgICAgdmFyIGV4cG9zZSA9IGV4cG9zZU1hcCAmJiBleHBvc2VNYXAuZ2V0KHVuZGVmaW5lZCk7XG4gICAgICAgIGlmICgoZXhjbHVkZSAmJiBleHBvc2UpIHx8ICghZXhjbHVkZSAmJiAhZXhwb3NlKSlcbiAgICAgICAgICAgIHJldHVybiAnbm9uZSc7XG4gICAgICAgIHJldHVybiBleGNsdWRlID8gJ2V4Y2x1ZGVBbGwnIDogJ2V4cG9zZUFsbCc7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmdldEV4cG9zZWRNZXRhZGF0YXMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKHRoaXMuX2V4cG9zZU1ldGFkYXRhcywgdGFyZ2V0KTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZ2V0RXhjbHVkZWRNZXRhZGF0YXMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKHRoaXMuX2V4Y2x1ZGVNZXRhZGF0YXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmdldEV4cG9zZWRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRhcmdldCwgdHJhbnNmb3JtYXRpb25UeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4cG9zZWRNZXRhZGF0YXModGFyZ2V0KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGEub3B0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5vcHRpb25zLnRvQ2xhc3NPbmx5ID09PSB0cnVlICYmIG1ldGFkYXRhLm9wdGlvbnMudG9QbGFpbk9ubHkgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEub3B0aW9ucy50b0NsYXNzT25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MgfHxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm9wdGlvbnMudG9QbGFpbk9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1ldGFkYXRhKSB7IHJldHVybiBtZXRhZGF0YS5wcm9wZXJ0eU5hbWU7IH0pO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRFeGNsdWRlZFByb3BlcnRpZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCB0cmFuc2Zvcm1hdGlvblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjbHVkZWRNZXRhZGF0YXModGFyZ2V0KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGEub3B0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5vcHRpb25zLnRvQ2xhc3NPbmx5ID09PSB0cnVlICYmIG1ldGFkYXRhLm9wdGlvbnMudG9QbGFpbk9ubHkgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEub3B0aW9ucy50b0NsYXNzT25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MgfHxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm9wdGlvbnMudG9QbGFpbk9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1ldGFkYXRhKSB7IHJldHVybiBtZXRhZGF0YS5wcm9wZXJ0eU5hbWU7IH0pO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdHlwZU1ldGFkYXRhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9leHBvc2VNZXRhZGF0YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fZXhjbHVkZU1ldGFkYXRhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9hbmNlc3RvcnNNYXAuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIE1ldGhvZHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YXMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tVGFyZ2V0TWFwID0gbWV0YWRhdGFzLmdldCh0YXJnZXQpO1xuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tVGFyZ2V0O1xuICAgICAgICBpZiAobWV0YWRhdGFGcm9tVGFyZ2V0TWFwKSB7XG4gICAgICAgICAgICBtZXRhZGF0YUZyb21UYXJnZXQgPSBBcnJheS5mcm9tKG1ldGFkYXRhRnJvbVRhcmdldE1hcC52YWx1ZXMoKSkuZmlsdGVyKGZ1bmN0aW9uIChtZXRhKSB7IHJldHVybiBtZXRhLnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkOyB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tQW5jZXN0b3JzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmdldEFuY2VzdG9ycyh0YXJnZXQpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGFuY2VzdG9yID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGFuY2VzdG9yTWV0YWRhdGFNYXAgPSBtZXRhZGF0YXMuZ2V0KGFuY2VzdG9yKTtcbiAgICAgICAgICAgIGlmIChhbmNlc3Rvck1ldGFkYXRhTWFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGFkYXRhRnJvbUFuY2VzdG9yID0gQXJyYXkuZnJvbShhbmNlc3Rvck1ldGFkYXRhTWFwLnZhbHVlcygpKS5maWx0ZXIoZnVuY3Rpb24gKG1ldGEpIHsgcmV0dXJuIG1ldGEucHJvcGVydHlOYW1lICE9PSB1bmRlZmluZWQ7IH0pO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhRnJvbUFuY2VzdG9ycy5wdXNoLmFwcGx5KG1ldGFkYXRhRnJvbUFuY2VzdG9ycywgbWV0YWRhdGFGcm9tQW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhZGF0YUZyb21BbmNlc3RvcnMuY29uY2F0KG1ldGFkYXRhRnJvbVRhcmdldCB8fCBbXSk7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmZpbmRNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YXMsIHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUZyb21UYXJnZXRNYXAgPSBtZXRhZGF0YXMuZ2V0KHRhcmdldCk7XG4gICAgICAgIGlmIChtZXRhZGF0YUZyb21UYXJnZXRNYXApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YUZyb21UYXJnZXQgPSBtZXRhZGF0YUZyb21UYXJnZXRNYXAuZ2V0KHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGFGcm9tVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhRnJvbVRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5nZXRBbmNlc3RvcnModGFyZ2V0KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBhbmNlc3RvciA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBhbmNlc3Rvck1ldGFkYXRhTWFwID0gbWV0YWRhdGFzLmdldChhbmNlc3Rvcik7XG4gICAgICAgICAgICBpZiAoYW5jZXN0b3JNZXRhZGF0YU1hcCkge1xuICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvclJlc3VsdCA9IGFuY2VzdG9yTWV0YWRhdGFNYXAuZ2V0KHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFuY2VzdG9yUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmNlc3RvclJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZmluZE1ldGFkYXRhcyA9IGZ1bmN0aW9uIChtZXRhZGF0YXMsIHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUZyb21UYXJnZXRNYXAgPSBtZXRhZGF0YXMuZ2V0KHRhcmdldCk7XG4gICAgICAgIHZhciBtZXRhZGF0YUZyb21UYXJnZXQ7XG4gICAgICAgIGlmIChtZXRhZGF0YUZyb21UYXJnZXRNYXApIHtcbiAgICAgICAgICAgIG1ldGFkYXRhRnJvbVRhcmdldCA9IG1ldGFkYXRhRnJvbVRhcmdldE1hcC5nZXQocHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tQW5jZXN0b3JzVGFyZ2V0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmdldEFuY2VzdG9ycyh0YXJnZXQpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGFuY2VzdG9yID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGFuY2VzdG9yTWV0YWRhdGFNYXAgPSBtZXRhZGF0YXMuZ2V0KGFuY2VzdG9yKTtcbiAgICAgICAgICAgIGlmIChhbmNlc3Rvck1ldGFkYXRhTWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuY2VzdG9yTWV0YWRhdGFNYXAuaGFzKHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFGcm9tQW5jZXN0b3JzVGFyZ2V0LnB1c2guYXBwbHkobWV0YWRhdGFGcm9tQW5jZXN0b3JzVGFyZ2V0LCBhbmNlc3Rvck1ldGFkYXRhTWFwLmdldChwcm9wZXJ0eU5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhRnJvbUFuY2VzdG9yc1RhcmdldFxuICAgICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgIC5jb25jYXQoKG1ldGFkYXRhRnJvbVRhcmdldCB8fCBbXSkuc2xpY2UoKS5yZXZlcnNlKCkpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRBbmNlc3RvcnMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBpZiAoIXRoaXMuX2FuY2VzdG9yc01hcC5oYXModGFyZ2V0KSkge1xuICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldC5wcm90b3R5cGUuY29uc3RydWN0b3IpOyB0eXBlb2YgYmFzZUNsYXNzLnByb3RvdHlwZSAhPT0gJ3VuZGVmaW5lZCc7IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgICAgIGFuY2VzdG9ycy5wdXNoKGJhc2VDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hbmNlc3RvcnNNYXAuc2V0KHRhcmdldCwgYW5jZXN0b3JzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jZXN0b3JzTWFwLmdldCh0YXJnZXQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1ldGFkYXRhU3RvcmFnZTtcbn0oKSk7XG5leHBvcnQgeyBNZXRhZGF0YVN0b3JhZ2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1ldGFkYXRhU3RvcmFnZS5qcy5tYXAiLCJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgeyBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IFRyYW5zZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsLCBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzJztcbmZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlUeXBlKGFycmF5VHlwZSkge1xuICAgIHZhciBhcnJheSA9IG5ldyBhcnJheVR5cGUoKTtcbiAgICBpZiAoIShhcnJheSBpbnN0YW5jZW9mIFNldCkgJiYgISgncHVzaCcgaW4gYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxudmFyIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb25zdHJ1Y3RvclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcih0cmFuc2Zvcm1hdGlvblR5cGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPSB0cmFuc2Zvcm1hdGlvblR5cGU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy5yZWN1cnNpb25TdGFjayA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFB1YmxpYyBNZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc291cmNlLCB2YWx1ZSwgdGFyZ2V0VHlwZSwgYXJyYXlUeXBlLCBpc01hcCwgbGV2ZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGxldmVsID09PSB2b2lkIDApIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlXzEgPSBhcnJheVR5cGUgJiYgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTU1xuICAgICAgICAgICAgICAgID8gaW5zdGFudGlhdGVBcnJheVR5cGUoYXJyYXlUeXBlKVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJWYWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViU291cmNlID0gc291cmNlID8gc291cmNlW2luZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuZW5hYmxlQ2lyY3VsYXJDaGVjayB8fCAhX3RoaXMuaXNDaXJjdWxhcihzdWJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWxUYXJnZXRUeXBlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFR5cGUgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFR5cGUub3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VHlwZS5vcHRpb25zLmRpc2NyaW1pbmF0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFR5cGUub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5zdWJUeXBlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFRhcmdldFR5cGUgPSB0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5zdWJUeXBlcy5maW5kKGZ1bmN0aW9uIChzdWJUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJUeXBlLm5hbWUgPT09IHN1YlZhbHVlW3RhcmdldFR5cGUub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgbmV3T2JqZWN0OiBuZXdWYWx1ZV8xLCBvYmplY3Q6IHN1YlZhbHVlLCBwcm9wZXJ0eTogdW5kZWZpbmVkIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1R5cGUgPSB0YXJnZXRUeXBlLnR5cGVGdW5jdGlvbihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVGFyZ2V0VHlwZSA9PT0gdW5kZWZpbmVkID8gKHJlYWxUYXJnZXRUeXBlID0gbmV3VHlwZSkgOiAocmVhbFRhcmdldFR5cGUgPSByZWFsVGFyZ2V0VHlwZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUeXBlLm9wdGlvbnMua2VlcERpc2NyaW1pbmF0b3JQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN1YlZhbHVlW3RhcmdldFR5cGUub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxUYXJnZXRUeXBlID0gc3ViVmFsdWUuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZVt0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eV0gPSB0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5zdWJUeXBlcy5maW5kKGZ1bmN0aW9uIChzdWJUeXBlKSB7IHJldHVybiBzdWJUeXBlLnZhbHVlID09PSBzdWJWYWx1ZS5jb25zdHJ1Y3RvcjsgfSkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxUYXJnZXRUeXBlID0gdGFyZ2V0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IF90aGlzLnRyYW5zZm9ybShzdWJTb3VyY2UsIHN1YlZhbHVlLCByZWFsVGFyZ2V0VHlwZSwgdW5kZWZpbmVkLCBzdWJWYWx1ZSBpbnN0YW5jZW9mIE1hcCwgbGV2ZWwgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlXzEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlXzEuYWRkKHZhbHVlXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVfMS5wdXNoKHZhbHVlXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZV8xIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZV8xLmFkZChzdWJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZV8xLnB1c2goc3ViVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWVfMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBTdHJpbmcgJiYgIWlzTWFwKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBOdW1iZXIgJiYgIWlzTWFwKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBCb29sZWFuICYmICFpc01hcCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0YXJnZXRUeXBlID09PSBEYXRlIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgIWlzTWFwKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCEhZ2V0R2xvYmFsKCkuQnVmZmVyICYmICh0YXJnZXRUeXBlID09PSBCdWZmZXIgfHwgdmFsdWUgaW5zdGFuY2VvZiBCdWZmZXIpICYmICFpc01hcCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1Byb21pc2UodmFsdWUpICYmICFpc01hcCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiByZXNvbHZlKF90aGlzLnRyYW5zZm9ybSh1bmRlZmluZWQsIGRhdGEsIHRhcmdldFR5cGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBsZXZlbCArIDEpKTsgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc01hcCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBXZSBzaG91bGQgbm90IGVudGVyIHRoaXMsIGFzIHByb21pc2UgaGFzIGJlZW4gaGFuZGxlZCBhYm92ZVxuICAgICAgICAgICAgLy8gVGhpcyBvcHRpb24gc2ltcGx5IHJldHVybnMgdGhlIFByb21pc2UgcHJldmVudGluZyBhIEpTIGVycm9yIGZyb20gaGFwcGVuaW5nIGFuZCBzaG91bGQgYmUgYW4gaW5hY2Nlc3NpYmxlIHBhdGguXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7IC8vIHNraXAgcHJvbWlzZSB0cmFuc2Zvcm1hdGlvblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHRyeSB0byBndWVzcyB0aGUgdHlwZVxuICAgICAgICAgICAgaWYgKCF0YXJnZXRUeXBlICYmIHZhbHVlLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgLyogJiYgVHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU4qLylcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb21lYm9keSBhdHRlbXB0cyB0byBjb252ZXJ0IHNwZWNpYWwgQXJyYXkgbGlrZSBvYmplY3QgdG8gQXJyYXksIGVnOlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBldmlsT2JqZWN0ID0geyAnMTAwMDAwMDAwJzogJzEwMDAwMDAwMCcsIF9fcHJvdG9fXzogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGNhdXNlIERlbmlhbC1vZi1zZXJ2aWNlIGF0dGFjayBzbyB3ZSBkb24ndCBhbGxvdyBpdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIHByZXZlbnQtYXJyYXktYm9tYi5zcGVjLnRzIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgZ29vZCB3ZSBjYW4gdXNlIHRoZSBidWlsdC1pbiBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUeXBlID0gdmFsdWUuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXRUeXBlICYmIHNvdXJjZSlcbiAgICAgICAgICAgICAgICB0YXJnZXRUeXBlID0gc291cmNlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVDaXJjdWxhckNoZWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIHRyYW5zZm9ybWVkIHR5cGUgdG8gcHJldmVudCBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgdGhpcy5yZWN1cnNpb25TdGFjay5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmdldEtleXModGFyZ2V0VHlwZSwgdmFsdWUsIGlzTWFwKTtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHNvdXJjZSA/IHNvdXJjZSA6IHt9O1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UgJiZcbiAgICAgICAgICAgICAgICAodGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01hcCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ldyB0YXJnZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdfX3Byb3RvX18nIHx8IGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVLZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlS2V5ID0ga2V5LCBwcm9wZXJ0eU5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzXzEub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRhcmdldFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cG9zZU1ldGFkYXRhID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5maW5kRXhwb3NlTWV0YWRhdGFCeUN1c3RvbU5hbWUodGFyZ2V0VHlwZSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBvc2VNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IGV4cG9zZU1ldGFkYXRhLnByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZUtleSA9IGV4cG9zZU1ldGFkYXRhLnByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU4gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cG9zZU1ldGFkYXRhID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5maW5kRXhwb3NlTWV0YWRhdGEodGFyZ2V0VHlwZSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBvc2VNZXRhZGF0YSAmJiBleHBvc2VNZXRhZGF0YS5vcHRpb25zICYmIGV4cG9zZU1ldGFkYXRhLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlS2V5ID0gZXhwb3NlTWV0YWRhdGEub3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGdldCBhIHN1YnZhbHVlXG4gICAgICAgICAgICAgICAgdmFyIHN1YlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc2VjdGlvbiBpcyBhZGRlZCBmb3IgdGhlIGZvbGxvd2luZyByZXBvcnQ6XG4gICAgICAgICAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90eXBlc3RhY2svY2xhc3MtdHJhbnNmb3JtZXIvaXNzdWVzLzU5NlxuICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgKiBXZSBzaG91bGQgbm90IGNhbGwgZnVuY3Rpb25zIG9yIGNvbnN0cnVjdG9ycyB3aGVuIHRyYW5zZm9ybWluZyB0byBjbGFzcy5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHN1YlZhbHVlID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IHZhbHVlLmdldCh2YWx1ZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVbdmFsdWVLZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlZhbHVlID0gdmFsdWVbdmFsdWVLZXldKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IHZhbHVlW3ZhbHVlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgYSB0eXBlXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB1bmRlZmluZWQsIGlzU3ViVmFsdWVNYXAgPSBzdWJWYWx1ZSBpbnN0YW5jZW9mIE1hcDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VHlwZSAmJiBpc01hcCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gdGFyZ2V0VHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0YWRhdGFfMSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZFR5cGVNZXRhZGF0YSh0YXJnZXRUeXBlLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0YWRhdGFfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IG5ld09iamVjdDogbmV3VmFsdWUsIG9iamVjdDogdmFsdWUsIHByb3BlcnR5OiBwcm9wZXJ0eU5hbWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdUeXBlID0gbWV0YWRhdGFfMS50eXBlRnVuY3Rpb24gPyBtZXRhZGF0YV8xLnR5cGVGdW5jdGlvbihvcHRpb25zKSA6IG1ldGFkYXRhXzEucmVmbGVjdGVkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRhZGF0YV8xLm9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3Iuc3ViVHlwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZVt2YWx1ZUtleV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IG1ldGFkYXRhXzEub3B0aW9ucy5kaXNjcmltaW5hdG9yLnN1YlR5cGVzLmZpbmQoZnVuY3Rpb24gKHN1YlR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViVmFsdWUgJiYgc3ViVmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3IucHJvcGVydHkgaW4gc3ViVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YlR5cGUubmFtZSA9PT0gc3ViVmFsdWVbbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3IucHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gdW5kZWZpbmVkID8gKHR5cGUgPSBuZXdUeXBlKSA6ICh0eXBlID0gdHlwZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1ldGFkYXRhXzEub3B0aW9ucy5rZWVwRGlzY3JpbWluYXRvclByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YlZhbHVlICYmIHN1YlZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIG1ldGFkYXRhXzEub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5IGluIHN1YlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJWYWx1ZVttZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBzdWJWYWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZVttZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eV0gPSBtZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvci5zdWJUeXBlcy5maW5kKGZ1bmN0aW9uIChzdWJUeXBlKSB7IHJldHVybiBzdWJUeXBlLnZhbHVlID09PSBzdWJWYWx1ZS5jb25zdHJ1Y3RvcjsgfSkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IG1ldGFkYXRhXzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IG5ld1R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N1YlZhbHVlTWFwID0gaXNTdWJWYWx1ZU1hcCB8fCBtZXRhZGF0YV8xLnJlZmxlY3RlZFR5cGUgPT09IE1hcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzXzEub3B0aW9ucy50YXJnZXRNYXBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdG8gZmluZCBhIHR5cGUgaW4gdGFyZ2V0IG1hcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMS5vcHRpb25zLnRhcmdldE1hcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIG1hcC50YXJnZXQgPT09IHRhcmdldFR5cGUgJiYgISFtYXAucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuICh0eXBlID0gbWFwLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXNfMS5vcHRpb25zLmVuYWJsZUltcGxpY2l0Q29udmVyc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIG5vIHJlZ2lzdGVyZXJkIHR5cGUgdmlhIHRoZSBAVHlwZSgpIGRlY29yYXRvciB0aGVuIHdlIGNoZWNrIGlmIHdlIGhhdmUgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlIGRlY2xhcmF0aW9ucyBpbiByZWZsZWN0LW1ldGFkYXRhICh0eXBlIGRlY2xhcmF0aW9uIGlzIGVtaXRlZCBvbmx5IGlmIHNvbWUgZGVjb3JhdG9yIGlzIGFkZGVkIHRvIHRoZSBwcm9wZXJ0eS4pXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmbGVjdGVkVHlwZSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0VHlwZS5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmbGVjdGVkVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSByZWZsZWN0ZWRUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIGFuIGFycmF5IHRyeSB0byBnZXQgaXRzIGN1c3RvbSBhcnJheSB0eXBlXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5VHlwZV8xID0gQXJyYXkuaXNBcnJheSh2YWx1ZVt2YWx1ZUtleV0pXG4gICAgICAgICAgICAgICAgICAgID8gdGhpc18xLmdldFJlZmxlY3RlZFR5cGUodGFyZ2V0VHlwZSwgcHJvcGVydHlOYW1lKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzdWJWYWx1ZUtleSA9IFRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTICYmIG5ld0tleU5hbWUgPyBuZXdLZXlOYW1lIDoga2V5O1xuICAgICAgICAgICAgICAgIHZhciBzdWJTb3VyY2UgPSBzb3VyY2UgPyBzb3VyY2VbdmFsdWVLZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0cyBkZXNlcmlhbGl6YXRpb24gdGhlbiB0eXBlIGlmIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgdW5jb21tZW50IHRoaXMgdHlwZXMgbGlrZSBzdHJpbmdbXSB3aWxsIG5vdCB3b3JrXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MgJiYgIXR5cGUgJiYgc3ViVmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgIShzdWJWYWx1ZSBpbnN0YW5jZW9mIERhdGUpKVxuICAgICAgICAgICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgdHlwZSBmb3IgJHsodGFyZ2V0VHlwZSBhcyBhbnkpLm5hbWUgfS4ke3Byb3BlcnR5TmFtZX0sIGRpZCB5b3UgZm9yZ2V0IHRvIHNwZWNpZnkgYSBAVHlwZT9gKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBuZXdWYWx1ZSBpcyBhIHNvdXJjZSBvYmplY3QgdGhhdCBoYXMgbWV0aG9kIHRoYXQgbWF0Y2ggbmV3S2V5TmFtZSB0aGVuIHNraXAgaXRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXdWYWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG5ld1ZhbHVlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvdW5ib3VuZC1tZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICgoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5zZXQpIHx8IG5ld1ZhbHVlW25ld1ZhbHVlS2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpc18xLm9wdGlvbnMuZW5hYmxlQ2lyY3VsYXJDaGVjayB8fCAhdGhpc18xLmlzQ2lyY3VsYXIoc3ViVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1LZXkgPSB0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MgPyBuZXdWYWx1ZUtleSA6IGtleTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmFsVmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHZhbHVlW3RyYW5zZm9ybUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBjdXN0b20gdHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB0aGlzXzEuYXBwbHlDdXN0b21UcmFuc2Zvcm1hdGlvbnMoZmluYWxWYWx1ZSwgdGFyZ2V0VHlwZSwgdHJhbnNmb3JtS2V5LCB2YWx1ZSwgdGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3RoaW5nIGNoYW5nZSwgaXQgbWVhbnMgbm8gY3VzdG9tIHRyYW5zZm9ybWF0aW9uIHdhcyBhcHBsaWVkLCBzbyB1c2UgdGhlIHN1YlZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHZhbHVlW3RyYW5zZm9ybUtleV0gPT09IGZpbmFsVmFsdWUgPyBzdWJWYWx1ZSA6IGZpbmFsVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgZGVmYXVsdCB0cmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHRoaXNfMS50cmFuc2Zvcm0oc3ViU291cmNlLCBmaW5hbFZhbHVlLCB0eXBlLCBhcnJheVR5cGVfMSwgaXNTdWJWYWx1ZU1hcCwgbGV2ZWwgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXNfMS5vcHRpb25zLmV4cG9zZURlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZSBpZiBub3RoaW5nIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IG5ld1ZhbHVlW25ld1ZhbHVlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB0aGlzXzEudHJhbnNmb3JtKHN1YlNvdXJjZSwgc3ViVmFsdWUsIHR5cGUsIGFycmF5VHlwZV8xLCBpc1N1YlZhbHVlTWFwLCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB0aGlzXzEuYXBwbHlDdXN0b21UcmFuc2Zvcm1hdGlvbnMoZmluYWxWYWx1ZSwgdGFyZ2V0VHlwZSwgdHJhbnNmb3JtS2V5LCB2YWx1ZSwgdGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmFsVmFsdWUgIT09IHVuZGVmaW5lZCB8fCB0aGlzXzEub3B0aW9ucy5leHBvc2VVbnNldEZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuc2V0KG5ld1ZhbHVlS2V5LCBmaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW25ld1ZhbHVlS2V5XSA9IGZpbmFsVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaW5hbFZhbHVlID0gc3ViVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB0aGlzXzEuYXBwbHlDdXN0b21UcmFuc2Zvcm1hdGlvbnMoZmluYWxWYWx1ZSwgdGFyZ2V0VHlwZSwga2V5LCB2YWx1ZSwgdGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlICE9PSB1bmRlZmluZWQgfHwgdGhpc18xLm9wdGlvbnMuZXhwb3NlVW5zZXRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnNldChuZXdWYWx1ZUtleSwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtuZXdWYWx1ZUtleV0gPSBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgLy8gdHJhdmVyc2Ugb3ZlciBrZXlzXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGtleXNfMSA9IGtleXM7IF9pIDwga2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzFbX2ldO1xuICAgICAgICAgICAgICAgIF9sb29wXzEoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlQ2lyY3VsYXJDaGVjaykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdXJzaW9uU3RhY2suZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IucHJvdG90eXBlLmFwcGx5Q3VzdG9tVHJhbnNmb3JtYXRpb25zID0gZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQsIGtleSwgb2JqLCB0cmFuc2Zvcm1hdGlvblR5cGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1ldGFkYXRhcyA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZFRyYW5zZm9ybU1ldGFkYXRhcyh0YXJnZXQsIGtleSwgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAvLyBhcHBseSB2ZXJzaW9uaW5nIG9wdGlvbnNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhcyA9IG1ldGFkYXRhcy5maWx0ZXIoZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2tWZXJzaW9uKG1ldGFkYXRhLm9wdGlvbnMuc2luY2UsIG1ldGFkYXRhLm9wdGlvbnMudW50aWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwbHkgZ3JvdXBpbmcgb3B0aW9uc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmdyb3VwcyAmJiB0aGlzLm9wdGlvbnMuZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgbWV0YWRhdGFzID0gbWV0YWRhdGFzLmZpbHRlcihmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGFkYXRhLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jaGVja0dyb3VwcyhtZXRhZGF0YS5vcHRpb25zLmdyb3Vwcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1ldGFkYXRhcyA9IG1ldGFkYXRhcy5maWx0ZXIoZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFtZXRhZGF0YS5vcHRpb25zIHx8ICFtZXRhZGF0YS5vcHRpb25zLmdyb3VwcyB8fCAhbWV0YWRhdGEub3B0aW9ucy5ncm91cHMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0YWRhdGFzLmZvckVhY2goZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1ldGFkYXRhLnRyYW5zZm9ybUZuKHsgdmFsdWU6IHZhbHVlLCBrZXk6IGtleSwgb2JqOiBvYmosIHR5cGU6IHRyYW5zZm9ybWF0aW9uVHlwZSwgb3B0aW9uczogX3RoaXMub3B0aW9ucyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIC8vIHByZXZlbnRpbmcgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLnByb3RvdHlwZS5pc0NpcmN1bGFyID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWN1cnNpb25TdGFjay5oYXMob2JqZWN0KTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLnByb3RvdHlwZS5nZXRSZWZsZWN0ZWRUeXBlID0gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmICghdGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG1ldGEgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmZpbmRUeXBlTWV0YWRhdGEodGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICByZXR1cm4gbWV0YSA/IG1ldGEucmVmbGVjdGVkVHlwZSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLnByb3RvdHlwZS5nZXRLZXlzID0gZnVuY3Rpb24gKHRhcmdldCwgb2JqZWN0LCBpc01hcCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBkZXRlcm1pbmUgZXhjbHVzaW9uIHN0cmF0ZWd5XG4gICAgICAgIHZhciBzdHJhdGVneSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZ2V0U3RyYXRlZ3kodGFyZ2V0KTtcbiAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnbm9uZScpXG4gICAgICAgICAgICBzdHJhdGVneSA9IHRoaXMub3B0aW9ucy5zdHJhdGVneSB8fCAnZXhwb3NlQWxsJzsgLy8gZXhwb3NlQWxsIGlzIGRlZmF1bHQgc3RyYXRlZ3lcbiAgICAgICAgLy8gZ2V0IGFsbCBrZXlzIHRoYXQgbmVlZCB0byBleHBvc2VcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnZXhwb3NlQWxsJyB8fCBpc01hcCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIGtleXMgPSBBcnJheS5mcm9tKG9iamVjdC5rZXlzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTWFwKSB7XG4gICAgICAgICAgICAvLyBleHBvc2UgJiBleGNsdWRlIGRvIG5vdCBhcHBseSBmb3IgbWFwIGtleXMgb25seSB0byBmaWVsZHNcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBkZWNvcmF0b3JzIGFyZSBpZ25vcmVkIGJ1dCB3ZSBkb24ndCB3YW50IHRoZSBleHRyYW5lb3VzIHZhbHVlcywgdGhlbiB3ZSB1c2UgdGhlXG4gICAgICAgICAqIG1ldGFkYXRhIHRvIGRlY2lkZSB3aGljaCBwcm9wZXJ0eSBpcyBuZWVkZWQsIGJ1dCBkb2Vzbid0IGFwcGx5IHRoZSBkZWNvcmF0b3IgZWZmZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMub3B0aW9ucy5leGNsdWRlRXh0cmFuZW91c1ZhbHVlcyAmJiB0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBleHBvc2VkUHJvcGVydGllcyA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZ2V0RXhwb3NlZFByb3BlcnRpZXModGFyZ2V0LCB0aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICB2YXIgZXhjbHVkZWRQcm9wZXJ0aWVzID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5nZXRFeGNsdWRlZFByb3BlcnRpZXModGFyZ2V0LCB0aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICBrZXlzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBleHBvc2VkUHJvcGVydGllcywgdHJ1ZSksIGV4Y2x1ZGVkUHJvcGVydGllcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaWdub3JlRGVjb3JhdG9ycyAmJiB0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgZXhwb3NlZCB0byBsaXN0IG9mIGtleXNcbiAgICAgICAgICAgIHZhciBleHBvc2VkUHJvcGVydGllcyA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZ2V0RXhwb3NlZFByb3BlcnRpZXModGFyZ2V0LCB0aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUykge1xuICAgICAgICAgICAgICAgIGV4cG9zZWRQcm9wZXJ0aWVzID0gZXhwb3NlZFByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cG9zZU1ldGFkYXRhID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5maW5kRXhwb3NlTWV0YWRhdGEodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwb3NlTWV0YWRhdGEgJiYgZXhwb3NlTWV0YWRhdGEub3B0aW9ucyAmJiBleHBvc2VNZXRhZGF0YS5vcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBvc2VNZXRhZGF0YS5vcHRpb25zLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXhjbHVkZUV4dHJhbmVvdXNWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBrZXlzID0gZXhwb3NlZFByb3BlcnRpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZXhwb3NlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhjbHVkZSBleGNsdWRlZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB2YXIgZXhjbHVkZWRQcm9wZXJ0aWVzXzEgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmdldEV4Y2x1ZGVkUHJvcGVydGllcyh0YXJnZXQsIHRoaXMudHJhbnNmb3JtYXRpb25UeXBlKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZFByb3BlcnRpZXNfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFleGNsdWRlZFByb3BlcnRpZXNfMS5pbmNsdWRlcyhrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwbHkgdmVyc2lvbmluZyBvcHRpb25zXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBvc2VNZXRhZGF0YSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZEV4cG9zZU1ldGFkYXRhKHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBvc2VNZXRhZGF0YSB8fCAhZXhwb3NlTWV0YWRhdGEub3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2tWZXJzaW9uKGV4cG9zZU1ldGFkYXRhLm9wdGlvbnMuc2luY2UsIGV4cG9zZU1ldGFkYXRhLm9wdGlvbnMudW50aWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwbHkgZ3JvdXBpbmcgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncm91cHMgJiYgdGhpcy5vcHRpb25zLmdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwb3NlTWV0YWRhdGEgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmZpbmRFeHBvc2VNZXRhZGF0YSh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwb3NlTWV0YWRhdGEgfHwgIWV4cG9zZU1ldGFkYXRhLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNoZWNrR3JvdXBzKGV4cG9zZU1ldGFkYXRhLm9wdGlvbnMuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBvc2VNZXRhZGF0YSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZEV4cG9zZU1ldGFkYXRhKHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICghZXhwb3NlTWV0YWRhdGEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICFleHBvc2VNZXRhZGF0YS5vcHRpb25zIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhZXhwb3NlTWV0YWRhdGEub3B0aW9ucy5ncm91cHMgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICFleHBvc2VNZXRhZGF0YS5vcHRpb25zLmdyb3Vwcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGV4Y2x1ZGUgcHJlZml4ZWQgcHJvcGVydGllc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmV4Y2x1ZGVQcmVmaXhlcyAmJiB0aGlzLm9wdGlvbnMuZXhjbHVkZVByZWZpeGVzLmxlbmd0aCkge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5leGNsdWRlUHJlZml4ZXMuZXZlcnkoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBwcmVmaXgubGVuZ3RoKSAhPT0gcHJlZml4O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGhhdmUgdW5pcXVlIGtleXNcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXksIGluZGV4LCBzZWxmKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGtleSkgPT09IGluZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5wcm90b3R5cGUuY2hlY2tWZXJzaW9uID0gZnVuY3Rpb24gKHNpbmNlLCB1bnRpbCkge1xuICAgICAgICB2YXIgZGVjaXNpb24gPSB0cnVlO1xuICAgICAgICBpZiAoZGVjaXNpb24gJiYgc2luY2UpXG4gICAgICAgICAgICBkZWNpc2lvbiA9IHRoaXMub3B0aW9ucy52ZXJzaW9uID49IHNpbmNlO1xuICAgICAgICBpZiAoZGVjaXNpb24gJiYgdW50aWwpXG4gICAgICAgICAgICBkZWNpc2lvbiA9IHRoaXMub3B0aW9ucy52ZXJzaW9uIDwgdW50aWw7XG4gICAgICAgIHJldHVybiBkZWNpc2lvbjtcbiAgICB9O1xuICAgIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLnByb3RvdHlwZS5jaGVja0dyb3VwcyA9IGZ1bmN0aW9uIChncm91cHMpIHtcbiAgICAgICAgaWYgKCFncm91cHMpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ncm91cHMuc29tZShmdW5jdGlvbiAob3B0aW9uR3JvdXApIHsgcmV0dXJuIGdyb3Vwcy5pbmNsdWRlcyhvcHRpb25Hcm91cCk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5qcy5tYXAiLCIvKipcbiAqIFRoZXNlIGFyZSB0aGUgZGVmYXVsdCBvcHRpb25zIHVzZWQgYnkgYW55IHRyYW5zZm9ybWF0aW9uIG9wZXJhdGlvbi5cbiAqL1xuZXhwb3J0IHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBlbmFibGVDaXJjdWxhckNoZWNrOiBmYWxzZSxcbiAgICBlbmFibGVJbXBsaWNpdENvbnZlcnNpb246IGZhbHNlLFxuICAgIGV4Y2x1ZGVFeHRyYW5lb3VzVmFsdWVzOiBmYWxzZSxcbiAgICBleGNsdWRlUHJlZml4ZXM6IHVuZGVmaW5lZCxcbiAgICBleHBvc2VEZWZhdWx0VmFsdWVzOiBmYWxzZSxcbiAgICBleHBvc2VVbnNldEZpZWxkczogdHJ1ZSxcbiAgICBncm91cHM6IHVuZGVmaW5lZCxcbiAgICBpZ25vcmVEZWNvcmF0b3JzOiBmYWxzZSxcbiAgICBzdHJhdGVneTogdW5kZWZpbmVkLFxuICAgIHRhcmdldE1hcHM6IHVuZGVmaW5lZCxcbiAgICB2ZXJzaW9uOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC1vcHRpb25zLmNvbnN0YW50LmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlJztcbi8qKlxuICogTWFya3MgdGhlIGdpdmVuIGNsYXNzIG9yIHByb3BlcnR5IGFzIGV4Y2x1ZGVkLiBCeSBkZWZhdWx0IHRoZSBwcm9wZXJ0eSBpcyBleGNsdWRlZCBpbiBib3RoXG4gKiBjb25zdHJ1Y3RvclRvUGxhaW4gYW5kIHBsYWluVG9Db25zdHJ1Y3RvciB0cmFuc2Zvcm1hdGlvbnMuIEl0IGNhbiBiZSBsaW1pdGVkIHRvIG9ubHkgb25lIGRpcmVjdGlvblxuICogdmlhIHVzaW5nIHRoZSBgdG9QbGFpbk9ubHlgIG9yIGB0b0NsYXNzT25seWAgb3B0aW9uLlxuICpcbiAqIENhbiBiZSBhcHBsaWVkIHRvIGNsYXNzIGRlZmluaXRpb25zIGFuZCBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRXhjbHVkZShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvKipcbiAgICAgKiBOT1RFOiBUaGUgYHByb3BlcnR5TmFtZWAgcHJvcGVydHkgbXVzdCBiZSBtYXJrZWQgYXMgb3B0aW9uYWwgYmVjYXVzZVxuICAgICAqIHRoaXMgZGVjb3JhdG9yIHVzZWQgYm90aCBhcyBhIGNsYXNzIGFuZCBhIHByb3BlcnR5IGRlY29yYXRvciBhbmQgdGhlXG4gICAgICogVHlwZXNjcmlwdCBjb21waWxlciB3aWxsIGZyZWFrIG91dCBpZiB3ZSBtYWtlIGl0IG1hbmRhdG9yeSBhcyBhIGNsYXNzXG4gICAgICogZGVjb3JhdG9yIG9ubHkgcmVjZWl2ZXMgb25lIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuYWRkRXhjbHVkZU1ldGFkYXRhKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0IGluc3RhbmNlb2YgRnVuY3Rpb24gPyBvYmplY3QgOiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leGNsdWRlLmRlY29yYXRvci5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZSc7XG4vKipcbiAqIE1hcmtzIHRoZSBnaXZlbiBjbGFzcyBvciBwcm9wZXJ0eSBhcyBpbmNsdWRlZC4gQnkgZGVmYXVsdCB0aGUgcHJvcGVydHkgaXMgaW5jbHVkZWQgaW4gYm90aFxuICogY29uc3RydWN0b3JUb1BsYWluIGFuZCBwbGFpblRvQ29uc3RydWN0b3IgdHJhbnNmb3JtYXRpb25zLiBJdCBjYW4gYmUgbGltaXRlZCB0byBvbmx5IG9uZSBkaXJlY3Rpb25cbiAqIHZpYSB1c2luZyB0aGUgYHRvUGxhaW5Pbmx5YCBvciBgdG9DbGFzc09ubHlgIG9wdGlvbi5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBjbGFzcyBkZWZpbml0aW9ucyBhbmQgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEV4cG9zZShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvKipcbiAgICAgKiBOT1RFOiBUaGUgYHByb3BlcnR5TmFtZWAgcHJvcGVydHkgbXVzdCBiZSBtYXJrZWQgYXMgb3B0aW9uYWwgYmVjYXVzZVxuICAgICAqIHRoaXMgZGVjb3JhdG9yIHVzZWQgYm90aCBhcyBhIGNsYXNzIGFuZCBhIHByb3BlcnR5IGRlY29yYXRvciBhbmQgdGhlXG4gICAgICogVHlwZXNjcmlwdCBjb21waWxlciB3aWxsIGZyZWFrIG91dCBpZiB3ZSBtYWtlIGl0IG1hbmRhdG9yeSBhcyBhIGNsYXNzXG4gICAgICogZGVjb3JhdG9yIG9ubHkgcmVjZWl2ZXMgb25lIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuYWRkRXhwb3NlTWV0YWRhdGEoe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IG9iamVjdCA6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cG9zZS5kZWNvcmF0b3IuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9leGNsdWRlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cG9zZS5kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0taW5zdGFuY2UtdG8taW5zdGFuY2UuZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNmb3JtLWluc3RhbmNlLXRvLXBsYWluLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zZm9ybS1wbGFpbi10by1pbnN0YW5jZS5kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0uZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZS5kZWNvcmF0b3InO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgQ2xhc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4uL0NsYXNzVHJhbnNmb3JtZXInO1xuLyoqXG4gKiBSZXR1cm4gdGhlIGNsYXNzIGluc3RhbmNlIG9ubHkgd2l0aCB0aGUgZXhwb3NlZCBwcm9wZXJ0aWVzLlxuICpcbiAqIENhbiBiZSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBhbmQgZ2V0dGVycy9zZXR0ZXJzIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm1JbnN0YW5jZVRvSW5zdGFuY2UocGFyYW1zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIHZhciBjbGFzc1RyYW5zZm9ybWVyID0gbmV3IENsYXNzVHJhbnNmb3JtZXIoKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHZhciBpc1Byb21pc2UgPSAhIXJlc3VsdCAmJiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJvbWlzZVxuICAgICAgICAgICAgICAgID8gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuaW5zdGFuY2VUb0luc3RhbmNlKGRhdGEsIHBhcmFtcyk7IH0pXG4gICAgICAgICAgICAgICAgOiBjbGFzc1RyYW5zZm9ybWVyLmluc3RhbmNlVG9JbnN0YW5jZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS1pbnN0YW5jZS10by1pbnN0YW5jZS5kZWNvcmF0b3IuanMubWFwIiwiaW1wb3J0IHsgQ2xhc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4uL0NsYXNzVHJhbnNmb3JtZXInO1xuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIG9iamVjdCBmcm9tIGNsYXNzIHRvIHBsYWluIG9iamVjdCBhbmQgcmV0dXJuIG9ubHkgd2l0aCB0aGUgZXhwb3NlZCBwcm9wZXJ0aWVzLlxuICpcbiAqIENhbiBiZSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBhbmQgZ2V0dGVycy9zZXR0ZXJzIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm1JbnN0YW5jZVRvUGxhaW4ocGFyYW1zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIHZhciBjbGFzc1RyYW5zZm9ybWVyID0gbmV3IENsYXNzVHJhbnNmb3JtZXIoKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHZhciBpc1Byb21pc2UgPSAhIXJlc3VsdCAmJiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJvbWlzZVxuICAgICAgICAgICAgICAgID8gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuaW5zdGFuY2VUb1BsYWluKGRhdGEsIHBhcmFtcyk7IH0pXG4gICAgICAgICAgICAgICAgOiBjbGFzc1RyYW5zZm9ybWVyLmluc3RhbmNlVG9QbGFpbihyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS1pbnN0YW5jZS10by1wbGFpbi5kZWNvcmF0b3IuanMubWFwIiwiaW1wb3J0IHsgQ2xhc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4uL0NsYXNzVHJhbnNmb3JtZXInO1xuLyoqXG4gKiBSZXR1cm4gdGhlIGNsYXNzIGluc3RhbmNlIG9ubHkgd2l0aCB0aGUgZXhwb3NlZCBwcm9wZXJ0aWVzLlxuICpcbiAqIENhbiBiZSBhcHBsaWVkIHRvIGZ1bmN0aW9ucyBhbmQgZ2V0dGVycy9zZXR0ZXJzIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm1QbGFpblRvSW5zdGFuY2UoY2xhc3NUeXBlLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdmFyIGNsYXNzVHJhbnNmb3JtZXIgPSBuZXcgQ2xhc3NUcmFuc2Zvcm1lcigpO1xuICAgICAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgdmFyIGlzUHJvbWlzZSA9ICEhcmVzdWx0ICYmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICByZXR1cm4gaXNQcm9taXNlXG4gICAgICAgICAgICAgICAgPyByZXN1bHQudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5wbGFpblRvSW5zdGFuY2UoY2xhc3NUeXBlLCBkYXRhLCBwYXJhbXMpOyB9KVxuICAgICAgICAgICAgICAgIDogY2xhc3NUcmFuc2Zvcm1lci5wbGFpblRvSW5zdGFuY2UoY2xhc3NUeXBlLCByZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS1wbGFpbi10by1pbnN0YW5jZS5kZWNvcmF0b3IuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdE1ldGFkYXRhU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuLyoqXG4gKiBEZWZpbmVzIGEgY3VzdG9tIGxvZ2ljIGZvciB2YWx1ZSB0cmFuc2Zvcm1hdGlvbi5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBwcm9wZXJ0aWVzIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm0odHJhbnNmb3JtRm4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5hZGRUcmFuc2Zvcm1NZXRhZGF0YSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgdHJhbnNmb3JtRm46IHRyYW5zZm9ybUZuLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS5kZWNvcmF0b3IuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdE1ldGFkYXRhU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuLyoqXG4gKiBTcGVjaWZpZXMgYSB0eXBlIG9mIHRoZSBwcm9wZXJ0eS5cbiAqIFRoZSBnaXZlbiBUeXBlRnVuY3Rpb24gY2FuIHJldHVybiBhIGNvbnN0cnVjdG9yLiBBIGRpc2NyaW1pbmF0b3IgY2FuIGJlIGdpdmVuIGluIHRoZSBvcHRpb25zLlxuICpcbiAqIENhbiBiZSBhcHBsaWVkIHRvIHByb3BlcnRpZXMgb25seS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFR5cGUodHlwZUZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciByZWZsZWN0ZWRUeXBlID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuYWRkVHlwZU1ldGFkYXRhKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICByZWZsZWN0ZWRUeXBlOiByZWZsZWN0ZWRUeXBlLFxuICAgICAgICAgICAgdHlwZUZ1bmN0aW9uOiB0eXBlRnVuY3Rpb24sXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZS5kZWNvcmF0b3IuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm1hdGlvbi10eXBlLmVudW0nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm1hdGlvblR5cGU7XG4oZnVuY3Rpb24gKFRyYW5zZm9ybWF0aW9uVHlwZSkge1xuICAgIFRyYW5zZm9ybWF0aW9uVHlwZVtUcmFuc2Zvcm1hdGlvblR5cGVbXCJQTEFJTl9UT19DTEFTU1wiXSA9IDBdID0gXCJQTEFJTl9UT19DTEFTU1wiO1xuICAgIFRyYW5zZm9ybWF0aW9uVHlwZVtUcmFuc2Zvcm1hdGlvblR5cGVbXCJDTEFTU19UT19QTEFJTlwiXSA9IDFdID0gXCJDTEFTU19UT19QTEFJTlwiO1xuICAgIFRyYW5zZm9ybWF0aW9uVHlwZVtUcmFuc2Zvcm1hdGlvblR5cGVbXCJDTEFTU19UT19DTEFTU1wiXSA9IDJdID0gXCJDTEFTU19UT19DTEFTU1wiO1xufSkoVHJhbnNmb3JtYXRpb25UeXBlIHx8IChUcmFuc2Zvcm1hdGlvblR5cGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNmb3JtYXRpb24tdHlwZS5lbnVtLmpzLm1hcCIsImltcG9ydCB7IENsYXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuL0NsYXNzVHJhbnNmb3JtZXInO1xuZXhwb3J0IHsgQ2xhc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vQ2xhc3NUcmFuc2Zvcm1lcic7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZW51bXMnO1xudmFyIGNsYXNzVHJhbnNmb3JtZXIgPSBuZXcgQ2xhc3NUcmFuc2Zvcm1lcigpO1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzVG9QbGFpbihvYmplY3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5pbnN0YW5jZVRvUGxhaW4ob2JqZWN0LCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZVRvUGxhaW4ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuaW5zdGFuY2VUb1BsYWluKG9iamVjdCwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xhc3NUb1BsYWluRnJvbUV4aXN0KG9iamVjdCwgcGxhaW5PYmplY3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5jbGFzc1RvUGxhaW5Gcm9tRXhpc3Qob2JqZWN0LCBwbGFpbk9iamVjdCwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGxhaW5Ub0NsYXNzKGNscywgcGxhaW4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5wbGFpblRvSW5zdGFuY2UoY2xzLCBwbGFpbiwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGxhaW5Ub0luc3RhbmNlKGNscywgcGxhaW4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5wbGFpblRvSW5zdGFuY2UoY2xzLCBwbGFpbiwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGxhaW5Ub0NsYXNzRnJvbUV4aXN0KGNsc09iamVjdCwgcGxhaW4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5wbGFpblRvQ2xhc3NGcm9tRXhpc3QoY2xzT2JqZWN0LCBwbGFpbiwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VUb0luc3RhbmNlKG9iamVjdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLmluc3RhbmNlVG9JbnN0YW5jZShvYmplY3QsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzVG9DbGFzc0Zyb21FeGlzdChvYmplY3QsIGZyb21PYmplY3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5jbGFzc1RvQ2xhc3NGcm9tRXhpc3Qob2JqZWN0LCBmcm9tT2JqZWN0LCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuc2VyaWFsaXplKG9iamVjdCwgb3B0aW9ucyk7XG59XG4vKipcbiAqIERlc2VyaWFsaXplcyBnaXZlbiBKU09OIHN0cmluZyB0byBhIG9iamVjdCBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG4gKlxuICogQGRlcHJlY2F0ZWQgVGhpcyBmdW5jdGlvbiBpcyBiZWluZyByZW1vdmVkLiBQbGVhc2UgdXNlIHRoZSBmb2xsb3dpbmcgaW5zdGVhZDpcbiAqIGBgYFxuICogaW5zdGFuY2VUb0NsYXNzKGNscywgSlNPTi5wYXJzZShqc29uKSwgb3B0aW9ucylcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemUoY2xzLCBqc29uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuZGVzZXJpYWxpemUoY2xzLCBqc29uLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRGVzZXJpYWxpemVzIGdpdmVuIEpTT04gc3RyaW5nIHRvIGFuIGFycmF5IG9mIG9iamVjdHMgb2YgdGhlIGdpdmVuIGNsYXNzLlxuICpcbiAqIEBkZXByZWNhdGVkIFRoaXMgZnVuY3Rpb24gaXMgYmVpbmcgcmVtb3ZlZC4gUGxlYXNlIHVzZSB0aGUgZm9sbG93aW5nIGluc3RlYWQ6XG4gKiBgYGBcbiAqIEpTT04ucGFyc2UoanNvbikubWFwKHZhbHVlID0+IGluc3RhbmNlVG9DbGFzcyhjbHMsIHZhbHVlLCBvcHRpb25zKSlcbiAqIGBgYFxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplQXJyYXkoY2xzLCBqc29uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuZGVzZXJpYWxpemVBcnJheShjbHMsIGpzb24sIG9wdGlvbnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgTWV0YWRhdGFTdG9yYWdlIH0gZnJvbSAnLi9NZXRhZGF0YVN0b3JhZ2UnO1xuLyoqXG4gKiBEZWZhdWx0IG1ldGFkYXRhIHN0b3JhZ2UgaXMgdXNlZCBhcyBzaW5nbGV0b24gYW5kIGNhbiBiZSB1c2VkIHRvIHN0b3JhZ2UgYWxsIG1ldGFkYXRhcy5cbiAqL1xuZXhwb3J0IHZhciBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlID0gbmV3IE1ldGFkYXRhU3RvcmFnZSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmFnZS5qcy5tYXAiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhY3Jvc3MgTm9kZSBhbmQgYnJvd3NlcnMuXG4gKlxuICogTm90ZTogYGdsb2JhbFRoaXNgIGlzIHRoZSBzdGFuZGFyZGl6ZWQgYXBwcm9hY2ggaG93ZXZlciBpdCBoYXMgYmVlbiBhZGRlZCB0b1xuICogTm9kZS5qcyBpbiB2ZXJzaW9uIDEyLiBXZSBuZWVkIHRvIGluY2x1ZGUgdGhpcyBzbmlwcGV0IHVudGlsIE5vZGUgMTIgRU9MLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZTogQ2Fubm90IGZpbmQgbmFtZSAnd2luZG93Jy5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBDYW5ub3QgZmluZCBuYW1lICd3aW5kb3cnLlxuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZTogQ2Fubm90IGZpbmQgbmFtZSAnc2VsZicuXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IENhbm5vdCBmaW5kIG5hbWUgJ3NlbGYnLlxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXQtZ2xvYmFsLnV0aWwuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZShwKSB7XG4gICAgcmV0dXJuIHAgIT09IG51bGwgJiYgdHlwZW9mIHAgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1wcm9taXNlLnV0aWwuanMubWFwIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2VzNi1zaGltXG4gKiBAbGljZW5zZSBlczYtc2hpbSBDb3B5cmlnaHQgMjAxMy0yMDE2IGJ5IFBhdWwgTWlsbGVyIChodHRwOi8vcGF1bG1pbGxyLmNvbSlcbiAqICAgYW5kIGNvbnRyaWJ1dG9ycywgIE1JVCBMaWNlbnNlXG4gKiBlczYtc2hpbTogdjAuMzUuNFxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW0vYmxvYi8wLjM1LjMvTElDRU5TRVxuICogRGV0YWlscyBhbmQgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW0vXG4gKi9cblxuLy8gVU1EIChVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24pXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9yZXR1cm5FeHBvcnRzLmpzXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgLypnbG9iYWwgZGVmaW5lICovXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHJvb3QucmV0dXJuRXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2FwcGx5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKEZ1bmN0aW9uLmFwcGx5KTtcbiAgdmFyIF9jYWxsID0gRnVuY3Rpb24uY2FsbC5iaW5kKEZ1bmN0aW9uLmNhbGwpO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbiAgdmFyIG5vdCA9IGZ1bmN0aW9uIG5vdFRodW5rZXIoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiBub3RUaHVuaygpIHtcbiAgICAgIHJldHVybiAhX2FwcGx5KGZ1bmMsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcbiAgdmFyIHRocm93c0Vycm9yID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICB0cnkge1xuICAgICAgZnVuYygpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIHZhbHVlT3JGYWxzZUlmVGhyb3dzID0gZnVuY3Rpb24gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuYygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQ2FsbGFibGVXaXRob3V0TmV3ID0gbm90KHRocm93c0Vycm9yKTtcbiAgdmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgT2JqZWN0LmRlZmluZVByb3BlcnR5IGV4aXN0cyBidXQgdGhyb3dzLCBpdCdzIElFIDhcbiAgICByZXR1cm4gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICd4JywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgfSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnZXR0ZXItcmV0dXJuXG4gICAgfSk7XG4gIH07XG4gIHZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuICB2YXIgZnVuY3Rpb25zSGF2ZU5hbWVzID0gKGZ1bmN0aW9uIGZvbygpIHt9KS5uYW1lID09PSAnZm9vJztcblxuICB2YXIgX2ZvckVhY2ggPSBGdW5jdGlvbi5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICB2YXIgX3JlZHVjZSA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUucmVkdWNlKTtcbiAgdmFyIF9maWx0ZXIgPSBGdW5jdGlvbi5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLmZpbHRlcik7XG4gIHZhciBfc29tZSA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuc29tZSk7XG5cbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSAmJiBuYW1lIGluIG9iamVjdCkgeyByZXR1cm47IH1cbiAgICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIERlZmluZSBjb25maWd1cmFibGUsIHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZSBwcm9wc1xuICAvLyBpZiB0aGV5IGRvbuKAmXQgZXhpc3QuXG4gIHZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwLCBmb3JjZU92ZXJyaWRlKSB7XG4gICAgX2ZvckVhY2goa2V5cyhtYXApLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIG1ldGhvZCA9IG1hcFtuYW1lXTtcbiAgICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgbWV0aG9kLCAhIWZvcmNlT3ZlcnJpZGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBfdG9TdHJpbmcgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG4gIHZhciBpc0NhbGxhYmxlID0gdHlwZW9mIC9hYmMvID09PSAnZnVuY3Rpb24nID8gZnVuY3Rpb24gSXNDYWxsYWJsZVNsb3coeCkge1xuICAgIC8vIFNvbWUgb2xkIGJyb3dzZXJzIChJRSwgRkYpIHNheSB0aGF0IHR5cGVvZiAvYWJjLyA9PT0gJ2Z1bmN0aW9uJ1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyAmJiBfdG9TdHJpbmcoeCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH0gOiBmdW5jdGlvbiBJc0NhbGxhYmxlRmFzdCh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJzsgfTtcblxuICB2YXIgVmFsdWUgPSB7XG4gICAgZ2V0dGVyOiBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgIGlmICghc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnZXR0ZXJzIHJlcXVpcmUgdHJ1ZSBFUzUgc3VwcG9ydCcpO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgfSk7XG4gICAgfSxcbiAgICBwcm94eTogZnVuY3Rpb24gKG9yaWdpbmFsT2JqZWN0LCBrZXksIHRhcmdldE9iamVjdCkge1xuICAgICAgaWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2dldHRlcnMgcmVxdWlyZSB0cnVlIEVTNSBzdXBwb3J0Jyk7XG4gICAgICB9XG4gICAgICB2YXIgb3JpZ2luYWxEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcmlnaW5hbE9iamVjdCwga2V5KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXRPYmplY3QsIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IG9yaWdpbmFsRGVzY3JpcHRvci5jb25maWd1cmFibGUsXG4gICAgICAgIGVudW1lcmFibGU6IG9yaWdpbmFsRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldEtleSgpIHsgcmV0dXJuIG9yaWdpbmFsT2JqZWN0W2tleV07IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0S2V5KHZhbHVlKSB7IG9yaWdpbmFsT2JqZWN0W2tleV0gPSB2YWx1ZTsgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICByZWRlZmluZTogZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHksIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVmaW5lQnlEZXNjcmlwdG9yOiBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xuICAgICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgb2JqZWN0W3Byb3BlcnR5XSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBwcmVzZXJ2ZVRvU3RyaW5nOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UgJiYgaXNDYWxsYWJsZShzb3VyY2UudG9TdHJpbmcpKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgJ3RvU3RyaW5nJywgc291cmNlLnRvU3RyaW5nLmJpbmQoc291cmNlKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFNpbXBsZSBzaGltIGZvciBPYmplY3QuY3JlYXRlIG9uIEVTMyBicm93c2Vyc1xuICAvLyAodW5saWtlIHJlYWwgc2hpbSwgbm8gYXR0ZW1wdCB0byBzdXBwb3J0IGBwcm90b3R5cGUgPT09IG51bGxgKVxuICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIFByb3RvdHlwZSA9IGZ1bmN0aW9uIFByb3RvdHlwZSgpIHt9O1xuICAgIFByb3RvdHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIG9iamVjdCA9IG5ldyBQcm90b3R5cGUoKTtcbiAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBrZXlzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBWYWx1ZS5kZWZpbmVCeURlc2NyaXB0b3Iob2JqZWN0LCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcblxuICB2YXIgc3VwcG9ydHNTdWJjbGFzc2luZyA9IGZ1bmN0aW9uIChDLCBmKSB7XG4gICAgaWYgKCFPYmplY3Quc2V0UHJvdG90eXBlT2YpIHsgcmV0dXJuIGZhbHNlOyAvKiBza2lwIHRlc3Qgb24gSUUgPCAxMSAqLyB9XG4gICAgcmV0dXJuIHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBTdWIgPSBmdW5jdGlvbiBTdWJjbGFzcyhhcmcpIHtcbiAgICAgICAgdmFyIG8gPSBuZXcgQyhhcmcpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobywgU3ViY2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9O1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFN1YiwgQyk7XG4gICAgICBTdWIucHJvdG90eXBlID0gY3JlYXRlKEMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBTdWIgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZihTdWIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyogZ2xvYmFsIHNlbGYsIHdpbmRvdyAqL1xuICAgIC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuICAgIC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuICAgIC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbiAgfTtcblxuICB2YXIgZ2xvYmFscyA9IGdldEdsb2JhbCgpO1xuICB2YXIgZ2xvYmFsSXNGaW5pdGUgPSBnbG9iYWxzLmlzRmluaXRlO1xuICB2YXIgX2luZGV4T2YgPSBGdW5jdGlvbi5jYWxsLmJpbmQoU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mKTtcbiAgdmFyIF9hcnJheUluZGV4T2ZBcHBseSA9IEZ1bmN0aW9uLmFwcGx5LmJpbmQoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpO1xuICB2YXIgX2NvbmNhdCA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuY29uY2F0KTtcbiAgLy8gdmFyIF9zb3J0ID0gRnVuY3Rpb24uY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5zb3J0KTtcbiAgdmFyIF9zdHJTbGljZSA9IEZ1bmN0aW9uLmNhbGwuYmluZChTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbiAgdmFyIF9wdXNoID0gRnVuY3Rpb24uY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAgdmFyIF9wdXNoQXBwbHkgPSBGdW5jdGlvbi5hcHBseS5iaW5kKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAgdmFyIF9qb2luID0gRnVuY3Rpb24uY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5qb2luKTtcbiAgdmFyIF9zaGlmdCA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuc2hpZnQpO1xuICB2YXIgX21heCA9IE1hdGgubWF4O1xuICB2YXIgX21pbiA9IE1hdGgubWluO1xuICB2YXIgX2Zsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIF9hYnMgPSBNYXRoLmFicztcbiAgdmFyIF9leHAgPSBNYXRoLmV4cDtcbiAgdmFyIF9sb2cgPSBNYXRoLmxvZztcbiAgdmFyIF9zcXJ0ID0gTWF0aC5zcXJ0O1xuICB2YXIgX2hhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICB2YXIgQXJyYXlJdGVyYXRvcjsgLy8gbWFrZSBvdXIgaW1wbGVtZW50YXRpb24gcHJpdmF0ZVxuICB2YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gIHZhciBPcmlnTWFwID0gZ2xvYmFscy5NYXA7XG4gIHZhciBvcmlnTWFwRGVsZXRlID0gT3JpZ01hcCAmJiBPcmlnTWFwLnByb3RvdHlwZVsnZGVsZXRlJ107XG4gIHZhciBvcmlnTWFwR2V0ID0gT3JpZ01hcCAmJiBPcmlnTWFwLnByb3RvdHlwZS5nZXQ7XG4gIHZhciBvcmlnTWFwSGFzID0gT3JpZ01hcCAmJiBPcmlnTWFwLnByb3RvdHlwZS5oYXM7XG4gIHZhciBvcmlnTWFwU2V0ID0gT3JpZ01hcCAmJiBPcmlnTWFwLnByb3RvdHlwZS5zZXQ7XG5cbiAgdmFyIFN5bWJvbCA9IGdsb2JhbHMuU3ltYm9sIHx8IHt9O1xuICB2YXIgc3ltYm9sU3BlY2llcyA9IFN5bWJvbC5zcGVjaWVzIHx8ICdAQHNwZWNpZXMnO1xuXG4gIHZhciBudW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTih2YWx1ZSkge1xuICAgIC8vIE5hTiAhPT0gTmFOLCBidXQgdGhleSBhcmUgaWRlbnRpY2FsLlxuICAgIC8vIE5hTnMgYXJlIHRoZSBvbmx5IG5vbi1yZWZsZXhpdmUgdmFsdWUsIGkuZS4sIGlmIHggIT09IHgsXG4gICAgLy8gdGhlbiB4IGlzIE5hTi5cbiAgICAvLyBpc05hTiBpcyBicm9rZW46IGl0IGNvbnZlcnRzIGl0cyBhcmd1bWVudCB0byBudW1iZXIsIHNvXG4gICAgLy8gaXNOYU4oJ2ZvbycpID0+IHRydWVcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xuICB9O1xuICB2YXIgbnVtYmVySXNGaW5pdGUgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gaXNGaW5pdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBnbG9iYWxJc0Zpbml0ZSh2YWx1ZSk7XG4gIH07XG4gIHZhciBfc2lnbiA9IGlzQ2FsbGFibGUoTWF0aC5zaWduKSA/IE1hdGguc2lnbiA6IGZ1bmN0aW9uIHNpZ24odmFsdWUpIHtcbiAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAobnVtYmVyID09PSAwKSB7IHJldHVybiBudW1iZXI7IH1cbiAgICBpZiAobnVtYmVySXNOYU4obnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgcmV0dXJuIG51bWJlciA8IDAgPyAtMSA6IDE7XG4gIH07XG4gIHZhciBfbG9nMXAgPSBmdW5jdGlvbiBsb2cxcCh2YWx1ZSkge1xuICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAoeCA8IC0xIHx8IG51bWJlcklzTmFOKHgpKSB7IHJldHVybiBOYU47IH1cbiAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSBJbmZpbml0eSkgeyByZXR1cm4geDsgfVxuICAgIGlmICh4ID09PSAtMSkgeyByZXR1cm4gLUluZmluaXR5OyB9XG5cbiAgICByZXR1cm4gKDEgKyB4KSAtIDEgPT09IDAgPyB4IDogeCAqIChfbG9nKDEgKyB4KSAvICgoMSArIHgpIC0gMSkpO1xuICB9O1xuXG4gIC8vIHRha2VuIGRpcmVjdGx5IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9pcy1hcmd1bWVudHMvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgLy8gY2FuIGJlIHJlcGxhY2VkIHdpdGggcmVxdWlyZSgnaXMtYXJndW1lbnRzJykgaWYgd2UgZXZlciB1c2UgYSBidWlsZCBwcm9jZXNzIGluc3RlYWRcbiAgdmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAgIHJldHVybiBfdG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgfTtcbiAgdmFyIGlzTGVnYWN5QXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGxcbiAgICAgICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgICAgICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInXG4gICAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMFxuICAgICAgJiYgX3RvU3RyaW5nKHZhbHVlKSAhPT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgJiYgX3RvU3RyaW5nKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH07XG4gIHZhciBpc0FyZ3VtZW50cyA9IGlzU3RhbmRhcmRBcmd1bWVudHMoYXJndW1lbnRzKSA/IGlzU3RhbmRhcmRBcmd1bWVudHMgOiBpc0xlZ2FjeUFyZ3VtZW50cztcblxuICB2YXIgVHlwZSA9IHtcbiAgICBwcmltaXRpdmU6IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ID09PSBudWxsIHx8ICh0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgeCAhPT0gJ29iamVjdCcpOyB9LFxuICAgIHN0cmluZzogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIF90b1N0cmluZyh4KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7IH0sXG4gICAgcmVnZXg6IGZ1bmN0aW9uICh4KSB7IHJldHVybiBfdG9TdHJpbmcoeCkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nOyB9LFxuICAgIHN5bWJvbDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZ2xvYmFscy5TeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHggPT09ICdzeW1ib2wnO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb3ZlcnJpZGVOYXRpdmUgPSBmdW5jdGlvbiBvdmVycmlkZU5hdGl2ZShvYmplY3QsIHByb3BlcnR5LCByZXBsYWNlbWVudCkge1xuICAgIHZhciBvcmlnaW5hbCA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwgcmVwbGFjZW1lbnQsIHRydWUpO1xuICAgIFZhbHVlLnByZXNlcnZlVG9TdHJpbmcob2JqZWN0W3Byb3BlcnR5XSwgb3JpZ2luYWwpO1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcbiAgdmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nICYmIFR5cGUuc3ltYm9sKFN5bWJvbCgpKTtcblxuICAvLyBUaGlzIGlzIGEgcHJpdmF0ZSBuYW1lIGluIHRoZSBlczYgc3BlYywgZXF1YWwgdG8gJ1tTeW1ib2wuaXRlcmF0b3JdJ1xuICAvLyB3ZSdyZSBnb2luZyB0byB1c2UgYW4gYXJiaXRyYXJ5IF8tcHJlZml4ZWQgbmFtZSB0byBtYWtlIG91ciBzaGltc1xuICAvLyB3b3JrIHByb3Blcmx5IHdpdGggZWFjaCBvdGhlciwgZXZlbiB0aG91Z2ggd2UgZG9uJ3QgaGF2ZSBmdWxsIEl0ZXJhdG9yXG4gIC8vIHN1cHBvcnQuICBUaGF0IGlzLCBgQXJyYXkuZnJvbShtYXAua2V5cygpKWAgd2lsbCB3b3JrLCBidXQgd2UgZG9uJ3RcbiAgLy8gcHJldGVuZCB0byBleHBvcnQgYSBcInJlYWxcIiBJdGVyYXRvciBpbnRlcmZhY2UuXG4gIHZhciAkaXRlcmF0b3IkID0gVHlwZS5zeW1ib2woU3ltYm9sLml0ZXJhdG9yKSA/IFN5bWJvbC5pdGVyYXRvciA6ICdfZXM2LXNoaW0gaXRlcmF0b3JfJztcbiAgLy8gRmlyZWZveCBzaGlwcyBhIHBhcnRpYWwgaW1wbGVtZW50YXRpb24gdXNpbmcgdGhlIG5hbWUgQEBpdGVyYXRvci5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTA3MDc3I2MxNFxuICAvLyBTbyB1c2UgdGhhdCBuYW1lIGlmIHdlIGRldGVjdCBpdC5cbiAgaWYgKGdsb2JhbHMuU2V0ICYmIHR5cGVvZiBuZXcgZ2xvYmFscy5TZXQoKVsnQEBpdGVyYXRvciddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgJGl0ZXJhdG9yJCA9ICdAQGl0ZXJhdG9yJztcbiAgfVxuXG4gIC8vIFJlZmxlY3RcbiAgaWYgKCFnbG9iYWxzLlJlZmxlY3QpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxzLCAnUmVmbGVjdCcsIHt9LCB0cnVlKTtcbiAgfVxuICB2YXIgUmVmbGVjdCA9IGdsb2JhbHMuUmVmbGVjdDtcblxuICB2YXIgJFN0cmluZyA9IFN0cmluZztcblxuICAvKiBnbG9iYWwgZG9jdW1lbnQgKi9cbiAgdmFyIGRvbUFsbCA9ICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudCkgPyBudWxsIDogZG9jdW1lbnQuYWxsO1xuICB2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBkb21BbGwgPT0gbnVsbCA/IGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PSBudWxsO1xuICB9IDogZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWRBbmROb3REb2N1bWVudEFsbCh4KSB7XG4gICAgcmV0dXJuIHggPT0gbnVsbCAmJiB4ICE9PSBkb21BbGw7XG4gIH07XG5cbiAgdmFyIEVTID0ge1xuICAgIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jYWxsXG4gICAgQ2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogW107XG4gICAgICBpZiAoIUVTLklzQ2FsbGFibGUoRikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hcHBseShGLCBWLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgUmVxdWlyZU9iamVjdENvZXJjaWJsZTogZnVuY3Rpb24gKHgsIG9wdE1lc3NhZ2UpIHtcbiAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh4KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgeCk7XG4gICAgICB9XG4gICAgICByZXR1cm4geDtcbiAgICB9LFxuXG4gICAgLy8gVGhpcyBtaWdodCBtaXNzIHRoZSBcIihub24tc3RhbmRhcmQgZXhvdGljIGFuZCBkb2VzIG5vdCBpbXBsZW1lbnRcbiAgICAvLyBbW0NhbGxdXSlcIiBjYXNlIGZyb21cbiAgICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdHlwZW9mLW9wZXJhdG9yLXJ1bnRpbWUtc2VtYW50aWNzLWV2YWx1YXRpb25cbiAgICAvLyBidXQgd2UgY2FuJ3QgZmluZCBhbnkgZXZpZGVuY2UgdGhlc2Ugb2JqZWN0cyBleGlzdCBpbiBwcmFjdGljZS5cbiAgICAvLyBJZiB3ZSBmaW5kIHNvbWUgaW4gdGhlIGZ1dHVyZSwgeW91IGNvdWxkIHRlc3QgYE9iamVjdCh4KSA9PT0geGAsXG4gICAgLy8gd2hpY2ggaXMgcmVsaWFibGUgYWNjb3JkaW5nIHRvXG4gICAgLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvb2JqZWN0XG4gICAgLy8gYnV0IGlzIG5vdCB3ZWxsIG9wdGltaXplZCBieSBydW50aW1lcyBhbmQgY3JlYXRlcyBhbiBvYmplY3RcbiAgICAvLyB3aGVuZXZlciBpdCByZXR1cm5zIGZhbHNlLCBhbmQgdGh1cyBpcyB2ZXJ5IHNsb3cuXG4gICAgVHlwZUlzT2JqZWN0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKHggPT09IHZvaWQgMCB8fCB4ID09PSBudWxsIHx8IHggPT09IHRydWUgfHwgeCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB4ID09PSBkb21BbGw7XG4gICAgfSxcblxuICAgIFRvT2JqZWN0OiBmdW5jdGlvbiAobywgb3B0TWVzc2FnZSkge1xuICAgICAgcmV0dXJuIE9iamVjdChFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKG8sIG9wdE1lc3NhZ2UpKTtcbiAgICB9LFxuXG4gICAgSXNDYWxsYWJsZTogaXNDYWxsYWJsZSxcblxuICAgIElzQ29uc3RydWN0b3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAvLyBXZSBjYW4ndCB0ZWxsIGNhbGxhYmxlcyBmcm9tIGNvbnN0cnVjdG9ycyBpbiBFUzVcbiAgICAgIHJldHVybiBFUy5Jc0NhbGxhYmxlKHgpO1xuICAgIH0sXG5cbiAgICBUb0ludDMyOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIEVTLlRvTnVtYmVyKHgpID4+IDA7XG4gICAgfSxcblxuICAgIFRvVWludDMyOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIEVTLlRvTnVtYmVyKHgpID4+PiAwO1xuICAgIH0sXG5cbiAgICBUb051bWJlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoaGFzU3ltYm9scyAmJiBfdG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBTeW1ib2xdJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICt2YWx1ZTtcbiAgICB9LFxuXG4gICAgVG9JbnRlZ2VyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBFUy5Ub051bWJlcih2YWx1ZSk7XG4gICAgICBpZiAobnVtYmVySXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhbnVtYmVySXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogX2Zsb29yKF9hYnMobnVtYmVyKSk7XG4gICAgfSxcblxuICAgIFRvTGVuZ3RoOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSBFUy5Ub0ludGVnZXIodmFsdWUpO1xuICAgICAgaWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9IC8vIGluY2x1ZGVzIGNvbnZlcnRpbmcgLTAgdG8gKzBcbiAgICAgIGlmIChsZW4gPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgeyByZXR1cm4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7IH1cbiAgICAgIHJldHVybiBsZW47XG4gICAgfSxcblxuICAgIFNhbWVWYWx1ZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIC8vIDAgPT09IC0wLCBidXQgdGhleSBhcmUgbm90IGlkZW50aWNhbC5cbiAgICAgICAgaWYgKGEgPT09IDApIHsgcmV0dXJuIDEgLyBhID09PSAxIC8gYjsgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW1iZXJJc05hTihhKSAmJiBudW1iZXJJc05hTihiKTtcbiAgICB9LFxuXG4gICAgU2FtZVZhbHVlWmVybzogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIC8vIHNhbWUgYXMgU2FtZVZhbHVlIGV4Y2VwdCBmb3IgU2FtZVZhbHVlWmVybygrMCwgLTApID09IHRydWVcbiAgICAgIHJldHVybiAoYSA9PT0gYikgfHwgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKTtcbiAgICB9LFxuXG4gICAgR2V0SXRlcmF0b3I6IGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoaXNBcmd1bWVudHMobykpIHtcbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIHN1cHBvcnQgZm9yIGBhcmd1bWVudHNgXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcihvLCAndmFsdWUnKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdEZuID0gRVMuR2V0TWV0aG9kKG8sICRpdGVyYXRvciQpO1xuICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKGl0Rm4pKSB7XG4gICAgICAgIC8vIEJldHRlciBkaWFnbm9zdGljcyBpZiBpdEZuIGlzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG5vdCBhbiBpdGVyYWJsZScpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ID0gRVMuQ2FsbChpdEZuLCBvKTtcbiAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KGl0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgaXRlcmF0b3InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdDtcbiAgICB9LFxuXG4gICAgR2V0TWV0aG9kOiBmdW5jdGlvbiAobywgcCkge1xuICAgICAgdmFyIGZ1bmMgPSBFUy5Ub09iamVjdChvKVtwXTtcbiAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZChmdW5jKSkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfVxuICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01ldGhvZCBub3QgY2FsbGFibGU6ICcgKyBwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jO1xuICAgIH0sXG5cbiAgICBJdGVyYXRvckNvbXBsZXRlOiBmdW5jdGlvbiAoaXRlclJlc3VsdCkge1xuICAgICAgcmV0dXJuICEhaXRlclJlc3VsdC5kb25lO1xuICAgIH0sXG5cbiAgICBJdGVyYXRvckNsb3NlOiBmdW5jdGlvbiAoaXRlcmF0b3IsIGNvbXBsZXRpb25Jc1Rocm93KSB7XG4gICAgICB2YXIgcmV0dXJuTWV0aG9kID0gRVMuR2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgICBpZiAocmV0dXJuTWV0aG9kID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckV4Y2VwdGlvbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlubmVyUmVzdWx0ID0gRVMuQ2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaW5uZXJFeGNlcHRpb24gPSBlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXBsZXRpb25Jc1Rocm93KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpbm5lckV4Y2VwdGlvbikge1xuICAgICAgICB0aHJvdyBpbm5lckV4Y2VwdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KGlubmVyUmVzdWx0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSXRlcmF0b3IncyByZXR1cm4gbWV0aG9kIHJldHVybmVkIGEgbm9uLW9iamVjdC5cIik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIEl0ZXJhdG9yTmV4dDogZnVuY3Rpb24gKGl0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBpdC5uZXh0KGFyZ3VtZW50c1sxXSkgOiBpdC5uZXh0KCk7XG4gICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChyZXN1bHQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCBpdGVyYXRvcicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgSXRlcmF0b3JTdGVwOiBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBFUy5JdGVyYXRvck5leHQoaXQpO1xuICAgICAgdmFyIGRvbmUgPSBFUy5JdGVyYXRvckNvbXBsZXRlKHJlc3VsdCk7XG4gICAgICByZXR1cm4gZG9uZSA/IGZhbHNlIDogcmVzdWx0O1xuICAgIH0sXG5cbiAgICBDb25zdHJ1Y3Q6IGZ1bmN0aW9uIChDLCBhcmdzLCBuZXdUYXJnZXQsIGlzRVM2aW50ZXJuYWwpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0eXBlb2YgbmV3VGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/IEMgOiBuZXdUYXJnZXQ7XG5cbiAgICAgIGlmICghaXNFUzZpbnRlcm5hbCAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBUcnkgdG8gdXNlIFJlZmxlY3QuY29uc3RydWN0IGlmIGF2YWlsYWJsZVxuICAgICAgICByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoQywgYXJncywgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIC8vIE9LLCB3ZSBoYXZlIHRvIGZha2UgaXQuICBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZVxuICAgICAgLy8gQy5bW0NvbnN0cnVjdG9yS2luZF1dID09IFwiYmFzZVwiIC0tIGJ1dCB0aGF0J3MgdGhlIG9ubHlcbiAgICAgIC8vIGtpbmQgd2UgY2FuIG1ha2UgaW4gRVM1IGNvZGUgYW55d2F5LlxuXG4gICAgICAvLyBPcmRpbmFyeUNyZWF0ZUZyb21Db25zdHJ1Y3Rvcih0YXJnZXQsIFwiJU9iamVjdFByb3RvdHlwZSVcIilcbiAgICAgIHZhciBwcm90byA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChwcm90bykpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuICAgICAgfVxuICAgICAgdmFyIG9iaiA9IGNyZWF0ZShwcm90byk7XG4gICAgICAvLyBDYWxsIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciByZXN1bHQgPSBFUy5DYWxsKEMsIG9iaiwgYXJncyk7XG4gICAgICByZXR1cm4gRVMuVHlwZUlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBvYmo7XG4gICAgfSxcblxuICAgIFNwZWNpZXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICAgICAgdmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKEMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuICAgICAgfVxuICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoQykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIGNvbnN0cnVjdG9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgUyA9IENbc3ltYm9sU3BlY2llc107XG4gICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoUykpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3RvcjtcbiAgICAgIH1cbiAgICAgIGlmICghRVMuSXNDb25zdHJ1Y3RvcihTKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgQEBzcGVjaWVzJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUztcbiAgICB9LFxuXG4gICAgQ3JlYXRlSFRNTDogZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICB2YXIgUyA9IEVTLlRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gICAgICBpZiAoYXR0cmlidXRlICE9PSAnJykge1xuICAgICAgICB2YXIgViA9IEVTLlRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgdmFyIGVzY2FwZWRWID0gVi5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgICAgIHAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgZXNjYXBlZFYgKyAnXCInO1xuICAgICAgfVxuICAgICAgdmFyIHAyID0gcDEgKyAnPic7XG4gICAgICB2YXIgcDMgPSBwMiArIFM7XG4gICAgICByZXR1cm4gcDMgKyAnPC8nICsgdGFnICsgJz4nO1xuICAgIH0sXG5cbiAgICBJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcbiAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KGFyZ3VtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgaXNSZWdFeHAgPSBhcmd1bWVudFtTeW1ib2wubWF0Y2hdO1xuICAgICAgaWYgKHR5cGVvZiBpc1JlZ0V4cCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICEhaXNSZWdFeHA7XG4gICAgICB9XG4gICAgICByZXR1cm4gVHlwZS5yZWdleChhcmd1bWVudCk7XG4gICAgfSxcblxuICAgIFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhzdHJpbmcpIHtcbiAgICAgIGlmIChoYXNTeW1ib2xzICYmIF90b1N0cmluZyhzdHJpbmcpID09PSAnW29iamVjdCBTeW1ib2xdJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRTdHJpbmcoc3RyaW5nKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gV2VsbC1rbm93biBTeW1ib2wgc2hpbXNcbiAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMgJiYgaGFzU3ltYm9scykge1xuICAgIHZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSBmdW5jdGlvbiBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSkge1xuICAgICAgaWYgKFR5cGUuc3ltYm9sKFN5bWJvbFtuYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIFN5bWJvbFtuYW1lXTtcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcbiAgICAgIHZhciBzeW0gPSBTeW1ib2xbJ2ZvciddKCdTeW1ib2wuJyArIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN5bWJvbCwgbmFtZSwge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogc3ltXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzeW07XG4gICAgfTtcbiAgICBpZiAoIVR5cGUuc3ltYm9sKFN5bWJvbC5zZWFyY2gpKSB7XG4gICAgICB2YXIgc3ltYm9sU2VhcmNoID0gZGVmaW5lV2VsbEtub3duU3ltYm9sKCdzZWFyY2gnKTtcbiAgICAgIHZhciBvcmlnaW5hbFNlYXJjaCA9IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoO1xuICAgICAgZGVmaW5lUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZSwgc3ltYm9sU2VhcmNoLCBmdW5jdGlvbiBzZWFyY2goc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsU2VhcmNoLCBzdHJpbmcsIFt0aGlzXSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzZWFyY2hTaGltID0gZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgICB2YXIgTyA9IEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQocmVnZXhwKSkge1xuICAgICAgICAgIHZhciBzZWFyY2hlciA9IEVTLkdldE1ldGhvZChyZWdleHAsIHN5bWJvbFNlYXJjaCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWFyY2hlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBFUy5DYWxsKHNlYXJjaGVyLCByZWdleHAsIFtPXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsU2VhcmNoLCBPLCBbRVMuVG9TdHJpbmcocmVnZXhwKV0pO1xuICAgICAgfTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdzZWFyY2gnLCBzZWFyY2hTaGltKTtcbiAgICB9XG4gICAgaWYgKCFUeXBlLnN5bWJvbChTeW1ib2wucmVwbGFjZSkpIHtcbiAgICAgIHZhciBzeW1ib2xSZXBsYWNlID0gZGVmaW5lV2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4gICAgICB2YXIgb3JpZ2luYWxSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuICAgICAgZGVmaW5lUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZSwgc3ltYm9sUmVwbGFjZSwgZnVuY3Rpb24gcmVwbGFjZShzdHJpbmcsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFJlcGxhY2UsIHN0cmluZywgW3RoaXMsIHJlcGxhY2VWYWx1ZV0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmVwbGFjZVNoaW0gPSBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIE8gPSBFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHNlYXJjaFZhbHVlKSkge1xuICAgICAgICAgIHZhciByZXBsYWNlciA9IEVTLkdldE1ldGhvZChzZWFyY2hWYWx1ZSwgc3ltYm9sUmVwbGFjZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBFUy5DYWxsKHJlcGxhY2VyLCBzZWFyY2hWYWx1ZSwgW08sIHJlcGxhY2VWYWx1ZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFJlcGxhY2UsIE8sIFtFUy5Ub1N0cmluZyhzZWFyY2hWYWx1ZSksIHJlcGxhY2VWYWx1ZV0pO1xuICAgICAgfTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdyZXBsYWNlJywgcmVwbGFjZVNoaW0pO1xuICAgIH1cbiAgICBpZiAoIVR5cGUuc3ltYm9sKFN5bWJvbC5zcGxpdCkpIHtcbiAgICAgIHZhciBzeW1ib2xTcGxpdCA9IGRlZmluZVdlbGxLbm93blN5bWJvbCgnc3BsaXQnKTtcbiAgICAgIHZhciBvcmlnaW5hbFNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcbiAgICAgIGRlZmluZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGUsIHN5bWJvbFNwbGl0LCBmdW5jdGlvbiBzcGxpdChzdHJpbmcsIGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsU3BsaXQsIHN0cmluZywgW3RoaXMsIGxpbWl0XSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzcGxpdFNoaW0gPSBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHZhciBPID0gRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChzZXBhcmF0b3IpKSB7XG4gICAgICAgICAgdmFyIHNwbGl0dGVyID0gRVMuR2V0TWV0aG9kKHNlcGFyYXRvciwgc3ltYm9sU3BsaXQpO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3BsaXR0ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gRVMuQ2FsbChzcGxpdHRlciwgc2VwYXJhdG9yLCBbTywgbGltaXRdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxTcGxpdCwgTywgW0VTLlRvU3RyaW5nKHNlcGFyYXRvciksIGxpbWl0XSk7XG4gICAgICB9O1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoU3RyaW5nLnByb3RvdHlwZSwgJ3NwbGl0Jywgc3BsaXRTaGltKTtcbiAgICB9XG4gICAgdmFyIHN5bWJvbE1hdGNoRXhpc3RzID0gVHlwZS5zeW1ib2woU3ltYm9sLm1hdGNoKTtcbiAgICB2YXIgc3RyaW5nTWF0Y2hJZ25vcmVzU3ltYm9sTWF0Y2ggPSBzeW1ib2xNYXRjaEV4aXN0cyAmJiAoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRmlyZWZveCA0MSwgdGhyb3VnaCBOaWdodGx5IDQ1IGhhcyBTeW1ib2wubWF0Y2gsIGJ1dCBTdHJpbmcjbWF0Y2ggaWdub3JlcyBpdC5cbiAgICAgIC8vIEZpcmVmb3ggNDAgYW5kIGJlbG93IGhhdmUgU3ltYm9sLm1hdGNoIGJ1dCBTdHJpbmcjbWF0Y2ggd29ya3MgZmluZS5cbiAgICAgIHZhciBvID0ge307XG4gICAgICBvW1N5bWJvbC5tYXRjaF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MjsgfTtcbiAgICAgIHJldHVybiAnYScubWF0Y2gobykgIT09IDQyO1xuICAgIH0oKSk7XG4gICAgaWYgKCFzeW1ib2xNYXRjaEV4aXN0cyB8fCBzdHJpbmdNYXRjaElnbm9yZXNTeW1ib2xNYXRjaCkge1xuICAgICAgdmFyIHN5bWJvbE1hdGNoID0gZGVmaW5lV2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4gICAgICB2YXIgb3JpZ2luYWxNYXRjaCA9IFN0cmluZy5wcm90b3R5cGUubWF0Y2g7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlLCBzeW1ib2xNYXRjaCwgZnVuY3Rpb24gbWF0Y2goc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsTWF0Y2gsIHN0cmluZywgW3RoaXNdKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbWF0Y2hTaGltID0gZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICAgIHZhciBPID0gRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChyZWdleHApKSB7XG4gICAgICAgICAgdmFyIG1hdGNoZXIgPSBFUy5HZXRNZXRob2QocmVnZXhwLCBzeW1ib2xNYXRjaCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIEVTLkNhbGwobWF0Y2hlciwgcmVnZXhwLCBbT10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbE1hdGNoLCBPLCBbRVMuVG9TdHJpbmcocmVnZXhwKV0pO1xuICAgICAgfTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdtYXRjaCcsIG1hdGNoU2hpbSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHdyYXBDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIHdyYXBDb25zdHJ1Y3RvcihvcmlnaW5hbCwgcmVwbGFjZW1lbnQsIGtleXNUb1NraXApIHtcbiAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKHJlcGxhY2VtZW50LCBvcmlnaW5hbCk7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gc2V0cyB1cCBwcm9wZXIgcHJvdG90eXBlIGNoYWluIHdoZXJlIHBvc3NpYmxlXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yob3JpZ2luYWwsIHJlcGxhY2VtZW50KTtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgIF9mb3JFYWNoKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9yaWdpbmFsKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5IGluIG5vb3AgfHwga2V5c1RvU2tpcFtrZXldKSB7IHJldHVybjsgfVxuICAgICAgICBWYWx1ZS5wcm94eShvcmlnaW5hbCwga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2ZvckVhY2goT2JqZWN0LmtleXMob3JpZ2luYWwpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gbm9vcCB8fCBrZXlzVG9Ta2lwW2tleV0pIHsgcmV0dXJuOyB9XG4gICAgICAgIHJlcGxhY2VtZW50W2tleV0gPSBvcmlnaW5hbFtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJlcGxhY2VtZW50LnByb3RvdHlwZSA9IG9yaWdpbmFsLnByb3RvdHlwZTtcbiAgICBWYWx1ZS5yZWRlZmluZShvcmlnaW5hbC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHJlcGxhY2VtZW50KTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdFNwZWNpZXNHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICB2YXIgYWRkRGVmYXVsdFNwZWNpZXMgPSBmdW5jdGlvbiAoQykge1xuICAgIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzICYmICFfaGFzT3duUHJvcGVydHkoQywgc3ltYm9sU3BlY2llcykpIHtcbiAgICAgIFZhbHVlLmdldHRlcihDLCBzeW1ib2xTcGVjaWVzLCBkZWZhdWx0U3BlY2llc0dldHRlcik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBhZGRJdGVyYXRvciA9IGZ1bmN0aW9uIChwcm90b3R5cGUsIGltcGwpIHtcbiAgICB2YXIgaW1wbGVtZW50YXRpb24gPSBpbXBsIHx8IGZ1bmN0aW9uIGl0ZXJhdG9yKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBkZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICRpdGVyYXRvciQsIGltcGxlbWVudGF0aW9uKTtcbiAgICBpZiAoIXByb3RvdHlwZVskaXRlcmF0b3IkXSAmJiBUeXBlLnN5bWJvbCgkaXRlcmF0b3IkKSkge1xuICAgICAgLy8gaW1wbGVtZW50YXRpb25zIGFyZSBidWdneSB3aGVuICRpdGVyYXRvciQgaXMgYSBTeW1ib2xcbiAgICAgIHByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGltcGxlbWVudGF0aW9uO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlRGF0YVByb3BlcnR5ID0gZnVuY3Rpb24gY3JlYXRlRGF0YVByb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG4gIHZhciBjcmVhdGVEYXRhUHJvcGVydHlPclRocm93ID0gZnVuY3Rpb24gY3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyhvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgY3JlYXRlRGF0YVByb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIGlmICghRVMuU2FtZVZhbHVlKG9iamVjdFtuYW1lXSwgdmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcm9wZXJ0eSBpcyBub25jb25maWd1cmFibGUnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGVtdWxhdGVFUzZjb25zdHJ1Y3QgPSBmdW5jdGlvbiAobywgZGVmYXVsdE5ld1RhcmdldCwgZGVmYXVsdFByb3RvLCBzbG90cykge1xuICAgIC8vIFRoaXMgaXMgYW4gZXM1IGFwcHJveGltYXRpb24gdG8gZXM2IGNvbnN0cnVjdCBzZW1hbnRpY3MuICBpbiBlczYsXG4gICAgLy8gJ25ldyBGb28nIGludm9rZXMgRm9vLltbQ29uc3RydWN0XV0gd2hpY2ggKGZvciBhbG1vc3QgYWxsIG9iamVjdHMpXG4gICAgLy8ganVzdCBzZXRzIHRoZSBpbnRlcm5hbCB2YXJpYWJsZSBOZXdUYXJnZXQgKGluIGVzNiBzeW50YXggYG5ldy50YXJnZXRgKVxuICAgIC8vIHRvIEZvbyBhbmQgdGhlbiByZXR1cm5zIEZvbygpLlxuXG4gICAgLy8gTWFueSBFUzYgb2JqZWN0IHRoZW4gaGF2ZSBjb25zdHJ1Y3RvcnMgb2YgdGhlIGZvcm06XG4gICAgLy8gMS4gSWYgTmV3VGFyZ2V0IGlzIHVuZGVmaW5lZCwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uXG4gICAgLy8gMi4gTGV0IHh4eCBieSBPcmRpbmFyeUNyZWF0ZUZyb21Db25zdHJ1Y3RvcihOZXdUYXJnZXQsIHl5eSwgenp6KVxuXG4gICAgLy8gU28gd2UncmUgZ29pbmcgdG8gZW11bGF0ZSB0aG9zZSBmaXJzdCB0d28gc3RlcHMuXG4gICAgaWYgKCFFUy5UeXBlSXNPYmplY3QobykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnN0cnVjdG9yIHJlcXVpcmVzIGBuZXdgOiAnICsgZGVmYXVsdE5ld1RhcmdldC5uYW1lKTtcbiAgICB9XG4gICAgdmFyIHByb3RvID0gZGVmYXVsdE5ld1RhcmdldC5wcm90b3R5cGU7XG4gICAgaWYgKCFFUy5UeXBlSXNPYmplY3QocHJvdG8pKSB7XG4gICAgICBwcm90byA9IGRlZmF1bHRQcm90bztcbiAgICB9XG4gICAgdmFyIG9iaiA9IGNyZWF0ZShwcm90byk7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBzbG90cykge1xuICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eShzbG90cywgbmFtZSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc2xvdHNbbmFtZV07XG4gICAgICAgIGRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwgdmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEZpcmVmb3ggMzEgcmVwb3J0cyB0aGlzIGZ1bmN0aW9uJ3MgbGVuZ3RoIGFzIDBcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA2MjQ4NFxuICBpZiAoU3RyaW5nLmZyb21Db2RlUG9pbnQgJiYgU3RyaW5nLmZyb21Db2RlUG9pbnQubGVuZ3RoICE9PSAxKSB7XG4gICAgdmFyIG9yaWdpbmFsRnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZywgJ2Zyb21Db2RlUG9pbnQnLCBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KGNvZGVQb2ludHMpIHtcbiAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsRnJvbUNvZGVQb2ludCwgdGhpcywgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBTdHJpbmdTaGltcyA9IHtcbiAgICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KGNvZGVQb2ludHMpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHZhciBuZXh0O1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBuZXh0ID0gTnVtYmVyKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIGlmICghRVMuU2FtZVZhbHVlKG5leHQsIEVTLlRvSW50ZWdlcihuZXh0KSkgfHwgbmV4dCA8IDAgfHwgbmV4dCA+IDB4MTBGRkZGKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCAnICsgbmV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dCA8IDB4MTAwMDApIHtcbiAgICAgICAgICBfcHVzaChyZXN1bHQsIFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQgLT0gMHgxMDAwMDtcbiAgICAgICAgICBfcHVzaChyZXN1bHQsIFN0cmluZy5mcm9tQ2hhckNvZGUoKG5leHQgPj4gMTApICsgMHhEODAwKSk7XG4gICAgICAgICAgX3B1c2gocmVzdWx0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKChuZXh0ICUgMHg0MDApICsgMHhEQzAwKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBfam9pbihyZXN1bHQsICcnKTtcbiAgICB9LFxuXG4gICAgcmF3OiBmdW5jdGlvbiByYXcodGVtcGxhdGUpIHtcbiAgICAgIHZhciBudW1iZXJPZlN1YnN0aXR1dGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjb29rZWQgPSBFUy5Ub09iamVjdCh0ZW1wbGF0ZSwgJ2JhZCB0ZW1wbGF0ZScpO1xuICAgICAgdmFyIHJhdyA9IEVTLlRvT2JqZWN0KGNvb2tlZC5yYXcsICdiYWQgcmF3IHZhbHVlJyk7XG4gICAgICB2YXIgbGVuID0gcmF3Lmxlbmd0aDtcbiAgICAgIHZhciBsaXRlcmFsU2VnbWVudHMgPSBFUy5Ub0xlbmd0aChsZW4pO1xuICAgICAgaWYgKGxpdGVyYWxTZWdtZW50cyA8PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIHN0cmluZ0VsZW1lbnRzID0gW107XG4gICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgIHZhciBuZXh0S2V5LCBuZXh0LCBuZXh0U2VnLCBuZXh0U3ViO1xuICAgICAgd2hpbGUgKG5leHRJbmRleCA8IGxpdGVyYWxTZWdtZW50cykge1xuICAgICAgICBuZXh0S2V5ID0gRVMuVG9TdHJpbmcobmV4dEluZGV4KTtcbiAgICAgICAgbmV4dFNlZyA9IEVTLlRvU3RyaW5nKHJhd1tuZXh0S2V5XSk7XG4gICAgICAgIF9wdXNoKHN0cmluZ0VsZW1lbnRzLCBuZXh0U2VnKTtcbiAgICAgICAgaWYgKG5leHRJbmRleCArIDEgPj0gbGl0ZXJhbFNlZ21lbnRzKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCA9IG5leHRJbmRleCArIDEgPCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzW25leHRJbmRleCArIDFdIDogJyc7XG4gICAgICAgIG5leHRTdWIgPSBFUy5Ub1N0cmluZyhuZXh0KTtcbiAgICAgICAgX3B1c2goc3RyaW5nRWxlbWVudHMsIG5leHRTdWIpO1xuICAgICAgICBuZXh0SW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfam9pbihzdHJpbmdFbGVtZW50cywgJycpO1xuICAgIH1cbiAgfTtcbiAgaWYgKFN0cmluZy5yYXcgJiYgU3RyaW5nLnJhdyh7IHJhdzogeyAwOiAneCcsIDE6ICd5JywgbGVuZ3RoOiAyIH0gfSkgIT09ICd4eScpIHtcbiAgICAvLyBJRSAxMSBUUCBoYXMgYSBicm9rZW4gU3RyaW5nLnJhdyBpbXBsZW1lbnRhdGlvblxuICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZywgJ3JhdycsIFN0cmluZ1NoaW1zLnJhdyk7XG4gIH1cbiAgZGVmaW5lUHJvcGVydGllcyhTdHJpbmcsIFN0cmluZ1NoaW1zKTtcblxuICAvLyBGYXN0IHJlcGVhdCwgdXNlcyB0aGUgYEV4cG9uZW50aWF0aW9uIGJ5IHNxdWFyaW5nYCBhbGdvcml0aG0uXG4gIC8vIFBlcmY6IGh0dHA6Ly9qc3BlcmYuY29tL3N0cmluZy1yZXBlYXQyLzJcbiAgdmFyIHN0cmluZ1JlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdChzLCB0aW1lcykge1xuICAgIGlmICh0aW1lcyA8IDEpIHsgcmV0dXJuICcnOyB9XG4gICAgaWYgKHRpbWVzICUgMikgeyByZXR1cm4gcmVwZWF0KHMsIHRpbWVzIC0gMSkgKyBzOyB9XG4gICAgdmFyIGhhbGYgPSByZXBlYXQocywgdGltZXMgLyAyKTtcbiAgICByZXR1cm4gaGFsZiArIGhhbGY7XG4gIH07XG4gIHZhciBzdHJpbmdNYXhMZW5ndGggPSBJbmZpbml0eTtcblxuICB2YXIgU3RyaW5nUHJvdG90eXBlU2hpbXMgPSB7XG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQodGltZXMpIHtcbiAgICAgIHZhciB0aGlzU3RyID0gRVMuVG9TdHJpbmcoRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICB2YXIgbnVtVGltZXMgPSBFUy5Ub0ludGVnZXIodGltZXMpO1xuICAgICAgaWYgKG51bVRpbWVzIDwgMCB8fCBudW1UaW1lcyA+PSBzdHJpbmdNYXhMZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3JlcGVhdCBjb3VudCBtdXN0IGJlIGxlc3MgdGhhbiBpbmZpbml0eSBhbmQgbm90IG92ZXJmbG93IG1heGltdW0gc3RyaW5nIHNpemUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHJpbmdSZXBlYXQodGhpc1N0ciwgbnVtVGltZXMpO1xuICAgIH0sXG5cbiAgICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZykge1xuICAgICAgdmFyIFMgPSBFUy5Ub1N0cmluZyhFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICAgIGlmIChFUy5Jc1JlZ0V4cChzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBcInN0YXJ0c1dpdGhcIiB3aXRoIGEgcmVnZXgnKTtcbiAgICAgIH1cbiAgICAgIHZhciBzZWFyY2hTdHIgPSBFUy5Ub1N0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgICAgdmFyIHBvc2l0aW9uO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBvc2l0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgfVxuICAgICAgdmFyIHN0YXJ0ID0gX21heChFUy5Ub0ludGVnZXIocG9zaXRpb24pLCAwKTtcbiAgICAgIHJldHVybiBfc3RyU2xpY2UoUywgc3RhcnQsIHN0YXJ0ICsgc2VhcmNoU3RyLmxlbmd0aCkgPT09IHNlYXJjaFN0cjtcbiAgICB9LFxuXG4gICAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZykge1xuICAgICAgdmFyIFMgPSBFUy5Ub1N0cmluZyhFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICAgIGlmIChFUy5Jc1JlZ0V4cChzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBcImVuZHNXaXRoXCIgd2l0aCBhIHJlZ2V4Jyk7XG4gICAgICB9XG4gICAgICB2YXIgc2VhcmNoU3RyID0gRVMuVG9TdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICAgIHZhciBsZW4gPSBTLmxlbmd0aDtcbiAgICAgIHZhciBlbmRQb3NpdGlvbjtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIH1cbiAgICAgIHZhciBwb3MgPSB0eXBlb2YgZW5kUG9zaXRpb24gPT09ICd1bmRlZmluZWQnID8gbGVuIDogRVMuVG9JbnRlZ2VyKGVuZFBvc2l0aW9uKTtcbiAgICAgIHZhciBlbmQgPSBfbWluKF9tYXgocG9zLCAwKSwgbGVuKTtcbiAgICAgIHJldHVybiBfc3RyU2xpY2UoUywgZW5kIC0gc2VhcmNoU3RyLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoU3RyO1xuICAgIH0sXG5cbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSB7XG4gICAgICBpZiAoRVMuSXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImluY2x1ZGVzXCIgZG9lcyBub3QgYWNjZXB0IGEgUmVnRXhwJyk7XG4gICAgICB9XG4gICAgICB2YXIgc2VhcmNoU3RyID0gRVMuVG9TdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICAgIHZhciBwb3NpdGlvbjtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBwb3NpdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIH1cbiAgICAgIC8vIFNvbWVob3cgdGhpcyB0cmljayBtYWtlcyBtZXRob2QgMTAwJSBjb21wYXQgd2l0aCB0aGUgc3BlYy5cbiAgICAgIHJldHVybiBfaW5kZXhPZih0aGlzLCBzZWFyY2hTdHIsIHBvc2l0aW9uKSAhPT0gLTE7XG4gICAgfSxcblxuICAgIGNvZGVQb2ludEF0OiBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3MpIHtcbiAgICAgIHZhciB0aGlzU3RyID0gRVMuVG9TdHJpbmcoRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICB2YXIgcG9zaXRpb24gPSBFUy5Ub0ludGVnZXIocG9zKTtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzU3RyLmxlbmd0aDtcbiAgICAgIGlmIChwb3NpdGlvbiA+PSAwICYmIHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBmaXJzdCA9IHRoaXNTdHIuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgICAgIHZhciBpc0VuZCA9IHBvc2l0aW9uICsgMSA9PT0gbGVuZ3RoO1xuICAgICAgICBpZiAoZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgaXNFbmQpIHsgcmV0dXJuIGZpcnN0OyB9XG4gICAgICAgIHZhciBzZWNvbmQgPSB0aGlzU3RyLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKTtcbiAgICAgICAgaWYgKHNlY29uZCA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkYpIHsgcmV0dXJuIGZpcnN0OyB9XG4gICAgICAgIHJldHVybiAoKGZpcnN0IC0gMHhEODAwKSAqIDEwMjQpICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWYgKFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgJiYgJ2EnLmluY2x1ZGVzKCdhJywgSW5maW5pdHkpICE9PSBmYWxzZSkge1xuICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdpbmNsdWRlcycsIFN0cmluZ1Byb3RvdHlwZVNoaW1zLmluY2x1ZGVzKTtcbiAgfVxuXG4gIGlmIChTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggJiYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICAgIHZhciBzdGFydHNXaXRoUmVqZWN0c1JlZ2V4ID0gdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgLyogdGhyb3dzIGlmIHNwZWMtY29tcGxpYW50ICovXG4gICAgICByZXR1cm4gJy9hLycuc3RhcnRzV2l0aCgvYS8pO1xuICAgIH0pO1xuICAgIHZhciBzdGFydHNXaXRoSGFuZGxlc0luZmluaXR5ID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdhYmMnLnN0YXJ0c1dpdGgoJ2EnLCBJbmZpbml0eSkgPT09IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICghc3RhcnRzV2l0aFJlamVjdHNSZWdleCB8fCAhc3RhcnRzV2l0aEhhbmRsZXNJbmZpbml0eSkge1xuICAgICAgLy8gRmlyZWZveCAoPCAzNz8pIGFuZCBJRSAxMSBUUCBoYXZlIGEgbm9uY29tcGxpYW50IHN0YXJ0c1dpdGggaW1wbGVtZW50YXRpb25cbiAgICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdzdGFydHNXaXRoJywgU3RyaW5nUHJvdG90eXBlU2hpbXMuc3RhcnRzV2l0aCk7XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnZW5kc1dpdGgnLCBTdHJpbmdQcm90b3R5cGVTaGltcy5lbmRzV2l0aCk7XG4gICAgfVxuICB9XG4gIGlmIChoYXNTeW1ib2xzKSB7XG4gICAgdmFyIHN0YXJ0c1dpdGhTdXBwb3J0c1N5bWJvbE1hdGNoID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlID0gL2EvO1xuICAgICAgcmVbU3ltYm9sLm1hdGNoXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvYS8nLnN0YXJ0c1dpdGgocmUpO1xuICAgIH0pO1xuICAgIGlmICghc3RhcnRzV2l0aFN1cHBvcnRzU3ltYm9sTWF0Y2gpIHtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdzdGFydHNXaXRoJywgU3RyaW5nUHJvdG90eXBlU2hpbXMuc3RhcnRzV2l0aCk7XG4gICAgfVxuICAgIHZhciBlbmRzV2l0aFN1cHBvcnRzU3ltYm9sTWF0Y2ggPSB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmUgPSAvYS87XG4gICAgICByZVtTeW1ib2wubWF0Y2hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy9hLycuZW5kc1dpdGgocmUpO1xuICAgIH0pO1xuICAgIGlmICghZW5kc1dpdGhTdXBwb3J0c1N5bWJvbE1hdGNoKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnZW5kc1dpdGgnLCBTdHJpbmdQcm90b3R5cGVTaGltcy5lbmRzV2l0aCk7XG4gICAgfVxuICAgIHZhciBpbmNsdWRlc1N1cHBvcnRzU3ltYm9sTWF0Y2ggPSB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmUgPSAvYS87XG4gICAgICByZVtTeW1ib2wubWF0Y2hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy9hLycuaW5jbHVkZXMocmUpO1xuICAgIH0pO1xuICAgIGlmICghaW5jbHVkZXNTdXBwb3J0c1N5bWJvbE1hdGNoKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnaW5jbHVkZXMnLCBTdHJpbmdQcm90b3R5cGVTaGltcy5pbmNsdWRlcyk7XG4gICAgfVxuICB9XG5cbiAgZGVmaW5lUHJvcGVydGllcyhTdHJpbmcucHJvdG90eXBlLCBTdHJpbmdQcm90b3R5cGVTaGltcyk7XG5cbiAgLy8gd2hpdGVzcGFjZSBmcm9tOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxuICB2YXIgd3MgPSBbXG4gICAgJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcbiAgICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuICAgICdcXHUyMDI5XFx1RkVGRidcbiAgXS5qb2luKCcnKTtcbiAgdmFyIHRyaW1SZWdleHAgPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xuICB2YXIgdHJpbVNoaW0gPSBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiBFUy5Ub1N0cmluZyhFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKS5yZXBsYWNlKHRyaW1SZWdleHAsICcnKTtcbiAgfTtcbiAgdmFyIG5vbldTID0gWydcXHUwMDg1JywgJ1xcdTIwMGInLCAnXFx1ZmZmZSddLmpvaW4oJycpO1xuICB2YXIgbm9uV1NyZWdleCA9IG5ldyBSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG4gIHZhciBpc0JhZEhleFJlZ2V4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG4gIHZhciBoYXNTdHJpbmdUcmltQnVnID0gbm9uV1MudHJpbSgpLmxlbmd0aCAhPT0gbm9uV1MubGVuZ3RoO1xuICBkZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCAndHJpbScsIHRyaW1TaGltLCBoYXNTdHJpbmdUcmltQnVnKTtcblxuICAvLyBHaXZlbiBhbiBhcmd1bWVudCB4LCBpdCB3aWxsIHJldHVybiBhbiBJdGVyYXRvclJlc3VsdCBvYmplY3QsXG4gIC8vIHdpdGggdmFsdWUgc2V0IHRvIHggYW5kIGRvbmUgdG8gZmFsc2UuXG4gIC8vIEdpdmVuIG5vIGFyZ3VtZW50cywgaXQgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgY29tcGxldGlvbiBvYmplY3QuXG4gIHZhciBpdGVyYXRvclJlc3VsdCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHgsIGRvbmU6IGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfTtcbiAgfTtcblxuICAvLyBzZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuICB2YXIgU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbiAocykge1xuICAgIEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUocyk7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ19zJywgRVMuVG9TdHJpbmcocykpO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdfaScsIDApO1xuICB9O1xuICBTdHJpbmdJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcyA9IHRoaXMuX3M7XG4gICAgdmFyIGkgPSB0aGlzLl9pO1xuICAgIGlmICh0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcgfHwgaSA+PSBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcyA9IHZvaWQgMDtcbiAgICAgIHJldHVybiBpdGVyYXRvclJlc3VsdCgpO1xuICAgIH1cbiAgICB2YXIgZmlyc3QgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgdmFyIHNlY29uZCwgbGVuO1xuICAgIGlmIChmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCAoaSArIDEpID09PSBzLmxlbmd0aCkge1xuICAgICAgbGVuID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vjb25kID0gcy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgIGxlbiA9IChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSA/IDEgOiAyO1xuICAgIH1cbiAgICB0aGlzLl9pID0gaSArIGxlbjtcbiAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQocy5zdWJzdHIoaSwgbGVuKSk7XG4gIH07XG4gIGFkZEl0ZXJhdG9yKFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGFkZEl0ZXJhdG9yKFN0cmluZy5wcm90b3R5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ0l0ZXJhdG9yKHRoaXMpO1xuICB9KTtcblxuICB2YXIgQXJyYXlTaGltcyA9IHtcbiAgICBmcm9tOiBmdW5jdGlvbiBmcm9tKGl0ZW1zKSB7XG4gICAgICB2YXIgQyA9IHRoaXM7XG4gICAgICB2YXIgbWFwRm47XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbWFwRm4gPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICB2YXIgbWFwcGluZywgVDtcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1hcHBpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghRVMuSXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgICAgbWFwcGluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB0aGF0IEFycmF5cyB3aWxsIHVzZSBBcnJheUl0ZXJhdG9yOlxuICAgICAgLy8gaHR0cHM6Ly9idWdzLmVjbWFzY3JpcHQub3JnL3Nob3dfYnVnLmNnaT9pZD0yNDE2XG4gICAgICB2YXIgdXNpbmdJdGVyYXRvciA9IHR5cGVvZiAoaXNBcmd1bWVudHMoaXRlbXMpIHx8IEVTLkdldE1ldGhvZChpdGVtcywgJGl0ZXJhdG9yJCkpICE9PSAndW5kZWZpbmVkJztcblxuICAgICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBpO1xuICAgICAgaWYgKHVzaW5nSXRlcmF0b3IpIHtcbiAgICAgICAgcmVzdWx0ID0gRVMuSXNDb25zdHJ1Y3RvcihDKSA/IE9iamVjdChuZXcgQygpKSA6IFtdO1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBFUy5HZXRJdGVyYXRvcihpdGVtcyk7XG4gICAgICAgIHZhciBuZXh0LCBuZXh0VmFsdWU7XG5cbiAgICAgICAgaSA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgbmV4dCA9IEVTLkl0ZXJhdG9yU3RlcChpdGVyYXRvcik7XG4gICAgICAgICAgaWYgKG5leHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dFZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgbmV4dFZhbHVlID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4obmV4dFZhbHVlLCBpKSA6IF9jYWxsKG1hcEZuLCBULCBuZXh0VmFsdWUsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W2ldID0gbmV4dFZhbHVlO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIEVTLkl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIHRydWUpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IGk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYXJyYXlMaWtlID0gRVMuVG9PYmplY3QoaXRlbXMpO1xuICAgICAgICBsZW5ndGggPSBFUy5Ub0xlbmd0aChhcnJheUxpa2UubGVuZ3RoKTtcbiAgICAgICAgcmVzdWx0ID0gRVMuSXNDb25zdHJ1Y3RvcihDKSA/IE9iamVjdChuZXcgQyhsZW5ndGgpKSA6IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgIHZhbHVlID0gYXJyYXlMaWtlW2ldO1xuICAgICAgICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKHZhbHVlLCBpKSA6IF9jYWxsKG1hcEZuLCBULCB2YWx1ZSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3cocmVzdWx0LCBpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgdmFyIEEgPSBpc0FycmF5KEMpIHx8ICFFUy5Jc0NhbGxhYmxlKEMpID8gbmV3IEFycmF5KGxlbikgOiBFUy5Db25zdHJ1Y3QoQywgW2xlbl0pO1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBsZW47ICsraykge1xuICAgICAgICBjcmVhdGVEYXRhUHJvcGVydHlPclRocm93KEEsIGssIGFyZ3VtZW50c1trXSk7XG4gICAgICB9XG4gICAgICBBLmxlbmd0aCA9IGxlbjtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lUHJvcGVydGllcyhBcnJheSwgQXJyYXlTaGltcyk7XG4gIGFkZERlZmF1bHRTcGVjaWVzKEFycmF5KTtcblxuICAvLyBPdXIgQXJyYXlJdGVyYXRvciBpcyBwcml2YXRlOyBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9lczYtc2hpbS9pc3N1ZXMvMjUyXG4gIEFycmF5SXRlcmF0b3IgPSBmdW5jdGlvbiAoYXJyYXksIGtpbmQpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaScsIDApO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdhcnJheScsIGFycmF5KTtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAna2luZCcsIGtpbmQpO1xuICB9O1xuXG4gIGRlZmluZVByb3BlcnRpZXMoQXJyYXlJdGVyYXRvci5wcm90b3R5cGUsIHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuaTtcbiAgICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQXJyYXlJdGVyYXRvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGFuIEFycmF5SXRlcmF0b3InKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBsZW4gPSBFUy5Ub0xlbmd0aChhcnJheS5sZW5ndGgpO1xuICAgICAgICBpZiAoaSA8IGxlbikge1xuICAgICAgICAvL2ZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIga2luZCA9IHRoaXMua2luZDtcbiAgICAgICAgICB2YXIgcmV0dmFsO1xuICAgICAgICAgIGlmIChraW5kID09PSAna2V5Jykge1xuICAgICAgICAgICAgcmV0dmFsID0gaTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtpbmQgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IGFycmF5W2ldO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2luZCA9PT0gJ2VudHJ5Jykge1xuICAgICAgICAgICAgcmV0dmFsID0gW2ksIGFycmF5W2ldXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pID0gaSArIDE7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yUmVzdWx0KHJldHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYXJyYXkgPSB2b2lkIDA7XG4gICAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQoKTtcbiAgICB9XG4gIH0pO1xuICBhZGRJdGVyYXRvcihBcnJheUl0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgLypcbiAgdmFyIG9yZGVyS2V5cyA9IGZ1bmN0aW9uIG9yZGVyS2V5cyhhLCBiKSB7XG4gICAgdmFyIGFOdW1lcmljID0gU3RyaW5nKEVTLlRvSW50ZWdlcihhKSkgPT09IGE7XG4gICAgdmFyIGJOdW1lcmljID0gU3RyaW5nKEVTLlRvSW50ZWdlcihiKSkgPT09IGI7XG4gICAgaWYgKGFOdW1lcmljICYmIGJOdW1lcmljKSB7XG4gICAgICByZXR1cm4gYiAtIGE7XG4gICAgfSBlbHNlIGlmIChhTnVtZXJpYyAmJiAhYk51bWVyaWMpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKCFhTnVtZXJpYyAmJiBiTnVtZXJpYykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRBbGxLZXlzID0gZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgICB2YXIgb3duS2V5cyA9IFtdO1xuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBfcHVzaChfaGFzT3duUHJvcGVydHkob2JqZWN0LCBrZXkpID8gb3duS2V5cyA6IGtleXMsIGtleSk7XG4gICAgfVxuICAgIF9zb3J0KG93bktleXMsIG9yZGVyS2V5cyk7XG4gICAgX3NvcnQoa2V5cywgb3JkZXJLZXlzKTtcblxuICAgIHJldHVybiBfY29uY2F0KG93bktleXMsIGtleXMpO1xuICB9O1xuICAqL1xuXG4gIC8vIG5vdGU6IHRoaXMgaXMgcG9zaXRpb25lZCBoZXJlIGJlY2F1c2UgaXQgZGVwZW5kcyBvbiBBcnJheUl0ZXJhdG9yXG4gIHZhciBhcnJheU9mU3VwcG9ydHNTdWJjbGFzc2luZyA9IEFycmF5Lm9mID09PSBBcnJheVNoaW1zLm9mIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRGV0ZWN0cyBhIGJ1ZyBpbiBXZWJraXQgbmlnaHRseSByMTgxODg2XG4gICAgdmFyIEZvbyA9IGZ1bmN0aW9uIEZvbyhsZW4pIHsgdGhpcy5sZW5ndGggPSBsZW47IH07XG4gICAgRm9vLnByb3RvdHlwZSA9IFtdO1xuICAgIHZhciBmb29BcnIgPSBBcnJheS5vZi5hcHBseShGb28sIFsxLCAyXSk7XG4gICAgcmV0dXJuIGZvb0FyciBpbnN0YW5jZW9mIEZvbyAmJiBmb29BcnIubGVuZ3RoID09PSAyO1xuICB9KCkpO1xuICBpZiAoIWFycmF5T2ZTdXBwb3J0c1N1YmNsYXNzaW5nKSB7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXksICdvZicsIEFycmF5U2hpbXMub2YpO1xuICB9XG5cbiAgdmFyIEFycmF5UHJvdG90eXBlU2hpbXMgPSB7XG4gICAgY29weVdpdGhpbjogZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0KSB7XG4gICAgICB2YXIgbyA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbiA9IEVTLlRvTGVuZ3RoKG8ubGVuZ3RoKTtcbiAgICAgIHZhciByZWxhdGl2ZVRhcmdldCA9IEVTLlRvSW50ZWdlcih0YXJnZXQpO1xuICAgICAgdmFyIHJlbGF0aXZlU3RhcnQgPSBFUy5Ub0ludGVnZXIoc3RhcnQpO1xuICAgICAgdmFyIHRvID0gcmVsYXRpdmVUYXJnZXQgPCAwID8gX21heChsZW4gKyByZWxhdGl2ZVRhcmdldCwgMCkgOiBfbWluKHJlbGF0aXZlVGFyZ2V0LCBsZW4pO1xuICAgICAgdmFyIGZyb20gPSByZWxhdGl2ZVN0YXJ0IDwgMCA/IF9tYXgobGVuICsgcmVsYXRpdmVTdGFydCwgMCkgOiBfbWluKHJlbGF0aXZlU3RhcnQsIGxlbik7XG4gICAgICB2YXIgZW5kO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGVuZCA9IGFyZ3VtZW50c1syXTtcbiAgICAgIH1cbiAgICAgIHZhciByZWxhdGl2ZUVuZCA9IHR5cGVvZiBlbmQgPT09ICd1bmRlZmluZWQnID8gbGVuIDogRVMuVG9JbnRlZ2VyKGVuZCk7XG4gICAgICB2YXIgZmluYWxJdGVtID0gcmVsYXRpdmVFbmQgPCAwID8gX21heChsZW4gKyByZWxhdGl2ZUVuZCwgMCkgOiBfbWluKHJlbGF0aXZlRW5kLCBsZW4pO1xuICAgICAgdmFyIGNvdW50ID0gX21pbihmaW5hbEl0ZW0gLSBmcm9tLCBsZW4gLSB0byk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gMTtcbiAgICAgIGlmIChmcm9tIDwgdG8gJiYgdG8gPCAoZnJvbSArIGNvdW50KSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgICAgIHRvICs9IGNvdW50IC0gMTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChjb3VudCA+IDApIHtcbiAgICAgICAgaWYgKGZyb20gaW4gbykge1xuICAgICAgICAgIG9bdG9dID0gb1tmcm9tXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgb1t0b107XG4gICAgICAgIH1cbiAgICAgICAgZnJvbSArPSBkaXJlY3Rpb247XG4gICAgICAgIHRvICs9IGRpcmVjdGlvbjtcbiAgICAgICAgY291bnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvO1xuICAgIH0sXG5cbiAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlKSB7XG4gICAgICB2YXIgc3RhcnQ7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc3RhcnQgPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICB2YXIgZW5kO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGVuZCA9IGFyZ3VtZW50c1syXTtcbiAgICAgIH1cbiAgICAgIHZhciBPID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuID0gRVMuVG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgc3RhcnQgPSBFUy5Ub0ludGVnZXIodHlwZW9mIHN0YXJ0ID09PSAndW5kZWZpbmVkJyA/IDAgOiBzdGFydCk7XG4gICAgICBlbmQgPSBFUy5Ub0ludGVnZXIodHlwZW9mIGVuZCA9PT0gJ3VuZGVmaW5lZCcgPyBsZW4gOiBlbmQpO1xuXG4gICAgICB2YXIgcmVsYXRpdmVTdGFydCA9IHN0YXJ0IDwgMCA/IF9tYXgobGVuICsgc3RhcnQsIDApIDogX21pbihzdGFydCwgbGVuKTtcbiAgICAgIHZhciByZWxhdGl2ZUVuZCA9IGVuZCA8IDAgPyBsZW4gKyBlbmQgOiBlbmQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSByZWxhdGl2ZVN0YXJ0OyBpIDwgbGVuICYmIGkgPCByZWxhdGl2ZUVuZDsgKytpKSB7XG4gICAgICAgIE9baV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBPO1xuICAgIH0sXG5cbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgICAgdmFyIGxpc3QgPSBFUy5Ub09iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW5ndGggPSBFUy5Ub0xlbmd0aChsaXN0Lmxlbmd0aCk7XG4gICAgICBpZiAoIUVTLklzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheSNmaW5kOiBwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgIGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gbGlzdFtpXTtcbiAgICAgICAgaWYgKHRoaXNBcmcpIHtcbiAgICAgICAgICBpZiAoX2NhbGwocHJlZGljYXRlLCB0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJlZGljYXRlKHZhbHVlLCBpLCBsaXN0KSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICAgIHZhciBsaXN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpO1xuICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKHByZWRpY2F0ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZEluZGV4OiBwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXNBcmcpIHtcbiAgICAgICAgICBpZiAoX2NhbGwocHJlZGljYXRlLCB0aGlzQXJnLCBsaXN0W2ldLCBpLCBsaXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByZWRpY2F0ZShsaXN0W2ldLCBpLCBsaXN0KSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSxcblxuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IodGhpcywgJ2tleScpO1xuICAgIH0sXG5cbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzLCAndmFsdWUnKTtcbiAgICB9LFxuXG4gICAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzLCAnZW50cnknKTtcbiAgICB9XG4gIH07XG4gIC8vIFNhZmFyaSA3LjEgZGVmaW5lcyBBcnJheSNrZXlzIGFuZCBBcnJheSNlbnRyaWVzIG5hdGl2ZWx5LFxuICAvLyBidXQgdGhlIHJlc3VsdGluZyBBcnJheUl0ZXJhdG9yIG9iamVjdHMgZG9uJ3QgaGF2ZSBhIFwibmV4dFwiIG1ldGhvZC5cbiAgaWYgKEFycmF5LnByb3RvdHlwZS5rZXlzICYmICFFUy5Jc0NhbGxhYmxlKFsxXS5rZXlzKCkubmV4dCkpIHtcbiAgICBkZWxldGUgQXJyYXkucHJvdG90eXBlLmtleXM7XG4gIH1cbiAgaWYgKEFycmF5LnByb3RvdHlwZS5lbnRyaWVzICYmICFFUy5Jc0NhbGxhYmxlKFsxXS5lbnRyaWVzKCkubmV4dCkpIHtcbiAgICBkZWxldGUgQXJyYXkucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICAvLyBDaHJvbWUgMzggZGVmaW5lcyBBcnJheSNrZXlzIGFuZCBBcnJheSNlbnRyaWVzLCBhbmQgQXJyYXkjQEBpdGVyYXRvciwgYnV0IG5vdCBBcnJheSN2YWx1ZXNcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5rZXlzICYmIEFycmF5LnByb3RvdHlwZS5lbnRyaWVzICYmICFBcnJheS5wcm90b3R5cGUudmFsdWVzICYmIEFycmF5LnByb3RvdHlwZVskaXRlcmF0b3IkXSkge1xuICAgIGRlZmluZVByb3BlcnRpZXMoQXJyYXkucHJvdG90eXBlLCB7XG4gICAgICB2YWx1ZXM6IEFycmF5LnByb3RvdHlwZVskaXRlcmF0b3IkXVxuICAgIH0pO1xuICAgIGlmIChUeXBlLnN5bWJvbChTeW1ib2wudW5zY29wYWJsZXMpKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGVbU3ltYm9sLnVuc2NvcGFibGVzXS52YWx1ZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICAvLyBDaHJvbWUgNDAgZGVmaW5lcyBBcnJheSN2YWx1ZXMgd2l0aCB0aGUgaW5jb3JyZWN0IG5hbWUsIGFsdGhvdWdoIEFycmF5I3trZXlzLGVudHJpZXN9IGhhdmUgdGhlIGNvcnJlY3QgbmFtZVxuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzICYmIEFycmF5LnByb3RvdHlwZS52YWx1ZXMgJiYgQXJyYXkucHJvdG90eXBlLnZhbHVlcy5uYW1lICE9PSAndmFsdWVzJykge1xuICAgIHZhciBvcmlnaW5hbEFycmF5UHJvdG90eXBlVmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnZhbHVlcztcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICd2YWx1ZXMnLCBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBFUy5DYWxsKG9yaWdpbmFsQXJyYXlQcm90b3R5cGVWYWx1ZXMsIHRoaXMsIGFyZ3VtZW50cyk7IH0pO1xuICAgIGRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgJGl0ZXJhdG9yJCwgQXJyYXkucHJvdG90eXBlLnZhbHVlcywgdHJ1ZSk7XG4gIH1cbiAgZGVmaW5lUHJvcGVydGllcyhBcnJheS5wcm90b3R5cGUsIEFycmF5UHJvdG90eXBlU2hpbXMpO1xuXG4gIGlmICgxIC8gW3RydWVdLmluZGV4T2YodHJ1ZSwgLTApIDwgMCkge1xuICAgIC8vIGluZGV4T2Ygd2hlbiBnaXZlbiBhIHBvc2l0aW9uIGFyZyBvZiAtMCBzaG91bGQgcmV0dXJuICswLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L2VjbWEyNjIvcHVsbC8zMTZcbiAgICBkZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdpbmRleE9mJywgZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSBfYXJyYXlJbmRleE9mQXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gMCAmJiAoMSAvIHZhbHVlKSA8IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICBhZGRJdGVyYXRvcihBcnJheS5wcm90b3R5cGUsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudmFsdWVzKCk7IH0pO1xuICAvLyBDaHJvbWUgZGVmaW5lcyBrZXlzL3ZhbHVlcy9lbnRyaWVzIG9uIEFycmF5LCBidXQgZG9lc24ndCBnaXZlIHVzXG4gIC8vIGFueSB3YXkgdG8gaWRlbnRpZnkgaXRzIGl0ZXJhdG9yLiAgU28gYWRkIG91ciBvd24gc2hpbW1lZCBmaWVsZC5cbiAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xuICAgIHZhciBDaHJvbWVBcnJheUl0ZXJhdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFtdLnZhbHVlcygpKTtcbiAgICBpZiAoQ2hyb21lQXJyYXlJdGVyYXRvcikgeyAvLyBpbiBXU0gsIHRoaXMgaXMgYHVuZGVmaW5lZGBcbiAgICAgIGFkZEl0ZXJhdG9yKENocm9tZUFycmF5SXRlcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5vdGU6IHRoaXMgaXMgcG9zaXRpb25lZCBoZXJlIGJlY2F1c2UgaXQgcmVsaWVzIG9uIEFycmF5I2VudHJpZXNcbiAgdmFyIGFycmF5RnJvbVN3YWxsb3dzTmVnYXRpdmVMZW5ndGhzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEZXRlY3RzIGEgRmlyZWZveCBidWcgaW4gdjMyXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA2Mzk5M1xuICAgIHJldHVybiB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogLTEgfSkubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICB9KCkpO1xuICB2YXIgYXJyYXlGcm9tSGFuZGxlc0l0ZXJhYmxlcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRGV0ZWN0cyBhIGJ1ZyBpbiBXZWJraXQgbmlnaHRseSByMTgxODg2XG4gICAgdmFyIGFyciA9IEFycmF5LmZyb20oWzBdLmVudHJpZXMoKSk7XG4gICAgcmV0dXJuIGFyci5sZW5ndGggPT09IDEgJiYgaXNBcnJheShhcnJbMF0pICYmIGFyclswXVswXSA9PT0gMCAmJiBhcnJbMF1bMV0gPT09IDA7XG4gIH0oKSk7XG4gIGlmICghYXJyYXlGcm9tU3dhbGxvd3NOZWdhdGl2ZUxlbmd0aHMgfHwgIWFycmF5RnJvbUhhbmRsZXNJdGVyYWJsZXMpIHtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheSwgJ2Zyb20nLCBBcnJheVNoaW1zLmZyb20pO1xuICB9XG4gIHZhciBhcnJheUZyb21IYW5kbGVzVW5kZWZpbmVkTWFwRnVuY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIE1pY3Jvc29mdCBFZGdlIHYwLjExIHRocm93cyBpZiB0aGUgbWFwRm4gYXJndW1lbnQgaXMgKnByb3ZpZGVkKiBidXQgdW5kZWZpbmVkLFxuICAgIC8vIGJ1dCB0aGUgc3BlYyBkb2Vzbid0IGNhcmUgaWYgaXQncyBwcm92aWRlZCBvciBub3QgLSB1bmRlZmluZWQgZG9lc24ndCB0aHJvdy5cbiAgICByZXR1cm4gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oWzBdLCB2b2lkIDApO1xuICAgIH0pO1xuICB9KCkpO1xuICBpZiAoIWFycmF5RnJvbUhhbmRsZXNVbmRlZmluZWRNYXBGdW5jdGlvbikge1xuICAgIHZhciBvcmlnQXJyYXlGcm9tID0gQXJyYXkuZnJvbTtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheSwgJ2Zyb20nLCBmdW5jdGlvbiBmcm9tKGl0ZW1zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ0FycmF5RnJvbSwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfY2FsbChvcmlnQXJyYXlGcm9tLCB0aGlzLCBpdGVtcyk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBpbnQzMnNBc09uZSA9IC0oTWF0aC5wb3coMiwgMzIpIC0gMSk7XG4gIHZhciB0b0xlbmd0aHNDb3JyZWN0bHkgPSBmdW5jdGlvbiAobWV0aG9kLCByZXZlcnNlZCkge1xuICAgIHZhciBvYmogPSB7IGxlbmd0aDogaW50MzJzQXNPbmUgfTtcbiAgICBvYmpbcmV2ZXJzZWQgPyAob2JqLmxlbmd0aCA+Pj4gMCkgLSAxIDogMF0gPSB0cnVlO1xuICAgIHJldHVybiB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICBfY2FsbChtZXRob2QsIG9iaiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBub3RlOiBpbiBub25jb25mb3JtaW5nIGJyb3dzZXJzLCB0aGlzIHdpbGwgYmUgY2FsbGVkXG4gICAgICAgIC8vIC0xID4+PiAwIHRpbWVzLCB3aGljaCBpcyA0Mjk0OTY3Mjk1LCBzbyB0aGUgdGhyb3cgbWF0dGVycy5cbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3Nob3VsZCBub3QgcmVhY2ggaGVyZScpO1xuICAgICAgfSwgW10pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG4gIGlmICghdG9MZW5ndGhzQ29ycmVjdGx5KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSkge1xuICAgIHZhciBvcmlnaW5hbEZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdmb3JFYWNoJywgZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja0ZuKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbEZvckVhY2gsIHRoaXMubGVuZ3RoID49IDAgPyB0aGlzIDogW10sIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCF0b0xlbmd0aHNDb3JyZWN0bHkoQXJyYXkucHJvdG90eXBlLm1hcCkpIHtcbiAgICB2YXIgb3JpZ2luYWxNYXAgPSBBcnJheS5wcm90b3R5cGUubWFwO1xuICAgIG92ZXJyaWRlTmF0aXZlKEFycmF5LnByb3RvdHlwZSwgJ21hcCcsIGZ1bmN0aW9uIG1hcChjYWxsYmFja0ZuKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbE1hcCwgdGhpcy5sZW5ndGggPj0gMCA/IHRoaXMgOiBbXSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXRvTGVuZ3Roc0NvcnJlY3RseShBcnJheS5wcm90b3R5cGUuZmlsdGVyKSkge1xuICAgIHZhciBvcmlnaW5hbEZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAnZmlsdGVyJywgZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrRm4pIHtcbiAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsRmlsdGVyLCB0aGlzLmxlbmd0aCA+PSAwID8gdGhpcyA6IFtdLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG4gIGlmICghdG9MZW5ndGhzQ29ycmVjdGx5KEFycmF5LnByb3RvdHlwZS5zb21lKSkge1xuICAgIHZhciBvcmlnaW5hbFNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdzb21lJywgZnVuY3Rpb24gc29tZShjYWxsYmFja0ZuKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFNvbWUsIHRoaXMubGVuZ3RoID49IDAgPyB0aGlzIDogW10sIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCF0b0xlbmd0aHNDb3JyZWN0bHkoQXJyYXkucHJvdG90eXBlLmV2ZXJ5KSkge1xuICAgIHZhciBvcmlnaW5hbEV2ZXJ5ID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5O1xuICAgIG92ZXJyaWRlTmF0aXZlKEFycmF5LnByb3RvdHlwZSwgJ2V2ZXJ5JywgZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tGbikge1xuICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxFdmVyeSwgdGhpcy5sZW5ndGggPj0gMCA/IHRoaXMgOiBbXSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXRvTGVuZ3Roc0NvcnJlY3RseShBcnJheS5wcm90b3R5cGUucmVkdWNlKSkge1xuICAgIHZhciBvcmlnaW5hbFJlZHVjZSA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAncmVkdWNlJywgZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrRm4pIHtcbiAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsUmVkdWNlLCB0aGlzLmxlbmd0aCA+PSAwID8gdGhpcyA6IFtdLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG4gIGlmICghdG9MZW5ndGhzQ29ycmVjdGx5KEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodCwgdHJ1ZSkpIHtcbiAgICB2YXIgb3JpZ2luYWxSZWR1Y2VSaWdodCA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodDtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdyZWR1Y2VSaWdodCcsIGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrRm4pIHtcbiAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsUmVkdWNlUmlnaHQsIHRoaXMubGVuZ3RoID49IDAgPyB0aGlzIDogW10sIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbGFja3NPY3RhbFN1cHBvcnQgPSBOdW1iZXIoJzBvMTAnKSAhPT0gODtcbiAgdmFyIGxhY2tzQmluYXJ5U3VwcG9ydCA9IE51bWJlcignMGIxMCcpICE9PSAyO1xuICB2YXIgdHJpbXNOb25XaGl0ZXNwYWNlID0gX3NvbWUobm9uV1MsIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIE51bWJlcihjICsgMCArIGMpID09PSAwO1xuICB9KTtcbiAgaWYgKGxhY2tzT2N0YWxTdXBwb3J0IHx8IGxhY2tzQmluYXJ5U3VwcG9ydCB8fCB0cmltc05vbldoaXRlc3BhY2UpIHtcbiAgICB2YXIgT3JpZ051bWJlciA9IE51bWJlcjtcbiAgICB2YXIgYmluYXJ5UmVnZXggPSAvXjBiWzAxXSskL2k7XG4gICAgdmFyIG9jdGFsUmVnZXggPSAvXjBvWzAtN10rJC9pO1xuICAgIC8vIE5vdGUgdGhhdCBpbiBJRSA4LCBSZWdFeHAucHJvdG90eXBlLnRlc3QgZG9lc24ndCBzZWVtIHRvIGV4aXN0OiBpZSwgXCJ0ZXN0XCIgaXMgYW4gb3duIHByb3BlcnR5IG9mIHJlZ2V4ZXMuIHd0Zi5cbiAgICB2YXIgaXNCaW5hcnkgPSBiaW5hcnlSZWdleC50ZXN0LmJpbmQoYmluYXJ5UmVnZXgpO1xuICAgIHZhciBpc09jdGFsID0gb2N0YWxSZWdleC50ZXN0LmJpbmQob2N0YWxSZWdleCk7XG4gICAgdmFyIHRvUHJpbWl0aXZlID0gZnVuY3Rpb24gKE8sIGhpbnQpIHsgLy8gbmVlZCB0byByZXBsYWNlIHRoaXMgd2l0aCBgZXMtdG8tcHJpbWl0aXZlL2VzNmBcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAodHlwZW9mIE8udmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQgPSBPLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKFR5cGUucHJpbWl0aXZlKHJlc3VsdCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0ID0gTy50b1N0cmluZygpO1xuICAgICAgICBpZiAoVHlwZS5wcmltaXRpdmUocmVzdWx0KSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbiAgICB9O1xuICAgIHZhciBoYXNOb25XUyA9IG5vbldTcmVnZXgudGVzdC5iaW5kKG5vbldTcmVnZXgpO1xuICAgIHZhciBpc0JhZEhleCA9IGlzQmFkSGV4UmVnZXgudGVzdC5iaW5kKGlzQmFkSGV4UmVnZXgpO1xuICAgIHZhciBOdW1iZXJTaGltID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHRoaXMgaXMgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2Ugb2YgSUUgNi04J3Mgd2Fja3kgc2NvcGluZyBpc3N1ZXMgd2l0aCBuYW1lZCBmdW5jdGlvbiBleHByZXNzaW9ucy5cbiAgICAgIHZhciBOdW1iZXJTaGltID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHZhciBwcmltVmFsdWU7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHByaW1WYWx1ZSA9IFR5cGUucHJpbWl0aXZlKHZhbHVlKSA/IHZhbHVlIDogdG9QcmltaXRpdmUodmFsdWUsICdudW1iZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmltVmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJpbVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHByaW1WYWx1ZSA9IEVTLkNhbGwodHJpbVNoaW0sIHByaW1WYWx1ZSk7XG4gICAgICAgICAgaWYgKGlzQmluYXJ5KHByaW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIHByaW1WYWx1ZSA9IHBhcnNlSW50KF9zdHJTbGljZShwcmltVmFsdWUsIDIpLCAyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzT2N0YWwocHJpbVZhbHVlKSkge1xuICAgICAgICAgICAgcHJpbVZhbHVlID0gcGFyc2VJbnQoX3N0clNsaWNlKHByaW1WYWx1ZSwgMiksIDgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzTm9uV1MocHJpbVZhbHVlKSB8fCBpc0JhZEhleChwcmltVmFsdWUpKSB7XG4gICAgICAgICAgICBwcmltVmFsdWUgPSBOYU47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciByZWNlaXZlciA9IHRoaXM7XG4gICAgICAgIHZhciB2YWx1ZU9mU3VjY2VlZHMgPSB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgT3JpZ051bWJlci5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHJlY2VpdmVyKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIE51bWJlclNoaW0gJiYgIXZhbHVlT2ZTdWNjZWVkcykge1xuICAgICAgICAgIHJldHVybiBuZXcgT3JpZ051bWJlcihwcmltVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPcmlnTnVtYmVyKHByaW1WYWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIE51bWJlclNoaW07XG4gICAgfSgpKTtcbiAgICB3cmFwQ29uc3RydWN0b3IoT3JpZ051bWJlciwgTnVtYmVyU2hpbSwge30pO1xuICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBFUzMgYnJvd3NlcnMsIHdoZXJlIHRoZXNlIHByb3BlcnRpZXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICAgIGRlZmluZVByb3BlcnRpZXMoTnVtYmVyU2hpbSwge1xuICAgICAgTmFOOiBPcmlnTnVtYmVyLk5hTixcbiAgICAgIE1BWF9WQUxVRTogT3JpZ051bWJlci5NQVhfVkFMVUUsXG4gICAgICBNSU5fVkFMVUU6IE9yaWdOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgTkVHQVRJVkVfSU5GSU5JVFk6IE9yaWdOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgICBQT1NJVElWRV9JTkZJTklUWTogT3JpZ051bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICAgIH0pO1xuICAgIE51bWJlciA9IE51bWJlclNoaW07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZ2xvYmFsLWFzc2lnblxuICAgIFZhbHVlLnJlZGVmaW5lKGdsb2JhbHMsICdOdW1iZXInLCBOdW1iZXJTaGltKTtcbiAgfVxuXG4gIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIGRlZmluZVByb3BlcnRpZXMoTnVtYmVyLCB7XG4gICAgTUFYX1NBRkVfSU5URUdFUjogbWF4U2FmZUludGVnZXIsXG4gICAgTUlOX1NBRkVfSU5URUdFUjogLW1heFNhZmVJbnRlZ2VyLFxuICAgIEVQU0lMT046IDIuMjIwNDQ2MDQ5MjUwMzEzZS0xNixcblxuICAgIHBhcnNlSW50OiBnbG9iYWxzLnBhcnNlSW50LFxuICAgIHBhcnNlRmxvYXQ6IGdsb2JhbHMucGFyc2VGbG9hdCxcblxuICAgIGlzRmluaXRlOiBudW1iZXJJc0Zpbml0ZSxcblxuICAgIGlzSW50ZWdlcjogZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVtYmVySXNGaW5pdGUodmFsdWUpICYmIEVTLlRvSW50ZWdlcih2YWx1ZSkgPT09IHZhbHVlO1xuICAgIH0sXG5cbiAgICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgX2Ficyh2YWx1ZSkgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgfSxcblxuICAgIGlzTmFOOiBudW1iZXJJc05hTlxuICB9KTtcbiAgLy8gRmlyZWZveCAzNyBoYXMgYSBjb25mb3JtaW5nIE51bWJlci5wYXJzZUludCwgYnV0IGl0J3Mgbm90ID09PSB0byB0aGUgZ2xvYmFsIHBhcnNlSW50IChmaXhlZCBpbiB2NDApXG4gIGRlZmluZVByb3BlcnR5KE51bWJlciwgJ3BhcnNlSW50JywgZ2xvYmFscy5wYXJzZUludCwgTnVtYmVyLnBhcnNlSW50ICE9PSBnbG9iYWxzLnBhcnNlSW50KTtcblxuICAvLyBXb3JrIGFyb3VuZCBidWdzIGluIEFycmF5I2ZpbmQgYW5kIEFycmF5I2ZpbmRJbmRleCAtLSBlYXJseVxuICAvLyBpbXBsZW1lbnRhdGlvbnMgc2tpcHBlZCBob2xlcyBpbiBzcGFyc2UgYXJyYXlzLiAoTm90ZSB0aGF0IHRoZVxuICAvLyBpbXBsZW1lbnRhdGlvbnMgb2YgZmluZC9maW5kSW5kZXggaW5kaXJlY3RseSB1c2Ugc2hpbW1lZFxuICAvLyBtZXRob2RzIG9mIE51bWJlciwgc28gdGhpcyB0ZXN0IGhhcyB0byBoYXBwZW4gZG93biBoZXJlLilcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc3BhcnNlLWFycmF5cyAqL1xuICBpZiAoWywgMV0uZmluZChmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9KSA9PT0gMSkge1xuICAgIG92ZXJyaWRlTmF0aXZlKEFycmF5LnByb3RvdHlwZSwgJ2ZpbmQnLCBBcnJheVByb3RvdHlwZVNoaW1zLmZpbmQpO1xuICB9XG4gIGlmIChbLCAxXS5maW5kSW5kZXgoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSkgIT09IDApIHtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdmaW5kSW5kZXgnLCBBcnJheVByb3RvdHlwZVNoaW1zLmZpbmRJbmRleCk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1zcGFyc2UtYXJyYXlzICovXG5cbiAgdmFyIGlzRW51bWVyYWJsZU9uID0gRnVuY3Rpb24uYmluZC5jYWxsKEZ1bmN0aW9uLmJpbmQsIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpO1xuICB2YXIgZW5zdXJlRW51bWVyYWJsZSA9IGZ1bmN0aW9uIGVuc3VyZUVudW1lcmFibGUob2JqLCBwcm9wKSB7XG4gICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMgJiYgaXNFbnVtZXJhYmxlT24ob2JqLCBwcm9wKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgeyBlbnVtZXJhYmxlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG4gIHZhciBzbGljZUFyZ3MgPSBmdW5jdGlvbiBzbGljZUFyZ3MoKSB7XG4gICAgLy8gcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgIC8vIGFuZCBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzQzMjc3NjJjYjg3YThjNjM0YTI5XG4gICAgdmFyIGluaXRpYWwgPSBOdW1iZXIodGhpcyk7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGRlc2lyZWRBcmdDb3VudCA9IGxlbiAtIGluaXRpYWw7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoZGVzaXJlZEFyZ0NvdW50IDwgMCA/IDAgOiBkZXNpcmVkQXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSBpbml0aWFsOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGFyZ3NbaSAtIGluaXRpYWxdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYXJncztcbiAgfTtcbiAgdmFyIGFzc2lnblRvID0gZnVuY3Rpb24gYXNzaWduVG8oc291cmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFzc2lnblRvU291cmNlKHRhcmdldCwga2V5KSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9O1xuICB2YXIgYXNzaWduUmVkdWNlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBzb3VyY2VLZXlzID0ga2V5cyhPYmplY3Qoc291cmNlKSk7XG4gICAgdmFyIHN5bWJvbHM7XG4gICAgaWYgKEVTLklzQ2FsbGFibGUoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykpIHtcbiAgICAgIHN5bWJvbHMgPSBfZmlsdGVyKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoT2JqZWN0KHNvdXJjZSkpLCBpc0VudW1lcmFibGVPbihzb3VyY2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZWR1Y2UoX2NvbmNhdChzb3VyY2VLZXlzLCBzeW1ib2xzIHx8IFtdKSwgYXNzaWduVG8oc291cmNlKSwgdGFyZ2V0KTtcbiAgfTtcblxuICB2YXIgT2JqZWN0U2hpbXMgPSB7XG4gICAgLy8gMTkuMS4zLjFcbiAgICBhc3NpZ246IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgdmFyIHRvID0gRVMuVG9PYmplY3QodGFyZ2V0LCAnQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICByZXR1cm4gX3JlZHVjZShFUy5DYWxsKHNsaWNlQXJncywgMSwgYXJndW1lbnRzKSwgYXNzaWduUmVkdWNlciwgdG8pO1xuICAgIH0sXG5cbiAgICAvLyBBZGRlZCBpbiBXZWJLaXQgaW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mzg2NVxuICAgIGlzOiBmdW5jdGlvbiBpcyhhLCBiKSB7XG4gICAgICByZXR1cm4gRVMuU2FtZVZhbHVlKGEsIGIpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGFzc2lnbkhhc1BlbmRpbmdFeGNlcHRpb25zID0gT2JqZWN0LmFzc2lnbiAmJiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaXJlZm94IDM3IHN0aWxsIGhhcyBcInBlbmRpbmcgZXhjZXB0aW9uXCIgbG9naWMgaW4gaXRzIE9iamVjdC5hc3NpZ24gaW1wbGVtZW50YXRpb24sXG4gICAgLy8gd2hpY2ggaXMgNzIlIHNsb3dlciB0aGFuIG91ciBzaGltLCBhbmQgRmlyZWZveCA0MCdzIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cbiAgICB2YXIgdGhyb3dlciA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7IDE6IDIgfSk7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhyb3dlciwgJ3h5Jyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRocm93ZXJbMV0gPT09ICd5JztcbiAgICB9XG4gIH0oKSk7XG4gIGlmIChhc3NpZ25IYXNQZW5kaW5nRXhjZXB0aW9ucykge1xuICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2Fzc2lnbicsIE9iamVjdFNoaW1zLmFzc2lnbik7XG4gIH1cbiAgZGVmaW5lUHJvcGVydGllcyhPYmplY3QsIE9iamVjdFNoaW1zKTtcblxuICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgIHZhciBFUzVPYmplY3RTaGltcyA9IHtcbiAgICAgIC8vIDE5LjEuMy45XG4gICAgICAvLyBzaGltIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi81NTkzNTU0XG4gICAgICBzZXRQcm90b3R5cGVPZjogKGZ1bmN0aW9uIChPYmplY3QpIHtcbiAgICAgICAgdmFyIHNldDtcblxuICAgICAgICB2YXIgY2hlY2tBcmdzID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gICAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoTykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Nhbm5vdCBzZXQgcHJvdG90eXBlIG9uIGEgbm9uLW9iamVjdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIShwcm90byA9PT0gbnVsbCB8fCBFUy5UeXBlSXNPYmplY3QocHJvdG8pKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FuIG9ubHkgc2V0IHByb3RvdHlwZSB0byBhbiBvYmplY3Qgb3IgbnVsbCcgKyBwcm90byk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICAgICAgICAgIGNoZWNrQXJncyhPLCBwcm90byk7XG4gICAgICAgICAgX2NhbGwoc2V0LCBPLCBwcm90byk7XG4gICAgICAgICAgcmV0dXJuIE87XG4gICAgICAgIH07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyB0aGlzIHdvcmtzIGFscmVhZHkgaW4gRmlyZWZveCBhbmQgU2FmYXJpXG4gICAgICAgICAgc2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgICAgICAgIF9jYWxsKHNldCwge30sIG51bGwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUgIT09ICh7fSkuX19wcm90b19fKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cbiAgICAgICAgICAgIC8vIElFIDwgMTEgY2Fubm90IGJlIHNoaW1tZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcHJvYmFibHkgQ2hyb21lIG9yIHNvbWUgb2xkIE1vYmlsZSBzdG9jayBicm93c2VyXG4gICAgICAgICAgc2V0ID0gZnVuY3Rpb24gKHByb3RvKSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IHByb3RvOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBwbGVhc2Ugbm90ZSB0aGF0IHRoaXMgd2lsbCAqKm5vdCoqIHdvcmtcbiAgICAgICAgICAvLyBpbiB0aG9zZSBicm93c2VycyB0aGF0IGRvIG5vdCBpbmhlcml0XG4gICAgICAgICAgLy8gX19wcm90b19fIGJ5IG1pc3Rha2UgZnJvbSBPYmplY3QucHJvdG90eXBlXG4gICAgICAgICAgLy8gaW4gdGhlc2UgY2FzZXMgd2Ugc2hvdWxkIHByb2JhYmx5IHRocm93IGFuIGVycm9yXG4gICAgICAgICAgLy8gb3IgYXQgbGVhc3QgYmUgaW5mb3JtZWQgYWJvdXQgdGhlIGlzc3VlXG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPSBzZXRQcm90b3R5cGVPZihcbiAgICAgICAgICAgIHNldFByb3RvdHlwZU9mKHt9LCBudWxsKSxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGVcbiAgICAgICAgICApIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSB0cnVlIG1lYW5zIGl0IHdvcmtzIGFzIG1lYW50XG4gICAgICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IGZhbHNlIG1lYW5zIGl0J3Mgbm90IDEwMCUgcmVsaWFibGVcbiAgICAgICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gb3JcbiAgICAgICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PSAgbnVsbCBtZWFucyBpdCdzIG5vdCBhIHBvbHlmaWxsXG4gICAgICAgICAgLy8gd2hpY2ggbWVhbnMgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgICAgICAvLyB3ZSBjYW4gZXZlbiBkZWxldGUgT2JqZWN0LnByb3RvdHlwZS5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFByb3RvdHlwZU9mO1xuICAgICAgfShPYmplY3QpKVxuICAgIH07XG5cbiAgICBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdCwgRVM1T2JqZWN0U2hpbXMpO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBidWcgaW4gT3BlcmEgMTIgd2hlcmUgc2V0UHJvdG90eXBlT2YoeCwgbnVsbCkgZG9lc24ndCB3b3JrLFxuICAvLyBidXQgT2JqZWN0LmNyZWF0ZShudWxsKSBkb2VzLlxuICBpZiAoXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mXG4gICAgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mXG4gICAgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5zZXRQcm90b3R5cGVPZih7fSwgbnVsbCkpICE9PSBudWxsXG4gICAgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5jcmVhdGUobnVsbCkpID09PSBudWxsXG4gICkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgRkFLRU5VTEwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIGdwbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAgIHZhciBzcG8gPSBPYmplY3Quc2V0UHJvdG90eXBlT2Y7XG4gICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ3BvKG8pO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID09PSBGQUtFTlVMTCA/IG51bGwgOiByZXN1bHQ7XG4gICAgICB9O1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gKG8sIHApIHtcbiAgICAgICAgdmFyIHByb3RvID0gcCA9PT0gbnVsbCA/IEZBS0VOVUxMIDogcDtcbiAgICAgICAgcmV0dXJuIHNwbyhvLCBwcm90byk7XG4gICAgICB9O1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mLnBvbHlmaWxsID0gZmFsc2U7XG4gICAgfSgpKTtcbiAgfVxuXG4gIHZhciBvYmplY3RLZXlzQWNjZXB0c1ByaW1pdGl2ZXMgPSAhdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmtleXMoJ2ZvbycpOyB9KTtcbiAgaWYgKCFvYmplY3RLZXlzQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICB2YXIgb3JpZ2luYWxPYmplY3RLZXlzID0gT2JqZWN0LmtleXM7XG4gICAgb3ZlcnJpZGVOYXRpdmUoT2JqZWN0LCAna2V5cycsIGZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdEtleXMoRVMuVG9PYmplY3QodmFsdWUpKTtcbiAgICB9KTtcbiAgICBrZXlzID0gT2JqZWN0LmtleXM7XG4gIH1cbiAgdmFyIG9iamVjdEtleXNSZWplY3RzUmVnZXggPSB0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3Qua2V5cygvYS9nKTsgfSk7XG4gIGlmIChvYmplY3RLZXlzUmVqZWN0c1JlZ2V4KSB7XG4gICAgdmFyIHJlZ2V4UmVqZWN0aW5nT2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2tleXMnLCBmdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gICAgICBpZiAoVHlwZS5yZWdleCh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHJlZ2V4S2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrIGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgIF9wdXNoKHJlZ2V4S2V5cywgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdleEtleXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVnZXhSZWplY3RpbmdPYmplY3RLZXlzKHZhbHVlKTtcbiAgICB9KTtcbiAgICBrZXlzID0gT2JqZWN0LmtleXM7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICB2YXIgb2JqZWN0R09QTkFjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCdmb28nKTsgfSk7XG4gICAgaWYgKCFvYmplY3RHT1BOQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgIHZhciBjYWNoZWRXaW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlOYW1lcycsIGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXModmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbCA9IEVTLlRvT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgaWYgKF90b1N0cmluZyh2YWwpID09PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSUUgYnVnIHdoZXJlIGxheW91dCBlbmdpbmUgY2FsbHMgdXNlcmxhbmQgZ09QTiBmb3IgY3Jvc3MtZG9tYWluIGB3aW5kb3dgIG9iamVjdHNcbiAgICAgICAgICAgIHJldHVybiBfY29uY2F0KFtdLCBjYWNoZWRXaW5kb3dOYW1lcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdEdldE93blByb3BlcnR5TmFtZXModmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgIHZhciBvYmplY3RHT1BEQWNjZXB0c1ByaW1pdGl2ZXMgPSAhdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcignZm9vJywgJ2JhcicpOyB9KTtcbiAgICBpZiAoIW9iamVjdEdPUERBY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVTLlRvT2JqZWN0KHZhbHVlKSwgcHJvcGVydHkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3Quc2VhbCkge1xuICAgIHZhciBvYmplY3RTZWFsQWNjZXB0c1ByaW1pdGl2ZXMgPSAhdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LnNlYWwoJ2ZvbycpOyB9KTtcbiAgICBpZiAoIW9iamVjdFNlYWxBY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0U2VhbCA9IE9iamVjdC5zZWFsO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoT2JqZWN0LCAnc2VhbCcsIGZ1bmN0aW9uIHNlYWwodmFsdWUpIHtcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QodmFsdWUpKSB7IHJldHVybiB2YWx1ZTsgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RTZWFsKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoT2JqZWN0LmlzU2VhbGVkKSB7XG4gICAgdmFyIG9iamVjdElzU2VhbGVkQWNjZXB0c1ByaW1pdGl2ZXMgPSAhdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmlzU2VhbGVkKCdmb28nKTsgfSk7XG4gICAgaWYgKCFvYmplY3RJc1NlYWxlZEFjY2VwdHNQcmltaXRpdmVzKSB7XG4gICAgICB2YXIgb3JpZ2luYWxPYmplY3RJc1NlYWxlZCA9IE9iamVjdC5pc1NlYWxlZDtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2lzU2VhbGVkJywgZnVuY3Rpb24gaXNTZWFsZWQodmFsdWUpIHtcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QodmFsdWUpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdElzU2VhbGVkKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgIHZhciBvYmplY3RGcmVlemVBY2NlcHRzUHJpbWl0aXZlcyA9ICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuZnJlZXplKCdmb28nKTsgfSk7XG4gICAgaWYgKCFvYmplY3RGcmVlemVBY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0RnJlZXplID0gT2JqZWN0LmZyZWV6ZTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2ZyZWV6ZScsIGZ1bmN0aW9uIGZyZWV6ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdCh2YWx1ZSkpIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdEZyZWV6ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5pc0Zyb3plbikge1xuICAgIHZhciBvYmplY3RJc0Zyb3plbkFjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5pc0Zyb3plbignZm9vJyk7IH0pO1xuICAgIGlmICghb2JqZWN0SXNGcm96ZW5BY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0SXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW47XG4gICAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdpc0Zyb3plbicsIGZ1bmN0aW9uIGlzRnJvemVuKHZhbHVlKSB7XG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHZhbHVlKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RJc0Zyb3plbih2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucykge1xuICAgIHZhciBvYmplY3RQcmV2ZW50RXh0ZW5zaW9uc0FjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucygnZm9vJyk7IH0pO1xuICAgIGlmICghb2JqZWN0UHJldmVudEV4dGVuc2lvbnNBY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0UHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG4gICAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHZhbHVlKSB7XG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHZhbHVlKSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0UHJldmVudEV4dGVuc2lvbnModmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3QuaXNFeHRlbnNpYmxlKSB7XG4gICAgdmFyIG9iamVjdElzRXh0ZW5zaWJsZUFjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUoJ2ZvbycpOyB9KTtcbiAgICBpZiAoIW9iamVjdElzRXh0ZW5zaWJsZUFjY2VwdHNQcmltaXRpdmVzKSB7XG4gICAgICB2YXIgb3JpZ2luYWxPYmplY3RJc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoT2JqZWN0LCAnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHZhbHVlKSB7XG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0SXNFeHRlbnNpYmxlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgdmFyIG9iamVjdEdldFByb3RvQWNjZXB0c1ByaW1pdGl2ZXMgPSAhdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKCdmb28nKTsgfSk7XG4gICAgaWYgKCFvYmplY3RHZXRQcm90b0FjY2VwdHNQcmltaXRpdmVzKSB7XG4gICAgICB2YXIgb3JpZ2luYWxHZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsR2V0UHJvdG8oRVMuVG9PYmplY3QodmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBoYXNGbGFncyA9IHN1cHBvcnRzRGVzY3JpcHRvcnMgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJyk7XG4gICAgcmV0dXJuIGRlc2MgJiYgRVMuSXNDYWxsYWJsZShkZXNjLmdldCk7XG4gIH0oKSk7XG4gIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzICYmICFoYXNGbGFncykge1xuICAgIHZhciByZWdFeHBGbGFnc0dldHRlciA9IGZ1bmN0aW9uIGZsYWdzKCkge1xuICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QodGhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWV0aG9kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgdHlwZTogbXVzdCBiZSBhbiBvYmplY3QuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgcmVzdWx0ICs9ICdnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlnbm9yZUNhc2UpIHtcbiAgICAgICAgcmVzdWx0ICs9ICdpJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm11bHRpbGluZSkge1xuICAgICAgICByZXN1bHQgKz0gJ20nO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudW5pY29kZSkge1xuICAgICAgICByZXN1bHQgKz0gJ3UnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RpY2t5KSB7XG4gICAgICAgIHJlc3VsdCArPSAneSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBWYWx1ZS5nZXR0ZXIoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywgcmVnRXhwRmxhZ3NHZXR0ZXIpO1xuICB9XG5cbiAgdmFyIHJlZ0V4cFN1cHBvcnRzRmxhZ3NXaXRoUmVnZXggPSBzdXBwb3J0c0Rlc2NyaXB0b3JzICYmIHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gU3RyaW5nKG5ldyBSZWdFeHAoL2EvZywgJ2knKSkgPT09ICcvYS9pJztcbiAgfSk7XG4gIHZhciByZWdFeHBOZWVkc1RvU3VwcG9ydFN5bWJvbE1hdGNoID0gaGFzU3ltYm9scyAmJiBzdXBwb3J0c0Rlc2NyaXB0b3JzICYmIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRWRnZSAwLjEyIHN1cHBvcnRzIGZsYWdzIGZ1bGx5LCBidXQgZG9lcyBub3Qgc3VwcG9ydCBTeW1ib2wubWF0Y2hcbiAgICB2YXIgcmVnZXggPSAvLi87XG4gICAgcmVnZXhbU3ltYm9sLm1hdGNoXSA9IGZhbHNlO1xuICAgIHJldHVybiBSZWdFeHAocmVnZXgpID09PSByZWdleDtcbiAgfSgpKTtcblxuICB2YXIgcmVnZXhUb1N0cmluZ0lzR2VuZXJpYyA9IHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYWJjJyB9KSA9PT0gJy9hYmMvJztcbiAgfSk7XG4gIHZhciByZWdleFRvU3RyaW5nU3VwcG9ydHNHZW5lcmljRmxhZ3MgPSByZWdleFRvU3RyaW5nSXNHZW5lcmljICYmIHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgPT09ICcvYS9iJztcbiAgfSk7XG4gIGlmICghcmVnZXhUb1N0cmluZ0lzR2VuZXJpYyB8fCAhcmVnZXhUb1N0cmluZ1N1cHBvcnRzR2VuZXJpY0ZsYWdzKSB7XG4gICAgdmFyIG9yaWdSZWdFeHBUb1N0cmluZyA9IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgZGVmaW5lUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgUiA9IEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICBpZiAoVHlwZS5yZWdleChSKSkge1xuICAgICAgICByZXR1cm4gX2NhbGwob3JpZ1JlZ0V4cFRvU3RyaW5nLCBSKTtcbiAgICAgIH1cbiAgICAgIHZhciBwYXR0ZXJuID0gJFN0cmluZyhSLnNvdXJjZSk7XG4gICAgICB2YXIgZmxhZ3MgPSAkU3RyaW5nKFIuZmxhZ3MpO1xuICAgICAgcmV0dXJuICcvJyArIHBhdHRlcm4gKyAnLycgKyBmbGFncztcbiAgICB9LCB0cnVlKTtcbiAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcsIG9yaWdSZWdFeHBUb1N0cmluZyk7XG4gICAgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5wcm90b3R5cGUgPSB2b2lkIDA7XG4gIH1cblxuICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycyAmJiAoIXJlZ0V4cFN1cHBvcnRzRmxhZ3NXaXRoUmVnZXggfHwgcmVnRXhwTmVlZHNUb1N1cHBvcnRTeW1ib2xNYXRjaCkpIHtcbiAgICB2YXIgZmxhZ3NHZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycpLmdldDtcbiAgICB2YXIgc291cmNlRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUmVnRXhwLnByb3RvdHlwZSwgJ3NvdXJjZScpIHx8IHt9O1xuICAgIHZhciBsZWdhY3lTb3VyY2VHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwcmlvciB0byBpdCBiZWluZyBhIGdldHRlciwgaXQncyBvd24gKyBub25jb25maWd1cmFibGVcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VHZXR0ZXIgPSBFUy5Jc0NhbGxhYmxlKHNvdXJjZURlc2MuZ2V0KSA/IHNvdXJjZURlc2MuZ2V0IDogbGVnYWN5U291cmNlR2V0dGVyO1xuXG4gICAgdmFyIE9yaWdSZWdFeHAgPSBSZWdFeHA7XG4gICAgdmFyIFJlZ0V4cFNoaW0gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIFJlZ0V4cChwYXR0ZXJuLCBmbGFncykge1xuICAgICAgICB2YXIgcGF0dGVybklzUmVnRXhwID0gRVMuSXNSZWdFeHAocGF0dGVybik7XG4gICAgICAgIHZhciBjYWxsZWRXaXRoTmV3ID0gdGhpcyBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICAgICAgaWYgKCFjYWxsZWRXaXRoTmV3ICYmIHBhdHRlcm5Jc1JlZ0V4cCAmJiB0eXBlb2YgZmxhZ3MgPT09ICd1bmRlZmluZWQnICYmIHBhdHRlcm4uY29uc3RydWN0b3IgPT09IFJlZ0V4cCkge1xuICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIFAgPSBwYXR0ZXJuO1xuICAgICAgICB2YXIgRiA9IGZsYWdzO1xuICAgICAgICBpZiAoVHlwZS5yZWdleChwYXR0ZXJuKSkge1xuICAgICAgICAgIFAgPSBFUy5DYWxsKHNvdXJjZUdldHRlciwgcGF0dGVybik7XG4gICAgICAgICAgRiA9IHR5cGVvZiBmbGFncyA9PT0gJ3VuZGVmaW5lZCcgPyBFUy5DYWxsKGZsYWdzR2V0dGVyLCBwYXR0ZXJuKSA6IGZsYWdzO1xuICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFAsIEYpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhdHRlcm5Jc1JlZ0V4cCkge1xuICAgICAgICAgIFAgPSBwYXR0ZXJuLnNvdXJjZTtcbiAgICAgICAgICBGID0gdHlwZW9mIGZsYWdzID09PSAndW5kZWZpbmVkJyA/IHBhdHRlcm4uZmxhZ3MgOiBmbGFncztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IE9yaWdSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICAgICAgfTtcbiAgICB9KCkpO1xuICAgIHdyYXBDb25zdHJ1Y3RvcihPcmlnUmVnRXhwLCBSZWdFeHBTaGltLCB7XG4gICAgICAkaW5wdXQ6IHRydWUgLy8gQ2hyb21lIDwgdjM5ICYgT3BlcmEgPCAyNiBoYXZlIGEgbm9uc3RhbmRhcmQgXCIkaW5wdXRcIiBwcm9wZXJ0eVxuICAgIH0pO1xuICAgIFJlZ0V4cCA9IFJlZ0V4cFNoaW07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZ2xvYmFsLWFzc2lnblxuICAgIFZhbHVlLnJlZGVmaW5lKGdsb2JhbHMsICdSZWdFeHAnLCBSZWdFeHBTaGltKTtcbiAgfVxuXG4gIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG4gICAgdmFyIHJlZ2V4R2xvYmFscyA9IHtcbiAgICAgIGlucHV0OiAnJF8nLFxuICAgICAgbGFzdE1hdGNoOiAnJCYnLFxuICAgICAgbGFzdFBhcmVuOiAnJCsnLFxuICAgICAgbGVmdENvbnRleHQ6ICckYCcsXG4gICAgICByaWdodENvbnRleHQ6ICckXFwnJ1xuICAgIH07XG4gICAgX2ZvckVhY2goa2V5cyhyZWdleEdsb2JhbHMpLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgaWYgKHByb3AgaW4gUmVnRXhwICYmICEocmVnZXhHbG9iYWxzW3Byb3BdIGluIFJlZ0V4cCkpIHtcbiAgICAgICAgVmFsdWUuZ2V0dGVyKFJlZ0V4cCwgcmVnZXhHbG9iYWxzW3Byb3BdLCBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZ0V4cFtwcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYWRkRGVmYXVsdFNwZWNpZXMoUmVnRXhwKTtcblxuICB2YXIgaW52ZXJzZUVwc2lsb24gPSAxIC8gTnVtYmVyLkVQU0lMT047XG4gIHZhciByb3VuZFRpZXNUb0V2ZW4gPSBmdW5jdGlvbiByb3VuZFRpZXNUb0V2ZW4obikge1xuICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgcmVkdWNlcyBkb3duIHRvIGByZXR1cm4gbmAsIGl0IHRha2VzIGFkdmFudGFnZSBvZiBidWlsdC1pbiByb3VuZGluZy5cbiAgICByZXR1cm4gKG4gKyBpbnZlcnNlRXBzaWxvbikgLSBpbnZlcnNlRXBzaWxvbjtcbiAgfTtcbiAgdmFyIEJJTkFSWV8zMl9FUFNJTE9OID0gTWF0aC5wb3coMiwgLTIzKTtcbiAgdmFyIEJJTkFSWV8zMl9NQVhfVkFMVUUgPSBNYXRoLnBvdygyLCAxMjcpICogKDIgLSBCSU5BUllfMzJfRVBTSUxPTik7XG4gIHZhciBCSU5BUllfMzJfTUlOX1ZBTFVFID0gTWF0aC5wb3coMiwgLTEyNik7XG4gIHZhciBFID0gTWF0aC5FO1xuICB2YXIgTE9HMkUgPSBNYXRoLkxPRzJFO1xuICB2YXIgTE9HMTBFID0gTWF0aC5MT0cxMEU7XG4gIHZhciBudW1iZXJDTFogPSBOdW1iZXIucHJvdG90eXBlLmNsejtcbiAgZGVsZXRlIE51bWJlci5wcm90b3R5cGUuY2x6OyAvLyBTYWZhcmkgOCBoYXMgTnVtYmVyI2NselxuXG4gIHZhciBNYXRoU2hpbXMgPSB7XG4gICAgYWNvc2g6IGZ1bmN0aW9uIGFjb3NoKHZhbHVlKSB7XG4gICAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAobnVtYmVySXNOYU4oeCkgfHwgdmFsdWUgPCAxKSB7IHJldHVybiBOYU47IH1cbiAgICAgIGlmICh4ID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgICBpZiAoeCA9PT0gSW5maW5pdHkpIHsgcmV0dXJuIHg7IH1cblxuICAgICAgdmFyIHhJbnZTcXVhcmVkID0gMSAvICh4ICogeCk7XG4gICAgICBpZiAoeCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIF9sb2cxcCh4IC0gMSArIChfc3FydCgxIC0geEludlNxdWFyZWQpICogeCkpO1xuICAgICAgfVxuICAgICAgdmFyIGhhbGZYID0geCAvIDI7XG4gICAgICByZXR1cm4gX2xvZzFwKGhhbGZYICsgKF9zcXJ0KDEgLSB4SW52U3F1YXJlZCkgKiBoYWxmWCkgLSAxKSArICgxIC8gTE9HMkUpO1xuICAgIH0sXG5cbiAgICBhc2luaDogZnVuY3Rpb24gYXNpbmgodmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICh4ID09PSAwIHx8ICFnbG9iYWxJc0Zpbml0ZSh4KSkge1xuICAgICAgICByZXR1cm4geDtcbiAgICAgIH1cblxuICAgICAgdmFyIGEgPSBfYWJzKHgpO1xuICAgICAgdmFyIGFTcXVhcmVkID0gYSAqIGE7XG4gICAgICB2YXIgcyA9IF9zaWduKHgpO1xuICAgICAgaWYgKGEgPCAxKSB7XG4gICAgICAgIHJldHVybiBzICogX2xvZzFwKGEgKyAoYVNxdWFyZWQgLyAoX3NxcnQoYVNxdWFyZWQgKyAxKSArIDEpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcyAqIChfbG9nMXAoKGEgLyAyKSArIChfc3FydCgxICsgKDEgLyBhU3F1YXJlZCkpICogYSAvIDIpIC0gMSkgKyAoMSAvIExPRzJFKSk7XG4gICAgfSxcblxuICAgIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh2YWx1ZSkge1xuICAgICAgdmFyIHggPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICBpZiAoeCA9PT0gMCkgeyByZXR1cm4geDsgfVxuICAgICAgaWYgKHggPT09IC0xKSB7IHJldHVybiAtSW5maW5pdHk7IH1cbiAgICAgIGlmICh4ID09PSAxKSB7IHJldHVybiBJbmZpbml0eTsgfVxuICAgICAgaWYgKG51bWJlcklzTmFOKHgpIHx8IHggPCAtMSB8fCB4ID4gMSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgfVxuXG4gICAgICB2YXIgYSA9IF9hYnMoeCk7XG4gICAgICByZXR1cm4gX3NpZ24oeCkgKiBfbG9nMXAoMiAqIGEgLyAoMSAtIGEpKSAvIDI7XG4gICAgfSxcblxuICAgIGNicnQ6IGZ1bmN0aW9uIGNicnQodmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICh4ID09PSAwKSB7IHJldHVybiB4OyB9XG4gICAgICB2YXIgbmVnYXRlID0geCA8IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKG5lZ2F0ZSkgeyB4ID0gLXg7IH1cbiAgICAgIGlmICh4ID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXN1bHQgPSBJbmZpbml0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IF9leHAoX2xvZyh4KSAvIDMpO1xuICAgICAgICAvLyBmcm9tIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ3ViZV9yb290I051bWVyaWNhbF9tZXRob2RzXG4gICAgICAgIHJlc3VsdCA9ICgoeCAvIChyZXN1bHQgKiByZXN1bHQpKSArICgyICogcmVzdWx0KSkgLyAzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5lZ2F0ZSA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgfSxcblxuICAgIGNsejMyOiBmdW5jdGlvbiBjbHozMih2YWx1ZSkge1xuICAgICAgLy8gU2VlIGh0dHBzOi8vYnVncy5lY21hc2NyaXB0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjQ2NVxuICAgICAgdmFyIHggPSBOdW1iZXIodmFsdWUpO1xuICAgICAgdmFyIG51bWJlciA9IEVTLlRvVWludDMyKHgpO1xuICAgICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMzI7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtYmVyQ0xaID8gRVMuQ2FsbChudW1iZXJDTFosIG51bWJlcikgOiAzMSAtIF9mbG9vcihfbG9nKG51bWJlciArIDAuNSkgKiBMT0cyRSk7XG4gICAgfSxcblxuICAgIGNvc2g6IGZ1bmN0aW9uIGNvc2godmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICh4ID09PSAwKSB7IHJldHVybiAxOyB9IC8vICswIG9yIC0wXG4gICAgICBpZiAobnVtYmVySXNOYU4oeCkpIHsgcmV0dXJuIE5hTjsgfVxuICAgICAgaWYgKCFnbG9iYWxJc0Zpbml0ZSh4KSkgeyByZXR1cm4gSW5maW5pdHk7IH1cblxuICAgICAgdmFyIHQgPSBfZXhwKF9hYnMoeCkgLSAxKTtcbiAgICAgIHJldHVybiAodCArICgxIC8gKHQgKiBFICogRSkpKSAqIChFIC8gMik7XG4gICAgfSxcblxuICAgIGV4cG0xOiBmdW5jdGlvbiBleHBtMSh2YWx1ZSkge1xuICAgICAgdmFyIHggPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKHggPT09IC1JbmZpbml0eSkgeyByZXR1cm4gLTE7IH1cbiAgICAgIGlmICghZ2xvYmFsSXNGaW5pdGUoeCkgfHwgeCA9PT0gMCkgeyByZXR1cm4geDsgfVxuICAgICAgaWYgKF9hYnMoeCkgPiAwLjUpIHtcbiAgICAgICAgcmV0dXJuIF9leHAoeCkgLSAxO1xuICAgICAgfVxuICAgICAgLy8gQSBtb3JlIHByZWNpc2UgYXBwcm94aW1hdGlvbiB1c2luZyBUYXlsb3Igc2VyaWVzIGV4cGFuc2lvblxuICAgICAgLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2VzNi1zaGltL2lzc3Vlcy8zMTQjaXNzdWVjb21tZW50LTcwMjkzOTg2XG4gICAgICB2YXIgdCA9IHg7XG4gICAgICB2YXIgc3VtID0gMDtcbiAgICAgIHZhciBuID0gMTtcbiAgICAgIHdoaWxlIChzdW0gKyB0ICE9PSBzdW0pIHtcbiAgICAgICAgc3VtICs9IHQ7XG4gICAgICAgIG4gKz0gMTtcbiAgICAgICAgdCAqPSB4IC8gbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW07XG4gICAgfSxcblxuICAgIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh4LCB5KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgIHZhciBsYXJnZXN0ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF9hYnMoTnVtYmVyKGFyZ3VtZW50c1tpXSkpO1xuICAgICAgICBpZiAobGFyZ2VzdCA8IHZhbHVlKSB7XG4gICAgICAgICAgcmVzdWx0ICo9IChsYXJnZXN0IC8gdmFsdWUpICogKGxhcmdlc3QgLyB2YWx1ZSk7XG4gICAgICAgICAgcmVzdWx0ICs9IDE7XG4gICAgICAgICAgbGFyZ2VzdCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZSA+IDAgPyAodmFsdWUgLyBsYXJnZXN0KSAqICh2YWx1ZSAvIGxhcmdlc3QpIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsYXJnZXN0ID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZ2VzdCAqIF9zcXJ0KHJlc3VsdCk7XG4gICAgfSxcblxuICAgIGxvZzI6IGZ1bmN0aW9uIGxvZzIodmFsdWUpIHtcbiAgICAgIHJldHVybiBfbG9nKHZhbHVlKSAqIExPRzJFO1xuICAgIH0sXG5cbiAgICBsb2cxMDogZnVuY3Rpb24gbG9nMTAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfbG9nKHZhbHVlKSAqIExPRzEwRTtcbiAgICB9LFxuXG4gICAgbG9nMXA6IF9sb2cxcCxcblxuICAgIHNpZ246IF9zaWduLFxuXG4gICAgc2luaDogZnVuY3Rpb24gc2luaCh2YWx1ZSkge1xuICAgICAgdmFyIHggPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKCFnbG9iYWxJc0Zpbml0ZSh4KSB8fCB4ID09PSAwKSB7IHJldHVybiB4OyB9XG5cbiAgICAgIHZhciBhID0gX2Ficyh4KTtcbiAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICB2YXIgdSA9IE1hdGguZXhwbTEoYSk7XG4gICAgICAgIHJldHVybiBfc2lnbih4KSAqIHUgKiAoMSArICgxIC8gKHUgKyAxKSkpIC8gMjtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gX2V4cChhIC0gMSk7XG4gICAgICByZXR1cm4gX3NpZ24oeCkgKiAodCAtICgxIC8gKHQgKiBFICogRSkpKSAqIChFIC8gMik7XG4gICAgfSxcblxuICAgIHRhbmg6IGZ1bmN0aW9uIHRhbmgodmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmIChudW1iZXJJc05hTih4KSB8fCB4ID09PSAwKSB7IHJldHVybiB4OyB9XG4gICAgICAvLyBjYW4gZXhpdCBlYXJseSBhdCArLTIwIGFzIEpTIGxvc2VzIHByZWNpc2lvbiBmb3IgdHJ1ZSB2YWx1ZSBhdCB0aGlzIGludGVnZXJcbiAgICAgIGlmICh4ID49IDIwKSB7IHJldHVybiAxOyB9XG4gICAgICBpZiAoeCA8PSAtMjApIHsgcmV0dXJuIC0xOyB9XG5cbiAgICAgIHJldHVybiAoTWF0aC5leHBtMSh4KSAtIE1hdGguZXhwbTEoLXgpKSAvIChfZXhwKHgpICsgX2V4cCgteCkpO1xuICAgIH0sXG5cbiAgICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIHJldHVybiB4IDwgMCA/IC1fZmxvb3IoLXgpIDogX2Zsb29yKHgpO1xuICAgIH0sXG5cbiAgICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpIHtcbiAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9pbXVsXG4gICAgICB2YXIgYSA9IEVTLlRvVWludDMyKHgpO1xuICAgICAgdmFyIGIgPSBFUy5Ub1VpbnQzMih5KTtcbiAgICAgIHZhciBhaCA9IChhID4+PiAxNikgJiAweGZmZmY7XG4gICAgICB2YXIgYWwgPSBhICYgMHhmZmZmO1xuICAgICAgdmFyIGJoID0gKGIgPj4+IDE2KSAmIDB4ZmZmZjtcbiAgICAgIHZhciBibCA9IGIgJiAweGZmZmY7XG4gICAgICAvLyB0aGUgc2hpZnQgYnkgMCBmaXhlcyB0aGUgc2lnbiBvbiB0aGUgaGlnaCBwYXJ0XG4gICAgICAvLyB0aGUgZmluYWwgfDAgY29udmVydHMgdGhlIHVuc2lnbmVkIHZhbHVlIGludG8gYSBzaWduZWQgdmFsdWVcbiAgICAgIHJldHVybiAoYWwgKiBibCkgKyAoKCgoYWggKiBibCkgKyAoYWwgKiBiaCkpIDw8IDE2KSA+Pj4gMCkgfCAwO1xuICAgIH0sXG5cbiAgICBmcm91bmQ6IGZ1bmN0aW9uIGZyb3VuZCh4KSB7XG4gICAgICB2YXIgdiA9IE51bWJlcih4KTtcbiAgICAgIGlmICh2ID09PSAwIHx8IHYgPT09IEluZmluaXR5IHx8IHYgPT09IC1JbmZpbml0eSB8fCBudW1iZXJJc05hTih2KSkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH1cbiAgICAgIHZhciBzaWduID0gX3NpZ24odik7XG4gICAgICB2YXIgYWJzID0gX2Ficyh2KTtcbiAgICAgIGlmIChhYnMgPCBCSU5BUllfMzJfTUlOX1ZBTFVFKSB7XG4gICAgICAgIHJldHVybiBzaWduICogcm91bmRUaWVzVG9FdmVuKGFicyAvIEJJTkFSWV8zMl9NSU5fVkFMVUUgLyBCSU5BUllfMzJfRVBTSUxPTikgKiBCSU5BUllfMzJfTUlOX1ZBTFVFICogQklOQVJZXzMyX0VQU0lMT047XG4gICAgICB9XG4gICAgICAvLyBWZWx0a2FtcCdzIHNwbGl0dGluZyAoPylcbiAgICAgIHZhciBhID0gKDEgKyAoQklOQVJZXzMyX0VQU0lMT04gLyBOdW1iZXIuRVBTSUxPTikpICogYWJzO1xuICAgICAgdmFyIHJlc3VsdCA9IGEgLSAoYSAtIGFicyk7XG4gICAgICBpZiAocmVzdWx0ID4gQklOQVJZXzMyX01BWF9WQUxVRSB8fCBudW1iZXJJc05hTihyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzaWduICogSW5maW5pdHk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2lnbiAqIHJlc3VsdDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHdpdGhpblVMUERpc3RhbmNlID0gZnVuY3Rpb24gd2l0aGluVUxQRGlzdGFuY2UocmVzdWx0LCBleHBlY3RlZCwgZGlzdGFuY2UpIHtcbiAgICByZXR1cm4gX2FicygxIC0gKHJlc3VsdCAvIGV4cGVjdGVkKSkgLyBOdW1iZXIuRVBTSUxPTiA8IChkaXN0YW5jZSB8fCA4KTtcbiAgfTtcblxuICBkZWZpbmVQcm9wZXJ0aWVzKE1hdGgsIE1hdGhTaGltcyk7XG4gIC8vIENocm9tZSA8IDQwIHNpbmggcmV0dXJucyDiiJ4gZm9yIGxhcmdlIG51bWJlcnNcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ3NpbmgnLCBNYXRoU2hpbXMuc2luaCwgTWF0aC5zaW5oKDcxMCkgPT09IEluZmluaXR5KTtcbiAgLy8gQ2hyb21lIDwgNDAgY29zaCByZXR1cm5zIOKIniBmb3IgbGFyZ2UgbnVtYmVyc1xuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnY29zaCcsIE1hdGhTaGltcy5jb3NoLCBNYXRoLmNvc2goNzEwKSA9PT0gSW5maW5pdHkpO1xuICAvLyBJRSAxMSBUUCBoYXMgYW4gaW1wcmVjaXNlIGxvZzFwOiByZXBvcnRzIE1hdGgubG9nMXAoLTFlLTE3KSBhcyAwXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdsb2cxcCcsIE1hdGhTaGltcy5sb2cxcCwgTWF0aC5sb2cxcCgtMWUtMTcpICE9PSAtMWUtMTcpO1xuICAvLyBJRSAxMSBUUCBoYXMgYW4gaW1wcmVjaXNlIGFzaW5oOiByZXBvcnRzIE1hdGguYXNpbmgoLTFlNykgYXMgbm90IGV4YWN0bHkgZXF1YWwgdG8gLU1hdGguYXNpbmgoMWU3KVxuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnYXNpbmgnLCBNYXRoU2hpbXMuYXNpbmgsIE1hdGguYXNpbmgoLTFlNykgIT09IC1NYXRoLmFzaW5oKDFlNykpO1xuICAvLyBDaHJvbWUgPCA1NCBhc2luaCByZXR1cm5zIOKIniBmb3IgbGFyZ2UgbnVtYmVycyBhbmQgc2hvdWxkIG5vdFxuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnYXNpbmgnLCBNYXRoU2hpbXMuYXNpbmgsIE1hdGguYXNpbmgoMWUrMzAwKSA9PT0gSW5maW5pdHkpO1xuICAvLyBDaHJvbWUgPCA1NCBhdGFuaCBpbmNvcnJlY3RseSByZXR1cm5zIDAgZm9yIGxhcmdlIG51bWJlcnNcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ2F0YW5oJywgTWF0aFNoaW1zLmF0YW5oLCBNYXRoLmF0YW5oKDFlLTMwMCkgPT09IDApO1xuICAvLyBDaHJvbWUgNDAgaGFzIGFuIGltcHJlY2lzZSBNYXRoLnRhbmggd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ3RhbmgnLCBNYXRoU2hpbXMudGFuaCwgTWF0aC50YW5oKC0yZS0xNykgIT09IC0yZS0xNyk7XG4gIC8vIENocm9tZSA0MCBsb3NlcyBNYXRoLmFjb3NoIHByZWNpc2lvbiB3aXRoIGhpZ2ggbnVtYmVyc1xuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnYWNvc2gnLCBNYXRoU2hpbXMuYWNvc2gsIE1hdGguYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkgPT09IEluZmluaXR5KTtcbiAgLy8gQ2hyb21lIDwgNTQgaGFzIGFuIGluYWNjdXJhdGUgYWNvc2ggZm9yIEVQU0lMT04gZGVsdGFzXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdhY29zaCcsIE1hdGhTaGltcy5hY29zaCwgIXdpdGhpblVMUERpc3RhbmNlKE1hdGguYWNvc2goMSArIE51bWJlci5FUFNJTE9OKSwgTWF0aC5zcXJ0KDIgKiBOdW1iZXIuRVBTSUxPTikpKTtcbiAgLy8gRmlyZWZveCAzOCBvbiBXaW5kb3dzXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdjYnJ0JywgTWF0aFNoaW1zLmNicnQsICF3aXRoaW5VTFBEaXN0YW5jZShNYXRoLmNicnQoMWUtMzAwKSwgMWUtMTAwKSk7XG4gIC8vIG5vZGUgMC4xMSBoYXMgYW4gaW1wcmVjaXNlIE1hdGguc2luaCB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnc2luaCcsIE1hdGhTaGltcy5zaW5oLCBNYXRoLnNpbmgoLTJlLTE3KSAhPT0gLTJlLTE3KTtcbiAgLy8gRkYgMzUgb24gTGludXggcmVwb3J0cyAyMjAyNS40NjU3OTQ4MDY3MjUgZm9yIE1hdGguZXhwbTEoMTApXG4gIHZhciBleHBtMU9mVGVuID0gTWF0aC5leHBtMSgxMCk7XG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdleHBtMScsIE1hdGhTaGltcy5leHBtMSwgZXhwbTFPZlRlbiA+IDIyMDI1LjQ2NTc5NDgwNjcxOSB8fCBleHBtMU9mVGVuIDwgMjIwMjUuNDY1Nzk0ODA2NzE2NTE2OCk7XG4gIC8vIG5vZGUgdjEyLjExIC0gdjEyLjE1IHJlcG9ydCBOYU5cbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ2h5cG90JywgTWF0aFNoaW1zLmh5cG90LCBNYXRoLmh5cG90KEluZmluaXR5LCBOYU4pICE9PSBJbmZpbml0eSk7XG5cbiAgdmFyIG9yaWdNYXRoUm91bmQgPSBNYXRoLnJvdW5kO1xuICAvLyBicmVha3MgaW4gZS5nLiBTYWZhcmkgOCwgSW50ZXJuZXQgRXhwbG9yZXIgMTEsIE9wZXJhIDEyXG4gIHZhciByb3VuZEhhbmRsZXNCb3VuZGFyeUNvbmRpdGlvbnMgPSBNYXRoLnJvdW5kKDAuNSAtIChOdW1iZXIuRVBTSUxPTiAvIDQpKSA9PT0gMFxuICAgICYmIE1hdGgucm91bmQoLTAuNSArIChOdW1iZXIuRVBTSUxPTiAvIDMuOTkpKSA9PT0gMTtcblxuICAvLyBXaGVuIGVuZ2luZXMgdXNlIE1hdGguZmxvb3IoeCArIDAuNSkgaW50ZXJuYWxseSwgTWF0aC5yb3VuZCBjYW4gYmUgYnVnZ3kgZm9yIGxhcmdlIGludGVnZXJzLlxuICAvLyBUaGlzIGJlaGF2aW9yIHNob3VsZCBiZSBnb3Zlcm5lZCBieSBcInJvdW5kIHRvIG5lYXJlc3QsIHRpZXMgdG8gZXZlbiBtb2RlXCJcbiAgLy8gc2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10ZXJtcy1hbmQtZGVmaW5pdGlvbnMtbnVtYmVyLXR5cGVcbiAgLy8gVGhlc2UgYXJlIHRoZSBib3VuZGFyeSBjYXNlcyB3aGVyZSBpdCBicmVha3MuXG4gIHZhciBzbWFsbGVzdFBvc2l0aXZlTnVtYmVyV2hlcmVSb3VuZEJyZWFrcyA9IGludmVyc2VFcHNpbG9uICsgMTtcbiAgdmFyIGxhcmdlc3RQb3NpdGl2ZU51bWJlcldoZXJlUm91bmRCcmVha3MgPSAoMiAqIGludmVyc2VFcHNpbG9uKSAtIDE7XG4gIHZhciByb3VuZERvZXNOb3RJbmNyZWFzZUludGVnZXJzID0gW1xuICAgIHNtYWxsZXN0UG9zaXRpdmVOdW1iZXJXaGVyZVJvdW5kQnJlYWtzLFxuICAgIGxhcmdlc3RQb3NpdGl2ZU51bWJlcldoZXJlUm91bmRCcmVha3NcbiAgXS5ldmVyeShmdW5jdGlvbiAobnVtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtKSA9PT0gbnVtO1xuICB9KTtcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ3JvdW5kJywgZnVuY3Rpb24gcm91bmQoeCkge1xuICAgIHZhciBmbG9vciA9IF9mbG9vcih4KTtcbiAgICB2YXIgY2VpbCA9IGZsb29yID09PSAtMSA/IC0wIDogZmxvb3IgKyAxO1xuICAgIHJldHVybiB4IC0gZmxvb3IgPCAwLjUgPyBmbG9vciA6IGNlaWw7XG4gIH0sICFyb3VuZEhhbmRsZXNCb3VuZGFyeUNvbmRpdGlvbnMgfHwgIXJvdW5kRG9lc05vdEluY3JlYXNlSW50ZWdlcnMpO1xuICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKE1hdGgucm91bmQsIG9yaWdNYXRoUm91bmQpO1xuXG4gIHZhciBvcmlnSW11bCA9IE1hdGguaW11bDtcbiAgaWYgKE1hdGguaW11bCgweGZmZmZmZmZmLCA1KSAhPT0gLTUpIHtcbiAgICAvLyBTYWZhcmkgNi4xLCBhdCBsZWFzdCwgcmVwb3J0cyBcIjBcIiBmb3IgdGhpcyB2YWx1ZVxuICAgIE1hdGguaW11bCA9IE1hdGhTaGltcy5pbXVsO1xuICAgIFZhbHVlLnByZXNlcnZlVG9TdHJpbmcoTWF0aC5pbXVsLCBvcmlnSW11bCk7XG4gIH1cbiAgaWYgKE1hdGguaW11bC5sZW5ndGggIT09IDIpIHtcbiAgICAvLyBTYWZhcmkgOC4wLjQgaGFzIGEgbGVuZ3RoIG9mIDFcbiAgICAvLyBmaXhlZCBpbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQzNjU4XG4gICAgb3ZlcnJpZGVOYXRpdmUoTWF0aCwgJ2ltdWwnLCBmdW5jdGlvbiBpbXVsKHgsIHkpIHtcbiAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdJbXVsLCBNYXRoLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUHJvbWlzZXNcbiAgLy8gU2ltcGxlc3QgcG9zc2libGUgaW1wbGVtZW50YXRpb247IHVzZSBhIDNyZC1wYXJ0eSBsaWJyYXJ5IGlmIHlvdVxuICAvLyB3YW50IHRoZSBiZXN0IHBvc3NpYmxlIHNwZWVkIGFuZC9vciBsb25nIHN0YWNrIHRyYWNlcy5cbiAgdmFyIFByb21pc2VTaGltID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2V0VGltZW91dCA9IGdsb2JhbHMuc2V0VGltZW91dDtcbiAgICAvLyBzb21lIGVudmlyb25tZW50cyBkb24ndCBoYXZlIHNldFRpbWVvdXQgLSBubyB3YXkgdG8gc2hpbSBoZXJlLlxuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc2V0VGltZW91dCAhPT0gJ29iamVjdCcpIHsgcmV0dXJuOyB9XG5cbiAgICBFUy5Jc1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QocHJvbWlzZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwcm9taXNlLl9wcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHVuaW5pdGlhbGl6ZWQsIG9yIG1pc3Npbmcgb3VyIGhpZGRlbiBmaWVsZC5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBcIlByb21pc2VDYXBhYmlsaXR5XCIgaW4gdGhlIHNwZWMgaXMgd2hhdCBtb3N0IHByb21pc2UgaW1wbGVtZW50YXRpb25zXG4gICAgLy8gY2FsbCBhIFwiZGVmZXJyZWRcIi5cbiAgICB2YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgICAgaWYgKCFFUy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgY2FwYWJpbGl0eSA9IHRoaXM7XG4gICAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChjYXBhYmlsaXR5LnJlc29sdmUgIT09IHZvaWQgMCB8fCBjYXBhYmlsaXR5LnJlamVjdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIFByb21pc2UgaW1wbGVtZW50YXRpb24hJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FwYWJpbGl0eS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgY2FwYWJpbGl0eS5yZWplY3QgPSByZWplY3Q7XG4gICAgICB9O1xuICAgICAgLy8gSW5pdGlhbGl6ZSBmaWVsZHMgdG8gaW5mb3JtIG9wdGltaXplcnMgYWJvdXQgdGhlIG9iamVjdCBzaGFwZS5cbiAgICAgIGNhcGFiaWxpdHkucmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgIGNhcGFiaWxpdHkucmVqZWN0ID0gdm9pZCAwO1xuICAgICAgY2FwYWJpbGl0eS5wcm9taXNlID0gbmV3IEMocmVzb2x2ZXIpO1xuICAgICAgaWYgKCEoRVMuSXNDYWxsYWJsZShjYXBhYmlsaXR5LnJlc29sdmUpICYmIEVTLklzQ2FsbGFibGUoY2FwYWJpbGl0eS5yZWplY3QpKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBmaW5kIGFuIGFwcHJvcHJpYXRlIHNldEltbWVkaWF0ZS1hbGlrZVxuICAgIHZhciBtYWtlWmVyb1RpbWVvdXQ7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIEVTLklzQ2FsbGFibGUod2luZG93LnBvc3RNZXNzYWdlKSkge1xuICAgICAgbWFrZVplcm9UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBmcm9tIGh0dHA6Ly9kYmFyb24ub3JnL2xvZy8yMDEwMDMwOS1mYXN0ZXItdGltZW91dHNcbiAgICAgICAgdmFyIHRpbWVvdXRzID0gW107XG4gICAgICAgIHZhciBtZXNzYWdlTmFtZSA9ICd6ZXJvLXRpbWVvdXQtbWVzc2FnZSc7XG4gICAgICAgIHZhciBzZXRaZXJvVGltZW91dCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIF9wdXNoKHRpbWVvdXRzLCBmbik7XG4gICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2VOYW1lLCAnKicpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFuZGxlTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IHdpbmRvdyAmJiBldmVudC5kYXRhID09PSBtZXNzYWdlTmFtZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGltZW91dHMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdmFyIGZuID0gX3NoaWZ0KHRpbWVvdXRzKTtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UsIHRydWUpO1xuICAgICAgICByZXR1cm4gc2V0WmVyb1RpbWVvdXQ7XG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgbWFrZVByb21pc2VBc2FwID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQW4gZWZmaWNpZW50IHRhc2stc2NoZWR1bGVyIGJhc2VkIG9uIGEgcHJlLWV4aXN0aW5nIFByb21pc2VcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uLCB3aGljaCB3ZSBjYW4gdXNlIGV2ZW4gaWYgd2Ugb3ZlcnJpZGUgdGhlXG4gICAgICAvLyBnbG9iYWwgUHJvbWlzZSBiZWxvdyAoaW4gb3JkZXIgdG8gd29ya2Fyb3VuZCBidWdzKVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1JheW5vcy9vYnNlcnYtaGFzaC9pc3N1ZXMvMiNpc3N1ZWNvbW1lbnQtMzU4NTc2NzFcbiAgICAgIHZhciBQID0gZ2xvYmFscy5Qcm9taXNlO1xuICAgICAgdmFyIHByID0gUCAmJiBQLnJlc29sdmUgJiYgUC5yZXNvbHZlKCk7XG4gICAgICByZXR1cm4gcHIgJiYgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHByLnRoZW4odGFzayk7XG4gICAgICB9O1xuICAgIH07XG4gICAgdmFyIGVucXVldWUgPSBFUy5Jc0NhbGxhYmxlKGdsb2JhbHMuc2V0SW1tZWRpYXRlKVxuICAgICAgPyBnbG9iYWxzLnNldEltbWVkaWF0ZVxuICAgICAgOiAoXG4gICAgICAgIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiBwcm9jZXNzLm5leHRUaWNrXG4gICAgICAgICAgPyBwcm9jZXNzLm5leHRUaWNrXG4gICAgICAgICAgOiBtYWtlUHJvbWlzZUFzYXAoKSB8fCAoRVMuSXNDYWxsYWJsZShtYWtlWmVyb1RpbWVvdXQpID8gbWFrZVplcm9UaW1lb3V0KCkgOiBmdW5jdGlvbiAodGFzaykgeyBzZXRUaW1lb3V0KHRhc2ssIDApOyB9KVxuICAgICAgKTsgLy8gZmFsbGJhY2tcblxuICAgIC8vIENvbnN0YW50cyBmb3IgUHJvbWlzZSBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBQUk9NSVNFX0lERU5USVRZID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH07XG4gICAgdmFyIFBST01JU0VfVEhST1dFUiA9IGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH07XG4gICAgdmFyIFBST01JU0VfUEVORElORyA9IDA7XG4gICAgdmFyIFBST01JU0VfRlVMRklMTEVEID0gMTtcbiAgICB2YXIgUFJPTUlTRV9SRUpFQ1RFRCA9IDI7XG4gICAgLy8gV2Ugc3RvcmUgZnVsZmlsbC9yZWplY3QgaGFuZGxlcnMgYW5kIGNhcGFiaWxpdGllcyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICB2YXIgUFJPTUlTRV9GVUxGSUxMX09GRlNFVCA9IDA7XG4gICAgdmFyIFBST01JU0VfUkVKRUNUX09GRlNFVCA9IDE7XG4gICAgdmFyIFBST01JU0VfQ0FQQUJJTElUWV9PRkZTRVQgPSAyO1xuICAgIC8vIFRoaXMgaXMgdXNlZCBpbiBhbiBvcHRpbWl6YXRpb24gZm9yIGNoYWluaW5nIHByb21pc2VzIHZpYSB0aGVuLlxuICAgIHZhciBQUk9NSVNFX0ZBS0VfQ0FQQUJJTElUWSA9IHt9O1xuXG4gICAgdmFyIGVucXVldWVQcm9taXNlUmVhY3Rpb25Kb2IgPSBmdW5jdGlvbiAoaGFuZGxlciwgY2FwYWJpbGl0eSwgYXJndW1lbnQpIHtcbiAgICAgIGVucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9taXNlUmVhY3Rpb25Kb2IoaGFuZGxlciwgY2FwYWJpbGl0eSwgYXJndW1lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBwcm9taXNlUmVhY3Rpb25Kb2IgPSBmdW5jdGlvbiAoaGFuZGxlciwgcHJvbWlzZUNhcGFiaWxpdHksIGFyZ3VtZW50KSB7XG4gICAgICB2YXIgaGFuZGxlclJlc3VsdCwgZjtcbiAgICAgIGlmIChwcm9taXNlQ2FwYWJpbGl0eSA9PT0gUFJPTUlTRV9GQUtFX0NBUEFCSUxJVFkpIHtcbiAgICAgICAgLy8gRmFzdCBjYXNlLCB3aGVuIHdlIGRvbid0IGFjdHVhbGx5IG5lZWQgdG8gY2hhaW4gdGhyb3VnaCB0byBhXG4gICAgICAgIC8vIChyZWFsKSBwcm9taXNlQ2FwYWJpbGl0eS5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXIoYXJndW1lbnQpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgaGFuZGxlclJlc3VsdCA9IGhhbmRsZXIoYXJndW1lbnQpO1xuICAgICAgICBmID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlclJlc3VsdCA9IGU7XG4gICAgICAgIGYgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgICB9XG4gICAgICBmKGhhbmRsZXJSZXN1bHQpO1xuICAgIH07XG5cbiAgICB2YXIgZnVsZmlsbFByb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIHZhciBfcHJvbWlzZSA9IHByb21pc2UuX3Byb21pc2U7XG4gICAgICB2YXIgbGVuZ3RoID0gX3Byb21pc2UucmVhY3Rpb25MZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICBlbnF1ZXVlUHJvbWlzZVJlYWN0aW9uSm9iKFxuICAgICAgICAgIF9wcm9taXNlLmZ1bGZpbGxSZWFjdGlvbkhhbmRsZXIwLFxuICAgICAgICAgIF9wcm9taXNlLnJlYWN0aW9uQ2FwYWJpbGl0eTAsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgX3Byb21pc2UuZnVsZmlsbFJlYWN0aW9uSGFuZGxlcjAgPSB2b2lkIDA7XG4gICAgICAgIF9wcm9taXNlLnJlamVjdFJlYWN0aW9uczAgPSB2b2lkIDA7XG4gICAgICAgIF9wcm9taXNlLnJlYWN0aW9uQ2FwYWJpbGl0eTAgPSB2b2lkIDA7XG4gICAgICAgIGlmIChsZW5ndGggPiAxKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDEsIGlkeCA9IDA7IGkgPCBsZW5ndGg7IGkrKywgaWR4ICs9IDMpIHtcbiAgICAgICAgICAgIGVucXVldWVQcm9taXNlUmVhY3Rpb25Kb2IoXG4gICAgICAgICAgICAgIF9wcm9taXNlW2lkeCArIFBST01JU0VfRlVMRklMTF9PRkZTRVRdLFxuICAgICAgICAgICAgICBfcHJvbWlzZVtpZHggKyBQUk9NSVNFX0NBUEFCSUxJVFlfT0ZGU0VUXSxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9taXNlW2lkeCArIFBST01JU0VfRlVMRklMTF9PRkZTRVRdID0gdm9pZCAwO1xuICAgICAgICAgICAgcHJvbWlzZVtpZHggKyBQUk9NSVNFX1JFSkVDVF9PRkZTRVRdID0gdm9pZCAwO1xuICAgICAgICAgICAgcHJvbWlzZVtpZHggKyBQUk9NSVNFX0NBUEFCSUxJVFlfT0ZGU0VUXSA9IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9wcm9taXNlLnJlc3VsdCA9IHZhbHVlO1xuICAgICAgX3Byb21pc2Uuc3RhdGUgPSBQUk9NSVNFX0ZVTEZJTExFRDtcbiAgICAgIF9wcm9taXNlLnJlYWN0aW9uTGVuZ3RoID0gMDtcbiAgICB9O1xuXG4gICAgdmFyIHJlamVjdFByb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICB2YXIgX3Byb21pc2UgPSBwcm9taXNlLl9wcm9taXNlO1xuICAgICAgdmFyIGxlbmd0aCA9IF9wcm9taXNlLnJlYWN0aW9uTGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5xdWV1ZVByb21pc2VSZWFjdGlvbkpvYihcbiAgICAgICAgICBfcHJvbWlzZS5yZWplY3RSZWFjdGlvbkhhbmRsZXIwLFxuICAgICAgICAgIF9wcm9taXNlLnJlYWN0aW9uQ2FwYWJpbGl0eTAsXG4gICAgICAgICAgcmVhc29uXG4gICAgICAgICk7XG4gICAgICAgIF9wcm9taXNlLmZ1bGZpbGxSZWFjdGlvbkhhbmRsZXIwID0gdm9pZCAwO1xuICAgICAgICBfcHJvbWlzZS5yZWplY3RSZWFjdGlvbnMwID0gdm9pZCAwO1xuICAgICAgICBfcHJvbWlzZS5yZWFjdGlvbkNhcGFiaWxpdHkwID0gdm9pZCAwO1xuICAgICAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBpZHggPSAwOyBpIDwgbGVuZ3RoOyBpKyssIGlkeCArPSAzKSB7XG4gICAgICAgICAgICBlbnF1ZXVlUHJvbWlzZVJlYWN0aW9uSm9iKFxuICAgICAgICAgICAgICBfcHJvbWlzZVtpZHggKyBQUk9NSVNFX1JFSkVDVF9PRkZTRVRdLFxuICAgICAgICAgICAgICBfcHJvbWlzZVtpZHggKyBQUk9NSVNFX0NBUEFCSUxJVFlfT0ZGU0VUXSxcbiAgICAgICAgICAgICAgcmVhc29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvbWlzZVtpZHggKyBQUk9NSVNFX0ZVTEZJTExfT0ZGU0VUXSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHByb21pc2VbaWR4ICsgUFJPTUlTRV9SRUpFQ1RfT0ZGU0VUXSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHByb21pc2VbaWR4ICsgUFJPTUlTRV9DQVBBQklMSVRZX09GRlNFVF0gPSB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfcHJvbWlzZS5yZXN1bHQgPSByZWFzb247XG4gICAgICBfcHJvbWlzZS5zdGF0ZSA9IFBST01JU0VfUkVKRUNURUQ7XG4gICAgICBfcHJvbWlzZS5yZWFjdGlvbkxlbmd0aCA9IDA7XG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVSZXNvbHZpbmdGdW5jdGlvbnMgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgdmFyIGFscmVhZHlSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiAocmVzb2x1dGlvbikge1xuICAgICAgICB2YXIgdGhlbjtcbiAgICAgICAgaWYgKGFscmVhZHlSZXNvbHZlZCkgeyByZXR1cm47IH1cbiAgICAgICAgYWxyZWFkeVJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc29sdXRpb24gPT09IHByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0UHJvbWlzZShwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdTZWxmIHJlc29sdXRpb24nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICByZXR1cm4gZnVsZmlsbFByb21pc2UocHJvbWlzZSwgcmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuID0gcmVzb2x1dGlvbi50aGVuO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdFByb21pc2UocHJvbWlzZSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKHRoZW4pKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bGZpbGxQcm9taXNlKHByb21pc2UsIHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHByb21pc2VSZXNvbHZlVGhlbmFibGVKb2IocHJvbWlzZSwgcmVzb2x1dGlvbiwgdGhlbik7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGlmIChhbHJlYWR5UmVzb2x2ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIGFscmVhZHlSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiByZWplY3RQcm9taXNlKHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfTtcbiAgICB9O1xuXG4gICAgdmFyIG9wdGltaXplZFRoZW4gPSBmdW5jdGlvbiAodGhlbiwgdGhlbmFibGUsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gT3B0aW1pemF0aW9uOiBzaW5jZSB3ZSBkaXNjYXJkIHRoZSByZXN1bHQsIHdlIGNhbiBwYXNzIG91clxuICAgICAgLy8gb3duIHRoZW4gaW1wbGVtZW50YXRpb24gYSBzcGVjaWFsIGhpbnQgdG8gbGV0IGl0IGtub3cgaXRcbiAgICAgIC8vIGRvZXNuJ3QgaGF2ZSB0byBjcmVhdGUgaXQuICAoVGhlIFBST01JU0VfRkFLRV9DQVBBQklMSVRZXG4gICAgICAvLyBvYmplY3QgaXMgbG9jYWwgdG8gdGhpcyBpbXBsZW1lbnRhdGlvbiBhbmQgdW5mb3JnZWFibGUgb3V0c2lkZS4pXG4gICAgICBpZiAodGhlbiA9PT0gUHJvbWlzZSRwcm90b3R5cGUkdGhlbikge1xuICAgICAgICBfY2FsbCh0aGVuLCB0aGVuYWJsZSwgcmVzb2x2ZSwgcmVqZWN0LCBQUk9NSVNFX0ZBS0VfQ0FQQUJJTElUWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfY2FsbCh0aGVuLCB0aGVuYWJsZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZVRoZW5hYmxlSm9iID0gZnVuY3Rpb24gKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICB2YXIgcmVzb2x2aW5nRnVuY3Rpb25zID0gY3JlYXRlUmVzb2x2aW5nRnVuY3Rpb25zKHByb21pc2UpO1xuICAgICAgdmFyIHJlc29sdmUgPSByZXNvbHZpbmdGdW5jdGlvbnMucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZXNvbHZpbmdGdW5jdGlvbnMucmVqZWN0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW1pemVkVGhlbih0aGVuLCB0aGVuYWJsZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgUHJvbWlzZSRwcm90b3R5cGUsIFByb21pc2UkcHJvdG90eXBlJHRoZW47XG4gICAgdmFyIFByb21pc2UgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIFByb21pc2VTaGltID0gZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVNoaW0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29uc3RydWN0b3IgUHJvbWlzZSByZXF1aXJlcyBcIm5ld1wiJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMgJiYgdGhpcy5fcHJvbWlzZSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBjb25zdHJ1Y3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9idWdzLmVjbWFzY3JpcHQub3JnL3Nob3dfYnVnLmNnaT9pZD0yNDgyXG4gICAgICAgIGlmICghRVMuSXNDYWxsYWJsZShyZXNvbHZlcikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSB2YWxpZCByZXNvbHZlcicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9taXNlID0gZW11bGF0ZUVTNmNvbnN0cnVjdCh0aGlzLCBQcm9taXNlU2hpbSwgUHJvbWlzZSRwcm90b3R5cGUsIHtcbiAgICAgICAgICBfcHJvbWlzZToge1xuICAgICAgICAgICAgcmVzdWx0OiB2b2lkIDAsXG4gICAgICAgICAgICBzdGF0ZTogUFJPTUlTRV9QRU5ESU5HLFxuICAgICAgICAgICAgLy8gVGhlIGZpcnN0IG1lbWJlciBvZiB0aGUgXCJyZWFjdGlvbnNcIiBhcnJheSBpcyBpbmxpbmVkIGhlcmUsXG4gICAgICAgICAgICAvLyBzaW5jZSBtb3N0IHByb21pc2VzIG9ubHkgaGF2ZSBvbmUgcmVhY3Rpb24uXG4gICAgICAgICAgICAvLyBXZSd2ZSBhbHNvIGV4cGxvZGVkIHRoZSAncmVhY3Rpb24nIG9iamVjdCB0byBpbmxpbmUgdGhlXG4gICAgICAgICAgICAvLyBcImhhbmRsZXJcIiBhbmQgXCJjYXBhYmlsaXR5XCIgZmllbGRzLCBzaW5jZSBib3RoIGZ1bGZpbGwgYW5kXG4gICAgICAgICAgICAvLyByZWplY3QgcmVhY3Rpb25zIHNoYXJlIHRoZSBzYW1lIGNhcGFiaWxpdHkuXG4gICAgICAgICAgICByZWFjdGlvbkxlbmd0aDogMCxcbiAgICAgICAgICAgIGZ1bGZpbGxSZWFjdGlvbkhhbmRsZXIwOiB2b2lkIDAsXG4gICAgICAgICAgICByZWplY3RSZWFjdGlvbkhhbmRsZXIwOiB2b2lkIDAsXG4gICAgICAgICAgICByZWFjdGlvbkNhcGFiaWxpdHkwOiB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVzb2x2aW5nRnVuY3Rpb25zID0gY3JlYXRlUmVzb2x2aW5nRnVuY3Rpb25zKHByb21pc2UpO1xuICAgICAgICB2YXIgcmVqZWN0ID0gcmVzb2x2aW5nRnVuY3Rpb25zLnJlamVjdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNvbHZlcihyZXNvbHZpbmdGdW5jdGlvbnMucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gUHJvbWlzZVNoaW07XG4gICAgfSgpKTtcbiAgICBQcm9taXNlJHByb3RvdHlwZSA9IFByb21pc2UucHJvdG90eXBlO1xuXG4gICAgdmFyIF9wcm9taXNlQWxsUmVzb2x2ZXIgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlcywgY2FwYWJpbGl0eSwgcmVtYWluaW5nKSB7XG4gICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSB7IHJldHVybjsgfVxuICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHg7XG4gICAgICAgIGlmICgoLS1yZW1haW5pbmcuY291bnQpID09PSAwKSB7XG4gICAgICAgICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZXMpOyAvLyBjYWxsIHcvIHRoaXM9PT11bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIHBlcmZvcm1Qcm9taXNlQWxsID0gZnVuY3Rpb24gKGl0ZXJhdG9yUmVjb3JkLCBDLCByZXN1bHRDYXBhYmlsaXR5KSB7XG4gICAgICB2YXIgaXQgPSBpdGVyYXRvclJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciByZW1haW5pbmcgPSB7IGNvdW50OiAxIH07XG4gICAgICB2YXIgbmV4dCwgbmV4dFZhbHVlO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmV4dCA9IEVTLkl0ZXJhdG9yU3RlcChpdCk7XG4gICAgICAgICAgaWYgKG5leHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpdGVyYXRvclJlY29yZC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0VmFsdWUgPSBuZXh0LnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaXRlcmF0b3JSZWNvcmQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdm9pZCAwO1xuICAgICAgICB2YXIgbmV4dFByb21pc2UgPSBDLnJlc29sdmUobmV4dFZhbHVlKTtcbiAgICAgICAgdmFyIHJlc29sdmVFbGVtZW50ID0gX3Byb21pc2VBbGxSZXNvbHZlcihcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgcmVzdWx0Q2FwYWJpbGl0eSxcbiAgICAgICAgICByZW1haW5pbmdcbiAgICAgICAgKTtcbiAgICAgICAgcmVtYWluaW5nLmNvdW50ICs9IDE7XG4gICAgICAgIG9wdGltaXplZFRoZW4obmV4dFByb21pc2UudGhlbiwgbmV4dFByb21pc2UsIHJlc29sdmVFbGVtZW50LCByZXN1bHRDYXBhYmlsaXR5LnJlamVjdCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAoKC0tcmVtYWluaW5nLmNvdW50KSA9PT0gMCkge1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IHJlc3VsdENhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZXMpOyAvLyBjYWxsIHcvIHRoaXM9PT11bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRDYXBhYmlsaXR5LnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciBwZXJmb3JtUHJvbWlzZVJhY2UgPSBmdW5jdGlvbiAoaXRlcmF0b3JSZWNvcmQsIEMsIHJlc3VsdENhcGFiaWxpdHkpIHtcbiAgICAgIHZhciBpdCA9IGl0ZXJhdG9yUmVjb3JkLml0ZXJhdG9yO1xuICAgICAgdmFyIG5leHQsIG5leHRWYWx1ZSwgbmV4dFByb21pc2U7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5leHQgPSBFUy5JdGVyYXRvclN0ZXAoaXQpO1xuICAgICAgICAgIGlmIChuZXh0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gTk9URTogSWYgaXRlcmFibGUgaGFzIG5vIGl0ZW1zLCByZXN1bHRpbmcgcHJvbWlzZSB3aWxsIG5ldmVyXG4gICAgICAgICAgICAvLyByZXNvbHZlOyBzZWU6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9wcm9taXNlcy11bndyYXBwaW5nL2lzc3Vlcy83NVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmVjbWFzY3JpcHQub3JnL3Nob3dfYnVnLmNnaT9pZD0yNTE1XG4gICAgICAgICAgICBpdGVyYXRvclJlY29yZC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0VmFsdWUgPSBuZXh0LnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaXRlcmF0b3JSZWNvcmQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0UHJvbWlzZSA9IEMucmVzb2x2ZShuZXh0VmFsdWUpO1xuICAgICAgICBvcHRpbWl6ZWRUaGVuKG5leHRQcm9taXNlLnRoZW4sIG5leHRQcm9taXNlLCByZXN1bHRDYXBhYmlsaXR5LnJlc29sdmUsIHJlc3VsdENhcGFiaWxpdHkucmVqZWN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRDYXBhYmlsaXR5LnByb21pc2U7XG4gICAgfTtcblxuICAgIGRlZmluZVByb3BlcnRpZXMoUHJvbWlzZSwge1xuICAgICAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChDKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgaXMgbm90IG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgICAgICB2YXIgaXRlcmF0b3IsIGl0ZXJhdG9yUmVjb3JkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGl0ZXJhdG9yID0gRVMuR2V0SXRlcmF0b3IoaXRlcmFibGUpO1xuICAgICAgICAgIGl0ZXJhdG9yUmVjb3JkID0geyBpdGVyYXRvcjogaXRlcmF0b3IsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgcmV0dXJuIHBlcmZvcm1Qcm9taXNlQWxsKGl0ZXJhdG9yUmVjb3JkLCBDLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHZhciBleGNlcHRpb24gPSBlO1xuICAgICAgICAgIGlmIChpdGVyYXRvclJlY29yZCAmJiAhaXRlcmF0b3JSZWNvcmQuZG9uZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgRVMuSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlZSkge1xuICAgICAgICAgICAgICBleGNlcHRpb24gPSBlZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgICAgIHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChDKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgaXMgbm90IG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgICAgICB2YXIgaXRlcmF0b3IsIGl0ZXJhdG9yUmVjb3JkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGl0ZXJhdG9yID0gRVMuR2V0SXRlcmF0b3IoaXRlcmFibGUpO1xuICAgICAgICAgIGl0ZXJhdG9yUmVjb3JkID0geyBpdGVyYXRvcjogaXRlcmF0b3IsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgcmV0dXJuIHBlcmZvcm1Qcm9taXNlUmFjZShpdGVyYXRvclJlY29yZCwgQywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB2YXIgZXhjZXB0aW9uID0gZTtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JSZWNvcmQgJiYgIWl0ZXJhdG9yUmVjb3JkLmRvbmUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIEVTLkl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZWUpIHtcbiAgICAgICAgICAgICAgZXhjZXB0aW9uID0gZWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAgICAgICByZWplY3QoZXhjZXB0aW9uKTtcbiAgICAgICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChDKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgICAgIHZhciByZWplY3RGdW5jID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgICAgIHJlamVjdEZ1bmMocmVhc29uKTsgLy8gY2FsbCB3aXRoIHRoaXM9PT11bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICAgIH0sXG5cbiAgICAgIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUodikge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9lc2Rpc2N1c3Mub3JnL3RvcGljL2ZpeGluZy1wcm9taXNlLXJlc29sdmUgZm9yIHNwZWNcbiAgICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChDKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVTLklzUHJvbWlzZSh2KSkge1xuICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHYuY29uc3RydWN0b3I7XG4gICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSBDKSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgICAgIHZhciByZXNvbHZlRnVuYyA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAgICAgcmVzb2x2ZUZ1bmModik7IC8vIGNhbGwgd2l0aCB0aGlzPT09dW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWZpbmVQcm9wZXJ0aWVzKFByb21pc2UkcHJvdG90eXBlLCB7XG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgfSxcblxuICAgICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgIGlmICghRVMuSXNQcm9taXNlKHByb21pc2UpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIHByb21pc2UnKTsgfVxuICAgICAgICB2YXIgQyA9IEVTLlNwZWNpZXNDb25zdHJ1Y3Rvcihwcm9taXNlLCBQcm9taXNlKTtcbiAgICAgICAgdmFyIHJlc3VsdENhcGFiaWxpdHk7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZUlzSWdub3JlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSA9PT0gUFJPTUlTRV9GQUtFX0NBUEFCSUxJVFk7XG4gICAgICAgIGlmIChyZXR1cm5WYWx1ZUlzSWdub3JlZCAmJiBDID09PSBQcm9taXNlKSB7XG4gICAgICAgICAgcmVzdWx0Q2FwYWJpbGl0eSA9IFBST01JU0VfRkFLRV9DQVBBQklMSVRZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdENhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGVyZm9ybVByb21pc2VUaGVuKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCByZXN1bHRDYXBhYmlsaXR5KVxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UndmUgc3BsaXQgdGhlICdyZWFjdGlvbicgb2JqZWN0IGludG8gaXRzIHR3b1xuICAgICAgICAvLyBjb21wb25lbnRzLCBcImNhcGFiaWxpdGllc1wiIGFuZCBcImhhbmRsZXJcIlxuICAgICAgICAvLyBcImNhcGFiaWxpdGllc1wiIGlzIGFsd2F5cyBlcXVhbCB0byBgcmVzdWx0Q2FwYWJpbGl0eWBcbiAgICAgICAgdmFyIGZ1bGZpbGxSZWFjdGlvbkhhbmRsZXIgPSBFUy5Jc0NhbGxhYmxlKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogUFJPTUlTRV9JREVOVElUWTtcbiAgICAgICAgdmFyIHJlamVjdFJlYWN0aW9uSGFuZGxlciA9IEVTLklzQ2FsbGFibGUob25SZWplY3RlZCkgPyBvblJlamVjdGVkIDogUFJPTUlTRV9USFJPV0VSO1xuICAgICAgICB2YXIgX3Byb21pc2UgPSBwcm9taXNlLl9wcm9taXNlO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIGlmIChfcHJvbWlzZS5zdGF0ZSA9PT0gUFJPTUlTRV9QRU5ESU5HKSB7XG4gICAgICAgICAgaWYgKF9wcm9taXNlLnJlYWN0aW9uTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBfcHJvbWlzZS5mdWxmaWxsUmVhY3Rpb25IYW5kbGVyMCA9IGZ1bGZpbGxSZWFjdGlvbkhhbmRsZXI7XG4gICAgICAgICAgICBfcHJvbWlzZS5yZWplY3RSZWFjdGlvbkhhbmRsZXIwID0gcmVqZWN0UmVhY3Rpb25IYW5kbGVyO1xuICAgICAgICAgICAgX3Byb21pc2UucmVhY3Rpb25DYXBhYmlsaXR5MCA9IHJlc3VsdENhcGFiaWxpdHk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpZHggPSAzICogKF9wcm9taXNlLnJlYWN0aW9uTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBfcHJvbWlzZVtpZHggKyBQUk9NSVNFX0ZVTEZJTExfT0ZGU0VUXSA9IGZ1bGZpbGxSZWFjdGlvbkhhbmRsZXI7XG4gICAgICAgICAgICBfcHJvbWlzZVtpZHggKyBQUk9NSVNFX1JFSkVDVF9PRkZTRVRdID0gcmVqZWN0UmVhY3Rpb25IYW5kbGVyO1xuICAgICAgICAgICAgX3Byb21pc2VbaWR4ICsgUFJPTUlTRV9DQVBBQklMSVRZX09GRlNFVF0gPSByZXN1bHRDYXBhYmlsaXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBfcHJvbWlzZS5yZWFjdGlvbkxlbmd0aCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKF9wcm9taXNlLnN0YXRlID09PSBQUk9NSVNFX0ZVTEZJTExFRCkge1xuICAgICAgICAgIHZhbHVlID0gX3Byb21pc2UucmVzdWx0O1xuICAgICAgICAgIGVucXVldWVQcm9taXNlUmVhY3Rpb25Kb2IoXG4gICAgICAgICAgICBmdWxmaWxsUmVhY3Rpb25IYW5kbGVyLFxuICAgICAgICAgICAgcmVzdWx0Q2FwYWJpbGl0eSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChfcHJvbWlzZS5zdGF0ZSA9PT0gUFJPTUlTRV9SRUpFQ1RFRCkge1xuICAgICAgICAgIHZhbHVlID0gX3Byb21pc2UucmVzdWx0O1xuICAgICAgICAgIGVucXVldWVQcm9taXNlUmVhY3Rpb25Kb2IoXG4gICAgICAgICAgICByZWplY3RSZWFjdGlvbkhhbmRsZXIsXG4gICAgICAgICAgICByZXN1bHRDYXBhYmlsaXR5LFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZXhwZWN0ZWQgUHJvbWlzZSBzdGF0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRDYXBhYmlsaXR5LnByb21pc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gVGhpcyBoZWxwcyB0aGUgb3B0aW1pemVyIGJ5IGVuc3VyaW5nIHRoYXQgbWV0aG9kcyB3aGljaCB0YWtlXG4gICAgLy8gY2FwYWJpbGl0aWVzIGFyZW4ndCBwb2x5bW9ycGhpYy5cbiAgICBQUk9NSVNFX0ZBS0VfQ0FQQUJJTElUWSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShQcm9taXNlKTtcbiAgICBQcm9taXNlJHByb3RvdHlwZSR0aGVuID0gUHJvbWlzZSRwcm90b3R5cGUudGhlbjtcblxuICAgIHJldHVybiBQcm9taXNlO1xuICB9KCkpO1xuXG4gIC8vIENocm9tZSdzIG5hdGl2ZSBQcm9taXNlIGhhcyBleHRyYSBtZXRob2RzIHRoYXQgaXQgc2hvdWxkbid0IGhhdmUuIExldCdzIHJlbW92ZSB0aGVtLlxuICBpZiAoZ2xvYmFscy5Qcm9taXNlKSB7XG4gICAgZGVsZXRlIGdsb2JhbHMuUHJvbWlzZS5hY2NlcHQ7XG4gICAgZGVsZXRlIGdsb2JhbHMuUHJvbWlzZS5kZWZlcjtcbiAgICBkZWxldGUgZ2xvYmFscy5Qcm9taXNlLnByb3RvdHlwZS5jaGFpbjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgUHJvbWlzZVNoaW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHBvcnQgdGhlIFByb21pc2UgY29uc3RydWN0b3IuXG4gICAgZGVmaW5lUHJvcGVydGllcyhnbG9iYWxzLCB7IFByb21pc2U6IFByb21pc2VTaGltIH0pO1xuICAgIC8vIEluIENocm9tZSAzMyAoYW5kIHRoZXJlYWJvdXRzKSBQcm9taXNlIGlzIGRlZmluZWQsIGJ1dCB0aGVcbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBpcyBidWdneSBpbiBhIG51bWJlciBvZiB3YXlzLiAgTGV0J3MgY2hlY2sgc3ViY2xhc3NpbmdcbiAgICAvLyBzdXBwb3J0IHRvIHNlZSBpZiB3ZSBoYXZlIGEgYnVnZ3kgaW1wbGVtZW50YXRpb24uXG4gICAgdmFyIHByb21pc2VTdXBwb3J0c1N1YmNsYXNzaW5nID0gc3VwcG9ydHNTdWJjbGFzc2luZyhnbG9iYWxzLlByb21pc2UsIGZ1bmN0aW9uIChTKSB7XG4gICAgICByZXR1cm4gUy5yZXNvbHZlKDQyKS50aGVuKGZ1bmN0aW9uICgpIHt9KSBpbnN0YW5jZW9mIFM7XG4gICAgfSk7XG4gICAgdmFyIHByb21pc2VJZ25vcmVzTm9uRnVuY3Rpb25UaGVuQ2FsbGJhY2tzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnbG9iYWxzLlByb21pc2UucmVqZWN0KDQyKS50aGVuKG51bGwsIDUpLnRoZW4obnVsbCwgbm9vcCk7XG4gICAgfSk7XG4gICAgdmFyIHByb21pc2VSZXF1aXJlc09iamVjdENvbnRleHQgPSB0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBnbG9iYWxzLlByb21pc2UuY2FsbCgzLCBub29wKTsgfSk7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlKCkgd2FzIGVycmF0YSdlZCBsYXRlIGluIHRoZSBFUzYgcHJvY2Vzcy5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTExNzA3NDJcbiAgICAvLyAgICAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTYxXG4gICAgLy8gSXQgc2VydmVzIGFzIGEgcHJveHkgZm9yIGEgbnVtYmVyIG9mIG90aGVyIGJ1Z3MgaW4gZWFybHkgUHJvbWlzZVxuICAgIC8vIGltcGxlbWVudGF0aW9ucy5cbiAgICB2YXIgcHJvbWlzZVJlc29sdmVCcm9rZW4gPSAoZnVuY3Rpb24gKFByb21pc2UpIHtcbiAgICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKDUpO1xuICAgICAgcC5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgdmFyIHAyID0gUHJvbWlzZS5yZXNvbHZlKHApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcDIudGhlbihudWxsLCBub29wKS50aGVuKG51bGwsIG5vb3ApOyAvLyBhdm9pZCBcInVuY2F1Z2h0IHJlamVjdGlvblwiIHdhcm5pbmdzIGluIGNvbnNvbGVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIHY4IG5hdGl2ZSBQcm9taXNlcyBicmVhayBoZXJlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01NzUzMTRcbiAgICAgIH1cbiAgICAgIHJldHVybiBwID09PSBwMjsgLy8gVGhpcyAqc2hvdWxkKiBiZSBmYWxzZSFcbiAgICB9KGdsb2JhbHMuUHJvbWlzZSkpO1xuXG4gICAgLy8gQ2hyb21lIDQ2IChwcm9iYWJseSBvbGRlciB0b28pIGRvZXMgbm90IHJldHJpZXZlIGEgdGhlbmFibGUncyAudGhlbiBzeW5jaHJvbm91c2x5XG4gICAgdmFyIGdldHNUaGVuU3luY2hyb25vdXNseSA9IHN1cHBvcnRzRGVzY3JpcHRvcnMgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2V0dGVyLXJldHVyblxuICAgICAgdmFyIHRoZW5hYmxlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAndGhlbicsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IGNvdW50ICs9IDE7IH0gfSk7XG4gICAgICBQcm9taXNlLnJlc29sdmUodGhlbmFibGUpO1xuICAgICAgcmV0dXJuIGNvdW50ID09PSAxO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgQmFkUmVzb2x2ZXJQcm9taXNlID0gZnVuY3Rpb24gQmFkUmVzb2x2ZXJQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGV4ZWN1dG9yKTtcbiAgICAgIGV4ZWN1dG9yKDMsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgIHRoaXMudGhlbiA9IHAudGhlbjtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBCYWRSZXNvbHZlclByb21pc2U7XG4gICAgfTtcbiAgICBCYWRSZXNvbHZlclByb21pc2UucHJvdG90eXBlID0gUHJvbWlzZS5wcm90b3R5cGU7XG4gICAgQmFkUmVzb2x2ZXJQcm9taXNlLmFsbCA9IFByb21pc2UuYWxsO1xuICAgIC8vIENocm9tZSBDYW5hcnkgNDkgKHByb2JhYmx5IG9sZGVyIHRvbykgaGFzIHNvbWUgaW1wbGVtZW50YXRpb24gYnVnc1xuICAgIHZhciBoYXNCYWRSZXNvbHZlclByb21pc2UgPSB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFCYWRSZXNvbHZlclByb21pc2UuYWxsKFsxLCAyXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICAhcHJvbWlzZVN1cHBvcnRzU3ViY2xhc3NpbmdcbiAgICAgIHx8ICFwcm9taXNlSWdub3Jlc05vbkZ1bmN0aW9uVGhlbkNhbGxiYWNrc1xuICAgICAgfHwgIXByb21pc2VSZXF1aXJlc09iamVjdENvbnRleHRcbiAgICAgIHx8IHByb21pc2VSZXNvbHZlQnJva2VuXG4gICAgICB8fCAhZ2V0c1RoZW5TeW5jaHJvbm91c2x5XG4gICAgICB8fCBoYXNCYWRSZXNvbHZlclByb21pc2VcbiAgICApIHtcbiAgICAgIFByb21pc2UgPSBQcm9taXNlU2hpbTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1nbG9iYWwtYXNzaWduXG4gICAgICBvdmVycmlkZU5hdGl2ZShnbG9iYWxzLCAnUHJvbWlzZScsIFByb21pc2VTaGltKTtcbiAgICB9XG4gICAgaWYgKFByb21pc2UuYWxsLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdmFyIG9yaWdBbGwgPSBQcm9taXNlLmFsbDtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFByb21pc2UsICdhbGwnLCBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ0FsbCwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoUHJvbWlzZS5yYWNlLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdmFyIG9yaWdSYWNlID0gUHJvbWlzZS5yYWNlO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoUHJvbWlzZSwgJ3JhY2UnLCBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdSYWNlLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChQcm9taXNlLnJlc29sdmUubGVuZ3RoICE9PSAxKSB7XG4gICAgICB2YXIgb3JpZ1Jlc29sdmUgPSBQcm9taXNlLnJlc29sdmU7XG4gICAgICBvdmVycmlkZU5hdGl2ZShQcm9taXNlLCAncmVzb2x2ZScsIGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnUmVzb2x2ZSwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoUHJvbWlzZS5yZWplY3QubGVuZ3RoICE9PSAxKSB7XG4gICAgICB2YXIgb3JpZ1JlamVjdCA9IFByb21pc2UucmVqZWN0O1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoUHJvbWlzZSwgJ3JlamVjdCcsIGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdSZWplY3QsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZW5zdXJlRW51bWVyYWJsZShQcm9taXNlLCAnYWxsJyk7XG4gICAgZW5zdXJlRW51bWVyYWJsZShQcm9taXNlLCAncmFjZScpO1xuICAgIGVuc3VyZUVudW1lcmFibGUoUHJvbWlzZSwgJ3Jlc29sdmUnKTtcbiAgICBlbnN1cmVFbnVtZXJhYmxlKFByb21pc2UsICdyZWplY3QnKTtcbiAgICBhZGREZWZhdWx0U3BlY2llcyhQcm9taXNlKTtcbiAgfVxuXG4gIC8vIE1hcCBhbmQgU2V0IHJlcXVpcmUgYSB0cnVlIEVTNSBlbnZpcm9ubWVudFxuICAvLyBUaGVpciBmYXN0IHBhdGggYWxzbyByZXF1aXJlcyB0aGF0IHRoZSBlbnZpcm9ubWVudCBwcmVzZXJ2ZVxuICAvLyBwcm9wZXJ0eSBpbnNlcnRpb24gb3JkZXIsIHdoaWNoIGlzIG5vdCBndWFyYW50ZWVkIGJ5IHRoZSBzcGVjLlxuICB2YXIgdGVzdE9yZGVyID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGtleXMoX3JlZHVjZShhLCBmdW5jdGlvbiAobywgaykge1xuICAgICAgb1trXSA9IHRydWU7XG4gICAgICByZXR1cm4gbztcbiAgICB9LCB7fSkpO1xuICAgIHJldHVybiBhLmpvaW4oJzonKSA9PT0gYi5qb2luKCc6Jyk7XG4gIH07XG4gIHZhciBwcmVzZXJ2ZXNJbnNlcnRpb25PcmRlciA9IHRlc3RPcmRlcihbJ3onLCAnYScsICdiYiddKTtcbiAgLy8gc29tZSBlbmdpbmVzIChlZywgQ2hyb21lKSBvbmx5IHByZXNlcnZlIGluc2VydGlvbiBvcmRlciBmb3Igc3RyaW5nIGtleXNcbiAgdmFyIHByZXNlcnZlc051bWVyaWNJbnNlcnRpb25PcmRlciA9IHRlc3RPcmRlcihbJ3onLCAxLCAnYScsICczJywgMl0pO1xuXG4gIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cbiAgICB2YXIgZmFzdGtleSA9IGZ1bmN0aW9uIGZhc3RrZXkoa2V5LCBza2lwSW5zZXJ0aW9uT3JkZXJDaGVjaykge1xuICAgICAgaWYgKCFza2lwSW5zZXJ0aW9uT3JkZXJDaGVjayAmJiAhcHJlc2VydmVzSW5zZXJ0aW9uT3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoa2V5KSkge1xuICAgICAgICByZXR1cm4gJ14nICsgRVMuVG9TdHJpbmcoa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuICckJyArIGtleTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gbm90ZSB0aGF0IC0wIHdpbGwgZ2V0IGNvZXJjZWQgdG8gXCIwXCIgd2hlbiB1c2VkIGFzIGEgcHJvcGVydHkga2V5XG4gICAgICAgIGlmICghcHJlc2VydmVzTnVtZXJpY0luc2VydGlvbk9yZGVyKSB7XG4gICAgICAgICAgcmV0dXJuICduJyArIGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Yga2V5ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuICdiJyArIGtleTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgZW1wdHlPYmplY3QgPSBmdW5jdGlvbiBlbXB0eU9iamVjdCgpIHtcbiAgICAgIC8vIGFjY29tb2RhdGUgc29tZSBvbGRlciBub3QtcXVpdGUtRVM1IGJyb3dzZXJzXG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICB9O1xuXG4gICAgdmFyIGFkZEl0ZXJhYmxlVG9NYXAgPSBmdW5jdGlvbiBhZGRJdGVyYWJsZVRvTWFwKE1hcENvbnN0cnVjdG9yLCBtYXAsIGl0ZXJhYmxlKSB7XG4gICAgICBpZiAoaXNBcnJheShpdGVyYWJsZSkgfHwgVHlwZS5zdHJpbmcoaXRlcmFibGUpKSB7XG4gICAgICAgIF9mb3JFYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0l0ZXJhdG9yIHZhbHVlICcgKyBlbnRyeSArICcgaXMgbm90IGFuIGVudHJ5IG9iamVjdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXAuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYWJsZSBpbnN0YW5jZW9mIE1hcENvbnN0cnVjdG9yKSB7XG4gICAgICAgIF9jYWxsKE1hcENvbnN0cnVjdG9yLnByb3RvdHlwZS5mb3JFYWNoLCBpdGVyYWJsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpdGVyLCBhZGRlcjtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdGVyYWJsZSkpIHtcbiAgICAgICAgICBhZGRlciA9IG1hcC5zZXQ7XG4gICAgICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKGFkZGVyKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgbWFwJyk7IH1cbiAgICAgICAgICBpdGVyID0gRVMuR2V0SXRlcmF0b3IoaXRlcmFibGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIG5leHQgPSBFUy5JdGVyYXRvclN0ZXAoaXRlcik7XG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gZmFsc2UpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIHZhciBuZXh0SXRlbSA9IG5leHQudmFsdWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChuZXh0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJdGVyYXRvciB2YWx1ZSAnICsgbmV4dEl0ZW0gKyAnIGlzIG5vdCBhbiBlbnRyeSBvYmplY3QnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY2FsbChhZGRlciwgbWFwLCBuZXh0SXRlbVswXSwgbmV4dEl0ZW1bMV0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBFUy5JdGVyYXRvckNsb3NlKGl0ZXIsIHRydWUpO1xuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGFkZEl0ZXJhYmxlVG9TZXQgPSBmdW5jdGlvbiBhZGRJdGVyYWJsZVRvU2V0KFNldENvbnN0cnVjdG9yLCBzZXQsIGl0ZXJhYmxlKSB7XG4gICAgICBpZiAoaXNBcnJheShpdGVyYWJsZSkgfHwgVHlwZS5zdHJpbmcoaXRlcmFibGUpKSB7XG4gICAgICAgIF9mb3JFYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBzZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZXJhYmxlIGluc3RhbmNlb2YgU2V0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgX2NhbGwoU2V0Q29uc3RydWN0b3IucHJvdG90eXBlLmZvckVhY2gsIGl0ZXJhYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBzZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaXRlciwgYWRkZXI7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXRlcmFibGUpKSB7XG4gICAgICAgICAgYWRkZXIgPSBzZXQuYWRkO1xuICAgICAgICAgIGlmICghRVMuSXNDYWxsYWJsZShhZGRlcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHNldCcpOyB9XG4gICAgICAgICAgaXRlciA9IEVTLkdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gRVMuSXRlcmF0b3JTdGVwKGl0ZXIpO1xuICAgICAgICAgICAgaWYgKG5leHQgPT09IGZhbHNlKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIF9jYWxsKGFkZGVyLCBzZXQsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIEVTLkl0ZXJhdG9yQ2xvc2UoaXRlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBjb2xsZWN0aW9uU2hpbXMgPSB7XG4gICAgICBNYXA6IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGVtcHR5ID0ge307XG5cbiAgICAgICAgdmFyIE1hcEVudHJ5ID0gZnVuY3Rpb24gTWFwRW50cnkoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgTWFwRW50cnkucHJvdG90eXBlLmlzUmVtb3ZlZCA9IGZ1bmN0aW9uIGlzUmVtb3ZlZCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5rZXkgPT09IGVtcHR5O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBpc01hcCA9IGZ1bmN0aW9uIGlzTWFwKG1hcCkge1xuICAgICAgICAgIHJldHVybiAhIW1hcC5fZXM2bWFwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXF1aXJlTWFwU2xvdCA9IGZ1bmN0aW9uIHJlcXVpcmVNYXBTbG90KG1hcCwgbWV0aG9kKSB7XG4gICAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QobWFwKSB8fCAhaXNNYXAobWFwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWV0aG9kIE1hcC5wcm90b3R5cGUuJyArIG1ldGhvZCArICcgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlciAnICsgRVMuVG9TdHJpbmcobWFwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBNYXBJdGVyYXRvciA9IGZ1bmN0aW9uIE1hcEl0ZXJhdG9yKG1hcCwga2luZCkge1xuICAgICAgICAgIHJlcXVpcmVNYXBTbG90KG1hcCwgJ1tbTWFwSXRlcmF0b3JdXScpO1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdoZWFkJywgbWFwLl9oZWFkKTtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaScsIHRoaXMuaGVhZCk7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2tpbmQnLCBraW5kKTtcbiAgICAgICAgfTtcblxuICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgaXNNYXBJdGVyYXRvcjogdHJ1ZSxcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTWFwSXRlcmF0b3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGEgTWFwSXRlcmF0b3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5pO1xuICAgICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgICAgICB2YXIgaGVhZCA9IHRoaXMuaGVhZDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpLmlzUmVtb3ZlZCgpICYmIGkgIT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgLy8gYmFjayB1cCBvZmYgb2YgcmVtb3ZlZCBlbnRyaWVzXG4gICAgICAgICAgICAgIGkgPSBpLnByZXY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZHZhbmNlIHRvIG5leHQgdW5yZXR1cm5lZCBlbGVtZW50LlxuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHdoaWxlIChpLm5leHQgIT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgaSA9IGkubmV4dDtcbiAgICAgICAgICAgICAgaWYgKCFpLmlzUmVtb3ZlZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBpLmtleTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtpbmQgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGkudmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtpLmtleSwgaS52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9uY2UgdGhlIGl0ZXJhdG9yIGlzIGRvbmUsIGl0IGlzIGRvbmUgZm9yZXZlci5cbiAgICAgICAgICAgIHRoaXMuaSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclJlc3VsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYWRkSXRlcmF0b3IoTWFwSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAgICAgICB2YXIgTWFwJHByb3RvdHlwZTtcbiAgICAgICAgdmFyIE1hcFNoaW0gPSBmdW5jdGlvbiBNYXAoKSB7XG4gICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hcCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnN0cnVjdG9yIE1hcCByZXF1aXJlcyBcIm5ld1wiJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzICYmIHRoaXMuX2VzNm1hcCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIGNvbnN0cnVjdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbWFwID0gZW11bGF0ZUVTNmNvbnN0cnVjdCh0aGlzLCBNYXAsIE1hcCRwcm90b3R5cGUsIHtcbiAgICAgICAgICAgIF9lczZtYXA6IHRydWUsXG4gICAgICAgICAgICBfaGVhZDogbnVsbCxcbiAgICAgICAgICAgIF9tYXA6IE9yaWdNYXAgPyBuZXcgT3JpZ01hcCgpIDogbnVsbCxcbiAgICAgICAgICAgIF9zaXplOiAwLFxuICAgICAgICAgICAgX3N0b3JhZ2U6IGVtcHR5T2JqZWN0KClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBoZWFkID0gbmV3IE1hcEVudHJ5KG51bGwsIG51bGwpO1xuICAgICAgICAgIC8vIGNpcmN1bGFyIGRvdWJseS1saW5rZWQgbGlzdC5cbiAgICAgICAgICAvKiBlc2xpbnQgbm8tbXVsdGktYXNzaWduOiAxICovXG4gICAgICAgICAgaGVhZC5uZXh0ID0gaGVhZC5wcmV2ID0gaGVhZDtcbiAgICAgICAgICBtYXAuX2hlYWQgPSBoZWFkO1xuXG4gICAgICAgICAgLy8gT3B0aW9uYWxseSBpbml0aWFsaXplIG1hcCBmcm9tIGl0ZXJhYmxlXG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRJdGVyYWJsZVRvTWFwKE1hcCwgbWFwLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9O1xuICAgICAgICBNYXAkcHJvdG90eXBlID0gTWFwU2hpbS5wcm90b3R5cGU7XG5cbiAgICAgICAgVmFsdWUuZ2V0dGVyKE1hcCRwcm90b3R5cGUsICdzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbWV0aG9kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgTWFwJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKE1hcCRwcm90b3R5cGUsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICdnZXQnKTtcbiAgICAgICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgICAgIHZhciBma2V5ID0gZmFzdGtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgaWYgKGZrZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gZmFzdCBPKDEpIHBhdGhcbiAgICAgICAgICAgICAgZW50cnkgPSB0aGlzLl9zdG9yYWdlW2ZrZXldO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICAgICAgICAgIC8vIGZhc3Qgb2JqZWN0IGtleSBwYXRoXG4gICAgICAgICAgICAgIGVudHJ5ID0gb3JpZ01hcEdldC5jYWxsKHRoaXMuX21hcCwga2V5KTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgICAgICAgdmFyIGkgPSBoZWFkO1xuICAgICAgICAgICAgd2hpbGUgKChpID0gaS5uZXh0KSAhPT0gaGVhZCkge1xuICAgICAgICAgICAgICBpZiAoRVMuU2FtZVZhbHVlWmVybyhpLmtleSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICAgICAgcmVxdWlyZU1hcFNsb3QodGhpcywgJ2hhcycpO1xuICAgICAgICAgICAgdmFyIGZrZXkgPSBmYXN0a2V5KGtleSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZmtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IE8oMSkgcGF0aFxuICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0b3JhZ2VbZmtleV0gIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IG9iamVjdCBrZXkgcGF0aFxuICAgICAgICAgICAgICByZXR1cm4gb3JpZ01hcEhhcy5jYWxsKHRoaXMuX21hcCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgICAgICAgIHZhciBpID0gaGVhZDtcbiAgICAgICAgICAgIHdoaWxlICgoaSA9IGkubmV4dCkgIT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgaWYgKEVTLlNhbWVWYWx1ZVplcm8oaS5rZXksIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXF1aXJlTWFwU2xvdCh0aGlzLCAnc2V0Jyk7XG4gICAgICAgICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICAgICAgICB2YXIgaSA9IGhlYWQ7XG4gICAgICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgICAgICB2YXIgZmtleSA9IGZhc3RrZXkoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChma2V5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIGZhc3QgTygxKSBwYXRoXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RvcmFnZVtma2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9yYWdlW2ZrZXldLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZW50cnkgPSB0aGlzLl9zdG9yYWdlW2ZrZXldID0gbmV3IE1hcEVudHJ5KGtleSwgdmFsdWUpOyAvKiBlc2xpbnQgbm8tbXVsdGktYXNzaWduOiAxICovXG4gICAgICAgICAgICAgIGkgPSBoZWFkLnByZXY7XG4gICAgICAgICAgICAgIC8vIGZhbGwgdGhyb3VnaFxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IG9iamVjdCBrZXkgcGF0aFxuICAgICAgICAgICAgICBpZiAob3JpZ01hcEhhcy5jYWxsKHRoaXMuX21hcCwga2V5KSkge1xuICAgICAgICAgICAgICAgIG9yaWdNYXBHZXQuY2FsbCh0aGlzLl9tYXAsIGtleSkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnRyeSA9IG5ldyBNYXBFbnRyeShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBvcmlnTWFwU2V0LmNhbGwodGhpcy5fbWFwLCBrZXksIGVudHJ5KTtcbiAgICAgICAgICAgICAgICBpID0gaGVhZC5wcmV2O1xuICAgICAgICAgICAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoKGkgPSBpLm5leHQpICE9PSBoZWFkKSB7XG4gICAgICAgICAgICAgIGlmIChFUy5TYW1lVmFsdWVaZXJvKGkua2V5LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeSA9IGVudHJ5IHx8IG5ldyBNYXBFbnRyeShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChFUy5TYW1lVmFsdWUoLTAsIGtleSkpIHtcbiAgICAgICAgICAgICAgZW50cnkua2V5ID0gKzA7IC8vIGNvZXJjZSAtMCB0byArMCBpbiBlbnRyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkubmV4dCA9IHRoaXMuX2hlYWQ7XG4gICAgICAgICAgICBlbnRyeS5wcmV2ID0gdGhpcy5faGVhZC5wcmV2O1xuICAgICAgICAgICAgZW50cnkucHJldi5uZXh0ID0gZW50cnk7XG4gICAgICAgICAgICBlbnRyeS5uZXh0LnByZXYgPSBlbnRyeTtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmVxdWlyZU1hcFNsb3QodGhpcywgJ2RlbGV0ZScpO1xuICAgICAgICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgICAgICAgdmFyIGkgPSBoZWFkO1xuICAgICAgICAgICAgdmFyIGZrZXkgPSBmYXN0a2V5KGtleSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZmtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IE8oMSkgcGF0aFxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0b3JhZ2VbZmtleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGkgPSB0aGlzLl9zdG9yYWdlW2ZrZXldLnByZXY7XG4gICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zdG9yYWdlW2ZrZXldO1xuICAgICAgICAgICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWFwKSB7XG4gICAgICAgICAgICAgIC8vIGZhc3Qgb2JqZWN0IGtleSBwYXRoXG4gICAgICAgICAgICAgIGlmICghb3JpZ01hcEhhcy5jYWxsKHRoaXMuX21hcCwga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpID0gb3JpZ01hcEdldC5jYWxsKHRoaXMuX21hcCwga2V5KS5wcmV2O1xuICAgICAgICAgICAgICBvcmlnTWFwRGVsZXRlLmNhbGwodGhpcy5fbWFwLCBrZXkpO1xuICAgICAgICAgICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICgoaSA9IGkubmV4dCkgIT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgaWYgKEVTLlNhbWVWYWx1ZVplcm8oaS5rZXksIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpLmtleSA9IGVtcHR5O1xuICAgICAgICAgICAgICAgIGkudmFsdWUgPSBlbXB0eTtcbiAgICAgICAgICAgICAgICBpLnByZXYubmV4dCA9IGkubmV4dDtcbiAgICAgICAgICAgICAgICBpLm5leHQucHJldiA9IGkucHJldjtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplIC09IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgLyogZXNsaW50IG5vLW11bHRpLWFzc2lnbjogMSAqL1xuICAgICAgICAgICAgcmVxdWlyZU1hcFNsb3QodGhpcywgJ2NsZWFyJyk7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBPcmlnTWFwID8gbmV3IE9yaWdNYXAoKSA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UgPSBlbXB0eU9iamVjdCgpO1xuICAgICAgICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgICAgICAgdmFyIGkgPSBoZWFkO1xuICAgICAgICAgICAgdmFyIHAgPSBpLm5leHQ7XG4gICAgICAgICAgICB3aGlsZSAoKGkgPSBwKSAhPT0gaGVhZCkge1xuICAgICAgICAgICAgICBpLmtleSA9IGVtcHR5O1xuICAgICAgICAgICAgICBpLnZhbHVlID0gZW1wdHk7XG4gICAgICAgICAgICAgIHAgPSBpLm5leHQ7XG4gICAgICAgICAgICAgIGkubmV4dCA9IGkucHJldiA9IGhlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkLm5leHQgPSBoZWFkLnByZXYgPSBoZWFkO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICAgICAgcmVxdWlyZU1hcFNsb3QodGhpcywgJ2tleXMnKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcywgJ2tleScpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICd2YWx1ZXMnKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcywgJ3ZhbHVlJyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICAgICAgICByZXF1aXJlTWFwU2xvdCh0aGlzLCAnZW50cmllcycpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLCAna2V5K3ZhbHVlJyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICdmb3JFYWNoJyk7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBpdCA9IHRoaXMuZW50cmllcygpO1xuICAgICAgICAgICAgZm9yICh2YXIgZW50cnkgPSBpdC5uZXh0KCk7ICFlbnRyeS5kb25lOyBlbnRyeSA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIF9jYWxsKGNhbGxiYWNrLCBjb250ZXh0LCBlbnRyeS52YWx1ZVsxXSwgZW50cnkudmFsdWVbMF0sIHRoaXMpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVudHJ5LnZhbHVlWzFdLCBlbnRyeS52YWx1ZVswXSwgdGhpcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRJdGVyYXRvcihNYXAkcHJvdG90eXBlLCBNYXAkcHJvdG90eXBlLmVudHJpZXMpO1xuXG4gICAgICAgIHJldHVybiBNYXBTaGltO1xuICAgICAgfSgpKSxcblxuICAgICAgU2V0OiAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNTZXQgPSBmdW5jdGlvbiBpc1NldChzZXQpIHtcbiAgICAgICAgICByZXR1cm4gc2V0Ll9lczZzZXQgJiYgdHlwZW9mIHNldC5fc3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXF1aXJlU2V0U2xvdCA9IGZ1bmN0aW9uIHJlcXVpcmVTZXRTbG90KHNldCwgbWV0aG9kKSB7XG4gICAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3Qoc2V0KSB8fCAhaXNTZXQoc2V0KSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9lczYtc2hpbS9pc3N1ZXMvMTc2XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZXQucHJvdG90eXBlLicgKyBtZXRob2QgKyAnIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXIgJyArIEVTLlRvU3RyaW5nKHNldCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDcmVhdGluZyBhIE1hcCBpcyBleHBlbnNpdmUuICBUbyBzcGVlZCB1cCB0aGUgY29tbW9uIGNhc2Ugb2ZcbiAgICAgICAgLy8gU2V0cyBjb250YWluaW5nIG9ubHkgc3RyaW5nIG9yIG51bWVyaWMga2V5cywgd2UgdXNlIGFuIG9iamVjdFxuICAgICAgICAvLyBhcyBiYWNraW5nIHN0b3JhZ2UgYW5kIGxhemlseSBjcmVhdGUgYSBmdWxsIE1hcCBvbmx5IHdoZW5cbiAgICAgICAgLy8gcmVxdWlyZWQuXG4gICAgICAgIHZhciBTZXQkcHJvdG90eXBlO1xuICAgICAgICB2YXIgU2V0U2hpbSA9IGZ1bmN0aW9uIFNldCgpIHtcbiAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29uc3RydWN0b3IgU2V0IHJlcXVpcmVzIFwibmV3XCInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMgJiYgdGhpcy5fZXM2c2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgY29uc3RydWN0aW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzZXQgPSBlbXVsYXRlRVM2Y29uc3RydWN0KHRoaXMsIFNldCwgU2V0JHByb3RvdHlwZSwge1xuICAgICAgICAgICAgX2VzNnNldDogdHJ1ZSxcbiAgICAgICAgICAgICdbW1NldERhdGFdXSc6IG51bGwsXG4gICAgICAgICAgICBfc3RvcmFnZTogZW1wdHlPYmplY3QoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghc2V0Ll9lczZzZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCBzZXQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBPcHRpb25hbGx5IGluaXRpYWxpemUgU2V0IGZyb20gaXRlcmFibGVcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkZEl0ZXJhYmxlVG9TZXQoU2V0LCBzZXQsIGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZXQ7XG4gICAgICAgIH07XG4gICAgICAgIFNldCRwcm90b3R5cGUgPSBTZXRTaGltLnByb3RvdHlwZTtcblxuICAgICAgICB2YXIgZGVjb2RlS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHZhciBrID0ga2V5O1xuICAgICAgICAgIGlmIChrID09PSAnXm51bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09ICdedW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGZpcnN0ID0gay5jaGFyQXQoMCk7XG4gICAgICAgICAgaWYgKGZpcnN0ID09PSAnJCcpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3RyU2xpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gJ24nKSB7XG4gICAgICAgICAgICByZXR1cm4gK19zdHJTbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSAnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBrID09PSAnYnRydWUnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAraztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gU3dpdGNoIGZyb20gdGhlIG9iamVjdCBiYWNraW5nIHN0b3JhZ2UgdG8gYSBmdWxsIE1hcC5cbiAgICAgICAgdmFyIGVuc3VyZU1hcCA9IGZ1bmN0aW9uIGVuc3VyZU1hcChzZXQpIHtcbiAgICAgICAgICBpZiAoIXNldFsnW1tTZXREYXRhXV0nXSkge1xuICAgICAgICAgICAgdmFyIG0gPSBuZXcgY29sbGVjdGlvblNoaW1zLk1hcCgpO1xuICAgICAgICAgICAgc2V0WydbW1NldERhdGFdXSddID0gbTtcbiAgICAgICAgICAgIF9mb3JFYWNoKGtleXMoc2V0Ll9zdG9yYWdlKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICB2YXIgayA9IGRlY29kZUtleShrZXkpO1xuICAgICAgICAgICAgICBtLnNldChrLCBrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0WydbW1NldERhdGFdXSddID0gbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0Ll9zdG9yYWdlID0gbnVsbDsgLy8gZnJlZSBvbGQgYmFja2luZyBzdG9yYWdlXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsdWUuZ2V0dGVyKFNldFNoaW0ucHJvdG90eXBlLCAnc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAnc2l6ZScpO1xuICAgICAgICAgIGlmICh0aGlzLl9zdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5cyh0aGlzLl9zdG9yYWdlKS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVuc3VyZU1hcCh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gdGhpc1snW1tTZXREYXRhXV0nXS5zaXplO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKFNldFNoaW0ucHJvdG90eXBlLCB7XG4gICAgICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAnaGFzJyk7XG4gICAgICAgICAgICB2YXIgZmtleTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdG9yYWdlICYmIChma2V5ID0gZmFzdGtleShrZXkpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gISF0aGlzLl9zdG9yYWdlW2ZrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5zdXJlTWFwKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbJ1tbU2V0RGF0YV1dJ10uaGFzKGtleSk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGFkZDogZnVuY3Rpb24gYWRkKGtleSkge1xuICAgICAgICAgICAgcmVxdWlyZVNldFNsb3QodGhpcywgJ2FkZCcpO1xuICAgICAgICAgICAgdmFyIGZrZXk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RvcmFnZSAmJiAoZmtleSA9IGZhc3RrZXkoa2V5KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc3RvcmFnZVtma2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5zdXJlTWFwKHRoaXMpO1xuICAgICAgICAgICAgdGhpc1snW1tTZXREYXRhXV0nXS5zZXQoa2V5LCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAnZGVsZXRlJyk7XG4gICAgICAgICAgICB2YXIgZmtleTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdG9yYWdlICYmIChma2V5ID0gZmFzdGtleShrZXkpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB2YXIgaGFzRktleSA9IF9oYXNPd25Qcm9wZXJ0eSh0aGlzLl9zdG9yYWdlLCBma2V5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIChkZWxldGUgdGhpcy5fc3RvcmFnZVtma2V5XSkgJiYgaGFzRktleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuc3VyZU1hcCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzWydbW1NldERhdGFdXSddWydkZWxldGUnXShrZXkpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAnY2xlYXInKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdG9yYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UgPSBlbXB0eU9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNbJ1tbU2V0RGF0YV1dJ10pIHtcbiAgICAgICAgICAgICAgdGhpc1snW1tTZXREYXRhXV0nXS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgICAgICAgIHJlcXVpcmVTZXRTbG90KHRoaXMsICd2YWx1ZXMnKTtcbiAgICAgICAgICAgIGVuc3VyZU1hcCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2V0SXRlcmF0b3IodGhpc1snW1tTZXREYXRhXV0nXS52YWx1ZXMoKSk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAnZW50cmllcycpO1xuICAgICAgICAgICAgZW5zdXJlTWFwKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXRJdGVyYXRvcih0aGlzWydbW1NldERhdGFdXSddLmVudHJpZXMoKSk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJlcXVpcmVTZXRTbG90KHRoaXMsICdmb3JFYWNoJyk7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBlbnRpcmVTZXQgPSB0aGlzO1xuICAgICAgICAgICAgZW5zdXJlTWFwKGVudGlyZVNldCk7XG4gICAgICAgICAgICB0aGlzWydbW1NldERhdGFdXSddLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBfY2FsbChjYWxsYmFjaywgY29udGV4dCwga2V5LCBrZXksIGVudGlyZVNldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soa2V5LCBrZXksIGVudGlyZVNldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KFNldFNoaW0ucHJvdG90eXBlLCAna2V5cycsIFNldFNoaW0ucHJvdG90eXBlLnZhbHVlcywgdHJ1ZSk7XG4gICAgICAgIGFkZEl0ZXJhdG9yKFNldFNoaW0ucHJvdG90eXBlLCBTZXRTaGltLnByb3RvdHlwZS52YWx1ZXMpO1xuXG4gICAgICAgIHZhciBTZXRJdGVyYXRvciA9IGZ1bmN0aW9uIFNldEl0ZXJhdG9yKGl0KSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2l0JywgaXQpO1xuICAgICAgICB9O1xuICAgICAgICBTZXRJdGVyYXRvci5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgaXNTZXRJdGVyYXRvcjogdHJ1ZSxcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2V0SXRlcmF0b3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGEgU2V0SXRlcmF0b3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0Lm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEl0ZXJhdG9yKFNldEl0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIFNldFNoaW07XG4gICAgICB9KCkpXG4gICAgfTtcblxuICAgIHZhciBpc0dvb2dsZVRyYW5zbGF0ZSA9IGdsb2JhbHMuU2V0ICYmICFTZXQucHJvdG90eXBlWydkZWxldGUnXSAmJiBTZXQucHJvdG90eXBlLnJlbW92ZSAmJiBTZXQucHJvdG90eXBlLml0ZW1zICYmIFNldC5wcm90b3R5cGUubWFwICYmIEFycmF5LmlzQXJyYXkobmV3IFNldCgpLmtleXMpO1xuICAgIGlmIChpc0dvb2dsZVRyYW5zbGF0ZSkge1xuICAgICAgLy8gc3BlY2lhbC1jYXNlIGZvcmNlIHJlbW92YWwgb2Ygd2lsZGx5IGludmFsaWQgU2V0IGltcGxlbWVudGF0aW9uIGluIEdvb2dsZSBUcmFuc2xhdGUgaWZyYW1lc1xuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW0vaXNzdWVzLzQzOCAvIGh0dHBzOi8vdHdpdHRlci5jb20vbGpoYXJiL3N0YXR1cy84NDkzMzU1NzMxMTQzNjM5MDRcbiAgICAgIGdsb2JhbHMuU2V0ID0gY29sbGVjdGlvblNoaW1zLlNldDtcbiAgICB9XG4gICAgaWYgKGdsb2JhbHMuTWFwIHx8IGdsb2JhbHMuU2V0KSB7XG4gICAgICAvLyBTYWZhcmkgOCwgZm9yIGV4YW1wbGUsIGRvZXNuJ3QgYWNjZXB0IGFuIGl0ZXJhYmxlLlxuICAgICAgdmFyIG1hcEFjY2VwdHNBcmd1bWVudHMgPSB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwKFtbMSwgMl1dKS5nZXQoMSkgPT09IDI7IH0pO1xuICAgICAgaWYgKCFtYXBBY2NlcHRzQXJndW1lbnRzKSB7XG4gICAgICAgIGdsb2JhbHMuTWFwID0gZnVuY3Rpb24gTWFwKCkge1xuICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25zdHJ1Y3RvciBNYXAgcmVxdWlyZXMgXCJuZXdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbSA9IG5ldyBPcmlnTWFwKCk7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRJdGVyYWJsZVRvTWFwKE1hcCwgbSwgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG0uY29uc3RydWN0b3I7XG4gICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG0sIGdsb2JhbHMuTWFwLnByb3RvdHlwZSk7XG4gICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG4gICAgICAgIGdsb2JhbHMuTWFwLnByb3RvdHlwZSA9IGNyZWF0ZShPcmlnTWFwLnByb3RvdHlwZSk7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbHMuTWFwLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgZ2xvYmFscy5NYXAsIHRydWUpO1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKGdsb2JhbHMuTWFwLCBPcmlnTWFwKTtcbiAgICAgIH1cbiAgICAgIHZhciB0ZXN0TWFwID0gbmV3IE1hcCgpO1xuICAgICAgdmFyIG1hcFVzZXNTYW1lVmFsdWVaZXJvID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2hyb21lIDM4LTQyLCBub2RlIDAuMTEvMC4xMiwgaW9qcyAxLzIgYWxzbyBoYXZlIGEgYnVnIHdoZW4gdGhlIE1hcCBoYXMgYSBzaXplID4gNFxuICAgICAgICB2YXIgbSA9IG5ldyBNYXAoW1sxLCAwXSwgWzIsIDBdLCBbMywgMF0sIFs0LCAwXV0pO1xuICAgICAgICBtLnNldCgtMCwgbSk7XG4gICAgICAgIHJldHVybiBtLmdldCgwKSA9PT0gbSAmJiBtLmdldCgtMCkgPT09IG0gJiYgbS5oYXMoMCkgJiYgbS5oYXMoLTApO1xuICAgICAgfSgpKTtcbiAgICAgIHZhciBtYXBTdXBwb3J0c0NoYWluaW5nID0gdGVzdE1hcC5zZXQoMSwgMikgPT09IHRlc3RNYXA7XG4gICAgICBpZiAoIW1hcFVzZXNTYW1lVmFsdWVaZXJvIHx8ICFtYXBTdXBwb3J0c0NoYWluaW5nKSB7XG4gICAgICAgIG92ZXJyaWRlTmF0aXZlKE1hcC5wcm90b3R5cGUsICdzZXQnLCBmdW5jdGlvbiBzZXQoaywgdikge1xuICAgICAgICAgIF9jYWxsKG9yaWdNYXBTZXQsIHRoaXMsIGsgPT09IDAgPyAwIDogaywgdik7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFtYXBVc2VzU2FtZVZhbHVlWmVybykge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKE1hcC5wcm90b3R5cGUsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NhbGwob3JpZ01hcEdldCwgdGhpcywgayA9PT0gMCA/IDAgOiBrKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhczogZnVuY3Rpb24gaGFzKGspIHtcbiAgICAgICAgICAgIHJldHVybiBfY2FsbChvcmlnTWFwSGFzLCB0aGlzLCBrID09PSAwID8gMCA6IGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIFZhbHVlLnByZXNlcnZlVG9TdHJpbmcoTWFwLnByb3RvdHlwZS5nZXQsIG9yaWdNYXBHZXQpO1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKE1hcC5wcm90b3R5cGUuaGFzLCBvcmlnTWFwSGFzKTtcbiAgICAgIH1cbiAgICAgIHZhciB0ZXN0U2V0ID0gbmV3IFNldCgpO1xuICAgICAgdmFyIHNldFVzZXNTYW1lVmFsdWVaZXJvID0gU2V0LnByb3RvdHlwZVsnZGVsZXRlJ10gJiYgU2V0LnByb3RvdHlwZS5hZGQgJiYgU2V0LnByb3RvdHlwZS5oYXMgJiYgKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHNbJ2RlbGV0ZSddKDApO1xuICAgICAgICBzLmFkZCgtMCk7XG4gICAgICAgIHJldHVybiAhcy5oYXMoMCk7XG4gICAgICB9KHRlc3RTZXQpKTtcbiAgICAgIHZhciBzZXRTdXBwb3J0c0NoYWluaW5nID0gdGVzdFNldC5hZGQoMSkgPT09IHRlc3RTZXQ7XG4gICAgICBpZiAoIXNldFVzZXNTYW1lVmFsdWVaZXJvIHx8ICFzZXRTdXBwb3J0c0NoYWluaW5nKSB7XG4gICAgICAgIHZhciBvcmlnU2V0QWRkID0gU2V0LnByb3RvdHlwZS5hZGQ7XG4gICAgICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKHYpIHtcbiAgICAgICAgICBfY2FsbChvcmlnU2V0QWRkLCB0aGlzLCB2ID09PSAwID8gMCA6IHYpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKFNldC5wcm90b3R5cGUuYWRkLCBvcmlnU2V0QWRkKTtcbiAgICAgIH1cbiAgICAgIGlmICghc2V0VXNlc1NhbWVWYWx1ZVplcm8pIHtcbiAgICAgICAgdmFyIG9yaWdTZXRIYXMgPSBTZXQucHJvdG90eXBlLmhhcztcbiAgICAgICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXModikge1xuICAgICAgICAgIHJldHVybiBfY2FsbChvcmlnU2V0SGFzLCB0aGlzLCB2ID09PSAwID8gMCA6IHYpO1xuICAgICAgICB9O1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKFNldC5wcm90b3R5cGUuaGFzLCBvcmlnU2V0SGFzKTtcbiAgICAgICAgdmFyIG9yaWdTZXREZWwgPSBTZXQucHJvdG90eXBlWydkZWxldGUnXTtcbiAgICAgICAgU2V0LnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbiBTZXREZWxldGUodikge1xuICAgICAgICAgIHJldHVybiBfY2FsbChvcmlnU2V0RGVsLCB0aGlzLCB2ID09PSAwID8gMCA6IHYpO1xuICAgICAgICB9O1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKFNldC5wcm90b3R5cGVbJ2RlbGV0ZSddLCBvcmlnU2V0RGVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBtYXBTdXBwb3J0c1N1YmNsYXNzaW5nID0gc3VwcG9ydHNTdWJjbGFzc2luZyhnbG9iYWxzLk1hcCwgZnVuY3Rpb24gKE0pIHtcbiAgICAgICAgdmFyIG0gPSBuZXcgTShbXSk7XG4gICAgICAgIC8vIEZpcmVmb3ggMzIgaXMgb2sgd2l0aCB0aGUgaW5zdGFudGlhdGluZyB0aGUgc3ViY2xhc3MgYnV0IHdpbGxcbiAgICAgICAgLy8gdGhyb3cgd2hlbiB0aGUgbWFwIGlzIHVzZWQuXG4gICAgICAgIG0uc2V0KDQyLCA0Mik7XG4gICAgICAgIHJldHVybiBtIGluc3RhbmNlb2YgTTtcbiAgICAgIH0pO1xuICAgICAgLy8gd2l0aG91dCBPYmplY3Quc2V0UHJvdG90eXBlT2YsIHN1YmNsYXNzaW5nIGlzIG5vdCBwb3NzaWJsZVxuICAgICAgdmFyIG1hcEZhaWxzVG9TdXBwb3J0U3ViY2xhc3NpbmcgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgJiYgIW1hcFN1cHBvcnRzU3ViY2xhc3Npbmc7XG4gICAgICB2YXIgbWFwUmVxdWlyZXNOZXcgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiAhKGdsb2JhbHMuTWFwKCkgaW5zdGFuY2VvZiBnbG9iYWxzLk1hcCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfSgpKTtcbiAgICAgIGlmIChnbG9iYWxzLk1hcC5sZW5ndGggIT09IDAgfHwgbWFwRmFpbHNUb1N1cHBvcnRTdWJjbGFzc2luZyB8fCAhbWFwUmVxdWlyZXNOZXcpIHtcbiAgICAgICAgZ2xvYmFscy5NYXAgPSBmdW5jdGlvbiBNYXAoKSB7XG4gICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hcCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnN0cnVjdG9yIE1hcCByZXF1aXJlcyBcIm5ld1wiJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBtID0gbmV3IE9yaWdNYXAoKTtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkZEl0ZXJhYmxlVG9NYXAoTWFwLCBtLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgbS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobSwgTWFwLnByb3RvdHlwZSk7XG4gICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG4gICAgICAgIGdsb2JhbHMuTWFwLnByb3RvdHlwZSA9IE9yaWdNYXAucHJvdG90eXBlO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxzLk1hcC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIGdsb2JhbHMuTWFwLCB0cnVlKTtcbiAgICAgICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhnbG9iYWxzLk1hcCwgT3JpZ01hcCk7XG4gICAgICB9XG4gICAgICB2YXIgc2V0U3VwcG9ydHNTdWJjbGFzc2luZyA9IHN1cHBvcnRzU3ViY2xhc3NpbmcoZ2xvYmFscy5TZXQsIGZ1bmN0aW9uIChTKSB7XG4gICAgICAgIHZhciBzID0gbmV3IFMoW10pO1xuICAgICAgICBzLmFkZCg0MiwgNDIpO1xuICAgICAgICByZXR1cm4gcyBpbnN0YW5jZW9mIFM7XG4gICAgICB9KTtcbiAgICAgIC8vIHdpdGhvdXQgT2JqZWN0LnNldFByb3RvdHlwZU9mLCBzdWJjbGFzc2luZyBpcyBub3QgcG9zc2libGVcbiAgICAgIHZhciBzZXRGYWlsc1RvU3VwcG9ydFN1YmNsYXNzaW5nID0gT2JqZWN0LnNldFByb3RvdHlwZU9mICYmICFzZXRTdXBwb3J0c1N1YmNsYXNzaW5nO1xuICAgICAgdmFyIHNldFJlcXVpcmVzTmV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gIShnbG9iYWxzLlNldCgpIGluc3RhbmNlb2YgZ2xvYmFscy5TZXQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH0oKSk7XG4gICAgICBpZiAoZ2xvYmFscy5TZXQubGVuZ3RoICE9PSAwIHx8IHNldEZhaWxzVG9TdXBwb3J0U3ViY2xhc3NpbmcgfHwgIXNldFJlcXVpcmVzTmV3KSB7XG4gICAgICAgIHZhciBPcmlnU2V0ID0gZ2xvYmFscy5TZXQ7XG4gICAgICAgIGdsb2JhbHMuU2V0ID0gZnVuY3Rpb24gU2V0KCkge1xuICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25zdHJ1Y3RvciBTZXQgcmVxdWlyZXMgXCJuZXdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcyA9IG5ldyBPcmlnU2V0KCk7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRJdGVyYWJsZVRvU2V0KFNldCwgcywgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHMuY29uc3RydWN0b3I7XG4gICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHMsIFNldC5wcm90b3R5cGUpO1xuICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9O1xuICAgICAgICBnbG9iYWxzLlNldC5wcm90b3R5cGUgPSBPcmlnU2V0LnByb3RvdHlwZTtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFscy5TZXQucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBnbG9iYWxzLlNldCwgdHJ1ZSk7XG4gICAgICAgIFZhbHVlLnByZXNlcnZlVG9TdHJpbmcoZ2xvYmFscy5TZXQsIE9yaWdTZXQpO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IG5ldyBnbG9iYWxzLk1hcCgpO1xuICAgICAgdmFyIG1hcEl0ZXJhdGlvblRocm93c1N0b3BJdGVyYXRvciA9ICF2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXdNYXAua2V5cygpLm5leHQoKS5kb25lO1xuICAgICAgfSk7XG4gICAgICAvKlxuICAgICAgICAtIEluIEZpcmVmb3ggPCAyMywgTWFwI3NpemUgaXMgYSBmdW5jdGlvbi5cbiAgICAgICAgLSBJbiBhbGwgY3VycmVudCBGaXJlZm94LCBTZXQjZW50cmllcy9rZXlzL3ZhbHVlcyAmIE1hcCNjbGVhciBkbyBub3QgZXhpc3RcbiAgICAgICAgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04Njk5OTZcbiAgICAgICAgLSBJbiBGaXJlZm94IDI0LCBNYXAgYW5kIFNldCBkbyBub3QgaW1wbGVtZW50IGZvckVhY2hcbiAgICAgICAgLSBJbiBGaXJlZm94IDI1IGF0IGxlYXN0LCBNYXAgYW5kIFNldCBhcmUgY2FsbGFibGUgd2l0aG91dCBcIm5ld1wiXG4gICAgICAqL1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgZ2xvYmFscy5NYXAucHJvdG90eXBlLmNsZWFyICE9PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IG5ldyBnbG9iYWxzLlNldCgpLnNpemUgIT09IDBcbiAgICAgICAgfHwgbmV3TWFwLnNpemUgIT09IDBcbiAgICAgICAgfHwgdHlwZW9mIGdsb2JhbHMuTWFwLnByb3RvdHlwZS5rZXlzICE9PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IHR5cGVvZiBnbG9iYWxzLlNldC5wcm90b3R5cGUua2V5cyAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCB0eXBlb2YgZ2xvYmFscy5NYXAucHJvdG90eXBlLmZvckVhY2ggIT09ICdmdW5jdGlvbidcbiAgICAgICAgfHwgdHlwZW9mIGdsb2JhbHMuU2V0LnByb3RvdHlwZS5mb3JFYWNoICE9PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IGlzQ2FsbGFibGVXaXRob3V0TmV3KGdsb2JhbHMuTWFwKVxuICAgICAgICB8fCBpc0NhbGxhYmxlV2l0aG91dE5ldyhnbG9iYWxzLlNldClcbiAgICAgICAgfHwgdHlwZW9mIG5ld01hcC5rZXlzKCkubmV4dCAhPT0gJ2Z1bmN0aW9uJyAvLyBTYWZhcmkgOFxuICAgICAgICB8fCBtYXBJdGVyYXRpb25UaHJvd3NTdG9wSXRlcmF0b3IgLy8gRmlyZWZveCAyNVxuICAgICAgICB8fCAhbWFwU3VwcG9ydHNTdWJjbGFzc2luZ1xuICAgICAgKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnRpZXMoZ2xvYmFscywge1xuICAgICAgICAgIE1hcDogY29sbGVjdGlvblNoaW1zLk1hcCxcbiAgICAgICAgICBTZXQ6IGNvbGxlY3Rpb25TaGltcy5TZXRcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnbG9iYWxzLlNldC5wcm90b3R5cGUua2V5cyAhPT0gZ2xvYmFscy5TZXQucHJvdG90eXBlLnZhbHVlcykge1xuICAgICAgICAvLyBGaXhlZCBpbiBXZWJLaXQgd2l0aCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQ0MTkwXG4gICAgICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbHMuU2V0LnByb3RvdHlwZSwgJ2tleXMnLCBnbG9iYWxzLlNldC5wcm90b3R5cGUudmFsdWVzLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2hpbSBpbmNvbXBsZXRlIGl0ZXJhdG9yIGltcGxlbWVudGF0aW9ucy5cbiAgICAgIGFkZEl0ZXJhdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZigobmV3IGdsb2JhbHMuTWFwKCkpLmtleXMoKSkpO1xuICAgICAgYWRkSXRlcmF0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKChuZXcgZ2xvYmFscy5TZXQoKSkua2V5cygpKSk7XG5cbiAgICAgIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgJiYgZ2xvYmFscy5TZXQucHJvdG90eXBlLmhhcy5uYW1lICE9PSAnaGFzJykge1xuICAgICAgICAvLyBNaWNyb3NvZnQgRWRnZSB2MC4xMS4xMDA3NC4wIGlzIG1pc3NpbmcgYSBuYW1lIG9uIFNldCNoYXNcbiAgICAgICAgdmFyIGFub255bW91c1NldEhhcyA9IGdsb2JhbHMuU2V0LnByb3RvdHlwZS5oYXM7XG4gICAgICAgIG92ZXJyaWRlTmF0aXZlKGdsb2JhbHMuU2V0LnByb3RvdHlwZSwgJ2hhcycsIGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX2NhbGwoYW5vbnltb3VzU2V0SGFzLCB0aGlzLCBrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmaW5lUHJvcGVydGllcyhnbG9iYWxzLCBjb2xsZWN0aW9uU2hpbXMpO1xuICAgIGFkZERlZmF1bHRTcGVjaWVzKGdsb2JhbHMuTWFwKTtcbiAgICBhZGREZWZhdWx0U3BlY2llcyhnbG9iYWxzLlNldCk7XG4gIH1cblxuICB2YXIgdGhyb3dVbmxlc3NUYXJnZXRJc09iamVjdCA9IGZ1bmN0aW9uIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KSB7XG4gICAgaWYgKCFFUy5UeXBlSXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNvbWUgUmVmbGVjdCBtZXRob2RzIGFyZSBiYXNpY2FsbHkgdGhlIHNhbWUgYXNcbiAgLy8gdGhvc2Ugb24gdGhlIE9iamVjdCBnbG9iYWwsIGV4Y2VwdCB0aGF0IGEgVHlwZUVycm9yIGlzIHRocm93biBpZlxuICAvLyB0YXJnZXQgaXNuJ3QgYW4gb2JqZWN0LiBBcyB3ZWxsIGFzIHJldHVybmluZyBhIGJvb2xlYW4gaW5kaWNhdGluZ1xuICAvLyB0aGUgc3VjY2VzcyBvZiB0aGUgb3BlcmF0aW9uLlxuICB2YXIgUmVmbGVjdFNoaW1zID0ge1xuICAgIC8vIEFwcGx5IG1ldGhvZCBpbiBhIGZ1bmN0aW9uYWwgZm9ybS5cbiAgICBhcHBseTogZnVuY3Rpb24gYXBwbHkoKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChFUy5DYWxsLCBudWxsLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICAvLyBOZXcgb3BlcmF0b3IgaW4gYSBmdW5jdGlvbmFsIGZvcm0uXG4gICAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoY29uc3RydWN0b3IsIGFyZ3MpIHtcbiAgICAgIGlmICghRVMuSXNDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbnN0cnVjdG9yLicpO1xuICAgICAgfVxuICAgICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogY29uc3RydWN0b3I7XG4gICAgICBpZiAoIUVTLklzQ29uc3RydWN0b3IobmV3VGFyZ2V0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduZXcudGFyZ2V0IG11c3QgYmUgYSBjb25zdHJ1Y3Rvci4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBFUy5Db25zdHJ1Y3QoY29uc3RydWN0b3IsIGFyZ3MsIG5ld1RhcmdldCwgJ2ludGVybmFsJyk7XG4gICAgfSxcblxuICAgIC8vIFdoZW4gZGVsZXRpbmcgYSBub24tZXhpc3RlbnQgb3IgY29uZmlndXJhYmxlIHByb3BlcnR5LFxuICAgIC8vIHRydWUgaXMgcmV0dXJuZWQuXG4gICAgLy8gV2hlbiBhdHRlbXB0aW5nIHRvIGRlbGV0ZSBhIG5vbi1jb25maWd1cmFibGUgcHJvcGVydHksXG4gICAgLy8gaXQgd2lsbCByZXR1cm4gZmFsc2UuXG4gICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgIGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXaWxsIHJldHVybiB0cnVlLlxuICAgICAgcmV0dXJuIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICB9LFxuXG4gICAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBrZXkpIHtcbiAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0O1xuICAgIH1cbiAgfTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKFJlZmxlY3RTaGltcywge1xuICAgICAgLy8gQmFzaWNhbGx5IHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgaW50ZXJuYWwgW1tPd25Qcm9wZXJ0eUtleXNdXS5cbiAgICAgIC8vIENvbmNhdGVuYXRpbmcgcHJvcGVydHlOYW1lcyBhbmQgcHJvcGVydHlTeW1ib2xzIHNob3VsZCBkbyB0aGUgdHJpY2suXG4gICAgICAvLyBUaGlzIHNob3VsZCBjb250aW51ZSB0byB3b3JrIHRvZ2V0aGVyIHdpdGggYSBTeW1ib2wgc2hpbVxuICAgICAgLy8gd2hpY2ggb3ZlcnJpZGVzIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIGFuZCBpbXBsZW1lbnRzXG4gICAgICAvLyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLlxuICAgICAgb3duS2V5czogZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQpIHtcbiAgICAgICAgdGhyb3dVbmxlc3NUYXJnZXRJc09iamVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKEVTLklzQ2FsbGFibGUoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykpIHtcbiAgICAgICAgICBfcHVzaEFwcGx5KGtleXMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjYWxsQW5kQ2F0Y2hFeGNlcHRpb24gPSBmdW5jdGlvbiBDb252ZXJ0RXhjZXB0aW9uVG9Cb29sZWFuKGZ1bmMpIHtcbiAgICByZXR1cm4gIXRocm93c0Vycm9yKGZ1bmMpO1xuICB9O1xuXG4gIGlmIChPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKFJlZmxlY3RTaGltcywge1xuICAgICAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUodGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGNhbGxBbmRDYXRjaEV4Y2VwdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG4gICAgdmFyIGludGVybmFsR2V0ID0gZnVuY3Rpb24gZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblxuICAgICAgaWYgKCFkZXNjKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcblxuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbEdldChwYXJlbnQsIGtleSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7XG4gICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIEVTLkNhbGwoZGVzYy5nZXQsIHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIGludGVybmFsU2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG5cbiAgICAgIGlmICghZGVzYykge1xuICAgICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbFNldChwYXJlbnQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MgPSB7XG4gICAgICAgICAgdmFsdWU6IHZvaWQgMCxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHJlY2VpdmVyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleGlzdGluZ0Rlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBrZXkpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0Rlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwga2V5LCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICBfY2FsbChkZXNjLnNldCwgcmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihSZWZsZWN0U2hpbXMsIHtcbiAgICAgIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGNhbGxBbmRDYXRjaEV4Y2VwdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICB9LFxuXG4gICAgICAvLyBTeW50YXggaW4gYSBmdW5jdGlvbmFsIGZvcm0uXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdGFyZ2V0O1xuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbEdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICAgICAgfSxcblxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB0YXJnZXQ7XG5cbiAgICAgICAgcmV0dXJuIGludGVybmFsU2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xuICAgIHZhciBvYmplY3REb3RHZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICBSZWZsZWN0U2hpbXMuZ2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcbiAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgIHJldHVybiBvYmplY3REb3RHZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuICAgIH07XG4gIH1cblxuICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mICYmIFJlZmxlY3RTaGltcy5nZXRQcm90b3R5cGVPZikge1xuICAgIHZhciB3aWxsQ3JlYXRlQ2lyY3VsYXJQcm90b3R5cGUgPSBmdW5jdGlvbiAob2JqZWN0LCBsYXN0UHJvdG8pIHtcbiAgICAgIHZhciBwcm90byA9IGxhc3RQcm90bztcbiAgICAgIHdoaWxlIChwcm90bykge1xuICAgICAgICBpZiAob2JqZWN0ID09PSBwcm90bykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RvID0gUmVmbGVjdFNoaW1zLmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihSZWZsZWN0U2hpbXMsIHtcbiAgICAgIC8vIFNldHMgdGhlIHByb3RvdHlwZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAgLy8gUmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgIHNldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihvYmplY3QsIHByb3RvKSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3Qob2JqZWN0KTtcbiAgICAgICAgaWYgKHByb3RvICE9PSBudWxsICYmICFFUy5UeXBlSXNPYmplY3QocHJvdG8pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJvdG8gbXVzdCBiZSBhbiBvYmplY3Qgb3IgbnVsbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhleSBhbHJlYWR5IGFyZSB0aGUgc2FtZSwgd2UncmUgZG9uZS5cbiAgICAgICAgaWYgKHByb3RvID09PSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbm5vdCBhbHRlciBwcm90b3R5cGUgaWYgb2JqZWN0IG5vdCBleHRlbnNpYmxlLlxuICAgICAgICBpZiAoUmVmbGVjdC5pc0V4dGVuc2libGUgJiYgIVJlZmxlY3QuaXNFeHRlbnNpYmxlKG9iamVjdCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmUgdGhhdCB3ZSBkbyBub3QgY3JlYXRlIGEgY2lyY3VsYXIgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICBpZiAod2lsbENyZWF0ZUNpcmN1bGFyUHJvdG90eXBlKG9iamVjdCwgcHJvdG8pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG9iamVjdCwgcHJvdG8pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHZhciBkZWZpbmVPck92ZXJyaWRlUmVmbGVjdFByb3BlcnR5ID0gZnVuY3Rpb24gKGtleSwgc2hpbSkge1xuICAgIGlmICghRVMuSXNDYWxsYWJsZShnbG9iYWxzLlJlZmxlY3Rba2V5XSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbHMuUmVmbGVjdCwga2V5LCBzaGltKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjY2VwdHNQcmltaXRpdmVzID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgICBnbG9iYWxzLlJlZmxlY3Rba2V5XSgxKTtcbiAgICAgICAgZ2xvYmFscy5SZWZsZWN0W2tleV0oTmFOKTtcbiAgICAgICAgZ2xvYmFscy5SZWZsZWN0W2tleV0odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBpZiAoYWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgICAgb3ZlcnJpZGVOYXRpdmUoZ2xvYmFscy5SZWZsZWN0LCBrZXksIHNoaW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgT2JqZWN0LmtleXMoUmVmbGVjdFNoaW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWZpbmVPck92ZXJyaWRlUmVmbGVjdFByb3BlcnR5KGtleSwgUmVmbGVjdFNoaW1zW2tleV0pO1xuICB9KTtcbiAgdmFyIG9yaWdpbmFsUmVmbGVjdEdldFByb3RvID0gZ2xvYmFscy5SZWZsZWN0LmdldFByb3RvdHlwZU9mO1xuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzICYmIG9yaWdpbmFsUmVmbGVjdEdldFByb3RvICYmIG9yaWdpbmFsUmVmbGVjdEdldFByb3RvLm5hbWUgIT09ICdnZXRQcm90b3R5cGVPZicpIHtcbiAgICBvdmVycmlkZU5hdGl2ZShnbG9iYWxzLlJlZmxlY3QsICdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCkge1xuICAgICAgcmV0dXJuIF9jYWxsKG9yaWdpbmFsUmVmbGVjdEdldFByb3RvLCBnbG9iYWxzLlJlZmxlY3QsIHRhcmdldCk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGdsb2JhbHMuUmVmbGVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgIGlmICh2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICBnbG9iYWxzLlJlZmxlY3Quc2V0UHJvdG90eXBlT2YoMSwge30pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkpIHtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKGdsb2JhbHMuUmVmbGVjdCwgJ3NldFByb3RvdHlwZU9mJywgUmVmbGVjdFNoaW1zLnNldFByb3RvdHlwZU9mKTtcbiAgICB9XG4gIH1cbiAgaWYgKGdsb2JhbHMuUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgIGlmICghdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGJhc2ljID0gIWdsb2JhbHMuUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSgxLCAndGVzdCcsIHsgdmFsdWU6IDEgfSk7XG4gICAgICAvLyBcImV4dGVuc2libGVcIiBmYWlscyBvbiBFZGdlIDAuMTJcbiAgICAgIHZhciBleHRlbnNpYmxlID0gdHlwZW9mIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyAhPT0gJ2Z1bmN0aW9uJyB8fCAhZ2xvYmFscy5SZWZsZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSksICd0ZXN0Jywge30pO1xuICAgICAgcmV0dXJuIGJhc2ljICYmIGV4dGVuc2libGU7XG4gICAgfSkpIHtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKGdsb2JhbHMuUmVmbGVjdCwgJ2RlZmluZVByb3BlcnR5JywgUmVmbGVjdFNoaW1zLmRlZmluZVByb3BlcnR5KTtcbiAgICB9XG4gIH1cbiAgaWYgKGdsb2JhbHMuUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICBpZiAoIXZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gRigpIHt9O1xuICAgICAgcmV0dXJuIGdsb2JhbHMuUmVmbGVjdC5jb25zdHJ1Y3QoZnVuY3Rpb24gKCkge30sIFtdLCBGKSBpbnN0YW5jZW9mIEY7XG4gICAgfSkpIHtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKGdsb2JhbHMuUmVmbGVjdCwgJ2NvbnN0cnVjdCcsIFJlZmxlY3RTaGltcy5jb25zdHJ1Y3QpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChTdHJpbmcobmV3IERhdGUoTmFOKSkgIT09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgdmFyIGRhdGVUb1N0cmluZyA9IERhdGUucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBzaGltbWVkRGF0ZVRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgdmFsdWVPZiA9ICt0aGlzO1xuICAgICAgaWYgKHZhbHVlT2YgIT09IHZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEVTLkNhbGwoZGF0ZVRvU3RyaW5nLCB0aGlzKTtcbiAgICB9O1xuICAgIG92ZXJyaWRlTmF0aXZlKERhdGUucHJvdG90eXBlLCAndG9TdHJpbmcnLCBzaGltbWVkRGF0ZVRvU3RyaW5nKTtcbiAgfVxuXG4gIC8vIEFubmV4IEIgSFRNTCBtZXRob2RzXG4gIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hZGRpdGlvbmFsLXByb3BlcnRpZXMtb2YtdGhlLXN0cmluZy5wcm90b3R5cGUtb2JqZWN0XG4gIHZhciBzdHJpbmdIVE1Mc2hpbXMgPSB7XG4gICAgYW5jaG9yOiBmdW5jdGlvbiBhbmNob3IobmFtZSkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnYScsICduYW1lJywgbmFtZSk7IH0sXG4gICAgYmlnOiBmdW5jdGlvbiBiaWcoKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpOyB9LFxuICAgIGJsaW5rOiBmdW5jdGlvbiBibGluaygpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ2JsaW5rJywgJycsICcnKTsgfSxcbiAgICBib2xkOiBmdW5jdGlvbiBib2xkKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7IH0sXG4gICAgZml4ZWQ6IGZ1bmN0aW9uIGZpeGVkKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAndHQnLCAnJywgJycpOyB9LFxuICAgIGZvbnRjb2xvcjogZnVuY3Rpb24gZm9udGNvbG9yKGNvbG9yKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ2NvbG9yJywgY29sb3IpOyB9LFxuICAgIGZvbnRzaXplOiBmdW5jdGlvbiBmb250c2l6ZShzaXplKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ3NpemUnLCBzaXplKTsgfSxcbiAgICBpdGFsaWNzOiBmdW5jdGlvbiBpdGFsaWNzKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnaScsICcnLCAnJyk7IH0sXG4gICAgbGluazogZnVuY3Rpb24gbGluayh1cmwpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7IH0sXG4gICAgc21hbGw6IGZ1bmN0aW9uIHNtYWxsKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnc21hbGwnLCAnJywgJycpOyB9LFxuICAgIHN0cmlrZTogZnVuY3Rpb24gc3RyaWtlKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnc3RyaWtlJywgJycsICcnKTsgfSxcbiAgICBzdWI6IGZ1bmN0aW9uIHN1YigpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ3N1YicsICcnLCAnJyk7IH0sXG4gICAgc3VwOiBmdW5jdGlvbiBzdWIoKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdzdXAnLCAnJywgJycpOyB9XG4gIH07XG4gIF9mb3JFYWNoKE9iamVjdC5rZXlzKHN0cmluZ0hUTUxzaGltcyksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgbWV0aG9kID0gU3RyaW5nLnByb3RvdHlwZVtrZXldO1xuICAgIHZhciBzaG91bGRPdmVyd3JpdGUgPSBmYWxzZTtcbiAgICBpZiAoRVMuSXNDYWxsYWJsZShtZXRob2QpKSB7XG4gICAgICB2YXIgb3V0cHV0ID0gX2NhbGwobWV0aG9kLCAnJywgJyBcIiAnKTtcbiAgICAgIHZhciBxdW90ZXNDb3VudCA9IF9jb25jYXQoW10sIG91dHB1dC5tYXRjaCgvXCIvZykpLmxlbmd0aDtcbiAgICAgIHNob3VsZE92ZXJ3cml0ZSA9IG91dHB1dCAhPT0gb3V0cHV0LnRvTG93ZXJDYXNlKCkgfHwgcXVvdGVzQ291bnQgPiAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG91bGRPdmVyd3JpdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkT3ZlcndyaXRlKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCBrZXksIHN0cmluZ0hUTUxzaGltc1trZXldKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBKU09Oc3RyaW5naWZpZXNTeW1ib2xzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBNaWNyb3NvZnQgRWRnZSB2MC4xMiBzdHJpbmdpZmllcyBTeW1ib2xzIGluY29ycmVjdGx5XG4gICAgaWYgKCFoYXNTeW1ib2xzKSB7IHJldHVybiBmYWxzZTsgfSAvLyBTeW1ib2xzIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgdmFyIHN0cmluZ2lmeSA9IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgSlNPTi5zdHJpbmdpZnkgPT09ICdmdW5jdGlvbicgPyBKU09OLnN0cmluZ2lmeSA6IG51bGw7XG4gICAgaWYgKCFzdHJpbmdpZnkpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIEpTT04uc3RyaW5naWZ5IGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAodHlwZW9mIHN0cmluZ2lmeShTeW1ib2woKSkgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB0cnVlOyB9IC8vIFN5bWJvbHMgc2hvdWxkIGJlY29tZSBgdW5kZWZpbmVkYFxuICAgIGlmIChzdHJpbmdpZnkoW1N5bWJvbCgpXSkgIT09ICdbbnVsbF0nKSB7IHJldHVybiB0cnVlOyB9IC8vIFN5bWJvbHMgaW4gYXJyYXlzIHNob3VsZCBiZWNvbWUgYG51bGxgXG4gICAgdmFyIG9iaiA9IHsgYTogU3ltYm9sKCkgfTtcbiAgICBvYmpbU3ltYm9sKCldID0gdHJ1ZTtcbiAgICBpZiAoc3RyaW5naWZ5KG9iaikgIT09ICd7fScpIHsgcmV0dXJuIHRydWU7IH0gLy8gU3ltYm9sLXZhbHVlZCBrZXlzICphbmQqIFN5bWJvbC12YWx1ZWQgcHJvcGVydGllcyBzaG91bGQgYmUgb21pdHRlZFxuICAgIHJldHVybiBmYWxzZTtcbiAgfSgpKTtcbiAgdmFyIEpTT05zdHJpbmdpZnlBY2NlcHRzT2JqZWN0U3ltYm9sID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgIC8vIENocm9tZSA0NSB0aHJvd3Mgb24gc3RyaW5naWZ5aW5nIG9iamVjdCBzeW1ib2xzXG4gICAgaWYgKCFoYXNTeW1ib2xzKSB7IHJldHVybiB0cnVlOyB9IC8vIFN5bWJvbHMgYXJlIG5vdCBzdXBwb3J0ZWRcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoT2JqZWN0KFN5bWJvbCgpKSkgPT09ICd7fScgJiYgSlNPTi5zdHJpbmdpZnkoW09iamVjdChTeW1ib2woKSldKSA9PT0gJ1t7fV0nO1xuICB9KTtcbiAgaWYgKEpTT05zdHJpbmdpZmllc1N5bWJvbHMgfHwgIUpTT05zdHJpbmdpZnlBY2NlcHRzT2JqZWN0U3ltYm9sKSB7XG4gICAgdmFyIG9yaWdTdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeTtcbiAgICBvdmVycmlkZU5hdGl2ZShKU09OLCAnc3RyaW5naWZ5JywgZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgeyByZXR1cm47IH1cbiAgICAgIHZhciByZXBsYWNlcjtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXBsYWNlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIH1cbiAgICAgIHZhciBhcmdzID0gW3ZhbHVlXTtcbiAgICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHtcbiAgICAgICAgdmFyIHJlcGxhY2VGbiA9IEVTLklzQ2FsbGFibGUocmVwbGFjZXIpID8gcmVwbGFjZXIgOiBudWxsO1xuICAgICAgICB2YXIgd3JhcHBlZFJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgICAgICAgdmFyIHBhcnNlZFZhbHVlID0gcmVwbGFjZUZuID8gX2NhbGwocmVwbGFjZUZuLCB0aGlzLCBrZXksIHZhbCkgOiB2YWw7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRWYWx1ZSAhPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICAgIGlmIChUeXBlLnN5bWJvbChwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFzc2lnblRvKHt9KShwYXJzZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsdWU7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkUmVwbGFjZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIHdyYXBwZWQgcmVwbGFjZXIgdGhhdCBoYW5kbGVzIGFuIGFycmF5IHJlcGxhY2VyP1xuICAgICAgICBhcmdzLnB1c2gocmVwbGFjZXIpO1xuICAgICAgfVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbMl0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdTdHJpbmdpZnkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZ2xvYmFscztcbn0pKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cblxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIFJlZmxlY3Q7XG4oZnVuY3Rpb24gKFJlZmxlY3QpIHtcbiAgICAvLyBNZXRhZGF0YSBQcm9wb3NhbFxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvXG4gICAgKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gICAgICAgICAgICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOlxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6XG4gICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCk7XG4gICAgICAgIHZhciBleHBvcnRlciA9IG1ha2VFeHBvcnRlcihSZWZsZWN0KTtcbiAgICAgICAgaWYgKHR5cGVvZiByb290LlJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJvb3QuUmVmbGVjdCA9IFJlZmxlY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBleHBvcnRlciA9IG1ha2VFeHBvcnRlcihyb290LlJlZmxlY3QsIGV4cG9ydGVyKTtcbiAgICAgICAgfVxuICAgICAgICBmYWN0b3J5KGV4cG9ydGVyKTtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUV4cG9ydGVyKHRhcmdldCwgcHJldmlvdXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHsgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXMpXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pKGZ1bmN0aW9uIChleHBvcnRlcikge1xuICAgICAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgLy8gZmVhdHVyZSB0ZXN0IGZvciBTeW1ib2wgc3VwcG9ydFxuICAgICAgICB2YXIgc3VwcG9ydHNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIHZhciB0b1ByaW1pdGl2ZVN5bWJvbCA9IHN1cHBvcnRzU3ltYm9sICYmIHR5cGVvZiBTeW1ib2wudG9QcmltaXRpdmUgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wudG9QcmltaXRpdmUgOiBcIkBAdG9QcmltaXRpdmVcIjtcbiAgICAgICAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gc3VwcG9ydHNTeW1ib2wgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbC5pdGVyYXRvciA6IFwiQEBpdGVyYXRvclwiO1xuICAgICAgICB2YXIgc3VwcG9ydHNDcmVhdGUgPSB0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiOyAvLyBmZWF0dXJlIHRlc3QgZm9yIE9iamVjdC5jcmVhdGUgc3VwcG9ydFxuICAgICAgICB2YXIgc3VwcG9ydHNQcm90byA9IHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXk7IC8vIGZlYXR1cmUgdGVzdCBmb3IgX19wcm90b19fIHN1cHBvcnRcbiAgICAgICAgdmFyIGRvd25MZXZlbCA9ICFzdXBwb3J0c0NyZWF0ZSAmJiAhc3VwcG9ydHNQcm90bztcbiAgICAgICAgdmFyIEhhc2hNYXAgPSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gb2JqZWN0IGluIGRpY3Rpb25hcnkgbW9kZSAoYS5rLmEuIFwic2xvd1wiIG1vZGUgaW4gdjgpXG4gICAgICAgICAgICBjcmVhdGU6IHN1cHBvcnRzQ3JlYXRlXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeShPYmplY3QuY3JlYXRlKG51bGwpKTsgfVxuICAgICAgICAgICAgICAgIDogc3VwcG9ydHNQcm90b1xuICAgICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHsgX19wcm90b19fOiBudWxsIH0pOyB9XG4gICAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoe30pOyB9LFxuICAgICAgICAgICAgaGFzOiBkb3duTGV2ZWxcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGtleSBpbiBtYXA7IH0sXG4gICAgICAgICAgICBnZXQ6IGRvd25MZXZlbFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSkgPyBtYXBba2V5XSA6IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBtYXBba2V5XTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gTG9hZCBnbG9iYWwgb3Igc2hpbSB2ZXJzaW9ucyBvZiBNYXAsIFNldCwgYW5kIFdlYWtNYXBcbiAgICAgICAgdmFyIGZ1bmN0aW9uUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKTtcbiAgICAgICAgdmFyIHVzZVBvbHlmaWxsID0gdHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnZbXCJSRUZMRUNUX01FVEFEQVRBX1VTRV9NQVBfUE9MWUZJTExcIl0gPT09IFwidHJ1ZVwiO1xuICAgICAgICB2YXIgX01hcCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcyA9PT0gXCJmdW5jdGlvblwiID8gTWFwIDogQ3JlYXRlTWFwUG9seWZpbGwoKTtcbiAgICAgICAgdmFyIF9TZXQgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFNldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IFNldCA6IENyZWF0ZVNldFBvbHlmaWxsKCk7XG4gICAgICAgIHZhciBfV2Vha01hcCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgV2Vha01hcCA9PT0gXCJmdW5jdGlvblwiID8gV2Vha01hcCA6IENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpO1xuICAgICAgICAvLyBbW01ldGFkYXRhXV0gaW50ZXJuYWwgc2xvdFxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcbiAgICAgICAgdmFyIE1ldGFkYXRhID0gbmV3IF9XZWFrTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBsaWVzIGEgc2V0IG9mIGRlY29yYXRvcnMgdG8gYSBwcm9wZXJ0eSBvZiBhIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgdG8gZGVjb3JhdGUuXG4gICAgICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSB0YXJnZXQga2V5LlxuICAgICAgICAgKiBAcmVtYXJrcyBEZWNvcmF0b3JzIGFyZSBhcHBsaWVkIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIEV4YW1wbGUgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIikpKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcbiAgICAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIikpKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChhdHRyaWJ1dGVzKSAmJiAhSXNVbmRlZmluZWQoYXR0cmlidXRlcykgJiYgIUlzTnVsbChhdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmIChJc051bGwoYXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3Rvcih0YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlQ29uc3RydWN0b3IoZGVjb3JhdG9ycywgdGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlY29yYXRlXCIsIGRlY29yYXRlKTtcbiAgICAgICAgLy8gNC4xLjIgUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSlcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jcmVmbGVjdC5tZXRhZGF0YVxuICAgICAgICAvKipcbiAgICAgICAgICogQSBkZWZhdWx0IG1ldGFkYXRhIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgb24gYSBjbGFzcywgY2xhc3MgbWVtYmVyLCBvciBwYXJhbWV0ZXIuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBUaGUga2V5IGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxuICAgICAgICAgKiBAcmV0dXJucyBBIGRlY29yYXRvciBmdW5jdGlvbi5cbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSWYgYG1ldGFkYXRhS2V5YCBpcyBhbHJlYWR5IGRlZmluZWQgZm9yIHRoZSB0YXJnZXQgYW5kIHRhcmdldCBrZXksIHRoZVxuICAgICAgICAgKiBtZXRhZGF0YVZhbHVlIGZvciB0aGF0IGtleSB3aWxsIGJlIG92ZXJ3cml0dGVuLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvciwgVHlwZVNjcmlwdCBvbmx5KVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlLCBUeXBlU2NyaXB0IG9ubHkpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHByb3BlcnR5O1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZCgpIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZCgpIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkgJiYgIUlzUHJvcGVydHlLZXkocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwibWV0YWRhdGFcIiwgbWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgQSB2YWx1ZSB0aGF0IGNvbnRhaW5zIGF0dGFjaGVkIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGRlY29yYXRvciBmYWN0b3J5IGFzIG1ldGFkYXRhLXByb2R1Y2luZyBhbm5vdGF0aW9uLlxuICAgICAgICAgKiAgICAgZnVuY3Rpb24gTXlBbm5vdGF0aW9uKG9wdGlvbnMpOiBEZWNvcmF0b3Ige1xuICAgICAgICAgKiAgICAgICAgIHJldHVybiAodGFyZ2V0LCBrZXk/KSA9PiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgdGFyZ2V0LCBrZXkpO1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVmaW5lTWV0YWRhdGFcIiwgZGVmaW5lTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluIGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbjsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiaGFzTWV0YWRhdGFcIiwgaGFzTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0OyBvdGhlcndpc2UsIGBmYWxzZWAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJoYXNPd25NZXRhZGF0YVwiLCBoYXNPd25NZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE1ldGFkYXRhXCIsIGdldE1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE93bk1ldGFkYXRhXCIsIGdldE93bk1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlNZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRNZXRhZGF0YUtleXNcIiwgZ2V0TWV0YWRhdGFLZXlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIHVuaXF1ZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE93bk1ldGFkYXRhS2V5c1wiLCBnZXRPd25NZXRhZGF0YUtleXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBlbnRyeSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQ7IG90aGVyd2lzZSwgZmFsc2UuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgcHJvcGVydHlLZXksIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIW1ldGFkYXRhTWFwLmRlbGV0ZShtZXRhZGF0YUtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUgPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5kZWxldGUocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgaWYgKHRhcmdldE1ldGFkYXRhLnNpemUgPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgTWV0YWRhdGEuZGVsZXRlKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlbGV0ZU1ldGFkYXRhXCIsIGRlbGV0ZU1ldGFkYXRhKTtcbiAgICAgICAgZnVuY3Rpb24gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSAmJiAhSXNOdWxsKGRlY29yYXRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKGRlY29yYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGRlY29yYXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHkoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSAmJiAhSXNOdWxsKGRlY29yYXRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChkZWNvcmF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gZGVjb3JhdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgQ3JlYXRlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQoTyk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQodGFyZ2V0TWV0YWRhdGEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFDcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgX01hcCgpO1xuICAgICAgICAgICAgICAgIE1ldGFkYXRhLnNldChPLCB0YXJnZXRNZXRhZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSB0YXJnZXRNZXRhZGF0YS5nZXQoUCk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFDcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFNYXAgPSBuZXcgX01hcCgpO1xuICAgICAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLnNldChQLCBtZXRhZGF0YU1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjEuMSBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWhhc21ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIGlmIChoYXNPd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICghSXNOdWxsKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjIuMSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWhhc293bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBUb0Jvb2xlYW4obWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjMuMSBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBoYXNPd24gPSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIGlmIChoYXNPd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAoIUlzTnVsbChwYXJlbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNC4xIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5Z2V0b3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS41LjEgT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlkZWZpbmVvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gdHJ1ZSk7XG4gICAgICAgICAgICBtZXRhZGF0YU1hcC5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS42LjEgT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnltZXRhZGF0YWtleXNcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUCkge1xuICAgICAgICAgICAgdmFyIG93bktleXMgPSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3duS2V5cztcbiAgICAgICAgICAgIHZhciBwYXJlbnRLZXlzID0gT3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRLZXlzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xuICAgICAgICAgICAgaWYgKG93bktleXMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudEtleXM7XG4gICAgICAgICAgICB2YXIgc2V0ID0gbmV3IF9TZXQoKTtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG93bktleXNfMSA9IG93bktleXM7IF9pIDwgb3duS2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBvd25LZXlzXzFbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBoYXNLZXkgPSBzZXQuaGFzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIHBhcmVudEtleXNfMSA9IHBhcmVudEtleXM7IF9hIDwgcGFyZW50S2V5c18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwYXJlbnRLZXlzXzFbX2FdO1xuICAgICAgICAgICAgICAgIHZhciBoYXNLZXkgPSBzZXQuaGFzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNy4xIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5b3dubWV0YWRhdGFrZXlzXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgICAgIHZhciBrZXlzT2JqID0gbWV0YWRhdGFNYXAua2V5cygpO1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gR2V0SXRlcmF0b3Ioa2V5c09iaik7XG4gICAgICAgICAgICB2YXIgayA9IDA7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5sZW5ndGggPSBrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IEl0ZXJhdG9yVmFsdWUobmV4dCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAga2V5c1trXSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNiBFQ01BU2NyaXB0IERhdGEgVHlwMGVzIGFuZCBWYWx1ZXNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1kYXRhLXR5cGVzLWFuZC12YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gVHlwZSh4KSB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAvKiBOdWxsICovO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjogcmV0dXJuIDAgLyogVW5kZWZpbmVkICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6IHJldHVybiAyIC8qIEJvb2xlYW4gKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOiByZXR1cm4gMyAvKiBTdHJpbmcgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcInN5bWJvbFwiOiByZXR1cm4gNCAvKiBTeW1ib2wgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOiByZXR1cm4gNSAvKiBOdW1iZXIgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOiByZXR1cm4geCA9PT0gbnVsbCA/IDEgLyogTnVsbCAqLyA6IDYgLyogT2JqZWN0ICovO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiA2IC8qIE9iamVjdCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuMSBUaGUgVW5kZWZpbmVkIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy11bmRlZmluZWQtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc1VuZGVmaW5lZCh4KSB7XG4gICAgICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS4yIFRoZSBOdWxsIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1udWxsLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNOdWxsKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ID09PSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS41IFRoZSBTeW1ib2wgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXN5bWJvbC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzU3ltYm9sKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuNyBUaGUgT2JqZWN0IFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNPYmplY3QoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8geCAhPT0gbnVsbCA6IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xIFR5cGUgQ29udmVyc2lvblxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlLWNvbnZlcnNpb25cbiAgICAgICAgLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4gICAgICAgIGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKFR5cGUoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwIC8qIFVuZGVmaW5lZCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBOdWxsICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAyIC8qIEJvb2xlYW4gKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDMgLyogU3RyaW5nICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIFN5bWJvbCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgNSAvKiBOdW1iZXIgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoaW50ID0gUHJlZmVycmVkVHlwZSA9PT0gMyAvKiBTdHJpbmcgKi8gPyBcInN0cmluZ1wiIDogUHJlZmVycmVkVHlwZSA9PT0gNSAvKiBOdW1iZXIgKi8gPyBcIm51bWJlclwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICB2YXIgZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCB0b1ByaW1pdGl2ZVN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoZXhvdGljVG9QcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXhvdGljVG9QcmltLmNhbGwoaW5wdXQsIGhpbnQpO1xuICAgICAgICAgICAgICAgIGlmIChJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSBcImRlZmF1bHRcIiA/IFwibnVtYmVyXCIgOiBoaW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMS4xIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcbiAgICAgICAgICAgIGlmIChoaW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvU3RyaW5nXzEgPSBPLnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHRvU3RyaW5nXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b1N0cmluZ18xLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZU9mID0gTy52YWx1ZU9mO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlT2YgPSBPLnZhbHVlT2Y7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodmFsdWVPZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlT2YuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRvU3RyaW5nXzIgPSBPLnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHRvU3RyaW5nXzIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b1N0cmluZ18yLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4yIFRvQm9vbGVhbihhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLzIwMTYvI3NlYy10b2Jvb2xlYW5cbiAgICAgICAgZnVuY3Rpb24gVG9Cb29sZWFuKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gISFhcmd1bWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMTIgVG9TdHJpbmcoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvc3RyaW5nXG4gICAgICAgIGZ1bmN0aW9uIFRvU3RyaW5nKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIGFyZ3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xNCBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG4gICAgICAgIGZ1bmN0aW9uIFRvUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBUb1ByaW1pdGl2ZShhcmd1bWVudCwgMyAvKiBTdHJpbmcgKi8pO1xuICAgICAgICAgICAgaWYgKElzU3ltYm9sKGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIHJldHVybiBUb1N0cmluZyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMiBUZXN0aW5nIGFuZCBDb21wYXJpc29uIE9wZXJhdGlvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdGVzdGluZy1hbmQtY29tcGFyaXNvbi1vcGVyYXRpb25zXG4gICAgICAgIC8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbiAgICAgICAgZnVuY3Rpb24gSXNBcnJheShhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXlcbiAgICAgICAgICAgICAgICA/IEFycmF5LmlzQXJyYXkoYXJndW1lbnQpXG4gICAgICAgICAgICAgICAgOiBhcmd1bWVudCBpbnN0YW5jZW9mIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICA/IGFyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjMgSXNDYWxsYWJsZShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuICAgICAgICBmdW5jdGlvbiBJc0NhbGxhYmxlKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjQgSXNDb25zdHJ1Y3Rvcihhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNjb25zdHJ1Y3RvclxuICAgICAgICBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuNyBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc3Byb3BlcnR5a2V5XG4gICAgICAgIGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoVHlwZShhcmd1bWVudCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDMgLyogU3RyaW5nICovOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDQgLyogU3ltYm9sICovOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4zIE9wZXJhdGlvbnMgb24gT2JqZWN0c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcGVyYXRpb25zLW9uLW9iamVjdHNcbiAgICAgICAgLy8gNy4zLjkgR2V0TWV0aG9kKFYsIFApXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxuICAgICAgICBmdW5jdGlvbiBHZXRNZXRob2QoViwgUCkge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBWW1BdO1xuICAgICAgICAgICAgaWYgKGZ1bmMgPT09IHVuZGVmaW5lZCB8fCBmdW5jID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoIUlzQ2FsbGFibGUoZnVuYykpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40IE9wZXJhdGlvbnMgb24gSXRlcmF0b3IgT2JqZWN0c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcGVyYXRpb25zLW9uLWl0ZXJhdG9yLW9iamVjdHNcbiAgICAgICAgZnVuY3Rpb24gR2V0SXRlcmF0b3Iob2JqKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gR2V0TWV0aG9kKG9iaiwgaXRlcmF0b3JTeW1ib2wpO1xuICAgICAgICAgICAgaWYgKCFJc0NhbGxhYmxlKG1ldGhvZCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpOyAvLyBmcm9tIENhbGxcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IG1ldGhvZC5jYWxsKG9iaik7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGl0ZXJhdG9yKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjQgSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLWl0ZXJhdG9ydmFsdWVcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlclJlc3VsdC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNSBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yc3RlcFxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyBmYWxzZSA6IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pdGVyYXRvcmNsb3NlXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHZhciBmID0gaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAoZilcbiAgICAgICAgICAgICAgICBmLmNhbGwoaXRlcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDkuMSBPcmRpbmFyeSBPYmplY3QgSW50ZXJuYWwgTWV0aG9kcyBhbmQgSW50ZXJuYWwgU2xvdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnktb2JqZWN0LWludGVybmFsLW1ldGhvZHMtYW5kLWludGVybmFsLXNsb3RzXG4gICAgICAgIC8vIDkuMS4xLjEgT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeWdldHByb3RvdHlwZW9mXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTykge1xuICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBPICE9PSBcImZ1bmN0aW9uXCIgfHwgTyA9PT0gZnVuY3Rpb25Qcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCBkb2Vzbid0IHNldCBfX3Byb3RvX18gaW4gRVM1LCBhcyBpdCdzIG5vbi1zdGFuZGFyZC5cbiAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IuIENvbXBhdGlibGUgaW1wbGVtZW50YXRpb25zXG4gICAgICAgICAgICAvLyBtdXN0IGVpdGhlciBzZXQgX19wcm90b19fIG9uIGEgc3ViY2xhc3MgY29uc3RydWN0b3IgdG8gdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IsXG4gICAgICAgICAgICAvLyBvciBlbnN1cmUgZWFjaCBjbGFzcyBoYXMgYSB2YWxpZCBgY29uc3RydWN0b3JgIHByb3BlcnR5IG9uIGl0cyBwcm90b3R5cGUgdGhhdFxuICAgICAgICAgICAgLy8gcG9pbnRzIGJhY2sgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgRnVuY3Rpb24uW1tQcm90b3R5cGVdXSwgdGhlbiB0aGlzIGlzIGRlZmluYXRlbHkgaW5oZXJpdGVkLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgY2FzZSB3aGVuIGluIEVTNiBvciB3aGVuIHVzaW5nIF9fcHJvdG9fXyBpbiBhIGNvbXBhdGlibGUgYnJvd3Nlci5cbiAgICAgICAgICAgIGlmIChwcm90byAhPT0gZnVuY3Rpb25Qcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHN1cGVyIHByb3RvdHlwZSBpcyBPYmplY3QucHJvdG90eXBlLCBudWxsLCBvciB1bmRlZmluZWQsIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gTy5wcm90b3R5cGU7XG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlUHJvdG8gPSBwcm90b3R5cGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBpZiAocHJvdG90eXBlUHJvdG8gPT0gbnVsbCB8fCBwcm90b3R5cGVQcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB0aGUgY29uc3RydWN0b3Igd2FzIG5vdCBhIGZ1bmN0aW9uLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvdG90eXBlUHJvdG8uY29uc3RydWN0b3I7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBzb21lIGtpbmQgb2Ygc2VsZi1yZWZlcmVuY2UsIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3IgPT09IE8pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIHByZXR0eSBnb29kIGd1ZXNzIGF0IHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBNYXAgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVNYXBQb2x5ZmlsbCgpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZVNlbnRpbmVsID0ge307XG4gICAgICAgICAgICB2YXIgYXJyYXlTZW50aW5lbCA9IFtdO1xuICAgICAgICAgICAgdmFyIE1hcEl0ZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE1hcEl0ZXJhdG9yKGtleXMsIHZhbHVlcywgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0ga2V5cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zZWxlY3Rvcih0aGlzLl9rZXlzW2luZGV4XSwgdGhpcy5fdmFsdWVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID49IHRoaXMuX2tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHQsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXBJdGVyYXRvcjtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE1hcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoOyB9LFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKSA+PSAwOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA+PSAwID8gdGhpcy5fdmFsdWVzW2luZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleCArIDE7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzW2kgLSAxXSA9IHRoaXMuX2tleXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2kgLSAxXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzLl9jYWNoZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEtleSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRWYWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0RW50cnkpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLl9maW5kID0gZnVuY3Rpb24gKGtleSwgaW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKHRoaXMuX2NhY2hlS2V5ID0ga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVJbmRleCA8IDAgJiYgaW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlSW5kZXg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEtleShrZXksIF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUoXywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRFbnRyeShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBTZXQgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVTZXRQb2x5ZmlsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gU2V0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgX01hcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuc2l6ZTsgfSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5oYXModmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuc2V0KHZhbHVlLCB2YWx1ZSksIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5kZWxldGUodmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX21hcC5jbGVhcigpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAudmFsdWVzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgV2Vha01hcCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpIHtcbiAgICAgICAgICAgIHZhciBVVUlEX1NJWkUgPSAxNjtcbiAgICAgICAgICAgIHZhciBrZXlzID0gSGFzaE1hcC5jcmVhdGUoKTtcbiAgICAgICAgICAgIHZhciByb290S2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5oYXModGFibGUsIHRoaXMuX2tleSkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBIYXNoTWFwLmdldCh0YWJsZSwgdGhpcy5fa2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBkZWxldGUgdGFibGVbdGhpcy5fa2V5XSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IG5vdCBhIHJlYWwgY2xlYXIsIGp1c3QgbWFrZXMgdGhlIHByZXZpb3VzIGRhdGEgdW5yZWFjaGFibGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gV2Vha01hcDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVVbmlxdWVLZXkoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleTtcbiAgICAgICAgICAgICAgICBkb1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBcIkBAV2Vha01hcEBAXCIgKyBDcmVhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEhhc2hNYXAuaGFzKGtleXMsIGtleSkpO1xuICAgICAgICAgICAgICAgIGtleXNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPd24uY2FsbCh0YXJnZXQsIHJvb3RLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcm9vdEtleSwgeyB2YWx1ZTogSGFzaE1hcC5jcmVhdGUoKSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtyb290S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEZpbGxSYW5kb21CeXRlcyhidWZmZXIsIHNpemUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gTWF0aC5yYW5kb20oKSAqIDB4ZmYgfCAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBHZW5SYW5kb21CeXRlcyhzaXplKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBVaW50OEFycmF5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNDcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgVWludDhBcnJheShzaXplKSwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IEFycmF5KHNpemUpLCBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVVSUQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBHZW5SYW5kb21CeXRlcyhVVUlEX1NJWkUpO1xuICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgcmFuZG9tIC0gUkZDIDQxMjIgwqcgNC40XG4gICAgICAgICAgICAgICAgZGF0YVs2XSA9IGRhdGFbNl0gJiAweDRmIHwgMHg0MDtcbiAgICAgICAgICAgICAgICBkYXRhWzhdID0gZGF0YVs4XSAmIDB4YmYgfCAweDgwO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IFVVSURfU0laRTsgKytvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhW29mZnNldF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IDQgfHwgb2Zmc2V0ID09PSA2IHx8IG9mZnNldCA9PT0gOClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIi1cIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJ5dGUudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlcyBhIGhldXJpc3RpYyB1c2VkIGJ5IHY4IGFuZCBjaGFrcmEgdG8gZm9yY2UgYW4gb2JqZWN0IGludG8gZGljdGlvbmFyeSBtb2RlLlxuICAgICAgICBmdW5jdGlvbiBNYWtlRGljdGlvbmFyeShvYmopIHtcbiAgICAgICAgICAgIG9iai5fXyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouX187XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSk7XG59KShSZWZsZWN0IHx8IChSZWZsZWN0ID0ge30pKTtcbiIsImltcG9ydCBWYWx1ZSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5leHBvcnQgY2xhc3MgQ2h1bmsge1xuXHRwdWJsaWMgdmlldzogbnVtYmVyW107XG5cblx0QFR5cGUoKCkgPT4gQXJyYXlCdWZmZXIpXG5cblx0cHJpdmF0ZSBjb3VudDogbnVtYmVyO1xuXG5cdEBUeXBlKCgpID0+IFZhbHVlKVxuXHRwcml2YXRlIGNvbnN0YW50czogVmFsdWVbXTtcblxuXHQvLyBSZWxhdGVkIHdpdGggc291cmNlIGNvZGUgb2YgaGlnaGVyIGxldmVsIGxhbmd1YWdlXG5cdHByaXZhdGUgbGluZVZpZXc6IG51bWJlcltdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY291bnQgPSAwO1xuXG5cdFx0dGhpcy5jb25zdGFudHMgPSBbXTtcblxuXHRcdHRoaXMudmlldyA9IFtdO1xuXHRcdHRoaXMubGluZVZpZXcgPSBbXTtcblx0fVxuXG5cdHdyaXRlKGJ5dGU6IG51bWJlciwgbGluZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52aWV3LnB1c2goYnl0ZSk7XG5cdFx0dGhpcy5saW5lVmlldy5wdXNoKGxpbmUpO1xuXHR9XG5cblx0cmVhZCgpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0IHNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3Lmxlbmd0aDtcblx0fVxuXG5cdGdldChpbmRleCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmlld1tpbmRleF07XG5cdH1cblxuXHRnZXRMaW5lKGluZGV4KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5saW5lVmlld1tpbmRleF07XG5cdH1cblxuXHRtYWtlQ29uc3RhbnQodmFsdWU6IFZhbHVlKTogbnVtYmVyIHtcblx0XHRjb25zdCBjb25zdGFudCA9IHRoaXMuYWRkQ29uc3RhbnQodmFsdWUpO1xuXHRcdGlmIChjb25zdGFudCA+IDI1NSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUb28gbWFueSBjb25zdGFudHMgaW4gb25lIGNodW5rLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb25zdGFudDtcblx0fVxuXG5cdGFkZENvbnN0YW50KHZhbHVlOiBWYWx1ZSk6IG51bWJlciB7XG5cdFx0dGhpcy5jb25zdGFudHMucHVzaCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RhbnRzLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRnZXRDb25zdGFudChpbmRleDogbnVtYmVyKTogVmFsdWUge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0YW50c1tpbmRleF07XG5cdH1cbn0iLCJpbXBvcnQgU2Nhbm5lciwgeyBUb2tlblR5cGUsIFRva2VuIH0gZnJvbSAnLi9zY2FubmVyJztcbmltcG9ydCB7IENodW5rIH0gZnJvbSAnLi9jaHVuayc7XG5pbXBvcnQgeyBPcGNvZGUgfSBmcm9tICcuL3ZtJztcbmltcG9ydCBWYWx1ZSBmcm9tICcuL3ZhbHVlJztcblxuaW50ZXJmYWNlIExvY2FsIHtcblx0bmFtZTogVG9rZW47XG5cdGRlcHRoOiBudW1iZXI7XG59XG5cbmVudW0gUHJlY2VkZW5jZSB7XG5cdFBSRUNfTk9ORSxcblx0UFJFQ19BU1NJR05NRU5ULCAvLyA9XG5cdFBSRUNfT1IsIC8vIG9yXG5cdFBSRUNfQU5ELCAvLyBhbmRcblx0UFJFQ19FUVVBTElUWSwgLy8gPT0gIT1cblx0UFJFQ19DT01QQVJJU09OLCAvLyA8ID4gPD0gPj1cblx0UFJFQ19URVJNLCAvLyArIC1cblx0UFJFQ19GQUNUT1IsIC8vICogL1xuXHRQUkVDX1VOQVJZLCAvLyAhIC1cblx0UFJFQ19DQUxMLCAvLyAuICgpXG5cdFBSRUNfUFJJTUFSWSxcbn1cblxuaW50ZXJmYWNlIFBhcnNlUnVsZSB7XG5cdHByZWZpeDogc3RyaW5nO1xuXHRpbmZpeDogc3RyaW5nO1xuXHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBuby1jb250cm9sLXJlZ2V4Ki9cbmNvbnN0IFBhcnNlUnVsZXMgPSB7XG5cdFtUb2tlblR5cGUuVE9LRU5fTEVGVF9QQVJFTl06IHtcblx0XHRwcmVmaXg6ICdncm91cGluZycsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9SSUdIVF9QQVJFTl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0xFRlRfQlJBQ0VdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9SSUdIVF9CUkFDRV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0NPTU1BXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRE9UXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTUlOVVNdOiB7XG5cdFx0cHJlZml4OiAndW5hcnknLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfVEVSTSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9QTFVTXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfVEVSTSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9TRU1JQ09MT05dOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9TTEFTSF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0ZBQ1RPUixcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9TVEFSXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfRkFDVE9SLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0JBTkddOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9CQU5HX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FUVVBTF9FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0dSRUFURVJdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9HUkVBVEVSX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTEVTU106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0xFU1NfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9JREVOVElGSUVSXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fU1RSSU5HXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTlVNQkVSXToge1xuXHRcdHByZWZpeDogJ251bWJlcicsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9BTkRdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9DTEFTU106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VMU0VdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9GQUxTRV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0ZPUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0ZVTl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0lGXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTklMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fT1JdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9QUklOVF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1JFVFVSTl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1NVUEVSXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fVEhJU106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1RSVUVdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9WQVJdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9XSElMRV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VSUk9SXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRU9GXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRkFMU0VdOiB7XG5cdFx0cHJlZml4OiAnbGl0ZXJhbCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9UUlVFXToge1xuXHRcdHByZWZpeDogJ2xpdGVyYWwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fTklMXToge1xuXHRcdHByZWZpeDogJ2xpdGVyYWwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQkFOR106IHtcblx0XHRwcmVmaXg6ICd1bmFyeScsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9CQU5HX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfRVFVQUxJVFksXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FUVVBTF9FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0VRVUFMSVRZLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0dSRUFURVJdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19DT01QQVJJU09OLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0dSRUFURVJfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19DT01QQVJJU09OLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0xFU1NdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19DT01QQVJJU09OLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0xFU1NfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19DT01QQVJJU09OLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1NUUklOR106IHtcblx0XHRwcmVmaXg6ICdzdHJpbmcnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fSURFTlRJRklFUl06IHtcblx0XHRwcmVmaXg6ICd2YXJpYWJsZScsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmNsYXNzIENvbXBpbGVyIHtcblx0cHJpdmF0ZSBwcmV2aW91czogVG9rZW47XG5cdHByaXZhdGUgY3VycmVudDogVG9rZW47XG5cdHByaXZhdGUgc2Nhbm5lcjogU2Nhbm5lcjtcblxuXHRwcml2YXRlIGNodW5rOiBDaHVuaztcblx0cHJpdmF0ZSBsb2NhbHM6IExvY2FsW107XG5cdHByaXZhdGUgbG9jYWxDb3VudDogbnVtYmVyO1xuXHRwcml2YXRlIHNjb3BlRGVwdGg6IG51bWJlcjtcblxuXHRjb21waWxlKHNvdXJjZTogc3RyaW5nKTogQ2h1bmsge1xuXHRcdHRoaXMuc2Nhbm5lciA9IG5ldyBTY2FubmVyKHNvdXJjZSk7XG5cblx0XHR0aGlzLmNodW5rID0gbmV3IENodW5rKCk7XG5cdFx0dGhpcy5sb2NhbHMgPSBbXTtcblxuXHRcdHRoaXMuYWR2YW5jZSgpO1xuXG5cdFx0d2hpbGUgKCF0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9FT0YpKSB7XG5cdFx0XHR0aGlzLmRlY2xhcmF0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9FT0YsICdFeHBlY3QgZW5kIG9mIGV4cHJlc3Npb24uJyk7XG5cblx0XHR0aGlzLmVuZENvbXBpbGVyKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5jaHVuaztcblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgIERFQ0xBUkFUSU9OUywgU1RBVEVNRU5UUywgQkxPQ0tTLCBFWFBSRVNTSU9OU1xuXHQgKi9cblxuXHRwcml2YXRlIGRlY2xhcmF0aW9uKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9WQVIpKSB7XG5cdFx0XHR0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhdGVtZW50KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1BSSU5UKSkge1xuXHRcdFx0dGhpcy5wcmludFN0YXRlbWVudCgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fSUYpKSB7XG5cdFx0XHR0aGlzLmlmU3RhdGVtZW50KCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9XSElMRSkpIHtcblx0XHRcdHRoaXMud2hpbGVTdGF0ZW1lbnQoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1NZU0NBTEwpKSB7XG5cdFx0XHR0aGlzLnN5c2NhbGxTdGF0ZW1lbnQoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX0ZPUikpIHtcblx0XHRcdHRoaXMuZm9yU3RhdGVtZW50KCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9MRUZUX0JSQUNFKSkge1xuXHRcdFx0dGhpcy5iZWdpblNjb3BlKCk7XG5cdFx0XHR0aGlzLmJsb2NrKCk7XG5cdFx0XHR0aGlzLmVuZFNjb3BlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3lzY2FsbFN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblxuXHRcdHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9DT01NQSkpIHtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OLCBcIkV4cGVjdCAnOycgYWZ0ZXIgc3lzY2FsbC5cIik7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfSU5URVJSVVBUKTtcblx0fVxuXG5cdHByaXZhdGUgaWZTdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9MRUZUX1BBUkVOLCBcIkV4cGVjdCAnKCcgYWZ0ZXIgJ2lmJy5cIik7XG5cdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0dGhpcy5jb25zdW1lKFxuXHRcdFx0VG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOLFxuXHRcdFx0XCJFeHBlY3QgJyknIGFmdGVyIGNvbmRpdGlvbi5cIixcblx0XHQpO1xuXG5cdFx0Y29uc3QgdGhlbkp1bXA6IG51bWJlciA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVBfSUZfRkFMU0UpO1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cdFx0dGhpcy5zdGF0ZW1lbnQoKTtcblxuXHRcdGNvbnN0IGVsc2VKdW1wOiBudW1iZXIgPSB0aGlzLmVtaXRKdW1wKE9wY29kZS5PUF9KVU1QKTtcblxuXHRcdHRoaXMucGF0Y2hKdW1wKHRoZW5KdW1wKTtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QT1ApO1xuXG5cdFx0aWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX0VMU0UpKSB0aGlzLnN0YXRlbWVudCgpO1xuXHRcdHRoaXMucGF0Y2hKdW1wKGVsc2VKdW1wKTtcblx0fVxuXG5cdHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2xvYmFsOiBudW1iZXIgPSB0aGlzLnBhcnNlVmFyaWFibGUoJ0V4cGVjdCB2YXJpYWJsZSBuYW1lLicpO1xuXG5cdFx0aWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX0VRVUFMKSkge1xuXHRcdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX05JTCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb25zdW1lKFxuXHRcdFx0VG9rZW5UeXBlLlRPS0VOX1NFTUlDT0xPTixcblx0XHRcdFwiRXhwZWN0ICc7JyBhZnRlciB2YXJpYWJsZSBkZWNsYXJhdGlvbi5cIixcblx0XHQpO1xuXHRcdHRoaXMuZGVmaW5lVmFyaWFibGUoZ2xvYmFsKTtcblx0fVxuXG5cdHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sIFwiRXhwZWN0ICc7JyBhZnRlciB2YWx1ZS5cIik7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUFJJTlQpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHByZXNzaW9uU3RhdGVtZW50KCk6IHZvaWQge1xuXHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OLCBcIkV4cGVjdCAnOycgYWZ0ZXIgdmFsdWUuXCIpO1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cdH1cblxuXHRwcml2YXRlIGZvclN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmJlZ2luU2NvcGUoKTtcblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fTEVGVF9QQVJFTiwgXCJFeHBlY3QgJygnIGFmdGVyICdmb3InLlwiKTtcblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OKSkge1xuXHRcdFx0Ly8gTm8gaW5pdGlhbGl6ZXIuXG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9WQVIpKSB7XG5cdFx0XHR0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xuXHRcdH1cblxuXHRcdGxldCBsb29wU3RhcnQgPSB0aGlzLmNodW5rLnNpemU7XG5cblx0XHRsZXQgZXhpdEp1bXAgPSAtMTtcblx0XHRpZiAoIXRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1NFTUlDT0xPTikpIHtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5jb25zdW1lKFxuXHRcdFx0XHRUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OLFxuXHRcdFx0XHRcIkV4cGVjdCAnOycgYWZ0ZXIgbG9vcCBjb25kaXRpb24uXCIsXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBKdW1wIG91dCBvZiB0aGUgbG9vcCBpZiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlLlxuXHRcdFx0ZXhpdEp1bXAgPSB0aGlzLmVtaXRKdW1wKE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFKTtcblx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7IC8vIENvbmRpdGlvbi5cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOKSkge1xuXHRcdFx0Y29uc3QgYm9keUp1bXAgPSB0aGlzLmVtaXRKdW1wKE9wY29kZS5PUF9KVU1QKTtcblxuXHRcdFx0Y29uc3QgaW5jcmVtZW50U3RhcnQgPSB0aGlzLmNodW5rLnNpemU7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cdFx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9SSUdIVF9QQVJFTixcblx0XHRcdFx0XCJFeHBlY3QgJyknIGFmdGVyIGZvciBjbGF1c2VzLlwiLFxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5lbWl0TG9vcChsb29wU3RhcnQpO1xuXHRcdFx0bG9vcFN0YXJ0ID0gaW5jcmVtZW50U3RhcnQ7XG5cdFx0XHR0aGlzLnBhdGNoSnVtcChib2R5SnVtcCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZW1lbnQoKTtcblxuXHRcdHRoaXMuZW1pdExvb3AobG9vcFN0YXJ0KTtcblxuXHRcdGlmIChleGl0SnVtcCAhPSAtMSkge1xuXHRcdFx0dGhpcy5wYXRjaEp1bXAoZXhpdEp1bXApO1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTsgLy8gQ29uZGl0aW9uLlxuXHRcdH1cblxuXHRcdHRoaXMuZW5kU2NvcGUoKTtcblx0fVxuXG5cdHByaXZhdGUgd2hpbGVTdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0Y29uc3QgbG9vcFN0YXJ0OiBudW1iZXIgPSB0aGlzLmNodW5rLnNpemU7XG5cblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX0xFRlRfUEFSRU4sIFwiRXhwZWN0ICcoJyBhZnRlciAnd2hpbGUnLlwiKTtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4sXG5cdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgY29uZGl0aW9uLlwiLFxuXHRcdCk7XG5cblx0XHRjb25zdCBleGl0SnVtcDogbnVtYmVyID0gdGhpcy5lbWl0SnVtcChPcGNvZGUuT1BfSlVNUF9JRl9GQUxTRSk7XG5cblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QT1ApO1xuXG5cdFx0dGhpcy5zdGF0ZW1lbnQoKTtcblxuXHRcdHRoaXMuZW1pdExvb3AobG9vcFN0YXJ0KTtcblxuXHRcdHRoaXMucGF0Y2hKdW1wKGV4aXRKdW1wKTtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QT1ApO1xuXHR9XG5cblx0cHJpdmF0ZSBleHByZXNzaW9uKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlY2VkZW5jZShQcmVjZWRlbmNlLlBSRUNfQVNTSUdOTUVOVCk7XG5cdH1cblxuXHRwcml2YXRlIHByZWNlZGVuY2UocHJlY2VkZW5jZTogUHJlY2VkZW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuYWR2YW5jZSgpO1xuXG5cdFx0Y29uc3QgcHJlZml4UnVsZSA9IFBhcnNlUnVsZXNbdGhpcy5wcmV2aW91cy50eXBlXS5wcmVmaXg7XG5cdFx0aWYgKHByZWZpeFJ1bGUgPT0gJ05VTEwnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdCBleHByZXNzaW9uLicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhbkFzc2lnbiA9IHByZWNlZGVuY2UgPD0gUHJlY2VkZW5jZS5QUkVDX0FTU0lHTk1FTlQ7XG5cdFx0dGhpc1twcmVmaXhSdWxlXShjYW5Bc3NpZ24pO1xuXG5cdFx0d2hpbGUgKHByZWNlZGVuY2UgPD0gUGFyc2VSdWxlc1t0aGlzLmN1cnJlbnQudHlwZV0ucHJlY2VkZW5jZSkge1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRjb25zdCBpbmZpeFJ1bGUgPSBQYXJzZVJ1bGVzW3RoaXMucHJldmlvdXMudHlwZV0uaW5maXg7XG5cdFx0XHR0aGlzW2luZml4UnVsZV0oY2FuQXNzaWduKTtcblx0XHR9XG5cblx0XHRpZiAoY2FuQXNzaWduICYmIHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX0VRVUFMKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFzc2lnbm1lbnQgdGFyZ2V0LicpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdmFyaWFibGUoY2FuQXNzaWduOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5uYW1lZFZhcmlhYmxlKHRoaXMucHJldmlvdXMsIGNhbkFzc2lnbik7XG5cdH1cblxuXHRwcml2YXRlIHN0cmluZygpOiB2b2lkIHtcblx0XHRjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5wcmV2aW91cy5zdHIuc3Vic3RyaW5nKDEsIHRoaXMucHJldmlvdXMuc3RyLmxlbmd0aCAtIDEpO1xuXHRcdHRoaXMuZW1pdENvbnN0YW50KFZhbHVlLnN0cih2YWx1ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBsaXRlcmFsKCk6IHZvaWQge1xuXHRcdHN3aXRjaCAodGhpcy5wcmV2aW91cy50eXBlKSB7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9GQUxTRTpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfRkFMU0UpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX05JTDpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTklMKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9UUlVFOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9UUlVFKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBudW1iZXIoKTogdm9pZCB7XG5cdFx0Y29uc3QgdmFsdWUgPSBOdW1iZXIodGhpcy5wcmV2aW91cy5zdHIpO1xuXG5cdFx0dGhpcy5lbWl0Q29uc3RhbnQoVmFsdWUubnVtYmVyKHZhbHVlKSk7XG5cdH1cblxuXHRwcml2YXRlIGdyb3VwaW5nKCk6IHZvaWQge1xuXHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdHRoaXMuY29uc3VtZShcblx0XHRcdFRva2VuVHlwZS5UT0tFTl9SSUdIVF9QQVJFTixcblx0XHRcdFwiRXhwZWN0ICcpJyBhZnRlciBleHByZXNzaW9uLlwiLFxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHVuYXJ5KCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wZXJhdG9yVHlwZTogVG9rZW5UeXBlID0gdGhpcy5wcmV2aW91cy50eXBlO1xuXG5cdFx0dGhpcy5wcmVjZWRlbmNlKFByZWNlZGVuY2UuUFJFQ19VTkFSWSk7XG5cblx0XHRzd2l0Y2ggKG9wZXJhdG9yVHlwZSkge1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fTUlOVVM6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX05FR0FURSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fQkFORzpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTk9UKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBiaW5hcnkoKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3BlcmF0b3JUeXBlOiBUb2tlblR5cGUgPSB0aGlzLnByZXZpb3VzLnR5cGU7XG5cblx0XHRjb25zdCBydWxlOiBQYXJzZVJ1bGUgPSBQYXJzZVJ1bGVzW29wZXJhdG9yVHlwZV07XG5cdFx0dGhpcy5wcmVjZWRlbmNlKHJ1bGUucHJlY2VkZW5jZSArIDEpO1xuXG5cdFx0c3dpdGNoIChvcGVyYXRvclR5cGUpIHtcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX1BMVVM6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0FERCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fTUlOVVM6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1NVQlRSQUNUKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9TVEFSOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9NVUxUSVBMWSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fU0xBU0g6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0RJVklERSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fQkFOR19FUVVBTDpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZXMoT3Bjb2RlLk9QX0VRVUFMLCBPcGNvZGUuT1BfTk9UKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9FUVVBTF9FUVVBTDpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfRVFVQUwpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX0dSRUFURVI6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0dSRUFURVIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX0dSRUFURVJfRVFVQUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGVzKE9wY29kZS5PUF9MRVNTLCBPcGNvZGUuT1BfTk9UKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9MRVNTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9MRVNTKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9MRVNTX0VRVUFMOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlcyhPcGNvZGUuT1BfR1JFQVRFUiwgT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBibG9jaygpOiB2b2lkIHtcblx0XHR3aGlsZSAoXG5cdFx0XHR0aGlzLmN1cnJlbnQudHlwZSAhPSBUb2tlblR5cGUuVE9LRU5fUklHSFRfQlJBQ0UgJiZcblx0XHRcdCF0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9FT0YpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmRlY2xhcmF0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9SSUdIVF9CUkFDRSwgXCJFeHBlY3QgJ30nIGFmdGVyIGJsb2NrLlwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgIEhFTFBFUiBGVU5DVElPTlMgRk9SIFBBUlNJTkcgJiBDT01QSUxJTkdcblx0ICogICAgICA6OnRvZG86OiBtb3ZlIHRvIHNlcGFyYXRlIGZpbGUgb3IgY2xhc3Ncblx0ICovXG5cblx0Y29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmN1cnJlbnQudHlwZSA9PSB0eXBlKSB7XG5cdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmVycm9yQXRDdXJyZW50KG1lc3NhZ2UpO1xuXHR9XG5cblx0cHJpdmF0ZSBtYXRjaCh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoISh0aGlzLmN1cnJlbnQudHlwZSA9PSB0eXBlKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRhZHZhbmNlKCk6IHZvaWQge1xuXHRcdHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG5cblx0XHRmb3IgKDsgOykge1xuXHRcdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5zY2FubmVyLnNjYW5Ub2tlbigpO1xuXHRcdFx0aWYgKHRoaXMuY3VycmVudC50eXBlICE9IFRva2VuVHlwZS5UT0tFTl9FUlJPUikgYnJlYWs7XG5cblx0XHRcdHRoaXMuZXJyb3JBdEN1cnJlbnQoJ0ludmFsaWQgdG9rZW4uJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgRVJST1IgSEFORExJTkdcblx0ICovXG5cblx0cHJpdmF0ZSBlcnJvckF0Q3VycmVudChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmVycm9yQXQodGhpcy5jdXJyZW50LCBtZXNzYWdlKTtcblx0fVxuXG5cdHByaXZhdGUgZXJyb3JBdCh0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRocm93IEVycm9yKFxuXHRcdFx0YFtsaW5lICR7dG9rZW4ubGluZX1dIEVycm9yJHt0b2tlbi50eXBlfSBhdCAke3Rva2VuLnN0cn06ICR7bWVzc2FnZX1gLFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBWQVJJQUJMRVMgJiBMT0NBTFNcblx0ICovXG5cblx0cHJpdmF0ZSBiZWdpblNjb3BlKCk6IHZvaWQge1xuXHRcdHRoaXMuc2NvcGVEZXB0aCsrO1xuXHR9XG5cblx0cHJpdmF0ZSBlbmRTY29wZSgpOiB2b2lkIHtcblx0XHR0aGlzLnNjb3BlRGVwdGgtLTtcblxuXHRcdHdoaWxlIChcblx0XHRcdHRoaXMubG9jYWxDb3VudCA+IDAgJiZcblx0XHRcdHRoaXMubG9jYWxzW3RoaXMubG9jYWxDb3VudCAtIDFdLmRlcHRoID4gdGhpcy5zY29wZURlcHRoXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QT1ApO1xuXHRcdFx0dGhpcy5sb2NhbENvdW50LS07XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkZWZpbmVWYXJpYWJsZShnbG9iYWw6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZW1pdEJ5dGVzKE9wY29kZS5PUF9ERUZJTkVfR0xPQkFMLCBnbG9iYWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVZhcmlhYmxlKGVycm9yTWVzc2FnZTogc3RyaW5nKTogbnVtYmVyIHtcblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX0lERU5USUZJRVIsIGVycm9yTWVzc2FnZSk7XG5cblx0XHR0aGlzLmRlY2xhcmVWYXJpYWJsZSgpO1xuXHRcdGlmICh0aGlzLnNjb3BlRGVwdGggPiAwKSB7XG5cdFx0XHR0aGlzLm1hcmtJbml0aWFsaXplZCgpO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuaWRlbnRpZmllckNvbnN0YW50KHRoaXMucHJldmlvdXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBtYXJrSW5pdGlhbGl6ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhbHNbdGhpcy5sb2NhbENvdW50IC0gMV0uZGVwdGggPSB0aGlzLnNjb3BlRGVwdGg7XG5cdH1cblxuXHRwcml2YXRlIGRlY2xhcmVWYXJpYWJsZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zY29wZURlcHRoID09IDApIHJldHVybjtcblxuXHRcdGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5wcmV2aW91cztcblx0XHRmb3IgKGxldCBpID0gdGhpcy5sb2NhbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IGxvY2FsOiBMb2NhbCA9IHRoaXMubG9jYWxzW2ldO1xuXHRcdFx0aWYgKGxvY2FsLmRlcHRoICE9IC0xICYmIGxvY2FsLmRlcHRoIDwgdGhpcy5zY29wZURlcHRoKSBicmVhaztcblxuXHRcdFx0aWYgKG5hbWUuc3RyID09IGxvY2FsLm5hbWUuc3RyKSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdBbHJlYWR5IHZhcmlhYmxlIHdpdGggdGhpcyBuYW1lIGluIHRoaXMgc2NvcGUuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbHMucHVzaCh7IG5hbWUsIGRlcHRoOiAtMSB9KTtcblx0fVxuXG5cdHByaXZhdGUgaWRlbnRpZmllckNvbnN0YW50KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY2h1bmsubWFrZUNvbnN0YW50KFZhbHVlLnN0cih0b2tlbi5zdHIpKTtcblx0fVxuXG5cdHByaXZhdGUgbmFtZWRWYXJpYWJsZShuYW1lOiBUb2tlbiwgY2FuQXNzaWduOiBib29sZWFuKTogdm9pZCB7XG5cdFx0bGV0IGdldE9wOiBPcGNvZGUsIHNldE9wOiBPcGNvZGU7XG5cdFx0bGV0IGFyZzogbnVtYmVyID0gdGhpcy5yZXNvbHZlTG9jYWwobmFtZSk7XG5cblx0XHRpZiAoYXJnICE9IC0xKSB7XG5cdFx0XHRnZXRPcCA9IE9wY29kZS5PUF9HRVRfTE9DQUw7XG5cdFx0XHRzZXRPcCA9IE9wY29kZS5PUF9TRVRfTE9DQUw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZyA9IHRoaXMuaWRlbnRpZmllckNvbnN0YW50KG5hbWUpO1xuXHRcdFx0Z2V0T3AgPSBPcGNvZGUuT1BfR0VUX0dMT0JBTDtcblx0XHRcdHNldE9wID0gT3Bjb2RlLk9QX1NFVF9HTE9CQUw7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbkFzc2lnbiAmJiB0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9FUVVBTCkpIHtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZXMoc2V0T3AsIGFyZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZW1pdEJ5dGVzKGdldE9wLCBhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUxvY2FsKG5hbWU6IFRva2VuKTogbnVtYmVyIHtcblx0XHRmb3IgKGxldCBpID0gdGhpcy5sb2NhbENvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IGxvY2FsOiBMb2NhbCA9IHRoaXMubG9jYWxzW2ldO1xuXHRcdFx0aWYgKG5hbWUuc3RyID09IGxvY2FsLm5hbWUuc3RyKSB7XG5cdFx0XHRcdGlmIChsb2NhbC5kZXB0aCA9PSAtMSkge1xuXHRcdFx0XHRcdHRocm93IEVycm9yKFxuXHRcdFx0XHRcdFx0J0Nhbm5vdCByZWFkIGxvY2FsIHZhcmlhYmxlIGluIGl0cyBvd24gaW5pdGlhbGl6ZXIuJyxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgIEVNSVRUSU5HIEJZVEVDT0RFIEZVTkNUSU9OU1xuXHQgKi9cblxuXHRwcml2YXRlIHBhdGNoSnVtcChvZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IGp1bXA6IG51bWJlciA9IHRoaXMuY2h1bmsuc2l6ZSAtIG9mZnNldCAtIDI7XG5cblx0XHRpZiAoanVtcCA+IDB4ZmZmZikge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ1RvbyBtdWNoIGNvZGUgdG8ganVtcCBvdmVyLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2h1bmsudmlld1tvZmZzZXRdID0gKGp1bXAgPj4gOCkgJiAweGZmO1xuXHRcdHRoaXMuY2h1bmsudmlld1tvZmZzZXQgKyAxXSA9IGp1bXAgJiAweGZmO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0TG9vcChsb29wU3RhcnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0xPT1ApO1xuXG5cdFx0Y29uc3Qgb2Zmc2V0OiBudW1iZXIgPSB0aGlzLmNodW5rLnNpemUgLSBsb29wU3RhcnQgKyAyO1xuXHRcdGlmIChvZmZzZXQgPiAweGZmZmYpIHRocm93IEVycm9yKCdMb29wIGJvZHkgdG9vIGxhcmdlLicpO1xuXG5cdFx0dGhpcy5lbWl0Qnl0ZSgob2Zmc2V0ID4+IDgpICYgMHhmZik7XG5cdFx0dGhpcy5lbWl0Qnl0ZShvZmZzZXQgJiAweGZmKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdEp1bXAob3Bjb2RlOiBPcGNvZGUpOiBudW1iZXIge1xuXHRcdHRoaXMuZW1pdEJ5dGUob3Bjb2RlKTtcblx0XHR0aGlzLmVtaXRCeXRlKDB4ZmYpO1xuXHRcdHRoaXMuZW1pdEJ5dGUoMHhmZik7XG5cdFx0cmV0dXJuIHRoaXMuY2h1bmsuc2l6ZSAtIDI7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRDb25zdGFudCh2YWx1ZTogVmFsdWUpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRCeXRlcyhPcGNvZGUuT1BfQ09OU1RBTlQsIHRoaXMuY2h1bmsubWFrZUNvbnN0YW50KHZhbHVlKSk7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRSZXR1cm4oKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUkVUVVJOKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdEJ5dGVzKGJ5dGUxOiBudW1iZXIsIGJ5dGUyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRCeXRlKGJ5dGUxKTtcblx0XHR0aGlzLmVtaXRCeXRlKGJ5dGUyKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdEJ5dGUoYnl0ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jaHVuay53cml0ZShieXRlLCB0aGlzLnByZXZpb3VzLmxpbmUpO1xuXHR9XG5cblx0LyoqXG5cdCAqICAgIENPTVBJTEVSIEVORCBGVU5DVElPTlxuXHQgKi9cblxuXHRwcml2YXRlIGVuZENvbXBpbGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdFJldHVybigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBpbGVyO1xuIiwiaW1wb3J0IHsgQ2h1bmsgfSBmcm9tICcuL2NodW5rJztcbmltcG9ydCB7IE9wY29kZSB9IGZyb20gJy4vdm0nO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYXNzZW1ibGVyIHtcblx0QFR5cGUoKCkgPT4gQ2h1bmspXG5cdHByaXZhdGUgY2h1bms6IENodW5rO1xuXG5cdGNvbnN0cnVjdG9yKGNodW5rOiBDaHVuaykge1xuXHRcdHRoaXMuY2h1bmsgPSBjaHVuaztcblx0fVxuXG5cdGRpc2Fzc2VtYmxlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGA9PSAke25hbWV9ID09YCk7XG5cdFx0Zm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgdGhpcy5jaHVuay5zaXplOykge1xuXHRcdFx0b2Zmc2V0ID0gdGhpcy5kaXNhc3NlbWJsZUluc3RydWN0aW9uKG9mZnNldCk7XG5cdFx0fVxuXHR9XG5cblx0ZGlzYXNzZW1ibGVJbnN0cnVjdGlvbihvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG5cdFx0Y29uc3QgaW5zdHJ1Y3Rpb24gPSB0aGlzLmNodW5rLmdldChvZmZzZXQpO1xuXHRcdHN3aXRjaCAoaW5zdHJ1Y3Rpb24pIHtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0NPTlNUQU5UOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdGFudEluc3RydWN0aW9uKCdPUF9DT05TVEFOVCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9ORUdBVEU6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9ORUdBVEUnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfUkVUVVJOOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfUkVUVVJOJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0FERDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0FERCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9TVUJUUkFDVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX1NVQlRSQUNUJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX01VTFRJUExZOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfTVVMVElQTFknLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfRElWSURFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfRElWSURFJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX05JTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX05JTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9UUlVFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfVFJVRScsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9GQUxTRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0ZBTFNFJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX05PVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX05PVCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9FUVVBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0VRVUFMJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dSRUFURVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9HUkVBVEVSJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xFU1M6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9MRVNTJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX1BSSU5UOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfUFJJTlQnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfUE9QOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfUE9QJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0RFRklORV9HTE9CQUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0YW50SW5zdHJ1Y3Rpb24oJ09QX0RFRklORV9HTE9CQUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfR0VUX0dMT0JBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RhbnRJbnN0cnVjdGlvbignT1BfR0VUX0dMT0JBTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9TRVRfR0xPQkFMOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdGFudEluc3RydWN0aW9uKCdPUF9TRVRfR0xPQkFMJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dFVF9MT0NBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYnl0ZUluc3RydWN0aW9uKCdPUF9HRVRfTE9DQUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfU0VUX0xPQ0FMOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ieXRlSW5zdHJ1Y3Rpb24oJ09QX1NFVF9MT0NBTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5qdW1wSW5zdHJ1Y3Rpb24oJ09QX0pVTVBfSUZfRkFMU0UnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfSlVNUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuanVtcEluc3RydWN0aW9uKCdPUF9KVU1QJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xPT1A6XG5cdFx0XHRcdHJldHVybiB0aGlzLmp1bXBJbnN0cnVjdGlvbignT1BfTE9PUCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9JTlRFUlJVUFQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJ5dGVJbnN0cnVjdGlvbignT1BfSU5URVJSVVBUJywgb2Zmc2V0KTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS5sb2coYFVua25vd24gb3Bjb2RlICR7aW5zdHJ1Y3Rpb259YCk7XG5cdFx0XHRcdHJldHVybiBvZmZzZXQgKyAxO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUganVtcEluc3RydWN0aW9uKG5hbWU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGNvbnN0IGp1bXAgPSB0aGlzLmNodW5rLmdldChvZmZzZXQgKyAxKTtcblx0XHRjb25zdCBsaW5lID0gdGhpcy5jaHVuay5nZXRMaW5lKG9mZnNldCArIDEpO1xuXHRcdHRoaXMubG9nV2l0aE9mZnNldChcblx0XHRcdG9mZnNldCxcblx0XHRcdG5hbWUgKyAnXFx0JyArIGp1bXAgKyAnXFx0XFx0KGxpbmUgJyArIGxpbmUgKyAnKScsXG5cdFx0KTtcblx0XHRyZXR1cm4gb2Zmc2V0ICsgMjtcblx0fVxuXG5cdHByaXZhdGUgYnl0ZUluc3RydWN0aW9uKG5hbWU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGNvbnN0IHNsb3QgPSB0aGlzLmNodW5rLmdldChvZmZzZXQgKyAxKTtcblx0XHR0aGlzLmxvZ1dpdGhPZmZzZXQob2Zmc2V0LCBuYW1lICsgJ1xcdCcgKyBzbG90KTtcblx0XHRyZXR1cm4gb2Zmc2V0ICsgMjtcblx0fVxuXG5cdHByaXZhdGUgbG9nV2l0aE9mZnNldChvZmZzZXQsIHJlc3QpOiB2b2lkIHtcblx0XHRsZXQgbG9nID0gb2Zmc2V0LnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgJzAnKTtcblxuXHRcdGlmIChcblx0XHRcdG9mZnNldCAhPSAwICYmXG5cdFx0XHR0aGlzLmNodW5rLmdldExpbmUob2Zmc2V0KSA9PT0gdGhpcy5jaHVuay5nZXRMaW5lKG9mZnNldCAtIDEpXG5cdFx0KSB7XG5cdFx0XHRsb2cgKz0gJ1xcdHwnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2cgKz0gYCAke3RoaXMuY2h1bmsuZ2V0TGluZShvZmZzZXQpLnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgJzAnKX1gO1xuXHRcdH1cblx0XHRsb2cgKz0gJyAnO1xuXHRcdGxvZyArPSByZXN0O1xuXHRcdGNvbnNvbGUubG9nKGxvZyk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnN0YW50SW5zdHJ1Y3Rpb24obmFtZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG5cdFx0Y29uc3QgbG9jID0gdGhpcy5jaHVuay5nZXQob2Zmc2V0ICsgMSk7XG5cdFx0Y29uc3QgY29uc3RhbnQgPSB0aGlzLmNodW5rLmdldENvbnN0YW50KGxvYyk7XG5cblx0XHR0aGlzLmxvZ1dpdGhPZmZzZXQob2Zmc2V0LCBuYW1lICsgJ1xcdCcgKyBsb2MgKyBcIidcIiArIGNvbnN0YW50ICsgXCInXCIpO1xuXG5cdFx0cmV0dXJuIG9mZnNldCArIDI7XG5cdH1cblxuXHRwcml2YXRlIHNpbXBsZUluc3RydWN0aW9uKG5hbWU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHRoaXMubG9nV2l0aE9mZnNldChvZmZzZXQsIG5hbWUpO1xuXG5cdFx0cmV0dXJuIG9mZnNldCArIDE7XG5cdH1cbn1cbiIsImltcG9ydCB7IENodW5rIH0gZnJvbSAnLi9jaHVuayc7XG5pbXBvcnQgVk0sIHsgSW50ZXJwcmV0UmVzdWx0LCBWTVN0YXR1cyB9IGZyb20gJy4vdm0nO1xuaW1wb3J0IENvbXBpbGVyIGZyb20gJy4vY29tcGlsZXInO1xuXG5jb25zdCBpbnRlcnByZXQgPSAoc291cmNlOiBzdHJpbmcpOiBJbnRlcnByZXRSZXN1bHQgPT4ge1xuXHRjb25zdCBjb21waWxlciA9IG5ldyBDb21waWxlcigpO1xuXG5cdGxldCBjaHVuazogQ2h1bms7XG5cdHRyeSB7XG5cdFx0Y2h1bmsgPSBjb21waWxlci5jb21waWxlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRkb2N1bWVudC53cml0ZSgoZSkpO1xuXHRcdHJldHVybiB7IHN0YXR1czogVk1TdGF0dXMuSU5URVJQUkVUX0NPTVBJTEVfRVJST1IsIGludGVycnVwdDogdW5kZWZpbmVkLCBzYXZlOiBcIlwiIH07XG5cdH1cblxuXHRjb25zdCB2bSA9IG5ldyBWTSh7IGRlYnVnOiB0cnVlIH0pO1xuXHR2bS5pbml0KGNodW5rKTtcblxuXHRjb25zdCByZXMgPSB2bS5ydW4oNTApO1xuXHQvKlxuXHR3aGlsZSAocmVzLnN0YXR1cyAhPT0gVk1TdGF0dXMuSU5URVJQUkVUX0lOVEVSUlVQVCkge1xuXHRcdHZtID0gcGxhaW5Ub0luc3RhbmNlKFZNLCBKU09OLnBhcnNlKHJlcy5zYXZlKSlcblxuXHRcdHJlcyA9IHZtLnJ1big1KTtcblx0fSovXG5cblx0cmV0dXJuIHJlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGludGVycHJldDsiLCJleHBvcnQgZW51bSBUb2tlblR5cGUge1xuXHQvLyBTaW5nbGUtY2hhcmFjdGVyIHRva2Vucy5cblx0VE9LRU5fTEVGVF9QQVJFTixcblx0VE9LRU5fUklHSFRfUEFSRU4sXG5cdFRPS0VOX0xFRlRfQlJBQ0UsXG5cdFRPS0VOX1JJR0hUX0JSQUNFLFxuXHRUT0tFTl9DT01NQSxcblx0VE9LRU5fRE9ULFxuXHRUT0tFTl9NSU5VUyxcblx0VE9LRU5fUExVUyxcblx0VE9LRU5fU0VNSUNPTE9OLFxuXHRUT0tFTl9TTEFTSCxcblx0VE9LRU5fU1RBUixcblx0Ly8gT25lIG9yIHR3byBjaGFyYWN0ZXIgdG9rZW5zLlxuXHRUT0tFTl9CQU5HLFxuXHRUT0tFTl9CQU5HX0VRVUFMLFxuXHRUT0tFTl9FUVVBTCxcblx0VE9LRU5fRVFVQUxfRVFVQUwsXG5cdFRPS0VOX0dSRUFURVIsXG5cdFRPS0VOX0dSRUFURVJfRVFVQUwsXG5cdFRPS0VOX0xFU1MsXG5cdFRPS0VOX0xFU1NfRVFVQUwsXG5cdC8vIExpdGVyYWxzLlxuXHRUT0tFTl9JREVOVElGSUVSLFxuXHRUT0tFTl9TVFJJTkcsXG5cdFRPS0VOX05VTUJFUixcblx0Ly8gS2V5d29yZHMuXG5cdFRPS0VOX0FORCxcblx0VE9LRU5fQ0xBU1MsXG5cdFRPS0VOX0VMU0UsXG5cdFRPS0VOX0ZBTFNFLFxuXHRUT0tFTl9GT1IsXG5cdFRPS0VOX0ZVTixcblx0VE9LRU5fSUYsXG5cdFRPS0VOX05JTCxcblx0VE9LRU5fT1IsXG5cdFRPS0VOX1BSSU5ULFxuXHRUT0tFTl9SRVRVUk4sXG5cdFRPS0VOX1NVUEVSLFxuXHRUT0tFTl9USElTLFxuXHRUT0tFTl9UUlVFLFxuXHRUT0tFTl9WQVIsXG5cdFRPS0VOX1dISUxFLFxuXHRUT0tFTl9TWVNDQUxMLFxuXHRUT0tFTl9FUlJPUixcblx0VE9LRU5fRU9GLFxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZTogVG9rZW5UeXBlO1xuXHRwdWJsaWMgcmVhZG9ubHkgc3RyOiBzdHJpbmc7XG5cdHB1YmxpYyByZWFkb25seSBsaW5lOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IodHlwZSwgc291cmNlLCBzdGFydCwgbGVuZ3RoLCBsaW5lKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnN0ciA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsIHN0YXJ0ICsgbGVuZ3RoKTtcblx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHR9XG59XG5cbmNsYXNzIFNjYW5uZXIge1xuXHRwcml2YXRlIHNvdXJjZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgc3RhcnQ6IG51bWJlcjtcblx0cHJpdmF0ZSBjdXJyZW50OiBudW1iZXI7XG5cblx0cHJpdmF0ZSBsaW5lOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLmxpbmUgPSAxO1xuXG5cdFx0dGhpcy5zdGFydCA9IDA7XG5cdFx0dGhpcy5jdXJyZW50ID0gMDtcblx0fVxuXG5cdHNjYW4oKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zID0gW107XG5cdFx0d2hpbGUgKCF0aGlzLmF0VGhlRW5kKCkpIHtcblx0XHRcdHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG5cdFx0XHR0b2tlbnMucHVzaCh0aGlzLnNjYW5Ub2tlbigpKTtcblx0XHR9XG5cblx0XHR0b2tlbnMucHVzaChcblx0XHRcdG5ldyBUb2tlbihcblx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX0VPRixcblx0XHRcdFx0dGhpcy5zb3VyY2UsXG5cdFx0XHRcdHRoaXMuY3VycmVudCxcblx0XHRcdFx0MCxcblx0XHRcdFx0dGhpcy5saW5lLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdHJldHVybiB0b2tlbnM7XG5cdH1cblxuXHRzY2FuVG9rZW4oKTogVG9rZW4ge1xuXHRcdHRoaXMuc2tpcFdoaXRlc3BhY2UoKTtcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5jdXJyZW50O1xuXG5cdFx0aWYgKHRoaXMuYXRUaGVFbmQoKSkgcmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9FT0YpO1xuXG5cdFx0Y29uc3QgYyA9IHRoaXMuYWR2YW5jZSgpO1xuXHRcdGlmICh0aGlzLmlzRGlnaXQoYykpIHJldHVybiB0aGlzLm51bWJlcigpO1xuXHRcdGlmICh0aGlzLmlzQWxwaGEoYykpIHJldHVybiB0aGlzLmlkZW50aWZpZXIoKTtcblxuXHRcdHN3aXRjaCAoYykge1xuXHRcdFx0Y2FzZSAnKCc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fTEVGVF9QQVJFTik7XG5cdFx0XHRjYXNlICcpJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9SSUdIVF9QQVJFTik7XG5cdFx0XHRjYXNlICd7Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9MRUZUX0JSQUNFKTtcblx0XHRcdGNhc2UgJ30nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1JJR0hUX0JSQUNFKTtcblx0XHRcdGNhc2UgJzsnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1NFTUlDT0xPTik7XG5cdFx0XHRjYXNlICcsJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9DT01NQSk7XG5cdFx0XHRjYXNlICcuJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9ET1QpO1xuXHRcdFx0Y2FzZSAnLSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fTUlOVVMpO1xuXHRcdFx0Y2FzZSAnKyc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fUExVUyk7XG5cdFx0XHRjYXNlICcvJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9TTEFTSCk7XG5cdFx0XHRjYXNlICcqJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9TVEFSKTtcblx0XHRcdGNhc2UgJyEnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oXG5cdFx0XHRcdFx0dGhpcy5tYXRjaCgnPScpXG5cdFx0XHRcdFx0XHQ/IFRva2VuVHlwZS5UT0tFTl9CQU5HX0VRVUFMXG5cdFx0XHRcdFx0XHQ6IFRva2VuVHlwZS5UT0tFTl9CQU5HLFxuXHRcdFx0XHQpO1xuXHRcdFx0Y2FzZSAnPSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihcblx0XHRcdFx0XHR0aGlzLm1hdGNoKCc9Jylcblx0XHRcdFx0XHRcdD8gVG9rZW5UeXBlLlRPS0VOX0VRVUFMX0VRVUFMXG5cdFx0XHRcdFx0XHQ6IFRva2VuVHlwZS5UT0tFTl9FUVVBTCxcblx0XHRcdFx0KTtcblx0XHRcdGNhc2UgJzwnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oXG5cdFx0XHRcdFx0dGhpcy5tYXRjaCgnPScpXG5cdFx0XHRcdFx0XHQ/IFRva2VuVHlwZS5UT0tFTl9MRVNTX0VRVUFMXG5cdFx0XHRcdFx0XHQ6IFRva2VuVHlwZS5UT0tFTl9MRVNTLFxuXHRcdFx0XHQpO1xuXHRcdFx0Y2FzZSAnPic6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihcblx0XHRcdFx0XHR0aGlzLm1hdGNoKCc9Jylcblx0XHRcdFx0XHRcdD8gVG9rZW5UeXBlLlRPS0VOX0dSRUFURVJfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0dSRUFURVIsXG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICdcIic6XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVycm9yVG9rZW4oJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyLicpO1xuXHR9XG5cblx0cHJpdmF0ZSBudW1iZXIoKTogVG9rZW4ge1xuXHRcdHdoaWxlICh0aGlzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB0aGlzLmFkdmFuY2UoKTtcblxuXHRcdGlmICh0aGlzLnBlZWsoKSA9PSAnLicgJiYgdGhpcy5pc0RpZ2l0KHRoaXMucGVla05leHQoKSkpIHtcblx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXG5cdFx0XHR3aGlsZSAodGhpcy5pc0RpZ2l0KHRoaXMucGVlaygpKSkgdGhpcy5hZHZhbmNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9OVU1CRVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBpZGVudGlmaWVyKCk6IFRva2VuIHtcblx0XHR3aGlsZSAodGhpcy5pc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHRoaXMuYWR2YW5jZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKHRoaXMuaWRlbnRpZmllclR5cGUoKSk7XG5cdH1cblxuXHRwcml2YXRlIGlkZW50aWZpZXJUeXBlKCk6IFRva2VuVHlwZSB7XG5cdFx0c3dpdGNoICh0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5zdGFydCkpIHtcblx0XHRcdGNhc2UgJ2EnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgMiwgJ25kJywgVG9rZW5UeXBlLlRPS0VOX0FORCk7XG5cdFx0XHRjYXNlICdjJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDQsICdsYXNzJywgVG9rZW5UeXBlLlRPS0VOX0NMQVNTKTtcblx0XHRcdGNhc2UgJ2UnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgMywgJ2xzZScsIFRva2VuVHlwZS5UT0tFTl9FTFNFKTtcblx0XHRcdGNhc2UgJ2YnOlxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydCA+IDEpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLnN0YXJ0ICsgMSkpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2EnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoXG5cdFx0XHRcdFx0XHRcdFx0Mixcblx0XHRcdFx0XHRcdFx0XHQzLFxuXHRcdFx0XHRcdFx0XHRcdCdsc2UnLFxuXHRcdFx0XHRcdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9GQUxTRSxcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNhc2UgJ28nOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoXG5cdFx0XHRcdFx0XHRcdFx0Mixcblx0XHRcdFx0XHRcdFx0XHQxLFxuXHRcdFx0XHRcdFx0XHRcdCdyJyxcblx0XHRcdFx0XHRcdFx0XHRUb2tlblR5cGUuVE9LRU5fRk9SLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y2FzZSAndSc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDEsXG5cdFx0XHRcdFx0XHRcdFx0J24nLFxuXHRcdFx0XHRcdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9GVU4sXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAxLCAnZicsIFRva2VuVHlwZS5UT0tFTl9JRik7XG5cdFx0XHRjYXNlICduJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDIsICdpbCcsIFRva2VuVHlwZS5UT0tFTl9OSUwpO1xuXHRcdFx0Y2FzZSAnbyc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAxLCAncicsIFRva2VuVHlwZS5UT0tFTl9PUik7XG5cdFx0XHRjYXNlICdwJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDQsICdyaW50JywgVG9rZW5UeXBlLlRPS0VOX1BSSU5UKTtcblx0XHRcdGNhc2UgJ3InOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNSwgJ2V0dXJuJywgVG9rZW5UeXBlLlRPS0VOX1JFVFVSTik7XG5cdFx0XHRjYXNlICdzJzpcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnQgPiAxKSB7XG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5zdGFydCArIDEpKSB7XG5cdFx0XHRcdFx0XHRjYXNlICd1Jzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDQsICd1cGVyJywgVG9rZW5UeXBlLlRPS0VOX1NVUEVSKTtcblx0XHRcdFx0XHRcdGNhc2UgJ3knOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNiwgJ3lzY2FsbCcsIFRva2VuVHlwZS5UT0tFTl9TWVNDQUxMKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0Jzpcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnQgPiAxKSB7XG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5zdGFydCArIDEpKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdoJzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKFxuXHRcdFx0XHRcdFx0XHRcdDIsXG5cdFx0XHRcdFx0XHRcdFx0Mixcblx0XHRcdFx0XHRcdFx0XHQnaXMnLFxuXHRcdFx0XHRcdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9USElTLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y2FzZSAncic6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDIsXG5cdFx0XHRcdFx0XHRcdFx0J3VlJyxcblx0XHRcdFx0XHRcdFx0XHRUb2tlblR5cGUuVE9LRU5fVFJVRSxcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDIsICdldCcsIFRva2VuVHlwZS5UT0tFTl9WQVIpO1xuXHRcdFx0Y2FzZSAndyc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCA0LCAnaGlsZScsIFRva2VuVHlwZS5UT0tFTl9XSElMRSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFRva2VuVHlwZS5UT0tFTl9JREVOVElGSUVSO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0tleXdvcmQoXG5cdFx0c3RhcnQ6IG51bWJlcixcblx0XHRsZW5ndGg6IG51bWJlcixcblx0XHRyZXN0OiBzdHJpbmcsXG5cdFx0dHlwZTogVG9rZW5UeXBlLFxuXHQpOiBUb2tlblR5cGUge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnQgPT0gc3RhcnQgKyBsZW5ndGggJiZcblx0XHRcdHRoaXMuc291cmNlLnN1YnN0cih0aGlzLnN0YXJ0ICsgc3RhcnQsIGxlbmd0aCkgPT0gcmVzdFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFRva2VuVHlwZS5UT0tFTl9JREVOVElGSUVSO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0FscGhhKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAoYyA+PSAnYScgJiYgYyA8PSAneicpIHx8IChjID49ICdBJyAmJiBjIDw9ICdaJykgfHwgYyA9PSAnXyc7XG5cdH1cblxuXHRwcml2YXRlIGlzQWxwaGFOdW1lcmljKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWxwaGEoYykgfHwgdGhpcy5pc0RpZ2l0KGMpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0RpZ2l0KGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjID49ICcwJyAmJiBjIDw9ICc5Jztcblx0fVxuXG5cdHByaXZhdGUgc3RyaW5nKCk6IFRva2VuIHtcblx0XHR3aGlsZSAodGhpcy5wZWVrKCkgIT0gJ1wiJyAmJiAhdGhpcy5hdFRoZUVuZCgpKSB7XG5cdFx0XHRpZiAodGhpcy5wZWVrKCkgPT0gJ1xcbicpIHRoaXMubGluZSsrO1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYXRUaGVFbmQoKSkgcmV0dXJuIHRoaXMuZXJyb3JUb2tlbignVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcblxuXHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fU1RSSU5HKTtcblx0fVxuXG5cdHByaXZhdGUgc2tpcFdoaXRlc3BhY2UoKTogdm9pZCB7XG5cdFx0Zm9yICg7IDspIHtcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnBlZWsoKTtcblx0XHRcdHN3aXRjaCAoYykge1xuXHRcdFx0XHRjYXNlICcgJzpcblx0XHRcdFx0Y2FzZSAnXFxyJzpcblx0XHRcdFx0Y2FzZSAnXFx0Jzpcblx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnXFxuJzpcblx0XHRcdFx0XHR0aGlzLmxpbmUrKztcblx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnLyc6XG5cdFx0XHRcdFx0aWYgKHRoaXMucGVla05leHQoKSA9PSAnLycpIHtcblx0XHRcdFx0XHRcdHdoaWxlICh0aGlzLnBlZWsoKSAhPSAnXFxuJyAmJiAhdGhpcy5hdFRoZUVuZCgpKVxuXHRcdFx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwZWVrTmV4dCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkgcmV0dXJuICdcXDAnO1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XG5cdH1cblxuXHRwcml2YXRlIHBlZWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XG5cdH1cblxuXHRwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5hdFRoZUVuZCgpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9IGV4cGVjdGVkKSByZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLmN1cnJlbnQrKztcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGFkdmFuY2UoKTogc3RyaW5nIHtcblx0XHR0aGlzLmN1cnJlbnQrKztcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCAtIDEpO1xuXHR9XG5cblx0cHJpdmF0ZSBhdFRoZUVuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcblx0fVxuXG5cdHByaXZhdGUgbWFrZVRva2VuKHR5cGU6IFRva2VuVHlwZSk6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFxuXHRcdFx0dHlwZSxcblx0XHRcdHRoaXMuc291cmNlLFxuXHRcdFx0dGhpcy5zdGFydCxcblx0XHRcdHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnQsXG5cdFx0XHR0aGlzLmxpbmUsXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZXJyb3JUb2tlbihtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihcblx0XHRcdFRva2VuVHlwZS5UT0tFTl9FUlJPUixcblx0XHRcdHRoaXMuc291cmNlLFxuXHRcdFx0MCxcblx0XHRcdG1lc3NhZ2UubGVuZ3RoLFxuXHRcdFx0dGhpcy5saW5lLFxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nhbm5lcjtcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tIFwiY2xhc3MtdHJhbnNmb3JtZXJcIjtcblxuZXhwb3J0IGVudW0gVmFsdWVUeXBlIHtcblx0VkFMX0JPT0wsXG5cdFZBTF9OSUwsXG5cdFZBTF9OVU1CRVIsXG5cdFZBTF9PQkosXG5cdFZBTF9TVFIsXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPYmoge1xuXHRhYnN0cmFjdCB0b1N0cmluZygpOiBzdHJpbmc7XG5cdGFic3RyYWN0IHRvSlNPTigpOiBvYmplY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbHVlIHtcblx0cHVibGljIHJlYWRvbmx5IHR5cGU6IFZhbHVlVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IF9udW1iZXI6IG51bWJlcjtcblxuXHRAVHlwZSgoKSA9PiBPYmopXG5cdHByaXZhdGUgcmVhZG9ubHkgX29iajogT2JqO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX3N0cjogc3RyaW5nO1xuXG5cdHN0YXRpYyByZWFkb25seSBUWVBFX1ZBTFVFX0ZJRUxEX01BUCA9IHtcblx0XHRbVmFsdWVUeXBlLlZBTF9CT09MXTogJ2Jvb2wnLFxuXHRcdFtWYWx1ZVR5cGUuVkFMX05JTF06ICduaWwnLFxuXHRcdFtWYWx1ZVR5cGUuVkFMX05VTUJFUl06ICdudW1iZXInLFxuXHRcdFtWYWx1ZVR5cGUuVkFMX09CSl06ICdvYmonLFxuXHRcdFtWYWx1ZVR5cGUuVkFMX1NUUl06ICdzdHInLFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFZhbHVlVHlwZSwgbnVtYmVyID0gMCwgb2JqID0gbnVsbCwgc3RyID0gbnVsbCkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5fbnVtYmVyID0gbnVtYmVyO1xuXHRcdHRoaXMuX29iaiA9IG9iajtcblx0XHR0aGlzLl9zdHIgPSBzdHI7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBTVEFUSUMgQ09OU1RSVUNUT1JTXG5cdCAqL1xuXG5cdHN0YXRpYyBudW1iZXIodmFsdWU6IG51bWJlcik6IFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKFZhbHVlVHlwZS5WQUxfTlVNQkVSLCB2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgYm9vbCh2YWx1ZTogYm9vbGVhbik6IFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKFZhbHVlVHlwZS5WQUxfQk9PTCwgdmFsdWUgPyAxIDogMCk7XG5cdH1cblxuXHRzdGF0aWMgbmlsKCk6IFZhbHVlIHtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKFZhbHVlVHlwZS5WQUxfTklMLCAwKTtcblx0fVxuXG5cdHN0YXRpYyBzdHIoc3RyOiBzdHJpbmcpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZShWYWx1ZVR5cGUuVkFMX1NUUiwgMCwgbnVsbCwgc3RyKTtcblx0fVxuXG5cdHN0YXRpYyBvYmoob2JqOiBPYmopOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZShWYWx1ZVR5cGUuVkFMX09CSiwgMCwgb2JqKTtcblx0fVxuXG5cdHN0YXRpYyBmcm9tSlNPTihqc29uOiBvYmplY3QpOiBWYWx1ZSB7XG5cdFx0Y29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0ganNvbiBhcyBhbnk7XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9CT09MOlxuXHRcdFx0XHRyZXR1cm4gVmFsdWUuYm9vbCh2YWx1ZSk7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfTklMOlxuXHRcdFx0XHRyZXR1cm4gVmFsdWUubmlsKCk7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gVmFsdWUubnVtYmVyKHZhbHVlKTtcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9PQko6XG5cdFx0XHRcdHJldHVybiBWYWx1ZS5vYmoodmFsdWUpO1xuXHRcdFx0Y2FzZSBWYWx1ZVR5cGUuVkFMX1NUUjpcblx0XHRcdFx0cmV0dXJuIFZhbHVlLnN0cih2YWx1ZSk7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSB0eXBlLicpO1xuXHR9XG5cblx0Z2V0IG51bWJlcigpOiBudW1iZXIge1xuXHRcdGlmICh0aGlzLnR5cGUgIT09IFZhbHVlVHlwZS5WQUxfTlVNQkVSKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWYWx1ZSBpcyBub3QgYSBudW1iZXIuJyk7XG5cdFx0cmV0dXJuIHRoaXMuX251bWJlcjtcblx0fVxuXG5cdGdldCBib29sKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnR5cGUgIT09IFZhbHVlVHlwZS5WQUxfQk9PTClcblx0XHRcdHRocm93IG5ldyBFcnJvcignVmFsdWUgaXMgbm90IGEgYm9vbGVhbi4nKTtcblxuXHRcdHJldHVybiB0aGlzLl9udW1iZXIgPT09IDE7XG5cdH1cblxuXHRnZXQgb2JqKCk6IE9iaiB7XG5cdFx0aWYgKHRoaXMudHlwZSAhPT0gVmFsdWVUeXBlLlZBTF9PQkopXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIGlzIG5vdCBhbiBvYmplY3QuJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5fb2JqO1xuXHR9XG5cblx0Z2V0IHN0cigpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnR5cGUgIT09IFZhbHVlVHlwZS5WQUxfU1RSKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWYWx1ZSBpcyBub3QgYSBzdHJpbmcuJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5fc3RyO1xuXHR9XG5cblx0LyoqXG5cdCAqICAgICBVVElMSVRZIE1FVEhPRFMgOiBDT01QQVJJU09OLCBUWVBFIENIRUNLSU5HLCBFVEMuXG5cdCAqL1xuXG5cdGlzKHZhbHVlVHlwZTogVmFsdWVUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSA9PT0gdmFsdWVUeXBlO1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0c3dpdGNoICh0aGlzLnR5cGUpIHtcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9CT09MOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbnVtYmVyID09PSAxID8gJ3RydWUnIDogJ2ZhbHNlJztcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9OSUw6XG5cdFx0XHRcdHJldHVybiAnbmlsJztcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLl9udW1iZXIgKyAnJztcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9PQko6XG5cdFx0XHRcdHJldHVybiB0aGlzLl9vYmoudG9TdHJpbmcoKTtcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9TVFI6XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zdHI7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGVxdWFsc1RvKG90aGVyOiBWYWx1ZSk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnR5cGUgIT09IG90aGVyLnR5cGUpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gdGhpcy5udW1iZXIgPT09IG90aGVyLm51bWJlcjtcblx0fVxuXG5cdHB1YmxpYyB0b0pTT04oKTogb2JqZWN0IHtcblx0XHRjb25zdCBmaWVsZCA9IFZhbHVlLlRZUEVfVkFMVUVfRklFTERfTUFQW3RoaXMudHlwZV07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0dmFsdWU6IHRoaXNbZmllbGRdXG5cdFx0fTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2h1bmsgfSBmcm9tICcuL2NodW5rJztcbmltcG9ydCBEaXNhc3NlbWJsZXIgZnJvbSAnLi9kaXNhc3NlbWJsZXInO1xuaW1wb3J0IFZhbHVlLCB7IFZhbHVlVHlwZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IFR5cGUsIHNlcmlhbGl6ZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGVudW0gT3Bjb2RlIHtcblx0T1BfQ09OU1RBTlQsXG5cdE9QX05JTCxcblx0T1BfVFJVRSxcblx0T1BfRkFMU0UsXG5cdE9QX0FERCxcblx0T1BfU1VCVFJBQ1QsXG5cdE9QX01VTFRJUExZLFxuXHRPUF9ESVZJREUsXG5cdE9QX05FR0FURSxcblx0T1BfUkVUVVJOLFxuXHRPUF9OT1QsXG5cdE9QX0VRVUFMLFxuXHRPUF9HUkVBVEVSLFxuXHRPUF9MRVNTLFxuXHRPUF9QUklOVCxcblx0T1BfUE9QLFxuXHRPUF9ERUZJTkVfR0xPQkFMLFxuXHRPUF9HRVRfR0xPQkFMLFxuXHRPUF9TRVRfR0xPQkFMLFxuXHRPUF9HRVRfTE9DQUwsXG5cdE9QX1NFVF9MT0NBTCxcblx0T1BfSlVNUF9JRl9GQUxTRSxcblx0T1BfSlVNUCxcblx0T1BfTE9PUCxcblx0T1BfSU5URVJSVVBUXG59XG5cbmV4cG9ydCBlbnVtIFZNU3RhdHVzIHtcblx0SU5URVJQUkVUX0ZSRUVaRSxcblx0SU5URVJQUkVUX0lOVEVSUlVQVCxcblx0SU5URVJQUkVUX09LLFxuXHRJTlRFUlBSRVRfQ09NUElMRV9FUlJPUixcblx0SU5URVJQUkVUX1JVTlRJTUVfRVJST1IsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJwcmV0UmVzdWx0IHtcblx0c3RhdHVzOiBWTVN0YXR1cztcblx0aW50ZXJydXB0OiB7XG5cdFx0Y29kZTogc3RyaW5nO1xuXHRcdGFyZzogVmFsdWU7XG5cdH0gfCB1bmRlZmluZWQ7XG5cdHNhdmU6IHN0cmluZztcbn1cblxuY2xhc3MgVk0ge1xuXHRAVHlwZSgoKSA9PiBDaHVuaylcblx0cHJpdmF0ZSBjaHVuazogQ2h1bms7XG5cblx0cHJpdmF0ZSBpcCA9IDA7XG5cdHByaXZhdGUgZGVidWc6IGJvb2xlYW47XG5cblx0QFR5cGUoKCkgPT4gRGlzYXNzZW1ibGVyKVxuXHRwcml2YXRlIGRpc3NhbWJsZXI6IERpc2Fzc2VtYmxlcjtcblxuXHRAVHlwZSgoKSA9PiBWYWx1ZSlcblx0cHJpdmF0ZSBzdGFjazogVmFsdWVbXTtcblxuXHRAVHlwZSgoKSA9PiBWYWx1ZSlcblx0cHJpdmF0ZSBnbG9iYWxzOiBNYXA8c3RyaW5nLCBWYWx1ZT47XG5cblx0Y29uc3RydWN0b3Ioe1xuXHRcdGRlYnVnID0gZmFsc2UsXG5cdH06IHtcblx0XHRkZWJ1Zz86IGJvb2xlYW47XG5cdH0gPSB7fSkge1xuXHRcdHRoaXMuZGVidWcgPSBkZWJ1ZztcblxuXHRcdHRoaXMuc3RhY2sgPSBbXTtcblx0XHR0aGlzLmdsb2JhbHMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRpbml0KGNodW5rKTogdm9pZCB7XG5cdFx0dGhpcy5jaHVuayA9IGNodW5rO1xuXHRcdHRoaXMuaXAgPSAwO1xuXHRcdHRoaXMuZGlzc2FtYmxlciA9IG5ldyBEaXNhc3NlbWJsZXIoY2h1bmspO1xuXHR9XG5cblx0cHVibGljIHJ1bihudW1JbnN0cnVjdGlvbnMgPSAxKTogSW50ZXJwcmV0UmVzdWx0IHtcblx0XHRjb25zdCBzdGFydElwID0gdGhpcy5pcDtcblx0XHRjb25zdCBlbmRJcCA9IHN0YXJ0SXAgKyBudW1JbnN0cnVjdGlvbnM7XG5cblx0XHR3aGlsZSAodGhpcy5pcCA8IGVuZElwKSB7XG5cdFx0XHRjb25zdCBpbnN0cnVjdGlvbiA9IHRoaXMucmVhZEJ5dGUoKTtcblxuXHRcdFx0Ly8gVGhpcyBwYXJ0IHNob3VsZCBiZSBvcHRpbWl6ZWQuXG5cdFx0XHRpZiAodGhpcy5kZWJ1Zykge1xuXHRcdFx0XHR0aGlzLnN0YWNrLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYCAgICAgICAgICBbICR7dmFsdWUudG9TdHJpbmcoKX0gXWApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5kaXNzYW1ibGVyLmRpc2Fzc2VtYmxlSW5zdHJ1Y3Rpb24odGhpcy5pcCAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKGluc3RydWN0aW9uKSB7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1JFVFVSTjpcblx0XHRcdFx0XHRyZXR1cm4geyBzdGF0dXM6IFZNU3RhdHVzLklOVEVSUFJFVF9PSywgaW50ZXJydXB0OiB1bmRlZmluZWQsIHNhdmU6IHRoaXMuZ2V0U2F2ZSgpIH07XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX05FR0FURTpcblx0XHRcdFx0XHRpZiAoIXRoaXMucGVlaygpLmlzKFZhbHVlVHlwZS5WQUxfTlVNQkVSKSlcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignT3BlcmFuZCBtdXN0IGJlIGEgbnVtYmVyLicpO1xuXG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcigtdGhpcy5wb3AoKS5udW1iZXIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfQUREOiB7XG5cdFx0XHRcdFx0Y29uc3QgYiA9IHRoaXMucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IHRoaXMucG9wKCk7XG5cblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRhLmlzKFZhbHVlVHlwZS5WQUxfTlVNQkVSKSAmJlxuXHRcdFx0XHRcdFx0Yi5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUilcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5udW1iZXIoYS5udW1iZXIgKyBiLm51bWJlcikpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRhLmlzKFZhbHVlVHlwZS5WQUxfT0JKKSAmJlxuXHRcdFx0XHRcdFx0Yi5pcyhWYWx1ZVR5cGUuVkFMX09CSilcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRoaXMucHVzaChcblx0XHRcdFx0XHRcdFx0VmFsdWUuc3RyKFxuXHRcdFx0XHRcdFx0XHRcdGEudG9TdHJpbmcoKSArIGIudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0J09wZXJhbmRzIG11c3QgYmUgdHdvIG51bWJlcnMgb3IgdHdvIHN0cmluZ3MuJyxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1NVQlRSQUNUOlxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9NVUxUSVBMWTpcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfRElWSURFOlxuXHRcdFx0XHRcdHRoaXMuYmluYXJ5T3AoaW5zdHJ1Y3Rpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9DT05TVEFOVDoge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnN0YW50ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaCh0aGlzLmNodW5rLmdldENvbnN0YW50KGNvbnN0YW50KSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfTklMOlxuXHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5uaWwoKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1RSVUU6XG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2wodHJ1ZSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9GQUxTRTpcblx0XHRcdFx0XHR0aGlzLnB1c2goVmFsdWUuYm9vbChmYWxzZSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9OT1Q6XG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2wodGhpcy5pc0ZhbHNleSh0aGlzLnBvcCgpKSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9FUVVBTDoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5ib29sKGEuZXF1YWxzVG8oYikpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9HUkVBVEVSOlxuXHRcdFx0XHRcdHRoaXMuYmluYXJ5T3AoaW5zdHJ1Y3Rpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9MRVNTOlxuXHRcdFx0XHRcdHRoaXMuYmluYXJ5T3AoaW5zdHJ1Y3Rpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9QUklOVDoge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1BPUDpcblx0XHRcdFx0XHR0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9ERUZJTkVfR0xPQkFMOiB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IChcblx0XHRcdFx0XHRcdHRoaXMuY2h1bmsuZ2V0Q29uc3RhbnQodGhpcy5yZWFkQnl0ZSgpKVxuXHRcdFx0XHRcdCkuc3RyO1xuXHRcdFx0XHRcdHRoaXMuZ2xvYmFscy5zZXQobmFtZSwgdGhpcy5wb3AoKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfR0VUX0dMT0JBTDoge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSAoXG5cdFx0XHRcdFx0XHR0aGlzLmNodW5rLmdldENvbnN0YW50KHRoaXMucmVhZEJ5dGUoKSkuc3RyXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2xvYmFscy5nZXQobmFtZSk7XG5cblx0XHRcdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAnJHtuYW1lfScuYCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfU0VUX0dMT0JBTDoge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSAoXG5cdFx0XHRcdFx0XHR0aGlzLmNodW5rLmdldENvbnN0YW50KHRoaXMucmVhZEJ5dGUoKSkuc3RyXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoIXRoaXMuZ2xvYmFscy5nZXQobmFtZSkpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICcke25hbWV9Jy5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmdsb2JhbHMuc2V0KG5hbWUsIHRoaXMucGVlaygpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9HRVRfTE9DQUw6IHtcblx0XHRcdFx0XHRjb25zdCBzbG90ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMucHVzaCh0aGlzLnN0YWNrW3Nsb3RdKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9TRVRfTE9DQUw6IHtcblx0XHRcdFx0XHRjb25zdCBzbG90ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2tbc2xvdF0gPSB0aGlzLnBlZWsoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0ZhbHNleSh0aGlzLnBlZWsoKSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXAgKz0gb2Zmc2V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHR0aGlzLmlwICs9IG9mZnNldDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9MT09QOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHR0aGlzLmlwIC09IG9mZnNldDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9JTlRFUlJVUFQ6IHtcblx0XHRcdFx0XHRjb25zdCBhcmcgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGludGVycnVwdENvZGUgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRzdGF0dXM6IFZNU3RhdHVzLklOVEVSUFJFVF9JTlRFUlJVUFQsXG5cdFx0XHRcdFx0XHRzYXZlOiB0aGlzLmdldFNhdmUoKSxcblx0XHRcdFx0XHRcdGludGVycnVwdDoge1xuXHRcdFx0XHRcdFx0XHRjb2RlOiBpbnRlcnJ1cHRDb2RlLnN0cixcblx0XHRcdFx0XHRcdFx0YXJnOiBhcmdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgc3RhdHVzOiB0aGlzLmlwIDwgZW5kSXAgPyBWTVN0YXR1cy5JTlRFUlBSRVRfRlJFRVpFIDogVk1TdGF0dXMuSU5URVJQUkVUX09LLCBpbnRlcnJ1cHQ6IHVuZGVmaW5lZCwgc2F2ZTogdGhpcy5nZXRTYXZlKCkgfTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZEJ5dGUoKTogbnVtYmVyIHtcblx0XHRjb25zdCBieXRlID0gdGhpcy5jaHVuay5nZXQodGhpcy5pcCk7XG5cdFx0dGhpcy5pcCsrO1xuXHRcdHJldHVybiBieXRlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkU2hvcnQoKTogbnVtYmVyIHtcblx0XHRjb25zdCBieXRlMSA9IHRoaXMucmVhZEJ5dGUoKTtcblx0XHRjb25zdCBieXRlMiA9IHRoaXMucmVhZEJ5dGUoKTtcblx0XHRyZXR1cm4gKGJ5dGUxIDw8IDgpIHwgYnl0ZTI7XG5cdH1cblxuXHRwcml2YXRlIGlzRmFsc2V5KHZhbHVlOiBWYWx1ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHR2YWx1ZS5pcyhWYWx1ZVR5cGUuVkFMX05JTCkgfHxcblx0XHRcdCF2YWx1ZS5ib29sXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgYmluYXJ5T3Aob3A6IE9wY29kZSk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wZWVrKCkuaXMoVmFsdWVUeXBlLlZBTF9OVU1CRVIpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPcGVyYW5kIG11c3QgYmUgYSBudW1iZXIuJyk7XG5cblx0XHRjb25zdCBiID0gdGhpcy5wb3AoKTtcblxuXHRcdGlmICghdGhpcy5wZWVrKCkuaXMoVmFsdWVUeXBlLlZBTF9OVU1CRVIpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPcGVyYW5kIG11c3QgYmUgYSBudW1iZXIuJyk7XG5cblx0XHRjb25zdCBhID0gdGhpcy5wb3AoKTtcblxuXHRcdHN3aXRjaCAob3ApIHtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0FERDpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcihhLm51bWJlciArIGIubnVtYmVyKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfU1VCVFJBQ1Q6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5udW1iZXIoYS5udW1iZXIgLSBiLm51bWJlcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX01VTFRJUExZOlxuXHRcdFx0XHR0aGlzLnB1c2goVmFsdWUubnVtYmVyKGEubnVtYmVyICogYi5udW1iZXIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9ESVZJREU6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5udW1iZXIoYS5udW1iZXIgLyBiLm51bWJlcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dSRUFURVI6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5ib29sKGEubnVtYmVyID4gYi5udW1iZXIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9MRVNTOlxuXHRcdFx0XHR0aGlzLnB1c2goVmFsdWUuYm9vbChhLm51bWJlciA8IGIubnVtYmVyKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgIFNUQUNLIE9QRVJBVElPTlNcblx0ICovXG5cblx0cHJpdmF0ZSBwdXNoKHZhbHVlOiBWYWx1ZSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhY2sucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHBvcCgpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhY2sucG9wKCk7XG5cdH1cblxuXHRwcml2YXRlIHBlZWsoKTogVmFsdWUge1xuXHRcdHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHQvKipcblx0ICogTUlTQ1xuXHQgKi9cblxuXHRwcml2YXRlIGdldFNhdmUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZSh0aGlzKSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVk07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdlczYtc2hpbSc7XG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnXG5pbXBvcnQgaW50ZXJwcmV0IGZyb20gJy4vaW50ZXJwcmV0JztcblxuaW1wb3J0IFZNLCB7IFZNU3RhdHVzIH0gZnJvbSAnLi92bSc7XG5cbmltcG9ydCB7IHBsYWluVG9JbnN0YW5jZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcblxuY29uc3QgYmVnaW4gPSAoc291cmNlQ29kZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cbiAgICBjb25zdCBfID0gYFxuICAgIHN5c2NhbGwgXCJpcy53b3JrZmxvdy5hY3Rpb25zLnNob3dyZXN1bHRcIiwgXCJhc2Rhc1wiO1xuICAgIFxuICAgIGxldCBpID0gMDsgXG4gICAgZm9yKGxldCBqPTA7IGo8MTsgaj1qKzEpe1xuICAgICAgICB3aGlsZShpPCAxMDApIFxuICAgICAgICAgICAgaSA9IGkgKyAxOyAgICAgICAgIFxuICAgIH1cbiAgICBzeXNjYWxsIFwiaXMud29ya2Zsb3cuYWN0aW9ucy5za2lwZm9yd2FyZFwiO1xuICAgIGA7XG5cbiAgICAvL2NvbnNvbGUubG9nKGVuY29kZVVSSUNvbXBvbmVudChfKSk7XG5cbiAgICBjb25zdCBzb3VyY2UgPSBfIC8vc291cmNlQ29kZTsgLy9zb3VyY2VDb2RlO1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHNvdXJjZSBjb2RlIGZvdW5kIGluIHF1ZXJ5IHBhcmFtcy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGludGVycHJldChzb3VyY2UpO1xuXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBkb2N1bWVudC53cml0ZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbn07XG5cbmNvbnN0IHJlc3VtZSA9IChzYXZlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB2bSA9IHBsYWluVG9JbnN0YW5jZShWTSwgSlNPTi5wYXJzZShzYXZlKSk7XG5cbiAgICBjb25zdCByZXMgPSB2bS5ydW4oNTApO1xuXG4gICAgZG9jdW1lbnQud3JpdGUoSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbn07XG5cbigoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAgIGNvbnN0IHN0YXRlID0gcGFyYW1zLmdldCgncmVzdW1lJyk7XG4gICAgY29uc3Qgc291cmNlQ29kZSA9IHBhcmFtcy5nZXQoJ2JlZ2luJyk7XG5cbiAgICB0cnkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHJlc3VtZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlQ29kZSkge1xuICAgICAgICAgICAgYmVnaW4oZGVjb2RlVVJJQ29tcG9uZW50KHNvdXJjZUNvZGUpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9