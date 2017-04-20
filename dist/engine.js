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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIxNzk2MjBjOThiMDZmNzllYzg/NWFlZiIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdmVjdG9yLmpzPzkyYzAiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3V0aWxzLmpzPzkwM2QiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzPzE4MmMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2dhbWUtb2JqZWN0LmpzP2E5MjUiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luc3RhbmNlLXBvb2wuanM/OTc1OCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzP2ZlY2EiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanM/MjdlMSIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcGFyYWxsYXguanM/OTA4MCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcz82ZWVkIiwid2VicGFjazovLy8uL2VuZ2luZS9yZW5kZXJlci5qcz84MTkzIiwid2VicGFjazovLy8uL2VuZ2luZS9zY2VuZS5qcz8wZGQwIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJhcnJheSIsImZsb29yIiwiaGFuZGxlciIsIkFycmF5IiwiZnJvbSIsInJvdW5kIiwia2V5cyIsIm1hcCIsInNldCIsInByZWRpY2F0ZSIsImZvckVhY2giLCJlbGVtZW50IiwiZGVsZXRlIiwiR2FtZU9iamVjdCIsImNvbmZpZyIsInBvc2l0aW9uIiwic3R5bGUiLCJjb2xvciIsInZlbG9jaXR5RGFtcGluZyIsInZlbG9jaXR5Iiwicm90YXRpb24iLCJyb3RhdGlvbkNlbnRlciIsImRlYWQiLCJyZW5kZXJlciIsImNvbnRleHQiLCJ1cGRhdGVWZWxvY2l0eSIsInVwZGF0ZVBvc2l0aW9uIiwiZHQiLCJhZGQiLCJjb3B5IiwiZnVuYyIsInByb3RvdHlwZSIsIm5hbWUiLCJJbnN0YW5jZVBvb2wiLCJ0eXBlIiwicmVsZWFzZWQiLCJTZXQiLCJhbGxvY2F0ZWQiLCJpbnN0YW5jZSIsInVuZGVmaW5lZCIsInZhbHVlcyIsIm5leHQiLCJ2YWx1ZSIsImhhcyIsIkVuZ2luZSIsInNjZW5lIiwicmVuZGVyIiwidXBkYXRlIiwiY2xlYXIiLCJFdmVudE1hbmFnZXIiLCJjb250YWluZXIiLCJjb25kaXRpb24iLCJoYW5kbGVycyIsImVsZW1lbnRzIiwiZXhlY3V0b3IiLCJwdXNoIiwiZmlsdGVyIiwiUGFyYWxsYXgiLCJyZWZlcmVuY2UiLCJsYXllcnMiLCJ6b29tIiwib2JqZWN0cyIsImRlcHRoIiwidHJhbnNsYXRpb24iLCJsYXllciIsIm9iamVjdCIsInBvcCIsImZpbHRlclNldCIsImFsaXZlIiwiQ2lyY2xlIiwicmFkaXVzIiwiY2lyY2xlIiwiUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5nZSIsIm5ldyIsInJhbmRvbVBvbGFyIiwicGFydGljbGUiLCJyZWxlYXNlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtYXRpb24iLCJ0cmFuc2Zvcm1lZFJlbmRlcmluZyIsInNhdmUiLCJyb3RhdGUiLCJ0cmFuc2xhdGUiLCJyZXN0b3JlIiwib3BhY2l0eSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiYXJjIiwiY2xvc2VQYXRoIiwiZmlsbCIsImZpbGxSZWN0IiwibW92ZVRvIiwibGluZVRvIiwicG9pbnQiLCJTY2VuZSIsInBhcmFtcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztJQUdhQSxNLFdBQUFBLE07QUFFVCxzQkFBMEI7QUFBQSxZQUFkQyxDQUFjLHVFQUFWLENBQVU7QUFBQSxZQUFQQyxDQUFPLHVFQUFILENBQUc7O0FBQUE7O0FBQ3RCLGFBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNIOzs7OzRCQUVHRCxDLEVBQUdDLEMsRUFBRztBQUNOLGlCQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxpQkFBS0MsQ0FBTCxHQUFTQSxDQUFUOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7O2lDQUVR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Z2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJiMTc5NjIwYzk4YjA2Zjc5ZWM4IiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIHNldCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgfVxuXG4gICAgYWRkKHZlY3Rvcikge1xuICAgICAgICB0aGlzLnggKz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZShhbmdsZSkge1xuICAgICAgICBsZXQgWyBzaW4sIGNvcyBdID0gWyBNYXRoLnNpbihhbmdsZSksIE1hdGguY29zKGFuZ2xlKSBdO1xuICAgICAgICBsZXQgdG1wWCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICogY29zIC0gdGhpcy55ICogc2luO1xuICAgICAgICB0aGlzLnkgPSB0bXBYICogc2luICsgdGhpcy55ICogY29zO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFuZ2xlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG4gICAgY3V0KHNpemUpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGlmIChsZW5ndGggPiBzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlVG8oc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZVRvKHNpemUgPSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLnNjYWxlKHNpemUpO1xuICAgIH1cblxuICAgIHN1YnRyYWN0KHZlY3Rvcikge1xuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gdmVjdG9yLng7XG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUoc2l6ZSkge1xuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcbiAgICAgICAgdGhpcy55ICo9IHNpemU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuICAgIHZlY3RvclNjYWxlKHZlY3Rvcikge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tKG1pblgsIG1heFgsIG1pblksIG1heFkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pblgsIG1heFgpLCBVdGlscy5yYW5kb20obWluWSwgbWF4WSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoLCBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21Qb2xhcihsZW5ndGggPSAxLCBtaW5BbmdsZSA9IDAsIG1heEFuZ2xlID0gTWF0aC5QSSAqIDIpIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20obWluQW5nbGUsIG1heEFuZ2xlKSwgbGVuZ3RoKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS92ZWN0b3IuanMiLCJleHBvcnQgY2xhc3MgVXRpbHMge1xuXG4gICAgc3RhdGljIHJhbmRvbShtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbUFycmF5IChhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpKV07XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmdlKHNpemUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoTWF0aC5yb3VuZChzaXplKSkua2V5cygpKS5tYXAoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbHRlclNldChzZXQsIHByZWRpY2F0ZSkge1xuICAgICAgICBzZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS91dGlscy5qcyIsImV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc2V0KHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogJyNmMDAnIH0sXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXG4gICAgICAgIHNpemUgPSAxXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB0aGlzLnZlbG9jaXR5RGFtcGluZyA9IHZlbG9jaXR5RGFtcGluZztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKGR0KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsZWFzZWQuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIsIHNjZW5lKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW5kZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZW5naW5lLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihuYW1lLCBjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0gPSB7IGNvbmRpdGlvbiwgaGFuZGxlcnM6IFtdIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uKGVsZW1lbnRzLCBuYW1lLCBleGVjdXRvcikge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdLmhhbmRsZXJzLnB1c2goeyBleGVjdXRvciwgZWxlbWVudHMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0cmlnZ2VyRXZlbnRzKCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBsZXQgeyBjb25kaXRpb24sIGhhbmRsZXJzIH0gPSB0aGlzLmNvbnRhaW5lcltuYW1lXTtcbiAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pID0+XG4gICAgICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGNvbmRpdGlvbihlbGVtZW50KSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBleGVjdXRvcihlbGVtZW50KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgUGFyYWxsYXgge1xuXG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlID0gbmV3IFZlY3RvcigpKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLnpvb20gPSAxO1xuICAgIH1cblxuICAgIHRhcmdldChyZWZlcmVuY2UpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZExheWVyKHsgb2JqZWN0cyA9IFtdLCBkZXB0aCA9IDEgfSkge1xuICAgICAgICB0aGlzLmxheWVycy5wdXNoKHsgb2JqZWN0czogbmV3IFNldChvYmplY3RzKSwgZGVwdGg6IDEgLyBkZXB0aCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZSgtbGF5ZXIuZGVwdGgpLFxuICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuem9vbSwgdGhpcy56b29tKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gVXRpbHMuZmlsdGVyU2V0KGxheWVyLm9iamVjdHMsIG9iamVjdCA9PiB7XG4gICAgICAgICAgICBvYmplY3QudXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9wYXJhbGxheC5qcyIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL2dhbWUtb2JqZWN0JztcbmltcG9ydCB7IEluc3RhbmNlUG9vbCB9IGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIHNldChjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlci5zZXQoY29uZmlnKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xuICAgICAgICByZW5kZXJlci5jaXJjbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMsIHRoaXMuc3R5bGUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGQoeyBvZmZzZXQgPSBuZXcgVmVjdG9yKCksIG9iamVjdCB9KSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogb2Zmc2V0IH0pO1xuICAgICAgICAgICAgb2JqZWN0LnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QgfSkgPT4gb2JqZWN0LnVwZGF0ZShjdHgpKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcbiAgICAgICAgZWxhc3RpY2l0eSA9IDAuMSxcbiAgICAgICAgdGFyZ2V0ID0gKCkgPT4gbmV3IFZlY3RvcigpLFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxuICAgIH0gPSB7fSkge1xuICAgICAgICBzdXBlcih7IHBvc2l0aW9uIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5lbGFzdGljaXR5ID0gZWxhc3RpY2l0eTtcbiAgICAgICAgdGhpcy5kYW1waW5nID0gZGFtcGluZztcbiAgICB9XG5cbiAgICB1cGRhdGVWZWxvY2l0eSgpIHtcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XG4gICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLnRhcmdldCgpXG4gICAgICAgICAgICAuY29weSgpXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmVsYXN0aWNpdHkpXG4gICAgICAgICAgICAuc3VidHJhY3QoZGFtcGluZ0ZvcmNlKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jaXJjbGVzUG9vbCA9IG5ldyBJbnN0YW5jZVBvb2woQ2lyY2xlKTtcbiAgICB9XG5cbiAgICBmaXJlKCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0KHtcbiAgICAgICAgc2l6ZSA9IDIsXG4gICAgICAgIG1hZ25pdHVkZSA9IDEwLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXG4gICAgICAgIHBhcnRpY2xlU2l6ZSA9IDIwLFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcbiAgICAgICAgdG9BbmdsZSA9IE1hdGguUEkgKiAyLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XG4gICAgICAgICAgICBzdHlsZSwgcG9zaXRpb246IHBvc2l0aW9uLmNvcHkoKSwgcmFkaXVzOiBwYXJ0aWNsZVNpemUsIHZlbG9jaXR5RGFtcGluZzogMC45NyxcbiAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tUG9sYXIoMSwgZnJvbUFuZ2xlLCB0b0FuZ2xlKVxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KVxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xuICAgICAgICAgICAgcGFydGljbGUudXBkYXRlKGR0KVxuXG4gICAgICAgICAgICBsZXQgYWxpdmUgPSBwYXJ0aWNsZS5yYWRpdXMgPiAwLjU7XG4gICAgICAgICAgICBpZiAoIWFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmZpcmUoKTtcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gY29uZmlnLnBvaW50cyB8fCBbXTtcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLCByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcbiAgICAgICAgcmVuZGVyZXIucG9seWdvbih0aGlzLnBvaW50cywgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcGF3bmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiA9ICgoKSA9PiBmYWxzZSksIGNyZWF0b3IgPSAoKCkgPT4gW10pKSB7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uKHRoaXMuaXRlbXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGUoY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5hbGl2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW5kZXIocmVuZGVyZXIpKTsgXG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24sIHRyYW5zZm9ybWVkUmVuZGVyaW5nKSB7XG4gICAgICAgIHRoaXMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XG4gICAgICAgIHRyYW5zZm9ybWVkUmVuZGVyaW5nKCk7XG4gICAgICAgIHRoaXMucG9wKCk7XG4gICAgfVxuXG4gICAgcHVzaCh7XG4gICAgICAgIHNjYWxlID0gbmV3IFZlY3RvcigxLCAxKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICB0cmFuc2xhdGlvbiA9IG5ldyBWZWN0b3IoKVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUocm90YXRpb24pO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodHJhbnNsYXRpb24ueCwgdHJhbnNsYXRpb24ueSk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgY2lyY2xlKHBvc2l0aW9uLCByYWRpdXMsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb2xvcjtcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Qmx1ciA9IDUwO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgcmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggLSBzaXplLndpZHRoIC8gMiwgcG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwb2x5Z29uKHBvaW50cywgc2l6ZSA9IDEsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50c1swXS54ICogc2l6ZSwgcG9pbnRzWzBdLnkgKiBzaXplKTtcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAqIHNpemUsIHBvaW50LnkgKiBzaXplKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9yZW5kZXJlci5qcyIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXTtcbiAgICB9XG5cbiAgICBhZGQoLi4ub2JqZWN0cykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmNvbmNhdChvYmplY3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIgJiYgb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xuICAgIH1cblxuICAgIHVwZGF0ZShwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChvYmplY3QudXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmFsaXZlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvc2NlbmUuanMiXSwic291cmNlUm9vdCI6IiJ9