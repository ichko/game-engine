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
                        _this2.player.damage(asteroid.size + _this2.player.speed);
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
        _this.fuelTank = _this.fuelTankMax / 10;

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
            this.controller.setFuelTank(this.fuelTank / this.fuelTankMax);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjllMzhjMzY5MGQ2ZmY4YTgxNzkiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJhc3Rlcm9pZHMiLCJyYW5kb21Bc3Rlcm9pZFBvc2l0aW9uIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInJhbmRvbUFzdGVyb2lkU2hhcGUiLCJleHBsb3Npb25zIiwiZXhwbG9zaW9uU3Bhd25lciIsInNwbGljZSIsInNlZ21lbnRzIiwic2VnbWVudCIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImRhbWFnZSIsInJldml2ZSIsIkNvbnRyb2xsZXIiLCJjZW50ZXIiLCJkaXJlY3Rpb24iLCJjb250cm9sbGVyU3ByaW5nIiwibW91c2UiLCJiaWdDaXJjbGUiLCJzbWFsbENpcmNsZSIsImZ1ZWxUYW5rVWkiLCJwZXJjZW50YWdlIiwiY3V0IiwiRW52aXJvbm1lbnQiLCJjaXJjbGVHZW5lcmF0b3IiLCJjb3VudCIsImNhbWVyYVBvcyIsIklPIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJlIiwiY2hhbmdlVG91Y2giLCJtb3VzZURvd24iLCJQbGF5ZXIiLCJmdWVsVGFua01heCIsImZ1ZWxUYW5rIiwiZXhoYXVzdCIsInNoaXAiLCJzZXRGdWVsRGlmZiIsImZ1ZWxEaWZmIiwibmV3RnVlbCIsImtpbGwiLCJzZXRGdWVsVGFuayIsImZvcndhcmRBbmdsZSIsInNwZWVkRm9yY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFD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LENBQXdDLElBQUksSUFBTCxHQUFhb08sVUFBcEQsQ0FBbEI7QUFDQSxnQkFBSSxLQUFLL0wsUUFBTCxDQUFjOUMsTUFBZCxLQUF5QixHQUE3QixFQUFrQztBQUM5QixxQkFBSzhDLFFBQUwsQ0FBY3ZDLE9BQWQsQ0FBc0IsR0FBdEI7QUFDSDtBQUNKIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOWUzOGMzNjkwZDZmZjhhODE3OSIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBzZXQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cblxuICAgIGFkZCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGUoYW5nbGUpIHtcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGNvcyAtIHRoaXMueSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhbmdsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIGN1dChzaXplKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBpZiAobGVuZ3RoID4gc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcbiAgICB9XG5cbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54IC09IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlKHNpemUpIHtcbiAgICAgICAgdGhpcy54ICo9IHNpemU7XG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFV0aWxzLnJhbmRvbShtaW5YLCBtYXhYKSwgVXRpbHMucmFuZG9tKG1pblksIG1heFkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9sYXIoYW5nbGUgPSAwLCBsZW5ndGggPSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdmVjdG9yLmpzIiwiZXhwb3J0IGNvbnN0IFV0aWxzID0ge1xuXG4gICAgcmFuZG9tOiBmdW5jdGlvbihtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfSxcblxuICAgIHJhbmRvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpKV07XG4gICAgfSxcblxuICAgIHJhbmdlOiBmdW5jdGlvbihzaXplLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KE1hdGgucm91bmQoc2l6ZSkpLmtleXMoKSkubWFwKGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJTZXQ6IGZ1bmN0aW9uKHNldCwgcHJlZGljYXRlKSB7XG4gICAgICAgIHNldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmVkaWNhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS91dGlscy5qcyIsImV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc2V0KHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogJyNmMDAnIH0sXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXG4gICAgICAgIHNpemUgPSAxXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB0aGlzLnZlbG9jaXR5RGFtcGluZyA9IHZlbG9jaXR5RGFtcGluZztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKGR0KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsZWFzZWQuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxubGV0IHBvb2xDb250YWluZXIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIEluc3RhbmNhYmxlIHtcbiAgICBcbiAgICBzdGF0aWMgZ2V0UG9vbCgpIHtcbiAgICAgICAgbGV0IHBvb2wgPSBwb29sQ29udGFpbmVyW3RoaXMubmFtZV07XG4gICAgICAgIGlmICghcG9vbCkge1xuICAgICAgICAgICAgcG9vbCA9IG5ldyBJbnN0YW5jZVBvb2wodGhpcyk7XG4gICAgICAgICAgICBwb29sQ29udGFpbmVyLmFkZChwb29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb29sO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKCkubmV3KC4uLmNvbmZpZyk7XG4gICAgfVxuICAgXG4gICAgc3RhdGljIHJlbGVhc2UoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLnJlbGVhc2UoaW5zdGFuY2UpO1xuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2VuZ2luZS5qcyIsImV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy56b29tID0gMTtcbiAgICB9XG5cbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAtMSAvIGRlcHRoIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5yZWZlcmVuY2UuY29weSgpLnNjYWxlKGxheWVyLmRlcHRoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBzZXQoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcbiAgICAgICAgcmVuZGVyZXIuY2lyY2xlKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aCB8fCAxMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDEwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5yZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgeyB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCB9LCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZCh7IG9mZnNldCA9IG5ldyBWZWN0b3IoKSwgb2JqZWN0IH0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgb2JqZWN0LCBvZmZzZXQgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHsgb2JqZWN0LCBvZmZzZXQgfSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XG4gICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3ByaW5neVZlY3RvciBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBkYW1waW5nID0gMC4xLFxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxuICAgICAgICB0YXJnZXQgPSAoKSA9PiBuZXcgVmVjdG9yKCksXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHsgcG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xuICAgICAgICB0aGlzLmRhbXBpbmcgPSBkYW1waW5nO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KCkge1xuICAgICAgICBsZXQgZGFtcGluZ0ZvcmNlID0gdGhpcy52ZWxvY2l0eS5jb3B5KCkuc2NhbGUodGhpcy5kYW1waW5nKTtcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcbiAgICAgICAgICAgIC5jb3B5KClcbiAgICAgICAgICAgIC5zdWJ0cmFjdCh0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcbiAgICAgICAgICAgIC5zdWJ0cmFjdChkYW1waW5nRm9yY2UpO1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xuICAgIH1cblxuICAgIGZpcmUoKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXQoe1xuICAgICAgICBzaXplID0gMixcbiAgICAgICAgbWFnbml0dWRlID0gMTAsXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogXCIjZjAwXCIgfSxcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBmcm9tQW5nbGUgPSAwLFxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuY29uY2F0KFV0aWxzLnJhbmdlKHNpemUsICgpID0+IHRoaXMuY2lyY2xlc1Bvb2wubmV3KHtcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxuICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb21Qb2xhcigxLCBmcm9tQW5nbGUsIHRvQW5nbGUpXG4gICAgICAgICAgICAgICAgLnNjYWxlKFV0aWxzLnJhbmRvbShtYWduaXR1ZGUgLyAyLCBtYWduaXR1ZGUpKVxuICAgICAgICB9KSkpO1xuICAgIH1cblxuICAgIGFsaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xuICAgICAgICAgICAgcGFydGljbGUudXBkYXRlKGR0KTtcblxuICAgICAgICAgICAgbGV0IGFsaXZlID0gcGFydGljbGUucmFkaXVzID4gMC41O1xuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wucmVsZWFzZShwYXJ0aWNsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhbGl2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGb3VudGFpbiBleHRlbmRzIEV4cGxvc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5maXJlKCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XG4gICAgICAgIHRoaXMuZW1pc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24gPSAoKCkgPT4gZmFsc2UpLCBjcmVhdG9yID0gKCgpID0+IFtdKSkge1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi50aGlzLmNyZWF0b3IoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFsaXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbiwgdHJhbnNmb3JtZWRSZW5kZXJpbmcpIHtcbiAgICAgICAgdGhpcy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcbiAgICAgICAgdHJhbnNmb3JtZWRSZW5kZXJpbmcoKTtcbiAgICAgICAgdGhpcy5wb3AoKTtcbiAgICB9XG5cbiAgICBwdXNoKHtcbiAgICAgICAgc2NhbGUgPSBuZXcgVmVjdG9yKDEsIDEpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHRyYW5zbGF0aW9uID0gbmV3IFZlY3RvcigpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbi54LCB0cmFuc2xhdGlvbi55KTtcbiAgICB9XG5cbiAgICBwb3AoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjaXJjbGUocG9zaXRpb24sIHJhZGl1cywgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbG9yO1xuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dCbHVyID0gNTA7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICByZWN0YW5nbGUocG9zaXRpb24sIHNpemUsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCAtIHNpemUud2lkdGggLyAyLCBwb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHBvbHlnb24ocG9pbnRzLCBzaXplID0gMSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9pbnRzWzBdLnggKiBzaXplLCBwb2ludHNbMF0ueSAqIHNpemUpO1xuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICogc2l6ZSwgcG9pbnQueSAqIHNpemUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xuICAgIH1cblxuICAgIGFkZCguLi5vYmplY3RzKSB7XG4gICAgICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3RzID0+IHtcbiAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdHMuc2V0dXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5zZXR1cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmNvbmNhdChvYmplY3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LnJlbmRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuYWxpdmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvc2NlbmUuanMiLCJleHBvcnQgY29uc3QgY29sb3JzID0gWycjNmY2JywgJyNmNjYnLCAnIzY2ZicsICcjZmYzJywgJyMzZmYnLCAnI2YzZiddO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb25maWcuanMiLCJpbXBvcnQge1xuICAgIFZlY3RvciwgQ2FudmFzUmVuZGVyZXIsIFNjZW5lLFxuICAgIEVuZ2luZSwgU3ByaW5neVZlY3RvciwgUGFyYWxsYXhcbn0gZnJvbSAnZW5naW5lJztcblxuaW1wb3J0IHsgSU8gfSBmcm9tICcuL2lvJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IEFzdGVyb2lkRmllbGQgfSBmcm9tICcuL2FzdGVyb2lkLWZpZWxkJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuXG5sZXQgaW5pdCA9IChjYW52YXMpID0+IHtcblxuICAgIGxldCBbIHdpZHRoLCBoZWlnaHQgXSA9IFsgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgIGN0eC5zY2FsZSgxLCAtMSk7XG5cblxuICAgIGxldCBpbyA9IG5ldyBJTyh3aWR0aCwgaGVpZ2h0KTtcbiAgICBsZXQgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICBsZXQgZW5naW5lID0gbmV3IEVuZ2luZShyZW5kZXJlciwgc2NlbmUpO1xuXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihpbywgd2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoY29udHJvbGxlcik7XG4gICAgbGV0IGNhbWVyYSA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgNTApLCBlbGFzdGljaXR5OiAwLjA4LCBkYW1waW5nOiAwLjMsXG4gICAgICAgIHRhcmdldDogKCkgPT4gcGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQocGxheWVyLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSgzKSlcbiAgICB9KTtcblxuICAgIGxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xuICAgIGxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChjYW1lcmEsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaW8ub25Nb3VzZSgoKSA9PiBwbGF5ZXIuc3BlZWQgPSA1LCAoKSA9PiBwbGF5ZXIuc3BlZWQgPSAwKTtcbiAgICBlbnZpcm9ubWVudC5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiBwYXJhbGxheC5hZGRMYXllcih7IGRlcHRoOiBsYXllci5kZXB0aCwgb2JqZWN0czogbGF5ZXIub2JqZWN0cyB9KSk7XG4gICAgcGFyYWxsYXguYWRkTGF5ZXIoeyBvYmplY3RzOiBbcGxheWVyLCBuZXcgQXN0ZXJvaWRGaWVsZChwbGF5ZXIsIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKV0gfSk7XG4gICAgc2NlbmUuYWRkKHBhcmFsbGF4LCBjb250cm9sbGVyLCBjYW1lcmEsIGVudmlyb25tZW50KTtcblxuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICAgICAgICBlbmdpbmUuY2xlYXIoKS5yZW5kZXIoKS51cGRhdGUoKTtcblxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9KSgpO1xuXG59O1xuXG5cbmxldCBhbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZCxcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbmluaXQoY2FudmFzKTtcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IGluaXQoY2FudmFzKTtcbi8vIGNhbnZhcy5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICAgIChjYW52YXMucmVxdWVzdEZ1bGxTY3JlZW4gfHxcbi8vICAgICAgICAgY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XG4vLyAgICAgICAgIGNhbnZhcy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuLy8gICAgICAgICBjYW52YXMubXNSZXF1ZXN0RnVsbFNjcmVlbikuY2FsbChjYW52YXMpO1xuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pbmRleC5qcyIsImltcG9ydCB7IFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgVXRpbHMsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEFzdGVyb2lkRmllbGQge1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcbiAgICAgICAgbGV0IG51bUFzdGVyb2lkcyA9IDE1O1xuICAgICAgICB0aGlzLmFsaXZlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmFzdGVyb2lkcyA9IFV0aWxzLnJhbmdlKG51bUFzdGVyb2lkcywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9seWdvbih7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tKC0wLjUsIDAuNSwgLTAuNSwgMC41KSwgc2l6ZSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gNTtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKHNlZ21lbnRzLCBzZWdtZW50ID0+XG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcbiAgICB9XG5cbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIGxldCBwbGF5ZXJTcGVlZCA9IHRoaXMucGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpO1xuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcbiAgICAgICAgICAgIGFzdGVyb2lkLnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5wbGF5ZXIucG9zaXRpb24uZGlzdGFuY2UoYXN0ZXJvaWQucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbG9yICE9IGFzdGVyb2lkLnN0eWxlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmRhbWFnZShhc3Rlcm9pZC5zaXplICsgdGhpcy5wbGF5ZXIuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmV2aXZlKGFzdGVyb2lkLnNpemUgKyB0aGlzLnBsYXllci5zcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFzdGVyb2lkLnBvc2l0aW9uLCBzaXplOiBhc3Rlcm9pZC5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTaXplOiBhc3Rlcm9pZC5zaXplIC8gMS41LCBzdHlsZTogeyBjb2xvcjogYXN0ZXJvaWQuc3R5bGUuY29sb3IgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hZ25pdHVkZTogKGFzdGVyb2lkLnNpemUgKyBwbGF5ZXJTcGVlZCArIGFzdGVyb2lkLnZlbG9jaXR5Lmxlbmd0aCgpKSAvIDVcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlyZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSB8fCBkaXN0YW5jZSA+IHRoaXMucmFkaXVzIC8gMiArIDUwKSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9pbnRzID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKCk7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQuc3R5bGUuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4gYXN0ZXJvaWQucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsImltcG9ydCB7IFZlY3RvciwgQ2lyY2xlLCBTcHJpbmd5VmVjdG9yLCBSZWN0YW5nbGUgfSBmcm9tICdlbmdpbmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGlvLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDY7XG4gICAgICAgIHRoaXMuY29sb3IgPSAncmVkJztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgVmVjdG9yKC13aWR0aCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1LCAtaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzICsgNDUpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IoKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcgPSBuZXcgU3ByaW5neVZlY3Rvcih7XG4gICAgICAgICAgICBlbGFzdGljaXR5OiAwLjEsXG4gICAgICAgICAgICBkYW1waW5nOiAwLjUsXG4gICAgICAgICAgICB0YXJnZXQ6ICgpID0+IGlvLm1vdXNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZSA9IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmNlbnRlcixcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiAwLjUgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZSA9IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyAvIDEuNSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmNlbnRlcixcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiAwLjUgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mdWVsVGFua1VpID0gbmV3IFJlY3RhbmdsZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcigwLCBoZWlnaHQgLyAyIC0gMTApLFxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aCwgaGVpZ2h0OiA1MCB9LFxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodDogMjBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5mdWVsVGFua1VpLnJlbmRlcihyZW5kZXJlcik7XG4gICAgfVxuXG4gICAgc2V0RnVlbFRhbmsocGVyY2VudGFnZSkge1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rVWkud2lkdGggPSB0aGlzLndpZHRoICogcGVyY2VudGFnZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZy51cGRhdGUoKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY29udHJvbGxlclNwcmluZy5wb3NpdGlvbi5jb3B5KCkuc3VidHJhY3QodGhpcy5jZW50ZXIpLmN1dCh0aGlzLnJhZGl1cyAvIDIpO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnBvc2l0aW9uID0gdGhpcy5jZW50ZXIuY29weSgpLmFkZCh0aGlzLmRpcmVjdGlvbik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBVdGlscywgQ2lyY2xlLCBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW1lcmEsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDQgfSksIGRlcHRoOiAwLjggfSxcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAyIH0pLCBkZXB0aDogMS4xIH0sXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDEgfSksIGRlcHRoOiAxLjIgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2UoY291bnQsICgpID0+IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgcG9zaXRpb246IFZlY3Rvci5yYW5kb20oLXRoaXMud2lkdGggLyAyLCB0aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyAyKSxcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbWVyYVBvcyA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkoKS5zY2FsZSgxIC8gbGF5ZXIuZGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54ID4gdGhpcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggKyB0aGlzLndpZHRoIC8gMiAtIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi54IC0gY2FtZXJhUG9zLnggPiB0aGlzLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCAtIHRoaXMud2lkdGggLyAyICsgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55ID4gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24ueSAtIGNhbWVyYVBvcy55ID4gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XG5cblxuZXhwb3J0IGNsYXNzIElPIHtcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5tb3VzZSA9IG5ldyBWZWN0b3IoMCwgMzAwKTtcblxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzID0ge307XG4gICAgICAgIHRoaXMua2V5U3RhdGVzID0ge307XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgY2FsbEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMua2V5SGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0uaGFuZGxlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyICYmIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2UoZG93bkhhbmRsZXIsIHVwSGFuZGxlcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwSGFuZGxlcik7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwSGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25LZXkoa2V5LCBoYW5kbGVyLCByZXZlcnNlSGFuZGxlcikge1xuICAgICAgICB0aGlzLmtleUhhbmRsZXJzW2tleV0gPSB7IGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNoYW5nZVRvdWNoKHsgY2hhbmdlZFRvdWNoZXMgfSkge1xuICAgICAgICB0aGlzLm1vdXNlLnNldChjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLWNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICsgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKHsgeCwgeSB9KSA9PlxuICAgICAgICAgICAgdGhpcy5tb3VzZS5zZXQoeCAtIHRoaXMud2lkdGggLyAyLCAteSArIHRoaXMuaGVpZ2h0IC8gMikpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IGZhbHNlKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gZmFsc2UpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pby5qcyIsImltcG9ydCB7XG4gICAgVmVjdG9yLCBDb21wb3NpdGUsIEZvdW50YWluLCBQb2x5Z29uLFxuICAgIFV0aWxzLCBTcGF3bmVyLCBFeHBsb3Npb24sIFJlY3RhbmdsZVxufSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuXG4gICAgICAgIHRoaXMuZnVlbFRhbmtNYXggPSAxMDAwO1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rID0gdGhpcy5mdWVsVGFua01heCAvIDEwO1xuXG4gICAgICAgIHRoaXMuZXhoYXVzdCA9IG5ldyBGb3VudGFpbih7IHBhcnRpY2xlU2l6ZTogNCwgc3R5bGU6IHsgb3BhY2l0eTogMC4yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQW5nbGU6IE1hdGguUEkgLyAyICogMyAtIDAuMywgdG9BbmdsZTogTWF0aC5QSSAvIDIgKiAzICsgMC4zIH0pO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgUG9seWdvbih7IHBvaW50czogW25ldyBWZWN0b3IoLTUsIDApLCBuZXcgVmVjdG9yKDAsIC0zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1LCAwKSwgbmV3IFZlY3RvcigwLCAxNSldIH0pO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyk7XG5cbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuZXhoYXVzdCB9KTtcbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuc2hpcCB9KTtcblxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcbiAgICB9XG4gICAgXG4gICAgcmV2aXZlKHNpemUgPSAxMCkge1xuICAgICAgICB0aGlzLnNldEZ1ZWxEaWZmKHNpemUpO1xuICAgIH1cbiAgICBcbiAgICBkYW1hZ2Uoc2l6ZSA9IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0RnVlbERpZmYoLXNpemUpO1xuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLCBzaXplOiAzMCwgcGFydGljbGVTaXplOiAyMCxcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yIH0sIG1hZ25pdHVkZTogNVxuICAgICAgICB9KS5maXJlKCkpO1xuICAgIH1cbiAgICBcbiAgICBzZXRGdWVsRGlmZihmdWVsRGlmZiA9IDEwKSB7XG4gICAgICAgIGxldCBuZXdGdWVsID0gdGhpcy5mdWVsVGFuayArIGZ1ZWxEaWZmO1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbmV3RnVlbCksIHRoaXMuZnVlbFRhbmtNYXgpO1xuICAgICAgICBpZiAodGhpcy5mdWVsVGFuayA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmtpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtpbGwoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTtcblxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmV4aGF1c3Quc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZnVlbFRhbmtVaS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRGdWVsVGFuayh0aGlzLmZ1ZWxUYW5rIC8gdGhpcy5mdWVsVGFua01heCk7XG5cbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XG4gICAgICAgIGxldCBzcGVlZEZvcmNlID0gdGhpcy5mdWVsVGFuayA+IDAgPyB0aGlzLnNwZWVkIDogMDtcblxuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy5mcm9tQW5nbGUgPSBmb3J3YXJkQW5nbGUgLSAxIC8gc3BlZWRGb3JjZTtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy50b0FuZ2xlID0gZm9yd2FyZEFuZ2xlICsgMSAvIHNwZWVkRm9yY2U7XG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcubWFnbml0dWRlID0gc3BlZWRGb3JjZSAvIDEuNTtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy5zaXplID0gc3BlZWRGb3JjZSAvIDEuNTtcbiAgICAgICAgdGhpcy5mdWVsVGFuayA9IHRoaXMuZnVlbFRhbmsgPCAwID8gMCA6IHRoaXMuZnVlbFRhbmsgLSBzcGVlZEZvcmNlIC8gMTA7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQodGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5jb3B5KCkuc2NhbGUoKDEgLyAzMDAwKSAqIHNwZWVkRm9yY2UpKTtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkubGVuZ3RoKCkgPiAyLjUpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGVUbygyLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL3BsYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=