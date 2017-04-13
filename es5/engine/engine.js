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