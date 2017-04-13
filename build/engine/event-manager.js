"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.defineSingle(function () {
    return function () {
        function EventManager() {
            _classCallCheck(this, EventManager);

            this.container = {};
        }

        _createClass(EventManager, [{
            key: "register",
            value: function register(name, condition, context) {
                this.container[name] = { condition: condition, context: context, handlers: [] };
                return this;
            }
        }, {
            key: "on",
            value: function on(elements, name, executor) {
                if (this.container[name]) {
                    this.container[name].handlers.push({ executor: executor, elements: elements });
                }

                return this;
            }
        }, {
            key: "triggerEvents",
            value: function triggerEvents() {
                var _this = this;

                var _loop = function _loop(name) {
                    var _container$name = _this.container[name],
                        condition = _container$name.condition,
                        context = _container$name.context,
                        handlers = _container$name.handlers;

                    handlers.forEach(function (_ref) {
                        var executor = _ref.executor,
                            elements = _ref.elements;
                        return elements.filter(function (element) {
                            return condition(element);
                        }).forEach(function (element) {
                            return executor(element);
                        });
                    });
                };

                for (var name in this.container) {
                    _loop(name);
                }
            }
        }]);

        return EventManager;
    }();
});