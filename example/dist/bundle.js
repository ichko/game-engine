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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__engine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_manager__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_object__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance_pool__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parallax__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__parallax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__primitives__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__primitives__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renderer__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scene__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vector__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__vector__["a"]; });












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);



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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];
/* harmony export (immutable) */ __webpack_exports__["a"] = colors;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(1);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asteroid_field__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controller__ = __webpack_require__(14);








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
let renderer = new __WEBPACK_IMPORTED_MODULE_0_engine__["a" /* CanvasRenderer */](ctx, width, height);
let scene = new __WEBPACK_IMPORTED_MODULE_0_engine__["b" /* Scene */]();
let engine = new __WEBPACK_IMPORTED_MODULE_0_engine__["c" /* Engine */](renderer, scene);

let controller = new __WEBPACK_IMPORTED_MODULE_5__controller__["a" /* Controller */](io, width, height);
let player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */](controller);
let camera = new __WEBPACK_IMPORTED_MODULE_0_engine__["d" /* SpringyVector */]({
    position: new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](0, 50), elasticity: 0.08, damping: 0.3,
    target: () => player.position.copy().add(player.velocity.copy().scale(3))
});

let parallax = new __WEBPACK_IMPORTED_MODULE_0_engine__["f" /* Parallax */](camera.position);
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);




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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instance_pool__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector__ = __webpack_require__(1);






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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(1);



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
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);




class AsteroidField {

    constructor(player, radius) {
        let numAsteroids = 15;
        this.alive = () => true;
        this.radius = radius;
        this.player = player;
        this.asteroids = __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].range(numAsteroids, () => {
            let size = __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].random(10, 40);
            return new __WEBPACK_IMPORTED_MODULE_0_engine__["h" /* Polygon */]({
                position: this.randomAsteroidPosition(),
                style: { color: this.randomAsteroidColor() },
                velocity: __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */].random(-0.5, 0.5, -0.5, 0.5), size,
                points: this.randomAsteroidShape()
            });
        });

        this.explosions = [];
        this.explosionSpawner = new __WEBPACK_IMPORTED_MODULE_0_engine__["i" /* Spawner */](() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    randomAsteroidPosition() {
        return this.player.position.copy().add(__WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */].polar(__WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].random(0, Math.PI * 2), this.radius / 2 + 20));
    }

    randomAsteroidShape() {
        let segments = 5;
        return __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].range(segments, segment =>
            __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */].polar((segment / segments) * Math.PI * 2, __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].random(0.5, 1)));
    }

    randomAsteroidColor() {
        return __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].randomArray(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* colors */]);
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
                    this.explosions.push(new __WEBPACK_IMPORTED_MODULE_0_engine__["j" /* Explosion */]({
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine__ = __webpack_require__(0);



class Controller {

    constructor(io, width, height) {
        this.radius = Math.min(width, height) / 6;
        this.color = 'red'
        this.center = new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](-width / 2 + this.radius + 45, -height / 2 + this.radius + 45);
        this.direction = new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */]();

        this.controllerSpring = new __WEBPACK_IMPORTED_MODULE_0_engine__["d" /* SpringyVector */]({
            elasticity: 0.1,
            damping: 0.5,
            target: () => io.mouse
        });
        this.bigCircle = new __WEBPACK_IMPORTED_MODULE_0_engine__["k" /* Circle */]({
            radius: this.radius,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
        this.smallCircle = new __WEBPACK_IMPORTED_MODULE_0_engine__["k" /* Circle */]({
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);




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
        return __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].range(count, () => new __WEBPACK_IMPORTED_MODULE_0_engine__["k" /* Circle */]({
            position: __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */].random(-this.width / 2, this.width / 2, -this.height / 2, this.height / 2),
            radius: __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].random(1, size), style: { color: __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].randomArray(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* colors */]), opacity: 0.6 }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine__ = __webpack_require__(0);



class IO {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.mouse = new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](0, 300);

        this.keyHandlers = {};
        this.keyStates = {};

        this.bindEvents();
    }

    callHandlers() {
        for (let name in this.keyHandlers) {
            if (this.keyStates[name]) {
                this.keyHandlers[name].handler();
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

    onKey(key, handler, reverseHandler) {
        this.keyHandlers[key] = { handler, reverseHandler };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);




class Player extends __WEBPACK_IMPORTED_MODULE_0_engine__["l" /* Composite */] {

    constructor(controller) {
        super();
        this.controller = controller;
        this.fuel = new __WEBPACK_IMPORTED_MODULE_0_engine__["m" /* Fountain */]({ particleSize: 4, style: { opacity: 0.2 },
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        this.ship = new __WEBPACK_IMPORTED_MODULE_0_engine__["h" /* Polygon */]({ points: [new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](-5, 0), new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](0, -3), 
                                           new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](5, 0), new __WEBPACK_IMPORTED_MODULE_0_engine__["e" /* Vector */](0, 15)] });
        this.speed = 0;
        this.color = __WEBPACK_IMPORTED_MODULE_0_engine__["g" /* Utils */].randomArray(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* colors */]);

        this.add({ object: this.fuel });
        this.add({ object: this.ship });

        this.explosions = [];
        this.explosionSpawner = new __WEBPACK_IMPORTED_MODULE_0_engine__["i" /* Spawner */](() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    kill() {
        this.explosions.push(new __WEBPACK_IMPORTED_MODULE_0_engine__["j" /* Explosion */]({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzllMDYyZDk0N2M1NjdkZWVkNWQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvdmVjdG9yLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9nYW1lLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3BhcmFsbGF4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXN0ZXJvaWQtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9pby5qcyIsIndlYnBhY2s6Ly8vLi9wbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNUZ0I7OztBQUdoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFFQTtBQUNBOztBQUVBLCtDQUErQyxPQUFPO0FBQ3RELDZDQUE2QyxPQUFPOztBQUVwRCw2Q0FBNkMsTUFBTTtBQUNuRCwyQ0FBMkMsTUFBTTtBQUNqRDs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUN6REM7QUFDZ0I7OztBQUdqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0MsMEJBQTBCLGVBQWU7QUFDM0UsMEZBQTBGO0FBQzFGLGlGQUFpQztBQUNqQyxpTEFBaUY7QUFDakY7QUFDQTs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixvQkFBb0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzllMDYyZDk0N2M1NjdkZWVkNWQiLCJleHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmltaXRpdmVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3InO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcclxuICAgICAgICBsZXQgdG1wWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XHJcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1dChzaXplKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLnNjYWxlKHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnRyYWN0KHZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWN0b3IueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlKHZlY3Rvcikge1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGUoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMueCAqPSBzaXplO1xyXG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tKG1pblgsIG1heFgsIG1pblksIG1heFkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihVdGlscy5yYW5kb20obWluWCwgbWF4WCksIFV0aWxzLnJhbmRvbShtaW5ZLCBtYXhZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBvbGFyKGFuZ2xlID0gMCwgbGVuZ3RoID0gMSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20obWluQW5nbGUsIG1heEFuZ2xlKSwgbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS92ZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tKG1pbiA9IDAsIG1heCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21BcnJheSAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpKV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmdlKHNpemUsIGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsdGVyU2V0KHNldCwgcHJlZGljYXRlKSB7XHJcbiAgICAgICAgc2V0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJlZGljYXRlKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFsnIzZmNicsICcjZjY2JywgJyM2NmYnLCAnI2ZmMycsICcjM2ZmJywgJyNmM2YnXTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICB0aGlzLnNldChjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh7XHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiAnI2YwMCcgfSxcclxuICAgICAgICB2ZWxvY2l0eURhbXBpbmcgPSAxLFxyXG4gICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIHJvdGF0aW9uID0gMCxcclxuICAgICAgICByb3RhdGlvbkNlbnRlciA9IHBvc2l0aW9uLFxyXG4gICAgICAgIHNpemUgPSAxXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlEYW1waW5nID0gdmVsb2NpdHlEYW1waW5nO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFsaXZlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5kZWFkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikgeyB9XHJcblxyXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZlbG9jaXR5KGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24oeyBkdCA9IDEgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoZHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZWxvY2l0eSh7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlKHRoaXMudmVsb2NpdHlEYW1waW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXh0ZW5kKGZ1bmMpIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZVtmdW5jLm5hbWVdID0gZnVuYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9nYW1lLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VQb29sIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlbGVhc2VkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyguLi5jb25maWcpIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlbGVhc2VkLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5yZWxlYXNlZC52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnNldCguLi5jb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSguLi5jb25maWcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlZC5kZWxldGUoaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYWxsb2NhdGVkLmFkZChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb2NhdGVkLmhhcyhpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZC5hZGQoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9pbnN0YW5jZS1wb29sLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XHJcbiAgICBVdGlscywgVmVjdG9yLCBDYW52YXNSZW5kZXJlcixcclxuICAgIFNjZW5lLCBFbmdpbmUsIFNwcmluZ3lWZWN0b3IsXHJcbiAgICBQYXJhbGxheCwgQ2lyY2xlXHJcbn0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgSU8gfSBmcm9tICcuL2lvJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBBc3Rlcm9pZEZpZWxkIH0gZnJvbSAnLi9hc3Rlcm9pZC1maWVsZCc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5cclxuXHJcbmxldCBhbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcclxuXHJcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9IGluaXQ7XHJcbi8vIGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5sZXQgWyBjdHgsIHdpZHRoLCBoZWlnaHQgXSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcclxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGN0eC50cmFuc2xhdGUoaW5uZXJXaWR0aCAvIDIsIGlubmVySGVpZ2h0IC8gMik7XHJcbiAgICBjdHguc2NhbGUoMS4wNSwgLTEuMDUpO1xyXG5cclxuICAgIHJldHVybiBbIGN0eCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgXTtcclxufSkoKTtcclxuXHJcblxyXG5sZXQgaW8gPSBuZXcgSU8od2lkdGgsIGhlaWdodCk7XHJcbmxldCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihjdHgsIHdpZHRoLCBoZWlnaHQpO1xyXG5sZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxubGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIsIHNjZW5lKTtcclxuXHJcbmxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcihjb250cm9sbGVyKTtcclxubGV0IGNhbWVyYSA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxyXG4gICAgdGFyZ2V0OiAoKSA9PiBwbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChwbGF5ZXIudmVsb2NpdHkuY29weSgpLnNjYWxlKDMpKVxyXG59KTtcclxuXHJcbmxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xyXG5sZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblxyXG5pby5vbk1vdXNlKCgpID0+IHBsYXllci5zcGVlZCA9IDUsICgpID0+IHBsYXllci5zcGVlZCA9IDApO1xyXG5lbnZpcm9ubWVudC5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiBwYXJhbGxheC5hZGRMYXllcih7IGRlcHRoOiBsYXllci5kZXB0aCwgb2JqZWN0czogbGF5ZXIub2JqZWN0cyB9KSk7XHJcbnBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xyXG5zY2VuZS5hZGQocGFyYWxsYXgsIGNvbnRyb2xsZXIsIGNhbWVyYSk7XHJcblxyXG5cclxuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4oZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gICAgZW5naW5lLmNsZWFyKCkucmVuZGVyKCkudXBkYXRlKCk7XHJcbiAgICBlbnZpcm9ubWVudC5vdXRPZkJvdW5kcygpO1xyXG5cclxuICAgIHBhcmFsbGF4Lnpvb20gPSA1MCAvIChwbGF5ZXIudmVsb2NpdHkubGVuZ3RoKCkgKiAzICsgMzApO1xyXG5cclxuICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbn0pKCk7XHJcblxyXG4vLyB9XHJcbi8vIGluaXQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0gPSB7IGNvbmRpdGlvbiwgY29udGV4dCwgaGFuZGxlcnM6IFtdIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZWxlbWVudHMsIG5hbWUsIGV4ZWN1dG9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdLmhhbmRsZXJzLnB1c2goeyBleGVjdXRvciwgZWxlbWVudHMgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyRXZlbnRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBjb250ZXh0LCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pID0+XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBleGVjdXRvcihlbGVtZW50KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvZXZlbnQtbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSBuZXcgVmVjdG9yKCkpIHtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0KHJlZmVyZW5jZSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExheWVyKHsgb2JqZWN0cyA9IFtdLCBkZXB0aCA9IDEgfSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBvYmplY3RzOiBuZXcgU2V0KG9iamVjdHMpLCBkZXB0aDogMSAvIGRlcHRoIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnJlZmVyZW5jZS5jb3B5KCkuc2NhbGUoLWxheWVyLmRlcHRoKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuem9vbSwgdGhpcy56b29tKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcGFyYWxsYXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vZ2FtZS1vYmplY3QnO1xyXG5pbXBvcnQgeyBJbnN0YW5jZVBvb2wgfSBmcm9tICcuL2luc3RhbmNlLXBvb2wnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIHNldChjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyLnNldChjb25maWcpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cyB8fCA1O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikgIHtcclxuICAgICAgICByZW5kZXJlci5jaXJjbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5yZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplLCB0aGlzLnN0eWxlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh7IG9mZnNldCA9IG5ldyBWZWN0b3IoKSwgb2JqZWN0IH0pIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBvYmplY3QsIG9mZnNldCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QsIG9mZnNldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogb2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGN0eCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QgfSkgPT4gb2JqZWN0LnVwZGF0ZShjdHgpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbmd5VmVjdG9yIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGRhbXBpbmcgPSAwLjEsXHJcbiAgICAgICAgZWxhc3RpY2l0eSA9IDAuMSxcclxuICAgICAgICB0YXJnZXQgPSAoKSA9PiBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjdG9yKClcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKHsgcG9zaXRpb24gfSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5lbGFzdGljaXR5ID0gZWxhc3RpY2l0eTtcclxuICAgICAgICB0aGlzLmRhbXBpbmcgPSBkYW1waW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbG9jaXR5KCkge1xyXG4gICAgICAgIGxldCBkYW1waW5nRm9yY2UgPSB0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSh0aGlzLmRhbXBpbmcpO1xyXG4gICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLnRhcmdldCgpXHJcbiAgICAgICAgICAgIC5jb3B5KClcclxuICAgICAgICAgICAgLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pXHJcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmVsYXN0aWNpdHkpXHJcbiAgICAgICAgICAgIC5zdWJ0cmFjdChkYW1waW5nRm9yY2UpO1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzUG9vbCA9IG5ldyBJbnN0YW5jZVBvb2woQ2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCh7XHJcbiAgICAgICAgc2l6ZSA9IDIsXHJcbiAgICAgICAgbWFnbml0dWRlID0gMTAsXHJcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiBcIiNmMDBcIiB9LFxyXG4gICAgICAgIHBhcnRpY2xlU2l6ZSA9IDIwLFxyXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIGZyb21BbmdsZSA9IDAsXHJcbiAgICAgICAgdG9BbmdsZSA9IE1hdGguUEkgKiAyLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5jb25jYXQoVXRpbHMucmFuZ2Uoc2l6ZSwgKCkgPT4gdGhpcy5jaXJjbGVzUG9vbC5uZXcoe1xyXG4gICAgICAgICAgICBzdHlsZSwgcG9zaXRpb246IHBvc2l0aW9uLmNvcHkoKSwgcmFkaXVzOiBwYXJ0aWNsZVNpemUsIHZlbG9jaXR5RGFtcGluZzogMC45NyxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb21Qb2xhcigxLCBmcm9tQW5nbGUsIHRvQW5nbGUpXHJcbiAgICAgICAgICAgICAgICAuc2NhbGUoVXRpbHMucmFuZG9tKG1hZ25pdHVkZSAvIDIsIG1hZ25pdHVkZSkpXHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgcm90YXRpb246IHRoaXMucm90YXRpb24gfSlcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoZHQpXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxpdmUgPSBwYXJ0aWNsZS5yYWRpdXMgPiAwLjU7XHJcbiAgICAgICAgICAgIGlmICghYWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wucmVsZWFzZShwYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbGl2ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3VudGFpbiBleHRlbmRzIEV4cGxvc2lvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmZpcmUoKTtcclxuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSBjb25maWcucG9pbnRzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZW1pc3Npb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgcmVuZGVyZXIucHVzaCh7IHRyYW5zbGF0aW9uOiB0aGlzLnBvc2l0aW9uLCByb3RhdGlvbjogdGhpcy5yb3RhdGlvbiB9KTtcclxuICAgICAgICByZW5kZXJlci5wb2x5Z29uKHRoaXMucG9pbnRzLCB0aGlzLnNpemUsIHRoaXMuc3R5bGUpO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXduZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiA9ICgoKSA9PiBmYWxzZSksIGNyZWF0b3IgPSAoKCkgPT4gW10pKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGNvbnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24odGhpcy5pdGVtcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi50aGlzLmNyZWF0b3IoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS51cGRhdGUoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFsaXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW5kZXIocmVuZGVyZXIpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYWxpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL2k0a285L3NzZC9qcy9nYW1lLWVuZ2luZS9lbmdpbmUvcHJpbWl0aXZlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNSZW5kZXJlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbiwgdHJhbnNmb3JtZWRSZW5kZXJpbmcpIHtcclxuICAgICAgICB0aGlzLnB1c2godHJhbnNmb3JtYXRpb24pO1xyXG4gICAgICAgIHRyYW5zZm9ybWVkUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKHtcclxuICAgICAgICBzY2FsZSA9IG5ldyBWZWN0b3IoMSwgMSksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uID0gbmV3IFZlY3RvcigpXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XHJcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodHJhbnNsYXRpb24ueCwgdHJhbnNsYXRpb24ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaXJjbGUocG9zaXRpb24sIHJhZGl1cywgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguc2hhZG93Qmx1ciA9IDUwO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWN0YW5nbGUocG9zaXRpb24sIHNpemUsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCAtIHNpemUud2lkdGggLyAyLCBwb3NpdGlvbi55IC0gc2l6ZS5oZWlnaHQgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvbHlnb24ocG9pbnRzLCBzaXplID0gMSwgeyBjb2xvciwgb3BhY2l0eSA9IDEgfSkge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50c1swXS54ICogc2l6ZSwgcG9pbnRzWzBdLnkgKiBzaXplKTtcclxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKiBzaXplLCBwb2ludC55ICogc2l6ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvaTRrbzkvc3NkL2pzL2dhbWUtZW5naW5lL2VuZ2luZS9yZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5vYmplY3RzKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5jb25jYXQob2JqZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlciAmJiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuZmlsdGVyKG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QudXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QudXBkYXRlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5hbGl2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9pNGtvOS9zc2QvanMvZ2FtZS1lbmdpbmUvZW5naW5lL3NjZW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTcGF3bmVyLCBQb2x5Z29uLCBFeHBsb3Npb24sIFV0aWxzLCBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFzdGVyb2lkRmllbGQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgcmFkaXVzKSB7XHJcbiAgICAgICAgbGV0IG51bUFzdGVyb2lkcyA9IDE1O1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSAoKSA9PiB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzID0gVXRpbHMucmFuZ2UobnVtQXN0ZXJvaWRzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gVXRpbHMucmFuZG9tKDEwLCA0MCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCkgfSxcclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tKC0wLjUsIDAuNSwgLTAuNSwgMC41KSwgc2l6ZSxcclxuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20oMCwgTWF0aC5QSSAqIDIpLCB0aGlzLnJhZGl1cyAvIDIgKyAyMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkU2hhcGUoKSB7XHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gNTtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2Uoc2VnbWVudHMsIHNlZ21lbnQgPT5cclxuICAgICAgICAgICAgVmVjdG9yLnBvbGFyKChzZWdtZW50IC8gc2VnbWVudHMpICogTWF0aC5QSSAqIDIsIFV0aWxzLnJhbmRvbSgwLjUsIDEpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgbGV0IHBsYXllclNwZWVkID0gdGhpcy5wbGF5ZXIudmVsb2NpdHkubGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMuZm9yRWFjaChhc3Rlcm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLnVwZGF0ZShjdHgpO1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnBsYXllci5wb3NpdGlvbi5kaXN0YW5jZShhc3Rlcm9pZC5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY29sb3IgIT0gYXN0ZXJvaWQuc3R5bGUuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYXN0ZXJvaWQucG9zaXRpb24sIHNpemU6IGFzdGVyb2lkLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU2l6ZTogYXN0ZXJvaWQuc2l6ZSAvIDEuNSwgc3R5bGU6IHsgY29sb3I6IGFzdGVyb2lkLnN0eWxlLmNvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hZ25pdHVkZTogKGFzdGVyb2lkLnNpemUgKyBwbGF5ZXJTcGVlZCArIGFzdGVyb2lkLnZlbG9jaXR5Lmxlbmd0aCgpKSAvIDVcclxuICAgICAgICAgICAgICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplIHx8IGRpc3RhbmNlID4gdGhpcy5yYWRpdXMgLyAyICsgNTApICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb3NpdGlvbiA9IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9pbnRzID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKCk7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5zdHlsZS5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4gYXN0ZXJvaWQucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXN0ZXJvaWQtZmllbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZlY3RvciwgQ2lyY2xlLCBTcHJpbmd5VmVjdG9yIH0gZnJvbSAnZW5naW5lJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW8sIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gNjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCdcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IoLXdpZHRoIC8gMiArIHRoaXMucmFkaXVzICsgNDUsIC1oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMgKyA0NSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZyA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxyXG4gICAgICAgICAgICBkYW1waW5nOiAwLjUsXHJcbiAgICAgICAgICAgIHRhcmdldDogKCkgPT4gaW8ubW91c2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZSA9IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiAwLjUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyAvIDEuNSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnBvc2l0aW9uID0gdGhpcy5jZW50ZXIuY29weSgpLmFkZCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVXRpbHMsIENpcmNsZSwgVmVjdG9yIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHJhZGl1czogVXRpbHMucmFuZG9tKDEsIHNpemUpLCBzdHlsZTogeyBjb2xvcjogVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKSwgb3BhY2l0eTogMC42IH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0T2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Vudmlyb25tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJTyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLm1vdXNlID0gbmV3IFZlY3RvcigwLCAzMDApO1xyXG5cclxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEhhbmRsZXJzKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5rZXlIYW5kbGVycykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlTdGF0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0uaGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlciAmJiB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZShkb3duSGFuZGxlciwgdXBIYW5kbGVyKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd25IYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleSwgaGFuZGxlciwgcmV2ZXJzZUhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzW2tleV0gPSB7IGhhbmRsZXIsIHJldmVyc2VIYW5kbGVyIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVG91Y2goeyBjaGFuZ2VkVG91Y2hlcyB9KSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZS5zZXQoY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLWNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICsgdGhpcy5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICh7IHgsIHkgfSkgPT5cclxuICAgICAgICAgICAgdGhpcy5tb3VzZS5zZXQoeCAtIHRoaXMud2lkdGggLyAyLCAteSArIHRoaXMuaGVpZ2h0IC8gMikpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHRoaXMuY2hhbmdlVG91Y2goZSkpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKHsgeCwgeSB9KSA9PiB0aGlzLm1vdXNlRG93biA9IGZhbHNlKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2lvLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xyXG4gICAgVmVjdG9yLCBDb21wb3NpdGUsIEZvdW50YWluLCBQb2x5Z29uLFxyXG4gICAgVXRpbHMsIFNwYXduZXIsIEV4cGxvc2lvblxyXG59IGZyb20gJ2VuZ2luZSc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuZnVlbCA9IG5ldyBGb3VudGFpbih7IHBhcnRpY2xlU2l6ZTogNCwgc3R5bGU6IHsgb3BhY2l0eTogMC4yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BbmdsZTogTWF0aC5QSSAvIDIgKiAzIC0gMC4zLCB0b0FuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgKyAwLjMgfSk7XHJcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFBvbHlnb24oeyBwb2ludHM6IFtuZXcgVmVjdG9yKC01LCAwKSwgbmV3IFZlY3RvcigwLCAtMyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1LCAwKSwgbmV3IFZlY3RvcigwLCAxNSldIH0pO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5yYW5kb21BcnJheShjb2xvcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5mdWVsIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLnNoaXAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgc2l6ZTogMzAsIHBhcnRpY2xlU2l6ZTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yIH0sIG1hZ25pdHVkZTogNVxyXG4gICAgICAgIH0pLmZpcmUoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaXplID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5mdWVsLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG5cclxuICAgICAgICBsZXQgZm9yd2FyZEFuZ2xlID0gdGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5hbmdsZSgpICsgTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcudG9BbmdsZSA9IGZvcndhcmRBbmdsZSArIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcubWFnbml0dWRlID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnNpemUgPSB0aGlzLnNwZWVkIC8gMS41O1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmNvbnRyb2xsZXIuZGlyZWN0aW9uLmNvcHkoKS5zY2FsZSgoMSAvIDMwMDApICogdGhpcy5zcGVlZCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpID4gMi41KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGVUbygyLjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=