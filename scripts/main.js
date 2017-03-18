let [ width, height ] = [ innerWidth, innerHeight ];
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext('2d');
ctx.translate(width / 2, height / 2);

$Module.load().useIn(window);

let io = new IO();
let renderer = new Renderer(ctx, width, height);

let player = new Circle({ position: new Vector(-600, 100), radius: 15, color: '#ff9' });
let camera = new SpringyVector({
    position: new Vector(-600, 250),
    elasticity: 0.01,
    target: () => player.position.add(new Vector(300, 10))
});

let circleGenerator = new Generator(({ color, size = 20 }) => ({
    cls: Circle,
    set: {
        position: () => Vector.random(-width, width, -20, 20),
        radius: () => _.random(1, size),
        color: () => color
    }
}));

let world = new Parallax(() => camera.position)
    .addLayer({ depth: 1.5, objects: circleGenerator.make(250, { color: 'rgba(200, 0, 100, 0.4)', size: 5 }) })
    .addLayer({ depth: 1.1, objects: circleGenerator.make(150, { color: 'rgba(200, 0, 100, 0.6)', size: 20 }) })
    .addLayer({ name: 'player layer', objects: [ player ] })
    .addLayer({ depth: 0.9, objects: circleGenerator.make(150, { color: 'rgba(200, 0, 100, 0.8)', size: 50 }) })
    .addLayer({ depth: 0.5, objects: circleGenerator.make(80, { color: 'rgba(200, 0, 100, 0.6)', size: 100 }) })
    .add(camera);

(function animation() {
    renderer.clear();
    world.render(renderer);
    world.update();
    io.callHandlers();

    player.position.x++;
    player.position.y += Math.sin(player.position.x / 20) * 2;

    requestAnimationFrame(animation);
})();
