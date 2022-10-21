/// <reference types="@types/google.maps" />

import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const company = new Company()
const map = new CustomMap('map')

map.addUserMarker(user)
map.addCompanyMarker(company)

// const mapDiv: HTMLElement = document.getElementById('map')
// const mapOptions = { zoom:}
// const map = new google.maps.Map(mapDiv, { zoom: 1, center: { lat: company.location.lat, lng: company.location.lng }})
// console.log(user)
// console.log(company)