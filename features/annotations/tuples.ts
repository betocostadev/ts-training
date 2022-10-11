// Tuple: Array-like structure where each element represents some property of a record

// Object representing a 'drink'

// const drinkOne = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40
// }

// Tuples are similar to arrays, but their elements have a fixed order and this order can't be changed
const pepsi: [string, boolean, number] = ['brown', true, 40]

// type Alias
type Drink = [string, boolean, number]

const coke: Drink = ['black', true, 50]
const pepsiBlack: Drink = ['black', false, 0]

// Tuples are somewhat harder to understand
// Look at the difference below, Tuple vs Object to model a record
const carSpecs: [number, number] = [400, 3354]

const carSpecsObj = {
  hp: 400,
  weight: 3354
}
