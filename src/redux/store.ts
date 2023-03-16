type PostType = {
    id: number
    date: string
    likes: number
    comments: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type SideBarFriendType = {
    id: number
    name: string
    avatar: string
}
type SideBarType = {
    friends: Array<SideBarFriendType>
}
type DialogItemType = {
    id: number
    name: string
    avatar: string
}
type MessageItemType = {
    id: number
    message: string
}
type DialogPageType = {
    dialogs: Array<DialogItemType>
    userMessages: Array<MessageItemType>
    friendMessages: Array<MessageItemType>
    newMessageText: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

// Action Types
type ActionsTypes =
    AddPostActionType |
    UpdateNewPostTextActionType |
    AddMessageActionType |
    UpdateNewMessageTextActionType

// own action types
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    text: string
}

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     date: "19:08 27 Jan",
//                     likes: 53,
//                     comments: 2,
//                     message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."
//                 },
//                 {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
//                 {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogs: [
//                 {id: 1, name: "Anton", avatar: avatar},
//                 {id: 2, name: "Julia", avatar: avatar},
//                 {id: 3, name: "Sasha", avatar: avatar},
//                 {id: 4, name: "Diana", avatar: avatar},
//                 {id: 5, name: "Alex", avatar: avatar},
//             ],
//             userMessages: [
//                 {id: 1, message: "hello"},
//                 {id: 2, message: "how are you?"},
//             ],
//             friendMessages: [
//                 {id: 1, message: "hi"},
//                 {id: 2, message: "i'm good"},
//                 {id: 3, message: "thanks"},
//             ],
//             newMessageText: ''
//         },
//         sideBar: {
//             friends: [
//                 {id: 1, name: "Anton", avatar: avatar},
//                 {id: 2, name: "Zhenya", avatar: avatar},
//                 {id: 3, name: "Natasha", avatar: avatar},
//             ]
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//
//     getState(){
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer // наблюдатель = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(store._state.profilePage, action)
//         this._state.dialogPage = dialogsReducer(store._state.dialogPage, action)
//         this._state.sideBar = sidebarReducer(store._state.sideBar, action)
//
//         this._callSubscriber()
//     }
// }
//
// export default store