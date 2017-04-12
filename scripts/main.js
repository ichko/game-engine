window.onresize = () => {
    // init();
};

let animationFrame;
// function init() {

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

    let fuel = new Fountain({ particleSize: 6, style: { color: 'rgba(255, 68, 51, 0.3)' },
                            fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
    let ship = new Polygon({ style: { color: '#fc0' },
                            points: [new Vector(-6, 0), new Vector(0, -3), new Vector(6, 0), new Vector(0, 20)] });

    let player = new Composite()
        .add({ object: fuel })
        .add({ object: ship });

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

    let explosions = [];
    let explosionSpawner = new Spawner(() => explosions.length > 0,
        () => explosions.splice(0, explosions.length));

    let asteroidField = new (class AsteroidField {
        constructor(player) {
            this.alive = () => true;
            this.player = player;
            this.asteroids = Utils.range(10, () => {
                let size = Utils.random(5, 40);
                return new Polygon({
                    position: this.randomAsteroidPosition(),
                    style: { color: this.randomAsteroidColor() },
                    velocity: Vector.random(-2, 2, -2, 2), size,
                    points: this.randomAsteroidShape()
                });
            });
        }

        randomAsteroidPosition() {
            return this.player.position.copy().add(Vector.polar(Utils.random(0, Math.PI * 2), Math.max(width, height) / 2 + 20));
        }

        randomAsteroidShape() {
            let segments = 8;
            return Utils.range(segments, segment =>
                Vector.polar((segment / segments) * Math.PI * 2, Utils.random(0.5, 1)));
        }

        randomAsteroidColor() {
            return Utils.randomArray(['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f']);
        }

        update(ctx) {
            let playerSpeed = this.player.velocity.length();
            this.asteroids.forEach(asteroid => {
                asteroid.update(ctx);
                let distance = this.player.position.distance(asteroid.position);

                if (distance < asteroid.size) {
                    explosions.push(new Explosion({
                        position: asteroid.position, size: asteroid.size / 1.5,
                        particleSize: asteroid.size / 1.5, style: { color: asteroid.style.color },
                        magnitude: (asteroid.size + playerSpeed + asteroid.velocity.length()) / 10
                    }).fire());
                    ship.style.color = asteroid.style.color;
                }
                if (distance < asteroid.size || distance > Math.max(width, height) / 2 + 50) {
                    asteroid.position = this.randomAsteroidPosition();
                    asteroid.points = this.randomAsteroidShape();
                    asteroid.style.color = this.randomAsteroidColor();
                }
            });
        }

        render(renderer) {
            this.asteroids.forEach(asteroid => asteroid.render(renderer));
        }

    })(player);

    parallax
        .addLayer({ depth: enviroment.backSmall.depth, objects: enviroment.backSmall.elements })
        .addLayer({ depth: enviroment.backBig.depth, objects: enviroment.backBig.elements })
        .addLayer({ depth: enviroment.frontSmall.depth, objects: enviroment.frontSmall.elements })
        .addLayer({ depth: enviroment.frontBig.depth, objects: enviroment.frontBig.elements })
        .addLayer({ objects: [player, asteroidField, explosionSpawner] });

    scene.add(parallax).add(camera);

    let speedScale = 0;
    io.onMouse(() => speedScale = 1.05, () => speedScale = 0);

    let time = 0;
    cancelAnimationFrame(animationFrame);
    (function animation() {
        time++;
        engine.clear().render().update();
        io.callHandlers();
        outOfBounds();

        let speed = speedScale * 5;
        let forwardAngle = io.mouse.angle() + Math.PI;
        ship.rotation = forwardAngle + Math.PI / 2;
        fuel.config.fromAngle = forwardAngle - 1 / speed;
        fuel.config.toAngle = forwardAngle + 1 / speed;
        fuel.config.magnitude = speed / 1.5;
        fuel.config.size = speed / 2;
        parallax.zoom = 50 / (player.velocity.length() + 30);

        player.velocity.add(io.mouse.copy().scale(1 / 2500 * speedScale));
        if (player.velocity.length() > 5) {
            player.velocity.scaleTo(5);
        }

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