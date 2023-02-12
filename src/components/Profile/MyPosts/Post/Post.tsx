import React, {FC} from 'react';
import s from "./Post.module.css";
import avatar from "../../../../asssets/images/ava.jpg"
import like from "../../../../asssets/feedbackIcons/like.png"
import comment from "../../../../asssets/feedbackIcons/comment.png"

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
            <div className={s.info}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
                <div className={s.nameAndDate}>
                    <p className={s.name}>Anton Sadovskiy</p>
                    <p className={s.date}>{props.date}</p>
                </div>
            </div>
            <div className={s.postMessage}>
                {props.message}
            </div>
            <div className={s.feedbackContainer}>
                <div>
                    <img className={s.feedbackIcons} src={like} alt="like"/>
                </div>
                <div>
                    <span>{props.likes}</span>
                </div>
                <div>
                    <img className={s.feedbackIcons} src={comment} alt="comment"/>
                </div>
                <div>
                    <span>{props.comments}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;