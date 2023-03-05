import React, {ChangeEvent, createRef, FC, RefObject, KeyboardEvent} from 'react';
import s from './NewMessage.module.css'
import sendButton from "../../../asssets/feedbackIcons/send-icon.png";
import {
    addMessageActionCreator,
    AddMessageActionType,
    updateNewMessageTextActionCreator,
    UpdateNewMessageTextActionType
} from "../../../redux/state";

type NewMessagePropsType = {
    dispatch: (action: AddMessageActionType | UpdateNewMessageTextActionType) => void
    newMessageText: string
}

const NewMessage: FC<NewMessagePropsType> = (props) => {

    const addMessage = () => {
        console.log('Trying to add message')
        props.dispatch(addMessageActionCreator())
    }
    const onClickHandler = () => {
        addMessage()
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            addMessage()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.newMessage}>
            <textarea placeholder={"Type something..."}
                      value={props.newMessageText}
                      onChange={onChangeHandler}
                      onKeyDown={onKeyDownHandler}/>
            <button className={s.button} onClick={onClickHandler}>
                <img src={sendButton} alt="send"/>
            </button>
        </div>
    );
};

export default NewMessage;