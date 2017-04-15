App.define(({ Vector }) => class IO {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.mouse = new Vector(0, 300);

        this.keyHandlers = {};
        this.keyStates = {};

        this.bindEvents();
    }

    callHandlers() {
        for (let name in this.keyHandlers) {
            if (this.keyStates[name]) {
                this.keyHandlers[name].handeler();
            } else {
                this.keyHandlers[name].reverseHandler && this.keyHandlers[name].reverseHandler();
            }
        }
    }

    onMouse(downHandler, upHandler) {
        window.addEventListener('mousedown', downHandler);
        window.addEventListener('mouseup', upHandler);

        window.addEventListener('touchstart', downHandler);
        window.addEventListener('touchend', upHandler);

        return this;
    }

    onKey(key, handeler, reverseHandler) {
        this.keyHandlers[key] = { handeler, reverseHandler };
        return this;
    }

    changeTouch({ changedTouches }) {
        this.mouse.set(changedTouches[0].pageX - this.width / 2,
                        -changedTouches[0].pageY + this.height / 2)
    }

    bindEvents() {
        window.addEventListener('mousemove', ({ x, y }) =>
            this.mouse.set(x - this.width / 2, -y + this.height / 2));

        window.addEventListener('touchmove', (e) => this.changeTouch(e));
        window.addEventListener('touchstart', (e) => this.changeTouch(e));

        window.addEventListener('mousedown', ({ x, y }) => this.mouseDown = true);
        window.addEventListener('mouseup', ({ x, y }) => this.mouseDown = false);

        window.addEventListener('keydown', ({ key }) => this.keyStates[key] = true);
        window.addEventListener('keyup', ({ key }) => this.keyStates[key] = false);
    }

});
