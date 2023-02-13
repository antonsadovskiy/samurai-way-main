import React, {FC} from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
}

const DialogItem:FC<DialogItemPropsType> = (props) => {
    return (
        <NavLink className={s.dialogItem} activeClassName={s.active} to={"/dialogs/" + props.id}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            {props.name}
        </NavLink>
    );
};

export default DialogItem;