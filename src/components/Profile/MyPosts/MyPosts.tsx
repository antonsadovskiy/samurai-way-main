import React, {ChangeEvent, FC} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import sendButton from "../../../asssets/feedbackIcons/send-icon.png";
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsItems = props.posts.map(post =>
        <Post key={post.id} id={post.id} date={post.date} message={post.message} likes={post.likes}
              comments={post.comments}/>
    )
    const onAddPost = () => {
        props.addPost()
    }
    const onClickHandler = () => {
        onAddPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea placeholder={"What's new?"}
                      value={props.newPostText}
                      onChange={onPostChange}/>
                <button className={s.button} onClick={onClickHandler}>
                    <img src={sendButton} alt="send"/>
                </button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;