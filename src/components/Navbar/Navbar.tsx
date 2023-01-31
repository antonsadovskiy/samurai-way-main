import React from 'react';
import set from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={set.navbarContainer}>
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Music</a>
            <a href="#">Settings</a>
        </div>
    );
};

export default Navbar;