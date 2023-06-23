import React from "react";
import s from "./Preloader.module.css";
import { Spin } from "antd";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Preloader;
