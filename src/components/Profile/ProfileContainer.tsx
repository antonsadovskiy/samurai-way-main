import React, {ComponentType} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {UserProfileType, getProfile, getStatus, updateStatus} from "../../redux/profile/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: UserProfileType | null
    status: string
}
type mapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (newStatus: string) => void
}
export type ProfileAPIComponent = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIComponent

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '28438'
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)