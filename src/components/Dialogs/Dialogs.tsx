import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import UserMessageItem from "./Messages/UserMessageItem/UserMessageItem";
import FriendMessageItem from "./Messages/FriendMessageItem/FriendMessageItem";
import sendButton from "../../asssets/feedbackIcons/send-icon.png";
import {DialogsPropsType} from "./DialogsContainer";

export type MessageItemPropsType = {
    message: string
}

const Dialogs:FC<DialogsPropsType> = (props) => {

    const dialogsItems = props.dialogsPage.dialogs.map( dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    const userMessageItems = props.dialogsPage.userMessages.map( message => <UserMessageItem key={message.id} message={message.message} />)
    const friendMessageItems = props.dialogsPage.friendMessages.map( message => <FriendMessageItem key={message.id} message={message.message} />)

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogItems}>
                    {dialogsItems}
                </div>
                <div className={s.messageItems}>
                    <div className={s.messages}>
                        <div className={s.friendMessages}>{friendMessageItems}</div>
                        <div className={s.userMessages}>{userMessageItems}</div>
                    </div>
                    <div className={s.newMessage}>
                        <textarea placeholder={"Type something..."}
                                  value={props.dialogsPage.newMessageText}
                                  onChange={onNewMessageChange}/>
                        <button className={s.button} onClick={onSendMessageClick}>
                            <img src={sendButton} alt="send"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;