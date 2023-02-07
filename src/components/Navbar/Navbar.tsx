import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <NavLink activeClassName={s.active} className={s.item}
               to="/profile">
                Profile
            </NavLink>
            <NavLink activeClassName={s.active} className={s.item}
               to="/dialogs">
                Messages
            </NavLink>
            <NavLink activeClassName={s.active} className={s.item}
               to="/news">
                News
            </NavLink>
            <NavLink activeClassName={s.active} className={s.item}
               to="/music">
                Music
            </NavLink>
            <NavLink activeClassName={s.active} className={s.item}
               to="/settings">
                Settings
            </NavLink>
        </div>
    );
};

export default Navbar;