import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import backgroundImage from "../../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg";
import Avatar from "./Avatar/Avatar";
import {UserProfileType} from "../../../redux/profile/profileReducer";
import Status from "./Status/Status";
import {Card} from 'antd';
import Meta from "antd/es/card/Meta";

type ProfileInfoPropsType = {
  profile: UserProfileType
  status: string
  updateStatus: (newStatus: string) => void
}

const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
  return (
    <Card
      className={s.card}
      cover={
        <img
          alt="background image"
          src={backgroundImage}
        />
      }
    >
      <div className={s.cardInfo}>
        <Meta
          avatar={<Avatar photos={props.profile.photos}/>}
        />
        <Meta
          title={props.profile.fullName}
          description={<Status status={props.status} updateStatus={props.updateStatus}/>}
        />
      </div>
    </Card>
  );
};

export default ProfileInfo;