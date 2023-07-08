import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

type DropDownPropsType = {
  items: MenuProps["items"];
  trigger: ReactNode;
};

export const DropDown = ({ items, trigger }: DropDownPropsType) => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>{trigger}</Space>
    </a>
  </Dropdown>
);
