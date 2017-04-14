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
                this.fuel.config.size = this.speed / 3;

                this.velocity.add(io.mouse.copy().scale(1 / 10000 * this.speed));
                if (this.velocity.length() > 4) {
                    this.velocity.scaleTo(4);
                }
            }
        }]);

        return Player;
    }(Composite);
});
//# sourceMappingURL=player.js.map