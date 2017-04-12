App.define(({ Composite, Fountain, Polygon, Utils }) => class Player extends Composite {

    constructor(config) {
        super(config);
        this.fuel = new Fountain({ particleSize: 6, style: { color: 'rgba(255, 68, 51, 0.3)', opacity: 0.2 },
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        this.ship = new Polygon({ points: [new Vector(-6, 0), new Vector(0, -3), new Vector(6, 0), new Vector(0, 20)] });
        this.speed = 0;
        this.color = '#fc0';

        this.add({ object: this.fuel });
        this.add({ object: this.ship });
    }

    update(ctx) {
        super.update(ctx);
        this.ship.style.color = this.color;
        this.fuel.style.color = this.color;

        let forwardAngle = io.mouse.angle() + Math.PI;
        this.ship.rotation = forwardAngle + Math.PI / 2;
        this.fuel.config.fromAngle = forwardAngle - 1 / this.speed;
        this.fuel.config.toAngle = forwardAngle + 1 / this.speed;
        this.fuel.config.magnitude = this.speed / 1.5;
        this.fuel.config.size = this.speed / 2;

        this.velocity.add(io.mouse.copy().scale((1 / 10000) * this.speed));
        if (this.velocity.length() > 4) {
            this.velocity.scaleTo(4);
        }
    }

});
