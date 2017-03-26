App.define(() => class Renderer {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.transformations = [];
    }

    transform(transformation, transformedRendering) {
        this.pushTransformation(transformation);
        transformedRendering();
        this.popTransformation();
    }

    pushTransformation({
        scale = new Vector(1, 1),
        rotation = 0,
        translation = new Vector()
    } = {}) {
        this.ctx.save();
        this.ctx.translate(translation.x, translation.y);
        this.ctx.rotate(rotation);
        this.ctx.scale(scale.x, scale.y);
    }

    popTransformation() {
        this.ctx.restore();
    }

    getTranslation() {
        return new Vector();
    }

    circle(position, radius, color) {
        position = this.getTranslation().add(position);

        // this.ctx.shadowColor = color;
        // this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = color;

        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    rectangle(position, size, color) {
        position = this.getTranslation().add(position);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(position.x - size.width / 2, position.y - size.height / 2, size.width, size.height);
    }

    clear() {
        this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

    polygon(points, color) {
        if (points.length > 2) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            let position = this.getTranslation().add(points[0]);
            this.ctx.moveTo(position.x, position.y);
            points.forEach(point => {
                let position = this.getTranslation().add(point);
                this.ctx.lineTo(position.x, position.y);
            });
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

});
