let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
ctx.translate(innerWidth / 2, innerHeight / 2);
ctx.scale(1.5, 1.5);

let io = new IO();
let renderer = new Renderer(ctx, innerWidth, innerHeight);

let camera = new Vector();

let player = new Composite()
    .add({ name: 'body', object: new Rectangle({ size: { width: 10, height: 20 } }) })
    .add({ name: 'head', object: new Circle(), offset: new Vector(0, 5) })
    .add({ name: 'left_hand', object: new Circle(), offset: new Vector(-15, -10) })
    .add({ name: 'right_hand', object: new Circle(), offset: new Vector(15, -10) })
    .add({ name: 'lower_body', object: new Composite()
        .add({ name: 'left_foot', object: new Circle(), offset: new Vector(-10, -30) })
        .add({ name: 'right_foot', object: new Circle(), offset: new Vector(10, -30) })
    });

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
