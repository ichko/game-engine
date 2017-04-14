'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils,
        Circle = _ref.Circle;
    return function () {
        function Environment(camera) {
            _classCallCheck(this, Environment);

            this.camera = camera;
            this.width = width;
            this.height = height;

            this.container = {
                frontBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(220, 0, 100, 0.6)' }, size: 9 }), depth: 1.1 },
                frontSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(0, 200, 100, 0.6)' }, size: 7 }), depth: 1.2 },
                backBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(240, 120, 0, 0.6)' }, size: 5 }), depth: 1.4 },
                backSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(50, 100, 200, 0.6)' }, size: 3 }), depth: 1.8 }
            };
        }

        _createClass(Environment, [{
            key: 'circleGenerator',
            value: function circleGenerator(count) {
                var _this = this;

                var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    size = _ref2.size,
                    style = _ref2.style;

                return Utils.range(count, function () {
                    return new Circle({
                        position: Vector.random(-width / 2, width / 2, -_this.height / 2, _this.height / 2),
                        radius: Utils.random(1, size),
                        style: style
                    });
                });
            }
        }, {
            key: 'outOfBounds',
            value: function outOfBounds() {
                var _this2 = this;

                var _loop = function _loop(name) {
                    var layer = _this2.container[name];
                    layer.elements.forEach(function (element) {
                        var cameraPos = _this2.camera.position.copy().scale(1 / layer.depth);

                        if (cameraPos.x - element.position.x > _this2.width / 2) {
                            element.position.x = cameraPos.x + _this2.width / 2 - (cameraPos.x - element.position.x) % (_this2.width / 2);
                        }
                        if (element.position.x - cameraPos.x > _this2.width / 2) {
                            element.position.x = cameraPos.x - _this2.width / 2 + (cameraPos.x - element.position.x) % (_this2.width / 2);
                        }

                        if (cameraPos.y - element.position.y > _this2.height / 2) {
                            element.position.y = cameraPos.y + _this2.height - (cameraPos.y - element.position.y) % _this2.height;
                        }
                        if (element.position.y - cameraPos.y > _this2.height / 2) {
                            element.position.y = cameraPos.y + (cameraPos.y - element.position.y) % _this2.height;
                        }
                    });
                };

                for (var name in this.container) {
                    _loop(name);
                }
            }
        }]);

        return Environment;
    }();
});
//# sourceMappingURL=environment.js.map