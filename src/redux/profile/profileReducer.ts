import {AddMessageActionType, UpdateNewMessageTextActionType} from "../dialogs/dialogsReducer";
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
    newPostText: string
}

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type ActionsTypes = SetUserProfileActionType |
    AddPostActionType | UpdateNewPostTextActionType
    | AddMessageActionType | UpdateNewMessageTextActionType

const initialState: ProfilePageType = {
    profile: null,
    posts: [
        {
            id: 1,
            date: "19:08 27 Jan",
            likes: 53,
            comments: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."
        },
        {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
        {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "UPDATE-NEW-POST-TEXT":
            return {...state,
                newPostText: action.text}

        case "ADD-POST":
            const newPost: PostType = {
                id: 4,
                date: "11:08 28 Jul",
                likes: 0,
                comments: 0,
                message: state.newPostText
            }
            if (state.newPostText !== ''){
                return {...state, posts: [newPost, ...state.posts], newPostText: ''}
            }
            return state

        default:
            return state
    }
}
export const setUserProfile = (profile: UserProfileType) => {
    return ({
        type: 'SET-USER-PROFILE',
        profile
    }) as const
}
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", text: text
    } as const
}

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.setProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export default profileReducer