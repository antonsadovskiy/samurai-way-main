import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import User from "./User/User";
import s from './Users.module.css'
import avatar from "../../asssets/images/avatar.png";

const Users:FC<UsersPropsType> = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {userId: 1, fullName: 'Anton Sadovskiy', status: 'I like programming', avatar: avatar, isFollow: false,
                location: {
                    country: 'RUSSIA',
                    city: 'Moscow'
                }},
            {userId: 2, fullName: 'Diana Vernikovskaya', status: 'doctor!!', avatar: avatar, isFollow: false,
                location: {
                    country: 'BELGIUM',
                    city: 'Brussels'
                }},
            {userId: 3, fullName: 'Makar Ivanov', status: 'coffee is my life', avatar: avatar, isFollow: false,
                location: {
                    country: 'BELARUS',
                    city: 'Minsk'
                }},
            {userId: 4, fullName: 'Tima Petrikevich', status: 'want to go to America', avatar: avatar, isFollow: false,
                location: {
                    country: 'USA',
                    city: 'New York'
                }},
        ])
    }

    const users = props.users.map(user =>
        <User key={user.userId}
              userId={user.userId}
              fullName={user.fullName}
              status={user.status}
              avatar={user.avatar} isFollow={user.isFollow}
              location={user.location}
              follow={props.follow}
              unFollow={props.unFollow}/>)

    return (
        <div className={s.usersContainer}>
            {users}
            <button>show more</button>
        </div>
    );
};

export default Users;