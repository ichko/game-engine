export class Utils {

    static random(min = 0, max = 1) {
        return Math.random() * (max - min) + min;
    }

    static randomArray (array) {
        return array[Math.floor(this.random(0, array.length))];
    }

    static range(size, handler) {
        return Array.from(Array(Math.round(size)).keys()).map(handler);
    }

    static filterSet(set, predicate) {
        set.forEach(element => {
            if (!predicate(element)) {
                set.delete(element);
            }
        });

        return set;
    }

}
