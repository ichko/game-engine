App.define(() => class Scene {

    constructor() {
        this.container = [];
    }

    add(...objects) {
        this.container = this.container.concat(objects);
        return this;
    }

    recycle() {
        this.container = this.container.filter(object => {
            if (typeof object.alive !== "undefined") {
                object.alive();
            }

            return true;
        });
    }

    render(renderer) {
        this.container.forEach(object => object.render && object.render(renderer));
    }

    update(params) {
        this.container.forEach(object => {
            if (object.update) {
                object.update(params);
            }
        });
        this.recycle();
    }

});
