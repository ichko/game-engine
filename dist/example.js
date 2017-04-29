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
        return player.speed = 5;
    }, function () {
        return player.speed = 0;
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
            size: { width: width, height: 50 },
            width: width, height: 20
        });
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render(renderer) {
            this.bigCircle.render(renderer);
            this.smallCircle.render(renderer);
            this.fuelTankUi.render(renderer);
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

        _this.fuelTankMax = 1000;
        _this.fuelTank = _this.fuelTankMax;

        _this.exhaust = new _engine.Fountain({ particleSize: 4, style: { opacity: 0.2 },
            fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        _this.ship = new _engine.Polygon({ points: [new _engine.Vector(-5, 0), new _engine.Vector(0, -3), new _engine.Vector(5, 0), new _engine.Vector(0, 15)] });
        _this.speed = 0;
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
            this.exhaust.style.color = this.color;
            this.controller.color = this.color;
            this.controller.fuelTankUi.style.color = this.color;
            this.controller.setFuelTank(this.fuelTank / this.fuelTankMax);

            var forwardAngle = this.controller.direction.angle() + Math.PI;
            this.ship.rotation = forwardAngle + Math.PI / 2;
            this.exhaust.config.fromAngle = forwardAngle - 1 / this.speed;
            this.exhaust.config.toAngle = forwardAngle + 1 / this.speed;
            this.exhaust.config.magnitude = this.speed / 1.5;
            this.exhaust.config.size = this.speed / 1.5;
            this.fuelTank = this.fuelTank < 0 ? 0 : this.fuelTank - this.speed / 10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzcyODVlYmU1NDI0NmE3YmUyNmUiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJhc3Rlcm9pZHMiLCJyYW5kb21Bc3Rlcm9pZFBvc2l0aW9uIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInJhbmRvbUFzdGVyb2lkU2hhcGUiLCJleHBsb3Npb25zIiwiZXhwbG9zaW9uU3Bhd25lciIsInNwbGljZSIsInNlZ21lbnRzIiwic2VnbWVudCIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImtpbGwiLCJDb250cm9sbGVyIiwiY2VudGVyIiwiZGlyZWN0aW9uIiwiY29udHJvbGxlclNwcmluZyIsIm1vdXNlIiwiYmlnQ2lyY2xlIiwic21hbGxDaXJjbGUiLCJmdWVsVGFua1VpIiwicGVyY2VudGFnZSIsImN1dCIsIkVudmlyb25tZW50IiwiY2lyY2xlR2VuZXJhdG9yIiwiY291bnQiLCJjYW1lcmFQb3MiLCJJTyIsImtleUhhbmRsZXJzIiwia2V5U3RhdGVzIiwiYmluZEV2ZW50cyIsInJldmVyc2VIYW5kbGVyIiwiZG93bkhhbmRsZXIiLCJ1cEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5IiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiZSIsImNoYW5nZVRvdWNoIiwibW91c2VEb3duIiwiUGxheWVyIiwiZnVlbFRhbmtNYXgiLCJmdWVsVGFuayIsImV4aGF1c3QiLCJzaGlwIiwic2V0RnVlbFRhbmsiLCJmb3J3YXJkQW5nbGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7O0lB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Q0FBb0JuQyxJQUFwQixHQUEyQixLQUFLdUssS0FBTCxHQUFhLEdBQXhDO0FBQ0EsaUJBQUtzRCxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBcEIsR0FBd0IsS0FBS0EsUUFBTCxHQUFnQixLQUFLdEQsS0FBTCxHQUFhLEVBQXJFOztBQUVBLGlCQUFLL0gsUUFBTCxDQUFjUyxHQUFkLENBQWtCLEtBQUtnSCxVQUFMLENBQWdCK0IsU0FBaEIsQ0FBMEI5SSxJQUExQixHQUFpQy9DLEtBQWpDLENBQXdDLElBQUksSUFBTCxHQUFhLEtBQUtvSyxLQUF6RCxDQUFsQjtBQUNBLGdCQUFJLEtBQUsvSCxRQUFMLENBQWM5QyxNQUFkLEtBQXlCLEdBQTdCLEVBQWtDO0FBQzlCLHFCQUFLOEMsUUFBTCxDQUFjdkMsT0FBZCxDQUFzQixHQUF0QjtBQUNIO0FBQ0oiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc3Mjg1ZWJlNTQyNDZhN2JlMjZlIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMueCArPSB2ZWN0b3IueDtcclxuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGUoYW5nbGUpIHtcclxuICAgICAgICBsZXQgWyBzaW4sIGNvcyBdID0gWyBNYXRoLnNpbihhbmdsZSksIE1hdGguY29zKGFuZ2xlKSBdO1xyXG4gICAgICAgIGxldCB0bXBYID0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGNvcyAtIHRoaXMueSAqIHNpbjtcclxuICAgICAgICB0aGlzLnkgPSB0bXBYICogc2luICsgdGhpcy55ICogY29zO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhbmdsZSgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3V0KHNpemUpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoID4gc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlVG8oc2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZVRvKHNpemUgPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkuc2NhbGUoc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VidHJhY3QodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2UodmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gdmVjdG9yLng7XHJcbiAgICAgICAgbGV0IGR5ID0gdGhpcy55IC0gdmVjdG9yLnk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcclxuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHNpemU7XHJcbiAgICAgICAgdGhpcy55ICo9IHNpemU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZlY3RvclNjYWxlKHZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcclxuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb20obWluWCwgbWF4WCwgbWluWSwgbWF4WSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFV0aWxzLnJhbmRvbShtaW5YLCBtYXhYKSwgVXRpbHMucmFuZG9tKG1pblksIG1heFkpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcG9sYXIoYW5nbGUgPSAwLCBsZW5ndGggPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoLCBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21Qb2xhcihsZW5ndGggPSAxLCBtaW5BbmdsZSA9IDAsIG1heEFuZ2xlID0gTWF0aC5QSSAqIDIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbShtaW5BbmdsZSwgbWF4QW5nbGUpLCBsZW5ndGgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdmVjdG9yLmpzIiwiZXhwb3J0IGNvbnN0IFV0aWxzID0ge1xyXG5cclxuICAgIHJhbmRvbTogZnVuY3Rpb24obWluID0gMCwgbWF4ID0gMSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKHRoaXMucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkpXTtcclxuICAgIH0sXHJcblxyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKHNpemUsIGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgZmlsdGVyU2V0OiBmdW5jdGlvbihzZXQsIHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHNldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZShlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgfVxyXG5cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3V0aWxzLmpzIiwiZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50LW1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZS1wb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjZW5lJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmVjdG9yJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luZGV4LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICB0aGlzLnNldChjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh7XHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiAnI2YwMCcgfSxcclxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxyXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIHJvdGF0aW9uID0gMCxcclxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxyXG4gICAgICAgIHNpemUgPSAxXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlEYW1waW5nID0gdmVsb2NpdHlEYW1waW5nO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XHJcblxyXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoZHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZWxvY2l0eSh7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2dhbWUtb2JqZWN0LmpzIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlUG9vbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmFsbG9jYXRlZCA9IG5ldyBTZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcoLi4uY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWxlYXNlZC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGVkLmRlbGV0ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubGV0IHBvb2xDb250YWluZXIgPSB7fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0YW5jYWJsZSB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXRQb29sKCkge1xyXG4gICAgICAgIGxldCBwb29sID0gcG9vbENvbnRhaW5lclt0aGlzLm5hbWVdO1xyXG4gICAgICAgIGlmICghcG9vbCkge1xyXG4gICAgICAgICAgICBwb29sID0gbmV3IEluc3RhbmNlUG9vbCh0aGlzKTtcclxuICAgICAgICAgICAgcG9vbENvbnRhaW5lci5hZGQocG9vbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIG5ldyguLi5jb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKCkubmV3KC4uLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgc3RhdGljIHJlbGVhc2UoaW5zdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKCkucmVsZWFzZShpbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIsIHNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5yZW5kZXIodGhpcy5yZW5kZXJlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZW5naW5lLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihuYW1lLCBjb25kaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXSA9IHsgY29uZGl0aW9uLCBoYW5kbGVyczogW10gfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0uaGFuZGxlcnMucHVzaCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJFdmVudHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBsZXQgeyBjb25kaXRpb24sIGhhbmRsZXJzIH0gPSB0aGlzLmNvbnRhaW5lcltuYW1lXTtcclxuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoeyBleGVjdXRvciwgZWxlbWVudHMgfSkgPT5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGNvbmRpdGlvbihlbGVtZW50KSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGV4ZWN1dG9yKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanMiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSBuZXcgVmVjdG9yKCkpIHtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGF5ZXIoeyBvYmplY3RzID0gW10sIGRlcHRoID0gMSB9KSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAtMSAvIGRlcHRoIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnJlZmVyZW5jZS5jb3B5KCkuc2NhbGUobGF5ZXIuZGVwdGgpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy56b29tLCB0aGlzLnpvb20pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gVXRpbHMuZmlsdGVyU2V0KGxheWVyLm9iamVjdHMsIG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3BhcmFsbGF4LmpzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vZ2FtZS1vYmplY3QnO1xyXG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIHNldChjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyLnNldChjb25maWcpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcclxuICAgICAgICByZW5kZXJlci5jaXJjbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gY29uZmlnLndpZHRoIHx8IDEwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCB8fCAxMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5yZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgeyB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCB9LCB0aGlzLnN0eWxlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh7IG9mZnNldCA9IG5ldyBWZWN0b3IoKSwgb2JqZWN0IH0pIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBvYmplY3QsIG9mZnNldCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QsIG9mZnNldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogb2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGN0eCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QgfSkgPT4gb2JqZWN0LnVwZGF0ZShjdHgpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbmd5VmVjdG9yIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGRhbXBpbmcgPSAwLjEsXHJcbiAgICAgICAgZWxhc3RpY2l0eSA9IDAuMSxcclxuICAgICAgICB0YXJnZXQgPSAoKSA9PiBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKClcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKHsgcG9zaXRpb24gfSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5lbGFzdGljaXR5ID0gZWxhc3RpY2l0eTtcclxuICAgICAgICB0aGlzLmRhbXBpbmcgPSBkYW1waW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbG9jaXR5KCkge1xyXG4gICAgICAgIGxldCBkYW1waW5nRm9yY2UgPSB0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSh0aGlzLmRhbXBpbmcpO1xyXG4gICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLnRhcmdldCgpXHJcbiAgICAgICAgICAgIC5jb3B5KClcclxuICAgICAgICAgICAgLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pXHJcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmVsYXN0aWNpdHkpXHJcbiAgICAgICAgICAgIC5zdWJ0cmFjdChkYW1waW5nRm9yY2UpO1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzUG9vbCA9IG5ldyBJbnN0YW5jZVBvb2woQ2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCh7XHJcbiAgICAgICAgc2l6ZSA9IDIsXHJcbiAgICAgICAgbWFnbml0dWRlID0gMTAsXHJcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiBcIiNmMDBcIiB9LFxyXG4gICAgICAgIHBhcnRpY2xlU2l6ZSA9IDIwLFxyXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIGZyb21BbmdsZSA9IDAsXHJcbiAgICAgICAgdG9BbmdsZSA9IE1hdGguUEkgKiAyLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5jb25jYXQoVXRpbHMucmFuZ2Uoc2l6ZSwgKCkgPT4gdGhpcy5jaXJjbGVzUG9vbC5uZXcoe1xyXG4gICAgICAgICAgICBzdHlsZSwgcG9zaXRpb246IHBvc2l0aW9uLmNvcHkoKSwgcmFkaXVzOiBwYXJ0aWNsZVNpemUsIHZlbG9jaXR5RGFtcGluZzogMC45NyxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb21Qb2xhcigxLCBmcm9tQW5nbGUsIHRvQW5nbGUpXHJcbiAgICAgICAgICAgICAgICAuc2NhbGUoVXRpbHMucmFuZG9tKG1hZ25pdHVkZSAvIDIsIG1hZ25pdHVkZSkpXHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnJhZGl1cyAvPSBVdGlscy5yYW5kb20oMS4wNSwgMS4xKTtcclxuICAgICAgICAgICAgcGFydGljbGUudXBkYXRlKGR0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGl2ZSA9IHBhcnRpY2xlLnJhZGl1cyA+IDAuNTtcclxuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZmlyZSgpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS51cGRhdGUoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFsaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW5kZXIocmVuZGVyZXIpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYWxpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9wcmltaXRpdmVzLmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbiwgdHJhbnNmb3JtZWRSZW5kZXJpbmcpIHtcclxuICAgICAgICB0aGlzLnB1c2godHJhbnNmb3JtYXRpb24pO1xyXG4gICAgICAgIHRyYW5zZm9ybWVkUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKHtcclxuICAgICAgICBzY2FsZSA9IG5ldyBWZWN0b3IoMSwgMSksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uID0gbmV3IFZlY3RvcigpXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XHJcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodHJhbnNsYXRpb24ueCwgdHJhbnNsYXRpb24ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaXJjbGUocG9zaXRpb24sIHJhZGl1cywgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Qmx1ciA9IDUwO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWN0YW5nbGUocG9zaXRpb24sIHNpemUsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCAtIHNpemUud2lkdGggLyAyLCBwb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvbHlnb24ocG9pbnRzLCBzaXplID0gMSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50c1swXS54ICogc2l6ZSwgcG9pbnRzWzBdLnkgKiBzaXplKTtcclxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKiBzaXplLCBwb2ludC55ICogc2l6ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5vYmplY3RzKSB7XHJcbiAgICAgICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdHMgPT4ge1xyXG4gICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RzLnNldHVwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0cy5zZXR1cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY29uY2F0KG9iamVjdHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QucmVuZGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maWx0ZXIob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShjdHgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5hbGl2ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9zY2VuZS5qcyIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbJyM2ZjYnLCAnI2Y2NicsICcjNjZmJywgJyNmZjMnLCAnIzNmZicsICcjZjNmJ107XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvY29uZmlnLmpzIiwiaW1wb3J0IHtcclxuICAgIFZlY3RvciwgQ2FudmFzUmVuZGVyZXIsIFNjZW5lLFxyXG4gICAgRW5naW5lLCBTcHJpbmd5VmVjdG9yLCBQYXJhbGxheFxyXG59IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5pbXBvcnQgeyBJTyB9IGZyb20gJy4vaW8nO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IEFzdGVyb2lkRmllbGQgfSBmcm9tICcuL2FzdGVyb2lkLWZpZWxkJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5cclxubGV0IGluaXQgPSAoY2FudmFzKSA9PiB7XHJcblxyXG4gICAgbGV0IFsgd2lkdGgsIGhlaWdodCBdID0gWyBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgXSA9IFsgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCBdO1xyXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnNjYWxlKDEsIC0xKTtcclxuXHJcblxyXG4gICAgbGV0IGlvID0gbmV3IElPKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIGxldCBlbmdpbmUgPSBuZXcgRW5naW5lKHJlbmRlcmVyLCBzY2VuZSk7XHJcblxyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihpbywgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcihjb250cm9sbGVyKTtcclxuICAgIGxldCBjYW1lcmEgPSBuZXcgU3ByaW5neVZlY3Rvcih7XHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgNTApLCBlbGFzdGljaXR5OiAwLjA4LCBkYW1waW5nOiAwLjMsXHJcbiAgICAgICAgdGFyZ2V0OiAoKSA9PiBwbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChwbGF5ZXIudmVsb2NpdHkuY29weSgpLnNjYWxlKDMpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KGNhbWVyYS5wb3NpdGlvbik7XHJcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBpby5vbk1vdXNlKCgpID0+IHBsYXllci5zcGVlZCA9IDUsICgpID0+IHBsYXllci5zcGVlZCA9IDApO1xyXG4gICAgZW52aXJvbm1lbnQuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4gcGFyYWxsYXguYWRkTGF5ZXIoeyBkZXB0aDogbGF5ZXIuZGVwdGgsIG9iamVjdHM6IGxheWVyLm9iamVjdHMgfSkpO1xyXG4gICAgcGFyYWxsYXguYWRkTGF5ZXIoeyBvYmplY3RzOiBbcGxheWVyLCBuZXcgQXN0ZXJvaWRGaWVsZChwbGF5ZXIsIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKV0gfSk7XHJcbiAgICBzY2VuZS5hZGQocGFyYWxsYXgsIGNvbnRyb2xsZXIsIGNhbWVyYSwgZW52aXJvbm1lbnQpO1xyXG5cclxuXHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgKGZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcclxuICAgICAgICBlbmdpbmUuY2xlYXIoKS5yZW5kZXIoKS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbiAgICB9KSgpO1xyXG5cclxufTtcclxuXHJcblxyXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQsXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcblxyXG5pbml0KGNhbnZhcyk7XHJcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IGluaXQoY2FudmFzKTtcclxuLy8gY2FudmFzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbi8vICAgICAoY2FudmFzLnJlcXVlc3RGdWxsU2NyZWVuIHx8XHJcbi8vICAgICAgICAgY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XHJcbi8vICAgICAgICAgY2FudmFzLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8XHJcbi8vICAgICAgICAgY2FudmFzLm1zUmVxdWVzdEZ1bGxTY3JlZW4pLmNhbGwoY2FudmFzKTtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2luZGV4LmpzIiwiaW1wb3J0IHsgU3Bhd25lciwgUG9seWdvbiwgRXhwbG9zaW9uLCBVdGlscywgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBc3Rlcm9pZEZpZWxkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIHJhZGl1cykge1xyXG4gICAgICAgIGxldCBudW1Bc3Rlcm9pZHMgPSAxNTtcclxuICAgICAgICB0aGlzLmFsaXZlID0gKCkgPT4gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcyA9IFV0aWxzLnJhbmdlKG51bUFzdGVyb2lkcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IFV0aWxzLnJhbmRvbSgxMCwgNDApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvbHlnb24oe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpIH0sXHJcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbSgtMC41LCAwLjUsIC0wLjUsIDAuNSksIHNpemUsXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKDAsIE1hdGguUEkgKiAyKSwgdGhpcy5yYWRpdXMgLyAyICsgMjApKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZFNoYXBlKCkge1xyXG4gICAgICAgIGxldCBzZWdtZW50cyA9IDU7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKHNlZ21lbnRzLCBzZWdtZW50ID0+XHJcbiAgICAgICAgICAgIFZlY3Rvci5wb2xhcigoc2VnbWVudCAvIHNlZ21lbnRzKSAqIE1hdGguUEkgKiAyLCBVdGlscy5yYW5kb20oMC41LCAxKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkQ29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGN0eCkge1xyXG4gICAgICAgIGxldCBwbGF5ZXJTcGVlZCA9IHRoaXMucGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4ge1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC51cGRhdGUoY3R4KTtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5wbGF5ZXIucG9zaXRpb24uZGlzdGFuY2UoYXN0ZXJvaWQucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbG9yICE9IGFzdGVyb2lkLnN0eWxlLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFzdGVyb2lkLnBvc2l0aW9uLCBzaXplOiBhc3Rlcm9pZC5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVNpemU6IGFzdGVyb2lkLnNpemUgLyAxLjUsIHN0eWxlOiB7IGNvbG9yOiBhc3Rlcm9pZC5zdHlsZS5jb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduaXR1ZGU6IChhc3Rlcm9pZC5zaXplICsgcGxheWVyU3BlZWQgKyBhc3Rlcm9pZC52ZWxvY2l0eS5sZW5ndGgoKSkgLyA1XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlyZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSB8fCBkaXN0YW5jZSA+IHRoaXMucmFkaXVzIC8gMiArIDUwKSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9zaXRpb24gPSB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvaW50cyA9IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpO1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQuc3R5bGUuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IGFzdGVyb2lkLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2FzdGVyb2lkLWZpZWxkLmpzIiwiaW1wb3J0IHsgVmVjdG9yLCBDaXJjbGUsIFNwcmluZ3lWZWN0b3IsIFJlY3RhbmdsZSB9IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlvLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyA2O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAncmVkJztcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IoLXdpZHRoIC8gMiArIHRoaXMucmFkaXVzICsgNDUsIC1oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMgKyA0NSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZyA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxyXG4gICAgICAgICAgICBkYW1waW5nOiAwLjUsXHJcbiAgICAgICAgICAgIHRhcmdldDogKCkgPT4gaW8ubW91c2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZSA9IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiAwLjUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyAvIDEuNSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZ1ZWxUYW5rVWkgPSBuZXcgUmVjdGFuZ2xlKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgaGVpZ2h0IC8gMiAtIDEwKSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aCwgaGVpZ2h0OiA1MCB9LFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0OiAyMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZ1ZWxUYW5rKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICB0aGlzLmZ1ZWxUYW5rVWkud2lkdGggPSB0aGlzLndpZHRoICogcGVyY2VudGFnZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnBvc2l0aW9uID0gdGhpcy5jZW50ZXIuY29weSgpLmFkZCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvY29udHJvbGxlci5qcyIsImltcG9ydCB7IFV0aWxzLCBDaXJjbGUsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbWVyYSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogNCB9KSwgZGVwdGg6IDAuOCB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDMgfSksIGRlcHRoOiAwLjkgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAyIH0pLCBkZXB0aDogMS4xIH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMSB9KSwgZGVwdGg6IDEuMiB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjaXJjbGVHZW5lcmF0b3IoY291bnQsIHsgc2l6ZSB9ID0ge30pIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2UoY291bnQsICgpID0+IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogVmVjdG9yLnJhbmRvbSgtdGhpcy53aWR0aCAvIDIsIHRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICByYWRpdXM6IFV0aWxzLnJhbmRvbSgxLCBzaXplKSwgc3R5bGU6IHsgY29sb3I6IFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyksIG9wYWNpdHk6IDAuNiB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbWVyYVBvcyA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkoKS5zY2FsZSgxIC8gbGF5ZXIuZGVwdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCA+IHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggKyB0aGlzLndpZHRoIC8gMiAtIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24ueCAtIGNhbWVyYVBvcy54ID4gdGhpcy53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCAtIHRoaXMud2lkdGggLyAyICsgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55ID4gdGhpcy5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ID0gY2FtZXJhUG9zLnkgKyB0aGlzLmhlaWdodCAtIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24ueSAtIGNhbWVyYVBvcy55ID4gdGhpcy5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ID0gY2FtZXJhUG9zLnkgKyAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvZW52aXJvbm1lbnQuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJTyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLm1vdXNlID0gbmV3IFZlY3RvcigwLCAzMDApO1xyXG5cclxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEhhbmRsZXJzKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5rZXlIYW5kbGVycykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlTdGF0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0uaGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlciAmJiB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZShkb3duSGFuZGxlciwgdXBIYW5kbGVyKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd25IYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleSwgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzW2tleV0gPSB7IGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVG91Y2goeyBjaGFuZ2VkVG91Y2hlcyB9KSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZS5zZXQoY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLWNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICsgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyB4LCB5IH0pID0+XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Uuc2V0KHggLSB0aGlzLndpZHRoIC8gMiwgLXkgKyB0aGlzLmhlaWdodCAvIDIpKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pby5qcyIsImltcG9ydCB7XHJcbiAgICBWZWN0b3IsIENvbXBvc2l0ZSwgRm91bnRhaW4sIFBvbHlnb24sXHJcbiAgICBVdGlscywgU3Bhd25lciwgRXhwbG9zaW9uLCBSZWN0YW5nbGVcclxufSBmcm9tICdlbmdpbmUnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuXHJcbiAgICAgICAgdGhpcy5mdWVsVGFua01heCA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5mdWVsVGFuayA9IHRoaXMuZnVlbFRhbmtNYXg7XHJcblxyXG4gICAgICAgIHRoaXMuZXhoYXVzdCA9IG5ldyBGb3VudGFpbih7IHBhcnRpY2xlU2l6ZTogNCwgc3R5bGU6IHsgb3BhY2l0eTogMC4yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BbmdsZTogTWF0aC5QSSAvIDIgKiAzIC0gMC4zLCB0b0FuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgKyAwLjMgfSk7XHJcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFBvbHlnb24oeyBwb2ludHM6IFtuZXcgVmVjdG9yKC01LCAwKSwgbmV3IFZlY3RvcigwLCAtMyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1LCAwKSwgbmV3IFZlY3RvcigwLCAxNSldIH0pO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5leGhhdXN0IH0pO1xyXG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLnNoaXAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgc2l6ZTogMzAsIHBhcnRpY2xlU2l6ZTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yIH0sIG1hZ25pdHVkZTogNVxyXG4gICAgICAgIH0pLmZpcmUoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaXplID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5leGhhdXN0LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5mdWVsVGFua1VpLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0RnVlbFRhbmsodGhpcy5mdWVsVGFuayAvIHRoaXMuZnVlbFRhbmtNYXgpO1xyXG5cclxuICAgICAgICBsZXQgZm9yd2FyZEFuZ2xlID0gdGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5hbmdsZSgpICsgTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcudG9BbmdsZSA9IGZvcndhcmRBbmdsZSArIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcubWFnbml0dWRlID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLnNpemUgPSB0aGlzLnNwZWVkIC8gMS41O1xyXG4gICAgICAgIHRoaXMuZnVlbFRhbmsgPSB0aGlzLmZ1ZWxUYW5rIDwgMCA/IDAgOiB0aGlzLmZ1ZWxUYW5rIC0gdGhpcy5zcGVlZCAvIDEwO1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmNvcHkoKS5zY2FsZSgoMSAvIDMwMDApICogdGhpcy5zcGVlZCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpID4gMi41KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGVUbygyLjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9wbGF5ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9