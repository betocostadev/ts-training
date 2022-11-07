console.log('Sorter running - build done')

// Using the collection like:
// constructor(public collection: number[] | string)
// can create a problem.
// Inside the sort function we would only have access to properties that are common to arrays AND strings.
// That's why we are using type guards below in line 24.
// The type guard restore the properties we can use only for an array. Try this.collection. to check the autocomplete


// Difference between typeof and instanceof
// typeof = Type of a value for a primitive type: string, number, symbol, boolean
// instanceof = type value of other types created with a constructor, like an array

// For every new kind of sort we wanted to add, we would need to add it to the constructor below,
// and fix the logic, or add new if statements. That's why we follow the better approach in the new file.

class OldSorter {
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

const sorterTest1 = new OldSorter([10, -10, -5, -3, 20, 50, 40, 30])
console.log(sorter.collection)
sorter.sort()
console.log(sorter.collection)
const sorterTest2 = new OldSorter('aabCDe')
console.log(sorter2.collection)