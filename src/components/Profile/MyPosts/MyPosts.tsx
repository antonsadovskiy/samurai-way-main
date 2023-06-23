import React, { ChangeEvent, FC, memo, useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import { Button } from "antd";
import Compact from "antd/es/space/Compact";
import TextArea from "antd/es/input/TextArea";

const MyPosts: FC<MyPostsPropsType> = memo((props) => {
  const [postText, setPostText] = useState("");
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.currentTarget.value);
  };

  const postsItems = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      date={post.date}
      message={post.message}
      likes={post.likes}
      comments={post.comments}
    />
  ));

  const onAddPost = () => {
    props.addPost(postText);
    setPostText("");
  };

  return (
    <div className={s.postsContainer}>
      <Compact style={{ width: "100%" }}>
        <TextArea
          onChange={changeHandler}
          defaultValue="type something..."
          value={postText}
        />
        <Button disabled={!postText} type={"primary"} onClick={onAddPost}>
          Post
        </Button>
      </Compact>
      <div className={s.posts}>{postsItems}</div>
    </div>
  );
});

export default MyPosts;
