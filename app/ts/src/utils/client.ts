import axios from 'axios'

const { isAxiosError } = axios

const client = axios.create({
  timeout: 10000,
})

client.defaults.withCredentials = true

client.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export { client, isAxiosError }
