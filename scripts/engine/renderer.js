App.define(() => class CanvasRenderer {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    transform(transformation, transformedRendering) {
        this.push(transformation);
        transformedRendering();
        this.pop();
    }

    push({
        scale = new Vector(1, 1),
        rotation = 0,
        translation = new Vector()
    } = {}) {
        this.ctx.save();
        this.ctx.scale(scale.x, scale.y);
        this.ctx.rotate(rotation);
        this.ctx.translate(translation.x, translation.y);
    }

    pop() {
        this.ctx.restore();
    }

    circle(position, radius, { color }) {
        // this.ctx.shadowColor = color;
        // this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = color;

        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    rectangle(position, size, { color }) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(position.x - size.width / 2, position.y - size.height / 2, size.width, size.height);
    }

    clear() {
        this.ctx.fillStyle = "rgba(0,0,0,1)";
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

    polygon(points, size = 1, { color }) {
        if (points.length > 2) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.moveTo(points[0].x * size, points[0].y * size);
            points.forEach(point => {
                this.ctx.lineTo(point.x * size, point.y * size);
            });
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

});
