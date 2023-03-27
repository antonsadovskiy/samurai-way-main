import React, {FC} from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";

type ProfilePropsType = {
    profile: UserProfileType | null
}

const Profile:FC<ProfilePropsType> = (props) => {
    return (
        !props.profile ?
            <Preloader/>
            :
            <div className={s.mainContainer}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </div>
    );
}

export default Profile;