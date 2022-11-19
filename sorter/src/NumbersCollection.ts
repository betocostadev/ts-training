import { Sorter } from "./Sorter"
export class NumbersCollection extends Sorter {
  constructor (public data: number[]) {
    // We will use inheritance with the Sorter Abstract Class. 
    // Something like as we copied the sort() in here
    super()
  }

  // Just a getter instead of a method to get the length
  get length(): number { return this.data.length }

  // Compare two elements and decide if they need to swap
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
}

// const collectionOne = new NumbersCollection([4, 1, -2, 5])
// collectionOne.length // no need to call as a method due to the getter in the class