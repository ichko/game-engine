App.define(({ Utils }) => class Parallax {

    constructor(reference = new Vector()) {
        this.reference = reference;
        this.layers = [];
        this.zoom = 1;
    }

    target(reference) {
        this.reference = reference;
        return this;
    }

    addLayer({ objects = [], depth = 1 }) {
        this.layers.push({ objects: new Set(objects), depth: 1 / depth });
        return this;
    }

    render(renderer) {
        this.layers.forEach(layer => {
            renderer.push({
                translation: this.reference.copy().scale(-layer.depth),
                scale: new Vector(this.zoom, this.zoom)
            });
            layer.objects.forEach(object => object.render(renderer));
            renderer.pop();
        });
    }

    update() {
        this.layers.forEach(layer => Utils.filterSet(layer.objects, object => {
            object.update();
            return object.alive();
        }));
    }

});
