import React, {FC} from 'react';
import s from "./FriendMessageItem.module.css";
import {MessageItemPropsType} from "../Messages";

const FriendMessageItem:FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.item}>{props.message}</div>
    );
};

export default FriendMessageItem;