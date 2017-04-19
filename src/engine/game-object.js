import { Vector } from './vector';


export class GameObject {

    constructor(config) {
        this.set(config);
    }

    set({
        position = new Vector(),
        style = { color: '#f00' },
        velocityDamping = 1,
        velocity = new Vector(),
        rotation = 0,
        rotationCenter = position,
        size = 1
    } = {}) {
        this.position = position;
        this.velocity = velocity;
        this.velocityDamping = velocityDamping;
        this.style = style;
        this.size = size;

        this.rotation = rotation;
        this.rotationCenter = rotationCenter;
        this.dead = false;
    }

    alive() {
        return !this.dead;
    }

    render(renderer) { }

    update(context) {
        this.updateVelocity(context);
        this.updatePosition(context);
    }

    updatePosition({ dt = 1 } = {}) {
        this.position.add(this.velocity.copy().scale(dt));
    }

    updateVelocity({ dt = 1 } = {}) {
        this.velocity.scale(this.velocityDamping);
    }

    static extend(func) {
        this.prototype[func.name] = func;
        return this;
    }

}
