import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'localhost'
  },
  timeout: 10000
})

export default {
  getData(folder) {
    return apiClient.get(`/${folder}`)
  }
}
