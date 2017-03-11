class GameObject {

    constructor({ position = new Vector(), scale = 1, color = '#f00' }) {
        this.position = position;
        this.scale = scale;
        this.color = color;
    }

}

class Circle extends GameObject {

    constructor(config) {
        super(config);
        this.radius = config.radius;
    }

    draw(renderer)  {
        renderer.circle(this.position, this.radius, this.color);
    }

}

class Rectangle extends GameObject {

    constructor(config) {
        super(config);
        this.size = config.size;
    }

    draw(renderer) {
        renderer.rectangle(this.position, this.size, this.color);
    }

}