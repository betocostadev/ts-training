"use strict";
console.log('Sorter running - build done');
class Sorter {
    constructor(collection) {
        this.collection = collection;
        // this.collection = collection
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
const sorter = new Sorter([10, -10, -5, -3, 20, 50, 40, 30]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
