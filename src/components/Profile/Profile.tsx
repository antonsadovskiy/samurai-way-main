import React, {FC} from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

const Profile:FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.mainContainer}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    );
}

export default Profile;