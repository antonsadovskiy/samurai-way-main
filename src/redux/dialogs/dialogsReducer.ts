import avatar from "../../asssets/images/empty.jpg";

export type MessageItemType = {
  id: number;
  message: string;
};
export type UserType = {
  id: number;
  name: string;
  avatar: string;
};
export type DialogType = UserType & { message: string };
export type DialogPageType = {
  dialogUsers: Array<UserType>;
  dialogs: Array<DialogType>;
  userMessages: Array<MessageItemType>;
  friendMessages: Array<MessageItemType>;
};

type AddMessageActionType = ReturnType<typeof addMessageActionCreator>;
export type DialogsActionsType = AddMessageActionType;

const initialState: DialogPageType = {
  dialogUsers: [
    { id: 1, name: "Anton", avatar },
    { id: 2, name: "Julia", avatar },
    { id: 3, name: "Sasha", avatar },
    { id: 4, name: "Diana", avatar },
    { id: 5, name: "Alex", avatar },
  ],
  dialogs: [
    {
      id: 1,
      name: "Sasha",
      avatar,
      message: "Do you wanna hang out?",
    },
    { id: 2, name: "Andrey", avatar, message: "We need to talk" },
    { id: 3, name: "Masha", avatar, message: "I cheated on you" },
    {
      id: 4,
      name: "Kirill",
      avatar,
      message: "Hey, how are you?",
    },
  ],
  userMessages: [
    { id: 1, message: "hello" },
    { id: 2, message: "how are you?" },
  ],
  friendMessages: [
    { id: 1, message: "hi" },
    { id: 2, message: "i'm good" },
    { id: 3, message: "thanks" },
  ],
};

export const dialogsReducer = (
  state: DialogPageType = initialState,
  action: DialogsActionsType
): DialogPageType => {
  switch (action.type) {
    case "DIALOGS/ADD-MESSAGE":
      const newMessage: MessageItemType = {
        id: 3,
        message: action.newMessage,
      };
      return {
        ...state,
        userMessages: [...state.userMessages, newMessage],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessage: string) => {
  return { type: "DIALOGS/ADD-MESSAGE", newMessage } as const;
};
