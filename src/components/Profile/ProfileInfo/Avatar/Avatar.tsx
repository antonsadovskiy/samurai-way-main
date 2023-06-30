import React, { FC } from "react";
import userPhotoNotFound from "../../../../asssets/images/empty.jpg";
import s from "./Avatar.module.css";
import { Image } from "antd";

type AvatarPropsType = {
  photos: {
    small: string;
    large: string;
  };
};

const Avatar: FC<AvatarPropsType> = (props) => {
  debugger;

  return (
    <div className={s.avatar}>
      {props.photos.large ? (
        <Image width={160} src={props.photos.large} />
      ) : (
        <Image width={160} src={userPhotoNotFound} />
      )}
    </div>
  );
};

export default Avatar;
