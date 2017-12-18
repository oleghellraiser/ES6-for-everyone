/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _src = __webpack_require__(1);

var result = (0, _src.mapAny)([1, 2, 3], function (n) {
    return n + 1;
}, true);
console.log(result);

//===================================

var z = function z() {
    return 'yeeeeeeeah';
};

var x = function x(f) {
    console.log('1');
    console.log(f());
};

var g = function g(f) {
    console.log('2');
    f();
};

var y = function y(f) {
    console.log('3');
    f();
};

var f = function f(_f) {
    console.log('4');
    _f();
};

(0, _src.composeZ)(f, g, z, x, y);

//===================================

var obj1 = { a: '1', b: '2' };
var obj2 = { b: '5', c: '3' };
result = (0, _src.merge)(obj1, obj2);

console.log(result);

//===================================

var input = {
    field: 1,
    obj2: {
        field2: 2
    },
    field3: 3,
    obj3: {
        obj4: {
            obj5: {},
            field: 4
        }
    }
};
result = (0, _src.normalizer)(input);

console.log(result);

//===================================

var func = function func(n, m) {
    return n + m;
};
result = (0, _src.autoCurry)(func);
result = (0, _src.autoCurry)(result);

console.log(result);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _task1_ = __webpack_require__(2);

Object.defineProperty(exports, 'mapAny', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_task1_).default;
  }
});

var _task1_2 = __webpack_require__(3);

Object.defineProperty(exports, 'composeZ', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_task1_2).default;
  }
});

var _task1_3 = __webpack_require__(4);

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_task1_3).default;
  }
});

var _task1_4 = __webpack_require__(5);

Object.defineProperty(exports, 'normalizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_task1_4).default;
  }
});

var _task1_5 = __webpack_require__(6);

Object.defineProperty(exports, 'autoCurry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_task1_5).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mapAny = function mapAny(arg, func, toArray) {
    var result = toArray ? [] : {};

    for (var key in arg) {
        result[key] = func(arg[key]);
    }
    return result;
};

exports.default = mapAny;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var composeZ = function composeZ() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    var initialArray = [];
    var result = void 0;

    while (params.length > 0) {
        initialArray.push(params.shift());
        var rItem = params.pop();
        rItem && initialArray.push(rItem);
    }
    initialArray.reverse();

    while (initialArray.length > 0) {
        var lItem = initialArray.shift();
        result = result && lItem.bind(undefined, result) || lItem;
    }

    return result && result();
};

exports.default = composeZ;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var merge = function merge() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    var obj3 = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            for (var key in item) {
                obj3[key] = item[key];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return obj3;
};

exports.default = merge;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var normalizer = function normalizer(input, shouldNotOverwrite) {
    var output = {};
    var rec = function rec(obj, object_key) {
        for (var key in obj) {
            if (obj[key] && _typeof(obj[key]) === 'object' && Object.keys(obj[key]).length > 0) {
                rec(obj[key], key);
            } else {
                if (shouldNotOverwrite) {
                    output[(object_key ? object_key : '') + '_' + key] = obj[key];
                } else {
                    output[key] = obj[key];
                }
            }
        }
    };

    rec(input);

    return output;
};

exports.default = normalizer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var autoCarry = function autoCarry(func) {
    if (typeof func === 'function') {
        if (func.length === 1) {
            var result = func.call(undefined, Math.floor(Math.random() * 100));
            return result;
        } else {
            var carriedFunc = func.bind(undefined, Math.floor(Math.random() * 100));
            return carriedFunc;
        }
    }
};

exports.default = autoCarry;

/***/ })
/******/ ]);