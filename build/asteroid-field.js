"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils,
        Spawner = _ref.Spawner,
        Polygon = _ref.Polygon,
        Explosion = _ref.Explosion,
        Config = _ref.Config;
    return function () {
        function AsteroidField(player, radius) {
            var _this = this;

            _classCallCheck(this, AsteroidField);

            var numAsteroids = 15;
            this.alive = function () {
                return true;
            };
            this.radius = radius;
            this.player = player;
            this.asteroids = Utils.range(numAsteroids, function () {
                var size = Utils.random(10, 40);
                return new Polygon({
                    position: _this.randomAsteroidPosition(),
                    style: { color: _this.randomAsteroidColor() },
                    velocity: Vector.random(-0.5, 0.5, -0.5, 0.5), size: size,
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
                var segments = 5;
                return Utils.range(segments, function (segment) {
                    return Vector.polar(segment / segments * Math.PI * 2, Utils.random(0.5, 1));
                });
            }
        }, {
            key: "randomAsteroidColor",
            value: function randomAsteroidColor() {
                return Utils.randomArray(Config.colors);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3Rlcm9pZC1maWVsZC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJVdGlscyIsIlNwYXduZXIiLCJQb2x5Z29uIiwiRXhwbG9zaW9uIiwiQ29uZmlnIiwicGxheWVyIiwicmFkaXVzIiwibnVtQXN0ZXJvaWRzIiwiYWxpdmUiLCJhc3Rlcm9pZHMiLCJyYW5nZSIsInNpemUiLCJyYW5kb20iLCJwb3NpdGlvbiIsInJhbmRvbUFzdGVyb2lkUG9zaXRpb24iLCJzdHlsZSIsImNvbG9yIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInZlbG9jaXR5IiwiVmVjdG9yIiwicG9pbnRzIiwicmFuZG9tQXN0ZXJvaWRTaGFwZSIsImV4cGxvc2lvbnMiLCJleHBsb3Npb25TcGF3bmVyIiwibGVuZ3RoIiwic3BsaWNlIiwiY29weSIsImFkZCIsInBvbGFyIiwiTWF0aCIsIlBJIiwic2VnbWVudHMiLCJzZWdtZW50IiwicmFuZG9tQXJyYXkiLCJjb2xvcnMiLCJjdHgiLCJwbGF5ZXJTcGVlZCIsImZvckVhY2giLCJhc3Rlcm9pZCIsInVwZGF0ZSIsImRpc3RhbmNlIiwia2lsbCIsInB1c2giLCJwYXJ0aWNsZVNpemUiLCJtYWduaXR1ZGUiLCJmaXJlIiwicmVuZGVyZXIiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxRQUFtQkMsT0FBbkIsUUFBbUJBLE9BQW5CO0FBQUEsUUFBNEJDLFNBQTVCLFFBQTRCQSxTQUE1QjtBQUFBLFFBQXVDQyxNQUF2QyxRQUF1Q0EsTUFBdkM7QUFBQTtBQUVQLCtCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QjtBQUFBOztBQUFBOztBQUN4QixnQkFBSUMsZUFBZSxFQUFuQjtBQUNBLGlCQUFLQyxLQUFMLEdBQWE7QUFBQSx1QkFBTSxJQUFOO0FBQUEsYUFBYjtBQUNB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M0IsSUFEYjtBQUUvQmdDLDhDQUFjTCxTQUFTM0IsSUFBVCxHQUFnQixHQUZDLEVBRUlJLE9BQU8sRUFBRUMsT0FBT3NCLFNBQVN2QixLQUFULENBQWVDLEtBQXhCLEVBRlg7QUFHL0I0QiwyQ0FBVyxDQUFDTixTQUFTM0IsSUFBVCxHQUFnQnlCLFdBQWhCLEdBQThCRSxTQUFTcEIsUUFBVCxDQUFrQk0sTUFBbEIsRUFBL0IsSUFBNkQ7QUFIekMsNkJBQWQsRUFJbEJxQixJQUprQixFQUFyQjtBQUtIO0FBQ0o7QUFDRCx3QkFBSSxDQUFDTCxXQUFXRixTQUFTM0IsSUFBcEIsSUFBNEI2QixXQUFXLE9BQUtsQyxNQUFMLEdBQWMsQ0FBZCxHQUFrQixFQUExRCxLQUFpRSxPQUFLRCxNQUFMLENBQVlNLElBQVosR0FBbUIsQ0FBeEYsRUFBMkY7QUFDdkYyQixpQ0FBU3pCLFFBQVQsR0FBb0IsT0FBS0Msc0JBQUwsRUFBcEI7QUFDQXdCLGlDQUFTbEIsTUFBVCxHQUFrQixPQUFLQyxtQkFBTCxFQUFsQjtBQUNBaUIsaUNBQVN2QixLQUFULENBQWVDLEtBQWYsR0FBdUIsT0FBS0MsbUJBQUwsRUFBdkI7QUFDSDtBQUNKLGlCQXRCRDs7QUF3QkEscUJBQUtNLGdCQUFMLENBQXNCZ0IsTUFBdEIsQ0FBNkJKLEdBQTdCO0FBQ0g7QUEvRE07QUFBQTtBQUFBLG1DQWlFQVcsUUFqRUEsRUFpRVU7QUFDYixxQkFBS3JDLFNBQUwsQ0FBZTRCLE9BQWYsQ0FBdUI7QUFBQSwyQkFBWUMsU0FBU1MsTUFBVCxDQUFnQkQsUUFBaEIsQ0FBWjtBQUFBLGlCQUF2QjtBQUNBLHFCQUFLdkIsZ0JBQUwsQ0FBc0J3QixNQUF0QixDQUE2QkQsUUFBN0I7QUFDSDtBQXBFTTs7QUFBQTtBQUFBO0FBQUEsQ0FBWCIsImZpbGUiOiJhc3Rlcm9pZC1maWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkFwcC5kZWZpbmUoKHsgVXRpbHMsIFNwYXduZXIsIFBvbHlnb24sIEV4cGxvc2lvbiwgQ29uZmlnIH0pID0+IGNsYXNzIEFzdGVyb2lkRmllbGQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgcmFkaXVzKSB7XHJcbiAgICAgICAgbGV0IG51bUFzdGVyb2lkcyA9IDE1O1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSAoKSA9PiB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzID0gVXRpbHMucmFuZ2UobnVtQXN0ZXJvaWRzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gVXRpbHMucmFuZG9tKDEwLCA0MCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5yYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCkgfSxcclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBWZWN0b3IucmFuZG9tKC0wLjUsIDAuNSwgLTAuNSwgMC41KSwgc2l6ZSxcclxuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20oMCwgTWF0aC5QSSAqIDIpLCB0aGlzLnJhZGl1cyAvIDIgKyAyMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkU2hhcGUoKSB7XHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gNTtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2Uoc2VnbWVudHMsIHNlZ21lbnQgPT5cclxuICAgICAgICAgICAgVmVjdG9yLnBvbGFyKChzZWdtZW50IC8gc2VnbWVudHMpICogTWF0aC5QSSAqIDIsIFV0aWxzLnJhbmRvbSgwLjUsIDEpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZG9tQXJyYXkoQ29uZmlnLmNvbG9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGN0eCkge1xyXG4gICAgICAgIGxldCBwbGF5ZXJTcGVlZCA9IHRoaXMucGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4ge1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC51cGRhdGUoY3R4KTtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5wbGF5ZXIucG9zaXRpb24uZGlzdGFuY2UoYXN0ZXJvaWQucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbG9yICE9IGFzdGVyb2lkLnN0eWxlLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFzdGVyb2lkLnBvc2l0aW9uLCBzaXplOiBhc3Rlcm9pZC5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVNpemU6IGFzdGVyb2lkLnNpemUgLyAxLjUsIHN0eWxlOiB7IGNvbG9yOiBhc3Rlcm9pZC5zdHlsZS5jb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduaXR1ZGU6IChhc3Rlcm9pZC5zaXplICsgcGxheWVyU3BlZWQgKyBhc3Rlcm9pZC52ZWxvY2l0eS5sZW5ndGgoKSkgLyA1XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlyZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgYXN0ZXJvaWQuc2l6ZSB8fCBkaXN0YW5jZSA+IHRoaXMucmFkaXVzIC8gMiArIDUwKSAmJiB0aGlzLnBsYXllci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9zaXRpb24gPSB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvaW50cyA9IHRoaXMucmFuZG9tQXN0ZXJvaWRTaGFwZSgpO1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQuc3R5bGUuY29sb3IgPSB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IGFzdGVyb2lkLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==