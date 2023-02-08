import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs:FC = (props) => {
    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogItems}>
                    <DialogItem name="Anton" id={1}/>
                    <DialogItem name="Julia" id={2}/>
                    <DialogItem name="Sasha" id={3}/>
                    <DialogItem name="Diana" id={4}/>
                    <DialogItem name="Alex" id={5}/>
                </div>
                <div className={s.messageItems}>
                    <div>
                        <MessageItem message="message 1"/>
                        <MessageItem message="message 2"/>
                        <MessageItem message="message 3"/>
                        <MessageItem message="message 3"/>
                        <MessageItem message="message 3"/>
                        <MessageItem message="message 3"/>
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