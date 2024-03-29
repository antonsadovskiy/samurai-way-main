import { usersAPI } from "../../api/usersAPI";
import { AppThunk } from "../redux-store";

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: string;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  followed: boolean;
};
export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isButtonDisabled: Array<number>;
};

type setIsButtonDisabledActionType = ReturnType<typeof setIsButtonDisabled>;
type SetIsFetchingActionType = ReturnType<typeof setIsFetching>;
type SetUsersActionType = ReturnType<typeof setUsers>;
type SetCurrentPage = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCount = ReturnType<typeof setTotalUsersCount>;
type ChangeFollowUserActionType = ReturnType<typeof changeFollow>;
type SetPageSizeActionType = ReturnType<typeof setPageSize>;

export type UsersActionsType =
  | setIsButtonDisabledActionType
  | SetIsFetchingActionType
  | SetUsersActionType
  | SetCurrentPage
  | SetTotalUsersCount
  | ChangeFollowUserActionType
  | SetPageSizeActionType;

const initialState: UsersPageType = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isButtonDisabled: [],
};
export const usersReducer = (
  state: UsersPageType = initialState,
  action: UsersActionsType
): UsersPageType => {
  switch (action.type) {
    case "USERS/SET-IS-BUTTON-DISABLED":
      return {
        ...state,
        isButtonDisabled: action.newIsButtonDisabled
          ? [...state.isButtonDisabled, action.userId]
          : state.isButtonDisabled.filter((userId) => userId !== action.userId),
      };
    case "USERS/SET-IS-FETCHING":
      return { ...state, isFetching: action.newIsFetching };
    case "USERS/SET-PAGE-SIZE":
      return { ...state, pageSize: action.pageSize };
    case "USERS/SET-USERS":
      return { ...state, users: [...action.users] };
    case "USERS/SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };
    case "USERS/SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };
    case "USERS/CHANGE-FOLLOW":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId
            ? { ...user, followed: action.follow }
            : user
        ),
      };
    default:
      return state;
  }
};

export const setIsButtonDisabled = (
  userId: number,
  newIsButtonDisabled: boolean
) => {
  return {
    type: "USERS/SET-IS-BUTTON-DISABLED",
    userId,
    newIsButtonDisabled,
  } as const;
};
export const setIsFetching = (newIsFetching: boolean) => {
  return {
    type: "USERS/SET-IS-FETCHING",
    newIsFetching,
  } as const;
};
export const setUsers = (users: Array<UserType>) => {
  return {
    type: "USERS/SET-USERS",
    users,
  } as const;
};
export const setPageSize = (pageSize: number) => {
  return {
    type: "USERS/SET-PAGE-SIZE",
    pageSize,
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "USERS/SET-CURRENT-PAGE",
    currentPage,
  } as const;
};
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: "USERS/SET-TOTAL-USERS-COUNT",
    totalUsersCount,
  } as const;
};
export const changeFollow = (userId: number, follow: boolean) => {
  return {
    type: "USERS/CHANGE-FOLLOW",
    userId,
    follow,
  } as const;
};

export const getUsers =
  (currentPage: number, pageSize: number): AppThunk =>
  async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setCurrentPage(currentPage));
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    } catch (e) {
      console.error(e);
    }
  };
export const follow =
  (userId: number): AppThunk =>
  async (dispatch) => {
    dispatch(setIsButtonDisabled(userId, true));
    try {
      const res = await usersAPI.follow(userId);
      if (res.resultCode === 0) {
        dispatch(changeFollow(userId, true));
      }
      dispatch(setIsButtonDisabled(userId, false));
    } catch (e) {
      console.error(e);
    }
  };
export const unfollow =
  (userId: number): AppThunk =>
  async (dispatch) => {
    dispatch(setIsButtonDisabled(userId, true));
    try {
      const res = await usersAPI.unFollow(userId);
      if (res.resultCode === 0) {
        dispatch(changeFollow(userId, false));
      }
      dispatch(setIsButtonDisabled(userId, false));
    } catch (e) {
      console.error(e);
    }
  };
