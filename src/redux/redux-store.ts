import {applyMiddleware, combineReducers, createStore} from "redux"
import {profileReducer} from "./profile/profileReducer"
import {dialogsReducer} from "./dialogs/dialogsReducer"
import {sidebarReducer} from "./sidebar/sidebarReducer"
import {usersReducer} from "./users/usersReducer";
import {authReducer} from "./auth/authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sidebarReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store