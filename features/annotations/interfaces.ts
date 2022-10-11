interface Vehicle {
  name: string
  year: Date | number
  broken: boolean
  weight: number
  horsepower: number
  weightPower(): string
}

const weightPowerRatio = (weight: number, power: number): number => weight / power

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  weight: 1800,
  horsepower: 170,
  weightPower(): string {
    return `Power ratio is ${weightPowerRatio(this.weight, this.horsepower).toFixed(1)}`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
  ====== Vehicle Specs =======
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  `)
} 

printVehicle(oldCivic)
console.log(oldCivic.weightPower())
// printVehicle(newCivic)