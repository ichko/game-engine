"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function InstancePool(type) {
            _classCallCheck(this, InstancePool);

            this.type = type;
            this.released = new Set();
            this.alocated = new Set();
        }

        _createClass(InstancePool, [{
            key: "new",
            value: function _new() {
                for (var _len = arguments.length, config = Array(_len), _key = 0; _key < _len; _key++) {
                    config[_key] = arguments[_key];
                }

                if (this.released.size > 0) {
                    var _instance = this.released.values().next().value;
                    _instance.set.apply(_instance, config);
                    this.released.delete(_instance);
                    this.alocated.add(_instance);

                    return _instance;
                }

                var instance = new (Function.prototype.bind.apply(this.type, [null].concat(config)))();
                this.alocated.add(instance);
                return instance;
            }
        }, {
            key: "release",
            value: function release(instance) {
                if (this.alocated.has(instance)) {
                    this.alocated.delete(instance);
                    this.released.add(instance);
                }
            }
        }]);

        return InstancePool;
    }();
});
//# sourceMappingURL=instance-pool.js.map