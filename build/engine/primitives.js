"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

App.define(function (_ref) {
    var GameObject = _ref.GameObject;
    return function (_GameObject) {
        _inherits(Circle, _GameObject);

        function Circle() {
            _classCallCheck(this, Circle);

            return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
        }

        _createClass(Circle, [{
            key: "set",
            value: function set() {
                var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), "set", this).call(this, config);
                this.radius = config.radius || 5;
            }
        }, {
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
                        style: style, position: position.copy(), radius: particleSize, velocityDamping: 0.97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvcHJpbWl0aXZlcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJHYW1lT2JqZWN0IiwiY29uZmlnIiwicmFkaXVzIiwicmVuZGVyZXIiLCJjaXJjbGUiLCJwb3NpdGlvbiIsInN0eWxlIiwic2l6ZSIsInJlY3RhbmdsZSIsIml0ZW1zIiwib2Zmc2V0IiwiVmVjdG9yIiwib2JqZWN0IiwicHVzaCIsInRyYW5zbGF0aW9uIiwic2NhbGUiLCJmb3JFYWNoIiwicmVuZGVyIiwicG9wIiwiY3R4IiwidXBkYXRlIiwiZGFtcGluZyIsImVsYXN0aWNpdHkiLCJ0YXJnZXQiLCJkYW1waW5nRm9yY2UiLCJ2ZWxvY2l0eSIsImNvcHkiLCJhY2NlbGVyYXRpb24iLCJzdWJ0cmFjdCIsImFkZCIsIkNpcmNsZSIsIlV0aWxzIiwiSW5zdGFuY2VQb29sIiwicGFydGljbGVzIiwiY2lyY2xlc1Bvb2wiLCJpbml0IiwibWFnbml0dWRlIiwiY29sb3IiLCJwYXJ0aWNsZVNpemUiLCJmcm9tQW5nbGUiLCJ0b0FuZ2xlIiwiTWF0aCIsIlBJIiwiY29uY2F0IiwicmFuZ2UiLCJuZXciLCJ2ZWxvY2l0eURhbXBpbmciLCJyYW5kb21Qb2xhciIsInJhbmRvbSIsImxlbmd0aCIsInJvdGF0aW9uIiwicGFydGljbGUiLCJkdCIsImZpbHRlciIsImFsaXZlIiwicmVsZWFzZSIsIkV4cGxvc2lvbiIsImZpcmUiLCJwb2ludHMiLCJlbWlzc2lvbnMiLCJwb2x5Z29uIiwiY29uZGl0aW9uIiwiY3JlYXRvciIsImNvbnRleHQiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsa0NBRVU7QUFBQSxvQkFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUNiLG9IQUFVQSxNQUFWO0FBQ0EscUJBQUtDLE1BQUwsR0FBY0QsT0FBT0MsTUFBUCxJQUFpQixDQUEvQjtBQUNIO0FBTE07QUFBQTtBQUFBLG1DQU9BQyxRQVBBLEVBT1c7QUFDZEEseUJBQVNDLE1BQVQsQ0FBZ0IsS0FBS0MsUUFBckIsRUFBK0IsS0FBS0gsTUFBcEMsRUFBNEMsS0FBS0ksS0FBakQ7QUFDSDtBQVRNOztBQUFBO0FBQUEsTUFBeUNOLFVBQXpDO0FBQUEsQ0FBWDs7QUFhQUYsSUFBSUMsTUFBSixDQUFXO0FBQUEsUUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUE7QUFBQTs7QUFFUCw2QkFBeUI7QUFBQSxnQkFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUFBLCtIQUNmQSxNQURlOztBQUVyQixtQkFBS00sSUFBTCxHQUFZTixPQUFPTSxJQUFuQjtBQUZxQjtBQUd4Qjs7QUFMTTtBQUFBO0FBQUEsbUNBT0FKLFFBUEEsRUFPVTtBQUNiQSx5QkFBU0ssU0FBVCxDQUFtQixLQUFLSCxRQUF4QixFQUFrQyxLQUFLRSxJQUF2QyxFQUE2QyxLQUFLRCxLQUFsRDtBQUNIO0FBVE07O0FBQUE7QUFBQSxNQUE0Q04sVUFBNUM7QUFBQSxDQUFYOztBQWFBRixJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQTtBQUFBOztBQUVQLDZCQUF5QjtBQUFBLGdCQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsK0hBQ2ZBLE1BRGU7O0FBRXJCLG1CQUFLUSxLQUFMLEdBQWEsRUFBYjtBQUZxQjtBQUd4Qjs7QUFMTTtBQUFBO0FBQUEsdUNBT2dDO0FBQUEseUNBQWpDQyxNQUFpQztBQUFBLG9CQUFqQ0EsTUFBaUMsZ0NBQXhCLElBQUlDLE1BQUosRUFBd0I7QUFBQSxvQkFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUNuQyxxQkFBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLEVBQUVELGNBQUYsRUFBVUYsY0FBVixFQUFoQjtBQUNBLHVCQUFPLElBQVA7QUFDSDtBQVZNO0FBQUE7QUFBQSxtQ0FZQVAsUUFaQSxFQVlVO0FBQ2JBLHlCQUFTVSxJQUFULENBQWM7QUFDVkMsaUNBQWEsS0FBS1QsUUFEUjtBQUVWVSwyQkFBTyxJQUFJSixNQUFKLENBQVcsS0FBS0osSUFBaEIsRUFBc0IsS0FBS0EsSUFBM0I7QUFGRyxpQkFBZDtBQUlBLHFCQUFLRSxLQUFMLENBQVdPLE9BQVgsQ0FBbUIsaUJBQXdCO0FBQUEsd0JBQXJCSixNQUFxQixTQUFyQkEsTUFBcUI7QUFBQSx3QkFBYkYsTUFBYSxTQUFiQSxNQUFhOztBQUN2Q1AsNkJBQVNVLElBQVQsQ0FBYyxFQUFFQyxhQUFhSixNQUFmLEVBQWQ7QUFDQUUsMkJBQU9LLE1BQVAsQ0FBY2QsUUFBZDtBQUNBQSw2QkFBU2UsR0FBVDtBQUNILGlCQUpEO0FBS0FmLHlCQUFTZSxHQUFUO0FBQ0g7QUF2Qk07QUFBQTtBQUFBLG1DQXlCQUMsR0F6QkEsRUF5Qks7QUFDUiw2SEFBYUEsR0FBYjtBQUNBLHFCQUFLVixLQUFMLENBQVdPLE9BQVgsQ0FBbUI7QUFBQSx3QkFBR0osTUFBSCxTQUFHQSxNQUFIO0FBQUEsMkJBQWdCQSxPQUFPUSxNQUFQLENBQWNELEdBQWQsQ0FBaEI7QUFBQSxpQkFBbkI7QUFDSDtBQTVCTTs7QUFBQTtBQUFBLE1BQTRDbkIsVUFBNUM7QUFBQSxDQUFYOztBQWdDQUYsSUFBSUMsTUFBSixDQUFXO0FBQUEsUUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUE7QUFBQTs7QUFFUCxpQ0FLUTtBQUFBLDRGQUFKLEVBQUk7QUFBQSxzQ0FKSnFCLE9BSUk7QUFBQSxnQkFKSkEsT0FJSSxpQ0FKTSxHQUlOO0FBQUEseUNBSEpDLFVBR0k7QUFBQSxnQkFISkEsVUFHSSxvQ0FIUyxHQUdUO0FBQUEscUNBRkpDLE1BRUk7QUFBQSxnQkFGSkEsTUFFSSxnQ0FGSztBQUFBLHVCQUFNLElBQUlaLE1BQUosRUFBTjtBQUFBLGFBRUw7QUFBQSx1Q0FESk4sUUFDSTtBQUFBLGdCQURKQSxRQUNJLGtDQURPLElBQUlNLE1BQUosRUFDUDs7QUFBQTs7QUFBQSx1SUFDRSxFQUFFTixrQkFBRixFQURGOztBQUVKLG1CQUFLa0IsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsbUJBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsbUJBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUpJO0FBS1A7O0FBWk07QUFBQTtBQUFBLDZDQWNVO0FBQ2Isb0JBQUlHLGVBQWUsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLEdBQXFCWCxLQUFyQixDQUEyQixLQUFLTSxPQUFoQyxDQUFuQjtBQUNBLG9CQUFJTSxlQUFlLEtBQUtKLE1BQUwsR0FDZEcsSUFEYyxHQUVkRSxRQUZjLENBRUwsS0FBS3ZCLFFBRkEsRUFHZFUsS0FIYyxDQUdSLEtBQUtPLFVBSEcsRUFJZE0sUUFKYyxDQUlMSixZQUpLLENBQW5COztBQU1BLHFCQUFLQyxRQUFMLENBQWNJLEdBQWQsQ0FBa0JGLFlBQWxCO0FBQ0g7QUF2Qk07O0FBQUE7QUFBQSxNQUFnRDNCLFVBQWhEO0FBQUEsQ0FBWDs7QUEyQkFGLElBQUlDLE1BQUosQ0FBVztBQUFBLFFBQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFFBQWU4QixNQUFmLFNBQWVBLE1BQWY7QUFBQSxRQUF1QkMsS0FBdkIsU0FBdUJBLEtBQXZCO0FBQUEsUUFBOEJDLFlBQTlCLFNBQThCQSxZQUE5QjtBQUFBO0FBQUE7O0FBRVAsMkJBQVkvQixNQUFaLEVBQW9CO0FBQUE7O0FBQUEsK0hBQ1ZBLE1BRFU7O0FBRWhCLG1CQUFLZ0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLG1CQUFLNUIsUUFBTCxHQUFnQixFQUFoQjtBQUNBLG1CQUFLSixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxtQkFBS2lDLFdBQUwsR0FBbUIsSUFBSUYsWUFBSixDQUFpQkYsTUFBakIsQ0FBbkI7QUFMZ0I7QUFNbkI7O0FBUk07QUFBQTtBQUFBLG1DQVVBO0FBQ0gscUJBQUtLLElBQUwsQ0FBVSxLQUFLbEMsTUFBZjtBQUNBLHVCQUFPLElBQVA7QUFDSDtBQWJNO0FBQUE7QUFBQSxtQ0F1QkM7QUFBQTs7QUFBQSxpR0FBSixFQUFJO0FBQUEseUNBUEpNLElBT0k7QUFBQSxvQkFQSkEsSUFPSSwrQkFQRyxDQU9IO0FBQUEsOENBTko2QixTQU1JO0FBQUEsb0JBTkpBLFNBTUksb0NBTlEsRUFNUjtBQUFBLDBDQUxKOUIsS0FLSTtBQUFBLG9CQUxKQSxLQUtJLGdDQUxJLEVBQUUrQixPQUFPLE1BQVQsRUFLSjtBQUFBLGlEQUpKQyxZQUlJO0FBQUEsb0JBSkpBLFlBSUksdUNBSlcsRUFJWDtBQUFBLDZDQUhKakMsUUFHSTtBQUFBLG9CQUhKQSxRQUdJLG1DQUhPLElBQUlNLE1BQUosRUFHUDtBQUFBLDhDQUZKNEIsU0FFSTtBQUFBLG9CQUZKQSxTQUVJLG9DQUZRLENBRVI7QUFBQSw0Q0FESkMsT0FDSTtBQUFBLG9CQURKQSxPQUNJLGtDQURNQyxLQUFLQyxFQUFMLEdBQVUsQ0FDaEI7O0FBQ0oscUJBQUtULFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlVSxNQUFmLENBQXNCWixNQUFNYSxLQUFOLENBQVlyQyxJQUFaLEVBQWtCO0FBQUEsMkJBQU0sT0FBSzJCLFdBQUwsQ0FBaUJXLEdBQWpCLENBQXFCO0FBQ2hGdkMsb0NBRGdGLEVBQ3pFRCxVQUFVQSxTQUFTcUIsSUFBVCxFQUQrRCxFQUM5Q3hCLFFBQVFvQyxZQURzQyxFQUN4QlEsaUJBQWlCLElBRE87QUFFaEZyQixrQ0FBVWQsT0FBT29DLFdBQVAsQ0FBbUIsQ0FBbkIsRUFBc0JSLFNBQXRCLEVBQWlDQyxPQUFqQyxFQUNMekIsS0FESyxDQUNDZ0IsTUFBTWlCLE1BQU4sQ0FBYVosWUFBWSxDQUF6QixFQUE0QkEsU0FBNUIsQ0FERDtBQUZzRSxxQkFBckIsQ0FBTjtBQUFBLGlCQUFsQixDQUF0QixDQUFqQjtBQUtIO0FBN0JNO0FBQUE7QUFBQSxvQ0ErQkM7QUFDSix1QkFBTyxLQUFLSCxTQUFMLENBQWVnQixNQUFmLEdBQXdCLENBQS9CO0FBQ0g7QUFqQ007QUFBQTtBQUFBLG1DQW1DQTlDLFFBbkNBLEVBbUNVO0FBQ2JBLHlCQUFTVSxJQUFULENBQWMsRUFBRXFDLFVBQVUsS0FBS0EsUUFBakIsRUFBZDtBQUNBLHFCQUFLakIsU0FBTCxDQUFlakIsT0FBZixDQUF1QjtBQUFBLDJCQUFZbUMsU0FBU2xDLE1BQVQsQ0FBZ0JkLFFBQWhCLENBQVo7QUFBQSxpQkFBdkI7QUFDQUEseUJBQVNlLEdBQVQ7QUFDSDtBQXZDTTtBQUFBO0FBQUEsbUNBeUNBa0MsRUF6Q0EsRUF5Q0k7QUFBQTs7QUFDUCxxQkFBS25CLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlb0IsTUFBZixDQUFzQixvQkFBWTtBQUMvQ0YsNkJBQVNqRCxNQUFULElBQW1CNkIsTUFBTWlCLE1BQU4sQ0FBYSxJQUFiLEVBQW1CLEdBQW5CLENBQW5CO0FBQ0FHLDZCQUFTL0IsTUFBVCxDQUFnQmdDLEVBQWhCOztBQUVBLHdCQUFJRSxRQUFRSCxTQUFTakQsTUFBVCxHQUFrQixHQUE5QjtBQUNBLHdCQUFJLENBQUNvRCxLQUFMLEVBQVk7QUFDUiwrQkFBS3BCLFdBQUwsQ0FBaUJxQixPQUFqQixDQUF5QkosUUFBekI7QUFDSDs7QUFFRCwyQkFBT0csS0FBUDtBQUNILGlCQVZnQixDQUFqQjtBQVdIO0FBckRNOztBQUFBO0FBQUEsTUFBeUV0RCxVQUF6RTtBQUFBLENBQVg7O0FBeURBRixJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHeUQsU0FBSCxVQUFHQSxTQUFIO0FBQUE7QUFBQTs7QUFFUCwwQkFBWXZELE1BQVosRUFBb0I7QUFBQTs7QUFBQSx1SEFDVkEsTUFEVTtBQUVuQjs7QUFKTTtBQUFBO0FBQUEsbUNBTUFtRCxFQU5BLEVBTUk7QUFDUCxxQkFBS0ssSUFBTDtBQUNBLDJIQUFhTCxFQUFiO0FBQ0g7QUFUTTs7QUFBQTtBQUFBLE1BQTBDSSxTQUExQztBQUFBLENBQVg7O0FBYUExRCxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxVQUFILFVBQUdBLFVBQUg7QUFBQSxRQUFld0QsU0FBZixVQUFlQSxTQUFmO0FBQUE7QUFBQTs7QUFFUCwyQkFBeUI7QUFBQSxnQkFBYnZELE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSwySEFDZkEsTUFEZTs7QUFFckIsbUJBQUt5RCxNQUFMLEdBQWN6RCxPQUFPeUQsTUFBUCxJQUFpQixFQUEvQjtBQUNBLG1CQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBSHFCO0FBSXhCOztBQU5NO0FBQUE7QUFBQSxtQ0FRQXhELFFBUkEsRUFRVTtBQUNiQSx5QkFBU1UsSUFBVCxDQUFjLEVBQUVDLGFBQWEsS0FBS1QsUUFBcEIsRUFBOEI2QyxVQUFVLEtBQUtBLFFBQTdDLEVBQWQ7QUFDQS9DLHlCQUFTeUQsT0FBVCxDQUFpQixLQUFLRixNQUF0QixFQUE4QixLQUFLbkQsSUFBbkMsRUFBeUMsS0FBS0QsS0FBOUM7QUFDQUgseUJBQVNlLEdBQVQ7QUFDSDtBQVpNOztBQUFBO0FBQUEsTUFBcURsQixVQUFyRDtBQUFBLENBQVg7O0FBZ0JBRixJQUFJQyxNQUFKLENBQVc7QUFBQTtBQUVQLDJCQUE2RDtBQUFBLGdCQUFqRDhELFNBQWlELHVFQUFwQztBQUFBLHVCQUFNLEtBQU47QUFBQSxhQUFvQztBQUFBLGdCQUF0QkMsT0FBc0IsdUVBQVg7QUFBQSx1QkFBTSxFQUFOO0FBQUEsYUFBVzs7QUFBQTs7QUFDekQsaUJBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGlCQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGlCQUFLcEQsS0FBTCxHQUFhLEVBQWI7QUFDSDs7QUFOTTtBQUFBO0FBQUEsbUNBUUFzRCxPQVJBLEVBUVM7QUFDWixvQkFBSSxLQUFLRixTQUFMLENBQWUsS0FBS3BELEtBQUwsQ0FBV3dDLE1BQTFCLENBQUosRUFBdUM7QUFBQTs7QUFDbkMsbUNBQUt4QyxLQUFMLEVBQVdJLElBQVgsa0NBQW1CLEtBQUtpRCxPQUFMLEVBQW5CO0FBQ0g7O0FBRUQscUJBQUtyRCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXNEMsTUFBWCxDQUFrQixnQkFBUTtBQUNuQ1cseUJBQUs1QyxNQUFMLENBQVkyQyxPQUFaO0FBQ0EsMkJBQU9DLEtBQUtWLEtBQUwsRUFBUDtBQUNILGlCQUhZLENBQWI7QUFJSDtBQWpCTTtBQUFBO0FBQUEsbUNBbUJBbkQsUUFuQkEsRUFtQlU7QUFDYixxQkFBS00sS0FBTCxDQUFXTyxPQUFYLENBQW1CO0FBQUEsMkJBQVFnRCxLQUFLL0MsTUFBTCxDQUFZZCxRQUFaLENBQVI7QUFBQSxpQkFBbkI7QUFDSDtBQXJCTTtBQUFBO0FBQUEsb0NBdUJDO0FBQ0osdUJBQU8sSUFBUDtBQUNIO0FBekJNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6InByaW1pdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IEdhbWVPYmplY3QgfSkgPT4gY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgc2V0KGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2V0KGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjb25maWcucmFkaXVzIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSAge1xyXG4gICAgICAgIHJlbmRlcmVyLmNpcmNsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbkFwcC5kZWZpbmUoKHsgR2FtZU9iamVjdCB9KSA9PiBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgcmVuZGVyZXIucmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbkFwcC5kZWZpbmUoKHsgR2FtZU9iamVjdCB9KSA9PiBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh7IG9mZnNldCA9IG5ldyBWZWN0b3IoKSwgb2JqZWN0IH0pIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goeyBvYmplY3QsIG9mZnNldCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QsIG9mZnNldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnB1c2goeyB0cmFuc2xhdGlvbjogb2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICBvYmplY3QucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGN0eCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShjdHgpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBvYmplY3QgfSkgPT4gb2JqZWN0LnVwZGF0ZShjdHgpKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuQXBwLmRlZmluZSgoeyBHYW1lT2JqZWN0IH0pID0+IGNsYXNzIFNwcmluZ3lWZWN0b3IgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGFtcGluZyA9IDAuMSxcclxuICAgICAgICBlbGFzdGljaXR5ID0gMC4xLFxyXG4gICAgICAgIHRhcmdldCA9ICgpID0+IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmVsYXN0aWNpdHkgPSBlbGFzdGljaXR5O1xyXG4gICAgICAgIHRoaXMuZGFtcGluZyA9IGRhbXBpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgbGV0IGRhbXBpbmdGb3JjZSA9IHRoaXMudmVsb2NpdHkuY29weSgpLnNjYWxlKHRoaXMuZGFtcGluZyk7XHJcbiAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgICAgICAgLmNvcHkoKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QodGhpcy5wb3NpdGlvbilcclxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZWxhc3RpY2l0eSlcclxuICAgICAgICAgICAgLnN1YnRyYWN0KGRhbXBpbmdGb3JjZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGFjY2VsZXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbkFwcC5kZWZpbmUoKHsgR2FtZU9iamVjdCwgQ2lyY2xlLCBVdGlscywgSW5zdGFuY2VQb29sIH0pID0+IGNsYXNzIEV4cGxvc2lvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzUG9vbCA9IG5ldyBJbnN0YW5jZVBvb2woQ2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCh7XHJcbiAgICAgICAgc2l6ZSA9IDIsXHJcbiAgICAgICAgbWFnbml0dWRlID0gMTAsXHJcbiAgICAgICAgc3R5bGUgPSB7IGNvbG9yOiBcIiNmMDBcIiB9LFxyXG4gICAgICAgIHBhcnRpY2xlU2l6ZSA9IDIwLFxyXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFZlY3RvcigpLFxyXG4gICAgICAgIGZyb21BbmdsZSA9IDAsXHJcbiAgICAgICAgdG9BbmdsZSA9IE1hdGguUEkgKiAyLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5jb25jYXQoVXRpbHMucmFuZ2Uoc2l6ZSwgKCkgPT4gdGhpcy5jaXJjbGVzUG9vbC5uZXcoe1xyXG4gICAgICAgICAgICBzdHlsZSwgcG9zaXRpb246IHBvc2l0aW9uLmNvcHkoKSwgcmFkaXVzOiBwYXJ0aWNsZVNpemUsIHZlbG9jaXR5RGFtcGluZzogMC45NyxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb21Qb2xhcigxLCBmcm9tQW5nbGUsIHRvQW5nbGUpXHJcbiAgICAgICAgICAgICAgICAuc2NhbGUoVXRpbHMucmFuZG9tKG1hZ25pdHVkZSAvIDIsIG1hZ25pdHVkZSkpXHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgcm90YXRpb246IHRoaXMucm90YXRpb24gfSlcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUucmFkaXVzIC89IFV0aWxzLnJhbmRvbSgxLjA1LCAxLjEpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoZHQpXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxpdmUgPSBwYXJ0aWNsZS5yYWRpdXMgPiAwLjU7XHJcbiAgICAgICAgICAgIGlmICghYWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlc1Bvb2wucmVsZWFzZShwYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbGl2ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuQXBwLmRlZmluZSgoeyBFeHBsb3Npb24gfSkgPT4gY2xhc3MgRm91bnRhaW4gZXh0ZW5kcyBFeHBsb3Npb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5maXJlKCk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuQXBwLmRlZmluZSgoeyBHYW1lT2JqZWN0LCBFeHBsb3Npb24gfSkgPT4gY2xhc3MgUG9seWdvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGNvbmZpZy5wb2ludHMgfHwgW107XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICByZW5kZXJlci5wdXNoKHsgdHJhbnNsYXRpb246IHRoaXMucG9zaXRpb24sIHJvdGF0aW9uOiB0aGlzLnJvdGF0aW9uIH0pO1xyXG4gICAgICAgIHJlbmRlcmVyLnBvbHlnb24odGhpcy5wb2ludHMsIHRoaXMuc2l6ZSwgdGhpcy5zdHlsZSk7XHJcbiAgICAgICAgcmVuZGVyZXIucG9wKCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbkFwcC5kZWZpbmUoKCkgPT4gY2xhc3MgU3Bhd25lciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uID0gKCgpID0+IGZhbHNlKSwgY3JlYXRvciA9ICgoKSA9PiBbXSkpIHtcclxuICAgICAgICB0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLnRoaXMuY3JlYXRvcigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbmRlcihyZW5kZXJlcikpOyBcclxuICAgIH1cclxuXHJcbiAgICBhbGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=