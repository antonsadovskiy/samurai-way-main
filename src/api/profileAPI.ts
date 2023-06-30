import { instance } from "./instance";

export const profileAPI = {
  setProfile(userId: string) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseType<{}>>(`profile/status`, { status })
      .then((res) => res.data);
  },
  updateAvatar(image: File) {
    const formData = new FormData();
    formData.append("image", image);
    return instance
      .put<ResponseType<UpdateAvatarResponseType>>(`profile/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  },
};

type ResponseType<T> = {
  resultCode: number;
  messages: Array<string>;
  data: T;
};

type UpdateAvatarResponseType = {
  small: string;
  large: string;
};
