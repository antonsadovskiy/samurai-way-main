import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {ActionsTypes, AddMessageActionType, DialogPageType} from "../../redux/state";
import NewMessage from "./NewMessage/NewMessage";
import Messages from "./Messages/Messages";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs:FC<DialogsPropsType> = ({dialogsPage,...props}) => {

    const dialogsItems = dialogsPage.dialogs.map( dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogItems}>
                    {dialogsItems}
                </div>
                <div className={s.messageItems}>
                    <Messages dialogsPage={dialogsPage}/>
                    <NewMessage dispatch={props.dispatch}
                                newMessageText={dialogsPage.newMessageText}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;