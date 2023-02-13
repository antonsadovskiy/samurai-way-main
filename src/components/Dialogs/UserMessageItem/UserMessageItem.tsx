import React, {FC} from 'react';
import s from "./UserMessageItem.module.css";
import {MessageItemPropsType} from "../Dialogs";

const UserMessageItem:FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.item}>{props.message}</div>
    );
};

export default UserMessageItem;