import React, { FC } from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, List } from "antd";

export type DialogItemPropsType = {
  id: number;
  name: string;
  avatar: string;
};

const DialogItem: FC<DialogItemPropsType> = ({ id, avatar, name }) => {
  return (
    <NavLink
      className={s.dialogItem}
      activeClassName={s.active}
      to={"/dialogs/" + id}
    >
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${id}`}
            />
          }
          title={<a href="https://ant.design">{name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    </NavLink>
  );
};

export default DialogItem;
