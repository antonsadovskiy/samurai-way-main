import {authAPI} from "../../api/api";
import {FormDataType} from "../../components/Login/LoginForm/LoginForm";
import {AppThunk} from "../redux-store";
import {stopSubmit} from "redux-form";

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type LogOutActionType = ReturnType<typeof logOutUser>
export type AuthActionsType = SetUserDataActionType | LogOutActionType

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

// actions creators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return ({
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login,
            isAuth
        }
    }) as const
}
export const logOutUser = () => {
    return ({
        type: 'LOG-OUT'
    }) as const
}

// thunks creators
export const getAuthUserDate = (): AppThunk =>
    (dispatch) => {
        return authAPI.auth()
            .then(data => {
                    const {id, email, login} = data.data
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserData(id, email, login, true))
                    }
                }
            )
    }
export const loginUser = (data: FormDataType): AppThunk =>
    (dispatch) => {
        authAPI.login(data)
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDate())
                } else {
                    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
export const logoutUser = (): AppThunk =>
    (dispatch) => {
        authAPI.logout()
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }