"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = new (function () {
    function App() {
        _classCallCheck(this, App);

        this.definitions = [];
        this.container = {};
    }

    _createClass(App, [{
        key: "load",
        value: function load() {
            var _this = this;

            this.definitions.forEach(function (_ref) {
                var single = _ref.single,
                    executor = _ref.executor;

                var cls = executor(_this.container);
                var name = cls.name;
                cls = single ? new cls() : cls;
                _this.container[name] = cls;
            });

            return this;
        }
    }, {
        key: "get",
        value: function get() {
            return this.container;
        }
    }, {
        key: "defineSingle",
        value: function defineSingle(executor) {
            this.definitions.push({ single: true, executor: executor });
            return this;
        }
    }, {
        key: "define",
        value: function define(executor) {
            this.definitions.push({ single: false, executor: executor });
            return this;
        }
    }, {
        key: "useIn",
        value: function useIn(global) {
            for (var name in this.container) {
                global[name] = this.container[name];
            }

            return this;
        }
    }, {
        key: "use",
        value: function use() {
            var _this2 = this;

            var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var global = arguments[1];

            dependencies.forEach(function (dependency) {
                return global[dependency] = _this2.definitions[dependency];
            });
            return this;
        }
    }]);

    return App;
}())();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRlZmluaXRpb25zIiwiY29udGFpbmVyIiwiZm9yRWFjaCIsInNpbmdsZSIsImV4ZWN1dG9yIiwiY2xzIiwibmFtZSIsInB1c2giLCJnbG9iYWwiLCJkZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJQSxNQUFNO0FBRU4sbUJBQWM7QUFBQTs7QUFDVixhQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOztBQUxLO0FBQUE7QUFBQSwrQkFPQztBQUFBOztBQUNILGlCQUFLRCxXQUFMLENBQWlCRSxPQUFqQixDQUF5QixnQkFBMEI7QUFBQSxvQkFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLG9CQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQy9DLG9CQUFJQyxNQUFNRCxTQUFTLE1BQUtILFNBQWQsQ0FBVjtBQUNBLG9CQUFJSyxPQUFPRCxJQUFJQyxJQUFmO0FBQ0FELHNCQUFPRixTQUFTLElBQUlFLEdBQUosRUFBVCxHQUFxQkEsR0FBNUI7QUFDQSxzQkFBS0osU0FBTCxDQUFlSyxJQUFmLElBQXVCRCxHQUF2QjtBQUNILGFBTEQ7O0FBT0EsbUJBQU8sSUFBUDtBQUNIO0FBaEJLO0FBQUE7QUFBQSw4QkFrQkE7QUFDRixtQkFBTyxLQUFLSixTQUFaO0FBQ0g7QUFwQks7QUFBQTtBQUFBLHFDQXNCT0csUUF0QlAsRUFzQmlCO0FBQ25CLGlCQUFLSixXQUFMLENBQWlCTyxJQUFqQixDQUFzQixFQUFFSixRQUFRLElBQVYsRUFBZ0JDLGtCQUFoQixFQUF0QjtBQUNBLG1CQUFPLElBQVA7QUFDSDtBQXpCSztBQUFBO0FBQUEsK0JBMkJDQSxRQTNCRCxFQTJCVztBQUNiLGlCQUFLSixXQUFMLENBQWlCTyxJQUFqQixDQUFzQixFQUFFSixRQUFRLEtBQVYsRUFBaUJDLGtCQUFqQixFQUF0QjtBQUNBLG1CQUFPLElBQVA7QUFDSDtBQTlCSztBQUFBO0FBQUEsOEJBZ0NBSSxNQWhDQSxFQWdDUTtBQUNWLGlCQUFLLElBQUlGLElBQVQsSUFBaUIsS0FBS0wsU0FBdEIsRUFBaUM7QUFDN0JPLHVCQUFPRixJQUFQLElBQWUsS0FBS0wsU0FBTCxDQUFlSyxJQUFmLENBQWY7QUFDSDs7QUFFRCxtQkFBTyxJQUFQO0FBQ0g7QUF0Q0s7QUFBQTtBQUFBLDhCQXdDeUI7QUFBQTs7QUFBQSxnQkFBM0JHLFlBQTJCLHVFQUFaLEVBQVk7QUFBQSxnQkFBUkQsTUFBUTs7QUFDM0JDLHlCQUFhUCxPQUFiLENBQXFCO0FBQUEsdUJBQWNNLE9BQU9FLFVBQVAsSUFBcUIsT0FBS1YsV0FBTCxDQUFpQlUsVUFBakIsQ0FBbkM7QUFBQSxhQUFyQjtBQUNBLG1CQUFPLElBQVA7QUFDSDtBQTNDSzs7QUFBQTtBQUFBLE1BQVYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEFwcCA9IG5ldyBjbGFzcyBBcHAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5mb3JFYWNoKCh7IHNpbmdsZSwgZXhlY3V0b3IgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xzID0gZXhlY3V0b3IodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGNscy5uYW1lO1xyXG4gICAgICAgICAgICBjbHMgPSAoc2luZ2xlID8gbmV3IGNscygpIDogY2xzKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJbbmFtZV0gPSBjbHM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lU2luZ2xlKGV4ZWN1dG9yKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKHsgc2luZ2xlOiB0cnVlLCBleGVjdXRvciB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmUoZXhlY3V0b3IpIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zLnB1c2goeyBzaW5nbGU6IGZhbHNlLCBleGVjdXRvciB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1c2VJbihnbG9iYWwpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFtuYW1lXSA9IHRoaXMuY29udGFpbmVyW25hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGRlcGVuZGVuY2llcyA9IFtdLCBnbG9iYWwpIHtcclxuICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChkZXBlbmRlbmN5ID0+IGdsb2JhbFtkZXBlbmRlbmN5XSA9IHRoaXMuZGVmaW5pdGlvbnNbZGVwZW5kZW5jeV0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=