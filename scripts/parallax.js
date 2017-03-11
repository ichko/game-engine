class Layer {

    constructor(objects = [], depth = 1, position = new Vector()) {
        this.objects = objects;
        this.depth = depth;
        this.position = position;
    }

    draw(renderer) {
        renderer.pushTranslation(this.position);
        this.objects.forEach(object => object.draw(renderer));
        renderer.popTranslation();
    }

}

class Parallax {

    constructor(reference = new Vector()) {
        this.reference = reference;
        this.layers = [];
    }

    newLayer({ objects, depth = 1 }) {
        this.layers.push(new Layer(objects, depth));
        return this;
    }

    draw(renderer) {
        this.layers.forEach(layer => {
            renderer.pushTranslation(this.reference.scale(-layer.depth));
            layer.draw(renderer)
            renderer.popTranslation();
        });
    }

}
