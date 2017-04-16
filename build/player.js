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
        Explosion = _ref.Explosion,
        Config = _ref.Config;
    return function (_Composite) {
        _inherits(Player, _Composite);

        function Player(controller) {
            _classCallCheck(this, Player);

            var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

            _this.controller = controller;
            _this.fuel = new Fountain({ particleSize: 4, style: { opacity: 0.2 },
                fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
            _this.ship = new Polygon({ points: [new Vector(-5, 0), new Vector(0, -3), new Vector(5, 0), new Vector(0, 15)] });
            _this.speed = 0;
            _this.color = Utils.randomArray(Config.colors);

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
                // this.size = 0;
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
                this.controller.color = this.color;

                var forwardAngle = this.controller.direction.angle() + Math.PI;
                this.ship.rotation = forwardAngle + Math.PI / 2;
                this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
                this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
                this.fuel.config.magnitude = this.speed / 1.5;
                this.fuel.config.size = this.speed / 1.5;

                this.velocity.add(controller.direction.copy().scale(1 / 3000 * this.speed));
                if (this.velocity.length() > 2.5) {
                    this.velocity.scaleTo(2.5);
                }
            }
        }]);

        return Player;
    }(Composite);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiQ29tcG9zaXRlIiwiRm91bnRhaW4iLCJQb2x5Z29uIiwiVXRpbHMiLCJTcGF3bmVyIiwiRXhwbG9zaW9uIiwiQ29uZmlnIiwiY29udHJvbGxlciIsImZ1ZWwiLCJwYXJ0aWNsZVNpemUiLCJzdHlsZSIsIm9wYWNpdHkiLCJmcm9tQW5nbGUiLCJNYXRoIiwiUEkiLCJ0b0FuZ2xlIiwic2hpcCIsInBvaW50cyIsIlZlY3RvciIsInNwZWVkIiwiY29sb3IiLCJyYW5kb21BcnJheSIsImNvbG9ycyIsImFkZCIsIm9iamVjdCIsImV4cGxvc2lvbnMiLCJleHBsb3Npb25TcGF3bmVyIiwibGVuZ3RoIiwic3BsaWNlIiwicHVzaCIsInBvc2l0aW9uIiwic2l6ZSIsIm1hZ25pdHVkZSIsImZpcmUiLCJyZW5kZXJlciIsInJlbmRlciIsImN0eCIsInVwZGF0ZSIsImZvcndhcmRBbmdsZSIsImRpcmVjdGlvbiIsImFuZ2xlIiwicm90YXRpb24iLCJjb25maWciLCJ2ZWxvY2l0eSIsImNvcHkiLCJzY2FsZSIsInNjYWxlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUNQQyxTQURPLFFBQ1BBLFNBRE87QUFBQSxRQUNJQyxRQURKLFFBQ0lBLFFBREo7QUFBQSxRQUVQQyxPQUZPLFFBRVBBLE9BRk87QUFBQSxRQUVFQyxLQUZGLFFBRUVBLEtBRkY7QUFBQSxRQUdQQyxPQUhPLFFBR1BBLE9BSE87QUFBQSxRQUdFQyxTQUhGLFFBR0VBLFNBSEY7QUFBQSxRQUdhQyxNQUhiLFFBR2FBLE1BSGI7QUFBQTtBQUFBOztBQU1QLHdCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBRXBCLGtCQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGtCQUFLQyxJQUFMLEdBQVksSUFBSVAsUUFBSixDQUFhLEVBQUVRLGNBQWMsQ0FBaEIsRUFBbUJD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LENBQVVrQyxNQUFWLENBQWlCWCxJQUFqQixHQUF3QixLQUFLWixLQUFMLEdBQWEsR0FBckM7O0FBRUEscUJBQUt3QixRQUFMLENBQWNwQixHQUFkLENBQWtCaEIsV0FBV2dDLFNBQVgsQ0FBcUJLLElBQXJCLEdBQTRCQyxLQUE1QixDQUFtQyxJQUFJLElBQUwsR0FBYSxLQUFLMUIsS0FBcEQsQ0FBbEI7QUFDQSxvQkFBSSxLQUFLd0IsUUFBTCxDQUFjaEIsTUFBZCxLQUF5QixHQUE3QixFQUFrQztBQUM5Qix5QkFBS2dCLFFBQUwsQ0FBY0csT0FBZCxDQUFzQixHQUF0QjtBQUNIO0FBQ0o7QUF4RE07O0FBQUE7QUFBQSxNQUlnQjlDLFNBSmhCO0FBQUEsQ0FBWCIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7XHJcbiAgICBDb21wb3NpdGUsIEZvdW50YWluLFxyXG4gICAgUG9seWdvbiwgVXRpbHMsXHJcbiAgICBTcGF3bmVyLCBFeHBsb3Npb24sIENvbmZpZ1xyXG59KSA9PiBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5mdWVsID0gbmV3IEZvdW50YWluKHsgcGFydGljbGVTaXplOiA0LCBzdHlsZTogeyBvcGFjaXR5OiAwLjIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFuZ2xlOiBNYXRoLlBJIC8gMiAqIDMgLSAwLjMsIHRvQW5nbGU6IE1hdGguUEkgLyAyICogMyArIDAuMyB9KTtcclxuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgUG9seWdvbih7IHBvaW50czogW25ldyBWZWN0b3IoLTUsIDApLCBuZXcgVmVjdG9yKDAsIC0zKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUsIDApLCBuZXcgVmVjdG9yKDAsIDE1KV0gfSk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWxzLnJhbmRvbUFycmF5KENvbmZpZy5jb2xvcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCh7IG9iamVjdDogdGhpcy5mdWVsIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkKHsgb2JqZWN0OiB0aGlzLnNoaXAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9uU3Bhd25lciA9IG5ldyBTcGF3bmVyKCgpID0+IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmV4cGxvc2lvbnMuc3BsaWNlKDAsIHRoaXMuZXhwbG9zaW9ucy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgc2l6ZTogMzAsIHBhcnRpY2xlU2l6ZTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yIH0sIG1hZ25pdHVkZTogNVxyXG4gICAgICAgIH0pLmZpcmUoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5zaXplID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShjdHgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoY3R4KTtcclxuICAgICAgICB0aGlzLmV4cGxvc2lvblNwYXduZXIudXBkYXRlKGN0eCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5mdWVsLnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG5cclxuICAgICAgICBsZXQgZm9yd2FyZEFuZ2xlID0gdGhpcy5jb250cm9sbGVyLmRpcmVjdGlvbi5hbmdsZSgpICsgTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnNoaXAucm90YXRpb24gPSBmb3J3YXJkQW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLmZyb21BbmdsZSA9IGZvcndhcmRBbmdsZSAtIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcudG9BbmdsZSA9IGZvcndhcmRBbmdsZSArIDEgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZnVlbC5jb25maWcubWFnbml0dWRlID0gdGhpcy5zcGVlZCAvIDEuNTtcclxuICAgICAgICB0aGlzLmZ1ZWwuY29uZmlnLnNpemUgPSB0aGlzLnNwZWVkIC8gMS41O1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChjb250cm9sbGVyLmRpcmVjdGlvbi5jb3B5KCkuc2NhbGUoKDEgLyAzMDAwKSAqIHRoaXMuc3BlZWQpKTtcclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS5sZW5ndGgoKSA+IDIuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNjYWxlVG8oMi41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19