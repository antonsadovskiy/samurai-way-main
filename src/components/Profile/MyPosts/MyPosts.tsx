import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea />
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"This is my first post!"} likes={30}/>
                <Post message={"How are you doing today?"} likes={53}/>
                <Post message={"I'm busy"} likes={21}/>
            </div>
        </div>
    );
};

export default MyPosts;