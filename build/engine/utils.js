"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.defineSingle(function () {
    return function () {
        function Utils() {
            _classCallCheck(this, Utils);
        }

        _createClass(Utils, [{
            key: "random",
            value: function random() {
                var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

                return Math.random() * (max - min) + min;
            }
        }, {
            key: "randomArray",
            value: function randomArray(array) {
                return array[Math.floor(this.random(0, array.length))];
            }
        }, {
            key: "range",
            value: function range(size, handler) {
                return Array.from(Array(Math.round(size)).keys()).map(handler);
            }
        }, {
            key: "filterSet",
            value: function filterSet(set, predicate) {
                set.forEach(function (element) {
                    if (!predicate(element)) {
                        set.delete(element);
                    }
                });

                return set;
            }
        }]);

        return Utils;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvdXRpbHMuanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lU2luZ2xlIiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsImFycmF5IiwiZmxvb3IiLCJsZW5ndGgiLCJzaXplIiwiaGFuZGxlciIsIkFycmF5IiwiZnJvbSIsInJvdW5kIiwia2V5cyIsIm1hcCIsInNldCIsInByZWRpY2F0ZSIsImZvckVhY2giLCJlbGVtZW50IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsSUFBSUMsWUFBSixDQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQ0FFWTtBQUFBLG9CQUFsQkMsR0FBa0IsdUVBQVosQ0FBWTtBQUFBLG9CQUFUQyxHQUFTLHVFQUFILENBQUc7O0FBQ3JCLHVCQUFPQyxLQUFLQyxNQUFMLE1BQWlCRixNQUFNRCxHQUF2QixJQUE4QkEsR0FBckM7QUFDSDtBQUpZO0FBQUE7QUFBQSx3Q0FNQUksS0FOQSxFQU1PO0FBQ2hCLHVCQUFPQSxNQUFNRixLQUFLRyxLQUFMLENBQVcsS0FBS0YsTUFBTCxDQUFZLENBQVosRUFBZUMsTUFBTUUsTUFBckIsQ0FBWCxDQUFOLENBQVA7QUFDSDtBQVJZO0FBQUE7QUFBQSxrQ0FVUEMsSUFWTyxFQVVEQyxPQVZDLEVBVVE7QUFDakIsdUJBQU9DLE1BQU1DLElBQU4sQ0FBV0QsTUFBTVAsS0FBS1MsS0FBTCxDQUFXSixJQUFYLENBQU4sRUFBd0JLLElBQXhCLEVBQVgsRUFBMkNDLEdBQTNDLENBQStDTCxPQUEvQyxDQUFQO0FBQ0g7QUFaWTtBQUFBO0FBQUEsc0NBY0hNLEdBZEcsRUFjRUMsU0FkRixFQWNhO0FBQ3RCRCxvQkFBSUUsT0FBSixDQUFZLG1CQUFXO0FBQ25CLHdCQUFJLENBQUNELFVBQVVFLE9BQVYsQ0FBTCxFQUF5QjtBQUNyQkgsNEJBQUlJLE1BQUosQ0FBV0QsT0FBWDtBQUNIO0FBQ0osaUJBSkQ7O0FBTUEsdUJBQU9ILEdBQVA7QUFDSDtBQXRCWTs7QUFBQTtBQUFBO0FBQUEsQ0FBakIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lU2luZ2xlKCgpID0+IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICByYW5kb20obWluID0gMCwgbWF4ID0gMSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXJyYXkgKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IodGhpcy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKSldO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmdlKHNpemUsIGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShNYXRoLnJvdW5kKHNpemUpKS5rZXlzKCkpLm1hcChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJTZXQoc2V0LCBwcmVkaWNhdGUpIHtcclxuICAgICAgICBzZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcmVkaWNhdGUoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHNldC5kZWxldGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=