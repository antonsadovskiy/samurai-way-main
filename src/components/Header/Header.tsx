import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import containerStyle from "../../common/Container.module.css";
import { Header } from "antd/lib/layout/layout";
import { Button } from "antd";
import { DropDown } from "../common/DropDown/DropDown";
import {
  ExportOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { DropDownItem } from "../common/DropDown/DropDownItem/DropDownItem";

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
                <DropDown
                  items={[
                    {
                      label: (
                        <NavLink to={"/profile"}>
                          <DropDownItem>
                            <UserOutlined />
                            <span>My Profile</span>
                          </DropDownItem>
                        </NavLink>
                      ),
                      key: "0",
                    },
                    {
                      label: (
                        <NavLink to={"/settings"}>
                          <DropDownItem>
                            <SettingOutlined />
                            <span>Settings</span>
                          </DropDownItem>
                        </NavLink>
                      ),
                      key: "1",
                    },
                    {
                      type: "divider",
                    },
                    {
                      label: (
                        <Button
                          onClick={onClickLogOutHandler}
                          className={s.button}
                          type="primary"
                          icon={<ExportOutlined />}
                        >
                          log out
                        </Button>
                      ),
                      key: "2",
                    },
                  ]}
                  trigger={<div>{props.login}</div>}
                />
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
