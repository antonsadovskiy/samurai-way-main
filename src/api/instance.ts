import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '11ccf88a-7fdc-4534-8bc0-c19a53a3210d'
  }
})