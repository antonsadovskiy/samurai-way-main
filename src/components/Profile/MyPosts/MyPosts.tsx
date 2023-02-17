import React, {ChangeEvent, createRef, FC, RefObject, useRef, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";
import sendButton from '../../../asssets/feedbackIcons/send-icon.png'
import NewPost from "./NewPost/NewPost";

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts:FC<MyPostsPropsType> = ({posts,...props}) => {

    const postsItems = posts.map(post =>
        <Post key={post.id} id={post.id} date={post.date} message={post.message} likes={post.likes} comments={post.comments} />
    )

    return (
        <div className={s.postsContainer}>
            <NewPost addPost={props.addPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;