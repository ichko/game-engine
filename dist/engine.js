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
                return object.render(renderer);
            });
        }
    }, {
        key: "update",
        value: function update(ctx) {
            this.container = this.container.filter(function (object) {
                object.update(ctx);
                if (typeof object.alive !== "undefined") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI0M2Q2OGRjNTU2ZmI3NGJiN2Y/MDYwYiIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdmVjdG9yLmpzPzkyYzAiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3V0aWxzLmpzPzkwM2QiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzPzE4MmMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2dhbWUtb2JqZWN0LmpzP2E5MjUiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luc3RhbmNlLXBvb2wuanM/OTc1OCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzP2ZlY2EiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanM/MjdlMSIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcGFyYWxsYXguanM/OTA4MCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcz82ZWVkIiwid2VicGFjazovLy8uL2VuZ2luZS9yZW5kZXJlci5qcz84MTkzIiwid2VicGFjazovLy8uL2VuZ2luZS9zY2VuZS5qcz8wZGQwIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIkNvbXBvc2l0ZSIsIml0ZW1zIiwib2Zmc2V0IiwiY3R4IiwiU3ByaW5neVZlY3RvciIsImRhbXBpbmciLCJlbGFzdGljaXR5IiwidGFyZ2V0IiwiZGFtcGluZ0ZvcmNlIiwiYWNjZWxlcmF0aW9uIiwic3VidHJhY3QiLCJFeHBsb3Npb24iLCJwYXJ0aWNsZXMiLCJjaXJjbGVzUG9vbCIsImluaXQiLCJtYWduaXR1ZGUiLCJwYXJ0aWNsZVNpemUiLCJmcm9tQW5nbGUiLCJ0b0FuZ2xlIiwiY29uY2F0IiwicmFuZG9tUG9sYXIiLCJwYXJ0aWNsZSIsIkZvdW50YWluIiwiZmlyZSIsIlBvbHlnb24iLCJwb2ludHMiLCJlbWlzc2lvbnMiLCJwb2x5Z29uIiwiU3Bhd25lciIsImNyZWF0b3IiLCJpdGVtIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7O0lBR2FBLE0sV0FBQUEsTTtBQUVULHNCQUEwQjtBQUFBLFlBQWRDLENBQWMsdUVBQVYsQ0FBVTtBQUFBLFlBQVBDLENBQU8sdUVBQUgsQ0FBRzs7QUFBQTs7QUFDdEIsYUFBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsYUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0g7Ozs7NEJBRUdELEMsRUFBR0MsQyxFQUFHO0FBQ04saUJBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNB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QjtBQUNBLG1CQUFPLElBQVA7QUFDSDs7OytCQUVNNUMsUSxFQUFVO0FBQ2IsaUJBQUtpQyxTQUFMLENBQWU5QyxPQUFmLENBQXVCO0FBQUEsdUJBQVU2RCxPQUFPbkIsTUFBUCxDQUFjN0IsUUFBZCxDQUFWO0FBQUEsYUFBdkI7QUFDSDs7OytCQUVNMkQsRyxFQUFLO0FBQ1IsaUJBQUsxQixTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZU0sTUFBZixDQUFzQixrQkFBVTtBQUM3Q1MsdUJBQU9sQixNQUFQLENBQWM2QixHQUFkO0FBQ0Esb0JBQUksT0FBT1gsT0FBT0UsS0FBZCxLQUF3QixXQUE1QixFQUF5QztBQUNyQywyQkFBT0YsT0FBT0UsS0FBUCxFQUFQO0FBQ0g7O0FBRUQsdUJBQU8sSUFBUDtBQUNILGFBUGdCLENBQWpCO0FBUUgiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGI0M2Q2OGRjNTU2ZmI3NGJiN2YiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgc2V0KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9XG5cbiAgICBhZGQodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlKSB7XG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XG4gICAgICAgIGxldCB0bXBYID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYW5nbGUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICBjdXQoc2l6ZSkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCA+IHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkuc2NhbGUoc2l6ZSk7XG4gICAgfVxuXG4gICAgc3VidHJhY3QodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3RhbmNlKHZlY3Rvcikge1xuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy55IC0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZShzaXplKSB7XG4gICAgICAgIHRoaXMueCAqPSBzaXplO1xuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb20obWluWCwgbWF4WCwgbWluWSwgbWF4WSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihVdGlscy5yYW5kb20obWluWCwgbWF4WCksIFV0aWxzLnJhbmRvbShtaW5ZLCBtYXhZKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBvbGFyKGFuZ2xlID0gMCwgbGVuZ3RoID0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbShtaW5BbmdsZSwgbWF4QW5nbGUpLCBsZW5ndGgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3ZlY3Rvci5qcyIsImV4cG9ydCBjb25zdCBVdGlscyA9IHtcblxuICAgIHJhbmRvbTogZnVuY3Rpb24obWluID0gMCwgbWF4ID0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cbiAgICByYW5kb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xuICAgIH0sXG5cbiAgICByYW5nZTogZnVuY3Rpb24oc2l6ZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgZmlsdGVyU2V0OiBmdW5jdGlvbihzZXQsIHByZWRpY2F0ZSkge1xuICAgICAgICBzZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS91dGlscy5qcyIsImV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc2V0KHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogJyNmMDAnIH0sXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXG4gICAgICAgIHNpemUgPSAxXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB0aGlzLnZlbG9jaXR5RGFtcGluZyA9IHZlbG9jaXR5RGFtcGluZztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKGR0KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsZWFzZWQuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxubGV0IHBvb2xDb250YWluZXIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIEluc3RhbmNhYmxlIHtcbiAgICBcbiAgICBzdGF0aWMgZ2V0UG9vbCgpIHtcbiAgICAgICAgbGV0IHBvb2wgPSBwb29sQ29udGFpbmVyW3RoaXMubmFtZV07XG4gICAgICAgIGlmICghcG9vbCkge1xuICAgICAgICAgICAgcG9vbCA9IG5ldyBJbnN0YW5jZVBvb2wodGhpcyk7XG4gICAgICAgICAgICBwb29sQ29udGFpbmVyLmFkZChwb29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb29sO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKCkubmV3KC4uLmNvbmZpZyk7XG4gICAgfVxuICAgXG4gICAgc3RhdGljIHJlbGVhc2UoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLnJlbGVhc2UoaW5zdGFuY2UpO1xuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2VuZ2luZS5qcyIsImV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy56b29tID0gMTtcbiAgICB9XG5cbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAtMSAvIGRlcHRoIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5yZWZlcmVuY2UuY29weSgpLnNjYWxlKGxheWVyLmRlcHRoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBzZXQoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcbiAgICAgICAgcmVuZGVyZXIuY2lyY2xlKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBvYmplY3QsIG9mZnNldCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xuICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnNpemUsIHRoaXMuc2l6ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QsIG9mZnNldCB9KSA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IG9mZnNldCB9KTtcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHsgb2JqZWN0IH0pID0+IG9iamVjdC51cGRhdGUoY3R4KSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpbmd5VmVjdG9yIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGRhbXBpbmcgPSAwLjEsXG4gICAgICAgIGVsYXN0aWNpdHkgPSAwLjEsXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKClcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuZWxhc3RpY2l0eSA9IGVsYXN0aWNpdHk7XG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XG4gICAgICAgIGxldCBkYW1waW5nRm9yY2UgPSB0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSh0aGlzLmRhbXBpbmcpO1xuICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy50YXJnZXQoKVxuICAgICAgICAgICAgLmNvcHkoKVxuICAgICAgICAgICAgLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5lbGFzdGljaXR5KVxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQoYWNjZWxlcmF0aW9uKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wgPSBuZXcgSW5zdGFuY2VQb29sKENpcmNsZSk7XG4gICAgfVxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdCh7XG4gICAgICAgIHNpemUgPSAyLFxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiBcIiNmMDBcIiB9LFxuICAgICAgICBwYXJ0aWNsZVNpemUgPSAyMCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIGZyb21BbmdsZSA9IDAsXG4gICAgICAgIHRvQW5nbGUgPSBNYXRoLlBJICogMixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5jb25jYXQoVXRpbHMucmFuZ2Uoc2l6ZSwgKCkgPT4gdGhpcy5jaXJjbGVzUG9vbC5uZXcoe1xuICAgICAgICAgICAgc3R5bGUsIHBvc2l0aW9uOiBwb3NpdGlvbi5jb3B5KCksIHJhZGl1czogcGFydGljbGVTaXplLCB2ZWxvY2l0eURhbXBpbmc6IDAuOTcsXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoVXRpbHMucmFuZG9tKG1hZ25pdHVkZSAvIDIsIG1hZ25pdHVkZSkpXG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHsgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5yYWRpdXMgLz0gVXRpbHMucmFuZG9tKDEuMDUsIDEuMSk7XG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoZHQpO1xuXG4gICAgICAgICAgICBsZXQgYWxpdmUgPSBwYXJ0aWNsZS5yYWRpdXMgPiAwLjU7XG4gICAgICAgICAgICBpZiAoIWFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmZpcmUoKTtcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gY29uZmlnLnBvaW50cyB8fCBbXTtcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLCByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcbiAgICAgICAgcmVuZGVyZXIucG9seWdvbih0aGlzLnBvaW50cywgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcGF3bmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiA9ICgoKSA9PiBmYWxzZSksIGNyZWF0b3IgPSAoKCkgPT4gW10pKSB7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uKHRoaXMuaXRlbXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlKGNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVuZGVyKHJlbmRlcmVyKSk7IFxuICAgIH1cblxuICAgIGFsaXZlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9wcmltaXRpdmVzLmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uLCB0cmFuc2Zvcm1lZFJlbmRlcmluZykge1xuICAgICAgICB0aGlzLnB1c2godHJhbnNmb3JtYXRpb24pO1xuICAgICAgICB0cmFuc2Zvcm1lZFJlbmRlcmluZygpO1xuICAgICAgICB0aGlzLnBvcCgpO1xuICAgIH1cblxuICAgIHB1c2goe1xuICAgICAgICBzY2FsZSA9IG5ldyBWZWN0b3IoMSwgMSksXG4gICAgICAgIHJvdGF0aW9uID0gMCxcbiAgICAgICAgdHJhbnNsYXRpb24gPSBuZXcgVmVjdG9yKClcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHJvdGF0aW9uKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRyYW5zbGF0aW9uLngsIHRyYW5zbGF0aW9uLnkpO1xuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGNpcmNsZShwb3NpdGlvbiwgcmFkaXVzLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29sb3I7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSA1MDtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIHJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gc2l6ZS53aWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBzaXplLmhlaWdodCAvIDIsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcG9seWdvbihwb2ludHMsIHNpemUgPSAxLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCAqIHNpemUsIHBvaW50c1swXS55ICogc2l6ZSk7XG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKiBzaXplLCBwb2ludC55ICogc2l6ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XG4gICAgfVxuXG4gICAgYWRkKC4uLm9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuYWxpdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9zY2VuZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=