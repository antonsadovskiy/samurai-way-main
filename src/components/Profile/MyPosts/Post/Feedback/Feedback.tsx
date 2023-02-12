import React, {FC} from 'react';
import s from "./Feedback.module.css"
import FeedbackButton from "./FeedbackButton/FeedbackButton";
import like from "../../../../../asssets/feedbackIcons/like.png";
import comment from "../../../../../asssets/feedbackIcons/comment.png";

type FeedbackPropsType = {
    likes: number
    comments: number
}

const Feedback:FC<FeedbackPropsType> = ({likes, comments}) => {
    return (
        <div className={s.feedbackContainer}>
            <FeedbackButton name={like}/>
            <div>
                <span>{likes}</span>
            </div>
            <FeedbackButton name={comment}/>
            <div>
                <span>{comments}</span>
            </div>
        </div>
    );
};

export default Feedback;