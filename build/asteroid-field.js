"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
//# sourceMappingURL=asteroid-field.js.map