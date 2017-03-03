class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    vectorScale(vector) {
        return new Vector(this.x * vector.x, this.y * vector.y);
    }
}

class GameObject {
    constructor(position = Vector()) {
        this.position = position;
        this.drawPosition = position;
    }
}

class Layer extends GameObject {
    constructor(objects = [], offset = Vector()) {
        this.objects = objects;
        this.offset = offset;
    }

    draw() {
        this.objects.forEach(object => {
            object.drawPosition = object.position.vectorScale(offset);
            object.draw();
        });
    }
}

class Parallax extends GameObject {
    constructor(layers = []) {
        this.layers = layers;
    }

    draw() {
        this.layers.forEach(layer => layer.draw());
    }
}


