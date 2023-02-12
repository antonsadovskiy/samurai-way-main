import React, {FC} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../Profile";

export type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts:FC<MyPostsPropsType> = (props) => {

    const postsItems = props.posts.map( post => <Post id={post.id}
                                                      date={post.date}
                                                      message={post.message}
                                                      likes={post.likes}
                                                      comments={post.comments} />)

    return (
        <div className={s.postsContainer}>
            <div className={s.newPost}>
                <textarea placeholder={"What's new?"}/>
                <div>
                    <button className={s.button}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;