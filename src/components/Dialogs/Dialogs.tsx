import React, {createRef, FC, RefObject} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";
import UserMessageItem from "./UserMessageItem/UserMessageItem";
import FriendMessageItem from "./FriendMessageItem/FriendMessageItem";

type DialogsPropsType = {
    dialogsPage: DialogPageType
}

export type MessageItemPropsType = {
    message: string
}

const Dialogs:FC<DialogsPropsType> = ({dialogsPage}) => {

    const dialogsItems = dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    const userMessageItems = dialogsPage.userMessages.map( message => <UserMessageItem message={message.message} />)
    const friendMessageItems = dialogsPage.friendMessages.map( message => <FriendMessageItem message={message.message} />)

    const addMessageTextarea:RefObject<HTMLTextAreaElement> = createRef()

    const onClickHandler = () => {
        const text = addMessageTextarea.current?.value
        alert(text)
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
                        <textarea ref={addMessageTextarea}/>
                        <button className={s.button} onClick={onClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;