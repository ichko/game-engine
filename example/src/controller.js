import { Vector, Circle, SpringyVector } from 'engine';


export class Controller {

    constructor(io, width, height) {
        this.radius = Math.min(width, height) / 6;
        this.color = 'red'
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
    }

    render(renderer) {
        this.bigCircle.render(renderer);
        this.smallCircle.render(renderer);
    }

    update() {
        this.bigCircle.style.color = this.color;
        this.smallCircle.style.color = this.color;
        this.controllerSpring.update();

        this.direction = this.controllerSpring.position.copy().subtract(this.center).cut(this.radius / 2);
        this.smallCircle.position = this.center.copy().add(this.direction);
    }

}
