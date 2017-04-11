App.define(({ Utils }) => class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }

    noramlize() {
        let length = this.length();
        if (length !== 0) {
            this.x /= length;
            this.y /= length;
        }

        return this;
    }

    rotate(angle) {
        let [ sin, cos ] = [ Math.sin(angle), Math.cos(angle) ];
        let tmpX = this.x;
        this.x = this.x * cos - this.y * sin;
        this.y = tmpX * sin + this.y * cos;

        return this;
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    scaleTo(size = 1) {
        return this.noramlize().scale(size);
    }

    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    }

    distance(vector) {
        let dx = this.x - vector.x;
        let dy = this.y - vector.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    reverse() {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    scale(size) {
        this.x *= size;
        this.y *= size;

        return this;
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    vectorScale(vector) {
        this.x *= vector.x;
        this.y *= vector.y;

        return this;
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
