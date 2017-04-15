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

        Player, AsteroidField,
        Environment, Controller
    } = App.load().get();


    let io = new IO(width, height);
    let renderer = new CanvasRenderer(ctx, width, height);
    let scene = new Scene();
    let engine = new Engine(renderer, scene);
    let controller = new Controller(io, width, height);


    let colors = ['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f'];
    let player = new Player(colors, controller);

    let camera = new SpringyVector({
        position: new Vector(0, height / 2 - 150),
        elasticity: 0.08,
        damping: 0.3,
        target: () => player.position.copy().add(player.velocity.copy().scale(3))
    });

    let parallax = new Parallax(camera.position);

    let enviroment = new Environment(camera, width, height);
    for (let name in enviroment.container) {
        parallax.addLayer({
            depth: enviroment.container[name].depth,
            objects: enviroment.container[name].elements
        });
    }

    parallax.addLayer({ objects: [player, new AsteroidField(player, colors, 10, Math.max(width, height))] });

    scene.add(parallax, controller, camera);

    io.onMouse(() => player.speed = 5, () => player.speed = 0);

    let time = 0;
    cancelAnimationFrame(animationFrame);
    (function animation() {
        time++;
        engine.clear().render().update();
        io.callHandlers();
        enviroment.outOfBounds();

        parallax.zoom = 50 / (player.velocity.length() + 30);

        animationFrame = requestAnimationFrame(animation);
    })();

// }
// init();