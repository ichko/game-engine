export class Scene {

    constructor() {
        this.container = [];
    }

    add(...objects) {
        objects.forEach(objects => {
             if (typeof objects.setup !== 'undefined') {
                objects.setup();
            }
        });

        this.container = this.container.concat(objects);
        return this;
    }

    render(renderer) {
        this.container.forEach(object => {
            if (typeof object.render !== 'undefined') {
                object.render(renderer);
            }
        });
    }

    update(ctx) {
        this.container = this.container.filter(object => {
            object.update(ctx);
            if (typeof object.alive !== 'undefined') {
                return object.alive();
            }

            return true;
        });
    }

}
