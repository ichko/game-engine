$Module.defineSingle(() => class _ {

    random(min = 0, max = 1) {
        return Math.random() * (max - min) + min;
    }

    range(size, handler) {
        return Array.from(Array(size).keys()).map(handler);
    }

});