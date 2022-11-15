import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
console.log('Sorter running - build done')

// Check the old_index.ts to understand why we changed the approach

const numbersColOne = new NumbersCollection([150, -5, 3, 2, 10, -1, 50, 90])
const sorterOne = new Sorter(numbersColOne)
sorterOne.sort()
console.log(numbersColOne.data)

const charsColOne = new CharactersCollection('node')
const charsSorterOne = new Sorter(charsColOne)
charsSorterOne.sort()
console.log(charsColOne.data)
