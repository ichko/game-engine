"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function CanvasRenderer(ctx, width, height) {
            _classCallCheck(this, CanvasRenderer);

            this.ctx = ctx;
            this.width = width;
            this.height = height;
        }

        _createClass(CanvasRenderer, [{
            key: "transform",
            value: function transform(transformation, transformedRendering) {
                this.push(transformation);
                transformedRendering();
                this.pop();
            }
        }, {
            key: "push",
            value: function push() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    _ref$scale = _ref.scale,
                    scale = _ref$scale === undefined ? new Vector(1, 1) : _ref$scale,
                    _ref$rotation = _ref.rotation,
                    rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
                    _ref$translation = _ref.translation,
                    translation = _ref$translation === undefined ? new Vector() : _ref$translation;

                this.ctx.save();
                this.ctx.scale(scale.x, scale.y);
                this.ctx.rotate(rotation);
                this.ctx.translate(translation.x, translation.y);
            }
        }, {
            key: "pop",
            value: function pop() {
                this.ctx.restore();
            }
        }, {
            key: "circle",
            value: function circle(position, radius, _ref2) {
                var color = _ref2.color,
                    _ref2$opacity = _ref2.opacity,
                    opacity = _ref2$opacity === undefined ? 1 : _ref2$opacity;

                // this.ctx.shadowColor = color;
                // this.ctx.shadowBlur = 50;

                this.ctx.fillStyle = color;
                this.ctx.globalAlpha = opacity;
                this.ctx.beginPath();
                this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }, {
            key: "rectangle",
            value: function rectangle(position, size, _ref3) {
                var color = _ref3.color;

                this.ctx.fillStyle = color;
                this.ctx.fillRect(position.x - size.width / 2, position.y - size.height / 2, size.width, size.height);
            }
        }, {
            key: "clear",
            value: function clear() {
                this.ctx.fillStyle = "rgba(0,0,0,1)";
                this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
            }
        }, {
            key: "polygon",
            value: function polygon(points) {
                var _this = this;

                var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var _ref4 = arguments[2];
                var color = _ref4.color;

                if (points.length > 2) {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = color;
                    this.ctx.moveTo(points[0].x * size, points[0].y * size);
                    points.forEach(function (point) {
                        _this.ctx.lineTo(point.x * size, point.y * size);
                    });
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            }
        }]);

        return CanvasRenderer;
    }();
});