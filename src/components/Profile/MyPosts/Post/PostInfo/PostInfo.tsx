import React, {FC} from 'react';
import s from "./PostInfo.module.css";
import avatar from "../../../../../asssets/images/ava.jpg";

type PostInfoPropsType = {
    avatar: string
    date: string
    name: string
}

const PostInfo:FC<PostInfoPropsType> = (props) => {
    return (
        <div className={s.info}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <div className={s.nameAndDate}>
                <p className={s.name}>{props.name}</p>
                <p className={s.date}>{props.date}</p>
            </div>
        </div>
    );
};

export default PostInfo;