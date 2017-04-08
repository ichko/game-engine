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
        this.position = this.position.add(this.velocity.scale(dt));
    }

    updateVelocity({ dt = 1 } = {}) {
        this.velocity = this.velocity.scale(this.velocityDamping);
    }

    static extend(func) {
        this.prototype[func.name] = func;
        return this;
    }

    emision() {
        return [];
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
        renderer.transform({
            translation: this.position,
            rotation: this.rotation,
            scale: new Vector(this.size, this.size)
        }, () => {
            for (let name in this.root) {
                renderer.transform({ translation: this.root[name].offset }, () =>
                    this.root[name].object.render(renderer));
            }
        });
    }

    update() {
        super.update();
        for (let name in this.root) {
            this.root[name].object.update();
        }
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
        let dampingForce = this.velocity.scale(this.damping);
        let acceleration = this.target()
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(dampingForce);

        this.velocity = this.velocity.add(acceleration);
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
            style, position, radius: particleSize,
            velocity: Vector.randomPolar(1, fromAngle, toAngle)
                .scale(Utils.random(magnitude / 2, magnitude))
        })));
    }

    recycle() {
        this.particles = this.particles.filter(particle => particle.radius > 0.5);
    }

    alive() {
        return this.particles.length > 0;
    }

    render(renderer) {
        renderer.transform({ rotation: this.rotation }, () =>
            this.particles.forEach(particle => particle.render(renderer)));
    }

    applyForce(force) {
        this.particles.forEach(particle => particle.applyForce(force));
    }

    update(dt) {
        this.particles.forEach(particle => {
            particle.radius /= Utils.random(1.05, 1.1);
            particle.update(dt)
        });
        this.recycle();
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

    emision() {
        return this.emissions.splice(0, this.emissions.length);
    }

    explode(magnitude = 5) {
        this.dead = true;
        this.emissions.push(new Explosion({
            position: this.position, size: this.size,
            particleSize: this.size / 2, style: this.style, magnitude
        }).fire());
    }

});

App.define(() => class Spawner {

    constructor(creator = (() => [])) {
        this.creator = creator;
        this.items = [];
    }

    update(context) {
        this.items.forEach(item => item.update(context)); 
        let createdItems = this.creator();
        if (createdItems && createdItems.length) {
            this.items = this.items.concat(createdItems)
        }
        this.recycle();
    }

    recycle() {
        this.items = this.items.filter(item => item.alive());
    }

    render(renderer) {
        this.items.forEach(item => item.render(renderer)); 
    }

    alive() {
        return true;
    }

});
