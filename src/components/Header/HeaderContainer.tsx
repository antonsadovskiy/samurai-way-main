import {auth, setAuthUserData} from "../../redux/auth/authReducer";
import {connect} from "react-redux";
import Header from "./Header";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    auth: () => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {auth})(HeaderContainer)