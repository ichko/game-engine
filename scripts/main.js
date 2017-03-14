let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
ctx.translate(innerWidth / 2, innerHeight / 2);
ctx.scale(1.5, 1.5);

let io = new IO();
let renderer = new Renderer(ctx, innerWidth, innerHeight);

let camera = new Vector();

let player = new Circle({ radius: 15, color: '#0f0' });

let world = new Parallax(camera)
    .addLayer({
        name: 'foreground',
        depth: 2,
        objects: [new Rectangle({ size: { width: 60, height: 50, color: '#0ff' } })]
    })
    .addLayer({ name: 'player layer', objects: [ player ] });

(function animation() {
    renderer.clear();
    world.render(renderer);
    io.callHandlers();

    camera.x++;
    player.position.x++;

    requestAnimationFrame(animation);
})();
