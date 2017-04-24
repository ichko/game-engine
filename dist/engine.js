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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODU0NzJkNGFiZWY5MjY2OWZiYzI/Y2ZkNSIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdmVjdG9yLmpzPzkyYzAiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3V0aWxzLmpzPzkwM2QiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzPzE4MmMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2dhbWUtb2JqZWN0LmpzP2E5MjUiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luc3RhbmNlLXBvb2wuanM/OTc1OCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzP2ZlY2EiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanM/MjdlMSIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcGFyYWxsYXguanM/OTA4MCIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcz82ZWVkIiwid2VicGFjazovLy8uL2VuZ2luZS9yZW5kZXJlci5qcz84MTkzIiwid2VicGFjazovLy8uL2VuZ2luZS9zY2VuZS5qcz8wZGQwIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIkNvbXBvc2l0ZSIsIml0ZW1zIiwib2Zmc2V0IiwiY3R4IiwiU3ByaW5neVZlY3RvciIsImRhbXBpbmciLCJlbGFzdGljaXR5IiwidGFyZ2V0IiwiZGFtcGluZ0ZvcmNlIiwiYWNjZWxlcmF0aW9uIiwic3VidHJhY3QiLCJFeHBsb3Npb24iLCJwYXJ0aWNsZXMiLCJjaXJjbGVzUG9vbCIsImluaXQiLCJtYWduaXR1ZGUiLCJwYXJ0aWNsZVNpemUiLCJmcm9tQW5nbGUiLCJ0b0FuZ2xlIiwiY29uY2F0IiwicmFuZG9tUG9sYXIiLCJwYXJ0aWNsZSIsIkZvdW50YWluIiwiZmlyZSIsIlBvbHlnb24iLCJwb2ludHMiLCJlbWlzc2lvbnMiLCJwb2x5Z29uIiwiU3Bhd25lciIsImNyZWF0b3IiLCJpdGVtIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJzZXR1cCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7SUFHYUEsTSxXQUFBQSxNO0FBRVQsc0JBQTBCO0FBQUEsWUFBZEMsQ0FBYyx1RUFBVixDQUFVO0FBQUEsWUFBUEMsQ0FBTyx1RUFBSCxDQUFHOztBQUFBOztBQUN0QixhQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDSDs7Ozs0QkFFR0QsQyxFQUFHQyxDLEVBQUc7QUFDTixpQkFBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsaUJBQUtDLENBQUwsR0FBU0EsQ0FBVDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUFPQyxLQUFLQyxJQUFMLENBQVUsS0FBS0gsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQTFDLENBQVA7QUFDSDs7OzRCQUVHRyxNLEVBQVE7QUFDUixpQkFBS0osQ0FBTCxJQUFVSSxPQUFPSixDQUFqQjtBQUNBLGlCQUFLQyxDQUFMLElBQVVHLE9BQU9ILENBQWpCOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7O29DQUVXO0FBQ1IsZ0JBQUlJLFNBQVMsS0FBS0EsTUFBTCxFQUFiO0FBQ0EsZ0JBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNkLHFCQUFLTCxDQUFMLElBQVVLLE1BQVY7QUFDQSxxQkFBS0osQ0FBTCxJQUFVSSxNQUFWO0FBQ0g7O0FBRUQsbUJBQU8sSUFBUDtBQUNIOzs7K0JBRU1DLEssRUFBTztBQUFBLHVCQUNTLENBQUVKLEtBQUtLLEdBQUwsQ0FBU0QsS0FBVCxDQUFGLEVBQW1CSixLQUFLTSxHQUFMLENBQVNGLEtBQVQsQ0FBbkIsQ0FEVDtBQUFBLGdCQUNKQyxHQURJO0FBQUEsZ0JBQ0NDLEdBREQ7O0FBRVYsZ0JBQUlDLE9BQU8sS0FBS1QsQ0FBaEI7QUFDQSxpQkFBS0EsQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBU1EsR0FBVCxHQUFlLEtBQUtQLENBQUwsR0FBU00sR0FBakM7QUFDQSxpQkFBS04sQ0FBTCxHQUFTUSxPQUFPRixHQUFQLEdBQWEsS0FBS04sQ0FBTCxHQUFTTyxHQUEvQjs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7OztnQ0FFTztBQUNKLG1CQUFPTixLQUFLUSxLQUFMLENBQVcsS0FBS1QsQ0FBaEIsRUFBbUIsS0FBS0QsQ0FBeEIsQ0FBUDtBQUNIOzs7NEJBRUdXLEksRUFBTTtBQUNOLGdCQUFJTixTQUFTLEtBQUtBLE1BQUwsRUFBYjtBQUNBLGdCQUFJQSxTQUFTTSxJQUFiLEVBQW1CO0FBQ2YscUJBQUtDLE9BQUwsQ0FBYUQsSUFBYjtBQUNIOztBQUVELG1CQUFPLElBQVA7QUFDSDs7O2tDQUVpQjtBQUFBLGdCQUFWQSxJQUFVLHVFQUFILENBQUc7O0FBQ2QsbUJBQU8sS0FBS0UsU0FBTCxHQUFpQkMsS0FBakIsQ0FBdUJILElBQXZCLENBQVA7QUFDSDs7O2lDQUVRUCxNLEVBQVE7QUFDYixpQkFBS0osQ0FBTCxJQUFVSSxPQUFPSixDQUFqQjtBQUNBLGlCQUFLQyxDQUFMLElBQVVHLE9BQU9ILENBQWpCOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7O2lDQUVRRyxNLEVBQVE7QUFDYixnQkFBSVcsS0FBSyxLQUFLZixDQUFMLEdBQVNJLE9BQU9KLENBQXpCO0FBQ0EsZ0JBQUlnQixLQUFLLEtBQUtmLENBQUwsR0FBU0csT0FBT0gsQ0FBekI7O0FBRUEsbUJBQU9DLEtBQUtDLElBQUwsQ0FBVVksS0FBS0EsRUFBTCxHQUFVQyxLQUFLQSxFQUF6QixDQUFQO0FBQ0g7OztrQ0FFUztBQUNOLGlCQUFLaEIsQ0FBTCxHQUFTLENBQUMsS0FBS0EsQ0FBZjtBQUNBLGlCQUFLQyxDQUFMLEdBQVMsQ0FBQyxLQUFLQSxDQUFmOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7OzhCQUVLVSxJLEVBQU07QUFDUixpQkFBS1gsQ0FBTCxJQUFVVyxJQUFWO0FBQ0EsaUJBQUtWLENBQUwsSUFBVVUsSUFBVjs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7OzsrQkFFTTtBQUNILG1CQUFPLElBQUlaLE1BQUosQ0FBVyxLQUFLQyxDQUFoQixFQUFtQixLQUFLQyxDQUF4QixDQUFQO0FBQ0g7OztvQ0FFV0csTSxFQUFRO0FBQ2hCLGlCQUFLSixDQUFMLElBQVVJLE9BQU9KLENBQWpCO0FBQ0EsaUJBQUtDLENBQUwsSUFBVUcsT0FBT0gsQ0FBakI7O0FBRUEsbUJBQU8sSUFBUDtBQUNIOzs7K0JBRWFnQixJLEVBQU1DLEksRUFBTUMsSSxFQUFNQyxJLEVBQU07QUFDbEMsbUJBQU8sSUFBSXJCLE1BQUosQ0FBVyxhQUFNc0IsTUFBTixDQUFhSixJQUFiLEVBQW1CQyxJQUFuQixDQUFYLEVBQXFDLGFBQU1HLE1BQU4sQ0FBYUYsSUFBYixFQUFtQkMsSUFBbkIsQ0FBckMsQ0FBUDtBQUNIOzs7Z0NBRW1DO0FBQUEsZ0JBQXZCZCxLQUF1Qix1RUFBZixDQUFlO0FBQUEsZ0JBQVpELE1BQVksdUVBQUgsQ0FBRzs7QUFDaEMsbUJBQU8sSUFBSU4sTUFBSixDQUFXRyxLQUFLTSxHQUFMLENBQVNGLEtBQVQsSUFBa0JELE1BQTdCLEVBQXFDSCxLQUFLSyxHQUFMLENBQVNELEtBQVQsSUFBa0JELE1BQXZELENBQVA7QUFDSDs7O3NDQUVvRTtBQUFBLGdCQUFsREEsTUFBa0QsdUVBQXpDLENBQXlDO0FBQUEsZ0JBQXRDaUIsUUFBc0MsdUVBQTNCLENBQTJCO0FBQUEsZ0JBQXhCQyxRQUF3Qix1RUFBYnJCLEtBQUtzQixFQUFMLEdBQVUsQ0FBRzs7QUFDakUsbUJBQU96QixPQUFPMEIsS0FBUCxDQUFhLGFBQU1KLE1BQU4sQ0FBYUMsUUFBYixFQUF1QkMsUUFBdkIsQ0FBYixFQUErQ2xCLE1BQS9DLENBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIRSxJQUFNcUIsd0JBQVE7O0FBRWpCTCxZQUFRLGtCQUEyQjtBQUFBLFlBQWxCTSxHQUFrQix1RUFBWixDQUFZO0FBQUEsWUFBVEMsR0FBUyx1RUFBSCxDQUFHOztBQUMvQixlQUFPMUIsS0FBS21CLE1BQUwsTUFBaUJPLE1BQU1ELEdBQXZCLElBQThCQSxHQUFyQztBQUNILEtBSmdCOztBQU1qQkUsaUJBQWEscUJBQVNDLEtBQVQsRUFBZ0I7QUFDekIsZUFBT0EsTUFBTTVCLEtBQUs2QixLQUFMLENBQVcsS0FBS1YsTUFBTCxDQUFZLENBQVosRUFBZVMsTUFBTXpCLE1BQXJCLENBQVgsQ0FBTixDQUFQO0FBQ0gsS0FSZ0I7O0FBVWpCMkIsV0FBTyxlQUFTckIsSUFBVCxFQUFlc0IsT0FBZixFQUF3QjtBQUMzQixlQUFPQyxNQUFNQyxJQUFOLENBQVdELE1BQU1oQyxLQUFLa0MsS0FBTCxDQUFXekIsSUFBWCxDQUFOLEVBQXdCMEIsSUFBeEIsRUFBWCxFQUEyQ0MsR0FBM0MsQ0FBK0NMLE9BQS9DLENBQVA7QUFDSCxLQVpnQjs7QUFjakJNLGVBQVcsbUJBQVNDLEdBQVQsRUFBY0MsU0FBZCxFQUF5QjtBQUNoQ0QsWUFBSUUsT0FBSixDQUFZLG1CQUFXO0FBQ25CLGdCQUFJLENBQUNELFVBQVVFLE9BQVYsQ0FBTCxFQUF5QjtBQUNyQkgsb0JBQUlJLE1BQUosQ0FBV0QsT0FBWDtBQUNIO0FBQ0osU0FKRDs7QUFNQSxlQUFPSCxHQUFQO0FBQ0g7O0FBdEJnQixDQUFkLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7SUFHYUssVSxXQUFBQSxVO0FBRVQsd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsYUFBS04sR0FBTCxDQUFTTSxNQUFUO0FBQ0g7Ozs7OEJBVU87QUFBQSwyRkFBSixFQUFJO0FBQUEscUNBUEpDLFFBT0k7QUFBQSxnQkFQSkEsUUFPSSxpQ0FQTyxvQkFPUDtBQUFBLGtDQU5KQyxLQU1JO0FBQUEsZ0JBTkpBLEtBTUksOEJBTkksRUFBRUMsT0FBTyxNQUFULEVBTUo7QUFBQSw0Q0FMSkMsZUFLSTtBQUFBLGdCQUxKQSxlQUtJLHdDQUxjLENBS2Q7QUFBQSxxQ0FKSkMsUUFJSTtBQUFBLGdCQUpKQSxRQUlJLGlDQUpPLG9CQUlQO0FBQUEscUNBSEpDLFFBR0k7QUFBQSxnQkFISkEsUUFHSSxpQ0FITyxDQUdQO0FBQUEsMkNBRkpDLGNBRUk7QUFBQSxnQkFGSkEsY0FFSSx1Q0FGYU4sUUFFYjtBQUFBLGlDQURKcEMsSUFDSTtBQUFBLGdCQURKQSxJQUNJLDZCQURHLENBQ0g7O0FBQ0osaUJBQUtvQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGlCQUFLSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGlCQUFLRCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLGlCQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxpQkFBS3JDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxpQkFBS3lDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsaUJBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsaUJBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0g7OztnQ0FFTztBQUNKLG1CQUFPLENBQUMsS0FBS0EsSUFBYjtBQUNIOzs7K0JBRU1DLFEsRUFBVSxDQUFHOzs7K0JBRWJDLE8sRUFBUztBQUNaLGlCQUFLQyxjQUFMLENBQW9CRCxPQUFwQjtBQUNBLGlCQUFLRSxjQUFMLENBQW9CRixPQUFwQjtBQUNIOzs7eUNBRStCO0FBQUEsNEZBQUosRUFBSTtBQUFBLGlDQUFmRyxFQUFlO0FBQUEsZ0JBQWZBLEVBQWUsNEJBQVYsQ0FBVTs7QUFDNUIsaUJBQUtaLFFBQUwsQ0FBY2EsR0FBZCxDQUFrQixLQUFLVCxRQUFMLENBQWNVLElBQWQsR0FBcUIvQyxLQUFyQixDQUEyQjZDLEVBQTNCLENBQWxCO0FBQ0g7Ozt5Q0FFK0I7QUFBQSw0RkFBSixFQUFJO0FBQUEsaUNBQWZBLEVBQWU7QUFBQSxnQkFBZkEsRUFBZSw0QkFBVixDQUFVOztBQUM1QixpQkFBS1IsUUFBTCxDQUFjckMsS0FBZCxDQUFvQixLQUFLb0MsZUFBekI7QUFDSDs7OytCQUVhWSxJLEVBQU07QUFDaEIsaUJBQUtDLFNBQUwsQ0FBZUQsS0FBS0UsSUFBcEIsSUFBNEJGLElBQTVCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuRFFHLFksV0FBQUEsWTtBQUVULDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixJQUFJQyxHQUFKLEVBQWhCO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixJQUFJRCxHQUFKLEVBQWpCO0FBQ0g7Ozs7K0JBRWM7QUFDWCxnQkFBSUUsV0FBV0MsU0FBZjs7QUFEVyw4Q0FBUnpCLE1BQVE7QUFBUkEsc0JBQVE7QUFBQTs7QUFHWCxnQkFBSSxLQUFLcUIsUUFBTCxDQUFjeEQsSUFBZCxHQUFxQixDQUF6QixFQUE0QjtBQUFBOztBQUN4QjJELDJCQUFXLEtBQUtILFFBQUwsQ0FBY0ssTUFBZCxHQUF1QkMsSUFBdkIsR0FBOEJDLEtBQXpDO0FBQ0EsdUNBQVNsQyxHQUFULGtCQUFnQk0sTUFBaEI7QUFDSCxhQUhELE1BR087QUFDSHdCLDhEQUFlLEtBQUtKLElBQXBCLGdCQUE0QnBCLE1BQTVCO0FBQ0g7O0FBRUQsaUJBQUtxQixRQUFMLENBQWN2QixNQUFkLENBQXFCMEIsUUFBckI7QUFDQSxpQkFBS0QsU0FBTCxDQUFlVCxHQUFmLENBQW1CVSxRQUFuQjs7QUFFQSxtQkFBT0EsUUFBUDtBQUNIOzs7Z0NBRU9BLFEsRUFBVTtBQUNkLGdCQUFJLEtBQUtELFNBQUwsQ0FBZU0sR0FBZixDQUFtQkwsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixxQkFBS0QsU0FBTCxDQUFlekIsTUFBZixDQUFzQjBCLFFBQXRCO0FBQ0EscUJBQUtILFFBQUwsQ0FBY1AsR0FBZCxDQUFrQlUsUUFBbEI7QUFDSDtBQUNKOzs7Ozs7QUFLTCxJQUFJTSxnQkFBZ0IsRUFBcEI7O0lBRWFDLFcsV0FBQUEsVzs7Ozs7OztrQ0FFUTtBQUNiLGdCQUFJQyxPQUFPRixjQUFjLEtBQUtaLElBQW5CLENBQVg7QUFDQSxnQkFBSSxDQUFDYyxJQUFMLEVBQVc7QUFDUEEsdUJBQU8sSUFBSWIsWUFBSixDQUFpQixJQUFqQixDQUFQO0FBQ0FXLDhCQUFjaEIsR0FBZCxDQUFrQmtCLElBQWxCO0FBQ0g7O0FBRUQsbUJBQU9BLElBQVA7QUFDSDs7OytCQUVxQjtBQUFBOztBQUNsQixtQkFBTyxpQkFBS0MsT0FBTCxJQUFlQyxHQUFmLDJCQUFQO0FBQ0g7OztnQ0FFY1YsUSxFQUFVO0FBQ3JCLG1CQUFPLEtBQUtTLE9BQUwsR0FBZUUsT0FBZixDQUF1QlgsUUFBdkIsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0RFFZLE0sV0FBQUEsTTtBQUVULG9CQUFZM0IsUUFBWixFQUFzQjRCLEtBQXRCLEVBQTZCO0FBQUE7O0FBQ3pCLGFBQUs1QixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUs0QixLQUFMLEdBQWFBLEtBQWI7QUFDSDs7OztpQ0FFUTtBQUNMLGlCQUFLQSxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsS0FBSzdCLFFBQXZCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7aUNBRVE7QUFDTCxpQkFBSzRCLEtBQUwsQ0FBV0UsTUFBWDtBQUNBLG1CQUFPLElBQVA7QUFDSDs7O2dDQUVPO0FBQ0osaUJBQUs5QixRQUFMLENBQWMrQixLQUFkO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwQlFDLFksV0FBQUEsWTtBQUVULDRCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7O2lDQUVReEIsSSxFQUFNeUIsUyxFQUFXO0FBQ3RCLGlCQUFLRCxTQUFMLENBQWV4QixJQUFmLElBQXVCLEVBQUV5QixvQkFBRixFQUFhQyxVQUFVLEVBQXZCLEVBQXZCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7MkJBRUVDLFEsRUFBVTNCLEksRUFBTTRCLFEsRUFBVTtBQUN6QixnQkFBSSxLQUFLSixTQUFMLENBQWV4QixJQUFmLENBQUosRUFBMEI7QUFDdEIscUJBQUt3QixTQUFMLENBQWV4QixJQUFmLEVBQXFCMEIsUUFBckIsQ0FBOEJHLElBQTlCLENBQW1DLEVBQUVELGtCQUFGLEVBQVlELGtCQUFaLEVBQW5DO0FBQ0g7O0FBRUQsbUJBQU8sSUFBUDtBQUNIOzs7d0NBRWU7QUFBQTs7QUFBQSx1Q0FDSDNCLElBREc7QUFBQSxzQ0FFc0IsTUFBS3dCLFNBQUwsQ0FBZXhCLElBQWYsQ0FGdEI7QUFBQSxvQkFFRnlCLFNBRkUsbUJBRUZBLFNBRkU7QUFBQSxvQkFFU0MsUUFGVCxtQkFFU0EsUUFGVDs7QUFHUkEseUJBQVNoRCxPQUFULENBQWlCO0FBQUEsd0JBQUdrRCxRQUFILFFBQUdBLFFBQUg7QUFBQSx3QkFBYUQsUUFBYixRQUFhQSxRQUFiO0FBQUEsMkJBQ2JBLFNBQ0tHLE1BREwsQ0FDWTtBQUFBLCtCQUFXTCxVQUFVOUMsT0FBVixDQUFYO0FBQUEscUJBRFosRUFFS0QsT0FGTCxDQUVhO0FBQUEsK0JBQVdrRCxTQUFTakQsT0FBVCxDQUFYO0FBQUEscUJBRmIsQ0FEYTtBQUFBLGlCQUFqQjtBQUhROztBQUNaLGlCQUFLLElBQUlxQixJQUFULElBQWlCLEtBQUt3QixTQUF0QixFQUFpQztBQUFBLHNCQUF4QnhCLElBQXdCO0FBT2hDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJMOztBQUNBOzs7O0lBR2ErQixRLFdBQUFBLFE7QUFFVCx3QkFBc0M7QUFBQSxZQUExQkMsU0FBMEIsdUVBQWQsb0JBQWM7O0FBQUE7O0FBQ2xDLGFBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNIOzs7O3VDQUVxQztBQUFBLG9DQUEzQkMsT0FBMkI7QUFBQSxnQkFBM0JBLE9BQTJCLGdDQUFqQixFQUFpQjtBQUFBLGtDQUFiQyxLQUFhO0FBQUEsZ0JBQWJBLEtBQWEsOEJBQUwsQ0FBSzs7QUFDbEMsaUJBQUtILE1BQUwsQ0FBWUosSUFBWixDQUFpQixFQUFFTSxTQUFTLElBQUkvQixHQUFKLENBQVErQixPQUFSLENBQVgsRUFBNkJDLE9BQU8sQ0FBQyxDQUFELEdBQUtBLEtBQXpDLEVBQWpCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7K0JBRU03QyxRLEVBQVU7QUFBQTs7QUFDYixpQkFBSzBDLE1BQUwsQ0FBWXZELE9BQVosQ0FBb0IsaUJBQVM7QUFDekJhLHlCQUFTc0MsSUFBVCxDQUFjO0FBQ1ZRLGlDQUFhLE1BQUtMLFNBQUwsQ0FBZW5DLElBQWYsR0FBc0IvQyxLQUF0QixDQUE0QndGLE1BQU1GLEtBQWxDLENBREg7QUFFVnRGLDJCQUFPLG1CQUFXLE1BQUtvRixJQUFoQixFQUFzQixNQUFLQSxJQUEzQjtBQUZHLGlCQUFkO0FBSUFJLHNCQUFNSCxPQUFOLENBQWN6RCxPQUFkLENBQXNCO0FBQUEsMkJBQVU2RCxPQUFPbkIsTUFBUCxDQUFjN0IsUUFBZCxDQUFWO0FBQUEsaUJBQXRCO0FBQ0FBLHlCQUFTaUQsR0FBVDtBQUNILGFBUEQ7QUFRSDs7O2lDQUVRO0FBQ0wsaUJBQUtQLE1BQUwsQ0FBWXZELE9BQVosQ0FBb0I7QUFBQSx1QkFBUyxhQUFNSCxTQUFOLENBQWdCK0QsTUFBTUgsT0FBdEIsRUFBK0Isa0JBQVU7QUFDbEVJLDJCQUFPbEIsTUFBUDtBQUNBLDJCQUFPa0IsT0FBT0UsS0FBUCxFQUFQO0FBQ0gsaUJBSDRCLENBQVQ7QUFBQSxhQUFwQjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNMOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR2FDLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7OEJBRVE7QUFBQSxnQkFBYjVELE1BQWEsdUVBQUosRUFBSTs7QUFDYixnSEFBVUEsTUFBVjtBQUNBLGlCQUFLNkQsTUFBTCxHQUFjN0QsT0FBTzZELE1BQVAsSUFBaUIsQ0FBL0I7QUFDSDs7OytCQUVNcEQsUSxFQUFXO0FBQ2RBLHFCQUFTcUQsTUFBVCxDQUFnQixLQUFLN0QsUUFBckIsRUFBK0IsS0FBSzRELE1BQXBDLEVBQTRDLEtBQUszRCxLQUFqRDtBQUNIOzs7Ozs7SUFJUTZELFMsV0FBQUEsUzs7O0FBRVQseUJBQXlCO0FBQUEsWUFBYi9ELE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSwySEFDZkEsTUFEZTs7QUFFckIsZUFBS25DLElBQUwsR0FBWW1DLE9BQU9uQyxJQUFuQjtBQUZxQjtBQUd4Qjs7OzsrQkFFTTRDLFEsRUFBVTtBQUNiQSxxQkFBU3VELFNBQVQsQ0FBbUIsS0FBSy9ELFFBQXhCLEVBQWtDLEtBQUtwQyxJQUF2QyxFQUE2QyxLQUFLcUMsS0FBbEQ7QUFDSDs7Ozs7O0lBSVErRCxTLFdBQUFBLFM7OztBQUVULHlCQUF5QjtBQUFBLFlBQWJqRSxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsMkhBQ2ZBLE1BRGU7O0FBRXJCLGVBQUtrRSxLQUFMLEdBQWEsRUFBYjtBQUZxQjtBQUd4Qjs7OztrQ0FFc0M7QUFBQSxtQ0FBakNDLE1BQWlDO0FBQUEsZ0JBQWpDQSxNQUFpQywrQkFBeEIsb0JBQXdCO0FBQUEsZ0JBQVZWLE1BQVUsUUFBVkEsTUFBVTs7QUFDbkMsaUJBQUtTLEtBQUwsQ0FBV25CLElBQVgsQ0FBZ0IsRUFBRVUsY0FBRixFQUFVVSxjQUFWLEVBQWhCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7K0JBRU0xRCxRLEVBQVU7QUFDYkEscUJBQVNzQyxJQUFULENBQWM7QUFDVlEsNkJBQWEsS0FBS3RELFFBRFI7QUFFVmpDLHVCQUFPLG1CQUFXLEtBQUtILElBQWhCLEVBQXNCLEtBQUtBLElBQTNCO0FBRkcsYUFBZDtBQUlBLGlCQUFLcUcsS0FBTCxDQUFXdEUsT0FBWCxDQUFtQixpQkFBd0I7QUFBQSxvQkFBckI2RCxNQUFxQixTQUFyQkEsTUFBcUI7QUFBQSxvQkFBYlUsTUFBYSxTQUFiQSxNQUFhOztBQUN2QzFELHlCQUFTc0MsSUFBVCxDQUFjLEVBQUVRLGFBQWFZLE1BQWYsRUFBZDtBQUNBVix1QkFBT25CLE1BQVAsQ0FBYzdCLFFBQWQ7QUFDQUEseUJBQVNpRCxHQUFUO0FBQ0gsYUFKRDtBQUtBakQscUJBQVNpRCxHQUFUO0FBQ0g7OzsrQkFFTVUsRyxFQUFLO0FBQ1IseUhBQWFBLEdBQWI7QUFDQSxpQkFBS0YsS0FBTCxDQUFXdEUsT0FBWCxDQUFtQjtBQUFBLG9CQUFHNkQsTUFBSCxTQUFHQSxNQUFIO0FBQUEsdUJBQWdCQSxPQUFPbEIsTUFBUCxDQUFjNkIsR0FBZCxDQUFoQjtBQUFBLGFBQW5CO0FBQ0g7Ozs7OztJQUlRQyxhLFdBQUFBLGE7OztBQUVULDZCQUtRO0FBQUEsd0ZBQUosRUFBSTtBQUFBLGtDQUpKQyxPQUlJO0FBQUEsWUFKSkEsT0FJSSxpQ0FKTSxHQUlOO0FBQUEscUNBSEpDLFVBR0k7QUFBQSxZQUhKQSxVQUdJLG9DQUhTLEdBR1Q7QUFBQSxpQ0FGSkMsTUFFSTtBQUFBLFlBRkpBLE1BRUksZ0NBRks7QUFBQSxtQkFBTSxvQkFBTjtBQUFBLFNBRUw7QUFBQSxtQ0FESnZFLFFBQ0k7QUFBQSxZQURKQSxRQUNJLGtDQURPLG9CQUNQOztBQUFBOztBQUFBLG1JQUNFLEVBQUVBLGtCQUFGLEVBREY7O0FBRUosZUFBS3VFLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGVBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsZUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBSkk7QUFLUDs7Ozt5Q0FFZ0I7QUFDYixnQkFBSUcsZUFBZSxLQUFLcEUsUUFBTCxDQUFjVSxJQUFkLEdBQXFCL0MsS0FBckIsQ0FBMkIsS0FBS3NHLE9BQWhDLENBQW5CO0FBQ0EsZ0JBQUlJLGVBQWUsS0FBS0YsTUFBTCxHQUNkekQsSUFEYyxHQUVkNEQsUUFGYyxDQUVMLEtBQUsxRSxRQUZBLEVBR2RqQyxLQUhjLENBR1IsS0FBS3VHLFVBSEcsRUFJZEksUUFKYyxDQUlMRixZQUpLLENBQW5COztBQU1BLGlCQUFLcEUsUUFBTCxDQUFjUyxHQUFkLENBQWtCNEQsWUFBbEI7QUFDSDs7Ozs7O0lBSVFFLFMsV0FBQUEsUzs7O0FBRVQsdUJBQVk1RSxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsMkhBQ1ZBLE1BRFU7O0FBRWhCLGVBQUs2RSxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsZUFBSzVFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxlQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxlQUFLOEUsV0FBTCxHQUFtQiwrQkFBaUJsQixNQUFqQixDQUFuQjtBQUxnQjtBQU1uQjs7OzsrQkFFTTtBQUNILGlCQUFLbUIsSUFBTCxDQUFVLEtBQUsvRSxNQUFmO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7K0JBVU87QUFBQTs7QUFBQSw0RkFBSixFQUFJO0FBQUEsbUNBUEpuQyxJQU9JO0FBQUEsZ0JBUEpBLElBT0ksOEJBUEcsQ0FPSDtBQUFBLHdDQU5KbUgsU0FNSTtBQUFBLGdCQU5KQSxTQU1JLG1DQU5RLEVBTVI7QUFBQSxvQ0FMSjlFLEtBS0k7QUFBQSxnQkFMSkEsS0FLSSwrQkFMSSxFQUFFQyxPQUFPLE1BQVQsRUFLSjtBQUFBLDJDQUpKOEUsWUFJSTtBQUFBLGdCQUpKQSxZQUlJLHNDQUpXLEVBSVg7QUFBQSx1Q0FISmhGLFFBR0k7QUFBQSxnQkFISkEsUUFHSSxrQ0FITyxvQkFHUDtBQUFBLHdDQUZKaUYsU0FFSTtBQUFBLGdCQUZKQSxTQUVJLG1DQUZRLENBRVI7QUFBQSxzQ0FESkMsT0FDSTtBQUFBLGdCQURKQSxPQUNJLGlDQURNL0gsS0FBS3NCLEVBQUwsR0FBVSxDQUNoQjs7QUFDSixpQkFBS21HLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlTyxNQUFmLENBQXNCLGFBQU1sRyxLQUFOLENBQVlyQixJQUFaLEVBQWtCO0FBQUEsdUJBQU0sT0FBS2lILFdBQUwsQ0FBaUI1QyxHQUFqQixDQUFxQjtBQUNoRmhDLGdDQURnRixFQUN6RUQsVUFBVUEsU0FBU2MsSUFBVCxFQUQrRCxFQUM5QzhDLFFBQVFvQixZQURzQyxFQUN4QjdFLGlCQUFpQixJQURPO0FBRWhGQyw4QkFBVSxlQUFPZ0YsV0FBUCxDQUFtQixDQUFuQixFQUFzQkgsU0FBdEIsRUFBaUNDLE9BQWpDLEVBQ0xuSCxLQURLLENBQ0MsYUFBTU8sTUFBTixDQUFheUcsWUFBWSxDQUF6QixFQUE0QkEsU0FBNUIsQ0FERDtBQUZzRSxpQkFBckIsQ0FBTjtBQUFBLGFBQWxCLENBQXRCLENBQWpCO0FBS0g7OztnQ0FFTztBQUNKLG1CQUFPLEtBQUtILFNBQUwsQ0FBZXRILE1BQWYsR0FBd0IsQ0FBL0I7QUFDSDs7OytCQUVNa0QsUSxFQUFVO0FBQ2JBLHFCQUFTc0MsSUFBVCxDQUFjLEVBQUV6QyxVQUFVLEtBQUtBLFFBQWpCLEVBQWQ7QUFDQSxpQkFBS3VFLFNBQUwsQ0FBZWpGLE9BQWYsQ0FBdUI7QUFBQSx1QkFBWTBGLFNBQVNoRCxNQUFULENBQWdCN0IsUUFBaEIsQ0FBWjtBQUFBLGFBQXZCO0FBQ0FBLHFCQUFTaUQsR0FBVDtBQUNIOzs7K0JBRU03QyxFLEVBQUk7QUFBQTs7QUFDUCxpQkFBS2dFLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlN0IsTUFBZixDQUFzQixvQkFBWTtBQUMvQ3NDLHlCQUFTekIsTUFBVCxJQUFtQixhQUFNdEYsTUFBTixDQUFhLElBQWIsRUFBbUIsR0FBbkIsQ0FBbkI7QUFDQStHLHlCQUFTL0MsTUFBVCxDQUFnQjFCLEVBQWhCOztBQUVBLG9CQUFJOEMsUUFBUTJCLFNBQVN6QixNQUFULEdBQWtCLEdBQTlCO0FBQ0Esb0JBQUksQ0FBQ0YsS0FBTCxFQUFZO0FBQ1IsMkJBQUttQixXQUFMLENBQWlCM0MsT0FBakIsQ0FBeUJtRCxRQUF6QjtBQUNIOztBQUVELHVCQUFPM0IsS0FBUDtBQUNILGFBVmdCLENBQWpCO0FBV0g7Ozs7OztJQUlRNEIsUSxXQUFBQSxROzs7QUFFVCxzQkFBWXZGLE1BQVosRUFBb0I7QUFBQTs7QUFBQSxtSEFDVkEsTUFEVTtBQUVuQjs7OzsrQkFFTWEsRSxFQUFJO0FBQ1AsaUJBQUsyRSxJQUFMO0FBQ0EsdUhBQWEzRSxFQUFiO0FBQ0g7Ozs7RUFUeUIrRCxTOztJQWFqQmEsTyxXQUFBQSxPOzs7QUFFVCx1QkFBeUI7QUFBQSxZQUFiekYsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUFBLHVIQUNmQSxNQURlOztBQUVyQixlQUFLMEYsTUFBTCxHQUFjMUYsT0FBTzBGLE1BQVAsSUFBaUIsRUFBL0I7QUFDQSxlQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBSHFCO0FBSXhCOzs7OytCQUVNbEYsUSxFQUFVO0FBQ2JBLHFCQUFTc0MsSUFBVCxDQUFjLEVBQUVRLGFBQWEsS0FBS3RELFFBQXBCLEVBQThCSyxVQUFVLEtBQUtBLFFBQTdDLEVBQWQ7QUFDQUcscUJBQVNtRixPQUFULENBQWlCLEtBQUtGLE1BQXRCLEVBQThCLEtBQUs3SCxJQUFuQyxFQUF5QyxLQUFLcUMsS0FBOUM7QUFDQU8scUJBQVNpRCxHQUFUO0FBQ0g7Ozs7OztJQUlRbUMsTyxXQUFBQSxPO0FBRVQsdUJBQTZEO0FBQUEsWUFBakRsRCxTQUFpRCx1RUFBcEM7QUFBQSxtQkFBTSxLQUFOO0FBQUEsU0FBb0M7QUFBQSxZQUF0Qm1ELE9BQXNCLHVFQUFYO0FBQUEsbUJBQU0sRUFBTjtBQUFBLFNBQVc7O0FBQUE7O0FBQ3pELGFBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGFBQUtuRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGFBQUt1QixLQUFMLEdBQWEsRUFBYjtBQUNIOzs7OytCQUVNeEQsTyxFQUFTO0FBQ1osZ0JBQUksS0FBS2lDLFNBQUwsQ0FBZSxLQUFLdUIsS0FBTCxDQUFXM0csTUFBMUIsQ0FBSixFQUF1QztBQUFBOztBQUNuQywrQkFBSzJHLEtBQUwsRUFBV25CLElBQVgsa0NBQW1CLEtBQUsrQyxPQUFMLEVBQW5CO0FBQ0g7O0FBRUQsaUJBQUs1QixLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXbEIsTUFBWCxDQUFrQixnQkFBUTtBQUNuQytDLHFCQUFLeEQsTUFBTCxDQUFZN0IsT0FBWjtBQUNBLHVCQUFPcUYsS0FBS3BDLEtBQUwsRUFBUDtBQUNILGFBSFksQ0FBYjtBQUlIOzs7K0JBRU1sRCxRLEVBQVU7QUFDYixpQkFBS3lELEtBQUwsQ0FBV3RFLE9BQVgsQ0FBbUI7QUFBQSx1QkFBUW1HLEtBQUt6RCxNQUFMLENBQVk3QixRQUFaLENBQVI7QUFBQSxhQUFuQjtBQUNIOzs7Z0NBRU87QUFDSixtQkFBTyxJQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1MOzs7O0lBR2F1RixjLFdBQUFBLGM7QUFFVCw0QkFBWTVCLEdBQVosRUFBaUI2QixLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFBQTs7QUFDNUIsYUFBSzlCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUs2QixLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OztrQ0FFU0MsYyxFQUFnQkMsb0IsRUFBc0I7QUFDNUMsaUJBQUtyRCxJQUFMLENBQVVvRCxjQUFWO0FBQ0FDO0FBQ0EsaUJBQUsxQyxHQUFMO0FBQ0g7OzsrQkFNTztBQUFBLDJGQUFKLEVBQUk7QUFBQSxrQ0FISjFGLEtBR0k7QUFBQSxnQkFISkEsS0FHSSw4QkFISSxtQkFBVyxDQUFYLEVBQWMsQ0FBZCxDQUdKO0FBQUEscUNBRkpzQyxRQUVJO0FBQUEsZ0JBRkpBLFFBRUksaUNBRk8sQ0FFUDtBQUFBLHdDQURKaUQsV0FDSTtBQUFBLGdCQURKQSxXQUNJLG9DQURVLG9CQUNWOztBQUNKLGlCQUFLYSxHQUFMLENBQVNpQyxJQUFUO0FBQ0EsaUJBQUtqQyxHQUFMLENBQVNwRyxLQUFULENBQWVBLE1BQU1kLENBQXJCLEVBQXdCYyxNQUFNYixDQUE5QjtBQUNBLGlCQUFLaUgsR0FBTCxDQUFTa0MsTUFBVCxDQUFnQmhHLFFBQWhCO0FBQ0EsaUJBQUs4RCxHQUFMLENBQVNtQyxTQUFULENBQW1CaEQsWUFBWXJHLENBQS9CLEVBQWtDcUcsWUFBWXBHLENBQTlDO0FBQ0g7Ozs4QkFFSztBQUNGLGlCQUFLaUgsR0FBTCxDQUFTb0MsT0FBVDtBQUNIOzs7K0JBRU12RyxRLEVBQVU0RCxNLFNBQWdDO0FBQUEsZ0JBQXRCMUQsS0FBc0IsU0FBdEJBLEtBQXNCO0FBQUEsc0NBQWZzRyxPQUFlO0FBQUEsZ0JBQWZBLE9BQWUsaUNBQUwsQ0FBSzs7QUFDN0M7QUFDQTs7QUFFQSxpQkFBS3JDLEdBQUwsQ0FBU3NDLFNBQVQsR0FBcUJ2RyxLQUFyQjtBQUNBLGlCQUFLaUUsR0FBTCxDQUFTdUMsV0FBVCxHQUF1QkYsT0FBdkI7QUFDQSxpQkFBS3JDLEdBQUwsQ0FBU3dDLFNBQVQ7QUFDQSxpQkFBS3hDLEdBQUwsQ0FBU3lDLEdBQVQsQ0FBYTVHLFNBQVMvQyxDQUF0QixFQUF5QitDLFNBQVM5QyxDQUFsQyxFQUFxQzBHLE1BQXJDLEVBQTZDLENBQTdDLEVBQWdEekcsS0FBS3NCLEVBQUwsR0FBVSxDQUExRDtBQUNBLGlCQUFLMEYsR0FBTCxDQUFTMEMsU0FBVDtBQUNBLGlCQUFLMUMsR0FBTCxDQUFTMkMsSUFBVDtBQUNIOzs7a0NBRVM5RyxRLEVBQVVwQyxJLFNBQThCO0FBQUEsZ0JBQXRCc0MsS0FBc0IsU0FBdEJBLEtBQXNCO0FBQUEsc0NBQWZzRyxPQUFlO0FBQUEsZ0JBQWZBLE9BQWUsaUNBQUwsQ0FBSzs7QUFDOUMsaUJBQUtyQyxHQUFMLENBQVNzQyxTQUFULEdBQXFCdkcsS0FBckI7QUFDQSxpQkFBS2lFLEdBQUwsQ0FBU3VDLFdBQVQsR0FBdUJGLE9BQXZCO0FBQ0EsaUJBQUtyQyxHQUFMLENBQVM0QyxRQUFULENBQWtCL0csU0FBUy9DLENBQVQsR0FBYVcsS0FBS29JLEtBQUwsR0FBYSxDQUE1QyxFQUErQ2hHLFNBQVM5QyxDQUFULEdBQWFVLEtBQUtxSSxNQUFMLEdBQWMsQ0FBMUUsRUFBNkVySSxLQUFLb0ksS0FBbEYsRUFBeUZwSSxLQUFLcUksTUFBOUY7QUFDSDs7O2dDQUVPO0FBQ0osaUJBQUs5QixHQUFMLENBQVNzQyxTQUFULEdBQXFCLGVBQXJCO0FBQ0EsaUJBQUt0QyxHQUFMLENBQVN1QyxXQUFULEdBQXVCLENBQXZCO0FBQ0EsaUJBQUt2QyxHQUFMLENBQVM0QyxRQUFULENBQWtCLENBQUMsS0FBS2YsS0FBTixHQUFjLENBQWhDLEVBQW1DLENBQUMsS0FBS0MsTUFBTixHQUFlLENBQWxELEVBQXFELEtBQUtELEtBQTFELEVBQWlFLEtBQUtDLE1BQXRFO0FBQ0g7OztnQ0FFT1IsTSxFQUEwQztBQUFBOztBQUFBLGdCQUFsQzdILElBQWtDLHVFQUEzQixDQUEyQjtBQUFBO0FBQUEsZ0JBQXRCc0MsS0FBc0IsU0FBdEJBLEtBQXNCO0FBQUEsc0NBQWZzRyxPQUFlO0FBQUEsZ0JBQWZBLE9BQWUsaUNBQUwsQ0FBSzs7QUFDOUMsZ0JBQUlmLE9BQU9uSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CLHFCQUFLNkcsR0FBTCxDQUFTd0MsU0FBVDtBQUNBLHFCQUFLeEMsR0FBTCxDQUFTc0MsU0FBVCxHQUFxQnZHLEtBQXJCO0FBQ0EscUJBQUtpRSxHQUFMLENBQVN1QyxXQUFULEdBQXVCRixPQUF2QjtBQUNBLHFCQUFLckMsR0FBTCxDQUFTNkMsTUFBVCxDQUFnQnZCLE9BQU8sQ0FBUCxFQUFVeEksQ0FBVixHQUFjVyxJQUE5QixFQUFvQzZILE9BQU8sQ0FBUCxFQUFVdkksQ0FBVixHQUFjVSxJQUFsRDtBQUNBNkgsdUJBQU85RixPQUFQLENBQWUsaUJBQVM7QUFDcEIsMEJBQUt3RSxHQUFMLENBQVM4QyxNQUFULENBQWdCQyxNQUFNakssQ0FBTixHQUFVVyxJQUExQixFQUFnQ3NKLE1BQU1oSyxDQUFOLEdBQVVVLElBQTFDO0FBQ0gsaUJBRkQ7QUFHQSxxQkFBS3VHLEdBQUwsQ0FBUzBDLFNBQVQ7QUFDQSxxQkFBSzFDLEdBQUwsQ0FBUzJDLElBQVQ7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwRVFLLEssV0FBQUEsSztBQUVULHFCQUFjO0FBQUE7O0FBQ1YsYUFBSzFFLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7Ozs4QkFFZTtBQUFBLDhDQUFUVyxPQUFTO0FBQVRBLHVCQUFTO0FBQUE7O0FBQ1pBLG9CQUFRekQsT0FBUixDQUFnQixtQkFBVztBQUN0QixvQkFBSSxPQUFPeUQsUUFBUWdFLEtBQWYsS0FBeUIsV0FBN0IsRUFBMEM7QUFDdkNoRSw0QkFBUWdFLEtBQVI7QUFDSDtBQUNKLGFBSkQ7O0FBT0EsaUJBQUszRSxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZTBDLE1BQWYsQ0FBc0IvQixPQUF0QixDQUFqQjtBQUNBLG1CQUFPLElBQVA7QUFDSDs7OytCQUVNNUMsUSxFQUFVO0FBQ2IsaUJBQUtpQyxTQUFMLENBQWU5QyxPQUFmLENBQXVCLGtCQUFVO0FBQzdCLG9CQUFJLE9BQU82RCxPQUFPbkIsTUFBZCxLQUF5QixXQUE3QixFQUEwQztBQUN0Q21CLDJCQUFPbkIsTUFBUCxDQUFjN0IsUUFBZDtBQUNIO0FBQ0osYUFKRDtBQUtIOzs7K0JBRU0yRCxHLEVBQUs7QUFDUixpQkFBSzFCLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlTSxNQUFmLENBQXNCLGtCQUFVO0FBQzdDUyx1QkFBT2xCLE1BQVAsQ0FBYzZCLEdBQWQ7QUFDQSxvQkFBSSxPQUFPWCxPQUFPRSxLQUFkLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3JDLDJCQUFPRixPQUFPRSxLQUFQLEVBQVA7QUFDSDs7QUFFRCx1QkFBTyxJQUFQO0FBQ0gsYUFQZ0IsQ0FBakI7QUFRSCIsImZpbGUiOiJlbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NTQ3MmQ0YWJlZjkyNjY5ZmJjMiIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBzZXQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cblxuICAgIGFkZCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGUoYW5nbGUpIHtcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGNvcyAtIHRoaXMueSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhbmdsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIGN1dChzaXplKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBpZiAobGVuZ3RoID4gc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcbiAgICB9XG5cbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54IC09IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlKHNpemUpIHtcbiAgICAgICAgdGhpcy54ICo9IHNpemU7XG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFV0aWxzLnJhbmRvbShtaW5YLCBtYXhYKSwgVXRpbHMucmFuZG9tKG1pblksIG1heFkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9sYXIoYW5nbGUgPSAwLCBsZW5ndGggPSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdmVjdG9yLmpzIiwiZXhwb3J0IGNvbnN0IFV0aWxzID0ge1xuXG4gICAgcmFuZG9tOiBmdW5jdGlvbihtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfSxcblxuICAgIHJhbmRvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpKV07XG4gICAgfSxcblxuICAgIHJhbmdlOiBmdW5jdGlvbihzaXplLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KE1hdGgucm91bmQoc2l6ZSkpLmtleXMoKSkubWFwKGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJTZXQ6IGZ1bmN0aW9uKHNldCwgcHJlZGljYXRlKSB7XG4gICAgICAgIHNldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmVkaWNhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS91dGlscy5qcyIsImV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc2V0KHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogJyNmMDAnIH0sXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXG4gICAgICAgIHNpemUgPSAxXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB0aGlzLnZlbG9jaXR5RGFtcGluZyA9IHZlbG9jaXR5RGFtcGluZztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKGR0KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoeyBkdCA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsZWFzZWQuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlZC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxubGV0IHBvb2xDb250YWluZXIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIEluc3RhbmNhYmxlIHtcbiAgICBcbiAgICBzdGF0aWMgZ2V0UG9vbCgpIHtcbiAgICAgICAgbGV0IHBvb2wgPSBwb29sQ29udGFpbmVyW3RoaXMubmFtZV07XG4gICAgICAgIGlmICghcG9vbCkge1xuICAgICAgICAgICAgcG9vbCA9IG5ldyBJbnN0YW5jZVBvb2wodGhpcyk7XG4gICAgICAgICAgICBwb29sQ29udGFpbmVyLmFkZChwb29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb29sO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbmV3KC4uLmNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKCkubmV3KC4uLmNvbmZpZyk7XG4gICAgfVxuICAgXG4gICAgc3RhdGljIHJlbGVhc2UoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLnJlbGVhc2UoaW5zdGFuY2UpO1xuICAgIH1cbiAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2VuZ2luZS5qcyIsImV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGhhbmRsZXJzOiBbXSB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy56b29tID0gMTtcbiAgICB9XG5cbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAtMSAvIGRlcHRoIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5yZWZlcmVuY2UuY29weSgpLnNjYWxlKGxheWVyLmRlcHRoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBzZXQoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcbiAgICAgICAgcmVuZGVyZXIuY2lyY2xlKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBvYmplY3QsIG9mZnNldCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xuICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnNpemUsIHRoaXMuc2l6ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QsIG9mZnNldCB9KSA9PiB7XG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IG9mZnNldCB9KTtcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHsgb2JqZWN0IH0pID0+IG9iamVjdC51cGRhdGUoY3R4KSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpbmd5VmVjdG9yIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGRhbXBpbmcgPSAwLjEsXG4gICAgICAgIGVsYXN0aWNpdHkgPSAwLjEsXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKClcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuZWxhc3RpY2l0eSA9IGVsYXN0aWNpdHk7XG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XG4gICAgICAgIGxldCBkYW1waW5nRm9yY2UgPSB0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSh0aGlzLmRhbXBpbmcpO1xuICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy50YXJnZXQoKVxuICAgICAgICAgICAgLmNvcHkoKVxuICAgICAgICAgICAgLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5lbGFzdGljaXR5KVxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQoYWNjZWxlcmF0aW9uKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wgPSBuZXcgSW5zdGFuY2VQb29sKENpcmNsZSk7XG4gICAgfVxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdCh7XG4gICAgICAgIHNpemUgPSAyLFxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiBcIiNmMDBcIiB9LFxuICAgICAgICBwYXJ0aWNsZVNpemUgPSAyMCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXG4gICAgICAgIGZyb21BbmdsZSA9IDAsXG4gICAgICAgIHRvQW5nbGUgPSBNYXRoLlBJICogMixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5jb25jYXQoVXRpbHMucmFuZ2Uoc2l6ZSwgKCkgPT4gdGhpcy5jaXJjbGVzUG9vbC5uZXcoe1xuICAgICAgICAgICAgc3R5bGUsIHBvc2l0aW9uOiBwb3NpdGlvbi5jb3B5KCksIHJhZGl1czogcGFydGljbGVTaXplLCB2ZWxvY2l0eURhbXBpbmc6IDAuOTcsXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoVXRpbHMucmFuZG9tKG1hZ25pdHVkZSAvIDIsIG1hZ25pdHVkZSkpXG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHsgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUucmVuZGVyKHJlbmRlcmVyKSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5yYWRpdXMgLz0gVXRpbHMucmFuZG9tKDEuMDUsIDEuMSk7XG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoZHQpO1xuXG4gICAgICAgICAgICBsZXQgYWxpdmUgPSBwYXJ0aWNsZS5yYWRpdXMgPiAwLjU7XG4gICAgICAgICAgICBpZiAoIWFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmZpcmUoKTtcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gY29uZmlnLnBvaW50cyB8fCBbXTtcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLCByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcbiAgICAgICAgcmVuZGVyZXIucG9seWdvbih0aGlzLnBvaW50cywgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcGF3bmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiA9ICgoKSA9PiBmYWxzZSksIGNyZWF0b3IgPSAoKCkgPT4gW10pKSB7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uKHRoaXMuaXRlbXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlKGNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVuZGVyKHJlbmRlcmVyKSk7IFxuICAgIH1cblxuICAgIGFsaXZlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9wcmltaXRpdmVzLmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uLCB0cmFuc2Zvcm1lZFJlbmRlcmluZykge1xuICAgICAgICB0aGlzLnB1c2godHJhbnNmb3JtYXRpb24pO1xuICAgICAgICB0cmFuc2Zvcm1lZFJlbmRlcmluZygpO1xuICAgICAgICB0aGlzLnBvcCgpO1xuICAgIH1cblxuICAgIHB1c2goe1xuICAgICAgICBzY2FsZSA9IG5ldyBWZWN0b3IoMSwgMSksXG4gICAgICAgIHJvdGF0aW9uID0gMCxcbiAgICAgICAgdHJhbnNsYXRpb24gPSBuZXcgVmVjdG9yKClcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHJvdGF0aW9uKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRyYW5zbGF0aW9uLngsIHRyYW5zbGF0aW9uLnkpO1xuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGNpcmNsZShwb3NpdGlvbiwgcmFkaXVzLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29sb3I7XG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSA1MDtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIHJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gc2l6ZS53aWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBzaXplLmhlaWdodCAvIDIsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcG9seWdvbihwb2ludHMsIHNpemUgPSAxLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCAqIHNpemUsIHBvaW50c1swXS55ICogc2l6ZSk7XG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKiBzaXplLCBwb2ludC55ICogc2l6ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XG4gICAgfVxuXG4gICAgYWRkKC4uLm9iamVjdHMpIHtcbiAgICAgICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdHMgPT4ge1xuICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0cy5zZXR1cCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RzLnNldHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmNvbmNhdChvYmplY3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LnJlbmRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShjdHgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuYWxpdmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvc2NlbmUuanMiXSwic291cmNlUm9vdCI6IiJ9