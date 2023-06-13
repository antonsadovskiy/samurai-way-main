import React, {FC} from 'react';
import {UserType} from "../../redux/users/usersReducer";
import s from "./Users.module.css";
import avatar from "../../asssets/images/avatar.png";
import {NavLink} from 'react-router-dom';
import {Button, Card, Pagination} from "antd";

type UsersPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onChangePageHandler: (currentPage: number, pageSize: number) => void
  changeFollowUser: (userId: number, follow: boolean) => void
  isButtonDisabled: Array<number>
}

const Users: FC<UsersPropsType> = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const followHandler = (userId: number) => props.changeFollowUser(userId, true)
  const unfollowHandler = (userId: number) => props.changeFollowUser(userId, false)
  const changePageHandler = (page: number, pageSize: number) => {
    props.onChangePageHandler(page, pageSize)
  }

  return (
    <div className={s.usersContainer}>
      <div className={s.pagesNavigation}>
        <Pagination current={props.currentPage}
                    total={pagesCount}
                    pageSize={props.pageSize}
                    pageSizeOptions={[8, 16, 32, 64]}
                    onChange={changePageHandler}/>
      </div>
      <div className={s.users}>
        {
          props.users.map(u =>
            <div className={s.user}>
              <Card title={u.name} bordered={false} style={{width: 300}}>
                <div className={s.avaAndButton}>
                  <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small ? u.photos.small : avatar} alt=""/>
                  </NavLink>
                  {
                    u.followed
                      ? <Button type={'default'} size={'small'}
                                disabled={props.isButtonDisabled.some(id => id === u.id)}
                                onClick={() => unfollowHandler(u.id)}>unfollow</Button>
                      : <Button type={'default'} size={'small'}
                                disabled={props.isButtonDisabled.some(id => id === u.id)}
                                onClick={() => followHandler(u.id)}>follow</Button>
                  }
                </div>
                <p>status: {u.status ? u.status : 'no status'}</p>
              </Card>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Users;