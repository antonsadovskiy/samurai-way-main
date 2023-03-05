import React, {FC} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPostActionType, PostType, UpdateNewPostTextActionType} from "../../../redux/state";
import NewPost from "./NewPost/NewPost";

export type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
    newPostText: string
}

const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsItems = props.posts.map(post =>
        <Post key={post.id} id={post.id} date={post.date} message={post.message} likes={post.likes}
              comments={post.comments}/>
    )

    return (
        <div className={s.postsContainer}>
            <NewPost dispatch={props.dispatch}
                     newPostText={props.newPostText}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

export default MyPosts;