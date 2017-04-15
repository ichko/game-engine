"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.defineSingle(function () {
    return function () {
        function EventManager() {
            _classCallCheck(this, EventManager);

            this.container = {};
        }

        _createClass(EventManager, [{
            key: "register",
            value: function register(name, condition, context) {
                this.container[name] = { condition: condition, context: context, handlers: [] };
                return this;
            }
        }, {
            key: "on",
            value: function on(elements, name, executor) {
                if (this.container[name]) {
                    this.container[name].handlers.push({ executor: executor, elements: elements });
                }

                return this;
            }
        }, {
            key: "triggerEvents",
            value: function triggerEvents() {
                var _this = this;

                var _loop = function _loop(name) {
                    var _container$name = _this.container[name],
                        condition = _container$name.condition,
                        context = _container$name.context,
                        handlers = _container$name.handlers;

                    handlers.forEach(function (_ref) {
                        var executor = _ref.executor,
                            elements = _ref.elements;
                        return elements.filter(function (element) {
                            return condition(element);
                        }).forEach(function (element) {
                            return executor(element);
                        });
                    });
                };

                for (var name in this.container) {
                    _loop(name);
                }
            }
        }]);

        return EventManager;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvZXZlbnQtbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmVTaW5nbGUiLCJjb250YWluZXIiLCJuYW1lIiwiY29uZGl0aW9uIiwiY29udGV4dCIsImhhbmRsZXJzIiwiZWxlbWVudHMiLCJleGVjdXRvciIsInB1c2giLCJmb3JFYWNoIiwiZmlsdGVyIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLFlBQUosQ0FBaUI7QUFBQTtBQUViLGdDQUFjO0FBQUE7O0FBQ1YsaUJBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7QUFKWTtBQUFBO0FBQUEscUNBTUpDLElBTkksRUFNRUMsU0FORixFQU1hQyxPQU5iLEVBTXNCO0FBQy9CLHFCQUFLSCxTQUFMLENBQWVDLElBQWYsSUFBdUIsRUFBRUMsb0JBQUYsRUFBYUMsZ0JBQWIsRUFBc0JDLFVBQVUsRUFBaEMsRUFBdkI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFUWTtBQUFBO0FBQUEsK0JBV1ZDLFFBWFUsRUFXQUosSUFYQSxFQVdNSyxRQVhOLEVBV2dCO0FBQ3pCLG9CQUFJLEtBQUtOLFNBQUwsQ0FBZUMsSUFBZixDQUFKLEVBQTBCO0FBQ3RCLHlCQUFLRCxTQUFMLENBQWVDLElBQWYsRUFBcUJHLFFBQXJCLENBQThCRyxJQUE5QixDQUFtQyxFQUFFRCxrQkFBRixFQUFZRCxrQkFBWixFQUFuQztBQUNIOztBQUVELHVCQUFPLElBQVA7QUFDSDtBQWpCWTtBQUFBO0FBQUEsNENBbUJHO0FBQUE7O0FBQUEsMkNBQ0hKLElBREc7QUFBQSwwQ0FFK0IsTUFBS0QsU0FBTCxDQUFlQyxJQUFmLENBRi9CO0FBQUEsd0JBRUZDLFNBRkUsbUJBRUZBLFNBRkU7QUFBQSx3QkFFU0MsT0FGVCxtQkFFU0EsT0FGVDtBQUFBLHdCQUVrQkMsUUFGbEIsbUJBRWtCQSxRQUZsQjs7QUFHUkEsNkJBQVNJLE9BQVQsQ0FBaUI7QUFBQSw0QkFBR0YsUUFBSCxRQUFHQSxRQUFIO0FBQUEsNEJBQWFELFFBQWIsUUFBYUEsUUFBYjtBQUFBLCtCQUNiQSxTQUNLSSxNQURMLENBQ1k7QUFBQSxtQ0FBV1AsVUFBVVEsT0FBVixDQUFYO0FBQUEseUJBRFosRUFFS0YsT0FGTCxDQUVhO0FBQUEsbUNBQVdGLFNBQVNJLE9BQVQsQ0FBWDtBQUFBLHlCQUZiLENBRGE7QUFBQSxxQkFBakI7QUFIUTs7QUFDWixxQkFBSyxJQUFJVCxJQUFULElBQWlCLEtBQUtELFNBQXRCLEVBQWlDO0FBQUEsMEJBQXhCQyxJQUF3QjtBQU9oQztBQUNKO0FBNUJZOztBQUFBO0FBQUE7QUFBQSxDQUFqQiIsImZpbGUiOiJldmVudC1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiQXBwLmRlZmluZVNpbmdsZSgoKSA9PiBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIobmFtZSwgY29uZGl0aW9uLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0gPSB7IGNvbmRpdGlvbiwgY29udGV4dCwgaGFuZGxlcnM6IFtdIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZWxlbWVudHMsIG5hbWUsIGV4ZWN1dG9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyW25hbWVdLmhhbmRsZXJzLnB1c2goeyBleGVjdXRvciwgZWxlbWVudHMgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyRXZlbnRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgbGV0IHsgY29uZGl0aW9uLCBjb250ZXh0LCBoYW5kbGVycyB9ID0gdGhpcy5jb250YWluZXJbbmFtZV07XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goKHsgZXhlY3V0b3IsIGVsZW1lbnRzIH0pID0+XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBjb25kaXRpb24oZWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBleGVjdXRvcihlbGVtZW50KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19