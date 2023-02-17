import React, {FC} from 'react';
import s from "./Feedback.module.css"
import FeedbackButton from "./FeedbackButton/FeedbackButton";
import like from '../../../../../asssets/feedbackIcons/like-icon.png'
import comment from '../../../../../asssets/feedbackIcons/comment-icon.png'

type FeedbackPropsType = {
    likes: number
    comments: number
}

const Feedback:FC<FeedbackPropsType> = ({likes, comments}) => {
    return (
        <div className={s.feedbackContainer}>
            <FeedbackButton image={like} name={'like'}/>
            <div>
                <p>{likes}</p>
            </div>
            <FeedbackButton image={comment} name={'comment'}/>
            <div>
                <p>{comments}</p>
            </div>
        </div>
    );
};

export default Feedback;