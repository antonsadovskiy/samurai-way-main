import React, {FC} from 'react';
import s from "./UserMessageItem.module.css";
import {MessageItemPropsType} from "../../Dialogs";

const UserMessageItem:FC<MessageItemPropsType> = ({message}) => {
    return (
        <div className={s.item}>{message}</div>
    );
};

export default UserMessageItem;