export interface Markable {
  location: {
    lat: number
    lng: number
  }
  markerMessage(): string
}