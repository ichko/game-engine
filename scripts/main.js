let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');

function clear() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}

let player = new PrimitiveObject.Rectangle(new Vector(0, innerHeight / 2 + 150 - 40), { width: 20, height: 40 }, '#0cc');
let camera = new PrimitiveObject.Rectangle();

let foreGroundObjects = [];
for (let i = 0;i < 80;i++) {
    let height = Math.random() * 250;
    foreGroundObjects.push(new PrimitiveObject.Rectangle(
        new Vector(Math.random() * innerWidth, innerHeight / 2 + 150 - height),
        { width: 50, height: height },
        '#110122')
    );
}
let foreGroundObjectsSmall = [];
for (let i = 0;i < 100;i++) {
    let height = Math.random() * 100;
    foreGroundObjectsSmall.push(new PrimitiveObject.Rectangle(
        new Vector(Math.random() * innerWidth, innerHeight / 2 + 150 - height),
        { width: 25, height: height },
        '#000111')
    );
}

let world = new Parallax(camera.position)
    .addLayer('background', [
        new PrimitiveObject.Rectangle(new Vector(), { width: innerWidth, height: innerHeight }, '#421143')
    ])
    .addLayer('sun', [new PrimitiveObject.Circle(new Vector(innerWidth / 2 + 250, innerHeight / 2 - 150), 150, '#ff0066')], 
    new Vector(-0.5, 0))
    .addLayer('forground', foreGroundObjects, new Vector(-1, -0.05))
    .addLayer('forgroundSmall', foreGroundObjectsSmall, new Vector(-2, -0.1))
    .addLayer('player', [ player ])
    .addLayer('ground', [
        new PrimitiveObject.Rectangle(new Vector(0, innerHeight / 2 + 150),
                                      { width: innerWidth, height: innerHeight / 2 }, '#000011')
    ]);

let time = 0;
(function animation() {
    time += 0.1;
    clear();
    world.draw(ctx);
    if (player.position.x >= innerWidth / 8 + player.width / 2) {
        camera.position.x += 1;
    } else {
        player.position.x += 1;
    }
    
    player.position.y = Math.sin(time * 2) * 10 + innerHeight / 2 + 100;
    camera.position.y = Math.sin(time * 2) * 10 - 20;

    for (var i = 0;i < foreGroundObjects.length;i++) {
        let fo = foreGroundObjects[i];
        if (fo.getWorldPosition().x + fo.width < 0) {
            fo.position.x = camera.position.x + innerWidth;
        }
    }
    for (var i = 0;i < foreGroundObjectsSmall.length;i++) {
        let fo = foreGroundObjectsSmall[i];
        if (fo.getWorldPosition().x + fo.width < 0) {
            fo.position.x = camera.position.x * 2 + innerWidth;
        }
    }

    requestAnimationFrame(animation);
})();
