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
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "../node_modules/class-transformer/esm5/index.js");



const interpret = (source) => {
    const compiler = new _compiler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let chunk;
    try {
        chunk = compiler.compile(source);
    }
    catch (e) {
        return { status: _vm__WEBPACK_IMPORTED_MODULE_0__.VMStatus.INTERPRET_COMPILE_ERROR, interrupt: undefined, save: "" };
    }
    let vm = new _vm__WEBPACK_IMPORTED_MODULE_0__["default"]({ debug: true });
    let res = vm.initAndRun(chunk);
    while (res.status !== _vm__WEBPACK_IMPORTED_MODULE_0__.VMStatus.INTERPRET_INTERRUPT) {
        console.log(JSON.parse(res.save));
        vm = (0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.plainToInstance)(_vm__WEBPACK_IMPORTED_MODULE_0__["default"], JSON.parse(res.save));
        res = vm.run(5);
    }
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
    stack;
    globals;
    constructor({ debug = false, } = {}) {
        this.debug = debug;
        this.stack = [];
        this.globals = new Map();
    }
    initAndRun(chunk) {
        this.chunk = chunk;
        this.ip = 0;
        this.dissambler = new _disassembler__WEBPACK_IMPORTED_MODULE_1__["default"](chunk);
        return this.run(3);
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
                    return { status: VMStatus.INTERPRET_OK, interrupt: undefined, save: (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.serialize)(this) };
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
                    const interruptCode = this.pop();
                    return {
                        status: VMStatus.INTERPRET_INTERRUPT,
                        save: (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.serialize)(this),
                        interrupt: {
                            code: interruptCode.str,
                            args: []
                        }
                    };
                }
            }
        }
        return { status: VMStatus.INTERPRET_OK, interrupt: undefined, save: (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.serialize)(this) };
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




const begin = (sourceCode) => {
    const _ = `
        if(false)
            syscall "is.workflow.actions.pausemusic";
        
        let i = 10;
        while(i>5)
            i = i - 1;

        syscall "is.workflow.actions.showresult";
    `;
    console.log(encodeURIComponent(_));
    const source = _; //sourceCode;
    if (!source) {
        console.log('No source code found in query params.');
        return;
    }
    const { status, interrupt, save } = (0,_interpret__WEBPACK_IMPORTED_MODULE_2__["default"])(source);
    if (status === _vm__WEBPACK_IMPORTED_MODULE_3__.VMStatus.INTERPRET_INTERRUPT) {
        document.write(save);
    }
};
const resume = (state) => {
    /*const vm = VM.load(state);

    if (!source) {
        console.log('No source code found in query params.');
        return;
    }

    const { status, interrupt, save } = interpret(source);*/
};
(() => {
    const params = new URLSearchParams(window.location.search);
    const state = params.get('resume');
    const sourceCode = params.get('begin');
    if (state) {
        resume(state);
    }
    else if (sourceCode) {
        begin(sourceCode);
    }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNkNBQTZDLHVCQUF1QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7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QUNBLHVDQUF1QztBQUN2QztBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7O0FBRXRCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLHNCQUFzQjtBQUMvSCxTQUFTOztBQUVUO0FBQ0EsMENBQTBDO0FBQzFDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFD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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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eEMsd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx1QkFBdUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMEJBQTBCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtB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QUc7Ozs7Ozs7OztLQVNULENBQUM7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYTtJQUUvQixJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELE9BQU87S0FDVjtJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLHNEQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdEQsSUFBSSxNQUFNLEtBQUsseUNBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUN6QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTtJQUNuQzs7Ozs7Ozs0REFPd0Q7QUFDNUQsQ0FBQyxDQUFDO0FBRUYsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV2QyxJQUFJLEtBQUssRUFBRTtRQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQjtTQUNJLElBQUksVUFBVSxFQUFFO1FBQ2pCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNyQjtBQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvQ2xhc3NUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvTWV0YWRhdGFTdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9UcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvY29uc3RhbnRzL2RlZmF1bHQtb3B0aW9ucy5jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvZGVjb3JhdG9ycy9leGNsdWRlLmRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvZGVjb3JhdG9ycy9leHBvc2UuZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9kZWNvcmF0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9kZWNvcmF0b3JzL3RyYW5zZm9ybS1pbnN0YW5jZS10by1pbnN0YW5jZS5kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2RlY29yYXRvcnMvdHJhbnNmb3JtLWluc3RhbmNlLXRvLXBsYWluLmRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXRyYW5zZm9ybWVyL2VzbTUvZGVjb3JhdG9ycy90cmFuc2Zvcm0tcGxhaW4tdG8taW5zdGFuY2UuZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9kZWNvcmF0b3JzL3RyYW5zZm9ybS5kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2RlY29yYXRvcnMvdHlwZS5kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2VudW1zL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9lbnVtcy90cmFuc2Zvcm1hdGlvbi10eXBlLmVudW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdHJhbnNmb3JtZXIvZXNtNS91dGlscy9nZXQtZ2xvYmFsLnV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzcy10cmFuc2Zvcm1lci9lc201L3V0aWxzL2lzLXByb21pc2UudXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2VzNi1zaGltL2VzNi1zaGltLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIiwid2VicGFjazovLy8uL2NodW5rLnRzIiwid2VicGFjazovLy8uL2NvbXBpbGVyLnRzIiwid2VicGFjazovLy8uL2Rpc2Fzc2VtYmxlci50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcnByZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc2Nhbm5lci50cyIsIndlYnBhY2s6Ly8vLi92YWx1ZS50cyIsIndlYnBhY2s6Ly8vLi92bS50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3dlYnBvcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yIH0gZnJvbSAnLi9UcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm1hdGlvblR5cGUgfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdC1vcHRpb25zLmNvbnN0YW50JztcbnZhciBDbGFzc1RyYW5zZm9ybWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsYXNzVHJhbnNmb3JtZXIoKSB7XG4gICAgfVxuICAgIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLmluc3RhbmNlVG9QbGFpbiA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGV4ZWN1dG9yID0gbmV3IFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yKFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19QTEFJTiwgX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gZXhlY3V0b3IudHJhbnNmb3JtKHVuZGVmaW5lZCwgb2JqZWN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIH07XG4gICAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuY2xhc3NUb1BsYWluRnJvbUV4aXN0ID0gZnVuY3Rpb24gKG9iamVjdCwgcGxhaW5PYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGV4ZWN1dG9yID0gbmV3IFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yKFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19QTEFJTiwgX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gZXhlY3V0b3IudHJhbnNmb3JtKHBsYWluT2JqZWN0LCBvYmplY3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wbGFpblRvSW5zdGFuY2UgPSBmdW5jdGlvbiAoY2xzLCBwbGFpbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZXhlY3V0b3IgPSBuZXcgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IoVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiBleGVjdXRvci50cmFuc2Zvcm0odW5kZWZpbmVkLCBwbGFpbiwgY2xzLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLnBsYWluVG9DbGFzc0Zyb21FeGlzdCA9IGZ1bmN0aW9uIChjbHNPYmplY3QsIHBsYWluLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBleGVjdXRvciA9IG5ldyBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcihUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dG9yLnRyYW5zZm9ybShjbHNPYmplY3QsIHBsYWluLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIH07XG4gICAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuaW5zdGFuY2VUb0luc3RhbmNlID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZXhlY3V0b3IgPSBuZXcgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IoVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiBleGVjdXRvci50cmFuc2Zvcm0odW5kZWZpbmVkLCBvYmplY3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5jbGFzc1RvQ2xhc3NGcm9tRXhpc3QgPSBmdW5jdGlvbiAob2JqZWN0LCBmcm9tT2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBleGVjdXRvciA9IG5ldyBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcihUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dG9yLnRyYW5zZm9ybShmcm9tT2JqZWN0LCBvYmplY3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbiAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmluc3RhbmNlVG9QbGFpbihvYmplY3QsIG9wdGlvbnMpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyBnaXZlbiBKU09OIHN0cmluZyB0byBhIG9iamVjdCBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAgICovXG4gICAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuZGVzZXJpYWxpemUgPSBmdW5jdGlvbiAoY2xzLCBqc29uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBqc29uT2JqZWN0ID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhaW5Ub0luc3RhbmNlKGNscywganNvbk9iamVjdCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgZ2l2ZW4gSlNPTiBzdHJpbmcgdG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAgICovXG4gICAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuZGVzZXJpYWxpemVBcnJheSA9IGZ1bmN0aW9uIChjbHMsIGpzb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGpzb25PYmplY3QgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFpblRvSW5zdGFuY2UoY2xzLCBqc29uT2JqZWN0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBDbGFzc1RyYW5zZm9ybWVyO1xufSgpKTtcbmV4cG9ydCB7IENsYXNzVHJhbnNmb3JtZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsYXNzVHJhbnNmb3JtZXIuanMubWFwIiwiaW1wb3J0IHsgVHJhbnNmb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9lbnVtcyc7XG4vKipcbiAqIFN0b3JhZ2UgYWxsIGxpYnJhcnkgbWV0YWRhdGEuXG4gKi9cbnZhciBNZXRhZGF0YVN0b3JhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWV0YWRhdGFTdG9yYWdlKCkge1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFByb3BlcnRpZXNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLl90eXBlTWV0YWRhdGFzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl90cmFuc2Zvcm1NZXRhZGF0YXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX2V4cG9zZU1ldGFkYXRhcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fZXhjbHVkZU1ldGFkYXRhcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fYW5jZXN0b3JzTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQWRkZXIgTWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmFkZFR5cGVNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuX3R5cGVNZXRhZGF0YXMuaGFzKG1ldGFkYXRhLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3R5cGVNZXRhZGF0YXMuc2V0KG1ldGFkYXRhLnRhcmdldCwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90eXBlTWV0YWRhdGFzLmdldChtZXRhZGF0YS50YXJnZXQpLnNldChtZXRhZGF0YS5wcm9wZXJ0eU5hbWUsIG1ldGFkYXRhKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuYWRkVHJhbnNmb3JtTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2Zvcm1NZXRhZGF0YXMuaGFzKG1ldGFkYXRhLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybU1ldGFkYXRhcy5zZXQobWV0YWRhdGEudGFyZ2V0LCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNmb3JtTWV0YWRhdGFzLmdldChtZXRhZGF0YS50YXJnZXQpLmhhcyhtZXRhZGF0YS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm1NZXRhZGF0YXMuZ2V0KG1ldGFkYXRhLnRhcmdldCkuc2V0KG1ldGFkYXRhLnByb3BlcnR5TmFtZSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybU1ldGFkYXRhcy5nZXQobWV0YWRhdGEudGFyZ2V0KS5nZXQobWV0YWRhdGEucHJvcGVydHlOYW1lKS5wdXNoKG1ldGFkYXRhKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuYWRkRXhwb3NlTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9leHBvc2VNZXRhZGF0YXMuaGFzKG1ldGFkYXRhLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cG9zZU1ldGFkYXRhcy5zZXQobWV0YWRhdGEudGFyZ2V0LCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2V4cG9zZU1ldGFkYXRhcy5nZXQobWV0YWRhdGEudGFyZ2V0KS5zZXQobWV0YWRhdGEucHJvcGVydHlOYW1lLCBtZXRhZGF0YSk7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmFkZEV4Y2x1ZGVNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuX2V4Y2x1ZGVNZXRhZGF0YXMuaGFzKG1ldGFkYXRhLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4Y2x1ZGVNZXRhZGF0YXMuc2V0KG1ldGFkYXRhLnRhcmdldCwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9leGNsdWRlTWV0YWRhdGFzLmdldChtZXRhZGF0YS50YXJnZXQpLnNldChtZXRhZGF0YS5wcm9wZXJ0eU5hbWUsIG1ldGFkYXRhKTtcbiAgICB9O1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmZpbmRUcmFuc2Zvcm1NZXRhZGF0YXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIHRyYW5zZm9ybWF0aW9uVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kTWV0YWRhdGFzKHRoaXMuX3RyYW5zZm9ybU1ldGFkYXRhcywgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpLmZpbHRlcihmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGEub3B0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5vcHRpb25zLnRvQ2xhc3NPbmx5ID09PSB0cnVlICYmIG1ldGFkYXRhLm9wdGlvbnMudG9QbGFpbk9ubHkgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEub3B0aW9ucy50b0NsYXNzT25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MgfHxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm9wdGlvbnMudG9QbGFpbk9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fUExBSU47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmZpbmRFeGNsdWRlTWV0YWRhdGEgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZE1ldGFkYXRhKHRoaXMuX2V4Y2x1ZGVNZXRhZGF0YXMsIHRhcmdldCwgcHJvcGVydHlOYW1lKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZmluZEV4cG9zZU1ldGFkYXRhID0gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRNZXRhZGF0YSh0aGlzLl9leHBvc2VNZXRhZGF0YXMsIHRhcmdldCwgcHJvcGVydHlOYW1lKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZmluZEV4cG9zZU1ldGFkYXRhQnlDdXN0b21OYW1lID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeHBvc2VkTWV0YWRhdGFzKHRhcmdldCkuZmluZChmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YS5vcHRpb25zICYmIG1ldGFkYXRhLm9wdGlvbnMubmFtZSA9PT0gbmFtZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmZpbmRUeXBlTWV0YWRhdGEgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZE1ldGFkYXRhKHRoaXMuX3R5cGVNZXRhZGF0YXMsIHRhcmdldCwgcHJvcGVydHlOYW1lKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZ2V0U3RyYXRlZ3kgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBleGNsdWRlTWFwID0gdGhpcy5fZXhjbHVkZU1ldGFkYXRhcy5nZXQodGFyZ2V0KTtcbiAgICAgICAgdmFyIGV4Y2x1ZGUgPSBleGNsdWRlTWFwICYmIGV4Y2x1ZGVNYXAuZ2V0KHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciBleHBvc2VNYXAgPSB0aGlzLl9leHBvc2VNZXRhZGF0YXMuZ2V0KHRhcmdldCk7XG4gICAgICAgIHZhciBleHBvc2UgPSBleHBvc2VNYXAgJiYgZXhwb3NlTWFwLmdldCh1bmRlZmluZWQpO1xuICAgICAgICBpZiAoKGV4Y2x1ZGUgJiYgZXhwb3NlKSB8fCAoIWV4Y2x1ZGUgJiYgIWV4cG9zZSkpXG4gICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xuICAgICAgICByZXR1cm4gZXhjbHVkZSA/ICdleGNsdWRlQWxsJyA6ICdleHBvc2VBbGwnO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRFeHBvc2VkTWV0YWRhdGFzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSh0aGlzLl9leHBvc2VNZXRhZGF0YXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmdldEV4Y2x1ZGVkTWV0YWRhdGFzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSh0aGlzLl9leGNsdWRlTWV0YWRhdGFzLCB0YXJnZXQpO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXRFeHBvc2VkUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRyYW5zZm9ybWF0aW9uVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeHBvc2VkTWV0YWRhdGFzKHRhcmdldClcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIW1ldGFkYXRhLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEub3B0aW9ucy50b0NsYXNzT25seSA9PT0gdHJ1ZSAmJiBtZXRhZGF0YS5vcHRpb25zLnRvUGxhaW5Pbmx5ID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm9wdGlvbnMudG9DbGFzc09ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTIHx8XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5vcHRpb25zLnRvUGxhaW5Pbmx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtZXRhZGF0YSkgeyByZXR1cm4gbWV0YWRhdGEucHJvcGVydHlOYW1lOyB9KTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZ2V0RXhjbHVkZWRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRhcmdldCwgdHJhbnNmb3JtYXRpb25UeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2x1ZGVkTWV0YWRhdGFzKHRhcmdldClcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIW1ldGFkYXRhLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEub3B0aW9ucy50b0NsYXNzT25seSA9PT0gdHJ1ZSAmJiBtZXRhZGF0YS5vcHRpb25zLnRvUGxhaW5Pbmx5ID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm9wdGlvbnMudG9DbGFzc09ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTIHx8XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5vcHRpb25zLnRvUGxhaW5Pbmx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtZXRhZGF0YSkgeyByZXR1cm4gbWV0YWRhdGEucHJvcGVydHlOYW1lOyB9KTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3R5cGVNZXRhZGF0YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fZXhwb3NlTWV0YWRhdGFzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2V4Y2x1ZGVNZXRhZGF0YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fYW5jZXN0b3JzTWFwLmNsZWFyKCk7XG4gICAgfTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZ2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhRnJvbVRhcmdldE1hcCA9IG1ldGFkYXRhcy5nZXQodGFyZ2V0KTtcbiAgICAgICAgdmFyIG1ldGFkYXRhRnJvbVRhcmdldDtcbiAgICAgICAgaWYgKG1ldGFkYXRhRnJvbVRhcmdldE1hcCkge1xuICAgICAgICAgICAgbWV0YWRhdGFGcm9tVGFyZ2V0ID0gQXJyYXkuZnJvbShtZXRhZGF0YUZyb21UYXJnZXRNYXAudmFsdWVzKCkpLmZpbHRlcihmdW5jdGlvbiAobWV0YSkgeyByZXR1cm4gbWV0YS5wcm9wZXJ0eU5hbWUgIT09IHVuZGVmaW5lZDsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1ldGFkYXRhRnJvbUFuY2VzdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5nZXRBbmNlc3RvcnModGFyZ2V0KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBhbmNlc3RvciA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBhbmNlc3Rvck1ldGFkYXRhTWFwID0gbWV0YWRhdGFzLmdldChhbmNlc3Rvcik7XG4gICAgICAgICAgICBpZiAoYW5jZXN0b3JNZXRhZGF0YU1hcCkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhZGF0YUZyb21BbmNlc3RvciA9IEFycmF5LmZyb20oYW5jZXN0b3JNZXRhZGF0YU1hcC52YWx1ZXMoKSkuZmlsdGVyKGZ1bmN0aW9uIChtZXRhKSB7IHJldHVybiBtZXRhLnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkOyB9KTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YUZyb21BbmNlc3RvcnMucHVzaC5hcHBseShtZXRhZGF0YUZyb21BbmNlc3RvcnMsIG1ldGFkYXRhRnJvbUFuY2VzdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YWRhdGFGcm9tQW5jZXN0b3JzLmNvbmNhdChtZXRhZGF0YUZyb21UYXJnZXQgfHwgW10pO1xuICAgIH07XG4gICAgTWV0YWRhdGFTdG9yYWdlLnByb3RvdHlwZS5maW5kTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFzLCB0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tVGFyZ2V0TWFwID0gbWV0YWRhdGFzLmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAobWV0YWRhdGFGcm9tVGFyZ2V0TWFwKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFGcm9tVGFyZ2V0ID0gbWV0YWRhdGFGcm9tVGFyZ2V0TWFwLmdldChwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhRnJvbVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YUZyb21UYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZ2V0QW5jZXN0b3JzKHRhcmdldCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgYW5jZXN0b3IgPSBfYVtfaV07XG4gICAgICAgICAgICB2YXIgYW5jZXN0b3JNZXRhZGF0YU1hcCA9IG1ldGFkYXRhcy5nZXQoYW5jZXN0b3IpO1xuICAgICAgICAgICAgaWYgKGFuY2VzdG9yTWV0YWRhdGFNYXApIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5jZXN0b3JSZXN1bHQgPSBhbmNlc3Rvck1ldGFkYXRhTWFwLmdldChwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChhbmNlc3RvclJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5jZXN0b3JSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBNZXRhZGF0YVN0b3JhZ2UucHJvdG90eXBlLmZpbmRNZXRhZGF0YXMgPSBmdW5jdGlvbiAobWV0YWRhdGFzLCB0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tVGFyZ2V0TWFwID0gbWV0YWRhdGFzLmdldCh0YXJnZXQpO1xuICAgICAgICB2YXIgbWV0YWRhdGFGcm9tVGFyZ2V0O1xuICAgICAgICBpZiAobWV0YWRhdGFGcm9tVGFyZ2V0TWFwKSB7XG4gICAgICAgICAgICBtZXRhZGF0YUZyb21UYXJnZXQgPSBtZXRhZGF0YUZyb21UYXJnZXRNYXAuZ2V0KHByb3BlcnR5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1ldGFkYXRhRnJvbUFuY2VzdG9yc1RhcmdldCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5nZXRBbmNlc3RvcnModGFyZ2V0KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBhbmNlc3RvciA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBhbmNlc3Rvck1ldGFkYXRhTWFwID0gbWV0YWRhdGFzLmdldChhbmNlc3Rvcik7XG4gICAgICAgICAgICBpZiAoYW5jZXN0b3JNZXRhZGF0YU1hcCkge1xuICAgICAgICAgICAgICAgIGlmIChhbmNlc3Rvck1ldGFkYXRhTWFwLmhhcyhwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhRnJvbUFuY2VzdG9yc1RhcmdldC5wdXNoLmFwcGx5KG1ldGFkYXRhRnJvbUFuY2VzdG9yc1RhcmdldCwgYW5jZXN0b3JNZXRhZGF0YU1hcC5nZXQocHJvcGVydHlOYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhZGF0YUZyb21BbmNlc3RvcnNUYXJnZXRcbiAgICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAuY29uY2F0KChtZXRhZGF0YUZyb21UYXJnZXQgfHwgW10pLnNsaWNlKCkucmV2ZXJzZSgpKTtcbiAgICB9O1xuICAgIE1ldGFkYXRhU3RvcmFnZS5wcm90b3R5cGUuZ2V0QW5jZXN0b3JzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgaWYgKCF0aGlzLl9hbmNlc3RvcnNNYXAuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHZhciBhbmNlc3RvcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yKTsgdHlwZW9mIGJhc2VDbGFzcy5wcm90b3R5cGUgIT09ICd1bmRlZmluZWQnOyBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZUNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgICAgICBhbmNlc3RvcnMucHVzaChiYXNlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYW5jZXN0b3JzTWFwLnNldCh0YXJnZXQsIGFuY2VzdG9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2VzdG9yc01hcC5nZXQodGFyZ2V0KTtcbiAgICB9O1xuICAgIHJldHVybiBNZXRhZGF0YVN0b3JhZ2U7XG59KCkpO1xuZXhwb3J0IHsgTWV0YWRhdGFTdG9yYWdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NZXRhZGF0YVN0b3JhZ2UuanMubWFwIiwidmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IHsgZGVmYXVsdE1ldGFkYXRhU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm1hdGlvblR5cGUgfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7IGdldEdsb2JhbCwgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscyc7XG5mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5VHlwZShhcnJheVR5cGUpIHtcbiAgICB2YXIgYXJyYXkgPSBuZXcgYXJyYXlUeXBlKCk7XG4gICAgaWYgKCEoYXJyYXkgaW5zdGFuY2VvZiBTZXQpICYmICEoJ3B1c2gnIGluIGFycmF5KSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbnZhciBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IodHJhbnNmb3JtYXRpb25UeXBlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRpb25UeXBlID0gdHJhbnNmb3JtYXRpb25UeXBlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFByaXZhdGUgUHJvcGVydGllc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMucmVjdXJzaW9uU3RhY2sgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHNvdXJjZSwgdmFsdWUsIHRhcmdldFR5cGUsIGFycmF5VHlwZSwgaXNNYXAsIGxldmVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChsZXZlbCA9PT0gdm9pZCAwKSB7IGxldmVsID0gMDsgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZV8xID0gYXJyYXlUeXBlICYmIHRoaXMudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1NcbiAgICAgICAgICAgICAgICA/IGluc3RhbnRpYXRlQXJyYXlUeXBlKGFycmF5VHlwZSlcbiAgICAgICAgICAgICAgICA6IFtdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoc3ViVmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YlNvdXJjZSA9IHNvdXJjZSA/IHNvdXJjZVtpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmVuYWJsZUNpcmN1bGFyQ2hlY2sgfHwgIV90aGlzLmlzQ2lyY3VsYXIoc3ViVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFsVGFyZ2V0VHlwZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRUeXBlICE9PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUeXBlLm9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFR5cGUub3B0aW9ucy5kaXNjcmltaW5hdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VHlwZS5vcHRpb25zLmRpc2NyaW1pbmF0b3Iuc3ViVHlwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxUYXJnZXRUeXBlID0gdGFyZ2V0VHlwZS5vcHRpb25zLmRpc2NyaW1pbmF0b3Iuc3ViVHlwZXMuZmluZChmdW5jdGlvbiAoc3ViVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViVHlwZS5uYW1lID09PSBzdWJWYWx1ZVt0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IG5ld09iamVjdDogbmV3VmFsdWVfMSwgb2JqZWN0OiBzdWJWYWx1ZSwgcHJvcGVydHk6IHVuZGVmaW5lZCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdUeXBlID0gdGFyZ2V0VHlwZS50eXBlRnVuY3Rpb24ob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFRhcmdldFR5cGUgPT09IHVuZGVmaW5lZCA/IChyZWFsVGFyZ2V0VHlwZSA9IG5ld1R5cGUpIDogKHJlYWxUYXJnZXRUeXBlID0gcmVhbFRhcmdldFR5cGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VHlwZS5vcHRpb25zLmtlZXBEaXNjcmltaW5hdG9yUHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJWYWx1ZVt0YXJnZXRUeXBlLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVGFyZ2V0VHlwZSA9IHN1YlZhbHVlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWVbdGFyZ2V0VHlwZS5vcHRpb25zLmRpc2NyaW1pbmF0b3IucHJvcGVydHldID0gdGFyZ2V0VHlwZS5vcHRpb25zLmRpc2NyaW1pbmF0b3Iuc3ViVHlwZXMuZmluZChmdW5jdGlvbiAoc3ViVHlwZSkgeyByZXR1cm4gc3ViVHlwZS52YWx1ZSA9PT0gc3ViVmFsdWUuY29uc3RydWN0b3I7IH0pLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsVGFyZ2V0VHlwZSA9IHRhcmdldFR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlXzEgPSBfdGhpcy50cmFuc2Zvcm0oc3ViU291cmNlLCBzdWJWYWx1ZSwgcmVhbFRhcmdldFR5cGUsIHVuZGVmaW5lZCwgc3ViVmFsdWUgaW5zdGFuY2VvZiBNYXAsIGxldmVsICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZV8xIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZV8xLmFkZCh2YWx1ZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlXzEucHVzaCh2YWx1ZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWVfMSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVfMS5hZGQoc3ViVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVfMS5wdXNoKHN1YlZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlXzE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gU3RyaW5nICYmICFpc01hcCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gTnVtYmVyICYmICFpc01hcCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gQm9vbGVhbiAmJiAhaXNNYXApIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGFyZ2V0VHlwZSA9PT0gRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICFpc01hcCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghIWdldEdsb2JhbCgpLkJ1ZmZlciAmJiAodGFyZ2V0VHlwZSA9PT0gQnVmZmVyIHx8IHZhbHVlIGluc3RhbmNlb2YgQnVmZmVyKSAmJiAhaXNNYXApIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKHZhbHVlKSAmJiAhaXNNYXApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gcmVzb2x2ZShfdGhpcy50cmFuc2Zvcm0odW5kZWZpbmVkLCBkYXRhLCB0YXJnZXRUeXBlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbGV2ZWwgKyAxKSk7IH0sIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNNYXAgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gTm90ZTogV2Ugc2hvdWxkIG5vdCBlbnRlciB0aGlzLCBhcyBwcm9taXNlIGhhcyBiZWVuIGhhbmRsZWQgYWJvdmVcbiAgICAgICAgICAgIC8vIFRoaXMgb3B0aW9uIHNpbXBseSByZXR1cm5zIHRoZSBQcm9taXNlIHByZXZlbnRpbmcgYSBKUyBlcnJvciBmcm9tIGhhcHBlbmluZyBhbmQgc2hvdWxkIGJlIGFuIGluYWNjZXNzaWJsZSBwYXRoLlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlOyAvLyBza2lwIHByb21pc2UgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0cnkgdG8gZ3Vlc3MgdGhlIHR5cGVcbiAgICAgICAgICAgIGlmICghdGFyZ2V0VHlwZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0IC8qICYmIFRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOKi8pXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZWJvZHkgYXR0ZW1wdHMgdG8gY29udmVydCBzcGVjaWFsIEFycmF5IGxpa2Ugb2JqZWN0IHRvIEFycmF5LCBlZzpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZXZpbE9iamVjdCA9IHsgJzEwMDAwMDAwMCc6ICcxMDAwMDAwMDAnLCBfX3Byb3RvX186IFtdIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY291bGQgYmUgdXNlZCB0byBjYXVzZSBEZW5pYWwtb2Ytc2VydmljZSBhdHRhY2sgc28gd2UgZG9uJ3QgYWxsb3cgaXQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBwcmV2ZW50LWFycmF5LWJvbWIuc3BlYy50cyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIGdvb2Qgd2UgY2FuIHVzZSB0aGUgYnVpbHQtaW4gY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VHlwZSA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGFyZ2V0VHlwZSAmJiBzb3VyY2UpXG4gICAgICAgICAgICAgICAgdGFyZ2V0VHlwZSA9IHNvdXJjZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlQ2lyY3VsYXJDaGVjaykge1xuICAgICAgICAgICAgICAgIC8vIGFkZCB0cmFuc2Zvcm1lZCB0eXBlIHRvIHByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdXJzaW9uU3RhY2suYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5nZXRLZXlzKHRhcmdldFR5cGUsIHZhbHVlLCBpc01hcCk7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBzb3VyY2UgPyBzb3VyY2UgOiB7fTtcbiAgICAgICAgICAgIGlmICghc291cmNlICYmXG4gICAgICAgICAgICAgICAgKHRoaXMudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXcgdGFyZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJyB8fCBrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlS2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZUtleSA9IGtleSwgcHJvcGVydHlOYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIGlmICghdGhpc18xLm9wdGlvbnMuaWdub3JlRGVjb3JhdG9ycyAmJiB0YXJnZXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBvc2VNZXRhZGF0YSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZEV4cG9zZU1ldGFkYXRhQnlDdXN0b21OYW1lKHRhcmdldFR5cGUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwb3NlTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBleHBvc2VNZXRhZGF0YS5wcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVLZXkgPSBleHBvc2VNZXRhZGF0YS5wcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBvc2VNZXRhZGF0YSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZEV4cG9zZU1ldGFkYXRhKHRhcmdldFR5cGUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwb3NlTWV0YWRhdGEgJiYgZXhwb3NlTWV0YWRhdGEub3B0aW9ucyAmJiBleHBvc2VNZXRhZGF0YS5vcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZUtleSA9IGV4cG9zZU1ldGFkYXRhLm9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBnZXQgYSBzdWJ2YWx1ZVxuICAgICAgICAgICAgICAgIHZhciBzdWJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIHNlY3Rpb24gaXMgYWRkZWQgZm9yIHRoZSBmb2xsb3dpbmcgcmVwb3J0OlxuICAgICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vdHlwZXN0YWNrL2NsYXNzLXRyYW5zZm9ybWVyL2lzc3Vlcy81OTZcbiAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICogV2Ugc2hvdWxkIG5vdCBjYWxsIGZ1bmN0aW9ucyBvciBjb25zdHJ1Y3RvcnMgd2hlbiB0cmFuc2Zvcm1pbmcgdG8gY2xhc3MuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IHZhbHVlW3ZhbHVlS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSB2YWx1ZS5nZXQodmFsdWVLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlW3ZhbHVlS2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IHZhbHVlW3ZhbHVlS2V5XSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGEgdHlwZVxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdW5kZWZpbmVkLCBpc1N1YlZhbHVlTWFwID0gc3ViVmFsdWUgaW5zdGFuY2VvZiBNYXA7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFR5cGUgJiYgaXNNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHRhcmdldFR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGFkYXRhXzEgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmZpbmRUeXBlTWV0YWRhdGEodGFyZ2V0VHlwZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFkYXRhXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0geyBuZXdPYmplY3Q6IG5ld1ZhbHVlLCBvYmplY3Q6IHZhbHVlLCBwcm9wZXJ0eTogcHJvcGVydHlOYW1lIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VHlwZSA9IG1ldGFkYXRhXzEudHlwZUZ1bmN0aW9uID8gbWV0YWRhdGFfMS50eXBlRnVuY3Rpb24ob3B0aW9ucykgOiBtZXRhZGF0YV8xLnJlZmxlY3RlZFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YWRhdGFfMS5vcHRpb25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhXzEub3B0aW9ucy5kaXNjcmltaW5hdG9yLnN1YlR5cGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodmFsdWVbdmFsdWVLZXldIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBtZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvci5zdWJUeXBlcy5maW5kKGZ1bmN0aW9uIChzdWJUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YlZhbHVlICYmIHN1YlZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIG1ldGFkYXRhXzEub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5IGluIHN1YlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJUeXBlLm5hbWUgPT09IHN1YlZhbHVlW21ldGFkYXRhXzEub3B0aW9ucy5kaXNjcmltaW5hdG9yLnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IHVuZGVmaW5lZCA/ICh0eXBlID0gbmV3VHlwZSkgOiAodHlwZSA9IHR5cGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXRhZGF0YV8xLm9wdGlvbnMua2VlcERpc2NyaW1pbmF0b3JQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJWYWx1ZSAmJiBzdWJWYWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiBtZXRhZGF0YV8xLm9wdGlvbnMuZGlzY3JpbWluYXRvci5wcm9wZXJ0eSBpbiBzdWJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3ViVmFsdWVbbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3IucHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX0NMQVNTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gc3ViVmFsdWUuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19QTEFJTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWVbbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3IucHJvcGVydHldID0gbWV0YWRhdGFfMS5vcHRpb25zLmRpc2NyaW1pbmF0b3Iuc3ViVHlwZXMuZmluZChmdW5jdGlvbiAoc3ViVHlwZSkgeyByZXR1cm4gc3ViVHlwZS52YWx1ZSA9PT0gc3ViVmFsdWUuY29uc3RydWN0b3I7IH0pLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBtZXRhZGF0YV8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBuZXdUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdWJWYWx1ZU1hcCA9IGlzU3ViVmFsdWVNYXAgfHwgbWV0YWRhdGFfMS5yZWZsZWN0ZWRUeXBlID09PSBNYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpc18xLm9wdGlvbnMudGFyZ2V0TWFwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgYSB0eXBlIGluIHRhcmdldCBtYXBzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEub3B0aW9ucy50YXJnZXRNYXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFwKSB7IHJldHVybiBtYXAudGFyZ2V0ID09PSB0YXJnZXRUeXBlICYmICEhbWFwLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobWFwKSB7IHJldHVybiAodHlwZSA9IG1hcC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzXzEub3B0aW9ucy5lbmFibGVJbXBsaWNpdENvbnZlcnNpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBubyByZWdpc3RlcmVyZCB0eXBlIHZpYSB0aGUgQFR5cGUoKSBkZWNvcmF0b3IgdGhlbiB3ZSBjaGVjayBpZiB3ZSBoYXZlIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZSBkZWNsYXJhdGlvbnMgaW4gcmVmbGVjdC1tZXRhZGF0YSAodHlwZSBkZWNsYXJhdGlvbiBpcyBlbWl0ZWQgb25seSBpZiBzb21lIGRlY29yYXRvciBpcyBhZGRlZCB0byB0aGUgcHJvcGVydHkuKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZmxlY3RlZFR5cGUgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldFR5cGUucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZmxlY3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gcmVmbGVjdGVkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhbiBhcnJheSB0cnkgdG8gZ2V0IGl0cyBjdXN0b20gYXJyYXkgdHlwZVxuICAgICAgICAgICAgICAgIHZhciBhcnJheVR5cGVfMSA9IEFycmF5LmlzQXJyYXkodmFsdWVbdmFsdWVLZXldKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXNfMS5nZXRSZWZsZWN0ZWRUeXBlKHRhcmdldFR5cGUsIHByb3BlcnR5TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc3ViVmFsdWVLZXkgPSBUcmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5QTEFJTl9UT19DTEFTUyAmJiBuZXdLZXlOYW1lID8gbmV3S2V5TmFtZSA6IGtleTtcbiAgICAgICAgICAgICAgICB2YXIgc3ViU291cmNlID0gc291cmNlID8gc291cmNlW3ZhbHVlS2V5XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdHMgZGVzZXJpYWxpemF0aW9uIHRoZW4gdHlwZSBpZiByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIHVuY29tbWVudCB0aGlzIHR5cGVzIGxpa2Ugc3RyaW5nW10gd2lsbCBub3Qgd29ya1xuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTICYmICF0eXBlICYmIHN1YlZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEoc3ViVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSlcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHR5cGUgZm9yICR7KHRhcmdldFR5cGUgYXMgYW55KS5uYW1lIH0uJHtwcm9wZXJ0eU5hbWV9LCBkaWQgeW91IGZvcmdldCB0byBzcGVjaWZ5IGEgQFR5cGU/YCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbmV3VmFsdWUgaXMgYSBzb3VyY2Ugb2JqZWN0IHRoYXQgaGFzIG1ldGhvZCB0aGF0IG1hdGNoIG5ld0tleU5hbWUgdGhlbiBza2lwIGl0XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV3VmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlLCBuZXdWYWx1ZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuQ0xBU1NfVE9fQ0xBU1MpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3Iuc2V0KSB8fCBuZXdWYWx1ZVtuZXdWYWx1ZUtleV0gaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNfMS5vcHRpb25zLmVuYWJsZUNpcmN1bGFyQ2hlY2sgfHwgIXRoaXNfMS5pc0NpcmN1bGFyKHN1YlZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtS2V5ID0gdGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLlBMQUlOX1RPX0NMQVNTID8gbmV3VmFsdWVLZXkgOiBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaW5hbFZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc18xLnRyYW5zZm9ybWF0aW9uVHlwZSA9PT0gVHJhbnNmb3JtYXRpb25UeXBlLkNMQVNTX1RPX1BMQUlOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB2YWx1ZVt0cmFuc2Zvcm1LZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgY3VzdG9tIHRyYW5zZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gdGhpc18xLmFwcGx5Q3VzdG9tVHJhbnNmb3JtYXRpb25zKGZpbmFsVmFsdWUsIHRhcmdldFR5cGUsIHRyYW5zZm9ybUtleSwgdmFsdWUsIHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90aGluZyBjaGFuZ2UsIGl0IG1lYW5zIG5vIGN1c3RvbSB0cmFuc2Zvcm1hdGlvbiB3YXMgYXBwbGllZCwgc28gdXNlIHRoZSBzdWJWYWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB2YWx1ZVt0cmFuc2Zvcm1LZXldID09PSBmaW5hbFZhbHVlID8gc3ViVmFsdWUgOiBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGRlZmF1bHQgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB0aGlzXzEudHJhbnNmb3JtKHN1YlNvdXJjZSwgZmluYWxWYWx1ZSwgdHlwZSwgYXJyYXlUeXBlXzEsIGlzU3ViVmFsdWVNYXAsIGxldmVsICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlzXzEub3B0aW9ucy5leHBvc2VEZWZhdWx0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWUgaWYgbm90aGluZyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBuZXdWYWx1ZVtuZXdWYWx1ZUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gdGhpc18xLnRyYW5zZm9ybShzdWJTb3VyY2UsIHN1YlZhbHVlLCB0eXBlLCBhcnJheVR5cGVfMSwgaXNTdWJWYWx1ZU1hcCwgbGV2ZWwgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gdGhpc18xLmFwcGx5Q3VzdG9tVHJhbnNmb3JtYXRpb25zKGZpbmFsVmFsdWUsIHRhcmdldFR5cGUsIHRyYW5zZm9ybUtleSwgdmFsdWUsIHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlICE9PSB1bmRlZmluZWQgfHwgdGhpc18xLm9wdGlvbnMuZXhwb3NlVW5zZXRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnNldChuZXdWYWx1ZUtleSwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtuZXdWYWx1ZUtleV0gPSBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUgPT09IFRyYW5zZm9ybWF0aW9uVHlwZS5DTEFTU19UT19DTEFTUykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmluYWxWYWx1ZSA9IHN1YlZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gdGhpc18xLmFwcGx5Q3VzdG9tVHJhbnNmb3JtYXRpb25zKGZpbmFsVmFsdWUsIHRhcmdldFR5cGUsIGtleSwgdmFsdWUsIHRoaXNfMS50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWxWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHRoaXNfMS5vcHRpb25zLmV4cG9zZVVuc2V0RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5zZXQobmV3VmFsdWVLZXksIGZpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbbmV3VmFsdWVLZXldID0gZmluYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcbiAgICAgICAgICAgIC8vIHRyYXZlcnNlIG92ZXIga2V5c1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBrZXlzXzEgPSBrZXlzOyBfaSA8IGtleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xW19pXTtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUNpcmN1bGFyQ2hlY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2lvblN0YWNrLmRlbGV0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zZm9ybU9wZXJhdGlvbkV4ZWN1dG9yLnByb3RvdHlwZS5hcHBseUN1c3RvbVRyYW5zZm9ybWF0aW9ucyA9IGZ1bmN0aW9uICh2YWx1ZSwgdGFyZ2V0LCBrZXksIG9iaiwgdHJhbnNmb3JtYXRpb25UeXBlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtZXRhZGF0YXMgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmZpbmRUcmFuc2Zvcm1NZXRhZGF0YXModGFyZ2V0LCBrZXksIHRoaXMudHJhbnNmb3JtYXRpb25UeXBlKTtcbiAgICAgICAgLy8gYXBwbHkgdmVyc2lvbmluZyBvcHRpb25zXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRhZGF0YXMgPSBtZXRhZGF0YXMuZmlsdGVyKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YWRhdGEub3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNoZWNrVmVyc2lvbihtZXRhZGF0YS5vcHRpb25zLnNpbmNlLCBtZXRhZGF0YS5vcHRpb25zLnVudGlsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFwcGx5IGdyb3VwaW5nIG9wdGlvbnNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncm91cHMgJiYgdGhpcy5vcHRpb25zLmdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhcyA9IG1ldGFkYXRhcy5maWx0ZXIoZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2tHcm91cHMobWV0YWRhdGEub3B0aW9ucy5ncm91cHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXRhZGF0YXMgPSBtZXRhZGF0YXMuZmlsdGVyKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhbWV0YWRhdGEub3B0aW9ucyB8fCAhbWV0YWRhdGEub3B0aW9ucy5ncm91cHMgfHwgIW1ldGFkYXRhLm9wdGlvbnMuZ3JvdXBzLmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG1ldGFkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgdmFsdWUgPSBtZXRhZGF0YS50cmFuc2Zvcm1Gbih7IHZhbHVlOiB2YWx1ZSwga2V5OiBrZXksIG9iajogb2JqLCB0eXBlOiB0cmFuc2Zvcm1hdGlvblR5cGUsIG9wdGlvbnM6IF90aGlzLm9wdGlvbnMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICAvLyBwcmV2ZW50aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5wcm90b3R5cGUuaXNDaXJjdWxhciA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjdXJzaW9uU3RhY2suaGFzKG9iamVjdCk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5wcm90b3R5cGUuZ2V0UmVmbGVjdGVkVHlwZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBtZXRhID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5maW5kVHlwZU1ldGFkYXRhKHRhcmdldCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgcmV0dXJuIG1ldGEgPyBtZXRhLnJlZmxlY3RlZFR5cGUgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG9iamVjdCwgaXNNYXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGV4Y2x1c2lvbiBzdHJhdGVneVxuICAgICAgICB2YXIgc3RyYXRlZ3kgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmdldFN0cmF0ZWd5KHRhcmdldCk7XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ25vbmUnKVxuICAgICAgICAgICAgc3RyYXRlZ3kgPSB0aGlzLm9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2V4cG9zZUFsbCc7IC8vIGV4cG9zZUFsbCBpcyBkZWZhdWx0IHN0cmF0ZWd5XG4gICAgICAgIC8vIGdldCBhbGwga2V5cyB0aGF0IG5lZWQgdG8gZXhwb3NlXG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2V4cG9zZUFsbCcgfHwgaXNNYXApIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICBrZXlzID0gQXJyYXkuZnJvbShvYmplY3Qua2V5cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc01hcCkge1xuICAgICAgICAgICAgLy8gZXhwb3NlICYgZXhjbHVkZSBkbyBub3QgYXBwbHkgZm9yIG1hcCBrZXlzIG9ubHkgdG8gZmllbGRzXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZGVjb3JhdG9ycyBhcmUgaWdub3JlZCBidXQgd2UgZG9uJ3Qgd2FudCB0aGUgZXh0cmFuZW91cyB2YWx1ZXMsIHRoZW4gd2UgdXNlIHRoZVxuICAgICAgICAgKiBtZXRhZGF0YSB0byBkZWNpZGUgd2hpY2ggcHJvcGVydHkgaXMgbmVlZGVkLCBidXQgZG9lc24ndCBhcHBseSB0aGUgZGVjb3JhdG9yIGVmZmVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlRGVjb3JhdG9ycyAmJiB0aGlzLm9wdGlvbnMuZXhjbHVkZUV4dHJhbmVvdXNWYWx1ZXMgJiYgdGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgZXhwb3NlZFByb3BlcnRpZXMgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmdldEV4cG9zZWRQcm9wZXJ0aWVzKHRhcmdldCwgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAgICAgdmFyIGV4Y2x1ZGVkUHJvcGVydGllcyA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZ2V0RXhjbHVkZWRQcm9wZXJ0aWVzKHRhcmdldCwgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAgICAga2V5cyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgZXhwb3NlZFByb3BlcnRpZXMsIHRydWUpLCBleGNsdWRlZFByb3BlcnRpZXMsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZURlY29yYXRvcnMgJiYgdGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBhZGQgYWxsIGV4cG9zZWQgdG8gbGlzdCBvZiBrZXlzXG4gICAgICAgICAgICB2YXIgZXhwb3NlZFByb3BlcnRpZXMgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmdldEV4cG9zZWRQcm9wZXJ0aWVzKHRhcmdldCwgdGhpcy50cmFuc2Zvcm1hdGlvblR5cGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtYXRpb25UeXBlID09PSBUcmFuc2Zvcm1hdGlvblR5cGUuUExBSU5fVE9fQ0xBU1MpIHtcbiAgICAgICAgICAgICAgICBleHBvc2VkUHJvcGVydGllcyA9IGV4cG9zZWRQcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHBvc2VNZXRhZGF0YSA9IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuZmluZEV4cG9zZU1ldGFkYXRhKHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cG9zZU1ldGFkYXRhICYmIGV4cG9zZU1ldGFkYXRhLm9wdGlvbnMgJiYgZXhwb3NlTWV0YWRhdGEub3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3NlTWV0YWRhdGEub3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmV4Y2x1ZGVFeHRyYW5lb3VzVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAga2V5cyA9IGV4cG9zZWRQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGV4cG9zZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4Y2x1ZGUgZXhjbHVkZWQgcHJvcGVydGllc1xuICAgICAgICAgICAgdmFyIGV4Y2x1ZGVkUHJvcGVydGllc18xID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5nZXRFeGNsdWRlZFByb3BlcnRpZXModGFyZ2V0LCB0aGlzLnRyYW5zZm9ybWF0aW9uVHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWRQcm9wZXJ0aWVzXzEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhZXhjbHVkZWRQcm9wZXJ0aWVzXzEuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGx5IHZlcnNpb25pbmcgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwb3NlTWV0YWRhdGEgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmZpbmRFeHBvc2VNZXRhZGF0YSh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwb3NlTWV0YWRhdGEgfHwgIWV4cG9zZU1ldGFkYXRhLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNoZWNrVmVyc2lvbihleHBvc2VNZXRhZGF0YS5vcHRpb25zLnNpbmNlLCBleHBvc2VNZXRhZGF0YS5vcHRpb25zLnVudGlsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGx5IGdyb3VwaW5nIG9wdGlvbnNcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JvdXBzICYmIHRoaXMub3B0aW9ucy5ncm91cHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cG9zZU1ldGFkYXRhID0gZGVmYXVsdE1ldGFkYXRhU3RvcmFnZS5maW5kRXhwb3NlTWV0YWRhdGEodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cG9zZU1ldGFkYXRhIHx8ICFleHBvc2VNZXRhZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jaGVja0dyb3VwcyhleHBvc2VNZXRhZGF0YS5vcHRpb25zLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwb3NlTWV0YWRhdGEgPSBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmZpbmRFeHBvc2VNZXRhZGF0YSh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoIWV4cG9zZU1ldGFkYXRhIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhZXhwb3NlTWV0YWRhdGEub3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIWV4cG9zZU1ldGFkYXRhLm9wdGlvbnMuZ3JvdXBzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhZXhwb3NlTWV0YWRhdGEub3B0aW9ucy5ncm91cHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBleGNsdWRlIHByZWZpeGVkIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5leGNsdWRlUHJlZml4ZXMgJiYgdGhpcy5vcHRpb25zLmV4Y2x1ZGVQcmVmaXhlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMuZXhjbHVkZVByZWZpeGVzLmV2ZXJ5KGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgIT09IHByZWZpeDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIHVuaXF1ZSBrZXlzXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5LCBpbmRleCwgc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihrZXkpID09PSBpbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG4gICAgVHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IucHJvdG90eXBlLmNoZWNrVmVyc2lvbiA9IGZ1bmN0aW9uIChzaW5jZSwgdW50aWwpIHtcbiAgICAgICAgdmFyIGRlY2lzaW9uID0gdHJ1ZTtcbiAgICAgICAgaWYgKGRlY2lzaW9uICYmIHNpbmNlKVxuICAgICAgICAgICAgZGVjaXNpb24gPSB0aGlzLm9wdGlvbnMudmVyc2lvbiA+PSBzaW5jZTtcbiAgICAgICAgaWYgKGRlY2lzaW9uICYmIHVudGlsKVxuICAgICAgICAgICAgZGVjaXNpb24gPSB0aGlzLm9wdGlvbnMudmVyc2lvbiA8IHVudGlsO1xuICAgICAgICByZXR1cm4gZGVjaXNpb247XG4gICAgfTtcbiAgICBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvci5wcm90b3R5cGUuY2hlY2tHcm91cHMgPSBmdW5jdGlvbiAoZ3JvdXBzKSB7XG4gICAgICAgIGlmICghZ3JvdXBzKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ3JvdXBzLnNvbWUoZnVuY3Rpb24gKG9wdGlvbkdyb3VwKSB7IHJldHVybiBncm91cHMuaW5jbHVkZXMob3B0aW9uR3JvdXApOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvcjtcbn0oKSk7XG5leHBvcnQgeyBUcmFuc2Zvcm1PcGVyYXRpb25FeGVjdXRvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHJhbnNmb3JtT3BlcmF0aW9uRXhlY3V0b3IuanMubWFwIiwiLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGRlZmF1bHQgb3B0aW9ucyB1c2VkIGJ5IGFueSB0cmFuc2Zvcm1hdGlvbiBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZW5hYmxlQ2lyY3VsYXJDaGVjazogZmFsc2UsXG4gICAgZW5hYmxlSW1wbGljaXRDb252ZXJzaW9uOiBmYWxzZSxcbiAgICBleGNsdWRlRXh0cmFuZW91c1ZhbHVlczogZmFsc2UsXG4gICAgZXhjbHVkZVByZWZpeGVzOiB1bmRlZmluZWQsXG4gICAgZXhwb3NlRGVmYXVsdFZhbHVlczogZmFsc2UsXG4gICAgZXhwb3NlVW5zZXRGaWVsZHM6IHRydWUsXG4gICAgZ3JvdXBzOiB1bmRlZmluZWQsXG4gICAgaWdub3JlRGVjb3JhdG9yczogZmFsc2UsXG4gICAgc3RyYXRlZ3k6IHVuZGVmaW5lZCxcbiAgICB0YXJnZXRNYXBzOiB1bmRlZmluZWQsXG4gICAgdmVyc2lvbjogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQtb3B0aW9ucy5jb25zdGFudC5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZSc7XG4vKipcbiAqIE1hcmtzIHRoZSBnaXZlbiBjbGFzcyBvciBwcm9wZXJ0eSBhcyBleGNsdWRlZC4gQnkgZGVmYXVsdCB0aGUgcHJvcGVydHkgaXMgZXhjbHVkZWQgaW4gYm90aFxuICogY29uc3RydWN0b3JUb1BsYWluIGFuZCBwbGFpblRvQ29uc3RydWN0b3IgdHJhbnNmb3JtYXRpb25zLiBJdCBjYW4gYmUgbGltaXRlZCB0byBvbmx5IG9uZSBkaXJlY3Rpb25cbiAqIHZpYSB1c2luZyB0aGUgYHRvUGxhaW5Pbmx5YCBvciBgdG9DbGFzc09ubHlgIG9wdGlvbi5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBjbGFzcyBkZWZpbml0aW9ucyBhbmQgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEV4Y2x1ZGUob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLyoqXG4gICAgICogTk9URTogVGhlIGBwcm9wZXJ0eU5hbWVgIHByb3BlcnR5IG11c3QgYmUgbWFya2VkIGFzIG9wdGlvbmFsIGJlY2F1c2VcbiAgICAgKiB0aGlzIGRlY29yYXRvciB1c2VkIGJvdGggYXMgYSBjbGFzcyBhbmQgYSBwcm9wZXJ0eSBkZWNvcmF0b3IgYW5kIHRoZVxuICAgICAqIFR5cGVzY3JpcHQgY29tcGlsZXIgd2lsbCBmcmVhayBvdXQgaWYgd2UgbWFrZSBpdCBtYW5kYXRvcnkgYXMgYSBjbGFzc1xuICAgICAqIGRlY29yYXRvciBvbmx5IHJlY2VpdmVzIG9uZSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmFkZEV4Y2x1ZGVNZXRhZGF0YSh7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iamVjdCBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gb2JqZWN0IDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhjbHVkZS5kZWNvcmF0b3IuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdE1ldGFkYXRhU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuLyoqXG4gKiBNYXJrcyB0aGUgZ2l2ZW4gY2xhc3Mgb3IgcHJvcGVydHkgYXMgaW5jbHVkZWQuIEJ5IGRlZmF1bHQgdGhlIHByb3BlcnR5IGlzIGluY2x1ZGVkIGluIGJvdGhcbiAqIGNvbnN0cnVjdG9yVG9QbGFpbiBhbmQgcGxhaW5Ub0NvbnN0cnVjdG9yIHRyYW5zZm9ybWF0aW9ucy4gSXQgY2FuIGJlIGxpbWl0ZWQgdG8gb25seSBvbmUgZGlyZWN0aW9uXG4gKiB2aWEgdXNpbmcgdGhlIGB0b1BsYWluT25seWAgb3IgYHRvQ2xhc3NPbmx5YCBvcHRpb24uXG4gKlxuICogQ2FuIGJlIGFwcGxpZWQgdG8gY2xhc3MgZGVmaW5pdGlvbnMgYW5kIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFeHBvc2Uob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLyoqXG4gICAgICogTk9URTogVGhlIGBwcm9wZXJ0eU5hbWVgIHByb3BlcnR5IG11c3QgYmUgbWFya2VkIGFzIG9wdGlvbmFsIGJlY2F1c2VcbiAgICAgKiB0aGlzIGRlY29yYXRvciB1c2VkIGJvdGggYXMgYSBjbGFzcyBhbmQgYSBwcm9wZXJ0eSBkZWNvcmF0b3IgYW5kIHRoZVxuICAgICAqIFR5cGVzY3JpcHQgY29tcGlsZXIgd2lsbCBmcmVhayBvdXQgaWYgd2UgbWFrZSBpdCBtYW5kYXRvcnkgYXMgYSBjbGFzc1xuICAgICAqIGRlY29yYXRvciBvbmx5IHJlY2VpdmVzIG9uZSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmFkZEV4cG9zZU1ldGFkYXRhKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0IGluc3RhbmNlb2YgRnVuY3Rpb24gPyBvYmplY3QgOiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHBvc2UuZGVjb3JhdG9yLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vZXhjbHVkZS5kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9leHBvc2UuZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNmb3JtLWluc3RhbmNlLXRvLWluc3RhbmNlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zZm9ybS1pbnN0YW5jZS10by1wbGFpbi5kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0tcGxhaW4tdG8taW5zdGFuY2UuZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNmb3JtLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3R5cGUuZGVjb3JhdG9yJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IENsYXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuLi9DbGFzc1RyYW5zZm9ybWVyJztcbi8qKlxuICogUmV0dXJuIHRoZSBjbGFzcyBpbnN0YW5jZSBvbmx5IHdpdGggdGhlIGV4cG9zZWQgcHJvcGVydGllcy5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBmdW5jdGlvbnMgYW5kIGdldHRlcnMvc2V0dGVycyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtSW5zdGFuY2VUb0luc3RhbmNlKHBhcmFtcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICB2YXIgY2xhc3NUcmFuc2Zvcm1lciA9IG5ldyBDbGFzc1RyYW5zZm9ybWVyKCk7XG4gICAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB2YXIgaXNQcm9taXNlID0gISFyZXN1bHQgJiYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnIHx8IHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIHJldHVybiBpc1Byb21pc2VcbiAgICAgICAgICAgICAgICA/IHJlc3VsdC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLmluc3RhbmNlVG9JbnN0YW5jZShkYXRhLCBwYXJhbXMpOyB9KVxuICAgICAgICAgICAgICAgIDogY2xhc3NUcmFuc2Zvcm1lci5pbnN0YW5jZVRvSW5zdGFuY2UocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICB9O1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2Zvcm0taW5zdGFuY2UtdG8taW5zdGFuY2UuZGVjb3JhdG9yLmpzLm1hcCIsImltcG9ydCB7IENsYXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuLi9DbGFzc1RyYW5zZm9ybWVyJztcbi8qKlxuICogVHJhbnNmb3JtIHRoZSBvYmplY3QgZnJvbSBjbGFzcyB0byBwbGFpbiBvYmplY3QgYW5kIHJldHVybiBvbmx5IHdpdGggdGhlIGV4cG9zZWQgcHJvcGVydGllcy5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBmdW5jdGlvbnMgYW5kIGdldHRlcnMvc2V0dGVycyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtSW5zdGFuY2VUb1BsYWluKHBhcmFtcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICB2YXIgY2xhc3NUcmFuc2Zvcm1lciA9IG5ldyBDbGFzc1RyYW5zZm9ybWVyKCk7XG4gICAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB2YXIgaXNQcm9taXNlID0gISFyZXN1bHQgJiYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnIHx8IHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIHJldHVybiBpc1Byb21pc2VcbiAgICAgICAgICAgICAgICA/IHJlc3VsdC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLmluc3RhbmNlVG9QbGFpbihkYXRhLCBwYXJhbXMpOyB9KVxuICAgICAgICAgICAgICAgIDogY2xhc3NUcmFuc2Zvcm1lci5pbnN0YW5jZVRvUGxhaW4ocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICB9O1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2Zvcm0taW5zdGFuY2UtdG8tcGxhaW4uZGVjb3JhdG9yLmpzLm1hcCIsImltcG9ydCB7IENsYXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuLi9DbGFzc1RyYW5zZm9ybWVyJztcbi8qKlxuICogUmV0dXJuIHRoZSBjbGFzcyBpbnN0YW5jZSBvbmx5IHdpdGggdGhlIGV4cG9zZWQgcHJvcGVydGllcy5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBmdW5jdGlvbnMgYW5kIGdldHRlcnMvc2V0dGVycyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtUGxhaW5Ub0luc3RhbmNlKGNsYXNzVHlwZSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIHZhciBjbGFzc1RyYW5zZm9ybWVyID0gbmV3IENsYXNzVHJhbnNmb3JtZXIoKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHZhciBpc1Byb21pc2UgPSAhIXJlc3VsdCAmJiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJvbWlzZVxuICAgICAgICAgICAgICAgID8gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIucGxhaW5Ub0luc3RhbmNlKGNsYXNzVHlwZSwgZGF0YSwgcGFyYW1zKTsgfSlcbiAgICAgICAgICAgICAgICA6IGNsYXNzVHJhbnNmb3JtZXIucGxhaW5Ub0luc3RhbmNlKGNsYXNzVHlwZSwgcmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICB9O1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2Zvcm0tcGxhaW4tdG8taW5zdGFuY2UuZGVjb3JhdG9yLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlJztcbi8qKlxuICogRGVmaW5lcyBhIGN1c3RvbSBsb2dpYyBmb3IgdmFsdWUgdHJhbnNmb3JtYXRpb24uXG4gKlxuICogQ2FuIGJlIGFwcGxpZWQgdG8gcHJvcGVydGllcyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKHRyYW5zZm9ybUZuLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UuYWRkVHJhbnNmb3JtTWV0YWRhdGEoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybUZuOiB0cmFuc2Zvcm1GbixcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2Zvcm0uZGVjb3JhdG9yLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHRNZXRhZGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlJztcbi8qKlxuICogU3BlY2lmaWVzIGEgdHlwZSBvZiB0aGUgcHJvcGVydHkuXG4gKiBUaGUgZ2l2ZW4gVHlwZUZ1bmN0aW9uIGNhbiByZXR1cm4gYSBjb25zdHJ1Y3Rvci4gQSBkaXNjcmltaW5hdG9yIGNhbiBiZSBnaXZlbiBpbiB0aGUgb3B0aW9ucy5cbiAqXG4gKiBDYW4gYmUgYXBwbGllZCB0byBwcm9wZXJ0aWVzIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUeXBlKHR5cGVGdW5jdGlvbiwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICB2YXIgcmVmbGVjdGVkVHlwZSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBkZWZhdWx0TWV0YWRhdGFTdG9yYWdlLmFkZFR5cGVNZXRhZGF0YSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgcmVmbGVjdGVkVHlwZTogcmVmbGVjdGVkVHlwZSxcbiAgICAgICAgICAgIHR5cGVGdW5jdGlvbjogdHlwZUZ1bmN0aW9uLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGUuZGVjb3JhdG9yLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vdHJhbnNmb3JtYXRpb24tdHlwZS5lbnVtJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCB2YXIgVHJhbnNmb3JtYXRpb25UeXBlO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm1hdGlvblR5cGUpIHtcbiAgICBUcmFuc2Zvcm1hdGlvblR5cGVbVHJhbnNmb3JtYXRpb25UeXBlW1wiUExBSU5fVE9fQ0xBU1NcIl0gPSAwXSA9IFwiUExBSU5fVE9fQ0xBU1NcIjtcbiAgICBUcmFuc2Zvcm1hdGlvblR5cGVbVHJhbnNmb3JtYXRpb25UeXBlW1wiQ0xBU1NfVE9fUExBSU5cIl0gPSAxXSA9IFwiQ0xBU1NfVE9fUExBSU5cIjtcbiAgICBUcmFuc2Zvcm1hdGlvblR5cGVbVHJhbnNmb3JtYXRpb25UeXBlW1wiQ0xBU1NfVE9fQ0xBU1NcIl0gPSAyXSA9IFwiQ0xBU1NfVE9fQ0xBU1NcIjtcbn0pKFRyYW5zZm9ybWF0aW9uVHlwZSB8fCAoVHJhbnNmb3JtYXRpb25UeXBlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybWF0aW9uLXR5cGUuZW51bS5qcy5tYXAiLCJpbXBvcnQgeyBDbGFzc1RyYW5zZm9ybWVyIH0gZnJvbSAnLi9DbGFzc1RyYW5zZm9ybWVyJztcbmV4cG9ydCB7IENsYXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuL0NsYXNzVHJhbnNmb3JtZXInO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2VudW1zJztcbnZhciBjbGFzc1RyYW5zZm9ybWVyID0gbmV3IENsYXNzVHJhbnNmb3JtZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc1RvUGxhaW4ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuaW5zdGFuY2VUb1BsYWluKG9iamVjdCwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VUb1BsYWluKG9iamVjdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLmluc3RhbmNlVG9QbGFpbihvYmplY3QsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzVG9QbGFpbkZyb21FeGlzdChvYmplY3QsIHBsYWluT2JqZWN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuY2xhc3NUb1BsYWluRnJvbUV4aXN0KG9iamVjdCwgcGxhaW5PYmplY3QsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVG9DbGFzcyhjbHMsIHBsYWluLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIucGxhaW5Ub0luc3RhbmNlKGNscywgcGxhaW4sIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVG9JbnN0YW5jZShjbHMsIHBsYWluLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIucGxhaW5Ub0luc3RhbmNlKGNscywgcGxhaW4sIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVG9DbGFzc0Zyb21FeGlzdChjbHNPYmplY3QsIHBsYWluLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIucGxhaW5Ub0NsYXNzRnJvbUV4aXN0KGNsc09iamVjdCwgcGxhaW4sIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlVG9JbnN0YW5jZShvYmplY3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2xhc3NUcmFuc2Zvcm1lci5pbnN0YW5jZVRvSW5zdGFuY2Uob2JqZWN0LCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc1RvQ2xhc3NGcm9tRXhpc3Qob2JqZWN0LCBmcm9tT2JqZWN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNsYXNzVHJhbnNmb3JtZXIuY2xhc3NUb0NsYXNzRnJvbUV4aXN0KG9iamVjdCwgZnJvbU9iamVjdCwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iamVjdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLnNlcmlhbGl6ZShvYmplY3QsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgZ2l2ZW4gSlNPTiBzdHJpbmcgdG8gYSBvYmplY3Qgb2YgdGhlIGdpdmVuIGNsYXNzLlxuICpcbiAqIEBkZXByZWNhdGVkIFRoaXMgZnVuY3Rpb24gaXMgYmVpbmcgcmVtb3ZlZC4gUGxlYXNlIHVzZSB0aGUgZm9sbG93aW5nIGluc3RlYWQ6XG4gKiBgYGBcbiAqIGluc3RhbmNlVG9DbGFzcyhjbHMsIEpTT04ucGFyc2UoanNvbiksIG9wdGlvbnMpXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplKGNscywganNvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLmRlc2VyaWFsaXplKGNscywganNvbiwgb3B0aW9ucyk7XG59XG4vKipcbiAqIERlc2VyaWFsaXplcyBnaXZlbiBKU09OIHN0cmluZyB0byBhbiBhcnJheSBvZiBvYmplY3RzIG9mIHRoZSBnaXZlbiBjbGFzcy5cbiAqXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGZ1bmN0aW9uIGlzIGJlaW5nIHJlbW92ZWQuIFBsZWFzZSB1c2UgdGhlIGZvbGxvd2luZyBpbnN0ZWFkOlxuICogYGBgXG4gKiBKU09OLnBhcnNlKGpzb24pLm1hcCh2YWx1ZSA9PiBpbnN0YW5jZVRvQ2xhc3MoY2xzLCB2YWx1ZSwgb3B0aW9ucykpXG4gKiBgYGBcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUFycmF5KGNscywganNvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBjbGFzc1RyYW5zZm9ybWVyLmRlc2VyaWFsaXplQXJyYXkoY2xzLCBqc29uLCBvcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IE1ldGFkYXRhU3RvcmFnZSB9IGZyb20gJy4vTWV0YWRhdGFTdG9yYWdlJztcbi8qKlxuICogRGVmYXVsdCBtZXRhZGF0YSBzdG9yYWdlIGlzIHVzZWQgYXMgc2luZ2xldG9uIGFuZCBjYW4gYmUgdXNlZCB0byBzdG9yYWdlIGFsbCBtZXRhZGF0YXMuXG4gKi9cbmV4cG9ydCB2YXIgZGVmYXVsdE1ldGFkYXRhU3RvcmFnZSA9IG5ldyBNZXRhZGF0YVN0b3JhZ2UoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0b3JhZ2UuanMubWFwIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYWNyb3NzIE5vZGUgYW5kIGJyb3dzZXJzLlxuICpcbiAqIE5vdGU6IGBnbG9iYWxUaGlzYCBpcyB0aGUgc3RhbmRhcmRpemVkIGFwcHJvYWNoIGhvd2V2ZXIgaXQgaGFzIGJlZW4gYWRkZWQgdG9cbiAqIE5vZGUuanMgaW4gdmVyc2lvbiAxMi4gV2UgbmVlZCB0byBpbmNsdWRlIHRoaXMgc25pcHBldCB1bnRpbCBOb2RlIDEyIEVPTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmU6IENhbm5vdCBmaW5kIG5hbWUgJ3dpbmRvdycuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogQ2Fubm90IGZpbmQgbmFtZSAnd2luZG93Jy5cbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmU6IENhbm5vdCBmaW5kIG5hbWUgJ3NlbGYnLlxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBDYW5ub3QgZmluZCBuYW1lICdzZWxmJy5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0LWdsb2JhbC51dGlsLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UocCkge1xuICAgIHJldHVybiBwICE9PSBudWxsICYmIHR5cGVvZiBwID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcC50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtcHJvbWlzZS51dGlsLmpzLm1hcCIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9lczYtc2hpbVxuICogQGxpY2Vuc2UgZXM2LXNoaW0gQ29weXJpZ2h0IDIwMTMtMjAxNiBieSBQYXVsIE1pbGxlciAoaHR0cDovL3BhdWxtaWxsci5jb20pXG4gKiAgIGFuZCBjb250cmlidXRvcnMsICBNSVQgTGljZW5zZVxuICogZXM2LXNoaW06IHYwLjM1LjRcbiAqIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2VzNi1zaGltL2Jsb2IvMC4zNS4zL0xJQ0VOU0VcbiAqIERldGFpbHMgYW5kIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2VzNi1zaGltL1xuICovXG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvcmV0dXJuRXhwb3J0cy5qc1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIC8qZ2xvYmFsIGRlZmluZSAqL1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICByb290LnJldHVybkV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9hcHBseSA9IEZ1bmN0aW9uLmNhbGwuYmluZChGdW5jdGlvbi5hcHBseSk7XG4gIHZhciBfY2FsbCA9IEZ1bmN0aW9uLmNhbGwuYmluZChGdW5jdGlvbi5jYWxsKTtcbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG4gIHZhciBub3QgPSBmdW5jdGlvbiBub3RUaHVua2VyKGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbm90VGh1bmsoKSB7XG4gICAgICByZXR1cm4gIV9hcHBseShmdW5jLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG4gIHZhciB0aHJvd3NFcnJvciA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZ1bmMoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHZhciB2YWx1ZU9yRmFsc2VJZlRocm93cyA9IGZ1bmN0aW9uIHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc0NhbGxhYmxlV2l0aG91dE5ldyA9IG5vdCh0aHJvd3NFcnJvcik7XG4gIHZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBleGlzdHMgYnV0IHRocm93cywgaXQncyBJRSA4XG4gICAgcmV0dXJuICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAneCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IH0gfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2V0dGVyLXJldHVyblxuICAgIH0pO1xuICB9O1xuICB2YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcbiAgdmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IChmdW5jdGlvbiBmb28oKSB7fSkubmFtZSA9PT0gJ2Zvbyc7XG5cbiAgdmFyIF9mb3JFYWNoID0gRnVuY3Rpb24uY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKTtcbiAgdmFyIF9yZWR1Y2UgPSBGdW5jdGlvbi5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLnJlZHVjZSk7XG4gIHZhciBfZmlsdGVyID0gRnVuY3Rpb24uY2FsbC5iaW5kKEFycmF5LnByb3RvdHlwZS5maWx0ZXIpO1xuICB2YXIgX3NvbWUgPSBGdW5jdGlvbi5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLnNvbWUpO1xuXG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBmb3JjZSkge1xuICAgIGlmICghZm9yY2UgJiYgbmFtZSBpbiBvYmplY3QpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBEZWZpbmUgY29uZmlndXJhYmxlLCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUgcHJvcHNcbiAgLy8gaWYgdGhleSBkb27igJl0IGV4aXN0LlxuICB2YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCwgZm9yY2VPdmVycmlkZSkge1xuICAgIF9mb3JFYWNoKGtleXMobWFwKSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBtZXRob2QgPSBtYXBbbmFtZV07XG4gICAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIG1ldGhvZCwgISFmb3JjZU92ZXJyaWRlKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgX3RvU3RyaW5nID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuICB2YXIgaXNDYWxsYWJsZSA9IHR5cGVvZiAvYWJjLyA9PT0gJ2Z1bmN0aW9uJyA/IGZ1bmN0aW9uIElzQ2FsbGFibGVTbG93KHgpIHtcbiAgICAvLyBTb21lIG9sZCBicm93c2VycyAoSUUsIEZGKSBzYXkgdGhhdCB0eXBlb2YgL2FiYy8gPT09ICdmdW5jdGlvbidcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgJiYgX3RvU3RyaW5nKHgpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9IDogZnVuY3Rpb24gSXNDYWxsYWJsZUZhc3QoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7IH07XG5cbiAgdmFyIFZhbHVlID0ge1xuICAgIGdldHRlcjogZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgZ2V0dGVyKSB7XG4gICAgICBpZiAoIXN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0dGVycyByZXF1aXJlIHRydWUgRVM1IHN1cHBvcnQnKTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZ2V0OiBnZXR0ZXJcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcHJveHk6IGZ1bmN0aW9uIChvcmlnaW5hbE9iamVjdCwga2V5LCB0YXJnZXRPYmplY3QpIHtcbiAgICAgIGlmICghc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnZXR0ZXJzIHJlcXVpcmUgdHJ1ZSBFUzUgc3VwcG9ydCcpO1xuICAgICAgfVxuICAgICAgdmFyIG9yaWdpbmFsRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3JpZ2luYWxPYmplY3QsIGtleSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0T2JqZWN0LCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBvcmlnaW5hbERlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgICAgICBlbnVtZXJhYmxlOiBvcmlnaW5hbERlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXRLZXkoKSB7IHJldHVybiBvcmlnaW5hbE9iamVjdFtrZXldOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldEtleSh2YWx1ZSkgeyBvcmlnaW5hbE9iamVjdFtrZXldID0gdmFsdWU7IH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVkZWZpbmU6IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5LCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdFtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmluZUJ5RGVzY3JpcHRvcjogZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcbiAgICAgIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSB7XG4gICAgICAgIG9iamVjdFtwcm9wZXJ0eV0gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJlc2VydmVUb1N0cmluZzogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlICYmIGlzQ2FsbGFibGUoc291cmNlLnRvU3RyaW5nKSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsICd0b1N0cmluZycsIHNvdXJjZS50b1N0cmluZy5iaW5kKHNvdXJjZSksIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBTaW1wbGUgc2hpbSBmb3IgT2JqZWN0LmNyZWF0ZSBvbiBFUzMgYnJvd3NlcnNcbiAgLy8gKHVubGlrZSByZWFsIHNoaW0sIG5vIGF0dGVtcHQgdG8gc3VwcG9ydCBgcHJvdG90eXBlID09PSBudWxsYClcbiAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKHByb3RvdHlwZSwgcHJvcGVydGllcykge1xuICAgIHZhciBQcm90b3R5cGUgPSBmdW5jdGlvbiBQcm90b3R5cGUoKSB7fTtcbiAgICBQcm90b3R5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgIHZhciBvYmplY3QgPSBuZXcgUHJvdG90eXBlKCk7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAga2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgVmFsdWUuZGVmaW5lQnlEZXNjcmlwdG9yKG9iamVjdCwga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG5cbiAgdmFyIHN1cHBvcnRzU3ViY2xhc3NpbmcgPSBmdW5jdGlvbiAoQywgZikge1xuICAgIGlmICghT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7IHJldHVybiBmYWxzZTsgLyogc2tpcCB0ZXN0IG9uIElFIDwgMTEgKi8gfVxuICAgIHJldHVybiB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgU3ViID0gZnVuY3Rpb24gU3ViY2xhc3MoYXJnKSB7XG4gICAgICAgIHZhciBvID0gbmV3IEMoYXJnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sIFN1YmNsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihTdWIsIEMpO1xuICAgICAgU3ViLnByb3RvdHlwZSA9IGNyZWF0ZShDLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogU3ViIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGYoU3ViKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuICAgIC8qIGdsb2JhbCBzZWxmLCB3aW5kb3cgKi9cbiAgICAvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcbiAgICAvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcbiAgICAvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG4gIH07XG5cbiAgdmFyIGdsb2JhbHMgPSBnZXRHbG9iYWwoKTtcbiAgdmFyIGdsb2JhbElzRmluaXRlID0gZ2xvYmFscy5pc0Zpbml0ZTtcbiAgdmFyIF9pbmRleE9mID0gRnVuY3Rpb24uY2FsbC5iaW5kKFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG4gIHZhciBfYXJyYXlJbmRleE9mQXBwbHkgPSBGdW5jdGlvbi5hcHBseS5iaW5kKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKTtcbiAgdmFyIF9jb25jYXQgPSBGdW5jdGlvbi5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLmNvbmNhdCk7XG4gIC8vIHZhciBfc29ydCA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuc29ydCk7XG4gIHZhciBfc3RyU2xpY2UgPSBGdW5jdGlvbi5jYWxsLmJpbmQoU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG4gIHZhciBfcHVzaCA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gIHZhciBfcHVzaEFwcGx5ID0gRnVuY3Rpb24uYXBwbHkuYmluZChBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gIHZhciBfam9pbiA9IEZ1bmN0aW9uLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuam9pbik7XG4gIHZhciBfc2hpZnQgPSBGdW5jdGlvbi5jYWxsLmJpbmQoQXJyYXkucHJvdG90eXBlLnNoaWZ0KTtcbiAgdmFyIF9tYXggPSBNYXRoLm1heDtcbiAgdmFyIF9taW4gPSBNYXRoLm1pbjtcbiAgdmFyIF9mbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciBfYWJzID0gTWF0aC5hYnM7XG4gIHZhciBfZXhwID0gTWF0aC5leHA7XG4gIHZhciBfbG9nID0gTWF0aC5sb2c7XG4gIHZhciBfc3FydCA9IE1hdGguc3FydDtcbiAgdmFyIF9oYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgdmFyIEFycmF5SXRlcmF0b3I7IC8vIG1ha2Ugb3VyIGltcGxlbWVudGF0aW9uIHByaXZhdGVcbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuICB2YXIgT3JpZ01hcCA9IGdsb2JhbHMuTWFwO1xuICB2YXIgb3JpZ01hcERlbGV0ZSA9IE9yaWdNYXAgJiYgT3JpZ01hcC5wcm90b3R5cGVbJ2RlbGV0ZSddO1xuICB2YXIgb3JpZ01hcEdldCA9IE9yaWdNYXAgJiYgT3JpZ01hcC5wcm90b3R5cGUuZ2V0O1xuICB2YXIgb3JpZ01hcEhhcyA9IE9yaWdNYXAgJiYgT3JpZ01hcC5wcm90b3R5cGUuaGFzO1xuICB2YXIgb3JpZ01hcFNldCA9IE9yaWdNYXAgJiYgT3JpZ01hcC5wcm90b3R5cGUuc2V0O1xuXG4gIHZhciBTeW1ib2wgPSBnbG9iYWxzLlN5bWJvbCB8fCB7fTtcbiAgdmFyIHN5bWJvbFNwZWNpZXMgPSBTeW1ib2wuc3BlY2llcyB8fCAnQEBzcGVjaWVzJztcblxuICB2YXIgbnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4odmFsdWUpIHtcbiAgICAvLyBOYU4gIT09IE5hTiwgYnV0IHRoZXkgYXJlIGlkZW50aWNhbC5cbiAgICAvLyBOYU5zIGFyZSB0aGUgb25seSBub24tcmVmbGV4aXZlIHZhbHVlLCBpLmUuLCBpZiB4ICE9PSB4LFxuICAgIC8vIHRoZW4geCBpcyBOYU4uXG4gICAgLy8gaXNOYU4gaXMgYnJva2VuOiBpdCBjb252ZXJ0cyBpdHMgYXJndW1lbnQgdG8gbnVtYmVyLCBzb1xuICAgIC8vIGlzTmFOKCdmb28nKSA9PiB0cnVlXG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbiAgfTtcbiAgdmFyIG51bWJlcklzRmluaXRlID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgZ2xvYmFsSXNGaW5pdGUodmFsdWUpO1xuICB9O1xuICB2YXIgX3NpZ24gPSBpc0NhbGxhYmxlKE1hdGguc2lnbikgPyBNYXRoLnNpZ24gOiBmdW5jdGlvbiBzaWduKHZhbHVlKSB7XG4gICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKG51bWJlciA9PT0gMCkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgaWYgKG51bWJlcklzTmFOKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuICAgIHJldHVybiBudW1iZXIgPCAwID8gLTEgOiAxO1xuICB9O1xuICB2YXIgX2xvZzFwID0gZnVuY3Rpb24gbG9nMXAodmFsdWUpIHtcbiAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHggPCAtMSB8fCBudW1iZXJJc05hTih4KSkgeyByZXR1cm4gTmFOOyB9XG4gICAgaWYgKHggPT09IDAgfHwgeCA9PT0gSW5maW5pdHkpIHsgcmV0dXJuIHg7IH1cbiAgICBpZiAoeCA9PT0gLTEpIHsgcmV0dXJuIC1JbmZpbml0eTsgfVxuXG4gICAgcmV0dXJuICgxICsgeCkgLSAxID09PSAwID8geCA6IHggKiAoX2xvZygxICsgeCkgLyAoKDEgKyB4KSAtIDEpKTtcbiAgfTtcblxuICAvLyB0YWtlbiBkaXJlY3RseSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvaXMtYXJndW1lbnRzL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gIC8vIGNhbiBiZSByZXBsYWNlZCB3aXRoIHJlcXVpcmUoJ2lzLWFyZ3VtZW50cycpIGlmIHdlIGV2ZXIgdXNlIGEgYnVpbGQgcHJvY2VzcyBpbnN0ZWFkXG4gIHZhciBpc1N0YW5kYXJkQXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgICByZXR1cm4gX3RvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG4gIH07XG4gIHZhciBpc0xlZ2FjeUFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsXG4gICAgICAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAmJiB0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJ1xuICAgICAgJiYgdmFsdWUubGVuZ3RoID49IDBcbiAgICAgICYmIF90b1N0cmluZyh2YWx1ZSkgIT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICAgICYmIF90b1N0cmluZyh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xuICB2YXIgaXNBcmd1bWVudHMgPSBpc1N0YW5kYXJkQXJndW1lbnRzKGFyZ3VtZW50cykgPyBpc1N0YW5kYXJkQXJndW1lbnRzIDogaXNMZWdhY3lBcmd1bWVudHM7XG5cbiAgdmFyIFR5cGUgPSB7XG4gICAgcHJpbWl0aXZlOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4geCA9PT0gbnVsbCB8fCAodHlwZW9mIHggIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHggIT09ICdvYmplY3QnKTsgfSxcbiAgICBzdHJpbmc6IGZ1bmN0aW9uICh4KSB7IHJldHVybiBfdG9TdHJpbmcoeCkgPT09ICdbb2JqZWN0IFN0cmluZ10nOyB9LFxuICAgIHJlZ2V4OiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gX3RvU3RyaW5nKHgpID09PSAnW29iamVjdCBSZWdFeHBdJzsgfSxcbiAgICBzeW1ib2w6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGdsb2JhbHMuU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB4ID09PSAnc3ltYm9sJztcbiAgICB9XG4gIH07XG5cbiAgdmFyIG92ZXJyaWRlTmF0aXZlID0gZnVuY3Rpb24gb3ZlcnJpZGVOYXRpdmUob2JqZWN0LCBwcm9wZXJ0eSwgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgb3JpZ2luYWwgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHJlcGxhY2VtZW50LCB0cnVlKTtcbiAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKG9iamVjdFtwcm9wZXJ0eV0sIG9yaWdpbmFsKTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG4gIHZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJyAmJiBUeXBlLnN5bWJvbChTeW1ib2woKSk7XG5cbiAgLy8gVGhpcyBpcyBhIHByaXZhdGUgbmFtZSBpbiB0aGUgZXM2IHNwZWMsIGVxdWFsIHRvICdbU3ltYm9sLml0ZXJhdG9yXSdcbiAgLy8gd2UncmUgZ29pbmcgdG8gdXNlIGFuIGFyYml0cmFyeSBfLXByZWZpeGVkIG5hbWUgdG8gbWFrZSBvdXIgc2hpbXNcbiAgLy8gd29yayBwcm9wZXJseSB3aXRoIGVhY2ggb3RoZXIsIGV2ZW4gdGhvdWdoIHdlIGRvbid0IGhhdmUgZnVsbCBJdGVyYXRvclxuICAvLyBzdXBwb3J0LiAgVGhhdCBpcywgYEFycmF5LmZyb20obWFwLmtleXMoKSlgIHdpbGwgd29yaywgYnV0IHdlIGRvbid0XG4gIC8vIHByZXRlbmQgdG8gZXhwb3J0IGEgXCJyZWFsXCIgSXRlcmF0b3IgaW50ZXJmYWNlLlxuICB2YXIgJGl0ZXJhdG9yJCA9IFR5cGUuc3ltYm9sKFN5bWJvbC5pdGVyYXRvcikgPyBTeW1ib2wuaXRlcmF0b3IgOiAnX2VzNi1zaGltIGl0ZXJhdG9yXyc7XG4gIC8vIEZpcmVmb3ggc2hpcHMgYSBwYXJ0aWFsIGltcGxlbWVudGF0aW9uIHVzaW5nIHRoZSBuYW1lIEBAaXRlcmF0b3IuXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkwNzA3NyNjMTRcbiAgLy8gU28gdXNlIHRoYXQgbmFtZSBpZiB3ZSBkZXRlY3QgaXQuXG4gIGlmIChnbG9iYWxzLlNldCAmJiB0eXBlb2YgbmV3IGdsb2JhbHMuU2V0KClbJ0BAaXRlcmF0b3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICRpdGVyYXRvciQgPSAnQEBpdGVyYXRvcic7XG4gIH1cblxuICAvLyBSZWZsZWN0XG4gIGlmICghZ2xvYmFscy5SZWZsZWN0KSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFscywgJ1JlZmxlY3QnLCB7fSwgdHJ1ZSk7XG4gIH1cbiAgdmFyIFJlZmxlY3QgPSBnbG9iYWxzLlJlZmxlY3Q7XG5cbiAgdmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbiAgLyogZ2xvYmFsIGRvY3VtZW50ICovXG4gIHZhciBkb21BbGwgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZG9jdW1lbnQpID8gbnVsbCA6IGRvY3VtZW50LmFsbDtcbiAgdmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gZG9tQWxsID09IG51bGwgPyBmdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh4KSB7XG4gICAgcmV0dXJuIHggPT0gbnVsbDtcbiAgfSA6IGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkQW5kTm90RG9jdW1lbnRBbGwoeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgJiYgeCAhPT0gZG9tQWxsO1xuICB9O1xuXG4gIHZhciBFUyA9IHtcbiAgICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2FsbFxuICAgIENhbGw6IGZ1bmN0aW9uIENhbGwoRiwgVikge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKEYpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYXBwbHkoRiwgViwgYXJncyk7XG4gICAgfSxcblxuICAgIFJlcXVpcmVPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uICh4LCBvcHRNZXNzYWdlKSB7XG4gICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihvcHRNZXNzYWdlIHx8ICdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIHgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHg7XG4gICAgfSxcblxuICAgIC8vIFRoaXMgbWlnaHQgbWlzcyB0aGUgXCIobm9uLXN0YW5kYXJkIGV4b3RpYyBhbmQgZG9lcyBub3QgaW1wbGVtZW50XG4gICAgLy8gW1tDYWxsXV0pXCIgY2FzZSBmcm9tXG4gICAgLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXR5cGVvZi1vcGVyYXRvci1ydW50aW1lLXNlbWFudGljcy1ldmFsdWF0aW9uXG4gICAgLy8gYnV0IHdlIGNhbid0IGZpbmQgYW55IGV2aWRlbmNlIHRoZXNlIG9iamVjdHMgZXhpc3QgaW4gcHJhY3RpY2UuXG4gICAgLy8gSWYgd2UgZmluZCBzb21lIGluIHRoZSBmdXR1cmUsIHlvdSBjb3VsZCB0ZXN0IGBPYmplY3QoeCkgPT09IHhgLFxuICAgIC8vIHdoaWNoIGlzIHJlbGlhYmxlIGFjY29yZGluZyB0b1xuICAgIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b29iamVjdFxuICAgIC8vIGJ1dCBpcyBub3Qgd2VsbCBvcHRpbWl6ZWQgYnkgcnVudGltZXMgYW5kIGNyZWF0ZXMgYW4gb2JqZWN0XG4gICAgLy8gd2hlbmV2ZXIgaXQgcmV0dXJucyBmYWxzZSwgYW5kIHRodXMgaXMgdmVyeSBzbG93LlxuICAgIFR5cGVJc09iamVjdDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmICh4ID09PSB2b2lkIDAgfHwgeCA9PT0gbnVsbCB8fCB4ID09PSB0cnVlIHx8IHggPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgeCA9PT0gZG9tQWxsO1xuICAgIH0sXG5cbiAgICBUb09iamVjdDogZnVuY3Rpb24gKG8sIG9wdE1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBPYmplY3QoRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShvLCBvcHRNZXNzYWdlKSk7XG4gICAgfSxcblxuICAgIElzQ2FsbGFibGU6IGlzQ2FsbGFibGUsXG5cbiAgICBJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiAoeCkge1xuICAgICAgLy8gV2UgY2FuJ3QgdGVsbCBjYWxsYWJsZXMgZnJvbSBjb25zdHJ1Y3RvcnMgaW4gRVM1XG4gICAgICByZXR1cm4gRVMuSXNDYWxsYWJsZSh4KTtcbiAgICB9LFxuXG4gICAgVG9JbnQzMjogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBFUy5Ub051bWJlcih4KSA+PiAwO1xuICAgIH0sXG5cbiAgICBUb1VpbnQzMjogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBFUy5Ub051bWJlcih4KSA+Pj4gMDtcbiAgICB9LFxuXG4gICAgVG9OdW1iZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKGhhc1N5bWJvbHMgJiYgX3RvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiArdmFsdWU7XG4gICAgfSxcblxuICAgIFRvSW50ZWdlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gRVMuVG9OdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKG51bWJlcklzTmFOKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIW51bWJlcklzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIF9mbG9vcihfYWJzKG51bWJlcikpO1xuICAgIH0sXG5cbiAgICBUb0xlbmd0aDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gRVMuVG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgIGlmIChsZW4gPD0gMCkgeyByZXR1cm4gMDsgfSAvLyBpbmNsdWRlcyBjb252ZXJ0aW5nIC0wIHRvICswXG4gICAgICBpZiAobGVuID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHsgcmV0dXJuIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSOyB9XG4gICAgICByZXR1cm4gbGVuO1xuICAgIH0sXG5cbiAgICBTYW1lVmFsdWU6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG4gICAgICAgIGlmIChhID09PSAwKSB7IHJldHVybiAxIC8gYSA9PT0gMSAvIGI7IH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtYmVySXNOYU4oYSkgJiYgbnVtYmVySXNOYU4oYik7XG4gICAgfSxcblxuICAgIFNhbWVWYWx1ZVplcm86IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAvLyBzYW1lIGFzIFNhbWVWYWx1ZSBleGNlcHQgZm9yIFNhbWVWYWx1ZVplcm8oKzAsIC0wKSA9PSB0cnVlXG4gICAgICByZXR1cm4gKGEgPT09IGIpIHx8IChudW1iZXJJc05hTihhKSAmJiBudW1iZXJJc05hTihiKSk7XG4gICAgfSxcblxuICAgIEdldEl0ZXJhdG9yOiBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG8pKSB7XG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBzdXBwb3J0IGZvciBgYXJndW1lbnRzYFxuICAgICAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IobywgJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgICB2YXIgaXRGbiA9IEVTLkdldE1ldGhvZChvLCAkaXRlcmF0b3IkKTtcbiAgICAgIGlmICghRVMuSXNDYWxsYWJsZShpdEZuKSkge1xuICAgICAgICAvLyBCZXR0ZXIgZGlhZ25vc3RpY3MgaWYgaXRGbiBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBub3QgYW4gaXRlcmFibGUnKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdCA9IEVTLkNhbGwoaXRGbiwgbyk7XG4gICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChpdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIGl0ZXJhdG9yJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfSxcblxuICAgIEdldE1ldGhvZDogZnVuY3Rpb24gKG8sIHApIHtcbiAgICAgIHZhciBmdW5jID0gRVMuVG9PYmplY3QobylbcF07XG4gICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGlmICghRVMuSXNDYWxsYWJsZShmdW5jKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNZXRob2Qgbm90IGNhbGxhYmxlOiAnICsgcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuYztcbiAgICB9LFxuXG4gICAgSXRlcmF0b3JDb21wbGV0ZTogZnVuY3Rpb24gKGl0ZXJSZXN1bHQpIHtcbiAgICAgIHJldHVybiAhIWl0ZXJSZXN1bHQuZG9uZTtcbiAgICB9LFxuXG4gICAgSXRlcmF0b3JDbG9zZTogZnVuY3Rpb24gKGl0ZXJhdG9yLCBjb21wbGV0aW9uSXNUaHJvdykge1xuICAgICAgdmFyIHJldHVybk1ldGhvZCA9IEVTLkdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgaWYgKHJldHVybk1ldGhvZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFeGNlcHRpb247XG4gICAgICB0cnkge1xuICAgICAgICBpbm5lclJlc3VsdCA9IEVTLkNhbGwocmV0dXJuTWV0aG9kLCBpdGVyYXRvcik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlubmVyRXhjZXB0aW9uID0gZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb21wbGV0aW9uSXNUaHJvdykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaW5uZXJFeGNlcHRpb24pIHtcbiAgICAgICAgdGhyb3cgaW5uZXJFeGNlcHRpb247XG4gICAgICB9XG4gICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChpbm5lclJlc3VsdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkl0ZXJhdG9yJ3MgcmV0dXJuIG1ldGhvZCByZXR1cm5lZCBhIG5vbi1vYmplY3QuXCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBJdGVyYXRvck5leHQ6IGZ1bmN0aW9uIChpdCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gaXQubmV4dChhcmd1bWVudHNbMV0pIDogaXQubmV4dCgpO1xuICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgaXRlcmF0b3InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIEl0ZXJhdG9yU3RlcDogZnVuY3Rpb24gKGl0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gRVMuSXRlcmF0b3JOZXh0KGl0KTtcbiAgICAgIHZhciBkb25lID0gRVMuSXRlcmF0b3JDb21wbGV0ZShyZXN1bHQpO1xuICAgICAgcmV0dXJuIGRvbmUgPyBmYWxzZSA6IHJlc3VsdDtcbiAgICB9LFxuXG4gICAgQ29uc3RydWN0OiBmdW5jdGlvbiAoQywgYXJncywgbmV3VGFyZ2V0LCBpc0VTNmludGVybmFsKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIG5ld1RhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyBDIDogbmV3VGFyZ2V0O1xuXG4gICAgICBpZiAoIWlzRVM2aW50ZXJuYWwgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHVzZSBSZWZsZWN0LmNvbnN0cnVjdCBpZiBhdmFpbGFibGVcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KEMsIGFyZ3MsIHRhcmdldCk7XG4gICAgICB9XG4gICAgICAvLyBPSywgd2UgaGF2ZSB0byBmYWtlIGl0LiAgVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGVcbiAgICAgIC8vIEMuW1tDb25zdHJ1Y3RvcktpbmRdXSA9PSBcImJhc2VcIiAtLSBidXQgdGhhdCdzIHRoZSBvbmx5XG4gICAgICAvLyBraW5kIHdlIGNhbiBtYWtlIGluIEVTNSBjb2RlIGFueXdheS5cblxuICAgICAgLy8gT3JkaW5hcnlDcmVhdGVGcm9tQ29uc3RydWN0b3IodGFyZ2V0LCBcIiVPYmplY3RQcm90b3R5cGUlXCIpXG4gICAgICB2YXIgcHJvdG8gPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QocHJvdG8pKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgICAgIH1cbiAgICAgIHZhciBvYmogPSBjcmVhdGUocHJvdG8pO1xuICAgICAgLy8gQ2FsbCB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgcmVzdWx0ID0gRVMuQ2FsbChDLCBvYmosIGFyZ3MpO1xuICAgICAgcmV0dXJuIEVTLlR5cGVJc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogb2JqO1xuICAgIH0sXG5cbiAgICBTcGVjaWVzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgICAgIHZhciBDID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChDID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3RvcjtcbiAgICAgIH1cbiAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KEMpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBjb25zdHJ1Y3RvcicpO1xuICAgICAgfVxuICAgICAgdmFyIFMgPSBDW3N5bWJvbFNwZWNpZXNdO1xuICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKFMpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG4gICAgICB9XG4gICAgICBpZiAoIUVTLklzQ29uc3RydWN0b3IoUykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIEBAc3BlY2llcycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFM7XG4gICAgfSxcblxuICAgIENyZWF0ZUhUTUw6IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgdmFyIFMgPSBFUy5Ub1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHAxID0gJzwnICsgdGFnO1xuICAgICAgaWYgKGF0dHJpYnV0ZSAhPT0gJycpIHtcbiAgICAgICAgdmFyIFYgPSBFUy5Ub1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIHZhciBlc2NhcGVkViA9IFYucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgICAgICBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIGVzY2FwZWRWICsgJ1wiJztcbiAgICAgIH1cbiAgICAgIHZhciBwMiA9IHAxICsgJz4nO1xuICAgICAgdmFyIHAzID0gcDIgKyBTO1xuICAgICAgcmV0dXJuIHAzICsgJzwvJyArIHRhZyArICc+JztcbiAgICB9LFxuXG4gICAgSXNSZWdFeHA6IGZ1bmN0aW9uIElzUmVnRXhwKGFyZ3VtZW50KSB7XG4gICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChhcmd1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIGlzUmVnRXhwID0gYXJndW1lbnRbU3ltYm9sLm1hdGNoXTtcbiAgICAgIGlmICh0eXBlb2YgaXNSZWdFeHAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAhIWlzUmVnRXhwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFR5cGUucmVnZXgoYXJndW1lbnQpO1xuICAgIH0sXG5cbiAgICBUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoc3RyaW5nKSB7XG4gICAgICBpZiAoaGFzU3ltYm9scyAmJiBfdG9TdHJpbmcoc3RyaW5nKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkU3RyaW5nKHN0cmluZyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFdlbGwta25vd24gU3ltYm9sIHNoaW1zXG4gIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzICYmIGhhc1N5bWJvbHMpIHtcbiAgICB2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gZnVuY3Rpb24gZGVmaW5lV2VsbEtub3duU3ltYm9sKG5hbWUpIHtcbiAgICAgIGlmIChUeXBlLnN5bWJvbChTeW1ib2xbbmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBTeW1ib2xbbmFtZV07XG4gICAgICB9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG4gICAgICB2YXIgc3ltID0gU3ltYm9sWydmb3InXSgnU3ltYm9sLicgKyBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTeW1ib2wsIG5hbWUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHN5bVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3ltO1xuICAgIH07XG4gICAgaWYgKCFUeXBlLnN5bWJvbChTeW1ib2wuc2VhcmNoKSkge1xuICAgICAgdmFyIHN5bWJvbFNlYXJjaCA9IGRlZmluZVdlbGxLbm93blN5bWJvbCgnc2VhcmNoJyk7XG4gICAgICB2YXIgb3JpZ2luYWxTZWFyY2ggPSBTdHJpbmcucHJvdG90eXBlLnNlYXJjaDtcbiAgICAgIGRlZmluZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGUsIHN5bWJvbFNlYXJjaCwgZnVuY3Rpb24gc2VhcmNoKHN0cmluZykge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFNlYXJjaCwgc3RyaW5nLCBbdGhpc10pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc2VhcmNoU2hpbSA9IGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgICAgdmFyIE8gPSBFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHJlZ2V4cCkpIHtcbiAgICAgICAgICB2YXIgc2VhcmNoZXIgPSBFUy5HZXRNZXRob2QocmVnZXhwLCBzeW1ib2xTZWFyY2gpO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gRVMuQ2FsbChzZWFyY2hlciwgcmVnZXhwLCBbT10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFNlYXJjaCwgTywgW0VTLlRvU3RyaW5nKHJlZ2V4cCldKTtcbiAgICAgIH07XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnc2VhcmNoJywgc2VhcmNoU2hpbSk7XG4gICAgfVxuICAgIGlmICghVHlwZS5zeW1ib2woU3ltYm9sLnJlcGxhY2UpKSB7XG4gICAgICB2YXIgc3ltYm9sUmVwbGFjZSA9IGRlZmluZVdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xuICAgICAgdmFyIG9yaWdpbmFsUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbiAgICAgIGRlZmluZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGUsIHN5bWJvbFJlcGxhY2UsIGZ1bmN0aW9uIHJlcGxhY2Uoc3RyaW5nLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxSZXBsYWNlLCBzdHJpbmcsIFt0aGlzLCByZXBsYWNlVmFsdWVdKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJlcGxhY2VTaGltID0gZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgIHZhciBPID0gRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChzZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXIgPSBFUy5HZXRNZXRob2Qoc2VhcmNoVmFsdWUsIHN5bWJvbFJlcGxhY2UpO1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gRVMuQ2FsbChyZXBsYWNlciwgc2VhcmNoVmFsdWUsIFtPLCByZXBsYWNlVmFsdWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxSZXBsYWNlLCBPLCBbRVMuVG9TdHJpbmcoc2VhcmNoVmFsdWUpLCByZXBsYWNlVmFsdWVdKTtcbiAgICAgIH07XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAncmVwbGFjZScsIHJlcGxhY2VTaGltKTtcbiAgICB9XG4gICAgaWYgKCFUeXBlLnN5bWJvbChTeW1ib2wuc3BsaXQpKSB7XG4gICAgICB2YXIgc3ltYm9sU3BsaXQgPSBkZWZpbmVXZWxsS25vd25TeW1ib2woJ3NwbGl0Jyk7XG4gICAgICB2YXIgb3JpZ2luYWxTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlLCBzeW1ib2xTcGxpdCwgZnVuY3Rpb24gc3BsaXQoc3RyaW5nLCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFNwbGl0LCBzdHJpbmcsIFt0aGlzLCBsaW1pdF0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3BsaXRTaGltID0gZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgTyA9IEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoc2VwYXJhdG9yKSkge1xuICAgICAgICAgIHZhciBzcGxpdHRlciA9IEVTLkdldE1ldGhvZChzZXBhcmF0b3IsIHN5bWJvbFNwbGl0KTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNwbGl0dGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIEVTLkNhbGwoc3BsaXR0ZXIsIHNlcGFyYXRvciwgW08sIGxpbWl0XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsU3BsaXQsIE8sIFtFUy5Ub1N0cmluZyhzZXBhcmF0b3IpLCBsaW1pdF0pO1xuICAgICAgfTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFN0cmluZy5wcm90b3R5cGUsICdzcGxpdCcsIHNwbGl0U2hpbSk7XG4gICAgfVxuICAgIHZhciBzeW1ib2xNYXRjaEV4aXN0cyA9IFR5cGUuc3ltYm9sKFN5bWJvbC5tYXRjaCk7XG4gICAgdmFyIHN0cmluZ01hdGNoSWdub3Jlc1N5bWJvbE1hdGNoID0gc3ltYm9sTWF0Y2hFeGlzdHMgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEZpcmVmb3ggNDEsIHRocm91Z2ggTmlnaHRseSA0NSBoYXMgU3ltYm9sLm1hdGNoLCBidXQgU3RyaW5nI21hdGNoIGlnbm9yZXMgaXQuXG4gICAgICAvLyBGaXJlZm94IDQwIGFuZCBiZWxvdyBoYXZlIFN5bWJvbC5tYXRjaCBidXQgU3RyaW5nI21hdGNoIHdvcmtzIGZpbmUuXG4gICAgICB2YXIgbyA9IHt9O1xuICAgICAgb1tTeW1ib2wubWF0Y2hdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDI7IH07XG4gICAgICByZXR1cm4gJ2EnLm1hdGNoKG8pICE9PSA0MjtcbiAgICB9KCkpO1xuICAgIGlmICghc3ltYm9sTWF0Y2hFeGlzdHMgfHwgc3RyaW5nTWF0Y2hJZ25vcmVzU3ltYm9sTWF0Y2gpIHtcbiAgICAgIHZhciBzeW1ib2xNYXRjaCA9IGRlZmluZVdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuICAgICAgdmFyIG9yaWdpbmFsTWF0Y2ggPSBTdHJpbmcucHJvdG90eXBlLm1hdGNoO1xuICAgICAgZGVmaW5lUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZSwgc3ltYm9sTWF0Y2gsIGZ1bmN0aW9uIG1hdGNoKHN0cmluZykge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbE1hdGNoLCBzdHJpbmcsIFt0aGlzXSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG1hdGNoU2hpbSA9IGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgICB2YXIgTyA9IEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQocmVnZXhwKSkge1xuICAgICAgICAgIHZhciBtYXRjaGVyID0gRVMuR2V0TWV0aG9kKHJlZ2V4cCwgc3ltYm9sTWF0Y2gpO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWF0Y2hlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBFUy5DYWxsKG1hdGNoZXIsIHJlZ2V4cCwgW09dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxNYXRjaCwgTywgW0VTLlRvU3RyaW5nKHJlZ2V4cCldKTtcbiAgICAgIH07XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnbWF0Y2gnLCBtYXRjaFNoaW0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB3cmFwQ29uc3RydWN0b3IgPSBmdW5jdGlvbiB3cmFwQ29uc3RydWN0b3Iob3JpZ2luYWwsIHJlcGxhY2VtZW50LCBrZXlzVG9Ta2lwKSB7XG4gICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIC8vIHNldHMgdXAgcHJvcGVyIHByb3RvdHlwZSBjaGFpbiB3aGVyZSBwb3NzaWJsZVxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG9yaWdpbmFsLCByZXBsYWNlbWVudCk7XG4gICAgfVxuICAgIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG4gICAgICBfZm9yRWFjaChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW5hbCksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiBub29wIHx8IGtleXNUb1NraXBba2V5XSkgeyByZXR1cm47IH1cbiAgICAgICAgVmFsdWUucHJveHkob3JpZ2luYWwsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9mb3JFYWNoKE9iamVjdC5rZXlzKG9yaWdpbmFsKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5IGluIG5vb3AgfHwga2V5c1RvU2tpcFtrZXldKSB7IHJldHVybjsgfVxuICAgICAgICByZXBsYWNlbWVudFtrZXldID0gb3JpZ2luYWxba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXBsYWNlbWVudC5wcm90b3R5cGUgPSBvcmlnaW5hbC5wcm90b3R5cGU7XG4gICAgVmFsdWUucmVkZWZpbmUob3JpZ2luYWwucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCByZXBsYWNlbWVudCk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRTcGVjaWVzR2V0dGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgdmFyIGFkZERlZmF1bHRTcGVjaWVzID0gZnVuY3Rpb24gKEMpIHtcbiAgICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycyAmJiAhX2hhc093blByb3BlcnR5KEMsIHN5bWJvbFNwZWNpZXMpKSB7XG4gICAgICBWYWx1ZS5nZXR0ZXIoQywgc3ltYm9sU3BlY2llcywgZGVmYXVsdFNwZWNpZXNHZXR0ZXIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgYWRkSXRlcmF0b3IgPSBmdW5jdGlvbiAocHJvdG90eXBlLCBpbXBsKSB7XG4gICAgdmFyIGltcGxlbWVudGF0aW9uID0gaW1wbCB8fCBmdW5jdGlvbiBpdGVyYXRvcigpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAkaXRlcmF0b3IkLCBpbXBsZW1lbnRhdGlvbik7XG4gICAgaWYgKCFwcm90b3R5cGVbJGl0ZXJhdG9yJF0gJiYgVHlwZS5zeW1ib2woJGl0ZXJhdG9yJCkpIHtcbiAgICAgIC8vIGltcGxlbWVudGF0aW9ucyBhcmUgYnVnZ3kgd2hlbiAkaXRlcmF0b3IkIGlzIGEgU3ltYm9sXG4gICAgICBwcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZURhdGFQcm9wZXJ0eSA9IGZ1bmN0aW9uIGNyZWF0ZURhdGFQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9O1xuICB2YXIgY3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyA9IGZ1bmN0aW9uIGNyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3cob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNyZWF0ZURhdGFQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKTtcbiAgICBpZiAoIUVTLlNhbWVWYWx1ZShvYmplY3RbbmFtZV0sIHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJvcGVydHkgaXMgbm9uY29uZmlndXJhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBlbXVsYXRlRVM2Y29uc3RydWN0ID0gZnVuY3Rpb24gKG8sIGRlZmF1bHROZXdUYXJnZXQsIGRlZmF1bHRQcm90bywgc2xvdHMpIHtcbiAgICAvLyBUaGlzIGlzIGFuIGVzNSBhcHByb3hpbWF0aW9uIHRvIGVzNiBjb25zdHJ1Y3Qgc2VtYW50aWNzLiAgaW4gZXM2LFxuICAgIC8vICduZXcgRm9vJyBpbnZva2VzIEZvby5bW0NvbnN0cnVjdF1dIHdoaWNoIChmb3IgYWxtb3N0IGFsbCBvYmplY3RzKVxuICAgIC8vIGp1c3Qgc2V0cyB0aGUgaW50ZXJuYWwgdmFyaWFibGUgTmV3VGFyZ2V0IChpbiBlczYgc3ludGF4IGBuZXcudGFyZ2V0YClcbiAgICAvLyB0byBGb28gYW5kIHRoZW4gcmV0dXJucyBGb28oKS5cblxuICAgIC8vIE1hbnkgRVM2IG9iamVjdCB0aGVuIGhhdmUgY29uc3RydWN0b3JzIG9mIHRoZSBmb3JtOlxuICAgIC8vIDEuIElmIE5ld1RhcmdldCBpcyB1bmRlZmluZWQsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvblxuICAgIC8vIDIuIExldCB4eHggYnkgT3JkaW5hcnlDcmVhdGVGcm9tQ29uc3RydWN0b3IoTmV3VGFyZ2V0LCB5eXksIHp6eilcblxuICAgIC8vIFNvIHdlJ3JlIGdvaW5nIHRvIGVtdWxhdGUgdGhvc2UgZmlyc3QgdHdvIHN0ZXBzLlxuICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KG8pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25zdHJ1Y3RvciByZXF1aXJlcyBgbmV3YDogJyArIGRlZmF1bHROZXdUYXJnZXQubmFtZSk7XG4gICAgfVxuICAgIHZhciBwcm90byA9IGRlZmF1bHROZXdUYXJnZXQucHJvdG90eXBlO1xuICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcHJvdG8gPSBkZWZhdWx0UHJvdG87XG4gICAgfVxuICAgIHZhciBvYmogPSBjcmVhdGUocHJvdG8pO1xuICAgIGZvciAodmFyIG5hbWUgaW4gc2xvdHMpIHtcbiAgICAgIGlmIChfaGFzT3duUHJvcGVydHkoc2xvdHMsIG5hbWUpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNsb3RzW25hbWVdO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBGaXJlZm94IDMxIHJlcG9ydHMgdGhpcyBmdW5jdGlvbidzIGxlbmd0aCBhcyAwXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwNjI0ODRcbiAgaWYgKFN0cmluZy5mcm9tQ29kZVBvaW50ICYmIFN0cmluZy5mcm9tQ29kZVBvaW50Lmxlbmd0aCAhPT0gMSkge1xuICAgIHZhciBvcmlnaW5hbEZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcbiAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcsICdmcm9tQ29kZVBvaW50JywgZnVuY3Rpb24gZnJvbUNvZGVQb2ludChjb2RlUG9pbnRzKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbEZyb21Db2RlUG9pbnQsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgU3RyaW5nU2hpbXMgPSB7XG4gICAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludChjb2RlUG9pbnRzKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YXIgbmV4dDtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV4dCA9IE51bWJlcihhcmd1bWVudHNbaV0pO1xuICAgICAgICBpZiAoIUVTLlNhbWVWYWx1ZShuZXh0LCBFUy5Ub0ludGVnZXIobmV4dCkpIHx8IG5leHQgPCAwIHx8IG5leHQgPiAweDEwRkZGRikge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQgJyArIG5leHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHQgPCAweDEwMDAwKSB7XG4gICAgICAgICAgX3B1c2gocmVzdWx0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0IC09IDB4MTAwMDA7XG4gICAgICAgICAgX3B1c2gocmVzdWx0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKChuZXh0ID4+IDEwKSArIDB4RDgwMCkpO1xuICAgICAgICAgIF9wdXNoKHJlc3VsdCwgU3RyaW5nLmZyb21DaGFyQ29kZSgobmV4dCAlIDB4NDAwKSArIDB4REMwMCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX2pvaW4ocmVzdWx0LCAnJyk7XG4gICAgfSxcblxuICAgIHJhdzogZnVuY3Rpb24gcmF3KHRlbXBsYXRlKSB7XG4gICAgICB2YXIgbnVtYmVyT2ZTdWJzdGl0dXRpb25zID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgY29va2VkID0gRVMuVG9PYmplY3QodGVtcGxhdGUsICdiYWQgdGVtcGxhdGUnKTtcbiAgICAgIHZhciByYXcgPSBFUy5Ub09iamVjdChjb29rZWQucmF3LCAnYmFkIHJhdyB2YWx1ZScpO1xuICAgICAgdmFyIGxlbiA9IHJhdy5sZW5ndGg7XG4gICAgICB2YXIgbGl0ZXJhbFNlZ21lbnRzID0gRVMuVG9MZW5ndGgobGVuKTtcbiAgICAgIGlmIChsaXRlcmFsU2VnbWVudHMgPD0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHJpbmdFbGVtZW50cyA9IFtdO1xuICAgICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgICB2YXIgbmV4dEtleSwgbmV4dCwgbmV4dFNlZywgbmV4dFN1YjtcbiAgICAgIHdoaWxlIChuZXh0SW5kZXggPCBsaXRlcmFsU2VnbWVudHMpIHtcbiAgICAgICAgbmV4dEtleSA9IEVTLlRvU3RyaW5nKG5leHRJbmRleCk7XG4gICAgICAgIG5leHRTZWcgPSBFUy5Ub1N0cmluZyhyYXdbbmV4dEtleV0pO1xuICAgICAgICBfcHVzaChzdHJpbmdFbGVtZW50cywgbmV4dFNlZyk7XG4gICAgICAgIGlmIChuZXh0SW5kZXggKyAxID49IGxpdGVyYWxTZWdtZW50cykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5leHQgPSBuZXh0SW5kZXggKyAxIDwgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1tuZXh0SW5kZXggKyAxXSA6ICcnO1xuICAgICAgICBuZXh0U3ViID0gRVMuVG9TdHJpbmcobmV4dCk7XG4gICAgICAgIF9wdXNoKHN0cmluZ0VsZW1lbnRzLCBuZXh0U3ViKTtcbiAgICAgICAgbmV4dEluZGV4ICs9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2pvaW4oc3RyaW5nRWxlbWVudHMsICcnKTtcbiAgICB9XG4gIH07XG4gIGlmIChTdHJpbmcucmF3ICYmIFN0cmluZy5yYXcoeyByYXc6IHsgMDogJ3gnLCAxOiAneScsIGxlbmd0aDogMiB9IH0pICE9PSAneHknKSB7XG4gICAgLy8gSUUgMTEgVFAgaGFzIGEgYnJva2VuIFN0cmluZy5yYXcgaW1wbGVtZW50YXRpb25cbiAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcsICdyYXcnLCBTdHJpbmdTaGltcy5yYXcpO1xuICB9XG4gIGRlZmluZVByb3BlcnRpZXMoU3RyaW5nLCBTdHJpbmdTaGltcyk7XG5cbiAgLy8gRmFzdCByZXBlYXQsIHVzZXMgdGhlIGBFeHBvbmVudGlhdGlvbiBieSBzcXVhcmluZ2AgYWxnb3JpdGhtLlxuICAvLyBQZXJmOiBodHRwOi8vanNwZXJmLmNvbS9zdHJpbmctcmVwZWF0Mi8yXG4gIHZhciBzdHJpbmdSZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQocywgdGltZXMpIHtcbiAgICBpZiAodGltZXMgPCAxKSB7IHJldHVybiAnJzsgfVxuICAgIGlmICh0aW1lcyAlIDIpIHsgcmV0dXJuIHJlcGVhdChzLCB0aW1lcyAtIDEpICsgczsgfVxuICAgIHZhciBoYWxmID0gcmVwZWF0KHMsIHRpbWVzIC8gMik7XG4gICAgcmV0dXJuIGhhbGYgKyBoYWxmO1xuICB9O1xuICB2YXIgc3RyaW5nTWF4TGVuZ3RoID0gSW5maW5pdHk7XG5cbiAgdmFyIFN0cmluZ1Byb3RvdHlwZVNoaW1zID0ge1xuICAgIHJlcGVhdDogZnVuY3Rpb24gcmVwZWF0KHRpbWVzKSB7XG4gICAgICB2YXIgdGhpc1N0ciA9IEVTLlRvU3RyaW5nKEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgdmFyIG51bVRpbWVzID0gRVMuVG9JbnRlZ2VyKHRpbWVzKTtcbiAgICAgIGlmIChudW1UaW1lcyA8IDAgfHwgbnVtVGltZXMgPj0gc3RyaW5nTWF4TGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdyZXBlYXQgY291bnQgbXVzdCBiZSBsZXNzIHRoYW4gaW5maW5pdHkgYW5kIG5vdCBvdmVyZmxvdyBtYXhpbXVtIHN0cmluZyBzaXplJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyaW5nUmVwZWF0KHRoaXNTdHIsIG51bVRpbWVzKTtcbiAgICB9LFxuXG4gICAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcpIHtcbiAgICAgIHZhciBTID0gRVMuVG9TdHJpbmcoRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICBpZiAoRVMuSXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2QgXCJzdGFydHNXaXRoXCIgd2l0aCBhIHJlZ2V4Jyk7XG4gICAgICB9XG4gICAgICB2YXIgc2VhcmNoU3RyID0gRVMuVG9TdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICAgIHZhciBwb3NpdGlvbjtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBwb3NpdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIH1cbiAgICAgIHZhciBzdGFydCA9IF9tYXgoRVMuVG9JbnRlZ2VyKHBvc2l0aW9uKSwgMCk7XG4gICAgICByZXR1cm4gX3N0clNsaWNlKFMsIHN0YXJ0LCBzdGFydCArIHNlYXJjaFN0ci5sZW5ndGgpID09PSBzZWFyY2hTdHI7XG4gICAgfSxcblxuICAgIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcpIHtcbiAgICAgIHZhciBTID0gRVMuVG9TdHJpbmcoRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICBpZiAoRVMuSXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2QgXCJlbmRzV2l0aFwiIHdpdGggYSByZWdleCcpO1xuICAgICAgfVxuICAgICAgdmFyIHNlYXJjaFN0ciA9IEVTLlRvU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgICB2YXIgbGVuID0gUy5sZW5ndGg7XG4gICAgICB2YXIgZW5kUG9zaXRpb247XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZW5kUG9zaXRpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICB2YXIgcG9zID0gdHlwZW9mIGVuZFBvc2l0aW9uID09PSAndW5kZWZpbmVkJyA/IGxlbiA6IEVTLlRvSW50ZWdlcihlbmRQb3NpdGlvbik7XG4gICAgICB2YXIgZW5kID0gX21pbihfbWF4KHBvcywgMCksIGxlbik7XG4gICAgICByZXR1cm4gX3N0clNsaWNlKFMsIGVuZCAtIHNlYXJjaFN0ci5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaFN0cjtcbiAgICB9LFxuXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZykge1xuICAgICAgaWYgKEVTLklzUmVnRXhwKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJpbmNsdWRlc1wiIGRvZXMgbm90IGFjY2VwdCBhIFJlZ0V4cCcpO1xuICAgICAgfVxuICAgICAgdmFyIHNlYXJjaFN0ciA9IEVTLlRvU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgICB2YXIgcG9zaXRpb247XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcG9zaXRpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICAvLyBTb21laG93IHRoaXMgdHJpY2sgbWFrZXMgbWV0aG9kIDEwMCUgY29tcGF0IHdpdGggdGhlIHNwZWMuXG4gICAgICByZXR1cm4gX2luZGV4T2YodGhpcywgc2VhcmNoU3RyLCBwb3NpdGlvbikgIT09IC0xO1xuICAgIH0sXG5cbiAgICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKSB7XG4gICAgICB2YXIgdGhpc1N0ciA9IEVTLlRvU3RyaW5nKEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgdmFyIHBvc2l0aW9uID0gRVMuVG9JbnRlZ2VyKHBvcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpc1N0ci5sZW5ndGg7XG4gICAgICBpZiAocG9zaXRpb24gPj0gMCAmJiBwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgZmlyc3QgPSB0aGlzU3RyLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgICB2YXIgaXNFbmQgPSBwb3NpdGlvbiArIDEgPT09IGxlbmd0aDtcbiAgICAgICAgaWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IGlzRW5kKSB7IHJldHVybiBmaXJzdDsgfVxuICAgICAgICB2YXIgc2Vjb25kID0gdGhpc1N0ci5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSk7XG4gICAgICAgIGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7IHJldHVybiBmaXJzdDsgfVxuICAgICAgICByZXR1cm4gKChmaXJzdCAtIDB4RDgwMCkgKiAxMDI0KSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGlmIChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzICYmICdhJy5pbmNsdWRlcygnYScsIEluZmluaXR5KSAhPT0gZmFsc2UpIHtcbiAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnaW5jbHVkZXMnLCBTdHJpbmdQcm90b3R5cGVTaGltcy5pbmNsdWRlcyk7XG4gIH1cblxuICBpZiAoU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoICYmIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgpIHtcbiAgICB2YXIgc3RhcnRzV2l0aFJlamVjdHNSZWdleCA9IHRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qIHRocm93cyBpZiBzcGVjLWNvbXBsaWFudCAqL1xuICAgICAgcmV0dXJuICcvYS8nLnN0YXJ0c1dpdGgoL2EvKTtcbiAgICB9KTtcbiAgICB2YXIgc3RhcnRzV2l0aEhhbmRsZXNJbmZpbml0eSA9IHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnYWJjJy5zdGFydHNXaXRoKCdhJywgSW5maW5pdHkpID09PSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoIXN0YXJ0c1dpdGhSZWplY3RzUmVnZXggfHwgIXN0YXJ0c1dpdGhIYW5kbGVzSW5maW5pdHkpIHtcbiAgICAgIC8vIEZpcmVmb3ggKDwgMzc/KSBhbmQgSUUgMTEgVFAgaGF2ZSBhIG5vbmNvbXBsaWFudCBzdGFydHNXaXRoIGltcGxlbWVudGF0aW9uXG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnc3RhcnRzV2l0aCcsIFN0cmluZ1Byb3RvdHlwZVNoaW1zLnN0YXJ0c1dpdGgpO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoU3RyaW5nLnByb3RvdHlwZSwgJ2VuZHNXaXRoJywgU3RyaW5nUHJvdG90eXBlU2hpbXMuZW5kc1dpdGgpO1xuICAgIH1cbiAgfVxuICBpZiAoaGFzU3ltYm9scykge1xuICAgIHZhciBzdGFydHNXaXRoU3VwcG9ydHNTeW1ib2xNYXRjaCA9IHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZSA9IC9hLztcbiAgICAgIHJlW1N5bWJvbC5tYXRjaF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnL2EvJy5zdGFydHNXaXRoKHJlKTtcbiAgICB9KTtcbiAgICBpZiAoIXN0YXJ0c1dpdGhTdXBwb3J0c1N5bWJvbE1hdGNoKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShTdHJpbmcucHJvdG90eXBlLCAnc3RhcnRzV2l0aCcsIFN0cmluZ1Byb3RvdHlwZVNoaW1zLnN0YXJ0c1dpdGgpO1xuICAgIH1cbiAgICB2YXIgZW5kc1dpdGhTdXBwb3J0c1N5bWJvbE1hdGNoID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlID0gL2EvO1xuICAgICAgcmVbU3ltYm9sLm1hdGNoXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvYS8nLmVuZHNXaXRoKHJlKTtcbiAgICB9KTtcbiAgICBpZiAoIWVuZHNXaXRoU3VwcG9ydHNTeW1ib2xNYXRjaCkge1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoU3RyaW5nLnByb3RvdHlwZSwgJ2VuZHNXaXRoJywgU3RyaW5nUHJvdG90eXBlU2hpbXMuZW5kc1dpdGgpO1xuICAgIH1cbiAgICB2YXIgaW5jbHVkZXNTdXBwb3J0c1N5bWJvbE1hdGNoID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlID0gL2EvO1xuICAgICAgcmVbU3ltYm9sLm1hdGNoXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvYS8nLmluY2x1ZGVzKHJlKTtcbiAgICB9KTtcbiAgICBpZiAoIWluY2x1ZGVzU3VwcG9ydHNTeW1ib2xNYXRjaCkge1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoU3RyaW5nLnByb3RvdHlwZSwgJ2luY2x1ZGVzJywgU3RyaW5nUHJvdG90eXBlU2hpbXMuaW5jbHVkZXMpO1xuICAgIH1cbiAgfVxuXG4gIGRlZmluZVByb3BlcnRpZXMoU3RyaW5nLnByb3RvdHlwZSwgU3RyaW5nUHJvdG90eXBlU2hpbXMpO1xuXG4gIC8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbiAgdmFyIHdzID0gW1xuICAgICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycsXG4gICAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4JyxcbiAgICAnXFx1MjAyOVxcdUZFRkYnXG4gIF0uam9pbignJyk7XG4gIHZhciB0cmltUmVnZXhwID0gbmV3IFJlZ0V4cCgnKF5bJyArIHdzICsgJ10rKXwoWycgKyB3cyArICddKyQpJywgJ2cnKTtcbiAgdmFyIHRyaW1TaGltID0gZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gRVMuVG9TdHJpbmcoRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSkucmVwbGFjZSh0cmltUmVnZXhwLCAnJyk7XG4gIH07XG4gIHZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbiAgdmFyIG5vbldTcmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xuICB2YXIgaXNCYWRIZXhSZWdleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuICB2YXIgaGFzU3RyaW5nVHJpbUJ1ZyA9IG5vbldTLnRyaW0oKS5sZW5ndGggIT09IG5vbldTLmxlbmd0aDtcbiAgZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgJ3RyaW0nLCB0cmltU2hpbSwgaGFzU3RyaW5nVHJpbUJ1Zyk7XG5cbiAgLy8gR2l2ZW4gYW4gYXJndW1lbnQgeCwgaXQgd2lsbCByZXR1cm4gYW4gSXRlcmF0b3JSZXN1bHQgb2JqZWN0LFxuICAvLyB3aXRoIHZhbHVlIHNldCB0byB4IGFuZCBkb25lIHRvIGZhbHNlLlxuICAvLyBHaXZlbiBubyBhcmd1bWVudHMsIGl0IHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGNvbXBsZXRpb24gb2JqZWN0LlxuICB2YXIgaXRlcmF0b3JSZXN1bHQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB4LCBkb25lOiBhcmd1bWVudHMubGVuZ3RoID09PSAwIH07XG4gIH07XG5cbiAgLy8gc2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbiAgdmFyIFN0cmluZ0l0ZXJhdG9yID0gZnVuY3Rpb24gKHMpIHtcbiAgICBFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHMpO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdfcycsIEVTLlRvU3RyaW5nKHMpKTtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2knLCAwKTtcbiAgfTtcbiAgU3RyaW5nSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHMgPSB0aGlzLl9zO1xuICAgIHZhciBpID0gdGhpcy5faTtcbiAgICBpZiAodHlwZW9mIHMgPT09ICd1bmRlZmluZWQnIHx8IGkgPj0gcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3MgPSB2b2lkIDA7XG4gICAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQoKTtcbiAgICB9XG4gICAgdmFyIGZpcnN0ID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHZhciBzZWNvbmQsIGxlbjtcbiAgICBpZiAoZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgKGkgKyAxKSA9PT0gcy5sZW5ndGgpIHtcbiAgICAgIGxlbiA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY29uZCA9IHMuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICBsZW4gPSAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikgPyAxIDogMjtcbiAgICB9XG4gICAgdGhpcy5faSA9IGkgKyBsZW47XG4gICAgcmV0dXJuIGl0ZXJhdG9yUmVzdWx0KHMuc3Vic3RyKGksIGxlbikpO1xuICB9O1xuICBhZGRJdGVyYXRvcihTdHJpbmdJdGVyYXRvci5wcm90b3R5cGUpO1xuICBhZGRJdGVyYXRvcihTdHJpbmcucHJvdG90eXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdJdGVyYXRvcih0aGlzKTtcbiAgfSk7XG5cbiAgdmFyIEFycmF5U2hpbXMgPSB7XG4gICAgZnJvbTogZnVuY3Rpb24gZnJvbShpdGVtcykge1xuICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgdmFyIG1hcEZuO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgICAgfVxuICAgICAgdmFyIG1hcHBpbmcsIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtYXBwaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIUVTLklzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICAgIG1hcHBpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3RlIHRoYXQgdGhhdCBBcnJheXMgd2lsbCB1c2UgQXJyYXlJdGVyYXRvcjpcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5lY21hc2NyaXB0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjQxNlxuICAgICAgdmFyIHVzaW5nSXRlcmF0b3IgPSB0eXBlb2YgKGlzQXJndW1lbnRzKGl0ZW1zKSB8fCBFUy5HZXRNZXRob2QoaXRlbXMsICRpdGVyYXRvciQpKSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgaTtcbiAgICAgIGlmICh1c2luZ0l0ZXJhdG9yKSB7XG4gICAgICAgIHJlc3VsdCA9IEVTLklzQ29uc3RydWN0b3IoQykgPyBPYmplY3QobmV3IEMoKSkgOiBbXTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gRVMuR2V0SXRlcmF0b3IoaXRlbXMpO1xuICAgICAgICB2YXIgbmV4dCwgbmV4dFZhbHVlO1xuXG4gICAgICAgIGkgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIG5leHQgPSBFUy5JdGVyYXRvclN0ZXAoaXRlcmF0b3IpO1xuICAgICAgICAgIGlmIChuZXh0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5leHRWYWx1ZSA9IG5leHQudmFsdWU7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICAgICAgICAgIG5leHRWYWx1ZSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKG5leHRWYWx1ZSwgaSkgOiBfY2FsbChtYXBGbiwgVCwgbmV4dFZhbHVlLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBFUy5JdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCB0cnVlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFycmF5TGlrZSA9IEVTLlRvT2JqZWN0KGl0ZW1zKTtcbiAgICAgICAgbGVuZ3RoID0gRVMuVG9MZW5ndGgoYXJyYXlMaWtlLmxlbmd0aCk7XG4gICAgICAgIHJlc3VsdCA9IEVTLklzQ29uc3RydWN0b3IoQykgPyBPYmplY3QobmV3IEMobGVuZ3RoKSkgOiBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICB2YWx1ZSA9IGFycmF5TGlrZVtpXTtcbiAgICAgICAgICBpZiAobWFwcGluZykge1xuICAgICAgICAgICAgdmFsdWUgPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbih2YWx1ZSwgaSkgOiBfY2FsbChtYXBGbiwgVCwgdmFsdWUsIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjcmVhdGVEYXRhUHJvcGVydHlPclRocm93KHJlc3VsdCwgaSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBDID0gdGhpcztcbiAgICAgIHZhciBBID0gaXNBcnJheShDKSB8fCAhRVMuSXNDYWxsYWJsZShDKSA/IG5ldyBBcnJheShsZW4pIDogRVMuQ29uc3RydWN0KEMsIFtsZW5dKTtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbGVuOyArK2spIHtcbiAgICAgICAgY3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyhBLCBrLCBhcmd1bWVudHNba10pO1xuICAgICAgfVxuICAgICAgQS5sZW5ndGggPSBsZW47XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIH07XG4gIGRlZmluZVByb3BlcnRpZXMoQXJyYXksIEFycmF5U2hpbXMpO1xuICBhZGREZWZhdWx0U3BlY2llcyhBcnJheSk7XG5cbiAgLy8gT3VyIEFycmF5SXRlcmF0b3IgaXMgcHJpdmF0ZTsgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW0vaXNzdWVzLzI1MlxuICBBcnJheUl0ZXJhdG9yID0gZnVuY3Rpb24gKGFycmF5LCBraW5kKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2knLCAwKTtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYXJyYXknLCBhcnJheSk7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2tpbmQnLCBraW5kKTtcbiAgfTtcblxuICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5SXRlcmF0b3IucHJvdG90eXBlLCB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGkgPSB0aGlzLmk7XG4gICAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEFycmF5SXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBhbiBBcnJheUl0ZXJhdG9yJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgbGVuID0gRVMuVG9MZW5ndGgoYXJyYXkubGVuZ3RoKTtcbiAgICAgICAgaWYgKGkgPCBsZW4pIHtcbiAgICAgICAgLy9mb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgICAgdmFyIHJldHZhbDtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gJ2tleScpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IGk7XG4gICAgICAgICAgfSBlbHNlIGlmIChraW5kID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICByZXR2YWwgPSBhcnJheVtpXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtpbmQgPT09ICdlbnRyeScpIHtcbiAgICAgICAgICAgIHJldHZhbCA9IFtpLCBhcnJheVtpXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaSA9IGkgKyAxO1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvclJlc3VsdChyZXR2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFycmF5ID0gdm9pZCAwO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yUmVzdWx0KCk7XG4gICAgfVxuICB9KTtcbiAgYWRkSXRlcmF0b3IoQXJyYXlJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8qXG4gIHZhciBvcmRlcktleXMgPSBmdW5jdGlvbiBvcmRlcktleXMoYSwgYikge1xuICAgIHZhciBhTnVtZXJpYyA9IFN0cmluZyhFUy5Ub0ludGVnZXIoYSkpID09PSBhO1xuICAgIHZhciBiTnVtZXJpYyA9IFN0cmluZyhFUy5Ub0ludGVnZXIoYikpID09PSBiO1xuICAgIGlmIChhTnVtZXJpYyAmJiBiTnVtZXJpYykge1xuICAgICAgcmV0dXJuIGIgLSBhO1xuICAgIH0gZWxzZSBpZiAoYU51bWVyaWMgJiYgIWJOdW1lcmljKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmICghYU51bWVyaWMgJiYgYk51bWVyaWMpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYS5sb2NhbGVDb21wYXJlKGIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0QWxsS2V5cyA9IGZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gICAgdmFyIG93bktleXMgPSBbXTtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgX3B1c2goX2hhc093blByb3BlcnR5KG9iamVjdCwga2V5KSA/IG93bktleXMgOiBrZXlzLCBrZXkpO1xuICAgIH1cbiAgICBfc29ydChvd25LZXlzLCBvcmRlcktleXMpO1xuICAgIF9zb3J0KGtleXMsIG9yZGVyS2V5cyk7XG5cbiAgICByZXR1cm4gX2NvbmNhdChvd25LZXlzLCBrZXlzKTtcbiAgfTtcbiAgKi9cblxuICAvLyBub3RlOiB0aGlzIGlzIHBvc2l0aW9uZWQgaGVyZSBiZWNhdXNlIGl0IGRlcGVuZHMgb24gQXJyYXlJdGVyYXRvclxuICB2YXIgYXJyYXlPZlN1cHBvcnRzU3ViY2xhc3NpbmcgPSBBcnJheS5vZiA9PT0gQXJyYXlTaGltcy5vZiB8fCAoZnVuY3Rpb24gKCkge1xuICAgIC8vIERldGVjdHMgYSBidWcgaW4gV2Via2l0IG5pZ2h0bHkgcjE4MTg4NlxuICAgIHZhciBGb28gPSBmdW5jdGlvbiBGb28obGVuKSB7IHRoaXMubGVuZ3RoID0gbGVuOyB9O1xuICAgIEZvby5wcm90b3R5cGUgPSBbXTtcbiAgICB2YXIgZm9vQXJyID0gQXJyYXkub2YuYXBwbHkoRm9vLCBbMSwgMl0pO1xuICAgIHJldHVybiBmb29BcnIgaW5zdGFuY2VvZiBGb28gJiYgZm9vQXJyLmxlbmd0aCA9PT0gMjtcbiAgfSgpKTtcbiAgaWYgKCFhcnJheU9mU3VwcG9ydHNTdWJjbGFzc2luZykge1xuICAgIG92ZXJyaWRlTmF0aXZlKEFycmF5LCAnb2YnLCBBcnJheVNoaW1zLm9mKTtcbiAgfVxuXG4gIHZhciBBcnJheVByb3RvdHlwZVNoaW1zID0ge1xuICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCkge1xuICAgICAgdmFyIG8gPSBFUy5Ub09iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW4gPSBFUy5Ub0xlbmd0aChvLmxlbmd0aCk7XG4gICAgICB2YXIgcmVsYXRpdmVUYXJnZXQgPSBFUy5Ub0ludGVnZXIodGFyZ2V0KTtcbiAgICAgIHZhciByZWxhdGl2ZVN0YXJ0ID0gRVMuVG9JbnRlZ2VyKHN0YXJ0KTtcbiAgICAgIHZhciB0byA9IHJlbGF0aXZlVGFyZ2V0IDwgMCA/IF9tYXgobGVuICsgcmVsYXRpdmVUYXJnZXQsIDApIDogX21pbihyZWxhdGl2ZVRhcmdldCwgbGVuKTtcbiAgICAgIHZhciBmcm9tID0gcmVsYXRpdmVTdGFydCA8IDAgPyBfbWF4KGxlbiArIHJlbGF0aXZlU3RhcnQsIDApIDogX21pbihyZWxhdGl2ZVN0YXJ0LCBsZW4pO1xuICAgICAgdmFyIGVuZDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICBlbmQgPSBhcmd1bWVudHNbMl07XG4gICAgICB9XG4gICAgICB2YXIgcmVsYXRpdmVFbmQgPSB0eXBlb2YgZW5kID09PSAndW5kZWZpbmVkJyA/IGxlbiA6IEVTLlRvSW50ZWdlcihlbmQpO1xuICAgICAgdmFyIGZpbmFsSXRlbSA9IHJlbGF0aXZlRW5kIDwgMCA/IF9tYXgobGVuICsgcmVsYXRpdmVFbmQsIDApIDogX21pbihyZWxhdGl2ZUVuZCwgbGVuKTtcbiAgICAgIHZhciBjb3VudCA9IF9taW4oZmluYWxJdGVtIC0gZnJvbSwgbGVuIC0gdG8pO1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IDE7XG4gICAgICBpZiAoZnJvbSA8IHRvICYmIHRvIDwgKGZyb20gKyBjb3VudCkpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgICAgICB0byArPSBjb3VudCAtIDE7XG4gICAgICB9XG4gICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgIGlmIChmcm9tIGluIG8pIHtcbiAgICAgICAgICBvW3RvXSA9IG9bZnJvbV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIG9bdG9dO1xuICAgICAgICB9XG4gICAgICAgIGZyb20gKz0gZGlyZWN0aW9uO1xuICAgICAgICB0byArPSBkaXJlY3Rpb247XG4gICAgICAgIGNvdW50IC09IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbztcbiAgICB9LFxuXG4gICAgZmlsbDogZnVuY3Rpb24gZmlsbCh2YWx1ZSkge1xuICAgICAgdmFyIHN0YXJ0O1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN0YXJ0ID0gYXJndW1lbnRzWzFdO1xuICAgICAgfVxuICAgICAgdmFyIGVuZDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICBlbmQgPSBhcmd1bWVudHNbMl07XG4gICAgICB9XG4gICAgICB2YXIgTyA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbiA9IEVTLlRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIHN0YXJ0ID0gRVMuVG9JbnRlZ2VyKHR5cGVvZiBzdGFydCA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogc3RhcnQpO1xuICAgICAgZW5kID0gRVMuVG9JbnRlZ2VyKHR5cGVvZiBlbmQgPT09ICd1bmRlZmluZWQnID8gbGVuIDogZW5kKTtcblxuICAgICAgdmFyIHJlbGF0aXZlU3RhcnQgPSBzdGFydCA8IDAgPyBfbWF4KGxlbiArIHN0YXJ0LCAwKSA6IF9taW4oc3RhcnQsIGxlbik7XG4gICAgICB2YXIgcmVsYXRpdmVFbmQgPSBlbmQgPCAwID8gbGVuICsgZW5kIDogZW5kO1xuXG4gICAgICBmb3IgKHZhciBpID0gcmVsYXRpdmVTdGFydDsgaSA8IGxlbiAmJiBpIDwgcmVsYXRpdmVFbmQ7ICsraSkge1xuICAgICAgICBPW2ldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gTztcbiAgICB9LFxuXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcbiAgICAgIHZhciBsaXN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpO1xuICAgICAgaWYgKCFFUy5Jc0NhbGxhYmxlKHByZWRpY2F0ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWU7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IGxpc3RbaV07XG4gICAgICAgIGlmICh0aGlzQXJnKSB7XG4gICAgICAgICAgaWYgKF9jYWxsKHByZWRpY2F0ZSwgdGhpc0FyZywgdmFsdWUsIGksIGxpc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlKSB7XG4gICAgICB2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbmd0aCA9IEVTLlRvTGVuZ3RoKGxpc3QubGVuZ3RoKTtcbiAgICAgIGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmRJbmRleDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzQXJnKSB7XG4gICAgICAgICAgaWYgKF9jYWxsKHByZWRpY2F0ZSwgdGhpc0FyZywgbGlzdFtpXSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcmVkaWNhdGUobGlzdFtpXSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0sXG5cbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMsICdrZXknKTtcbiAgICB9LFxuXG4gICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IodGhpcywgJ3ZhbHVlJyk7XG4gICAgfSxcblxuICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IodGhpcywgJ2VudHJ5Jyk7XG4gICAgfVxuICB9O1xuICAvLyBTYWZhcmkgNy4xIGRlZmluZXMgQXJyYXkja2V5cyBhbmQgQXJyYXkjZW50cmllcyBuYXRpdmVseSxcbiAgLy8gYnV0IHRoZSByZXN1bHRpbmcgQXJyYXlJdGVyYXRvciBvYmplY3RzIGRvbid0IGhhdmUgYSBcIm5leHRcIiBtZXRob2QuXG4gIGlmIChBcnJheS5wcm90b3R5cGUua2V5cyAmJiAhRVMuSXNDYWxsYWJsZShbMV0ua2V5cygpLm5leHQpKSB7XG4gICAgZGVsZXRlIEFycmF5LnByb3RvdHlwZS5rZXlzO1xuICB9XG4gIGlmIChBcnJheS5wcm90b3R5cGUuZW50cmllcyAmJiAhRVMuSXNDYWxsYWJsZShbMV0uZW50cmllcygpLm5leHQpKSB7XG4gICAgZGVsZXRlIEFycmF5LnByb3RvdHlwZS5lbnRyaWVzO1xuICB9XG5cbiAgLy8gQ2hyb21lIDM4IGRlZmluZXMgQXJyYXkja2V5cyBhbmQgQXJyYXkjZW50cmllcywgYW5kIEFycmF5I0BAaXRlcmF0b3IsIGJ1dCBub3QgQXJyYXkjdmFsdWVzXG4gIGlmIChBcnJheS5wcm90b3R5cGUua2V5cyAmJiBBcnJheS5wcm90b3R5cGUuZW50cmllcyAmJiAhQXJyYXkucHJvdG90eXBlLnZhbHVlcyAmJiBBcnJheS5wcm90b3R5cGVbJGl0ZXJhdG9yJF0pIHtcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5LnByb3RvdHlwZSwge1xuICAgICAgdmFsdWVzOiBBcnJheS5wcm90b3R5cGVbJGl0ZXJhdG9yJF1cbiAgICB9KTtcbiAgICBpZiAoVHlwZS5zeW1ib2woU3ltYm9sLnVuc2NvcGFibGVzKSkge1xuICAgICAgQXJyYXkucHJvdG90eXBlW1N5bWJvbC51bnNjb3BhYmxlc10udmFsdWVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hyb21lIDQwIGRlZmluZXMgQXJyYXkjdmFsdWVzIHdpdGggdGhlIGluY29ycmVjdCBuYW1lLCBhbHRob3VnaCBBcnJheSN7a2V5cyxlbnRyaWVzfSBoYXZlIHRoZSBjb3JyZWN0IG5hbWVcbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcyAmJiBBcnJheS5wcm90b3R5cGUudmFsdWVzICYmIEFycmF5LnByb3RvdHlwZS52YWx1ZXMubmFtZSAhPT0gJ3ZhbHVlcycpIHtcbiAgICB2YXIgb3JpZ2luYWxBcnJheVByb3RvdHlwZVZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS52YWx1ZXM7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAndmFsdWVzJywgZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbEFycmF5UHJvdG90eXBlVmFsdWVzLCB0aGlzLCBhcmd1bWVudHMpOyB9KTtcbiAgICBkZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICRpdGVyYXRvciQsIEFycmF5LnByb3RvdHlwZS52YWx1ZXMsIHRydWUpO1xuICB9XG4gIGRlZmluZVByb3BlcnRpZXMoQXJyYXkucHJvdG90eXBlLCBBcnJheVByb3RvdHlwZVNoaW1zKTtcblxuICBpZiAoMSAvIFt0cnVlXS5pbmRleE9mKHRydWUsIC0wKSA8IDApIHtcbiAgICAvLyBpbmRleE9mIHdoZW4gZ2l2ZW4gYSBwb3NpdGlvbiBhcmcgb2YgLTAgc2hvdWxkIHJldHVybiArMC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL3B1bGwvMzE2XG4gICAgZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5kZXhPZicsIGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCkge1xuICAgICAgdmFyIHZhbHVlID0gX2FycmF5SW5kZXhPZkFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAodmFsdWUgPT09IDAgJiYgKDEgLyB2YWx1ZSkgPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgYWRkSXRlcmF0b3IoQXJyYXkucHJvdG90eXBlLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlcygpOyB9KTtcbiAgLy8gQ2hyb21lIGRlZmluZXMga2V5cy92YWx1ZXMvZW50cmllcyBvbiBBcnJheSwgYnV0IGRvZXNuJ3QgZ2l2ZSB1c1xuICAvLyBhbnkgd2F5IHRvIGlkZW50aWZ5IGl0cyBpdGVyYXRvci4gIFNvIGFkZCBvdXIgb3duIHNoaW1tZWQgZmllbGQuXG4gIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICB2YXIgQ2hyb21lQXJyYXlJdGVyYXRvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihbXS52YWx1ZXMoKSk7XG4gICAgaWYgKENocm9tZUFycmF5SXRlcmF0b3IpIHsgLy8gaW4gV1NILCB0aGlzIGlzIGB1bmRlZmluZWRgXG4gICAgICBhZGRJdGVyYXRvcihDaHJvbWVBcnJheUl0ZXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICAvLyBub3RlOiB0aGlzIGlzIHBvc2l0aW9uZWQgaGVyZSBiZWNhdXNlIGl0IHJlbGllcyBvbiBBcnJheSNlbnRyaWVzXG4gIHZhciBhcnJheUZyb21Td2FsbG93c05lZ2F0aXZlTGVuZ3RocyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRGV0ZWN0cyBhIEZpcmVmb3ggYnVnIGluIHYzMlxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwNjM5OTNcbiAgICByZXR1cm4gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IC0xIH0pLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcbiAgfSgpKTtcbiAgdmFyIGFycmF5RnJvbUhhbmRsZXNJdGVyYWJsZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIERldGVjdHMgYSBidWcgaW4gV2Via2l0IG5pZ2h0bHkgcjE4MTg4NlxuICAgIHZhciBhcnIgPSBBcnJheS5mcm9tKFswXS5lbnRyaWVzKCkpO1xuICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoYXJyWzBdKSAmJiBhcnJbMF1bMF0gPT09IDAgJiYgYXJyWzBdWzFdID09PSAwO1xuICB9KCkpO1xuICBpZiAoIWFycmF5RnJvbVN3YWxsb3dzTmVnYXRpdmVMZW5ndGhzIHx8ICFhcnJheUZyb21IYW5kbGVzSXRlcmFibGVzKSB7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXksICdmcm9tJywgQXJyYXlTaGltcy5mcm9tKTtcbiAgfVxuICB2YXIgYXJyYXlGcm9tSGFuZGxlc1VuZGVmaW5lZE1hcEZ1bmN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBNaWNyb3NvZnQgRWRnZSB2MC4xMSB0aHJvd3MgaWYgdGhlIG1hcEZuIGFyZ3VtZW50IGlzICpwcm92aWRlZCogYnV0IHVuZGVmaW5lZCxcbiAgICAvLyBidXQgdGhlIHNwZWMgZG9lc24ndCBjYXJlIGlmIGl0J3MgcHJvdmlkZWQgb3Igbm90IC0gdW5kZWZpbmVkIGRvZXNuJ3QgdGhyb3cuXG4gICAgcmV0dXJuIHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKFswXSwgdm9pZCAwKTtcbiAgICB9KTtcbiAgfSgpKTtcbiAgaWYgKCFhcnJheUZyb21IYW5kbGVzVW5kZWZpbmVkTWFwRnVuY3Rpb24pIHtcbiAgICB2YXIgb3JpZ0FycmF5RnJvbSA9IEFycmF5LmZyb207XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXksICdmcm9tJywgZnVuY3Rpb24gZnJvbShpdGVtcykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdBcnJheUZyb20sIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2NhbGwob3JpZ0FycmF5RnJvbSwgdGhpcywgaXRlbXMpO1xuXG4gICAgfSk7XG4gIH1cblxuICB2YXIgaW50MzJzQXNPbmUgPSAtKE1hdGgucG93KDIsIDMyKSAtIDEpO1xuICB2YXIgdG9MZW5ndGhzQ29ycmVjdGx5ID0gZnVuY3Rpb24gKG1ldGhvZCwgcmV2ZXJzZWQpIHtcbiAgICB2YXIgb2JqID0geyBsZW5ndGg6IGludDMyc0FzT25lIH07XG4gICAgb2JqW3JldmVyc2VkID8gKG9iai5sZW5ndGggPj4+IDApIC0gMSA6IDBdID0gdHJ1ZTtcbiAgICByZXR1cm4gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgX2NhbGwobWV0aG9kLCBvYmosIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm90ZTogaW4gbm9uY29uZm9ybWluZyBicm93c2VycywgdGhpcyB3aWxsIGJlIGNhbGxlZFxuICAgICAgICAvLyAtMSA+Pj4gMCB0aW1lcywgd2hpY2ggaXMgNDI5NDk2NzI5NSwgc28gdGhlIHRocm93IG1hdHRlcnMuXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzaG91bGQgbm90IHJlYWNoIGhlcmUnKTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuICBpZiAoIXRvTGVuZ3Roc0NvcnJlY3RseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkpIHtcbiAgICB2YXIgb3JpZ2luYWxGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAnZm9yRWFjaCcsIGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tGbikge1xuICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxGb3JFYWNoLCB0aGlzLmxlbmd0aCA+PSAwID8gdGhpcyA6IFtdLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG4gIGlmICghdG9MZW5ndGhzQ29ycmVjdGx5KEFycmF5LnByb3RvdHlwZS5tYXApKSB7XG4gICAgdmFyIG9yaWdpbmFsTWFwID0gQXJyYXkucHJvdG90eXBlLm1hcDtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdtYXAnLCBmdW5jdGlvbiBtYXAoY2FsbGJhY2tGbikge1xuICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxNYXAsIHRoaXMubGVuZ3RoID49IDAgPyB0aGlzIDogW10sIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCF0b0xlbmd0aHNDb3JyZWN0bHkoQXJyYXkucHJvdG90eXBlLmZpbHRlcikpIHtcbiAgICB2YXIgb3JpZ2luYWxGaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuICAgIG92ZXJyaWRlTmF0aXZlKEFycmF5LnByb3RvdHlwZSwgJ2ZpbHRlcicsIGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja0ZuKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbEZpbHRlciwgdGhpcy5sZW5ndGggPj0gMCA/IHRoaXMgOiBbXSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXRvTGVuZ3Roc0NvcnJlY3RseShBcnJheS5wcm90b3R5cGUuc29tZSkpIHtcbiAgICB2YXIgb3JpZ2luYWxTb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAnc29tZScsIGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tGbikge1xuICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ2luYWxTb21lLCB0aGlzLmxlbmd0aCA+PSAwID8gdGhpcyA6IFtdLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG4gIGlmICghdG9MZW5ndGhzQ29ycmVjdGx5KEFycmF5LnByb3RvdHlwZS5ldmVyeSkpIHtcbiAgICB2YXIgb3JpZ2luYWxFdmVyeSA9IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdldmVyeScsIGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrRm4pIHtcbiAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdpbmFsRXZlcnksIHRoaXMubGVuZ3RoID49IDAgPyB0aGlzIDogW10sIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCF0b0xlbmd0aHNDb3JyZWN0bHkoQXJyYXkucHJvdG90eXBlLnJlZHVjZSkpIHtcbiAgICB2YXIgb3JpZ2luYWxSZWR1Y2UgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlO1xuICAgIG92ZXJyaWRlTmF0aXZlKEFycmF5LnByb3RvdHlwZSwgJ3JlZHVjZScsIGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja0ZuKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFJlZHVjZSwgdGhpcy5sZW5ndGggPj0gMCA/IHRoaXMgOiBbXSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXRvTGVuZ3Roc0NvcnJlY3RseShBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQsIHRydWUpKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkdWNlUmlnaHQgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQ7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAncmVkdWNlUmlnaHQnLCBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja0ZuKSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnaW5hbFJlZHVjZVJpZ2h0LCB0aGlzLmxlbmd0aCA+PSAwID8gdGhpcyA6IFtdLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGxhY2tzT2N0YWxTdXBwb3J0ID0gTnVtYmVyKCcwbzEwJykgIT09IDg7XG4gIHZhciBsYWNrc0JpbmFyeVN1cHBvcnQgPSBOdW1iZXIoJzBiMTAnKSAhPT0gMjtcbiAgdmFyIHRyaW1zTm9uV2hpdGVzcGFjZSA9IF9zb21lKG5vbldTLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBOdW1iZXIoYyArIDAgKyBjKSA9PT0gMDtcbiAgfSk7XG4gIGlmIChsYWNrc09jdGFsU3VwcG9ydCB8fCBsYWNrc0JpbmFyeVN1cHBvcnQgfHwgdHJpbXNOb25XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIE9yaWdOdW1iZXIgPSBOdW1iZXI7XG4gICAgdmFyIGJpbmFyeVJlZ2V4ID0gL14wYlswMV0rJC9pO1xuICAgIHZhciBvY3RhbFJlZ2V4ID0gL14wb1swLTddKyQvaTtcbiAgICAvLyBOb3RlIHRoYXQgaW4gSUUgOCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0IGRvZXNuJ3Qgc2VlbSB0byBleGlzdDogaWUsIFwidGVzdFwiIGlzIGFuIG93biBwcm9wZXJ0eSBvZiByZWdleGVzLiB3dGYuXG4gICAgdmFyIGlzQmluYXJ5ID0gYmluYXJ5UmVnZXgudGVzdC5iaW5kKGJpbmFyeVJlZ2V4KTtcbiAgICB2YXIgaXNPY3RhbCA9IG9jdGFsUmVnZXgudGVzdC5iaW5kKG9jdGFsUmVnZXgpO1xuICAgIHZhciB0b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChPLCBoaW50KSB7IC8vIG5lZWQgdG8gcmVwbGFjZSB0aGlzIHdpdGggYGVzLXRvLXByaW1pdGl2ZS9lczZgXG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKHR5cGVvZiBPLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0ID0gTy52YWx1ZU9mKCk7XG4gICAgICAgIGlmIChUeXBlLnByaW1pdGl2ZShyZXN1bHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBPLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdCA9IE8udG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKFR5cGUucHJpbWl0aXZlKHJlc3VsdCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG4gICAgfTtcbiAgICB2YXIgaGFzTm9uV1MgPSBub25XU3JlZ2V4LnRlc3QuYmluZChub25XU3JlZ2V4KTtcbiAgICB2YXIgaXNCYWRIZXggPSBpc0JhZEhleFJlZ2V4LnRlc3QuYmluZChpc0JhZEhleFJlZ2V4KTtcbiAgICB2YXIgTnVtYmVyU2hpbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB0aGlzIGlzIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIG9mIElFIDYtOCdzIHdhY2t5IHNjb3BpbmcgaXNzdWVzIHdpdGggbmFtZWQgZnVuY3Rpb24gZXhwcmVzc2lvbnMuXG4gICAgICB2YXIgTnVtYmVyU2hpbSA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgICAgICB2YXIgcHJpbVZhbHVlO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwcmltVmFsdWUgPSBUeXBlLnByaW1pdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHRvUHJpbWl0aXZlKHZhbHVlLCAnbnVtYmVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbVZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByaW1WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwcmltVmFsdWUgPSBFUy5DYWxsKHRyaW1TaGltLCBwcmltVmFsdWUpO1xuICAgICAgICAgIGlmIChpc0JpbmFyeShwcmltVmFsdWUpKSB7XG4gICAgICAgICAgICBwcmltVmFsdWUgPSBwYXJzZUludChfc3RyU2xpY2UocHJpbVZhbHVlLCAyKSwgMik7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc09jdGFsKHByaW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIHByaW1WYWx1ZSA9IHBhcnNlSW50KF9zdHJTbGljZShwcmltVmFsdWUsIDIpLCA4KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc05vbldTKHByaW1WYWx1ZSkgfHwgaXNCYWRIZXgocHJpbVZhbHVlKSkge1xuICAgICAgICAgICAgcHJpbVZhbHVlID0gTmFOO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzO1xuICAgICAgICB2YXIgdmFsdWVPZlN1Y2NlZWRzID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIE9yaWdOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YuY2FsbChyZWNlaXZlcik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBOdW1iZXJTaGltICYmICF2YWx1ZU9mU3VjY2VlZHMpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9yaWdOdW1iZXIocHJpbVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT3JpZ051bWJlcihwcmltVmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBOdW1iZXJTaGltO1xuICAgIH0oKSk7XG4gICAgd3JhcENvbnN0cnVjdG9yKE9yaWdOdW1iZXIsIE51bWJlclNoaW0sIHt9KTtcbiAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgRVMzIGJyb3dzZXJzLCB3aGVyZSB0aGVzZSBwcm9wZXJ0aWVzIGFyZSBub24tZW51bWVyYWJsZS5cbiAgICBkZWZpbmVQcm9wZXJ0aWVzKE51bWJlclNoaW0sIHtcbiAgICAgIE5hTjogT3JpZ051bWJlci5OYU4sXG4gICAgICBNQVhfVkFMVUU6IE9yaWdOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgTUlOX1ZBTFVFOiBPcmlnTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgIE5FR0FUSVZFX0lORklOSVRZOiBPcmlnTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgICAgUE9TSVRJVkVfSU5GSU5JVFk6IE9yaWdOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgICB9KTtcbiAgICBOdW1iZXIgPSBOdW1iZXJTaGltOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWdsb2JhbC1hc3NpZ25cbiAgICBWYWx1ZS5yZWRlZmluZShnbG9iYWxzLCAnTnVtYmVyJywgTnVtYmVyU2hpbSk7XG4gIH1cblxuICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICBkZWZpbmVQcm9wZXJ0aWVzKE51bWJlciwge1xuICAgIE1BWF9TQUZFX0lOVEVHRVI6IG1heFNhZmVJbnRlZ2VyLFxuICAgIE1JTl9TQUZFX0lOVEVHRVI6IC1tYXhTYWZlSW50ZWdlcixcbiAgICBFUFNJTE9OOiAyLjIyMDQ0NjA0OTI1MDMxM2UtMTYsXG5cbiAgICBwYXJzZUludDogZ2xvYmFscy5wYXJzZUludCxcbiAgICBwYXJzZUZsb2F0OiBnbG9iYWxzLnBhcnNlRmxvYXQsXG5cbiAgICBpc0Zpbml0ZTogbnVtYmVySXNGaW5pdGUsXG5cbiAgICBpc0ludGVnZXI6IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bWJlcklzRmluaXRlKHZhbHVlKSAmJiBFUy5Ub0ludGVnZXIodmFsdWUpID09PSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmIF9hYnModmFsdWUpIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIH0sXG5cbiAgICBpc05hTjogbnVtYmVySXNOYU5cbiAgfSk7XG4gIC8vIEZpcmVmb3ggMzcgaGFzIGEgY29uZm9ybWluZyBOdW1iZXIucGFyc2VJbnQsIGJ1dCBpdCdzIG5vdCA9PT0gdG8gdGhlIGdsb2JhbCBwYXJzZUludCAoZml4ZWQgaW4gdjQwKVxuICBkZWZpbmVQcm9wZXJ0eShOdW1iZXIsICdwYXJzZUludCcsIGdsb2JhbHMucGFyc2VJbnQsIE51bWJlci5wYXJzZUludCAhPT0gZ2xvYmFscy5wYXJzZUludCk7XG5cbiAgLy8gV29yayBhcm91bmQgYnVncyBpbiBBcnJheSNmaW5kIGFuZCBBcnJheSNmaW5kSW5kZXggLS0gZWFybHlcbiAgLy8gaW1wbGVtZW50YXRpb25zIHNraXBwZWQgaG9sZXMgaW4gc3BhcnNlIGFycmF5cy4gKE5vdGUgdGhhdCB0aGVcbiAgLy8gaW1wbGVtZW50YXRpb25zIG9mIGZpbmQvZmluZEluZGV4IGluZGlyZWN0bHkgdXNlIHNoaW1tZWRcbiAgLy8gbWV0aG9kcyBvZiBOdW1iZXIsIHNvIHRoaXMgdGVzdCBoYXMgdG8gaGFwcGVuIGRvd24gaGVyZS4pXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNwYXJzZS1hcnJheXMgKi9cbiAgaWYgKFssIDFdLmZpbmQoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSkgPT09IDEpIHtcbiAgICBvdmVycmlkZU5hdGl2ZShBcnJheS5wcm90b3R5cGUsICdmaW5kJywgQXJyYXlQcm90b3R5cGVTaGltcy5maW5kKTtcbiAgfVxuICBpZiAoWywgMV0uZmluZEluZGV4KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0pICE9PSAwKSB7XG4gICAgb3ZlcnJpZGVOYXRpdmUoQXJyYXkucHJvdG90eXBlLCAnZmluZEluZGV4JywgQXJyYXlQcm90b3R5cGVTaGltcy5maW5kSW5kZXgpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc3BhcnNlLWFycmF5cyAqL1xuXG4gIHZhciBpc0VudW1lcmFibGVPbiA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5iaW5kLCBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbiAgdmFyIGVuc3VyZUVudW1lcmFibGUgPSBmdW5jdGlvbiBlbnN1cmVFbnVtZXJhYmxlKG9iaiwgcHJvcCkge1xuICAgIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzICYmIGlzRW51bWVyYWJsZU9uKG9iaiwgcHJvcCkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHsgZW51bWVyYWJsZTogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuICB2YXIgc2xpY2VBcmdzID0gZnVuY3Rpb24gc2xpY2VBcmdzKCkge1xuICAgIC8vIHBlciBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAvLyBhbmQgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi80MzI3NzYyY2I4N2E4YzYzNGEyOVxuICAgIHZhciBpbml0aWFsID0gTnVtYmVyKHRoaXMpO1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBkZXNpcmVkQXJnQ291bnQgPSBsZW4gLSBpbml0aWFsO1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGRlc2lyZWRBcmdDb3VudCA8IDAgPyAwIDogZGVzaXJlZEFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gaW5pdGlhbDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBhcmdzW2kgLSBpbml0aWFsXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH07XG4gIHZhciBhc3NpZ25UbyA9IGZ1bmN0aW9uIGFzc2lnblRvKHNvdXJjZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBhc3NpZ25Ub1NvdXJjZSh0YXJnZXQsIGtleSkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfTtcbiAgdmFyIGFzc2lnblJlZHVjZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgc291cmNlS2V5cyA9IGtleXMoT2JqZWN0KHNvdXJjZSkpO1xuICAgIHZhciBzeW1ib2xzO1xuICAgIGlmIChFUy5Jc0NhbGxhYmxlKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpKSB7XG4gICAgICBzeW1ib2xzID0gX2ZpbHRlcihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE9iamVjdChzb3VyY2UpKSwgaXNFbnVtZXJhYmxlT24oc291cmNlKSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVkdWNlKF9jb25jYXQoc291cmNlS2V5cywgc3ltYm9scyB8fCBbXSksIGFzc2lnblRvKHNvdXJjZSksIHRhcmdldCk7XG4gIH07XG5cbiAgdmFyIE9iamVjdFNoaW1zID0ge1xuICAgIC8vIDE5LjEuMy4xXG4gICAgYXNzaWduOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgIHZhciB0byA9IEVTLlRvT2JqZWN0KHRhcmdldCwgJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgcmV0dXJuIF9yZWR1Y2UoRVMuQ2FsbChzbGljZUFyZ3MsIDEsIGFyZ3VtZW50cyksIGFzc2lnblJlZHVjZXIsIHRvKTtcbiAgICB9LFxuXG4gICAgLy8gQWRkZWQgaW4gV2ViS2l0IGluIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDM4NjVcbiAgICBpczogZnVuY3Rpb24gaXMoYSwgYikge1xuICAgICAgcmV0dXJuIEVTLlNhbWVWYWx1ZShhLCBiKTtcbiAgICB9XG4gIH07XG4gIHZhciBhc3NpZ25IYXNQZW5kaW5nRXhjZXB0aW9ucyA9IE9iamVjdC5hc3NpZ24gJiYgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zICYmIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCAzNyBzdGlsbCBoYXMgXCJwZW5kaW5nIGV4Y2VwdGlvblwiIGxvZ2ljIGluIGl0cyBPYmplY3QuYXNzaWduIGltcGxlbWVudGF0aW9uLFxuICAgIC8vIHdoaWNoIGlzIDcyJSBzbG93ZXIgdGhhbiBvdXIgc2hpbSwgYW5kIEZpcmVmb3ggNDAncyBuYXRpdmUgaW1wbGVtZW50YXRpb24uXG4gICAgdmFyIHRocm93ZXIgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoeyAxOiAyIH0pO1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRocm93ZXIsICd4eScpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0aHJvd2VyWzFdID09PSAneSc7XG4gICAgfVxuICB9KCkpO1xuICBpZiAoYXNzaWduSGFzUGVuZGluZ0V4Y2VwdGlvbnMpIHtcbiAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdhc3NpZ24nLCBPYmplY3RTaGltcy5hc3NpZ24pO1xuICB9XG4gIGRlZmluZVByb3BlcnRpZXMoT2JqZWN0LCBPYmplY3RTaGltcyk7XG5cbiAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICB2YXIgRVM1T2JqZWN0U2hpbXMgPSB7XG4gICAgICAvLyAxOS4xLjMuOVxuICAgICAgLy8gc2hpbSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vNTU5MzU1NFxuICAgICAgc2V0UHJvdG90eXBlT2Y6IChmdW5jdGlvbiAoT2JqZWN0KSB7XG4gICAgICAgIHZhciBzZXQ7XG5cbiAgICAgICAgdmFyIGNoZWNrQXJncyA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICAgICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KE8pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYW5ub3Qgc2V0IHByb3RvdHlwZSBvbiBhIG5vbi1vYmplY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEocHJvdG8gPT09IG51bGwgfHwgRVMuVHlwZUlzT2JqZWN0KHByb3RvKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhbiBvbmx5IHNldCBwcm90b3R5cGUgdG8gYW4gb2JqZWN0IG9yIG51bGwnICsgcHJvdG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgICAgICAgICBjaGVja0FyZ3MoTywgcHJvdG8pO1xuICAgICAgICAgIF9jYWxsKHNldCwgTywgcHJvdG8pO1xuICAgICAgICAgIHJldHVybiBPO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gdGhpcyB3b3JrcyBhbHJlYWR5IGluIEZpcmVmb3ggYW5kIFNhZmFyaVxuICAgICAgICAgIHNldCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICAgICAgICBfY2FsbChzZXQsIHt9LCBudWxsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlICE9PSAoe30pLl9fcHJvdG9fXykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG4gICAgICAgICAgICAvLyBJRSA8IDExIGNhbm5vdCBiZSBzaGltbWVkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHByb2JhYmx5IENocm9tZSBvciBzb21lIG9sZCBNb2JpbGUgc3RvY2sgYnJvd3NlclxuICAgICAgICAgIHNldCA9IGZ1bmN0aW9uIChwcm90bykge1xuICAgICAgICAgICAgdGhpcy5fX3Byb3RvX18gPSBwcm90bzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gcGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgKipub3QqKiB3b3JrXG4gICAgICAgICAgLy8gaW4gdGhvc2UgYnJvd3NlcnMgdGhhdCBkbyBub3QgaW5oZXJpdFxuICAgICAgICAgIC8vIF9fcHJvdG9fXyBieSBtaXN0YWtlIGZyb20gT2JqZWN0LnByb3RvdHlwZVxuICAgICAgICAgIC8vIGluIHRoZXNlIGNhc2VzIHdlIHNob3VsZCBwcm9iYWJseSB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgIC8vIG9yIGF0IGxlYXN0IGJlIGluZm9ybWVkIGFib3V0IHRoZSBpc3N1ZVxuICAgICAgICAgIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID0gc2V0UHJvdG90eXBlT2YoXG4gICAgICAgICAgICBzZXRQcm90b3R5cGVPZih7fSwgbnVsbCksXG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlXG4gICAgICAgICAgKSBpbnN0YW5jZW9mIE9iamVjdDtcbiAgICAgICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdHJ1ZSBtZWFucyBpdCB3b3JrcyBhcyBtZWFudFxuICAgICAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSBmYWxzZSBtZWFucyBpdCdzIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIG9yXG4gICAgICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT0gIG51bGwgbWVhbnMgaXQncyBub3QgYSBwb2x5ZmlsbFxuICAgICAgICAgIC8vIHdoaWNoIG1lYW5zIGl0IHdvcmtzIGFzIGV4cGVjdGVkXG4gICAgICAgICAgLy8gd2UgY2FuIGV2ZW4gZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuX19wcm90b19fO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRQcm90b3R5cGVPZjtcbiAgICAgIH0oT2JqZWN0KSlcbiAgICB9O1xuXG4gICAgZGVmaW5lUHJvcGVydGllcyhPYmplY3QsIEVTNU9iamVjdFNoaW1zKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgYnVnIGluIE9wZXJhIDEyIHdoZXJlIHNldFByb3RvdHlwZU9mKHgsIG51bGwpIGRvZXNuJ3Qgd29yayxcbiAgLy8gYnV0IE9iamVjdC5jcmVhdGUobnVsbCkgZG9lcy5cbiAgaWYgKFxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZlxuICAgICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZlxuICAgICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3Quc2V0UHJvdG90eXBlT2Yoe30sIG51bGwpKSAhPT0gbnVsbFxuICAgICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuY3JlYXRlKG51bGwpKSA9PT0gbnVsbFxuICApIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIEZBS0VOVUxMID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHZhciBncG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gICAgICB2YXIgc3BvID0gT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdwbyhvKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gRkFLRU5VTEwgPyBudWxsIDogcmVzdWx0O1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uIChvLCBwKSB7XG4gICAgICAgIHZhciBwcm90byA9IHAgPT09IG51bGwgPyBGQUtFTlVMTCA6IHA7XG4gICAgICAgIHJldHVybiBzcG8obywgcHJvdG8pO1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9IGZhbHNlO1xuICAgIH0oKSk7XG4gIH1cblxuICB2YXIgb2JqZWN0S2V5c0FjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5rZXlzKCdmb28nKTsgfSk7XG4gIGlmICghb2JqZWN0S2V5c0FjY2VwdHNQcmltaXRpdmVzKSB7XG4gICAgdmFyIG9yaWdpbmFsT2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2tleXMnLCBmdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RLZXlzKEVTLlRvT2JqZWN0KHZhbHVlKSk7XG4gICAgfSk7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzO1xuICB9XG4gIHZhciBvYmplY3RLZXlzUmVqZWN0c1JlZ2V4ID0gdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmtleXMoL2EvZyk7IH0pO1xuICBpZiAob2JqZWN0S2V5c1JlamVjdHNSZWdleCkge1xuICAgIHZhciByZWdleFJlamVjdGluZ09iamVjdEtleXMgPSBPYmplY3Qua2V5cztcbiAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdrZXlzJywgZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICAgICAgaWYgKFR5cGUucmVnZXgodmFsdWUpKSB7XG4gICAgICAgIHZhciByZWdleEtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChfaGFzT3duUHJvcGVydHkodmFsdWUsIGspKSB7XG4gICAgICAgICAgICBfcHVzaChyZWdleEtleXMsIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnZXhLZXlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZ2V4UmVqZWN0aW5nT2JqZWN0S2V5cyh2YWx1ZSk7XG4gICAgfSk7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgdmFyIG9iamVjdEdPUE5BY2NlcHRzUHJpbWl0aXZlcyA9ICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygnZm9vJyk7IH0pO1xuICAgIGlmICghb2JqZWN0R09QTkFjY2VwdHNQcmltaXRpdmVzKSB7XG4gICAgICB2YXIgY2FjaGVkV2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcbiAgICAgIHZhciBvcmlnaW5hbE9iamVjdEdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2dldE93blByb3BlcnR5TmFtZXMnLCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWwgPSBFUy5Ub09iamVjdCh2YWx1ZSk7XG4gICAgICAgIGlmIChfdG9TdHJpbmcodmFsKSA9PT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyh2YWwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElFIGJ1ZyB3aGVyZSBsYXlvdXQgZW5naW5lIGNhbGxzIHVzZXJsYW5kIGdPUE4gZm9yIGNyb3NzLWRvbWFpbiBgd2luZG93YCBvYmplY3RzXG4gICAgICAgICAgICByZXR1cm4gX2NvbmNhdChbXSwgY2FjaGVkV2luZG93TmFtZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2JqZWN0R09QREFjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoJ2ZvbycsICdiYXInKTsgfSk7XG4gICAgaWYgKCFvYmplY3RHT1BEQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgIHZhciBvcmlnaW5hbE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihFUy5Ub09iamVjdCh2YWx1ZSksIHByb3BlcnR5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoT2JqZWN0LnNlYWwpIHtcbiAgICB2YXIgb2JqZWN0U2VhbEFjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5zZWFsKCdmb28nKTsgfSk7XG4gICAgaWYgKCFvYmplY3RTZWFsQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgIHZhciBvcmlnaW5hbE9iamVjdFNlYWwgPSBPYmplY3Quc2VhbDtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ3NlYWwnLCBmdW5jdGlvbiBzZWFsKHZhbHVlKSB7XG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHZhbHVlKSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0U2VhbCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5pc1NlYWxlZCkge1xuICAgIHZhciBvYmplY3RJc1NlYWxlZEFjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5pc1NlYWxlZCgnZm9vJyk7IH0pO1xuICAgIGlmICghb2JqZWN0SXNTZWFsZWRBY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0SXNTZWFsZWQgPSBPYmplY3QuaXNTZWFsZWQ7XG4gICAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdpc1NlYWxlZCcsIGZ1bmN0aW9uIGlzU2VhbGVkKHZhbHVlKSB7XG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHZhbHVlKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RJc1NlYWxlZCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICB2YXIgb2JqZWN0RnJlZXplQWNjZXB0c1ByaW1pdGl2ZXMgPSAhdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZSgnZm9vJyk7IH0pO1xuICAgIGlmICghb2JqZWN0RnJlZXplQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgIHZhciBvcmlnaW5hbE9iamVjdEZyZWV6ZSA9IE9iamVjdC5mcmVlemU7XG4gICAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdmcmVlemUnLCBmdW5jdGlvbiBmcmVlemUodmFsdWUpIHtcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QodmFsdWUpKSB7IHJldHVybiB2YWx1ZTsgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RGcmVlemUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3QuaXNGcm96ZW4pIHtcbiAgICB2YXIgb2JqZWN0SXNGcm96ZW5BY2NlcHRzUHJpbWl0aXZlcyA9ICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuaXNGcm96ZW4oJ2ZvbycpOyB9KTtcbiAgICBpZiAoIW9iamVjdElzRnJvemVuQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgIHZhciBvcmlnaW5hbE9iamVjdElzRnJvemVuID0gT2JqZWN0LmlzRnJvemVuO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoT2JqZWN0LCAnaXNGcm96ZW4nLCBmdW5jdGlvbiBpc0Zyb3plbih2YWx1ZSkge1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdCh2YWx1ZSkpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0SXNGcm96ZW4odmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHtcbiAgICB2YXIgb2JqZWN0UHJldmVudEV4dGVuc2lvbnNBY2NlcHRzUHJpbWl0aXZlcyA9ICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoJ2ZvbycpOyB9KTtcbiAgICBpZiAoIW9iamVjdFByZXZlbnRFeHRlbnNpb25zQWNjZXB0c1ByaW1pdGl2ZXMpIHtcbiAgICAgIHZhciBvcmlnaW5hbE9iamVjdFByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoT2JqZWN0LCAncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh2YWx1ZSkge1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdCh2YWx1ZSkpIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdFByZXZlbnRFeHRlbnNpb25zKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoT2JqZWN0LmlzRXh0ZW5zaWJsZSkge1xuICAgIHZhciBvYmplY3RJc0V4dGVuc2libGVBY2NlcHRzUHJpbWl0aXZlcyA9ICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKCdmb28nKTsgfSk7XG4gICAgaWYgKCFvYmplY3RJc0V4dGVuc2libGVBY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsT2JqZWN0SXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKE9iamVjdCwgJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdCh2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdElzRXh0ZW5zaWJsZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xuICAgIHZhciBvYmplY3RHZXRQcm90b0FjY2VwdHNQcmltaXRpdmVzID0gIXRocm93c0Vycm9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZignZm9vJyk7IH0pO1xuICAgIGlmICghb2JqZWN0R2V0UHJvdG9BY2NlcHRzUHJpbWl0aXZlcykge1xuICAgICAgdmFyIG9yaWdpbmFsR2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gICAgICBvdmVycmlkZU5hdGl2ZShPYmplY3QsICdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEdldFByb3RvKEVTLlRvT2JqZWN0KHZhbHVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaGFzRmxhZ3MgPSBzdXBwb3J0c0Rlc2NyaXB0b3JzICYmIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycpO1xuICAgIHJldHVybiBkZXNjICYmIEVTLklzQ2FsbGFibGUoZGVzYy5nZXQpO1xuICB9KCkpO1xuICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycyAmJiAhaGFzRmxhZ3MpIHtcbiAgICB2YXIgcmVnRXhwRmxhZ3NHZXR0ZXIgPSBmdW5jdGlvbiBmbGFncygpIHtcbiAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHRoaXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01ldGhvZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHR5cGU6IG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgIHJlc3VsdCArPSAnZyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pZ25vcmVDYXNlKSB7XG4gICAgICAgIHJlc3VsdCArPSAnaSc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tdWx0aWxpbmUpIHtcbiAgICAgICAgcmVzdWx0ICs9ICdtJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVuaWNvZGUpIHtcbiAgICAgICAgcmVzdWx0ICs9ICd1JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0aWNreSkge1xuICAgICAgICByZXN1bHQgKz0gJ3knO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgVmFsdWUuZ2V0dGVyKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHJlZ0V4cEZsYWdzR2V0dGVyKTtcbiAgfVxuXG4gIHZhciByZWdFeHBTdXBwb3J0c0ZsYWdzV2l0aFJlZ2V4ID0gc3VwcG9ydHNEZXNjcmlwdG9ycyAmJiB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFN0cmluZyhuZXcgUmVnRXhwKC9hL2csICdpJykpID09PSAnL2EvaSc7XG4gIH0pO1xuICB2YXIgcmVnRXhwTmVlZHNUb1N1cHBvcnRTeW1ib2xNYXRjaCA9IGhhc1N5bWJvbHMgJiYgc3VwcG9ydHNEZXNjcmlwdG9ycyAmJiAoZnVuY3Rpb24gKCkge1xuICAgIC8vIEVkZ2UgMC4xMiBzdXBwb3J0cyBmbGFncyBmdWxseSwgYnV0IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9sLm1hdGNoXG4gICAgdmFyIHJlZ2V4ID0gLy4vO1xuICAgIHJlZ2V4W1N5bWJvbC5tYXRjaF0gPSBmYWxzZTtcbiAgICByZXR1cm4gUmVnRXhwKHJlZ2V4KSA9PT0gcmVnZXg7XG4gIH0oKSk7XG5cbiAgdmFyIHJlZ2V4VG9TdHJpbmdJc0dlbmVyaWMgPSB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2FiYycgfSkgPT09ICcvYWJjLyc7XG4gIH0pO1xuICB2YXIgcmVnZXhUb1N0cmluZ1N1cHBvcnRzR2VuZXJpY0ZsYWdzID0gcmVnZXhUb1N0cmluZ0lzR2VuZXJpYyAmJiB2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pID09PSAnL2EvYic7XG4gIH0pO1xuICBpZiAoIXJlZ2V4VG9TdHJpbmdJc0dlbmVyaWMgfHwgIXJlZ2V4VG9TdHJpbmdTdXBwb3J0c0dlbmVyaWNGbGFncykge1xuICAgIHZhciBvcmlnUmVnRXhwVG9TdHJpbmcgPSBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIGRlZmluZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIFIgPSBFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgaWYgKFR5cGUucmVnZXgoUikpIHtcbiAgICAgICAgcmV0dXJuIF9jYWxsKG9yaWdSZWdFeHBUb1N0cmluZywgUik7XG4gICAgICB9XG4gICAgICB2YXIgcGF0dGVybiA9ICRTdHJpbmcoUi5zb3VyY2UpO1xuICAgICAgdmFyIGZsYWdzID0gJFN0cmluZyhSLmZsYWdzKTtcbiAgICAgIHJldHVybiAnLycgKyBwYXR0ZXJuICsgJy8nICsgZmxhZ3M7XG4gICAgfSwgdHJ1ZSk7XG4gICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLCBvcmlnUmVnRXhwVG9TdHJpbmcpO1xuICAgIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcucHJvdG90eXBlID0gdm9pZCAwO1xuICB9XG5cbiAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMgJiYgKCFyZWdFeHBTdXBwb3J0c0ZsYWdzV2l0aFJlZ2V4IHx8IHJlZ0V4cE5lZWRzVG9TdXBwb3J0U3ltYm9sTWF0Y2gpKSB7XG4gICAgdmFyIGZsYWdzR2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnKS5nZXQ7XG4gICAgdmFyIHNvdXJjZURlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJlZ0V4cC5wcm90b3R5cGUsICdzb3VyY2UnKSB8fCB7fTtcbiAgICB2YXIgbGVnYWN5U291cmNlR2V0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcHJpb3IgdG8gaXQgYmVpbmcgYSBnZXR0ZXIsIGl0J3Mgb3duICsgbm9uY29uZmlndXJhYmxlXG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gICAgfTtcbiAgICB2YXIgc291cmNlR2V0dGVyID0gRVMuSXNDYWxsYWJsZShzb3VyY2VEZXNjLmdldCkgPyBzb3VyY2VEZXNjLmdldCA6IGxlZ2FjeVNvdXJjZUdldHRlcjtcblxuICAgIHZhciBPcmlnUmVnRXhwID0gUmVnRXhwO1xuICAgIHZhciBSZWdFeHBTaGltID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIHtcbiAgICAgICAgdmFyIHBhdHRlcm5Jc1JlZ0V4cCA9IEVTLklzUmVnRXhwKHBhdHRlcm4pO1xuICAgICAgICB2YXIgY2FsbGVkV2l0aE5ldyA9IHRoaXMgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgICAgIGlmICghY2FsbGVkV2l0aE5ldyAmJiBwYXR0ZXJuSXNSZWdFeHAgJiYgdHlwZW9mIGZsYWdzID09PSAndW5kZWZpbmVkJyAmJiBwYXR0ZXJuLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHtcbiAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBQID0gcGF0dGVybjtcbiAgICAgICAgdmFyIEYgPSBmbGFncztcbiAgICAgICAgaWYgKFR5cGUucmVnZXgocGF0dGVybikpIHtcbiAgICAgICAgICBQID0gRVMuQ2FsbChzb3VyY2VHZXR0ZXIsIHBhdHRlcm4pO1xuICAgICAgICAgIEYgPSB0eXBlb2YgZmxhZ3MgPT09ICd1bmRlZmluZWQnID8gRVMuQ2FsbChmbGFnc0dldHRlciwgcGF0dGVybikgOiBmbGFncztcbiAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChQLCBGKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXR0ZXJuSXNSZWdFeHApIHtcbiAgICAgICAgICBQID0gcGF0dGVybi5zb3VyY2U7XG4gICAgICAgICAgRiA9IHR5cGVvZiBmbGFncyA9PT0gJ3VuZGVmaW5lZCcgPyBwYXR0ZXJuLmZsYWdzIDogZmxhZ3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPcmlnUmVnRXhwKHBhdHRlcm4sIGZsYWdzKTtcbiAgICAgIH07XG4gICAgfSgpKTtcbiAgICB3cmFwQ29uc3RydWN0b3IoT3JpZ1JlZ0V4cCwgUmVnRXhwU2hpbSwge1xuICAgICAgJGlucHV0OiB0cnVlIC8vIENocm9tZSA8IHYzOSAmIE9wZXJhIDwgMjYgaGF2ZSBhIG5vbnN0YW5kYXJkIFwiJGlucHV0XCIgcHJvcGVydHlcbiAgICB9KTtcbiAgICBSZWdFeHAgPSBSZWdFeHBTaGltOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWdsb2JhbC1hc3NpZ25cbiAgICBWYWx1ZS5yZWRlZmluZShnbG9iYWxzLCAnUmVnRXhwJywgUmVnRXhwU2hpbSk7XG4gIH1cblxuICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgIHZhciByZWdleEdsb2JhbHMgPSB7XG4gICAgICBpbnB1dDogJyRfJyxcbiAgICAgIGxhc3RNYXRjaDogJyQmJyxcbiAgICAgIGxhc3RQYXJlbjogJyQrJyxcbiAgICAgIGxlZnRDb250ZXh0OiAnJGAnLFxuICAgICAgcmlnaHRDb250ZXh0OiAnJFxcJydcbiAgICB9O1xuICAgIF9mb3JFYWNoKGtleXMocmVnZXhHbG9iYWxzKSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIGlmIChwcm9wIGluIFJlZ0V4cCAmJiAhKHJlZ2V4R2xvYmFsc1twcm9wXSBpbiBSZWdFeHApKSB7XG4gICAgICAgIFZhbHVlLmdldHRlcihSZWdFeHAsIHJlZ2V4R2xvYmFsc1twcm9wXSwgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBSZWdFeHBbcHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFkZERlZmF1bHRTcGVjaWVzKFJlZ0V4cCk7XG5cbiAgdmFyIGludmVyc2VFcHNpbG9uID0gMSAvIE51bWJlci5FUFNJTE9OO1xuICB2YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gcm91bmRUaWVzVG9FdmVuKG4pIHtcbiAgICAvLyBFdmVuIHRob3VnaCB0aGlzIHJlZHVjZXMgZG93biB0byBgcmV0dXJuIG5gLCBpdCB0YWtlcyBhZHZhbnRhZ2Ugb2YgYnVpbHQtaW4gcm91bmRpbmcuXG4gICAgcmV0dXJuIChuICsgaW52ZXJzZUVwc2lsb24pIC0gaW52ZXJzZUVwc2lsb247XG4gIH07XG4gIHZhciBCSU5BUllfMzJfRVBTSUxPTiA9IE1hdGgucG93KDIsIC0yMyk7XG4gIHZhciBCSU5BUllfMzJfTUFYX1ZBTFVFID0gTWF0aC5wb3coMiwgMTI3KSAqICgyIC0gQklOQVJZXzMyX0VQU0lMT04pO1xuICB2YXIgQklOQVJZXzMyX01JTl9WQUxVRSA9IE1hdGgucG93KDIsIC0xMjYpO1xuICB2YXIgRSA9IE1hdGguRTtcbiAgdmFyIExPRzJFID0gTWF0aC5MT0cyRTtcbiAgdmFyIExPRzEwRSA9IE1hdGguTE9HMTBFO1xuICB2YXIgbnVtYmVyQ0xaID0gTnVtYmVyLnByb3RvdHlwZS5jbHo7XG4gIGRlbGV0ZSBOdW1iZXIucHJvdG90eXBlLmNsejsgLy8gU2FmYXJpIDggaGFzIE51bWJlciNjbHpcblxuICB2YXIgTWF0aFNoaW1zID0ge1xuICAgIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh2YWx1ZSkge1xuICAgICAgdmFyIHggPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKG51bWJlcklzTmFOKHgpIHx8IHZhbHVlIDwgMSkgeyByZXR1cm4gTmFOOyB9XG4gICAgICBpZiAoeCA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgICAgaWYgKHggPT09IEluZmluaXR5KSB7IHJldHVybiB4OyB9XG5cbiAgICAgIHZhciB4SW52U3F1YXJlZCA9IDEgLyAoeCAqIHgpO1xuICAgICAgaWYgKHggPCAyKSB7XG4gICAgICAgIHJldHVybiBfbG9nMXAoeCAtIDEgKyAoX3NxcnQoMSAtIHhJbnZTcXVhcmVkKSAqIHgpKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYWxmWCA9IHggLyAyO1xuICAgICAgcmV0dXJuIF9sb2cxcChoYWxmWCArIChfc3FydCgxIC0geEludlNxdWFyZWQpICogaGFsZlgpIC0gMSkgKyAoMSAvIExPRzJFKTtcbiAgICB9LFxuXG4gICAgYXNpbmg6IGZ1bmN0aW9uIGFzaW5oKHZhbHVlKSB7XG4gICAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoeCA9PT0gMCB8fCAhZ2xvYmFsSXNGaW5pdGUoeCkpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9XG5cbiAgICAgIHZhciBhID0gX2Ficyh4KTtcbiAgICAgIHZhciBhU3F1YXJlZCA9IGEgKiBhO1xuICAgICAgdmFyIHMgPSBfc2lnbih4KTtcbiAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICByZXR1cm4gcyAqIF9sb2cxcChhICsgKGFTcXVhcmVkIC8gKF9zcXJ0KGFTcXVhcmVkICsgMSkgKyAxKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHMgKiAoX2xvZzFwKChhIC8gMikgKyAoX3NxcnQoMSArICgxIC8gYVNxdWFyZWQpKSAqIGEgLyAyKSAtIDEpICsgKDEgLyBMT0cyRSkpO1xuICAgIH0sXG5cbiAgICBhdGFuaDogZnVuY3Rpb24gYXRhbmgodmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgaWYgKHggPT09IDApIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAtMSkgeyByZXR1cm4gLUluZmluaXR5OyB9XG4gICAgICBpZiAoeCA9PT0gMSkgeyByZXR1cm4gSW5maW5pdHk7IH1cbiAgICAgIGlmIChudW1iZXJJc05hTih4KSB8fCB4IDwgLTEgfHwgeCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cblxuICAgICAgdmFyIGEgPSBfYWJzKHgpO1xuICAgICAgcmV0dXJuIF9zaWduKHgpICogX2xvZzFwKDIgKiBhIC8gKDEgLSBhKSkgLyAyO1xuICAgIH0sXG5cbiAgICBjYnJ0OiBmdW5jdGlvbiBjYnJ0KHZhbHVlKSB7XG4gICAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoeCA9PT0gMCkgeyByZXR1cm4geDsgfVxuICAgICAgdmFyIG5lZ2F0ZSA9IHggPCAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIGlmIChuZWdhdGUpIHsgeCA9IC14OyB9XG4gICAgICBpZiAoeCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcmVzdWx0ID0gSW5maW5pdHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBfZXhwKF9sb2coeCkgLyAzKTtcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N1YmVfcm9vdCNOdW1lcmljYWxfbWV0aG9kc1xuICAgICAgICByZXN1bHQgPSAoKHggLyAocmVzdWx0ICogcmVzdWx0KSkgKyAoMiAqIHJlc3VsdCkpIC8gMztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZWdhdGUgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgIH0sXG5cbiAgICBjbHozMjogZnVuY3Rpb24gY2x6MzIodmFsdWUpIHtcbiAgICAgIC8vIFNlZSBodHRwczovL2J1Z3MuZWNtYXNjcmlwdC5vcmcvc2hvd19idWcuY2dpP2lkPTI0NjVcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIHZhciBudW1iZXIgPSBFUy5Ub1VpbnQzMih4KTtcbiAgICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDMyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bWJlckNMWiA/IEVTLkNhbGwobnVtYmVyQ0xaLCBudW1iZXIpIDogMzEgLSBfZmxvb3IoX2xvZyhudW1iZXIgKyAwLjUpICogTE9HMkUpO1xuICAgIH0sXG5cbiAgICBjb3NoOiBmdW5jdGlvbiBjb3NoKHZhbHVlKSB7XG4gICAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoeCA9PT0gMCkgeyByZXR1cm4gMTsgfSAvLyArMCBvciAtMFxuICAgICAgaWYgKG51bWJlcklzTmFOKHgpKSB7IHJldHVybiBOYU47IH1cbiAgICAgIGlmICghZ2xvYmFsSXNGaW5pdGUoeCkpIHsgcmV0dXJuIEluZmluaXR5OyB9XG5cbiAgICAgIHZhciB0ID0gX2V4cChfYWJzKHgpIC0gMSk7XG4gICAgICByZXR1cm4gKHQgKyAoMSAvICh0ICogRSAqIEUpKSkgKiAoRSAvIDIpO1xuICAgIH0sXG5cbiAgICBleHBtMTogZnVuY3Rpb24gZXhwbTEodmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICh4ID09PSAtSW5maW5pdHkpIHsgcmV0dXJuIC0xOyB9XG4gICAgICBpZiAoIWdsb2JhbElzRmluaXRlKHgpIHx8IHggPT09IDApIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmIChfYWJzKHgpID4gMC41KSB7XG4gICAgICAgIHJldHVybiBfZXhwKHgpIC0gMTtcbiAgICAgIH1cbiAgICAgIC8vIEEgbW9yZSBwcmVjaXNlIGFwcHJveGltYXRpb24gdXNpbmcgVGF5bG9yIHNlcmllcyBleHBhbnNpb25cbiAgICAgIC8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9lczYtc2hpbS9pc3N1ZXMvMzE0I2lzc3VlY29tbWVudC03MDI5Mzk4NlxuICAgICAgdmFyIHQgPSB4O1xuICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICB2YXIgbiA9IDE7XG4gICAgICB3aGlsZSAoc3VtICsgdCAhPT0gc3VtKSB7XG4gICAgICAgIHN1bSArPSB0O1xuICAgICAgICBuICs9IDE7XG4gICAgICAgIHQgKj0geCAvIG47XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH0sXG5cbiAgICBoeXBvdDogZnVuY3Rpb24gaHlwb3QoeCwgeSkge1xuICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICB2YXIgbGFyZ2VzdCA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBfYWJzKE51bWJlcihhcmd1bWVudHNbaV0pKTtcbiAgICAgICAgaWYgKGxhcmdlc3QgPCB2YWx1ZSkge1xuICAgICAgICAgIHJlc3VsdCAqPSAobGFyZ2VzdCAvIHZhbHVlKSAqIChsYXJnZXN0IC8gdmFsdWUpO1xuICAgICAgICAgIHJlc3VsdCArPSAxO1xuICAgICAgICAgIGxhcmdlc3QgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgKz0gdmFsdWUgPiAwID8gKHZhbHVlIC8gbGFyZ2VzdCkgKiAodmFsdWUgLyBsYXJnZXN0KSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFyZ2VzdCA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IGxhcmdlc3QgKiBfc3FydChyZXN1bHQpO1xuICAgIH0sXG5cbiAgICBsb2cyOiBmdW5jdGlvbiBsb2cyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX2xvZyh2YWx1ZSkgKiBMT0cyRTtcbiAgICB9LFxuXG4gICAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX2xvZyh2YWx1ZSkgKiBMT0cxMEU7XG4gICAgfSxcblxuICAgIGxvZzFwOiBfbG9nMXAsXG5cbiAgICBzaWduOiBfc2lnbixcblxuICAgIHNpbmg6IGZ1bmN0aW9uIHNpbmgodmFsdWUpIHtcbiAgICAgIHZhciB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICghZ2xvYmFsSXNGaW5pdGUoeCkgfHwgeCA9PT0gMCkgeyByZXR1cm4geDsgfVxuXG4gICAgICB2YXIgYSA9IF9hYnMoeCk7XG4gICAgICBpZiAoYSA8IDEpIHtcbiAgICAgICAgdmFyIHUgPSBNYXRoLmV4cG0xKGEpO1xuICAgICAgICByZXR1cm4gX3NpZ24oeCkgKiB1ICogKDEgKyAoMSAvICh1ICsgMSkpKSAvIDI7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IF9leHAoYSAtIDEpO1xuICAgICAgcmV0dXJuIF9zaWduKHgpICogKHQgLSAoMSAvICh0ICogRSAqIEUpKSkgKiAoRSAvIDIpO1xuICAgIH0sXG5cbiAgICB0YW5oOiBmdW5jdGlvbiB0YW5oKHZhbHVlKSB7XG4gICAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAobnVtYmVySXNOYU4oeCkgfHwgeCA9PT0gMCkgeyByZXR1cm4geDsgfVxuICAgICAgLy8gY2FuIGV4aXQgZWFybHkgYXQgKy0yMCBhcyBKUyBsb3NlcyBwcmVjaXNpb24gZm9yIHRydWUgdmFsdWUgYXQgdGhpcyBpbnRlZ2VyXG4gICAgICBpZiAoeCA+PSAyMCkgeyByZXR1cm4gMTsgfVxuICAgICAgaWYgKHggPD0gLTIwKSB7IHJldHVybiAtMTsgfVxuXG4gICAgICByZXR1cm4gKE1hdGguZXhwbTEoeCkgLSBNYXRoLmV4cG0xKC14KSkgLyAoX2V4cCh4KSArIF9leHAoLXgpKTtcbiAgICB9LFxuXG4gICAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKHZhbHVlKSB7XG4gICAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICByZXR1cm4geCA8IDAgPyAtX2Zsb29yKC14KSA6IF9mbG9vcih4KTtcbiAgICB9LFxuXG4gICAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KSB7XG4gICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvaW11bFxuICAgICAgdmFyIGEgPSBFUy5Ub1VpbnQzMih4KTtcbiAgICAgIHZhciBiID0gRVMuVG9VaW50MzIoeSk7XG4gICAgICB2YXIgYWggPSAoYSA+Pj4gMTYpICYgMHhmZmZmO1xuICAgICAgdmFyIGFsID0gYSAmIDB4ZmZmZjtcbiAgICAgIHZhciBiaCA9IChiID4+PiAxNikgJiAweGZmZmY7XG4gICAgICB2YXIgYmwgPSBiICYgMHhmZmZmO1xuICAgICAgLy8gdGhlIHNoaWZ0IGJ5IDAgZml4ZXMgdGhlIHNpZ24gb24gdGhlIGhpZ2ggcGFydFxuICAgICAgLy8gdGhlIGZpbmFsIHwwIGNvbnZlcnRzIHRoZSB1bnNpZ25lZCB2YWx1ZSBpbnRvIGEgc2lnbmVkIHZhbHVlXG4gICAgICByZXR1cm4gKGFsICogYmwpICsgKCgoKGFoICogYmwpICsgKGFsICogYmgpKSA8PCAxNikgPj4+IDApIHwgMDtcbiAgICB9LFxuXG4gICAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCkge1xuICAgICAgdmFyIHYgPSBOdW1iZXIoeCk7XG4gICAgICBpZiAodiA9PT0gMCB8fCB2ID09PSBJbmZpbml0eSB8fCB2ID09PSAtSW5maW5pdHkgfHwgbnVtYmVySXNOYU4odikpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9XG4gICAgICB2YXIgc2lnbiA9IF9zaWduKHYpO1xuICAgICAgdmFyIGFicyA9IF9hYnModik7XG4gICAgICBpZiAoYWJzIDwgQklOQVJZXzMyX01JTl9WQUxVRSkge1xuICAgICAgICByZXR1cm4gc2lnbiAqIHJvdW5kVGllc1RvRXZlbihhYnMgLyBCSU5BUllfMzJfTUlOX1ZBTFVFIC8gQklOQVJZXzMyX0VQU0lMT04pICogQklOQVJZXzMyX01JTl9WQUxVRSAqIEJJTkFSWV8zMl9FUFNJTE9OO1xuICAgICAgfVxuICAgICAgLy8gVmVsdGthbXAncyBzcGxpdHRpbmcgKD8pXG4gICAgICB2YXIgYSA9ICgxICsgKEJJTkFSWV8zMl9FUFNJTE9OIC8gTnVtYmVyLkVQU0lMT04pKSAqIGFicztcbiAgICAgIHZhciByZXN1bHQgPSBhIC0gKGEgLSBhYnMpO1xuICAgICAgaWYgKHJlc3VsdCA+IEJJTkFSWV8zMl9NQVhfVkFMVUUgfHwgbnVtYmVySXNOYU4ocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gc2lnbiAqIEluZmluaXR5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNpZ24gKiByZXN1bHQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciB3aXRoaW5VTFBEaXN0YW5jZSA9IGZ1bmN0aW9uIHdpdGhpblVMUERpc3RhbmNlKHJlc3VsdCwgZXhwZWN0ZWQsIGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIF9hYnMoMSAtIChyZXN1bHQgLyBleHBlY3RlZCkpIC8gTnVtYmVyLkVQU0lMT04gPCAoZGlzdGFuY2UgfHwgOCk7XG4gIH07XG5cbiAgZGVmaW5lUHJvcGVydGllcyhNYXRoLCBNYXRoU2hpbXMpO1xuICAvLyBDaHJvbWUgPCA0MCBzaW5oIHJldHVybnMg4oieIGZvciBsYXJnZSBudW1iZXJzXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdzaW5oJywgTWF0aFNoaW1zLnNpbmgsIE1hdGguc2luaCg3MTApID09PSBJbmZpbml0eSk7XG4gIC8vIENocm9tZSA8IDQwIGNvc2ggcmV0dXJucyDiiJ4gZm9yIGxhcmdlIG51bWJlcnNcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ2Nvc2gnLCBNYXRoU2hpbXMuY29zaCwgTWF0aC5jb3NoKDcxMCkgPT09IEluZmluaXR5KTtcbiAgLy8gSUUgMTEgVFAgaGFzIGFuIGltcHJlY2lzZSBsb2cxcDogcmVwb3J0cyBNYXRoLmxvZzFwKC0xZS0xNykgYXMgMFxuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnbG9nMXAnLCBNYXRoU2hpbXMubG9nMXAsIE1hdGgubG9nMXAoLTFlLTE3KSAhPT0gLTFlLTE3KTtcbiAgLy8gSUUgMTEgVFAgaGFzIGFuIGltcHJlY2lzZSBhc2luaDogcmVwb3J0cyBNYXRoLmFzaW5oKC0xZTcpIGFzIG5vdCBleGFjdGx5IGVxdWFsIHRvIC1NYXRoLmFzaW5oKDFlNylcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ2FzaW5oJywgTWF0aFNoaW1zLmFzaW5oLCBNYXRoLmFzaW5oKC0xZTcpICE9PSAtTWF0aC5hc2luaCgxZTcpKTtcbiAgLy8gQ2hyb21lIDwgNTQgYXNpbmggcmV0dXJucyDiiJ4gZm9yIGxhcmdlIG51bWJlcnMgYW5kIHNob3VsZCBub3RcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ2FzaW5oJywgTWF0aFNoaW1zLmFzaW5oLCBNYXRoLmFzaW5oKDFlKzMwMCkgPT09IEluZmluaXR5KTtcbiAgLy8gQ2hyb21lIDwgNTQgYXRhbmggaW5jb3JyZWN0bHkgcmV0dXJucyAwIGZvciBsYXJnZSBudW1iZXJzXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdhdGFuaCcsIE1hdGhTaGltcy5hdGFuaCwgTWF0aC5hdGFuaCgxZS0zMDApID09PSAwKTtcbiAgLy8gQ2hyb21lIDQwIGhhcyBhbiBpbXByZWNpc2UgTWF0aC50YW5oIHdpdGggdmVyeSBzbWFsbCBudW1iZXJzXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICd0YW5oJywgTWF0aFNoaW1zLnRhbmgsIE1hdGgudGFuaCgtMmUtMTcpICE9PSAtMmUtMTcpO1xuICAvLyBDaHJvbWUgNDAgbG9zZXMgTWF0aC5hY29zaCBwcmVjaXNpb24gd2l0aCBoaWdoIG51bWJlcnNcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ2Fjb3NoJywgTWF0aFNoaW1zLmFjb3NoLCBNYXRoLmFjb3NoKE51bWJlci5NQVhfVkFMVUUpID09PSBJbmZpbml0eSk7XG4gIC8vIENocm9tZSA8IDU0IGhhcyBhbiBpbmFjY3VyYXRlIGFjb3NoIGZvciBFUFNJTE9OIGRlbHRhc1xuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnYWNvc2gnLCBNYXRoU2hpbXMuYWNvc2gsICF3aXRoaW5VTFBEaXN0YW5jZShNYXRoLmFjb3NoKDEgKyBOdW1iZXIuRVBTSUxPTiksIE1hdGguc3FydCgyICogTnVtYmVyLkVQU0lMT04pKSk7XG4gIC8vIEZpcmVmb3ggMzggb24gV2luZG93c1xuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnY2JydCcsIE1hdGhTaGltcy5jYnJ0LCAhd2l0aGluVUxQRGlzdGFuY2UoTWF0aC5jYnJ0KDFlLTMwMCksIDFlLTEwMCkpO1xuICAvLyBub2RlIDAuMTEgaGFzIGFuIGltcHJlY2lzZSBNYXRoLnNpbmggd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcbiAgZGVmaW5lUHJvcGVydHkoTWF0aCwgJ3NpbmgnLCBNYXRoU2hpbXMuc2luaCwgTWF0aC5zaW5oKC0yZS0xNykgIT09IC0yZS0xNyk7XG4gIC8vIEZGIDM1IG9uIExpbnV4IHJlcG9ydHMgMjIwMjUuNDY1Nzk0ODA2NzI1IGZvciBNYXRoLmV4cG0xKDEwKVxuICB2YXIgZXhwbTFPZlRlbiA9IE1hdGguZXhwbTEoMTApO1xuICBkZWZpbmVQcm9wZXJ0eShNYXRoLCAnZXhwbTEnLCBNYXRoU2hpbXMuZXhwbTEsIGV4cG0xT2ZUZW4gPiAyMjAyNS40NjU3OTQ4MDY3MTkgfHwgZXhwbTFPZlRlbiA8IDIyMDI1LjQ2NTc5NDgwNjcxNjUxNjgpO1xuICAvLyBub2RlIHYxMi4xMSAtIHYxMi4xNSByZXBvcnQgTmFOXG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdoeXBvdCcsIE1hdGhTaGltcy5oeXBvdCwgTWF0aC5oeXBvdChJbmZpbml0eSwgTmFOKSAhPT0gSW5maW5pdHkpO1xuXG4gIHZhciBvcmlnTWF0aFJvdW5kID0gTWF0aC5yb3VuZDtcbiAgLy8gYnJlYWtzIGluIGUuZy4gU2FmYXJpIDgsIEludGVybmV0IEV4cGxvcmVyIDExLCBPcGVyYSAxMlxuICB2YXIgcm91bmRIYW5kbGVzQm91bmRhcnlDb25kaXRpb25zID0gTWF0aC5yb3VuZCgwLjUgLSAoTnVtYmVyLkVQU0lMT04gLyA0KSkgPT09IDBcbiAgICAmJiBNYXRoLnJvdW5kKC0wLjUgKyAoTnVtYmVyLkVQU0lMT04gLyAzLjk5KSkgPT09IDE7XG5cbiAgLy8gV2hlbiBlbmdpbmVzIHVzZSBNYXRoLmZsb29yKHggKyAwLjUpIGludGVybmFsbHksIE1hdGgucm91bmQgY2FuIGJlIGJ1Z2d5IGZvciBsYXJnZSBpbnRlZ2Vycy5cbiAgLy8gVGhpcyBiZWhhdmlvciBzaG91bGQgYmUgZ292ZXJuZWQgYnkgXCJyb3VuZCB0byBuZWFyZXN0LCB0aWVzIHRvIGV2ZW4gbW9kZVwiXG4gIC8vIHNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdGVybXMtYW5kLWRlZmluaXRpb25zLW51bWJlci10eXBlXG4gIC8vIFRoZXNlIGFyZSB0aGUgYm91bmRhcnkgY2FzZXMgd2hlcmUgaXQgYnJlYWtzLlxuICB2YXIgc21hbGxlc3RQb3NpdGl2ZU51bWJlcldoZXJlUm91bmRCcmVha3MgPSBpbnZlcnNlRXBzaWxvbiArIDE7XG4gIHZhciBsYXJnZXN0UG9zaXRpdmVOdW1iZXJXaGVyZVJvdW5kQnJlYWtzID0gKDIgKiBpbnZlcnNlRXBzaWxvbikgLSAxO1xuICB2YXIgcm91bmREb2VzTm90SW5jcmVhc2VJbnRlZ2VycyA9IFtcbiAgICBzbWFsbGVzdFBvc2l0aXZlTnVtYmVyV2hlcmVSb3VuZEJyZWFrcyxcbiAgICBsYXJnZXN0UG9zaXRpdmVOdW1iZXJXaGVyZVJvdW5kQnJlYWtzXG4gIF0uZXZlcnkoZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSkgPT09IG51bTtcbiAgfSk7XG4gIGRlZmluZVByb3BlcnR5KE1hdGgsICdyb3VuZCcsIGZ1bmN0aW9uIHJvdW5kKHgpIHtcbiAgICB2YXIgZmxvb3IgPSBfZmxvb3IoeCk7XG4gICAgdmFyIGNlaWwgPSBmbG9vciA9PT0gLTEgPyAtMCA6IGZsb29yICsgMTtcbiAgICByZXR1cm4geCAtIGZsb29yIDwgMC41ID8gZmxvb3IgOiBjZWlsO1xuICB9LCAhcm91bmRIYW5kbGVzQm91bmRhcnlDb25kaXRpb25zIHx8ICFyb3VuZERvZXNOb3RJbmNyZWFzZUludGVnZXJzKTtcbiAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhNYXRoLnJvdW5kLCBvcmlnTWF0aFJvdW5kKTtcblxuICB2YXIgb3JpZ0ltdWwgPSBNYXRoLmltdWw7XG4gIGlmIChNYXRoLmltdWwoMHhmZmZmZmZmZiwgNSkgIT09IC01KSB7XG4gICAgLy8gU2FmYXJpIDYuMSwgYXQgbGVhc3QsIHJlcG9ydHMgXCIwXCIgZm9yIHRoaXMgdmFsdWVcbiAgICBNYXRoLmltdWwgPSBNYXRoU2hpbXMuaW11bDtcbiAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKE1hdGguaW11bCwgb3JpZ0ltdWwpO1xuICB9XG4gIGlmIChNYXRoLmltdWwubGVuZ3RoICE9PSAyKSB7XG4gICAgLy8gU2FmYXJpIDguMC40IGhhcyBhIGxlbmd0aCBvZiAxXG4gICAgLy8gZml4ZWQgaW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0MzY1OFxuICAgIG92ZXJyaWRlTmF0aXZlKE1hdGgsICdpbXVsJywgZnVuY3Rpb24gaW11bCh4LCB5KSB7XG4gICAgICByZXR1cm4gRVMuQ2FsbChvcmlnSW11bCwgTWF0aCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFByb21pc2VzXG4gIC8vIFNpbXBsZXN0IHBvc3NpYmxlIGltcGxlbWVudGF0aW9uOyB1c2UgYSAzcmQtcGFydHkgbGlicmFyeSBpZiB5b3VcbiAgLy8gd2FudCB0aGUgYmVzdCBwb3NzaWJsZSBzcGVlZCBhbmQvb3IgbG9uZyBzdGFjayB0cmFjZXMuXG4gIHZhciBQcm9taXNlU2hpbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNldFRpbWVvdXQgPSBnbG9iYWxzLnNldFRpbWVvdXQ7XG4gICAgLy8gc29tZSBlbnZpcm9ubWVudHMgZG9uJ3QgaGF2ZSBzZXRUaW1lb3V0IC0gbm8gd2F5IHRvIHNoaW0gaGVyZS5cbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNldFRpbWVvdXQgIT09ICdvYmplY3QnKSB7IHJldHVybjsgfVxuXG4gICAgRVMuSXNQcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHByb21pc2UpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcHJvbWlzZS5fcHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB1bmluaXRpYWxpemVkLCBvciBtaXNzaW5nIG91ciBoaWRkZW4gZmllbGQuXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLy8gXCJQcm9taXNlQ2FwYWJpbGl0eVwiIGluIHRoZSBzcGVjIGlzIHdoYXQgbW9zdCBwcm9taXNlIGltcGxlbWVudGF0aW9uc1xuICAgIC8vIGNhbGwgYSBcImRlZmVycmVkXCIuXG4gICAgdmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICAgIGlmICghRVMuSXNDb25zdHJ1Y3RvcihDKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgICAgfVxuICAgICAgdmFyIGNhcGFiaWxpdHkgPSB0aGlzO1xuICAgICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoY2FwYWJpbGl0eS5yZXNvbHZlICE9PSB2b2lkIDAgfHwgY2FwYWJpbGl0eS5yZWplY3QgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGltcGxlbWVudGF0aW9uIScpO1xuICAgICAgICB9XG4gICAgICAgIGNhcGFiaWxpdHkucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIGNhcGFiaWxpdHkucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgfTtcbiAgICAgIC8vIEluaXRpYWxpemUgZmllbGRzIHRvIGluZm9ybSBvcHRpbWl6ZXJzIGFib3V0IHRoZSBvYmplY3Qgc2hhcGUuXG4gICAgICBjYXBhYmlsaXR5LnJlc29sdmUgPSB2b2lkIDA7XG4gICAgICBjYXBhYmlsaXR5LnJlamVjdCA9IHZvaWQgMDtcbiAgICAgIGNhcGFiaWxpdHkucHJvbWlzZSA9IG5ldyBDKHJlc29sdmVyKTtcbiAgICAgIGlmICghKEVTLklzQ2FsbGFibGUoY2FwYWJpbGl0eS5yZXNvbHZlKSAmJiBFUy5Jc0NhbGxhYmxlKGNhcGFiaWxpdHkucmVqZWN0KSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZmluZCBhbiBhcHByb3ByaWF0ZSBzZXRJbW1lZGlhdGUtYWxpa2VcbiAgICB2YXIgbWFrZVplcm9UaW1lb3V0O1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBFUy5Jc0NhbGxhYmxlKHdpbmRvdy5wb3N0TWVzc2FnZSkpIHtcbiAgICAgIG1ha2VaZXJvVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vZGJhcm9uLm9yZy9sb2cvMjAxMDAzMDktZmFzdGVyLXRpbWVvdXRzXG4gICAgICAgIHZhciB0aW1lb3V0cyA9IFtdO1xuICAgICAgICB2YXIgbWVzc2FnZU5hbWUgPSAnemVyby10aW1lb3V0LW1lc3NhZ2UnO1xuICAgICAgICB2YXIgc2V0WmVyb1RpbWVvdXQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICBfcHVzaCh0aW1lb3V0cywgZm4pO1xuICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlTmFtZSwgJyonKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiYgZXZlbnQuZGF0YSA9PT0gbWVzc2FnZU5hbWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXRzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHZhciBmbiA9IF9zaGlmdCh0aW1lb3V0cyk7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHNldFplcm9UaW1lb3V0O1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG1ha2VQcm9taXNlQXNhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEFuIGVmZmljaWVudCB0YXNrLXNjaGVkdWxlciBiYXNlZCBvbiBhIHByZS1leGlzdGluZyBQcm9taXNlXG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggd2UgY2FuIHVzZSBldmVuIGlmIHdlIG92ZXJyaWRlIHRoZVxuICAgICAgLy8gZ2xvYmFsIFByb21pc2UgYmVsb3cgKGluIG9yZGVyIHRvIHdvcmthcm91bmQgYnVncylcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SYXlub3Mvb2JzZXJ2LWhhc2gvaXNzdWVzLzIjaXNzdWVjb21tZW50LTM1ODU3NjcxXG4gICAgICB2YXIgUCA9IGdsb2JhbHMuUHJvbWlzZTtcbiAgICAgIHZhciBwciA9IFAgJiYgUC5yZXNvbHZlICYmIFAucmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIHByICYmIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHJldHVybiBwci50aGVuKHRhc2spO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBlbnF1ZXVlID0gRVMuSXNDYWxsYWJsZShnbG9iYWxzLnNldEltbWVkaWF0ZSlcbiAgICAgID8gZ2xvYmFscy5zZXRJbW1lZGlhdGVcbiAgICAgIDogKFxuICAgICAgICB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5uZXh0VGlja1xuICAgICAgICAgID8gcHJvY2Vzcy5uZXh0VGlja1xuICAgICAgICAgIDogbWFrZVByb21pc2VBc2FwKCkgfHwgKEVTLklzQ2FsbGFibGUobWFrZVplcm9UaW1lb3V0KSA/IG1ha2VaZXJvVGltZW91dCgpIDogZnVuY3Rpb24gKHRhc2spIHsgc2V0VGltZW91dCh0YXNrLCAwKTsgfSlcbiAgICAgICk7IC8vIGZhbGxiYWNrXG5cbiAgICAvLyBDb25zdGFudHMgZm9yIFByb21pc2UgaW1wbGVtZW50YXRpb25cbiAgICB2YXIgUFJPTUlTRV9JREVOVElUWSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9O1xuICAgIHZhciBQUk9NSVNFX1RIUk9XRVIgPSBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9O1xuICAgIHZhciBQUk9NSVNFX1BFTkRJTkcgPSAwO1xuICAgIHZhciBQUk9NSVNFX0ZVTEZJTExFRCA9IDE7XG4gICAgdmFyIFBST01JU0VfUkVKRUNURUQgPSAyO1xuICAgIC8vIFdlIHN0b3JlIGZ1bGZpbGwvcmVqZWN0IGhhbmRsZXJzIGFuZCBjYXBhYmlsaXRpZXMgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgdmFyIFBST01JU0VfRlVMRklMTF9PRkZTRVQgPSAwO1xuICAgIHZhciBQUk9NSVNFX1JFSkVDVF9PRkZTRVQgPSAxO1xuICAgIHZhciBQUk9NSVNFX0NBUEFCSUxJVFlfT0ZGU0VUID0gMjtcbiAgICAvLyBUaGlzIGlzIHVzZWQgaW4gYW4gb3B0aW1pemF0aW9uIGZvciBjaGFpbmluZyBwcm9taXNlcyB2aWEgdGhlbi5cbiAgICB2YXIgUFJPTUlTRV9GQUtFX0NBUEFCSUxJVFkgPSB7fTtcblxuICAgIHZhciBlbnF1ZXVlUHJvbWlzZVJlYWN0aW9uSm9iID0gZnVuY3Rpb24gKGhhbmRsZXIsIGNhcGFiaWxpdHksIGFyZ3VtZW50KSB7XG4gICAgICBlbnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvbWlzZVJlYWN0aW9uSm9iKGhhbmRsZXIsIGNhcGFiaWxpdHksIGFyZ3VtZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgcHJvbWlzZVJlYWN0aW9uSm9iID0gZnVuY3Rpb24gKGhhbmRsZXIsIHByb21pc2VDYXBhYmlsaXR5LCBhcmd1bWVudCkge1xuICAgICAgdmFyIGhhbmRsZXJSZXN1bHQsIGY7XG4gICAgICBpZiAocHJvbWlzZUNhcGFiaWxpdHkgPT09IFBST01JU0VfRkFLRV9DQVBBQklMSVRZKSB7XG4gICAgICAgIC8vIEZhc3QgY2FzZSwgd2hlbiB3ZSBkb24ndCBhY3R1YWxseSBuZWVkIHRvIGNoYWluIHRocm91Z2ggdG8gYVxuICAgICAgICAvLyAocmVhbCkgcHJvbWlzZUNhcGFiaWxpdHkuXG4gICAgICAgIHJldHVybiBoYW5kbGVyKGFyZ3VtZW50KTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGhhbmRsZXJSZXN1bHQgPSBoYW5kbGVyKGFyZ3VtZW50KTtcbiAgICAgICAgZiA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZXJSZXN1bHQgPSBlO1xuICAgICAgICBmID0gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgfVxuICAgICAgZihoYW5kbGVyUmVzdWx0KTtcbiAgICB9O1xuXG4gICAgdmFyIGZ1bGZpbGxQcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICB2YXIgX3Byb21pc2UgPSBwcm9taXNlLl9wcm9taXNlO1xuICAgICAgdmFyIGxlbmd0aCA9IF9wcm9taXNlLnJlYWN0aW9uTGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5xdWV1ZVByb21pc2VSZWFjdGlvbkpvYihcbiAgICAgICAgICBfcHJvbWlzZS5mdWxmaWxsUmVhY3Rpb25IYW5kbGVyMCxcbiAgICAgICAgICBfcHJvbWlzZS5yZWFjdGlvbkNhcGFiaWxpdHkwLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIF9wcm9taXNlLmZ1bGZpbGxSZWFjdGlvbkhhbmRsZXIwID0gdm9pZCAwO1xuICAgICAgICBfcHJvbWlzZS5yZWplY3RSZWFjdGlvbnMwID0gdm9pZCAwO1xuICAgICAgICBfcHJvbWlzZS5yZWFjdGlvbkNhcGFiaWxpdHkwID0gdm9pZCAwO1xuICAgICAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBpZHggPSAwOyBpIDwgbGVuZ3RoOyBpKyssIGlkeCArPSAzKSB7XG4gICAgICAgICAgICBlbnF1ZXVlUHJvbWlzZVJlYWN0aW9uSm9iKFxuICAgICAgICAgICAgICBfcHJvbWlzZVtpZHggKyBQUk9NSVNFX0ZVTEZJTExfT0ZGU0VUXSxcbiAgICAgICAgICAgICAgX3Byb21pc2VbaWR4ICsgUFJPTUlTRV9DQVBBQklMSVRZX09GRlNFVF0sXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvbWlzZVtpZHggKyBQUk9NSVNFX0ZVTEZJTExfT0ZGU0VUXSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHByb21pc2VbaWR4ICsgUFJPTUlTRV9SRUpFQ1RfT0ZGU0VUXSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHByb21pc2VbaWR4ICsgUFJPTUlTRV9DQVBBQklMSVRZX09GRlNFVF0gPSB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfcHJvbWlzZS5yZXN1bHQgPSB2YWx1ZTtcbiAgICAgIF9wcm9taXNlLnN0YXRlID0gUFJPTUlTRV9GVUxGSUxMRUQ7XG4gICAgICBfcHJvbWlzZS5yZWFjdGlvbkxlbmd0aCA9IDA7XG4gICAgfTtcblxuICAgIHZhciByZWplY3RQcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2UsIHJlYXNvbikge1xuICAgICAgdmFyIF9wcm9taXNlID0gcHJvbWlzZS5fcHJvbWlzZTtcbiAgICAgIHZhciBsZW5ndGggPSBfcHJvbWlzZS5yZWFjdGlvbkxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgIGVucXVldWVQcm9taXNlUmVhY3Rpb25Kb2IoXG4gICAgICAgICAgX3Byb21pc2UucmVqZWN0UmVhY3Rpb25IYW5kbGVyMCxcbiAgICAgICAgICBfcHJvbWlzZS5yZWFjdGlvbkNhcGFiaWxpdHkwLFxuICAgICAgICAgIHJlYXNvblxuICAgICAgICApO1xuICAgICAgICBfcHJvbWlzZS5mdWxmaWxsUmVhY3Rpb25IYW5kbGVyMCA9IHZvaWQgMDtcbiAgICAgICAgX3Byb21pc2UucmVqZWN0UmVhY3Rpb25zMCA9IHZvaWQgMDtcbiAgICAgICAgX3Byb21pc2UucmVhY3Rpb25DYXBhYmlsaXR5MCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMSwgaWR4ID0gMDsgaSA8IGxlbmd0aDsgaSsrLCBpZHggKz0gMykge1xuICAgICAgICAgICAgZW5xdWV1ZVByb21pc2VSZWFjdGlvbkpvYihcbiAgICAgICAgICAgICAgX3Byb21pc2VbaWR4ICsgUFJPTUlTRV9SRUpFQ1RfT0ZGU0VUXSxcbiAgICAgICAgICAgICAgX3Byb21pc2VbaWR4ICsgUFJPTUlTRV9DQVBBQklMSVRZX09GRlNFVF0sXG4gICAgICAgICAgICAgIHJlYXNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb21pc2VbaWR4ICsgUFJPTUlTRV9GVUxGSUxMX09GRlNFVF0gPSB2b2lkIDA7XG4gICAgICAgICAgICBwcm9taXNlW2lkeCArIFBST01JU0VfUkVKRUNUX09GRlNFVF0gPSB2b2lkIDA7XG4gICAgICAgICAgICBwcm9taXNlW2lkeCArIFBST01JU0VfQ0FQQUJJTElUWV9PRkZTRVRdID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3Byb21pc2UucmVzdWx0ID0gcmVhc29uO1xuICAgICAgX3Byb21pc2Uuc3RhdGUgPSBQUk9NSVNFX1JFSkVDVEVEO1xuICAgICAgX3Byb21pc2UucmVhY3Rpb25MZW5ndGggPSAwO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlUmVzb2x2aW5nRnVuY3Rpb25zID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgIHZhciBhbHJlYWR5UmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKHJlc29sdXRpb24pIHtcbiAgICAgICAgdmFyIHRoZW47XG4gICAgICAgIGlmIChhbHJlYWR5UmVzb2x2ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIGFscmVhZHlSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgIGlmIChyZXNvbHV0aW9uID09PSBwcm9taXNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdFByb21pc2UocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignU2VsZiByZXNvbHV0aW9uJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bGZpbGxQcm9taXNlKHByb21pc2UsIHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbiA9IHJlc29sdXRpb24udGhlbjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiByZWplY3RQcm9taXNlKHByb21pc2UsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRVMuSXNDYWxsYWJsZSh0aGVuKSkge1xuICAgICAgICAgIHJldHVybiBmdWxmaWxsUHJvbWlzZShwcm9taXNlLCByZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZVRoZW5hYmxlSm9iKHByb21pc2UsIHJlc29sdXRpb24sIHRoZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICBpZiAoYWxyZWFkeVJlc29sdmVkKSB7IHJldHVybjsgfVxuICAgICAgICBhbHJlYWR5UmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcmVqZWN0UHJvbWlzZShwcm9taXNlLCByZWFzb24pO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH07XG4gICAgfTtcblxuICAgIHZhciBvcHRpbWl6ZWRUaGVuID0gZnVuY3Rpb24gKHRoZW4sIHRoZW5hYmxlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIE9wdGltaXphdGlvbjogc2luY2Ugd2UgZGlzY2FyZCB0aGUgcmVzdWx0LCB3ZSBjYW4gcGFzcyBvdXJcbiAgICAgIC8vIG93biB0aGVuIGltcGxlbWVudGF0aW9uIGEgc3BlY2lhbCBoaW50IHRvIGxldCBpdCBrbm93IGl0XG4gICAgICAvLyBkb2Vzbid0IGhhdmUgdG8gY3JlYXRlIGl0LiAgKFRoZSBQUk9NSVNFX0ZBS0VfQ0FQQUJJTElUWVxuICAgICAgLy8gb2JqZWN0IGlzIGxvY2FsIHRvIHRoaXMgaW1wbGVtZW50YXRpb24gYW5kIHVuZm9yZ2VhYmxlIG91dHNpZGUuKVxuICAgICAgaWYgKHRoZW4gPT09IFByb21pc2UkcHJvdG90eXBlJHRoZW4pIHtcbiAgICAgICAgX2NhbGwodGhlbiwgdGhlbmFibGUsIHJlc29sdmUsIHJlamVjdCwgUFJPTUlTRV9GQUtFX0NBUEFCSUxJVFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2NhbGwodGhlbiwgdGhlbmFibGUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmVUaGVuYWJsZUpvYiA9IGZ1bmN0aW9uIChwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgdmFyIHJlc29sdmluZ0Z1bmN0aW9ucyA9IGNyZWF0ZVJlc29sdmluZ0Z1bmN0aW9ucyhwcm9taXNlKTtcbiAgICAgIHZhciByZXNvbHZlID0gcmVzb2x2aW5nRnVuY3Rpb25zLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVzb2x2aW5nRnVuY3Rpb25zLnJlamVjdDtcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGltaXplZFRoZW4odGhlbiwgdGhlbmFibGUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIFByb21pc2UkcHJvdG90eXBlLCBQcm9taXNlJHByb3RvdHlwZSR0aGVuO1xuICAgIHZhciBQcm9taXNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBQcm9taXNlU2hpbSA9IGZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VTaGltKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnN0cnVjdG9yIFByb21pc2UgcmVxdWlyZXMgXCJuZXdcIicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzICYmIHRoaXMuX3Byb21pc2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgY29uc3RydWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vYnVncy5lY21hc2NyaXB0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjQ4MlxuICAgICAgICBpZiAoIUVTLklzQ2FsbGFibGUocmVzb2x2ZXIpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgdmFsaWQgcmVzb2x2ZXInKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvbWlzZSA9IGVtdWxhdGVFUzZjb25zdHJ1Y3QodGhpcywgUHJvbWlzZVNoaW0sIFByb21pc2UkcHJvdG90eXBlLCB7XG4gICAgICAgICAgX3Byb21pc2U6IHtcbiAgICAgICAgICAgIHJlc3VsdDogdm9pZCAwLFxuICAgICAgICAgICAgc3RhdGU6IFBST01JU0VfUEVORElORyxcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCBtZW1iZXIgb2YgdGhlIFwicmVhY3Rpb25zXCIgYXJyYXkgaXMgaW5saW5lZCBoZXJlLFxuICAgICAgICAgICAgLy8gc2luY2UgbW9zdCBwcm9taXNlcyBvbmx5IGhhdmUgb25lIHJlYWN0aW9uLlxuICAgICAgICAgICAgLy8gV2UndmUgYWxzbyBleHBsb2RlZCB0aGUgJ3JlYWN0aW9uJyBvYmplY3QgdG8gaW5saW5lIHRoZVxuICAgICAgICAgICAgLy8gXCJoYW5kbGVyXCIgYW5kIFwiY2FwYWJpbGl0eVwiIGZpZWxkcywgc2luY2UgYm90aCBmdWxmaWxsIGFuZFxuICAgICAgICAgICAgLy8gcmVqZWN0IHJlYWN0aW9ucyBzaGFyZSB0aGUgc2FtZSBjYXBhYmlsaXR5LlxuICAgICAgICAgICAgcmVhY3Rpb25MZW5ndGg6IDAsXG4gICAgICAgICAgICBmdWxmaWxsUmVhY3Rpb25IYW5kbGVyMDogdm9pZCAwLFxuICAgICAgICAgICAgcmVqZWN0UmVhY3Rpb25IYW5kbGVyMDogdm9pZCAwLFxuICAgICAgICAgICAgcmVhY3Rpb25DYXBhYmlsaXR5MDogdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc29sdmluZ0Z1bmN0aW9ucyA9IGNyZWF0ZVJlc29sdmluZ0Z1bmN0aW9ucyhwcm9taXNlKTtcbiAgICAgICAgdmFyIHJlamVjdCA9IHJlc29sdmluZ0Z1bmN0aW9ucy5yZWplY3Q7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzb2x2ZXIocmVzb2x2aW5nRnVuY3Rpb25zLnJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFByb21pc2VTaGltO1xuICAgIH0oKSk7XG4gICAgUHJvbWlzZSRwcm90b3R5cGUgPSBQcm9taXNlLnByb3RvdHlwZTtcblxuICAgIHZhciBfcHJvbWlzZUFsbFJlc29sdmVyID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZXMsIGNhcGFiaWxpdHksIHJlbWFpbmluZykge1xuICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB4O1xuICAgICAgICBpZiAoKC0tcmVtYWluaW5nLmNvdW50KSA9PT0gMCkge1xuICAgICAgICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICAgICAgIHJlc29sdmUodmFsdWVzKTsgLy8gY2FsbCB3LyB0aGlzPT09dW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBwZXJmb3JtUHJvbWlzZUFsbCA9IGZ1bmN0aW9uIChpdGVyYXRvclJlY29yZCwgQywgcmVzdWx0Q2FwYWJpbGl0eSkge1xuICAgICAgdmFyIGl0ID0gaXRlcmF0b3JSZWNvcmQuaXRlcmF0b3I7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgcmVtYWluaW5nID0geyBjb3VudDogMSB9O1xuICAgICAgdmFyIG5leHQsIG5leHRWYWx1ZTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5leHQgPSBFUy5JdGVyYXRvclN0ZXAoaXQpO1xuICAgICAgICAgIGlmIChuZXh0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaXRlcmF0b3JSZWNvcmQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dFZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGl0ZXJhdG9yUmVjb3JkLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIG5leHRQcm9taXNlID0gQy5yZXNvbHZlKG5leHRWYWx1ZSk7XG4gICAgICAgIHZhciByZXNvbHZlRWxlbWVudCA9IF9wcm9taXNlQWxsUmVzb2x2ZXIoXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIHJlc3VsdENhcGFiaWxpdHksXG4gICAgICAgICAgcmVtYWluaW5nXG4gICAgICAgICk7XG4gICAgICAgIHJlbWFpbmluZy5jb3VudCArPSAxO1xuICAgICAgICBvcHRpbWl6ZWRUaGVuKG5leHRQcm9taXNlLnRoZW4sIG5leHRQcm9taXNlLCByZXNvbHZlRWxlbWVudCwgcmVzdWx0Q2FwYWJpbGl0eS5yZWplY3QpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKCgtLXJlbWFpbmluZy5jb3VudCkgPT09IDApIHtcbiAgICAgICAgdmFyIHJlc29sdmUgPSByZXN1bHRDYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgICAgIHJlc29sdmUodmFsdWVzKTsgLy8gY2FsbCB3LyB0aGlzPT09dW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0Q2FwYWJpbGl0eS5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgcGVyZm9ybVByb21pc2VSYWNlID0gZnVuY3Rpb24gKGl0ZXJhdG9yUmVjb3JkLCBDLCByZXN1bHRDYXBhYmlsaXR5KSB7XG4gICAgICB2YXIgaXQgPSBpdGVyYXRvclJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHZhciBuZXh0LCBuZXh0VmFsdWUsIG5leHRQcm9taXNlO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXh0ID0gRVMuSXRlcmF0b3JTdGVwKGl0KTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IElmIGl0ZXJhYmxlIGhhcyBubyBpdGVtcywgcmVzdWx0aW5nIHByb21pc2Ugd2lsbCBuZXZlclxuICAgICAgICAgICAgLy8gcmVzb2x2ZTsgc2VlOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RvbWVuaWMvcHJvbWlzZXMtdW53cmFwcGluZy9pc3N1ZXMvNzVcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5lY21hc2NyaXB0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjUxNVxuICAgICAgICAgICAgaXRlcmF0b3JSZWNvcmQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dFZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGl0ZXJhdG9yUmVjb3JkLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFByb21pc2UgPSBDLnJlc29sdmUobmV4dFZhbHVlKTtcbiAgICAgICAgb3B0aW1pemVkVGhlbihuZXh0UHJvbWlzZS50aGVuLCBuZXh0UHJvbWlzZSwgcmVzdWx0Q2FwYWJpbGl0eS5yZXNvbHZlLCByZXN1bHRDYXBhYmlsaXR5LnJlamVjdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0Q2FwYWJpbGl0eS5wcm9taXNlO1xuICAgIH07XG5cbiAgICBkZWZpbmVQcm9wZXJ0aWVzKFByb21pc2UsIHtcbiAgICAgIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBDID0gdGhpcztcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoQykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIGlzIG5vdCBvYmplY3QnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yLCBpdGVyYXRvclJlY29yZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpdGVyYXRvciA9IEVTLkdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICAgICAgICBpdGVyYXRvclJlY29yZCA9IHsgaXRlcmF0b3I6IGl0ZXJhdG9yLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgIHJldHVybiBwZXJmb3JtUHJvbWlzZUFsbChpdGVyYXRvclJlY29yZCwgQywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB2YXIgZXhjZXB0aW9uID0gZTtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JSZWNvcmQgJiYgIWl0ZXJhdG9yUmVjb3JkLmRvbmUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIEVTLkl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZWUpIHtcbiAgICAgICAgICAgICAgZXhjZXB0aW9uID0gZWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAgICAgICByZWplY3QoZXhjZXB0aW9uKTtcbiAgICAgICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBDID0gdGhpcztcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoQykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIGlzIG5vdCBvYmplY3QnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yLCBpdGVyYXRvclJlY29yZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpdGVyYXRvciA9IEVTLkdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICAgICAgICBpdGVyYXRvclJlY29yZCA9IHsgaXRlcmF0b3I6IGl0ZXJhdG9yLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgIHJldHVybiBwZXJmb3JtUHJvbWlzZVJhY2UoaXRlcmF0b3JSZWNvcmQsIEMsIGNhcGFiaWxpdHkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IGU7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yUmVjb3JkICYmICFpdGVyYXRvclJlY29yZC5kb25lKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBFUy5JdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCB0cnVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVlKSB7XG4gICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IGVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgICAgICAgcmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgICAgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgICAgIHZhciBDID0gdGhpcztcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoQykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgICAgICB2YXIgcmVqZWN0RnVuYyA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgICByZWplY3RGdW5jKHJlYXNvbik7IC8vIGNhbGwgd2l0aCB0aGlzPT09dW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gICAgICB9LFxuXG4gICAgICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHYpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZXNkaXNjdXNzLm9yZy90b3BpYy9maXhpbmctcHJvbWlzZS1yZXNvbHZlIGZvciBzcGVjXG4gICAgICAgIHZhciBDID0gdGhpcztcbiAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoQykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFUy5Jc1Byb21pc2UodikpIHtcbiAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB2LmNvbnN0cnVjdG9yO1xuICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gQykge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgICAgICB2YXIgcmVzb2x2ZUZ1bmMgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgICAgIHJlc29sdmVGdW5jKHYpOyAvLyBjYWxsIHdpdGggdGhpcz09PXVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmaW5lUHJvcGVydGllcyhQcm9taXNlJHByb3RvdHlwZSwge1xuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgIH0sXG5cbiAgICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgICAgICBpZiAoIUVTLklzUHJvbWlzZShwcm9taXNlKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBwcm9taXNlJyk7IH1cbiAgICAgICAgdmFyIEMgPSBFUy5TcGVjaWVzQ29uc3RydWN0b3IocHJvbWlzZSwgUHJvbWlzZSk7XG4gICAgICAgIHZhciByZXN1bHRDYXBhYmlsaXR5O1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWVJc0lnbm9yZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gPT09IFBST01JU0VfRkFLRV9DQVBBQklMSVRZO1xuICAgICAgICBpZiAocmV0dXJuVmFsdWVJc0lnbm9yZWQgJiYgQyA9PT0gUHJvbWlzZSkge1xuICAgICAgICAgIHJlc3VsdENhcGFiaWxpdHkgPSBQUk9NSVNFX0ZBS0VfQ0FQQUJJTElUWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRDYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBlcmZvcm1Qcm9taXNlVGhlbihwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzdWx0Q2FwYWJpbGl0eSlcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlJ3ZlIHNwbGl0IHRoZSAncmVhY3Rpb24nIG9iamVjdCBpbnRvIGl0cyB0d29cbiAgICAgICAgLy8gY29tcG9uZW50cywgXCJjYXBhYmlsaXRpZXNcIiBhbmQgXCJoYW5kbGVyXCJcbiAgICAgICAgLy8gXCJjYXBhYmlsaXRpZXNcIiBpcyBhbHdheXMgZXF1YWwgdG8gYHJlc3VsdENhcGFiaWxpdHlgXG4gICAgICAgIHZhciBmdWxmaWxsUmVhY3Rpb25IYW5kbGVyID0gRVMuSXNDYWxsYWJsZShvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IFBST01JU0VfSURFTlRJVFk7XG4gICAgICAgIHZhciByZWplY3RSZWFjdGlvbkhhbmRsZXIgPSBFUy5Jc0NhbGxhYmxlKG9uUmVqZWN0ZWQpID8gb25SZWplY3RlZCA6IFBST01JU0VfVEhST1dFUjtcbiAgICAgICAgdmFyIF9wcm9taXNlID0gcHJvbWlzZS5fcHJvbWlzZTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBpZiAoX3Byb21pc2Uuc3RhdGUgPT09IFBST01JU0VfUEVORElORykge1xuICAgICAgICAgIGlmIChfcHJvbWlzZS5yZWFjdGlvbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgX3Byb21pc2UuZnVsZmlsbFJlYWN0aW9uSGFuZGxlcjAgPSBmdWxmaWxsUmVhY3Rpb25IYW5kbGVyO1xuICAgICAgICAgICAgX3Byb21pc2UucmVqZWN0UmVhY3Rpb25IYW5kbGVyMCA9IHJlamVjdFJlYWN0aW9uSGFuZGxlcjtcbiAgICAgICAgICAgIF9wcm9taXNlLnJlYWN0aW9uQ2FwYWJpbGl0eTAgPSByZXN1bHRDYXBhYmlsaXR5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gMyAqIChfcHJvbWlzZS5yZWFjdGlvbkxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgX3Byb21pc2VbaWR4ICsgUFJPTUlTRV9GVUxGSUxMX09GRlNFVF0gPSBmdWxmaWxsUmVhY3Rpb25IYW5kbGVyO1xuICAgICAgICAgICAgX3Byb21pc2VbaWR4ICsgUFJPTUlTRV9SRUpFQ1RfT0ZGU0VUXSA9IHJlamVjdFJlYWN0aW9uSGFuZGxlcjtcbiAgICAgICAgICAgIF9wcm9taXNlW2lkeCArIFBST01JU0VfQ0FQQUJJTElUWV9PRkZTRVRdID0gcmVzdWx0Q2FwYWJpbGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3Byb21pc2UucmVhY3Rpb25MZW5ndGggKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChfcHJvbWlzZS5zdGF0ZSA9PT0gUFJPTUlTRV9GVUxGSUxMRUQpIHtcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9taXNlLnJlc3VsdDtcbiAgICAgICAgICBlbnF1ZXVlUHJvbWlzZVJlYWN0aW9uSm9iKFxuICAgICAgICAgICAgZnVsZmlsbFJlYWN0aW9uSGFuZGxlcixcbiAgICAgICAgICAgIHJlc3VsdENhcGFiaWxpdHksXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3Byb21pc2Uuc3RhdGUgPT09IFBST01JU0VfUkVKRUNURUQpIHtcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9taXNlLnJlc3VsdDtcbiAgICAgICAgICBlbnF1ZXVlUHJvbWlzZVJlYWN0aW9uSm9iKFxuICAgICAgICAgICAgcmVqZWN0UmVhY3Rpb25IYW5kbGVyLFxuICAgICAgICAgICAgcmVzdWx0Q2FwYWJpbGl0eSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmV4cGVjdGVkIFByb21pc2Ugc3RhdGUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0Q2FwYWJpbGl0eS5wcm9taXNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRoaXMgaGVscHMgdGhlIG9wdGltaXplciBieSBlbnN1cmluZyB0aGF0IG1ldGhvZHMgd2hpY2ggdGFrZVxuICAgIC8vIGNhcGFiaWxpdGllcyBhcmVuJ3QgcG9seW1vcnBoaWMuXG4gICAgUFJPTUlTRV9GQUtFX0NBUEFCSUxJVFkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoUHJvbWlzZSk7XG4gICAgUHJvbWlzZSRwcm90b3R5cGUkdGhlbiA9IFByb21pc2UkcHJvdG90eXBlLnRoZW47XG5cbiAgICByZXR1cm4gUHJvbWlzZTtcbiAgfSgpKTtcblxuICAvLyBDaHJvbWUncyBuYXRpdmUgUHJvbWlzZSBoYXMgZXh0cmEgbWV0aG9kcyB0aGF0IGl0IHNob3VsZG4ndCBoYXZlLiBMZXQncyByZW1vdmUgdGhlbS5cbiAgaWYgKGdsb2JhbHMuUHJvbWlzZSkge1xuICAgIGRlbGV0ZSBnbG9iYWxzLlByb21pc2UuYWNjZXB0O1xuICAgIGRlbGV0ZSBnbG9iYWxzLlByb21pc2UuZGVmZXI7XG4gICAgZGVsZXRlIGdsb2JhbHMuUHJvbWlzZS5wcm90b3R5cGUuY2hhaW47XG4gIH1cblxuICBpZiAodHlwZW9mIFByb21pc2VTaGltID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXhwb3J0IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yLlxuICAgIGRlZmluZVByb3BlcnRpZXMoZ2xvYmFscywgeyBQcm9taXNlOiBQcm9taXNlU2hpbSB9KTtcbiAgICAvLyBJbiBDaHJvbWUgMzMgKGFuZCB0aGVyZWFib3V0cykgUHJvbWlzZSBpcyBkZWZpbmVkLCBidXQgdGhlXG4gICAgLy8gaW1wbGVtZW50YXRpb24gaXMgYnVnZ3kgaW4gYSBudW1iZXIgb2Ygd2F5cy4gIExldCdzIGNoZWNrIHN1YmNsYXNzaW5nXG4gICAgLy8gc3VwcG9ydCB0byBzZWUgaWYgd2UgaGF2ZSBhIGJ1Z2d5IGltcGxlbWVudGF0aW9uLlxuICAgIHZhciBwcm9taXNlU3VwcG9ydHNTdWJjbGFzc2luZyA9IHN1cHBvcnRzU3ViY2xhc3NpbmcoZ2xvYmFscy5Qcm9taXNlLCBmdW5jdGlvbiAoUykge1xuICAgICAgcmV0dXJuIFMucmVzb2x2ZSg0MikudGhlbihmdW5jdGlvbiAoKSB7fSkgaW5zdGFuY2VvZiBTO1xuICAgIH0pO1xuICAgIHZhciBwcm9taXNlSWdub3Jlc05vbkZ1bmN0aW9uVGhlbkNhbGxiYWNrcyA9ICF0aHJvd3NFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2xvYmFscy5Qcm9taXNlLnJlamVjdCg0MikudGhlbihudWxsLCA1KS50aGVuKG51bGwsIG5vb3ApO1xuICAgIH0pO1xuICAgIHZhciBwcm9taXNlUmVxdWlyZXNPYmplY3RDb250ZXh0ID0gdGhyb3dzRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2xvYmFscy5Qcm9taXNlLmNhbGwoMywgbm9vcCk7IH0pO1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSgpIHdhcyBlcnJhdGEnZWQgbGF0ZSBpbiB0aGUgRVM2IHByb2Nlc3MuXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTcwNzQyXG4gICAgLy8gICAgICBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDE2MVxuICAgIC8vIEl0IHNlcnZlcyBhcyBhIHByb3h5IGZvciBhIG51bWJlciBvZiBvdGhlciBidWdzIGluIGVhcmx5IFByb21pc2VcbiAgICAvLyBpbXBsZW1lbnRhdGlvbnMuXG4gICAgdmFyIHByb21pc2VSZXNvbHZlQnJva2VuID0gKGZ1bmN0aW9uIChQcm9taXNlKSB7XG4gICAgICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSg1KTtcbiAgICAgIHAuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHZhciBwMiA9IFByb21pc2UucmVzb2x2ZShwKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAyLnRoZW4obnVsbCwgbm9vcCkudGhlbihudWxsLCBub29wKTsgLy8gYXZvaWQgXCJ1bmNhdWdodCByZWplY3Rpb25cIiB3YXJuaW5ncyBpbiBjb25zb2xlXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyB2OCBuYXRpdmUgUHJvbWlzZXMgYnJlYWsgaGVyZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTc1MzE0XG4gICAgICB9XG4gICAgICByZXR1cm4gcCA9PT0gcDI7IC8vIFRoaXMgKnNob3VsZCogYmUgZmFsc2UhXG4gICAgfShnbG9iYWxzLlByb21pc2UpKTtcblxuICAgIC8vIENocm9tZSA0NiAocHJvYmFibHkgb2xkZXIgdG9vKSBkb2VzIG5vdCByZXRyaWV2ZSBhIHRoZW5hYmxlJ3MgLnRoZW4gc3luY2hyb25vdXNseVxuICAgIHZhciBnZXRzVGhlblN5bmNocm9ub3VzbHkgPSBzdXBwb3J0c0Rlc2NyaXB0b3JzICYmIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdldHRlci1yZXR1cm5cbiAgICAgIHZhciB0aGVuYWJsZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3RoZW4nLCB7IGdldDogZnVuY3Rpb24gKCkgeyBjb3VudCArPSAxOyB9IH0pO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoZW5hYmxlKTtcbiAgICAgIHJldHVybiBjb3VudCA9PT0gMTtcbiAgICB9KCkpO1xuXG4gICAgdmFyIEJhZFJlc29sdmVyUHJvbWlzZSA9IGZ1bmN0aW9uIEJhZFJlc29sdmVyUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShleGVjdXRvcik7XG4gICAgICBleGVjdXRvcigzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB0aGlzLnRoZW4gPSBwLnRoZW47XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQmFkUmVzb2x2ZXJQcm9taXNlO1xuICAgIH07XG4gICAgQmFkUmVzb2x2ZXJQcm9taXNlLnByb3RvdHlwZSA9IFByb21pc2UucHJvdG90eXBlO1xuICAgIEJhZFJlc29sdmVyUHJvbWlzZS5hbGwgPSBQcm9taXNlLmFsbDtcbiAgICAvLyBDaHJvbWUgQ2FuYXJ5IDQ5IChwcm9iYWJseSBvbGRlciB0b28pIGhhcyBzb21lIGltcGxlbWVudGF0aW9uIGJ1Z3NcbiAgICB2YXIgaGFzQmFkUmVzb2x2ZXJQcm9taXNlID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhQmFkUmVzb2x2ZXJQcm9taXNlLmFsbChbMSwgMl0pO1xuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgIXByb21pc2VTdXBwb3J0c1N1YmNsYXNzaW5nXG4gICAgICB8fCAhcHJvbWlzZUlnbm9yZXNOb25GdW5jdGlvblRoZW5DYWxsYmFja3NcbiAgICAgIHx8ICFwcm9taXNlUmVxdWlyZXNPYmplY3RDb250ZXh0XG4gICAgICB8fCBwcm9taXNlUmVzb2x2ZUJyb2tlblxuICAgICAgfHwgIWdldHNUaGVuU3luY2hyb25vdXNseVxuICAgICAgfHwgaGFzQmFkUmVzb2x2ZXJQcm9taXNlXG4gICAgKSB7XG4gICAgICBQcm9taXNlID0gUHJvbWlzZVNoaW07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZ2xvYmFsLWFzc2lnblxuICAgICAgb3ZlcnJpZGVOYXRpdmUoZ2xvYmFscywgJ1Byb21pc2UnLCBQcm9taXNlU2hpbSk7XG4gICAgfVxuICAgIGlmIChQcm9taXNlLmFsbC5sZW5ndGggIT09IDEpIHtcbiAgICAgIHZhciBvcmlnQWxsID0gUHJvbWlzZS5hbGw7XG4gICAgICBvdmVycmlkZU5hdGl2ZShQcm9taXNlLCAnYWxsJywgZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKG9yaWdBbGwsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKFByb21pc2UucmFjZS5sZW5ndGggIT09IDEpIHtcbiAgICAgIHZhciBvcmlnUmFjZSA9IFByb21pc2UucmFjZTtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFByb21pc2UsICdyYWNlJywgZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnUmFjZSwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoUHJvbWlzZS5yZXNvbHZlLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdmFyIG9yaWdSZXNvbHZlID0gUHJvbWlzZS5yZXNvbHZlO1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoUHJvbWlzZSwgJ3Jlc29sdmUnLCBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICAgICAgcmV0dXJuIEVTLkNhbGwob3JpZ1Jlc29sdmUsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKFByb21pc2UucmVqZWN0Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgdmFyIG9yaWdSZWplY3QgPSBQcm9taXNlLnJlamVjdDtcbiAgICAgIG92ZXJyaWRlTmF0aXZlKFByb21pc2UsICdyZWplY3QnLCBmdW5jdGlvbiByZWplY3Qocikge1xuICAgICAgICByZXR1cm4gRVMuQ2FsbChvcmlnUmVqZWN0LCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVuc3VyZUVudW1lcmFibGUoUHJvbWlzZSwgJ2FsbCcpO1xuICAgIGVuc3VyZUVudW1lcmFibGUoUHJvbWlzZSwgJ3JhY2UnKTtcbiAgICBlbnN1cmVFbnVtZXJhYmxlKFByb21pc2UsICdyZXNvbHZlJyk7XG4gICAgZW5zdXJlRW51bWVyYWJsZShQcm9taXNlLCAncmVqZWN0Jyk7XG4gICAgYWRkRGVmYXVsdFNwZWNpZXMoUHJvbWlzZSk7XG4gIH1cblxuICAvLyBNYXAgYW5kIFNldCByZXF1aXJlIGEgdHJ1ZSBFUzUgZW52aXJvbm1lbnRcbiAgLy8gVGhlaXIgZmFzdCBwYXRoIGFsc28gcmVxdWlyZXMgdGhhdCB0aGUgZW52aXJvbm1lbnQgcHJlc2VydmVcbiAgLy8gcHJvcGVydHkgaW5zZXJ0aW9uIG9yZGVyLCB3aGljaCBpcyBub3QgZ3VhcmFudGVlZCBieSB0aGUgc3BlYy5cbiAgdmFyIHRlc3RPcmRlciA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBrZXlzKF9yZWR1Y2UoYSwgZnVuY3Rpb24gKG8sIGspIHtcbiAgICAgIG9ba10gPSB0cnVlO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pKTtcbiAgICByZXR1cm4gYS5qb2luKCc6JykgPT09IGIuam9pbignOicpO1xuICB9O1xuICB2YXIgcHJlc2VydmVzSW5zZXJ0aW9uT3JkZXIgPSB0ZXN0T3JkZXIoWyd6JywgJ2EnLCAnYmInXSk7XG4gIC8vIHNvbWUgZW5naW5lcyAoZWcsIENocm9tZSkgb25seSBwcmVzZXJ2ZSBpbnNlcnRpb24gb3JkZXIgZm9yIHN0cmluZyBrZXlzXG4gIHZhciBwcmVzZXJ2ZXNOdW1lcmljSW5zZXJ0aW9uT3JkZXIgPSB0ZXN0T3JkZXIoWyd6JywgMSwgJ2EnLCAnMycsIDJdKTtcblxuICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXG4gICAgdmFyIGZhc3RrZXkgPSBmdW5jdGlvbiBmYXN0a2V5KGtleSwgc2tpcEluc2VydGlvbk9yZGVyQ2hlY2spIHtcbiAgICAgIGlmICghc2tpcEluc2VydGlvbk9yZGVyQ2hlY2sgJiYgIXByZXNlcnZlc0luc2VydGlvbk9yZGVyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgcmV0dXJuICdeJyArIEVTLlRvU3RyaW5nKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBrZXk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBrZXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIG5vdGUgdGhhdCAtMCB3aWxsIGdldCBjb2VyY2VkIHRvIFwiMFwiIHdoZW4gdXNlZCBhcyBhIHByb3BlcnR5IGtleVxuICAgICAgICBpZiAoIXByZXNlcnZlc051bWVyaWNJbnNlcnRpb25PcmRlcikge1xuICAgICAgICAgIHJldHVybiAnbicgKyBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiAnYicgKyBrZXk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIGVtcHR5T2JqZWN0ID0gZnVuY3Rpb24gZW1wdHlPYmplY3QoKSB7XG4gICAgICAvLyBhY2NvbW9kYXRlIHNvbWUgb2xkZXIgbm90LXF1aXRlLUVTNSBicm93c2Vyc1xuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfTtcblxuICAgIHZhciBhZGRJdGVyYWJsZVRvTWFwID0gZnVuY3Rpb24gYWRkSXRlcmFibGVUb01hcChNYXBDb25zdHJ1Y3RvciwgbWFwLCBpdGVyYWJsZSkge1xuICAgICAgaWYgKGlzQXJyYXkoaXRlcmFibGUpIHx8IFR5cGUuc3RyaW5nKGl0ZXJhYmxlKSkge1xuICAgICAgICBfZm9yRWFjaChpdGVyYWJsZSwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJdGVyYXRvciB2YWx1ZSAnICsgZW50cnkgKyAnIGlzIG5vdCBhbiBlbnRyeSBvYmplY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFwLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmFibGUgaW5zdGFuY2VvZiBNYXBDb25zdHJ1Y3Rvcikge1xuICAgICAgICBfY2FsbChNYXBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZm9yRWFjaCwgaXRlcmFibGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaXRlciwgYWRkZXI7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXRlcmFibGUpKSB7XG4gICAgICAgICAgYWRkZXIgPSBtYXAuc2V0O1xuICAgICAgICAgIGlmICghRVMuSXNDYWxsYWJsZShhZGRlcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIG1hcCcpOyB9XG4gICAgICAgICAgaXRlciA9IEVTLkdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gRVMuSXRlcmF0b3JTdGVwKGl0ZXIpO1xuICAgICAgICAgICAgaWYgKG5leHQgPT09IGZhbHNlKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICB2YXIgbmV4dEl0ZW0gPSBuZXh0LnZhbHVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKCFFUy5UeXBlSXNPYmplY3QobmV4dEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSXRlcmF0b3IgdmFsdWUgJyArIG5leHRJdGVtICsgJyBpcyBub3QgYW4gZW50cnkgb2JqZWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2NhbGwoYWRkZXIsIG1hcCwgbmV4dEl0ZW1bMF0sIG5leHRJdGVtWzFdKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgRVMuSXRlcmF0b3JDbG9zZShpdGVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBhZGRJdGVyYWJsZVRvU2V0ID0gZnVuY3Rpb24gYWRkSXRlcmFibGVUb1NldChTZXRDb25zdHJ1Y3Rvciwgc2V0LCBpdGVyYWJsZSkge1xuICAgICAgaWYgKGlzQXJyYXkoaXRlcmFibGUpIHx8IFR5cGUuc3RyaW5nKGl0ZXJhYmxlKSkge1xuICAgICAgICBfZm9yRWFjaChpdGVyYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgc2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYWJsZSBpbnN0YW5jZW9mIFNldENvbnN0cnVjdG9yKSB7XG4gICAgICAgIF9jYWxsKFNldENvbnN0cnVjdG9yLnByb3RvdHlwZS5mb3JFYWNoLCBpdGVyYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgc2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGl0ZXIsIGFkZGVyO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0ZXJhYmxlKSkge1xuICAgICAgICAgIGFkZGVyID0gc2V0LmFkZDtcbiAgICAgICAgICBpZiAoIUVTLklzQ2FsbGFibGUoYWRkZXIpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCBzZXQnKTsgfVxuICAgICAgICAgIGl0ZXIgPSBFUy5HZXRJdGVyYXRvcihpdGVyYWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IEVTLkl0ZXJhdG9yU3RlcChpdGVyKTtcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSBmYWxzZSkgeyBicmVhazsgfVxuICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHQudmFsdWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBfY2FsbChhZGRlciwgc2V0LCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBFUy5JdGVyYXRvckNsb3NlKGl0ZXIsIHRydWUpO1xuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgY29sbGVjdGlvblNoaW1zID0ge1xuICAgICAgTWFwOiAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBlbXB0eSA9IHt9O1xuXG4gICAgICAgIHZhciBNYXBFbnRyeSA9IGZ1bmN0aW9uIE1hcEVudHJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIE1hcEVudHJ5LnByb3RvdHlwZS5pc1JlbW92ZWQgPSBmdW5jdGlvbiBpc1JlbW92ZWQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMua2V5ID09PSBlbXB0eTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaXNNYXAgPSBmdW5jdGlvbiBpc01hcChtYXApIHtcbiAgICAgICAgICByZXR1cm4gISFtYXAuX2VzNm1hcDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVxdWlyZU1hcFNsb3QgPSBmdW5jdGlvbiByZXF1aXJlTWFwU2xvdChtYXAsIG1ldGhvZCkge1xuICAgICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KG1hcCkgfHwgIWlzTWFwKG1hcCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01ldGhvZCBNYXAucHJvdG90eXBlLicgKyBtZXRob2QgKyAnIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXIgJyArIEVTLlRvU3RyaW5nKG1hcCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgTWFwSXRlcmF0b3IgPSBmdW5jdGlvbiBNYXBJdGVyYXRvcihtYXAsIGtpbmQpIHtcbiAgICAgICAgICByZXF1aXJlTWFwU2xvdChtYXAsICdbW01hcEl0ZXJhdG9yXV0nKTtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaGVhZCcsIG1hcC5faGVhZCk7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2knLCB0aGlzLmhlYWQpO1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdraW5kJywga2luZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlID0ge1xuICAgICAgICAgIGlzTWFwSXRlcmF0b3I6IHRydWUsXG4gICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01hcEl0ZXJhdG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBhIE1hcEl0ZXJhdG9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuaTtcbiAgICAgICAgICAgIHZhciBraW5kID0gdGhpcy5raW5kO1xuICAgICAgICAgICAgdmFyIGhlYWQgPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuaSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yUmVzdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaS5pc1JlbW92ZWQoKSAmJiBpICE9PSBoZWFkKSB7XG4gICAgICAgICAgICAgIC8vIGJhY2sgdXAgb2ZmIG9mIHJlbW92ZWQgZW50cmllc1xuICAgICAgICAgICAgICBpID0gaS5wcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWR2YW5jZSB0byBuZXh0IHVucmV0dXJuZWQgZWxlbWVudC5cbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB3aGlsZSAoaS5uZXh0ICE9PSBoZWFkKSB7XG4gICAgICAgICAgICAgIGkgPSBpLm5leHQ7XG4gICAgICAgICAgICAgIGlmICghaS5pc1JlbW92ZWQoKSkge1xuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaS5rZXk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChraW5kID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBpLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBbaS5rZXksIGkudmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmkgPSBpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvbmNlIHRoZSBpdGVyYXRvciBpcyBkb25lLCBpdCBpcyBkb25lIGZvcmV2ZXIuXG4gICAgICAgICAgICB0aGlzLmkgPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEl0ZXJhdG9yKE1hcEl0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgICAgICAgdmFyIE1hcCRwcm90b3R5cGU7XG4gICAgICAgIHZhciBNYXBTaGltID0gZnVuY3Rpb24gTWFwKCkge1xuICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25zdHJ1Y3RvciBNYXAgcmVxdWlyZXMgXCJuZXdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcyAmJiB0aGlzLl9lczZtYXApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBjb25zdHJ1Y3Rpb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG1hcCA9IGVtdWxhdGVFUzZjb25zdHJ1Y3QodGhpcywgTWFwLCBNYXAkcHJvdG90eXBlLCB7XG4gICAgICAgICAgICBfZXM2bWFwOiB0cnVlLFxuICAgICAgICAgICAgX2hlYWQ6IG51bGwsXG4gICAgICAgICAgICBfbWFwOiBPcmlnTWFwID8gbmV3IE9yaWdNYXAoKSA6IG51bGwsXG4gICAgICAgICAgICBfc2l6ZTogMCxcbiAgICAgICAgICAgIF9zdG9yYWdlOiBlbXB0eU9iamVjdCgpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgaGVhZCA9IG5ldyBNYXBFbnRyeShudWxsLCBudWxsKTtcbiAgICAgICAgICAvLyBjaXJjdWxhciBkb3VibHktbGlua2VkIGxpc3QuXG4gICAgICAgICAgLyogZXNsaW50IG5vLW11bHRpLWFzc2lnbjogMSAqL1xuICAgICAgICAgIGhlYWQubmV4dCA9IGhlYWQucHJldiA9IGhlYWQ7XG4gICAgICAgICAgbWFwLl9oZWFkID0gaGVhZDtcblxuICAgICAgICAgIC8vIE9wdGlvbmFsbHkgaW5pdGlhbGl6ZSBtYXAgZnJvbSBpdGVyYWJsZVxuICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkSXRlcmFibGVUb01hcChNYXAsIG1hcCwgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICAgICAgTWFwJHByb3RvdHlwZSA9IE1hcFNoaW0ucHJvdG90eXBlO1xuXG4gICAgICAgIFZhbHVlLmdldHRlcihNYXAkcHJvdG90eXBlLCAnc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaXplIG1ldGhvZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlIE1hcCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmaW5lUHJvcGVydGllcyhNYXAkcHJvdG90eXBlLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXF1aXJlTWFwU2xvdCh0aGlzLCAnZ2V0Jyk7XG4gICAgICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgICAgICB2YXIgZmtleSA9IGZhc3RrZXkoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChma2V5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIGZhc3QgTygxKSBwYXRoXG4gICAgICAgICAgICAgIGVudHJ5ID0gdGhpcy5fc3RvcmFnZVtma2V5XTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IG9iamVjdCBrZXkgcGF0aFxuICAgICAgICAgICAgICBlbnRyeSA9IG9yaWdNYXBHZXQuY2FsbCh0aGlzLl9tYXAsIGtleSk7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgICAgICAgIHZhciBpID0gaGVhZDtcbiAgICAgICAgICAgIHdoaWxlICgoaSA9IGkubmV4dCkgIT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgaWYgKEVTLlNhbWVWYWx1ZVplcm8oaS5rZXksIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICdoYXMnKTtcbiAgICAgICAgICAgIHZhciBma2V5ID0gZmFzdGtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgaWYgKGZrZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gZmFzdCBPKDEpIHBhdGhcbiAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdG9yYWdlW2ZrZXldICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgICAgICAgICAgLy8gZmFzdCBvYmplY3Qga2V5IHBhdGhcbiAgICAgICAgICAgICAgcmV0dXJuIG9yaWdNYXBIYXMuY2FsbCh0aGlzLl9tYXAsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICAgICAgICB2YXIgaSA9IGhlYWQ7XG4gICAgICAgICAgICB3aGlsZSAoKGkgPSBpLm5leHQpICE9PSBoZWFkKSB7XG4gICAgICAgICAgICAgIGlmIChFUy5TYW1lVmFsdWVaZXJvKGkua2V5LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmVxdWlyZU1hcFNsb3QodGhpcywgJ3NldCcpO1xuICAgICAgICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgICAgICAgdmFyIGkgPSBoZWFkO1xuICAgICAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICAgICAgdmFyIGZrZXkgPSBmYXN0a2V5KGtleSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZmtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IE8oMSkgcGF0aFxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0b3JhZ2VbZmtleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcmFnZVtma2V5XS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVudHJ5ID0gdGhpcy5fc3RvcmFnZVtma2V5XSA9IG5ldyBNYXBFbnRyeShrZXksIHZhbHVlKTsgLyogZXNsaW50IG5vLW11bHRpLWFzc2lnbjogMSAqL1xuICAgICAgICAgICAgICBpID0gaGVhZC5wcmV2O1xuICAgICAgICAgICAgICAvLyBmYWxsIHRocm91Z2hcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXApIHtcbiAgICAgICAgICAgICAgLy8gZmFzdCBvYmplY3Qga2V5IHBhdGhcbiAgICAgICAgICAgICAgaWYgKG9yaWdNYXBIYXMuY2FsbCh0aGlzLl9tYXAsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvcmlnTWFwR2V0LmNhbGwodGhpcy5fbWFwLCBrZXkpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW50cnkgPSBuZXcgTWFwRW50cnkoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgb3JpZ01hcFNldC5jYWxsKHRoaXMuX21hcCwga2V5LCBlbnRyeSk7XG4gICAgICAgICAgICAgICAgaSA9IGhlYWQucHJldjtcbiAgICAgICAgICAgICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKChpID0gaS5uZXh0KSAhPT0gaGVhZCkge1xuICAgICAgICAgICAgICBpZiAoRVMuU2FtZVZhbHVlWmVybyhpLmtleSwga2V5KSkge1xuICAgICAgICAgICAgICAgIGkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkgPSBlbnRyeSB8fCBuZXcgTWFwRW50cnkoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoRVMuU2FtZVZhbHVlKC0wLCBrZXkpKSB7XG4gICAgICAgICAgICAgIGVudHJ5LmtleSA9ICswOyAvLyBjb2VyY2UgLTAgdG8gKzAgaW4gZW50cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5Lm5leHQgPSB0aGlzLl9oZWFkO1xuICAgICAgICAgICAgZW50cnkucHJldiA9IHRoaXMuX2hlYWQucHJldjtcbiAgICAgICAgICAgIGVudHJ5LnByZXYubmV4dCA9IGVudHJ5O1xuICAgICAgICAgICAgZW50cnkubmV4dC5wcmV2ID0gZW50cnk7XG4gICAgICAgICAgICB0aGlzLl9zaXplICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICdkZWxldGUnKTtcbiAgICAgICAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgICAgICAgIHZhciBpID0gaGVhZDtcbiAgICAgICAgICAgIHZhciBma2V5ID0gZmFzdGtleShrZXksIHRydWUpO1xuICAgICAgICAgICAgaWYgKGZrZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gZmFzdCBPKDEpIHBhdGhcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdG9yYWdlW2ZrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpID0gdGhpcy5fc3RvcmFnZVtma2V5XS5wcmV2O1xuICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fc3RvcmFnZVtma2V5XTtcbiAgICAgICAgICAgICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICAgICAgICAvLyBmYXN0IG9iamVjdCBrZXkgcGF0aFxuICAgICAgICAgICAgICBpZiAoIW9yaWdNYXBIYXMuY2FsbCh0aGlzLl9tYXAsIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaSA9IG9yaWdNYXBHZXQuY2FsbCh0aGlzLl9tYXAsIGtleSkucHJldjtcbiAgICAgICAgICAgICAgb3JpZ01hcERlbGV0ZS5jYWxsKHRoaXMuX21hcCwga2V5KTtcbiAgICAgICAgICAgICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoKGkgPSBpLm5leHQpICE9PSBoZWFkKSB7XG4gICAgICAgICAgICAgIGlmIChFUy5TYW1lVmFsdWVaZXJvKGkua2V5LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaS5rZXkgPSBlbXB0eTtcbiAgICAgICAgICAgICAgICBpLnZhbHVlID0gZW1wdHk7XG4gICAgICAgICAgICAgICAgaS5wcmV2Lm5leHQgPSBpLm5leHQ7XG4gICAgICAgICAgICAgICAgaS5uZXh0LnByZXYgPSBpLnByZXY7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSAtPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIC8qIGVzbGludCBuby1tdWx0aS1hc3NpZ246IDEgKi9cbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICdjbGVhcicpO1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gT3JpZ01hcCA/IG5ldyBPcmlnTWFwKCkgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlID0gZW1wdHlPYmplY3QoKTtcbiAgICAgICAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgICAgICAgIHZhciBpID0gaGVhZDtcbiAgICAgICAgICAgIHZhciBwID0gaS5uZXh0O1xuICAgICAgICAgICAgd2hpbGUgKChpID0gcCkgIT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgaS5rZXkgPSBlbXB0eTtcbiAgICAgICAgICAgICAgaS52YWx1ZSA9IGVtcHR5O1xuICAgICAgICAgICAgICBwID0gaS5uZXh0O1xuICAgICAgICAgICAgICBpLm5leHQgPSBpLnByZXYgPSBoZWFkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZC5uZXh0ID0gaGVhZC5wcmV2ID0gaGVhZDtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgICAgIHJlcXVpcmVNYXBTbG90KHRoaXMsICdrZXlzJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMsICdrZXknKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICAgICAgICByZXF1aXJlTWFwU2xvdCh0aGlzLCAndmFsdWVzJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMsICd2YWx1ZScpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgICAgICAgcmVxdWlyZU1hcFNsb3QodGhpcywgJ2VudHJpZXMnKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcywgJ2tleSt2YWx1ZScpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXF1aXJlTWFwU2xvdCh0aGlzLCAnZm9yRWFjaCcpO1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgaXQgPSB0aGlzLmVudHJpZXMoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGVudHJ5ID0gaXQubmV4dCgpOyAhZW50cnkuZG9uZTsgZW50cnkgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBfY2FsbChjYWxsYmFjaywgY29udGV4dCwgZW50cnkudmFsdWVbMV0sIGVudHJ5LnZhbHVlWzBdLCB0aGlzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlbnRyeS52YWx1ZVsxXSwgZW50cnkudmFsdWVbMF0sIHRoaXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWRkSXRlcmF0b3IoTWFwJHByb3RvdHlwZSwgTWFwJHByb3RvdHlwZS5lbnRyaWVzKTtcblxuICAgICAgICByZXR1cm4gTWFwU2hpbTtcbiAgICAgIH0oKSksXG5cbiAgICAgIFNldDogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzU2V0ID0gZnVuY3Rpb24gaXNTZXQoc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNldC5fZXM2c2V0ICYmIHR5cGVvZiBzZXQuX3N0b3JhZ2UgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVxdWlyZVNldFNsb3QgPSBmdW5jdGlvbiByZXF1aXJlU2V0U2xvdChzZXQsIG1ldGhvZCkge1xuICAgICAgICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHNldCkgfHwgIWlzU2V0KHNldCkpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvZXM2LXNoaW0vaXNzdWVzLzE3NlxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2V0LnByb3RvdHlwZS4nICsgbWV0aG9kICsgJyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyICcgKyBFUy5Ub1N0cmluZyhzZXQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgYSBNYXAgaXMgZXhwZW5zaXZlLiAgVG8gc3BlZWQgdXAgdGhlIGNvbW1vbiBjYXNlIG9mXG4gICAgICAgIC8vIFNldHMgY29udGFpbmluZyBvbmx5IHN0cmluZyBvciBudW1lcmljIGtleXMsIHdlIHVzZSBhbiBvYmplY3RcbiAgICAgICAgLy8gYXMgYmFja2luZyBzdG9yYWdlIGFuZCBsYXppbHkgY3JlYXRlIGEgZnVsbCBNYXAgb25seSB3aGVuXG4gICAgICAgIC8vIHJlcXVpcmVkLlxuICAgICAgICB2YXIgU2V0JHByb3RvdHlwZTtcbiAgICAgICAgdmFyIFNldFNoaW0gPSBmdW5jdGlvbiBTZXQoKSB7XG4gICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnN0cnVjdG9yIFNldCByZXF1aXJlcyBcIm5ld1wiJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzICYmIHRoaXMuX2VzNnNldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIGNvbnN0cnVjdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2V0ID0gZW11bGF0ZUVTNmNvbnN0cnVjdCh0aGlzLCBTZXQsIFNldCRwcm90b3R5cGUsIHtcbiAgICAgICAgICAgIF9lczZzZXQ6IHRydWUsXG4gICAgICAgICAgICAnW1tTZXREYXRhXV0nOiBudWxsLFxuICAgICAgICAgICAgX3N0b3JhZ2U6IGVtcHR5T2JqZWN0KClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIXNldC5fZXM2c2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgc2V0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3B0aW9uYWxseSBpbml0aWFsaXplIFNldCBmcm9tIGl0ZXJhYmxlXG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRJdGVyYWJsZVRvU2V0KFNldCwgc2V0LCBhcmd1bWVudHNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgICB9O1xuICAgICAgICBTZXQkcHJvdG90eXBlID0gU2V0U2hpbS5wcm90b3R5cGU7XG5cbiAgICAgICAgdmFyIGRlY29kZUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgayA9IGtleTtcbiAgICAgICAgICBpZiAoayA9PT0gJ15udWxsJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChrID09PSAnXnVuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBmaXJzdCA9IGsuY2hhckF0KDApO1xuICAgICAgICAgIGlmIChmaXJzdCA9PT0gJyQnKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N0clNsaWNlKGssIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09ICduJykge1xuICAgICAgICAgICAgcmV0dXJuICtfc3RyU2xpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gJ2InKSB7XG4gICAgICAgICAgICByZXR1cm4gayA9PT0gJ2J0cnVlJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gK2s7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFN3aXRjaCBmcm9tIHRoZSBvYmplY3QgYmFja2luZyBzdG9yYWdlIHRvIGEgZnVsbCBNYXAuXG4gICAgICAgIHZhciBlbnN1cmVNYXAgPSBmdW5jdGlvbiBlbnN1cmVNYXAoc2V0KSB7XG4gICAgICAgICAgaWYgKCFzZXRbJ1tbU2V0RGF0YV1dJ10pIHtcbiAgICAgICAgICAgIHZhciBtID0gbmV3IGNvbGxlY3Rpb25TaGltcy5NYXAoKTtcbiAgICAgICAgICAgIHNldFsnW1tTZXREYXRhXV0nXSA9IG07XG4gICAgICAgICAgICBfZm9yRWFjaChrZXlzKHNldC5fc3RvcmFnZSksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgdmFyIGsgPSBkZWNvZGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgbS5zZXQoaywgayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFsnW1tTZXREYXRhXV0nXSA9IG07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldC5fc3RvcmFnZSA9IG51bGw7IC8vIGZyZWUgb2xkIGJhY2tpbmcgc3RvcmFnZVxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbHVlLmdldHRlcihTZXRTaGltLnByb3RvdHlwZSwgJ3NpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVxdWlyZVNldFNsb3QodGhpcywgJ3NpemUnKTtcbiAgICAgICAgICBpZiAodGhpcy5fc3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleXModGhpcy5fc3RvcmFnZSkubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbnN1cmVNYXAodGhpcyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbJ1tbU2V0RGF0YV1dJ10uc2l6ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmaW5lUHJvcGVydGllcyhTZXRTaGltLnByb3RvdHlwZSwge1xuICAgICAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICAgICAgcmVxdWlyZVNldFNsb3QodGhpcywgJ2hhcycpO1xuICAgICAgICAgICAgdmFyIGZrZXk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RvcmFnZSAmJiAoZmtleSA9IGZhc3RrZXkoa2V5KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5fc3RvcmFnZVtma2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuc3VyZU1hcCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzWydbW1NldERhdGFdXSddLmhhcyhrZXkpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChrZXkpIHtcbiAgICAgICAgICAgIHJlcXVpcmVTZXRTbG90KHRoaXMsICdhZGQnKTtcbiAgICAgICAgICAgIHZhciBma2V5O1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0b3JhZ2UgJiYgKGZrZXkgPSBmYXN0a2V5KGtleSkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2VbZmtleV0gPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuc3VyZU1hcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXNbJ1tbU2V0RGF0YV1dJ10uc2V0KGtleSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmVxdWlyZVNldFNsb3QodGhpcywgJ2RlbGV0ZScpO1xuICAgICAgICAgICAgdmFyIGZrZXk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RvcmFnZSAmJiAoZmtleSA9IGZhc3RrZXkoa2V5KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdmFyIGhhc0ZLZXkgPSBfaGFzT3duUHJvcGVydHkodGhpcy5fc3RvcmFnZSwgZmtleSk7XG4gICAgICAgICAgICAgIHJldHVybiAoZGVsZXRlIHRoaXMuX3N0b3JhZ2VbZmtleV0pICYmIGhhc0ZLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnN1cmVNYXAodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1snW1tTZXREYXRhXV0nXVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgcmVxdWlyZVNldFNsb3QodGhpcywgJ2NsZWFyJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RvcmFnZSkge1xuICAgICAgICAgICAgICB0aGlzLl9zdG9yYWdlID0gZW1wdHlPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzWydbW1NldERhdGFdXSddKSB7XG4gICAgICAgICAgICAgIHRoaXNbJ1tbU2V0RGF0YV1dJ10uY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAndmFsdWVzJyk7XG4gICAgICAgICAgICBlbnN1cmVNYXAodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldEl0ZXJhdG9yKHRoaXNbJ1tbU2V0RGF0YV1dJ10udmFsdWVzKCkpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgICAgICAgcmVxdWlyZVNldFNsb3QodGhpcywgJ2VudHJpZXMnKTtcbiAgICAgICAgICAgIGVuc3VyZU1hcCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2V0SXRlcmF0b3IodGhpc1snW1tTZXREYXRhXV0nXS5lbnRyaWVzKCkpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXF1aXJlU2V0U2xvdCh0aGlzLCAnZm9yRWFjaCcpO1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgZW50aXJlU2V0ID0gdGhpcztcbiAgICAgICAgICAgIGVuc3VyZU1hcChlbnRpcmVTZXQpO1xuICAgICAgICAgICAgdGhpc1snW1tTZXREYXRhXV0nXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgX2NhbGwoY2FsbGJhY2ssIGNvbnRleHQsIGtleSwga2V5LCBlbnRpcmVTZXQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGtleSwga2V5LCBlbnRpcmVTZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShTZXRTaGltLnByb3RvdHlwZSwgJ2tleXMnLCBTZXRTaGltLnByb3RvdHlwZS52YWx1ZXMsIHRydWUpO1xuICAgICAgICBhZGRJdGVyYXRvcihTZXRTaGltLnByb3RvdHlwZSwgU2V0U2hpbS5wcm90b3R5cGUudmFsdWVzKTtcblxuICAgICAgICB2YXIgU2V0SXRlcmF0b3IgPSBmdW5jdGlvbiBTZXRJdGVyYXRvcihpdCkge1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdpdCcsIGl0KTtcbiAgICAgICAgfTtcbiAgICAgICAgU2V0SXRlcmF0b3IucHJvdG90eXBlID0ge1xuICAgICAgICAgIGlzU2V0SXRlcmF0b3I6IHRydWUsXG4gICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NldEl0ZXJhdG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBhIFNldEl0ZXJhdG9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdC5uZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhZGRJdGVyYXRvcihTZXRJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gICAgICAgIHJldHVybiBTZXRTaGltO1xuICAgICAgfSgpKVxuICAgIH07XG5cbiAgICB2YXIgaXNHb29nbGVUcmFuc2xhdGUgPSBnbG9iYWxzLlNldCAmJiAhU2V0LnByb3RvdHlwZVsnZGVsZXRlJ10gJiYgU2V0LnByb3RvdHlwZS5yZW1vdmUgJiYgU2V0LnByb3RvdHlwZS5pdGVtcyAmJiBTZXQucHJvdG90eXBlLm1hcCAmJiBBcnJheS5pc0FycmF5KG5ldyBTZXQoKS5rZXlzKTtcbiAgICBpZiAoaXNHb29nbGVUcmFuc2xhdGUpIHtcbiAgICAgIC8vIHNwZWNpYWwtY2FzZSBmb3JjZSByZW1vdmFsIG9mIHdpbGRseSBpbnZhbGlkIFNldCBpbXBsZW1lbnRhdGlvbiBpbiBHb29nbGUgVHJhbnNsYXRlIGlmcmFtZXNcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2VzNi1zaGltL2lzc3Vlcy80MzggLyBodHRwczovL3R3aXR0ZXIuY29tL2xqaGFyYi9zdGF0dXMvODQ5MzM1NTczMTE0MzYzOTA0XG4gICAgICBnbG9iYWxzLlNldCA9IGNvbGxlY3Rpb25TaGltcy5TZXQ7XG4gICAgfVxuICAgIGlmIChnbG9iYWxzLk1hcCB8fCBnbG9iYWxzLlNldCkge1xuICAgICAgLy8gU2FmYXJpIDgsIGZvciBleGFtcGxlLCBkb2Vzbid0IGFjY2VwdCBhbiBpdGVyYWJsZS5cbiAgICAgIHZhciBtYXBBY2NlcHRzQXJndW1lbnRzID0gdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcChbWzEsIDJdXSkuZ2V0KDEpID09PSAyOyB9KTtcbiAgICAgIGlmICghbWFwQWNjZXB0c0FyZ3VtZW50cykge1xuICAgICAgICBnbG9iYWxzLk1hcCA9IGZ1bmN0aW9uIE1hcCgpIHtcbiAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29uc3RydWN0b3IgTWFwIHJlcXVpcmVzIFwibmV3XCInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG0gPSBuZXcgT3JpZ01hcCgpO1xuICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkSXRlcmFibGVUb01hcChNYXAsIG0sIGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBtLmNvbnN0cnVjdG9yO1xuICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihtLCBnbG9iYWxzLk1hcC5wcm90b3R5cGUpO1xuICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuICAgICAgICBnbG9iYWxzLk1hcC5wcm90b3R5cGUgPSBjcmVhdGUoT3JpZ01hcC5wcm90b3R5cGUpO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxzLk1hcC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIGdsb2JhbHMuTWFwLCB0cnVlKTtcbiAgICAgICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhnbG9iYWxzLk1hcCwgT3JpZ01hcCk7XG4gICAgICB9XG4gICAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgIHZhciBtYXBVc2VzU2FtZVZhbHVlWmVybyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENocm9tZSAzOC00Miwgbm9kZSAwLjExLzAuMTIsIGlvanMgMS8yIGFsc28gaGF2ZSBhIGJ1ZyB3aGVuIHRoZSBNYXAgaGFzIGEgc2l6ZSA+IDRcbiAgICAgICAgdmFyIG0gPSBuZXcgTWFwKFtbMSwgMF0sIFsyLCAwXSwgWzMsIDBdLCBbNCwgMF1dKTtcbiAgICAgICAgbS5zZXQoLTAsIG0pO1xuICAgICAgICByZXR1cm4gbS5nZXQoMCkgPT09IG0gJiYgbS5nZXQoLTApID09PSBtICYmIG0uaGFzKDApICYmIG0uaGFzKC0wKTtcbiAgICAgIH0oKSk7XG4gICAgICB2YXIgbWFwU3VwcG9ydHNDaGFpbmluZyA9IHRlc3RNYXAuc2V0KDEsIDIpID09PSB0ZXN0TWFwO1xuICAgICAgaWYgKCFtYXBVc2VzU2FtZVZhbHVlWmVybyB8fCAhbWFwU3VwcG9ydHNDaGFpbmluZykge1xuICAgICAgICBvdmVycmlkZU5hdGl2ZShNYXAucHJvdG90eXBlLCAnc2V0JywgZnVuY3Rpb24gc2V0KGssIHYpIHtcbiAgICAgICAgICBfY2FsbChvcmlnTWFwU2V0LCB0aGlzLCBrID09PSAwID8gMCA6IGssIHYpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghbWFwVXNlc1NhbWVWYWx1ZVplcm8pIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydGllcyhNYXAucHJvdG90eXBlLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoaykge1xuICAgICAgICAgICAgcmV0dXJuIF9jYWxsKG9yaWdNYXBHZXQsIHRoaXMsIGsgPT09IDAgPyAwIDogayk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NhbGwob3JpZ01hcEhhcywgdGhpcywgayA9PT0gMCA/IDAgOiBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKE1hcC5wcm90b3R5cGUuZ2V0LCBvcmlnTWFwR2V0KTtcbiAgICAgICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhNYXAucHJvdG90eXBlLmhhcywgb3JpZ01hcEhhcyk7XG4gICAgICB9XG4gICAgICB2YXIgdGVzdFNldCA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBzZXRVc2VzU2FtZVZhbHVlWmVybyA9IFNldC5wcm90b3R5cGVbJ2RlbGV0ZSddICYmIFNldC5wcm90b3R5cGUuYWRkICYmIFNldC5wcm90b3R5cGUuaGFzICYmIChmdW5jdGlvbiAocykge1xuICAgICAgICBzWydkZWxldGUnXSgwKTtcbiAgICAgICAgcy5hZGQoLTApO1xuICAgICAgICByZXR1cm4gIXMuaGFzKDApO1xuICAgICAgfSh0ZXN0U2V0KSk7XG4gICAgICB2YXIgc2V0U3VwcG9ydHNDaGFpbmluZyA9IHRlc3RTZXQuYWRkKDEpID09PSB0ZXN0U2V0O1xuICAgICAgaWYgKCFzZXRVc2VzU2FtZVZhbHVlWmVybyB8fCAhc2V0U3VwcG9ydHNDaGFpbmluZykge1xuICAgICAgICB2YXIgb3JpZ1NldEFkZCA9IFNldC5wcm90b3R5cGUuYWRkO1xuICAgICAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCh2KSB7XG4gICAgICAgICAgX2NhbGwob3JpZ1NldEFkZCwgdGhpcywgdiA9PT0gMCA/IDAgOiB2KTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhTZXQucHJvdG90eXBlLmFkZCwgb3JpZ1NldEFkZCk7XG4gICAgICB9XG4gICAgICBpZiAoIXNldFVzZXNTYW1lVmFsdWVaZXJvKSB7XG4gICAgICAgIHZhciBvcmlnU2V0SGFzID0gU2V0LnByb3RvdHlwZS5oYXM7XG4gICAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzKHYpIHtcbiAgICAgICAgICByZXR1cm4gX2NhbGwob3JpZ1NldEhhcywgdGhpcywgdiA9PT0gMCA/IDAgOiB2KTtcbiAgICAgICAgfTtcbiAgICAgICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhTZXQucHJvdG90eXBlLmhhcywgb3JpZ1NldEhhcyk7XG4gICAgICAgIHZhciBvcmlnU2V0RGVsID0gU2V0LnByb3RvdHlwZVsnZGVsZXRlJ107XG4gICAgICAgIFNldC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24gU2V0RGVsZXRlKHYpIHtcbiAgICAgICAgICByZXR1cm4gX2NhbGwob3JpZ1NldERlbCwgdGhpcywgdiA9PT0gMCA/IDAgOiB2KTtcbiAgICAgICAgfTtcbiAgICAgICAgVmFsdWUucHJlc2VydmVUb1N0cmluZyhTZXQucHJvdG90eXBlWydkZWxldGUnXSwgb3JpZ1NldERlbCk7XG4gICAgICB9XG4gICAgICB2YXIgbWFwU3VwcG9ydHNTdWJjbGFzc2luZyA9IHN1cHBvcnRzU3ViY2xhc3NpbmcoZ2xvYmFscy5NYXAsIGZ1bmN0aW9uIChNKSB7XG4gICAgICAgIHZhciBtID0gbmV3IE0oW10pO1xuICAgICAgICAvLyBGaXJlZm94IDMyIGlzIG9rIHdpdGggdGhlIGluc3RhbnRpYXRpbmcgdGhlIHN1YmNsYXNzIGJ1dCB3aWxsXG4gICAgICAgIC8vIHRocm93IHdoZW4gdGhlIG1hcCBpcyB1c2VkLlxuICAgICAgICBtLnNldCg0MiwgNDIpO1xuICAgICAgICByZXR1cm4gbSBpbnN0YW5jZW9mIE07XG4gICAgICB9KTtcbiAgICAgIC8vIHdpdGhvdXQgT2JqZWN0LnNldFByb3RvdHlwZU9mLCBzdWJjbGFzc2luZyBpcyBub3QgcG9zc2libGVcbiAgICAgIHZhciBtYXBGYWlsc1RvU3VwcG9ydFN1YmNsYXNzaW5nID0gT2JqZWN0LnNldFByb3RvdHlwZU9mICYmICFtYXBTdXBwb3J0c1N1YmNsYXNzaW5nO1xuICAgICAgdmFyIG1hcFJlcXVpcmVzTmV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gIShnbG9iYWxzLk1hcCgpIGluc3RhbmNlb2YgZ2xvYmFscy5NYXApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH0oKSk7XG4gICAgICBpZiAoZ2xvYmFscy5NYXAubGVuZ3RoICE9PSAwIHx8IG1hcEZhaWxzVG9TdXBwb3J0U3ViY2xhc3NpbmcgfHwgIW1hcFJlcXVpcmVzTmV3KSB7XG4gICAgICAgIGdsb2JhbHMuTWFwID0gZnVuY3Rpb24gTWFwKCkge1xuICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25zdHJ1Y3RvciBNYXAgcmVxdWlyZXMgXCJuZXdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbSA9IG5ldyBPcmlnTWFwKCk7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRJdGVyYWJsZVRvTWFwKE1hcCwgbSwgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG0uY29uc3RydWN0b3I7XG4gICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG0sIE1hcC5wcm90b3R5cGUpO1xuICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuICAgICAgICBnbG9iYWxzLk1hcC5wcm90b3R5cGUgPSBPcmlnTWFwLnByb3RvdHlwZTtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFscy5NYXAucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBnbG9iYWxzLk1hcCwgdHJ1ZSk7XG4gICAgICAgIFZhbHVlLnByZXNlcnZlVG9TdHJpbmcoZ2xvYmFscy5NYXAsIE9yaWdNYXApO1xuICAgICAgfVxuICAgICAgdmFyIHNldFN1cHBvcnRzU3ViY2xhc3NpbmcgPSBzdXBwb3J0c1N1YmNsYXNzaW5nKGdsb2JhbHMuU2V0LCBmdW5jdGlvbiAoUykge1xuICAgICAgICB2YXIgcyA9IG5ldyBTKFtdKTtcbiAgICAgICAgcy5hZGQoNDIsIDQyKTtcbiAgICAgICAgcmV0dXJuIHMgaW5zdGFuY2VvZiBTO1xuICAgICAgfSk7XG4gICAgICAvLyB3aXRob3V0IE9iamVjdC5zZXRQcm90b3R5cGVPZiwgc3ViY2xhc3NpbmcgaXMgbm90IHBvc3NpYmxlXG4gICAgICB2YXIgc2V0RmFpbHNUb1N1cHBvcnRTdWJjbGFzc2luZyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiAmJiAhc2V0U3VwcG9ydHNTdWJjbGFzc2luZztcbiAgICAgIHZhciBzZXRSZXF1aXJlc05ldyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuICEoZ2xvYmFscy5TZXQoKSBpbnN0YW5jZW9mIGdsb2JhbHMuU2V0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICAgICAgICB9XG4gICAgICB9KCkpO1xuICAgICAgaWYgKGdsb2JhbHMuU2V0Lmxlbmd0aCAhPT0gMCB8fCBzZXRGYWlsc1RvU3VwcG9ydFN1YmNsYXNzaW5nIHx8ICFzZXRSZXF1aXJlc05ldykge1xuICAgICAgICB2YXIgT3JpZ1NldCA9IGdsb2JhbHMuU2V0O1xuICAgICAgICBnbG9iYWxzLlNldCA9IGZ1bmN0aW9uIFNldCgpIHtcbiAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29uc3RydWN0b3IgU2V0IHJlcXVpcmVzIFwibmV3XCInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHMgPSBuZXcgT3JpZ1NldCgpO1xuICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkSXRlcmFibGVUb1NldChTZXQsIHMsIGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihzLCBTZXQucHJvdG90eXBlKTtcbiAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfTtcbiAgICAgICAgZ2xvYmFscy5TZXQucHJvdG90eXBlID0gT3JpZ1NldC5wcm90b3R5cGU7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbHMuU2V0LnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgZ2xvYmFscy5TZXQsIHRydWUpO1xuICAgICAgICBWYWx1ZS5wcmVzZXJ2ZVRvU3RyaW5nKGdsb2JhbHMuU2V0LCBPcmlnU2V0KTtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSBuZXcgZ2xvYmFscy5NYXAoKTtcbiAgICAgIHZhciBtYXBJdGVyYXRpb25UaHJvd3NTdG9wSXRlcmF0b3IgPSAhdmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3TWFwLmtleXMoKS5uZXh0KCkuZG9uZTtcbiAgICAgIH0pO1xuICAgICAgLypcbiAgICAgICAgLSBJbiBGaXJlZm94IDwgMjMsIE1hcCNzaXplIGlzIGEgZnVuY3Rpb24uXG4gICAgICAgIC0gSW4gYWxsIGN1cnJlbnQgRmlyZWZveCwgU2V0I2VudHJpZXMva2V5cy92YWx1ZXMgJiBNYXAjY2xlYXIgZG8gbm90IGV4aXN0XG4gICAgICAgIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODY5OTk2XG4gICAgICAgIC0gSW4gRmlyZWZveCAyNCwgTWFwIGFuZCBTZXQgZG8gbm90IGltcGxlbWVudCBmb3JFYWNoXG4gICAgICAgIC0gSW4gRmlyZWZveCAyNSBhdCBsZWFzdCwgTWFwIGFuZCBTZXQgYXJlIGNhbGxhYmxlIHdpdGhvdXQgXCJuZXdcIlxuICAgICAgKi9cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGdsb2JhbHMuTWFwLnByb3RvdHlwZS5jbGVhciAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCBuZXcgZ2xvYmFscy5TZXQoKS5zaXplICE9PSAwXG4gICAgICAgIHx8IG5ld01hcC5zaXplICE9PSAwXG4gICAgICAgIHx8IHR5cGVvZiBnbG9iYWxzLk1hcC5wcm90b3R5cGUua2V5cyAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCB0eXBlb2YgZ2xvYmFscy5TZXQucHJvdG90eXBlLmtleXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgfHwgdHlwZW9mIGdsb2JhbHMuTWFwLnByb3RvdHlwZS5mb3JFYWNoICE9PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IHR5cGVvZiBnbG9iYWxzLlNldC5wcm90b3R5cGUuZm9yRWFjaCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCBpc0NhbGxhYmxlV2l0aG91dE5ldyhnbG9iYWxzLk1hcClcbiAgICAgICAgfHwgaXNDYWxsYWJsZVdpdGhvdXROZXcoZ2xvYmFscy5TZXQpXG4gICAgICAgIHx8IHR5cGVvZiBuZXdNYXAua2V5cygpLm5leHQgIT09ICdmdW5jdGlvbicgLy8gU2FmYXJpIDhcbiAgICAgICAgfHwgbWFwSXRlcmF0aW9uVGhyb3dzU3RvcEl0ZXJhdG9yIC8vIEZpcmVmb3ggMjVcbiAgICAgICAgfHwgIW1hcFN1cHBvcnRzU3ViY2xhc3NpbmdcbiAgICAgICkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKGdsb2JhbHMsIHtcbiAgICAgICAgICBNYXA6IGNvbGxlY3Rpb25TaGltcy5NYXAsXG4gICAgICAgICAgU2V0OiBjb2xsZWN0aW9uU2hpbXMuU2V0XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2xvYmFscy5TZXQucHJvdG90eXBlLmtleXMgIT09IGdsb2JhbHMuU2V0LnByb3RvdHlwZS52YWx1ZXMpIHtcbiAgICAgICAgLy8gRml4ZWQgaW4gV2ViS2l0IHdpdGggaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0NDE5MFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxzLlNldC5wcm90b3R5cGUsICdrZXlzJywgZ2xvYmFscy5TZXQucHJvdG90eXBlLnZhbHVlcywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNoaW0gaW5jb21wbGV0ZSBpdGVyYXRvciBpbXBsZW1lbnRhdGlvbnMuXG4gICAgICBhZGRJdGVyYXRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoKG5ldyBnbG9iYWxzLk1hcCgpKS5rZXlzKCkpKTtcbiAgICAgIGFkZEl0ZXJhdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZigobmV3IGdsb2JhbHMuU2V0KCkpLmtleXMoKSkpO1xuXG4gICAgICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzICYmIGdsb2JhbHMuU2V0LnByb3RvdHlwZS5oYXMubmFtZSAhPT0gJ2hhcycpIHtcbiAgICAgICAgLy8gTWljcm9zb2Z0IEVkZ2UgdjAuMTEuMTAwNzQuMCBpcyBtaXNzaW5nIGEgbmFtZSBvbiBTZXQjaGFzXG4gICAgICAgIHZhciBhbm9ueW1vdXNTZXRIYXMgPSBnbG9iYWxzLlNldC5wcm90b3R5cGUuaGFzO1xuICAgICAgICBvdmVycmlkZU5hdGl2ZShnbG9iYWxzLlNldC5wcm90b3R5cGUsICdoYXMnLCBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jYWxsKGFub255bW91c1NldEhhcywgdGhpcywga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlZmluZVByb3BlcnRpZXMoZ2xvYmFscywgY29sbGVjdGlvblNoaW1zKTtcbiAgICBhZGREZWZhdWx0U3BlY2llcyhnbG9iYWxzLk1hcCk7XG4gICAgYWRkRGVmYXVsdFNwZWNpZXMoZ2xvYmFscy5TZXQpO1xuICB9XG5cbiAgdmFyIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QgPSBmdW5jdGlvbiB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCkge1xuICAgIGlmICghRVMuVHlwZUlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgfTtcblxuICAvLyBTb21lIFJlZmxlY3QgbWV0aG9kcyBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGFzXG4gIC8vIHRob3NlIG9uIHRoZSBPYmplY3QgZ2xvYmFsLCBleGNlcHQgdGhhdCBhIFR5cGVFcnJvciBpcyB0aHJvd24gaWZcbiAgLy8gdGFyZ2V0IGlzbid0IGFuIG9iamVjdC4gQXMgd2VsbCBhcyByZXR1cm5pbmcgYSBib29sZWFuIGluZGljYXRpbmdcbiAgLy8gdGhlIHN1Y2Nlc3Mgb2YgdGhlIG9wZXJhdGlvbi5cbiAgdmFyIFJlZmxlY3RTaGltcyA9IHtcbiAgICAvLyBBcHBseSBtZXRob2QgaW4gYSBmdW5jdGlvbmFsIGZvcm0uXG4gICAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KCkge1xuICAgICAgcmV0dXJuIEVTLkNhbGwoRVMuQ2FsbCwgbnVsbCwgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gTmV3IG9wZXJhdG9yIGluIGEgZnVuY3Rpb25hbCBmb3JtLlxuICAgIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmdzKSB7XG4gICAgICBpZiAoIUVTLklzQ29uc3RydWN0b3IoY29uc3RydWN0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb25zdHJ1Y3Rvci4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IGNvbnN0cnVjdG9yO1xuICAgICAgaWYgKCFFUy5Jc0NvbnN0cnVjdG9yKG5ld1RhcmdldCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmV3LnRhcmdldCBtdXN0IGJlIGEgY29uc3RydWN0b3IuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gRVMuQ29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmdzLCBuZXdUYXJnZXQsICdpbnRlcm5hbCcpO1xuICAgIH0sXG5cbiAgICAvLyBXaGVuIGRlbGV0aW5nIGEgbm9uLWV4aXN0ZW50IG9yIGNvbmZpZ3VyYWJsZSBwcm9wZXJ0eSxcbiAgICAvLyB0cnVlIGlzIHJldHVybmVkLlxuICAgIC8vIFdoZW4gYXR0ZW1wdGluZyB0byBkZWxldGUgYSBub24tY29uZmlndXJhYmxlIHByb3BlcnR5LFxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIGZhbHNlLlxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgICAgdGhyb3dVbmxlc3NUYXJnZXRJc09iamVjdCh0YXJnZXQpO1xuICAgICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblxuICAgICAgICBpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2lsbCByZXR1cm4gdHJ1ZS5cbiAgICAgIHJldHVybiBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgfSxcblxuICAgIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICByZXR1cm4ga2V5IGluIHRhcmdldDtcbiAgICB9XG4gIH07XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihSZWZsZWN0U2hpbXMsIHtcbiAgICAgIC8vIEJhc2ljYWxseSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIGludGVybmFsIFtbT3duUHJvcGVydHlLZXlzXV0uXG4gICAgICAvLyBDb25jYXRlbmF0aW5nIHByb3BlcnR5TmFtZXMgYW5kIHByb3BlcnR5U3ltYm9scyBzaG91bGQgZG8gdGhlIHRyaWNrLlxuICAgICAgLy8gVGhpcyBzaG91bGQgY29udGludWUgdG8gd29yayB0b2dldGhlciB3aXRoIGEgU3ltYm9sIHNoaW1cbiAgICAgIC8vIHdoaWNoIG92ZXJyaWRlcyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyBhbmQgaW1wbGVtZW50c1xuICAgICAgLy8gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scy5cbiAgICAgIG93bktleXM6IGZ1bmN0aW9uIG93bktleXModGFyZ2V0KSB7XG4gICAgICAgIHRocm93VW5sZXNzVGFyZ2V0SXNPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuXG4gICAgICAgIGlmIChFUy5Jc0NhbGxhYmxlKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpKSB7XG4gICAgICAgICAgX3B1c2hBcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2FsbEFuZENhdGNoRXhjZXB0aW9uID0gZnVuY3Rpb24gQ29udmVydEV4Y2VwdGlvblRvQm9vbGVhbihmdW5jKSB7XG4gICAgcmV0dXJuICF0aHJvd3NFcnJvcihmdW5jKTtcbiAgfTtcblxuICBpZiAoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbihSZWZsZWN0U2hpbXMsIHtcbiAgICAgIGlzRXh0ZW5zaWJsZTogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHRhcmdldCkge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCk7XG4gICAgICB9LFxuICAgICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCkge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIHJldHVybiBjYWxsQW5kQ2F0Y2hFeGNlcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgIHZhciBpbnRlcm5hbEdldCA9IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG5cbiAgICAgIGlmICghZGVzYykge1xuICAgICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxHZXQocGFyZW50LCBrZXksIHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCd2YWx1ZScgaW4gZGVzYykge1xuICAgICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBFUy5DYWxsKGRlc2MuZ2V0LCByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcm5hbFNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXG4gICAgICBpZiAoIWRlc2MpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gaW50ZXJuYWxTZXQocGFyZW50LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjID0ge1xuICAgICAgICAgIHZhbHVlOiB2b2lkIDAsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCd2YWx1ZScgaW4gZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIUVTLlR5cGVJc09iamVjdChyZWNlaXZlcikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhpc3RpbmdEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwga2V5KTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdEZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIGtleSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgX2NhbGwoZGVzYy5zZXQsIHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oUmVmbGVjdFNoaW1zLCB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIHJldHVybiBjYWxsQW5kQ2F0Y2hFeGNlcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgfSxcblxuICAgICAgLy8gU3ludGF4IGluIGEgZnVuY3Rpb25hbCBmb3JtLlxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgdGhyb3dVbmxlc3NUYXJnZXRJc09iamVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHRhcmdldDtcblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxHZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgICAgIH0sXG5cbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdGFyZ2V0O1xuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbFNldCh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICB2YXIgb2JqZWN0RG90R2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gICAgUmVmbGVjdFNoaW1zLmdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSB7XG4gICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KHRhcmdldCk7XG4gICAgICByZXR1cm4gb2JqZWN0RG90R2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZiAmJiBSZWZsZWN0U2hpbXMuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICB2YXIgd2lsbENyZWF0ZUNpcmN1bGFyUHJvdG90eXBlID0gZnVuY3Rpb24gKG9iamVjdCwgbGFzdFByb3RvKSB7XG4gICAgICB2YXIgcHJvdG8gPSBsYXN0UHJvdG87XG4gICAgICB3aGlsZSAocHJvdG8pIHtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gcHJvdG8pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwcm90byA9IFJlZmxlY3RTaGltcy5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oUmVmbGVjdFNoaW1zLCB7XG4gICAgICAvLyBTZXRzIHRoZSBwcm90b3R5cGUgb2YgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgIC8vIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2Yob2JqZWN0LCBwcm90bykge1xuICAgICAgICB0aHJvd1VubGVzc1RhcmdldElzT2JqZWN0KG9iamVjdCk7XG4gICAgICAgIGlmIChwcm90byAhPT0gbnVsbCAmJiAhRVMuVHlwZUlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Byb3RvIG11c3QgYmUgYW4gb2JqZWN0IG9yIG51bGwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXkgYWxyZWFkeSBhcmUgdGhlIHNhbWUsIHdlJ3JlIGRvbmUuXG4gICAgICAgIGlmIChwcm90byA9PT0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYW5ub3QgYWx0ZXIgcHJvdG90eXBlIGlmIG9iamVjdCBub3QgZXh0ZW5zaWJsZS5cbiAgICAgICAgaWYgKFJlZmxlY3QuaXNFeHRlbnNpYmxlICYmICFSZWZsZWN0LmlzRXh0ZW5zaWJsZShvYmplY3QpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgd2UgZG8gbm90IGNyZWF0ZSBhIGNpcmN1bGFyIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgaWYgKHdpbGxDcmVhdGVDaXJjdWxhclByb3RvdHlwZShvYmplY3QsIHByb3RvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihvYmplY3QsIHByb3RvKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB2YXIgZGVmaW5lT3JPdmVycmlkZVJlZmxlY3RQcm9wZXJ0eSA9IGZ1bmN0aW9uIChrZXksIHNoaW0pIHtcbiAgICBpZiAoIUVTLklzQ2FsbGFibGUoZ2xvYmFscy5SZWZsZWN0W2tleV0pKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxzLlJlZmxlY3QsIGtleSwgc2hpbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY2NlcHRzUHJpbWl0aXZlcyA9IHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2xvYmFscy5SZWZsZWN0W2tleV0oMSk7XG4gICAgICAgIGdsb2JhbHMuUmVmbGVjdFtrZXldKE5hTik7XG4gICAgICAgIGdsb2JhbHMuUmVmbGVjdFtrZXldKHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFjY2VwdHNQcmltaXRpdmVzKSB7XG4gICAgICAgIG92ZXJyaWRlTmF0aXZlKGdsb2JhbHMuUmVmbGVjdCwga2V5LCBzaGltKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIE9iamVjdC5rZXlzKFJlZmxlY3RTaGltcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVmaW5lT3JPdmVycmlkZVJlZmxlY3RQcm9wZXJ0eShrZXksIFJlZmxlY3RTaGltc1trZXldKTtcbiAgfSk7XG4gIHZhciBvcmlnaW5hbFJlZmxlY3RHZXRQcm90byA9IGdsb2JhbHMuUmVmbGVjdC5nZXRQcm90b3R5cGVPZjtcbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcyAmJiBvcmlnaW5hbFJlZmxlY3RHZXRQcm90byAmJiBvcmlnaW5hbFJlZmxlY3RHZXRQcm90by5uYW1lICE9PSAnZ2V0UHJvdG90eXBlT2YnKSB7XG4gICAgb3ZlcnJpZGVOYXRpdmUoZ2xvYmFscy5SZWZsZWN0LCAnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcbiAgICAgIHJldHVybiBfY2FsbChvcmlnaW5hbFJlZmxlY3RHZXRQcm90bywgZ2xvYmFscy5SZWZsZWN0LCB0YXJnZXQpO1xuICAgIH0pO1xuICB9XG4gIGlmIChnbG9iYWxzLlJlZmxlY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICBpZiAodmFsdWVPckZhbHNlSWZUaHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgZ2xvYmFscy5SZWZsZWN0LnNldFByb3RvdHlwZU9mKDEsIHt9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShnbG9iYWxzLlJlZmxlY3QsICdzZXRQcm90b3R5cGVPZicsIFJlZmxlY3RTaGltcy5zZXRQcm90b3R5cGVPZik7XG4gICAgfVxuICB9XG4gIGlmIChnbG9iYWxzLlJlZmxlY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICBpZiAoIXZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBiYXNpYyA9ICFnbG9iYWxzLlJlZmxlY3QuZGVmaW5lUHJvcGVydHkoMSwgJ3Rlc3QnLCB7IHZhbHVlOiAxIH0pO1xuICAgICAgLy8gXCJleHRlbnNpYmxlXCIgZmFpbHMgb24gRWRnZSAwLjEyXG4gICAgICB2YXIgZXh0ZW5zaWJsZSA9IHR5cGVvZiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMgIT09ICdmdW5jdGlvbicgfHwgIWdsb2JhbHMuUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pLCAndGVzdCcsIHt9KTtcbiAgICAgIHJldHVybiBiYXNpYyAmJiBleHRlbnNpYmxlO1xuICAgIH0pKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShnbG9iYWxzLlJlZmxlY3QsICdkZWZpbmVQcm9wZXJ0eScsIFJlZmxlY3RTaGltcy5kZWZpbmVQcm9wZXJ0eSk7XG4gICAgfVxuICB9XG4gIGlmIChnbG9iYWxzLlJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgaWYgKCF2YWx1ZU9yRmFsc2VJZlRocm93cyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTtcbiAgICAgIHJldHVybiBnbG9iYWxzLlJlZmxlY3QuY29uc3RydWN0KGZ1bmN0aW9uICgpIHt9LCBbXSwgRikgaW5zdGFuY2VvZiBGO1xuICAgIH0pKSB7XG4gICAgICBvdmVycmlkZU5hdGl2ZShnbG9iYWxzLlJlZmxlY3QsICdjb25zdHJ1Y3QnLCBSZWZsZWN0U2hpbXMuY29uc3RydWN0KTtcbiAgICB9XG4gIH1cblxuICBpZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9PSAnSW52YWxpZCBEYXRlJykge1xuICAgIHZhciBkYXRlVG9TdHJpbmcgPSBEYXRlLnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgc2hpbW1lZERhdGVUb1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIHZhbHVlT2YgPSArdGhpcztcbiAgICAgIGlmICh2YWx1ZU9mICE9PSB2YWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBFUy5DYWxsKGRhdGVUb1N0cmluZywgdGhpcyk7XG4gICAgfTtcbiAgICBvdmVycmlkZU5hdGl2ZShEYXRlLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgc2hpbW1lZERhdGVUb1N0cmluZyk7XG4gIH1cblxuICAvLyBBbm5leCBCIEhUTUwgbWV0aG9kc1xuICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYWRkaXRpb25hbC1wcm9wZXJ0aWVzLW9mLXRoZS1zdHJpbmcucHJvdG90eXBlLW9iamVjdFxuICB2YXIgc3RyaW5nSFRNTHNoaW1zID0ge1xuICAgIGFuY2hvcjogZnVuY3Rpb24gYW5jaG9yKG5hbWUpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnbmFtZScsIG5hbWUpOyB9LFxuICAgIGJpZzogZnVuY3Rpb24gYmlnKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnYmlnJywgJycsICcnKTsgfSxcbiAgICBibGluazogZnVuY3Rpb24gYmxpbmsoKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdibGluaycsICcnLCAnJyk7IH0sXG4gICAgYm9sZDogZnVuY3Rpb24gYm9sZCgpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ2InLCAnJywgJycpOyB9LFxuICAgIGZpeGVkOiBmdW5jdGlvbiBmaXhlZCgpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTsgfSxcbiAgICBmb250Y29sb3I6IGZ1bmN0aW9uIGZvbnRjb2xvcihjb2xvcikgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdjb2xvcicsIGNvbG9yKTsgfSxcbiAgICBmb250c2l6ZTogZnVuY3Rpb24gZm9udHNpemUoc2l6ZSkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdzaXplJywgc2l6ZSk7IH0sXG4gICAgaXRhbGljczogZnVuY3Rpb24gaXRhbGljcygpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ2knLCAnJywgJycpOyB9LFxuICAgIGxpbms6IGZ1bmN0aW9uIGxpbmsodXJsKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpOyB9LFxuICAgIHNtYWxsOiBmdW5jdGlvbiBzbWFsbCgpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ3NtYWxsJywgJycsICcnKTsgfSxcbiAgICBzdHJpa2U6IGZ1bmN0aW9uIHN0cmlrZSgpIHsgcmV0dXJuIEVTLkNyZWF0ZUhUTUwodGhpcywgJ3N0cmlrZScsICcnLCAnJyk7IH0sXG4gICAgc3ViOiBmdW5jdGlvbiBzdWIoKSB7IHJldHVybiBFUy5DcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpOyB9LFxuICAgIHN1cDogZnVuY3Rpb24gc3ViKCkgeyByZXR1cm4gRVMuQ3JlYXRlSFRNTCh0aGlzLCAnc3VwJywgJycsICcnKTsgfVxuICB9O1xuICBfZm9yRWFjaChPYmplY3Qua2V5cyhzdHJpbmdIVE1Mc2hpbXMpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIG1ldGhvZCA9IFN0cmluZy5wcm90b3R5cGVba2V5XTtcbiAgICB2YXIgc2hvdWxkT3ZlcndyaXRlID0gZmFsc2U7XG4gICAgaWYgKEVTLklzQ2FsbGFibGUobWV0aG9kKSkge1xuICAgICAgdmFyIG91dHB1dCA9IF9jYWxsKG1ldGhvZCwgJycsICcgXCIgJyk7XG4gICAgICB2YXIgcXVvdGVzQ291bnQgPSBfY29uY2F0KFtdLCBvdXRwdXQubWF0Y2goL1wiL2cpKS5sZW5ndGg7XG4gICAgICBzaG91bGRPdmVyd3JpdGUgPSBvdXRwdXQgIT09IG91dHB1dC50b0xvd2VyQ2FzZSgpIHx8IHF1b3Rlc0NvdW50ID4gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdWxkT3ZlcndyaXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3VsZE92ZXJ3cml0ZSkge1xuICAgICAgb3ZlcnJpZGVOYXRpdmUoU3RyaW5nLnByb3RvdHlwZSwga2V5LCBzdHJpbmdIVE1Mc2hpbXNba2V5XSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgSlNPTnN0cmluZ2lmaWVzU3ltYm9scyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gTWljcm9zb2Z0IEVkZ2UgdjAuMTIgc3RyaW5naWZpZXMgU3ltYm9scyBpbmNvcnJlY3RseVxuICAgIGlmICghaGFzU3ltYm9scykgeyByZXR1cm4gZmFsc2U7IH0gLy8gU3ltYm9scyBhcmUgbm90IHN1cHBvcnRlZFxuICAgIHZhciBzdHJpbmdpZnkgPSB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIEpTT04uc3RyaW5naWZ5ID09PSAnZnVuY3Rpb24nID8gSlNPTi5zdHJpbmdpZnkgOiBudWxsO1xuICAgIGlmICghc3RyaW5naWZ5KSB7IHJldHVybiBmYWxzZTsgfSAvLyBKU09OLnN0cmluZ2lmeSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKHR5cGVvZiBzdHJpbmdpZnkoU3ltYm9sKCkpICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gdHJ1ZTsgfSAvLyBTeW1ib2xzIHNob3VsZCBiZWNvbWUgYHVuZGVmaW5lZGBcbiAgICBpZiAoc3RyaW5naWZ5KFtTeW1ib2woKV0pICE9PSAnW251bGxdJykgeyByZXR1cm4gdHJ1ZTsgfSAvLyBTeW1ib2xzIGluIGFycmF5cyBzaG91bGQgYmVjb21lIGBudWxsYFxuICAgIHZhciBvYmogPSB7IGE6IFN5bWJvbCgpIH07XG4gICAgb2JqW1N5bWJvbCgpXSA9IHRydWU7XG4gICAgaWYgKHN0cmluZ2lmeShvYmopICE9PSAne30nKSB7IHJldHVybiB0cnVlOyB9IC8vIFN5bWJvbC12YWx1ZWQga2V5cyAqYW5kKiBTeW1ib2wtdmFsdWVkIHByb3BlcnRpZXMgc2hvdWxkIGJlIG9taXR0ZWRcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0oKSk7XG4gIHZhciBKU09Oc3RyaW5naWZ5QWNjZXB0c09iamVjdFN5bWJvbCA9IHZhbHVlT3JGYWxzZUlmVGhyb3dzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDaHJvbWUgNDUgdGhyb3dzIG9uIHN0cmluZ2lmeWluZyBvYmplY3Qgc3ltYm9sc1xuICAgIGlmICghaGFzU3ltYm9scykgeyByZXR1cm4gdHJ1ZTsgfSAvLyBTeW1ib2xzIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KE9iamVjdChTeW1ib2woKSkpID09PSAne30nICYmIEpTT04uc3RyaW5naWZ5KFtPYmplY3QoU3ltYm9sKCkpXSkgPT09ICdbe31dJztcbiAgfSk7XG4gIGlmIChKU09Oc3RyaW5naWZpZXNTeW1ib2xzIHx8ICFKU09Oc3RyaW5naWZ5QWNjZXB0c09iamVjdFN5bWJvbCkge1xuICAgIHZhciBvcmlnU3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnk7XG4gICAgb3ZlcnJpZGVOYXRpdmUoSlNPTiwgJ3N0cmluZ2lmeScsIGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgcmVwbGFjZXI7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmVwbGFjZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICB9XG4gICAgICB2YXIgYXJncyA9IFt2YWx1ZV07XG4gICAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSB7XG4gICAgICAgIHZhciByZXBsYWNlRm4gPSBFUy5Jc0NhbGxhYmxlKHJlcGxhY2VyKSA/IHJlcGxhY2VyIDogbnVsbDtcbiAgICAgICAgdmFyIHdyYXBwZWRSZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgICAgICAgIHZhciBwYXJzZWRWYWx1ZSA9IHJlcGxhY2VGbiA/IF9jYWxsKHJlcGxhY2VGbiwgdGhpcywga2V5LCB2YWwpIDogdmFsO1xuICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2VkVmFsdWUgIT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgICBpZiAoVHlwZS5zeW1ib2wocGFyc2VkVmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhc3NpZ25Ubyh7fSkocGFyc2VkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZFJlcGxhY2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSB3cmFwcGVkIHJlcGxhY2VyIHRoYXQgaGFuZGxlcyBhbiBhcnJheSByZXBsYWNlcj9cbiAgICAgICAgYXJncy5wdXNoKHJlcGxhY2VyKTtcbiAgICAgIH1cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzWzJdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnU3RyaW5naWZ5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGdsb2JhbHM7XG59KSk7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoQykgTWljcm9zb2Z0LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbnZhciBSZWZsZWN0O1xuKGZ1bmN0aW9uIChSZWZsZWN0KSB7XG4gICAgLy8gTWV0YWRhdGEgUHJvcG9zYWxcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhL1xuICAgIChmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICAgICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICAgICAgICAgICAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDpcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcyA9PT0gXCJvYmplY3RcIiA/IHRoaXMgOlxuICAgICAgICAgICAgICAgICAgICBGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpO1xuICAgICAgICB2YXIgZXhwb3J0ZXIgPSBtYWtlRXhwb3J0ZXIoUmVmbGVjdCk7XG4gICAgICAgIGlmICh0eXBlb2Ygcm9vdC5SZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByb290LlJlZmxlY3QgPSBSZWZsZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0ZXIgPSBtYWtlRXhwb3J0ZXIocm9vdC5SZWZsZWN0LCBleHBvcnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZmFjdG9yeShleHBvcnRlcik7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VFeHBvcnRlcih0YXJnZXQsIHByZXZpb3VzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KShmdW5jdGlvbiAoZXhwb3J0ZXIpIHtcbiAgICAgICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgICAgIC8vIGZlYXR1cmUgdGVzdCBmb3IgU3ltYm9sIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnRzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB2YXIgdG9QcmltaXRpdmVTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLnRvUHJpbWl0aXZlIDogXCJAQHRvUHJpbWl0aXZlXCI7XG4gICAgICAgIHZhciBpdGVyYXRvclN5bWJvbCA9IHN1cHBvcnRzU3ltYm9sICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuaXRlcmF0b3IgOiBcIkBAaXRlcmF0b3JcIjtcbiAgICAgICAgdmFyIHN1cHBvcnRzQ3JlYXRlID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIjsgLy8gZmVhdHVyZSB0ZXN0IGZvciBPYmplY3QuY3JlYXRlIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJvdG8gPSB7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5OyAvLyBmZWF0dXJlIHRlc3QgZm9yIF9fcHJvdG9fXyBzdXBwb3J0XG4gICAgICAgIHZhciBkb3duTGV2ZWwgPSAhc3VwcG9ydHNDcmVhdGUgJiYgIXN1cHBvcnRzUHJvdG87XG4gICAgICAgIHZhciBIYXNoTWFwID0ge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIG9iamVjdCBpbiBkaWN0aW9uYXJ5IG1vZGUgKGEuay5hLiBcInNsb3dcIiBtb2RlIGluIHY4KVxuICAgICAgICAgICAgY3JlYXRlOiBzdXBwb3J0c0NyZWF0ZVxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoT2JqZWN0LmNyZWF0ZShudWxsKSk7IH1cbiAgICAgICAgICAgICAgICA6IHN1cHBvcnRzUHJvdG9cbiAgICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7IF9fcHJvdG9fXzogbnVsbCB9KTsgfVxuICAgICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHt9KTsgfSxcbiAgICAgICAgICAgIGhhczogZG93bkxldmVsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBrZXkgaW4gbWFwOyB9LFxuICAgICAgICAgICAgZ2V0OiBkb3duTGV2ZWxcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpID8gbWFwW2tleV0gOiB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gbWFwW2tleV07IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIExvYWQgZ2xvYmFsIG9yIHNoaW0gdmVyc2lvbnMgb2YgTWFwLCBTZXQsIGFuZCBXZWFrTWFwXG4gICAgICAgIHZhciBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XG4gICAgICAgIHZhciB1c2VQb2x5ZmlsbCA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52W1wiUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMXCJdID09PSBcInRydWVcIjtcbiAgICAgICAgdmFyIF9NYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XG4gICAgICAgIHZhciBfU2V0ID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBTZXQgOiBDcmVhdGVTZXRQb2x5ZmlsbCgpO1xuICAgICAgICB2YXIgX1dlYWtNYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFdlYWtNYXAgPT09IFwiZnVuY3Rpb25cIiA/IFdlYWtNYXAgOiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKTtcbiAgICAgICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnktb2JqZWN0LWludGVybmFsLW1ldGhvZHMtYW5kLWludGVybmFsLXNsb3RzXG4gICAgICAgIHZhciBNZXRhZGF0YSA9IG5ldyBfV2Vha01hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gZGVjb3JhdG9ycyBBbiBhcnJheSBvZiBkZWNvcmF0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IHRvIGRlY29yYXRlLlxuICAgICAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciB0aGUgdGFyZ2V0IGtleS5cbiAgICAgICAgICogQHJlbWFya3MgRGVjb3JhdG9ycyBhcmUgYXBwbGllZCBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBFeGFtcGxlID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcbiAgICAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoYXR0cmlidXRlcykgJiYgIUlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMpICYmICFJc051bGwoYXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoSXNOdWxsKGF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlUHJvcGVydHkoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWNvcmF0ZVwiLCBkZWNvcmF0ZSk7XG4gICAgICAgIC8vIDQuMS4yIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI3JlZmxlY3QubWV0YWRhdGFcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZGVmYXVsdCBtZXRhZGF0YSBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGNhbiBiZSB1c2VkIG9uIGEgY2xhc3MsIGNsYXNzIG1lbWJlciwgb3IgcGFyYW1ldGVyLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgVGhlIGtleSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cbiAgICAgICAgICogQHJldHVybnMgQSBkZWNvcmF0b3IgZnVuY3Rpb24uXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIElmIGBtZXRhZGF0YUtleWAgaXMgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGUgdGFyZ2V0IGFuZCB0YXJnZXQga2V5LCB0aGVcbiAgICAgICAgICogbWV0YWRhdGFWYWx1ZSBmb3IgdGhhdCBrZXkgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IsIFR5cGVTY3JpcHQgb25seSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSwgVHlwZVNjcmlwdCBvbmx5KVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBwcm9wZXJ0eTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBtZXRob2QoKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpICYmICFJc1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcIm1ldGFkYXRhXCIsIG1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZSBhIHVuaXF1ZSBtZXRhZGF0YSBlbnRyeSBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0byBkZWZpbmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeSBhcyBtZXRhZGF0YS1wcm9kdWNpbmcgYW5ub3RhdGlvbi5cbiAgICAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogRGVjb3JhdG9yIHtcbiAgICAgICAgICogICAgICAgICByZXR1cm4gKHRhcmdldCwga2V5PykgPT4gUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIHRhcmdldCwga2V5KTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlZmluZU1ldGFkYXRhXCIsIGRlZmluZU1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW47IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImhhc01ldGFkYXRhXCIsIGhhc01ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3QgaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiaGFzT3duTWV0YWRhdGFcIiwgaGFzT3duTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRNZXRhZGF0YVwiLCBnZXRNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRPd25NZXRhZGF0YVwiLCBnZXRPd25NZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0TWV0YWRhdGFLZXlzXCIsIGdldE1ldGFkYXRhS2V5cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRPd25NZXRhZGF0YUtleXNcIiwgZ2V0T3duTWV0YWRhdGFLZXlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGVudHJ5IGZyb20gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQga2V5LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEgZW50cnkgd2FzIGZvdW5kIGFuZCBkZWxldGVkOyBvdGhlcndpc2UsIGZhbHNlLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHByb3BlcnR5S2V5LCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YU1hcC5zaXplID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEuZGVsZXRlKHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRNZXRhZGF0YS5zaXplID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIE1ldGFkYXRhLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWxldGVNZXRhZGF0YVwiLCBkZWxldGVNZXRhZGF0YSk7XG4gICAgICAgIGZ1bmN0aW9uIERlY29yYXRlQ29uc3RydWN0b3IoZGVjb3JhdG9ycywgdGFyZ2V0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3RvcihkZWNvcmF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBkZWNvcmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBEZWNvcmF0ZVByb3BlcnR5KGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoZGVjb3JhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIENyZWF0ZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KE8pO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKHRhcmdldE1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmICghQ3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICBNZXRhZGF0YS5zZXQoTywgdGFyZ2V0TWV0YWRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KFApO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkge1xuICAgICAgICAgICAgICAgIGlmICghQ3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhTWFwID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5zZXQoUCwgbWV0YWRhdGFNYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4xLjEgT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNtZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAoIUlzTnVsbChwYXJlbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4yLjEgT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gVG9Cb29sZWFuKG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4zLjEgT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRtZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjQuMSBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG93bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNS4xIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5ZGVmaW5lb3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIHRydWUpO1xuICAgICAgICAgICAgbWV0YWRhdGFNYXAuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNi4xIE9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5bWV0YWRhdGFrZXlzXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApIHtcbiAgICAgICAgICAgIHZhciBvd25LZXlzID0gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XG4gICAgICAgICAgICB2YXIgcGFyZW50S2V5cyA9IE9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG4gICAgICAgICAgICBpZiAocGFyZW50S2V5cy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3duS2V5cztcbiAgICAgICAgICAgIGlmIChvd25LZXlzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRLZXlzO1xuICAgICAgICAgICAgdmFyIHNldCA9IG5ldyBfU2V0KCk7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBvd25LZXlzXzEgPSBvd25LZXlzOyBfaSA8IG93bktleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gb3duS2V5c18xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBwYXJlbnRLZXlzXzEgPSBwYXJlbnRLZXlzOyBfYSA8IHBhcmVudEtleXNfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcGFyZW50S2V5c18xW19hXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjcuMSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW93bm1ldGFkYXRha2V5c1xuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICB2YXIga2V5c09iaiA9IG1ldGFkYXRhTWFwLmtleXMoKTtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IEdldEl0ZXJhdG9yKGtleXNPYmopO1xuICAgICAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IEl0ZXJhdG9yU3RlcChpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMubGVuZ3RoID0gaztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBJdGVyYXRvclZhbHVlKG5leHQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXNba10gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDYgRUNNQVNjcmlwdCBEYXRhIFR5cDBlcyBhbmQgVmFsdWVzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtZGF0YS10eXBlcy1hbmQtdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIFR5cGUoeCkge1xuICAgICAgICAgICAgaWYgKHggPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyogTnVsbCAqLztcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6IHJldHVybiAwIC8qIFVuZGVmaW5lZCAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiByZXR1cm4gMiAvKiBCb29sZWFuICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIDMgLyogU3RyaW5nICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzeW1ib2xcIjogcmV0dXJuIDQgLyogU3ltYm9sICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjogcmV0dXJuIDUgLyogTnVtYmVyICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjogcmV0dXJuIHggPT09IG51bGwgPyAxIC8qIE51bGwgKi8gOiA2IC8qIE9iamVjdCAqLztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gNiAvKiBPYmplY3QgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjEgVGhlIFVuZGVmaW5lZCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtdW5kZWZpbmVkLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuMiBUaGUgTnVsbCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtbnVsbC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzTnVsbCh4KSB7XG4gICAgICAgICAgICByZXR1cm4geCA9PT0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuNSBUaGUgU3ltYm9sIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1zeW1ib2wtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc1N5bWJvbCh4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjcgVGhlIE9iamVjdCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzT2JqZWN0KHgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiA/IHggIT09IG51bGwgOiB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMSBUeXBlIENvbnZlcnNpb25cbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZS1jb252ZXJzaW9uXG4gICAgICAgIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuICAgICAgICBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuICAgICAgICAgICAgc3dpdGNoIChUeXBlKGlucHV0KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMCAvKiBVbmRlZmluZWQgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDEgLyogTnVsbCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBCb29sZWFuICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogTnVtYmVyICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGludCA9IFByZWZlcnJlZFR5cGUgPT09IDMgLyogU3RyaW5nICovID8gXCJzdHJpbmdcIiA6IFByZWZlcnJlZFR5cGUgPT09IDUgLyogTnVtYmVyICovID8gXCJudW1iZXJcIiA6IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgdmFyIGV4b3RpY1RvUHJpbSA9IEdldE1ldGhvZChpbnB1dCwgdG9QcmltaXRpdmVTeW1ib2wpO1xuICAgICAgICAgICAgaWYgKGV4b3RpY1RvUHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcbiAgICAgICAgICAgICAgICBpZiAoSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgaGludCA9PT0gXCJkZWZhdWx0XCIgPyBcIm51bWJlclwiIDogaGludCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjEuMSBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG4gICAgICAgICAgICBpZiAoaGludCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhciB0b1N0cmluZ18xID0gTy50b1N0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZ18xKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMS5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVPZiA9IE8udmFsdWVPZjtcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZU9mID0gTy52YWx1ZU9mO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0b1N0cmluZ18yID0gTy50b1N0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZ18yKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMiBUb0Jvb2xlYW4oYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtdG9ib29sZWFuXG4gICAgICAgIGZ1bmN0aW9uIFRvQm9vbGVhbihhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICEhYXJndW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjEyIFRvU3RyaW5nKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3N0cmluZ1xuICAgICAgICBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhcmd1bWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMTQgVG9Qcm9wZXJ0eUtleShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxuICAgICAgICBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVG9QcmltaXRpdmUoYXJndW1lbnQsIDMgLyogU3RyaW5nICovKTtcbiAgICAgICAgICAgIGlmIChJc1N5bWJvbChrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICByZXR1cm4gVG9TdHJpbmcoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIgVGVzdGluZyBhbmQgQ29tcGFyaXNvbiBPcGVyYXRpb25zXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRlc3RpbmctYW5kLWNvbXBhcmlzb24tb3BlcmF0aW9uc1xuICAgICAgICAvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4gICAgICAgIGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5XG4gICAgICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGFyZ3VtZW50KVxuICAgICAgICAgICAgICAgIDogYXJndW1lbnQgaW5zdGFuY2VvZiBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgPyBhcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi4zIElzQ2FsbGFibGUoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbiAgICAgICAgZnVuY3Rpb24gSXNDYWxsYWJsZShhcmd1bWVudCkge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi40IElzQ29uc3RydWN0b3IoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3JcbiAgICAgICAgZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjcgSXNQcm9wZXJ0eUtleShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNwcm9wZXJ0eWtleVxuICAgICAgICBmdW5jdGlvbiBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKFR5cGUoYXJndW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIFN5bWJvbCAqLzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDcuMyBPcGVyYXRpb25zIG9uIE9iamVjdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1vYmplY3RzXG4gICAgICAgIC8vIDcuMy45IEdldE1ldGhvZChWLCBQKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRtZXRob2RcbiAgICAgICAgZnVuY3Rpb24gR2V0TWV0aG9kKFYsIFApIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gVltQXTtcbiAgICAgICAgICAgIGlmIChmdW5jID09PSB1bmRlZmluZWQgfHwgZnVuYyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCFJc0NhbGxhYmxlKGZ1bmMpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNCBPcGVyYXRpb25zIG9uIEl0ZXJhdG9yIE9iamVjdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1pdGVyYXRvci1vYmplY3RzXG4gICAgICAgIGZ1bmN0aW9uIEdldEl0ZXJhdG9yKG9iaikge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IEdldE1ldGhvZChvYmosIGl0ZXJhdG9yU3ltYm9sKTtcbiAgICAgICAgICAgIGlmICghSXNDYWxsYWJsZShtZXRob2QpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTsgLy8gZnJvbSBDYWxsXG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBtZXRob2QuY2FsbChvYmopO1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdChpdGVyYXRvcikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC40IEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLzIwMTYvI3NlYy1pdGVyYXRvcnZhbHVlXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjUgSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pdGVyYXRvcnN0ZXBcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gZmFsc2UgOiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JjbG9zZVxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGl0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKGYpXG4gICAgICAgICAgICAgICAgZi5jYWxsKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA5LjEgT3JkaW5hcnkgT2JqZWN0IEludGVybmFsIE1ldGhvZHMgYW5kIEludGVybmFsIFNsb3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xuICAgICAgICAvLyA5LjEuMS4xIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTylcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnlnZXRwcm90b3R5cGVvZlxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pIHtcbiAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgTyAhPT0gXCJmdW5jdGlvblwiIHx8IE8gPT09IGZ1bmN0aW9uUHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBzZXQgX19wcm90b19fIGluIEVTNSwgYXMgaXQncyBub24tc3RhbmRhcmQuXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLiBDb21wYXRpYmxlIGltcGxlbWVudGF0aW9uc1xuICAgICAgICAgICAgLy8gbXVzdCBlaXRoZXIgc2V0IF9fcHJvdG9fXyBvbiBhIHN1YmNsYXNzIGNvbnN0cnVjdG9yIHRvIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgLy8gb3IgZW5zdXJlIGVhY2ggY2xhc3MgaGFzIGEgdmFsaWQgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBvbiBpdHMgcHJvdG90eXBlIHRoYXRcbiAgICAgICAgICAgIC8vIHBvaW50cyBiYWNrIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBzYW1lIGFzIEZ1bmN0aW9uLltbUHJvdG90eXBlXV0sIHRoZW4gdGhpcyBpcyBkZWZpbmF0ZWx5IGluaGVyaXRlZC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlbiBpbiBFUzYgb3Igd2hlbiB1c2luZyBfX3Byb3RvX18gaW4gYSBjb21wYXRpYmxlIGJyb3dzZXIuXG4gICAgICAgICAgICBpZiAocHJvdG8gIT09IGZ1bmN0aW9uUHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IE8ucHJvdG90eXBlO1xuICAgICAgICAgICAgdmFyIHByb3RvdHlwZVByb3RvID0gcHJvdG90eXBlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZVByb3RvID09IG51bGwgfHwgcHJvdG90eXBlUHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNvbnN0cnVjdG9yIHdhcyBub3QgYSBmdW5jdGlvbiwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvdHlwZVByb3RvLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgc29tZSBraW5kIG9mIHNlbGYtcmVmZXJlbmNlLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSBPKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwcmV0dHkgZ29vZCBndWVzcyBhdCB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgTWFwIHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlTWFwUG9seWZpbGwoKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVTZW50aW5lbCA9IHt9O1xuICAgICAgICAgICAgdmFyIGFycmF5U2VudGluZWwgPSBbXTtcbiAgICAgICAgICAgIHZhciBNYXBJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXBJdGVyYXRvcihrZXlzLCB2YWx1ZXMsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGtleXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX2tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1tpbmRleF0sIHRoaXMuX3ZhbHVlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA+PSB0aGlzLl9rZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0LCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwSXRlcmF0b3I7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9rZXlzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSkgPj0gMDsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IHRoaXMuX3ZhbHVlc1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggKyAxOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5c1tpIC0gMV0gPSB0aGlzLl9rZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpIC0gMV0gPSB0aGlzLl92YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fY2FjaGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRLZXkpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0VmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEVudHJ5KTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5fZmluZCA9IGZ1bmN0aW9uIChrZXksIGluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleSA9IGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlSW5kZXggPCAwICYmIGluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUluZGV4O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRLZXkoa2V5LCBfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKF8sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RW50cnkoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgU2V0IHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlU2V0UG9seWZpbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFNldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnNpemU7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLnNldCh2YWx1ZSwgdmFsdWUpLCB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuZGVsZXRlKHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9tYXAuY2xlYXIoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBTZXQ7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIFdlYWtNYXAgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKSB7XG4gICAgICAgICAgICB2YXIgVVVJRF9TSVpFID0gMTY7XG4gICAgICAgICAgICB2YXIga2V5cyA9IEhhc2hNYXAuY3JlYXRlKCk7XG4gICAgICAgICAgICB2YXIgcm9vdEtleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuaGFzKHRhYmxlLCB0aGlzLl9rZXkpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5nZXQodGFibGUsIHRoaXMuX2tleSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlW3RoaXMuX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gZGVsZXRlIHRhYmxlW3RoaXMuX2tleV0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBub3QgYSByZWFsIGNsZWFyLCBqdXN0IG1ha2VzIHRoZSBwcmV2aW91cyBkYXRhIHVucmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFdlYWtNYXA7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVW5pcXVlS2V5KCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgICAgICAgZG9cbiAgICAgICAgICAgICAgICAgICAga2V5ID0gXCJAQFdlYWtNYXBAQFwiICsgQ3JlYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChIYXNoTWFwLmhhcyhrZXlzLCBrZXkpKTtcbiAgICAgICAgICAgICAgICBrZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIGNyZWF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwodGFyZ2V0LCByb290S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHJvb3RLZXksIHsgdmFsdWU6IEhhc2hNYXAuY3JlYXRlKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcm9vdEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBGaWxsUmFuZG9tQnl0ZXMoYnVmZmVyLCBzaXplKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zQ3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gRmlsbFJhbmRvbUJ5dGVzKG5ldyBBcnJheShzaXplKSwgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVVVUlEKCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gR2VuUmFuZG9tQnl0ZXMoVVVJRF9TSVpFKTtcbiAgICAgICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxuICAgICAgICAgICAgICAgIGRhdGFbNl0gPSBkYXRhWzZdICYgMHg0ZiB8IDB4NDA7XG4gICAgICAgICAgICAgICAgZGF0YVs4XSA9IGRhdGFbOF0gJiAweGJmIHwgMHg4MDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBVVUlEX1NJWkU7ICsrb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBieXRlID0gZGF0YVtvZmZzZXRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSA0IHx8IG9mZnNldCA9PT0gNiB8fCBvZmZzZXQgPT09IDgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCItXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChieXRlIDwgMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBieXRlLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVzZXMgYSBoZXVyaXN0aWMgdXNlZCBieSB2OCBhbmQgY2hha3JhIHRvIGZvcmNlIGFuIG9iamVjdCBpbnRvIGRpY3Rpb25hcnkgbW9kZS5cbiAgICAgICAgZnVuY3Rpb24gTWFrZURpY3Rpb25hcnkob2JqKSB7XG4gICAgICAgICAgICBvYmouX18gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBkZWxldGUgb2JqLl9fO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoUmVmbGVjdCB8fCAoUmVmbGVjdCA9IHt9KSk7XG4iLCJpbXBvcnQgVmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuZXhwb3J0IGNsYXNzIENodW5rIHtcblx0cHVibGljIHZpZXc6IG51bWJlcltdO1xuXG5cdEBUeXBlKCgpID0+IEFycmF5QnVmZmVyKVxuXG5cdHByaXZhdGUgY291bnQ6IG51bWJlcjtcblxuXHRAVHlwZSgoKSA9PiBWYWx1ZSlcblx0cHJpdmF0ZSBjb25zdGFudHM6IFZhbHVlW107XG5cblx0Ly8gUmVsYXRlZCB3aXRoIHNvdXJjZSBjb2RlIG9mIGhpZ2hlciBsZXZlbCBsYW5ndWFnZVxuXHRwcml2YXRlIGxpbmVWaWV3OiBudW1iZXJbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNvdW50ID0gMDtcblxuXHRcdHRoaXMuY29uc3RhbnRzID0gW107XG5cblx0XHR0aGlzLnZpZXcgPSBbXTtcblx0XHR0aGlzLmxpbmVWaWV3ID0gW107XG5cdH1cblxuXHR3cml0ZShieXRlOiBudW1iZXIsIGxpbmU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmlldy5wdXNoKGJ5dGUpO1xuXHRcdHRoaXMubGluZVZpZXcucHVzaChsaW5lKTtcblx0fVxuXG5cdHJlYWQoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmlldztcblx0fVxuXG5cdGdldCBzaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5sZW5ndGg7XG5cdH1cblxuXHRnZXQoaW5kZXgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZpZXdbaW5kZXhdO1xuXHR9XG5cblx0Z2V0TGluZShpbmRleCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubGluZVZpZXdbaW5kZXhdO1xuXHR9XG5cblx0bWFrZUNvbnN0YW50KHZhbHVlOiBWYWx1ZSk6IG51bWJlciB7XG5cdFx0Y29uc3QgY29uc3RhbnQgPSB0aGlzLmFkZENvbnN0YW50KHZhbHVlKTtcblx0XHRpZiAoY29uc3RhbnQgPiAyNTUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVG9vIG1hbnkgY29uc3RhbnRzIGluIG9uZSBjaHVuay4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uc3RhbnQ7XG5cdH1cblxuXHRhZGRDb25zdGFudCh2YWx1ZTogVmFsdWUpOiBudW1iZXIge1xuXHRcdHRoaXMuY29uc3RhbnRzLnB1c2godmFsdWUpO1xuXHRcdHJldHVybiB0aGlzLmNvbnN0YW50cy5sZW5ndGggLSAxO1xuXHR9XG5cblx0Z2V0Q29uc3RhbnQoaW5kZXg6IG51bWJlcik6IFZhbHVlIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdGFudHNbaW5kZXhdO1xuXHR9XG59IiwiaW1wb3J0IFNjYW5uZXIsIHsgVG9rZW5UeXBlLCBUb2tlbiB9IGZyb20gJy4vc2Nhbm5lcic7XG5pbXBvcnQgeyBDaHVuayB9IGZyb20gJy4vY2h1bmsnO1xuaW1wb3J0IHsgT3Bjb2RlIH0gZnJvbSAnLi92bSc7XG5pbXBvcnQgVmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cbmludGVyZmFjZSBMb2NhbCB7XG5cdG5hbWU6IFRva2VuO1xuXHRkZXB0aDogbnVtYmVyO1xufVxuXG5lbnVtIFByZWNlZGVuY2Uge1xuXHRQUkVDX05PTkUsXG5cdFBSRUNfQVNTSUdOTUVOVCwgLy8gPVxuXHRQUkVDX09SLCAvLyBvclxuXHRQUkVDX0FORCwgLy8gYW5kXG5cdFBSRUNfRVFVQUxJVFksIC8vID09ICE9XG5cdFBSRUNfQ09NUEFSSVNPTiwgLy8gPCA+IDw9ID49XG5cdFBSRUNfVEVSTSwgLy8gKyAtXG5cdFBSRUNfRkFDVE9SLCAvLyAqIC9cblx0UFJFQ19VTkFSWSwgLy8gISAtXG5cdFBSRUNfQ0FMTCwgLy8gLiAoKVxuXHRQUkVDX1BSSU1BUlksXG59XG5cbmludGVyZmFjZSBQYXJzZVJ1bGUge1xuXHRwcmVmaXg6IHN0cmluZztcblx0aW5maXg6IHN0cmluZztcblx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgbm8tY29udHJvbC1yZWdleCovXG5jb25zdCBQYXJzZVJ1bGVzID0ge1xuXHRbVG9rZW5UeXBlLlRPS0VOX0xFRlRfUEFSRU5dOiB7XG5cdFx0cHJlZml4OiAnZ3JvdXBpbmcnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU5dOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9MRUZUX0JSQUNFXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fUklHSFRfQlJBQ0VdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9DT01NQV06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0RPVF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX01JTlVTXToge1xuXHRcdHByZWZpeDogJ3VuYXJ5Jyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX1RFUk0sXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fUExVU106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX1RFUk0sXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fU0xBU0hdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19GQUNUT1IsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fU1RBUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0ZBQ1RPUixcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9CQU5HXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQkFOR19FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRVFVQUxfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9HUkVBVEVSXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fR1JFQVRFUl9FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0xFU1NdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9MRVNTX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fSURFTlRJRklFUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1NUUklOR106IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX05VTUJFUl06IHtcblx0XHRwcmVmaXg6ICdudW1iZXInLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQU5EXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQ0xBU1NdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FTFNFXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRkFMU0VdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9GT1JdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9GVU5dOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9JRl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX05JTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX09SXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fUFJJTlRdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9SRVRVUk5dOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9TVVBFUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX1RISVNdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9UUlVFXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fVkFSXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fV0hJTEVdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdOVUxMJyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfTk9ORSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9FUlJPUl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VPRl06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0ZBTFNFXToge1xuXHRcdHByZWZpeDogJ2xpdGVyYWwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fVFJVRV06IHtcblx0XHRwcmVmaXg6ICdsaXRlcmFsJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX05JTF06IHtcblx0XHRwcmVmaXg6ICdsaXRlcmFsJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0JBTkddOiB7XG5cdFx0cHJlZml4OiAndW5hcnknLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fQkFOR19FUVVBTF06IHtcblx0XHRwcmVmaXg6ICdOVUxMJyxcblx0XHRpbmZpeDogJ2JpbmFyeScsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX0VRVUFMSVRZLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG5cdFtUb2tlblR5cGUuVE9LRU5fRVFVQUxfRVFVQUxdOiB7XG5cdFx0cHJlZml4OiAnTlVMTCcsXG5cdFx0aW5maXg6ICdiaW5hcnknLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19FUVVBTElUWSxcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9HUkVBVEVSXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfQ09NUEFSSVNPTixcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9HUkVBVEVSX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfQ09NUEFSSVNPTixcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9MRVNTXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfQ09NUEFSSVNPTixcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9MRVNTX0VRVUFMXToge1xuXHRcdHByZWZpeDogJ05VTEwnLFxuXHRcdGluZml4OiAnYmluYXJ5Jyxcblx0XHRwcmVjZWRlbmNlOiBQcmVjZWRlbmNlLlBSRUNfQ09NUEFSSVNPTixcblx0fSxcblx0W1Rva2VuVHlwZS5UT0tFTl9TVFJJTkddOiB7XG5cdFx0cHJlZml4OiAnc3RyaW5nJyxcblx0XHRpbmZpeDogJ05VTEwnLFxuXHRcdHByZWNlZGVuY2U6IFByZWNlZGVuY2UuUFJFQ19OT05FLFxuXHR9LFxuXHRbVG9rZW5UeXBlLlRPS0VOX0lERU5USUZJRVJdOiB7XG5cdFx0cHJlZml4OiAndmFyaWFibGUnLFxuXHRcdGluZml4OiAnTlVMTCcsXG5cdFx0cHJlY2VkZW5jZTogUHJlY2VkZW5jZS5QUkVDX05PTkUsXG5cdH0sXG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5jbGFzcyBDb21waWxlciB7XG5cdHByaXZhdGUgcHJldmlvdXM6IFRva2VuO1xuXHRwcml2YXRlIGN1cnJlbnQ6IFRva2VuO1xuXHRwcml2YXRlIHNjYW5uZXI6IFNjYW5uZXI7XG5cblx0cHJpdmF0ZSBjaHVuazogQ2h1bms7XG5cdHByaXZhdGUgbG9jYWxzOiBMb2NhbFtdO1xuXHRwcml2YXRlIGxvY2FsQ291bnQ6IG51bWJlcjtcblx0cHJpdmF0ZSBzY29wZURlcHRoOiBudW1iZXI7XG5cblx0Y29tcGlsZShzb3VyY2U6IHN0cmluZyk6IENodW5rIHtcblx0XHR0aGlzLnNjYW5uZXIgPSBuZXcgU2Nhbm5lcihzb3VyY2UpO1xuXG5cdFx0dGhpcy5jaHVuayA9IG5ldyBDaHVuaygpO1xuXHRcdHRoaXMubG9jYWxzID0gW107XG5cblx0XHR0aGlzLmFkdmFuY2UoKTtcblxuXHRcdHdoaWxlICghdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRU9GKSkge1xuXHRcdFx0dGhpcy5kZWNsYXJhdGlvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fRU9GLCAnRXhwZWN0IGVuZCBvZiBleHByZXNzaW9uLicpO1xuXG5cdFx0dGhpcy5lbmRDb21waWxlcigpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2h1bms7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBERUNMQVJBVElPTlMsIFNUQVRFTUVOVFMsIEJMT0NLUywgRVhQUkVTU0lPTlNcblx0ICovXG5cblx0cHJpdmF0ZSBkZWNsYXJhdGlvbigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fVkFSKSkge1xuXHRcdFx0dGhpcy52YXJEZWNsYXJhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGVtZW50KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9QUklOVCkpIHtcblx0XHRcdHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX0lGKSkge1xuXHRcdFx0dGhpcy5pZlN0YXRlbWVudCgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fV0hJTEUpKSB7XG5cdFx0XHR0aGlzLndoaWxlU3RhdGVtZW50KCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9TWVNDQUxMKSkge1xuXHRcdFx0dGhpcy5zeXNjYWxsU3RhdGVtZW50KCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9GT1IpKSB7XG5cdFx0XHR0aGlzLmZvclN0YXRlbWVudCgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fTEVGVF9CUkFDRSkpIHtcblx0XHRcdHRoaXMuYmVnaW5TY29wZSgpO1xuXHRcdFx0dGhpcy5ibG9jaygpO1xuXHRcdFx0dGhpcy5lbmRTY29wZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN5c2NhbGxTdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sIFwiRXhwZWN0ICc7JyBhZnRlciBzeXNjYWxsLlwiKTtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9JTlRFUlJVUFQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpZlN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX0xFRlRfUEFSRU4sIFwiRXhwZWN0ICcoJyBhZnRlciAnaWYnLlwiKTtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4sXG5cdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgY29uZGl0aW9uLlwiLFxuXHRcdCk7XG5cblx0XHRjb25zdCB0aGVuSnVtcDogbnVtYmVyID0gdGhpcy5lbWl0SnVtcChPcGNvZGUuT1BfSlVNUF9JRl9GQUxTRSk7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXG5cdFx0Y29uc3QgZWxzZUp1bXA6IG51bWJlciA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVApO1xuXG5cdFx0dGhpcy5wYXRjaEp1bXAodGhlbkp1bXApO1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRUxTRSkpIHRoaXMuc3RhdGVtZW50KCk7XG5cdFx0dGhpcy5wYXRjaEp1bXAoZWxzZUp1bXApO1xuXHR9XG5cblx0cHJpdmF0ZSB2YXJEZWNsYXJhdGlvbigpOiB2b2lkIHtcblx0XHRjb25zdCBnbG9iYWw6IG51bWJlciA9IHRoaXMucGFyc2VWYXJpYWJsZSgnRXhwZWN0IHZhcmlhYmxlIG5hbWUuJyk7XG5cblx0XHRpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRVFVQUwpKSB7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTklMKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OLFxuXHRcdFx0XCJFeHBlY3QgJzsnIGFmdGVyIHZhcmlhYmxlIGRlY2xhcmF0aW9uLlwiLFxuXHRcdCk7XG5cdFx0dGhpcy5kZWZpbmVWYXJpYWJsZShnbG9iYWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBwcmludFN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlRPS0VOX1NFTUlDT0xPTiwgXCJFeHBlY3QgJzsnIGFmdGVyIHZhbHVlLlwiKTtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QUklOVCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sIFwiRXhwZWN0ICc7JyBhZnRlciB2YWx1ZS5cIik7XG5cdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0fVxuXG5cdHByaXZhdGUgZm9yU3RhdGVtZW50KCk6IHZvaWQge1xuXHRcdHRoaXMuYmVnaW5TY29wZSgpO1xuXG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9MRUZUX1BBUkVOLCBcIkV4cGVjdCAnKCcgYWZ0ZXIgJ2ZvcicuXCIpO1xuXHRcdGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04pKSB7XG5cdFx0XHQvLyBObyBpbml0aWFsaXplci5cblx0XHR9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRPS0VOX1ZBUikpIHtcblx0XHRcdHRoaXMudmFyRGVjbGFyYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XG5cdFx0fVxuXG5cdFx0bGV0IGxvb3BTdGFydCA9IHRoaXMuY2h1bmsuc2l6ZTtcblxuXHRcdGxldCBleGl0SnVtcCA9IC0xO1xuXHRcdGlmICghdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OKSkge1xuXHRcdFx0dGhpcy5leHByZXNzaW9uKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9TRU1JQ09MT04sXG5cdFx0XHRcdFwiRXhwZWN0ICc7JyBhZnRlciBsb29wIGNvbmRpdGlvbi5cIixcblx0XHRcdCk7XG5cblx0XHRcdC8vIEp1bXAgb3V0IG9mIHRoZSBsb29wIGlmIHRoZSBjb25kaXRpb24gaXMgZmFsc2UuXG5cdFx0XHRleGl0SnVtcCA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVBfSUZfRkFMU0UpO1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTsgLy8gQ29uZGl0aW9uLlxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4pKSB7XG5cdFx0XHRjb25zdCBib2R5SnVtcCA9IHRoaXMuZW1pdEp1bXAoT3Bjb2RlLk9QX0pVTVApO1xuXG5cdFx0XHRjb25zdCBpbmNyZW1lbnRTdGFydCA9IHRoaXMuY2h1bmsuc2l6ZTtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0XHRcdHRoaXMuY29uc3VtZShcblx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOLFxuXHRcdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgZm9yIGNsYXVzZXMuXCIsXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmVtaXRMb29wKGxvb3BTdGFydCk7XG5cdFx0XHRsb29wU3RhcnQgPSBpbmNyZW1lbnRTdGFydDtcblx0XHRcdHRoaXMucGF0Y2hKdW1wKGJvZHlKdW1wKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXG5cdFx0dGhpcy5lbWl0TG9vcChsb29wU3RhcnQpO1xuXG5cdFx0aWYgKGV4aXRKdW1wICE9IC0xKSB7XG5cdFx0XHR0aGlzLnBhdGNoSnVtcChleGl0SnVtcCk7XG5cdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9QT1ApOyAvLyBDb25kaXRpb24uXG5cdFx0fVxuXG5cdFx0dGhpcy5lbmRTY29wZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpOiB2b2lkIHtcblx0XHRjb25zdCBsb29wU3RhcnQ6IG51bWJlciA9IHRoaXMuY2h1bmsuc2l6ZTtcblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fTEVGVF9QQVJFTiwgXCJFeHBlY3QgJygnIGFmdGVyICd3aGlsZScuXCIpO1xuXHRcdHRoaXMuZXhwcmVzc2lvbigpO1xuXHRcdHRoaXMuY29uc3VtZShcblx0XHRcdFRva2VuVHlwZS5UT0tFTl9SSUdIVF9QQVJFTixcblx0XHRcdFwiRXhwZWN0ICcpJyBhZnRlciBjb25kaXRpb24uXCIsXG5cdFx0KTtcblxuXHRcdGNvbnN0IGV4aXRKdW1wOiBudW1iZXIgPSB0aGlzLmVtaXRKdW1wKE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFKTtcblxuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cblx0XHR0aGlzLnN0YXRlbWVudCgpO1xuXG5cdFx0dGhpcy5lbWl0TG9vcChsb29wU3RhcnQpO1xuXG5cdFx0dGhpcy5wYXRjaEp1bXAoZXhpdEp1bXApO1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1BPUCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cHJlc3Npb24oKTogdm9pZCB7XG5cdFx0dGhpcy5wcmVjZWRlbmNlKFByZWNlZGVuY2UuUFJFQ19BU1NJR05NRU5UKTtcblx0fVxuXG5cdHByaXZhdGUgcHJlY2VkZW5jZShwcmVjZWRlbmNlOiBQcmVjZWRlbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5hZHZhbmNlKCk7XG5cblx0XHRjb25zdCBwcmVmaXhSdWxlID0gUGFyc2VSdWxlc1t0aGlzLnByZXZpb3VzLnR5cGVdLnByZWZpeDtcblx0XHRpZiAocHJlZml4UnVsZSA9PSAnTlVMTCcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRXhwZWN0IGV4cHJlc3Npb24uJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FuQXNzaWduID0gcHJlY2VkZW5jZSA8PSBQcmVjZWRlbmNlLlBSRUNfQVNTSUdOTUVOVDtcblx0XHR0aGlzW3ByZWZpeFJ1bGVdKGNhbkFzc2lnbik7XG5cblx0XHR3aGlsZSAocHJlY2VkZW5jZSA8PSBQYXJzZVJ1bGVzW3RoaXMuY3VycmVudC50eXBlXS5wcmVjZWRlbmNlKSB7XG5cdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdGNvbnN0IGluZml4UnVsZSA9IFBhcnNlUnVsZXNbdGhpcy5wcmV2aW91cy50eXBlXS5pbmZpeDtcblx0XHRcdHRoaXNbaW5maXhSdWxlXShjYW5Bc3NpZ24pO1xuXHRcdH1cblxuXHRcdGlmIChjYW5Bc3NpZ24gJiYgdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRVFVQUwpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXNzaWdubWVudCB0YXJnZXQuJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB2YXJpYWJsZShjYW5Bc3NpZ246IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm5hbWVkVmFyaWFibGUodGhpcy5wcmV2aW91cywgY2FuQXNzaWduKTtcblx0fVxuXG5cdHByaXZhdGUgc3RyaW5nKCk6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLnByZXZpb3VzLnN0cjtcblx0XHR0aGlzLmVtaXRDb25zdGFudChWYWx1ZS5zdHIodmFsdWUpKTtcblx0fVxuXG5cdHByaXZhdGUgbGl0ZXJhbCgpOiB2b2lkIHtcblx0XHRzd2l0Y2ggKHRoaXMucHJldmlvdXMudHlwZSkge1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fRkFMU0U6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0ZBTFNFKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9OSUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX05JTCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fVFJVRTpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfVFJVRSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbnVtYmVyKCk6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlID0gTnVtYmVyKHRoaXMucHJldmlvdXMuc3RyKTtcblxuXHRcdHRoaXMuZW1pdENvbnN0YW50KFZhbHVlLm51bWJlcih2YWx1ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBncm91cGluZygpOiB2b2lkIHtcblx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHR0aGlzLmNvbnN1bWUoXG5cdFx0XHRUb2tlblR5cGUuVE9LRU5fUklHSFRfUEFSRU4sXG5cdFx0XHRcIkV4cGVjdCAnKScgYWZ0ZXIgZXhwcmVzc2lvbi5cIixcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSB1bmFyeSgpOiB2b2lkIHtcblx0XHRjb25zdCBvcGVyYXRvclR5cGU6IFRva2VuVHlwZSA9IHRoaXMucHJldmlvdXMudHlwZTtcblxuXHRcdHRoaXMucHJlY2VkZW5jZShQcmVjZWRlbmNlLlBSRUNfVU5BUlkpO1xuXG5cdFx0c3dpdGNoIChvcGVyYXRvclR5cGUpIHtcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX01JTlVTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9ORUdBVEUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX0JBTkc6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYmluYXJ5KCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wZXJhdG9yVHlwZTogVG9rZW5UeXBlID0gdGhpcy5wcmV2aW91cy50eXBlO1xuXG5cdFx0Y29uc3QgcnVsZTogUGFyc2VSdWxlID0gUGFyc2VSdWxlc1tvcGVyYXRvclR5cGVdO1xuXHRcdHRoaXMucHJlY2VkZW5jZShydWxlLnByZWNlZGVuY2UgKyAxKTtcblxuXHRcdHN3aXRjaCAob3BlcmF0b3JUeXBlKSB7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9QTFVTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9BREQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX01JTlVTOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9TVUJUUkFDVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fU1RBUjpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTVVMVElQTFkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX1NMQVNIOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9ESVZJREUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlRPS0VOX0JBTkdfRVFVQUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGVzKE9wY29kZS5PUF9FUVVBTCwgT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fRVFVQUxfRVFVQUw6XG5cdFx0XHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX0VRVUFMKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9HUkVBVEVSOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9HUkVBVEVSKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRva2VuVHlwZS5UT0tFTl9HUkVBVEVSX0VRVUFMOlxuXHRcdFx0XHR0aGlzLmVtaXRCeXRlcyhPcGNvZGUuT1BfTEVTUywgT3Bjb2RlLk9QX05PVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fTEVTUzpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfTEVTUyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb2tlblR5cGUuVE9LRU5fTEVTU19FUVVBTDpcblx0XHRcdFx0dGhpcy5lbWl0Qnl0ZXMoT3Bjb2RlLk9QX0dSRUFURVIsIE9wY29kZS5PUF9OT1QpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYmxvY2soKTogdm9pZCB7XG5cdFx0d2hpbGUgKFxuXHRcdFx0dGhpcy5jdXJyZW50LnR5cGUgIT0gVG9rZW5UeXBlLlRPS0VOX1JJR0hUX0JSQUNFICYmXG5cdFx0XHQhdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRU9GKVxuXHRcdCkge1xuXHRcdFx0dGhpcy5kZWNsYXJhdGlvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29uc3VtZShUb2tlblR5cGUuVE9LRU5fUklHSFRfQlJBQ0UsIFwiRXhwZWN0ICd9JyBhZnRlciBibG9jay5cIik7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBIRUxQRVIgRlVOQ1RJT05TIEZPUiBQQVJTSU5HICYgQ09NUElMSU5HXG5cdCAqICAgICAgOjp0b2RvOjogbW92ZSB0byBzZXBhcmF0ZSBmaWxlIG9yIGNsYXNzXG5cdCAqL1xuXG5cdGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jdXJyZW50LnR5cGUgPT0gdHlwZSkge1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5lcnJvckF0Q3VycmVudChtZXNzYWdlKTtcblx0fVxuXG5cdHByaXZhdGUgbWF0Y2godHlwZTogVG9rZW5UeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEodGhpcy5jdXJyZW50LnR5cGUgPT0gdHlwZSkpIHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0YWR2YW5jZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuXG5cdFx0Zm9yICg7IDspIHtcblx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMuc2Nhbm5lci5zY2FuVG9rZW4oKTtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnQudHlwZSAhPSBUb2tlblR5cGUuVE9LRU5fRVJST1IpIGJyZWFrO1xuXG5cdFx0XHR0aGlzLmVycm9yQXRDdXJyZW50KCdJbnZhbGlkIHRva2VuLicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgIEVSUk9SIEhBTkRMSU5HXG5cdCAqL1xuXG5cdHByaXZhdGUgZXJyb3JBdEN1cnJlbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5lcnJvckF0KHRoaXMuY3VycmVudCwgbWVzc2FnZSk7XG5cdH1cblxuXHRwcml2YXRlIGVycm9yQXQodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aHJvdyBFcnJvcihcblx0XHRcdGBbbGluZSAke3Rva2VuLmxpbmV9XSBFcnJvciR7dG9rZW4udHlwZX0gYXQgJHt0b2tlbi5zdHJ9OiAke21lc3NhZ2V9YCxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgVkFSSUFCTEVTICYgTE9DQUxTXG5cdCAqL1xuXG5cdHByaXZhdGUgYmVnaW5TY29wZSgpOiB2b2lkIHtcblx0XHR0aGlzLnNjb3BlRGVwdGgrKztcblx0fVxuXG5cdHByaXZhdGUgZW5kU2NvcGUoKTogdm9pZCB7XG5cdFx0dGhpcy5zY29wZURlcHRoLS07XG5cblx0XHR3aGlsZSAoXG5cdFx0XHR0aGlzLmxvY2FsQ291bnQgPiAwICYmXG5cdFx0XHR0aGlzLmxvY2Fsc1t0aGlzLmxvY2FsQ291bnQgLSAxXS5kZXB0aCA+IHRoaXMuc2NvcGVEZXB0aFxuXHRcdCkge1xuXHRcdFx0dGhpcy5lbWl0Qnl0ZShPcGNvZGUuT1BfUE9QKTtcblx0XHRcdHRoaXMubG9jYWxDb3VudC0tO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVmaW5lVmFyaWFibGUoZ2xvYmFsOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRCeXRlcyhPcGNvZGUuT1BfREVGSU5FX0dMT0JBTCwgZ2xvYmFsKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VWYXJpYWJsZShlcnJvck1lc3NhZ2U6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0dGhpcy5jb25zdW1lKFRva2VuVHlwZS5UT0tFTl9JREVOVElGSUVSLCBlcnJvck1lc3NhZ2UpO1xuXG5cdFx0dGhpcy5kZWNsYXJlVmFyaWFibGUoKTtcblx0XHRpZiAodGhpcy5zY29wZURlcHRoID4gMCkge1xuXHRcdFx0dGhpcy5tYXJrSW5pdGlhbGl6ZWQoKTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmlkZW50aWZpZXJDb25zdGFudCh0aGlzLnByZXZpb3VzKTtcblx0fVxuXG5cdHByaXZhdGUgbWFya0luaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMubG9jYWxzW3RoaXMubG9jYWxDb3VudCAtIDFdLmRlcHRoID0gdGhpcy5zY29wZURlcHRoO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWNsYXJlVmFyaWFibGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2NvcGVEZXB0aCA9PSAwKSByZXR1cm47XG5cblx0XHRjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMucHJldmlvdXM7XG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMubG9jYWxzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBsb2NhbDogTG9jYWwgPSB0aGlzLmxvY2Fsc1tpXTtcblx0XHRcdGlmIChsb2NhbC5kZXB0aCAhPSAtMSAmJiBsb2NhbC5kZXB0aCA8IHRoaXMuc2NvcGVEZXB0aCkgYnJlYWs7XG5cblx0XHRcdGlmIChuYW1lLnN0ciA9PSBsb2NhbC5uYW1lLnN0cikge1xuXHRcdFx0XHR0aHJvdyBFcnJvcignQWxyZWFkeSB2YXJpYWJsZSB3aXRoIHRoaXMgbmFtZSBpbiB0aGlzIHNjb3BlLicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMubG9jYWxzLnB1c2goeyBuYW1lLCBkZXB0aDogLTEgfSk7XG5cdH1cblxuXHRwcml2YXRlIGlkZW50aWZpZXJDb25zdGFudCh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNodW5rLm1ha2VDb25zdGFudChWYWx1ZS5zdHIodG9rZW4uc3RyKSk7XG5cdH1cblxuXHRwcml2YXRlIG5hbWVkVmFyaWFibGUobmFtZTogVG9rZW4sIGNhbkFzc2lnbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdGxldCBnZXRPcDogT3Bjb2RlLCBzZXRPcDogT3Bjb2RlO1xuXHRcdGxldCBhcmc6IG51bWJlciA9IHRoaXMucmVzb2x2ZUxvY2FsKG5hbWUpO1xuXG5cdFx0aWYgKGFyZyAhPSAtMSkge1xuXHRcdFx0Z2V0T3AgPSBPcGNvZGUuT1BfR0VUX0xPQ0FMO1xuXHRcdFx0c2V0T3AgPSBPcGNvZGUuT1BfU0VUX0xPQ0FMO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmcgPSB0aGlzLmlkZW50aWZpZXJDb25zdGFudChuYW1lKTtcblx0XHRcdGdldE9wID0gT3Bjb2RlLk9QX0dFVF9HTE9CQUw7XG5cdFx0XHRzZXRPcCA9IE9wY29kZS5PUF9TRVRfR0xPQkFMO1xuXHRcdH1cblxuXHRcdGlmIChjYW5Bc3NpZ24gJiYgdGhpcy5tYXRjaChUb2tlblR5cGUuVE9LRU5fRVFVQUwpKSB7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oKTtcblx0XHRcdHRoaXMuZW1pdEJ5dGVzKHNldE9wLCBhcmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVtaXRCeXRlcyhnZXRPcCwgYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVMb2NhbChuYW1lOiBUb2tlbik6IG51bWJlciB7XG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMubG9jYWxDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBsb2NhbDogTG9jYWwgPSB0aGlzLmxvY2Fsc1tpXTtcblx0XHRcdGlmIChuYW1lLnN0ciA9PSBsb2NhbC5uYW1lLnN0cikge1xuXHRcdFx0XHRpZiAobG9jYWwuZGVwdGggPT0gLTEpIHtcblx0XHRcdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0XHRcdCdDYW5ub3QgcmVhZCBsb2NhbCB2YXJpYWJsZSBpbiBpdHMgb3duIGluaXRpYWxpemVyLicsXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogICAgICBFTUlUVElORyBCWVRFQ09ERSBGVU5DVElPTlNcblx0ICovXG5cblx0cHJpdmF0ZSBwYXRjaEp1bXAob2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCBqdW1wOiBudW1iZXIgPSB0aGlzLmNodW5rLnNpemUgLSBvZmZzZXQgLSAyO1xuXG5cdFx0aWYgKGp1bXAgPiAweGZmZmYpIHtcblx0XHRcdHRocm93IEVycm9yKCdUb28gbXVjaCBjb2RlIHRvIGp1bXAgb3Zlci4nKTtcblx0XHR9XG5cblx0XHR0aGlzLmNodW5rLnZpZXdbb2Zmc2V0XSA9IChqdW1wID4+IDgpICYgMHhmZjtcblx0XHR0aGlzLmNodW5rLnZpZXdbb2Zmc2V0ICsgMV0gPSBqdW1wICYgMHhmZjtcblx0fVxuXG5cdHByaXZhdGUgZW1pdExvb3AobG9vcFN0YXJ0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRCeXRlKE9wY29kZS5PUF9MT09QKTtcblxuXHRcdGNvbnN0IG9mZnNldDogbnVtYmVyID0gdGhpcy5jaHVuay5zaXplIC0gbG9vcFN0YXJ0ICsgMjtcblx0XHRpZiAob2Zmc2V0ID4gMHhmZmZmKSB0aHJvdyBFcnJvcignTG9vcCBib2R5IHRvbyBsYXJnZS4nKTtcblxuXHRcdHRoaXMuZW1pdEJ5dGUoKG9mZnNldCA+PiA4KSAmIDB4ZmYpO1xuXHRcdHRoaXMuZW1pdEJ5dGUob2Zmc2V0ICYgMHhmZik7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRKdW1wKG9wY29kZTogT3Bjb2RlKTogbnVtYmVyIHtcblx0XHR0aGlzLmVtaXRCeXRlKG9wY29kZSk7XG5cdFx0dGhpcy5lbWl0Qnl0ZSgweGZmKTtcblx0XHR0aGlzLmVtaXRCeXRlKDB4ZmYpO1xuXHRcdHJldHVybiB0aGlzLmNodW5rLnNpemUgLSAyO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0Q29uc3RhbnQodmFsdWU6IFZhbHVlKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0Qnl0ZXMoT3Bjb2RlLk9QX0NPTlNUQU5ULCB0aGlzLmNodW5rLm1ha2VDb25zdGFudCh2YWx1ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBlbWl0UmV0dXJuKCk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdEJ5dGUoT3Bjb2RlLk9QX1JFVFVSTik7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRCeXRlcyhieXRlMTogbnVtYmVyLCBieXRlMjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0Qnl0ZShieXRlMSk7XG5cdFx0dGhpcy5lbWl0Qnl0ZShieXRlMik7XG5cdH1cblxuXHRwcml2YXRlIGVtaXRCeXRlKGJ5dGU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY2h1bmsud3JpdGUoYnl0ZSwgdGhpcy5wcmV2aW91cy5saW5lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgICBDT01QSUxFUiBFTkQgRlVOQ1RJT05cblx0ICovXG5cblx0cHJpdmF0ZSBlbmRDb21waWxlcigpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXRSZXR1cm4oKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21waWxlcjtcbiIsImltcG9ydCB7IENodW5rIH0gZnJvbSAnLi9jaHVuayc7XG5pbXBvcnQgeyBPcGNvZGUgfSBmcm9tICcuL3ZtJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2Fzc2VtYmxlciB7XG5cdEBUeXBlKCgpID0+IENodW5rKVxuXHRwcml2YXRlIGNodW5rOiBDaHVuaztcblxuXHRjb25zdHJ1Y3RvcihjaHVuazogQ2h1bmspIHtcblx0XHR0aGlzLmNodW5rID0gY2h1bms7XG5cdH1cblxuXHRkaXNhc3NlbWJsZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhgPT0gJHtuYW1lfSA9PWApO1xuXHRcdGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IHRoaXMuY2h1bmsuc2l6ZTspIHtcblx0XHRcdG9mZnNldCA9IHRoaXMuZGlzYXNzZW1ibGVJbnN0cnVjdGlvbihvZmZzZXQpO1xuXHRcdH1cblx0fVxuXG5cdGRpc2Fzc2VtYmxlSW5zdHJ1Y3Rpb24ob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGNvbnN0IGluc3RydWN0aW9uID0gdGhpcy5jaHVuay5nZXQob2Zmc2V0KTtcblx0XHRzd2l0Y2ggKGluc3RydWN0aW9uKSB7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9DT05TVEFOVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RhbnRJbnN0cnVjdGlvbignT1BfQ09OU1RBTlQnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfTkVHQVRFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfTkVHQVRFJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX1JFVFVSTjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX1JFVFVSTicsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9BREQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9BREQnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfU1VCVFJBQ1Q6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9TVUJUUkFDVCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9NVUxUSVBMWTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX01VTFRJUExZJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0RJVklERTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX0RJVklERScsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9OSUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9OSUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfVFJVRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX1RSVUUnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfRkFMU0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9GQUxTRScsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9OT1Q6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9OT1QnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfRVFVQUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUluc3RydWN0aW9uKCdPUF9FUVVBTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9HUkVBVEVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfR1JFQVRFUicsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9MRVNTOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVJbnN0cnVjdGlvbignT1BfTEVTUycsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9QUklOVDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX1BSSU5UJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX1BPUDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlSW5zdHJ1Y3Rpb24oJ09QX1BPUCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9ERUZJTkVfR0xPQkFMOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdGFudEluc3RydWN0aW9uKCdPUF9ERUZJTkVfR0xPQkFMJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0dFVF9HTE9CQUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0YW50SW5zdHJ1Y3Rpb24oJ09QX0dFVF9HTE9CQUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfU0VUX0dMT0JBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RhbnRJbnN0cnVjdGlvbignT1BfU0VUX0dMT0JBTCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9HRVRfTE9DQUw6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJ5dGVJbnN0cnVjdGlvbignT1BfR0VUX0xPQ0FMJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX1NFVF9MT0NBTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYnl0ZUluc3RydWN0aW9uKCdPUF9TRVRfTE9DQUwnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfSlVNUF9JRl9GQUxTRTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuanVtcEluc3RydWN0aW9uKCdPUF9KVU1QX0lGX0ZBTFNFJywgb2Zmc2V0KTtcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0pVTVA6XG5cdFx0XHRcdHJldHVybiB0aGlzLmp1bXBJbnN0cnVjdGlvbignT1BfSlVNUCcsIG9mZnNldCk7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9MT09QOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5qdW1wSW5zdHJ1Y3Rpb24oJ09QX0xPT1AnLCBvZmZzZXQpO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfSU5URVJSVVBUOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ieXRlSW5zdHJ1Y3Rpb24oJ09QX0lOVEVSUlVQVCcsIG9mZnNldCk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBVbmtub3duIG9wY29kZSAke2luc3RydWN0aW9ufWApO1xuXHRcdFx0XHRyZXR1cm4gb2Zmc2V0ICsgMTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGp1bXBJbnN0cnVjdGlvbihuYW1lOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRjb25zdCBqdW1wID0gdGhpcy5jaHVuay5nZXQob2Zmc2V0ICsgMSk7XG5cdFx0Y29uc3QgbGluZSA9IHRoaXMuY2h1bmsuZ2V0TGluZShvZmZzZXQgKyAxKTtcblx0XHR0aGlzLmxvZ1dpdGhPZmZzZXQoXG5cdFx0XHRvZmZzZXQsXG5cdFx0XHRuYW1lICsgJ1xcdCcgKyBqdW1wICsgJ1xcdFxcdChsaW5lICcgKyBsaW5lICsgJyknLFxuXHRcdCk7XG5cdFx0cmV0dXJuIG9mZnNldCArIDI7XG5cdH1cblxuXHRwcml2YXRlIGJ5dGVJbnN0cnVjdGlvbihuYW1lOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRjb25zdCBzbG90ID0gdGhpcy5jaHVuay5nZXQob2Zmc2V0ICsgMSk7XG5cdFx0dGhpcy5sb2dXaXRoT2Zmc2V0KG9mZnNldCwgbmFtZSArICdcXHQnICsgc2xvdCk7XG5cdFx0cmV0dXJuIG9mZnNldCArIDI7XG5cdH1cblxuXHRwcml2YXRlIGxvZ1dpdGhPZmZzZXQob2Zmc2V0LCByZXN0KTogdm9pZCB7XG5cdFx0bGV0IGxvZyA9IG9mZnNldC50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyk7XG5cblx0XHRpZiAoXG5cdFx0XHRvZmZzZXQgIT0gMCAmJlxuXHRcdFx0dGhpcy5jaHVuay5nZXRMaW5lKG9mZnNldCkgPT09IHRoaXMuY2h1bmsuZ2V0TGluZShvZmZzZXQgLSAxKVxuXHRcdCkge1xuXHRcdFx0bG9nICs9ICdcXHR8Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9nICs9IGAgJHt0aGlzLmNodW5rLmdldExpbmUob2Zmc2V0KS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcblx0XHR9XG5cdFx0bG9nICs9ICcgJztcblx0XHRsb2cgKz0gcmVzdDtcblx0XHRjb25zb2xlLmxvZyhsb2cpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb25zdGFudEluc3RydWN0aW9uKG5hbWU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGNvbnN0IGxvYyA9IHRoaXMuY2h1bmsuZ2V0KG9mZnNldCArIDEpO1xuXHRcdGNvbnN0IGNvbnN0YW50ID0gdGhpcy5jaHVuay5nZXRDb25zdGFudChsb2MpO1xuXG5cdFx0dGhpcy5sb2dXaXRoT2Zmc2V0KG9mZnNldCwgbmFtZSArICdcXHQnICsgbG9jICsgXCInXCIgKyBjb25zdGFudCArIFwiJ1wiKTtcblxuXHRcdHJldHVybiBvZmZzZXQgKyAyO1xuXHR9XG5cblx0cHJpdmF0ZSBzaW1wbGVJbnN0cnVjdGlvbihuYW1lOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHR0aGlzLmxvZ1dpdGhPZmZzZXQob2Zmc2V0LCBuYW1lKTtcblxuXHRcdHJldHVybiBvZmZzZXQgKyAxO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDaHVuayB9IGZyb20gJy4vY2h1bmsnO1xuaW1wb3J0IFZNLCB7IEludGVycHJldFJlc3VsdCwgVk1TdGF0dXMgfSBmcm9tICcuL3ZtJztcbmltcG9ydCBDb21waWxlciBmcm9tICcuL2NvbXBpbGVyJztcbmltcG9ydCB7IHBsYWluVG9JbnN0YW5jZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcblxuY29uc3QgaW50ZXJwcmV0ID0gKHNvdXJjZTogc3RyaW5nKTogSW50ZXJwcmV0UmVzdWx0ID0+IHtcblx0Y29uc3QgY29tcGlsZXIgPSBuZXcgQ29tcGlsZXIoKTtcblxuXHRsZXQgY2h1bms6IENodW5rO1xuXHR0cnkge1xuXHRcdGNodW5rID0gY29tcGlsZXIuY29tcGlsZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIHsgc3RhdHVzOiBWTVN0YXR1cy5JTlRFUlBSRVRfQ09NUElMRV9FUlJPUiwgaW50ZXJydXB0OiB1bmRlZmluZWQsIHNhdmU6IFwiXCIgfTtcblx0fVxuXG5cdGxldCB2bSA9IG5ldyBWTSh7IGRlYnVnOiB0cnVlIH0pO1xuXHRsZXQgcmVzID0gdm0uaW5pdEFuZFJ1bihjaHVuayk7XG5cblx0d2hpbGUgKHJlcy5zdGF0dXMgIT09IFZNU3RhdHVzLklOVEVSUFJFVF9JTlRFUlJVUFQpIHtcblx0XHRjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlcy5zYXZlKSk7XG5cdFx0dm0gPSBwbGFpblRvSW5zdGFuY2UoVk0sIEpTT04ucGFyc2UocmVzLnNhdmUpKVxuXG5cdFx0cmVzID0gdm0ucnVuKDUpO1xuXG5cdH1cblxuXHRyZXR1cm4gcmVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJwcmV0OyIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG5cdC8vIFNpbmdsZS1jaGFyYWN0ZXIgdG9rZW5zLlxuXHRUT0tFTl9MRUZUX1BBUkVOLFxuXHRUT0tFTl9SSUdIVF9QQVJFTixcblx0VE9LRU5fTEVGVF9CUkFDRSxcblx0VE9LRU5fUklHSFRfQlJBQ0UsXG5cdFRPS0VOX0NPTU1BLFxuXHRUT0tFTl9ET1QsXG5cdFRPS0VOX01JTlVTLFxuXHRUT0tFTl9QTFVTLFxuXHRUT0tFTl9TRU1JQ09MT04sXG5cdFRPS0VOX1NMQVNILFxuXHRUT0tFTl9TVEFSLFxuXHQvLyBPbmUgb3IgdHdvIGNoYXJhY3RlciB0b2tlbnMuXG5cdFRPS0VOX0JBTkcsXG5cdFRPS0VOX0JBTkdfRVFVQUwsXG5cdFRPS0VOX0VRVUFMLFxuXHRUT0tFTl9FUVVBTF9FUVVBTCxcblx0VE9LRU5fR1JFQVRFUixcblx0VE9LRU5fR1JFQVRFUl9FUVVBTCxcblx0VE9LRU5fTEVTUyxcblx0VE9LRU5fTEVTU19FUVVBTCxcblx0Ly8gTGl0ZXJhbHMuXG5cdFRPS0VOX0lERU5USUZJRVIsXG5cdFRPS0VOX1NUUklORyxcblx0VE9LRU5fTlVNQkVSLFxuXHQvLyBLZXl3b3Jkcy5cblx0VE9LRU5fQU5ELFxuXHRUT0tFTl9DTEFTUyxcblx0VE9LRU5fRUxTRSxcblx0VE9LRU5fRkFMU0UsXG5cdFRPS0VOX0ZPUixcblx0VE9LRU5fRlVOLFxuXHRUT0tFTl9JRixcblx0VE9LRU5fTklMLFxuXHRUT0tFTl9PUixcblx0VE9LRU5fUFJJTlQsXG5cdFRPS0VOX1JFVFVSTixcblx0VE9LRU5fU1VQRVIsXG5cdFRPS0VOX1RISVMsXG5cdFRPS0VOX1RSVUUsXG5cdFRPS0VOX1ZBUixcblx0VE9LRU5fV0hJTEUsXG5cdFRPS0VOX1NZU0NBTEwsXG5cdFRPS0VOX0VSUk9SLFxuXHRUT0tFTl9FT0YsXG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG5cdHB1YmxpYyByZWFkb25seSB0eXBlOiBUb2tlblR5cGU7XG5cdHB1YmxpYyByZWFkb25seSBzdHI6IHN0cmluZztcblx0cHVibGljIHJlYWRvbmx5IGxpbmU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlLCBzb3VyY2UsIHN0YXJ0LCBsZW5ndGgsIGxpbmUpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuc3RyID0gc291cmNlLnN1YnN0cmluZyhzdGFydCwgc3RhcnQgKyBsZW5ndGgpO1xuXHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdH1cbn1cblxuY2xhc3MgU2Nhbm5lciB7XG5cdHByaXZhdGUgc291cmNlOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBzdGFydDogbnVtYmVyO1xuXHRwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcblxuXHRwcml2YXRlIGxpbmU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMubGluZSA9IDE7XG5cblx0XHR0aGlzLnN0YXJ0ID0gMDtcblx0XHR0aGlzLmN1cnJlbnQgPSAwO1xuXHR9XG5cblx0c2NhbigpOiBUb2tlbltdIHtcblx0XHRjb25zdCB0b2tlbnMgPSBbXTtcblx0XHR3aGlsZSAoIXRoaXMuYXRUaGVFbmQoKSkge1xuXHRcdFx0dGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcblx0XHRcdHRva2Vucy5wdXNoKHRoaXMuc2NhblRva2VuKCkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0bmV3IFRva2VuKFxuXHRcdFx0XHRUb2tlblR5cGUuVE9LRU5fRU9GLFxuXHRcdFx0XHR0aGlzLnNvdXJjZSxcblx0XHRcdFx0dGhpcy5jdXJyZW50LFxuXHRcdFx0XHQwLFxuXHRcdFx0XHR0aGlzLmxpbmUsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0cmV0dXJuIHRva2Vucztcblx0fVxuXG5cdHNjYW5Ub2tlbigpOiBUb2tlbiB7XG5cdFx0dGhpcy5za2lwV2hpdGVzcGFjZSgpO1xuXHRcdHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG5cblx0XHRpZiAodGhpcy5hdFRoZUVuZCgpKSByZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0VPRik7XG5cblx0XHRjb25zdCBjID0gdGhpcy5hZHZhbmNlKCk7XG5cdFx0aWYgKHRoaXMuaXNEaWdpdChjKSkgcmV0dXJuIHRoaXMubnVtYmVyKCk7XG5cdFx0aWYgKHRoaXMuaXNBbHBoYShjKSkgcmV0dXJuIHRoaXMuaWRlbnRpZmllcigpO1xuXG5cdFx0c3dpdGNoIChjKSB7XG5cdFx0XHRjYXNlICcoJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9MRUZUX1BBUkVOKTtcblx0XHRcdGNhc2UgJyknOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1JJR0hUX1BBUkVOKTtcblx0XHRcdGNhc2UgJ3snOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0xFRlRfQlJBQ0UpO1xuXHRcdFx0Y2FzZSAnfSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fUklHSFRfQlJBQ0UpO1xuXHRcdFx0Y2FzZSAnOyc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihUb2tlblR5cGUuVE9LRU5fU0VNSUNPTE9OKTtcblx0XHRcdGNhc2UgJywnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0NPTU1BKTtcblx0XHRcdGNhc2UgJy4nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX0RPVCk7XG5cdFx0XHRjYXNlICctJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9NSU5VUyk7XG5cdFx0XHRjYXNlICcrJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9QTFVTKTtcblx0XHRcdGNhc2UgJy8nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1NMQVNIKTtcblx0XHRcdGNhc2UgJyonOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX1NUQVIpO1xuXHRcdFx0Y2FzZSAnISc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihcblx0XHRcdFx0XHR0aGlzLm1hdGNoKCc9Jylcblx0XHRcdFx0XHRcdD8gVG9rZW5UeXBlLlRPS0VOX0JBTkdfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0JBTkcsXG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICc9Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFxuXHRcdFx0XHRcdHRoaXMubWF0Y2goJz0nKVxuXHRcdFx0XHRcdFx0PyBUb2tlblR5cGUuVE9LRU5fRVFVQUxfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0VRVUFMLFxuXHRcdFx0XHQpO1xuXHRcdFx0Y2FzZSAnPCc6XG5cdFx0XHRcdHJldHVybiB0aGlzLm1ha2VUb2tlbihcblx0XHRcdFx0XHR0aGlzLm1hdGNoKCc9Jylcblx0XHRcdFx0XHRcdD8gVG9rZW5UeXBlLlRPS0VOX0xFU1NfRVFVQUxcblx0XHRcdFx0XHRcdDogVG9rZW5UeXBlLlRPS0VOX0xFU1MsXG5cdFx0XHRcdCk7XG5cdFx0XHRjYXNlICc+Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFxuXHRcdFx0XHRcdHRoaXMubWF0Y2goJz0nKVxuXHRcdFx0XHRcdFx0PyBUb2tlblR5cGUuVE9LRU5fR1JFQVRFUl9FUVVBTFxuXHRcdFx0XHRcdFx0OiBUb2tlblR5cGUuVE9LRU5fR1JFQVRFUixcblx0XHRcdFx0KTtcblx0XHRcdGNhc2UgJ1wiJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JUb2tlbignVW5leHBlY3RlZCBjaGFyYWN0ZXIuJyk7XG5cdH1cblxuXHRwcml2YXRlIG51bWJlcigpOiBUb2tlbiB7XG5cdFx0d2hpbGUgKHRoaXMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHRoaXMuYWR2YW5jZSgpO1xuXG5cdFx0aWYgKHRoaXMucGVlaygpID09ICcuJyAmJiB0aGlzLmlzRGlnaXQodGhpcy5wZWVrTmV4dCgpKSkge1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cblx0XHRcdHdoaWxlICh0aGlzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB0aGlzLmFkdmFuY2UoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4oVG9rZW5UeXBlLlRPS0VOX05VTUJFUik7XG5cdH1cblxuXHRwcml2YXRlIGlkZW50aWZpZXIoKTogVG9rZW4ge1xuXHRcdHdoaWxlICh0aGlzLmlzQWxwaGFOdW1lcmljKHRoaXMucGVlaygpKSkgdGhpcy5hZHZhbmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5tYWtlVG9rZW4odGhpcy5pZGVudGlmaWVyVHlwZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgaWRlbnRpZmllclR5cGUoKTogVG9rZW5UeXBlIHtcblx0XHRzd2l0Y2ggKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLnN0YXJ0KSkge1xuXHRcdFx0Y2FzZSAnYSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAyLCAnbmQnLCBUb2tlblR5cGUuVE9LRU5fQU5EKTtcblx0XHRcdGNhc2UgJ2MnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNCwgJ2xhc3MnLCBUb2tlblR5cGUuVE9LRU5fQ0xBU1MpO1xuXHRcdFx0Y2FzZSAnZSc6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCAzLCAnbHNlJywgVG9rZW5UeXBlLlRPS0VOX0VMU0UpO1xuXHRcdFx0Y2FzZSAnZic6XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ID4gMSkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuc3RhcnQgKyAxKSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnYSc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDMsXG5cdFx0XHRcdFx0XHRcdFx0J2xzZScsXG5cdFx0XHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX0ZBTFNFLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnbyc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZChcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdDEsXG5cdFx0XHRcdFx0XHRcdFx0J3InLFxuXHRcdFx0XHRcdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9GT1IsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjYXNlICd1Jzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKFxuXHRcdFx0XHRcdFx0XHRcdDIsXG5cdFx0XHRcdFx0XHRcdFx0MSxcblx0XHRcdFx0XHRcdFx0XHQnbicsXG5cdFx0XHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX0ZVTixcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDEsICdmJywgVG9rZW5UeXBlLlRPS0VOX0lGKTtcblx0XHRcdGNhc2UgJ24nOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgMiwgJ2lsJywgVG9rZW5UeXBlLlRPS0VOX05JTCk7XG5cdFx0XHRjYXNlICdvJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDEsICdyJywgVG9rZW5UeXBlLlRPS0VOX09SKTtcblx0XHRcdGNhc2UgJ3AnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNCwgJ3JpbnQnLCBUb2tlblR5cGUuVE9LRU5fUFJJTlQpO1xuXHRcdFx0Y2FzZSAncic6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCA1LCAnZXR1cm4nLCBUb2tlblR5cGUuVE9LRU5fUkVUVVJOKTtcblx0XHRcdGNhc2UgJ3MnOlxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydCA+IDEpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLnN0YXJ0ICsgMSkpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ3UnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgNCwgJ3VwZXInLCBUb2tlblR5cGUuVE9LRU5fU1VQRVIpO1xuXHRcdFx0XHRcdFx0Y2FzZSAneSc6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrS2V5d29yZCgxLCA2LCAneXNjYWxsJywgVG9rZW5UeXBlLlRPS0VOX1NZU0NBTEwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3QnOlxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydCA+IDEpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLnN0YXJ0ICsgMSkpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2gnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoXG5cdFx0XHRcdFx0XHRcdFx0Mixcblx0XHRcdFx0XHRcdFx0XHQyLFxuXHRcdFx0XHRcdFx0XHRcdCdpcycsXG5cdFx0XHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRPS0VOX1RISVMsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjYXNlICdyJzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKFxuXHRcdFx0XHRcdFx0XHRcdDIsXG5cdFx0XHRcdFx0XHRcdFx0Mixcblx0XHRcdFx0XHRcdFx0XHQndWUnLFxuXHRcdFx0XHRcdFx0XHRcdFRva2VuVHlwZS5UT0tFTl9UUlVFLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2wnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0tleXdvcmQoMSwgMiwgJ2V0JywgVG9rZW5UeXBlLlRPS0VOX1ZBUik7XG5cdFx0XHRjYXNlICd3Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tLZXl3b3JkKDEsIDQsICdoaWxlJywgVG9rZW5UeXBlLlRPS0VOX1dISUxFKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVG9rZW5UeXBlLlRPS0VOX0lERU5USUZJRVI7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrS2V5d29yZChcblx0XHRzdGFydDogbnVtYmVyLFxuXHRcdGxlbmd0aDogbnVtYmVyLFxuXHRcdHJlc3Q6IHN0cmluZyxcblx0XHR0eXBlOiBUb2tlblR5cGUsXG5cdCk6IFRva2VuVHlwZSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydCA9PSBzdGFydCArIGxlbmd0aCAmJlxuXHRcdFx0dGhpcy5zb3VyY2Uuc3Vic3RyKHRoaXMuc3RhcnQgKyBzdGFydCwgbGVuZ3RoKSA9PSByZXN0XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVG9rZW5UeXBlLlRPS0VOX0lERU5USUZJRVI7XG5cdH1cblxuXHRwcml2YXRlIGlzQWxwaGEoYzogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChjID49ICdhJyAmJiBjIDw9ICd6JykgfHwgKGMgPj0gJ0EnICYmIGMgPD0gJ1onKSB8fCBjID09ICdfJztcblx0fVxuXG5cdHByaXZhdGUgaXNBbHBoYU51bWVyaWMoYzogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBbHBoYShjKSB8fCB0aGlzLmlzRGlnaXQoYyk7XG5cdH1cblxuXHRwcml2YXRlIGlzRGlnaXQoYzogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGMgPj0gJzAnICYmIGMgPD0gJzknO1xuXHR9XG5cblx0cHJpdmF0ZSBzdHJpbmcoKTogVG9rZW4ge1xuXHRcdHdoaWxlICh0aGlzLnBlZWsoKSAhPSAnXCInICYmICF0aGlzLmF0VGhlRW5kKCkpIHtcblx0XHRcdGlmICh0aGlzLnBlZWsoKSA9PSAnXFxuJykgdGhpcy5saW5lKys7XG5cdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hdFRoZUVuZCgpKSByZXR1cm4gdGhpcy5lcnJvclRva2VuKCdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xuXG5cdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0cmV0dXJuIHRoaXMubWFrZVRva2VuKFRva2VuVHlwZS5UT0tFTl9TVFJJTkcpO1xuXHR9XG5cblx0cHJpdmF0ZSBza2lwV2hpdGVzcGFjZSgpOiB2b2lkIHtcblx0XHRmb3IgKDsgOykge1xuXHRcdFx0Y29uc3QgYyA9IHRoaXMucGVlaygpO1xuXHRcdFx0c3dpdGNoIChjKSB7XG5cdFx0XHRcdGNhc2UgJyAnOlxuXHRcdFx0XHRjYXNlICdcXHInOlxuXHRcdFx0XHRjYXNlICdcXHQnOlxuXHRcdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdcXG4nOlxuXHRcdFx0XHRcdHRoaXMubGluZSsrO1xuXHRcdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICcvJzpcblx0XHRcdFx0XHRpZiAodGhpcy5wZWVrTmV4dCgpID09ICcvJykge1xuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMucGVlaygpICE9ICdcXG4nICYmICF0aGlzLmF0VGhlRW5kKCkpXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBlZWtOZXh0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoKSByZXR1cm4gJ1xcMCc7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcblx0fVxuXG5cdHByaXZhdGUgcGVlaygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcblx0fVxuXG5cdHByaXZhdGUgbWF0Y2goZXhwZWN0ZWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmF0VGhlRW5kKCkpIHJldHVybiBmYWxzZTtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT0gZXhwZWN0ZWQpIHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMuY3VycmVudCsrO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0YWR2YW5jZSgpOiBzdHJpbmcge1xuXHRcdHRoaXMuY3VycmVudCsrO1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50IC0gMSk7XG5cdH1cblxuXHRwcml2YXRlIGF0VGhlRW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnQgPj0gdGhpcy5zb3VyY2UubGVuZ3RoO1xuXHR9XG5cblx0cHJpdmF0ZSBtYWtlVG9rZW4odHlwZTogVG9rZW5UeXBlKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oXG5cdFx0XHR0eXBlLFxuXHRcdFx0dGhpcy5zb3VyY2UsXG5cdFx0XHR0aGlzLnN0YXJ0LFxuXHRcdFx0dGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydCxcblx0XHRcdHRoaXMubGluZSxcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBlcnJvclRva2VuKG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFxuXHRcdFx0VG9rZW5UeXBlLlRPS0VOX0VSUk9SLFxuXHRcdFx0dGhpcy5zb3VyY2UsXG5cdFx0XHQwLFxuXHRcdFx0bWVzc2FnZS5sZW5ndGgsXG5cdFx0XHR0aGlzLmxpbmUsXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2FubmVyO1xuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lclwiO1xuXG5leHBvcnQgZW51bSBWYWx1ZVR5cGUge1xuXHRWQUxfQk9PTCxcblx0VkFMX05JTCxcblx0VkFMX05VTUJFUixcblx0VkFMX09CSixcblx0VkFMX1NUUixcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9iaiB7XG5cdGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcblx0YWJzdHJhY3QgdG9KU09OKCk6IG9iamVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsdWUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZTogVmFsdWVUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX251bWJlcjogbnVtYmVyO1xuXG5cdEBUeXBlKCgpID0+IE9iailcblx0cHJpdmF0ZSByZWFkb25seSBfb2JqOiBPYmo7XG5cblxuXHRwcml2YXRlIHJlYWRvbmx5IF9zdHI6IHN0cmluZztcblxuXHRzdGF0aWMgcmVhZG9ubHkgVFlQRV9WQUxVRV9GSUVMRF9NQVAgPSB7XG5cdFx0W1ZhbHVlVHlwZS5WQUxfQk9PTF06ICdib29sJyxcblx0XHRbVmFsdWVUeXBlLlZBTF9OSUxdOiAnbmlsJyxcblx0XHRbVmFsdWVUeXBlLlZBTF9OVU1CRVJdOiAnbnVtYmVyJyxcblx0XHRbVmFsdWVUeXBlLlZBTF9PQkpdOiAnb2JqJyxcblx0XHRbVmFsdWVUeXBlLlZBTF9TVFJdOiAnc3RyJyxcblx0fTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBWYWx1ZVR5cGUsIG51bWJlciA9IDAsIG9iaiA9IG51bGwsIHN0ciA9IG51bGwpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuX251bWJlciA9IG51bWJlcjtcblx0XHR0aGlzLl9vYmogPSBvYmo7XG5cdFx0dGhpcy5fc3RyID0gc3RyO1xuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgU1RBVElDIENPTlNUUlVDVE9SU1xuXHQgKi9cblxuXHRzdGF0aWMgbnVtYmVyKHZhbHVlOiBudW1iZXIpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZShWYWx1ZVR5cGUuVkFMX05VTUJFUiwgdmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGJvb2wodmFsdWU6IGJvb2xlYW4pOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZShWYWx1ZVR5cGUuVkFMX0JPT0wsIHZhbHVlID8gMSA6IDApO1xuXHR9XG5cblx0c3RhdGljIG5pbCgpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZShWYWx1ZVR5cGUuVkFMX05JTCwgMCk7XG5cdH1cblxuXHRzdGF0aWMgc3RyKHN0cjogc3RyaW5nKTogVmFsdWUge1xuXHRcdHJldHVybiBuZXcgVmFsdWUoVmFsdWVUeXBlLlZBTF9TVFIsIDAsIG51bGwsIHN0cik7XG5cdH1cblxuXHRzdGF0aWMgb2JqKG9iajogT2JqKTogVmFsdWUge1xuXHRcdHJldHVybiBuZXcgVmFsdWUoVmFsdWVUeXBlLlZBTF9PQkosIDAsIG9iaik7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUpTT04oanNvbjogb2JqZWN0KTogVmFsdWUge1xuXHRcdGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGpzb24gYXMgYW55O1xuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfQk9PTDpcblx0XHRcdFx0cmV0dXJuIFZhbHVlLmJvb2wodmFsdWUpO1xuXHRcdFx0Y2FzZSBWYWx1ZVR5cGUuVkFMX05JTDpcblx0XHRcdFx0cmV0dXJuIFZhbHVlLm5pbCgpO1xuXHRcdFx0Y2FzZSBWYWx1ZVR5cGUuVkFMX05VTUJFUjpcblx0XHRcdFx0cmV0dXJuIFZhbHVlLm51bWJlcih2YWx1ZSk7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfT0JKOlxuXHRcdFx0XHRyZXR1cm4gVmFsdWUub2JqKHZhbHVlKTtcblx0XHRcdGNhc2UgVmFsdWVUeXBlLlZBTF9TVFI6XG5cdFx0XHRcdHJldHVybiBWYWx1ZS5zdHIodmFsdWUpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgdHlwZS4nKTtcblx0fVxuXG5cdGdldCBudW1iZXIoKTogbnVtYmVyIHtcblx0XHRpZiAodGhpcy50eXBlICE9PSBWYWx1ZVR5cGUuVkFMX05VTUJFUilcblx0XHRcdHRocm93IG5ldyBFcnJvcignVmFsdWUgaXMgbm90IGEgbnVtYmVyLicpO1xuXHRcdHJldHVybiB0aGlzLl9udW1iZXI7XG5cdH1cblxuXHRnZXQgYm9vbCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50eXBlICE9PSBWYWx1ZVR5cGUuVkFMX0JPT0wpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIGlzIG5vdCBhIGJvb2xlYW4uJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVyID09PSAxO1xuXHR9XG5cblx0Z2V0IG9iaigpOiBPYmoge1xuXHRcdGlmICh0aGlzLnR5cGUgIT09IFZhbHVlVHlwZS5WQUxfT0JKKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWYWx1ZSBpcyBub3QgYW4gb2JqZWN0LicpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX29iajtcblx0fVxuXG5cdGdldCBzdHIoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy50eXBlICE9PSBWYWx1ZVR5cGUuVkFMX1NUUilcblx0XHRcdHRocm93IG5ldyBFcnJvcignVmFsdWUgaXMgbm90IGEgc3RyaW5nLicpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX3N0cjtcblx0fVxuXG5cdC8qKlxuXHQgKiAgICAgVVRJTElUWSBNRVRIT0RTIDogQ09NUEFSSVNPTiwgVFlQRSBDSEVDS0lORywgRVRDLlxuXHQgKi9cblxuXHRpcyh2YWx1ZVR5cGU6IFZhbHVlVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgPT09IHZhbHVlVHlwZTtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAodGhpcy50eXBlKSB7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfQk9PTDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX251bWJlciA9PT0gMSA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfTklMOlxuXHRcdFx0XHRyZXR1cm4gJ25pbCc7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbnVtYmVyICsgJyc7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfT0JKOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb2JqLnRvU3RyaW5nKCk7XG5cdFx0XHRjYXNlIFZhbHVlVHlwZS5WQUxfU1RSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RyO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBlcXVhbHNUbyhvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50eXBlICE9PSBvdGhlci50eXBlKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXMubnVtYmVyID09PSBvdGhlci5udW1iZXI7XG5cdH1cblxuXHRwdWJsaWMgdG9KU09OKCk6IG9iamVjdCB7XG5cdFx0Y29uc3QgZmllbGQgPSBWYWx1ZS5UWVBFX1ZBTFVFX0ZJRUxEX01BUFt0aGlzLnR5cGVdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IHRoaXMudHlwZSxcblx0XHRcdHZhbHVlOiB0aGlzW2ZpZWxkXVxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCB7IENodW5rIH0gZnJvbSAnLi9jaHVuayc7XG5pbXBvcnQgRGlzYXNzZW1ibGVyIGZyb20gJy4vZGlzYXNzZW1ibGVyJztcbmltcG9ydCBWYWx1ZSwgeyBWYWx1ZVR5cGUgfSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBUeXBlLCBzZXJpYWxpemUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBlbnVtIE9wY29kZSB7XG5cdE9QX0NPTlNUQU5ULFxuXHRPUF9OSUwsXG5cdE9QX1RSVUUsXG5cdE9QX0ZBTFNFLFxuXHRPUF9BREQsXG5cdE9QX1NVQlRSQUNULFxuXHRPUF9NVUxUSVBMWSxcblx0T1BfRElWSURFLFxuXHRPUF9ORUdBVEUsXG5cdE9QX1JFVFVSTixcblx0T1BfTk9ULFxuXHRPUF9FUVVBTCxcblx0T1BfR1JFQVRFUixcblx0T1BfTEVTUyxcblx0T1BfUFJJTlQsXG5cdE9QX1BPUCxcblx0T1BfREVGSU5FX0dMT0JBTCxcblx0T1BfR0VUX0dMT0JBTCxcblx0T1BfU0VUX0dMT0JBTCxcblx0T1BfR0VUX0xPQ0FMLFxuXHRPUF9TRVRfTE9DQUwsXG5cdE9QX0pVTVBfSUZfRkFMU0UsXG5cdE9QX0pVTVAsXG5cdE9QX0xPT1AsXG5cdE9QX0lOVEVSUlVQVFxufVxuXG5leHBvcnQgZW51bSBWTVN0YXR1cyB7XG5cdElOVEVSUFJFVF9PSyxcblx0SU5URVJQUkVUX0NPTVBJTEVfRVJST1IsXG5cdElOVEVSUFJFVF9SVU5USU1FX0VSUk9SLFxuXHRJTlRFUlBSRVRfSU5URVJSVVBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJwcmV0UmVzdWx0IHtcblx0c3RhdHVzOiBWTVN0YXR1cztcblx0aW50ZXJydXB0OiB7XG5cdFx0Y29kZTogc3RyaW5nO1xuXHRcdGFyZ3M6IFtdO1xuXHR9IHwgdW5kZWZpbmVkO1xuXHRzYXZlOiBzdHJpbmc7XG59XG5cbmNsYXNzIFZNIHtcblx0QFR5cGUoKCkgPT4gQ2h1bmspXG5cdHByaXZhdGUgY2h1bms6IENodW5rO1xuXG5cdHByaXZhdGUgaXAgPSAwO1xuXHRwcml2YXRlIGRlYnVnOiBib29sZWFuO1xuXG5cdEBUeXBlKCgpID0+IERpc2Fzc2VtYmxlcilcblx0cHJpdmF0ZSBkaXNzYW1ibGVyOiBEaXNhc3NlbWJsZXI7XG5cblx0QFR5cGUoKCkgPT4gVmFsdWUpXG5cdHByaXZhdGUgc3RhY2s6IFZhbHVlW107XG5cblx0QFR5cGUoKCkgPT4gVmFsdWUpXG5cdHByaXZhdGUgZ2xvYmFsczogTWFwPHN0cmluZywgVmFsdWU+O1xuXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRkZWJ1ZyA9IGZhbHNlLFxuXHR9OiB7XG5cdFx0ZGVidWc/OiBib29sZWFuO1xuXHR9ID0ge30pIHtcblx0XHR0aGlzLmRlYnVnID0gZGVidWc7XG5cblx0XHR0aGlzLnN0YWNrID0gW107XG5cdFx0dGhpcy5nbG9iYWxzID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0aW5pdEFuZFJ1bihjaHVuayk6IEludGVycHJldFJlc3VsdCB7XG5cdFx0dGhpcy5jaHVuayA9IGNodW5rO1xuXHRcdHRoaXMuaXAgPSAwO1xuXG5cdFx0dGhpcy5kaXNzYW1ibGVyID0gbmV3IERpc2Fzc2VtYmxlcihjaHVuayk7XG5cblx0XHRyZXR1cm4gdGhpcy5ydW4oMyk7XG5cdH1cblxuXHRwdWJsaWMgcnVuKG51bUluc3RydWN0aW9ucyA9IDEpOiBJbnRlcnByZXRSZXN1bHQge1xuXHRcdGNvbnN0IHN0YXJ0SXAgPSB0aGlzLmlwO1xuXHRcdGNvbnN0IGVuZElwID0gc3RhcnRJcCArIG51bUluc3RydWN0aW9ucztcblxuXHRcdHdoaWxlICh0aGlzLmlwIDwgZW5kSXApIHtcblx0XHRcdGNvbnN0IGluc3RydWN0aW9uID0gdGhpcy5yZWFkQnl0ZSgpO1xuXG5cdFx0XHQvLyBUaGlzIHBhcnQgc2hvdWxkIGJlIG9wdGltaXplZC5cblx0XHRcdGlmICh0aGlzLmRlYnVnKSB7XG5cdFx0XHRcdHRoaXMuc3RhY2suZm9yRWFjaCgodmFsdWUpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgICAgICAgICAgIFsgJHt2YWx1ZS50b1N0cmluZygpfSBdYCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLmRpc3NhbWJsZXIuZGlzYXNzZW1ibGVJbnN0cnVjdGlvbih0aGlzLmlwIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAoaW5zdHJ1Y3Rpb24pIHtcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfUkVUVVJOOlxuXHRcdFx0XHRcdHJldHVybiB7IHN0YXR1czogVk1TdGF0dXMuSU5URVJQUkVUX09LLCBpbnRlcnJ1cHQ6IHVuZGVmaW5lZCwgc2F2ZTogc2VyaWFsaXplKHRoaXMpIH07XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX05FR0FURTpcblx0XHRcdFx0XHRpZiAoIXRoaXMucGVlaygpLmlzKFZhbHVlVHlwZS5WQUxfTlVNQkVSKSlcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignT3BlcmFuZCBtdXN0IGJlIGEgbnVtYmVyLicpO1xuXG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcigtdGhpcy5wb3AoKS5udW1iZXIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfQUREOiB7XG5cdFx0XHRcdFx0Y29uc3QgYiA9IHRoaXMucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IHRoaXMucG9wKCk7XG5cblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRhLmlzKFZhbHVlVHlwZS5WQUxfTlVNQkVSKSAmJlxuXHRcdFx0XHRcdFx0Yi5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUilcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5udW1iZXIoYS5udW1iZXIgKyBiLm51bWJlcikpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRhLmlzKFZhbHVlVHlwZS5WQUxfT0JKKSAmJlxuXHRcdFx0XHRcdFx0Yi5pcyhWYWx1ZVR5cGUuVkFMX09CSilcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRoaXMucHVzaChcblx0XHRcdFx0XHRcdFx0VmFsdWUuc3RyKFxuXHRcdFx0XHRcdFx0XHRcdGEudG9TdHJpbmcoKSArIGIudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0J09wZXJhbmRzIG11c3QgYmUgdHdvIG51bWJlcnMgb3IgdHdvIHN0cmluZ3MuJyxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1NVQlRSQUNUOlxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9NVUxUSVBMWTpcblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfRElWSURFOlxuXHRcdFx0XHRcdHRoaXMuYmluYXJ5T3AoaW5zdHJ1Y3Rpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9DT05TVEFOVDoge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnN0YW50ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaCh0aGlzLmNodW5rLmdldENvbnN0YW50KGNvbnN0YW50KSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfTklMOlxuXHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5uaWwoKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1RSVUU6XG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2wodHJ1ZSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9GQUxTRTpcblx0XHRcdFx0XHR0aGlzLnB1c2goVmFsdWUuYm9vbChmYWxzZSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9OT1Q6XG5cdFx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2wodGhpcy5pc0ZhbHNleSh0aGlzLnBvcCgpKSkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9FUVVBTDoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5ib29sKGEuZXF1YWxzVG8oYikpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9HUkVBVEVSOlxuXHRcdFx0XHRcdHRoaXMuYmluYXJ5T3AoaW5zdHJ1Y3Rpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9MRVNTOlxuXHRcdFx0XHRcdHRoaXMuYmluYXJ5T3AoaW5zdHJ1Y3Rpb24pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9QUklOVDoge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgT3Bjb2RlLk9QX1BPUDpcblx0XHRcdFx0XHR0aGlzLnBvcCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9ERUZJTkVfR0xPQkFMOiB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IChcblx0XHRcdFx0XHRcdHRoaXMuY2h1bmsuZ2V0Q29uc3RhbnQodGhpcy5yZWFkQnl0ZSgpKVxuXHRcdFx0XHRcdCkuc3RyO1xuXHRcdFx0XHRcdHRoaXMuZ2xvYmFscy5zZXQobmFtZSwgdGhpcy5wb3AoKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfR0VUX0dMT0JBTDoge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSAoXG5cdFx0XHRcdFx0XHR0aGlzLmNodW5rLmdldENvbnN0YW50KHRoaXMucmVhZEJ5dGUoKSkuc3RyXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2xvYmFscy5nZXQobmFtZSk7XG5cblx0XHRcdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAnJHtuYW1lfScuYCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBPcGNvZGUuT1BfU0VUX0dMT0JBTDoge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSAoXG5cdFx0XHRcdFx0XHR0aGlzLmNodW5rLmdldENvbnN0YW50KHRoaXMucmVhZEJ5dGUoKSkuc3RyXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoIXRoaXMuZ2xvYmFscy5nZXQobmFtZSkpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICcke25hbWV9Jy5gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmdsb2JhbHMuc2V0KG5hbWUsIHRoaXMucGVlaygpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9HRVRfTE9DQUw6IHtcblx0XHRcdFx0XHRjb25zdCBzbG90ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMucHVzaCh0aGlzLnN0YWNrW3Nsb3RdKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9TRVRfTE9DQUw6IHtcblx0XHRcdFx0XHRjb25zdCBzbG90ID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2tbc2xvdF0gPSB0aGlzLnBlZWsoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QX0lGX0ZBTFNFOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0ZhbHNleSh0aGlzLnBlZWsoKSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXAgKz0gb2Zmc2V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9KVU1QOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHR0aGlzLmlwICs9IG9mZnNldDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9MT09QOiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gdGhpcy5yZWFkU2hvcnQoKTtcblx0XHRcdFx0XHR0aGlzLmlwIC09IG9mZnNldDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIE9wY29kZS5PUF9JTlRFUlJVUFQ6IHtcblx0XHRcdFx0XHRjb25zdCBpbnRlcnJ1cHRDb2RlID0gdGhpcy5wb3AoKTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0c3RhdHVzOiBWTVN0YXR1cy5JTlRFUlBSRVRfSU5URVJSVVBULFxuXHRcdFx0XHRcdFx0c2F2ZTogc2VyaWFsaXplKHRoaXMpLFxuXHRcdFx0XHRcdFx0aW50ZXJydXB0OiB7XG5cdFx0XHRcdFx0XHRcdGNvZGU6IGludGVycnVwdENvZGUuc3RyLFxuXHRcdFx0XHRcdFx0XHRhcmdzOiBbXVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4geyBzdGF0dXM6IFZNU3RhdHVzLklOVEVSUFJFVF9PSywgaW50ZXJydXB0OiB1bmRlZmluZWQsIHNhdmU6IHNlcmlhbGl6ZSh0aGlzKSB9O1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkQnl0ZSgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGJ5dGUgPSB0aGlzLmNodW5rLmdldCh0aGlzLmlwKTtcblx0XHR0aGlzLmlwKys7XG5cdFx0cmV0dXJuIGJ5dGU7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRTaG9ydCgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGJ5dGUxID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdGNvbnN0IGJ5dGUyID0gdGhpcy5yZWFkQnl0ZSgpO1xuXHRcdHJldHVybiAoYnl0ZTEgPDwgOCkgfCBieXRlMjtcblx0fVxuXG5cdHByaXZhdGUgaXNGYWxzZXkodmFsdWU6IFZhbHVlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHZhbHVlLmlzKFZhbHVlVHlwZS5WQUxfTklMKSB8fFxuXHRcdFx0IXZhbHVlLmJvb2xcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBiaW5hcnlPcChvcDogT3Bjb2RlKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBlZWsoKS5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUikpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ09wZXJhbmQgbXVzdCBiZSBhIG51bWJlci4nKTtcblxuXHRcdGNvbnN0IGIgPSB0aGlzLnBvcCgpO1xuXG5cdFx0aWYgKCF0aGlzLnBlZWsoKS5pcyhWYWx1ZVR5cGUuVkFMX05VTUJFUikpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ09wZXJhbmQgbXVzdCBiZSBhIG51bWJlci4nKTtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLnBvcCgpO1xuXG5cdFx0c3dpdGNoIChvcCkge1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfQUREOlxuXHRcdFx0XHR0aGlzLnB1c2goVmFsdWUubnVtYmVyKGEubnVtYmVyICsgYi5udW1iZXIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIE9wY29kZS5PUF9TVUJUUkFDVDpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcihhLm51bWJlciAtIGIubnVtYmVyKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfTVVMVElQTFk6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5udW1iZXIoYS5udW1iZXIgKiBiLm51bWJlcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0RJVklERTpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLm51bWJlcihhLm51bWJlciAvIGIubnVtYmVyKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBPcGNvZGUuT1BfR1JFQVRFUjpcblx0XHRcdFx0dGhpcy5wdXNoKFZhbHVlLmJvb2woYS5udW1iZXIgPiBiLm51bWJlcikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgT3Bjb2RlLk9QX0xFU1M6XG5cdFx0XHRcdHRoaXMucHVzaChWYWx1ZS5ib29sKGEubnVtYmVyIDwgYi5udW1iZXIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqICAgICAgU1RBQ0sgT1BFUkFUSU9OU1xuXHQgKi9cblxuXHRwcml2YXRlIHB1c2godmFsdWU6IFZhbHVlKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFjay5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgcG9wKCk6IFZhbHVlIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFjay5wb3AoKTtcblx0fVxuXG5cdHByaXZhdGUgcGVlaygpOiBWYWx1ZSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBWTTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ2VzNi1zaGltJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSdcbmltcG9ydCBpbnRlcnByZXQgZnJvbSAnLi9pbnRlcnByZXQnO1xuXG5pbXBvcnQgeyBWTVN0YXR1cyB9IGZyb20gJy4vdm0nO1xuXG5jb25zdCBiZWdpbiA9IChzb3VyY2VDb2RlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCBfID0gYFxuICAgICAgICBpZihmYWxzZSlcbiAgICAgICAgICAgIHN5c2NhbGwgXCJpcy53b3JrZmxvdy5hY3Rpb25zLnBhdXNlbXVzaWNcIjtcbiAgICAgICAgXG4gICAgICAgIGxldCBpID0gMTA7XG4gICAgICAgIHdoaWxlKGk+NSlcbiAgICAgICAgICAgIGkgPSBpIC0gMTtcblxuICAgICAgICBzeXNjYWxsIFwiaXMud29ya2Zsb3cuYWN0aW9ucy5zaG93cmVzdWx0XCI7XG4gICAgYDtcblxuICAgIGNvbnNvbGUubG9nKGVuY29kZVVSSUNvbXBvbmVudChfKSk7XG5cbiAgICBjb25zdCBzb3VyY2UgPSBfOyAvL3NvdXJjZUNvZGU7XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gc291cmNlIGNvZGUgZm91bmQgaW4gcXVlcnkgcGFyYW1zLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGF0dXMsIGludGVycnVwdCwgc2F2ZSB9ID0gaW50ZXJwcmV0KHNvdXJjZSk7XG5cbiAgICBpZiAoc3RhdHVzID09PSBWTVN0YXR1cy5JTlRFUlBSRVRfSU5URVJSVVBUKSB7XG4gICAgICAgIGRvY3VtZW50LndyaXRlKHNhdmUpO1xuICAgIH1cbn07XG5cbmNvbnN0IHJlc3VtZSA9IChzdGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgLypjb25zdCB2bSA9IFZNLmxvYWQoc3RhdGUpO1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHNvdXJjZSBjb2RlIGZvdW5kIGluIHF1ZXJ5IHBhcmFtcy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RhdHVzLCBpbnRlcnJ1cHQsIHNhdmUgfSA9IGludGVycHJldChzb3VyY2UpOyovXG59O1xuXG4oKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IHBhcmFtcy5nZXQoJ3Jlc3VtZScpO1xuICAgIGNvbnN0IHNvdXJjZUNvZGUgPSBwYXJhbXMuZ2V0KCdiZWdpbicpO1xuXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHJlc3VtZShzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNvdXJjZUNvZGUpIHtcbiAgICAgICAgYmVnaW4oc291cmNlQ29kZSk7XG4gICAgfVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=