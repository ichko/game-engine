class GameObject {
    constructor(position = new Vector()) {
        this.position = position;
        this.sizeScale = 1;
        this.scale = new Vector(1, 1);
        this.offset = new Vector();
    }

    getWorldPosition() {
        return this.position.add(this.offset.vectorScale(this.scale));
    }
}

let PrimitiveObject = {

    Circle: class Circle extends GameObject {
        constructor(position = new Vector(), radius = 5, color = '#f00') {
            super(position);
            this.radius = radius;
            this.color = color;
        }

        draw(ctx)  {
            let worldPosition = this.getWorldPosition();
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(worldPosition.x, worldPosition.y,
                    this.radius * this.sizeScale, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    },

    Rectangle: class Rectangle extends GameObject {
        constructor(position = new Vector(), size = { width: 5, height: 10 }, color = '#f00') {
            super(position);
            this.width = size.width;
            this.height = size.height;
            this.color = color;
        }

        draw(ctx)  {
            let worldPosition = this.getWorldPosition();
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.rect(worldPosition.x, worldPosition.y,
                     this.width * this.sizeScale, this.height * this.sizeScale);
            ctx.fill();
            ctx.closePath();
        }
    }

}