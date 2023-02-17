import React, {FC} from 'react';
import s from './Friend.module.css'

type FriendPropsType = {
    id: number
    name: string
    avatar: string
}

const Friend:FC<FriendPropsType> = ({name,avatar}) => {
    return (
        <div className={s.friend}>
            <div className={s.avatar}>
                <img src={avatar} alt=""/>
            </div>
            <span>{name}</span>
        </div>
    );
};

export default Friend;