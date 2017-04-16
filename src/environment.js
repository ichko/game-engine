App.define(({ Utils, Circle }) => class Environment {

    constructor(camera) {
        this.camera = camera;
        this.width = width;
        this.height = height;

        let color = '#36f';
        this.container = [
            { objects: this.circleGenerator(10, { style: { color, opacity: 0.8 }, size: 3 }), depth: 0.5 },
            { objects: this.circleGenerator(10, { style: { color, opacity: 0.6 }, size: 3 }), depth: 0.8 },
            { objects: this.circleGenerator(10, { style: { color, opacity: 0.4 }, size: 2 }), depth: 1.2 },
            { objects: this.circleGenerator(10, { style: { color, opacity: 0.2 }, size: 2 }), depth: 1.5 }
        ];
    }

    circleGenerator(count, { size, style } = {}) {
        return Utils.range(count, () => new Circle({
            position: Vector.random(-width / 2, width / 2, -this.height / 2, this.height / 2),
            radius: Utils.random(1, size), style
        }));
    }

    outOfBounds() {
        this.container.forEach(layer => {
            layer.objects.forEach(element => {
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
        });
    }

});