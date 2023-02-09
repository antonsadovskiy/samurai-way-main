import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs:FC = (props) => {

    const dialogs = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Julia"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Diana"},
        {id: 5, name: "Alex"},
    ]

    const messages = [
        {id: 1, message: "message 1"},
        {id: 2, message: "message 2"},
        {id: 3, message: "message 3"},
        {id: 4, message: "message 4"},
        {id: 5, message: "message 5"},
    ]

    const dialogsItems = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messageItems = messages.map( message => <MessageItem message={message.message} />)

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