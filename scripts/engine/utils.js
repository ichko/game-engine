App.defineSingle(() => class Utils {

    random(min = 0, max = 1) {
        return Math.random() * (max - min) + min;
    }

    range(size, handler) {
        return Array.from(Array(Math.round(size)).keys()).map(handler);
    }

});