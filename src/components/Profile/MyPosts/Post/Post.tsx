import React, {FC} from 'react';
import s from "./Post.module.css";
import avatar from "../../../../asssets/images/ava.jpg"

type PostPropsType = {
    message: string
    likes: number
    comments: number
}

const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <div className={s.info}>
                <img src={avatar} alt="avatar"/>
                <div className={s.nameAndDate}>
                    <p className={s.name}>Anton Sadovskiy</p>
                    <p className={s.date}>19:08 27 Jan</p>
                </div>
            </div>
            <div className={s.postMessage}>
                {props.message}
            </div>
            <div className={s.feedbackContainer}>
                <button className={s.buttonLike}>Like</button>
                <div>
                    <span>{props.likes}</span>
                </div>
                <button className={s.buttonComm}>Comment</button>
                <div>
                    <span>{props.comments}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;