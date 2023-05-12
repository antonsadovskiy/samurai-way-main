import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import backgroundImage from "../../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";
import {UserProfileType} from "../../../redux/profile/profileReducer";
import Status from "./Status/Status";
import StatusWithHooks from "./Status/StatusWithHooks";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileInfo:FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <img className={s.backgroundImage} src={backgroundImage} alt={"background image"}/>
            <div className={s.aboutContainer}>
                <Avatar photos={props.profile.photos}/>
                <About aboutMe={props.profile.aboutMe}
                       fullName={props.profile.fullName}
                       lookingForAJob={props.profile.lookingForAJob}
                       lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;