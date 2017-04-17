"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils,
        Circle = _ref.Circle,
        Config = _ref.Config;
    return function () {
        function Environment(camera) {
            _classCallCheck(this, Environment);

            this.camera = camera;
            this.width = width;
            this.height = height;

            this.container = [{ objects: this.circleGenerator(10, { size: 4 }), depth: 0.8 }, { objects: this.circleGenerator(10, { size: 3 }), depth: 0.9 }, { objects: this.circleGenerator(10, { size: 2 }), depth: 1.1 }, { objects: this.circleGenerator(10, { size: 1 }), depth: 1.2 }];
        }

        _createClass(Environment, [{
            key: "circleGenerator",
            value: function circleGenerator(count) {
                var _this = this;

                var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    size = _ref2.size;

                return Utils.range(count, function () {
                    return new Circle({
                        position: Vector.random(-width / 2, width / 2, -_this.height / 2, _this.height / 2),
                        radius: Utils.random(1, size), style: { color: Utils.randomArray(Config.colors), opacity: 0.6 }
                    });
                });
            }
        }, {
            key: "outOfBounds",
            value: function outOfBounds() {
                var _this2 = this;

                this.container.forEach(function (layer) {
                    layer.objects.forEach(function (element) {
                        var cameraPos = _this2.camera.position.copy().scale(1 / layer.depth);

                        if (cameraPos.x - element.position.x > _this2.width / 2) {
                            element.position.x = cameraPos.x + _this2.width / 2 - (cameraPos.x - element.position.x) % (_this2.width / 2);
                        }
                        if (element.position.x - cameraPos.x > _this2.width / 2) {
                            element.position.x = cameraPos.x - _this2.width / 2 + (cameraPos.x - element.position.x) % (_this2.width / 2);
                        }

                        if (cameraPos.y - element.position.y > _this2.height / 2) {
                            element.position.y = cameraPos.y + _this2.height - (cameraPos.y - element.position.y) % _this2.height;
                        }
                        if (element.position.y - cameraPos.y > _this2.height / 2) {
                            element.position.y = cameraPos.y + (cameraPos.y - element.position.y) % _this2.height;
                        }
                    });
                });
            }
        }]);

        return Environment;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJVdGlscyIsIkNpcmNsZSIsIkNvbmZpZyIsImNhbWVyYSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwib2JqZWN0cyIsImNpcmNsZUdlbmVyYXRvciIsInNpemUiLCJkZXB0aCIsImNvdW50IiwicmFuZ2UiLCJwb3NpdGlvbiIsIlZlY3RvciIsInJhbmRvbSIsInJhZGl1cyIsInN0eWxlIiwiY29sb3IiLCJyYW5kb21BcnJheSIsImNvbG9ycyIsIm9wYWNpdHkiLCJmb3JFYWNoIiwibGF5ZXIiLCJjYW1lcmFQb3MiLCJjb3B5Iiwic2NhbGUiLCJ4IiwiZWxlbWVudCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxRQUFrQkMsTUFBbEIsUUFBa0JBLE1BQWxCO0FBQUE7QUFFUCw2QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNoQixpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGlCQUFLQyxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsaUJBQUtDLFNBQUwsR0FBaUIsQ0FDYixFQUFFQyxTQUFTLEtBQUtDLGVBQUwsQ0FBcUIsRUFBckIsRUFBeUIsRUFBRUMsTUFBTSxDQUFSLEVBQXpCLENBQVgsRUFBa0RDLE9BQU8sR0FBekQsRUFEYSxFQUViLEVBQUVILFNBQVMsS0FBS0MsZUFBTCxDQUFxQixFQUFyQixFQUF5QixFQUFFQyxNQUFNLENBQVIsRUFBekIsQ0FBWCxFQUFrREMsT0FBTyxHQUF6RCxFQUZhLEVBR2IsRUFBRUgsU0FBUyxLQUFLQyxlQUFMLENBQXFCLEVBQXJCLEVBQXlCLEVBQUVDLE1BQU0sQ0FBUixFQUF6QixDQUFYLEVBQWtEQyxPQUFPLEdBQXpELEVBSGEs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Q007O0FBQUE7QUFBQTtBQUFBLENBQVgiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IFV0aWxzLCBDaXJjbGUsIENvbmZpZyB9KSA9PiBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IFtcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiA0IH0pLCBkZXB0aDogMC44IH0sXHJcbiAgICAgICAgICAgIHsgb2JqZWN0czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc2l6ZTogMyB9KSwgZGVwdGg6IDAuOSB9LFxyXG4gICAgICAgICAgICB7IG9iamVjdHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHNpemU6IDIgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgeyBvYmplY3RzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzaXplOiAxIH0pLCBkZXB0aDogMS4yIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUdlbmVyYXRvcihjb3VudCwgeyBzaXplIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC13aWR0aCAvIDIsIHdpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgcmFkaXVzOiBVdGlscy5yYW5kb20oMSwgc2l6ZSksIHN0eWxlOiB7IGNvbG9yOiBVdGlscy5yYW5kb21BcnJheShDb25maWcuY29sb3JzKSwgb3BhY2l0eTogMC42IH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0T2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCkuc2NhbGUoMSAvIGxheWVyLmRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54ICsgdGhpcy53aWR0aCAvIDIgLSAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCA+IHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi54ID0gY2FtZXJhUG9zLnggLSB0aGlzLndpZHRoIC8gMiArIChjYW1lcmFQb3MueCAtIGVsZW1lbnQucG9zaXRpb24ueCkgJSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgdGhpcy5oZWlnaHQgLSAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkpICUgKHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueSA+IHRoaXMuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueSA9IGNhbWVyYVBvcy55ICsgKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSk7Il19