import { AppStateType } from "../redux-store";
import { UserType } from "./usersReducer";
import { createSelector } from "reselect";

export const getUsers = (state: AppStateType): Array<UserType> => {
  return state.usersPage.users;
};
export const getUsersSelector = (state: AppStateType): Array<UserType> => {
  return getUsers(state).filter(() => true);
};

export const getPageSizeSelector = (state: AppStateType): number =>
  state.usersPage.pageSize;
export const getTotalUsersCountSelector = (state: AppStateType): number =>
  state.usersPage.totalUsersCount;
export const getCurrentPageSelector = (state: AppStateType): number =>
  state.usersPage.currentPage;
export const getIsFetchingSelector = (state: AppStateType): boolean =>
  state.usersPage.isFetching;
export const getIsButtonDisabledSelector = (
  state: AppStateType
): Array<number> => state.usersPage.isButtonDisabled;
