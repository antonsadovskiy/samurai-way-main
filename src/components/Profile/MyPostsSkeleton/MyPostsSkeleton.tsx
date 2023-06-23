import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import Skeleton from "antd/es/skeleton/Skeleton";

const MyPostsSkeleton = () => {
  return (
    <div className={s.postsContainer}>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Skeleton.Input active size={"large"} block />
        <Skeleton.Button
          active
          size={"large"}
          style={{ width: "40px" }}
          shape={"square"}
          block
        />
      </div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default MyPostsSkeleton;
