App.define(({
    Composite, Fountain,
    Polygon, Utils,
    Spawner, Explosion
}) => class Player extends Composite {

    constructor(colors, controller) {
        super();
        this.controller = controller;
        this.fuel = new Fountain({ particleSize: 4, style: { opacity: 0.2 },
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        this.ship = new Polygon({ points: [new Vector(-4, 0), new Vector(0, -2), 
                                           new Vector(4, 0), new Vector(0, 12)] });
        this.speed = 0;
        this.color = Utils.randomArray(colors);

        this.add({ object: this.fuel });
        this.add({ object: this.ship });

        this.explosions = [];
        this.explosionSpawner = new Spawner(() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    kill() {
        this.explosions.push(new Explosion({
            position: this.position, size: 30, particleSize: 20,
            style: { color: this.color }, magnitude: 5
        }).fire());
        this.size = 0;
    }

    render(renderer) {
        this.explosionSpawner.render(renderer);
        super.render(renderer);
    }

    update(ctx) {
        super.update(ctx);
        this.explosionSpawner.update(ctx);

        this.ship.style.color = this.color;
        this.fuel.style.color = this.color;
        this.controller.color = this.color;

        let forwardAngle = this.controller.direction.angle() + Math.PI;
        this.ship.rotation = forwardAngle + Math.PI / 2;
        this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
        this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
        this.fuel.config.magnitude = this.speed / 1.5;
        this.fuel.config.size = this.speed * 1.1;

        this.velocity.add(controller.direction.copy().scale((1 / 1000) * this.speed));
        if (this.velocity.length() > 2) {
            this.velocity.scaleTo(2);
        }
    }

});
