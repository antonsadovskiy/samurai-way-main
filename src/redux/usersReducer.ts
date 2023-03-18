export type UserType = {
    userId: number
    fullName: string
    status: string
    avatar: string
    isFollow: boolean
    location: {
        country: string
        city: string
    }
}
export type UsersPageType = {
    users: Array<UserType>
}

type ShowMoreActionType = ReturnType<typeof showMoreAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type FollowUserActionType = ReturnType<typeof followAC>
type UnFollowUserActionType = ReturnType<typeof unFollowAC>

type ActionsType = ShowMoreActionType | SetUsersActionType | FollowUserActionType | UnFollowUserActionType

const initialState: UsersPageType = {
    users: []
}
const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        case 'FOLLOW-USER':
            return {...state,
                users: state.users.map(user => user.userId === action.userId ? {...user, isFollow: true} : user)}
        case 'UNFOLLOW-USER':
            return {...state,
                users: state.users.map(user => user.userId === action.userId ? {...user, isFollow: false} : user)}
        case 'SHOW-MORE-USERS':
            return state
        default:
            return state
    }
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const showMoreAC = () => {
    return {
        type: 'SHOW-MORE-USERS'
    } as const
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId: userId,
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userId: userId,
    } as const
}

export default usersReducer