App.define(() => class  InstancePool {

    constructor(type) {
        this.type = type;
        this.released = new Set();
        this.alocated = new Set();
    }

    new(...config) {
        if (this.released.size > 0) {
            let instance = this.released.values().next().value;
            instance.set(...config);
            this.released.delete(instance);
            this.alocated.add(instance);

            return instance;
        }

        let instance = new this.type(...config);
        this.alocated.add(instance);
        return instance;
    }

    release(instance) {
        if (this.alocated.has(instance)) {
            this.alocated.delete(instance);
            this.released.add(instance);
        }
    }

});
