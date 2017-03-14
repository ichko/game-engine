let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
ctx.translate(innerWidth / 2, innerHeight / 2);
ctx.scale(1.5, 1.5);

let io = new IO();
let renderer = new Renderer(ctx, innerWidth, innerHeight);

let player = new Circle({ radius: 15, color: '#0f0' });
let camera = new SpringyVector({ position: new Vector(-300, 0), elasticity: 0.01, target: () => player.position });


let world = new Parallax(() => camera.position)
    .addLayer({
        name: 'foreground',
        depth: 2,
        objects: [new Rectangle({ size: { width: 60, height: 50, color: '#0ff' } })]
    })
    .addLayer({
        name: 'player layer',
        objects: [ player ]
    })
    
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
