$Module.define(() => class GameObject {

    constructor({
        position = new Vector(),
        color = '#f00',
        velocityDamping = 0.99,
        velocity = new Vector(),
        rotation = 0
    } = {}) {
        this.position = position;
        this.velocity = velocity;
        this.velocityDamping = velocityDamping;
        this.color = color;
        this.rotation = rotation;
        this.rotationCenter = position;
        this.alive = true;
    }

    alive() {
        return this.alive;
    }

    render(renderer) {
        renderer.circle(this.position, 1, this.color);
    }

    update() {
        this.updateVelocity();
        this.updatePosition();
    }

    updatePosition() {
        this.position = this.position.add(this.velocity);
    }

    updateVelocity() {
        this.velocity = this.velocity.scale(this.velocityDamping);
    }

});

$Module.define(({ GameObject }) => class Circle extends GameObject {

    constructor(config = {}) {
        super(config);
        this.radius = config.radius || 5;
    }

    render(renderer)  {
        renderer.circle(this.position, this.radius, this.color);
    }

});

$Module.define(({ GameObject }) => class Rectangle extends GameObject {

    constructor(config = {}) {
        super(config);
        this.size = config.size;
    }

    render(renderer) {
        renderer.rectangle(this.position, this.size, this.color);
    }

});

$Module.define(({ GameObject }) => class Composite extends GameObject {

    constructor(config = {}) {
        super(config);
        this.root = {};
        this.nameCounter = 0;
    }

    add({
        name = 'unnamed' + this.nameCounter++,
        offset = new Vector(),
        object
    }) {
        this.root[name] = { object, offset };
        return this;
    }

    render(renderer) {
        renderer.transform({ translation: this.position }, () => {
            for (let name in this.root) {
                renderer.transform({ translation: this.root[name].offset }, () =>
                    this.root[name].object.render(renderer));
            }
        });
    }

})

$Module.define(({ GameObject }) => class SpringyVector extends GameObject {

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
        let dampingForce = this.velocity.scale(this.damping);
        let acceleration = this.target()
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(dampingForce);

        this.velocity = this.velocity.add(acceleration);
    }

})

$Module.define(({ GameObject }) => class Polygon extends GameObject {

    constructor(config = {}) {
        super(config);
        this.points = config.points || [];
    }

    render(renderer) {
        renderer.transform({ translation: this.position }, () =>
            renderer.polygon(this.points, this.color));
    }

});

$Module.define(({ GameObject, Circle, _ }) => class Explosion {

    constructor(config) {
        this.particles = [];
        this.config = config;
    }

    fire() {
        this.init(this.config);
        return this;
    }

    init({
        size = 2,
        magnitude = 10,
        color = "#f00",
        particleSize = 20,
        position = new Vector(),
        fromAngle = 0,
        toAngle = Math.PI * 2
    } = {}) {
        this.particles = this.particles.concat(_.range(size, () => new Circle({
            color,
            position: position.copy(),
            radius: particleSize,
            velocity: Vector.randomPolar(1, fromAngle, toAngle)
                .scale(_.random(magnitude / 2, magnitude))
        })));
    }

    recycle() {
        this.particles = this.particles.filter(particle => particle.size > 0.5);
    }

    alive() {
        return this.particles.length > 0;
    }

    render(renderer) {
        this.particles.forEach(particle => particle.render(renderer));
    }

    applyForce(force) {
        this.particles.forEach(particle => particle.applyForce(force));
    }

    update(dt) {
        this.particles.forEach(particle => {
            particle.size /= _.random(1.02, 1.05);
            particle.update(dt)
        });
        // this.recycle();
    }

});
