import React, {FC} from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostType = {
    id: number
    date: string
    likes: number
    comments: number
    message: string
}

type ProfilePropsType = {
    posts: Array<PostType>
}

const Profile:FC<ProfilePropsType> = (props) => {



    return (
        <div className={s.mainContainer}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;