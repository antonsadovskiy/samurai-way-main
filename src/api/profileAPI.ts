import { instance } from "./instance";

export const profileAPI = {
  setProfile(userId: string) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType<{}>>(`profile/status`, { status });
  },
  updateAvatar(image: File) {
    const formData = new FormData();
    formData.append("image", image);

    return instance.put<ResponseType<{ photos: UpdateAvatarResponseType }>>(
      `profile/photo`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
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
