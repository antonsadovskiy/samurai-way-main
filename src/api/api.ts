import axios from "axios";
import {FormDataType} from "../components/Login/LoginForm/LoginForm";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '11ccf88a-7fdc-4534-8bc0-c19a53a3210d'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    auth() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login(data: FormDataType) {
        return instance
            .post(`auth/login`,{
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe
            })
    },
    logout() {
        return instance
            .delete(`auth/login`)
    }
}
export const profileAPI = {
    setProfile(userId: string) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(newStatus: string) {
        return instance
            .put(`profile/status`, {
                status: newStatus
            })
            .then(response => response.data)
    }
}