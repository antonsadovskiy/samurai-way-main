import React, { FC } from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../redux/profile/profileReducer";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton/ProfileInfoSkeleton";
import MyPostsSkeleton from "./MyPostsSkeleton/MyPostsSkeleton";

type ProfilePropsType = {
  profile: UserProfileType | null;
  status: string;
  updateStatus: (newStatus: string) => void;
};

const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.mainContainer}>
      <div className={s.profileInfoContainer}>
        {!props.profile ? (
          <ProfileInfoSkeleton />
        ) : (
          <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        )}
      </div>
      <div className={s.postsContainer}>
        {!props.profile ? <MyPostsSkeleton /> : <MyPostsContainer />}
      </div>
    </div>
  );
};

export default Profile;
