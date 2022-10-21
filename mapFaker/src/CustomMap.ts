// ===== Hiding Functionality =====
// This Class was created to hide most of the functionality in Google Maps
// this was done to prevent other developers calling Google Maps functions that could break the app
// We only allow to create a map and add a marker

import { Markable } from './types/markable'

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

  addMarker(instance: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: instance.location.lat,
        lng: instance.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: instance.markerMessage()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}