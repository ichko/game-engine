let [ width, height ] = [ innerWidth, innerHeight ];
let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext('2d');
ctx.translate(width / 2, height / 2);
ctx.scale(1, -1);

$Module.load().useIn(window);

let io = new IO();
let renderer = new Renderer(ctx, width, height);

let player = new Polygon({
    position: new Vector(0, 0),
    size: { width: 15, height: 15 },
    color: '#ff9',
    points: [new Vector(), new Vector(10, -5), new Vector(20, 0), new Vector(10, 30)]
});

let camera = new SpringyVector({
    position: new Vector(0, 0),
    elasticity: 0.005,
    damping: 0.1,
    target: () => player.position.add(new Vector(0, height / 2 - 150))
});

let circleGenerator = new Generator({
    cls: Rectangle,
    set: ({ color, size = 20, depth }) => ({
        position: () => Vector.random(-width / 2, width / 2, -height / 2, height / 2),
        radius: () => Utils.random(1, size),
        size: () => { let side = Utils.random(1, size) * 2; return { width: side, height: side }; },
        color: () => color,
        depth: () => depth
    })
});

let enviroment = {
    frontBig: { elements: circleGenerator.make(40, { color: 'rgba(220, 0, 100, 0.8)', size: 8 }), depth: 1 },
    frontSmall: { elements: circleGenerator.make(40, { color: 'rgba(0, 200, 100, 0.8)', size: 6 }), depth: 1.25 },
    backBig: { elements: circleGenerator.make(40, { color: 'rgba(240, 120, 0, 0.8)', size: 4 }), depth: 1.5 },
    backSmall: { elements: circleGenerator.make(40, { color: 'rgba(50, 100, 200, 0.8)', size: 2 }), depth: 1.85 }
}

let outOfBounds = () => {
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

let fire = new Fountain({
    size: 4,
    particleSize: 3.5,
    magnitude: 2,
    fromAngle: Math.PI / 2 * 3 - 0.8,
    toAngle: Math.PI / 2 * 3 + 0.8,
    color: '#6cf'
});

let world = new Parallax(() => camera.position)
    .addLayer({ depth: enviroment.backSmall.depth, objects: enviroment.backSmall.elements })
    .addLayer({ depth: enviroment.backBig.depth, objects: enviroment.backBig.elements })
    .addLayer({ depth: enviroment.frontSmall.depth, objects: enviroment.frontSmall.elements })
    .addLayer({ depth: enviroment.frontBig.depth, objects: enviroment.frontBig.elements })
    .addLayer({ objects: [fire, player] })
    .add(camera);

(function animation() {
    renderer.clear();
    world.render(renderer);
    world.update();
    io.callHandlers();
    outOfBounds();
    EventManager.triggerEvents();

    fire.config.position = player.position.add(new Vector(10, 10));
    player.position.y += 3;


    requestAnimationFrame(animation);
})();
