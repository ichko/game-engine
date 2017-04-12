App.define(({ Utils, Circle }) => class Environment {

    constructor(camera) {
        this.camera = camera;
        this.width = width;
        this.height = height;

        this.container = {
            frontBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(220, 0, 100, 0.6)' }, size: 9 }), depth: 1.1 },
            frontSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(0, 200, 100, 0.6)' }, size: 7 }), depth: 1.2 },
            backBig: { elements: this.circleGenerator(10, { style: { color: 'rgba(240, 120, 0, 0.6)' }, size: 5 }), depth: 1.4 },
            backSmall: { elements: this.circleGenerator(10, { style: { color: 'rgba(50, 100, 200, 0.6)' }, size: 3 }), depth: 1.8 }
        };
    }

    circleGenerator(count, { size, style } = {}) {
        return Utils.range(count, () => new Circle({
            position: Vector.random(-width / 2, width / 2, -this.height / 2, this.height / 2),
            radius: Utils.random(1, size),
            style
        }));
    }

    outOfBounds() {
        for (let name in this.container) {
            let layer = this.container[name];
            layer.elements.forEach(element => {
                let cameraPos = this.camera.position.copy().scale(1 / layer.depth);

                if (cameraPos.x - element.position.x > this.width / 2) {
                    element.position.x = cameraPos.x + this.width / 2 - (cameraPos.x - element.position.x) % (this.width / 2);
                }
                if (element.position.x - cameraPos.x > this.width / 2) {
                    element.position.x = cameraPos.x - this.width / 2 + (cameraPos.x - element.position.x) % (this.width / 2);
                }

                if (cameraPos.y - element.position.y > this.height / 2) {
                    element.position.y = cameraPos.y + this.height - (cameraPos.y - element.position.y) % (this.height);
                }
                if (element.position.y - cameraPos.y > this.height / 2) {
                    element.position.y = cameraPos.y + (cameraPos.y - element.position.y) % (this.height);
                }
            });
        }
    }

});