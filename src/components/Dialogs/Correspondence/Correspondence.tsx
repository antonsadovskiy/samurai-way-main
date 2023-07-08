import s from "./Correspondence.module.css";
import Compact from "antd/es/space/Compact";
import { Button, Input } from "antd";
import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import UserMessageItem from "../DialogMessages/UserMessageItem/UserMessageItem";
import FriendMessageItem from "../DialogMessages/FriendMessageItem/FriendMessageItem";
import { MessageItemType } from "../../../redux/dialogs/dialogsReducer";

type CorrespondencePropsType = {
  userMessages: MessageItemType[];
  friendMessages: MessageItemType[];
  sendMessage: (newMessage: string) => void;
};

export const Correspondence = (props: CorrespondencePropsType) => {
  const userMessageItems = props.userMessages.map((message) => (
    <UserMessageItem key={message.id} message={message.message} />
  ));
  const friendMessageItems = props.friendMessages.map((message) => (
    <FriendMessageItem key={message.id} message={message.message} />
  ));

  const [message, setMessage] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };
  const onSendMessageClick = () => {
    props.sendMessage(message);
    setMessage("");
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSendMessageClick();
    }
  };

  return (
    <div className={s.correspondence}>
      <div className={s.dialogMessages}>
        <div className={s.friendMessages}>{friendMessageItems}</div>
        <div className={s.userMessages}>{userMessageItems}</div>
      </div>
      <Compact>
        <Input
          onChange={changeHandler}
          onKeyDown={onKeyDownHandler}
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
  );
};
