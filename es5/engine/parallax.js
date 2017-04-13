"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function (_ref) {
    var Utils = _ref.Utils;
    return function () {
        function Parallax() {
            var reference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                return new Vector();
            };

            _classCallCheck(this, Parallax);

            this.reference = reference;
            this.layers = [];
            this.zoom = 1;
        }

        _createClass(Parallax, [{
            key: "target",
            value: function target(reference) {
                this.reference = reference;
                return this;
            }
        }, {
            key: "addLayer",
            value: function addLayer(_ref2) {
                var _ref2$objects = _ref2.objects,
                    objects = _ref2$objects === undefined ? [] : _ref2$objects,
                    _ref2$depth = _ref2.depth,
                    depth = _ref2$depth === undefined ? 1 : _ref2$depth;

                this.layers.push({ objects: new Set(objects), depth: 1 / depth });
                return this;
            }
        }, {
            key: "render",
            value: function render(renderer) {
                var _this = this;

                this.layers.forEach(function (layer) {
                    renderer.push({
                        translation: _this.reference.copy().scale(-layer.depth),
                        scale: new Vector(_this.zoom, _this.zoom)
                    });
                    layer.objects.forEach(function (object) {
                        return object.render(renderer);
                    });
                    renderer.pop();
                });
            }
        }, {
            key: "update",
            value: function update() {
                this.layers.forEach(function (layer) {
                    return Utils.filterSet(layer.objects, function (object) {
                        object.update();
                        return object.alive();
                    });
                });
            }
        }]);

        return Parallax;
    }();
});