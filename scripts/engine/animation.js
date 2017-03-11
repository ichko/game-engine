class Animation {

    constructor({ start = 0, end = 1, diration = 5 }) {
        this.duration = diration;
        this.current = start;

        this.start = start;
        this.end = end;
    }

    getState() {
        return this.current / this.duration * (this.end - this.strt);
    }

    update(dt = 1) {
        if (this.current <= this.duration) {
            this.current += dt;
        }
    }

}

class SpryngyPoint {

    constructor({ start, end, duration }) {
        
    }

}
