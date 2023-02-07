import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <div className={s.navItem}>
                <NavLink activeClassName={s.active} className={s.item}
                        to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink activeClassName={s.active} className={s.item}
                        to="/dialogs">
                    Messages
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink activeClassName={s.active} className={s.item}
                        to="/news">
                    News
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink activeClassName={s.active} className={s.item}
                        to="/music">
                    Music
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink activeClassName={s.active} className={s.item}
                        to="/settings">
                    Settings
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;