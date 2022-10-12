interface Vehicle {
  name: string
  year: Date | number
  broken: boolean
  weight: number
  horsepower: number
  powerRatio(): number
}

interface Reportable {
  report(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  weight: 1800,
  horsepower: 170,
  powerRatio(): number {
    return Number((this.weight / this.horsepower).toFixed(2))
  },
  report(): string {
    return `Car: ${this.name}, year: ${this.year}` 
  }
}

const pepsiBlack = {
  name: 'Pepsi Black',
  color: 'brown',
  carbonated: true,
  sugar: 0,
  report(): string {
    return `${this.name} has ${this.sugar} grams of sugar.`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
  ====== Vehicle Specs =======
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  HP to Kg ratio: ${vehicle.powerRatio()}
  `)
} 

// See that using the Reportable interface we can use the function to call very different objects
// The Reportable only needs the report() function inside the object to be valid.
// This can help reusing interfaces
const printReport = (obj: Reportable): void => {
  console.log(obj.report())
}

printVehicle(oldCivic)
printReport(oldCivic)
printReport(pepsiBlack)