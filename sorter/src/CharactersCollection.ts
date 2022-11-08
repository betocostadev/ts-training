export class CharactersCollection {
  constructor (public data: string) {
  }

  get length(): number { return this.data.length }

  // Compare two elements and decide if they need to swap
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  // swap(leftIndex: number, rightIndex: number): void {
  //   const leftHand = this.data[leftIndex]
  //   this.data[leftIndex] = this.data[rightIndex]
  //   this.data[rightIndex] = leftHand
  // }


}

