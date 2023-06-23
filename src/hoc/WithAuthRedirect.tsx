import { AppStateType } from "../redux/redux-store";
import { connect } from "react-redux";
import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";

type MapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    const { isAuth, ...restProps } = props;
    return isAuth ? (
      <Component {...(restProps as T)} />
    ) : (
      <Redirect to={"/login"} />
    );
  };

  return connect(mapStateToProps)(RedirectComponent);
}
