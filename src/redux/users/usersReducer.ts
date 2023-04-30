import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    // location: {
    //     country: string
    //     city: string
    // }
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isButtonDisabled: Array<number>
}

type setIsButtonDisabledActionType = ReturnType<typeof setIsButtonDisabled>
type SetIsFetchingActionType = ReturnType<typeof setIsFetching>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type SetTotalUsersCount = ReturnType<typeof setTotalUsersCount>
type FollowUserActionType = ReturnType<typeof followSuccess>
type UnFollowUserActionType = ReturnType<typeof unFollowSuccess>

type ActionsType = setIsButtonDisabledActionType| SetIsFetchingActionType | SetUsersActionType |
    SetCurrentPage | SetTotalUsersCount |
    FollowUserActionType | UnFollowUserActionType

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isButtonDisabled: []
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "SET-IS-BUTTON-DISABLED":
            return {...state,
                isButtonDisabled: action.newIsButtonDisabled
                    ? [...state.isButtonDisabled, action.userId]
                    : state.isButtonDisabled.filter(userId => userId !== action.userId)}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.newIsFetching}
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'FOLLOW-USER':
            return {...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)}
        case 'UNFOLLOW-USER':
            return {...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)}
        default:
            return state
    }
}

export const setIsButtonDisabled = (userId: number, newIsButtonDisabled: boolean) => {
    return ({
        type: 'SET-IS-BUTTON-DISABLED',
        userId,
        newIsButtonDisabled
    }) as const
}
export const setIsFetching = (newIsFetching: boolean) => {
    return ({
        type: 'SET-IS-FETCHING',
        newIsFetching
    }) as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId
    } as const
}
export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setCurrentPage(currentPage))
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsButtonDisabled(userId, true))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(setIsButtonDisabled(userId, false))
        })
}
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsButtonDisabled(userId, true))
    usersAPI.unFollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(setIsButtonDisabled(userId, false))
        })
}