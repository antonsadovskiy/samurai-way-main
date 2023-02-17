import React, {ChangeEvent, createRef, FC, RefObject, useRef, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";
import sendButton from '../../../asssets/feedbackIcons/send-icon.png'

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts:FC<MyPostsPropsType> = ({posts,...props}) => {

    const postsItems = posts.map(post =>
        <Post key={post.id} id={post.id} date={post.date} message={post.message} likes={post.likes} comments={post.comments} />
    )

    // const addPostInput:RefObject<HTMLTextAreaElement> = useRef(null)
    const addPostTextarea:RefObject<HTMLTextAreaElement> = createRef()

    const onClickHandler = () => {
        console.log('Trying to add post')
        const text = addPostTextarea.current?.value
        if (text){
            props.addPost(text)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea placeholder={"What's new?"} ref={addPostTextarea} onChange={onChangeHandler}/>
                <button className={s.button} onClick={onClickHandler} >
                    <img src={sendButton} alt=""/>
                </button>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;