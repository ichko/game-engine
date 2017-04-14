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
        Utils = _ref9.Utils,
        InstancePool = _ref9.InstancePool;
    return function (_GameObject5) {
        _inherits(Explosion, _GameObject5);

        function Explosion(config) {
            _classCallCheck(this, Explosion);

            var _this5 = _possibleConstructorReturn(this, (Explosion.__proto__ || Object.getPrototypeOf(Explosion)).call(this, config));

            _this5.particles = [];
            _this5.position = [];
            _this5.config = config;
            _this5.circlesPool = new InstancePool(Circle);
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
                var _this6 = this;

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
                    return _this6.circlesPool.new({
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
                var _this7 = this;

                this.particles = this.particles.filter(function (particle) {
                    particle.radius /= Utils.random(1.05, 1.1);
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

            var _this9 = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, config));

            _this9.points = config.points || [];
            _this9.emissions = [];
            return _this9;
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
//# sourceMappingURL=primitives.js.map