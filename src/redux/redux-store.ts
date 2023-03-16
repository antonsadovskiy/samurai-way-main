import {combineReducers, createStore} from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
export default store