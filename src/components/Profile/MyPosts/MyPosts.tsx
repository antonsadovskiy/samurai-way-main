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
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;