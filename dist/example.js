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

        _this.fuelTankMax = 500;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmIxNjVlOTMxOWMzNDliY2IyN2YiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJhc3Rlcm9pZHMiLCJyYW5kb21Bc3Rlcm9pZFBvc2l0aW9uIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInJhbmRvbUFzdGVyb2lkU2hhcGUiLCJleHBsb3Npb25zIiwiZXhwbG9zaW9uU3Bhd25lciIsInNwbGljZSIsInNlZ21lbnRzIiwic2VnbWVudCIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImRhbWFnZSIsInJldml2ZSIsIkNvbnRyb2xsZXIiLCJjZW50ZXIiLCJkaXJlY3Rpb24iLCJjb250cm9sbGVyU3ByaW5nIiwibW91c2UiLCJiaWdDaXJjbGUiLCJzbWFsbENpcmNsZSIsImZ1ZWxUYW5rVWkiLCJwZXJjZW50YWdlIiwiY3V0IiwiRW52aXJvbm1lbnQiLCJjaXJjbGVHZW5lcmF0b3IiLCJjb3VudCIsImNhbWVyYVBvcyIsIklPIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJlIiwiY2hhbmdlVG91Y2giLCJtb3VzZURvd24iLCJQbGF5ZXIiLCJmdWVsVGFua01heCIsImZ1ZWxUYW5rIiwiZXhoYXVzdCIsInNoaXAiLCJzZXRGdWVsRGlmZiIsImZ1ZWxEaWZmIiwibmV3RnVlbCIsImtpbGwiLCJzZXRGdWVsVGFuayIsImZvcndhcmRBbmdsZSIsInNwZWVkRm9yY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFD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LElBQUwsR0FBYW9PLFVBQXBELENBQWxCO0FBQ0EsZ0JBQUksS0FBSy9MLFFBQUwsQ0FBYzlDLE1BQWQsS0FBeUIsR0FBN0IsRUFBa0M7QUFDOUIscUJBQUs4QyxRQUFMLENBQWN2QyxPQUFkLENBQXNCLEdBQXRCO0FBQ0g7QUFDSiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmIxNjVlOTMxOWMzNDliY2IyN2YiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgc2V0KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9XG5cbiAgICBhZGQodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlKSB7XG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XG4gICAgICAgIGxldCB0bXBYID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYW5nbGUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICBjdXQoc2l6ZSkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCA+IHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkuc2NhbGUoc2l6ZSk7XG4gICAgfVxuXG4gICAgc3VidHJhY3QodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3RhbmNlKHZlY3Rvcikge1xuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy55IC0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZShzaXplKSB7XG4gICAgICAgIHRoaXMueCAqPSBzaXplO1xuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb20obWluWCwgbWF4WCwgbWluWSwgbWF4WSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihVdGlscy5yYW5kb20obWluWCwgbWF4WCksIFV0aWxzLnJhbmRvbShtaW5ZLCBtYXhZKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBvbGFyKGFuZ2xlID0gMCwgbGVuZ3RoID0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbShtaW5BbmdsZSwgbWF4QW5nbGUpLCBsZW5ndGgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ZlY3Rvci5qcyIsImV4cG9ydCBjb25zdCBVdGlscyA9IHtcblxuICAgIHJhbmRvbTogZnVuY3Rpb24obWluID0gMCwgbWF4ID0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cbiAgICByYW5kb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xuICAgIH0sXG5cbiAgICByYW5nZTogZnVuY3Rpb24oc2l6ZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgZmlsdGVyU2V0OiBmdW5jdGlvbihzZXQsIHByZWRpY2F0ZSkge1xuICAgICAgICBzZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdXRpbHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50LW1hbmFnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgKiBmcm9tICcuL3ByaW1pdGl2ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL3NjZW5lJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luZGV4LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cblxuICAgIHNldCh7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxuICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxuICAgICAgICBzaXplID0gMVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMucm90YXRpb25DZW50ZXIgPSByb3RhdGlvbkNlbnRlcjtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XG5cbiAgICB1cGRhdGUoY29udGV4dCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uKHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5wcm90b3R5cGVbZnVuYy5uYW1lXSA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2dhbWUtb2JqZWN0LmpzIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlUG9vbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0KC4uLmNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQuYWRkKGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcmVsZWFzZShpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hbGxvY2F0ZWQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmxldCBwb29sQ29udGFpbmVyID0ge307XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jYWJsZSB7XG4gICAgXG4gICAgc3RhdGljIGdldFBvb2woKSB7XG4gICAgICAgIGxldCBwb29sID0gcG9vbENvbnRhaW5lclt0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoIXBvb2wpIHtcbiAgICAgICAgICAgIHBvb2wgPSBuZXcgSW5zdGFuY2VQb29sKHRoaXMpO1xuICAgICAgICAgICAgcG9vbENvbnRhaW5lci5hZGQocG9vbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9vbDtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLm5ldyguLi5jb25maWcpO1xuICAgIH1cbiAgIFxuICAgIHN0YXRpYyByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5yZWxlYXNlKGluc3RhbmNlKTtcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9lbmdpbmUuanMiLCJleHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKG5hbWUsIGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXSA9IHsgY29uZGl0aW9uLCBoYW5kbGVyczogW10gfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oZWxlbWVudHMsIG5hbWUsIGV4ZWN1dG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0uaGFuZGxlcnMucHVzaCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRyaWdnZXJFdmVudHMoKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGxldCB7IGNvbmRpdGlvbiwgaGFuZGxlcnMgfSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoeyBleGVjdXRvciwgZWxlbWVudHMgfSkgPT5cbiAgICAgICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gY29uZGl0aW9uKGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGV4ZWN1dG9yKGVsZW1lbnQpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanMiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJhbGxheCB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSBuZXcgVmVjdG9yKCkpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuem9vbSA9IDE7XG4gICAgfVxuXG4gICAgYWRkTGF5ZXIoeyBvYmplY3RzID0gW10sIGRlcHRoID0gMSB9KSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBvYmplY3RzOiBuZXcgU2V0KG9iamVjdHMpLCBkZXB0aDogLTEgLyBkZXB0aCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZShsYXllci5kZXB0aCksXG4gICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy56b29tLCB0aGlzLnpvb20pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBVdGlscy5maWx0ZXJTZXQobGF5ZXIub2JqZWN0cywgb2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3BhcmFsbGF4LmpzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vZ2FtZS1vYmplY3QnO1xuaW1wb3J0IHsgSW5zdGFuY2VQb29sIH0gZnJvbSAnLi9pbnN0YW5jZS1wb29sJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyLnNldChjb25maWcpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IGNvbmZpZy5yYWRpdXMgfHwgNTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpICB7XG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGggfHwgMTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCB8fCAxMDtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSwgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGQoeyBvZmZzZXQgPSBuZXcgVmVjdG9yKCksIG9iamVjdCB9KSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogb2Zmc2V0IH0pO1xuICAgICAgICAgICAgb2JqZWN0LnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QgfSkgPT4gb2JqZWN0LnVwZGF0ZShjdHgpKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcbiAgICAgICAgZWxhc3RpY2l0eSA9IDAuMSxcbiAgICAgICAgdGFyZ2V0ID0gKCkgPT4gbmV3IFZlY3RvcigpLFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxuICAgIH0gPSB7fSkge1xuICAgICAgICBzdXBlcih7IHBvc2l0aW9uIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5lbGFzdGljaXR5ID0gZWxhc3RpY2l0eTtcbiAgICAgICAgdGhpcy5kYW1waW5nID0gZGFtcGluZztcbiAgICB9XG5cbiAgICB1cGRhdGVWZWxvY2l0eSgpIHtcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XG4gICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLnRhcmdldCgpXG4gICAgICAgICAgICAuY29weSgpXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmVsYXN0aWNpdHkpXG4gICAgICAgICAgICAuc3VidHJhY3QoZGFtcGluZ0ZvcmNlKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jaXJjbGVzUG9vbCA9IG5ldyBJbnN0YW5jZVBvb2woQ2lyY2xlKTtcbiAgICB9XG5cbiAgICBmaXJlKCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0KHtcbiAgICAgICAgc2l6ZSA9IDIsXG4gICAgICAgIG1hZ25pdHVkZSA9IDEwLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXG4gICAgICAgIHBhcnRpY2xlU2l6ZSA9IDIwLFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcbiAgICAgICAgdG9BbmdsZSA9IE1hdGguUEkgKiAyLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XG4gICAgICAgICAgICBzdHlsZSwgcG9zaXRpb246IHBvc2l0aW9uLmNvcHkoKSwgcmFkaXVzOiBwYXJ0aWNsZVNpemUsIHZlbG9jaXR5RGFtcGluZzogMC45NyxcbiAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tUG9sYXIoMSwgZnJvbUFuZ2xlLCB0b0FuZ2xlKVxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnJhZGl1cyAvPSBVdGlscy5yYW5kb20oMS4wNSwgMS4xKTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZShkdCk7XG5cbiAgICAgICAgICAgIGxldCBhbGl2ZSA9IHBhcnRpY2xlLnJhZGl1cyA+IDAuNTtcbiAgICAgICAgICAgIGlmICghYWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZXNQb29sLnJlbGVhc2UocGFydGljbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWxpdmU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRm91bnRhaW4gZXh0ZW5kcyBFeHBsb3Npb24ge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuZmlyZSgpO1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBjb25maWcucG9pbnRzIHx8IFtdO1xuICAgICAgICB0aGlzLmVtaXNzaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xuICAgICAgICByZW5kZXJlci5wb2x5Z29uKHRoaXMucG9pbnRzLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwYXduZXIge1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcbiAgICAgICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24odGhpcy5pdGVtcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goLi4udGhpcy5jcmVhdG9yKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGUoY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5hbGl2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW5kZXIocmVuZGVyZXIpKTsgXG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24sIHRyYW5zZm9ybWVkUmVuZGVyaW5nKSB7XG4gICAgICAgIHRoaXMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XG4gICAgICAgIHRyYW5zZm9ybWVkUmVuZGVyaW5nKCk7XG4gICAgICAgIHRoaXMucG9wKCk7XG4gICAgfVxuXG4gICAgcHVzaCh7XG4gICAgICAgIHNjYWxlID0gbmV3IFZlY3RvcigxLCAxKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICB0cmFuc2xhdGlvbiA9IG5ldyBWZWN0b3IoKVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUocm90YXRpb24pO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodHJhbnNsYXRpb24ueCwgdHJhbnNsYXRpb24ueSk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgY2lyY2xlKHBvc2l0aW9uLCByYWRpdXMsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Q29sb3IgPSBjb2xvcjtcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Qmx1ciA9IDUwO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgcmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggLSBzaXplLndpZHRoIC8gMiwgcG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwb2x5Z29uKHBvaW50cywgc2l6ZSA9IDEsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50c1swXS54ICogc2l6ZSwgcG9pbnRzWzBdLnkgKiBzaXplKTtcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAqIHNpemUsIHBvaW50LnkgKiBzaXplKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9yZW5kZXJlci5qcyIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXTtcbiAgICB9XG5cbiAgICBhZGQoLi4ub2JqZWN0cykge1xuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0cyA9PiB7XG4gICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RzLnNldHVwICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9iamVjdHMuc2V0dXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5yZW5kZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoY3R4KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmFsaXZlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3NjZW5lLmpzIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFsnIzZmNicsICcjZjY2JywgJyM2NmYnLCAnI2ZmMycsICcjM2ZmJywgJyNmM2YnXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvY29uZmlnLmpzIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IsIENhbnZhc1JlbmRlcmVyLCBTY2VuZSxcbiAgICBFbmdpbmUsIFNwcmluZ3lWZWN0b3IsIFBhcmFsbGF4XG59IGZyb20gJ2VuZ2luZSc7XG5cbmltcG9ydCB7IElPIH0gZnJvbSAnLi9pbyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBBc3Rlcm9pZEZpZWxkIH0gZnJvbSAnLi9hc3Rlcm9pZC1maWVsZCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5cblxubGV0IGluaXQgPSAoY2FudmFzKSA9PiB7XG5cbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCBdID0gWyB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IF07XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICBjdHguc2NhbGUoMSwgLTEpO1xuXG5cbiAgICBsZXQgaW8gPSBuZXcgSU8od2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIsIHNjZW5lKTtcblxuICAgIGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xuICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRyb2xsZXIpO1xuICAgIGxldCBjYW1lcmEgPSBuZXcgU3ByaW5neVZlY3Rvcih7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxuICAgICAgICB0YXJnZXQ6ICgpID0+IHBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKHBsYXllci52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoMykpXG4gICAgfSk7XG5cbiAgICBsZXQgcGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoY2FtZXJhLnBvc2l0aW9uKTtcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGlvLm9uTW91c2UoKCkgPT4gcGxheWVyLnNwZWVkID0gNSwgKCkgPT4gcGxheWVyLnNwZWVkID0gMCk7XG4gICAgZW52aXJvbm1lbnQuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4gcGFyYWxsYXguYWRkTGF5ZXIoeyBkZXB0aDogbGF5ZXIuZGVwdGgsIG9iamVjdHM6IGxheWVyLm9iamVjdHMgfSkpO1xuICAgIHBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xuICAgIHNjZW5lLmFkZChwYXJhbGxheCwgY29udHJvbGxlciwgY2FtZXJhLCBlbnZpcm9ubWVudCk7XG5cblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgKGZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcbiAgICAgICAgZW5naW5lLmNsZWFyKCkucmVuZGVyKCkudXBkYXRlKCk7XG5cbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfSkoKTtcblxufTtcblxuXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQsXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5pbml0KGNhbnZhcyk7XG4vLyB3aW5kb3cub25yZXNpemUgPSAoKSA9PiBpbml0KGNhbnZhcyk7XG4vLyBjYW52YXMub25jbGljayA9ICgpID0+IHtcbi8vICAgICAoY2FudmFzLnJlcXVlc3RGdWxsU2NyZWVuIHx8XG4vLyAgICAgICAgIGNhbnZhcy53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuLy8gICAgICAgICBjYW52YXMubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHxcbi8vICAgICAgICAgY2FudmFzLm1zUmVxdWVzdEZ1bGxTY3JlZW4pLmNhbGwoY2FudmFzKTtcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvaW5kZXguanMiLCJpbXBvcnQgeyBTcGF3bmVyLCBQb2x5Z29uLCBFeHBsb3Npb24sIFV0aWxzLCBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBBc3Rlcm9pZEZpZWxkIHtcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgcmFkaXVzKSB7XG4gICAgICAgIGxldCBudW1Bc3Rlcm9pZHMgPSAxNTtcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzaXplID0gVXRpbHMucmFuZG9tKDEwLCA0MCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvbHlnb24oe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCkgfSxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbSgtMC41LCAwLjUsIC0wLjUsIDAuNSksIHNpemUsXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xuICAgIH1cblxuICAgIHJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20oMCwgTWF0aC5QSSAqIDIpLCB0aGlzLnJhZGl1cyAvIDIgKyAyMCkpO1xuICAgIH1cblxuICAgIHJhbmRvbUFzdGVyb2lkU2hhcGUoKSB7XG4gICAgICAgIGxldCBzZWdtZW50cyA9IDU7XG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShzZWdtZW50cywgc2VnbWVudCA9PlxuICAgICAgICAgICAgVmVjdG9yLnBvbGFyKChzZWdtZW50IC8gc2VnbWVudHMpICogTWF0aC5QSSAqIDIsIFV0aWxzLnJhbmRvbSgwLjUsIDEpKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiB7XG4gICAgICAgICAgICBhc3Rlcm9pZC51cGRhdGUoY3R4KTtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5kYW1hZ2UoYXN0ZXJvaWQuc2l6ZSArIHRoaXMucGxheWVyLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJldml2ZShhc3Rlcm9pZC5zaXplICsgdGhpcy5wbGF5ZXIuc3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhc3Rlcm9pZC5wb3NpdGlvbiwgc2l6ZTogYXN0ZXJvaWQuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU2l6ZTogYXN0ZXJvaWQuc2l6ZSAvIDEuNSwgc3R5bGU6IHsgY29sb3I6IGFzdGVyb2lkLnN0eWxlLmNvbG9yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduaXR1ZGU6IChhc3Rlcm9pZC5zaXplICsgcGxheWVyU3BlZWQgKyBhc3Rlcm9pZC52ZWxvY2l0eS5sZW5ndGgoKSkgLyA1XG4gICAgICAgICAgICAgICAgICAgIH0pLmZpcmUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgfHwgZGlzdGFuY2UgPiB0aGlzLnJhZGl1cyAvIDIgKyA1MCkgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb3NpdGlvbiA9IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvaW50cyA9IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpO1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnN0eWxlLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTsgICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IGFzdGVyb2lkLnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvYXN0ZXJvaWQtZmllbGQuanMiLCJpbXBvcnQgeyBWZWN0b3IsIENpcmNsZSwgU3ByaW5neVZlY3RvciwgUmVjdGFuZ2xlIH0gZnJvbSAnZW5naW5lJztcblxuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbywgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyA2O1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMuY2VudGVyID0gbmV3IFZlY3Rvcigtd2lkdGggLyAyICsgdGhpcy5yYWRpdXMgKyA0NSwgLWhlaWdodCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1KTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyU3ByaW5nID0gbmV3IFNwcmluZ3lWZWN0b3Ioe1xuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxuICAgICAgICAgICAgZGFtcGluZzogMC41LFxuICAgICAgICAgICAgdGFyZ2V0OiAoKSA9PiBpby5tb3VzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAxLjUsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaSA9IG5ldyBSZWN0YW5nbGUoe1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgaGVpZ2h0IC8gMiAtIDEwKSxcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGgsIGhlaWdodDogNTAgfSxcbiAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQ6IDIwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaS5yZW5kZXIocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHNldEZ1ZWxUYW5rKHBlcmNlbnRhZ2UpIHtcbiAgICAgICAgdGhpcy5mdWVsVGFua1VpLndpZHRoID0gdGhpcy53aWR0aCAqIHBlcmNlbnRhZ2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5wb3NpdGlvbiA9IHRoaXMuY2VudGVyLmNvcHkoKS5hZGQodGhpcy5kaXJlY3Rpb24pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW1xuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDMgfSksIGRlcHRoOiAwLjkgfSxcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMiB9KSwgZGVwdGg6IDEuMSB9LFxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBjaXJjbGVHZW5lcmF0b3IoY291bnQsIHsgc2l6ZSB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKGNvdW50LCAoKSA9PiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgICAgICAgICByYWRpdXM6IFV0aWxzLnJhbmRvbSgxLCBzaXplKSwgc3R5bGU6IHsgY29sb3I6IFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyksIG9wYWNpdHk6IDAuNiB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCA+IHRoaXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucG9zaXRpb24ueCAtIGNhbWVyYVBvcy54ID4gdGhpcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIHRoaXMuaGVpZ2h0IC0gKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvZW52aXJvbm1lbnQuanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBJTyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XG5cbiAgICAgICAgdGhpcy5rZXlIYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNhbGxIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlTdGF0ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLmhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlciAmJiB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlKGRvd25IYW5kbGVyLCB1cEhhbmRsZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uS2V5KGtleSwgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1trZXldID0geyBoYW5kbGVyLCByZXZlcnNlSGFuZGxlciB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGFuZ2VUb3VjaCh7IGNoYW5nZWRUb3VjaGVzIH0pIHtcbiAgICAgICAgdGhpcy5tb3VzZS5zZXQoY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIC1jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSArIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICh7IHgsIHkgfSkgPT5cbiAgICAgICAgICAgIHRoaXMubW91c2Uuc2V0KHggLSB0aGlzLndpZHRoIC8gMiwgLXkgKyB0aGlzLmhlaWdodCAvIDIpKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSBmYWxzZSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IGZhbHNlKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvaW8uanMiLCJpbXBvcnQge1xuICAgIFZlY3RvciwgQ29tcG9zaXRlLCBGb3VudGFpbiwgUG9seWdvbixcbiAgICBVdGlscywgU3Bhd25lciwgRXhwbG9zaW9uLCBSZWN0YW5nbGVcbn0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcblxuICAgICAgICB0aGlzLmZ1ZWxUYW5rTWF4ID0gNTAwO1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rID0gdGhpcy5mdWVsVGFua01heDtcblxuICAgICAgICB0aGlzLmV4aGF1c3QgPSBuZXcgRm91bnRhaW4oeyBwYXJ0aWNsZVNpemU6IDQsIHN0eWxlOiB7IG9wYWNpdHk6IDAuMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgLSAwLjMsIHRvQW5nbGU6IE1hdGguUEkgLyAyICogMyArIDAuMyB9KTtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFBvbHlnb24oeyBwb2ludHM6IFtuZXcgVmVjdG9yKC01LCAwKSwgbmV3IFZlY3RvcigwLCAtMyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNSwgMCksIG5ldyBWZWN0b3IoMCwgMTUpXSB9KTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xuXG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLmV4aGF1c3QgfSk7XG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLnNoaXAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XG4gICAgfVxuICAgIFxuICAgIHJldml2ZShzaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5zZXRGdWVsRGlmZihzaXplKTtcbiAgICB9XG4gICAgXG4gICAgZGFtYWdlKHNpemUgPSAxMCkge1xuICAgICAgICB0aGlzLnNldEZ1ZWxEaWZmKC1zaXplKTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgc2l6ZTogMzAsIHBhcnRpY2xlU2l6ZTogMjAsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcbiAgICAgICAgfSkuZmlyZSgpKTtcbiAgICB9XG4gICAgXG4gICAgc2V0RnVlbERpZmYoZnVlbERpZmYgPSAxMCkge1xuICAgICAgICBsZXQgbmV3RnVlbCA9IHRoaXMuZnVlbFRhbmsgKyBmdWVsRGlmZjtcbiAgICAgICAgdGhpcy5mdWVsVGFuayA9IE1hdGgubWluKE1hdGgubWF4KDAsIG5ld0Z1ZWwpLCB0aGlzLmZ1ZWxUYW5rTWF4KTtcbiAgICAgICAgaWYgKHRoaXMuZnVlbFRhbmsgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBraWxsKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7XG5cbiAgICAgICAgdGhpcy5zaGlwLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5leGhhdXN0LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmZ1ZWxUYW5rVWkuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0RnVlbFRhbmsodGhpcy5mdWVsVGFuayAvIHRoaXMuZnVlbFRhbmtNYXgpO1xuXG4gICAgICAgIGxldCBmb3J3YXJkQW5nbGUgPSB0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmFuZ2xlKCkgKyBNYXRoLlBJO1xuICAgICAgICBsZXQgc3BlZWRGb3JjZSA9IHRoaXMuZnVlbFRhbmsgPiAwID8gdGhpcy5zcGVlZCA6IDA7XG5cbiAgICAgICAgdGhpcy5zaGlwLnJvdGF0aW9uID0gZm9yd2FyZEFuZ2xlICsgTWF0aC5QSSAvIDI7XG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcuZnJvbUFuZ2xlID0gZm9yd2FyZEFuZ2xlIC0gMSAvIHNwZWVkRm9yY2U7XG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcudG9BbmdsZSA9IGZvcndhcmRBbmdsZSArIDEgLyBzcGVlZEZvcmNlO1xuICAgICAgICB0aGlzLmV4aGF1c3QuY29uZmlnLm1hZ25pdHVkZSA9IHNwZWVkRm9yY2UgLyAxLjU7XG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcuc2l6ZSA9IHNwZWVkRm9yY2UgLyAxLjU7XG4gICAgICAgIHRoaXMuZnVlbFRhbmsgPSB0aGlzLmZ1ZWxUYW5rIDwgMCA/IDAgOiB0aGlzLmZ1ZWxUYW5rIC0gc3BlZWRGb3JjZSAvIDEwO1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uY29weSgpLnNjYWxlKCgxIC8gMzAwMCkgKiBzcGVlZEZvcmNlKSk7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpID4gMi41KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oMi41KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9wbGF5ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9