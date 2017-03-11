class GameObject {

    constructor({ position = new Vector(), scale = 1, color = '#f00' }) {
        this.position = position;
        this.scale = scale;
        this.color = color;
    }

    render() {}

}

class Circle extends GameObject {

    constructor(config) {
        super(config);
        this.radius = config.radius;
    }

    render(renderer)  {
        renderer.circle(this.position, this.radius, this.color);
    }

}

class Rectangle extends GameObject {

    constructor(config) {
        super(config);
        this.size = config.size;
    }

    render(renderer) {
        renderer.rectangle(this.position, this.size, this.color);
    }

}

class Composite extends GameObject {

    constructor(config) {
        super(config);
        this.bones = { };
        this.nameCounter = 0;
    }

    add({
        name = 'unnamed' + this.nameCounter++,
        object,
        offset = new Vector(),
        parent = 'root'
    }) {
        this.bones[name] = { object, offset };
    }

    render(renderer) {
        renderer.pushTranslation(this.position);
        for (let name in this.bones) {
            renderer.pushTranslation(this.root[name].offset);
            this.root[name].render(renderer);
            renderer.popTranslation();
        }
        renderer.popTranslation();
    }

}
