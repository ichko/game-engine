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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiQ29tcG9zaXRlIiwiRm91bnRhaW4iLCJQb2x5Z29uIiwiVXRpbHMiLCJTcGF3bmVyIiwiRXhwbG9zaW9uIiwiY29sb3JzIiwiZnVlbCIsInBhcnRpY2xlU2l6ZSIsInN0eWxlIiwib3BhY2l0eSIsImZyb21BbmdsZSIsIk1hdGgiLCJQSSIsInRvQW5nbGUiLCJzaGlwIiwicG9pbnRzIiwiVmVjdG9yIiwic3BlZWQiLCJjb2xvciIsInJhbmRvbUFycmF5IiwiYWRkIiwib2JqZWN0IiwiZXhwbG9zaW9ucyIsImV4cGxvc2lvblNwYXduZXIiLCJsZW5ndGgiLCJzcGxpY2UiLCJwdXNoIiwicG9zaXRpb24iLCJzaXplIiwibWFnbml0dWRlIiwiZmlyZSIsInJlbmRlcmVyIiwicmVuZGVyIiwiY3R4IiwidXBkYXRlIiwiZm9yd2FyZEFuZ2xlIiwiaW8iLCJtb3VzZSIsImFuZ2xlIiwicm90YXRpb24iLCJjb25maWciLCJ2ZWxvY2l0eSIsImNvcHkiLCJzY2FsZSIsInNjYWxlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUNQQyxTQURPLFFBQ1BBLFNBRE87QUFBQSxRQUNJQyxRQURKLFFBQ0lBLFFBREo7QUFBQSxRQUVQQyxPQUZPLFFBRVBBLE9BRk87QUFBQSxRQUVFQyxLQUZGLFFBRUVBLEtBRkY7QUFBQSxRQUdQQyxPQUhPLFFBR1BBLE9BSE87QUFBQSxRQUdFQyxTQUhGLFFBR0VBLFNBSEY7QUFBQTtBQUFBOztBQU1QLHdCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBRWhCLGtCQUFLQyxJQUFMLEdBQVksSUFBSU4sUUFBSixDQUFhLEVBQUVPLGNBQWMsQ0FBaEIsRUFBbUJDLE9BQU8sRUFBRUMsU0FBUyxJQUFYLEVBQTFCO0FBQ1RDLDJCQUFXQyxLQUFLQyxFQUFMLEdBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0Is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QUF1QixJQUFJLEtBQUwsR0FBYyxLQUFLMUIsS0FBekMsQ0FBbEI7QUFDQSxvQkFBSSxLQUFLd0IsUUFBTCxDQUFjakIsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM1Qix5QkFBS2lCLFFBQUwsQ0FBY0csT0FBZCxDQUFzQixDQUF0QjtBQUNIO0FBQ0o7QUF0RE07O0FBQUE7QUFBQSxNQUlnQjdDLFNBSmhCO0FBQUEsQ0FBWCIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7XHJcbiAgICBDb21wb3NpdGUsIEZvdW50YWluLFxyXG4gICAgUG9seWdvbiwgVXRpbHMsXHJcbiAgICBTcGF3bmVyLCBFeHBsb3Npb25cclxufSkgPT4gY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb2xvcnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZnVlbCA9IG5ldyBGb3VudGFpbih7IHBhcnRpY2xlU2l6ZTogNiwgc3R5bGU6IHsgb3BhY2l0eTogMC4yNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQW5nbGU6IE1hdGguUEkgLyAyICogMyAtIDAuMywgdG9BbmdsZTogTWF0aC5QSSAvIDIgKiAzICsgMC4zIH0pO1xyXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBQb2x5Z29uKHsgcG9pbnRzOiBbbmV3IFZlY3RvcigtNiwgMCksIG5ldyBWZWN0b3IoMCwgLTMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNiwgMCksIG5ldyBWZWN0b3IoMCwgMjApXSB9KTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQXJyYXkoY29sb3JzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQoeyBvYmplY3Q6IHRoaXMuZnVlbCB9KTtcclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5zaGlwIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIgPSBuZXcgU3Bhd25lcigoKSA9PiB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5leHBsb3Npb25zLnNwbGljZSgwLCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHNpemU6IDMwLCBwYXJ0aWNsZVNpemU6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciB9LCBtYWduaXR1ZGU6IDVcclxuICAgICAgICB9KS5maXJlKCkpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnJlbmRlcihyZW5kZXJlcik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoY3R4KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGN0eCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25TcGF3bmVyLnVwZGF0ZShjdHgpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXAuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuZnVlbC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcblxyXG4gICAgICAgIGxldCBmb3J3YXJkQW5nbGUgPSBpby5tb3VzZS5hbmdsZSgpICsgTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcudG9BbmdsZSA9IGZvcndhcmRBbmdsZSArIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcubWFnbml0dWRlID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnNpemUgPSB0aGlzLnNwZWVkIC8gMztcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQoaW8ubW91c2UuY29weSgpLnNjYWxlKCgxIC8gMTAwMDApICogdGhpcy5zcGVlZCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5Lmxlbmd0aCgpID4gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==