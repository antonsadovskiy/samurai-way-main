import React, {FC} from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile/profileReducer";
import Preloader from "../common/Preloader/Preloader";

type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

const Profile: FC<ProfilePropsType> = (props) => {
    return (
        !props.profile ?
            <Preloader/>
            :
            <div className={s.mainContainer}>
                <div className={s.profileInfoContainer}>
                    <ProfileInfo profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}/>
                </div>
                <div className={s.postsContainer}>
                    <MyPostsContainer/>
                </div>
            </div>
    );
}

export default Profile;