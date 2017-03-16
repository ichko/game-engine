$Module.define(() => class Generator {

    constructor({ set, cls, config = {} } = {}) {
        this.cls = cls;
        this.config = config;
        this.set = set;
    }

    single() {
        let result = new type(this.config);
        for (let name in this.set) {
            result[name] = this.set[name]();
        }

        return result;
    }

    make(size = 1) {
        return Array.from(Array(size).keys()).map(() => this.single());
    }

});
