import avatar from "../asssets/images/avatar.png";

export type PostType = {
    id: number
    date: string
    likes: number
    comments: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type SideBarFriendType = {
    id: number
    name: string
    avatar: string
}
export type SideBarType = {
    friends: Array<SideBarFriendType>
}
export type DialogItemType = {
    id: number
    name: string
    avatar: string
}
export type MessageItemType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogs: Array<DialogItemType>
    userMessages: Array<MessageItemType>
    friendMessages: Array<MessageItemType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SideBarType
}

const state:StateType = {
    profilePage: {
        posts: [
            {id: 1, date: "19:08 27 Jan", likes: 53, comments: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."},
            {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
            {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
        ],
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Anton", avatar: avatar},
            {id: 2, name: "Julia", avatar: avatar},
            {id: 3, name: "Sasha", avatar: avatar},
            {id: 4, name: "Diana", avatar: avatar},
            {id: 5, name: "Alex", avatar: avatar},
        ],
        userMessages: [
            {id: 1, message: "hello"},
            {id: 2, message: "how are you?"},
        ],
        friendMessages: [
            {id: 1, message: "hi"},
            {id: 2, message: "i'm good"},
            {id: 3, message: "thanks"},
        ],
    },
    sideBar: {
        friends: [
            {id: 1, name: "Anton", avatar: avatar},
            {id: 2, name: "Zhenya", avatar: avatar},
            {id: 3, name: "Natasha", avatar: avatar},
        ]
    }
}

export const addPost = (postMessage: string) => {
    debugger
    let newPost:PostType = {
        id: 4,
        date: "11:08 28 Jul",
        likes: 0,
        comments: 0,
        message: postMessage
    }
    state.profilePage.posts.push(newPost)
}

export default state