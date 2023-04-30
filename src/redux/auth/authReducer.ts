import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {FormDataType} from "../../components/Login/LoginForm/LoginForm";

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type LogOutActionType = ReturnType<typeof logoutUser>
type LogInActionType = ReturnType<typeof loginUser>
type SetSomeAuthErrorActionType = ReturnType<typeof setSomeAuthError>
type ActionsType = SetUserDataActionType | LogOutActionType | LogInActionType | SetSomeAuthErrorActionType

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    authError: Array<string>
}

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authError: []
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        case "LOG-IN":
            return {...state, id: action.userId, isAuth: action.isAuth, authError: []}
        case "LOG-OUT":
            return {...state, id: null, email: null, login: null, isAuth: false}
        case "SET-ERROR":
            return {...state, authError: [...action.error]}
        default:
            return state
    }
}

// actions creators
export const setAuthUserData = (id: number, email: string, login: string) => {
    return ({
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login
        }
    }) as const
}
export const logoutUser = () => {
    return ({
        type: 'LOG-OUT'
    }) as const
}
export const loginUser = (userId: number, isAuth: boolean) => {
    return ({
        type: 'LOG-IN',
        userId,
        isAuth
    }) as const
}
export const setSomeAuthError = (error: Array<string>) => {
    return ({
        type: 'SET-ERROR',
        error
    }) as const
}


// thunks creators
export const getAuthUserDate = () => (dispatch: Dispatch) => {
    authAPI.auth()
        .then(data => {
                const {id, email, login} = data.data
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login))
                }
            }
        )
}
export const logInUser = (data: FormDataType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0){
                dispatch(loginUser(response.data, true))
            } else {
                dispatch(setSomeAuthError(response.data.messages))
            }
        })
}