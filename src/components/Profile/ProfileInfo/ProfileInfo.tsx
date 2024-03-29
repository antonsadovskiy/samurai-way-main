import React, { ChangeEvent, FC } from "react";
import s from "./ProfileInfo.module.css";
import backgroundImage from "../../../asssets/images/156963-anime-art-oblako-atmosfera-mir-1920x1080 (1).jpg";
import Avatar from "./Avatar/Avatar";
import { UserProfileType } from "../../../redux/profile/profileReducer";
import Status from "./Status/Status";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Upload from "antd/lib/upload";
import { UploadOutlined } from "@ant-design/icons";
import Contacts from "./Contacts/Contacts";
import LookingForAJob from "./LookingForAJob/LookingForAJob";

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
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          )}
        </div>
        <Meta
          title={props.profile.fullName}
          description={
            <div className={s.info}>
              <Status
                status={props.status}
                isOwner={props.isOwner}
                updateStatus={props.updateStatus}
              />
              <LookingForAJob
                lookingForAJob={props.profile.lookingForAJob}
                description={props.profile.lookingForAJobDescription}
              />
              <Contacts
                isOwner={props.isOwner}
                contacts={props.profile.contacts}
              />
            </div>
          }
        />
      </div>
    </Card>
  );
};

export default ProfileInfo;
