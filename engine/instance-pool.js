export class InstancePool {

    constructor(type) {
        this.type = type;
        this.released = new Set();
        this.allocated = new Set();
    }

    new(...config) {
        let instance = undefined;

        if (this.released.size > 0) {
            instance = this.released.values().next().value;
            instance.set(...config);
        } else {
            instance = new this.type(...config);            
        }

        this.released.delete(instance);
        this.allocated.add(instance);

        return instance;
    }

    release(instance) {
        if (this.allocated.has(instance)) {
            this.allocated.delete(instance);
            this.released.add(instance);
        }
    }

}


let poolContainer = {};

export class Instancable {
    
    static getPool() {
        let pool = poolContainer[this.name];
        if (!pool) {
            pool = new InstancePool(this);
            poolContainer.add(pool);
        }

        return pool;
    }
    
    static new(...config) {
        return this.getPool().new(...config);
    }
   
    static release(instance) {
        return this.getPool().release(instance);
    }
   
}
