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
    ctx.scale(1, -1);

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
    Environment = _App$load$get.Environment;

var io = new IO(width, height);
var renderer = new CanvasRenderer(ctx, width, height);
var scene = new Scene();
var engine = new Engine(renderer, scene);

var colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];
var player = new Player(colors);

var camera = new SpringyVector({
    position: new Vector(0, height / 2 - 150),
    elasticity: 0.08,
    damping: 0.3,
    target: function target() {
        return player.position.copy().add(player.velocity.copy().scale(3));
    }
});

var parallax = new Parallax(camera.position);

var enviroment = new Environment(camera, width, height);
for (var name in enviroment.container) {
    parallax.addLayer({
        depth: enviroment.container[name].depth,
        objects: enviroment.container[name].elements
    });
}

parallax.addLayer({ objects: [player, new AsteroidField(player, colors, 10, Math.max(width, height))] });

scene.add(parallax).add(camera);

io.onMouse(function () {
    return player.speed = 5;
}, function () {
    return player.speed = 0;
});

var time = 0;
cancelAnimationFrame(animationFrame);
(function animation() {
    time++;
    engine.clear().render().update();
    io.callHandlers();
    enviroment.outOfBounds();

    parallax.zoom = 50 / (player.velocity.length() + 30);

    animationFrame = requestAnimationFrame(animation);
})();

// }
// init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ucmVzaXplIiwiYW5pbWF0aW9uRnJhbWUiLCJ1bmRlZmluZWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwic2NhbGUiLCJBcHAiLCJsb2FkIiwiZ2V0IiwiVXRpbHMiLCJJTyIsIlZlY3RvciIsIkNhbnZhc1JlbmRlcmVyIiwiU2NlbmUiLCJFbmdpbmUiLCJTcHJpbmd5VmVjdG9yIiwiUGFyYWxsYXgiLCJDaXJjbGUiLCJQbGF5ZXIiLCJBc3Rlcm9pZEZpZWxkIiwiRW52aXJvbm1lbnQiLCJpbyIsInJlbmRlcmVyIiwic2NlbmUiLCJlbmdpbmUiLCJjb2xvcnMiLCJwbGF5ZXIiLCJjYW1lcmEiLCJwb3NpdGlvbiIsImVsYXN0aWNpdHkiLCJkYW1waW5nIiwidGFyZ2V0IiwiY29weSIsImFkZCIsInZlbG9jaXR5IiwicGFyYWxsYXgiLCJlbnZpcm9tZW50IiwibmFtZSIsImNvbnRhaW5lciIsImFkZExheWVyIiwiZGVwdGgiLCJvYmplY3RzIiwiZWxlbWVudHMiLCJNYXRoIiwibWF4Iiwib25Nb3VzZSIsInNwZWVkIiwidGltZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwiY2xlYXIiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjYWxsSGFuZGxlcnMiLCJvdXRPZkJvdW5kcyIsInpvb20iLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsT0FBT0MsUUFBUCxHQUFrQixZQUFNO0FBQ3BCO0FBQ0gsQ0FGRDs7QUFJQSxJQUFJQyxpQkFBaUJDLFNBQXJCO0FBQ0E7O1dBRWtDLFlBQU07QUFDaEMsUUFBSUMsU0FBU0MsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FB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QXJCO0FBQUEsQ0FBbkM7O0FBRUEsSUFBSUMsT0FBTyxDQUFYO0FBQ0FDLHFCQUFxQnZELGNBQXJCO0FBQ0EsQ0FBQyxTQUFTd0QsU0FBVCxHQUFxQjtBQUNsQkY7QUFDQXZCLFdBQU8wQixLQUFQLEdBQWVDLE1BQWYsR0FBd0JDLE1BQXhCO0FBQ0EvQixPQUFHZ0MsWUFBSDtBQUNBakIsZUFBV2tCLFdBQVg7O0FBRUFuQixhQUFTb0IsSUFBVCxHQUFnQixNQUFNN0IsT0FBT1EsUUFBUCxDQUFnQnNCLE1BQWhCLEtBQTJCLEVBQWpDLENBQWhCOztBQUVBL0QscUJBQWlCZ0Usc0JBQXNCUixTQUF0QixDQUFqQjtBQUNILENBVEQ7O0FBV0o7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgLy8gaW5pdCgpO1xyXG59O1xyXG5cclxubGV0IGFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkO1xyXG4vLyBmdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgIGxldCBbIGN0eCwgd2lkdGgsIGhlaWdodCBdID0gKCgpID0+IHtcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xyXG4gICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKGlubmVyV2lkdGggLyAyLCBpbm5lckhlaWdodCAvIDIpO1xyXG4gICAgICAgIGN0eC5zY2FsZSgxLCAtMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBbIGN0eCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgXTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBVdGlscywgSU8sIFZlY3RvcixcclxuICAgICAgICBDYW52YXNSZW5kZXJlciwgU2NlbmUsIEVuZ2luZSxcclxuICAgICAgICBTcHJpbmd5VmVjdG9yLCBQYXJhbGxheCwgQ2lyY2xlLFxyXG5cclxuICAgICAgICBQbGF5ZXIsIEFzdGVyb2lkRmllbGQsIEVudmlyb25tZW50XHJcbiAgICB9ID0gQXBwLmxvYWQoKS5nZXQoKTtcclxuXHJcblxyXG4gICAgbGV0IGlvID0gbmV3IElPKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGN0eCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIGxldCBlbmdpbmUgPSBuZXcgRW5naW5lKHJlbmRlcmVyLCBzY2VuZSk7XHJcblxyXG5cclxuICAgIGxldCBjb2xvcnMgPSBbJyM2ZjYnLCAnI2Y2NicsICcjNjZmJywgJyNmZjMnLCAnIzNmZicsICcjZjNmJ107XHJcbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcihjb2xvcnMpO1xyXG5cclxuICAgIGxldCBjYW1lcmEgPSBuZXcgU3ByaW5neVZlY3Rvcih7XHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMCwgaGVpZ2h0IC8gMiAtIDE1MCksXHJcbiAgICAgICAgZWxhc3RpY2l0eTogMC4wOCxcclxuICAgICAgICBkYW1waW5nOiAwLjMsXHJcbiAgICAgICAgdGFyZ2V0OiAoKSA9PiBwbGF5ZXIucG9zaXRpb24uY29weSgpLmFkZChwbGF5ZXIudmVsb2NpdHkuY29weSgpLnNjYWxlKDMpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KGNhbWVyYS5wb3NpdGlvbik7XHJcblxyXG4gICAgbGV0IGVudmlyb21lbnQgPSBuZXcgRW52aXJvbm1lbnQoY2FtZXJhLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW52aXJvbWVudC5jb250YWluZXIpIHtcclxuICAgICAgICBwYXJhbGxheC5hZGRMYXllcih7XHJcbiAgICAgICAgICAgIGRlcHRoOiBlbnZpcm9tZW50LmNvbnRhaW5lcltuYW1lXS5kZXB0aCxcclxuICAgICAgICAgICAgb2JqZWN0czogZW52aXJvbWVudC5jb250YWluZXJbbmFtZV0uZWxlbWVudHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbGxheC5hZGRMYXllcih7IG9iamVjdHM6IFtwbGF5ZXIsIG5ldyBBc3Rlcm9pZEZpZWxkKHBsYXllciwgY29sb3JzLCAxMCwgTWF0aC5tYXgod2lkdGgsIGhlaWdodCkpXSB9KTtcclxuXHJcbiAgICBzY2VuZS5hZGQocGFyYWxsYXgpLmFkZChjYW1lcmEpO1xyXG5cclxuICAgIGlvLm9uTW91c2UoKCkgPT4gcGxheWVyLnNwZWVkID0gNSwgKCkgPT4gcGxheWVyLnNwZWVkID0gMCk7XHJcblxyXG4gICAgbGV0IHRpbWUgPSAwO1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgKGZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcclxuICAgICAgICB0aW1lKys7XHJcbiAgICAgICAgZW5naW5lLmNsZWFyKCkucmVuZGVyKCkudXBkYXRlKCk7XHJcbiAgICAgICAgaW8uY2FsbEhhbmRsZXJzKCk7XHJcbiAgICAgICAgZW52aXJvbWVudC5vdXRPZkJvdW5kcygpO1xyXG5cclxuICAgICAgICBwYXJhbGxheC56b29tID0gNTAgLyAocGxheWVyLnZlbG9jaXR5Lmxlbmd0aCgpICsgMzApO1xyXG5cclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gICAgfSkoKTtcclxuXHJcbi8vIH1cclxuLy8gaW5pdCgpOyJdfQ==