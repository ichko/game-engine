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
    ctx.scale(1.05, -1.05);

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
    scene.add(parallax, controller, camera);

    window.cancelAnimationFrame(animationFrame);
    (function animation() {
        engine.clear().render().update();
        environment.outOfBounds();

        parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

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
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render(renderer) {
            this.bigCircle.render(renderer);
            this.smallCircle.render(renderer);
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
        key: 'outOfBounds',
        value: function outOfBounds() {
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
        _this.fuel = new _engine.Fountain({ particleSize: 4, style: { opacity: 0.2 },
            fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        _this.ship = new _engine.Polygon({ points: [new _engine.Vector(-5, 0), new _engine.Vector(0, -3), new _engine.Vector(5, 0), new _engine.Vector(0, 15)] });
        _this.speed = 0;
        _this.color = _engine.Utils.randomArray(_config.colors);

        _this.add({ object: _this.fuel });
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
            this.fuel.style.color = this.color;
            this.controller.color = this.color;

            var forwardAngle = this.controller.direction.angle() + Math.PI;
            this.ship.rotation = forwardAngle + Math.PI / 2;
            this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
            this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
            this.fuel.config.magnitude = this.speed / 1.5;
            this.fuel.config.size = this.speed / 1.5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI0M2Q2OGRjNTU2ZmI3NGJiN2YiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hc3Rlcm9pZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2lvLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvcGxheWVyLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ2ZWN0b3IiLCJsZW5ndGgiLCJhbmdsZSIsInNpbiIsImNvcyIsInRtcFgiLCJhdGFuMiIsInNpemUiLCJzY2FsZVRvIiwibm9ybWFsaXplIiwic2NhbGUiLCJkeCIsImR5IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJhbmRvbSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsInBvbGFyIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJyYW5kb21BcnJheSIsImFycmF5IiwiZmxvb3IiLCJyYW5nZSIsImhhbmRsZXIiLCJBcnJheSIsImZyb20iLCJyb3VuZCIsImtleXMiLCJtYXAiLCJmaWx0ZXJTZXQiLCJzZXQiLCJwcmVkaWNhdGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRlbGV0ZSIsIkdhbWVPYmplY3QiLCJjb25maWciLCJwb3NpdGlvbiIsInN0eWxlIiwiY29sb3IiLCJ2ZWxvY2l0eURhbXBpbmciLCJ2ZWxvY2l0eSIsInJvdGF0aW9uIiwicm90YXRpb25DZW50ZXIiLCJkZWFkIiwicmVuZGVyZXIiLCJjb250ZXh0IiwidXBkYXRlVmVsb2NpdHkiLCJ1cGRhdGVQb3NpdGlvbiIsImR0IiwiYWRkIiwiY29weSIsImZ1bmMiLCJwcm90b3R5cGUiLCJuYW1lIiwiSW5zdGFuY2VQb29sIiwidHlwZSIsInJlbGVhc2VkIiwiU2V0IiwiYWxsb2NhdGVkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJuZXh0IiwidmFsdWUiLCJoYXMiLCJwb29sQ29udGFpbmVyIiwiSW5zdGFuY2FibGUiLCJwb29sIiwiZ2V0UG9vbCIsIm5ldyIsInJlbGVhc2UiLCJFbmdpbmUiLCJzY2VuZSIsInJlbmRlciIsInVwZGF0ZSIsImNsZWFyIiwiRXZlbnRNYW5hZ2VyIiwiY29udGFpbmVyIiwiY29uZGl0aW9uIiwiaGFuZGxlcnMiLCJlbGVtZW50cyIsImV4ZWN1dG9yIiwicHVzaCIsImZpbHRlciIsIlBhcmFsbGF4IiwicmVmZXJlbmNlIiwibGF5ZXJzIiwiem9vbSIsIm9iamVjdHMiLCJkZXB0aCIsInRyYW5zbGF0aW9uIiwibGF5ZXIiLCJvYmplY3QiLCJwb3AiLCJhbGl2ZSIsIkNpcmNsZSIsInJhZGl1cyIsImNpcmNsZSIsIlJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIkNvbXBvc2l0ZSIsIml0ZW1zIiwib2Zmc2V0IiwiY3R4IiwiU3ByaW5neVZlY3RvciIsImRhbXBpbmciLCJlbGFzdGljaXR5IiwidGFyZ2V0IiwiZGFtcGluZ0ZvcmNlIiwiYWNjZWxlcmF0aW9uIiwic3VidHJhY3QiLCJFeHBsb3Npb24iLCJwYXJ0aWNsZXMiLCJjaXJjbGVzUG9vbCIsImluaXQiLCJtYWduaXR1ZGUiLCJwYXJ0aWNsZVNpemUiLCJmcm9tQW5nbGUiLCJ0b0FuZ2xlIiwiY29uY2F0IiwicmFuZG9tUG9sYXIiLCJwYXJ0aWNsZSIsIkZvdW50YWluIiwiZmlyZSIsIlBvbHlnb24iLCJwb2ludHMiLCJlbWlzc2lvbnMiLCJwb2x5Z29uIiwiU3Bhd25lciIsImNyZWF0b3IiLCJpdGVtIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJjb2xvcnMiLCJjYW52YXMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRDb250ZXh0IiwiaW8iLCJlbmdpbmUiLCJjb250cm9sbGVyIiwicGxheWVyIiwiY2FtZXJhIiwicGFyYWxsYXgiLCJlbnZpcm9ubWVudCIsIm9uTW91c2UiLCJzcGVlZCIsImFkZExheWVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbiIsIm91dE9mQm91bmRzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFzdGVyb2lkRmllbGQiLCJudW1Bc3Rlcm9pZHMiLCJhc3Rlcm9pZHMiLCJyYW5kb21Bc3Rlcm9pZFBvc2l0aW9uIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInJhbmRvbUFzdGVyb2lkU2hhcGUiLCJleHBsb3Npb25zIiwiZXhwbG9zaW9uU3Bhd25lciIsInNwbGljZSIsInNlZ21lbnRzIiwic2VnbWVudCIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImtpbGwiLCJDb250cm9sbGVyIiwiY2VudGVyIiwiZGlyZWN0aW9uIiwiY29udHJvbGxlclNwcmluZyIsIm1vdXNlIiwiYmlnQ2lyY2xlIiwic21hbGxDaXJjbGUiLCJjdXQiLCJFbnZpcm9ubWVudCIsImNpcmNsZUdlbmVyYXRvciIsImNvdW50IiwiY2FtZXJhUG9zIiwiSU8iLCJrZXlIYW5kbGVycyIsImtleVN0YXRlcyIsImJpbmRFdmVudHMiLCJyZXZlcnNlSGFuZGxlciIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImUiLCJjaGFuZ2VUb3VjaCIsIm1vdXNlRG93biIsIlBsYXllciIsImZ1ZWwiLCJzaGlwIiwiZm9yd2FyZEFuZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztJQUdhQSxNLFdBQUFBLE07QUFFVCxzQkFBMEI7QUFBQSxZQUFkQyxDQUFjLHVFQUFWLENBQVU7QUFBQSxZQUFQ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LEdBQTJCc0csZUFBZSxJQUFJLEtBQUt0RCxLQUFuRDtBQUNBLGlCQUFLb0QsSUFBTCxDQUFVdkwsTUFBVixDQUFpQmdGLFNBQWpCLEdBQTZCLEtBQUttRCxLQUFMLEdBQWEsR0FBMUM7QUFDQSxpQkFBS29ELElBQUwsQ0FBVXZMLE1BQVYsQ0FBaUJuQyxJQUFqQixHQUF3QixLQUFLc0ssS0FBTCxHQUFhLEdBQXJDOztBQUVBLGlCQUFLOUgsUUFBTCxDQUFjUyxHQUFkLENBQWtCLEtBQUsrRyxVQUFMLENBQWdCZ0MsU0FBaEIsQ0FBMEI5SSxJQUExQixHQUFpQy9DLEtBQWpDLENBQXdDLElBQUksSUFBTCxHQUFhLEtBQUttSyxLQUF6RCxDQUFsQjtBQUNBLGdCQUFJLEtBQUs5SCxRQUFMLENBQWM5QyxNQUFkLEtBQXlCLEdBQTdCLEVBQWtDO0FBQzlCLHFCQUFLOEMsUUFBTCxDQUFjdkMsT0FBZCxDQUFzQixHQUF0QjtBQUNIO0FBQ0oiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBiNDNkNjhkYzU1NmZiNzRiYjdmIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIHNldCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgfVxuXG4gICAgYWRkKHZlY3Rvcikge1xuICAgICAgICB0aGlzLnggKz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZShhbmdsZSkge1xuICAgICAgICBsZXQgWyBzaW4sIGNvcyBdID0gWyBNYXRoLnNpbihhbmdsZSksIE1hdGguY29zKGFuZ2xlKSBdO1xuICAgICAgICBsZXQgdG1wWCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICogY29zIC0gdGhpcy55ICogc2luO1xuICAgICAgICB0aGlzLnkgPSB0bXBYICogc2luICsgdGhpcy55ICogY29zO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFuZ2xlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG4gICAgY3V0KHNpemUpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgICAgIGlmIChsZW5ndGggPiBzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlVG8oc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZVRvKHNpemUgPSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLnNjYWxlKHNpemUpO1xuICAgIH1cblxuICAgIHN1YnRyYWN0KHZlY3Rvcikge1xuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gdmVjdG9yLng7XG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIHZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUoc2l6ZSkge1xuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcbiAgICAgICAgdGhpcy55ICo9IHNpemU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuICAgIHZlY3RvclNjYWxlKHZlY3Rvcikge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tKG1pblgsIG1heFgsIG1pblksIG1heFkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pblgsIG1heFgpLCBVdGlscy5yYW5kb20obWluWSwgbWF4WSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoLCBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21Qb2xhcihsZW5ndGggPSAxLCBtaW5BbmdsZSA9IDAsIG1heEFuZ2xlID0gTWF0aC5QSSAqIDIpIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20obWluQW5nbGUsIG1heEFuZ2xlKSwgbGVuZ3RoKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS92ZWN0b3IuanMiLCJleHBvcnQgY29uc3QgVXRpbHMgPSB7XG5cbiAgICByYW5kb206IGZ1bmN0aW9uKG1pbiA9IDAsIG1heCA9IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICB9LFxuXG4gICAgcmFuZG9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKHRoaXMucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkpXTtcbiAgICB9LFxuXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKHNpemUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoTWF0aC5yb3VuZChzaXplKSkua2V5cygpKS5tYXAoaGFuZGxlcik7XG4gICAgfSxcblxuICAgIGZpbHRlclNldDogZnVuY3Rpb24oc2V0LCBwcmVkaWNhdGUpIHtcbiAgICAgICAgc2V0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHNldC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvdXRpbHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50LW1hbmFnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgKiBmcm9tICcuL3ByaW1pdGl2ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL3NjZW5lJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2luZGV4LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cblxuICAgIHNldCh7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxuICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgcm90YXRpb24gPSAwLFxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxuICAgICAgICBzaXplID0gMVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMucm90YXRpb25DZW50ZXIgPSByb3RhdGlvbkNlbnRlcjtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWxpdmUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XG5cbiAgICB1cGRhdGUoY29udGV4dCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uKHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5wcm90b3R5cGVbZnVuYy5uYW1lXSA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2dhbWUtb2JqZWN0LmpzIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlUG9vbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0KC4uLmNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZWQuYWRkKGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcmVsZWFzZShpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hbGxvY2F0ZWQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmxldCBwb29sQ29udGFpbmVyID0ge307XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jYWJsZSB7XG4gICAgXG4gICAgc3RhdGljIGdldFBvb2woKSB7XG4gICAgICAgIGxldCBwb29sID0gcG9vbENvbnRhaW5lclt0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoIXBvb2wpIHtcbiAgICAgICAgICAgIHBvb2wgPSBuZXcgSW5zdGFuY2VQb29sKHRoaXMpO1xuICAgICAgICAgICAgcG9vbENvbnRhaW5lci5hZGQocG9vbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9vbDtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIG5ldyguLi5jb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbCgpLm5ldyguLi5jb25maWcpO1xuICAgIH1cbiAgIFxuICAgIHN0YXRpYyByZWxlYXNlKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woKS5yZWxlYXNlKGluc3RhbmNlKTtcbiAgICB9XG4gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwiZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9lbmdpbmUuanMiLCJleHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKG5hbWUsIGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXSA9IHsgY29uZGl0aW9uLCBoYW5kbGVyczogW10gfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oZWxlbWVudHMsIG5hbWUsIGV4ZWN1dG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcltuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0uaGFuZGxlcnMucHVzaCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRyaWdnZXJFdmVudHMoKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGxldCB7IGNvbmRpdGlvbiwgaGFuZGxlcnMgfSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoeyBleGVjdXRvciwgZWxlbWVudHMgfSkgPT5cbiAgICAgICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gY29uZGl0aW9uKGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGV4ZWN1dG9yKGVsZW1lbnQpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2V2ZW50LW1hbmFnZXIuanMiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJhbGxheCB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSBuZXcgVmVjdG9yKCkpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuem9vbSA9IDE7XG4gICAgfVxuXG4gICAgYWRkTGF5ZXIoeyBvYmplY3RzID0gW10sIGRlcHRoID0gMSB9KSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBvYmplY3RzOiBuZXcgU2V0KG9iamVjdHMpLCBkZXB0aDogLTEgLyBkZXB0aCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZShsYXllci5kZXB0aCksXG4gICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy56b29tLCB0aGlzLnpvb20pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBVdGlscy5maWx0ZXJTZXQobGF5ZXIub2JqZWN0cywgb2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3BhcmFsbGF4LmpzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vZ2FtZS1vYmplY3QnO1xuaW1wb3J0IHsgSW5zdGFuY2VQb29sIH0gZnJvbSAnLi9pbnN0YW5jZS1wb29sJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyLnNldChjb25maWcpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IGNvbmZpZy5yYWRpdXMgfHwgNTtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpICB7XG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5yZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZCh7IG9mZnNldCA9IG5ldyBWZWN0b3IoKSwgb2JqZWN0IH0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgb2JqZWN0LCBvZmZzZXQgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5wdXNoKHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHsgb2JqZWN0LCBvZmZzZXQgfSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XG4gICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3ByaW5neVZlY3RvciBleHRlbmRzIEdhbWVPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBkYW1waW5nID0gMC4xLFxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxuICAgICAgICB0YXJnZXQgPSAoKSA9PiBuZXcgVmVjdG9yKCksXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHsgcG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xuICAgICAgICB0aGlzLmRhbXBpbmcgPSBkYW1waW5nO1xuICAgIH1cblxuICAgIHVwZGF0ZVZlbG9jaXR5KCkge1xuICAgICAgICBsZXQgZGFtcGluZ0ZvcmNlID0gdGhpcy52ZWxvY2l0eS5jb3B5KCkuc2NhbGUodGhpcy5kYW1waW5nKTtcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcbiAgICAgICAgICAgIC5jb3B5KClcbiAgICAgICAgICAgIC5zdWJ0cmFjdCh0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcbiAgICAgICAgICAgIC5zdWJ0cmFjdChkYW1waW5nRm9yY2UpO1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xuICAgIH1cblxuICAgIGZpcmUoKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXQoe1xuICAgICAgICBzaXplID0gMixcbiAgICAgICAgbWFnbml0dWRlID0gMTAsXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogXCIjZjAwXCIgfSxcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxuICAgICAgICBmcm9tQW5nbGUgPSAwLFxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuY29uY2F0KFV0aWxzLnJhbmdlKHNpemUsICgpID0+IHRoaXMuY2lyY2xlc1Bvb2wubmV3KHtcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxuICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb21Qb2xhcigxLCBmcm9tQW5nbGUsIHRvQW5nbGUpXG4gICAgICAgICAgICAgICAgLnNjYWxlKFV0aWxzLnJhbmRvbShtYWduaXR1ZGUgLyAyLCBtYWduaXR1ZGUpKVxuICAgICAgICB9KSkpO1xuICAgIH1cblxuICAgIGFsaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xuICAgICAgICByZW5kZXJlci5wb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xuICAgICAgICAgICAgcGFydGljbGUudXBkYXRlKGR0KTtcblxuICAgICAgICAgICAgbGV0IGFsaXZlID0gcGFydGljbGUucmFkaXVzID4gMC41O1xuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wucmVsZWFzZShwYXJ0aWNsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhbGl2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGb3VudGFpbiBleHRlbmRzIEV4cGxvc2lvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5maXJlKCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XG4gICAgICAgIHRoaXMuZW1pc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbiwgcm90YXRpb246IHRoaXMucm90YXRpb24gfSk7XG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24gPSAoKCkgPT4gZmFsc2UpLCBjcmVhdG9yID0gKCgpID0+IFtdKSkge1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHVwZGF0ZShjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi50aGlzLmNyZWF0b3IoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFsaXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcbiAgICB9XG5cbiAgICBhbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbiwgdHJhbnNmb3JtZWRSZW5kZXJpbmcpIHtcbiAgICAgICAgdGhpcy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcbiAgICAgICAgdHJhbnNmb3JtZWRSZW5kZXJpbmcoKTtcbiAgICAgICAgdGhpcy5wb3AoKTtcbiAgICB9XG5cbiAgICBwdXNoKHtcbiAgICAgICAgc2NhbGUgPSBuZXcgVmVjdG9yKDEsIDEpLFxuICAgICAgICByb3RhdGlvbiA9IDAsXG4gICAgICAgIHRyYW5zbGF0aW9uID0gbmV3IFZlY3RvcigpXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbi54LCB0cmFuc2xhdGlvbi55KTtcbiAgICB9XG5cbiAgICBwb3AoKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjaXJjbGUocG9zaXRpb24sIHJhZGl1cywgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbG9yO1xuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dCbHVyID0gNTA7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICByZWN0YW5nbGUocG9zaXRpb24sIHNpemUsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCAtIHNpemUud2lkdGggLyAyLCBwb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHBvbHlnb24ocG9pbnRzLCBzaXplID0gMSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocG9pbnRzWzBdLnggKiBzaXplLCBwb2ludHNbMF0ueSAqIHNpemUpO1xuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICogc2l6ZSwgcG9pbnQueSAqIHNpemUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xuICAgIH1cblxuICAgIGFkZCguLi5vYmplY3RzKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY29uY2F0KG9iamVjdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoY3R4KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmFsaXZlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvc2NlbmUuanMiLCJleHBvcnQgY29uc3QgY29sb3JzID0gWycjNmY2JywgJyNmNjYnLCAnIzY2ZicsICcjZmYzJywgJyMzZmYnLCAnI2YzZiddO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9jb25maWcuanMiLCJpbXBvcnQge1xuICAgIFZlY3RvciwgQ2FudmFzUmVuZGVyZXIsIFNjZW5lLFxuICAgIEVuZ2luZSwgU3ByaW5neVZlY3RvciwgUGFyYWxsYXhcbn0gZnJvbSAnZW5naW5lJztcblxuaW1wb3J0IHsgSU8gfSBmcm9tICcuL2lvJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IEFzdGVyb2lkRmllbGQgfSBmcm9tICcuL2FzdGVyb2lkLWZpZWxkJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuXG5sZXQgaW5pdCA9IChjYW52YXMpID0+IHtcblxuICAgIGxldCBbIHdpZHRoLCBoZWlnaHQgXSA9IFsgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0IF0gPSBbIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgXTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgIGN0eC5zY2FsZSgxLjA1LCAtMS4wNSk7XG5cblxuICAgIGxldCBpbyA9IG5ldyBJTyh3aWR0aCwgaGVpZ2h0KTtcbiAgICBsZXQgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICBsZXQgZW5naW5lID0gbmV3IEVuZ2luZShyZW5kZXJlciwgc2NlbmUpO1xuXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihpbywgd2lkdGgsIGhlaWdodCk7XG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoY29udHJvbGxlcik7XG4gICAgbGV0IGNhbWVyYSA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgNTApLCBlbGFzdGljaXR5OiAwLjA4LCBkYW1waW5nOiAwLjMsXG4gICAgICAgIHRhcmdldDogKCkgPT4gcGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQocGxheWVyLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSgzKSlcbiAgICB9KTtcblxuICAgIGxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xuICAgIGxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChjYW1lcmEsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaW8ub25Nb3VzZSgoKSA9PiBwbGF5ZXIuc3BlZWQgPSA1LCAoKSA9PiBwbGF5ZXIuc3BlZWQgPSAwKTtcbiAgICBlbnZpcm9ubWVudC5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiBwYXJhbGxheC5hZGRMYXllcih7IGRlcHRoOiBsYXllci5kZXB0aCwgb2JqZWN0czogbGF5ZXIub2JqZWN0cyB9KSk7XG4gICAgcGFyYWxsYXguYWRkTGF5ZXIoeyBvYmplY3RzOiBbcGxheWVyLCBuZXcgQXN0ZXJvaWRGaWVsZChwbGF5ZXIsIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKV0gfSk7XG4gICAgc2NlbmUuYWRkKHBhcmFsbGF4LCBjb250cm9sbGVyLCBjYW1lcmEpO1xuXG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIChmdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gICAgICAgIGVuZ2luZS5jbGVhcigpLnJlbmRlcigpLnVwZGF0ZSgpO1xuICAgICAgICBlbnZpcm9ubWVudC5vdXRPZkJvdW5kcygpO1xuXG4gICAgICAgIHBhcmFsbGF4Lnpvb20gPSA1MCAvIChwbGF5ZXIudmVsb2NpdHkubGVuZ3RoKCkgKiAzICsgMzApO1xuXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH0pKCk7XG5cbn07XG5cblxubGV0IGFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkLFxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuaW5pdChjYW52YXMpO1xuLy8gd2luZG93Lm9ucmVzaXplID0gKCkgPT4gaW5pdChjYW52YXMpO1xuLy8gY2FudmFzLm9uY2xpY2sgPSAoKSA9PiB7XG4vLyAgICAgKGNhbnZhcy5yZXF1ZXN0RnVsbFNjcmVlbiB8fFxuLy8gICAgICAgICBjYW52YXMud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4gfHxcbi8vICAgICAgICAgY2FudmFzLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8XG4vLyAgICAgICAgIGNhbnZhcy5tc1JlcXVlc3RGdWxsU2NyZWVuKS5jYWxsKGNhbnZhcyk7XG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2luZGV4LmpzIiwiaW1wb3J0IHsgU3Bhd25lciwgUG9seWdvbiwgRXhwbG9zaW9uLCBVdGlscywgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgQXN0ZXJvaWRGaWVsZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIHJhZGl1cykge1xuICAgICAgICBsZXQgbnVtQXN0ZXJvaWRzID0gMTU7XG4gICAgICAgIHRoaXMuYWxpdmUgPSAoKSA9PiB0cnVlO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzID0gVXRpbHMucmFuZ2UobnVtQXN0ZXJvaWRzLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IFV0aWxzLnJhbmRvbSgxMCwgNDApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCksXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpIH0sXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb20oLTAuNSwgMC41LCAtMC41LCAwLjUpLCBzaXplLFxuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcbiAgICB9XG5cbiAgICByYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKDAsIE1hdGguUEkgKiAyKSwgdGhpcy5yYWRpdXMgLyAyICsgMjApKTtcbiAgICB9XG5cbiAgICByYW5kb21Bc3Rlcm9pZFNoYXBlKCkge1xuICAgICAgICBsZXQgc2VnbWVudHMgPSA1O1xuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2Uoc2VnbWVudHMsIHNlZ21lbnQgPT5cbiAgICAgICAgICAgIFZlY3Rvci5wb2xhcigoc2VnbWVudCAvIHNlZ21lbnRzKSAqIE1hdGguUEkgKiAyLCBVdGlscy5yYW5kb20oMC41LCAxKSkpO1xuICAgIH1cblxuICAgIHJhbmRvbUFzdGVyb2lkQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgbGV0IHBsYXllclNwZWVkID0gdGhpcy5wbGF5ZXIudmVsb2NpdHkubGVuZ3RoKCk7XG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4ge1xuICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGN0eCk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnBsYXllci5wb3NpdGlvbi5kaXN0YW5jZShhc3Rlcm9pZC5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY29sb3IgIT0gYXN0ZXJvaWQuc3R5bGUuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYXN0ZXJvaWQucG9zaXRpb24sIHNpemU6IGFzdGVyb2lkLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVNpemU6IGFzdGVyb2lkLnNpemUgLyAxLjUsIHN0eWxlOiB7IGNvbG9yOiBhc3Rlcm9pZC5zdHlsZS5jb2xvciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlOiAoYXN0ZXJvaWQuc2l6ZSArIHBsYXllclNwZWVkICsgYXN0ZXJvaWQudmVsb2NpdHkubGVuZ3RoKCkpIC8gNVxuICAgICAgICAgICAgICAgICAgICB9KS5maXJlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplIHx8IGRpc3RhbmNlID4gdGhpcy5yYWRpdXMgLyAyICsgNTApICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9zaXRpb24gPSB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb2ludHMgPSB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKTtcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5zdHlsZS5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7ICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiBhc3Rlcm9pZC5yZW5kZXIocmVuZGVyZXIpKTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2FzdGVyb2lkLWZpZWxkLmpzIiwiaW1wb3J0IHsgVmVjdG9yLCBDaXJjbGUsIFNwcmluZ3lWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGlvLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyA2O1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMuY2VudGVyID0gbmV3IFZlY3Rvcigtd2lkdGggLyAyICsgdGhpcy5yYWRpdXMgKyA0NSwgLWhlaWdodCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1KTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyU3ByaW5nID0gbmV3IFNwcmluZ3lWZWN0b3Ioe1xuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxuICAgICAgICAgICAgZGFtcGluZzogMC41LFxuICAgICAgICAgICAgdGFyZ2V0OiAoKSA9PiBpby5tb3VzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAxLjUsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZy51cGRhdGUoKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY29udHJvbGxlclNwcmluZy5wb3NpdGlvbi5jb3B5KCkuc3VidHJhY3QodGhpcy5jZW50ZXIpLmN1dCh0aGlzLnJhZGl1cyAvIDIpO1xuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnBvc2l0aW9uID0gdGhpcy5jZW50ZXIuY29weSgpLmFkZCh0aGlzLmRpcmVjdGlvbik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2NvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBVdGlscywgQ2lyY2xlLCBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW1lcmEsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDQgfSksIGRlcHRoOiAwLjggfSxcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAyIH0pLCBkZXB0aDogMS4xIH0sXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDEgfSksIGRlcHRoOiAxLjIgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2UoY291bnQsICgpID0+IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgcG9zaXRpb246IFZlY3Rvci5yYW5kb20oLXRoaXMud2lkdGggLyAyLCB0aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyAyKSxcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG91dE9mQm91bmRzKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSgpLnNjYWxlKDEgLyBsYXllci5kZXB0aCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCArIHRoaXMud2lkdGggLyAyIC0gKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54IC0gdGhpcy53aWR0aCAvIDIgKyAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ID0gY2FtZXJhUG9zLnkgKyB0aGlzLmhlaWdodCAtIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi55IC0gY2FtZXJhUG9zLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ID0gY2FtZXJhUG9zLnkgKyAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2Vudmlyb25tZW50LmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcblxuXG5leHBvcnQgY2xhc3MgSU8ge1xuXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLm1vdXNlID0gbmV3IFZlY3RvcigwLCAzMDApO1xuXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjYWxsSGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5rZXlIYW5kbGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5U3RhdGVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kbGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIgJiYgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZShkb3duSGFuZGxlciwgdXBIYW5kbGVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXBIYW5kbGVyKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbktleShrZXksIGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnNba2V5XSA9IHsgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hhbmdlVG91Y2goeyBjaGFuZ2VkVG91Y2hlcyB9KSB7XG4gICAgICAgIHRoaXMubW91c2Uuc2V0KGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyB4LCB5IH0pID0+XG4gICAgICAgICAgICB0aGlzLm1vdXNlLnNldCh4IC0gdGhpcy53aWR0aCAvIDIsIC15ICsgdGhpcy5oZWlnaHQgLyAyKSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gZmFsc2UpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSBmYWxzZSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlL2lvLmpzIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IsIENvbXBvc2l0ZSwgRm91bnRhaW4sIFBvbHlnb24sXG4gICAgVXRpbHMsIFNwYXduZXIsIEV4cGxvc2lvblxufSBmcm9tICdlbmdpbmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB0aGlzLmZ1ZWwgPSBuZXcgRm91bnRhaW4oeyBwYXJ0aWNsZVNpemU6IDQsIHN0eWxlOiB7IG9wYWNpdHk6IDAuMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgLSAwLjMsIHRvQW5nbGU6IE1hdGguUEkgLyAyICogMyArIDAuMyB9KTtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFBvbHlnb24oeyBwb2ludHM6IFtuZXcgVmVjdG9yKC01LCAwKSwgbmV3IFZlY3RvcigwLCAtMyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNSwgMCksIG5ldyBWZWN0b3IoMCwgMTUpXSB9KTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xuXG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLmZ1ZWwgfSk7XG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLnNoaXAgfSk7XG5cbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAga2lsbCgpIHtcbiAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgc2l6ZTogMzAsIHBhcnRpY2xlU2l6ZTogMjAsXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcbiAgICAgICAgfSkuZmlyZSgpKTtcbiAgICAgICAgLy8gdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICByZW5kZXIocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XG4gICAgICAgIHN1cGVyLnJlbmRlcihyZW5kZXJlcik7XG4gICAgfVxuXG4gICAgdXBkYXRlKGN0eCkge1xuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpO1xuXG4gICAgICAgIHRoaXMuc2hpcC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuZnVlbC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5jb2xvciA9IHRoaXMuY29sb3I7XG5cbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XG4gICAgICAgIHRoaXMuc2hpcC5yb3RhdGlvbiA9IGZvcndhcmRBbmdsZSArIE1hdGguUEkgLyAyO1xuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnRvQW5nbGUgPSBmb3J3YXJkQW5nbGUgKyAxIC8gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5tYWduaXR1ZGUgPSB0aGlzLnNwZWVkIC8gMS41O1xuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnNpemUgPSB0aGlzLnNwZWVkIC8gMS41O1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uY29weSgpLnNjYWxlKCgxIC8gMzAwMCkgKiB0aGlzLnNwZWVkKSk7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpID4gMi41KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oMi41KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9wbGF5ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9