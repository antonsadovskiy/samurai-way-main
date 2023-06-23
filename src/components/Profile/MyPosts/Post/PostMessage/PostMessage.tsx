import React, { FC } from "react";

type PostMessagePropsType = {
  message: string;
};

const PostMessage: FC<PostMessagePropsType> = ({ message }) => {
  return <p>{message}</p>;
};

export default PostMessage;
