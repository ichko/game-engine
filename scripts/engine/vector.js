App.define(({ Utils }) => class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    reverse() {
        return new Vector(-this.x, -this.y);
    }

    scale(factor) {
        return new Vector(this.x * factor, this.y * factor);
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    vectorScale(vector) {
        return new Vector(this.x * vector.x, this.y * vector.y);
    }

    static random(minx, maxx, miny, maxy) {
        return new Vector(Utils.random(minx, maxx), Utils.random(miny, maxy));
    }

    static polar(angle = 0, length = 1) {
        return new Vector(Math.cos(angle) * length, Math.sin(angle) * length);
    }

    static randomPolar(length = 1, minAngle = 0, maxAngle = Math.PI * 2) {
        return Vector.polar(Utils.random(minAngle, maxAngle), length);
    }

});
