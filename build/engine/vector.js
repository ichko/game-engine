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