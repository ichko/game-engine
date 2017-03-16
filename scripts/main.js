let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
ctx.translate(innerWidth / 2, innerHeight / 2);
ctx.scale(1.5, 1.5);

$Module.load().useIn(window);

let io = new IO();
let renderer = new Renderer(ctx, innerWidth, innerHeight);

let player = new Circle({ radius: 15, color: '#ff9' });
let camera = new SpringyVector({
    position: new Vector(-300, 0),
    elasticity: 0.01,
    target: () => player.position
});

let foreground = new Generator(({ color, size = 20 }) => ({
    cls: Circle,
    set: {
        position: () => Vector.random(-innerWidth / 2, innerWidth / 2, - innerHeight / 2, innerHeight / 2),
        radius: () => _.random(5, size),
        color: () => color
    }
}));

let world = new Parallax(() => camera.position)
    .addLayer({ name: 'foreground.far', depth: 1, objects: foreground.make(50, { color: '#906' }) })
    .addLayer({ name: 'foreground.near', depth: 2, objects: foreground.make(50, { color: '#603', size: 50 }) })
    .addLayer({ name: 'player layer', objects: [ player ] })
    .add(camera);

(function animation() {
    renderer.clear();
    world.render(renderer);
    world.update();
    io.callHandlers();

    player.position.x++;
    player.position.y = Math.sin(player.position.x / 20) * 30;

    requestAnimationFrame(animation);
})();
