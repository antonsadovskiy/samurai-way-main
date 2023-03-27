import React, {FC} from 'react';
import userPhotoNotFound from "../../../../asssets/images/ava.jpg";
import s from './Avatar.module.css'

type AvatarPropsType = {
    photos: {
        small: string
        large: string
    }
}

const Avatar: FC<AvatarPropsType> = (props) => {
    return (
        <div className={s.avatar}>
            {
                props.photos.large
                    ? <img src={props.photos.large} alt={"avatar"}/>
                    : <img src={userPhotoNotFound} alt={"avatar"}/>
            }
        </div>
    );
};

export default Avatar;