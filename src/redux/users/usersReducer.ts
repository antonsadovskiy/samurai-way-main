import {usersAPI} from "../../api/usersAPI";
import {AppThunk} from "../redux-store";

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
type ChangeFollowUserActionType = ReturnType<typeof changeFollow>
type SetPageSizeActionType = ReturnType<typeof setPageSize>

export type UsersActionsType = setIsButtonDisabledActionType | SetIsFetchingActionType
  | SetUsersActionType | SetCurrentPage | SetTotalUsersCount |
  ChangeFollowUserActionType | SetPageSizeActionType

const initialState: UsersPageType = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isButtonDisabled: []
}
export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
  switch (action.type) {
    case "SET-IS-BUTTON-DISABLED":
      return {
        ...state,
        isButtonDisabled: action.newIsButtonDisabled
          ? [...state.isButtonDisabled, action.userId]
          : state.isButtonDisabled.filter(userId => userId !== action.userId)
      }
    case "SET-IS-FETCHING":
      return {...state, isFetching: action.newIsFetching}
    case "SET-PAGE-SIZE":
      return {...state, pageSize: action.pageSize}
    case 'SET-USERS':
      return {...state, users: [...action.users]}
    case "SET-CURRENT-PAGE":
      return {...state, currentPage: action.currentPage}
    case "SET-TOTAL-USERS-COUNT":
      return {...state, totalUsersCount: action.totalUsersCount}
    case 'CHANGE-FOLLOW':
      debugger
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, followed: action.follow} : user)
      }
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
export const setPageSize = (pageSize: number) => {
  return {
    type: 'SET-PAGE-SIZE',
    pageSize
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
export const changeFollow = (userId: number, follow: boolean) => {
  debugger
  return {
    type: 'CHANGE-FOLLOW',
    userId,
    follow
  } as const
}

export const getUsers = (currentPage: number, pageSize: number): AppThunk =>
  (dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      })
  }


  // TODO fix follow/unfollow bug
export const changeFollowUser = (userId: number, follow: boolean): AppThunk =>
  (dispatch) => {
    dispatch(setIsButtonDisabled(userId, true))
    usersAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(changeFollow(userId, follow))
        }
        dispatch(setIsButtonDisabled(userId, false))
      })
  }