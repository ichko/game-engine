class GameObject {
    constructor(position = Vector()) {
        this.position = position;
        this.sizeScale = 1;
        this.scale = Vector(1, 1);
        this.offset = Vector();
    }

    getWorldPosition() {
        return this.position.add(offset).vectorScale(this.scale);
    }
}

let PrimitiveObject = {
    Circle: class Circle extends GameObject {
        constructor(position = Vector(), radius = 5, color = '#f00') {
            super(position);
            this.radius = radius;
            this.color = color;
        }

        draw(ctx)  {
            let worldPosition = this.getWorldPosition();
            ctx.begginPath();
            ctx.fillStyle = this.color;
            ctx.arc(worldPosition.x, worldPosition.y,
                    this.radius * this.sizeScale, 0, Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    },
    Rectangle: class Rectangle extends GameObject {
        constructor(position = Vector(), size = { width: 5, height: 10 }, color = '#f00') {
            super(position);
            this.width = width;
            this.height = height;
            this.color = color;
        }

        draw(ctx)  {
            let worldPosition = this.getWorldPosition();
            ctx.begginPath();
            ctx.fillStyle = this.color;
            ctx.rect(worldPosition.x, worldPosition.y,
                     this.width * this.sizeScale, this.height * this.sizeScale);
            ctx.fill();
            ctx.closePath();
        }
    }
}