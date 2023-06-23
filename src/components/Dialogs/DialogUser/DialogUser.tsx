import React, { FC } from "react";
import s from "./DialogUser.module.css";
import { NavLink } from "react-router-dom";
import { DialogItemType } from "../../../redux/dialogs/dialogsReducer";
import { Avatar } from "antd/lib";
import UserName from "./UserName/UserName";

type DialogUserPropsType = {
  user: DialogItemType;
};

const DialogUser: FC<DialogUserPropsType> = ({ user }) => {
  return (
    <NavLink
      activeClassName={`${s.active} ${s.link}`}
      className={s.link}
      to={"/dialogs/" + user.id}
    >
      <div className={s.user}>
        <Avatar
          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${user.id}`}
        />
        <UserName name={user.name} />
      </div>
    </NavLink>
  );
};

export default DialogUser;
