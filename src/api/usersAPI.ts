import {instance} from "./instance";

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  follow(userId: number) {
    return instance
      .post(`follow/${userId}`)
      .then(res => res.data)
  },
  unFollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then(res => res.data)
  }
}