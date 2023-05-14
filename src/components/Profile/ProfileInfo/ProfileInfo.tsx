import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import backgroundImage from "../../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg";
import Avatar from "./Avatar/Avatar";
import About from "./About/About";
import {UserProfileType} from "../../../redux/profile/profileReducer";
import Status from "./Status/Status";
import StatusWithHooks from "./Status/StatusWithHooks";
import { Card } from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import SearchJob from "./About/SearchJob/SearchJob";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileInfo:FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={s.profile}>
            {/*<div className={s.aboutContainer}>*/}
            {/*    <About aboutMe={props.profile.aboutMe}*/}
            {/*           fullName={props.profile.fullName}*/}
            {/*           lookingForAJob={props.profile.lookingForAJob}*/}
            {/*           lookingForAJobDescription={props.profile.lookingForAJobDescription}/>*/}
            {/*</div>*/}
            <Card
                className={s.card}
                cover={
                    <img
                        alt="background image"
                        src={backgroundImage}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar photos={props.profile.photos}/>}
                />
                <Meta
                    title={props.profile.fullName}
                    description={<StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>}
                />
                {/*<Meta*/}
                {/*    description={<SearchJob lookingForAJob={props.profile.lookingForAJob}*/}
                {/*                            lookingForAJobDescription={props.profile.lookingForAJobDescription}/>}*/}
                {/*/>*/}
            </Card>
        </div>
    );
};

export default ProfileInfo;