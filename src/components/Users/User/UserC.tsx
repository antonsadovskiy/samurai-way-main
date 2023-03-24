import React, {FC} from 'react';
import s from './User.module.css'
import avatar from '../../../asssets/images/user-photo-not-found.png'

type UserPropsType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    // location: {
    //     country: string
    //     city: string
    // }
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

class User extends React.Component<UserPropsType>{
    followHandler = () => {
        this.props.follow(this.props.id)
    }
    unFollowHandler = () => {
        this.props.unFollow(this.props.id)
    }

    render() {
        return (
            <div className={s.user}>
                <div className={s.avaAndButton}>
                    <img src={this.props.photos.small? this.props.photos.small : avatar} alt=""/>
                    {
                        this.props.followed
                            ? <button onClick={this.unFollowHandler}>unfollow</button>
                            : <button onClick={this.followHandler}>follow</button>
                    }
                </div>
                <div className={s.info}>
                    <div className={s.userNameAndStatus}>
                        <div className={s.userName}>{this.props.name}</div>
                        <div className={s.userStatus}>{this.props.status}</div>
                    </div>
                    <div className={s.userAddress}>
                        <div className={s.userCountry}>{'props.location.country'}</div>
                        <div className={s.userCity}>{'props.location.city'}</div>
                    </div>
                </div>
            </div>
        );
    }
};


export default User;