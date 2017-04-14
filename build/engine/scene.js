"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function Scene() {
            _classCallCheck(this, Scene);

            this.container = [];
        }

        _createClass(Scene, [{
            key: "add",
            value: function add() {
                for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
                    objects[_key] = arguments[_key];
                }

                this.container = this.container.concat(objects);
                return this;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                this.container.forEach(function (object) {
                    return object.render && object.render(renderer);
                });
            }
        }, {
            key: "update",
            value: function update(params) {
                this.container = this.container.filter(function (object) {
                    if (object.update) {
                        object.update(params);
                        if (typeof object.alive !== "undefined") {
                            return object.alive();
                        }

                        return true;
                    }
                });
            }
        }]);

        return Scene;
    }();
});
//# sourceMappingURL=scene.js.map