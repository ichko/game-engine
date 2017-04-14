"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = new (function () {
    function App() {
        _classCallCheck(this, App);

        this.definitions = [];
        this.container = {};
    }

    _createClass(App, [{
        key: "load",
        value: function load() {
            var _this = this;

            this.definitions.forEach(function (_ref) {
                var single = _ref.single,
                    executor = _ref.executor;

                var cls = executor(_this.container);
                var name = cls.name;
                cls = single ? new cls() : cls;
                _this.container[name] = cls;
            });

            return this;
        }
    }, {
        key: "get",
        value: function get() {
            return this.container;
        }
    }, {
        key: "defineSingle",
        value: function defineSingle(executor) {
            this.definitions.push({ single: true, executor: executor });
            return this;
        }
    }, {
        key: "define",
        value: function define(executor) {
            this.definitions.push({ single: false, executor: executor });
            return this;
        }
    }, {
        key: "useIn",
        value: function useIn(global) {
            for (var name in this.container) {
                global[name] = this.container[name];
            }

            return this;
        }
    }, {
        key: "use",
        value: function use() {
            var _this2 = this;

            var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var global = arguments[1];

            dependencies.forEach(function (dependency) {
                return global[dependency] = _this2.definitions[dependency];
            });
            return this;
        }
    }]);

    return App;
}())();
//# sourceMappingURL=app.js.map