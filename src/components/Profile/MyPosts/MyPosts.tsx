import React, {FC, memo} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";
import {Button} from "antd";

type FormPropsType = {
  newPostText: string
}

const maxLength = maxLengthCreator(50)
const minLength = minLengthCreator(5)

const MyPosts: FC<MyPostsPropsType> = memo((props) => {

  const postsItems = props.posts.map(post =>
    <Post key={post.id}
          id={post.id}
          date={post.date}
          message={post.message}
          likes={post.likes}
          comments={post.comments}/>)

  const onAddPost = (value: FormPropsType) => props.addPost(value.newPostText)

  return (
    <div className={s.postsContainer}>
      <AddPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsItems}
      </div>
    </div>
  );
})

const AddPostForm: FC<InjectedFormProps<FormPropsType>> = (props) => {
  return (
    <form className={s.newPost} onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name={'newPostText'}
             placeholder={'What\'s new?'}
             validate={[required, maxLength, minLength]}/>
      <button className={s.button}>
        <Button>send</Button>
      </button>
    </form>
  )
}
export const AddPostFormRedux = reduxForm<FormPropsType>({form: 'profileAddNewPost'})(AddPostForm)

export default MyPosts;