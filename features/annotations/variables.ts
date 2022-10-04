// Type annotation - Variables

const apples: number = 10
const userName: string = 'Beto'
const bozo: boolean = false
const nothing: null = null
const nothingElse: undefined = undefined

// Built in objects
const now: Date = new Date()

// Array
const colors: string[] = [ 'red', 'green', 'blue' ]
const lottery: number[] = [ 10, 13, 15, 20, 33, 40, 49, 60]
const trueOrFalse: boolean[] = [ false, false, true, true ]

// Classes
class Car {

}

const car: Car = new Car()

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Functions
// Annotation for the function below
// Type of arguments: num
// Return Type: void
// (num: number) => void
const logNumber: (num: number) => void = (num: number) => {
  console.log(num)
}

logNumber(50)

// ===== When to use annotations =====
// 1 - Function that returns the 'any' type:
const jsonStr = '{ "x": 10, "y": 5 }'
// JSON.parse() is a built in function that will return the 'any' type
// const coordinates = JSON.parse(jsonStr)

// Now adding the coordinates with a 'fixed' type.
const coordinates: { x: number; y: number } = JSON.parse(jsonStr)

console.log(coordinates)

// 2 - When we declare a variable on one line and initialize it later
const words = [ 'red', 'green', 'blue' ]
// let foundWord;
// fixing the above code could be like the line below
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3 - Variable whose type cannot be inferred correctly
// Bad code just as example, we will change a boolean variable to a number variable
let someNums = [ -10, -1, 12 ]
let numberAboveZero: boolean | number = false

for (let i = 0; i < someNums.length; i++) {
  if (someNums[i] > 0) {
    numberAboveZero = someNums[i]
  }
}

console.log(numberAboveZero)
