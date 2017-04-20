export class Scene {

    constructor() {
        this.container = [];
    }

    add(...objects) {
        this.container = this.container.concat(objects);
        return this;
    }

    render(renderer) {
        this.container.forEach(object => object.render(renderer));
    }

    update(ctx) {
        this.container = this.container.filter(object => {
            object.update(ctx);
            if (typeof object.alive !== "undefined") {
                return object.alive();
            }

            return true;
        });
    }

}
