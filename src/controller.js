App.define(({
    Vector,
    Circle
}) => class Controller {

    constructor(mouse, width, height) {
        this.radius = Math.min(width, height) / 5;

        this.color = 'red'
        this.mouse = mouse;
        this.center = new Vector(-width / 2 + this.radius + 50, -height / 2 + this.radius + 50);
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
        this.direction = new Vector();
    }

    render(renderer) {
        this.bigCircle.render(renderer);
        this.smallCircle.render(renderer);
    }

    update() {
        this.bigCircle.style.color = this.color;
        this.smallCircle.style.color = this.color;

        this.direction = this.mouse.position.copy().subtract(this.center).cut(this.radius / 2);
        this.smallCircle.position = this.center.copy().add(this.direction);
    }

});
