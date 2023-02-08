import React, {FC} from 'react';
import s from "./MessageItem.module.css";

type MessageItemPropsType = {
    message: string
}

const MessageItem:FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.item}>{props.message}</div>
    );
};

export default MessageItem;