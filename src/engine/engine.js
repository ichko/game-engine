export default class Engine {

    constructor(renderer, scene) {
        this.renderer = renderer;
        this.scene = scene;
    }

    render() {
        this.scene.render(this.renderer);
        return this;
    }

    update() {
        this.scene.update();
        return this;
    }

    clear() {
        this.renderer.clear();
        return this;
    }

}
