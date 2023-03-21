import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import User from "./User/User";
import s from './Users.module.css'
import axios from "axios";

const Users:FC<UsersPropsType> = (props) => {

    if (props.users.length === 0){
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    const users = props.users.map(user =>
        <User key={user.id}
              id={user.id}
              name={user.name}
              photos={user.photos}
              status={user.status}
              followed={user.followed}
              // location={user.location}
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