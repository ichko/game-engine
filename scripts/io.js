class IO {

    constructor() {
        this.mouse = { x : 0, y: 0 };
        this.keyHandlers = { };
        this.keyStates = { };
        this.bindEvents();
    }

    callHandlers() {
        for (let name in this.keyHandlers) {
            if (this.keyState[name]) {
                this.keyHandlers[name].handeler();
            } else {
                this.keyHandlers[name].reverseHandler();
            }
        }
    }

    onKey(key, handeler, reverseHandler) {
        this.keyHandlers[key] = { handeler, reverseHandler };
        return this;
    }

    bindEvents() {
        window.addEventListener('mousemove', ({ x, y }) => {
            this.mouse.x = x;
            this.mouse.y = y;
        });
        window.addEventListener('keydown', ({ key }) => {
            this.keyStates[key] = true;
        });
        window.addEventListener('keyup', ({ key }) => {
            this.keyStates[key] = false;
        });
    }

}