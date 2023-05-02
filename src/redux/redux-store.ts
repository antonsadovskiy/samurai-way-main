import {applyMiddleware, combineReducers, createStore} from "redux"
import {ProfileActionsType, profileReducer} from "./profile/profileReducer"
import {DialogsActionsType, dialogsReducer} from "./dialogs/dialogsReducer"
import {sidebarReducer} from "./sidebar/sidebarReducer"
import {UsersActionsType, usersReducer} from "./users/usersReducer";
import {AuthActionsType, authReducer} from "./auth/authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {appReducer, AppWithReducersActionsType} from "./app/appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sidebarReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType = AuthActionsType | ProfileActionsType |
    DialogsActionsType | UsersActionsType | AppWithReducersActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
// export type AppThunk<ReturnType = void> = ThunkDispatch<AppStateType, unknown, AppActionsType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store