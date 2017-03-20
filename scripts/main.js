let [ width, height ] = [ innerWidth, innerHeight ];
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext('2d');
ctx.translate(width / 2, height / 2);
ctx.scale(1, 1);

$Module.load().useIn(window);

let io = new IO();
let renderer = new Renderer(ctx, width, height);

let player = new Rectangle({ position: new Vector(-600, 100), size: { width: 15, height: 15 }, color: '#ff9' });
let camera = new SpringyVector({
    position: new Vector(-1500, 110),
    elasticity: 0.005,
    target: () => player.position.add(new Vector(300, 10))
});

EventManager.register('outOfBounds', ({ element }) =>
    element.position.subtract(player.position).length() * element.depth > innerWidth
);

let circleGenerator = new Generator(({ color, size = 20, depth }) => ({
    cls: Rectangle,
    set: {
        position: () => Vector.random(-width, width, -height, height),
        radius: () => _.random(1, size),
        size: () => { let side = _.random(1, size); return { width: side, height: side }; },
        color: () => color,
        depth: () => depth
    },
    postProcess: element => {
        EventManager.on([element], 'outOfBounds', element => {
            // element.position.x = camera.position.x;
        });

        return element;
    }
}));

let world = new Parallax(() => camera.position)
    .addLayer({ depth: 1.5, objects: circleGenerator.make(50, { color: 'rgba(50, 100, 200, 0.8)', size: 2 }) })
    .addLayer({ depth: 1.25, objects: circleGenerator.make(50, { color: 'rgba(240, 120, 0, 0.8)', size: 8 }) })
    .addLayer({ objects: [player] })
    .addLayer({ depth: 0.85, objects: circleGenerator.make(50, { color: 'rgba(0, 200, 100, 0.8)', size: 16 }) })
    .addLayer({ depth: 0.5, objects: circleGenerator.make(50, { color: 'rgba(220, 0, 100, 0.8)', size: 32 }) })
    .add(camera);

let time = 0;
(function animation() {
    time++;
    renderer.clear();
    world.render(renderer);
    world.update();
    io.callHandlers();
    EventManager.triggerEvents();

    player.position.x += Math.sin(time / 100) * 4;
    player.position.y += Math.sin(time / 20) * 2;

    requestAnimationFrame(animation);
})();
