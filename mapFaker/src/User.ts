import { faker } from '@faker-js/faker'

export class User {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.fullName()
    this.location = { 
      lat: parseFloat(faker.address.latitude()), 
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerMessage(): string {
    return `
      <div>
        <h2>Person</h2>
        <h3>${this.name}</h3>
      </div>
    `
  }
}

