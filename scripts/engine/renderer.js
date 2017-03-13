class Renderer extends Pluggable {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.translateTransformations = [];
    }

    pushTranslation(translation) {
        this.translateTransformations.push(translation);
    }

    popTranslation() {
        this.translateTransformations.pop();
    }

    getTranslation() {
        return this.translateTransformations
            .reduce((left, right) => left.add(right), new Vector());
    }

    circle(position, radius, color) {
        position = this.getTranslation().add(position);
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(position.x, -position.y, radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    rectangle(position, size, color) {
        position = this.getTranslation().add(position);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(position.x - size.width / 2, -position.y, size.width, size.height);
    }

    clear() {
        this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

}
