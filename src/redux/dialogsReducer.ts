import {
    ActionsTypes,
    AddMessageActionType,
    DialogPageType,
    MessageItemType,
    UpdateNewMessageTextActionType
} from "./store";
import avatar from "../asssets/images/avatar.png";

const initialState: DialogPageType = {
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
    newMessageText: ''
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.text
            return state
        case "ADD-MESSAGE":
            const newMessage: MessageItemType = {
                id: 4,
                message: state.newMessageText
            }
            if (state.newMessageText !== ''){
                state.userMessages.push(newMessage)
            }
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = (): AddMessageActionType => {
    return {type: "ADD-MESSAGE",}
}
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType =>{
    return {type: "UPDATE-NEW-MESSAGE-TEXT", text: text}
}
export default dialogsReducer