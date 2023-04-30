import React, {FC} from 'react';
import s from './Login.module.css'
import LoginReduxForm, {FormDataType} from "./LoginForm/LoginForm";

type LoginPropsType = {
    logInUser: (data: FormDataType) => void
    authError: Array<string>
}

const Login:FC<LoginPropsType> = (props) => {

    const onSubmit = (data: FormDataType) => {
        props.logInUser(data)
    }

    return (
        <div className={s.loginContainer}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;