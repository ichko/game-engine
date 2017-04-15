"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function InstancePool(type) {
            _classCallCheck(this, InstancePool);

            this.type = type;
            this.released = new Set();
            this.alocated = new Set();
        }

        _createClass(InstancePool, [{
            key: "new",
            value: function _new() {
                var instance = undefined;

                for (var _len = arguments.length, config = Array(_len), _key = 0; _key < _len; _key++) {
                    config[_key] = arguments[_key];
                }

                if (this.released.size > 0) {
                    var _instance;

                    instance = this.released.values().next().value;
                    (_instance = instance).set.apply(_instance, config);
                } else {
                    instance = new (Function.prototype.bind.apply(this.type, [null].concat(config)))();
                }

                this.released.delete(instance);
                this.alocated.add(instance);

                return instance;
            }
        }, {
            key: "release",
            value: function release(instance) {
                if (this.alocated.has(instance)) {
                    this.alocated.delete(instance);
                    this.released.add(instance);
                }
            }
        }]);

        return InstancePool;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvaW5zdGFuY2UtcG9vbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJ0eXBlIiwicmVsZWFzZWQiLCJTZXQiLCJhbG9jYXRlZCIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwiY29uZmlnIiwic2l6ZSIsInZhbHVlcyIsIm5leHQiLCJ2YWx1ZSIsInNldCIsImRlbGV0ZSIsImFkZCIsImhhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBO0FBRVAsOEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxpQkFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsaUJBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsR0FBSixFQUFoQjtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLElBQUlELEdBQUosRUFBaEI7QUFDSDs7QUFOTTtBQUFBO0FBQUEsbUNBUVE7QUFDWCxvQkFBSUUsV0FBV0MsU0FBZjs7QUFEVyxrREFBUkMsTUFBUTtBQUFSQSwwQkFBUTtBQUFBOztBQUdYLG9CQUFJLEtBQUtMLFFBQUwsQ0FBY00sSUFBZCxHQUFxQixDQUF6QixFQUE0QjtBQUFBOztBQUN4QkgsK0JBQVcsS0FBS0gsUUFBTCxDQUFjTyxNQUFkLEdBQXVCQyxJQUF2QixHQUE4QkMsS0FBekM7QUFDQSwyQ0FBU0MsR0FBVCxrQkFBZ0JMLE1BQWhCO0FBQ0gsaUJBSEQsTUFHTztBQUNIRixrRUFBZSxLQUFLSixJQUFwQixnQkFBNEJNLE1BQTVCO0FBQ0g7O0FBRUQscUJBQUtMLFFBQUwsQ0FBY1csTUFBZCxDQUFxQlIsUUFBckI7QUFDQSxxQkFBS0QsUUFBTCxDQUFjVSxHQUFkLENBQWtCVCxRQUFsQjs7QUFFQSx1QkFBT0EsUUFBUDtBQUNIO0FBdEJNO0FBQUE7QUFBQSxvQ0F3QkNBLFFBeEJELEVBd0JXO0FBQ2Qsb0JBQUksS0FBS0QsUUFBTCxDQUFjVyxHQUFkLENBQWtCVixRQUFsQixDQUFKLEVBQWlDO0FBQzdCLHlCQUFLRCxRQUFMLENBQWNTLE1BQWQsQ0FBcUJSLFFBQXJCO0FBQ0EseUJBQUtILFFBQUwsQ0FBY1ksR0FBZCxDQUFrQlQsUUFBbEI7QUFDSDtBQUNKO0FBN0JNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6Imluc3RhbmNlLXBvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCgpID0+IGNsYXNzICBJbnN0YW5jZVBvb2wge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5hbG9jYXRlZCA9IG5ldyBTZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcoLi4uY29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWxlYXNlZC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMucmVsZWFzZWQudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoLi4uY29uZmlnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoLi4uY29uZmlnKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVsZWFzZWQuZGVsZXRlKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmFsb2NhdGVkLmFkZChpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxvY2F0ZWQuaGFzKGluc3RhbmNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsb2NhdGVkLmRlbGV0ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQuYWRkKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19