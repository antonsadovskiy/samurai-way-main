import React from "react";
import set from "./Profile.module.css"
import backgroundImage from "../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg"
import avatar from "../../asssets/images/ava.jpg"

const Profile = () => {
    return (
        <div className={set.profileContainer}>
            <div className={set.backgroundImage}>
                <img src={backgroundImage} alt={"background image"}/>
            </div>
            <div className={set.aboutContainer}>
                <div className={set.avatar}>
                    <img src={avatar} alt={"avatar"}/>
                </div>
                <div className={set.about}>
                    <h3>About:</h3>
                    <span>Age: 18 y.o.</span>
                    <span>Birth: March 18</span>
                    <span>City: Minsk</span>
                    <span>Education: BNTU, 2 course</span>
                    <span className={set.status}>Status: Work hard, play harder</span>
                </div>
            </div>
            <span>posts</span>
        </div>
    );
}

export default Profile;