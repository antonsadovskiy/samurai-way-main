import React, { FC } from "react";
import s from "./Dialogs.module.css";
import { DialogsPropsType } from "./DialogsContainer";
import DialogUser from "./DialogUser/DialogUser";
import { Messages } from "./Messages/Messages";
import { Correspondence } from "./Correspondence/Correspondence";

export type MessageItemPropsType = {
  message: string;
};
export type FormPropsType = {
  newMessageText: string;
};

const Dialogs: FC<DialogsPropsType> = (props) => {
  return (
    <div>
      <div className={s.dialogsContainer}>
        <div className={s.users}>
          {props.dialogsPage.dialogUsers.map((user) => (
            <DialogUser user={user} />
          ))}
        </div>
        <div className={s.messageZone}>
          <Messages dialogs={props.dialogsPage.dialogs} />
          <Correspondence
            userMessages={props.dialogsPage.userMessages}
            friendMessages={props.dialogsPage.friendMessages}
            sendMessage={props.sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
