// Typescript tries to do type inference for function return values
// but it doesn't do for arguments. Arguments must be specified
// const add (a, b) => - ? TS will not know what the arguments are

// const add = (a, b) => {
//   return a + b
// }

const add = (a: number, b: number): number => {
  return a + b
}

// Using type inference for function return
const subtract = (a: number, b: number) => {
  return a - b
}

// Why it is good to add a return type? Hover over the addNothing to see the problem
const addNothing = (a: number, b: number) => {
  a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

// Void and Never

const logger = (message: string): void => {
  console.log(message)
  // Can return undefined or don't use a return statement at all
  return undefined
}

// Very rare to use, but never indicates it will never get to the end and return something
const throwError = (message: string): never => {
  throw new Error(message)
}

// Destructuring

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

// ES2015
// const logWeatherJs = ({ date, weather }) => {
//   console.log(date)
//   console.log(weather)
// }

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
  return undefined
}

logWeather(todaysWeather)
