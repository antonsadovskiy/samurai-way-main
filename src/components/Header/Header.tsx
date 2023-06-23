import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import containerStyle from "../../common/Container.module.css";
import { Header } from "antd/lib/layout/layout";
import { Button } from "antd";

type HeaderPropsType = {
  login: string | null;
  isAuth: boolean;
  logoutUser: () => void;
};

const AppHeader: FC<HeaderPropsType> = (props) => {
  const onClickLogOutHandler = () => props.logoutUser();

  return (
    <Header>
      <div className={containerStyle.container}>
        <div className={s.loginBlock}>
          <div style={{ color: "white" }}>All TOGETHER</div>
          <div>
            {props.isAuth ? (
              <div className={s.authorisedUser}>
                <div>{props.login}</div>
                <Button onClick={onClickLogOutHandler} type="primary">
                  log out
                </Button>
              </div>
            ) : (
              <NavLink to={"/login"} className={s.notAuthorisedUser}>
                Log in
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
