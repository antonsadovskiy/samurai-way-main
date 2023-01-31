import React from 'react';
import set from "./Post.module.css";
import avatar from "../../../../asssets/images/ava.jpg"


const Post = () => {
    return (
        <div className={set.item}>
            <img src={avatar} alt="avatar"/>
            <span>
                post 1
            </span>
            <div>
                <button>Like</button>
            </div>
        </div>
    );
};

export default Post;