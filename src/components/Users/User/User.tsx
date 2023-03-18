import React, {FC} from 'react';
import s from './User.module.css'

type UserPropsType = {
    userId: number
    fullName: string
    status: string
    avatar: string
    isFollow: boolean
    location: {
        country: string
        city: string
    }
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

const User:FC<UserPropsType> = (props) => {

    const followHandler = () => {
        props.follow(props.userId)
    }
    const unFollowHandler = () => {
        props.unFollow(props.userId)
    }
    return (
        <div className={s.user}>
            <div className={s.avaAndButton}>
                <img src={props.avatar} alt=""/>
                {
                    props.isFollow
                        ? <button onClick={unFollowHandler}>unfollow</button>
                        : <button onClick={followHandler}>follow</button>
                }
            </div>
            <div className={s.info}>
                <div className={s.userNameAndStatus}>
                    <div className={s.userName}>{props.fullName}</div>
                    <div className={s.userStatus}>{props.status}</div>
                </div>
                <div className={s.userAddress}>
                    <div className={s.userCountry}>{props.location.country}</div>
                    <div className={s.userCity}>{props.location.city}</div>
                </div>
            </div>
        </div>
    );
};

export default User;