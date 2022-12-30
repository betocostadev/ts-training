import { SortableType } from '../types/sortableType'

// export class Sorter {
//   constructor(public collection: SortableType) {
//     // this.collection = collection
//   }

//   sort(): void {
//     const { length } = this.collection

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection.compare(j, j+1)) {
//           this.collection.swap(j, j+1)
//         }
//       }
//     }
//   }
// }

// Sorter changed for an abstract class - Can only be as a parent class
// Cannot be used to create an object directly - new Sorter()
export abstract class Sorter {
  // No need for the constructor anymore since this will only be used as extend for other classes
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void
  abstract length: number

  sort(): void {
    const { length } = this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1)
        }
      }
    }
  }
}