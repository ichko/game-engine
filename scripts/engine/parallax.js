$Module.define(() => class Layer {

    constructor(objects = [], depth = 1, position = new Vector()) {
        this.objects = objects;
        this.depth = depth;
        this.position = position;
    }

    render(renderer) {
        renderer.transform({ translation: this.position }, () =>
            this.objects.forEach(object => object.render(renderer)));
    }

});

$Module.define(() => class Parallax {

    constructor(reference = () => new Vector()) {
        this.reference = reference;
        this.layers = [];
        this.objects = [];
    }

    add(...objects) {
        this.objects = this.objects.concat(objects);
        return this;
    }

    addLayer({ objects, depth = 1 }) {
        this.layers.push(new Layer(objects, 1 / depth));
        this.objects = this.objects.concat(objects);
        return this;
    }

    render(renderer) {
        this.layers.forEach(layer =>
            renderer.transform({
                translation: this.reference().scale(-layer.depth)
            }, () => layer.render(renderer)));
    }

    update() {
        this.objects.forEach(object => object.update());
    }

});
