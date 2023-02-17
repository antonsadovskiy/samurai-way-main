import React, {FC} from 'react';
import {SideBarFriendType} from "../../../redux/state";
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

type FriendsPropsType = {
    friends: Array<SideBarFriendType>
}

const Friends:FC<FriendsPropsType> = (props) => {

    const friends = props.friends.map( friend =>
        <Friend key={friend.id} id={friend.id} name={friend.name} avatar={friend.avatar} />
    )

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            {friends}
        </div>
    );
};

export default Friends;