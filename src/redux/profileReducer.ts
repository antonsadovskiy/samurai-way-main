import {
    ActionsTypes,
    AddPostActionType,
    MessageItemType,
    PostType,
    ProfilePageType,
    UpdateNewPostTextActionType
} from "./store";

const initialState: ProfilePageType = {
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
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.text
            return state
        case "ADD-POST":
            const newPost: PostType = {
                id: 4,
                date: "11:08 28 Jul",
                likes: 0,
                comments: 0,
                message: state.newPostText
            }
            if (state.newPostText !== ''){
                state.posts.unshift(newPost)
            }
            state.newPostText = ''
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {type: "ADD-POST"}
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: "UPDATE-NEW-POST-TEXT", text: text}
}

export default profileReducer