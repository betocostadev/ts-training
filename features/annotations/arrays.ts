// const carMakers: string[] = ['ford', 'toyota', 'chevy']
// const carMakers = [] -> This one would need a type declaration = carMakers: string[] = []
const carMakers = ['ford', 'toyota', 'chevy']

const dates = [ new Date(), new Date() ]

// carsByMake: string[][] -> Two dimensional string array
const carsByMake = [
  ['f150', 'mustang'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const sportCard = carsByMake[0][1]
console.log(sportCard) // mustang
// const myCar = carMakers.pop() // -> TS knows it is going to be a string

// Prevent incompatible values
// carMakers.push(12)

// Help with autocomplete
const upperCaseCarMakers = carMakers.map((car: string): string => {
  // Will autocomplete car. with string methods
  return car.toUpperCase()
})

console.log(upperCaseCarMakers)

// Flexible types
// const importantDates: (Date | string)[] = [ new Date() ]
// It will use inference with Date and string below
const importantDates = [ new Date(), '2023-01-04' ]

