let [ width, height ] = [ innerWidth, innerHeight ];
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext('2d');
ctx.translate(width / 2, height / 2);
ctx.scale(1, -1);


App.load().useIn(window);

let io = new IO(width, height);
let renderer = new CanvasRenderer(ctx, width, height);
let scene = new Scene();
let engine = new Engine(renderer, scene);

let fuel = new Fountain({ size: 4, particleSize: 3.5, magnitude: 5, color: '#6cf',
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
let ship = new Polygon({ color: '#ff9',
                        points: [new Vector(-10, 0), new Vector(0, -5), new Vector(10, 0), new Vector(0, 30)] });

let player = new Composite()
    .add({ object: fuel })
    .add({ object: ship });

let speedScale = 1;

let camera = new SpringyVector({
    position: new Vector(0, height / 2 - 150),
    elasticity: 0.005,
    damping: 0.1,
    target: () => player.position.add(io.mouse)
});

let parallax = new Parallax(() => camera.position);

let enviroment = {
    frontBig: { elements: circleGenerator(40, { color: 'rgba(220, 0, 100, 0.8)', size: 8 }), depth: 1.5 },
    frontSmall: { elements: circleGenerator(40, { color: 'rgba(0, 200, 100, 0.8)', size: 6 }), depth: 2 },
    backBig: { elements: circleGenerator(40, { color: 'rgba(240, 120, 0, 0.8)', size: 4 }), depth: 3 },
    backSmall: { elements: circleGenerator(40, { color: 'rgba(50, 100, 200, 0.8)', size: 2 }), depth: 4 }
}

parallax
    .addLayer({ depth: enviroment.backSmall.depth, objects: enviroment.backSmall.elements })
    .addLayer({ depth: enviroment.backBig.depth, objects: enviroment.backBig.elements })
    .addLayer({ depth: enviroment.frontSmall.depth, objects: enviroment.frontSmall.elements })
    .addLayer({ depth: enviroment.frontBig.depth, objects: enviroment.frontBig.elements })
    .addLayer({ objects: [player] });

scene.add(parallax).add(camera);

io.onMouse(() => speedScale = 2, () => speedScale = 1);

(function animation() {
    engine.clear().render().update();
    io.callHandlers();
    outOfBounds();

    let speed = player.velocity.length();
    let forwardAngle = player.velocity.angle() + Math.PI;
    ship.rotation = forwardAngle + Math.PI / 2;
    fuel.config.fromAngle = forwardAngle - 1 / speed;
    fuel.config.toAngle = forwardAngle + 1 / speed;
    fuel.config.magnitude = speed;
    fuel.config.size = speed;

    player.velocity= io.mouse.scale(1 / 50 * speedScale);

    requestAnimationFrame(animation);
})();


function circleGenerator(count, { size, color } = {}) {
    return Utils.range(count, () => new Circle({
        position: Vector.random(-width / 2, width / 2, -height / 2, height / 2),
        radius: Utils.random(1, size),
        color
    }));
}

function outOfBounds() {
    for (let name in enviroment) {
        let layer = enviroment[name];
        layer.elements.forEach(element => {
            let cameraPos = camera.position.scale(1 / layer.depth);

            if (cameraPos.x - element.position.x > width / 2) {
                element.position.x = cameraPos.x + width / 2 - (cameraPos.x - element.position.x) % (width / 2);
            }
            if (element.position.x - cameraPos.x > width / 2) {
                element.position.x = cameraPos.x - width / 2 + (cameraPos.x - element.position.x) % (width / 2);
            }

            if (cameraPos.y - element.position.y > height / 2) {
                element.position.y = cameraPos.y + height - (cameraPos.y - element.position.y) % (height);
            }
            if (element.position.y - cameraPos.y > height / 2) {
                element.position.y = cameraPos.y + (cameraPos.y - element.position.y) % (height);
            }
        });
    }
};
