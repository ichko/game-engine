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

let foregroundGenerator = new Generator({
    cls: Circle,
    set: {
        radius: () => _.random(5, 25),
        color: () => '#906'
    }
});

let foreground = {
    near: Array.from(Array(50).keys()).map(() => new Rectangle({
        size: { width: Math.random() * 50 + 20, height: Math.random() * 50 + 20 },
        position: new Vector(Math.random() * innerWidth - innerWidth / 2,
                             Math.random() * innerHeight - innerHeight / 2),
        color: '#603'
    })),
    far: Array.from(Array(100).keys()).map(() => new Circle({
        radius: Math.random() * 20 + 5,
        position: new Vector(Math.random() * innerWidth - innerWidth / 2,
                             Math.random() * innerHeight - innerHeight / 2),
        color: '#906'
    }))
}

let world = new Parallax(() => camera.position)
    .addLayer({ name: 'foreground.far', depth: 1, objects: foreground.far })
    .addLayer({ name: 'foreground.near', depth: 2, objects: foreground.near })
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
