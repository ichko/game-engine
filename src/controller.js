App.define(({
    Vector,
    Circle
}) => class Controller {

    constructor(io, width, height) {
        this.radius = Math.min(width, height) / 6;

        this.color = 'rgba(255, 20, 100, 0.3)'
        this.io = io;
        this.center = new Vector(-width / 2 + this.radius + 20, -height / 2 + this.radius + 20);
        this.bigCircle = new Circle({
            radius: this.radius,
            position: this.center,
            style: { color: this.color, opacity: 0.2 }
        });
        this.smallCircle = new Circle({
            radius: this.radius / 1.5,
            position: this.center,
            style: { color: this.color, opacity: 0.4 }
        });
        this.direction = new Vector();
    }

    render(renderer) {
        this.bigCircle.render(renderer);
        this.smallCircle.render(renderer);
    }

    update() {
        this.bigCircle.style.color = this.color;
        this.smallCircle.style.color = this.color;

        this.direction = this.io.mouse.copy().subtract(this.center).cut(this.radius / 2);
        this.smallCircle.position = this.center.copy().add(this.direction);
    }

});
