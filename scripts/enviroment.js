class Layer {
    constructor(objects = [], scale = Vector(), referencePoint = new Vector()) {
        this.objects = objects;
        this.scale = scale;
        this.position = new Vector();
        this.referencePoint = referencePoint;
    }

    draw(ctx) {
        this.objects.forEach(object => {
            object.scale = this.scale;
            object.offset = this.position.add(this.referencePoint);
            object.draw(ctx);
        });
    }
}

class Parallax {
    constructor(referencePoint = new Vector(), layers = []) {
        this.layers = layers;
        this.referencePoint = referencePoint;
    }

    addLayer(name, objects, scale = new Vector()) {
        this.layers.push(new Layer(objects, scale, this.referencePoint));
        return this;
    }

    draw(ctx) {
        this.layers.forEach(layer => layer.draw(ctx));
    }
}
