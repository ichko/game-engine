let [ width, height ] = [ innerWidth, innerHeight ];
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext('2d');
ctx.translate(width / 2, height / 2);

$Module.load().useIn(window);

let io = new IO();
let renderer = new Renderer(ctx, width, height);

let player = new Circle({ radius: 15, color: '#ff9' });
let camera = new SpringyVector({
    position: new Vector(-300, 0),
    elasticity: 0.01,
    target: () => player.position
});

let circleGenerator = new Generator(({ color, size = 20 }) => ({
    cls: Circle,
    set: {
        position: () => Vector.random(-width, width, -height, height),
        radius: () => _.random(5, size),
        color: () => color
    }
}));

let world = new Parallax(() => camera.position)
    .addLayer({
        name: 'foreground.far',
        depth: 1,
        objects: circleGenerator.make(150, { color: '#906' })
    })
    .addLayer({
        name: 'foreground.near',
        depth: 0.5,
        objects: circleGenerator.make(150, { color: '#603', size: 50 })
    })
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
