import React, {ChangeEvent, createRef, FC, RefObject, useRef, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts:FC<MyPostsPropsType> = ({posts,...props}) => {

    const postsItems = posts.map( post => <Post id={post.id} date={post.date} message={post.message} likes={post.likes} comments={post.comments} />)

    // const addPostInput:RefObject<HTMLTextAreaElement> = useRef(null)
    const addPostTextarea:RefObject<HTMLTextAreaElement> = createRef()

    const onClickHandler = () => {
        console.log('Trying to add post')
        const text = addPostTextarea.current?.value
        alert(text)
        // if (text){
        //     alert(text)
        // }
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea placeholder={"What's new?"} ref={addPostTextarea}/>
                <div>
                    <button className={s.button} onClick={onClickHandler} >Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;