import React, {FC} from 'react';
import s from "./Post.module.css";
import avatar from "../../../../asssets/images/ava.jpg"

type PostPropsType = {
    message: string,
    likes: number,
}

const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="avatar"/>
            <span>
                {props.message}
            </span>
            <div className={s.likesContainer}>
                <button>Like</button>
                <span>{props.likes}</span>
            </div>
        </div>
    );
};

export default Post;