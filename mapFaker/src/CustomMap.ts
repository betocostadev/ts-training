// ===== Hiding Functionality =====
// This Class was created to hide most of the functionality in Google Maps
// this was done to prevent other developers calling Google Maps functions that could break the app
// We only allow to create a map and add a marker

import { User } from './User'
import { Company } from './Company'

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1, 
      center: { 
        lat: 0, 
        lng: 0 
      }
    })
  }

  addUserMarker(user : User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }
}