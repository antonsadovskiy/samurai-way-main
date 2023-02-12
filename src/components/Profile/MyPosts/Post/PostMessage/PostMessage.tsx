import React, {FC} from 'react';
import s from "./PostMessage.module.css";

type PostMessagePropsType = {
    message: string
}


const PostMessage:FC<PostMessagePropsType> = ({message}) => {
    return (
        <div className={s.postMessage}>
            {message}
        </div>
    );
};

export default PostMessage;