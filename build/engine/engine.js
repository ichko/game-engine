"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function Engine(renderer, scene) {
            _classCallCheck(this, Engine);

            this.renderer = renderer;
            this.scene = scene;
        }

        _createClass(Engine, [{
            key: "render",
            value: function render() {
                this.scene.render(this.renderer);
                return this;
            }
        }, {
            key: "update",
            value: function update() {
                this.scene.update();
                return this;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.renderer.clear();
                return this;
            }
        }]);

        return Engine;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvZW5naW5lLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRlZmluZSIsInJlbmRlcmVyIiwic2NlbmUiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBO0FBRVAsd0JBQVlDLFFBQVosRUFBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQ3pCLGlCQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGlCQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFMTTtBQUFBO0FBQUEscUNBT0U7QUFDTCxxQkFBS0EsS0FBTCxDQUFXQyxNQUFYLENBQWtCLEtBQUtGLFFBQXZCO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBVk07QUFBQTtBQUFBLHFDQVlFO0FBQ0wscUJBQUtDLEtBQUwsQ0FBV0UsTUFBWDtBQUNBLHVCQUFPLElBQVA7QUFDSDtBQWZNO0FBQUE7QUFBQSxvQ0FpQkM7QUFDSixxQkFBS0gsUUFBTCxDQUFjSSxLQUFkO0FBQ0EsdUJBQU8sSUFBUDtBQUNIO0FBcEJNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6ImVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIkFwcC5kZWZpbmUoKCkgPT4gY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19