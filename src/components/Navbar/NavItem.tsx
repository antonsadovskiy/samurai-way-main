import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import s from './NavItem.module.css'

type NavItemPropsType = {
    urlPath: string
}

const NavItem:FC<NavItemPropsType> = (props) => {
    return (
        <div className={s.item}>
            {props.children}
            <NavLink to={props.urlPath}/>
        </div>
    );
};

export default NavItem;