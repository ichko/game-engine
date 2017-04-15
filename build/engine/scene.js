"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function Scene() {
            _classCallCheck(this, Scene);

            this.container = [];
        }

        _createClass(Scene, [{
            key: "add",
            value: function add() {
                for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
                    objects[_key] = arguments[_key];
                }

                this.container = this.container.concat(objects);
                return this;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                this.container.forEach(function (object) {
                    return object.render && object.render(renderer);
                });
            }
        }, {
            key: "update",
            value: function update(params) {
                this.container = this.container.filter(function (object) {
                    if (object.update) {
                        object.update(params);
                        if (typeof object.alive !== "undefined") {
                            return object.alive();
                        }

                        return true;
                    }
                });
            }
        }]);

        return Scene;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvc2NlbmUuanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiY29udGFpbmVyIiwib2JqZWN0cyIsImNvbmNhdCIsInJlbmRlcmVyIiwiZm9yRWFjaCIsIm9iamVjdCIsInJlbmRlciIsInBhcmFtcyIsImZpbHRlciIsInVwZGF0ZSIsImFsaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsSUFBSUMsTUFBSixDQUFXO0FBQUE7QUFFUCx5QkFBYztBQUFBOztBQUNWLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0g7O0FBSk07QUFBQTtBQUFBLGtDQU1TO0FBQUEsa0RBQVRDLE9BQVM7QUFBVEEsMkJBQVM7QUFBQTs7QUFDWixxQkFBS0QsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVFLE1BQWYsQ0FBc0JELE9BQXRCLENBQWpCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBVE07QUFBQTtBQUFBLG1DQVdBRSxRQVhBLEVBV1U7QUFDYixxQkFBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCO0FBQUEsMkJBQVVDLE9BQU9DLE1BQVAsSUFBaUJELE9BQU9DLE1BQVAsQ0FBY0gsUUFBZCxDQUEzQjtBQUFBLGlCQUF2QjtBQUNIO0FBYk07QUFBQTtBQUFBLG1DQWVBSSxNQWZBLEVBZVE7QUFDWCxxQkFBS1AsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVRLE1BQWYsQ0FBc0Isa0JBQVU7QUFDN0Msd0JBQUlILE9BQU9JLE1BQVgsRUFBbUI7QUFDZkosK0JBQU9JLE1BQVAsQ0FBY0YsTUFBZDtBQUNBLDRCQUFJLE9BQU9GLE9BQU9LLEtBQWQsS0FBd0IsV0FBNUIsRUFBeUM7QUFDckMsbUNBQU9MLE9BQU9LLEtBQVAsRUFBUDtBQUNIOztBQUVELCtCQUFPLElBQVA7QUFDSDtBQUNKLGlCQVRnQixDQUFqQjtBQVVIO0FBMUJNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiQXBwLmRlZmluZSgoKSA9PiBjbGFzcyBTY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoLi4ub2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY29uY2F0KG9iamVjdHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihyZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5yZW5kZXIgJiYgb2JqZWN0LnJlbmRlcihyZW5kZXJlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbHRlcihvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuYWxpdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmFsaXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=