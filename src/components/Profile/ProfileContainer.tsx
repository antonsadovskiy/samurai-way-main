import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {ProfilePageType, UserProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type mapStateToProps = {
    profile: UserProfileType | null
}
type mapDispatchToProps = {
    setUserProfile: (profile: UserProfileType) => void
}
export type ProfileAPIComponent = mapStateToProps & mapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIComponent

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => ({
    profile: state.profilePage.profile
})
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        setUserProfile(profile: UserProfileType) {
            dispatch(setUserProfileAC(profile))
        }
    }
}

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent)