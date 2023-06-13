import {FormDataType} from "../components/Login/LoginForm/LoginForm";
import {instance} from "./instance";


export const authAPI = {
  auth() {
    return instance
      .get(`auth/me`)
      .then(res => res.data)
  },
  login(data: FormDataType) {
    return instance
      .post(`auth/login`, {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe
      })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export type AuthUserDataType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}