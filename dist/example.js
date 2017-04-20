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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Vector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = exports.Vector = function () {
    function Vector() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Vector);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector, [{
        key: 'set',
        value: function set(x, y) {
            this.x = x;
            this.y = y;

            return this;
        }
    }, {
        key: 'length',
        value: function length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }, {
        key: 'add',
        value: function add(vector) {
            this.x += vector.x;
            this.y += vector.y;

            return this;
        }
    }, {
        key: 'normalize',
        value: function normalize() {
            var length = this.length();
            if (length !== 0) {
                this.x /= length;
                this.y /= length;
            }

            return this;
        }
    }, {
        key: 'rotate',
        value: function rotate(angle) {
            var _ref = [Math.sin(angle), Math.cos(angle)],
                sin = _ref[0],
                cos = _ref[1];

            var tmpX = this.x;
            this.x = this.x * cos - this.y * sin;
            this.y = tmpX * sin + this.y * cos;

            return this;
        }
    }, {
        key: 'angle',
        value: function angle() {
            return Math.atan2(this.y, this.x);
        }
    }, {
        key: 'cut',
        value: function cut(size) {
            var length = this.length();
            if (length > size) {
                this.scaleTo(size);
            }

            return this;
        }
    }, {
        key: 'scaleTo',
        value: function scaleTo() {
            var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            return this.normalize().scale(size);
        }
    }, {
        key: 'subtract',
        value: function subtract(vector) {
            this.x -= vector.x;
            this.y -= vector.y;

            return this;
        }
    }, {
        key: 'distance',
        value: function distance(vector) {
            var dx = this.x - vector.x;
            var dy = this.y - vector.y;

            return Math.sqrt(dx * dx + dy * dy);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            this.x = -this.x;
            this.y = -this.y;

            return this;
        }
    }, {
        key: 'scale',
        value: function scale(size) {
            this.x *= size;
            this.y *= size;

            return this;
        }
    }, {
        key: 'copy',
        value: function copy() {
            return new Vector(this.x, this.y);
        }
    }, {
        key: 'vectorScale',
        value: function vectorScale(vector) {
            this.x *= vector.x;
            this.y *= vector.y;

            return this;
        }
    }], [{
        key: 'random',
        value: function random(minX, maxX, minY, maxY) {
            return new Vector(_utils.Utils.random(minX, maxX), _utils.Utils.random(minY, maxY));
        }
    }, {
        key: 'polar',
        value: function polar() {
            var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return new Vector(Math.cos(angle) * length, Math.sin(angle) * length);
        }
    }, {
        key: 'randomPolar',
        value: function randomPolar() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var minAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var maxAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.PI * 2;

            return Vector.polar(_utils.Utils.random(minAngle, maxAngle), length);
        }
    }]);

    return Vector;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = exports.Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: "random",
        value: function random() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return Math.random() * (max - min) + min;
        }
    }, {
        key: "randomArray",
        value: function randomArray(array) {
            return array[Math.floor(this.random(0, array.length))];
        }
    }, {
        key: "range",
        value: function range(size, handler) {
            return Array.from(Array(Math.round(size)).keys()).map(handler);
        }
    }, {
        key: "filterSet",
        value: function filterSet(set, predicate) {
            set.forEach(function (element) {
                if (!predicate(element)) {
                    set.delete(element);
                }
            });

            return set;
        }
    }]);

    return Utils;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _engine = __webpack_require__(5);

Object.keys(_engine).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _engine[key];
    }
  });
});

var _eventManager = __webpack_require__(6);

Object.keys(_eventManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _eventManager[key];
    }
  });
});

var _gameObject = __webpack_require__(3);

Object.keys(_gameObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gameObject[key];
    }
  });
});

var _instancePool = __webpack_require__(4);

Object.keys(_instancePool).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _instancePool[key];
    }
  });
});

var _parallax = __webpack_require__(7);

Object.keys(_parallax).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parallax[key];
    }
  });
});

var _primitives = __webpack_require__(8);

Object.keys(_primitives).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _primitives[key];
    }
  });
});

var _renderer = __webpack_require__(9);

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

var _scene = __webpack_require__(10);

Object.keys(_scene).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scene[key];
    }
  });
});

var _utils = __webpack_require__(1);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _vector = __webpack_require__(0);

Object.keys(_vector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vector[key];
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = exports.GameObject = function () {
    function GameObject(config) {
        _classCallCheck(this, GameObject);

        this.set(config);
    }

    _createClass(GameObject, [{
        key: 'set',
        value: function set() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$position = _ref.position,
                position = _ref$position === undefined ? new _vector.Vector() : _ref$position,
                _ref$style = _ref.style,
                style = _ref$style === undefined ? { color: '#f00' } : _ref$style,
                _ref$velocityDamping = _ref.velocityDamping,
                velocityDamping = _ref$velocityDamping === undefined ? 1 : _ref$velocityDamping,
                _ref$velocity = _ref.velocity,
                velocity = _ref$velocity === undefined ? new _vector.Vector() : _ref$velocity,
                _ref$rotation = _ref.rotation,
                rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
                _ref$rotationCenter = _ref.rotationCenter,
                rotationCenter = _ref$rotationCenter === undefined ? position : _ref$rotationCenter,
                _ref$size = _ref.size,
                size = _ref$size === undefined ? 1 : _ref$size;

            this.position = position;
            this.velocity = velocity;
            this.velocityDamping = velocityDamping;
            this.style = style;
            this.size = size;

            this.rotation = rotation;
            this.rotationCenter = rotationCenter;
            this.dead = false;
        }
    }, {
        key: 'alive',
        value: function alive() {
            return !this.dead;
        }
    }, {
        key: 'render',
        value: function render(renderer) {}
    }, {
        key: 'update',
        value: function update(context) {
            this.updateVelocity(context);
            this.updatePosition(context);
        }
    }, {
        key: 'updatePosition',
        value: function updatePosition() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$dt = _ref2.dt,
                dt = _ref2$dt === undefined ? 1 : _ref2$dt;

            this.position.add(this.velocity.copy().scale(dt));
        }
    }, {
        key: 'updateVelocity',
        value: function updateVelocity() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref3$dt = _ref3.dt,
                dt = _ref3$dt === undefined ? 1 : _ref3$dt;

            this.velocity.scale(this.velocityDamping);
        }
    }], [{
        key: 'extend',
        value: function extend(func) {
            this.prototype[func.name] = func;
            return this;
        }
    }]);

    return GameObject;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InstancePool = exports.InstancePool = function () {
    function InstancePool(type) {
        _classCallCheck(this, InstancePool);

        this.type = type;
        this.released = new Set();
        this.allocated = new Set();
    }

    _createClass(InstancePool, [{
        key: "new",
        value: function _new() {
            var instance = undefined;

            for (var _len = arguments.length, config = Array(_len), _key = 0; _key < _len; _key++) {
                config[_key] = arguments[_key];
            }

            if (this.released.size > 0) {
                var _instance;

                instance = this.released.values().next().value;
                (_instance = instance).set.apply(_instance, config);
            } else {
                instance = new (Function.prototype.bind.apply(this.type, [null].concat(config)))();
            }

            this.released.delete(instance);
            this.allocated.add(instance);

            return instance;
        }
    }, {
        key: "release",
        value: function release(instance) {
            if (this.allocated.has(instance)) {
                this.allocated.delete(instance);
                this.released.add(instance);
            }
        }
    }]);

    return InstancePool;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Engine = exports.Engine = function () {
    function Engine(renderer, scene) {
        _classCallCheck(this, Engine);

        this.renderer = renderer;
        this.scene = scene;
    }

    _createClass(Engine, [{
        key: "render",
        value: function render() {
            this.scene.render(this.renderer);
            return this;
        }
    }, {
        key: "update",
        value: function update() {
            this.scene.update();
            return this;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.renderer.clear();
            return this;
        }
    }]);

    return Engine;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = exports.EventManager = function () {
    function EventManager() {
        _classCallCheck(this, EventManager);

        this.container = {};
    }

    _createClass(EventManager, [{
        key: "register",
        value: function register(name, condition) {
            this.container[name] = { condition: condition, handlers: [] };
            return this;
        }
    }, {
        key: "on",
        value: function on(elements, name, executor) {
            if (this.container[name]) {
                this.container[name].handlers.push({ executor: executor, elements: elements });
            }

            return this;
        }
    }, {
        key: "triggerEvents",
        value: function triggerEvents() {
            var _this = this;

            var _loop = function _loop(name) {
                var _container$name = _this.container[name],
                    condition = _container$name.condition,
                    handlers = _container$name.handlers;

                handlers.forEach(function (_ref) {
                    var executor = _ref.executor,
                        elements = _ref.elements;
                    return elements.filter(function (element) {
                        return condition(element);
                    }).forEach(function (element) {
                        return executor(element);
                    });
                });
            };

            for (var name in this.container) {
                _loop(name);
            }
        }
    }]);

    return EventManager;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parallax = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _vector = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallax = exports.Parallax = function () {
    function Parallax() {
        var reference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _vector.Vector();

        _classCallCheck(this, Parallax);

        this.reference = reference;
        this.layers = [];
        this.zoom = 1;
    }

    _createClass(Parallax, [{
        key: 'target',
        value: function target(reference) {
            this.reference = reference;
            return this;
        }
    }, {
        key: 'addLayer',
        value: function addLayer(_ref) {
            var _ref$objects = _ref.objects,
                objects = _ref$objects === undefined ? [] : _ref$objects,
                _ref$depth = _ref.depth,
                depth = _ref$depth === undefined ? 1 : _ref$depth;

            this.layers.push({ objects: new Set(objects), depth: 1 / depth });
            return this;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            var _this = this;

            this.layers.forEach(function (layer) {
                renderer.push({
                    translation: _this.reference.copy().scale(-layer.depth),
                    scale: new _vector.Vector(_this.zoom, _this.zoom)
                });
                layer.objects.forEach(function (object) {
                    return object.render(renderer);
                });
                renderer.pop();
            });
        }
    }, {
        key: 'update',
        value: function update() {
            this.layers.forEach(function (layer) {
                return _utils.Utils.filterSet(layer.objects, function (object) {
                    object.update();
                    return object.alive();
                });
            });
        }
    }]);

    return Parallax;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spawner = exports.Polygon = exports.Fountain = exports.Explosion = exports.SpringyVector = exports.Composite = exports.Rectangle = exports.Circle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _gameObject = __webpack_require__(3);

var _instancePool = __webpack_require__(4);

var _utils = __webpack_require__(1);

var _vector = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = exports.Circle = function (_GameObject) {
    _inherits(Circle, _GameObject);

    function Circle() {
        _classCallCheck(this, Circle);

        return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
    }

    _createClass(Circle, [{
        key: 'set',
        value: function set() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'set', this).call(this, config);
            this.radius = config.radius || 5;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            renderer.circle(this.position, this.radius, this.style);
        }
    }]);

    return Circle;
}(_gameObject.GameObject);

var Rectangle = exports.Rectangle = function (_GameObject2) {
    _inherits(Rectangle, _GameObject2);

    function Rectangle() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Rectangle);

        var _this2 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, config));

        _this2.size = config.size;
        return _this2;
    }

    _createClass(Rectangle, [{
        key: 'render',
        value: function render(renderer) {
            renderer.rectangle(this.position, this.size, this.style);
        }
    }]);

    return Rectangle;
}(_gameObject.GameObject);

var Composite = exports.Composite = function (_GameObject3) {
    _inherits(Composite, _GameObject3);

    function Composite() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Composite);

        var _this3 = _possibleConstructorReturn(this, (Composite.__proto__ || Object.getPrototypeOf(Composite)).call(this, config));

        _this3.items = [];
        return _this3;
    }

    _createClass(Composite, [{
        key: 'add',
        value: function add(_ref) {
            var _ref$offset = _ref.offset,
                offset = _ref$offset === undefined ? new _vector.Vector() : _ref$offset,
                object = _ref.object;

            this.items.push({ object: object, offset: offset });
            return this;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            renderer.push({
                translation: this.position,
                scale: new _vector.Vector(this.size, this.size)
            });
            this.items.forEach(function (_ref2) {
                var object = _ref2.object,
                    offset = _ref2.offset;

                renderer.push({ translation: offset });
                object.render(renderer);
                renderer.pop();
            });
            renderer.pop();
        }
    }, {
        key: 'update',
        value: function update(ctx) {
            _get(Composite.prototype.__proto__ || Object.getPrototypeOf(Composite.prototype), 'update', this).call(this, ctx);
            this.items.forEach(function (_ref3) {
                var object = _ref3.object;
                return object.update(ctx);
            });
        }
    }]);

    return Composite;
}(_gameObject.GameObject);

var SpringyVector = exports.SpringyVector = function (_GameObject4) {
    _inherits(SpringyVector, _GameObject4);

    function SpringyVector() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref4$damping = _ref4.damping,
            damping = _ref4$damping === undefined ? 0.1 : _ref4$damping,
            _ref4$elasticity = _ref4.elasticity,
            elasticity = _ref4$elasticity === undefined ? 0.1 : _ref4$elasticity,
            _ref4$target = _ref4.target,
            target = _ref4$target === undefined ? function () {
            return new _vector.Vector();
        } : _ref4$target,
            _ref4$position = _ref4.position,
            position = _ref4$position === undefined ? new _vector.Vector() : _ref4$position;

        _classCallCheck(this, SpringyVector);

        var _this4 = _possibleConstructorReturn(this, (SpringyVector.__proto__ || Object.getPrototypeOf(SpringyVector)).call(this, { position: position }));

        _this4.target = target;
        _this4.elasticity = elasticity;
        _this4.damping = damping;
        return _this4;
    }

    _createClass(SpringyVector, [{
        key: 'updateVelocity',
        value: function updateVelocity() {
            var dampingForce = this.velocity.copy().scale(this.damping);
            var acceleration = this.target().copy().subtract(this.position).scale(this.elasticity).subtract(dampingForce);

            this.velocity.add(acceleration);
        }
    }]);

    return SpringyVector;
}(_gameObject.GameObject);

var Explosion = exports.Explosion = function (_GameObject5) {
    _inherits(Explosion, _GameObject5);

    function Explosion(config) {
        _classCallCheck(this, Explosion);

        var _this5 = _possibleConstructorReturn(this, (Explosion.__proto__ || Object.getPrototypeOf(Explosion)).call(this, config));

        _this5.particles = [];
        _this5.position = [];
        _this5.config = config;
        _this5.circlesPool = new _instancePool.InstancePool(Circle);
        return _this5;
    }

    _createClass(Explosion, [{
        key: 'fire',
        value: function fire() {
            this.init(this.config);
            return this;
        }
    }, {
        key: 'init',
        value: function init() {
            var _this6 = this;

            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref5$size = _ref5.size,
                size = _ref5$size === undefined ? 2 : _ref5$size,
                _ref5$magnitude = _ref5.magnitude,
                magnitude = _ref5$magnitude === undefined ? 10 : _ref5$magnitude,
                _ref5$style = _ref5.style,
                style = _ref5$style === undefined ? { color: "#f00" } : _ref5$style,
                _ref5$particleSize = _ref5.particleSize,
                particleSize = _ref5$particleSize === undefined ? 20 : _ref5$particleSize,
                _ref5$position = _ref5.position,
                position = _ref5$position === undefined ? new _vector.Vector() : _ref5$position,
                _ref5$fromAngle = _ref5.fromAngle,
                fromAngle = _ref5$fromAngle === undefined ? 0 : _ref5$fromAngle,
                _ref5$toAngle = _ref5.toAngle,
                toAngle = _ref5$toAngle === undefined ? Math.PI * 2 : _ref5$toAngle;

            this.particles = this.particles.concat(_utils.Utils.range(size, function () {
                return _this6.circlesPool.new({
                    style: style, position: position.copy(), radius: particleSize, velocityDamping: 0.97,
                    velocity: _vector.Vector.randomPolar(1, fromAngle, toAngle).scale(_utils.Utils.random(magnitude / 2, magnitude))
                });
            }));
        }
    }, {
        key: 'alive',
        value: function alive() {
            return this.particles.length > 0;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            renderer.push({ rotation: this.rotation });
            this.particles.forEach(function (particle) {
                return particle.render(renderer);
            });
            renderer.pop();
        }
    }, {
        key: 'update',
        value: function update(dt) {
            var _this7 = this;

            this.particles = this.particles.filter(function (particle) {
                particle.radius /= _utils.Utils.random(1.05, 1.1);
                particle.update(dt);

                var alive = particle.radius > 0.5;
                if (!alive) {
                    _this7.circlesPool.release(particle);
                }

                return alive;
            });
        }
    }]);

    return Explosion;
}(_gameObject.GameObject);

var Fountain = exports.Fountain = function (_Explosion) {
    _inherits(Fountain, _Explosion);

    function Fountain(config) {
        _classCallCheck(this, Fountain);

        return _possibleConstructorReturn(this, (Fountain.__proto__ || Object.getPrototypeOf(Fountain)).call(this, config));
    }

    _createClass(Fountain, [{
        key: 'update',
        value: function update(dt) {
            this.fire();
            _get(Fountain.prototype.__proto__ || Object.getPrototypeOf(Fountain.prototype), 'update', this).call(this, dt);
        }
    }]);

    return Fountain;
}(Explosion);

var Polygon = exports.Polygon = function (_GameObject6) {
    _inherits(Polygon, _GameObject6);

    function Polygon() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Polygon);

        var _this9 = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, config));

        _this9.points = config.points || [];
        _this9.emissions = [];
        return _this9;
    }

    _createClass(Polygon, [{
        key: 'render',
        value: function render(renderer) {
            renderer.push({ translation: this.position, rotation: this.rotation });
            renderer.polygon(this.points, this.size, this.style);
            renderer.pop();
        }
    }]);

    return Polygon;
}(_gameObject.GameObject);

var Spawner = exports.Spawner = function () {
    function Spawner() {
        var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return false;
        };
        var creator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            return [];
        };

        _classCallCheck(this, Spawner);

        this.creator = creator;
        this.condition = condition;
        this.items = [];
    }

    _createClass(Spawner, [{
        key: 'update',
        value: function update(context) {
            if (this.condition(this.items.length)) {
                var _items;

                (_items = this.items).push.apply(_items, _toConsumableArray(this.creator()));
            }

            this.items = this.items.filter(function (item) {
                item.update(context);
                return item.alive();
            });
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            this.items.forEach(function (item) {
                return item.render(renderer);
            });
        }
    }, {
        key: 'alive',
        value: function alive() {
            return true;
        }
    }]);

    return Spawner;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = exports.CanvasRenderer = function () {
    function CanvasRenderer(ctx, width, height) {
        _classCallCheck(this, CanvasRenderer);

        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    _createClass(CanvasRenderer, [{
        key: "transform",
        value: function transform(transformation, transformedRendering) {
            this.push(transformation);
            transformedRendering();
            this.pop();
        }
    }, {
        key: "push",
        value: function push() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$scale = _ref.scale,
                scale = _ref$scale === undefined ? new _vector.Vector(1, 1) : _ref$scale,
                _ref$rotation = _ref.rotation,
                rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
                _ref$translation = _ref.translation,
                translation = _ref$translation === undefined ? new _vector.Vector() : _ref$translation;

            this.ctx.save();
            this.ctx.scale(scale.x, scale.y);
            this.ctx.rotate(rotation);
            this.ctx.translate(translation.x, translation.y);
        }
    }, {
        key: "pop",
        value: function pop() {
            this.ctx.restore();
        }
    }, {
        key: "circle",
        value: function circle(position, radius, _ref2) {
            var color = _ref2.color,
                _ref2$opacity = _ref2.opacity,
                opacity = _ref2$opacity === undefined ? 1 : _ref2$opacity;

            // this.ctx.shadowColor = color;
            // this.ctx.shadowBlur = 50;

            this.ctx.fillStyle = color;
            this.ctx.globalAlpha = opacity;
            this.ctx.beginPath();
            this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.fill();
        }
    }, {
        key: "rectangle",
        value: function rectangle(position, size, _ref3) {
            var color = _ref3.color,
                _ref3$opacity = _ref3.opacity,
                opacity = _ref3$opacity === undefined ? 1 : _ref3$opacity;

            this.ctx.fillStyle = color;
            this.ctx.globalAlpha = opacity;
            this.ctx.fillRect(position.x - size.width / 2, position.y - size.height / 2, size.width, size.height);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.ctx.fillStyle = "rgba(0,0,0,1)";
            this.ctx.globalAlpha = 1;
            this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        }
    }, {
        key: "polygon",
        value: function polygon(points) {
            var _this = this;

            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var _ref4 = arguments[2];
            var color = _ref4.color,
                _ref4$opacity = _ref4.opacity,
                opacity = _ref4$opacity === undefined ? 1 : _ref4$opacity;

            if (points.length > 2) {
                this.ctx.beginPath();
                this.ctx.fillStyle = color;
                this.ctx.globalAlpha = opacity;
                this.ctx.moveTo(points[0].x * size, points[0].y * size);
                points.forEach(function (point) {
                    _this.ctx.lineTo(point.x * size, point.y * size);
                });
                this.ctx.closePath();
                this.ctx.fill();
            }
        }
    }]);

    return CanvasRenderer;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = exports.Scene = function () {
    function Scene() {
        _classCallCheck(this, Scene);

        this.container = [];
    }

    _createClass(Scene, [{
        key: "add",
        value: function add() {
            for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
                objects[_key] = arguments[_key];
            }

            this.container = this.container.concat(objects);
            return this;
        }
    }, {
        key: "render",
        value: function render(renderer) {
            this.container.forEach(function (object) {
                return object.render && object.render(renderer);
            });
        }
    }, {
        key: "update",
        value: function update(params) {
            this.container = this.container.filter(function (object) {
                if (object.update) {
                    object.update(params);
                    if (typeof object.alive !== "undefined") {
                        return object.alive();
                    }

                    return true;
                }
            });
        }
    }]);

    return Scene;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = exports.colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _engine = __webpack_require__(2);

var _io = __webpack_require__(16);

var _player = __webpack_require__(17);

var _asteroidField = __webpack_require__(13);

var _environment = __webpack_require__(15);

var _controller = __webpack_require__(14);

var init = function init(canvas) {
    var _ref3;

    var _ref = (_ref3 = [window.innerWidth, window.innerHeight], canvas.width = _ref3[0], canvas.height = _ref3[1], _ref3),
        _ref2 = _slicedToArray(_ref, 2),
        width = _ref2[0],
        height = _ref2[1];

    var ctx = canvas.getContext('2d');
    ctx.translate(width / 2, height / 2);
    ctx.scale(1.05, -1.05);

    var io = new _io.IO(width, height);
    var renderer = new _engine.CanvasRenderer(ctx, width, height);
    var scene = new _engine.Scene();
    var engine = new _engine.Engine(renderer, scene);

    var controller = new _controller.Controller(io, width, height);
    var player = new _player.Player(controller);
    var camera = new _engine.SpringyVector({
        position: new _engine.Vector(0, 50), elasticity: 0.08, damping: 0.3,
        target: function target() {
            return player.position.copy().add(player.velocity.copy().scale(3));
        }
    });

    var parallax = new _engine.Parallax(camera.position);
    var environment = new _environment.Environment(camera, width, height);

    io.onMouse(function () {
        return player.speed = 5;
    }, function () {
        return player.speed = 0;
    });
    environment.container.forEach(function (layer) {
        return parallax.addLayer({ depth: layer.depth, objects: layer.objects });
    });
    parallax.addLayer({ objects: [player, new _asteroidField.AsteroidField(player, Math.max(width, height))] });
    scene.add(parallax, controller, camera);

    window.cancelAnimationFrame(animationFrame);
    (function animation() {
        engine.clear().render().update();
        environment.outOfBounds();

        parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

        animationFrame = window.requestAnimationFrame(animation);
    })();
};

var animationFrame = undefined,
    canvas = document.getElementById('canvas');

init(canvas);
// window.onresize = () => init(canvas);
// canvas.onclick = () => {
//     (canvas.requestFullScreen ||
//         canvas.webkitRequestFullScreen ||
//         canvas.mozRequestFullScreen ||
//         canvas.msRequestFullScreen).call(canvas);
// }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsteroidField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(2);

var _config = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsteroidField = exports.AsteroidField = function () {
    function AsteroidField(player, radius) {
        var _this = this;

        _classCallCheck(this, AsteroidField);

        var numAsteroids = 15;
        this.alive = function () {
            return true;
        };
        this.radius = radius;
        this.player = player;
        this.asteroids = _engine.Utils.range(numAsteroids, function () {
            var size = _engine.Utils.random(10, 40);
            return new _engine.Polygon({
                position: _this.randomAsteroidPosition(),
                style: { color: _this.randomAsteroidColor() },
                velocity: _engine.Vector.random(-0.5, 0.5, -0.5, 0.5), size: size,
                points: _this.randomAsteroidShape()
            });
        });

        this.explosions = [];
        this.explosionSpawner = new _engine.Spawner(function () {
            return _this.explosions.length > 0;
        }, function () {
            return _this.explosions.splice(0, _this.explosions.length);
        });
    }

    _createClass(AsteroidField, [{
        key: 'randomAsteroidPosition',
        value: function randomAsteroidPosition() {
            return this.player.position.copy().add(_engine.Vector.polar(_engine.Utils.random(0, Math.PI * 2), this.radius / 2 + 20));
        }
    }, {
        key: 'randomAsteroidShape',
        value: function randomAsteroidShape() {
            var segments = 5;
            return _engine.Utils.range(segments, function (segment) {
                return _engine.Vector.polar(segment / segments * Math.PI * 2, _engine.Utils.random(0.5, 1));
            });
        }
    }, {
        key: 'randomAsteroidColor',
        value: function randomAsteroidColor() {
            return _engine.Utils.randomArray(_config.colors);
        }
    }, {
        key: 'update',
        value: function update(ctx) {
            var _this2 = this;

            var playerSpeed = this.player.velocity.length();
            this.asteroids.forEach(function (asteroid) {
                asteroid.update(ctx);
                var distance = _this2.player.position.distance(asteroid.position);

                if (distance < asteroid.size && _this2.player.size > 0) {
                    if (_this2.player.color != asteroid.style.color) {
                        _this2.player.kill();
                    } else {
                        _this2.player.color = _this2.randomAsteroidColor();
                        _this2.explosions.push(new _engine.Explosion({
                            position: asteroid.position, size: asteroid.size,
                            particleSize: asteroid.size / 1.5, style: { color: asteroid.style.color },
                            magnitude: (asteroid.size + playerSpeed + asteroid.velocity.length()) / 5
                        }).fire());
                    }
                }
                if ((distance < asteroid.size || distance > _this2.radius / 2 + 50) && _this2.player.size > 0) {
                    asteroid.position = _this2.randomAsteroidPosition();
                    asteroid.points = _this2.randomAsteroidShape();
                    asteroid.style.color = _this2.randomAsteroidColor();
                }
            });

            this.explosionSpawner.update(ctx);
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            this.asteroids.forEach(function (asteroid) {
                return asteroid.render(renderer);
            });
            this.explosionSpawner.render(renderer);
        }
    }]);

    return AsteroidField;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
    function Controller(io, width, height) {
        _classCallCheck(this, Controller);

        this.radius = Math.min(width, height) / 6;
        this.color = 'red';
        this.center = new _engine.Vector(-width / 2 + this.radius + 45, -height / 2 + this.radius + 45);
        this.direction = new _engine.Vector();

        this.controllerSpring = new _engine.SpringyVector({
            elasticity: 0.1,
            damping: 0.5,
            target: function target() {
                return io.mouse;
            }
        });
        this.bigCircle = new _engine.Circle({
            radius: this.radius,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
        this.smallCircle = new _engine.Circle({
            radius: this.radius / 1.5,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render(renderer) {
            this.bigCircle.render(renderer);
            this.smallCircle.render(renderer);
        }
    }, {
        key: 'update',
        value: function update() {
            this.bigCircle.style.color = this.color;
            this.smallCircle.style.color = this.color;
            this.controllerSpring.update();

            this.direction = this.controllerSpring.position.copy().subtract(this.center).cut(this.radius / 2);
            this.smallCircle.position = this.center.copy().add(this.direction);
        }
    }]);

    return Controller;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(2);

var _config = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
    function Environment(camera, width, height) {
        _classCallCheck(this, Environment);

        this.camera = camera;
        this.width = width;
        this.height = height;

        this.container = [{ objects: this.circleGenerator(10, { size: 4 }), depth: 0.8 }, { objects: this.circleGenerator(10, { size: 3 }), depth: 0.9 }, { objects: this.circleGenerator(10, { size: 2 }), depth: 1.1 }, { objects: this.circleGenerator(10, { size: 1 }), depth: 1.2 }];
    }

    _createClass(Environment, [{
        key: 'circleGenerator',
        value: function circleGenerator(count) {
            var _this = this;

            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                size = _ref.size;

            return _engine.Utils.range(count, function () {
                return new _engine.Circle({
                    position: _engine.Vector.random(-_this.width / 2, _this.width / 2, -_this.height / 2, _this.height / 2),
                    radius: _engine.Utils.random(1, size), style: { color: _engine.Utils.randomArray(_config.colors), opacity: 0.6 }
                });
            });
        }
    }, {
        key: 'outOfBounds',
        value: function outOfBounds() {
            var _this2 = this;

            this.container.forEach(function (layer) {
                layer.objects.forEach(function (element) {
                    var cameraPos = _this2.camera.position.copy().scale(1 / layer.depth);

                    if (cameraPos.x - element.position.x > _this2.width / 2) {
                        element.position.x = cameraPos.x + _this2.width / 2 - (cameraPos.x - element.position.x) % (_this2.width / 2);
                    }
                    if (element.position.x - cameraPos.x > _this2.width / 2) {
                        element.position.x = cameraPos.x - _this2.width / 2 + (cameraPos.x - element.position.x) % (_this2.width / 2);
                    }

                    if (cameraPos.y - element.position.y > _this2.height / 2) {
                        element.position.y = cameraPos.y + _this2.height - (cameraPos.y - element.position.y) % _this2.height;
                    }
                    if (element.position.y - cameraPos.y > _this2.height / 2) {
                        element.position.y = cameraPos.y + (cameraPos.y - element.position.y) % _this2.height;
                    }
                });
            });
        }
    }]);

    return Environment;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IO = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IO = exports.IO = function () {
    function IO(width, height) {
        _classCallCheck(this, IO);

        this.width = width;
        this.height = height;
        this.mouse = new _engine.Vector(0, 300);

        this.keyHandlers = {};
        this.keyStates = {};

        this.bindEvents();
    }

    _createClass(IO, [{
        key: 'callHandlers',
        value: function callHandlers() {
            for (var name in this.keyHandlers) {
                if (this.keyStates[name]) {
                    this.keyHandlers[name].handler();
                } else {
                    this.keyHandlers[name].reverseHandler && this.keyHandlers[name].reverseHandler();
                }
            }
        }
    }, {
        key: 'onMouse',
        value: function onMouse(downHandler, upHandler) {
            window.addEventListener('mousedown', downHandler);
            window.addEventListener('mouseup', upHandler);

            window.addEventListener('touchstart', downHandler);
            window.addEventListener('touchend', upHandler);

            return this;
        }
    }, {
        key: 'onKey',
        value: function onKey(key, handler, reverseHandler) {
            this.keyHandlers[key] = { handler: handler, reverseHandler: reverseHandler };
            return this;
        }
    }, {
        key: 'changeTouch',
        value: function changeTouch(_ref) {
            var changedTouches = _ref.changedTouches;

            this.mouse.set(changedTouches[0].pageX - this.width / 2, -changedTouches[0].pageY + this.height / 2);
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            window.addEventListener('mousemove', function (_ref2) {
                var x = _ref2.x,
                    y = _ref2.y;
                return _this.mouse.set(x - _this.width / 2, -y + _this.height / 2);
            });

            window.addEventListener('touchmove', function (e) {
                return _this.changeTouch(e);
            });
            window.addEventListener('touchstart', function (e) {
                return _this.changeTouch(e);
            });

            window.addEventListener('mousedown', function (_ref3) {
                var x = _ref3.x,
                    y = _ref3.y;
                return _this.mouseDown = true;
            });
            window.addEventListener('mouseup', function (_ref4) {
                var x = _ref4.x,
                    y = _ref4.y;
                return _this.mouseDown = false;
            });

            window.addEventListener('keydown', function (_ref5) {
                var key = _ref5.key;
                return _this.keyStates[key] = true;
            });
            window.addEventListener('keyup', function (_ref6) {
                var key = _ref6.key;
                return _this.keyStates[key] = false;
            });
        }
    }]);

    return IO;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _engine = __webpack_require__(2);

var _config = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Composite) {
    _inherits(Player, _Composite);

    function Player(controller) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

        _this.controller = controller;
        _this.fuel = new _engine.Fountain({ particleSize: 4, style: { opacity: 0.2 },
            fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        _this.ship = new _engine.Polygon({ points: [new _engine.Vector(-5, 0), new _engine.Vector(0, -3), new _engine.Vector(5, 0), new _engine.Vector(0, 15)] });
        _this.speed = 0;
        _this.color = _engine.Utils.randomArray(_config.colors);

        _this.add({ object: _this.fuel });
        _this.add({ object: _this.ship });

        _this.explosions = [];
        _this.explosionSpawner = new _engine.Spawner(function () {
            return _this.explosions.length > 0;
        }, function () {
            return _this.explosions.splice(0, _this.explosions.length);
        });
        return _this;
    }

    _createClass(Player, [{
        key: 'kill',
        value: function kill() {
            this.explosions.push(new _engine.Explosion({
                position: this.position, size: 30, particleSize: 20,
                style: { color: this.color }, magnitude: 5
            }).fire());
            // this.size = 0;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            this.explosionSpawner.render(renderer);
            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'render', this).call(this, renderer);
        }
    }, {
        key: 'update',
        value: function update(ctx) {
            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this, ctx);
            this.explosionSpawner.update(ctx);

            this.ship.style.color = this.color;
            this.fuel.style.color = this.color;
            this.controller.color = this.color;

            var forwardAngle = this.controller.direction.angle() + Math.PI;
            this.ship.rotation = forwardAngle + Math.PI / 2;
            this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
            this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
            this.fuel.config.magnitude = this.speed / 1.5;
            this.fuel.config.size = this.speed / 1.5;

            this.velocity.add(this.controller.direction.copy().scale(1 / 3000 * this.speed));
            if (this.velocity.length() > 2.5) {
                this.velocity.scaleTo(2.5);
            }
        }
    }]);

    return Player;
}(_engine.Composite);

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIxNzk2MjBjOThiMDZmNzllYzgiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJhcnJheSIsImZsb29yIiwiaGFuZGxlciIsIkFycmF5IiwiZnJvbSIsInJvdW5kIiwia2V5cyIsIm1hcCIsInNldCIsInByZWRpY2F0ZSIsImZvckVhY2giLCJlbGVtZW50IiwiZGVsZXRlIiwiR2FtZU9iamVjdCIsImNvbmZpZyIsInBvc2l0aW9uIiwic3R5bGUiLCJjb2xvciIsInZlbG9jaXR5RGFtcGluZyIsInZlbG9jaXR5Iiwicm90YXRpb24iLCJyb3RhdGlvbkNlbnRlciIsImRlYWQiLCJyZW5kZXJlciIsImNvbnRleHQiLCJ1cGRhdGVWZWxvY2l0eSIsInVwZGF0ZVBvc2l0aW9uIiwiZHQiLCJhZGQiLCJjb3B5IiwiZnVuYyIsInByb3RvdHlwZSIsIm5hbWUiLCJJbnN0YW5jZVBvb2wiLCJ0eXBlIiwicmVsZWFzZWQiLCJTZXQiLCJhbGxvY2F0ZWQiLCJpbnN0YW5jZSIsInVuZGVmaW5lZCIsInZhbHVlcyIsIm5leHQiLCJ2YWx1ZSIsImhhcyIsIkVuZ2luZSIsInNjZW5lIiwicmVuZGVyIiwidXBkYXRlIiwiY2xlYXIiLCJFdmVudE1hbmFnZXIiLCJjb250YWluZXIiLCJjb25kaXRpb24iLCJoYW5kbGVycyIsImVsZW1lbnRzIiwiZXhlY3V0b3IiLCJwdXNoIiwiZmlsdGVyIiwiUGFyYWxsYXgiLCJyZWZlcmVuY2UiLCJsYXllcnMiLCJ6b29tIiwib2JqZWN0cyIsImRlcHRoIiwidHJhbnNsYXRpb24iLCJsYXllciIsIm9iamVjdCIsInBvcCIsImZpbHRlclNldCIsImFsaXZlIiwiQ2lyY2xlIiwicmFkaXVzIiwiY2lyY2xlIiwiUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5nZSIsIm5ldyIsInJhbmRvbVBvbGFyIiwicGFydGljbGUiLCJyZWxlYXNlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtYXRpb24iLCJ0cmFuc2Zvcm1lZFJlbmRlcmluZyIsInNhdmUiLCJyb3RhdGUiLCJ0cmFuc2xhdGUiLCJyZXN0b3JlIiwib3BhY2l0eSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiYXJjIiwiY2xvc2VQYXRoIiwiZmlsbCIsImZpbGxSZWN0IiwibW92ZVRvIiwibGluZVRvIiwicG9pbnQiLCJTY2VuZSIsInBhcmFtcyIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwib3V0T2ZCb3VuZHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXN0ZXJvaWRGaWVsZCIsIm51bUFzdGVyb2lkcyIsImFzdGVyb2lkcyIsInJhbmRvbUFzdGVyb2lkUG9zaXRpb24iLCJyYW5kb21Bc3Rlcm9pZENvbG9yIiwicmFuZG9tQXN0ZXJvaWRTaGFwZSIsImV4cGxvc2lvbnMiLCJleHBsb3Npb25TcGF3bmVyIiwic3BsaWNlIiwic2VnbWVudHMiLCJzZWdtZW50IiwicmFuZG9tQXJyYXkiLCJwbGF5ZXJTcGVlZCIsImFzdGVyb2lkIiwiZGlzdGFuY2UiLCJraWxsIiwiQ29udHJvbGxlciIsImNlbnRlciIsImRpcmVjdGlvbiIsImNvbnRyb2xsZXJTcHJpbmciLCJtb3VzZSIsImJpZ0NpcmNsZSIsInNtYWxsQ2lyY2xlIiwiY3V0IiwiRW52aXJvbm1lbnQiLCJjaXJjbGVHZW5lcmF0b3IiLCJjb3VudCIsImNhbWVyYVBvcyIsIklPIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJlIiwiY2hhbmdlVG91Y2giLCJtb3VzZURvd24iLCJQbGF5ZXIiLCJmdWVsIiwic2hpcCIsImZvcndhcmRBbmdsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztJQUdhQSxNLFdBQUFBLE07QUFFVCxzQkFBMEI7QUFBQSxZQUFkQyxDQUFjLHVFQUFWLENBQVU7QUFBQSxZQUFQQyxDQUFPLHVFQUFILENBQUc7O0FBQUE7O0FBQ3RCLGFBQUtELENB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QUFrQztBQUM5QixxQkFBSzJDLFFBQUwsQ0FBY3BDLE9BQWQsQ0FBc0IsR0FBdEI7QUFDSDtBQUNKIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiYjE3OTYyMGM5OGIwNmY3OWVjOCIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBzZXQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cblxuICAgIGFkZCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGUoYW5nbGUpIHtcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGNvcyAtIHRoaXMueSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhbmdsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIGN1dChzaXplKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBpZiAobGVuZ3RoID4gc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcbiAgICB9XG5cbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54IC09IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlKHNpemUpIHtcbiAgICAgICAgdGhpcy54ICo9IHNpemU7XG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFV0aWxzLnJhbmRvbShtaW5YLCBtYXhYKSwgVXRpbHMucmFuZG9tKG1pblksIG1heFkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9sYXIoYW5nbGUgPSAwLCBsZW5ndGggPSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdmVjdG9yLmpzIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcblxuICAgIHN0YXRpYyByYW5kb20obWluID0gMCwgbWF4ID0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21BcnJheSAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5nZShzaXplLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KE1hdGgucm91bmQoc2l6ZSkpLmtleXMoKSkubWFwKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaWx0ZXJTZXQoc2V0LCBwcmVkaWNhdGUpIHtcbiAgICAgICAgc2V0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHNldC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdXRpbHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50LW1hbmFnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgKiBmcm9tICcuL3ByaW1pdGl2ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL3NjZW5lJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luZGV4LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cblxuICAgIHNldCh7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxuICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxuICAgICAgICBzaXplID0gMVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMucm90YXRpb25DZW50ZXIgPSByb3RhdGlvbkNlbnRlcjtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XG5cbiAgICB1cGRhdGUoY29udGV4dCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uKHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5wcm90b3R5cGVbZnVuYy5uYW1lXSA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2dhbWUtb2JqZWN0LmpzIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlUG9vbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0KC4uLmNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQuYWRkKGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcmVsZWFzZShpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hbGxvY2F0ZWQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2VuZ2luZS5qcyIsImV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy56b29tID0gMTtcbiAgICB9XG5cbiAgICB0YXJnZXQocmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAxIC8gZGVwdGggfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnJlZmVyZW5jZS5jb3B5KCkuc2NhbGUoLWxheWVyLmRlcHRoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBzZXQoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcbiAgICAgICAgcmVuZGVyZXIuY2lyY2xlKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBvYmplY3QsIG9mZnNldCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xuICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnNpemUsIHRoaXMuc2l6ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QsIG9mZnNldCB9KSA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IG9mZnNldCB9KTtcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHsgb2JqZWN0IH0pID0+IG9iamVjdC51cGRhdGUoY3R4KSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpbmd5VmVjdG9yIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGRhbXBpbmcgPSAwLjEsXG4gICAgICAgIGVsYXN0aWNpdHkgPSAwLjEsXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKClcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuZWxhc3RpY2l0eSA9IGVsYXN0aWNpdHk7XG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XG4gICAgICAgIGxldCBkYW1waW5nRm9yY2UgPSB0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSh0aGlzLmRhbXBpbmcpO1xuICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy50YXJnZXQoKVxuICAgICAgICAgICAgLmNvcHkoKVxuICAgICAgICAgICAgLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5lbGFzdGljaXR5KVxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQoYWNjZWxlcmF0aW9uKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wgPSBuZXcgSW5zdGFuY2VQb29sKENpcmNsZSk7XG4gICAgfVxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdCh7XG4gICAgICAgIHNpemUgPSAyLFxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiBcIiNmMDBcIiB9LFxuICAgICAgICBwYXJ0aWNsZVNpemUgPSAyMCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIGZyb21BbmdsZSA9IDAsXG4gICAgICAgIHRvQW5nbGUgPSBNYXRoLlBJICogMixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5jb25jYXQoVXRpbHMucmFuZ2Uoc2l6ZSwgKCkgPT4gdGhpcy5jaXJjbGVzUG9vbC5uZXcoe1xuICAgICAgICAgICAgc3R5bGUsIHBvc2l0aW9uOiBwb3NpdGlvbi5jb3B5KCksIHJhZGl1czogcGFydGljbGVTaXplLCB2ZWxvY2l0eURhbXBpbmc6IDAuOTcsXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoVXRpbHMucmFuZG9tKG1hZ25pdHVkZSAvIDIsIG1hZ25pdHVkZSkpXG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHsgcm90YXRpb246IHRoaXMucm90YXRpb24gfSlcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnJhZGl1cyAvPSBVdGlscy5yYW5kb20oMS4wNSwgMS4xKTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZShkdClcblxuICAgICAgICAgICAgbGV0IGFsaXZlID0gcGFydGljbGUucmFkaXVzID4gMC41O1xuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wucmVsZWFzZShwYXJ0aWNsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhbGl2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGb3VudGFpbiBleHRlbmRzIEV4cGxvc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5maXJlKCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XG4gICAgICAgIHRoaXMuZW1pc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24gPSAoKCkgPT4gZmFsc2UpLCBjcmVhdG9yID0gKCgpID0+IFtdKSkge1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi50aGlzLmNyZWF0b3IoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlKGNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVuZGVyKHJlbmRlcmVyKSk7IFxuICAgIH1cblxuICAgIGFsaXZlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9wcmltaXRpdmVzLmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uLCB0cmFuc2Zvcm1lZFJlbmRlcmluZykge1xuICAgICAgICB0aGlzLnB1c2godHJhbnNmb3JtYXRpb24pO1xuICAgICAgICB0cmFuc2Zvcm1lZFJlbmRlcmluZygpO1xuICAgICAgICB0aGlzLnBvcCgpO1xuICAgIH1cblxuICAgIHB1c2goe1xuICAgICAgICBzY2FsZSA9IG5ldyBWZWN0b3IoMSwgMSksXG4gICAgICAgIHJvdGF0aW9uID0gMCxcbiAgICAgICAgdHJhbnNsYXRpb24gPSBuZXcgVmVjdG9yKClcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHJvdGF0aW9uKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRyYW5zbGF0aW9uLngsIHRyYW5zbGF0aW9uLnkpO1xuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGNpcmNsZShwb3NpdGlvbiwgcmFkaXVzLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29sb3I7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSA1MDtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIHJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gc2l6ZS53aWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBzaXplLmhlaWdodCAvIDIsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcG9seWdvbihwb2ludHMsIHNpemUgPSAxLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCAqIHNpemUsIHBvaW50c1swXS55ICogc2l6ZSk7XG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKiBzaXplLCBwb2ludC55ICogc2l6ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XG4gICAgfVxuXG4gICAgYWRkKC4uLm9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyICYmIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAob2JqZWN0LnVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIG9iamVjdC51cGRhdGUocGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5hbGl2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3NjZW5lLmpzIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFsnIzZmNicsICcjZjY2JywgJyM2NmYnLCAnI2ZmMycsICcjM2ZmJywgJyNmM2YnXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvY29uZmlnLmpzIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IsIENhbnZhc1JlbmRlcmVyLCBTY2VuZSxcbiAgICBFbmdpbmUsIFNwcmluZ3lWZWN0b3IsIFBhcmFsbGF4XG59IGZyb20gJ2VuZ2luZSc7XG5cbmltcG9ydCB7IElPIH0gZnJvbSAnLi9pbyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBBc3Rlcm9pZEZpZWxkIH0gZnJvbSAnLi9hc3Rlcm9pZC1maWVsZCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5cblxubGV0IGluaXQgPSAoY2FudmFzKSA9PiB7XG5cbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICBjdHguc2NhbGUoMS4wNSwgLTEuMDUpO1xuXG5cbiAgICBsZXQgaW8gPSBuZXcgSU8od2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIsIHNjZW5lKTtcblxuICAgIGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xuICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRyb2xsZXIpO1xuICAgIGxldCBjYW1lcmEgPSBuZXcgU3ByaW5neVZlY3Rvcih7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxuICAgICAgICB0YXJnZXQ6ICgpID0+IHBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKHBsYXllci52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoMykpXG4gICAgfSk7XG5cbiAgICBsZXQgcGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoY2FtZXJhLnBvc2l0aW9uKTtcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGlvLm9uTW91c2UoKCkgPT4gcGxheWVyLnNwZWVkID0gNSwgKCkgPT4gcGxheWVyLnNwZWVkID0gMCk7XG4gICAgZW52aXJvbm1lbnQuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4gcGFyYWxsYXguYWRkTGF5ZXIoeyBkZXB0aDogbGF5ZXIuZGVwdGgsIG9iamVjdHM6IGxheWVyLm9iamVjdHMgfSkpO1xuICAgIHBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xuICAgIHNjZW5lLmFkZChwYXJhbGxheCwgY29udHJvbGxlciwgY2FtZXJhKTtcblxuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICAgICAgICBlbmdpbmUuY2xlYXIoKS5yZW5kZXIoKS51cGRhdGUoKTtcbiAgICAgICAgZW52aXJvbm1lbnQub3V0T2ZCb3VuZHMoKTtcblxuICAgICAgICBwYXJhbGxheC56b29tID0gNTAgLyAocGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpICogMyArIDMwKTtcblxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9KSgpO1xuXG59O1xuXG5cbmxldCBhbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZCxcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbmluaXQoY2FudmFzKTtcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IGluaXQoY2FudmFzKTtcbi8vIGNhbnZhcy5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICAgIChjYW52YXMucmVxdWVzdEZ1bGxTY3JlZW4gfHxcbi8vICAgICAgICAgY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XG4vLyAgICAgICAgIGNhbnZhcy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuLy8gICAgICAgICBjYW52YXMubXNSZXF1ZXN0RnVsbFNjcmVlbikuY2FsbChjYW52YXMpO1xuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pbmRleC5qcyIsImltcG9ydCB7IFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgVXRpbHMsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEFzdGVyb2lkRmllbGQge1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcbiAgICAgICAgbGV0IG51bUFzdGVyb2lkcyA9IDE1O1xuICAgICAgICB0aGlzLmFsaXZlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmFzdGVyb2lkcyA9IFV0aWxzLnJhbmdlKG51bUFzdGVyb2lkcywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9seWdvbih7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tKC0wLjUsIDAuNSwgLTAuNSwgMC41KSwgc2l6ZSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gNTtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKHNlZ21lbnRzLCBzZWdtZW50ID0+XG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcbiAgICB9XG5cbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIGxldCBwbGF5ZXJTcGVlZCA9IHRoaXMucGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpO1xuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcbiAgICAgICAgICAgIGFzdGVyb2lkLnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5wbGF5ZXIucG9zaXRpb24uZGlzdGFuY2UoYXN0ZXJvaWQucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbG9yICE9IGFzdGVyb2lkLnN0eWxlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFzdGVyb2lkLnBvc2l0aW9uLCBzaXplOiBhc3Rlcm9pZC5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTaXplOiBhc3Rlcm9pZC5zaXplIC8gMS41LCBzdHlsZTogeyBjb2xvcjogYXN0ZXJvaWQuc3R5bGUuY29sb3IgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hZ25pdHVkZTogKGFzdGVyb2lkLnNpemUgKyBwbGF5ZXJTcGVlZCArIGFzdGVyb2lkLnZlbG9jaXR5Lmxlbmd0aCgpKSAvIDVcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlyZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSB8fCBkaXN0YW5jZSA+IHRoaXMucmFkaXVzIC8gMiArIDUwKSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9pbnRzID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKCk7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQuc3R5bGUuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4gYXN0ZXJvaWQucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsImltcG9ydCB7IFZlY3RvciwgQ2lyY2xlLCBTcHJpbmd5VmVjdG9yIH0gZnJvbSAnZW5naW5lJztcblxuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbywgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gNjtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IoLXdpZHRoIC8gMiArIHRoaXMucmFkaXVzICsgNDUsIC1oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMgKyA0NSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZyA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcbiAgICAgICAgICAgIGVsYXN0aWNpdHk6IDAuMSxcbiAgICAgICAgICAgIGRhbXBpbmc6IDAuNSxcbiAgICAgICAgICAgIHRhcmdldDogKCkgPT4gaW8ubW91c2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlID0gbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlID0gbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzIC8gMS41LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5wb3NpdGlvbiA9IHRoaXMuY2VudGVyLmNvcHkoKS5hZGQodGhpcy5kaXJlY3Rpb24pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW1xuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDMgfSksIGRlcHRoOiAwLjkgfSxcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMiB9KSwgZGVwdGg6IDEuMSB9LFxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBjaXJjbGVHZW5lcmF0b3IoY291bnQsIHsgc2l6ZSB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKGNvdW50LCAoKSA9PiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgICAgICAgICByYWRpdXM6IFV0aWxzLnJhbmRvbSgxLCBzaXplKSwgc3R5bGU6IHsgY29sb3I6IFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyksIG9wYWNpdHk6IDAuNiB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvdXRPZkJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbWVyYVBvcyA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkoKS5zY2FsZSgxIC8gbGF5ZXIuZGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54ID4gdGhpcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggKyB0aGlzLndpZHRoIC8gMiAtIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi54IC0gY2FtZXJhUG9zLnggPiB0aGlzLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCAtIHRoaXMud2lkdGggLyAyICsgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55ID4gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24ueSAtIGNhbWVyYVBvcy55ID4gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XG5cblxuZXhwb3J0IGNsYXNzIElPIHtcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5tb3VzZSA9IG5ldyBWZWN0b3IoMCwgMzAwKTtcblxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzID0ge307XG4gICAgICAgIHRoaXMua2V5U3RhdGVzID0ge307XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgY2FsbEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMua2V5SGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0uaGFuZGxlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyICYmIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2UoZG93bkhhbmRsZXIsIHVwSGFuZGxlcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwSGFuZGxlcik7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwSGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25LZXkoa2V5LCBoYW5kbGVyLCByZXZlcnNlSGFuZGxlcikge1xuICAgICAgICB0aGlzLmtleUhhbmRsZXJzW2tleV0gPSB7IGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNoYW5nZVRvdWNoKHsgY2hhbmdlZFRvdWNoZXMgfSkge1xuICAgICAgICB0aGlzLm1vdXNlLnNldChjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLWNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICsgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKHsgeCwgeSB9KSA9PlxuICAgICAgICAgICAgdGhpcy5tb3VzZS5zZXQoeCAtIHRoaXMud2lkdGggLyAyLCAteSArIHRoaXMuaGVpZ2h0IC8gMikpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IGZhbHNlKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gZmFsc2UpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pby5qcyIsImltcG9ydCB7XG4gICAgVmVjdG9yLCBDb21wb3NpdGUsIEZvdW50YWluLCBQb2x5Z29uLFxuICAgIFV0aWxzLCBTcGF3bmVyLCBFeHBsb3Npb25cbn0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5mdWVsID0gbmV3IEZvdW50YWluKHsgcGFydGljbGVTaXplOiA0LCBzdHlsZTogeyBvcGFjaXR5OiAwLjIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BbmdsZTogTWF0aC5QSSAvIDIgKiAzIC0gMC4zLCB0b0FuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgKyAwLjMgfSk7XG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBQb2x5Z29uKHsgcG9pbnRzOiBbbmV3IFZlY3RvcigtNSwgMCksIG5ldyBWZWN0b3IoMCwgLTMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUsIDApLCBuZXcgVmVjdG9yKDAsIDE1KV0gfSk7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcblxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5mdWVsIH0pO1xuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5zaGlwIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xuICAgIH1cblxuICAgIGtpbGwoKSB7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IgfSwgbWFnbml0dWRlOiA1XG4gICAgICAgIH0pLmZpcmUoKSk7XG4gICAgICAgIC8vIHRoaXMuc2l6ZSA9IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTtcblxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmZ1ZWwuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sb3IgPSB0aGlzLmNvbG9yO1xuXG4gICAgICAgIGxldCBmb3J3YXJkQW5nbGUgPSB0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmFuZ2xlKCkgKyBNYXRoLlBJO1xuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5mcm9tQW5nbGUgPSBmb3J3YXJkQW5nbGUgLSAxIC8gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy50b0FuZ2xlID0gZm9yd2FyZEFuZ2xlICsgMSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcubWFnbml0dWRlID0gdGhpcy5zcGVlZCAvIDEuNTtcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5zaXplID0gdGhpcy5zcGVlZCAvIDEuNTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmNvcHkoKS5zY2FsZSgoMSAvIDMwMDApICogdGhpcy5zcGVlZCkpO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS5sZW5ndGgoKSA+IDIuNSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zY2FsZVRvKDIuNSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvcGxheWVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==