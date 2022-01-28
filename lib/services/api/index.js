import axios from 'axios'

const GDS_URL = "https://serre.grainesdesol.fr/wp-json/buddypress/v1"

const gds = axios.create({
  baseURL: GDS_URL,
  timeout: 10000,
  headers: {
    'content-type': 'application/json'
  },
})

export default {
  gds,
}
