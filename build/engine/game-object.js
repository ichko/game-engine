'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

App.define(function () {
    return function () {
        function GameObject(config) {
            _classCallCheck(this, GameObject);

            this.set(config);
        }

        _createClass(GameObject, [{
            key: 'set',
            value: function set() {
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

                this.position = position;
                this.velocity = velocity;
                this.velocityDamping = velocityDamping;
                this.style = style;
                this.size = size;

                this.rotation = rotation;
                this.rotationCenter = rotationCenter;
                this.dead = false;
            }
        }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3QuanMiXSwibmFtZXMiOlsiQXBwIiwiZGVmaW5lIiwiY29uZmlnIiwic2V0IiwicG9zaXRpb24iLCJWZWN0b3IiLCJzdHlsZSIsImNvbG9yIiwidmVsb2NpdHlEYW1waW5nIiwidmVsb2NpdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uQ2VudGVyIiwic2l6ZSIsImRlYWQiLCJyZW5kZXJlciIsImNvbnRleHQiLCJ1cGRhdGVWZWxvY2l0eSIsInVwZGF0ZVBvc2l0aW9uIiwiZHQiLCJhZGQiLCJjb3B5Iiwic2NhbGUiLCJmdW5jIiwicHJvdG90eXBlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLElBQUlDLE1BQUosQ0FBVztBQUFBO0FBRVAsNEJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsaUJBQUtDLEdBQUwsQ0FBU0QsTUFBVDtBQUNIOztBQUpNO0FBQUE7QUFBQSxrQ0FjQztBQUFBLCtGQUFKLEVBQUk7QUFBQSx5Q0FQSkUsUUFPSTtBQUFBLG9CQVBKQSxRQU9JLGlDQVBPLElBQUlDLE1BQUosRUFPUDtBQUFBLHNDQU5KQyxLQU1JO0FBQUEsb0JBTkpBLEtBTUksOEJBTkksRUFBRUMsT0FBTyxNQUFULEVBTUo7QUFBQSxnREFMSkMsZUFLSTtBQUFBLG9CQUxKQSxlQUtJLHdDQUxjLENBS2Q7QUFBQSx5Q0FKSkMsUUFJSTtBQUFBLG9CQUpKQSxRQUlJLGlDQUpPLElBQUlKLE1BQUosRUFJUDtBQUFBLHlDQUhKSyxRQUdJO0FBQUEsb0JBSEpBLFFBR0ksaUNBSE8sQ0FHUDtBQUFBLCtDQUZKQyxjQUVJO0FBQUEsb0JBRkpBLGNBRUksdUNBRmFQLFFBRWI7QUFBQSxxQ0FESlEsSUFDSTtBQUFBLG9CQURKQSxJQUNJLDZCQURHLENBQ0g7O0FBQ0oscUJBQUtSLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUtLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUtELGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EscUJBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFCQUFLTSxJQUFMLEdBQVlBLElBQVo7O0FBRUEscUJBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EscUJBQUtFLElBQUwsR0FBWSxLQUFaO0FBQ0g7QUF4Qk07QUFBQTtBQUFBLG9DQTBCQztBQUNKLHVCQUFPLENBQUMsS0FBS0EsSUFBYjtBQUNIO0FBNUJNO0FBQUE7QUFBQSxtQ0E4QkFDLFFBOUJBLEVBOEJVLENBQUc7QUE5QmI7QUFBQTtBQUFBLG1DQWdDQUMsT0FoQ0EsRUFnQ1M7QUFDWixxQkFBS0MsY0FBTCxDQUFvQkQsT0FBcEI7QUFDQSxxQkFBS0UsY0FBTCxDQUFvQkYsT0FBcEI7QUFDSDtBQW5DTTtBQUFBO0FBQUEsNkNBcUN5QjtBQUFBLGdHQUFKLEVBQUk7QUFBQSxxQ0FBZkcsRUFBZTtBQUFBLG9CQUFmQSxFQUFlLDRCQUFWLENBQVU7O0FBQzVCLHFCQUFLZCxRQUFMLENBQWNlLEdBQWQsQ0FBa0IsS0FBS1YsUUFBTCxDQUFjVyxJQUFkLEdBQXFCQyxLQUFyQixDQUEyQkgsRUFBM0IsQ0FBbEI7QUFDSDtBQXZDTTtBQUFBO0FBQUEsNkNBeUN5QjtBQUFBLGdHQUFKLEVBQUk7QUFBQSxxQ0FBZkEsRUFBZTtBQUFBLG9CQUFmQSxFQUFlLDRCQUFWLENBQVU7O0FBQzVCLHFCQUFLVCxRQUFMLENBQWNZLEtBQWQsQ0FBb0IsS0FBS2IsZUFBekI7QUFDSDtBQTNDTTtBQUFBO0FBQUEsbUNBNkNPYyxJQTdDUCxFQTZDYTtBQUNoQixxQkFBS0MsU0FBTCxDQUFlRCxLQUFLRSxJQUFwQixJQUE0QkYsSUFBNUI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFoRE07O0FBQUE7QUFBQTtBQUFBLENBQVgiLCJmaWxlIjoiZ2FtZS1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBcHAuZGVmaW5lKCgpID0+IGNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHtcclxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoKSxcclxuICAgICAgICBzdHlsZSA9IHsgY29sb3I6ICcjZjAwJyB9LFxyXG4gICAgICAgIHZlbG9jaXR5RGFtcGluZyA9IDEsXHJcbiAgICAgICAgdmVsb2NpdHkgPSBuZXcgVmVjdG9yKCksXHJcbiAgICAgICAgcm90YXRpb24gPSAwLFxyXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gcG9zaXRpb24sXHJcbiAgICAgICAgc2l6ZSA9IDFcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eURhbXBpbmcgPSB2ZWxvY2l0eURhbXBpbmc7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2VudGVyID0gcm90YXRpb25DZW50ZXI7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlcmVyKSB7IH1cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmVsb2NpdHkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbih7IGR0ID0gMSB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LmNvcHkoKS5zY2FsZShkdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbG9jaXR5KHsgZHQgPSAxIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2NhbGUodGhpcy52ZWxvY2l0eURhbXBpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBleHRlbmQoZnVuYykge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlW2Z1bmMubmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==