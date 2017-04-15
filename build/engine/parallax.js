"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils;
    return function () {
        function Parallax() {
            var reference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                return new Vector();
            };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvcGFyYWxsYXguanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiVXRpbHMiLCJyZWZlcmVuY2UiLCJWZWN0b3IiLCJsYXllcnMiLCJ6b29tIiwib2JqZWN0cyIsImRlcHRoIiwicHVzaCIsIlNldCIsInJlbmRlcmVyIiwiZm9yRWFjaCIsInRyYW5zbGF0aW9uIiwiY29weSIsInNjYWxlIiwibGF5ZXIiLCJvYmplY3QiLCJyZW5kZXIiLCJwb3AiLCJmaWx0ZXJTZXQiLCJ1cGRhdGUiLCJhbGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBO0FBRVAsNEJBQTRDO0FBQUEsZ0JBQWhDQyxTQUFnQyx1RUFBcEI7QUFBQSx1QkFBTSxJQUFJQyxNQUFKLEVBQU47QUFBQSxhQUFvQjs7QUFBQTs7QUFDeEMsaUJBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsaUJBQUtFLE1BQUwsR0FBYyxFQUFkO0FBQ0EsaUJBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0g7O0FBTk07QUFBQTtBQUFBLG1DQVFBSCxTQVJBLEVBUVc7QUFDZCxxQkFBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFYTTtBQUFBO0FBQUEsNENBYStCO0FBQUEsMENBQTNCSSxPQUEyQjtBQUFBLG9CQUEzQkEsT0FBMkIsaUNBQWpCLEVBQWlCO0FBQUEsd0NBQWJDLEtBQWE7QUFBQSxvQkFBYkEsS0FBYSwrQkFBTCxDQUFLOztBQUNsQyxxQkFBS0gsTUFBTCxDQUFZSSxJQUFaLENBQWlCLEVBQUVGLFNBQVMsSUFBSUcsR0FBSixDQUFRSCxPQUFSLENBQVgsRUFBNkJDLE9BQU8sSUFBSUEsS0FBeEMsRUFBakI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFoQk07QUFBQTtBQUFBLG1DQWtCQUcsUUFsQkEsRUFrQlU7QUFBQTs7QUFDYixxQkFBS04sTUFBTCxDQUFZTyxPQUFaLENBQW9CLGlCQUFTO0FBQ3pCRCw2QkFBU0YsSUFBVCxDQUFjO0FBQ1ZJLHFDQUFhLE1BQUtWLFNBQUwsQ0FBZVcsSUFBZixHQUFzQkMsS0FBdEIsQ0FBNEIsQ0FBQ0MsTUFBTVIsS0FBbkMsQ0FESDtBQUVWTywrQkFBTyxJQUFJWCxNQUFKLENBQVcsTUFBS0UsSUFBaEIsRUFBc0IsTUFBS0EsSUFBM0I7QUFGRyxxQkFBZDtBQUlBVSwwQkFBTVQsT0FBTixDQUFjSyxPQUFkLENBQXNCO0FBQUEsK0JBQVVLLE9BQU9DLE1BQVAsQ0FBY1AsUUFBZCxDQUFWO0FBQUEscUJBQXRCO0FBQ0FBLDZCQUFTUSxHQUFUO0FBQ0gsaUJBUEQ7QUFRSDtBQTNCTTtBQUFBO0FBQUEscUNBNkJFO0FBQ0wscUJBQUtkLE1BQUwsQ0FBWU8sT0FBWixDQUFvQjtBQUFBLDJCQUFTVixNQUFNa0IsU0FBTixDQUFnQkosTUFBTVQsT0FBdEIsRUFBK0Isa0JBQVU7QUFDbEVVLCtCQUFPSSxNQUFQO0FBQ0EsK0JBQU9KLE9BQU9LLEtBQVAsRUFBUDtBQUNILHFCQUg0QixDQUFUO0FBQUEsaUJBQXBCO0FBSUg7QUFsQ007O0FBQUE7QUFBQTtBQUFBLENBQVgiLCJmaWxlIjoicGFyYWxsYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7IFV0aWxzIH0pID0+IGNsYXNzIFBhcmFsbGF4IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UgPSAoKSA9PiBuZXcgVmVjdG9yKCkpIHtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0KHJlZmVyZW5jZSkge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExheWVyKHsgb2JqZWN0cyA9IFtdLCBkZXB0aCA9IDEgfSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goeyBvYmplY3RzOiBuZXcgU2V0KG9iamVjdHMpLCBkZXB0aDogMSAvIGRlcHRoIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0aGlzLnJlZmVyZW5jZS5jb3B5KCkuc2NhbGUoLWxheWVyLmRlcHRoKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjdG9yKHRoaXMuem9vbSwgdGhpcy56b29tKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGF5ZXIub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnBvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IFV0aWxzLmZpbHRlclNldChsYXllci5vYmplY3RzLCBvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuYWxpdmUoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19