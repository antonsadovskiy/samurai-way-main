import React, { ChangeEvent, FC, useState } from "react";
import s from "./Dialogs.module.css";
import UserMessageItem from "./Messages/UserMessageItem/UserMessageItem";
import FriendMessageItem from "./Messages/FriendMessageItem/FriendMessageItem";
import { DialogsPropsType } from "./DialogsContainer";
import { Button, Input } from "antd";
import DialogUser from "./DialogUser/DialogUser";
import Compact from "antd/es/space/Compact";

export type MessageItemPropsType = {
  message: string;
};
export type FormPropsType = {
  newMessageText: string;
};

const Dialogs: FC<DialogsPropsType> = (props) => {
  const [message, setMessage] = useState("");

  const userMessageItems = props.dialogsPage.userMessages.map((message) => (
    <UserMessageItem key={message.id} message={message.message} />
  ));
  const friendMessageItems = props.dialogsPage.friendMessages.map((message) => (
    <FriendMessageItem key={message.id} message={message.message} />
  ));

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.currentTarget.value);
  const onSendMessageClick = () => {
    props.sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <div className={s.dialogsContainer}>
        <div className={s.dialogItems}>
          {props.dialogsPage.dialogUsers.map((user) => (
            <DialogUser user={user} />
          ))}
        </div>
        <div className={s.messageItems}>
          <div className={s.messages}>
            <div className={s.friendMessages}>{friendMessageItems}</div>
            <div className={s.userMessages}>{userMessageItems}</div>
          </div>
          <Compact>
            <Input
              onChange={changeHandler}
              defaultValue="type something..."
              value={message}
            />
            <Button
              disabled={!message}
              type={"primary"}
              onClick={onSendMessageClick}
            >
              Send
            </Button>
          </Compact>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
