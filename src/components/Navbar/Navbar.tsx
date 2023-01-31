import React from 'react';
import set from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={set.navbarContainer}>
            <a className={`${set.item} ${set.active}`} href="#">Profile</a>
            <a className={set.item} href="#">Messages</a>
            <a className={set.item} href="#">News</a>
            <a className={set.item} href="#">Music</a>
            <a className={set.item} href="#">Settings</a>
        </div>
    );
};

export default Navbar;