import React, {FC} from 'react';
import {Store} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: Store<AppStateType>
}
export type MessageItemPropsType = {
    message: string
}

const DialogsContainer:FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogPage

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs sendMessage={addMessage}
                 updateNewMessageText={onNewMessageChange}
                 dialogPage={state}/>
    );
};

export default DialogsContainer;