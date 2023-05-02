import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {FormDataType} from "./LoginForm/LoginForm";
import {loginUser} from "../../redux/auth/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    loginUser: (data: FormDataType) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class LoginContainer extends React.Component<PropsType> {

    render() {
        return this.props.isAuth
            ? <Redirect to={'/profile'}/>
            : <Login loginUser={this.props.loginUser}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {loginUser})(LoginContainer)