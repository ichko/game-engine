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
                        _this2.player.damage(asteroid.size * _this2.player.speed);
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
        key: 'damage',
        value: function damage() {
            var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            var newFuel = this.fuelTank - size;
            this.fuelTank = newFuel < 0 ? 0 : newFuel;
            if (this.fuelTank <= 0) {
                this.kill();
            }
        }
    }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTQ5N2NlNzVlOTFhMmVhZjJiOTkiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJjdHgiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5kb21Qb2xhciIsInBhcnRpY2xlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCIsImNvbG9ycyIsImNhbnZhcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldENvbnRleHQiLCJpbyIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiYWRkTGF5ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJhc3Rlcm9pZHMiLCJyYW5kb21Bc3Rlcm9pZFBvc2l0aW9uIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInJhbmRvbUFzdGVyb2lkU2hhcGUiLCJleHBsb3Npb25zIiwiZXhwbG9zaW9uU3Bhd25lciIsInNwbGljZSIsInNlZ21lbnRzIiwic2VnbWVudCIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImRhbWFnZSIsIkNvbnRyb2xsZXIiLCJjZW50ZXIiLCJkaXJlY3Rpb24iLCJjb250cm9sbGVyU3ByaW5nIiwibW91c2UiLCJiaWdDaXJjbGUiLCJzbWFsbENpcmNsZSIsImZ1ZWxUYW5rVWkiLCJwZXJjZW50YWdlIiwiY3V0IiwiRW52aXJvbm1lbnQiLCJjaXJjbGVHZW5lcmF0b3IiLCJjb3VudCIsImNhbWVyYVBvcyIsIklPIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJlIiwiY2hhbmdlVG91Y2giLCJtb3VzZURvd24iLCJQbGF5ZXIiLCJmdWVsVGFua01heCIsImZ1ZWxUYW5rIiwiZXhoYXVzdCIsInNoaXAiLCJuZXdGdWVsIiwia2lsbCIsInNldEZ1ZWxUYW5rIiwiZm9yd2FyZEFuZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7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QUtzQixFQUFMLEdBQVUsQ0FBOUM7QUFDQSxpQkFBS2lOLE9BQUwsQ0FBYTNMLE1BQWIsQ0FBb0JvRixTQUFwQixHQUFnQzRHLGVBQWUsSUFBSSxLQUFLNUQsS0FBeEQ7QUFDQSxpQkFBS3VELE9BQUwsQ0FBYTNMLE1BQWIsQ0FBb0JxRixPQUFwQixHQUE4QjJHLGVBQWUsSUFBSSxLQUFLNUQsS0FBdEQ7QUFDQSxpQkFBS3VELE9BQUwsQ0FBYTNMLE1BQWIsQ0FBb0JrRixTQUFwQixHQUFnQyxLQUFLa0QsS0FBTCxHQUFhLEdBQTdDO0FBQ0EsaUJBQUt1RCxPQUFMLENBQWEzTCxNQUFiLENBQW9CbkMsSUFBcEIsR0FBMkIsS0FBS3VLLEtBQUwsR0FBYSxHQUF4QztBQUNBLGlCQUFLc0QsUUFBTCxHQUFnQixLQUFLQSxRQUFMLEdBQWdCLENBQWhCLEdBQW9CLENBQXBCLEdBQXdCLEtBQUtBLFFBQUwsR0FBZ0IsS0FBS3RELEtBQUwsR0FBYSxFQUFyRTs7QUFFQSxpQkFBSy9ILFFBQUwsQ0FBY1MsR0FBZCxDQUFrQixLQUFLZ0gsVUFBTCxDQUFnQitCLFNBQWhCLENBQTBCOUksSUFBMUIsR0FBaUMvQyxLQUFqQyxDQUF3QyxJQUFJLElBQUwsR0FBYSxLQUFLb0ssS0FBekQsQ0FBbEI7QUFDQSxnQkFBSSxLQUFLL0gsUUFBTCxDQUFjOUMsTUFBZCxLQUF5QixHQUE3QixFQUFrQztBQUM5QixxQkFBSzhDLFFBQUwsQ0FBY3ZDLE9BQWQsQ0FBc0IsR0FBdEI7QUFDSDtBQUNKIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NDk3Y2U3NWU5MWEyZWFmMmI5OSIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBzZXQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cblxuICAgIGFkZCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGUoYW5nbGUpIHtcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGNvcyAtIHRoaXMueSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhbmdsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIGN1dChzaXplKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBpZiAobGVuZ3RoID4gc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcbiAgICB9XG5cbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54IC09IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlKHNpemUpIHtcbiAgICAgICAgdGhpcy54ICo9IHNpemU7XG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFV0aWxzLnJhbmRvbShtaW5YLCBtYXhYKSwgVXRpbHMucmFuZG9tKG1pblksIG1heFkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9sYXIoYW5nbGUgPSAwLCBsZW5ndGggPSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdmVjdG9yLmpzIiwiZXhwb3J0IGNvbnN0IFV0aWxzID0ge1xuXG4gICAgcmFuZG9tOiBmdW5jdGlvbihtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfSxcblxuICAgIHJhbmRvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpKV07XG4gICAgfSxcblxuICAgIHJhbmdlOiBmdW5jdGlvbihzaXplLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KE1hdGgucm91bmQoc2l6ZSkpLmtleXMoKSkubWFwKGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJTZXQ6IGZ1bmN0aW9uKHNldCwgcHJlZGljYXRlKSB7XG4gICAgICAgIHNldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmVkaWNhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS91dGlscy5qcyIsImV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc2V0KHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogJyNmMDAnIH0sXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXG4gICAgICAgIHNpemUgPSAxXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB0aGlzLnZlbG9jaXR5RGFtcGluZyA9IHZlbG9jaXR5RGFtcGluZztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKGR0KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsZWFzZWQuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxubGV0IHBvb2xDb250YWluZXIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIEluc3RhbmNhYmxlIHtcbiAgICBcbiAgICBzdGF0aWMgZ2V0UG9vbCgpIHtcbiAgICAgICAgbGV0IHBvb2wgPSBwb29sQ29udGFpbmVyW3RoaXMubmFtZV07XG4gICAgICAgIGlmICghcG9vbCkge1xuICAgICAgICAgICAgcG9vbCA9IG5ldyBJbnN0YW5jZVBvb2wodGhpcyk7XG4gICAgICAgICAgICBwb29sQ29udGFpbmVyLmFkZChwb29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb29sO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKCkubmV3KC4uLmNvbmZpZyk7XG4gICAgfVxuICAgXG4gICAgc3RhdGljIHJlbGVhc2UoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLnJlbGVhc2UoaW5zdGFuY2UpO1xuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2VuZ2luZS5qcyIsImV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy56b29tID0gMTtcbiAgICB9XG5cbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAtMSAvIGRlcHRoIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5yZWZlcmVuY2UuY29weSgpLnNjYWxlKGxheWVyLmRlcHRoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBzZXQoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcbiAgICAgICAgcmVuZGVyZXIuY2lyY2xlKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aCB8fCAxMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDEwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5yZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgeyB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCB9LCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZCh7IG9mZnNldCA9IG5ldyBWZWN0b3IoKSwgb2JqZWN0IH0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgb2JqZWN0LCBvZmZzZXQgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHsgb2JqZWN0LCBvZmZzZXQgfSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XG4gICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3ByaW5neVZlY3RvciBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBkYW1waW5nID0gMC4xLFxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxuICAgICAgICB0YXJnZXQgPSAoKSA9PiBuZXcgVmVjdG9yKCksXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHsgcG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xuICAgICAgICB0aGlzLmRhbXBpbmcgPSBkYW1waW5nO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KCkge1xuICAgICAgICBsZXQgZGFtcGluZ0ZvcmNlID0gdGhpcy52ZWxvY2l0eS5jb3B5KCkuc2NhbGUodGhpcy5kYW1waW5nKTtcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcbiAgICAgICAgICAgIC5jb3B5KClcbiAgICAgICAgICAgIC5zdWJ0cmFjdCh0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcbiAgICAgICAgICAgIC5zdWJ0cmFjdChkYW1waW5nRm9yY2UpO1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xuICAgIH1cblxuICAgIGZpcmUoKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXQoe1xuICAgICAgICBzaXplID0gMixcbiAgICAgICAgbWFnbml0dWRlID0gMTAsXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogXCIjZjAwXCIgfSxcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBmcm9tQW5nbGUgPSAwLFxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuY29uY2F0KFV0aWxzLnJhbmdlKHNpemUsICgpID0+IHRoaXMuY2lyY2xlc1Bvb2wubmV3KHtcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxuICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb21Qb2xhcigxLCBmcm9tQW5nbGUsIHRvQW5nbGUpXG4gICAgICAgICAgICAgICAgLnNjYWxlKFV0aWxzLnJhbmRvbShtYWduaXR1ZGUgLyAyLCBtYWduaXR1ZGUpKVxuICAgICAgICB9KSkpO1xuICAgIH1cblxuICAgIGFsaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xuICAgICAgICAgICAgcGFydGljbGUudXBkYXRlKGR0KTtcblxuICAgICAgICAgICAgbGV0IGFsaXZlID0gcGFydGljbGUucmFkaXVzID4gMC41O1xuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wucmVsZWFzZShwYXJ0aWNsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhbGl2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGb3VudGFpbiBleHRlbmRzIEV4cGxvc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5maXJlKCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XG4gICAgICAgIHRoaXMuZW1pc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24gPSAoKCkgPT4gZmFsc2UpLCBjcmVhdG9yID0gKCgpID0+IFtdKSkge1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi50aGlzLmNyZWF0b3IoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFsaXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbiwgdHJhbnNmb3JtZWRSZW5kZXJpbmcpIHtcbiAgICAgICAgdGhpcy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcbiAgICAgICAgdHJhbnNmb3JtZWRSZW5kZXJpbmcoKTtcbiAgICAgICAgdGhpcy5wb3AoKTtcbiAgICB9XG5cbiAgICBwdXNoKHtcbiAgICAgICAgc2NhbGUgPSBuZXcgVmVjdG9yKDEsIDEpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHRyYW5zbGF0aW9uID0gbmV3IFZlY3RvcigpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbi54LCB0cmFuc2xhdGlvbi55KTtcbiAgICB9XG5cbiAgICBwb3AoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjaXJjbGUocG9zaXRpb24sIHJhZGl1cywgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbG9yO1xuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dCbHVyID0gNTA7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICByZWN0YW5nbGUocG9zaXRpb24sIHNpemUsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCAtIHNpemUud2lkdGggLyAyLCBwb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHBvbHlnb24ocG9pbnRzLCBzaXplID0gMSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9pbnRzWzBdLnggKiBzaXplLCBwb2ludHNbMF0ueSAqIHNpemUpO1xuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICogc2l6ZSwgcG9pbnQueSAqIHNpemUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xuICAgIH1cblxuICAgIGFkZCguLi5vYmplY3RzKSB7XG4gICAgICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3RzID0+IHtcbiAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdHMuc2V0dXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5zZXR1cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmNvbmNhdChvYmplY3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LnJlbmRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuYWxpdmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvc2NlbmUuanMiLCJleHBvcnQgY29uc3QgY29sb3JzID0gWycjNmY2JywgJyNmNjYnLCAnIzY2ZicsICcjZmYzJywgJyMzZmYnLCAnI2YzZiddO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb25maWcuanMiLCJpbXBvcnQge1xuICAgIFZlY3RvciwgQ2FudmFzUmVuZGVyZXIsIFNjZW5lLFxuICAgIEVuZ2luZSwgU3ByaW5neVZlY3RvciwgUGFyYWxsYXhcbn0gZnJvbSAnZW5naW5lJztcblxuaW1wb3J0IHsgSU8gfSBmcm9tICcuL2lvJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IEFzdGVyb2lkRmllbGQgfSBmcm9tICcuL2FzdGVyb2lkLWZpZWxkJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuXG5sZXQgaW5pdCA9IChjYW52YXMpID0+IHtcblxuICAgIGxldCBbIHdpZHRoLCBoZWlnaHQgXSA9IFsgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgIGN0eC5zY2FsZSgxLCAtMSk7XG5cblxuICAgIGxldCBpbyA9IG5ldyBJTyh3aWR0aCwgaGVpZ2h0KTtcbiAgICBsZXQgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICBsZXQgZW5naW5lID0gbmV3IEVuZ2luZShyZW5kZXJlciwgc2NlbmUpO1xuXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihpbywgd2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoY29udHJvbGxlcik7XG4gICAgbGV0IGNhbWVyYSA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgNTApLCBlbGFzdGljaXR5OiAwLjA4LCBkYW1waW5nOiAwLjMsXG4gICAgICAgIHRhcmdldDogKCkgPT4gcGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQocGxheWVyLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSgzKSlcbiAgICB9KTtcblxuICAgIGxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xuICAgIGxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChjYW1lcmEsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaW8ub25Nb3VzZSgoKSA9PiBwbGF5ZXIuc3BlZWQgPSA1LCAoKSA9PiBwbGF5ZXIuc3BlZWQgPSAwKTtcbiAgICBlbnZpcm9ubWVudC5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiBwYXJhbGxheC5hZGRMYXllcih7IGRlcHRoOiBsYXllci5kZXB0aCwgb2JqZWN0czogbGF5ZXIub2JqZWN0cyB9KSk7XG4gICAgcGFyYWxsYXguYWRkTGF5ZXIoeyBvYmplY3RzOiBbcGxheWVyLCBuZXcgQXN0ZXJvaWRGaWVsZChwbGF5ZXIsIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKV0gfSk7XG4gICAgc2NlbmUuYWRkKHBhcmFsbGF4LCBjb250cm9sbGVyLCBjYW1lcmEsIGVudmlyb25tZW50KTtcblxuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICAgICAgICBlbmdpbmUuY2xlYXIoKS5yZW5kZXIoKS51cGRhdGUoKTtcblxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9KSgpO1xuXG59O1xuXG5cbmxldCBhbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZCxcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbmluaXQoY2FudmFzKTtcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IGluaXQoY2FudmFzKTtcbi8vIGNhbnZhcy5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICAgIChjYW52YXMucmVxdWVzdEZ1bGxTY3JlZW4gfHxcbi8vICAgICAgICAgY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XG4vLyAgICAgICAgIGNhbnZhcy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuLy8gICAgICAgICBjYW52YXMubXNSZXF1ZXN0RnVsbFNjcmVlbikuY2FsbChjYW52YXMpO1xuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9pbmRleC5qcyIsImltcG9ydCB7IFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgVXRpbHMsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEFzdGVyb2lkRmllbGQge1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcbiAgICAgICAgbGV0IG51bUFzdGVyb2lkcyA9IDE1O1xuICAgICAgICB0aGlzLmFsaXZlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmFzdGVyb2lkcyA9IFV0aWxzLnJhbmdlKG51bUFzdGVyb2lkcywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9seWdvbih7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tKC0wLjUsIDAuNSwgLTAuNSwgMC41KSwgc2l6ZSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XG4gICAgfVxuXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gNTtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnJhbmdlKHNlZ21lbnRzLCBzZWdtZW50ID0+XG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcbiAgICB9XG5cbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIGxldCBwbGF5ZXJTcGVlZCA9IHRoaXMucGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpO1xuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcbiAgICAgICAgICAgIGFzdGVyb2lkLnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5wbGF5ZXIucG9zaXRpb24uZGlzdGFuY2UoYXN0ZXJvaWQucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbG9yICE9IGFzdGVyb2lkLnN0eWxlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmRhbWFnZShhc3Rlcm9pZC5zaXplICogdGhpcy5wbGF5ZXIuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYXN0ZXJvaWQucG9zaXRpb24sIHNpemU6IGFzdGVyb2lkLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVNpemU6IGFzdGVyb2lkLnNpemUgLyAxLjUsIHN0eWxlOiB7IGNvbG9yOiBhc3Rlcm9pZC5zdHlsZS5jb2xvciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlOiAoYXN0ZXJvaWQuc2l6ZSArIHBsYXllclNwZWVkICsgYXN0ZXJvaWQudmVsb2NpdHkubGVuZ3RoKCkpIC8gNVxuICAgICAgICAgICAgICAgICAgICB9KS5maXJlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplIHx8IGRpc3RhbmNlID4gdGhpcy5yYWRpdXMgLyAyICsgNTApICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9zaXRpb24gPSB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb2ludHMgPSB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKTtcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5zdHlsZS5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7ICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiBhc3Rlcm9pZC5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2FzdGVyb2lkLWZpZWxkLmpzIiwiaW1wb3J0IHsgVmVjdG9yLCBDaXJjbGUsIFNwcmluZ3lWZWN0b3IsIFJlY3RhbmdsZSB9IGZyb20gJ2VuZ2luZSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoaW8sIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gNjtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IoLXdpZHRoIC8gMiArIHRoaXMucmFkaXVzICsgNDUsIC1oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMgKyA0NSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZyA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcbiAgICAgICAgICAgIGVsYXN0aWNpdHk6IDAuMSxcbiAgICAgICAgICAgIGRhbXBpbmc6IDAuNSxcbiAgICAgICAgICAgIHRhcmdldDogKCkgPT4gaW8ubW91c2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlID0gbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlID0gbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzIC8gMS41LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rVWkgPSBuZXcgUmVjdGFuZ2xlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIGhlaWdodCAvIDIgLSAxMCksXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoLCBoZWlnaHQ6IDUwIH0sXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0OiAyMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rVWkucmVuZGVyKHJlbmRlcmVyKTtcbiAgICB9XG5cbiAgICBzZXRGdWVsVGFuayhwZXJjZW50YWdlKSB7XG4gICAgICAgIHRoaXMuZnVlbFRhbmtVaS53aWR0aCA9IHRoaXMud2lkdGggKiBwZXJjZW50YWdlO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyU3ByaW5nLnVwZGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5jb250cm9sbGVyU3ByaW5nLnBvc2l0aW9uLmNvcHkoKS5zdWJ0cmFjdCh0aGlzLmNlbnRlcikuY3V0KHRoaXMucmFkaXVzIC8gMik7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucG9zaXRpb24gPSB0aGlzLmNlbnRlci5jb3B5KCkuYWRkKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvY29udHJvbGxlci5qcyIsImltcG9ydCB7IFV0aWxzLCBDaXJjbGUsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbWVyYSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogNCB9KSwgZGVwdGg6IDAuOCB9LFxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAzIH0pLCBkZXB0aDogMC45IH0sXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMSB9KSwgZGVwdGg6IDEuMiB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY2lyY2xlR2VuZXJhdG9yKGNvdW50LCB7IHNpemUgfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogVmVjdG9yLnJhbmRvbSgtdGhpcy53aWR0aCAvIDIsIHRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLmhlaWdodCAvIDIpLFxuICAgICAgICAgICAgcmFkaXVzOiBVdGlscy5yYW5kb20oMSwgc2l6ZSksIHN0eWxlOiB7IGNvbG9yOiBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpLCBvcGFjaXR5OiAwLjYgfVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSgpLnNjYWxlKDEgLyBsYXllci5kZXB0aCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCArIHRoaXMud2lkdGggLyAyIC0gKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54IC0gdGhpcy53aWR0aCAvIDIgKyAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ID0gY2FtZXJhUG9zLnkgKyB0aGlzLmhlaWdodCAtIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi55IC0gY2FtZXJhUG9zLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ID0gY2FtZXJhUG9zLnkgKyAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2Vudmlyb25tZW50LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcblxuXG5leHBvcnQgY2xhc3MgSU8ge1xuXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLm1vdXNlID0gbmV3IFZlY3RvcigwLCAzMDApO1xuXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjYWxsSGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5rZXlIYW5kbGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5U3RhdGVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kbGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIgJiYgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZShkb3duSGFuZGxlciwgdXBIYW5kbGVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXBIYW5kbGVyKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbktleShrZXksIGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnNba2V5XSA9IHsgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hhbmdlVG91Y2goeyBjaGFuZ2VkVG91Y2hlcyB9KSB7XG4gICAgICAgIHRoaXMubW91c2Uuc2V0KGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyB4LCB5IH0pID0+XG4gICAgICAgICAgICB0aGlzLm1vdXNlLnNldCh4IC0gdGhpcy53aWR0aCAvIDIsIC15ICsgdGhpcy5oZWlnaHQgLyAyKSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gZmFsc2UpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSBmYWxzZSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2lvLmpzIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IsIENvbXBvc2l0ZSwgRm91bnRhaW4sIFBvbHlnb24sXG4gICAgVXRpbHMsIFNwYXduZXIsIEV4cGxvc2lvbiwgUmVjdGFuZ2xlXG59IGZyb20gJ2VuZ2luZSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cbiAgICAgICAgdGhpcy5mdWVsVGFua01heCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZnVlbFRhbmsgPSB0aGlzLmZ1ZWxUYW5rTWF4O1xuXG4gICAgICAgIHRoaXMuZXhoYXVzdCA9IG5ldyBGb3VudGFpbih7IHBhcnRpY2xlU2l6ZTogNCwgc3R5bGU6IHsgb3BhY2l0eTogMC4yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQW5nbGU6IE1hdGguUEkgLyAyICogMyAtIDAuMywgdG9BbmdsZTogTWF0aC5QSSAvIDIgKiAzICsgMC4zIH0pO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgUG9seWdvbih7IHBvaW50czogW25ldyBWZWN0b3IoLTUsIDApLCBuZXcgVmVjdG9yKDAsIC0zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1LCAwKSwgbmV3IFZlY3RvcigwLCAxNSldIH0pO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWxzLnJhbmRvbUFycmF5KGNvbG9ycyk7XG5cbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuZXhoYXVzdCB9KTtcbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuc2hpcCB9KTtcblxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcbiAgICB9XG4gICAgXG4gICAgZGFtYWdlKHNpemUgPSAxMCkge1xuICAgICAgICBsZXQgbmV3RnVlbCA9IHRoaXMuZnVlbFRhbmsgLSBzaXplO1xuICAgICAgICB0aGlzLmZ1ZWxUYW5rID0gbmV3RnVlbCA8IDAgPyAwIDogbmV3RnVlbDtcbiAgICAgICAgaWYgKHRoaXMuZnVlbFRhbmsgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBraWxsKCkge1xuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLCBzaXplOiAzMCwgcGFydGljbGVTaXplOiAyMCxcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yIH0sIG1hZ25pdHVkZTogNVxuICAgICAgICB9KS5maXJlKCkpO1xuICAgICAgICAvLyB0aGlzLnNpemUgPSAwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7XG5cbiAgICAgICAgdGhpcy5zaGlwLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5leGhhdXN0LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmZ1ZWxUYW5rVWkuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0RnVlbFRhbmsodGhpcy5mdWVsVGFuayAvIHRoaXMuZnVlbFRhbmtNYXgpO1xuXG4gICAgICAgIGxldCBmb3J3YXJkQW5nbGUgPSB0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmFuZ2xlKCkgKyBNYXRoLlBJO1xuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy5mcm9tQW5nbGUgPSBmb3J3YXJkQW5nbGUgLSAxIC8gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy50b0FuZ2xlID0gZm9yd2FyZEFuZ2xlICsgMSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMuZXhoYXVzdC5jb25maWcubWFnbml0dWRlID0gdGhpcy5zcGVlZCAvIDEuNTtcbiAgICAgICAgdGhpcy5leGhhdXN0LmNvbmZpZy5zaXplID0gdGhpcy5zcGVlZCAvIDEuNTtcbiAgICAgICAgdGhpcy5mdWVsVGFuayA9IHRoaXMuZnVlbFRhbmsgPCAwID8gMCA6IHRoaXMuZnVlbFRhbmsgLSB0aGlzLnNwZWVkIC8gMTA7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQodGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5jb3B5KCkuc2NhbGUoKDEgLyAzMDAwKSAqIHRoaXMuc3BlZWQpKTtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkubGVuZ3RoKCkgPiAyLjUpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGVUbygyLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL3BsYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=