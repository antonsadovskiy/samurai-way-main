import React from 'react';
import s from "./ProfileInfo.module.css";
import backgroundImage from "../../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.backgroundImage} src={backgroundImage} alt={"background image"}/>
            <div className={s.aboutContainer}>
                <Avatar />
                <About />
            </div>
        </div>
    );
};

export default ProfileInfo;