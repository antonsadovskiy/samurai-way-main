import React, { FC } from "react";

type UserNamePropsType = {
  name: string;
};

const UserName: FC<UserNamePropsType> = ({ name }) => {
  return <div>{name}</div>;
};

export default UserName;
