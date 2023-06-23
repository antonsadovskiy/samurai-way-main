import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setPageSize,
  unfollow,
  UserType,
} from "../../redux/users/usersReducer";
import { AppStateType } from "../../redux/redux-store";
import React, { ComponentType } from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPageSelector,
  getIsButtonDisabledSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector,
} from "../../redux/users/usersSelectors";

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isButtonDisabled: Array<number>;
};
type MapDispatchToProps = {
  getUsers: (currentPage: number, pageSize: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setPageSize: (pageSize: number) => void;
};
type UsersAPIPropsType = MapStatePropsType & MapDispatchToProps;

class UsersContainer extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePageHandler = (currentPage: number, pageSize: number) => {
    this.props.setPageSize(pageSize);
    this.props.getUsers(currentPage, pageSize);
  };

  changeFollowUser = (userId: number, follow: boolean) => {
    if (follow) {
      this.props.follow(userId);
    } else {
      this.props.unfollow(userId);
    }
  };

  render() {
    return this.props.isFetching ? (
      <Preloader />
    ) : (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onChangePageHandler={this.onChangePageHandler}
        changeFollowUser={this.changeFollowUser}
        isButtonDisabled={this.props.isButtonDisabled}
      />
    );
  }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    isButtonDisabled: getIsButtonDisabledSelector(state),
  };
};

export default compose<ComponentType>(
  connect(MapStateToProps, {
    getUsers,
    follow,
    unfollow,
    setPageSize,
  }),
  withAuthRedirect
)(UsersContainer);
