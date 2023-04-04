import React, {FC, useState} from 'react';
import {UserType} from "../../redux/users/usersReducer";
import s from "./Users.module.css";
import avatar from "../../asssets/images/user-photo-not-found.png";
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    isButtonDisabled: Array<number>
    setIsButtonDisabled: (userId: number, newIsButtonDisabled: boolean) => void
}

const Users: FC<UsersPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    const followHandler = (userId: number) => {
        props.setIsButtonDisabled(userId, true)
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(userId)
                }
                props.setIsButtonDisabled(userId, false)
            })

    }
    const unfollowHandler = (userId: number) => {
        props.setIsButtonDisabled(userId, true)
        usersAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unFollow(userId)
                }
                props.setIsButtonDisabled(userId, false)
            })
    }

    return (
        <div className={s.usersContainer}>
            <div>
                {
                    pages.map(page => {
                        return (
                            <span onClick={() => props.onChangePageHandler(page)}
                                  className={props.currentPage === page ? s.selectedPage : ''}>
                                {page}
                            </span>
                        )
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div className={s.user}>
                        <div className={s.avaAndButton}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : avatar} alt=""/>
                            </NavLink>
                            {
                                u.followed
                                    ? <button disabled={props.isButtonDisabled.some(id => id === u.id)}
                                              onClick={() => unfollowHandler(u.id)}>unfollow</button>
                                    : <button disabled={props.isButtonDisabled.some(id => id === u.id)}
                                              onClick={() => followHandler(u.id)}>follow</button>
                            }
                        </div>
                        <div className={s.info}>
                            <div className={s.userNameAndStatus}>
                                <div className={s.userName}>{u.name}</div>
                                <div className={s.userStatus}>{u.status}</div>
                            </div>
                            <div className={s.userAddress}>
                                <div className={s.userCountry}>{'props.location.country'}</div>
                                <div className={s.userCity}>{'props.location.city'}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;