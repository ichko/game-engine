$Module.define(() => class Generator {

    constructor(paramExecutor) {
        this.paramExecutor = paramExecutor;
    }

    single(generationConfig = {}) {
        let { config, cls, set } = this.paramExecutor(generationConfig);
        let result = new cls(config);
        for (let name in set) {
            result[name] = set[name]();
        }

        return result;
    }

    make(size = 1, config) {
        return Array.from(Array(size).keys()).map(() => this.single(config));
    }

});
