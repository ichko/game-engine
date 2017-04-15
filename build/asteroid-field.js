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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3Rlcm9pZC1maWVsZC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJVdGlscyIsIlNwYXduZXIiLCJQb2x5Z29uIiwiRXhwbG9zaW9uIiwicGxheWVyIiwiY29sb3JzIiwibnVtQXN0ZXJvaWRzIiwicmFkaXVzIiwiYWxpdmUiLCJhc3Rlcm9pZHMiLCJyYW5nZSIsInNpemUiLCJyYW5kb20iLCJwb3NpdGlvbiIsInJhbmRvbUFzdGVyb2lkUG9zaXRpb24iLCJzdHlsZSIsImNvbG9yIiwicmFuZG9tQXN0ZXJvaWRDb2xvciIsInZlbG9jaXR5IiwiVmVjdG9yIiwicG9pbnRzIiwicmFuZG9tQXN0ZXJvaWRTaGFwZSIsImV4cGxvc2lvbnMiLCJleHBsb3Npb25TcGF3bmVyIiwibGVuZ3RoIiwic3BsaWNlIiwiY29weSIsImFkZCIsInBvbGFyIiwiTWF0aCIsIlBJIiwic2VnbWVudHMiLCJzZWdtZW50IiwicmFuZG9tQXJyYXkiLCJjdHgiLCJwbGF5ZXJTcGVlZCIsImZvckVhY2giLCJhc3Rlcm9pZCIsInVwZGF0ZSIsImRpc3RhbmNlIiwia2lsbCIsInB1c2giLCJwYXJ0aWNsZVNpemUiLCJtYWduaXR1ZGUiLCJmaXJlIiwicmVuZGVyZXIiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxRQUFtQkMsT0FBbkIsUUFBbUJBLE9BQW5CO0FBQUEsUUFBNEJDLFNBQTVCLFFBQTRCQSxTQUE1QjtBQUFBO0FBRVAsK0JBQVlDLE1BQVosRUFBb0JDLE1BQXBCLEVBQTRCQyxZQUE1QixFQUEwQ0MsTUFBMUMsRUFBa0Q7QUFBQTs7QUFBQTs7QUFDOUMsaUJBQUtDLEtBQUwsR0FBYTtBQUFBLHVCQUFNLElBQU47QUFBQSxhQUFiO0FBQ0EsaUJBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLGlCQUFLSCxN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QWdCLEdBRHBCO0FBRS9CK0IsOENBQWNMLFNBQVMxQixJQUFULEdBQWdCLEdBRkMsRUFFSUksT0FBTyxFQUFFQyxPQUFPcUIsU0FBU3RCLEtBQVQsQ0FBZUMsS0FBeEIsRUFGWDtBQUcvQjJCLDJDQUFXLENBQUNOLFNBQVMxQixJQUFULEdBQWdCd0IsV0FBaEIsR0FBOEJFLFNBQVNuQixRQUFULENBQWtCTSxNQUFsQixFQUEvQixJQUE2RDtBQUh6Qyw2QkFBZCxFQUlsQm9CLElBSmtCLEVBQXJCO0FBS0g7QUFDSjtBQUNELHdCQUFJLENBQUNMLFdBQVdGLFNBQVMxQixJQUFwQixJQUE0QjRCLFdBQVcsT0FBS2hDLE1BQUwsR0FBYyxDQUFkLEdBQWtCLEVBQTFELEtBQWlFLE9BQUtILE1BQUwsQ0FBWU8sSUFBWixHQUFtQixDQUF4RixFQUEyRjtBQUN2RjBCLGlDQUFTeEIsUUFBVCxHQUFvQixPQUFLQyxzQkFBTCxFQUFwQjtBQUNBdUIsaUNBQVNqQixNQUFULEdBQWtCLE9BQUtDLG1CQUFMLEVBQWxCO0FBQ0FnQixpQ0FBU3RCLEtBQVQsQ0FBZUMsS0FBZixHQUF1QixPQUFLQyxtQkFBTCxFQUF2QjtBQUNIO0FBQ0osaUJBdEJEOztBQXdCQSxxQkFBS00sZ0JBQUwsQ0FBc0JlLE1BQXRCLENBQTZCSixHQUE3QjtBQUNIO0FBL0RNO0FBQUE7QUFBQSxtQ0FpRUFXLFFBakVBLEVBaUVVO0FBQ2IscUJBQUtwQyxTQUFMLENBQWUyQixPQUFmLENBQXVCO0FBQUEsMkJBQVlDLFNBQVNTLE1BQVQsQ0FBZ0JELFFBQWhCLENBQVo7QUFBQSxpQkFBdkI7QUFDQSxxQkFBS3RCLGdCQUFMLENBQXNCdUIsTUFBdEIsQ0FBNkJELFFBQTdCO0FBQ0g7QUFwRU07O0FBQUE7QUFBQTtBQUFBLENBQVgiLCJmaWxlIjoiYXN0ZXJvaWQtZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IFV0aWxzLCBTcGF3bmVyLCBQb2x5Z29uLCBFeHBsb3Npb24gfSkgPT4gY2xhc3MgQXN0ZXJvaWRGaWVsZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBjb2xvcnMsIG51bUFzdGVyb2lkcywgcmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9ICgpID0+IHRydWU7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBVdGlscy5yYW5nZShudW1Bc3Rlcm9pZHMsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlscy5yYW5kb20oMjAsIDQwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJhbmRvbUFzdGVyb2lkUG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLnJhbmRvbUFzdGVyb2lkQ29sb3IoKSB9LFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFZlY3Rvci5yYW5kb20oLTIsIDIsIC0yLCAyKSwgc2l6ZSxcclxuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21Bc3Rlcm9pZFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20oMCwgTWF0aC5QSSAqIDIpLCB0aGlzLnJhZGl1cyAvIDIgKyAyMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFzdGVyb2lkU2hhcGUoKSB7XHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gODtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2Uoc2VnbWVudHMsIHNlZ21lbnQgPT5cclxuICAgICAgICAgICAgVmVjdG9yLnBvbGFyKChzZWdtZW50IC8gc2VnbWVudHMpICogTWF0aC5QSSAqIDIsIFV0aWxzLnJhbmRvbSgwLjUsIDEpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXN0ZXJvaWRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZG9tQXJyYXkodGhpcy5jb2xvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBsZXQgcGxheWVyU3BlZWQgPSB0aGlzLnBsYXllci52ZWxvY2l0eS5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLmFzdGVyb2lkcy5mb3JFYWNoKGFzdGVyb2lkID0+IHtcclxuICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucGxheWVyLnBvc2l0aW9uLmRpc3RhbmNlKGFzdGVyb2lkLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGFzdGVyb2lkLnNpemUgJiYgdGhpcy5wbGF5ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5jb2xvciAhPSBhc3Rlcm9pZC5zdHlsZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbG9yID0gdGhpcy5yYW5kb21Bc3Rlcm9pZENvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhc3Rlcm9pZC5wb3NpdGlvbiwgc2l6ZTogYXN0ZXJvaWQuc2l6ZSAvIDEuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTaXplOiBhc3Rlcm9pZC5zaXplIC8gMS41LCBzdHlsZTogeyBjb2xvcjogYXN0ZXJvaWQuc3R5bGUuY29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlOiAoYXN0ZXJvaWQuc2l6ZSArIHBsYXllclNwZWVkICsgYXN0ZXJvaWQudmVsb2NpdHkubGVuZ3RoKCkpIC8gMTBcclxuICAgICAgICAgICAgICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCBhc3Rlcm9pZC5zaXplIHx8IGRpc3RhbmNlID4gdGhpcy5yYWRpdXMgLyAyICsgNTApICYmIHRoaXMucGxheWVyLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb3NpdGlvbiA9IHRoaXMucmFuZG9tQXN0ZXJvaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9pbnRzID0gdGhpcy5yYW5kb21Bc3Rlcm9pZFNoYXBlKCk7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC5zdHlsZS5jb2xvciA9IHRoaXMucmFuZG9tQXN0ZXJvaWRDb2xvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lci51cGRhdGUoY3R4KTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4gYXN0ZXJvaWQucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19