import { GameObject } from './game-object';
import { InstancePool } from './instance-pool';
import { Utils } from './utils';
import { Vector } from './vector';


export class Circle extends GameObject {

    set(config = {}) {
        super.set(config);
        this.radius = config.radius || 5;
    }

    render(renderer)  {
        renderer.circle(this.position, this.radius, this.style);
    }

}

export class Rectangle extends GameObject {

    constructor(config = {}) {
        super(config);
        this.size = config.size;
    }

    render(renderer) {
        renderer.rectangle(this.position, this.size, this.style);
    }

}

export class Composite extends GameObject {

    constructor(config = {}) {
        super(config);
        this.items = [];
    }

    add({ offset = new Vector(), object }) {
        this.items.push({ object, offset });
        return this;
    }

    render(renderer) {
        renderer.push({
            translation: this.position,
            scale: new Vector(this.size, this.size)
        });
        this.items.forEach(({ object, offset }) => {
            renderer.push({ translation: offset });
            object.render(renderer);
            renderer.pop();
        });
        renderer.pop();
    }

    update(ctx) {
        super.update(ctx);
        this.items.forEach(({ object }) => object.update(ctx));
    }

}

export class SpringyVector extends GameObject {

    constructor({
        damping = 0.1,
        elasticity = 0.1,
        target = () => new Vector(),
        position = new Vector()
    } = {}) {
        super({ position });
        this.target = target;
        this.elasticity = elasticity;
        this.damping = damping;
    }

    updateVelocity() {
        let dampingForce = this.velocity.copy().scale(this.damping);
        let acceleration = this.target()
            .copy()
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(dampingForce);

        this.velocity.add(acceleration);
    }

}

export class Explosion extends GameObject {

    constructor(config) {
        super(config);
        this.particles = [];
        this.position = [];
        this.config = config;
        this.circlesPool = new InstancePool(Circle);
    }

    fire() {
        this.init(this.config);
        return this;
    }

    init({
        size = 2,
        magnitude = 10,
        style = { color: "#f00" },
        particleSize = 20,
        position = new Vector(),
        fromAngle = 0,
        toAngle = Math.PI * 2,
    } = {}) {
        this.particles = this.particles.concat(Utils.range(size, () => this.circlesPool.new({
            style, position: position.copy(), radius: particleSize, velocityDamping: 0.97,
            velocity: Vector.randomPolar(1, fromAngle, toAngle)
                .scale(Utils.random(magnitude / 2, magnitude))
        })));
    }

    alive() {
        return this.particles.length > 0;
    }

    render(renderer) {
        renderer.push({ rotation: this.rotation });
        this.particles.forEach(particle => particle.render(renderer));
        renderer.pop();
    }

    update(dt) {
        this.particles = this.particles.filter(particle => {
            particle.radius /= Utils.random(1.05, 1.1);
            particle.update(dt);

            let alive = particle.radius > 0.5;
            if (!alive) {
                this.circlesPool.release(particle);
            }

            return alive;
        });
    }

}

export class Fountain extends Explosion {

    constructor(config) {
        super(config);
    }

    update(dt) {
        this.fire();
        super.update(dt);
    }

}

export class Polygon extends GameObject {

    constructor(config = {}) {
        super(config);
        this.points = config.points || [];
        this.emissions = [];
    }

    render(renderer) {
        renderer.push({ translation: this.position, rotation: this.rotation });
        renderer.polygon(this.points, this.size, this.style);
        renderer.pop();
    }

}

export class Spawner {

    constructor(condition = (() => false), creator = (() => [])) {
        this.creator = creator;
        this.condition = condition;
        this.items = [];
    }

    update(context) {
        if (this.condition(this.items.length)) {
            this.items.push(...this.creator());
        }

        this.items = this.items.filter(item => {
            item.update(context);
            return item.alive();
        });
    }

    render(renderer) {
        this.items.forEach(item => item.render(renderer)); 
    }

    alive() {
        return true;
    }

}
