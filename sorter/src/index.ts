console.log('Sorter running - build done')

// Check the old_index.ts to understand why we changed the approach
class Sorter {
  constructor(public collection: number[] | string) {
    // this.collection = collection
  }

  sort(): void {
    const { length } = this.collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          // for TS now it is: collection === number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand
          }
        } else if (typeof this.collection === 'string') {
          // for TS now it is: collection === string
          this.collection.charAt(0)
        }
      }
    }
  }
}

const sorter = new Sorter([10, -10, -5, -3, 20, 50, 40, 30])
console.log(sorter.collection)
sorter.sort()
console.log(sorter.collection)
const sorter2 = new Sorter('aabCDe')
console.log(sorter2.collection)