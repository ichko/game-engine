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
            key: "cut",
            value: function cut(size) {
                var length = this.length();
                if (length > size) {
                    this.scaleTo(size);
                }

                return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvdmVjdG9yLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRlZmluZSIsIlV0aWxzIiwieCIsInkiLCJNYXRoIiwic3FydCIsInZlY3RvciIsImxlbmd0aCIsImFuZ2xlIiwic2luIiwiY29zIiwidG1wWCIsImF0YW4yIiwic2l6ZSIsInNjYWxlVG8iLCJub3JhbWxpemUiLCJzY2FsZSIsImR4IiwiZHkiLCJWZWN0b3IiLCJtaW54IiwibWF4eCIsIm1pbnkiLCJtYXh5IiwicmFuZG9tIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwicG9sYXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQTtBQUVQLDBCQUEwQjtBQUFBLGdCQUFkQyxDQUFjLHVFQUFWLENBQVU7QUFBQSxnQkFBUEMsQ0FBTyx1RUFBSCxDQUFHOztBQUFBOztBQUN0QixpQkFBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsaUJBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNIOztBQUxNO0FBQUE7QUFBQSxnQ0FPSEQsQ0FQRyxFQU9BQyxDQVBBLEVBT0c7QUFDTixxQkFBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EscUJBQUtDLENBQUwsR0FBU0EsQ0FBVDs7QUFFQSx1QkFBTyxJQUFQO0FBQ0g7QUFaTTtBQUFBO0FBQUEscUNBY0U7QUFDTCx1QkFBT0MsS0FBS0MsSUFBTCxDQUFVLEtBQUtILENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUExQyxDQUFQO0FBQ0g7QUFoQk07QUFBQTtBQUFBLGdDQWtCSEcsTUFsQkcsRUFrQks7QUFDUixxQkFBS0osQ0FBTCxJQUFVSSxPQUFPSixDQUFqQjtBQUNBLHFCQUFLQyxDQUFMLElBQVVHLE9BQU9ILENBQWpCOztBQUVBLHVCQUFPLElBQVA7QUFDSDtBQXZCTTtBQUFBO0FBQUEsd0NBeUJLO0FBQ1Isb0JB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QyxJQUFuQixDQUFyQyxDQUFQO0FBQ0g7QUF0R007QUFBQTtBQUFBLG9DQXdHNkI7QUFBQSxvQkFBdkJmLEtBQXVCLHVFQUFmLENBQWU7QUFBQSxvQkFBWkQsTUFBWSx1RUFBSCxDQUFHOztBQUNoQyx1QkFBTyxJQUFJWSxNQUFKLENBQVdmLEtBQUtNLEdBQUwsQ0FBU0YsS0FBVCxJQUFrQkQsTUFBN0IsRUFBcUNILEtBQUtLLEdBQUwsQ0FBU0QsS0FBVCxJQUFrQkQsTUFBdkQsQ0FBUDtBQUNIO0FBMUdNO0FBQUE7QUFBQSwwQ0E0RzhEO0FBQUEsb0JBQWxEQSxNQUFrRCx1RUFBekMsQ0FBeUM7QUFBQSxvQkFBdENrQixRQUFzQyx1RUFBM0IsQ0FBMkI7QUFBQSxvQkFBeEJDLFFBQXdCLHVFQUFidEIsS0FBS3VCLEVBQUwsR0FBVSxDQUFHOztBQUNqRSx1QkFBT1IsT0FBT1MsS0FBUCxDQUFhM0IsTUFBTXVCLE1BQU4sQ0FBYUMsUUFBYixFQUF1QkMsUUFBdkIsQ0FBYixFQUErQ25CLE1BQS9DLENBQVA7QUFDSDtBQTlHTTs7QUFBQTtBQUFBO0FBQUEsQ0FBWCIsImZpbGUiOiJ2ZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IFV0aWxzIH0pID0+IGNsYXNzIFZlY3RvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBub3JhbWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcclxuICAgICAgICBsZXQgdG1wWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XHJcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1dChzaXplKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+IHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVRvKHNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVUbyhzaXplID0gMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vcmFtbGl6ZSgpLnNjYWxlKHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnRyYWN0KHZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMueCAtPSB2ZWN0b3IueDtcclxuICAgICAgICB0aGlzLnkgLT0gdmVjdG9yLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlKHZlY3Rvcikge1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIHZlY3Rvci54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGUoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMueCAqPSBzaXplO1xyXG4gICAgICAgIHRoaXMueSAqPSBzaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICB2ZWN0b3JTY2FsZSh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tKG1pbngsIG1heHgsIG1pbnksIG1heHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihVdGlscy5yYW5kb20obWlueCwgbWF4eCksIFV0aWxzLnJhbmRvbShtaW55LCBtYXh5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBvbGFyKGFuZ2xlID0gMCwgbGVuZ3RoID0gMSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aCwgTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tUG9sYXIobGVuZ3RoID0gMSwgbWluQW5nbGUgPSAwLCBtYXhBbmdsZSA9IE1hdGguUEkgKiAyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5wb2xhcihVdGlscy5yYW5kb20obWluQW5nbGUsIG1heEFuZ2xlKSwgbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=