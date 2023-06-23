import { DialogsActionsType } from "../dialogs/dialogsReducer";
import { AppThunk } from "../redux-store";
import { profileAPI } from "../../api/profileAPI";

export type UserProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};
export type PostType = {
  id: number;
  date: string;
  likes: number;
  comments: number;
  message: string;
};
export type ProfilePageType = {
  profile: UserProfileType | null;
  posts: Array<PostType>;
  status: string;
};

type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type SetUserStatusActionType = ReturnType<typeof setUserStatus>;

export type ProfileActionsType =
  | SetUserProfileActionType
  | AddPostActionType
  | DialogsActionsType
  | SetUserStatusActionType;

const initialState: ProfilePageType = {
  profile: null,
  posts: [
    {
      id: 1,
      date: "19:08 27 Jan",
      likes: 53,
      comments: 2,
      message: "dislike",
    },
    {
      id: 2,
      date: "21:08 28 Mar",
      likes: 13,
      comments: 5,
      message: "How are you doing today?",
    },
    { id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy" },
  ],
  status: "",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsType
): ProfilePageType => {
  switch (action.type) {
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    case "ADD-POST":
      const newPost: PostType = {
        id: 4,
        date: "11:08 28 Jul",
        likes: 0,
        comments: 0,
        message: action.newPostText,
      };
      return { ...state, posts: [newPost, ...state.posts] };
    case "SET-USER-STATUS":
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setUserProfile = (profile: UserProfileType) => {
  return { type: "SET-USER-PROFILE", profile } as const;
};
export const addPostActionCreator = (newPostText: string) => {
  return { type: "ADD-POST", newPostText } as const;
};
export const setUserStatus = (status: string) => {
  return { type: "SET-USER-STATUS", status } as const;
};

export const getProfile =
  (userId: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await profileAPI.setProfile(userId);
      dispatch(setUserProfile(res.data));
    } catch (e) {
      console.error(e);
    }
  };
export const getStatus =
  (userId: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await profileAPI.getStatus(userId);
      dispatch(setUserStatus(res.data));
    } catch (e) {
      console.error(e);
    }
  };
export const updateStatus =
  (newStatus: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await profileAPI.updateStatus(newStatus);
      if (res.resultCode === 0) {
        dispatch(setUserStatus(newStatus));
      }
    } catch (e) {
      console.error(e);
    }
  };
