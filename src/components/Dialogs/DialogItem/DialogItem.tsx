import React, {FC} from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
}

const DialogItem:FC<DialogItemPropsType> = ({id, avatar, name}) => {
    return (
        <NavLink className={s.dialogItem} activeClassName={s.active} to={"/dialogs/" + id}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            {name}
        </NavLink>
    );
};

export default DialogItem;