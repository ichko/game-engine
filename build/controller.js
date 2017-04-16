'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Vector = _ref.Vector,
        Circle = _ref.Circle;
    return function () {
        function Controller(io, width, height) {
            _classCallCheck(this, Controller);

            this.radius = Math.min(width, height) / 5;
            this.color = 'red';
            this.center = new Vector(-width / 2 + this.radius + 40, -height / 2 + this.radius + 40);
            this.direction = new Vector();

            this.controllerSpring = new SpringyVector({
                elasticity: 0.1,
                damping: 0.5,
                target: function target() {
                    return io.mouse;
                }
            });
            this.bigCircle = new Circle({
                radius: this.radius,
                position: this.center,
                style: { color: this.color, opacity: 0.5 }
            });
            this.smallCircle = new Circle({
                radius: this.radius / 1.5,
                position: this.center,
                style: { color: this.color, opacity: 0.5 }
            });
        }

        _createClass(Controller, [{
            key: 'render',
            value: function render(renderer) {
                this.bigCircle.render(renderer);
                this.smallCircle.render(renderer);
            }
        }, {
            key: 'update',
            value: function update() {
                this.bigCircle.style.color = this.color;
                this.smallCircle.style.color = this.color;
                this.controllerSpring.update();

                this.direction = this.controllerSpring.position.copy().subtract(this.center).cut(this.radius / 2);
                this.smallCircle.position = this.center.copy().add(this.direction);
            }
        }]);

        return Controller;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRlZmluZSIsIlZlY3RvciIsIkNpcmNsZSIsImlvIiwid2lkdGgiLCJoZWlnaHQiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwiY29sb3IiLCJjZW50ZXIiLCJkaXJlY3Rpb24iLCJjb250cm9sbGVyU3ByaW5nIiwiU3ByaW5neVZlY3RvciIsImVsYXN0aWNpdHkiLCJkYW1waW5nIiwidGFyZ2V0IiwibW91c2UiLCJiaWdDaXJjbGUiLCJwb3NpdGlvbiIsInN0eWxlIiwib3BhY2l0eSIsInNtYWxsQ2lyY2xlIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjb3B5Iiwic3VidHJhY3QiLCJjdXQiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxJQUFJQyxNQUFKLENBQVc7QUFBQSxRQUNQQyxNQURPLFFBQ1BBLE1BRE87QUFBQSxRQUVQQyxNQUZPLFFBRVBBLE1BRk87QUFBQTtBQUtQLDRCQUFZQyxFQUFaLEVBQWdCQyxLQUFoQixFQUF1QkMsTUFBdkIsRUFBK0I7QUFBQTs7QUFDM0IsaUJBQUtDLE1BQUwsR0FBY0MsS0FBS0MsR0FBTCxDQUFTSixLQUFULEVBQWdCQyxNQUFoQixJQUEwQixDQUF4QztBQUNBLGlCQUFLSSxLQUFMLEdBQWEsS0FBYjtBQUNBLGlCQUFLQyxNQUFMLEdBQWMsSUFBSVQsTUFBSixDQUFXLENBQUNHLEtBQUQsR0FBUyxDQUFULEdBQWEsS0FBS0UsTUFBbEIsR0FBMkIsRUFBdEMsRUFBMEMsQ0FBQ0QsTUFBRCxHQUFVLENBQVYsR0FBYyxLQUFLQyxNQUFuQixHQUE0QixFQUF0RSxDQUFkO0FBQ0EsaUJBQUtLLFNBQUwsR0FBaUIsSUFBSVYsTUFBSixFQUFqQjs7QUFFQSxpQkFBS1csZ0JBQUwsR0FBd0IsSUFBSUMsYUFBSixDQUFrQjtBQUN0Q0MsNEJBQVksR0FEMEI7QUFFdENDLHlCQUFTLEdBRjZCO0FBR3RDQyx3QkFBUTtBQUFBLDJCQUFNYixHQUFHYyxLQUFUO0FBQUE7QUFIOEIsYUFBbEIsQ0FBeEI7QUFLQSxpQkFBS0MsU0FBTCxHQUFpQixJQUFJaEIsTUFBSixDQUFXO0FBQ3hCSSx3QkFBUSxLQUFLQSxNQURXO0FBRXhCYSwwQkFBVSxLQUFLVCxNQUZTO0FBR3hCVSx1QkFBTyxFQUFFWCxPQUFPLEtBQUtBLEtBQWQsRUFBcUJZLFNBQVMsR0FBOUI7QUFIaUIsYUFBWCxDQUFqQjtBQUtBLGlCQUFLQyxXQUFMLEdBQW1CLElBQUlwQixNQUFKLENBQVc7QUFDMUJJLHdCQUFRLEtBQUtBLE1BQUwsR0FBYyxHQURJO0FBRTFCYSwwQkFBVSxLQUFLVCxNQUZXO0FBRzFCVSx1QkFBTyxFQUFFWCxPQUFPLEtBQUtBLEtBQWQsRUFBcUJZLFNBQVMsR0FBOUI7QUFIbUIsYUFBWCxDQUFuQjtBQUtIOztBQTFCTTtBQUFBO0FBQUEsbUNBNEJBRSxRQTVCQSxFQTRCVTtBQUNiLHFCQUFLTCxTQUFMLENBQWVNLE1BQWYsQ0FBc0JELFFBQXRCO0FBQ0EscUJBQUtELFdBQUwsQ0FBaUJFLE1BQWpCLENBQXdCRCxRQUF4QjtBQUNIO0FBL0JNO0FBQUE7QUFBQSxxQ0FpQ0U7QUFDTCxxQkFBS0wsU0FBTCxDQUFlRSxLQUFmLENBQXFCWCxLQUFyQixHQUE2QixLQUFLQSxLQUFsQztBQUNBLHFCQUFLYSxXQUFMLENBQWlCRixLQUFqQixDQUF1QlgsS0FBdkIsR0FBK0IsS0FBS0EsS0FBcEM7QUFDQSxxQkFBS0csZ0JBQUwsQ0FBc0JhLE1BQXRCOztBQUVBLHFCQUFLZCxTQUFMLEdBQWlCLEtBQUtDLGdCQUFMLENBQXNCTyxRQUF0QixDQUErQk8sSUFBL0IsR0FBc0NDLFFBQXRDLENBQStDLEtBQUtqQixNQUFwRCxFQUE0RGtCLEdBQTVELENBQWdFLEtBQUt0QixNQUFMLEdBQWMsQ0FBOUUsQ0FBakI7QUFDQSxxQkFBS2dCLFdBQUwsQ0FBaUJILFFBQWpCLEdBQTRCLEtBQUtULE1BQUwsQ0FBWWdCLElBQVosR0FBbUJHLEdBQW5CLENBQXVCLEtBQUtsQixTQUE1QixDQUE1QjtBQUNIO0FBeENNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6ImNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCh7XHJcbiAgICBWZWN0b3IsXHJcbiAgICBDaXJjbGVcclxufSkgPT4gY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW8sIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gNTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCdcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IoLXdpZHRoIC8gMiArIHRoaXMucmFkaXVzICsgNDAsIC1oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMgKyA0MCk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZyA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgICAgICAgICAgZWxhc3RpY2l0eTogMC4xLFxyXG4gICAgICAgICAgICBkYW1waW5nOiAwLjUsXHJcbiAgICAgICAgICAgIHRhcmdldDogKCkgPT4gaW8ubW91c2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZSA9IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5jZW50ZXIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiAwLjUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUgPSBuZXcgQ2lyY2xlKHtcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyAvIDEuNSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuY2VudGVyLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogMC41IH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLmJpZ0NpcmNsZS5yZW5kZXIocmVuZGVyZXIpO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUucmVuZGVyKHJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5iaWdDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuc21hbGxDaXJjbGUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclNwcmluZy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNvbnRyb2xsZXJTcHJpbmcucG9zaXRpb24uY29weSgpLnN1YnRyYWN0KHRoaXMuY2VudGVyKS5jdXQodGhpcy5yYWRpdXMgLyAyKTtcclxuICAgICAgICB0aGlzLnNtYWxsQ2lyY2xlLnBvc2l0aW9uID0gdGhpcy5jZW50ZXIuY29weSgpLmFkZCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19