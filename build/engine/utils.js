"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.defineSingle(function () {
    return function () {
        function Utils() {
            _classCallCheck(this, Utils);
        }

        _createClass(Utils, [{
            key: "random",
            value: function random() {
                var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

                return Math.random() * (max - min) + min;
            }
        }, {
            key: "randomArray",
            value: function randomArray(array) {
                return array[Math.floor(this.random(0, array.length))];
            }
        }, {
            key: "range",
            value: function range(size, handler) {
                return Array.from(Array(Math.round(size)).keys()).map(handler);
            }
        }, {
            key: "filterSet",
            value: function filterSet(set, predicate) {
                set.forEach(function (element) {
                    if (!predicate(element)) {
                        set.delete(element);
                    }
                });

                return set;
            }
        }]);

        return Utils;
    }();
});
//# sourceMappingURL=utils.js.map