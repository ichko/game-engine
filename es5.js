"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = new (function () {
    function App() {
        _classCallCheck(this, App);

        this.definitions = [];
        this.container = {};
    }

    _createClass(App, [{
        key: "load",
        value: function load() {
            var _this = this;

            this.definitions.forEach(function (_ref) {
                var single = _ref.single,
                    executor = _ref.executor;

                var cls = executor(_this.container);
                var name = cls.name;
                cls = single ? new cls() : cls;
                _this.container[name] = cls;
            });

            return this;
        }
    }, {
        key: "get",
        value: function get() {
            return this.container;
        }
    }, {
        key: "defineSingle",
        value: function defineSingle(executor) {
            this.definitions.push({ single: true, executor: executor });
            return this;
        }
    }, {
        key: "define",
        value: function define(executor) {
            this.definitions.push({ single: false, executor: executor });
            return this;
        }
    }, {
        key: "useIn",
        value: function useIn(global) {
            for (var name in this.container) {
                global[name] = this.container[name];
            }

            return this;
        }
    }, {
        key: "use",
        value: function use() {
            var _this2 = this;

            var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var global = arguments[1];

            dependencies.forEach(function (dependency) {
                return global[dependency] = _this2.definitions[dependency];
            });
            return this;
        }
    }]);

    return App;
}())();

App.define(function (_ref) {
    var Utils = _ref.Utils,
        Spawner = _ref.Spawner,
        Polygon = _ref.Polygon,
        Explosion = _ref.Explosion;
    return function () {
        function AsteroidField(player, colors, numAsteroids, radius) {
            var _this = this;

            _classCallCheck(this, AsteroidField);

            this.alive = function () {
                return true;
            };
            this.radius = radius;
            this.player = player;
            this.colors = colors;
            this.asteroids = Utils.range(numAsteroids, function () {
                var size = Utils.random(20, 40);
                return new Polygon({
                    position: _this.randomAsteroidPosition(),
                    style: { color: _this.randomAsteroidColor() },
                    velocity: Vector.random(-2, 2, -2, 2), size: size,
                    points: _this.randomAsteroidShape()
                });
            });

            this.explosions = [];
            this.explosionSpawner = new Spawner(function () {
                return _this.explosions.length > 0;
            }, function () {
                return _this.explosions.splice(0, _this.explosions.length);
            });
        }

        _createClass(AsteroidField, [{
            key: "randomAsteroidPosition",
            value: function randomAsteroidPosition() {
                return this.player.position.copy().add(Vector.polar(Utils.random(0, Math.PI * 2), this.radius / 2 + 20));
            }
        }, {
            key: "randomAsteroidShape",
            value: function randomAsteroidShape() {
                var segments = 8;
                return Utils.range(segments, function (segment) {
                    return Vector.polar(segment / segments * Math.PI * 2, Utils.random(0.5, 1));
                });
            }
        }, {
            key: "randomAsteroidColor",
            value: function randomAsteroidColor() {
                return Utils.randomArray(this.colors);
            }
        }, {
            key: "update",
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
                            _this2.explosions.push(new Explosion({
                                position: asteroid.position, size: asteroid.size / 1.5,
                                particleSize: asteroid.size / 1.5, style: { color: asteroid.style.color },
                                magnitude: (asteroid.size + playerSpeed + asteroid.velocity.length()) / 10
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
            key: "render",
            value: function render(renderer) {
                this.asteroids.forEach(function (asteroid) {
                    return asteroid.render(renderer);
                });
                this.explosionSpawner.render(renderer);
            }
        }]);

        return AsteroidField;
    }();
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
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
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.defineSingle(function () {
    return function () {
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
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function GameObject() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$position = _ref.position,
                position = _ref$position === undefined ? new Vector() : _ref$position,
                _ref$style = _ref.style,
                style = _ref$style === undefined ? { color: '#f00' } : _ref$style,
                _ref$velocityDamping = _ref.velocityDamping,
                velocityDamping = _ref$velocityDamping === undefined ? 1 : _ref$velocityDamping,
                _ref$velocity = _ref.velocity,
                velocity = _ref$velocity === undefined ? new Vector() : _ref$velocity,
                _ref$rotation = _ref.rotation,
                rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
                _ref$rotationCenter = _ref.rotationCenter,
                rotationCenter = _ref$rotationCenter === undefined ? position : _ref$rotationCenter,
                _ref$size = _ref.size,
                size = _ref$size === undefined ? 1 : _ref$size;

            _classCallCheck(this, GameObject);

            this.position = position;
            this.velocity = velocity;
            this.velocityDamping = velocityDamping;
            this.style = style;
            this.size = size;

            this.rotation = rotation;
            this.rotationCenter = rotationCenter;
            this.dead = false;
        }

        _createClass(GameObject, [{
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
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils;
    return function () {
        function Parallax() {
            var reference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                return new Vector();
            };

            _classCallCheck(this, Parallax);

            this.reference = reference;
            this.layers = [];
            this.zoom = 1;
        }

        _createClass(Parallax, [{
            key: "target",
            value: function target(reference) {
                this.reference = reference;
                return this;
            }
        }, {
            key: "addLayer",
            value: function addLayer(_ref2) {
                var _ref2$objects = _ref2.objects,
                    objects = _ref2$objects === undefined ? [] : _ref2$objects,
                    _ref2$depth = _ref2.depth,
                    depth = _ref2$depth === undefined ? 1 : _ref2$depth;

                this.layers.push({ objects: new Set(objects), depth: 1 / depth });
                return this;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                var _this = this;

                this.layers.forEach(function (layer) {
                    renderer.push({
                        translation: _this.reference.copy().scale(-layer.depth),
                        scale: new Vector(_this.zoom, _this.zoom)
                    });
                    layer.objects.forEach(function (object) {
                        return object.render(renderer);
                    });
                    renderer.pop();
                });
            }
        }, {
            key: "update",
            value: function update() {
                this.layers.forEach(function (layer) {
                    return Utils.filterSet(layer.objects, function (object) {
                        object.update();
                        return object.alive();
                    });
                });
            }
        }]);

        return Parallax;
    }();
});
"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

App.define(function (_ref) {
    var GameObject = _ref.GameObject;
    return function (_GameObject) {
        _inherits(Circle, _GameObject);

        function Circle() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Circle);

            var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, config));

            _this.radius = config.radius || 5;
            return _this;
        }

        _createClass(Circle, [{
            key: "render",
            value: function render(renderer) {
                renderer.circle(this.position, this.radius, this.style);
            }
        }]);

        return Circle;
    }(GameObject);
});

App.define(function (_ref2) {
    var GameObject = _ref2.GameObject;
    return function (_GameObject2) {
        _inherits(Rectangle, _GameObject2);

        function Rectangle() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Rectangle);

            var _this2 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, config));

            _this2.size = config.size;
            return _this2;
        }

        _createClass(Rectangle, [{
            key: "render",
            value: function render(renderer) {
                renderer.rectangle(this.position, this.size, this.style);
            }
        }]);

        return Rectangle;
    }(GameObject);
});

App.define(function (_ref3) {
    var GameObject = _ref3.GameObject;
    return function (_GameObject3) {
        _inherits(Composite, _GameObject3);

        function Composite() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Composite);

            var _this3 = _possibleConstructorReturn(this, (Composite.__proto__ || Object.getPrototypeOf(Composite)).call(this, config));

            _this3.items = [];
            return _this3;
        }

        _createClass(Composite, [{
            key: "add",
            value: function add(_ref4) {
                var _ref4$offset = _ref4.offset,
                    offset = _ref4$offset === undefined ? new Vector() : _ref4$offset,
                    object = _ref4.object;

                this.items.push({ object: object, offset: offset });
                return this;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                renderer.push({
                    translation: this.position,
                    scale: new Vector(this.size, this.size)
                });
                this.items.forEach(function (_ref5) {
                    var object = _ref5.object,
                        offset = _ref5.offset;

                    renderer.push({ translation: offset });
                    object.render(renderer);
                    renderer.pop();
                });
                renderer.pop();
            }
        }, {
            key: "update",
            value: function update(ctx) {
                _get(Composite.prototype.__proto__ || Object.getPrototypeOf(Composite.prototype), "update", this).call(this, ctx);
                this.items.forEach(function (_ref6) {
                    var object = _ref6.object;
                    return object.update(ctx);
                });
            }
        }]);

        return Composite;
    }(GameObject);
});

App.define(function (_ref7) {
    var GameObject = _ref7.GameObject;
    return function (_GameObject4) {
        _inherits(SpringyVector, _GameObject4);

        function SpringyVector() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref8$damping = _ref8.damping,
                damping = _ref8$damping === undefined ? 0.1 : _ref8$damping,
                _ref8$elasticity = _ref8.elasticity,
                elasticity = _ref8$elasticity === undefined ? 0.1 : _ref8$elasticity,
                _ref8$target = _ref8.target,
                target = _ref8$target === undefined ? function () {
                return new Vector();
            } : _ref8$target,
                _ref8$position = _ref8.position,
                position = _ref8$position === undefined ? new Vector() : _ref8$position;

            _classCallCheck(this, SpringyVector);

            var _this4 = _possibleConstructorReturn(this, (SpringyVector.__proto__ || Object.getPrototypeOf(SpringyVector)).call(this, { position: position }));

            _this4.target = target;
            _this4.elasticity = elasticity;
            _this4.damping = damping;
            return _this4;
        }

        _createClass(SpringyVector, [{
            key: "updateVelocity",
            value: function updateVelocity() {
                var dampingForce = this.velocity.copy().scale(this.damping);
                var acceleration = this.target().copy().subtract(this.position).scale(this.elasticity).subtract(dampingForce);

                this.velocity.add(acceleration);
            }
        }]);

        return SpringyVector;
    }(GameObject);
});

App.define(function (_ref9) {
    var GameObject = _ref9.GameObject,
        Circle = _ref9.Circle,
        Utils = _ref9.Utils;
    return function (_GameObject5) {
        _inherits(Explosion, _GameObject5);

        function Explosion(config) {
            _classCallCheck(this, Explosion);

            var _this5 = _possibleConstructorReturn(this, (Explosion.__proto__ || Object.getPrototypeOf(Explosion)).call(this, config));

            _this5.particles = [];
            _this5.position = [];
            _this5.config = config;
            return _this5;
        }

        _createClass(Explosion, [{
            key: "fire",
            value: function fire() {
                this.init(this.config);
                return this;
            }
        }, {
            key: "init",
            value: function init() {
                var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    _ref10$size = _ref10.size,
                    size = _ref10$size === undefined ? 2 : _ref10$size,
                    _ref10$magnitude = _ref10.magnitude,
                    magnitude = _ref10$magnitude === undefined ? 10 : _ref10$magnitude,
                    _ref10$style = _ref10.style,
                    style = _ref10$style === undefined ? { color: "#f00" } : _ref10$style,
                    _ref10$particleSize = _ref10.particleSize,
                    particleSize = _ref10$particleSize === undefined ? 20 : _ref10$particleSize,
                    _ref10$position = _ref10.position,
                    position = _ref10$position === undefined ? new Vector() : _ref10$position,
                    _ref10$fromAngle = _ref10.fromAngle,
                    fromAngle = _ref10$fromAngle === undefined ? 0 : _ref10$fromAngle,
                    _ref10$toAngle = _ref10.toAngle,
                    toAngle = _ref10$toAngle === undefined ? Math.PI * 2 : _ref10$toAngle;

                this.particles = this.particles.concat(Utils.range(size, function () {
                    return new Circle({
                        style: style, position: position.copy(), radius: particleSize,
                        velocity: Vector.randomPolar(1, fromAngle, toAngle).scale(Utils.random(magnitude / 2, magnitude))
                    });
                }));
            }
        }, {
            key: "alive",
            value: function alive() {
                return this.particles.length > 0;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                renderer.push({ rotation: this.rotation });
                this.particles.forEach(function (particle) {
                    return particle.render(renderer);
                });
                renderer.pop();
            }
        }, {
            key: "update",
            value: function update(dt) {
                this.particles = this.particles.filter(function (particle) {
                    particle.radius /= Utils.random(1.05, 1.1);
                    particle.update(dt);
                    return particle.radius > 0.5;
                });
            }
        }]);

        return Explosion;
    }(GameObject);
});

App.define(function (_ref11) {
    var Explosion = _ref11.Explosion;
    return function (_Explosion) {
        _inherits(Fountain, _Explosion);

        function Fountain(config) {
            _classCallCheck(this, Fountain);

            return _possibleConstructorReturn(this, (Fountain.__proto__ || Object.getPrototypeOf(Fountain)).call(this, config));
        }

        _createClass(Fountain, [{
            key: "update",
            value: function update(dt) {
                this.fire();
                _get(Fountain.prototype.__proto__ || Object.getPrototypeOf(Fountain.prototype), "update", this).call(this, dt);
            }
        }]);

        return Fountain;
    }(Explosion);
});

App.define(function (_ref12) {
    var GameObject = _ref12.GameObject,
        Explosion = _ref12.Explosion;
    return function (_GameObject6) {
        _inherits(Polygon, _GameObject6);

        function Polygon() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Polygon);

            var _this7 = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, config));

            _this7.points = config.points || [];
            _this7.emissions = [];
            return _this7;
        }

        _createClass(Polygon, [{
            key: "render",
            value: function render(renderer) {
                renderer.push({ translation: this.position, rotation: this.rotation });
                renderer.polygon(this.points, this.size, this.style);
                renderer.pop();
            }
        }]);

        return Polygon;
    }(GameObject);
});

App.define(function () {
    return function () {
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
            key: "update",
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
            key: "render",
            value: function render(renderer) {
                this.items.forEach(function (item) {
                    return item.render(renderer);
                });
            }
        }, {
            key: "alive",
            value: function alive() {
                return true;
            }
        }]);

        return Spawner;
    }();
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
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
                    scale = _ref$scale === undefined ? new Vector(1, 1) : _ref$scale,
                    _ref$rotation = _ref.rotation,
                    rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
                    _ref$translation = _ref.translation,
                    translation = _ref$translation === undefined ? new Vector() : _ref$translation;

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
                var color = _ref3.color;

                this.ctx.fillStyle = color;
                this.ctx.fillRect(position.x - size.width / 2, position.y - size.height / 2, size.width, size.height);
            }
        }, {
            key: "clear",
            value: function clear() {
                this.ctx.fillStyle = "rgba(0,0,0,1)";
                this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
            }
        }, {
            key: "polygon",
            value: function polygon(points) {
                var _this = this;

                var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var _ref4 = arguments[2];
                var color = _ref4.color;

                if (points.length > 2) {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = color;
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
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
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
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.defineSingle(function () {
    return function () {
        function Utils() {
            _classCallCheck(this, Utils);
        }

        _createClass(Utils, [{
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
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils;
    return function () {
        function Vector() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this, Vector);

            this.x = x;
            this.y = y;
        }

        _createClass(Vector, [{
            key: "set",
            value: function set(x, y) {
                this.x = x;
                this.y = y;

                return this;
            }
        }, {
            key: "length",
            value: function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }
        }, {
            key: "add",
            value: function add(vector) {
                this.x += vector.x;
                this.y += vector.y;

                return this;
            }
        }, {
            key: "noramlize",
            value: function noramlize() {
                var length = this.length();
                if (length !== 0) {
                    this.x /= length;
                    this.y /= length;
                }

                return this;
            }
        }, {
            key: "rotate",
            value: function rotate(angle) {
                var _ref2 = [Math.sin(angle), Math.cos(angle)],
                    sin = _ref2[0],
                    cos = _ref2[1];

                var tmpX = this.x;
                this.x = this.x * cos - this.y * sin;
                this.y = tmpX * sin + this.y * cos;

                return this;
            }
        }, {
            key: "angle",
            value: function angle() {
                return Math.atan2(this.y, this.x);
            }
        }, {
            key: "scaleTo",
            value: function scaleTo() {
                var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

                return this.noramlize().scale(size);
            }
        }, {
            key: "subtract",
            value: function subtract(vector) {
                this.x -= vector.x;
                this.y -= vector.y;

                return this;
            }
        }, {
            key: "distance",
            value: function distance(vector) {
                var dx = this.x - vector.x;
                var dy = this.y - vector.y;

                return Math.sqrt(dx * dx + dy * dy);
            }
        }, {
            key: "reverse",
            value: function reverse() {
                this.x = -this.x;
                this.y = -this.y;

                return this;
            }
        }, {
            key: "scale",
            value: function scale(size) {
                this.x *= size;
                this.y *= size;

                return this;
            }
        }, {
            key: "copy",
            value: function copy() {
                return new Vector(this.x, this.y);
            }
        }, {
            key: "vectorScale",
            value: function vectorScale(vector) {
                this.x *= vector.x;
                this.y *= vector.y;

                return this;
            }
        }], [{
            key: "random",
            value: function random(minx, maxx, miny, maxy) {
                return new Vector(Utils.random(minx, maxx), Utils.random(miny, maxy));
            }
        }, {
            key: "polar",
            value: function polar() {
                var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

                return new Vector(Math.cos(angle) * length, Math.sin(angle) * length);
            }
        }, {
            key: "randomPolar",
            value: function randomPolar() {
                var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var minAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var maxAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.PI * 2;

                return Vector.polar(Utils.random(minAngle, maxAngle), length);
            }
        }]);

        return Vector;
    }();
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils,
        Circle = _ref.Circle;
    return function () {
        function Environment(camera) {
            _classCallCheck(this, Environment);

            this.camera = camera;
            this.width = width;
            this.height = height;

            this.container = {
                frontBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(220, 0, 100, 0.6)' }, size: 9 }), depth: 1.1 },
                frontSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(0, 200, 100, 0.6)' }, size: 7 }), depth: 1.2 },
                backBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(240, 120, 0, 0.6)' }, size: 5 }), depth: 1.4 },
                backSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(50, 100, 200, 0.6)' }, size: 3 }), depth: 1.8 }
            };
        }

        _createClass(Environment, [{
            key: 'circleGenerator',
            value: function circleGenerator(count) {
                var _this = this;

                var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    size = _ref2.size,
                    style = _ref2.style;

                return Utils.range(count, function () {
                    return new Circle({
                        position: Vector.random(-width / 2, width / 2, -_this.height / 2, _this.height / 2),
                        radius: Utils.random(1, size),
                        style: style
                    });
                });
            }
        }, {
            key: 'outOfBounds',
            value: function outOfBounds() {
                var _this2 = this;

                var _loop = function _loop(name) {
                    var layer = _this2.container[name];
                    layer.elements.forEach(function (element) {
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
                };

                for (var name in this.container) {
                    _loop(name);
                }
            }
        }]);

        return Environment;
    }();
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Vector = _ref.Vector;
    return function () {
        function IO(width, height) {
            _classCallCheck(this, IO);

            this.width = width;
            this.height = height;
            this.mouse = new Vector(0, 300);

            this.keyHandlers = {};
            this.keyStates = {};

            this.bindEvents();
        }

        _createClass(IO, [{
            key: 'callHandlers',
            value: function callHandlers() {
                for (var name in this.keyHandlers) {
                    if (this.keyStates[name]) {
                        this.keyHandlers[name].handeler();
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
            value: function onKey(key, handeler, reverseHandler) {
                this.keyHandlers[key] = { handeler: handeler, reverseHandler: reverseHandler };
                return this;
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
                window.addEventListener('touchmove', function (_ref3) {
                    var changedTouches = _ref3.changedTouches;

                    _this.mouse.set(changedTouches[0].pageX - _this.width / 2, -changedTouches[0].pageY + _this.height / 2);
                });

                window.addEventListener('mousedown', function (_ref4) {
                    var x = _ref4.x,
                        y = _ref4.y;
                    return _this.mouseDown = true;
                });
                window.addEventListener('mouseup', function (_ref5) {
                    var x = _ref5.x,
                        y = _ref5.y;
                    return _this.mouseDown = false;
                });

                window.addEventListener('keydown', function (_ref6) {
                    var key = _ref6.key;
                    return _this.keyStates[key] = true;
                });
                window.addEventListener('keyup', function (_ref7) {
                    var key = _ref7.key;
                    return _this.keyStates[key] = false;
                });
            }
        }]);

        return IO;
    }();
});
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

window.onresize = function () {
    // init();
};

var animationFrame = undefined;
// function init() {

var _ref = function () {
    var canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    var ctx = canvas.getContext('2d');
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1, -1);

    return [ctx, innerWidth, innerHeight];
}(),
    _ref2 = _slicedToArray(_ref, 3),
    ctx = _ref2[0],
    width = _ref2[1],
    height = _ref2[2];

var _App$load$get = App.load().get(),
    Utils = _App$load$get.Utils,
    IO = _App$load$get.IO,
    Vector = _App$load$get.Vector,
    CanvasRenderer = _App$load$get.CanvasRenderer,
    Scene = _App$load$get.Scene,
    Engine = _App$load$get.Engine,
    SpringyVector = _App$load$get.SpringyVector,
    Parallax = _App$load$get.Parallax,
    Circle = _App$load$get.Circle,
    Player = _App$load$get.Player,
    AsteroidField = _App$load$get.AsteroidField,
    Environment = _App$load$get.Environment;

var io = new IO(width, height);
var renderer = new CanvasRenderer(ctx, width, height);
var scene = new Scene();
var engine = new Engine(renderer, scene);

var colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];
var player = new Player(colors);

var camera = new SpringyVector({
    position: new Vector(0, height / 2 - 150),
    elasticity: 0.08,
    damping: 0.3,
    target: function target() {
        return player.position.copy().add(player.velocity.copy().scale(3));
    }
});

var parallax = new Parallax(camera.position);

var enviroment = new Environment(camera, width, height);
for (var name in enviroment.container) {
    parallax.addLayer({
        depth: enviroment.container[name].depth,
        objects: enviroment.container[name].elements
    });
}

parallax.addLayer({ objects: [player, new AsteroidField(player, colors, 10, Math.max(width, height))] });

scene.add(parallax).add(camera);

io.onMouse(function () {
    return player.speed = 5;
}, function () {
    return player.speed = 0;
});

var time = 0;
cancelAnimationFrame(animationFrame);
(function animation() {
    time++;
    engine.clear().render().update();
    io.callHandlers();
    enviroment.outOfBounds();

    parallax.zoom = 50 / (player.velocity.length() + 30);

    animationFrame = requestAnimationFrame(animation);
})();

// }
// init();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

App.define(function (_ref) {
    var Composite = _ref.Composite,
        Fountain = _ref.Fountain,
        Polygon = _ref.Polygon,
        Utils = _ref.Utils,
        Spawner = _ref.Spawner,
        Explosion = _ref.Explosion;
    return function (_Composite) {
        _inherits(Player, _Composite);

        function Player(colors) {
            _classCallCheck(this, Player);

            var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

            _this.fuel = new Fountain({ particleSize: 6, style: { opacity: 0.25 },
                fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
            _this.ship = new Polygon({ points: [new Vector(-6, 0), new Vector(0, -3), new Vector(6, 0), new Vector(0, 20)] });
            _this.speed = 0;
            _this.color = Utils.randomArray(colors);

            _this.add({ object: _this.fuel });
            _this.add({ object: _this.ship });

            _this.explosions = [];
            _this.explosionSpawner = new Spawner(function () {
                return _this.explosions.length > 0;
            }, function () {
                return _this.explosions.splice(0, _this.explosions.length);
            });
            return _this;
        }

        _createClass(Player, [{
            key: "kill",
            value: function kill() {
                this.explosions.push(new Explosion({
                    position: this.position, size: 30, particleSize: 20,
                    style: { color: this.color }, magnitude: 5
                }).fire());
                this.size = 0;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                this.explosionSpawner.render(renderer);
                _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), "render", this).call(this, renderer);
            }
        }, {
            key: "update",
            value: function update(ctx) {
                _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), "update", this).call(this, ctx);
                this.explosionSpawner.update(ctx);

                this.ship.style.color = this.color;
                this.fuel.style.color = this.color;

                var forwardAngle = io.mouse.angle() + Math.PI;
                this.ship.rotation = forwardAngle + Math.PI / 2;
                this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
                this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
                this.fuel.config.magnitude = this.speed / 1.5;
                this.fuel.config.size = this.speed / 2;

                this.velocity.add(io.mouse.copy().scale(1 / 10000 * this.speed));
                if (this.velocity.length() > 4) {
                    this.velocity.scaleTo(4);
                }
            }
        }]);

        return Player;
    }(Composite);
});
