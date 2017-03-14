let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
ctx.translate(innerWidth / 2, innerHeight / 2);
ctx.scale(1.5, 1.5);

let io = new IO();
let renderer = new Renderer(ctx, innerWidth, innerHeight);

let sp = new SpringyVector({ elasticity: 0.001, target: new Vector(0, 50) });
let camera = sp.position;

let player = new Circle({ radius: 15, color: '#0f0', position: sp.target });

let world = new Parallax(camera)
    .addLayer({
        name: 'foreground',
        depth: 2,
        objects: [new Rectangle({ size: { width: 60, height: 50, color: '#0ff' } })]
    })
    .addLayer({
        name: 'player layer',
        objects: [ player ]
    })
    
    .add(sp);

(function animation() {
    renderer.clear();
    world.render(renderer);
    world.update();
    io.callHandlers();

    renderer.circle(sp.target, 5, 'red');
    renderer.circle(sp.position, 5, 'red');

    player.position.x++;
    sp.target = player.position;
    camera.x = sp.position.x;

    requestAnimationFrame(animation);
})();
