window.onresize = () => {
    // init();
};

let animationFrame = undefined;
// function init() {

    let [ ctx, width, height ] = (() => {
        let canvas = document.getElementById('canvas');
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        let ctx = canvas.getContext('2d');
        ctx.translate(innerWidth / 2, innerHeight / 2);
        ctx.scale(1, -1);

        return [ ctx, innerWidth, innerHeight ];
    })();

    let {
        Utils, IO, Vector,
        CanvasRenderer, Scene, Engine,
        SpringyVector, Parallax, Circle,

        Player, AsteroidField
    } = App.load().get();


    let io = new IO(width, height);
    let renderer = new CanvasRenderer(ctx, width, height);
    let scene = new Scene();
    let engine = new Engine(renderer, scene);

    let player = new Player();

    let camera = new SpringyVector({
        position: new Vector(0, height / 2 - 150),
        elasticity: 0.08,
        damping: 0.3,
        target: () => player.position.copy().add(player.velocity.copy().scale(3))
    });

    let parallax = new Parallax(camera.position);

    let enviroment = {
        frontBig: { elements: circleGenerator(10, { style: { color: 'rgba(220, 0, 100, 0.6)' }, size: 9 }), depth: 1.1 },
        frontSmall: { elements: circleGenerator(10, { style: { color: 'rgba(0, 200, 100, 0.6)' }, size: 7 }), depth: 1.2 },
        backBig: { elements: circleGenerator(10, { style: { color: 'rgba(240, 120, 0, 0.6)' }, size: 5 }), depth: 1.4 },
        backSmall: { elements: circleGenerator(10, { style: { color: 'rgba(50, 100, 200, 0.6)' }, size: 3 }), depth: 1.8 }
    }

    parallax
        .addLayer({ depth: enviroment.backSmall.depth, objects: enviroment.backSmall.elements })
        .addLayer({ depth: enviroment.backBig.depth, objects: enviroment.backBig.elements })
        .addLayer({ depth: enviroment.frontSmall.depth, objects: enviroment.frontSmall.elements })
        .addLayer({ depth: enviroment.frontBig.depth, objects: enviroment.frontBig.elements })
        .addLayer({ objects: [player, new AsteroidField(player, 10, Math.max(width, height))] });

    scene.add(parallax).add(camera);

    io.onMouse(() => player.speed = 5, () => player.speed = 0);

    let time = 0;
    cancelAnimationFrame(animationFrame);
    (function animation() {
        time++;
        engine.clear().render().update();
        io.callHandlers();
        outOfBounds();

        parallax.zoom = 50 / (player.velocity.length() + 30);

        animationFrame = requestAnimationFrame(animation);
    })();

    function circleGenerator(count, { size, style } = {}) {
        return Utils.range(count, () => new Circle({
            position: Vector.random(-width / 2, width / 2, -height / 2, height / 2),
            radius: Utils.random(1, size),
            style
        }));
    }

    function outOfBounds() {
        for (let name in enviroment) {
            let layer = enviroment[name];
            layer.elements.forEach(element => {
                let cameraPos = camera.position.copy().scale(1 / layer.depth);

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

// }
// init();