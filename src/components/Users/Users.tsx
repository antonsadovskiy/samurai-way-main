import React, {FC} from 'react';
import {UserType} from "../../redux/usersReducer";
import s from "./Users.module.css";
import avatar from "../../asssets/images/user-photo-not-found.png";

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
                            <img src={u.photos.small ? u.photos.small : avatar} alt=""/>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        props.unFollow(u.id)
                                    }}>
                                        unfollow
                                    </button>
                                    :
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>
                                        follow
                                    </button>
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