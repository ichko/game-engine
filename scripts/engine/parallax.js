App.define(() => class Layer {

    constructor(objects = [], depth = 1, position = new Vector()) {
        this.objects = objects;
        this.depth = depth;
        this.position = position;
    }

    recycle() {
        this.objects = this.objects.filter(object => object.alive());
    }

    render(renderer) {
        renderer.transform({ translation: this.position }, () =>
            this.objects.forEach(object => object.render(renderer)));
    }

    update() {
        this.objects.forEach(object => {
            object.update()
        });
    }

});

App.define(() => class Parallax {

    constructor(reference = () => new Vector()) {
        this.reference = reference;
        this.layers = [];
        this.zoom = 1;
    }

    target(reference) {
        this.reference = reference;
        return this;
    }

    addLayer({ objects = [], depth = 1 }) {
        this.layers.push(new Layer(objects, 1 / depth));
        return this;
    }

    render(renderer) {
        this.layers.forEach(layer =>
            renderer.transform({
                translation: this.reference().scale(-layer.depth),
                scale: new Vector(this.zoom, this.zoom)
            }, () => layer.render(renderer)));
    }

    update() {
        this.layers.forEach(layer => {
            layer.update();
            layer.recycle();
        });
    }

});
