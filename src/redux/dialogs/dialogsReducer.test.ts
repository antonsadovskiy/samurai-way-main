import {
  dialogsReducer,
  addMessageActionCreator,
  DialogPageType,
} from "./dialogsReducer";
import avatar from "../../asssets/images/avatar.png";

let startState: DialogPageType;

beforeEach(() => {
  startState = {
    dialogUsers: [
      { id: 1, name: "Anton", avatar: avatar },
      { id: 2, name: "Julia", avatar: avatar },
      { id: 3, name: "Sasha", avatar: avatar },
      { id: 4, name: "Diana", avatar: avatar },
      { id: 5, name: "Alex", avatar: avatar },
    ],
    dialogs: [
      {
        id: 1,
        name: "Sasha",
        avatar,
        message: "Do you wanna hang out?",
      },
      {
        id: 2,
        name: "Andrey",
        avatar,
        message: "We need to talk",
      },
      {
        id: 3,
        name: "Masha",
        avatar,
        message: "I cheated on you",
      },
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
});

test("should add new message", () => {
  const newMessageText = "my name is Anton";
  startState = { ...startState };

  const action = addMessageActionCreator(newMessageText);
  const endState = dialogsReducer(startState, action);

  expect(endState.userMessages[2].message).toBe(newMessageText);
});
