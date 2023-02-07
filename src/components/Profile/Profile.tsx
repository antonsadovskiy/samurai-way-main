import React from "react";
import s from "./Profile.module.css"
import backgroundImage from "../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg"
import avatar from "../../asssets/images/ava.jpg"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.backgroundImage}>
                {/*<img src={backgroundImage} alt={"background image"}/>*/}
            </div>
            <div className={s.aboutContainer}>
                <div className={s.avatar}>
                    <img src={avatar} alt={"avatar"}/>
                </div>
                <div className={s.about}>
                    <h3>About:</h3>
                    <span>Age: 18 y.o.</span>
                    <span>Birth: March 18</span>
                    <span>City: Minsk</span>
                    <span>Education: BNTU, 2 course</span>
                    <span className={s.status}>Status: Work hard, play harder</span>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;