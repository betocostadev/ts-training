import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
console.log('Sorter running - build done')

// Check the old_index.ts to understand why we changed the approach

// Old implementation, when not using Sorter as an abstract class of the other classes
// const numbersColOne = new NumbersCollection([150, -5, 3, 2, 10, -1, 50, 90])
// const sorterOne = new Sorter(numbersColOne)
// sorterOne.sort()
// console.log('Numbers to sort: 150, -5, 3, 2, 10, -1, 50, 90')
// console.log(numbersColOne.data)

// const charsColOne = new CharactersCollection('noDe')
// const charsSorterOne = new Sorter(charsColOne)
// charsSorterOne.sort()
// console.log('Characters to sort: noDe')
// console.log(charsColOne.data)

// const linkedOne = new LinkedList()
// console.log(linkedOne)
// console.log(linkedOne.length)
// linkedOne.add(500)
// linkedOne.add(200)
// linkedOne.add(-10)
// linkedOne.add(-3)
// linkedOne.add(40)
// console.log('Linked list data to sort: 500, 200, -10, -3, 40')
// console.log('Linked list length: ', linkedOne.length)
// console.log('LinkedOne start:', linkedOne.print())
// const linkedSorterOne = new Sorter(linkedOne)
// linkedSorterOne.sort()
// console.log('LinkedOne sorted:', linkedOne.print())

console.log('======== SORTING NUMBERS ===========')
const numbersColOne = new NumbersCollection([150, -5, 3, 2, 10, -1, 50, 90])
console.log('Numbers to sort: ', numbersColOne.data)
numbersColOne.sort()
console.log(numbersColOne.data)

console.log('======== SORTING STRINGS ===========')