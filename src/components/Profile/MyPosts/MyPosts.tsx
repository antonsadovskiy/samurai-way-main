import React, {FC} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import sendButton from "../../../asssets/feedbackIcons/send-icon.png";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

type FormPropsType = {
    newPostText: string
}

const maxLength = maxLengthCreator(50)
const minLength = minLengthCreator(5)

const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsItems = props.posts.map(post =>
        <Post key={post.id} id={post.id} date={post.date}
              message={post.message} likes={post.likes} comments={post.comments}/>)

    const onAddPost = (value: FormPropsType) => props.addPost(value.newPostText)

    return (
        <div className={s.postsContainer}>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

const AddPostForm: FC<InjectedFormProps<FormPropsType>> = (props) => {
    return (
        <form className={s.newPost} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newPostText'}
                   placeholder={'What\'s new?'}
                   validate={[required, maxLength, minLength]}/>
            <button className={s.button}>
                <img src={sendButton} alt="send"/>
            </button>
        </form>
    )
}
export const AddPostFormRedux = reduxForm<FormPropsType>({form: 'profileAddNewPost'})(AddPostForm)

export default MyPosts;