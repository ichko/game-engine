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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__engine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_manager__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_object__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance_pool__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parallax__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__parallax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__primitives__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renderer__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scene__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vector__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__vector__["a"]; });












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Utils {

    static random(min = 0, max = 1) {
        return Math.random() * (max - min) + min;
    }

    static randomArray (array) {
        return array[Math.floor(this.random(0, array.length))];
    }

    static range(size, handler) {
        return Array.from(Array(Math.round(size)).keys()).map(handler);
    }

    static filterSet(set, predicate) {
        set.forEach(element => {
            if (!predicate(element)) {
                set.delete(element);
            }
        });

        return set;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utils;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];
/* harmony export (immutable) */ __webpack_exports__["a"] = colors;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);



class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }

    normalize() {
        let length = this.length();
        if (length !== 0) {
            this.x /= length;
            this.y /= length;
        }

        return this;
    }

    rotate(angle) {
        let [ sin, cos ] = [ Math.sin(angle), Math.cos(angle) ];
        let tmpX = this.x;
        this.x = this.x * cos - this.y * sin;
        this.y = tmpX * sin + this.y * cos;

        return this;
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    cut(size) {
        let length = this.length();
        if (length > size) {
            this.scaleTo(size);
        }

        return this;
    }

    scaleTo(size = 1) {
        return this.normalize().scale(size);
    }

    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    }

    distance(vector) {
        let dx = this.x - vector.x;
        let dy = this.y - vector.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    reverse() {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    scale(size) {
        this.x *= size;
        this.y *= size;

        return this;
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    vectorScale(vector) {
        this.x *= vector.x;
        this.y *= vector.y;

        return this;
    }

    static random(minX, maxX, minY, maxY) {
        return new Vector(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].random(minX, maxX), __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].random(minY, maxY));
    }

    static polar(angle = 0, length = 1) {
        return new Vector(Math.cos(angle) * length, Math.sin(angle) * length);
    }

    static randomPolar(length = 1, minAngle = 0, maxAngle = Math.PI * 2) {
        return Vector.polar(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].random(minAngle, maxAngle), length);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(3);



class GameObject {

    constructor(config) {
        this.set(config);
    }

    set({
        position = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](),
        style = { color: '#f00' },
        velocityDamping = 1,
        velocity = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](),
        rotation = 0,
        rotationCenter = position,
        size = 1
    } = {}) {
        this.position = position;
        this.velocity = velocity;
        this.velocityDamping = velocityDamping;
        this.style = style;
        this.size = size;

        this.rotation = rotation;
        this.rotationCenter = rotationCenter;
        this.dead = false;
    }

    alive() {
        return !this.dead;
    }

    render(renderer) { }

    update(context) {
        this.updateVelocity(context);
        this.updatePosition(context);
    }

    updatePosition({ dt = 1 } = {}) {
        this.position.add(this.velocity.copy().scale(dt));
    }

    updateVelocity({ dt = 1 } = {}) {
        this.velocity.scale(this.velocityDamping);
    }

    static extend(func) {
        this.prototype[func.name] = func;
        return this;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InstancePool {

    constructor(type) {
        this.type = type;
        this.released = new Set();
        this.allocated = new Set();
    }

    new(...config) {
        let instance = undefined;

        if (this.released.size > 0) {
            instance = this.released.values().next().value;
            instance.set(...config);
        } else {
            instance = new this.type(...config);            
        }

        this.released.delete(instance);
        this.allocated.add(instance);

        return instance;
    }

    release(instance) {
        if (this.allocated.has(instance)) {
            this.allocated.delete(instance);
            this.released.add(instance);
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InstancePool;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asteroid_field__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controller__ = __webpack_require__(8);








let animationFrame = undefined;

// window.onresize = init;
// function init() {

let [ ctx, width, height ] = (() => {
    let canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let ctx = canvas.getContext('2d');
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1.05, -1.05);

    return [ ctx, innerWidth, innerHeight ];
})();


let io = new __WEBPACK_IMPORTED_MODULE_1__io__["a" /* IO */](width, height);
let renderer = new __WEBPACK_IMPORTED_MODULE_0__engine__["a" /* CanvasRenderer */](ctx, width, height);
let scene = new __WEBPACK_IMPORTED_MODULE_0__engine__["b" /* Scene */]();
let engine = new __WEBPACK_IMPORTED_MODULE_0__engine__["c" /* Engine */](renderer, scene);

let controller = new __WEBPACK_IMPORTED_MODULE_5__controller__["a" /* Controller */](io, width, height);
let player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */](controller);
let camera = new __WEBPACK_IMPORTED_MODULE_0__engine__["d" /* SpringyVector */]({
    position: new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](0, 50), elasticity: 0.08, damping: 0.3,
    target: () => player.position.copy().add(player.velocity.copy().scale(3))
});

let parallax = new __WEBPACK_IMPORTED_MODULE_0__engine__["f" /* Parallax */](camera.position);
let environment = new __WEBPACK_IMPORTED_MODULE_4__environment__["a" /* Environment */](camera, width, height);


io.onMouse(() => player.speed = 5, () => player.speed = 0);
environment.container.forEach(layer => parallax.addLayer({ depth: layer.depth, objects: layer.objects }));
parallax.addLayer({ objects: [player, new __WEBPACK_IMPORTED_MODULE_3__asteroid_field__["a" /* AsteroidField */](player, Math.max(width, height))] });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);




class AsteroidField {

    constructor(player, radius) {
        let numAsteroids = 15;
        this.alive = () => true;
        this.radius = radius;
        this.player = player;
        this.asteroids = __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].range(numAsteroids, () => {
            let size = __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].random(10, 40);
            return new __WEBPACK_IMPORTED_MODULE_0__engine__["h" /* Polygon */]({
                position: this.randomAsteroidPosition(),
                style: { color: this.randomAsteroidColor() },
                velocity: __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */].random(-0.5, 0.5, -0.5, 0.5), size,
                points: this.randomAsteroidShape()
            });
        });

        this.explosions = [];
        this.explosionSpawner = new __WEBPACK_IMPORTED_MODULE_0__engine__["i" /* Spawner */](() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    randomAsteroidPosition() {
        return this.player.position.copy().add(__WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */].polar(__WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].random(0, Math.PI * 2), this.radius / 2 + 20));
    }

    randomAsteroidShape() {
        let segments = 5;
        return __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].range(segments, segment =>
            __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */].polar((segment / segments) * Math.PI * 2, __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].random(0.5, 1)));
    }

    randomAsteroidColor() {
        return __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].randomArray(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* colors */]);
    }

    update(ctx) {
        let playerSpeed = this.player.velocity.length();
        this.asteroids.forEach(asteroid => {
            asteroid.update(ctx);
            let distance = this.player.position.distance(asteroid.position);

            if (distance < asteroid.size && this.player.size > 0) {
                if (this.player.color != asteroid.style.color) {
                    this.player.kill();
                }
                else {
                    this.player.color = this.randomAsteroidColor();
                    this.explosions.push(new __WEBPACK_IMPORTED_MODULE_0__engine__["j" /* Explosion */]({
                        position: asteroid.position, size: asteroid.size,
                        particleSize: asteroid.size / 1.5, style: { color: asteroid.style.color },
                        magnitude: (asteroid.size + playerSpeed + asteroid.velocity.length()) / 5
                    }).fire());
                }
            }
            if ((distance < asteroid.size || distance > this.radius / 2 + 50) && this.player.size > 0) {
                asteroid.position = this.randomAsteroidPosition();
                asteroid.points = this.randomAsteroidShape();
                asteroid.style.color = this.randomAsteroidColor();
            }
        });

        this.explosionSpawner.update(ctx);        
    }

    render(renderer) {
        this.asteroids.forEach(asteroid => asteroid.render(renderer));
        this.explosionSpawner.render(renderer);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AsteroidField;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);



class Controller {

    constructor(io, width, height) {
        this.radius = Math.min(width, height) / 6;
        this.color = 'red'
        this.center = new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](-width / 2 + this.radius + 45, -height / 2 + this.radius + 45);
        this.direction = new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */]();

        this.controllerSpring = new __WEBPACK_IMPORTED_MODULE_0__engine__["d" /* SpringyVector */]({
            elasticity: 0.1,
            damping: 0.5,
            target: () => io.mouse
        });
        this.bigCircle = new __WEBPACK_IMPORTED_MODULE_0__engine__["k" /* Circle */]({
            radius: this.radius,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
        this.smallCircle = new __WEBPACK_IMPORTED_MODULE_0__engine__["k" /* Circle */]({
            radius: this.radius / 1.5,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
    }

    render(renderer) {
        this.bigCircle.render(renderer);
        this.smallCircle.render(renderer);
    }

    update() {
        this.bigCircle.style.color = this.color;
        this.smallCircle.style.color = this.color;
        this.controllerSpring.update();

        this.direction = this.controllerSpring.position.copy().subtract(this.center).cut(this.radius / 2);
        this.smallCircle.position = this.center.copy().add(this.direction);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Engine {

    constructor(renderer, scene) {
        this.renderer = renderer;
        this.scene = scene;
    }

    render() {
        this.scene.render(this.renderer);
        return this;
    }

    update() {
        this.scene.update();
        return this;
    }

    clear() {
        this.renderer.clear();
        return this;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Engine;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventManager {

    constructor() {
        this.container = {};
    }

    register(name, condition, context) {
        this.container[name] = { condition, context, handlers: [] };
        return this;
    }

    on(elements, name, executor) {
        if (this.container[name]) {
            this.container[name].handlers.push({ executor, elements });
        }

        return this;
    }

    triggerEvents() {
        for (let name in this.container) {
            let { condition, context, handlers } = this.container[name];
            handlers.forEach(({ executor, elements }) =>
                elements
                    .filter(element => condition(element))
                    .forEach(element => executor(element))
            );
        }
    }

}
/* unused harmony export EventManager */



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(3);




class Parallax {

    constructor(reference = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */]()) {
        this.reference = reference;
        this.layers = [];
        this.zoom = 1;
    }

    target(reference) {
        this.reference = reference;
        return this;
    }

    addLayer({ objects = [], depth = 1 }) {
        this.layers.push({ objects: new Set(objects), depth: 1 / depth });
        return this;
    }

    render(renderer) {
        this.layers.forEach(layer => {
            renderer.push({
                translation: this.reference.copy().scale(-layer.depth),
                scale: new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](this.zoom, this.zoom)
            });
            layer.objects.forEach(object => object.render(renderer));
            renderer.pop();
        });
    }

    update() {
        this.layers.forEach(layer => __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* Utils */].filterSet(layer.objects, object => {
            object.update();
            return object.alive();
        }));
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Parallax;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instance_pool__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector__ = __webpack_require__(3);






class Circle extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* GameObject */] {

    set(config = {}) {
        super.set(config);
        this.radius = config.radius || 5;
    }

    render(renderer)  {
        renderer.circle(this.position, this.radius, this.style);
    }

}
/* harmony export (immutable) */ __webpack_exports__["e"] = Circle;


class Rectangle extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* GameObject */] {

    constructor(config = {}) {
        super(config);
        this.size = config.size;
    }

    render(renderer) {
        renderer.rectangle(this.position, this.size, this.style);
    }

}
/* unused harmony export Rectangle */


class Composite extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* GameObject */] {

    constructor(config = {}) {
        super(config);
        this.items = [];
    }

    add({ offset = new __WEBPACK_IMPORTED_MODULE_3__vector__["a" /* Vector */](), object }) {
        this.items.push({ object, offset });
        return this;
    }

    render(renderer) {
        renderer.push({
            translation: this.position,
            scale: new __WEBPACK_IMPORTED_MODULE_3__vector__["a" /* Vector */](this.size, this.size)
        });
        this.items.forEach(({ object, offset }) => {
            renderer.push({ translation: offset });
            object.render(renderer);
            renderer.pop();
        });
        renderer.pop();
    }

    update(ctx) {
        super.update(ctx);
        this.items.forEach(({ object }) => object.update(ctx));
    }

}
/* harmony export (immutable) */ __webpack_exports__["f"] = Composite;


class SpringyVector extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* GameObject */] {

    constructor({
        damping = 0.1,
        elasticity = 0.1,
        target = () => new __WEBPACK_IMPORTED_MODULE_3__vector__["a" /* Vector */](),
        position = new __WEBPACK_IMPORTED_MODULE_3__vector__["a" /* Vector */]()
    } = {}) {
        super({ position });
        this.target = target;
        this.elasticity = elasticity;
        this.damping = damping;
    }

    updateVelocity() {
        let dampingForce = this.velocity.copy().scale(this.damping);
        let acceleration = this.target()
            .copy()
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(dampingForce);

        this.velocity.add(acceleration);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpringyVector;


class Explosion extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* GameObject */] {

    constructor(config) {
        super(config);
        this.particles = [];
        this.position = [];
        this.config = config;
        this.circlesPool = new __WEBPACK_IMPORTED_MODULE_1__instance_pool__["a" /* InstancePool */](Circle);
    }

    fire() {
        this.init(this.config);
        return this;
    }

    init({
        size = 2,
        magnitude = 10,
        style = { color: "#f00" },
        particleSize = 20,
        position = new __WEBPACK_IMPORTED_MODULE_3__vector__["a" /* Vector */](),
        fromAngle = 0,
        toAngle = Math.PI * 2,
    } = {}) {
        this.particles = this.particles.concat(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].range(size, () => this.circlesPool.new({
            style, position: position.copy(), radius: particleSize, velocityDamping: 0.97,
            velocity: __WEBPACK_IMPORTED_MODULE_3__vector__["a" /* Vector */].randomPolar(1, fromAngle, toAngle)
                .scale(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].random(magnitude / 2, magnitude))
        })));
    }

    alive() {
        return this.particles.length > 0;
    }

    render(renderer) {
        renderer.push({ rotation: this.rotation })
        this.particles.forEach(particle => particle.render(renderer));
        renderer.pop();
    }

    update(dt) {
        this.particles = this.particles.filter(particle => {
            particle.radius /= __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* Utils */].random(1.05, 1.1);
            particle.update(dt)

            let alive = particle.radius > 0.5;
            if (!alive) {
                this.circlesPool.release(particle);
            }

            return alive;
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["d"] = Explosion;


class Fountain extends Explosion {

    constructor(config) {
        super(config);
    }

    update(dt) {
        this.fire();
        super.update(dt);
    }

}
/* harmony export (immutable) */ __webpack_exports__["g"] = Fountain;


class Polygon extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* GameObject */] {

    constructor(config = {}) {
        super(config);
        this.points = config.points || [];
        this.emissions = [];
    }

    render(renderer) {
        renderer.push({ translation: this.position, rotation: this.rotation });
        renderer.polygon(this.points, this.size, this.style);
        renderer.pop();
    }

}
/* harmony export (immutable) */ __webpack_exports__["b"] = Polygon;


class Spawner {

    constructor(condition = (() => false), creator = (() => [])) {
        this.creator = creator;
        this.condition = condition;
        this.items = [];
    }

    update(context) {
        if (this.condition(this.items.length)) {
            this.items.push(...this.creator())
        }

        this.items = this.items.filter(item => {
            item.update(context);
            return item.alive();
        });
    }

    render(renderer) {
        this.items.forEach(item => item.render(renderer)); 
    }

    alive() {
        return true;
    }

}
/* harmony export (immutable) */ __webpack_exports__["c"] = Spawner;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(3);



class CanvasRenderer {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    transform(transformation, transformedRendering) {
        this.push(transformation);
        transformedRendering();
        this.pop();
    }

    push({
        scale = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](1, 1),
        rotation = 0,
        translation = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */]()
    } = {}) {
        this.ctx.save();
        this.ctx.scale(scale.x, scale.y);
        this.ctx.rotate(rotation);
        this.ctx.translate(translation.x, translation.y);
    }

    pop() {
        this.ctx.restore();
    }

    circle(position, radius, { color, opacity = 1 }) {
        // this.ctx.shadowColor = color;
        // this.ctx.shadowBlur = 50;

        this.ctx.fillStyle = color;
        this.ctx.globalAlpha = opacity;
        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    rectangle(position, size, { color, opacity = 1 }) {
        this.ctx.fillStyle = color;
        this.ctx.globalAlpha = opacity;
        this.ctx.fillRect(position.x - size.width / 2, position.y - size.height / 2, size.width, size.height);
    }

    clear() {
        this.ctx.fillStyle = "rgba(0,0,0,1)";
        this.ctx.globalAlpha = 1;
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

    polygon(points, size = 1, { color, opacity = 1 }) {
        if (points.length > 2) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.globalAlpha = opacity;
            this.ctx.moveTo(points[0].x * size, points[0].y * size);
            points.forEach(point => {
                this.ctx.lineTo(point.x * size, point.y * size);
            });
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CanvasRenderer;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Scene {

    constructor() {
        this.container = [];
    }

    add(...objects) {
        this.container = this.container.concat(objects);
        return this;
    }

    render(renderer) {
        this.container.forEach(object => object.render && object.render(renderer));
    }

    update(params) {
        this.container = this.container.filter(object => {
            if (object.update) {
                object.update(params);
                if (typeof object.alive !== "undefined") {
                    return object.alive();
                }

                return true;
            }
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);




class Environment {

    constructor(camera, width, height) {
        this.camera = camera;
        this.width = width;
        this.height = height;

        this.container = [
            { objects: this.circleGenerator(10, { size: 4 }), depth: 0.8 },
            { objects: this.circleGenerator(10, { size: 3 }), depth: 0.9 },
            { objects: this.circleGenerator(10, { size: 2 }), depth: 1.1 },
            { objects: this.circleGenerator(10, { size: 1 }), depth: 1.2 }
        ];
    }

    circleGenerator(count, { size } = {}) {
        return __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].range(count, () => new __WEBPACK_IMPORTED_MODULE_0__engine__["k" /* Circle */]({
            position: __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */].random(-this.width / 2, this.width / 2, -this.height / 2, this.height / 2),
            radius: __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].random(1, size), style: { color: __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].randomArray(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* colors */]), opacity: 0.6 }
        }));
    }

    outOfBounds() {
        this.container.forEach(layer => {
            layer.objects.forEach(element => {
                let cameraPos = this.camera.position.copy().scale(1 / layer.depth);

                if (cameraPos.x - element.position.x > this.width / 2) {
                    element.position.x = cameraPos.x + this.width / 2 - (cameraPos.x - element.position.x) % (this.width / 2);
                }
                if (element.position.x - cameraPos.x > this.width / 2) {
                    element.position.x = cameraPos.x - this.width / 2 + (cameraPos.x - element.position.x) % (this.width / 2);
                }

                if (cameraPos.y - element.position.y > this.height / 2) {
                    element.position.y = cameraPos.y + this.height - (cameraPos.y - element.position.y) % (this.height);
                }
                if (element.position.y - cameraPos.y > this.height / 2) {
                    element.position.y = cameraPos.y + (cameraPos.y - element.position.y) % (this.height);
                }
            });
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Environment;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);



class IO {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.mouse = new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](0, 300);

        this.keyHandlers = {};
        this.keyStates = {};

        this.bindEvents();
    }

    callHandlers() {
        for (let name in this.keyHandlers) {
            if (this.keyStates[name]) {
                this.keyHandlers[name].handeler();
            } else {
                this.keyHandlers[name].reverseHandler && this.keyHandlers[name].reverseHandler();
            }
        }
    }

    onMouse(downHandler, upHandler) {
        window.addEventListener('mousedown', downHandler);
        window.addEventListener('mouseup', upHandler);

        window.addEventListener('touchstart', downHandler);
        window.addEventListener('touchend', upHandler);

        return this;
    }

    onKey(key, handeler, reverseHandler) {
        this.keyHandlers[key] = { handeler, reverseHandler };
        return this;
    }

    changeTouch({ changedTouches }) {
        this.mouse.set(changedTouches[0].pageX - this.width / 2,
                        -changedTouches[0].pageY + this.height / 2)
    }

    bindEvents() {
        window.addEventListener('mousemove', ({ x, y }) =>
            this.mouse.set(x - this.width / 2, -y + this.height / 2));

        window.addEventListener('touchmove', (e) => this.changeTouch(e));
        window.addEventListener('touchstart', (e) => this.changeTouch(e));

        window.addEventListener('mousedown', ({ x, y }) => this.mouseDown = true);
        window.addEventListener('mouseup', ({ x, y }) => this.mouseDown = false);

        window.addEventListener('keydown', ({ key }) => this.keyStates[key] = true);
        window.addEventListener('keyup', ({ key }) => this.keyStates[key] = false);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = IO;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);




class Player extends __WEBPACK_IMPORTED_MODULE_0__engine__["l" /* Composite */] {

    constructor(controller) {
        super();
        this.controller = controller;
        this.fuel = new __WEBPACK_IMPORTED_MODULE_0__engine__["m" /* Fountain */]({ particleSize: 4, style: { opacity: 0.2 },
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        this.ship = new __WEBPACK_IMPORTED_MODULE_0__engine__["h" /* Polygon */]({ points: [new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](-5, 0), new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](0, -3), 
                                           new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](5, 0), new __WEBPACK_IMPORTED_MODULE_0__engine__["e" /* Vector */](0, 15)] });
        this.speed = 0;
        this.color = __WEBPACK_IMPORTED_MODULE_0__engine__["g" /* Utils */].randomArray(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* colors */]);

        this.add({ object: this.fuel });
        this.add({ object: this.ship });

        this.explosions = [];
        this.explosionSpawner = new __WEBPACK_IMPORTED_MODULE_0__engine__["i" /* Spawner */](() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    kill() {
        this.explosions.push(new __WEBPACK_IMPORTED_MODULE_0__engine__["j" /* Explosion */]({
            position: this.position, size: 30, particleSize: 20,
            style: { color: this.color }, magnitude: 5
        }).fire());
        // this.size = 0;
    }

    render(renderer) {
        this.explosionSpawner.render(renderer);
        super.render(renderer);
    }

    update(ctx) {
        super.update(ctx);
        this.explosionSpawner.update(ctx);

        this.ship.style.color = this.color;
        this.fuel.style.color = this.color;
        this.controller.color = this.color;

        let forwardAngle = this.controller.direction.angle() + Math.PI;
        this.ship.rotation = forwardAngle + Math.PI / 2;
        this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
        this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
        this.fuel.config.magnitude = this.speed / 1.5;
        this.fuel.config.size = this.speed / 1.5;

        this.velocity.add(this.controller.direction.copy().scale((1 / 3000) * this.speed));
        if (this.velocity.length() > 2.5) {
            this.velocity.scaleTo(2.5);
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFkMDhkZjZlOGM3Njg2ZTJlZmMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2luc3RhbmNlLXBvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXN0ZXJvaWQtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NjZW5lLmpzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2lvLmpzIiwid2VicGFjazovLy8uL3BsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQWdCOzs7QUFHaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNuSGlCOzs7QUFHakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEtBQUs7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTLEtBQUs7QUFDbEM7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUyxLQUFLO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7OztBQ3JEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGdEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQztBQUNZO0FBQ0k7QUFDTztBQUNGO0FBQ0Q7OztBQUdyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7O0FBR0E7QUFDQSwwREFBMEQsNkNBQTZDO0FBQ3ZHLG1CQUFtQixpSUFBd0U7QUFDM0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7O0FDOURxRDtBQUNwQzs7O0FBR2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsOEJBQThCO0FBQ2pHO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCwwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDMUV3Qzs7O0FBR3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDMUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxxQkFBcUI7QUFDckU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRCwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUM5QmdCO0FBQ0M7OztBQUdqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsMEJBQTBCO0FBQ3hDLDBCQUEwQiw4Q0FBOEM7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN4Q3FCO0FBQ0U7QUFDUDtBQUNDOzs7QUFHakI7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUVBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBLFNBQVMsaUZBQWdDO0FBQ3pDLHlCQUF5QixpQkFBaUI7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsaUJBQWlCO0FBQzlDLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0Qzs7QUFFQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssS0FBSztBQUNWLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxLQUFLO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNEQUFzRDtBQUM3RTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUM1TWlCOzs7QUFHakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxLQUFLO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7QUN0RUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQzVCZ0M7QUFDZjs7O0FBR2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxvQ0FBb0MsVUFBVSxlQUFlO0FBQzFFLGFBQWEsb0NBQW9DLFVBQVUsZUFBZTtBQUMxRSxhQUFhLG9DQUFvQyxVQUFVLGVBQWU7QUFDMUUsYUFBYSxvQ0FBb0MsVUFBVTtBQUMzRDtBQUNBOztBQUVBLDRCQUE0QixPQUFPLEtBQUs7QUFDeEM7QUFDQTtBQUNBLG9HQUFtRDtBQUNuRCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNoRGlCOzs7QUFHakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLE9BQU87QUFDdEQsNkNBQTZDLE9BQU87O0FBRXBELDZDQUE2QyxNQUFNO0FBQ25ELDJDQUEyQyxNQUFNO0FBQ2pEOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ3pEQztBQUNnQjs7O0FBR2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1GQUFrQywwQkFBMEIsZUFBZTtBQUMzRSwwRkFBMEY7QUFDMUYsa0ZBQWlDO0FBQ2pDLG1MQUFpRjtBQUNqRjtBQUNBOztBQUVBLGtCQUFrQixvQkFBb0I7QUFDdEMsa0JBQWtCLG9CQUFvQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYWQwOGRmNmU4Yzc2ODZlMmVmYyIsImV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcclxuZXhwb3J0ICogZnJvbSAnLi9ldmVudC1tYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyYWxsYXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ByaW1pdGl2ZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zY2VuZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvcic7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW4gPSAwLCBtYXggPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tQXJyYXkgKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5nZShzaXplLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoTWF0aC5yb3VuZChzaXplKSkua2V5cygpKS5tYXAoaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbHRlclNldChzZXQsIHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHNldC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZShlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgY29sb3JzID0gWycjNmY2JywgJyNmNjYnLCAnIzY2ZicsICcjZmYzJywgJyMzZmYnLCAnI2YzZiddO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgICAgIGxldCBbIHNpbiwgY29zIF0gPSBbIE1hdGguc2luKGFuZ2xlKSwgTWF0aC5jb3MoYW5nbGUpIF07XHJcbiAgICAgICAgbGV0IHRtcFggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICogY29zIC0gdGhpcy55ICogc2luO1xyXG4gICAgICAgIHRoaXMueSA9IHRtcFggKiBzaW4gKyB0aGlzLnkgKiBjb3M7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXQoc2l6ZSkge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggPiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVUbyhzaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5zY2FsZShzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHNpemUpIHtcclxuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcclxuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pblgsIG1heFgpLCBVdGlscy5yYW5kb20obWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL3ZlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHtcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxyXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXHJcbiAgICAgICAgdmVsb2NpdHkgPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXHJcbiAgICAgICAgc2l6ZSA9IDFcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2VudGVyID0gcm90YXRpb25DZW50ZXI7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbih7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlW2Z1bmMubmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9nYW1lLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlbGVhc2VkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyguLi5jb25maWcpIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnNldCguLi5jb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkLmFkZChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb2NhdGVkLmhhcyhpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xyXG4gICAgVXRpbHMsIFZlY3RvciwgQ2FudmFzUmVuZGVyZXIsXHJcbiAgICBTY2VuZSwgRW5naW5lLCBTcHJpbmd5VmVjdG9yLFxyXG4gICAgUGFyYWxsYXgsIENpcmNsZVxyXG59IGZyb20gJy4vZW5naW5lJztcclxuaW1wb3J0IHsgSU8gfSBmcm9tICcuL2lvJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBBc3Rlcm9pZEZpZWxkIH0gZnJvbSAnLi9hc3Rlcm9pZC1maWVsZCc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5cclxuXHJcbmxldCBhbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcclxuXHJcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9IGluaXQ7XHJcbi8vIGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5sZXQgWyBjdHgsIHdpZHRoLCBoZWlnaHQgXSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcclxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGN0eC50cmFuc2xhdGUoaW5uZXJXaWR0aCAvIDIsIGlubmVySGVpZ2h0IC8gMik7XHJcbiAgICBjdHguc2NhbGUoMS4wNSwgLTEuMDUpO1xyXG5cclxuICAgIHJldHVybiBbIGN0eCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgXTtcclxufSkoKTtcclxuXHJcblxyXG5sZXQgaW8gPSBuZXcgSU8od2lkdGgsIGhlaWdodCk7XHJcbmxldCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihjdHgsIHdpZHRoLCBoZWlnaHQpO1xyXG5sZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxubGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIsIHNjZW5lKTtcclxuXHJcbmxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcihjb250cm9sbGVyKTtcclxubGV0IGNhbWVyYSA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxyXG4gICAgdGFyZ2V0OiAoKSA9PiBwbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChwbGF5ZXIudmVsb2NpdHkuY29weSgpLnNjYWxlKDMpKVxyXG59KTtcclxuXHJcbmxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xyXG5sZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblxyXG5pby5vbk1vdXNlKCgpID0+IHBsYXllci5zcGVlZCA9IDUsICgpID0+IHBsYXllci5zcGVlZCA9IDApO1xyXG5lbnZpcm9ubWVudC5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiBwYXJhbGxheC5hZGRMYXllcih7IGRlcHRoOiBsYXllci5kZXB0aCwgb2JqZWN0czogbGF5ZXIub2JqZWN0cyB9KSk7XHJcbnBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xyXG5zY2VuZS5hZGQocGFyYWxsYXgsIGNvbnRyb2xsZXIsIGNhbWVyYSk7XHJcblxyXG5cclxuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gICAgZW5naW5lLmNsZWFyKCkucmVuZGVyKCkudXBkYXRlKCk7XHJcbiAgICBlbnZpcm9ubWVudC5vdXRPZkJvdW5kcygpO1xyXG5cclxuICAgIHBhcmFsbGF4Lnpvb20gPSA1MCAvIChwbGF5ZXIudmVsb2NpdHkubGVuZ3RoKCkgKiAzICsgMzApO1xyXG5cclxuICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbn0pKCk7XHJcblxyXG4vLyB9XHJcbi8vIGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTcGF3bmVyLCBQb2x5Z29uLCBFeHBsb3Npb24sIFV0aWxzLCBWZWN0b3IgfSBmcm9tICcuL2VuZ2luZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXN0ZXJvaWRGaWVsZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCByYWRpdXMpIHtcclxuICAgICAgICBsZXQgbnVtQXN0ZXJvaWRzID0gMTU7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMTAsIDQwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb20oLTAuNSwgMC41LCAtMC41LCAwLjUpLCBzaXplLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyID0gbmV3IFNwYXduZXIoKCkgPT4gdGhpcy5leHBsb3Npb25zLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMuZXhwbG9zaW9ucy5zcGxpY2UoMCwgdGhpcy5leHBsb3Npb25zLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQoVmVjdG9yLnBvbGFyKFV0aWxzLnJhbmRvbSgwLCBNYXRoLlBJICogMiksIHRoaXMucmFkaXVzIC8gMiArIDIwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRTaGFwZSgpIHtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSA1O1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShzZWdtZW50cywgc2VnbWVudCA9PlxyXG4gICAgICAgICAgICBWZWN0b3IucG9sYXIoKHNlZ21lbnQgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMiwgVXRpbHMucmFuZG9tKDAuNSwgMSkpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcclxuICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhc3Rlcm9pZC5wb3NpdGlvbiwgc2l6ZTogYXN0ZXJvaWQuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTaXplOiBhc3Rlcm9pZC5zaXplIC8gMS41LCBzdHlsZTogeyBjb2xvcjogYXN0ZXJvaWQuc3R5bGUuY29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlOiAoYXN0ZXJvaWQuc2l6ZSArIHBsYXllclNwZWVkICsgYXN0ZXJvaWQudmVsb2NpdHkubGVuZ3RoKCkpIC8gNVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmZpcmUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgfHwgZGlzdGFuY2UgPiB0aGlzLnJhZGl1cyAvIDIgKyA1MCkgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb2ludHMgPSB0aGlzLnJhbmRvbUFzdGVyb2lkU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnN0eWxlLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiBhc3Rlcm9pZC5yZW5kZXIocmVuZGVyZXIpKTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3Rlcm9pZC1maWVsZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWZWN0b3IsIENpcmNsZSwgU3ByaW5neVZlY3RvciB9IGZyb20gJy4vZW5naW5lJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW8sIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gNjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCdcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IoLXdpZHRoIC8gMiArIHRoaXMucmFkaXVzICsgNDUsIC1oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMgKyA0NSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZyA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxyXG4gICAgICAgICAgICBkYW1waW5nOiAwLjUsXHJcbiAgICAgICAgICAgIHRhcmdldDogKCkgPT4gaW8ubW91c2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZSA9IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiAwLjUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyAvIDEuNSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnBvc2l0aW9uID0gdGhpcy5jZW50ZXIuY29weSgpLmFkZCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2VuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG5hbWUsIGNvbmRpdGlvbiwgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdID0geyBjb25kaXRpb24sIGNvbnRleHQsIGhhbmRsZXJzOiBbXSB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGVsZW1lbnRzLCBuYW1lLCBleGVjdXRvcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcltuYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcltuYW1lXS5oYW5kbGVycy5wdXNoKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlckV2ZW50cygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGNvbmRpdGlvbiwgY29udGV4dCwgaGFuZGxlcnMgfSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xyXG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKCh7IGV4ZWN1dG9yLCBlbGVtZW50cyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gY29uZGl0aW9uKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gZXhlY3V0b3IoZWxlbWVudCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSBuZXcgVmVjdG9yKCkpIHtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0KHJlZmVyZW5jZSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExheWVyKHsgb2JqZWN0cyA9IFtdLCBkZXB0aCA9IDEgfSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBvYmplY3RzOiBuZXcgU2V0KG9iamVjdHMpLCBkZXB0aDogMSAvIGRlcHRoIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnJlZmVyZW5jZS5jb3B5KCkuc2NhbGUoLWxheWVyLmRlcHRoKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuem9vbSwgdGhpcy56b29tKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL3BhcmFsbGF4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9nYW1lLW9iamVjdCc7XHJcbmltcG9ydCB7IEluc3RhbmNlUG9vbCB9IGZyb20gJy4vaW5zdGFuY2UtcG9vbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xyXG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHsgb2Zmc2V0ID0gbmV3IFZlY3RvcigpLCBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7IG9iamVjdCwgb2Zmc2V0IH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWN0b3IodGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCwgb2Zmc2V0IH0pID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiBvZmZzZXQgfSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IG9iamVjdCB9KSA9PiBvYmplY3QudXBkYXRlKGN0eCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcclxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxyXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XHJcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcclxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcclxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLmNpcmNsZXNQb29sID0gbmV3IEluc3RhbmNlUG9vbChDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHtcclxuICAgICAgICBzaXplID0gMixcclxuICAgICAgICBtYWduaXR1ZGUgPSAxMCxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6IFwiI2YwMFwiIH0sXHJcbiAgICAgICAgcGFydGljbGVTaXplID0gMjAsXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgZnJvbUFuZ2xlID0gMCxcclxuICAgICAgICB0b0FuZ2xlID0gTWF0aC5QSSAqIDIsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmNvbmNhdChVdGlscy5yYW5nZShzaXplLCAoKSA9PiB0aGlzLmNpcmNsZXNQb29sLm5ldyh7XHJcbiAgICAgICAgICAgIHN0eWxlLCBwb3NpdGlvbjogcG9zaXRpb24uY29weSgpLCByYWRpdXM6IHBhcnRpY2xlU2l6ZSwgdmVsb2NpdHlEYW1waW5nOiAwLjk3LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLnJhbmRvbVBvbGFyKDEsIGZyb21BbmdsZSwgdG9BbmdsZSlcclxuICAgICAgICAgICAgICAgIC5zY2FsZShVdGlscy5yYW5kb20obWFnbml0dWRlIC8gMiwgbWFnbml0dWRlKSlcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHJlbmRlcmVyLnB1c2goeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KVxyXG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5yYWRpdXMgLz0gVXRpbHMucmFuZG9tKDEuMDUsIDEuMSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZShkdClcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGl2ZSA9IHBhcnRpY2xlLnJhZGl1cyA+IDAuNTtcclxuICAgICAgICAgICAgaWYgKCFhbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVzUG9vbC5yZWxlYXNlKHBhcnRpY2xlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFsaXZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvdW50YWluIGV4dGVuZHMgRXhwbG9zaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZmlyZSgpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhd25lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvcHJpbWl0aXZlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbiwgdHJhbnNmb3JtZWRSZW5kZXJpbmcpIHtcclxuICAgICAgICB0aGlzLnB1c2godHJhbnNmb3JtYXRpb24pO1xyXG4gICAgICAgIHRyYW5zZm9ybWVkUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKHtcclxuICAgICAgICBzY2FsZSA9IG5ldyBWZWN0b3IoMSwgMSksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uID0gbmV3IFZlY3RvcigpXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XHJcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodHJhbnNsYXRpb24ueCwgdHJhbnNsYXRpb24ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaXJjbGUocG9zaXRpb24sIHJhZGl1cywgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Qmx1ciA9IDUwO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWN0YW5nbGUocG9zaXRpb24sIHNpemUsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCAtIHNpemUud2lkdGggLyAyLCBwb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvbHlnb24ocG9pbnRzLCBzaXplID0gMSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50c1swXS54ICogc2l6ZSwgcG9pbnRzWzBdLnkgKiBzaXplKTtcclxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKiBzaXplLCBwb2ludC55ICogc2l6ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvcmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoLi4ub2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY29uY2F0KG9iamVjdHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIgJiYgb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuYWxpdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvc2NlbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFV0aWxzLCBDaXJjbGUsIFZlY3RvciB9IGZyb20gJy4vZW5naW5lJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0T2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Vudmlyb25tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL2VuZ2luZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElPIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kZWxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlciAmJiB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZShkb3duSGFuZGxlciwgdXBIYW5kbGVyKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd25IYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleSwgaGFuZGVsZXIsIHJldmVyc2VIYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1trZXldID0geyBoYW5kZWxlciwgcmV2ZXJzZUhhbmRsZXIgfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUb3VjaCh7IGNoYW5nZWRUb3VjaGVzIH0pIHtcclxuICAgICAgICB0aGlzLm1vdXNlLnNldChjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKHsgeCwgeSB9KSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnNldCh4IC0gdGhpcy53aWR0aCAvIDIsIC15ICsgdGhpcy5oZWlnaHQgLyAyKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4gdGhpcy5jaGFuZ2VUb3VjaChlKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gZmFsc2UpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW8uanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XHJcbiAgICBWZWN0b3IsIENvbXBvc2l0ZSwgRm91bnRhaW4sIFBvbHlnb24sXHJcbiAgICBVdGlscywgU3Bhd25lciwgRXhwbG9zaW9uXHJcbn0gZnJvbSAnLi9lbmdpbmUnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmZ1ZWwgPSBuZXcgRm91bnRhaW4oeyBwYXJ0aWNsZVNpemU6IDQsIHN0eWxlOiB7IG9wYWNpdHk6IDAuMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQW5nbGU6IE1hdGguUEkgLyAyICogMyAtIDAuMywgdG9BbmdsZTogTWF0aC5QSSAvIDIgKiAzICsgMC4zIH0pO1xyXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBQb2x5Z29uKHsgcG9pbnRzOiBbbmV3IFZlY3RvcigtNSwgMCksIG5ldyBWZWN0b3IoMCwgLTMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNSwgMCksIG5ldyBWZWN0b3IoMCwgMTUpXSB9KTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuZnVlbCB9KTtcclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5zaGlwIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcclxuICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuZnVlbC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuXHJcbiAgICAgICAgbGV0IGZvcndhcmRBbmdsZSA9IHRoaXMuY29udHJvbGxlci5kaXJlY3Rpb24uYW5nbGUoKSArIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5zaGlwLnJvdGF0aW9uID0gZm9yd2FyZEFuZ2xlICsgTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5mcm9tQW5nbGUgPSBmb3J3YXJkQW5nbGUgLSAxIC8gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnRvQW5nbGUgPSBmb3J3YXJkQW5nbGUgKyAxIC8gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLm1hZ25pdHVkZSA9IHRoaXMuc3BlZWQgLyAxLjU7XHJcbiAgICAgICAgdGhpcy5mdWVsLmNvbmZpZy5zaXplID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQodGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5jb3B5KCkuc2NhbGUoKDEgLyAzMDAwKSAqIHRoaXMuc3BlZWQpKTtcclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS5sZW5ndGgoKSA+IDIuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oMi41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9