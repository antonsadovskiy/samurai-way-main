import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogPageType} from "../../index";

export type DialogItemType = {
    id: number
    name: string
}

export type MessageItemType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dialogPage: DialogPageType
}

const Dialogs:FC<DialogsPropsType> = (props) => {

    const dialogsItems = props.dialogPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messageItems = props.dialogPage.messages.map( message => <MessageItem message={message.message} />)

    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogItems}>
                    {dialogsItems}
                </div>
                <div className={s.messageItems}>
                    <div>
                        {messageItems}
                    </div>
                    <div className={s.newMessage}>
                        <textarea/>
                        <button className={s.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;