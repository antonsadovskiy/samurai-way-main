import React, { FC } from "react";
import { UserType } from "../../redux/users/usersReducer";
import s from "./Users.module.css";
import User from "./User/User";
import MyPagination from "../common/Pagination/MyPagination";

type UsersPropsType = {
  users: Array<UserType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  onChangePageHandler: (currentPage: number, pageSize: number) => void;
  changeFollowUser: (userId: number, follow: boolean) => void;
  isButtonDisabled: Array<number>;
};

const Users: FC<UsersPropsType> = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const followHandler = (userId: number) =>
    props.changeFollowUser(userId, true);
  const unfollowHandler = (userId: number) =>
    props.changeFollowUser(userId, false);
  const changePageHandler = (page: number, pageSize: number) => {
    props.onChangePageHandler(page, pageSize);
  };

  return (
    <div className={s.usersContainer}>
      <MyPagination
        pageSize={props.pageSize}
        pagesCount={pagesCount}
        currentPage={props.currentPage}
        changePageHandler={changePageHandler}
      />
      <div className={s.users}>
        {props.users.map((u) => (
          <User
            key={u.id}
            user={u}
            isButtonDisabled={props.isButtonDisabled}
            follow={followHandler}
            unFollow={unfollowHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
