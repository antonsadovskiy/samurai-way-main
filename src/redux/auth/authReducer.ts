import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type ActionsType = SetUserDataActionType

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

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

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

export const auth = () => (dispatch: Dispatch) => {
    authAPI.auth()
        .then(data => {
                const {id, email, login} = data.data
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login))
                }
            }
        )
}