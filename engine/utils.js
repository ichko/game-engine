export const Utils = {

    random: function(min = 0, max = 1) {
        return Math.random() * (max - min) + min;
    },

    randomArray: function(array) {
        return array[Math.floor(this.random(0, array.length))];
    },

    range: function(size, handler) {
        return Array.from(Array(Math.round(size)).keys()).map(handler);
    },

    filterSet: function(set, predicate) {
        set.forEach(element => {
            if (!predicate(element)) {
                set.delete(element);
            }
        });

        return set;
    }

};
