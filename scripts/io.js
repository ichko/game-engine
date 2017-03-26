class IO {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.mouse = new Vector(0, 300);
        this.keyHandlers = { };
        this.keyStates = { };
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

        return this;
    }

    onKey(key, handeler, reverseHandler) {
        this.keyHandlers[key] = { handeler, reverseHandler };
        return this;
    }

    bindEvents() {
        window.addEventListener('mousemove', ({ x, y }) => {
            this.mouse.x = x - this.width / 2;
            this.mouse.y = -y + this.height / 2 ;
        });
        window.addEventListener('mousedown', ({ x, y }) => {
            this.mouseDown = true;
        });
        window.addEventListener('mouseup', ({ x, y }) => {
            this.mouseDown = false;
        });

        window.addEventListener('keydown', ({ key }) => {
            this.keyStates[key] = true;
        });
        window.addEventListener('keyup', ({ key }) => {
            this.keyStates[key] = false;
        });
    }

}