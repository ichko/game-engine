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


var _engine = __webpack_require__(0);

var _io = __webpack_require__(16);

var _player = __webpack_require__(17);

var _asteroidField = __webpack_require__(13);

var _environment = __webpack_require__(15);

var _controller = __webpack_require__(14);

var init = function init(canvas) {
    var width = innerWidth,
        height = innerHeight;

    canvas.width = width;
    canvas.height = height;
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

    cancelAnimationFrame(animationFrame);
    (function animation() {
        engine.clear().render().update();
        environment.outOfBounds();

        parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

        animationFrame = requestAnimationFrame(animation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDhkN2M0NDJmNTAyOWVjNzMxZjgiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvdmVjdG9yLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3BhcmFsbGF4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXN0ZXJvaWQtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9pby5qcyIsIndlYnBhY2s6Ly8vLi9wbGF5ZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwieCIsInkiLCJNYXRoIiwic3FydCIsInZlY3RvciIsImxlbmd0aCIsImFuZ2xlIiwic2luIiwiY29zIiwidG1wWCIsImF0YW4yIiwic2l6ZSIsInNjYWxlVG8iLCJub3JtYWxpemUiLCJzY2FsZSIsImR4IiwiZHkiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwicmFuZG9tIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwicG9sYXIiLCJVdGlscyIsIm1pbiIsIm1heCIsImFycmF5IiwiZmxvb3IiLCJoYW5kbGVyIiwiQXJyYXkiLCJmcm9tIiwicm91bmQiLCJrZXlzIiwibWFwIiwic2V0IiwicHJlZGljYXRlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkZWxldGUiLCJjb2xvcnMiLCJHYW1lT2JqZWN0IiwiY29uZmlnIiwicG9zaXRpb24iLCJzdHlsZSIsImNvbG9yIiwidmVsb2NpdHlEYW1waW5nIiwidmVsb2NpdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uQ2VudGVyIiwiZGVhZCIsInJlbmRlcmVyIiwiY29udGV4dCIsInVwZGF0ZVZlbG9jaXR5IiwidXBkYXRlUG9zaXRpb24iLCJkdCIsImFkZCIsImNvcHkiLCJmdW5jIiwicHJvdG90eXBlIiwibmFtZSIsIkluc3RhbmNlUG9vbCIsInR5cGUiLCJyZWxlYXNlZCIsIlNldCIsImFsbG9jYXRlZCIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwidmFsdWVzIiwibmV4dCIsInZhbHVlIiwiaGFzIiwiaW5pdCIsImNhbnZhcyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsInRyYW5zbGF0ZSIsImlvIiwic2NlbmUiLCJlbmdpbmUiLCJjb250cm9sbGVyIiwicGxheWVyIiwiY2FtZXJhIiwiZWxhc3RpY2l0eSIsImRhbXBpbmciLCJ0YXJnZXQiLCJwYXJhbGxheCIsImVudmlyb25tZW50Iiwib25Nb3VzZSIsInNwZWVkIiwiY29udGFpbmVyIiwiYWRkTGF5ZXIiLCJkZXB0aCIsImxheWVyIiwib2JqZWN0cyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb24iLCJjbGVhciIsInJlbmRlciIsInVwZGF0ZSIsIm91dE9mQm91bmRzIiwiem9vbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJFbmdpbmUiLCJFdmVudE1hbmFnZXIiLCJjb25kaXRpb24iLCJoYW5kbGVycyIsImVsZW1lbnRzIiwiZXhlY3V0b3IiLCJwdXNoIiwiZmlsdGVyIiwiUGFyYWxsYXgiLCJyZWZlcmVuY2UiLCJsYXllcnMiLCJ0cmFuc2xhdGlvbiIsIm9iamVjdCIsInBvcCIsImZpbHRlclNldCIsImFsaXZlIiwiQ2lyY2xlIiwicmFkaXVzIiwiY2lyY2xlIiwiUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwiQ29tcG9zaXRlIiwiaXRlbXMiLCJvZmZzZXQiLCJTcHJpbmd5VmVjdG9yIiwiZGFtcGluZ0ZvcmNlIiwiYWNjZWxlcmF0aW9uIiwic3VidHJhY3QiLCJFeHBsb3Npb24iLCJwYXJ0aWNsZXMiLCJjaXJjbGVzUG9vbCIsIm1hZ25pdHVkZSIsInBhcnRpY2xlU2l6ZSIsImZyb21BbmdsZSIsInRvQW5nbGUiLCJjb25jYXQiLCJyYW5nZSIsIm5ldyIsInJhbmRvbVBvbGFyIiwicGFydGljbGUiLCJyZWxlYXNlIiwiRm91bnRhaW4iLCJmaXJlIiwiUG9seWdvbiIsInBvaW50cyIsImVtaXNzaW9ucyIsInBvbHlnb24iLCJTcGF3bmVyIiwiY3JlYXRvciIsIml0ZW0iLCJDYW52YXNSZW5kZXJlciIsInRyYW5zZm9ybWF0aW9uIiwidHJhbnNmb3JtZWRSZW5kZXJpbmciLCJzYXZlIiwicm90YXRlIiwicmVzdG9yZSIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50IiwiU2NlbmUiLCJwYXJhbXMiLCJBc3Rlcm9pZEZpZWxkIiwibnVtQXN0ZXJvaWRzIiwiYXN0ZXJvaWRzIiwicmFuZG9tQXN0ZXJvaWRQb3NpdGlvbiIsInJhbmRvbUFzdGVyb2lkQ29sb3IiLCJyYW5kb21Bc3Rlcm9pZFNoYXBlIiwiZXhwbG9zaW9ucyIsImV4cGxvc2lvblNwYXduZXIiLCJzcGxpY2UiLCJzZWdtZW50cyIsInNlZ21lbnQiLCJyYW5kb21BcnJheSIsInBsYXllclNwZWVkIiwiYXN0ZXJvaWQiLCJkaXN0YW5jZSIsImtpbGwiLCJDb250cm9sbGVyIiwiY2VudGVyIiwiZGlyZWN0aW9uIiwiY29udHJvbGxlclNwcmluZyIsIm1vdXNlIiwiYmlnQ2lyY2xlIiwic21hbGxDaXJjbGUiLCJjdXQiLCJFbnZpcm9ubWVudCIsImNpcmNsZUdlbmVyYXRvciIsImNvdW50IiwiY2FtZXJhUG9zIiwiSU8iLCJrZXlIYW5kbGVycyIsImtleVN0YXRlcyIsImJpbmRFdmVudHMiLCJyZXZlcnNlSGFuZGxlciIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImUiLCJjaGFuZ2VUb3VjaCIsIm1vdXNlRG93biIsIlBsYXllciIsImZ1ZWwiLCJzaGlwIiwiZm9yd2FyZEFuZ2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNB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QUtoRCxLQUFMLEdBQWEsR0FBMUM7QUFDQSxpQkFBS21JLElBQUwsQ0FBVXRMLE1BQVYsQ0FBaUJqQyxJQUFqQixHQUF3QixLQUFLb0YsS0FBTCxHQUFhLEdBQXJDOztBQUVBLGlCQUFLOUMsUUFBTCxDQUFjUyxHQUFkLENBQWtCLEtBQUs0QixVQUFMLENBQWdCaUgsU0FBaEIsQ0FBMEI1SSxJQUExQixHQUFpQzdDLEtBQWpDLENBQXdDLElBQUksSUFBTCxHQUFhLEtBQUtpRixLQUF6RCxDQUFsQjtBQUNBLGdCQUFJLEtBQUs5QyxRQUFMLENBQWM1QyxNQUFkLEtBQXlCLEdBQTdCLEVBQWtDO0FBQzlCLHFCQUFLNEMsUUFBTCxDQUFjckMsT0FBZCxDQUFzQixHQUF0QjtBQUNIO0FBQ0oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDhkN2M0NDJmNTAyOWVjNzMxZjgiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmltaXRpdmVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9pbmRleC5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcclxuICAgICAgICBsZXQgdG1wWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XHJcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1dChzaXplKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLnNjYWxlKHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnRyYWN0KHZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWN0b3IueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlKHZlY3Rvcikge1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGUoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMueCAqPSBzaXplO1xyXG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tKG1pblgsIG1heFgsIG1pblksIG1heFkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihVdGlscy5yYW5kb20obWluWCwgbWF4WCksIFV0aWxzLnJhbmRvbShtaW5ZLCBtYXhZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBvbGFyKGFuZ2xlID0gMCwgbGVuZ3RoID0gMSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20obWluQW5nbGUsIG1heEFuZ2xlKSwgbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvdmVjdG9yLmpzIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tKG1pbiA9IDAsIG1heCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21BcnJheSAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpKV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmdlKHNpemUsIGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsdGVyU2V0KHNldCwgcHJlZGljYXRlKSB7XHJcbiAgICAgICAgc2V0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3V0aWxzLmpzIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFsnIzZmNicsICcjZjY2JywgJyM2NmYnLCAnI2ZmMycsICcjM2ZmJywgJyNmM2YnXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnLmpzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICB0aGlzLnNldChjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh7XHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiAnI2YwMCcgfSxcclxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxyXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIHJvdGF0aW9uID0gMCxcclxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxyXG4gICAgICAgIHNpemUgPSAxXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlEYW1waW5nID0gdmVsb2NpdHlEYW1waW5nO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XHJcblxyXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoZHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZWxvY2l0eSh7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlbGVhc2VkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyguLi5jb25maWcpIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnNldCguLi5jb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkLmFkZChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb2NhdGVkLmhhcyhpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyIsImltcG9ydCB7XHJcbiAgICBVdGlscywgVmVjdG9yLCBDYW52YXNSZW5kZXJlcixcclxuICAgIFNjZW5lLCBFbmdpbmUsIFNwcmluZ3lWZWN0b3IsXHJcbiAgICBQYXJhbGxheCwgQ2lyY2xlXHJcbn0gZnJvbSAnZW5naW5lJztcclxuXHJcbmltcG9ydCB7IElPIH0gZnJvbSAnLi9pbyc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQXN0ZXJvaWRGaWVsZCB9IGZyb20gJy4vYXN0ZXJvaWQtZmllbGQnO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcblxyXG5sZXQgaW5pdCA9IChjYW52YXMpID0+IHtcclxuXHJcbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IF07XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjdHgudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XHJcbiAgICBjdHguc2NhbGUoMS4wNSwgLTEuMDUpO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IGlvID0gbmV3IElPKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIGxldCBlbmdpbmUgPSBuZXcgRW5naW5lKHJlbmRlcmVyLCBzY2VuZSk7XHJcblxyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihpbywgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcihjb250cm9sbGVyKTtcclxuICAgIGxldCBjYW1lcmEgPSBuZXcgU3ByaW5neVZlY3Rvcih7XHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgNTApLCBlbGFzdGljaXR5OiAwLjA4LCBkYW1waW5nOiAwLjMsXHJcbiAgICAgICAgdGFyZ2V0OiAoKSA9PiBwbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChwbGF5ZXIudmVsb2NpdHkuY29weSgpLnNjYWxlKDMpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KGNhbWVyYS5wb3NpdGlvbik7XHJcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblxyXG4gICAgaW8ub25Nb3VzZSgoKSA9PiBwbGF5ZXIuc3BlZWQgPSA1LCAoKSA9PiBwbGF5ZXIuc3BlZWQgPSAwKTtcclxuICAgIGVudmlyb25tZW50LmNvbnRhaW5lci5mb3JFYWNoKGxheWVyID0+IHBhcmFsbGF4LmFkZExheWVyKHsgZGVwdGg6IGxheWVyLmRlcHRoLCBvYmplY3RzOiBsYXllci5vYmplY3RzIH0pKTtcclxuICAgIHBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xyXG4gICAgc2NlbmUuYWRkKHBhcmFsbGF4LCBjb250cm9sbGVyLCBjYW1lcmEpO1xyXG5cclxuXHJcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XHJcbiAgICAoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGVuZ2luZS5jbGVhcigpLnJlbmRlcigpLnVwZGF0ZSgpO1xyXG4gICAgICAgIGVudmlyb25tZW50Lm91dE9mQm91bmRzKCk7XHJcblxyXG4gICAgICAgIHBhcmFsbGF4Lnpvb20gPSA1MCAvIChwbGF5ZXIudmVsb2NpdHkubGVuZ3RoKCkgKiAzICsgMzApO1xyXG5cclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gICAgfSkoKTtcclxuXHJcbn1cclxuXHJcblxyXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQsXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcblxyXG5pbml0KGNhbnZhcyk7XHJcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IGluaXQoY2FudmFzKTtcclxuLy8gY2FudmFzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbi8vICAgICAoY2FudmFzLnJlcXVlc3RGdWxsU2NyZWVuIHx8XHJcbi8vICAgICAgICAgY2FudmFzLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XHJcbi8vICAgICAgICAgY2FudmFzLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8XHJcbi8vICAgICAgICAgY2FudmFzLm1zUmVxdWVzdEZ1bGxTY3JlZW4pLmNhbGwoY2FudmFzKTtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZW5naW5lLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihuYW1lLCBjb25kaXRpb24sIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXSA9IHsgY29uZGl0aW9uLCBjb250ZXh0LCBoYW5kbGVyczogW10gfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbihlbGVtZW50cywgbmFtZSwgZXhlY3V0b3IpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0uaGFuZGxlcnMucHVzaCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJFdmVudHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBsZXQgeyBjb25kaXRpb24sIGNvbnRleHQsIGhhbmRsZXJzIH0gPSB0aGlzLmNvbnRhaW5lcltuYW1lXTtcclxuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoeyBleGVjdXRvciwgZWxlbWVudHMgfSkgPT5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGNvbmRpdGlvbihlbGVtZW50KSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGV4ZWN1dG9yKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFyYWxsYXgge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSA9IG5ldyBWZWN0b3IoKSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy56b29tID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQocmVmZXJlbmNlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGF5ZXIoeyBvYmplY3RzID0gW10sIGRlcHRoID0gMSB9KSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7IG9iamVjdHM6IG5ldyBTZXQob2JqZWN0cyksIGRlcHRoOiAxIC8gZGVwdGggfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucmVmZXJlbmNlLmNvcHkoKS5zY2FsZSgtbGF5ZXIuZGVwdGgpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy56b29tLCB0aGlzLnpvb20pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXllci5vYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gVXRpbHMuZmlsdGVyU2V0KGxheWVyLm9iamVjdHMsIG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5hbGl2ZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcGFyYWxsYXguanMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XHJcbmltcG9ydCB7IEluc3RhbmNlUG9vbCB9IGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xyXG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcclxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxyXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XHJcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcclxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcclxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHtcclxuICAgICAgICBzaXplID0gMixcclxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXHJcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcclxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XHJcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcclxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KVxyXG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5yYWRpdXMgLz0gVXRpbHMucmFuZG9tKDEuMDUsIDEuMSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZShkdClcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGl2ZSA9IHBhcnRpY2xlLnJhZGl1cyA+IDAuNTtcclxuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZmlyZSgpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24sIHRyYW5zZm9ybWVkUmVuZGVyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcclxuICAgICAgICB0cmFuc2Zvcm1lZFJlbmRlcmluZygpO1xyXG4gICAgICAgIHRoaXMucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCh7XHJcbiAgICAgICAgc2NhbGUgPSBuZXcgVmVjdG9yKDEsIDEpLFxyXG4gICAgICAgIHJvdGF0aW9uID0gMCxcclxuICAgICAgICB0cmFuc2xhdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRyYW5zbGF0aW9uLngsIHRyYW5zbGF0aW9uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlKHBvc2l0aW9uLCByYWRpdXMsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSA1MDtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplLCB7IGNvbG9yLCBvcGFjaXR5ID0gMSB9KSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggLSBzaXplLndpZHRoIC8gMiwgcG9zaXRpb24ueSAtIHNpemUuaGVpZ2h0IC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwb2x5Z29uKHBvaW50cywgc2l6ZSA9IDEsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCAqIHNpemUsIHBvaW50c1swXS55ICogc2l6ZSk7XHJcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICogc2l6ZSwgcG9pbnQueSAqIHNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5vYmplY3RzKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlciAmJiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuZmlsdGVyKG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QudXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QudXBkYXRlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5hbGl2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9zY2VuZS5qcyIsImltcG9ydCB7IFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgVXRpbHMsIFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXN0ZXJvaWRGaWVsZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcclxuICAgICAgICBsZXQgbnVtQXN0ZXJvaWRzID0gMTU7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb20oLTAuNSwgMC41LCAtMC41LCAwLjUpLCBzaXplLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSA1O1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShzZWdtZW50cywgc2VnbWVudCA9PlxyXG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcclxuICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhc3Rlcm9pZC5wb3NpdGlvbiwgc2l6ZTogYXN0ZXJvaWQuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTaXplOiBhc3Rlcm9pZC5zaXplIC8gMS41LCBzdHlsZTogeyBjb2xvcjogYXN0ZXJvaWQuc3R5bGUuY29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlOiAoYXN0ZXJvaWQuc2l6ZSArIHBsYXllclNwZWVkICsgYXN0ZXJvaWQudmVsb2NpdHkubGVuZ3RoKCkpIC8gNVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmZpcmUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgfHwgZGlzdGFuY2UgPiB0aGlzLnJhZGl1cyAvIDIgKyA1MCkgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb2ludHMgPSB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnN0eWxlLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiBhc3Rlcm9pZC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXN0ZXJvaWQtZmllbGQuanMiLCJpbXBvcnQgeyBWZWN0b3IsIENpcmNsZSwgU3ByaW5neVZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlvLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDY7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnXHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgVmVjdG9yKC13aWR0aCAvIDIgKyB0aGlzLnJhZGl1cyArIDQ1LCAtaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzICsgNDUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcgPSBuZXcgU3ByaW5neVZlY3Rvcih7XHJcbiAgICAgICAgICAgIGVsYXN0aWNpdHk6IDAuMSxcclxuICAgICAgICAgICAgZGFtcGluZzogMC41LFxyXG4gICAgICAgICAgICB0YXJnZXQ6ICgpID0+IGlvLm1vdXNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlID0gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAxLjUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmNlbnRlcixcclxuICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IDAuNSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYmlnQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJTcHJpbmcudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5jb250cm9sbGVyU3ByaW5nLnBvc2l0aW9uLmNvcHkoKS5zdWJ0cmFjdCh0aGlzLmNlbnRlcikuY3V0KHRoaXMucmFkaXVzIC8gMik7XHJcbiAgICAgICAgdGhpcy5zbWFsbENpcmNsZS5wb3NpdGlvbiA9IHRoaXMuY2VudGVyLmNvcHkoKS5hZGQodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0T2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbnZpcm9ubWVudC5qcyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElPIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyICYmIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlKGRvd25IYW5kbGVyLCB1cEhhbmRsZXIpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkb3duSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXkoa2V5LCBoYW5kbGVyLCByZXZlcnNlSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnNba2V5XSA9IHsgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIgfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUb3VjaCh7IGNoYW5nZWRUb3VjaGVzIH0pIHtcclxuICAgICAgICB0aGlzLm1vdXNlLnNldChjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKHsgeCwgeSB9KSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnNldCh4IC0gdGhpcy53aWR0aCAvIDIsIC15ICsgdGhpcy5oZWlnaHQgLyAyKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gZmFsc2UpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2lvLmpzIiwiaW1wb3J0IHtcclxuICAgIFZlY3RvciwgQ29tcG9zaXRlLCBGb3VudGFpbiwgUG9seWdvbixcclxuICAgIFV0aWxzLCBTcGF3bmVyLCBFeHBsb3Npb25cclxufSBmcm9tICdlbmdpbmUnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmZ1ZWwgPSBuZXcgRm91bnRhaW4oeyBwYXJ0aWNsZVNpemU6IDQsIHN0eWxlOiB7IG9wYWNpdHk6IDAuMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQW5nbGU6IE1hdGguUEkgLyAyICogMyAtIDAuMywgdG9BbmdsZTogTWF0aC5QSSAvIDIgKiAzICsgMC4zIH0pO1xyXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBQb2x5Z29uKHsgcG9pbnRzOiBbbmV3IFZlY3RvcigtNSwgMCksIG5ldyBWZWN0b3IoMCwgLTMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNSwgMCksIG5ldyBWZWN0b3IoMCwgMTUpXSB9KTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuZnVlbCB9KTtcclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5zaGlwIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcclxuICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuZnVlbC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuXHJcbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5zaGlwLnJvdGF0aW9uID0gZm9yd2FyZEFuZ2xlICsgTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5mcm9tQW5nbGUgPSBmb3J3YXJkQW5nbGUgLSAxIC8gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnRvQW5nbGUgPSBmb3J3YXJkQW5nbGUgKyAxIC8gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLm1hZ25pdHVkZSA9IHRoaXMuc3BlZWQgLyAxLjU7XHJcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5zaXplID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQodGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5jb3B5KCkuc2NhbGUoKDEgLyAzMDAwKSAqIHRoaXMuc3BlZWQpKTtcclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS5sZW5ndGgoKSA+IDIuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oMi41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=