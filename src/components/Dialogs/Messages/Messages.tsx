import React, {FC} from 'react';
import UserMessageItem from "./UserMessageItem/UserMessageItem";
import FriendMessageItem from "./FriendMessageItem/FriendMessageItem";
import s from "./Messages.module.css"
import {DialogPageType} from "../../../redux/state";

type MessagesPropsType = {
    dialogsPage: DialogPageType
}

export type MessageItemPropsType = {
    message: string
}

const Messages:FC<MessagesPropsType> = ({dialogsPage}) => {

    const userMessageItems = dialogsPage.userMessages.map( message => <UserMessageItem key={message.id} message={message.message} />)
    const friendMessageItems = dialogsPage.friendMessages.map( message => <FriendMessageItem key={message.id} message={message.message} />)

    return (
        <div className={s.messages}>
            <div className={s.friendMessages}>{friendMessageItems}</div>
            <div className={s.userMessages}>{userMessageItems}</div>
        </div>
    );
};

export default Messages;