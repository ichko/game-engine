import { Vector, Circle, SpringyVector, Rectangle } from 'engine';


export class Controller {

    constructor(io, width, height) {
        this.width = width;
        this.radius = Math.min(width, height) / 6;
        this.color = 'red';
        this.center = new Vector(-width / 2 + this.radius + 45, -height / 2 + this.radius + 45);
        this.direction = new Vector();

        this.controllerSpring = new SpringyVector({
            elasticity: 0.1,
            damping: 0.5,
            target: () => io.mouse
        });
        this.bigCircle = new Circle({
            radius: this.radius,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
        this.smallCircle = new Circle({
            radius: this.radius / 1.5,
            position: this.center,
            style: { color: this.color, opacity: 0.5 }
        });
        this.fuelTankUi = new Rectangle({
            position: new Vector(0, height / 2 - 10),
            width, height: 20
        });
        this.speedUi = new Rectangle({
            position: new Vector(0, -height / 2 + 10),
            width, height: 20
        });
    }

    render(renderer) {
        this.bigCircle.render(renderer);
        this.smallCircle.render(renderer);
        this.fuelTankUi.render(renderer);
        this.speedUi.render(renderer);
    }

    setSpeed(percentage) {
        this.speedUi.width = percentage * this.width / 5;
    }

    setFuelTank(percentage) {
        this.fuelTankUi.width = this.width * percentage;
    }

    update() {
        this.bigCircle.style.color = this.color;
        this.smallCircle.style.color = this.color;
        this.controllerSpring.update();

        this.direction = this.controllerSpring.position.copy().subtract(this.center).cut(this.radius / 2);
        this.smallCircle.position = this.center.copy().add(this.direction);
    }

}
