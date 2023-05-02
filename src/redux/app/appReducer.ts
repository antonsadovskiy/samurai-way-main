import {AppThunk} from "../redux-store";
import {getAuthUserDate} from "../auth/authReducer";

type SetInitializedActionType = ReturnType<typeof setInitialized>
export type AppWithReducersActionsType = SetInitializedActionType

export type AppWithReducerST = {
    initialized: boolean
}
const initialState: AppWithReducerST = {
    initialized: false
}

export const appReducer = (state: AppWithReducerST = initialState, action: AppWithReducersActionsType): AppWithReducerST => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, initialized: true}
        default:
            return state
    }
}

export const setInitialized = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}

export const initializeApp = (): AppThunk => (dispatch) => {
    const pr = dispatch(getAuthUserDate())

    Promise.all([pr]).then(() => {
        dispatch(setInitialized())
    })
}