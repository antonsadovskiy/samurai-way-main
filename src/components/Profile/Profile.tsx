import React, { FC } from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../redux/profile/profileReducer";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton/ProfileInfoSkeleton";
import MyPostsSkeleton from "./MyPostsSkeleton/MyPostsSkeleton";

type ProfilePropsType = {
  isOwner: boolean;
  profile: UserProfileType | null;
  status: string;
  updateStatus: (newStatus: string) => void;
  updateAvatar: (file: File) => void;
};

const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.mainContainer}>
      <div className={s.profileInfoContainer}>
        {!props.profile ? (
          <ProfileInfoSkeleton />
        ) : (
          <ProfileInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            updateAvatar={props.updateAvatar}
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
