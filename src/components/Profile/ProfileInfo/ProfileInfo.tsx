import React, { ChangeEvent, FC } from "react";
import s from "./ProfileInfo.module.css";
import backgroundImage from "../../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg";
import Avatar from "./Avatar/Avatar";
import { UserProfileType } from "../../../redux/profile/profileReducer";
import Status from "./Status/Status";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

type ProfileInfoPropsType = {
  isOwner: boolean;
  profile: UserProfileType;
  status: string;
  updateStatus: (newStatus: string) => void;
  updateAvatar: (file: File) => void;
};

const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
  const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) props.updateAvatar(e.target.files[0]);
  };

  return (
    <Card
      className={s.card}
      cover={<img alt="background image" src={backgroundImage} />}
    >
      <div className={s.cardInfo}>
        <div className={s.avatarContainer}>
          <Meta avatar={<Avatar photos={props.profile.photos} />} />
          {props.isOwner && (
            <input type={"file"} onChange={changeAvatarHandler} />
          )}
        </div>
        <Meta
          title={props.profile.fullName}
          description={
            <Status
              status={props.status}
              isOwner={props.isOwner}
              updateStatus={props.updateStatus}
            />
          }
        />
      </div>
    </Card>
  );
};

export default ProfileInfo;
