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