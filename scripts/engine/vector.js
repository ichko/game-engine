class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.x);
    }

    reverse() {
        return new Vector(-this.x, -this.y);
    }

    scale(factor) {
        return new Vector(this.x * factor, this.y * factor);
    }

    vectorScale(vector) {
        return new Vector(this.x * vector.x, this.y * vector.y);
    }

}
