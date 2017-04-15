'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils,
        Circle = _ref.Circle;
    return function () {
        function Environment(camera) {
            _classCallCheck(this, Environment);

            this.camera = camera;
            this.width = width;
            this.height = height;

            this.container = {
                frontBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(220, 0, 100, 0.6)' }, size: 9 }), depth: 1.1 },
                frontSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(0, 200, 100, 0.6)' }, size: 7 }), depth: 1.2 },
                backBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(240, 120, 0, 0.6)' }, size: 5 }), depth: 1.4 },
                backSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(50, 100, 200, 0.6)' }, size: 3 }), depth: 1.8 }
            };
        }

        _createClass(Environment, [{
            key: 'circleGenerator',
            value: function circleGenerator(count) {
                var _this = this;

                var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    size = _ref2.size,
                    style = _ref2.style;

                return Utils.range(count, function () {
                    return new Circle({
                        position: Vector.random(-width / 2, width / 2, -_this.height / 2, _this.height / 2),
                        radius: Utils.random(1, size),
                        style: style
                    });
                });
            }
        }, {
            key: 'outOfBounds',
            value: function outOfBounds() {
                var _this2 = this;

                var _loop = function _loop(name) {
                    var layer = _this2.container[name];
                    layer.elements.forEach(function (element) {
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
                };

                for (var name in this.container) {
                    _loop(name);
                }
            }
        }]);

        return Environment;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJVdGlscyIsIkNpcmNsZSIsImNhbWVyYSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwiZnJvbnRCaWciLCJlbGVtZW50cyIsImNpcmNsZUdlbmVyYXRvciIsInN0eWxlIiwiY29sb3IiLCJzaXplIiwiZGVwdGgiLCJmcm9udFNtYWxsIiwiYmFja0JpZyIsImJhY2tTbWFsbCIsImNvdW50IiwicmFuZ2UiLCJwb3NpdGlvbiIsIlZlY3RvciIsInJhbmRvbSIsInJhZGl1cyIsIm5hbWUiLCJsYXllciIsImZvckVhY2giLCJjYW1lcmFQb3MiLCJjb3B5Iiwic2NhbGUiLCJ4IiwiZWxlbWVudCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQTtBQUVQLDZCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLGlCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxpQkFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxpQkFBS0MsU0FBTCxHQUFpQjtBQUNiQywwQkFBVSxFQUFFQyxVQUFVLEtBQUtDLGVBQUwsQ0FBcUIsRUFBckIsRUFBeUIsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLHdCQUFULEVBQVQsRUFBOENDLE1BQU0sQ0FBcEQsRUFBekIsQ0FBWixFQUErRkMsT0FBTyxHQUF0RyxFQURHO0FBRWJDLDRCQUFZLEVBQUVOLFVBQVUsS0FBS0MsZUFBTCxDQUFxQixFQUFyQixFQUF5QixFQUFFQyxPQUFPLEVBQUVDLE9BQU8sd0JBQVQsRUFBVCxFQUE4Q0MsTUFBTSxDQUFwRCxFQUF6QixDQUFaLEVBQStGQyxPQUFPLEdBQXRHLEVBRkM7QUFHYkUseUJBQVMsRUFBRVAsVUFBVSxLQUFLQyxl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akIsR0FBcUJMLFVBQVVLLENBQVYsR0FBYyxDQUFDTCxVQUFVSyxDQUFWLEdBQWNELFFBQVFYLFFBQVIsQ0FBaUJZLENBQWhDLElBQXNDLE9BQUsxQixNQUE5RTtBQUNIO0FBQ0oscUJBaEJEO0FBSE07O0FBQ1YscUJBQUssSUFBSWtCLElBQVQsSUFBaUIsS0FBS2pCLFNBQXRCLEVBQWlDO0FBQUEsMEJBQXhCaUIsSUFBd0I7QUFtQmhDO0FBQ0o7QUE1Q007O0FBQUE7QUFBQTtBQUFBLENBQVgiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IFV0aWxzLCBDaXJjbGUgfSkgPT4gY2xhc3MgRW52aXJvbm1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbWVyYSkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB7XHJcbiAgICAgICAgICAgIGZyb250QmlnOiB7IGVsZW1lbnRzOiB0aGlzLmNpcmNsZUdlbmVyYXRvcigxMCwgeyBzdHlsZTogeyBjb2xvcjogJ3JnYmEoMjIwLCAwLCAxMDAsIDAuNiknIH0sIHNpemU6IDkgfSksIGRlcHRoOiAxLjEgfSxcclxuICAgICAgICAgICAgZnJvbnRTbWFsbDogeyBlbGVtZW50czogdGhpcy5jaXJjbGVHZW5lcmF0b3IoMTAsIHsgc3R5bGU6IHsgY29sb3I6ICdyZ2JhKDAsIDIwMCwgMTAwLCAwLjYpJyB9LCBzaXplOiA3IH0pLCBkZXB0aDogMS4yIH0sXHJcbiAgICAgICAgICAgIGJhY2tCaWc6IHsgZWxlbWVudHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHN0eWxlOiB7IGNvbG9yOiAncmdiYSgyNDAsIDEyMCwgMCwgMC42KScgfSwgc2l6ZTogNSB9KSwgZGVwdGg6IDEuNCB9LFxyXG4gICAgICAgICAgICBiYWNrU21hbGw6IHsgZWxlbWVudHM6IHRoaXMuY2lyY2xlR2VuZXJhdG9yKDEwLCB7IHN0eWxlOiB7IGNvbG9yOiAncmdiYSg1MCwgMTAwLCAyMDAsIDAuNiknIH0sIHNpemU6IDMgfSksIGRlcHRoOiAxLjggfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlR2VuZXJhdG9yKGNvdW50LCB7IHNpemUsIHN0eWxlIH0gPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZShjb3VudCwgKCkgPT4gbmV3IENpcmNsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBWZWN0b3IucmFuZG9tKC13aWR0aCAvIDIsIHdpZHRoIC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgcmFkaXVzOiBVdGlscy5yYW5kb20oMSwgc2l6ZSksXHJcbiAgICAgICAgICAgIHN0eWxlXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG91dE9mQm91bmRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyID0gdGhpcy5jb250YWluZXJbbmFtZV07XHJcbiAgICAgICAgICAgIGxheWVyLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSgpLnNjYWxlKDEgLyBsYXllci5kZXB0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54ID4gdGhpcy53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnggPSBjYW1lcmFQb3MueCArIHRoaXMud2lkdGggLyAyIC0gKGNhbWVyYVBvcy54IC0gZWxlbWVudC5wb3NpdGlvbi54KSAlICh0aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi54IC0gY2FtZXJhUG9zLnggPiB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucG9zaXRpb24ueCA9IGNhbWVyYVBvcy54IC0gdGhpcy53aWR0aCAvIDIgKyAoY2FtZXJhUG9zLnggLSBlbGVtZW50LnBvc2l0aW9uLngpICUgKHRoaXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhUG9zLnkgLSBlbGVtZW50LnBvc2l0aW9uLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIHRoaXMuaGVpZ2h0IC0gKGNhbWVyYVBvcy55IC0gZWxlbWVudC5wb3NpdGlvbi55KSAlICh0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbi55IC0gY2FtZXJhUG9zLnkgPiB0aGlzLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgPSBjYW1lcmFQb3MueSArIChjYW1lcmFQb3MueSAtIGVsZW1lbnQucG9zaXRpb24ueSkgJSAodGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTsiXX0=