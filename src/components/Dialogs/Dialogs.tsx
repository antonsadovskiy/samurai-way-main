import React, {FC} from 'react';
import s from './Dialogs.module.css'
import UserMessageItem from "./Messages/UserMessageItem/UserMessageItem";
import FriendMessageItem from "./Messages/FriendMessageItem/FriendMessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";
import {Avatar, Button, List} from "antd";
import {NavLink} from "react-router-dom";

export type MessageItemPropsType = {
  message: string
}
export type FormPropsType = {
  newMessageText: string
}

const maxLength = maxLengthCreator(50)
const minLength = minLengthCreator(5)

const Dialogs: FC<DialogsPropsType> = (props) => {

  const userMessageItems = props.dialogsPage.userMessages.map(message =>
    <UserMessageItem key={message.id} message={message.message}/>)
  const friendMessageItems = props.dialogsPage.friendMessages.map(message =>
    <FriendMessageItem key={message.id} message={message.message}/>)

  const onSendMessageClick = (value: FormPropsType) => props.sendMessage(value.newMessageText)

  return (
    <div>
      <div className={s.dialogsContainer}>
        <div className={s.dialogItems}>
          <List
            itemLayout="horizontal"
            dataSource={props.dialogsPage.dialogs}
            renderItem={(item, index) => (
              <NavLink className={s.dialogItem} activeClassName={s.active} to={"/dialogs/" + item.id}>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.id}`}/>}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description="some status"
                  />
                </List.Item>
              </NavLink>
            )}
          />
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

export const AddMessagesForm: FC<InjectedFormProps<FormPropsType>> = (props) => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name={'newMessageText'}
             placeholder={'Type something...'}
             validate={[required, maxLength, minLength]}/>
      <Button htmlType={"submit"} type="primary">send</Button>
    </form>
  )
}
const AddMessagesFormRedux = reduxForm<FormPropsType>({form: 'dialogAddMessageForm'})(AddMessagesForm)

export default Dialogs;