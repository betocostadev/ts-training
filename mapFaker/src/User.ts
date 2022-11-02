import { faker } from '@faker-js/faker'
import { Markable } from './types/markable'

// When using implements like below, TS will make sure the User class satisfies the Markable class
export class User implements Markable {
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

