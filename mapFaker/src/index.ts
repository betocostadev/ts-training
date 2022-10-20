/// <reference types="@types/google.maps" />

import { User } from './User'
import { Company } from './Company'

const user = new User()
const company = new Company()

const mapDiv = document.getElementById('map')
console.log(mapDiv)
// const mapOptions = { zoom:}
new google.maps.Map(mapDiv, { zoom: 1, center: { lat: company.location.lat, lng: company.location.lng}})

console.log(user)
console.log(company)