import React, {FC} from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile:FC<ProfilePropsType> = ({profilePage,...props}) => {

    return (
        <div className={s.mainContainer}>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} />
        </div>
    );
}

export default Profile;