$Module.define(() => class Renderer {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.transformations = [];
        this.angle = 0;
    }

    transform(transformation, transformedRendering) {
        this.pushTransformation(transformation);
        transformedRendering();
        this.popTransformation();
    }

    pushTransformation(transformation) {
        this.transformations.push(transformation);
    }

    popTransformation() {
        this.transformations.pop();
    }

    getTranslation() {
        return this.transformations
            .map(({ translation }) => translation)
            .reduce((left, right) => left.add(right), new Vector());
    }

    circle(position, radius, color) {
        position = this.getTranslation().add(position);

        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = color;

        this.ctx.beginPath();
        this.ctx.arc(position.x, -position.y, radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    rectangle(position, size, color) {
        position = this.getTranslation().add(position);
        this.angle += 0.0001
        this.ctx.translate(position.x - size.width / 2, -position.y + size.height / 2);
        this.ctx.rotate(this.angle);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, size.width, size.height);
        this.ctx.rotate(-this.angle);
        this.ctx.translate(-position.x + size.width / 2, position.y - size.height / 2);
    }

    clear() {
        this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

    polygon(points, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.moveTo(points[0]);
        points.forEach(point => this.ctx.lineTo(this.getTranslation().add(point)));
        this.ctx.closePath();
        this.ctx.fill();
    }

});
