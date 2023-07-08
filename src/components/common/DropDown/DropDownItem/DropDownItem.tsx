import { ReactNode } from "react";

import s from "./DropDownItem.module.css";

type DropDownItemPropsType = {
  children: ReactNode;
};
export const DropDownItem = ({ children }: DropDownItemPropsType) => {
  return <div className={s.item}>{children}</div>;
};
