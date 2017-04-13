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