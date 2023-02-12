import React, {FC} from 'react';
import s from "./Post.module.css";
import avatar from "../../../../asssets/images/ava.jpg"
import PostInfo from "./PostInfo/PostInfo";
import PostMessage from "./PostMessage/PostMessage";
import Feedback from "./Feedback/Feedback";

type PostPropsType = {
    id: number
    date: string
    message: string
    likes: number
    comments: number
}

const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <PostInfo date={props.date} avatar={avatar} name={"Anton Sadovskiy"}/>
            <PostMessage message={props.message}/>
            <Feedback likes={props.likes} comments={props.comments}/>
        </div>
    );
};

export default Post;