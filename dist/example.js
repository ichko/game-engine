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
            this.fuelTank = newFuel < 0 ? 0 : newFuel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTg5ODUwYzQzMWQyYTYyYTA4ZTQiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJhc3Rlcm9pZHMiLCJyYW5kb21Bc3Rlcm9pZFBvc2l0aW9uIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInJhbmRvbUFzdGVyb2lkU2hhcGUiLCJleHBsb3Npb25zIiwiZXhwbG9zaW9uU3Bhd25lciIsInNwbGljZSIsInNlZ21lbnRzIiwic2VnbWVudCIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImRhbWFnZSIsInJldml2ZSIsIkNvbnRyb2xsZXIiLCJjZW50ZXIiLCJkaXJlY3Rpb24iLCJjb250cm9sbGVyU3ByaW5nIiwibW91c2UiLCJiaWdDaXJjbGUiLCJzbWFsbENpcmNsZSIsImZ1ZWxUYW5rVWkiLCJwZXJjZW50YWdlIiwiY3V0IiwiRW52aXJvbm1lbnQiLCJjaXJjbGVHZW5lcmF0b3IiLCJjb3VudCIsImNhbWVyYVBvcyIsIklPIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJlIiwiY2hhbmdlVG91Y2giLCJtb3VzZURvd24iLCJQbGF5ZXIiLCJmdWVsVGFua01heCIsImZ1ZWxUYW5rIiwiZXhoYXVzdCIsInNoaXAiLCJzZXRGdWVsRGlmZiIsImZ1ZWxEaWZmIiwibmV3RnVlbCIsImtpbGwiLCJzZXRGdWVsVGFuayIsImZvcndhcmRBbmdsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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cUJBQUs4QyxRQUFMLENBQWN2QyxPQUFkLENBQXNCLEdBQXRCO0FBQ0g7QUFDSiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTg5ODUwYzQzMWQyYTYyYTA4ZTQiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgc2V0KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9XG5cbiAgICBhZGQodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlKSB7XG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XG4gICAgICAgIGxldCB0bXBYID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYW5nbGUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICBjdXQoc2l6ZSkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCA+IHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkuc2NhbGUoc2l6ZSk7XG4gICAgfVxuXG4gICAgc3VidHJhY3QodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3RhbmNlKHZlY3Rvcikge1xuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy55IC0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZShzaXplKSB7XG4gICAgICAgIHRoaXMueCAqPSBzaXplO1xuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb20obWluWCwgbWF4WCwgbWluWSwgbWF4WSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihVdGlscy5yYW5kb20obWluWCwgbWF4WCksIFV0aWxzLnJhbmRvbShtaW5ZLCBtYXhZKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBvbGFyKGFuZ2xlID0gMCwgbGVuZ3RoID0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbShtaW5BbmdsZSwgbWF4QW5nbGUpLCBsZW5ndGgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ZlY3Rvci5qcyIsImV4cG9ydCBjb25zdCBVdGlscyA9IHtcblxuICAgIHJhbmRvbTogZnVuY3Rpb24obWluID0gMCwgbWF4ID0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cbiAgICByYW5kb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xuICAgIH0sXG5cbiAgICByYW5nZTogZnVuY3Rpb24oc2l6ZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgZmlsdGVyU2V0OiBmdW5jdGlvbihzZXQsIHByZWRpY2F0ZSkge1xuICAgICAgICBzZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdXRpbHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50LW1hbmFnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgKiBmcm9tICcuL3ByaW1pdGl2ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL3NjZW5lJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luZGV4LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cblxuICAgIHNldCh7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxuICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxuICAgICAgICBzaXplID0gMVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMucm90YXRpb25DZW50ZXIgPSByb3RhdGlvbkNlbnRlcjtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XG5cbiAgICB1cGRhdGUoY29udGV4dCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uKHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5wcm90b3R5cGVbZnVuYy5uYW1lXSA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2dhbWUtb2JqZWN0LmpzIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlUG9vbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0KC4uLmNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQuYWRkKGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcmVsZWFzZShpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hbGxvY2F0ZWQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmxldCBwb29sQ29udGFpbmVyID0ge307XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jYWJsZSB7XG4gICAgXG4gICAgc3RhdGljIGdldFBvb2woKSB7XG4gICAgICAgIGxldCBwb29sID0gcG9vbENvbnRhaW5lclt0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoIXBvb2wpIHtcbiAgICAgICAgICAgIHBvb2wgPSBuZXcgSW5zdGFuY2VQb29sKHRoaXMpO1xuICAgICAgICAgICAgcG9vbENvbnRhaW5lci5hZGQocG9vbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9vbDtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLm5ldyguLi5jb25maWcpO1xuICAgIH1cbiAgIFxuICAgIHN0YXRpYyByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5yZWxlYXNlKGluc3RhbmNlKTtcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9lbmdpbmUuanMiLCJleHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKG5hbWUsIGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXSA9IHsgY29uZGl0aW9uLCBoYW5kbGVyczogW10gfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oZWxlbWVudHMsIG5hbWUsIGV4ZWN1dG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0uaGFuZGxlcnMucHVzaCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRyaWdnZXJFdmVudHMoKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGxldCB7IGNvbmRpdGlvbiwgaGFuZGxlcnMgfSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoeyBleGVjdXRvciwgZWxlbWVudHMgfSkgPT5cbiAgICAgICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gY29uZGl0aW9uKGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGV4ZWN1dG9yKGVsZW1lbnQpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanMiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJhbGxheCB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSBuZXcgVmVjdG9yKCkpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuem9vbSA9IDE7XG4gICAgfVxuXG4gICAgYWRkTGF5ZXIoeyBvYmplY3RzID0gW10sIGRlcHRoID0gMSB9KSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBvYmplY3RzOiBuZXcgU2V0KG9iamVjdHMpLCBkZXB0aDogLTEgLyBkZXB0aCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZShsYXllci5kZXB0aCksXG4gICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy56b29tLCB0aGlzLnpvb20pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBVdGlscy5maWx0ZXJTZXQobGF5ZXIub2JqZWN0cywgb2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3BhcmFsbGF4LmpzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vZ2FtZS1vYmplY3QnO1xuaW1wb3J0IHsgSW5zdGFuY2VQb29sIH0gZnJvbSAnLi9pbnN0YW5jZS1wb29sJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyLnNldChjb25maWcpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IGNvbmZpZy5yYWRpdXMgfHwgNTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpICB7XG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGggfHwgMTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCB8fCAxMDtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSwgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGQoeyBvZmZzZXQgPSBuZXcgVmVjdG9yKCksIG9iamVjdCB9KSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogb2Zmc2V0IH0pO1xuICAgICAgICAgICAgb2JqZWN0LnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QgfSkgPT4gb2JqZWN0LnVwZGF0ZShjdHgpKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcbiAgICAgICAgZWxhc3RpY2l0eSA9IDAuMSxcbiAgICAgICAgdGFyZ2V0ID0gKCkgPT4gbmV3IFZlY3RvcigpLFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxuICAgIH0gPSB7fSkge1xuICAgICAgICBzdXBlcih7IHBvc2l0aW9uIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5lbGFzdGljaXR5ID0gZWxhc3RpY2l0eTtcbiAgICAgICAgdGhpcy5kYW1waW5nID0gZGFtcGluZztcbiAgICB9XG5cbiAgICB1cGRhdGVWZWxvY2l0eSgpIHtcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XG4gICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLnRhcmdldCgpXG4gICAgICAgICAgICAuY29weSgpXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmVsYXN0aWNpdHkpXG4gICAgICAgICAgICAuc3VidHJhY3QoZGFtcGluZ0ZvcmNlKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jaXJjbGVzUG9vbCA9IG5ldyBJbnN0YW5jZVBvb2woQ2lyY2xlKTtcbiAgICB9XG5cbiAgICBmaXJlKCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0KHtcbiAgICAgICAgc2l6ZSA9IDIsXG4gICAgICAgIG1hZ25pdHVkZSA9IDEwLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXG4gICAgICAgIHBhcnRpY2xlU2l6ZSA9IDIwLFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcbiAgICAgICAgdG9BbmdsZSA9IE1hdGguUEkgKiAyLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XG4gICAgICAgICAgICBzdHlsZSwgcG9zaXRpb246IHBvc2l0aW9uLmNvcHkoKSwgcmFkaXVzOiBwYXJ0aWNsZVNpemUsIHZlbG9jaXR5RGFtcGluZzogMC45NyxcbiAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tUG9sYXIoMSwgZnJvbUFuZ2xlLCB0b0FuZ2xlKVxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnJhZGl1cyAvPSBVdGlscy5yYW5kb20oMS4wNSwgMS4xKTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZShkdCk7XG5cbiAgICAgICAgICAgIGxldCBhbGl2ZSA9IHBhcnRpY2xlLnJhZGl1cyA+IDAuNTtcbiAgICAgICAgICAgIGlmICghYWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZXNQb29sLnJlbGVhc2UocGFydGljbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWxpdmU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRm91bnRhaW4gZXh0ZW5kcyBFeHBsb3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuZmlyZSgpO1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBjb25maWcucG9pbnRzIHx8IFtdO1xuICAgICAgICB0aGlzLmVtaXNzaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xuICAgICAgICByZW5kZXJlci5wb2x5Z29uKHRoaXMucG9pbnRzLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwYXduZXIge1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcbiAgICAgICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24odGhpcy5pdGVtcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goLi4udGhpcy5jcmVhdG9yKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGUoY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5hbGl2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW5kZXIocmVuZGVyZXIpKTsgXG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24sIHRyYW5zZm9ybWVkUmVuZGVyaW5nKSB7XG4gICAgICAgIHRoaXMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XG4gICAgICAgIHRyYW5zZm9ybWVkUmVuZGVyaW5nKCk7XG4gICAgICAgIHRoaXMucG9wKCk7XG4gICAgfVxuXG4gICAgcHVzaCh7XG4gICAgICAgIHNjYWxlID0gbmV3IFZlY3RvcigxLCAxKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICB0cmFuc2xhdGlvbiA9IG5ldyBWZWN0b3IoKVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUocm90YXRpb24pO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodHJhbnNsYXRpb24ueCwgdHJhbnNsYXRpb24ueSk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgY2lyY2xlKHBvc2l0aW9uLCByYWRpdXMsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb2xvcjtcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Qmx1ciA9IDUwO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgcmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggLSBzaXplLndpZHRoIC8gMiwgcG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwb2x5Z29uKHBvaW50cywgc2l6ZSA9IDEsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50c1swXS54ICogc2l6ZSwgcG9pbnRzWzBdLnkgKiBzaXplKTtcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAqIHNpemUsIHBvaW50LnkgKiBzaXplKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9yZW5kZXJlci5qcyIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXTtcbiAgICB9XG5cbiAgICBhZGQoLi4ub2JqZWN0cykge1xuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0cyA9PiB7XG4gICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RzLnNldHVwICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9iamVjdHMuc2V0dXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5yZW5kZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoY3R4KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmFsaXZlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3NjZW5lLmpzIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFsnIzZmNicsICcjZjY2JywgJyM2NmYnLCAnI2ZmMycsICcjM2ZmJywgJyNmM2YnXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvY29uZmlnLmpzIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IsIENhbnZhc1JlbmRlcmVyLCBTY2VuZSxcbiAgICBFbmdpbmUsIFNwcmluZ3lWZWN0b3IsIFBhcmFsbGF4XG59IGZyb20gJ2VuZ2luZSc7XG5cbmltcG9ydCB7IElPIH0gZnJvbSAnLi9pbyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBBc3Rlcm9pZEZpZWxkIH0gZnJvbSAnLi9hc3Rlcm9pZC1maWVsZCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5cblxubGV0IGluaXQgPSAoY2FudmFzKSA9PiB7XG5cbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICBjdHguc2NhbGUoMSwgLTEpO1xuXG5cbiAgICBsZXQgaW8gPSBuZXcgSU8od2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIsIHNjZW5lKTtcblxuICAgIGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xuICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRyb2xsZXIpO1xuICAgIGxldCBjYW1lcmEgPSBuZXcgU3ByaW5neVZlY3Rvcih7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxuICAgICAgICB0YXJnZXQ6ICgpID0+IHBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKHBsYXllci52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoMykpXG4gICAgfSk7XG5cbiAgICBsZXQgcGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoY2FtZXJhLnBvc2l0aW9uKTtcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGlvLm9uTW91c2UoKCkgPT4gcGxheWVyLnNwZWVkID0gNSwgKCkgPT4gcGxheWVyLnNwZWVkID0gMCk7XG4gICAgZW52aXJvbm1lbnQuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4gcGFyYWxsYXguYWRkTGF5ZXIoeyBkZXB0aDogbGF5ZXIuZGVwdGgsIG9iamVjdHM6IGxheWVyLm9iamVjdHMgfSkpO1xuICAgIHBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xuICAgIHNjZW5lLmFkZChwYXJhbGxheCwgY29udHJvbGxlciwgY2FtZXJhLCBlbnZpcm9ubWVudCk7XG5cblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgKGZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcbiAgICAgICAgZW5naW5lLmNsZWFyKCkucmVuZGVyKCkudXBkYXRlKCk7XG5cbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfSkoKTtcblxufTtcblxuXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQsXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5pbml0KGNhbnZhcyk7XG4vLyB3aW5kb3cub25yZXNpemUgPSAoKSA9PiBpbml0KGNhbnZhcyk7XG4vLyBjYW52YXMub25jbGljayA9ICgpID0+IHtcbi8vICAgICAoY2FudmFzLnJlcXVlc3RGdWxsU2NyZWVuIHx8XG4vLyAgICAgICAgIGNhbnZhcy53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuLy8gICAgICAgICBjYW52YXMubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHxcbi8vICAgICAgICAgY2FudmFzLm1zUmVxdWVzdEZ1bGxTY3JlZW4pLmNhbGwoY2FudmFzKTtcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvaW5kZXguanMiLCJpbXBvcnQgeyBTcGF3bmVyLCBQb2x5Z29uLCBFeHBsb3Npb24sIFV0aWxzLCBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBBc3Rlcm9pZEZpZWxkIHtcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgcmFkaXVzKSB7XG4gICAgICAgIGxldCBudW1Bc3Rlcm9pZHMgPSAxNTtcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzaXplID0gVXRpbHMucmFuZG9tKDEwLCA0MCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvbHlnb24oe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCkgfSxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbSgtMC41LCAwLjUsIC0wLjUsIDAuNSksIHNpemUsXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xuICAgIH1cblxuICAgIHJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20oMCwgTWF0aC5QSSAqIDIpLCB0aGlzLnJhZGl1cyAvIDIgKyAyMCkpO1xuICAgIH1cblxuICAgIHJhbmRvbUFzdGVyb2lkU2hhcGUoKSB7XG4gICAgICAgIGxldCBzZWdtZW50cyA9IDU7XG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShzZWdtZW50cywgc2VnbWVudCA9PlxuICAgICAgICAgICAgVmVjdG9yLnBvbGFyKChzZWdtZW50IC8gc2VnbWVudHMpICogTWF0aC5QSSAqIDIsIFV0aWxzLnJhbmRvbSgwLjUsIDEpKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiB7XG4gICAgICAgICAgICBhc3Rlcm9pZC51cGRhdGUoY3R4KTtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5kYW1hZ2UoYXN0ZXJvaWQuc2l6ZSArIHRoaXMucGxheWVyLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJldml2ZShhc3Rlcm9pZC5zaXplICsgdGhpcy5wbGF5ZXIuc3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhc3Rlcm9pZC5wb3NpdGlvbiwgc2l6ZTogYXN0ZXJvaWQuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU2l6ZTogYXN0ZXJvaWQuc2l6ZSAvIDEuNSwgc3R5bGU6IHsgY29sb3I6IGFzdGVyb2lkLnN0eWxlLmNvbG9yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduaXR1ZGU6IChhc3Rlcm9pZC5zaXplICsgcGxheWVyU3BlZWQgKyBhc3Rlcm9pZC52ZWxvY2l0eS5sZW5ndGgoKSkgLyA1XG4gICAgICAgICAgICAgICAgICAgIH0pLmZpcmUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgfHwgZGlzdGFuY2UgPiB0aGlzLnJhZGl1cyAvIDIgKyA1MCkgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb3NpdGlvbiA9IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvaW50cyA9IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpO1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnN0eWxlLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTsgICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IGFzdGVyb2lkLnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvYXN0ZXJvaWQtZmllbGQuanMiLCJpbXBvcnQgeyBWZWN0b3IsIENpcmNsZSwgU3ByaW5neVZlY3RvciwgUmVjdGFuZ2xlIH0gZnJvbSAnZW5naW5lJztcblxuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbywgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyA2O1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMuY2VudGVyID0gbmV3IFZlY3Rvcigtd2lkdGggLyAyICsgdGhpcy5yYWRpdXMgKyA0NSwgLWhlaWdodCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1KTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyU3ByaW5nID0gbmV3IFNwcmluZ3lWZWN0b3Ioe1xuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxuICAgICAgICAgICAgZGFtcGluZzogMC41LFxuICAgICAgICAgICAgdGFyZ2V0OiAoKSA9PiBpby5tb3VzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAxLjUsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaSA9IG5ldyBSZWN0YW5nbGUoe1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgaGVpZ2h0IC8gMiAtIDEwKSxcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGgsIGhlaWdodDogNTAgfSxcbiAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQ6IDIwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaS5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHNldEZ1ZWxUYW5rKHBlcmNlbnRhZ2UpIHtcbiAgICAgICAgdGhpcy5mdWVsVGFua1VpLndpZHRoID0gdGhpcy53aWR0aCAqIHBlcmNlbnRhZ2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5wb3NpdGlvbiA9IHRoaXMuY2VudGVyLmNvcHkoKS5hZGQodGhpcy5kaXJlY3Rpb24pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW1xuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDMgfSksIGRlcHRoOiAwLjkgfSxcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMiB9KSwgZGVwdGg6IDEuMSB9LFxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBjaXJjbGVHZW5lcmF0b3IoY291bnQsIHsgc2l6ZSB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKGNvdW50LCAoKSA9PiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgICAgICAgICByYWRpdXM6IFV0aWxzLnJhbmRvbSgxLCBzaXplKSwgc3R5bGU6IHsgY29sb3I6IFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyksIG9wYWNpdHk6IDAuNiB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCA+IHRoaXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24ueCAtIGNhbWVyYVBvcy54ID4gdGhpcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIHRoaXMuaGVpZ2h0IC0gKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvZW52aXJvbm1lbnQuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBJTyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XG5cbiAgICAgICAgdGhpcy5rZXlIYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNhbGxIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlTdGF0ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLmhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlciAmJiB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlKGRvd25IYW5kbGVyLCB1cEhhbmRsZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uS2V5KGtleSwgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1trZXldID0geyBoYW5kbGVyLCByZXZlcnNlSGFuZGxlciB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGFuZ2VUb3VjaCh7IGNoYW5nZWRUb3VjaGVzIH0pIHtcbiAgICAgICAgdGhpcy5tb3VzZS5zZXQoY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIC1jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSArIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICh7IHgsIHkgfSkgPT5cbiAgICAgICAgICAgIHRoaXMubW91c2Uuc2V0KHggLSB0aGlzLndpZHRoIC8gMiwgLXkgKyB0aGlzLmhlaWdodCAvIDIpKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSBmYWxzZSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IGZhbHNlKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvaW8uanMiLCJpbXBvcnQge1xuICAgIFZlY3RvciwgQ29tcG9zaXRlLCBGb3VudGFpbiwgUG9seWdvbixcbiAgICBVdGlscywgU3Bhd25lciwgRXhwbG9zaW9uLCBSZWN0YW5nbGVcbn0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcblxuICAgICAgICB0aGlzLmZ1ZWxUYW5rTWF4ID0gMTAwMDtcbiAgICAgICAgdGhpcy5mdWVsVGFuayA9IHRoaXMuZnVlbFRhbmtNYXg7XG5cbiAgICAgICAgdGhpcy5leGhhdXN0ID0gbmV3IEZvdW50YWluKHsgcGFydGljbGVTaXplOiA0LCBzdHlsZTogeyBvcGFjaXR5OiAwLjIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BbmdsZTogTWF0aC5QSSAvIDIgKiAzIC0gMC4zLCB0b0FuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgKyAwLjMgfSk7XG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBQb2x5Z29uKHsgcG9pbnRzOiBbbmV3IFZlY3RvcigtNSwgMCksIG5ldyBWZWN0b3IoMCwgLTMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUsIDApLCBuZXcgVmVjdG9yKDAsIDE1KV0gfSk7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcblxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5leGhhdXN0IH0pO1xuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5zaGlwIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xuICAgIH1cbiAgICBcbiAgICByZXZpdmUoc2l6ZSA9IDEwKSB7XG4gICAgICAgIHRoaXMuc2V0RnVlbERpZmYoc2l6ZSk7XG4gICAgfVxuICAgIFxuICAgIGRhbWFnZShzaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5zZXRGdWVsRGlmZigtc2l6ZSk7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IgfSwgbWFnbml0dWRlOiA1XG4gICAgICAgIH0pLmZpcmUoKSk7XG4gICAgfVxuICAgIFxuICAgIHNldEZ1ZWxEaWZmKGZ1ZWxEaWZmID0gMTApIHtcbiAgICAgICAgbGV0IG5ld0Z1ZWwgPSB0aGlzLmZ1ZWxUYW5rICsgZnVlbERpZmY7XG4gICAgICAgIHRoaXMuZnVlbFRhbmsgPSBuZXdGdWVsIDwgMCA/IDAgOiBuZXdGdWVsO1xuICAgICAgICBpZiAodGhpcy5mdWVsVGFuayA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmtpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtpbGwoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTtcblxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmV4aGF1c3Quc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZnVlbFRhbmtVaS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRGdWVsVGFuayh0aGlzLmZ1ZWxUYW5rIC8gdGhpcy5mdWVsVGFua01heCk7XG5cbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XG4gICAgICAgIHRoaXMuc2hpcC5yb3RhdGlvbiA9IGZvcndhcmRBbmdsZSArIE1hdGguUEkgLyAyO1xuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLnRvQW5nbGUgPSBmb3J3YXJkQW5nbGUgKyAxIC8gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy5tYWduaXR1ZGUgPSB0aGlzLnNwZWVkIC8gMS41O1xuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLnNpemUgPSB0aGlzLnNwZWVkIC8gMS41O1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rID0gdGhpcy5mdWVsVGFuayA8IDAgPyAwIDogdGhpcy5mdWVsVGFuayAtIHRoaXMuc3BlZWQgLyAxMDtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmNvcHkoKS5zY2FsZSgoMSAvIDMwMDApICogdGhpcy5zcGVlZCkpO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS5sZW5ndGgoKSA+IDIuNSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zY2FsZVRvKDIuNSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvcGxheWVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==