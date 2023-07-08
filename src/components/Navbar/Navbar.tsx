import React, { FC } from "react";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import NavItem from "./NavItem/NavItem";
import {
  CustomerServiceOutlined,
  GlobalOutlined,
  HomeOutlined,
  MessageOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  getItem(
    "Profile",
    "1",
    <NavItem urlPath={"/profile"}>
      <HomeOutlined />
    </NavItem>
  ),
  getItem(
    "Dialogs",
    "2",
    <NavItem urlPath={"/dialogs"}>
      <MessageOutlined />
    </NavItem>
  ),
  getItem(
    "Users",
    "3",
    <NavItem urlPath={"/users"}>
      <UserOutlined />
    </NavItem>
  ),
  getItem(
    "News",
    "4",
    <NavItem urlPath={"/news"}>
      <GlobalOutlined />
    </NavItem>
  ),
  getItem(
    "Music",
    "5",
    <NavItem urlPath={"/music"}>
      <CustomerServiceOutlined />
    </NavItem>
  ),
  getItem(
    "Settings",
    "6",
    <NavItem urlPath={"/settings"}>
      <SettingOutlined />
    </NavItem>
  ),
  getItem("Friends", "7", <TeamOutlined />, [
    getItem("Tom", "friend1"),
    getItem("Bill", "friend2"),
    getItem("Alex", "friend3"),
  ]),
];

type NavbarPropsType = {
  collapsed: boolean;
  onCollapseHandler: (value: boolean) => void;
};

const Navbar: FC<NavbarPropsType> = (props) => {
  const onCollapseHandler = (value: boolean) => {
    props.onCollapseHandler(value);
  };
  return (
    <Sider
      theme="light"
      collapsible
      collapsed={props.collapsed}
      onCollapse={onCollapseHandler}
    >
      <Menu theme="light" mode="inline" items={items} />
    </Sider>
  );
};

export default Navbar;
