'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function GameObject() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$position = _ref.position,
                position = _ref$position === undefined ? new Vector() : _ref$position,
                _ref$style = _ref.style,
                style = _ref$style === undefined ? { color: '#f00' } : _ref$style,
                _ref$velocityDamping = _ref.velocityDamping,
                velocityDamping = _ref$velocityDamping === undefined ? 1 : _ref$velocityDamping,
                _ref$velocity = _ref.velocity,
                velocity = _ref$velocity === undefined ? new Vector() : _ref$velocity,
                _ref$rotation = _ref.rotation,
                rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
                _ref$rotationCenter = _ref.rotationCenter,
                rotationCenter = _ref$rotationCenter === undefined ? position : _ref$rotationCenter,
                _ref$size = _ref.size,
                size = _ref$size === undefined ? 1 : _ref$size;

            _classCallCheck(this, GameObject);

            this.position = position;
            this.velocity = velocity;
            this.velocityDamping = velocityDamping;
            this.style = style;
            this.size = size;

            this.rotation = rotation;
            this.rotationCenter = rotationCenter;
            this.dead = false;
        }

        _createClass(GameObject, [{
            key: 'alive',
            value: function alive() {
                return !this.dead;
            }
        }, {
            key: 'render',
            value: function render(renderer) {}
        }, {
            key: 'update',
            value: function update(context) {
                this.updateVelocity(context);
                this.updatePosition(context);
            }
        }, {
            key: 'updatePosition',
            value: function updatePosition() {
                var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    _ref2$dt = _ref2.dt,
                    dt = _ref2$dt === undefined ? 1 : _ref2$dt;

                this.position.add(this.velocity.copy().scale(dt));
            }
        }, {
            key: 'updateVelocity',
            value: function updateVelocity() {
                var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    _ref3$dt = _ref3.dt,
                    dt = _ref3$dt === undefined ? 1 : _ref3$dt;

                this.velocity.scale(this.velocityDamping);
            }
        }], [{
            key: 'extend',
            value: function extend(func) {
                this.prototype[func.name] = func;
                return this;
            }
        }]);

        return GameObject;
    }();
});
//# sourceMappingURL=game-object.js.map