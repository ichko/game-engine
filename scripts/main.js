let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
ctx.translate(innerWidth / 2, innerHeight / 2);

let io = new IO();
let renderer = new Renderer(ctx, innerWidth, innerHeight);

let camera = new Vector();
let player = new Rectangle({
    position: new Vector(1, 0),
    size: { width: 30, height: 40 },
    color: '#00f'
});

let world = new Parallax(camera)
    .newLayer({
        name: 'foreground',
        depth: 1,
        objects: [new Rectangle({ size: { width: 60, height: 50, color: '#0f0' } })]
    })
    .newLayer({ name: 'player layer', objects: [ player ] });

(function animation() {
    renderer.clear();
    world.draw(renderer);
    io.callHandlers();

    camera.x++;
    player.position.x++;

    requestAnimationFrame(animation);
})();
