import React, {FC} from 'react';
import {UserType} from "../../redux/users/usersReducer";
import s from "./Users.module.css";
import avatar from "../../asssets/images/user-photo-not-found.png";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

const Users:FC<UsersPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    const followHandler = (userId: number) => {
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0){
                    console.log(data)
                    props.follow(userId)
                }
                console.log(data)
            })

    }
    const unfollowHandler = (userId: number) => {
        usersAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0){
                    console.log(data)
                    props.unFollow(userId)
                }
                console.log(data)
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
                                    ? <button onClick={() => unfollowHandler(u.id)}>unfollow</button>
                                    : <button onClick={() => followHandler(u.id)}>follow</button>
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