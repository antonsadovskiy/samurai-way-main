import React, { FC } from "react";
import s from "./User.module.css";
import avatar from "../../../asssets/images/empty.jpg";
import { Button, Card } from "antd";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../redux/users/usersReducer";

type UserPropsType = {
  user: UserType;
  isButtonDisabled: Array<number>;
  follow: (userId: number) => void;
  unFollow: (userId: number) => void;
};

const User: FC<UserPropsType> = (props) => {
  const followHandler = () => props.follow(props.user.id);
  const unfollowHandler = () => props.unFollow(props.user.id);

  return (
    <div className={s.user}>
      <Card title={props.user.name} bordered={false} style={{ width: 300 }}>
        <div className={s.avaAndButton}>
          <NavLink to={"/profile/" + props.user.id}>
            <img
              width={50}
              height={50}
              src={props.user.photos.small ? props.user.photos.small : avatar}
              alt=""
            />
          </NavLink>
          {props.user.followed ? (
            <Button
              type={"default"}
              size={"small"}
              disabled={props.isButtonDisabled.some(
                (id) => id === props.user.id
              )}
              onClick={unfollowHandler}
            >
              unfollow
            </Button>
          ) : (
            <Button
              type={"default"}
              size={"small"}
              disabled={props.isButtonDisabled.some(
                (id) => id === props.user.id
              )}
              onClick={followHandler}
            >
              follow
            </Button>
          )}
        </div>
        <p>status: {props.user.status ? props.user.status : "no status"}</p>
      </Card>
    </div>
  );
};

export default User;
