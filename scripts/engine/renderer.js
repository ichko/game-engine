$Module.define(() => class Renderer {

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
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(position.x, -position.y, radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    rectangle(position, size, color) {
        position = this.getTranslation().add(position);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(position.x - size.width / 2, -position.y, size.width, size.height);
    }

    clear() {
        this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

    polygon(points, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.moveTo(points[0]);
        points.forEach(point => {
            let position = this.getTranslation().add(point);
            this.ctx.moveTo(point);
        });
        this.ctx.closePath();
        this.ctx.fill();
    }

});
