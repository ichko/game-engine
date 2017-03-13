class PhysicalObject {

    constructor({
        position = new Vector(),
        velocity = new Vector(),
        mass = 1
    } = {}) {
        this.position = position;
        this.velocity = velocity;
        this.mass = mass;
    }

}

class SpringyVector extends PhysicalObject {

    constructor({ damping = 0.1, elasticity = 0.1, target = new Vector(), self = new Vector() } = {}) {
        super({ self,  });
        this.target = target;
        this.position = self;
        this.elasticity = elasticity;
        this.damping = damping;
    }

    updateVelocity() {
        let damping = this.velocity.scale(this.damping);
        let acceleration = this.target
            .subtract(this.position)
            .scale(elasticity)
            .subtract(damping);

        this.velocity = this.velocity.add(this.acceleration);
    }

    get x() {
        this.self.x;
    }

    get y() {
        this.self.y;
    }

    set x(value) {
        this.self.x = value;
    }

    set y(value) {
        this.self.y = value;
    }

}
