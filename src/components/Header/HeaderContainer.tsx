import { logoutUser } from "../../redux/auth/authReducer";
import { connect } from "react-redux";
import AppHeader from "./Header";
import React from "react";
import { AppStateType } from "../../redux/redux-store";

type mapStateToPropsType = {
  login: string | null;
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  logoutUser: () => void;
};
type PropsType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return (
      <AppHeader
        login={this.props.login}
        isAuth={this.props.isAuth}
        logoutUser={this.props.logoutUser}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);
