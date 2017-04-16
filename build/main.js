'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

window.onresize = function () {
    // init();
};

var animationFrame = undefined;
// function init() {

var _ref = function () {
    var canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    var ctx = canvas.getContext('2d');
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1.05, -1.05);

    return [ctx, innerWidth, innerHeight];
}(),
    _ref2 = _slicedToArray(_ref, 3),
    ctx = _ref2[0],
    width = _ref2[1],
    height = _ref2[2];

var _App$load$get = App.load().get(),
    Utils = _App$load$get.Utils,
    IO = _App$load$get.IO,
    Vector = _App$load$get.Vector,
    CanvasRenderer = _App$load$get.CanvasRenderer,
    Scene = _App$load$get.Scene,
    Engine = _App$load$get.Engine,
    SpringyVector = _App$load$get.SpringyVector,
    Parallax = _App$load$get.Parallax,
    Circle = _App$load$get.Circle,
    Player = _App$load$get.Player,
    AsteroidField = _App$load$get.AsteroidField,
    Environment = _App$load$get.Environment,
    Controller = _App$load$get.Controller;

var io = new IO(width, height);
var renderer = new CanvasRenderer(ctx, width, height);
var scene = new Scene();
var engine = new Engine(renderer, scene);

var controller = new Controller(io, width, height);
var player = new Player(controller);
var camera = new SpringyVector({
    position: new Vector(0, 50), elasticity: 0.08, damping: 0.3,
    target: function target() {
        return player.position.copy().add(player.velocity.copy().scale(3));
    }
});

var parallax = new Parallax(camera.position);
var enviroment = new Environment(camera, width, height);

io.onMouse(function () {
    return player.speed = 5;
}, function () {
    return player.speed = 0;
});
enviroment.container.forEach(function (layer) {
    return parallax.addLayer({ depth: layer.depth, objects: layer.objects });
});
parallax.addLayer({ objects: [player, new AsteroidField(player, Math.max(width, height))] });
scene.add(parallax, controller, camera);

cancelAnimationFrame(animationFrame);
(function animation() {
    engine.clear().render().update();
    enviroment.outOfBounds();

    parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

    animationFrame = requestAnimationFrame(animation);
})();

// }
// init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ucmVzaXplIiwiYW5pbWF0aW9uRnJhbWUiLCJ1bmRlZmluZWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwic2NhbGUiLCJBcHAiLCJsb2FkIiwiZ2V0IiwiVXRpbHMiLCJJTyIsIlZlY3RvciIsIkNhbnZhc1JlbmRlcmVyIiwiU2NlbmUiLCJFbmdpbmUiLCJTcHJpbmd5VmVjdG9yIiwiUGFyYWxsYXgiLCJDaXJjbGUiLCJQbGF5ZXIiLCJBc3Rlcm9pZEZpZWxkIiwiRW52aXJvbm1lbnQiLCJDb250cm9sbGVyIiwiaW8iLCJyZW5kZXJlciIsInNjZW5lIiwiZW5naW5lIiwiY29udHJvbGxlciIsInBsYXllciIsImNhbWVyYSIsInBvc2l0aW9uIiwiZWxhc3RpY2l0eSIsImRhbXBpbmciLCJ0YXJnZXQiLCJjb3B5IiwiYWRkIiwidmVsb2NpdHkiLCJwYXJhbGxheCIsImVudmlyb21lbnQiLCJvbk1vdXNlIiwic3BlZWQiLCJjb250YWluZXIiLCJmb3JFYWNoIiwiYWRkTGF5ZXIiLCJkZXB0aCIsImxheWVyIiwib2JqZWN0cyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbiIsImNsZWFyIiwicmVuZGVyIiwidXBkYXRlIiwib3V0T2ZCb3VuZHMiLCJ6b29tIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUFBLE9BQU9DLFFBQVAsR0FBa0IsWUFBTTtBQUNwQjtBQUNILENBRkQ7O0FBSUEsSUFBSUMsaUJBQWlCQyxTQUFyQjtBQUNBOztXQUVrQyxZQUFNO0FBQ2hDLFFBQUlDLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBRixX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d0JDLE1BQXhCO0FBQ0FmLGVBQVdnQixXQUFYOztBQUVBakIsYUFBU2tCLElBQVQsR0FBZ0IsTUFBTTNCLE9BQU9RLFFBQVAsQ0FBZ0JvQixNQUFoQixLQUEyQixDQUEzQixHQUErQixFQUFyQyxDQUFoQjs7QUFFQTlELHFCQUFpQitELHNCQUFzQlAsU0FBdEIsQ0FBakI7QUFDSCxDQVBEOztBQVNKO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIC8vIGluaXQoKTtcclxufTtcclxuXHJcbmxldCBhbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcclxuLy8gZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICBsZXQgWyBjdHgsIHdpZHRoLCBoZWlnaHQgXSA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcclxuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZShpbm5lcldpZHRoIC8gMiwgaW5uZXJIZWlnaHQgLyAyKTtcclxuICAgICAgICBjdHguc2NhbGUoMS4wNSwgLTEuMDUpO1xyXG5cclxuICAgICAgICByZXR1cm4gWyBjdHgsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IF07XHJcbiAgICB9KSgpO1xyXG5cclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIFV0aWxzLCBJTywgVmVjdG9yLFxyXG4gICAgICAgIENhbnZhc1JlbmRlcmVyLCBTY2VuZSwgRW5naW5lLFxyXG4gICAgICAgIFNwcmluZ3lWZWN0b3IsIFBhcmFsbGF4LCBDaXJjbGUsXHJcblxyXG4gICAgICAgIFBsYXllciwgQXN0ZXJvaWRGaWVsZCxcclxuICAgICAgICBFbnZpcm9ubWVudCwgQ29udHJvbGxlclxyXG4gICAgfSA9IEFwcC5sb2FkKCkuZ2V0KCk7XHJcblxyXG5cclxuICAgIGxldCBpbyA9IG5ldyBJTyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGxldCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihjdHgsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgICBsZXQgZW5naW5lID0gbmV3IEVuZ2luZShyZW5kZXJlciwgc2NlbmUpO1xyXG5cclxuICAgIGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW8sIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoY29udHJvbGxlcik7XHJcbiAgICBsZXQgY2FtZXJhID0gbmV3IFNwcmluZ3lWZWN0b3Ioe1xyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDAsIDUwKSwgZWxhc3RpY2l0eTogMC4wOCwgZGFtcGluZzogMC4zLFxyXG4gICAgICAgIHRhcmdldDogKCkgPT4gcGxheWVyLnBvc2l0aW9uLmNvcHkoKS5hZGQocGxheWVyLnZlbG9jaXR5LmNvcHkoKS5zY2FsZSgzKSlcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwYXJhbGxheCA9IG5ldyBQYXJhbGxheChjYW1lcmEucG9zaXRpb24pO1xyXG4gICAgbGV0IGVudmlyb21lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblxyXG4gICAgaW8ub25Nb3VzZSgoKSA9PiBwbGF5ZXIuc3BlZWQgPSA1LCAoKSA9PiBwbGF5ZXIuc3BlZWQgPSAwKTtcclxuICAgIGVudmlyb21lbnQuY29udGFpbmVyLmZvckVhY2gobGF5ZXIgPT4gcGFyYWxsYXguYWRkTGF5ZXIoeyBkZXB0aDogbGF5ZXIuZGVwdGgsIG9iamVjdHM6IGxheWVyLm9iamVjdHMgfSkpO1xyXG4gICAgcGFyYWxsYXguYWRkTGF5ZXIoeyBvYmplY3RzOiBbcGxheWVyLCBuZXcgQXN0ZXJvaWRGaWVsZChwbGF5ZXIsIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKV0gfSk7XHJcbiAgICBzY2VuZS5hZGQocGFyYWxsYXgsIGNvbnRyb2xsZXIsIGNhbWVyYSk7XHJcblxyXG5cclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcclxuICAgIChmdW5jdGlvbiBhbmltYXRpb24oKSB7XHJcbiAgICAgICAgZW5naW5lLmNsZWFyKCkucmVuZGVyKCkudXBkYXRlKCk7XHJcbiAgICAgICAgZW52aXJvbWVudC5vdXRPZkJvdW5kcygpO1xyXG5cclxuICAgICAgICBwYXJhbGxheC56b29tID0gNTAgLyAocGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpICogMyArIDMwKTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcclxuICAgIH0pKCk7XHJcblxyXG4vLyB9XHJcbi8vIGluaXQoKTsiXX0=