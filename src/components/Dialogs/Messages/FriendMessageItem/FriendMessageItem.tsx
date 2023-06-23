import React, { FC } from "react";
import s from "./FriendMessageItem.module.css";
import { MessageItemPropsType } from "../../Dialogs";

const FriendMessageItem: FC<MessageItemPropsType> = (props) => {
  return (
    <div>
      <div className={s.item}>{props.message}</div>
    </div>
  );
};

export default FriendMessageItem;
