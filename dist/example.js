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
    ctx.scale(1, -1);

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
        return player.setSpeed(1);
    }, function () {
        return player.setSpeed(0);
    });
    environment.container.forEach(function (layer) {
        return parallax.addLayer({ depth: layer.depth, objects: layer.objects });
    });
    parallax.addLayer({ objects: [player, new _asteroidField.AsteroidField(player, Math.max(width, height))] });
    scene.add(parallax, controller, camera, environment);

    window.cancelAnimationFrame(animationFrame);
    (function animation() {
        engine.clear().render().update();
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
        this.score = 0;
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
                        _this2.player.damage(asteroid.size + _this2.player.speed);
                        _this2.score += asteroid.size + _this2.player.speed;
                    } else {
                        _this2.player.revive(asteroid.size + _this2.player.speed);
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

        this.width = width;
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
        this.fuelTankUi = new _engine.Rectangle({
            position: new _engine.Vector(0, height / 2 - 10),
            width: width, height: 20
        });
        this.speedUi = new _engine.Rectangle({
            position: new _engine.Vector(0, -height / 2 + 10),
            width: width, height: 20
        });
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render(renderer) {
            this.bigCircle.render(renderer);
            this.smallCircle.render(renderer);
            this.fuelTankUi.render(renderer);
            this.speedUi.render(renderer);
        }
    }, {
        key: 'setSpeed',
        value: function setSpeed(percentage) {
            this.speedUi.width = percentage * this.width / 5;
        }
    }, {
        key: 'setFuelTank',
        value: function setFuelTank(percentage) {
            this.fuelTankUi.width = this.width * percentage;
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
        key: 'update',
        value: function update() {
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
                    if (this.keyHandlers[name].reverseHandler) {
                        this.keyHandlers[name].reverseHandler();
                    }
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

        _this.fuelTankMax = 500;
        _this.fuelTank = _this.fuelTankMax;

        _this.maxSpeed = 5;
        _this.speed = 0;

        _this.exhaust = new _engine.Fountain({ particleSize: 4, style: { opacity: 0.2 },
            fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        _this.ship = new _engine.Polygon({ points: [new _engine.Vector(-5, 0), new _engine.Vector(0, -3), new _engine.Vector(5, 0), new _engine.Vector(0, 15)] });
        _this.color = _engine.Utils.randomArray(_config.colors);

        _this.add({ object: _this.exhaust });
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
        key: 'setSpeed',
        value: function setSpeed(percentage) {
            this.speed = this.maxSpeed * percentage;
        }
    }, {
        key: 'revive',
        value: function revive() {
            var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            this.setFuelDiff(size);
        }
    }, {
        key: 'damage',
        value: function damage() {
            var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            this.setFuelDiff(-size);
            this.explosions.push(new _engine.Explosion({
                position: this.position, size: 30, particleSize: 20,
                style: { color: this.color }, magnitude: 5
            }).fire());
        }
    }, {
        key: 'setFuelDiff',
        value: function setFuelDiff() {
            var fuelDiff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            var newFuel = this.fuelTank + fuelDiff;
            this.fuelTank = Math.min(Math.max(0, newFuel), this.fuelTankMax);
            if (this.fuelTank <= 0) {
                this.kill();
            }
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.size = 0;
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
            this.exhaust.style.color = this.color;
            this.controller.color = this.color;
            this.controller.fuelTankUi.style.color = this.color;
            this.controller.speedUi.style.color = this.color;

            this.controller.setFuelTank(this.fuelTank / this.fuelTankMax);
            this.controller.setSpeed(this.velocity.length());

            var forwardAngle = this.controller.direction.angle() + Math.PI;
            var speedForce = this.fuelTank > 0 ? this.speed : 0;

            this.ship.rotation = forwardAngle + Math.PI / 2;
            this.exhaust.config.fromAngle = forwardAngle - 1 / speedForce;
            this.exhaust.config.toAngle = forwardAngle + 1 / speedForce;
            this.exhaust.config.magnitude = speedForce / 1.5;
            this.exhaust.config.size = speedForce / 1.5;
            this.fuelTank = this.fuelTank < 0 ? 0 : this.fuelTank - speedForce / 10;

            this.velocity.add(this.controller.direction.copy().scale(1 / 3000 * speedForce));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU3OWZiNzE1NDRmYzQ0YTliZDEiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNldFNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJzY29yZSIsImFzdGVyb2lkcyIsInJhbmRvbUFzdGVyb2lkUG9zaXRpb24iLCJyYW5kb21Bc3Rlcm9pZENvbG9yIiwicmFuZG9tQXN0ZXJvaWRTaGFwZSIsImV4cGxvc2lvbnMiLCJleHBsb3Npb25TcGF3bmVyIiwic3BsaWNlIiwic2VnbWVudHMiLCJzZWdtZW50IiwicGxheWVyU3BlZWQiLCJhc3Rlcm9pZCIsImRpc3RhbmNlIiwiZGFtYWdlIiwic3BlZWQiLCJyZXZpdmUiLCJDb250cm9sbGVyIiwiY2VudGVyIiwiZGlyZWN0aW9uIiwiY29udHJvbGxlclNwcmluZyIsIm1vdXNlIiwiYmlnQ2lyY2xlIiwic21hbGxDaXJjbGUiLCJmdWVsVGFua1VpIiwic3BlZWRVaSIsInBlcmNlbnRhZ2UiLCJjdXQiLCJFbnZpcm9ubWVudCIsImNpcmNsZUdlbmVyYXRvciIsImNvdW50IiwiY2FtZXJhUG9zIiwiSU8iLCJrZXlIYW5kbGVycyIsImtleVN0YXRlcyIsImJpbmRFdmVudHMiLCJyZXZlcnNlSGFuZGxlciIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImUiLCJjaGFuZ2VUb3VjaCIsIm1vdXNlRG93biIsIlBsYXllciIsImZ1ZWxUYW5rTWF4IiwiZnVlbFRhbmsiLCJtYXhTcGVlZCIsImV4aGF1c3QiLCJzaGlwIiwic2V0RnVlbERpZmYiLCJmdWVsRGlmZiIsIm5ld0Z1ZWwiLCJraWxsIiwic2V0RnVlbFRhbmsiLCJmb3J3YXJkQW5nbGUiLCJzcGVlZEZvcmNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFD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QTBCeE0sS0FBMUIsS0FBb0NKLEtBQUtzQixFQUE1RDtBQUNBLGdCQUFJOE4sYUFBYSxLQUFLVixRQUFMLEdBQWdCLENBQWhCLEdBQW9CLEtBQUtsQyxLQUF6QixHQUFpQyxDQUFsRDs7QUFFQSxpQkFBS3FDLElBQUwsQ0FBVTNMLFFBQVYsR0FBcUJpTSxlQUFlblAsS0FBS3NCLEVBQUwsR0FBVSxDQUE5QztBQUNBLGlCQUFLc04sT0FBTCxDQUFhaE0sTUFBYixDQUFvQm9GLFNBQXBCLEdBQWdDbUgsZUFBZSxJQUFJQyxVQUFuRDtBQUNBLGlCQUFLUixPQUFMLENBQWFoTSxNQUFiLENBQW9CcUYsT0FBcEIsR0FBOEJrSCxlQUFlLElBQUlDLFVBQWpEO0FBQ0EsaUJBQUtSLE9BQUwsQ0FBYWhNLE1BQWIsQ0FBb0JrRixTQUFwQixHQUFnQ3NILGFBQWEsR0FBN0M7QUFDQSxpQkFBS1IsT0FBTCxDQUFhaE0sTUFBYixDQUFvQm5DLElBQXBCLEdBQTJCMk8sYUFBYSxHQUF4QztBQUNBLGlCQUFLVixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBcEIsR0FBd0IsS0FBS0EsUUFBTCxHQUFnQlUsYUFBYSxFQUFyRTs7QUFFQSxpQkFBS25NLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQixLQUFLZ0gsVUFBTCxDQUFnQmtDLFNBQWhCLENBQTBCakosSUFBMUIsR0FBaUMvQyxLQUFqQyxDQUF3QyxJQUFJLElBQUwsR0FBYXdPLFVBQXBELENBQWxCO0FBQ0EsZ0JBQUksS0FBS25NLFFBQUwsQ0FBYzlDLE1BQWQsS0FBeUIsR0FBN0IsRUFBa0M7QUFDOUIscUJBQUs4QyxRQUFMLENBQWN2QyxPQUFkLENBQXNCLEdBQXRCO0FBQ0g7QUFDSiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTU3OWZiNzE1NDRmYzQ0YTliZDEiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XHJcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICogY29zIC0gdGhpcy55ICogc2luO1xyXG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXQoc2l6ZSkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggPiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHNpemUpIHtcclxuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcclxuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pblgsIG1heFgpLCBVdGlscy5yYW5kb20obWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS92ZWN0b3IuanMiLCJleHBvcnQgY29uc3QgVXRpbHMgPSB7XHJcblxyXG4gICAgcmFuZG9tOiBmdW5jdGlvbihtaW4gPSAwLCBtYXggPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH0sXHJcblxyXG4gICAgcmFuZG9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xyXG4gICAgfSxcclxuXHJcbiAgICByYW5nZTogZnVuY3Rpb24oc2l6ZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KE1hdGgucm91bmQoc2l6ZSkpLmtleXMoKSkubWFwKGhhbmRsZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaWx0ZXJTZXQ6IGZ1bmN0aW9uKHNldCwgcHJlZGljYXRlKSB7XHJcbiAgICAgICAgc2V0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdXRpbHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmltaXRpdmVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHtcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxyXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXHJcbiAgICAgICAgdmVsb2NpdHkgPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXHJcbiAgICAgICAgc2l6ZSA9IDFcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2VudGVyID0gcm90YXRpb25DZW50ZXI7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbih7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlW2Z1bmMubmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlbGVhc2VkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyguLi5jb25maWcpIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnNldCguLi5jb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkLmFkZChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb2NhdGVkLmhhcyhpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgcG9vbENvbnRhaW5lciA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RhbmNhYmxlIHtcclxuICAgIFxyXG4gICAgc3RhdGljIGdldFBvb2woKSB7XHJcbiAgICAgICAgbGV0IHBvb2wgPSBwb29sQ29udGFpbmVyW3RoaXMubmFtZV07XHJcbiAgICAgICAgaWYgKCFwb29sKSB7XHJcbiAgICAgICAgICAgIHBvb2wgPSBuZXcgSW5zdGFuY2VQb29sKHRoaXMpO1xyXG4gICAgICAgICAgICBwb29sQ29udGFpbmVyLmFkZChwb29sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb29sO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgbmV3KC4uLmNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5uZXcoLi4uY29uZmlnKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBzdGF0aWMgcmVsZWFzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5yZWxlYXNlKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9lbmdpbmUuanMiLCJleHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG5hbWUsIGNvbmRpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGVsZW1lbnRzLCBuYW1lLCBleGVjdXRvcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcltuYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGNvbmRpdGlvbiwgaGFuZGxlcnMgfSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xyXG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gY29uZGl0aW9uKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFyYWxsYXgge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy56b29tID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKHsgb2JqZWN0czogbmV3IFNldChvYmplY3RzKSwgZGVwdGg6IC0xIC8gZGVwdGggfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZShsYXllci5kZXB0aCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBVdGlscy5maWx0ZXJTZXQobGF5ZXIub2JqZWN0cywgb2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XHJcbmltcG9ydCB7IEluc3RhbmNlUG9vbCB9IGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xyXG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGggfHwgMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB7IHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0IH0sIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcclxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxyXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XHJcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcclxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcclxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHtcclxuICAgICAgICBzaXplID0gMixcclxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXHJcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcclxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XHJcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcclxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoZHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFsaXZlID0gcGFydGljbGUucmFkaXVzID4gMC41O1xyXG4gICAgICAgICAgICBpZiAoIWFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZXNQb29sLnJlbGVhc2UocGFydGljbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWxpdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm91bnRhaW4gZXh0ZW5kcyBFeHBsb3Npb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5maXJlKCk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gY29uZmlnLnBvaW50cyB8fCBbXTtcclxuICAgICAgICB0aGlzLmVtaXNzaW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9seWdvbih0aGlzLnBvaW50cywgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGF3bmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24gPSAoKCkgPT4gZmFsc2UpLCBjcmVhdG9yID0gKCgpID0+IFtdKSkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uKHRoaXMuaXRlbXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goLi4udGhpcy5jcmVhdG9yKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uLCB0cmFuc2Zvcm1lZFJlbmRlcmluZykge1xyXG4gICAgICAgIHRoaXMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XHJcbiAgICAgICAgdHJhbnNmb3JtZWRSZW5kZXJpbmcoKTtcclxuICAgICAgICB0aGlzLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goe1xyXG4gICAgICAgIHNjYWxlID0gbmV3IFZlY3RvcigxLCAxKSxcclxuICAgICAgICByb3RhdGlvbiA9IDAsXHJcbiAgICAgICAgdHJhbnNsYXRpb24gPSBuZXcgVmVjdG9yKClcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcclxuICAgICAgICB0aGlzLmN0eC5yb3RhdGUocm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbi54LCB0cmFuc2xhdGlvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwb3AoKSB7XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZShwb3NpdGlvbiwgcmFkaXVzLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dCbHVyID0gNTA7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gc2l6ZS53aWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBzaXplLmhlaWdodCAvIDIsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9seWdvbihwb2ludHMsIHNpemUgPSAxLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9pbnRzWzBdLnggKiBzaXplLCBwb2ludHNbMF0ueSAqIHNpemUpO1xyXG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAqIHNpemUsIHBvaW50LnkgKiBzaXplKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJleHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLm9iamVjdHMpIHtcclxuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0cyA9PiB7XHJcbiAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdHMuc2V0dXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RzLnNldHVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5yZW5kZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmFsaXZlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3NjZW5lLmpzIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFsnIzZmNicsICcjZjY2JywgJyM2NmYnLCAnI2ZmMycsICcjM2ZmJywgJyNmM2YnXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb25maWcuanMiLCJpbXBvcnQge1xyXG4gICAgVmVjdG9yLCBDYW52YXNSZW5kZXJlciwgU2NlbmUsXHJcbiAgICBFbmdpbmUsIFNwcmluZ3lWZWN0b3IsIFBhcmFsbGF4XHJcbn0gZnJvbSAnZW5naW5lJztcclxuXHJcbmltcG9ydCB7IElPIH0gZnJvbSAnLi9pbyc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQXN0ZXJvaWRGaWVsZCB9IGZyb20gJy4vYXN0ZXJvaWQtZmllbGQnO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcblxyXG5sZXQgaW5pdCA9IChjYW52YXMpID0+IHtcclxuXHJcbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XHJcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjdHgudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XHJcbiAgICBjdHguc2NhbGUoMSwgLTEpO1xyXG5cclxuICAgIGxldCBpbyA9IG5ldyBJTyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGxldCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihjdHgsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgICBsZXQgZW5naW5lID0gbmV3IEVuZ2luZShyZW5kZXJlciwgc2NlbmUpO1xyXG5cclxuICAgIGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoY29udHJvbGxlcik7XHJcbiAgICBsZXQgY2FtZXJhID0gbmV3IFNwcmluZ3lWZWN0b3Ioe1xyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxyXG4gICAgICAgIHRhcmdldDogKCkgPT4gcGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQocGxheWVyLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSgzKSlcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xyXG4gICAgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KGNhbWVyYSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgaW8ub25Nb3VzZSgoKSA9PiBwbGF5ZXIuc2V0U3BlZWQoMSksICgpID0+IHBsYXllci5zZXRTcGVlZCgwKSk7XHJcbiAgICBlbnZpcm9ubWVudC5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiBwYXJhbGxheC5hZGRMYXllcih7IGRlcHRoOiBsYXllci5kZXB0aCwgb2JqZWN0czogbGF5ZXIub2JqZWN0cyB9KSk7XHJcbiAgICBwYXJhbGxheC5hZGRMYXllcih7IG9iamVjdHM6IFtwbGF5ZXIsIG5ldyBBc3Rlcm9pZEZpZWxkKHBsYXllciwgTWF0aC5tYXgod2lkdGgsIGhlaWdodCkpXSB9KTtcclxuICAgIHNjZW5lLmFkZChwYXJhbGxheCwgY29udHJvbGxlciwgY2FtZXJhLCBlbnZpcm9ubWVudCk7XHJcblxyXG5cclxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XHJcbiAgICAoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGVuZ2luZS5jbGVhcigpLnJlbmRlcigpLnVwZGF0ZSgpO1xyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gICAgfSkoKTtcclxuXHJcbn07XHJcblxyXG5cclxubGV0IGFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkLFxyXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5cclxuaW5pdChjYW52YXMpO1xyXG4vLyB3aW5kb3cub25yZXNpemUgPSAoKSA9PiBpbml0KGNhbnZhcyk7XHJcbi8vIGNhbnZhcy5vbmNsaWNrID0gKCkgPT4ge1xyXG4vLyAgICAgKGNhbnZhcy5yZXF1ZXN0RnVsbFNjcmVlbiB8fFxyXG4vLyAgICAgICAgIGNhbnZhcy53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fFxyXG4vLyAgICAgICAgIGNhbnZhcy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxyXG4vLyAgICAgICAgIGNhbnZhcy5tc1JlcXVlc3RGdWxsU2NyZWVuKS5jYWxsKGNhbnZhcyk7XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pbmRleC5qcyIsImltcG9ydCB7IFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgVXRpbHMsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXN0ZXJvaWRGaWVsZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcclxuICAgICAgICBsZXQgbnVtQXN0ZXJvaWRzID0gMTU7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb20oLTAuNSwgMC41LCAtMC41LCAwLjUpLCBzaXplLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSA1O1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShzZWdtZW50cywgc2VnbWVudCA9PlxyXG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcclxuICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmRhbWFnZShhc3Rlcm9pZC5zaXplICsgdGhpcy5wbGF5ZXIuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gYXN0ZXJvaWQuc2l6ZSArIHRoaXMucGxheWVyLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmV2aXZlKGFzdGVyb2lkLnNpemUgKyB0aGlzLnBsYXllci5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFzdGVyb2lkLnBvc2l0aW9uLCBzaXplOiBhc3Rlcm9pZC5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVNpemU6IGFzdGVyb2lkLnNpemUgLyAxLjUsIHN0eWxlOiB7IGNvbG9yOiBhc3Rlcm9pZC5zdHlsZS5jb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduaXR1ZGU6IChhc3Rlcm9pZC5zaXplICsgcGxheWVyU3BlZWQgKyBhc3Rlcm9pZC52ZWxvY2l0eS5sZW5ndGgoKSkgLyA1XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlyZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSB8fCBkaXN0YW5jZSA+IHRoaXMucmFkaXVzIC8gMiArIDUwKSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9zaXRpb24gPSB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvaW50cyA9IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpO1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQuc3R5bGUuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiBhc3Rlcm9pZC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsImltcG9ydCB7IFZlY3RvciwgQ2lyY2xlLCBTcHJpbmd5VmVjdG9yLCBSZWN0YW5nbGUgfSBmcm9tICdlbmdpbmUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpbywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gNjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgVmVjdG9yKC13aWR0aCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1LCAtaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzICsgNDUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcgPSBuZXcgU3ByaW5neVZlY3Rvcih7XHJcbiAgICAgICAgICAgIGVsYXN0aWNpdHk6IDAuMSxcclxuICAgICAgICAgICAgZGFtcGluZzogMC41LFxyXG4gICAgICAgICAgICB0YXJnZXQ6ICgpID0+IGlvLm1vdXNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlID0gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAxLjUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmNlbnRlcixcclxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mdWVsVGFua1VpID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIGhlaWdodCAvIDIgLSAxMCksXHJcbiAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQ6IDIwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zcGVlZFVpID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIC1oZWlnaHQgLyAyICsgMTApLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0OiAyMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgIHRoaXMuc3BlZWRVaS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICB0aGlzLnNwZWVkVWkud2lkdGggPSBwZXJjZW50YWdlICogdGhpcy53aWR0aCAvIDU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnVlbFRhbmsocGVyY2VudGFnZSkge1xyXG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaS53aWR0aCA9IHRoaXMud2lkdGggKiBwZXJjZW50YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyU3ByaW5nLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY29udHJvbGxlclNwcmluZy5wb3NpdGlvbi5jb3B5KCkuc3VidHJhY3QodGhpcy5jZW50ZXIpLmN1dCh0aGlzLnJhZGl1cyAvIDIpO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucG9zaXRpb24gPSB0aGlzLmNlbnRlci5jb3B5KCkuYWRkKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSgpLnNjYWxlKDEgLyBsYXllci5kZXB0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54ID4gdGhpcy53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCArIHRoaXMud2lkdGggLyAyIC0gKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi54IC0gY2FtZXJhUG9zLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54IC0gdGhpcy53aWR0aCAvIDIgKyAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIHRoaXMuaGVpZ2h0IC0gKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi55IC0gY2FtZXJhUG9zLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElPIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2UoZG93bkhhbmRsZXIsIHVwSGFuZGxlcikge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cEhhbmRsZXIpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRvd25IYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1cEhhbmRsZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbktleShrZXksIGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1trZXldID0geyBoYW5kbGVyLCByZXZlcnNlSGFuZGxlciB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRvdWNoKHsgY2hhbmdlZFRvdWNoZXMgfSkge1xyXG4gICAgICAgIHRoaXMubW91c2Uuc2V0KGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICh7IHgsIHkgfSkgPT5cclxuICAgICAgICAgICAgdGhpcy5tb3VzZS5zZXQoeCAtIHRoaXMud2lkdGggLyAyLCAteSArIHRoaXMuaGVpZ2h0IC8gMikpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IGZhbHNlKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2lvLmpzIiwiaW1wb3J0IHtcclxuICAgIFZlY3RvciwgQ29tcG9zaXRlLCBGb3VudGFpbiwgUG9seWdvbixcclxuICAgIFV0aWxzLCBTcGF3bmVyLCBFeHBsb3Npb25cclxufSBmcm9tICdlbmdpbmUnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuXHJcbiAgICAgICAgdGhpcy5mdWVsVGFua01heCA9IDUwMDtcclxuICAgICAgICB0aGlzLmZ1ZWxUYW5rID0gdGhpcy5mdWVsVGFua01heDtcclxuXHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZXhoYXVzdCA9IG5ldyBGb3VudGFpbih7IHBhcnRpY2xlU2l6ZTogNCwgc3R5bGU6IHsgb3BhY2l0eTogMC4yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BbmdsZTogTWF0aC5QSSAvIDIgKiAzIC0gMC4zLCB0b0FuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgKyAwLjMgfSk7XHJcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFBvbHlnb24oeyBwb2ludHM6IFtuZXcgVmVjdG9yKC01LCAwKSwgbmV3IFZlY3RvcigwLCAtMyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1LCAwKSwgbmV3IFZlY3RvcigwLCAxNSldIH0pO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5leGhhdXN0IH0pO1xyXG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLnNoaXAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChwZXJjZW50YWdlKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWQgKiBwZXJjZW50YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldml2ZShzaXplID0gMTApIHtcclxuICAgICAgICB0aGlzLnNldEZ1ZWxEaWZmKHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRhbWFnZShzaXplID0gMTApIHtcclxuICAgICAgICB0aGlzLnNldEZ1ZWxEaWZmKC1zaXplKTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcclxuICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRGdWVsRGlmZihmdWVsRGlmZiA9IDEwKSB7XHJcbiAgICAgICAgbGV0IG5ld0Z1ZWwgPSB0aGlzLmZ1ZWxUYW5rICsgZnVlbERpZmY7XHJcbiAgICAgICAgdGhpcy5mdWVsVGFuayA9IE1hdGgubWluKE1hdGgubWF4KDAsIG5ld0Z1ZWwpLCB0aGlzLmZ1ZWxUYW5rTWF4KTtcclxuICAgICAgICBpZiAodGhpcy5mdWVsVGFuayA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuZXhoYXVzdC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZnVlbFRhbmtVaS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNwZWVkVWkuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0RnVlbFRhbmsodGhpcy5mdWVsVGFuayAvIHRoaXMuZnVlbFRhbmtNYXgpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRTcGVlZCh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XHJcbiAgICAgICAgbGV0IHNwZWVkRm9yY2UgPSB0aGlzLmZ1ZWxUYW5rID4gMCA/IHRoaXMuc3BlZWQgOiAwO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyBzcGVlZEZvcmNlO1xyXG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcudG9BbmdsZSA9IGZvcndhcmRBbmdsZSArIDEgLyBzcGVlZEZvcmNlO1xyXG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcubWFnbml0dWRlID0gc3BlZWRGb3JjZSAvIDEuNTtcclxuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLnNpemUgPSBzcGVlZEZvcmNlIC8gMS41O1xyXG4gICAgICAgIHRoaXMuZnVlbFRhbmsgPSB0aGlzLmZ1ZWxUYW5rIDwgMCA/IDAgOiB0aGlzLmZ1ZWxUYW5rIC0gc3BlZWRGb3JjZSAvIDEwO1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmNvcHkoKS5zY2FsZSgoMSAvIDMwMDApICogc3BlZWRGb3JjZSkpO1xyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpID4gMi41KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGVUbygyLjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9wbGF5ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9