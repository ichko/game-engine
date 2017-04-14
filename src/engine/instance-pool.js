App.define(() => class  InstancePool {

    constructor(type) {
        this.type = type;
        this.released = [];
        this.alocated = new Set();
    }

    new(...config) {
        if (this.released.length > 0) {
            return this.released[0].set(...config);
        }

        let instance = new this.type(...config);
        this.alocated.add(instance);
        return instance;
    }

    release(instance) {
        if (this.alocated.has(instance)) {
            this.alocated.delete(instance);
            this.released.push(instance);
        }
    }

});
