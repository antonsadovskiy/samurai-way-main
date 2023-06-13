import React, {FC} from 'react';
import s from "./Feedback.module.css"
import FeedbackButton from "./FeedbackButton/FeedbackButton";
import like from '../../../../../asssets/feedbackIcons/like-icon.png'
import comment from '../../../../../asssets/feedbackIcons/comment-icon.png'
import {HeartOutlined, MailOutlined} from "@ant-design/icons";

type FeedbackPropsType = {
    likes: number
    comments: number
}

const Feedback: FC<FeedbackPropsType> = ({likes, comments}) => {
    return (
        <div className={s.feedbackContainer}>
            <HeartOutlined/>
            <p>{likes}</p>
            <MailOutlined/>
            <p>{comments}</p>
        </div>
    );
};

export default Feedback;