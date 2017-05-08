var engine =
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
var Utils = exports.Utils = {

    random: function random() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return Math.random() * (max - min) + min;
    },

    randomArray: function randomArray(array) {
        return array[Math.floor(this.random(0, array.length))];
    },

    range: function range(size, handler) {
        return Array.from(Array(Math.round(size)).keys()).map(handler);
    },

    filterSet: function filterSet(set, predicate) {
        set.forEach(function (element) {
            if (!predicate(element)) {
                set.delete(element);
            }
        });

        return set;
    }

};

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

var poolContainer = {};

var Instancable = exports.Instancable = function () {
    function Instancable() {
        _classCallCheck(this, Instancable);
    }

    _createClass(Instancable, null, [{
        key: "getPool",
        value: function getPool() {
            var pool = poolContainer[this.name];
            if (!pool) {
                pool = new InstancePool(this);
                poolContainer.add(pool);
            }

            return pool;
        }
    }, {
        key: "new",
        value: function _new() {
            var _getPool;

            return (_getPool = this.getPool()).new.apply(_getPool, arguments);
        }
    }, {
        key: "release",
        value: function release(instance) {
            return this.getPool().release(instance);
        }
    }]);

    return Instancable;
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
        key: 'addLayer',
        value: function addLayer(_ref) {
            var _ref$objects = _ref.objects,
                objects = _ref$objects === undefined ? [] : _ref$objects,
                _ref$depth = _ref.depth,
                depth = _ref$depth === undefined ? 1 : _ref$depth;

            this.layers.push({ objects: new Set(objects), depth: -1 / depth });
            return this;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            var _this = this;

            this.layers.forEach(function (layer) {
                renderer.push({
                    translation: _this.reference.copy().scale(layer.depth),
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

        _this2.width = config.width || 10;
        _this2.height = config.height || 10;
        return _this2;
    }

    _createClass(Rectangle, [{
        key: 'render',
        value: function render(renderer) {
            renderer.rectangle(this.position, { width: this.width, height: this.height }, this.style);
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
        key: 'add',
        value: function add() {
            for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
                objects[_key] = arguments[_key];
            }

            objects.forEach(function (objects) {
                if (typeof objects.setup !== 'undefined') {
                    objects.setup();
                }
            });

            this.container = this.container.concat(objects);
            return this;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            this.container.forEach(function (object) {
                if (typeof object.render !== 'undefined') {
                    object.render(renderer);
                }
            });
        }
    }, {
        key: 'update',
        value: function update(ctx) {
            this.container = this.container.filter(function (object) {
                object.update(ctx);
                if (typeof object.alive !== 'undefined') {
                    return object.alive();
                }

                return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODMyZTM1NGM1MjZhNjNlMTdjYTY/NjhiZCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdmVjdG9yLmpzPzkyYzAiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3V0aWxzLmpzPzkwM2QiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzPzE4MmMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2dhbWUtb2JqZWN0LmpzP2E5MjUiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luc3RhbmNlLXBvb2wuanM/OTc1OCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzP2ZlY2EiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanM/MjdlMSIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcGFyYWxsYXguanM/OTA4MCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcz82ZWVkIiwid2VicGFjazovLy8uL2VuZ2luZS9yZW5kZXJlci5qcz84MTkzIiwid2VicGFjazovLy8uL2VuZ2luZS9zY2VuZS5qcz8wZGQwIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7SUFHYUEsTSxXQUFBQSxNO0FBRVQsc0JBQTBCO0FBQUEsWUFBZEMsQ0FBYyx1RUFBVixDQUFVO0FBQUEsWUFBUEMsQ0FBTyx1RUFBSCxDQUFHOztBQUFBOztBQUN0QixhQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDSDs7Ozs0QkFFR0QsQyxFQUFHQyxDLEVBQUc7QUFDTixpQkFBS0QsQ0FBTCxHQUFTQSxD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OEJBRWU7QUFBQSw4Q0FBVFcsT0FBUztBQUFUQSx1QkFBUztBQUFBOztBQUNaQSxvQkFBUXpELE9BQVIsQ0FBZ0IsbUJBQVc7QUFDdEIsb0JBQUksT0FBT3lELFFBQVFnRSxLQUFmLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3ZDaEUsNEJBQVFnRSxLQUFSO0FBQ0g7QUFDSixhQUpEOztBQU1BLGlCQUFLM0UsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWU0QyxNQUFmLENBQXNCakMsT0FBdEIsQ0FBakI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7OzsrQkFFTTVDLFEsRUFBVTtBQUNiLGlCQUFLaUMsU0FBTCxDQUFlOUMsT0FBZixDQUF1QixrQkFBVTtBQUM3QixvQkFBSSxPQUFPNkQsT0FBT25CLE1BQWQsS0FBeUIsV0FBN0IsRUFBMEM7QUFDdENtQiwyQkFBT25CLE1BQVAsQ0FBYzdCLFFBQWQ7QUFDSDtBQUNKLGFBSkQ7QUFLSDs7OytCQUVNNkQsRyxFQUFLO0FBQ1IsaUJBQUs1QixTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZU0sTUFBZixDQUFzQixrQkFBVTtBQUM3Q1MsdUJBQU9sQixNQUFQLENBQWMrQixHQUFkO0FBQ0Esb0JBQUksT0FBT2IsT0FBT0UsS0FBZCxLQUF3QixXQUE1QixFQUF5QztBQUNyQywyQkFBT0YsT0FBT0UsS0FBUCxFQUFQO0FBQ0g7O0FBRUQsdUJBQU8sSUFBUDtBQUNILGFBUGdCLENBQWpCO0FBUUgiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODMyZTM1NGM1MjZhNjNlMTdjYTYiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XHJcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICogY29zIC0gdGhpcy55ICogc2luO1xyXG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXQoc2l6ZSkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggPiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHNpemUpIHtcclxuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcclxuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pblgsIG1heFgpLCBVdGlscy5yYW5kb20obWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS92ZWN0b3IuanMiLCJleHBvcnQgY29uc3QgVXRpbHMgPSB7XHJcblxyXG4gICAgcmFuZG9tOiBmdW5jdGlvbihtaW4gPSAwLCBtYXggPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH0sXHJcblxyXG4gICAgcmFuZG9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xyXG4gICAgfSxcclxuXHJcbiAgICByYW5nZTogZnVuY3Rpb24oc2l6ZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KE1hdGgucm91bmQoc2l6ZSkpLmtleXMoKSkubWFwKGhhbmRsZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaWx0ZXJTZXQ6IGZ1bmN0aW9uKHNldCwgcHJlZGljYXRlKSB7XHJcbiAgICAgICAgc2V0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdXRpbHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmltaXRpdmVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHtcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxyXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXHJcbiAgICAgICAgdmVsb2NpdHkgPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXHJcbiAgICAgICAgc2l6ZSA9IDFcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2VudGVyID0gcm90YXRpb25DZW50ZXI7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbih7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlW2Z1bmMubmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlbGVhc2VkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyguLi5jb25maWcpIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnNldCguLi5jb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkLmFkZChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb2NhdGVkLmhhcyhpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgcG9vbENvbnRhaW5lciA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RhbmNhYmxlIHtcclxuICAgIFxyXG4gICAgc3RhdGljIGdldFBvb2woKSB7XHJcbiAgICAgICAgbGV0IHBvb2wgPSBwb29sQ29udGFpbmVyW3RoaXMubmFtZV07XHJcbiAgICAgICAgaWYgKCFwb29sKSB7XHJcbiAgICAgICAgICAgIHBvb2wgPSBuZXcgSW5zdGFuY2VQb29sKHRoaXMpO1xyXG4gICAgICAgICAgICBwb29sQ29udGFpbmVyLmFkZChwb29sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb29sO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgbmV3KC4uLmNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5uZXcoLi4uY29uZmlnKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBzdGF0aWMgcmVsZWFzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5yZWxlYXNlKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9lbmdpbmUuanMiLCJleHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG5hbWUsIGNvbmRpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGVsZW1lbnRzLCBuYW1lLCBleGVjdXRvcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcltuYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGNvbmRpdGlvbiwgaGFuZGxlcnMgfSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xyXG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gY29uZGl0aW9uKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFyYWxsYXgge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy56b29tID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKHsgb2JqZWN0czogbmV3IFNldChvYmplY3RzKSwgZGVwdGg6IC0xIC8gZGVwdGggfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZShsYXllci5kZXB0aCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBVdGlscy5maWx0ZXJTZXQobGF5ZXIub2JqZWN0cywgb2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XHJcbmltcG9ydCB7IEluc3RhbmNlUG9vbCB9IGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xyXG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGggfHwgMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB7IHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0IH0sIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcclxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxyXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XHJcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcclxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcclxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHtcclxuICAgICAgICBzaXplID0gMixcclxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXHJcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcclxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XHJcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcclxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoZHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFsaXZlID0gcGFydGljbGUucmFkaXVzID4gMC41O1xyXG4gICAgICAgICAgICBpZiAoIWFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZXNQb29sLnJlbGVhc2UocGFydGljbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWxpdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm91bnRhaW4gZXh0ZW5kcyBFeHBsb3Npb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5maXJlKCk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gY29uZmlnLnBvaW50cyB8fCBbXTtcclxuICAgICAgICB0aGlzLmVtaXNzaW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9seWdvbih0aGlzLnBvaW50cywgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGF3bmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24gPSAoKCkgPT4gZmFsc2UpLCBjcmVhdG9yID0gKCgpID0+IFtdKSkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uKHRoaXMuaXRlbXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goLi4udGhpcy5jcmVhdG9yKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uLCB0cmFuc2Zvcm1lZFJlbmRlcmluZykge1xyXG4gICAgICAgIHRoaXMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XHJcbiAgICAgICAgdHJhbnNmb3JtZWRSZW5kZXJpbmcoKTtcclxuICAgICAgICB0aGlzLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goe1xyXG4gICAgICAgIHNjYWxlID0gbmV3IFZlY3RvcigxLCAxKSxcclxuICAgICAgICByb3RhdGlvbiA9IDAsXHJcbiAgICAgICAgdHJhbnNsYXRpb24gPSBuZXcgVmVjdG9yKClcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcclxuICAgICAgICB0aGlzLmN0eC5yb3RhdGUocm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbi54LCB0cmFuc2xhdGlvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwb3AoKSB7XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZShwb3NpdGlvbiwgcmFkaXVzLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dCbHVyID0gNTA7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gc2l6ZS53aWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBzaXplLmhlaWdodCAvIDIsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9seWdvbihwb2ludHMsIHNpemUgPSAxLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9pbnRzWzBdLnggKiBzaXplLCBwb2ludHNbMF0ueSAqIHNpemUpO1xyXG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAqIHNpemUsIHBvaW50LnkgKiBzaXplKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJleHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLm9iamVjdHMpIHtcclxuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0cyA9PiB7XHJcbiAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdHMuc2V0dXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RzLnNldHVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5yZW5kZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmFsaXZlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3NjZW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==