App.define(() => class GameObject {

    constructor({
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

});

App.define(({ GameObject }) => class Circle extends GameObject {

    constructor(config = {}) {
        super(config);
        this.radius = config.radius || 5;
    }

    render(renderer)  {
        renderer.circle(this.position, this.radius, this.style);
    }

});

App.define(({ GameObject }) => class Rectangle extends GameObject {

    constructor(config = {}) {
        super(config);
        this.size = config.size;
    }

    render(renderer) {
        renderer.rectangle(this.position, this.size, this.style);
    }

});

App.define(({ GameObject }) => class Composite extends GameObject {

    constructor(config = {}) {
        super(config);
        this.items = [];
    }

    add({ offset = new Vector(), object }) {
        this.items.push({ object, offset });
        return this;
    }

    render(renderer) {
        renderer.transform({
            translation: this.position,
            scale: new Vector(this.size, this.size)
        }, () => {
            this.items.forEach(({ object, offset }) => {
                renderer.transform({ translation: offset }, () => object.render(renderer))
            });
        });
    }

    update(ctx) {
        super.update(ctx);
        this.items.forEach(({ object }) => object.update(ctx));
    }

});

App.define(({ GameObject }) => class SpringyVector extends GameObject {

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

});

App.define(({ GameObject, Circle, Utils }) => class Explosion extends GameObject {

    constructor(config) {
        super(config);
        this.particles = [];
        this.position = [];
        this.config = config;
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
        this.particles = this.particles.concat(Utils.range(size, () => new Circle({
            style, position: position.copy(), radius: particleSize,
            velocity: Vector.randomPolar(1, fromAngle, toAngle)
                .scale(Utils.random(magnitude / 2, magnitude))
        })));
    }

    alive() {
        return this.particles.length > 0;
    }

    render(renderer) {
        renderer.transform({ rotation: this.rotation }, () =>
            this.particles.forEach(particle => particle.render(renderer)));
    }

    update(dt) {
        this.particles = this.particles.filter(particle => {
            particle.radius /= Utils.random(1.05, 1.1);
            particle.update(dt)
            return particle.radius > 0.5;
        });
    }

});

App.define(({ Explosion }) => class Fountain extends Explosion {

    constructor(config) {
        super(config);
    }

    update(dt) {
        this.fire();
        super.update(dt);
    }

});

App.define(({ GameObject, Explosion }) => class Polygon extends GameObject {

    constructor(config = {}) {
        super(config);
        this.points = config.points || [];
        this.emissions = [];
    }

    render(renderer) {
        renderer.transform({ translation: this.position, rotation: this.rotation }, () =>
            renderer.polygon(this.points, this.size, this.style));
    }

});

App.define(() => class Spawner {

    constructor(condition = (() => false), creator = (() => [])) {
        this.creator = creator;
        this.condition = condition;
        this.items = [];
    }

    update(context) {
        if (this.condition(this.items.length)) {
            this.items.push(...this.creator())
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

});
