import React from "react";
import s from "./Profile.module.css"
import backgroundImage from "../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg"
import MyPosts from "./MyPosts/MyPosts";
import About from "./About/About";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return (
        <div className={s.mainContainer}>
            <img className={s.backgroundImage} src={backgroundImage} alt={"background image"}/>
            <div className={s.aboutContainer}>
                <Avatar />
                <About />
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;