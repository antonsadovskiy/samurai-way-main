import React from 'react';
import avatar from "../../../asssets/images/ava.jpg";
import s from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={s.avatar}>
            <img src={avatar} alt={"avatar"}/>
        </div>
    );
};

export default Avatar;