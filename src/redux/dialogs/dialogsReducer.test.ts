import dialogsReducer, {
    addMessageActionCreator,
    DialogPageType,
    updateNewMessageTextActionCreator
} from "./dialogsReducer";
import avatar from "../../asssets/images/avatar.png";

let startState: DialogPageType

beforeEach(() => {
    startState = {
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
})

test('should add new message',() => {
    const newMessageText = 'my name is Anton'
    startState = {...startState, newMessageText: newMessageText}

    const action = addMessageActionCreator()
    const endState = dialogsReducer(startState, action)

    expect(endState.userMessages[2].message).toBe(newMessageText)
    expect(endState.newMessageText).toBe('')
})
test('should update new message text',() => {
    const text = 'my name is Anton'

    const action = updateNewMessageTextActionCreator(text)
    const endState = dialogsReducer(startState, action)

    expect(endState.newMessageText).toBe(text)
})