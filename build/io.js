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
            key: 'bindEvents',
            value: function bindEvents() {
                var _this = this;

                window.addEventListener('mousemove', function (_ref2) {
                    var x = _ref2.x,
                        y = _ref2.y;
                    return _this.mouse.set(x - _this.width / 2, -y + _this.height / 2);
                });
                window.addEventListener('touchmove', function (_ref3) {
                    var changedTouches = _ref3.changedTouches;

                    _this.mouse.set(changedTouches[0].pageX - _this.width / 2, -changedTouches[0].pageY + _this.height / 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pby5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkZWZpbmUiLCJWZWN0b3IiLCJ3aWR0aCIsImhlaWdodCIsIm1vdXNlIiwia2V5SGFuZGxlcnMiLCJrZXlTdGF0ZXMiLCJiaW5kRXZlbnRzIiwibmFtZSIsImhhbmRlbGVyIiwicmV2ZXJzZUhhbmRsZXIiLCJkb3duSGFuZGxlciIsInVwSGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJ4IiwieSIsInNldCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlRG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBO0FBRVAsb0JBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLGlCQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYSxJQUFJSCxNQUFKLENBQVcsQ0FBWCxFQUFjLEdBQWQsQ0FBYjs7QUFFQSxpQkFBS0ksV0FBTCxHQUFtQixFQUFuQjtBQUNBLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBLGlCQUFLQyxVQUFMO0FBQ0g7O0FBWE07QUFBQTtBQUFBLDJDQWFRO0FBQ1gscUJBQUssSUFBSUMsSUFBVCxJQUFpQixLQUFLSCxXQUF0QixFQUFtQztBQUMvQix3QkFBSSxLQUFLQyxTQUFMLENBQWVFLElBQWYsQ0FBSixFQUEwQjtBQUN0Qiw2QkFBS0gsV0FBTCxDQUFpQkcsSUFBakIsRUFBdUJDLFFBQXZCO0FBQ0gscUJBRkQsTUFFTztBQUNILDZCQUFLSixXQUFMLENBQWlCRyxJQUFqQixFQUF1QkUsY0FBdkIsSUFBeUMsS0FBS0wsV0FBTCxDQUFpQkcsSUFBakIsRUFBdUJFLGNBQXZCLEVBQXpDO0FBQ0g7QUFDSjtBQUNKO0FBckJNO0FBQUE7QUFBQSxvQ0F1QkNDLFdBdkJELEVBdUJjQyxTQXZCZCxFQXVCeUI7QUFDNUJDLHVCQUFPQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ0gsV0FBckM7QUFDQUUsdUJBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DRixTQUFuQzs7QUFFQUMsdUJBQU9DLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDSCxXQUF0QztBQUNBRSx1QkFBT0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0NGLFNBQXBDOztBQUVBLHVCQUFPLElBQVA7QUFDSDtBQS9CTTtBQUFBO0FBQUEsa0NBaUNERyxHQWpDQyxFQWlDSU4sUUFqQ0osRUFpQ2NDLGNBakNkLEVBaUM4QjtBQUNqQyxxQkFBS0wsV0FBTCxDQUFpQlUsR0FBakIsSUFBd0IsRUFBRU4sa0JBQUYsRUFBWUMsOEJBQVosRUFBeEI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFwQ007QUFBQTtBQUFBLHlDQXNDTTtBQUFBOztBQUNURyx1QkFBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUM7QUFBQSx3QkFBR0UsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsd0JBQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLDJCQUNqQyxNQUFLYixLQUFMLENBQVdjLEdBQVgsQ0FBZUYsSUFBSSxNQUFLZCxLQUFMLEdBQWEsQ0FBaEMsRUFBbUMsQ0FBQ2UsQ0FBRCxHQUFLLE1BQUtkLE1BQUwsR0FBYyxDQUF0RCxDQURpQztBQUFBLGlCQUFyQztBQUVBVSx1QkFBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsaUJBQXdCO0FBQUEsd0JBQXJCSyxjQUFxQixTQUFyQkEsY0FBcUI7O0FBQ3pELDBCQUFLZixLQUFMLENBQVdjLEdBQVgsQ0FBZUMsZUFBZSxDQUFmLEVBQWtCQyxLQUFsQixHQUEwQixNQUFLbEIsS0FBTCxHQUFhLENBQXRELEVBQ2UsQ0FBQ2lCLGVBQWUsQ0FBZixFQUFrQkUsS0FBbkIsR0FBMkIsTUFBS2xCLE1BQUwsR0FBYyxDQUR4RDtBQUVILGlCQUhEOztBQUtBVSx1QkFBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUM7QUFBQSx3QkFBR0UsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsd0JBQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLDJCQUFjLE1BQUtLLFNBQUwsR0FBaUIsSUFBL0I7QUFBQSxpQkFBckM7QUFDQVQsdUJBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DO0FBQUEsd0JBQUdFLENBQUgsU0FBR0EsQ0FBSDtBQUFBLHdCQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSwyQkFBYyxNQUFLSyxTQUFMLEdBQWlCLEtBQS9CO0FBQUEsaUJBQW5DOztBQUVBVCx1QkFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUM7QUFBQSx3QkFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsMkJBQWEsTUFBS1QsU0FBTCxDQUFlUyxHQUFmLElBQXNCLElBQW5DO0FBQUEsaUJBQW5DO0FBQ0FGLHVCQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQztBQUFBLHdCQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSwyQkFBYSxNQUFLVCxTQUFMLENBQWVTLEdBQWYsSUFBc0IsS0FBbkM7QUFBQSxpQkFBakM7QUFDSDtBQW5ETTs7QUFBQTtBQUFBO0FBQUEsQ0FBWCIsImZpbGUiOiJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIkFwcC5kZWZpbmUoKHsgVmVjdG9yIH0pID0+IGNsYXNzIElPIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubW91c2UgPSBuZXcgVmVjdG9yKDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmtleUhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVN0YXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5oYW5kZWxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1tuYW1lXS5yZXZlcnNlSGFuZGxlciAmJiB0aGlzLmtleUhhbmRsZXJzW25hbWVdLnJldmVyc2VIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZShkb3duSGFuZGxlciwgdXBIYW5kbGVyKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd25IYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bkhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleSwgaGFuZGVsZXIsIHJldmVyc2VIYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyc1trZXldID0geyBoYW5kZWxlciwgcmV2ZXJzZUhhbmRsZXIgfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyB4LCB5IH0pID0+XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Uuc2V0KHggLSB0aGlzLndpZHRoIC8gMiwgLXkgKyB0aGlzLmhlaWdodCAvIDIpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnNldChjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAtY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyB0aGlzLmhlaWdodCAvIDIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoeyB4LCB5IH0pID0+IHRoaXMubW91c2VEb3duID0gZmFsc2UpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleSB9KSA9PiB0aGlzLmtleVN0YXRlc1trZXldID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHsga2V5IH0pID0+IHRoaXMua2V5U3RhdGVzW2tleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19