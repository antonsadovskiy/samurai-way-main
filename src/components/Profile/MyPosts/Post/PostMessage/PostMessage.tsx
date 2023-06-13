import React, {FC} from 'react';
import s from "./PostMessage.module.css";

type PostMessagePropsType = {
    message: string
}


const PostMessage:FC<PostMessagePropsType> = ({message}) => {
    return (
        <p>
            {message}
        </p>
    );
};

export default PostMessage;