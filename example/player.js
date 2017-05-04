import {
    Vector, Composite, Fountain, Polygon,
    Utils, Spawner, Explosion, Rectangle
} from 'engine';
import { colors } from './config';


export class Player extends Composite {

    constructor(controller) {
        super();
        this.controller = controller;

        this.fuelTankMax = 1000;
        this.fuelTank = this.fuelTankMax;

        this.exhaust = new Fountain({ particleSize: 4, style: { opacity: 0.2 },
                        fromAngle: Math.PI / 2 * 3 - 0.3, toAngle: Math.PI / 2 * 3 + 0.3 });
        this.ship = new Polygon({ points: [new Vector(-5, 0), new Vector(0, -3), 
                                           new Vector(5, 0), new Vector(0, 15)] });
        this.speed = 0;
        this.color = Utils.randomArray(colors);

        this.add({ object: this.exhaust });
        this.add({ object: this.ship });

        this.explosions = [];
        this.explosionSpawner = new Spawner(() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }
    
    revive(size = 10) {
        this.setFuel(size);
    }
    
    damage(size = 10) {
        this.setFuel(-size);
    }
    
    setFuel(fuelDiff = 10) {
        let newFuel = this.fuelTank - fuelDiff;
        this.fuelTank = newFuel < 0 ? 0 : newFuel;
        if (this.fuelTank <= 0) {
            this.kill();
        }
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
        this.exhaust.style.color = this.color;
        this.controller.color = this.color;
        this.controller.fuelTankUi.style.color = this.color;
        this.controller.setFuelTank(this.fuelTank / this.fuelTankMax);

        let forwardAngle = this.controller.direction.angle() + Math.PI;
        this.ship.rotation = forwardAngle + Math.PI / 2;
        this.exhaust.config.fromAngle = forwardAngle - 1 / this.speed;
        this.exhaust.config.toAngle = forwardAngle + 1 / this.speed;
        this.exhaust.config.magnitude = this.speed / 1.5;
        this.exhaust.config.size = this.speed / 1.5;
        this.fuelTank = this.fuelTank < 0 ? 0 : this.fuelTank - this.speed / 10;

        this.velocity.add(this.controller.direction.copy().scale((1 / 3000) * this.speed));
        if (this.velocity.length() > 2.5) {
            this.velocity.scaleTo(2.5);
        }
    }

}
