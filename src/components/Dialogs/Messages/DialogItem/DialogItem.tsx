import React, { FC } from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import { DialogType } from "../../../../redux/dialogs/dialogsReducer";

export type DialogItemPropsType = {
  dialog: DialogType;
};

const DialogItem: FC<DialogItemPropsType> = ({ dialog }) => {
  return (
    <NavLink
      className={s.dialogItem}
      activeClassName={s.active}
      to={"/dialogs/" + dialog.id}
    >
      <Avatar
        className={s.avatar}
        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${dialog.id}`}
      />
      <div className={s.info}>
        <span className={s.name}>{dialog.name}</span>
        <span className={s.message}>{dialog.message}</span>
      </div>
    </NavLink>
  );
};

export default DialogItem;
