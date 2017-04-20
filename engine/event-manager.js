export class EventManager {

    constructor() {
        this.container = {};
    }

    register(name, condition) {
        this.container[name] = { condition, handlers: [] };
        return this;
    }

    on(elements, name, executor) {
        if (this.container[name]) {
            this.container[name].handlers.push({ executor, elements });
        }

        return this;
    }

    triggerEvents() {
        for (let name in this.container) {
            let { condition, handlers } = this.container[name];
            handlers.forEach(({ executor, elements }) =>
                elements
                    .filter(element => condition(element))
                    .forEach(element => executor(element))
            );
        }
    }

}
