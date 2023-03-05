import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import sendButton from "../../../../asssets/feedbackIcons/send-icon.png";
import s from './NewPost.module.css'
import {
    addPostActionCreator,
    AddPostActionType,
    updateNewPostTextActionCreator,
    UpdateNewPostTextActionType
} from "../../../../redux/state";

type NewPostType = {
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
    newPostText: string
}

const NewPost:FC<NewPostType> = (props) => {

    const addPost = () => {
        console.log('Trying to add post')
        props.dispatch(addPostActionCreator())
    }
    const onClickHandler = () => {
        addPost()
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key === 'Enter'){
            addPost()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.newPost}>
            <textarea placeholder={"What's new?"}
                      value={props.newPostText}
                      onChange={onChangeHandler}
                      onKeyDown={onKeyDownHandler}/>
            <button className={s.button} onClick={onClickHandler} >
                <img src={sendButton} alt="send"/>
            </button>
        </div>
    );
};

export default NewPost;