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
}

type SetIsFetchingActionType = ReturnType<typeof setIsFetchingAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>
type FollowUserActionType = ReturnType<typeof followAC>
type UnFollowUserActionType = ReturnType<typeof unFollowAC>

type ActionsType = SetIsFetchingActionType | SetUsersActionType |
    SetCurrentPage | SetTotalUsersCount |
    FollowUserActionType | UnFollowUserActionType

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
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
export const setIsFetchingAC = (newIsFetching: boolean) => {
    return ({
        type: 'SET-IS-FETCHING',
        newIsFetching
    }) as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userId
    } as const
}
export default usersReducer