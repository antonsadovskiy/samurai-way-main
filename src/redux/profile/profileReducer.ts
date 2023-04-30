import {AddMessageActionType} from "../dialogs/dialogsReducer";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type PostType = {
    id: number
    date: string
    likes: number
    comments: number
    message: string
}
export type ProfilePageType = {
    profile: UserProfileType | null
    posts: Array<PostType>
    status: string
}

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>

export type ActionsTypes = SetUserProfileActionType | AddPostActionType
    | AddMessageActionType | SetUserStatusActionType

const initialState: ProfilePageType = {
    profile: null,
    posts: [
        {
            id: 1,
            date: "19:08 27 Jan",
            likes: 53,
            comments: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
        {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
    ],
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "ADD-POST":
            const newPost: PostType = {
                id: 4,
                date: "11:08 28 Jul",
                likes: 0,
                comments: 0,
                message: action.newPostText
            }
            return {...state, posts: [newPost, ...state.posts]}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}


// action creators
export const setUserProfile = (profile: UserProfileType) => {
    return ({
        type: 'SET-USER-PROFILE',
        profile
    }) as const
}
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}


// thunk creators
export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.setProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}
export const updateStatus = (newStatus: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserStatus(newStatus))
            }
        })
}