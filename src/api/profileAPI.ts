import { instance } from "./instance";

export const profileAPI = {
  setProfile(userId: string) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(newStatus: string) {
    return instance
      .put(`profile/status`, {
        status: newStatus,
      })
      .then((res) => res.data);
  },
};
