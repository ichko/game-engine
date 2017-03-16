let $Module = new class $Module {

    constructor() {
        this.definitions = [];
        this.container = {};
    }

    load() {
        this.definitions.forEach(({ single, executor }) => {
            let cls = executor(this.container);
            let name = cls.name;
            cls = (single ? new cls() : cls);
            this.container[name] = cls;
        });

        return this;
    }

    defineSingle(executor) {
        this.definitions.push({ single: true, executor });
        return this;
    }

    define(executor) {
        this.definitions.push({ single: false, executor });
        return this;
    }

    useIn(global) {
        for (let name in this.container) {
            global[name] = this.container[name];
        }

        return this;
    }

    use(dependencies = [], global) {
        dependencies.forEach(dependency => global[dependency] = this.definitions[dependency]);
        return this;
    }

}
