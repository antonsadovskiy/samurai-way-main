import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"
import dialogs from '../../asssets/feedbackIcons/message-icon.png'
import profile from '../../asssets/feedbackIcons/profile-icon.png'
import news from '../../asssets/feedbackIcons/news-icon.png'
import music from '../../asssets/feedbackIcons/music-icon.png'
import settings from '../../asssets/feedbackIcons/settings-icon.png'
import {SideBarFriendType} from "../../redux/store";
import Friends from "./Friends/Friends";

type NavbarPropsType = {
    friends: Array<SideBarFriendType>
}

const Navbar:FC<NavbarPropsType> = (props) => {

    return (
        <div className={s.navbarContainer}>
            <div className={s.navItem}>
                <img src={profile} alt=""/>
                <NavLink activeClassName={s.active} className={s.item} to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={s.navItem}>
                <img src={dialogs} alt=""/>
                <NavLink activeClassName={s.active} className={s.item} to="/dialogs">
                    Messages
                </NavLink>
            </div>
            <div className={s.navItem}>
                <img src={news} alt=""/>
                <NavLink activeClassName={s.active} className={s.item} to="/news">
                    News
                </NavLink>
            </div>
            <div className={s.navItem}>
                <img src={music} alt=""/>
                <NavLink activeClassName={s.active} className={s.item} to="/music">
                    Music
                </NavLink>
            </div>
            <div className={s.navItem}>
                <img src={settings} alt=""/>
                <NavLink activeClassName={s.active} className={s.item} to="/settings">
                    Settings
                </NavLink>
            </div>
            <Friends friends={props.friends}/>
        </div>
    );
};

export default Navbar;