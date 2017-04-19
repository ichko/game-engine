import {
    Utils, Vector, CanvasRenderer,
    Scene, Engine, SpringyVector,
    Parallax, Circle
} from 'engine';

import { IO } from './io';
import { Player } from './player';
import { AsteroidField } from './asteroid-field';
import { Environment } from './environment';
import { Controller } from './controller';


let animationFrame = undefined;

// window.onresize = init;
// function init() {

let [ ctx, width, height ] = (() => {
    let canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let ctx = canvas.getContext('2d');
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1.05, -1.05);

    return [ ctx, innerWidth, innerHeight ];
})();


let io = new IO(width, height);
let renderer = new CanvasRenderer(ctx, width, height);
let scene = new Scene();
let engine = new Engine(renderer, scene);

let controller = new Controller(io, width, height);
let player = new Player(controller);
let camera = new SpringyVector({
    position: new Vector(0, 50), elasticity: 0.08, damping: 0.3,
    target: () => player.position.copy().add(player.velocity.copy().scale(3))
});

let parallax = new Parallax(camera.position);
let environment = new Environment(camera, width, height);


io.onMouse(() => player.speed = 5, () => player.speed = 0);
environment.container.forEach(layer => parallax.addLayer({ depth: layer.depth, objects: layer.objects }));
parallax.addLayer({ objects: [player, new AsteroidField(player, Math.max(width, height))] });
scene.add(parallax, controller, camera);


cancelAnimationFrame(animationFrame);
(function animation() {
    engine.clear().render().update();
    environment.outOfBounds();

    parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

    animationFrame = requestAnimationFrame(animation);
})();

// }
// init();
