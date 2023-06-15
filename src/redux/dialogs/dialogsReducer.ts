import avatar from "../../asssets/images/avatar.png";

export type MessageItemType = {
  id: number
  message: string
}
export type DialogItemType = {
  id: number
  name: string
  avatar: string
}
export type DialogPageType = {
  dialogs: Array<DialogItemType>
  userMessages: Array<MessageItemType>
  friendMessages: Array<MessageItemType>
}

type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type DialogsActionsType = AddMessageActionType

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
}

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsActionsType): DialogPageType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage: MessageItemType = {
        id: 3,
        message: action.newMessage
      }
      return {
        ...state,
        userMessages: [...state.userMessages, newMessage]
      }
    default:
      return state
  }
}

export const addMessageActionCreator = (newMessage: string) => {
  return {type: "ADD-MESSAGE", newMessage} as const
}