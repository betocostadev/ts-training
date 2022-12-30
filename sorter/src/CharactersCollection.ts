import { Sorter } from "./Sorter"
export class CharactersCollection extends Sorter {
  constructor (public data: string) {
    super()
  }

  get length(): number { return this.data.length }

  // Compare two elements and decide if they need to swap
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArray = this.data.split('')
    const leftHand = charArray[leftIndex]
    charArray[leftIndex] = charArray[rightIndex]
    charArray[rightIndex] = leftHand

    this.data = charArray.join('')
  }
}

