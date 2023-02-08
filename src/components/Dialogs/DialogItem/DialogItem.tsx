import React, {FC} from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem:FC<DialogItemPropsType> = (props) => {
    return (
        <NavLink className={s.dialogItem} activeClassName={s.active} to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink>
    );
};

export default DialogItem;