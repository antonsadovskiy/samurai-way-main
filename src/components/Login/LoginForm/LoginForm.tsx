import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import s from "../Login.module.css";
import { MyCheckbox, MyInput } from "../../common/FormControls/FormControls";
import { required } from "../../../utils/validators/validators";
import { Button } from "antd";

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.formContainer}>
      <div>
        <Field
          name={"email"}
          type={"text"}
          placeholder={"email"}
          component={MyInput}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          type={"password"}
          placeholder={"password"}
          component={MyInput}
          validate={[required]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={MyCheckbox} />
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <button className={s.button}>
        <Button className={s.myButton} type={"primary"}>
          Log in
        </Button>
      </button>
    </form>
  );
};
const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

export default LoginReduxForm;
