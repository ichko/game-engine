'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Vector = _ref.Vector;
    return function () {
        function IO(width, height) {
            _classCallCheck(this, IO);

            this.width = width;
            this.height = height;
            this.mouse = new Vector(0, 300);

            this.keyHandlers = {};
            this.keyStates = {};

            this.bindEvents();
        }

        _createClass(IO, [{
            key: 'callHandlers',
            value: function callHandlers() {
                for (var name in this.keyHandlers) {
                    if (this.keyStates[name]) {
                        this.keyHandlers[name].handeler();
                    } else {
                        this.keyHandlers[name].reverseHandler && this.keyHandlers[name].reverseHandler();
                    }
                }
            }
        }, {
            key: 'onMouse',
            value: function onMouse(downHandler, upHandler) {
                window.addEventListener('mousedown', downHandler);
                window.addEventListener('mouseup', upHandler);

                window.addEventListener('touchstart', downHandler);
                window.addEventListener('touchend', upHandler);

                return this;
            }
        }, {
            key: 'onKey',
            value: function onKey(key, handeler, reverseHandler) {
                this.keyHandlers[key] = { handeler: handeler, reverseHandler: reverseHandler };
                return this;
            }
        }, {
            key: 'changeTouch',
            value: function changeTouch(_ref2) {
                var changedTouches = _ref2.changedTouches;

                this.mouse.set(changedTouches[0].pageX - this.width / 2, -changedTouches[0].pageY + this.height / 2);
            }
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                var _this = this;

                window.addEventListener('mousemove', function (_ref3) {
                    var x = _ref3.x,
                        y = _ref3.y;
                    return _this.mouse.set(x - _this.width / 2, -y + _this.height / 2);
                });

                window.addEventListener('touchmove', function (e) {
                    return _this.changeTouch(e);
                });
                window.addEventListener('touchstart', function (e) {
                    return _this.changeTouch(e);
                });

                window.addEventListener('mousedown', function (_ref4) {
                    var x = _ref4.x,
                        y = _ref4.y;
                    return _this.mouseDown = true;
                });
                window.addEventListener('mouseup', function (_ref5) {
                    var x = _ref5.x,
                        y = _ref5.y;
                    return _this.mouseDown = false;
                });

                window.addEventListener('keydown', function (_ref6) {
                    var key = _ref6.key;
                    return _this.keyStates[key] = true;
                });
                window.addEventListener('keyup', function (_ref7) {
                    var key = _ref7.key;
                    return _this.keyStates[key] = false;
                });
            }
        }]);

        return IO;
    }();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pby5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJWZWN0b3IiLCJ3aWR0aCIsImhlaWdodCIsIm1vdXNlIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwibmFtZSIsImhhbmRlbGVyIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VkVG91Y2hlcyIsInNldCIsInBhZ2VYIiwicGFnZVkiLCJ4IiwieSIsImUiLCJjaGFuZ2VUb3VjaCIsIm1vdXNlRG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBO0FBRVAsb0JBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLGlCQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYSxJQUFJSCxNQUFKLENBQVcsQ0FBWCxFQUFjLEdBQWQsQ0FBYjs7QUFFQSxpQkFBS0ksV0FBTCxHQUFtQixFQUFuQjtBQUNBLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBLGlCQUFLQyxVQUFMO0FBQ0g7O0FBWE07QUFBQTtBQUFBLDJDQWFRO0FBQ1gscUJBQUssSUFBSUMsSUFBVCxJQUFpQixLQUFLSCxXQUF0QixFQUFtQztBQUMvQix3QkFBSSxLQUFLQyxTQUFMLENBQWVFLElBQWYsQ0FBSixFQUEwQjtBQUN0Qiw2QkFBS0gsV0FBTCxDQUFpQkcsSUFBakIsRUFBdUJDLFFBQXZCO0FBQ0gscUJBRkQsTUFFTztBQUNILDZCQUFLSixXQUFMLENBQWlCRyxJQUFqQixFQUF1QkUsY0FBdkIsSUFBeUMsS0FBS0wsV0FBTCxDQUFpQkcsSUFBakIsRUFBdUJFLGNBQXZCLEVBQXpDO0FBQ0g7QUFDSjtBQUNKO0FBckJNO0FBQUE7QUFBQSxvQ0F1QkNDLFdBdkJELEVBdUJjQyxTQXZCZCxFQXVCeUI7QUFDNUJDLHVCQUFPQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ0gsV0FBckM7QUFDQUUsdUJBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DRixTQUFuQzs7QUFFQUMsdUJBQU9DLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDSCxXQUF0QztBQUNBRSx1QkFBT0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0NGLFNBQXBDOztBQUVBLHVCQUFPLElBQVA7QUFDSDtBQS9CTTtBQUFBO0FBQUEsa0NBaUNERyxHQWpDQyxFQWlDSU4sUUFqQ0osRUFpQ2NDLGNBakNkLEVBaUM4QjtBQUNqQyxxQkFBS0wsV0FBTCxDQUFpQlUsR0FBakIsSUFBd0IsRUFBRU4sa0JBQUYsRUFBWUMsOEJBQVosRUFBeEI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFwQ007QUFBQTtBQUFBLCtDQXNDeUI7QUFBQSxvQkFBbEJNLGNBQWtCLFNBQWxCQSxjQUFrQjs7QUFDNUIscUJBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFlRCxlQUFlLENBQWYsRUFBa0JFLEtBQWxCLEdBQTBCLEtBQUtoQixLQUFMLEdBQWEsQ0FBdEQsRUFDZ0IsQ0FBQ2MsZUFBZSxDQUFmLEVBQWtCRyxLQUFuQixHQUEyQixLQUFLaEIsTUFBTCxHQUFjLENBRHpEO0FBRUg7QUF6Q007QUFBQTtBQUFBLHlDQTJDTTtBQUFBOztBQUNUVSx1QkFBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUM7QUFBQSx3QkFBR00sQ0FBSCxTQUFHQSxDQUFIO0FBQUEsd0JBQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLDJCQUNqQyxNQUFLakIsS0FBTCxDQUFXYSxHQUFYLENBQWVHLElBQUksTUFBS2xCLEtBQUwsR0FBYSxDQUFoQyxFQUFtQyxDQUFDbUIsQ0FBRCxHQUFLLE1BQUtsQixNQUFMLEdBQWMsQ0FBdEQsQ0FEaUM7QUFBQSxpQkFBckM7O0FBR0FVLHVCQUFPQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDUSxDQUFEO0FBQUEsMkJBQU8sTUFBS0MsV0FBTCxDQUFpQkQsQ0FBakIsQ0FBUDtBQUFBLGlCQUFyQztBQUNBVCx1QkFBT0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsVUFBQ1EsQ0FBRDtBQUFBLDJCQUFPLE1BQUtDLFdBQUwsQ0FBaUJELENBQWpCLENBQVA7QUFBQSxpQkFBdEM7O0FBRUFULHVCQUFPQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQztBQUFBLHdCQUFHTSxDQUFILFNBQUdBLENBQUg7QUFBQSx3QkFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsMkJBQWMsTUFBS0csU0FBTCxHQUFpQixJQUEvQjtBQUFBLGlCQUFyQztBQUNBWCx1QkFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUM7QUFBQSx3QkFBR00sQ0FBSCxTQUFHQSxDQUFIO0FBQUEsd0JBQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLDJCQUFjLE1BQUtHLFNBQUwsR0FBaUIsS0FBL0I7QUFBQSxpQkFBbkM7O0FBRUFYLHVCQUFPQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQztBQUFBLHdCQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSwyQkFBYSxNQUFLVCxTQUFMLENBQWVTLEdBQWYsSUFBc0IsSUFBbkM7QUFBQSxpQkFBbkM7QUFDQUYsdUJBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDO0FBQUEsd0JBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLDJCQUFhLE1BQUtULFNBQUwsQ0FBZVMsR0FBZixJQUFzQixLQUFuQztBQUFBLGlCQUFqQztBQUNIO0FBdkRNOztBQUFBO0FBQUE7QUFBQSxDQUFYIiwiZmlsZSI6ImlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiQXBwLmRlZmluZSgoeyBWZWN0b3IgfSkgPT4gY2xhc3MgSU8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IG5ldyBWZWN0b3IoMCwgMzAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMua2V5U3RhdGVzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxIYW5kbGVycygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMua2V5SGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5U3RhdGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLmhhbmRlbGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyICYmIHRoaXMua2V5SGFuZGxlcnNbbmFtZV0ucmV2ZXJzZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlKGRvd25IYW5kbGVyLCB1cEhhbmRsZXIpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkb3duSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXkoa2V5LCBoYW5kZWxlciwgcmV2ZXJzZUhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXJzW2tleV0gPSB7IGhhbmRlbGVyLCByZXZlcnNlSGFuZGxlciB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRvdWNoKHsgY2hhbmdlZFRvdWNoZXMgfSkge1xyXG4gICAgICAgIHRoaXMubW91c2Uuc2V0KGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSArIHRoaXMuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyB4LCB5IH0pID0+XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Uuc2V0KHggLSB0aGlzLndpZHRoIC8gMiwgLXkgKyB0aGlzLmhlaWdodCAvIDIpKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLmNoYW5nZVRvdWNoKGUpKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICh7IHgsIHkgfSkgPT4gdGhpcy5tb3VzZURvd24gPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXkgfSkgPT4gdGhpcy5rZXlTdGF0ZXNba2V5XSA9IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=