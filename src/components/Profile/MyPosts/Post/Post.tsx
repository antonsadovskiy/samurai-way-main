import React, { FC } from "react";
import s from "./Post.module.css";
import PostMessage from "./PostMessage/PostMessage";
import Feedback from "./Feedback/Feedback";
import { Divider } from "antd";

type PostPropsType = {
  id: number;
  date: string;
  message: string;
  likes: number;
  comments: number;
};

const Post: FC<PostPropsType> = (props) => {
  return (
    <div className={s.item}>
      <PostMessage message={props.message} />
      <Feedback likes={props.likes} comments={props.comments} />
      <Divider />
    </div>
  );
};

export default Post;
