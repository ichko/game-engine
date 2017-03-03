class Layer extends GameObject {
    constructor(objects = [], scale = Vector()) {
        this.objects = objects;
        this.scale = scale;
    }

    draw() {
        this.objects.forEach(object => {
            object.scale = this.scale;
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
