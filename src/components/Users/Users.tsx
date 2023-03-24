import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import avatar from "../../asssets/images/user-photo-not-found.png";

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={s.usersContainer}>
                {
                    this.props.users.map(u =>
                        <div className={s.user}>
                            <div className={s.avaAndButton}>
                                <img src={u.photos.small ? u.photos.small : avatar} alt=""/>
                                {
                                    u.followed ?
                                        <button onClick={() => {
                                            this.props.unFollow(u.id)
                                        }}>
                                            unfollow
                                        </button>
                                        :
                                        <button onClick={() => {
                                            this.props.follow(u.id)
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
                <button>show more</button>
            </div>
        )
    }
}

export default Users;