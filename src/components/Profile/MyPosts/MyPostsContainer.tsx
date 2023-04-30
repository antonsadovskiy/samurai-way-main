import React, {FC} from 'react';
import {addPostActionCreator, PostType} from "../../../redux/profile/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)
export default MyPostsContainer;