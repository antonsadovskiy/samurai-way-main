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
          style={{ width: "500px", height: "116px" }}
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
        <Meta title={<Skeleton active paragraph={{ rows: 1 }} />} />
      </div>
    </Card>
  );
};

export default ProfileInfoSkeleton;
