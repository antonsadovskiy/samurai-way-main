import React, {ChangeEvent, createRef, FC, RefObject} from 'react';
import sendButton from "../../../../asssets/feedbackIcons/send-icon.png";
import s from './NewPost.module.css'

type NewPostType = {
    addPost: (postMessage: string) => void
}

const NewPost:FC<NewPostType> = (props) => {

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
        <div className={s.newPost}>
            <textarea placeholder={"What's new?"} ref={addPostTextarea} onChange={onChangeHandler}/>
            <button className={s.button} onClick={onClickHandler} >
                <img src={sendButton} alt=""/>
            </button>
        </div>
    );
};

export default NewPost;