import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import UserMessageItem from "./Messages/UserMessageItem/UserMessageItem";
import FriendMessageItem from "./Messages/FriendMessageItem/FriendMessageItem";
import sendButton from "../../asssets/feedbackIcons/send-icon.png";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";

export type MessageItemPropsType = {
    message: string
}
export type FormPropsType = {
    newMessageText: string
}

const maxLength = maxLengthCreator(50)
const minLength = minLengthCreator(5)

const Dialogs: FC<DialogsPropsType> = (props) => {

    const dialogsItems = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    const userMessageItems = props.dialogsPage.userMessages.map(message =>
        <UserMessageItem key={message.id} message={message.message}/>)
    const friendMessageItems = props.dialogsPage.friendMessages.map(message =>
        <FriendMessageItem key={message.id} message={message.message}/>)

    const onSendMessageClick = (value: FormPropsType) => props.sendMessage(value.newMessageText)

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
                    <AddMessagesFormRedux onSubmit={onSendMessageClick}/>
                </div>
            </div>
        </div>
    );
};

export const AddMessagesForm:FC<InjectedFormProps<FormPropsType>> = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newMessageText'}
                   placeholder={'Type something...'}
                   validate={[required, maxLength, minLength]}/>
            <button className={s.button} >
                <img src={sendButton} alt="send"/>
            </button>
        </form>
    )
}
const AddMessagesFormRedux = reduxForm<FormPropsType>({form: 'dialogAddMessageForm'})(AddMessagesForm)

export default Dialogs;