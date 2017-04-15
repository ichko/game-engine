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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvdmVjdG9yLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRlZmluZSIsIlV0aWxzIiwieCIsInkiLCJNYXRoIiwic3FydCIsInZlY3RvciIsImxlbmd0aCIsImFuZ2xlIiwic2luIiwiY29zIiwidG1wWCIsImF0YW4yIiwic2l6ZSIsIm5vcmFtbGl6ZSIsInNjYWxlIiwiZHgiLCJkeSIsIlZlY3RvciIsIm1pbngiLCJtYXh4IiwibWlueSIsIm1heHkiLCJyYW5kb20iLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJwb2xhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBO0FBRVAsMEJBQTBCO0FBQUEsZ0JBQWRDLENBQWMsdUVBQVYsQ0FBVTtBQUFBLGdCQUFQQyxDQUFPLHVFQUFILENBQUc7O0FBQUE7O0FBQ3RCLGlCQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxpQkFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0g7O0FBTE07QUFBQTtBQUFBLGdDQU9IRCxDQVBHLEVBT0FDLENBUEEsRUFPRztBQUNOLHFCQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxxQkFBS0MsQ0FBTCxHQUFTQSxDQUFUOztBQUVBLHVCQUFPLElBQVA7QUFDSDtBQVpNO0FBQUE7QUFBQSxxQ0FjRTtBQUNMLHVCQUFPQyxLQUFLQyxJQUFMLENBQVUsS0FBS0gsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQTFDLENBQVA7QUFDSDtBQWhCTTtBQUFBO0FBQUEsZ0NBa0JIRyxNQWxCRyxFQWtCSztBQUNSLHFCQUFLSixDQUFMLElBQVVJLE9BQU9KLENBQWpCO0FBQ0EscUJBQUtDLENBQUwsSUFBVUcsT0FBT0gsQ0FBakI7O0FBRUEsdUJBQU8sSUFBUDtBQUNIO0FBdkJNO0FBQUE7QUFBQSx3Q0F5Qks7QUFDUixvQkFBSUksU0FBUyxL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TUFBN0IsRUFBcUNILEtBQUtLLEdBQUwsQ0FBU0QsS0FBVCxJQUFrQkQsTUFBdkQsQ0FBUDtBQUNIO0FBakdNO0FBQUE7QUFBQSwwQ0FtRzhEO0FBQUEsb0JBQWxEQSxNQUFrRCx1RUFBekMsQ0FBeUM7QUFBQSxvQkFBdENpQixRQUFzQyx1RUFBM0IsQ0FBMkI7QUFBQSxvQkFBeEJDLFFBQXdCLHVFQUFickIsS0FBS3NCLEVBQUwsR0FBVSxDQUFHOztBQUNqRSx1QkFBT1IsT0FBT1MsS0FBUCxDQUFhMUIsTUFBTXNCLE1BQU4sQ0FBYUMsUUFBYixFQUF1QkMsUUFBdkIsQ0FBYixFQUErQ2xCLE1BQS9DLENBQVA7QUFDSDtBQXJHTTs7QUFBQTtBQUFBO0FBQUEsQ0FBWCIsImZpbGUiOiJ2ZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IFV0aWxzIH0pID0+IGNsYXNzIFZlY3RvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggKz0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55ICs9IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBub3JhbWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IFsgc2luLCBjb3MgXSA9IFsgTWF0aC5zaW4oYW5nbGUpLCBNYXRoLmNvcyhhbmdsZSkgXTtcclxuICAgICAgICBsZXQgdG1wWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBjb3MgLSB0aGlzLnkgKiBzaW47XHJcbiAgICAgICAgdGhpcy55ID0gdG1wWCAqIHNpbiArIHRoaXMueSAqIGNvcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVG8oc2l6ZSA9IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3JhbWxpemUoKS5zY2FsZShzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh2ZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZSh2ZWN0b3IpIHtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB2ZWN0b3IueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHNpemUpIHtcclxuICAgICAgICB0aGlzLnggKj0gc2l6ZTtcclxuICAgICAgICB0aGlzLnkgKj0gc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjdG9yU2NhbGUodmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbShtaW54LCBtYXh4LCBtaW55LCBtYXh5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoVXRpbHMucmFuZG9tKG1pbngsIG1heHgpLCBVdGlscy5yYW5kb20obWlueSwgbWF4eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb2xhcihhbmdsZSA9IDAsIGxlbmd0aCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGgsIE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbVBvbGFyKGxlbmd0aCA9IDEsIG1pbkFuZ2xlID0gMCwgbWF4QW5nbGUgPSBNYXRoLlBJICogMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IucG9sYXIoVXRpbHMucmFuZG9tKG1pbkFuZ2xlLCBtYXhBbmdsZSksIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19