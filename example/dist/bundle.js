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

var _engine = __webpack_require__(7);

Object.keys(_engine).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _engine[key];
    }
  });
});

var _eventManager = __webpack_require__(8);

Object.keys(_eventManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _eventManager[key];
    }
  });
});

var _gameObject = __webpack_require__(4);

Object.keys(_gameObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gameObject[key];
    }
  });
});

var _instancePool = __webpack_require__(5);

Object.keys(_instancePool).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _instancePool[key];
    }
  });
});

var _parallax = __webpack_require__(9);

Object.keys(_parallax).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parallax[key];
    }
  });
});

var _primitives = __webpack_require__(10);

Object.keys(_primitives).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _primitives[key];
    }
  });
});

var _renderer = __webpack_require__(11);

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

var _scene = __webpack_require__(12);

Object.keys(_scene).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scene[key];
    }
  });
});

var _utils = __webpack_require__(2);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _vector = __webpack_require__(1);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Vector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = exports.Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: "random",
        value: function random() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return Math.random() * (max - min) + min;
        }
    }, {
        key: "randomArray",
        value: function randomArray(array) {
            return array[Math.floor(this.random(0, array.length))];
        }
    }, {
        key: "range",
        value: function range(size, handler) {
            return Array.from(Array(Math.round(size)).keys()).map(handler);
        }
    }, {
        key: "filterSet",
        value: function filterSet(set, predicate) {
            set.forEach(function (element) {
                if (!predicate(element)) {
                    set.delete(element);
                }
            });

            return set;
        }
    }]);

    return Utils;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = exports.colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(1);

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
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _engine = __webpack_require__(0);

var _io = __webpack_require__(16);

var _player = __webpack_require__(17);

var _asteroidField = __webpack_require__(13);

var _environment = __webpack_require__(15);

var _controller = __webpack_require__(14);

var animationFrame = undefined;

// window.onresize = init;
// function init() {

var _ref = function () {
    var canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    var ctx = canvas.getContext('2d');
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1.05, -1.05);

    return [ctx, innerWidth, innerHeight];
}(),
    _ref2 = _slicedToArray(_ref, 3),
    ctx = _ref2[0],
    width = _ref2[1],
    height = _ref2[2];

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

cancelAnimationFrame(animationFrame);
(function animation() {
    engine.clear().render().update();
    environment.outOfBounds();

    parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

    animationFrame = requestAnimationFrame(animation);
})();

// }
// init();

/***/ }),
/* 7 */
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
/* 8 */
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
        value: function register(name, condition, context) {
            this.container[name] = { condition: condition, context: context, handlers: [] };
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
                    context = _container$name.context,
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parallax = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _vector = __webpack_require__(1);

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
        key: 'target',
        value: function target(reference) {
            this.reference = reference;
            return this;
        }
    }, {
        key: 'addLayer',
        value: function addLayer(_ref) {
            var _ref$objects = _ref.objects,
                objects = _ref$objects === undefined ? [] : _ref$objects,
                _ref$depth = _ref.depth,
                depth = _ref$depth === undefined ? 1 : _ref$depth;

            this.layers.push({ objects: new Set(objects), depth: 1 / depth });
            return this;
        }
    }, {
        key: 'render',
        value: function render(renderer) {
            var _this = this;

            this.layers.forEach(function (layer) {
                renderer.push({
                    translation: _this.reference.copy().scale(-layer.depth),
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spawner = exports.Polygon = exports.Fountain = exports.Explosion = exports.SpringyVector = exports.Composite = exports.Rectangle = exports.Circle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _gameObject = __webpack_require__(4);

var _instancePool = __webpack_require__(5);

var _utils = __webpack_require__(2);

var _vector = __webpack_require__(1);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(1);

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
/* 12 */
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
                return object.render && object.render(renderer);
            });
        }
    }, {
        key: "update",
        value: function update(params) {
            this.container = this.container.filter(function (object) {
                if (object.update) {
                    object.update(params);
                    if (typeof object.alive !== "undefined") {
                        return object.alive();
                    }

                    return true;
                }
            });
        }
    }]);

    return Scene;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsteroidField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(0);

var _config = __webpack_require__(3);

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

var _engine = __webpack_require__(0);

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

var _engine = __webpack_require__(0);

var _config = __webpack_require__(3);

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

var _engine = __webpack_require__(0);

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

var _engine = __webpack_require__(0);

var _config = __webpack_require__(3);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIzYzgxYjgyY2MxYzg1NjczYWIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvdmVjdG9yLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3BhcmFsbGF4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXN0ZXJvaWQtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9pby5qcyIsIndlYnBhY2s6Ly8vLi9wbGF5ZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwieCIsInkiLCJNYXRoIiwic3FydCIsInZlY3RvciIsImxlbmd0aCIsImFuZ2xlIiwic2luIiwiY29zIiwidG1wWCIsImF0YW4yIiwic2l6ZSIsInNjYWxlVG8iLCJub3JtYWxpemUiLCJzY2FsZSIsImR4IiwiZHkiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwicmFuZG9tIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwicG9sYXIiLCJVdGlscyIsIm1pbiIsIm1heCIsImFycmF5IiwiZmxvb3IiLCJoYW5kbGVyIiwiQXJyYXkiLCJmcm9tIiwicm91bmQiLCJrZXlzIiwibWFwIiwic2V0IiwicHJlZGljYXRlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkZWxldGUiLCJjb2xvcnMiLCJHYW1lT2JqZWN0IiwiY29uZmlnIiwicG9zaXRpb24iLCJzdHlsZSIsImNvbG9yIiwidmVsb2NpdHlEYW1waW5nIiwidmVsb2NpdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uQ2VudGVyIiwiZGVhZCIsInJlbmRlcmVyIiwiY29udGV4dCIsInVwZGF0ZVZlbG9jaXR5IiwidXBkYXRlUG9zaXRpb24iLCJkdCIsImFkZCIsImNvcHkiLCJmdW5jIiwicHJvdG90eXBlIiwibmFtZSIsIkluc3RhbmNlUG9vbCIsInR5cGUiLCJyZWxlYXNlZCIsIlNldCIsImFsbG9jYXRlZCIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwidmFsdWVzIiwibmV4dCIsInZhbHVlIiwiaGFzIiwiYW5pbWF0aW9uRnJhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwiaW8iLCJzY2VuZSIsImVuZ2luZSIsImNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJjYW1lcmEiLCJlbGFzdGljaXR5IiwiZGFtcGluZyIsInRhcmdldCIsInBhcmFsbGF4IiwiZW52aXJvbm1lbnQiLCJvbk1vdXNlIiwic3BlZWQiLCJjb250YWluZXIiLCJhZGRMYXllciIsImRlcHRoIiwibGF5ZXIiLCJvYmplY3RzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb24iLCJjbGVhciIsInJlbmRlciIsInVwZGF0ZSIsIm91dE9mQm91bmRzIiwiem9vbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVuZ2luZSIsIkV2ZW50TWFuYWdlciIsImNvbmRpdGlvbiIsImhhbmRsZXJzIiwiZWxlbWVudHMiLCJleGVjdXRvciIsInB1c2giLCJmaWx0ZXIiLCJQYXJhbGxheCIsInJlZmVyZW5jZSIsImxheWVycyIsInRyYW5zbGF0aW9uIiwib2JqZWN0IiwicG9wIiwiZmlsdGVyU2V0IiwiYWxpdmUiLCJDaXJjbGUiLCJyYWRpdXMiLCJjaXJjbGUiLCJSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJDb21wb3NpdGUiLCJpdGVtcyIsIm9mZnNldCIsIlNwcmluZ3lWZWN0b3IiLCJkYW1waW5nRm9yY2UiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsIkV4cGxvc2lvbiIsInBhcnRpY2xlcyIsImNpcmNsZXNQb29sIiwiaW5pdCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5nZSIsIm5ldyIsInJhbmRvbVBvbGFyIiwicGFydGljbGUiLCJyZWxlYXNlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJwYXJhbXMiLCJBc3Rlcm9pZEZpZWxkIiwibnVtQXN0ZXJvaWRzIiwiYXN0ZXJvaWRzIiwicmFuZG9tQXN0ZXJvaWRQb3NpdGlvbiIsInJhbmRvbUFzdGVyb2lkQ29sb3IiLCJyYW5kb21Bc3Rlcm9pZFNoYXBlIiwiZXhwbG9zaW9ucyIsImV4cGxvc2lvblNwYXduZXIiLCJzcGxpY2UiLCJzZWdtZW50cyIsInNlZ21lbnQiLCJyYW5kb21BcnJheSIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImtpbGwiLCJDb250cm9sbGVyIiwiY2VudGVyIiwiZGlyZWN0aW9uIiwiY29udHJvbGxlclNwcmluZyIsIm1vdXNlIiwiYmlnQ2lyY2xlIiwic21hbGxDaXJjbGUiLCJjdXQiLCJFbnZpcm9ubWVudCIsImNpcmNsZUdlbmVyYXRvciIsImNvdW50IiwiY2FtZXJhUG9zIiwiSU8iLCJrZXlIYW5kbGVycyIsImtleVN0YXRlcyIsImJpbmRFdmVudHMiLCJyZXZlcnNlSGFuZGxlciIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImUiLCJjaGFuZ2VUb3VjaCIsIm1vdXNlRG93biIsIlBsYXllciIsImZ1ZWwiLCJzaGlwIiwiZm9yd2FyZEFuZ2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNB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QUFWLENBQWlCakMsSUFBakIsR0FBd0IsS0FBS3NGLEtBQUwsR0FBYSxHQUFyQzs7QUFFQSxpQkFBS2hELFFBQUwsQ0FBY1MsR0FBZCxDQUFrQixLQUFLOEIsVUFBTCxDQUFnQitHLFNBQWhCLENBQTBCNUksSUFBMUIsR0FBaUM3QyxLQUFqQyxDQUF3QyxJQUFJLElBQUwsR0FBYSxLQUFLbUYsS0FBekQsQ0FBbEI7QUFDQSxnQkFBSSxLQUFLaEQsUUFBTCxDQUFjNUMsTUFBZCxLQUF5QixHQUE3QixFQUFrQztBQUM5QixxQkFBSzRDLFFBQUwsQ0FBY3JDLE9BQWQsQ0FBc0IsR0FBdEI7QUFDSDtBQUNKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJiM2M4MWI4MmNjMWM4NTY3M2FiIiwiZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50LW1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZS1wb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjZW5lJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmVjdG9yJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvaW5kZXguanMiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XHJcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICogY29zIC0gdGhpcy55ICogc2luO1xyXG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXQoc2l6ZSkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggPiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHNpemUpIHtcclxuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcclxuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pblgsIG1heFgpLCBVdGlscy5yYW5kb20obWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3ZlY3Rvci5qcyIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW4gPSAwLCBtYXggPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tQXJyYXkgKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5nZShzaXplLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoTWF0aC5yb3VuZChzaXplKSkua2V5cygpKS5tYXAoaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbHRlclNldChzZXQsIHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHNldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZShlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS91dGlscy5qcyIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbJyM2ZjYnLCAnI2Y2NicsICcjNjZmJywgJyNmZjMnLCAnIzNmZicsICcjZjNmJ107XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoe1xyXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIHN0eWxlID0geyBjb2xvcjogJyNmMDAnIH0sXHJcbiAgICAgICAgdmVsb2NpdHlEYW1waW5nID0gMSxcclxuICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICByb3RhdGlvbiA9IDAsXHJcbiAgICAgICAgcm90YXRpb25DZW50ZXIgPSBwb3NpdGlvbixcclxuICAgICAgICBzaXplID0gMVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5RGFtcGluZyA9IHZlbG9jaXR5RGFtcGluZztcclxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25DZW50ZXIgPSByb3RhdGlvbkNlbnRlcjtcclxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZGVhZDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHsgfVxyXG5cclxuICAgIHVwZGF0ZShjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWZWxvY2l0eShjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvc2l0aW9uKHsgZHQgPSAxIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKGR0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoeyBkdCA9IDEgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5zY2FsZSh0aGlzLnZlbG9jaXR5RGFtcGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGV4dGVuZChmdW5jKSB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGVbZnVuYy5uYW1lXSA9IGZ1bmM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL2dhbWUtb2JqZWN0LmpzIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlUG9vbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmFsbG9jYXRlZCA9IG5ldyBTZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcoLi4uY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWxlYXNlZC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmFsbG9jYXRlZC5hZGQoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFsbG9jYXRlZC5oYXMoaW5zdGFuY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGVkLmRlbGV0ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJpbXBvcnQge1xyXG4gICAgVXRpbHMsIFZlY3RvciwgQ2FudmFzUmVuZGVyZXIsXHJcbiAgICBTY2VuZSwgRW5naW5lLCBTcHJpbmd5VmVjdG9yLFxyXG4gICAgUGFyYWxsYXgsIENpcmNsZVxyXG59IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5pbXBvcnQgeyBJTyB9IGZyb20gJy4vaW8nO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IEFzdGVyb2lkRmllbGQgfSBmcm9tICcuL2FzdGVyb2lkLWZpZWxkJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5cclxubGV0IGFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkO1xyXG5cclxuLy8gd2luZG93Lm9ucmVzaXplID0gaW5pdDtcclxuLy8gZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbmxldCBbIGN0eCwgd2lkdGgsIGhlaWdodCBdID0gKCgpID0+IHtcclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xyXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShpbm5lcldpZHRoIC8gMiwgaW5uZXJIZWlnaHQgLyAyKTtcclxuICAgIGN0eC5zY2FsZSgxLjA1LCAtMS4wNSk7XHJcblxyXG4gICAgcmV0dXJuIFsgY3R4LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCBdO1xyXG59KSgpO1xyXG5cclxuXHJcbmxldCBpbyA9IG5ldyBJTyh3aWR0aCwgaGVpZ2h0KTtcclxubGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XHJcbmxldCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG5sZXQgZW5naW5lID0gbmV3IEVuZ2luZShyZW5kZXJlciwgc2NlbmUpO1xyXG5cclxubGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihpbywgd2lkdGgsIGhlaWdodCk7XHJcbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRyb2xsZXIpO1xyXG5sZXQgY2FtZXJhID0gbmV3IFNwcmluZ3lWZWN0b3Ioe1xyXG4gICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgNTApLCBlbGFzdGljaXR5OiAwLjA4LCBkYW1waW5nOiAwLjMsXHJcbiAgICB0YXJnZXQ6ICgpID0+IHBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKHBsYXllci52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoMykpXHJcbn0pO1xyXG5cclxubGV0IHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KGNhbWVyYS5wb3NpdGlvbik7XHJcbmxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChjYW1lcmEsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHJcbmlvLm9uTW91c2UoKCkgPT4gcGxheWVyLnNwZWVkID0gNSwgKCkgPT4gcGxheWVyLnNwZWVkID0gMCk7XHJcbmVudmlyb25tZW50LmNvbnRhaW5lci5mb3JFYWNoKGxheWVyID0+IHBhcmFsbGF4LmFkZExheWVyKHsgZGVwdGg6IGxheWVyLmRlcHRoLCBvYmplY3RzOiBsYXllci5vYmplY3RzIH0pKTtcclxucGFyYWxsYXguYWRkTGF5ZXIoeyBvYmplY3RzOiBbcGxheWVyLCBuZXcgQXN0ZXJvaWRGaWVsZChwbGF5ZXIsIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKV0gfSk7XHJcbnNjZW5lLmFkZChwYXJhbGxheCwgY29udHJvbGxlciwgY2FtZXJhKTtcclxuXHJcblxyXG5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XHJcbihmdW5jdGlvbiBhbmltYXRpb24oKSB7XHJcbiAgICBlbmdpbmUuY2xlYXIoKS5yZW5kZXIoKS51cGRhdGUoKTtcclxuICAgIGVudmlyb25tZW50Lm91dE9mQm91bmRzKCk7XHJcblxyXG4gICAgcGFyYWxsYXguem9vbSA9IDUwIC8gKHBsYXllci52ZWxvY2l0eS5sZW5ndGgoKSAqIDMgKyAzMCk7XHJcblxyXG4gICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcclxufSkoKTtcclxuXHJcbi8vIH1cclxuLy8gaW5pdCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZW5naW5lLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihuYW1lLCBjb25kaXRpb24sIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXSA9IHsgY29uZGl0aW9uLCBjb250ZXh0LCBoYW5kbGVyczogW10gfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0uaGFuZGxlcnMucHVzaCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJFdmVudHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBsZXQgeyBjb25kaXRpb24sIGNvbnRleHQsIGhhbmRsZXJzIH0gPSB0aGlzLmNvbnRhaW5lcltuYW1lXTtcclxuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoeyBleGVjdXRvciwgZWxlbWVudHMgfSkgPT5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGNvbmRpdGlvbihlbGVtZW50KSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGV4ZWN1dG9yKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFyYWxsYXgge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy56b29tID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQocmVmZXJlbmNlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGF5ZXIoeyBvYmplY3RzID0gW10sIGRlcHRoID0gMSB9KSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAxIC8gZGVwdGggfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZSgtbGF5ZXIuZGVwdGgpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy56b29tLCB0aGlzLnpvb20pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gVXRpbHMuZmlsdGVyU2V0KGxheWVyLm9iamVjdHMsIG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XHJcbmltcG9ydCB7IEluc3RhbmNlUG9vbCB9IGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xyXG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcclxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxyXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XHJcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcclxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcclxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHtcclxuICAgICAgICBzaXplID0gMixcclxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXHJcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcclxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XHJcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcclxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KVxyXG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5yYWRpdXMgLz0gVXRpbHMucmFuZG9tKDEuMDUsIDEuMSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZShkdClcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGl2ZSA9IHBhcnRpY2xlLnJhZGl1cyA+IDAuNTtcclxuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZmlyZSgpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24sIHRyYW5zZm9ybWVkUmVuZGVyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcclxuICAgICAgICB0cmFuc2Zvcm1lZFJlbmRlcmluZygpO1xyXG4gICAgICAgIHRoaXMucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCh7XHJcbiAgICAgICAgc2NhbGUgPSBuZXcgVmVjdG9yKDEsIDEpLFxyXG4gICAgICAgIHJvdGF0aW9uID0gMCxcclxuICAgICAgICB0cmFuc2xhdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRyYW5zbGF0aW9uLngsIHRyYW5zbGF0aW9uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlKHBvc2l0aW9uLCByYWRpdXMsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSA1MDtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggLSBzaXplLndpZHRoIC8gMiwgcG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwb2x5Z29uKHBvaW50cywgc2l6ZSA9IDEsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCAqIHNpemUsIHBvaW50c1swXS55ICogc2l6ZSk7XHJcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICogc2l6ZSwgcG9pbnQueSAqIHNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5vYmplY3RzKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlciAmJiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuZmlsdGVyKG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QudXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QudXBkYXRlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5hbGl2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9zY2VuZS5qcyIsImltcG9ydCB7IFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgVXRpbHMsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXN0ZXJvaWRGaWVsZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcclxuICAgICAgICBsZXQgbnVtQXN0ZXJvaWRzID0gMTU7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb20oLTAuNSwgMC41LCAtMC41LCAwLjUpLCBzaXplLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSA1O1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShzZWdtZW50cywgc2VnbWVudCA9PlxyXG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcclxuICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhc3Rlcm9pZC5wb3NpdGlvbiwgc2l6ZTogYXN0ZXJvaWQuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTaXplOiBhc3Rlcm9pZC5zaXplIC8gMS41LCBzdHlsZTogeyBjb2xvcjogYXN0ZXJvaWQuc3R5bGUuY29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlOiAoYXN0ZXJvaWQuc2l6ZSArIHBsYXllclNwZWVkICsgYXN0ZXJvaWQudmVsb2NpdHkubGVuZ3RoKCkpIC8gNVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmZpcmUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgfHwgZGlzdGFuY2UgPiB0aGlzLnJhZGl1cyAvIDIgKyA1MCkgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb2ludHMgPSB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnN0eWxlLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiBhc3Rlcm9pZC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXN0ZXJvaWQtZmllbGQuanMiLCJpbXBvcnQgeyBWZWN0b3IsIENpcmNsZSwgU3ByaW5neVZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlvLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDY7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnXHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgVmVjdG9yKC13aWR0aCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1LCAtaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzICsgNDUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcgPSBuZXcgU3ByaW5neVZlY3Rvcih7XHJcbiAgICAgICAgICAgIGVsYXN0aWNpdHk6IDAuMSxcclxuICAgICAgICAgICAgZGFtcGluZzogMC41LFxyXG4gICAgICAgICAgICB0YXJnZXQ6ICgpID0+IGlvLm1vdXNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlID0gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAxLjUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmNlbnRlcixcclxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5jb250cm9sbGVyU3ByaW5nLnBvc2l0aW9uLmNvcHkoKS5zdWJ0cmFjdCh0aGlzLmNlbnRlcikuY3V0KHRoaXMucmFkaXVzIC8gMik7XHJcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5wb3NpdGlvbiA9IHRoaXMuY2VudGVyLmNvcHkoKS5hZGQodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0T2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbnZpcm9ubWVudC5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElPIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyICYmIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlKGRvd25IYW5kbGVyLCB1cEhhbmRsZXIpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkb3duSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXkoa2V5LCBoYW5kbGVyLCByZXZlcnNlSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnNba2V5XSA9IHsgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIgfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUb3VjaCh7IGNoYW5nZWRUb3VjaGVzIH0pIHtcclxuICAgICAgICB0aGlzLm1vdXNlLnNldChjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKHsgeCwgeSB9KSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnNldCh4IC0gdGhpcy53aWR0aCAvIDIsIC15ICsgdGhpcy5oZWlnaHQgLyAyKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gZmFsc2UpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2lvLmpzIiwiaW1wb3J0IHtcclxuICAgIFZlY3RvciwgQ29tcG9zaXRlLCBGb3VudGFpbiwgUG9seWdvbixcclxuICAgIFV0aWxzLCBTcGF3bmVyLCBFeHBsb3Npb25cclxufSBmcm9tICdlbmdpbmUnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmZ1ZWwgPSBuZXcgRm91bnRhaW4oeyBwYXJ0aWNsZVNpemU6IDQsIHN0eWxlOiB7IG9wYWNpdHk6IDAuMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQW5nbGU6IE1hdGguUEkgLyAyICogMyAtIDAuMywgdG9BbmdsZTogTWF0aC5QSSAvIDIgKiAzICsgMC4zIH0pO1xyXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBQb2x5Z29uKHsgcG9pbnRzOiBbbmV3IFZlY3RvcigtNSwgMCksIG5ldyBWZWN0b3IoMCwgLTMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNSwgMCksIG5ldyBWZWN0b3IoMCwgMTUpXSB9KTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuZnVlbCB9KTtcclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5zaGlwIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcclxuICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuZnVlbC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuXHJcbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5zaGlwLnJvdGF0aW9uID0gZm9yd2FyZEFuZ2xlICsgTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5mcm9tQW5nbGUgPSBmb3J3YXJkQW5nbGUgLSAxIC8gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnRvQW5nbGUgPSBmb3J3YXJkQW5nbGUgKyAxIC8gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLm1hZ25pdHVkZSA9IHRoaXMuc3BlZWQgLyAxLjU7XHJcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5zaXplID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQodGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5jb3B5KCkuc2NhbGUoKDEgLyAzMDAwKSAqIHRoaXMuc3BlZWQpKTtcclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS5sZW5ndGgoKSA+IDIuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oMi41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=