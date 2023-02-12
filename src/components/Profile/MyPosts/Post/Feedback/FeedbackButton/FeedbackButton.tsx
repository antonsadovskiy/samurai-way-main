import React, {FC} from 'react';
import s from "./FeedbackButton.module.css";

type FeedbackButtonPropsType = {
    name: string
}

const FeedbackButton:FC<FeedbackButtonPropsType> = ({name}) => {
    return (
        <div>
            <img className={s.feedbackIcons} src={name} alt={name}/>
        </div>
    );
};

export default FeedbackButton;