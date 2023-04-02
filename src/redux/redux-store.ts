import {combineReducers, createStore} from "redux"
import profileReducer from "./profile/profileReducer"
import dialogsReducer from "./dialogs/dialogsReducer"
import sidebarReducer from "./sidebar/sidebarReducer"
import usersReducer from "./users/usersReducer";
import {authReducer} from "./auth/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
export default store