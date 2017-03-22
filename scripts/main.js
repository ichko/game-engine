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

let speed = 5;
let anchorTarget = new Vector();
let playerAnchor = new SpringyVector({ elasticity: 0.005, target: () => anchorTarget });

let player = new Polygon({
    position: new Vector(0, 100),
    size: { width: 15, height: 15 },
    color: '#ff9',
    points: [new Vector(), new Vector(20, 0), new Vector(10, -30)]
});

let camera = new SpringyVector({
    position: new Vector(0, -1000),
    elasticity: 0.005,
    target: () => player.position.add(new Vector(0, -height / 2 + 200))
});

EventManager.register('outOfBounds', element => true);

let circleGenerator = new Generator({
    cls: Circle,
    set: ({ color, size = 20, depth }) => ({
        position: () => Vector.random(-width / 2, width / 2, -height / 2, height / 2),
        radius: () => _.random(1, size),
        size: () => { let side = _.random(1, size); return { width: side, height: side }; },
        color: () => color,
        depth: () => depth
    })
});

let enviroment = {
    frontBig: { elements: circleGenerator.make(20, { color: 'rgba(220, 0, 100, 0.8)', size: 32 }), depth: 0.5 },
    frontSmall: { elements: circleGenerator.make(30, { color: 'rgba(0, 200, 100, 0.8)', size: 16 }), depth: 0.85 },
    backBig: { elements: circleGenerator.make(40, { color: 'rgba(240, 120, 0, 0.8)', size: 8 }), depth: 1.25 },
    backSmall: { elements: circleGenerator.make(50, { color: 'rgba(50, 100, 200, 0.8)', size: 4 }), depth: 1.5 }
}

for (let name in enviroment) {
    let layer = enviroment[name];
    EventManager.on(layer.elements, 'outOfBounds', element => {
        if (camera.position.x * (1 / layer.depth) - element.position.x > width / 2) {
            element.position.x = camera.position.x * (1 / layer.depth) + width / 2;
        }
        if (element.position.x - camera.position.x * (1 / layer.depth) > width / 2) {
            element.position.x = camera.position.x * (1 / layer.depth) - width / 2;
        }
        if (camera.position.y * (1 / layer.depth) - element.position.y > height / 2) {
            element.position.y = camera.position.y * (1 / layer.depth) + height / 2;
        }
    });
}

let world = new Parallax(() => camera.position)
    .addLayer({ depth: enviroment.backSmall.depth, objects: enviroment.backSmall.elements })
    .addLayer({ depth: enviroment.backBig.depth, objects: enviroment.backBig.elements })
    .addLayer({ objects: [player] })
    .addLayer({ depth: enviroment.frontSmall.depth, objects: enviroment.frontSmall.elements })
    .addLayer({ depth: enviroment.frontBig.depth, objects: enviroment.frontBig.elements })
    .add(playerAnchor)
    .add(camera);

let time = 0;
(function animation() {
    time++;
    renderer.clear();
    world.render(renderer);
    world.update();
    io.callHandlers();
    EventManager.triggerEvents();

    player.position.x = playerAnchor.position.x;

    player.position.y += speed;
    // player.position.x += Math.sin(time / 20) * 2;

    requestAnimationFrame(animation);
})();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let [ orientation, translation ] = this.responseText
                .split('\n')
                .map(JSON.parse);
        speed = orientation[0] * -10;
        speed = Math.min(Math.max(2, speed), 50);
        anchorTarget.x += orientation[2] * 300;
    }
};


setInterval(() => {
    xhttp.open("GET", "http://10.110.201.236", true);
    xhttp.send();
}, 150);

