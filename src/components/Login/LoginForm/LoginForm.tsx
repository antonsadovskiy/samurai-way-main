import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from '../Login.module.css'
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../../utils/validators/validators";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.formContainer}>
            <div>
                <Field name={'email'}
                       type={'text'}
                       placeholder={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'}
                       type={'password'}
                       placeholder={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={'input'}/>
                remember me
            </div>
            { props.error && <div className={s.formSummaryError}>{props.error}</div> }
            <div>
                <button>log in</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default LoginReduxForm;