import React, {FC} from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";
import {AppStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: Store<AppStateType>
}

const Profile: FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.mainContainer}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;