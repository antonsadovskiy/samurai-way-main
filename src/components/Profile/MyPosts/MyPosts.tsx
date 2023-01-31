import React from 'react';
import set from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={set.postsContainer}>
            <div className={set.newPost}>
                <textarea />
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={set.posts}>
                <Post message={"This is my first post!"} likes={30}/>
                <Post message={"How are you doing today?"} likes={53}/>
                <Post message={"I'm busy"} likes={21}/>
            </div>
        </div>
    );
};

export default MyPosts;