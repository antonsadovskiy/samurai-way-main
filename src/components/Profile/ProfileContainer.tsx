import React, {ComponentType} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {UserProfileType, getProfile} from "../../redux/profile/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: UserProfileType | null
}
type mapDispatchToPropsType = {
    getProfile: (userId: string) => void
}
export type ProfileAPIComponent = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIComponent

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,{getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)