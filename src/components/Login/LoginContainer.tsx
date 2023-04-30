import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {FormDataType} from "./LoginForm/LoginForm";
import {logInUser} from "../../redux/auth/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
    authError: Array<string>
}
type MapDispatchToPropsType = {
    logInUser: (data: FormDataType) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class LoginContainer extends React.Component<PropsType> {

    render() {
        return this.props.isAuth
            ? <Redirect to={'/profile'}/>
            : <Login logInUser={this.props.logInUser} authError={this.props.authError}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        authError: state.auth.authError
    }
}
export default connect(mapStateToProps,{logInUser})(LoginContainer)