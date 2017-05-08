import {
    Vector, Composite, Fountain, Polygon,
    Utils, Spawner, Explosion
} from 'engine';
import { colors } from './config';


export class Player extends Composite {

    constructor(controller) {
        super();
        this.controller = controller;

        this.fuelTankMax = 500;
        this.fuelTank = this.fuelTankMax;

        this.maxSpeed = 5;
        this.speed = 0;

        this.exhaust = new Fountain({ particleSize: 4, style: { opacity: 0.2 },
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        this.ship = new Polygon({ points: [new Vector(-5, 0), new Vector(0, -3), 
                                           new Vector(5, 0), new Vector(0, 15)] });
        this.color = Utils.randomArray(colors);

        this.add({ object: this.exhaust });
        this.add({ object: this.ship });

        this.explosions = [];
        this.explosionSpawner = new Spawner(() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    setSpeed(percentage) {
        this.speed = this.maxSpeed * percentage;
    }

    revive(size = 10) {
        this.setFuelDiff(size);
    }

    damage(size = 10) {
        this.setFuelDiff(-size);
        this.explosions.push(new Explosion({
            position: this.position, size: 30, particleSize: 20,
            style: { color: this.color }, magnitude: 5
        }).fire());
    }

    setFuelDiff(fuelDiff = 10) {
        let newFuel = this.fuelTank + fuelDiff;
        this.fuelTank = Math.min(Math.max(0, newFuel), this.fuelTankMax);
        if (this.fuelTank <= 0) {
            this.kill();
        }
    }

    kill() {
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
        this.exhaust.style.color = this.color;
        this.controller.color = this.color;
        this.controller.fuelTankUi.style.color = this.color;
        this.controller.speedUi.style.color = this.color;

        this.controller.setFuelTank(this.fuelTank / this.fuelTankMax);
        this.controller.setSpeed(this.velocity.length());

        let forwardAngle = this.controller.direction.angle() + Math.PI;
        let speedForce = this.fuelTank > 0 ? this.speed : 0;

        this.ship.rotation = forwardAngle + Math.PI / 2;
        this.exhaust.config.fromAngle = forwardAngle - 1 / speedForce;
        this.exhaust.config.toAngle = forwardAngle + 1 / speedForce;
        this.exhaust.config.magnitude = speedForce / 1.5;
        this.exhaust.config.size = speedForce / 1.5;
        this.fuelTank = this.fuelTank < 0 ? 0 : this.fuelTank - speedForce / 10;

        this.velocity.add(this.controller.direction.copy().scale((1 / 3000) * speedForce));
        if (this.velocity.length() > 2.5) {
            this.velocity.scaleTo(2.5);
        }
    }

}
