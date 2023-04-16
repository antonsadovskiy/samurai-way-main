import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {UserProfileType, getProfile} from "../../redux/profile/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: UserProfileType | null
    isAuth: boolean
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
        return this.props.isAuth
            ? <Profile {...this.props} profile={this.props.profile}/>
            : <Redirect to={'login'}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(WithURLDataContainerComponent)