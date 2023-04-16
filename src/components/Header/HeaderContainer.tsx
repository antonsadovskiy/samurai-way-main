import {getAuthUserDate, logoutUser, setAuthUserData} from "../../redux/auth/authReducer";
import {connect} from "react-redux";
import Header from "./Header";
import React from "react";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getAuthUserDate: () => void
    logoutUser: () => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserDate()
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    logoutUser={this.props.logoutUser}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {getAuthUserDate, logoutUser})(HeaderContainer)