import {combineReducers, createStore} from "redux"
import profileReducer from "./profile/profileReducer"
import dialogsReducer from "./dialogs/dialogsReducer"
import sidebarReducer from "./sidebar/sidebarReducer"
import usersReducer from "./users/usersReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
export default store