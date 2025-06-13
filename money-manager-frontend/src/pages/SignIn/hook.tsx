import axios from "axios"
import { baseUrl } from "../../lib/url"

const api = axios.create({
  baseURL: baseUrl
})

async function signIn(username: string, password: string) {
  const response = await api.post('auth/signIn', {
    username,
    password
  })

  return response.data 
}

export {
  signIn
}
