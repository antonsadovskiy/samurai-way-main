import React, {FC} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {Store} from "redux";

export type MyPostsPropsType = {
    store: Store<AppStateType>
}

const MyPostsContainer: FC<MyPostsPropsType> = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        console.log('Trying to add post')
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        const action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;