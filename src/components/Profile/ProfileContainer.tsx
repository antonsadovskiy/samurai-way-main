import React, { ComponentType } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateAvatar,
  updateStatus,
  UserProfileType,
} from "../../redux/profile/profileReducer";
import { AppStateType } from "../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

type PathParamsType = {
  userId: string;
};
type mapStateToPropsType = {
  profile: UserProfileType | null;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  getProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
  updateStatus: (newStatus: string) => void;
  updateAvatar: (file: File) => void;
};
export type ProfileAPIComponent = mapStateToPropsType & mapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIComponent;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(
    prevProps: Readonly<PropsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId && this.props.authorizedUserId) {
      userId = this.props.authorizedUserId.toString();
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        updateAvatar={this.props.updateAvatar}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    updateAvatar,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
