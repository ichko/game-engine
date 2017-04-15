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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvcmVuZGVyZXIuanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiY3R4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm1hdGlvbiIsInRyYW5zZm9ybWVkUmVuZGVyaW5nIiwicHVzaCIsInBvcCIsInNjYWxlIiwiVmVjdG9yIiwicm90YXRpb24iLCJ0cmFuc2xhdGlvbiIsInNhdmUiLCJ4IiwieSIsInJvdGF0ZSIsInRyYW5zbGF0ZSIsInJlc3RvcmUiLCJwb3NpdGlvbiIsInJhZGl1cyIsImNvbG9yIiwib3BhY2l0eSIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNpemUiLCJmaWxsUmVjdCIsInBvaW50cyIsImxlbmd0aCIsIm1vdmVUbyIsImZvckVhY2giLCJsaW5lVG8iLCJwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBO0FBRVAsZ0NBQVlDLEdBQVosRUFBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUFBOztBQUM1QixpQkFBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGlCQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7QUFOTTtBQUFBO0FBQUEsc0NBUUdDLGNBUkgsRUFRbUJDLG9CQVJuQixFQVF5QztBQUM1QyxxQkFBS0MsSUFBTCxDQUFVRixjQUFWO0FBQ0FDO0FBQ0EscUJBQUtFLEdBQUw7QUFDSDtBQVpNO0FBQUE7QUFBQSxtQ0FrQkM7QUFBQSwrRkFBSixFQUFJO0FBQUEsc0NBSEpDLEtBR0k7QUFBQSxvQkFISkEsS0FHSSw4QkFISSxJQUFJQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FHSjtBQUFBLHlDQUZKQyxRQUVJO0FBQUEsb0JBRkpBLFFBRUksaUNBRk8sQ0FFUDtBQUFBLDRDQURKQyxXQUNJ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QUFBO0FBQUEsQ0FBWCIsImZpbGUiOiJyZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIkFwcC5kZWZpbmUoKCkgPT4gY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24sIHRyYW5zZm9ybWVkUmVuZGVyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcclxuICAgICAgICB0cmFuc2Zvcm1lZFJlbmRlcmluZygpO1xyXG4gICAgICAgIHRoaXMucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCh7XHJcbiAgICAgICAgc2NhbGUgPSBuZXcgVmVjdG9yKDEsIDEpLFxyXG4gICAgICAgIHJvdGF0aW9uID0gMCxcclxuICAgICAgICB0cmFuc2xhdGlvbiA9IG5ldyBWZWN0b3IoKVxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRyYW5zbGF0aW9uLngsIHRyYW5zbGF0aW9uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlKHBvc2l0aW9uLCByYWRpdXMsIHsgY29sb3IsIG9wYWNpdHkgPSAxIH0pIHtcclxuICAgICAgICAvLyB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSA1MDtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplLCB7IGNvbG9yIH0pIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChwb3NpdGlvbi54IC0gc2l6ZS53aWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBzaXplLmhlaWdodCAvIDIsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwb2x5Z29uKHBvaW50cywgc2l6ZSA9IDEsIHsgY29sb3IgfSkge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCAqIHNpemUsIHBvaW50c1swXS55ICogc2l6ZSk7XHJcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICogc2l6ZSwgcG9pbnQueSAqIHNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19