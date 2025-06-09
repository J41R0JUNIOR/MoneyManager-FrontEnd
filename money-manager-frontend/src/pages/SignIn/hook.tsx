import axios from "axios"
import { baseUrl } from "./../../utils/url"


const api = axios.create({
    baseURL: baseUrl
})

async function signIn(username: string, password: string) {
  try {
    const response = await api.post('auth/signIn', {
      username,password
    })

  } catch (error) {
    console.error('Login failed:', error)
  }
}

export {
    signIn
}