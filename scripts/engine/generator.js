$Module.define(() => class Generator {

    constructor({ set = (() => {}), postProcess = (x => x), cls }) {
        this.cls = cls;
        this.set = set;
        this.postProcess = postProcess;
    }

    single(generationConfig = {}) {
        let set = this.set(generationConfig);
        let result = new this.cls();
        for (let name in set) {
            result[name] = set[name]();
        }

        return result;
    }

    make(size = 1, config) {
        let result = Array.from(Array(size).keys()).map(() => this.single(config));
        this.postProcess(result);
        return result;
    }

});
