"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils;
    return function () {
        function Parallax() {
            var reference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector();

            _classCallCheck(this, Parallax);

            this.reference = reference;
            this.layers = [];
            this.zoom = 1;
        }

        _createClass(Parallax, [{
            key: "target",
            value: function target(reference) {
                this.reference = reference;
                return this;
            }
        }, {
            key: "addLayer",
            value: function addLayer(_ref2) {
                var _ref2$objects = _ref2.objects,
                    objects = _ref2$objects === undefined ? [] : _ref2$objects,
                    _ref2$depth = _ref2.depth,
                    depth = _ref2$depth === undefined ? 1 : _ref2$depth;

                this.layers.push({ objects: new Set(objects), depth: 1 / depth });
                return this;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                var _this = this;

                this.layers.forEach(function (layer) {
                    renderer.push({
                        translation: _this.reference.copy().scale(-layer.depth),
                        scale: new Vector(_this.zoom, _this.zoom)
                    });
                    layer.objects.forEach(function (object) {
                        return object.render(renderer);
                    });
                    renderer.pop();
                });
            }
        }, {
            key: "update",
            value: function update() {
                this.layers.forEach(function (layer) {
                    return Utils.filterSet(layer.objects, function (object) {
                        object.update();
                        return object.alive();
                    });
                });
            }
        }]);

        return Parallax;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvcGFyYWxsYXguanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiVXRpbHMiLCJyZWZlcmVuY2UiLCJWZWN0b3IiLCJsYXllcnMiLCJ6b29tIiwib2JqZWN0cyIsImRlcHRoIiwicHVzaCIsIlNldCIsInJlbmRlcmVyIiwiZm9yRWFjaCIsInRyYW5zbGF0aW9uIiwiY29weSIsInNjYWxlIiwibGF5ZXIiLCJvYmplY3QiLCJyZW5kZXIiLCJwb3AiLCJmaWx0ZXJTZXQiLCJ1cGRhdGUiLCJhbGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBO0FBRVAsNEJBQXNDO0FBQUEsZ0JBQTFCQyxTQUEwQix1RUFBZCxJQUFJQyxNQUFKLEVBQWM7O0FBQUE7O0FBQ2xDLGlCQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGlCQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLGlCQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNIOztBQU5NO0FBQUE7QUFBQSxtQ0FRQUgsU0FSQSxFQVFXO0FBQ2QscUJBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBWE07QUFBQTtBQUFBLDRDQWErQjtBQUFBLDBDQUEzQkksT0FBMkI7QUFBQSxvQkFBM0JBLE9BQTJCLGlDQUFqQixFQUFpQjtBQUFBLHdDQUFiQyxLQUFhO0FBQUEsb0JBQWJBLEtBQWEsK0JBQUwsQ0FBSzs7QUFDbEMscUJBQUtILE1BQUwsQ0FBWUksSUFBWixDQUFpQixFQUFFRixTQUFTLElBQUlHLEdBQUosQ0FBUUgsT0FBUixDQUFYLEVBQTZCQyxPQUFPLElBQUlBLEtBQXhDLEVBQWpCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBaEJNO0FBQUE7QUFBQSxtQ0FrQkFHLFFBbEJBLEVBa0JVO0FBQUE7O0FBQ2IscUJBQUtOLE1BQUwsQ0FBWU8sT0FBWixDQUFvQixpQkFBUztBQUN6QkQsNkJBQVNGLElBQVQsQ0FBYztBQUNWSSxxQ0FBYSxNQUFLVixTQUFMLENBQWVXLElBQWYsR0FBc0JDLEtBQXRCLENBQTRCLENBQUNDLE1BQU1SLEtBQW5DLENBREg7QUFFVk8sK0JBQU8sSUFBSVgsTUFBSixDQUFXLE1BQUtFLElBQWhCLEVBQXNCLE1BQUtBLElBQTNCO0FBRkcscUJBQWQ7QUFJQVUsMEJBQU1ULE9BQU4sQ0FBY0ssT0FBZCxDQUFzQjtBQUFBLCtCQUFVSyxPQUFPQyxNQUFQLENBQWNQLFFBQWQsQ0FBVjtBQUFBLHFCQUF0QjtBQUNBQSw2QkFBU1EsR0FBVDtBQUNILGlCQVBEO0FBUUg7QUEzQk07QUFBQTtBQUFBLHFDQTZCRTtBQUNMLHFCQUFLZCxNQUFMLENBQVlPLE9BQVosQ0FBb0I7QUFBQSwyQkFBU1YsTUFBTWtCLFNBQU4sQ0FBZ0JKLE1BQU1ULE9BQXRCLEVBQStCLGtCQUFVO0FBQ2xFVSwrQkFBT0ksTUFBUDtBQUNBLCtCQUFPSixPQUFPSyxLQUFQLEVBQVA7QUFDSCxxQkFINEIsQ0FBVDtBQUFBLGlCQUFwQjtBQUlIO0FBbENNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6InBhcmFsbGF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQXBwLmRlZmluZSgoeyBVdGlscyB9KSA9PiBjbGFzcyBQYXJhbGxheCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlID0gbmV3IFZlY3RvcigpKSB7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnpvb20gPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldChyZWZlcmVuY2UpIHtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRMYXllcih7IG9iamVjdHMgPSBbXSwgZGVwdGggPSAxIH0pIHtcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKHsgb2JqZWN0czogbmV3IFNldChvYmplY3RzKSwgZGVwdGg6IDEgLyBkZXB0aCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogdGhpcy5yZWZlcmVuY2UuY29weSgpLnNjYWxlKC1sYXllci5kZXB0aCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlY3Rvcih0aGlzLnpvb20sIHRoaXMuem9vbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxheWVyLm9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBVdGlscy5maWx0ZXJTZXQobGF5ZXIub2JqZWN0cywgb2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==