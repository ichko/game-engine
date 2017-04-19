export class Scene {

    constructor() {
        this.container = [];
    }

    add(...objects) {
        this.container = this.container.concat(objects);
        return this;
    }

    render(renderer) {
        this.container.forEach(object => object.render && object.render(renderer));
    }

    update(params) {
        this.container = this.container.filter(object => {
            if (object.update) {
                object.update(params);
                if (typeof object.alive !== "undefined") {
                    return object.alive();
                }

                return true;
            }
        });
    }

}
