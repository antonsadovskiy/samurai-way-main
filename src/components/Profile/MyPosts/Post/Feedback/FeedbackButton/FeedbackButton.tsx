import React, {FC} from 'react';
import s from "./FeedbackButton.module.css";

type FeedbackButtonPropsType = {
    image: string
    name: string
}

const FeedbackButton:FC<FeedbackButtonPropsType> = ({name,image}) => {

    const onClickHandler = () => {
        console.log(`Trying to ${name} post`)
    }

    return (
        <button className={s.button} onClick={onClickHandler}>
            <img className={s.feedbackIcons} src={image} alt={name}/>
        </button>
    );
};

export default FeedbackButton;