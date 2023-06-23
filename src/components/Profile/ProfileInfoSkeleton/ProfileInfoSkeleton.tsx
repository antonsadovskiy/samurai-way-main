import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";
import Skeleton from "antd/lib/skeleton/Skeleton";

const ProfileInfoSkeleton = () => {
  return (
    <Card
      className={s.card}
      cover={
        <Skeleton.Avatar
          shape={"square"}
          active
          style={{ width: "780px", height: "182px" }}
        />
      }
    >
      <div className={s.cardInfo}>
        <Meta
          avatar={
            <Skeleton.Avatar
              active={true}
              style={{ width: "160px", height: "160px" }}
              shape={"square"}
            />
          }
        />
      </div>
    </Card>
  );
};

export default ProfileInfoSkeleton;
