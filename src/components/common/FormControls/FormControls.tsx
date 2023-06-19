import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import s from './FormControls.module.css'
import {Checkbox, Input} from "antd";

const FormControl = ({input, meta, children, ...props}: any) => {
  return (
    <div className={meta.touched && meta.error ? s.formControl + " " + s.error : " "}>
      {children}
      <div>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Textarea = (props: any) => {
  const {input, meta, children, ...restProps} = props
  return (
    <FormControl {...props}><TextArea {...input} {...restProps}/></FormControl>
  );
};
export const MyInput = (props: any) => {
  const {input, meta, children, ...restProps} = props
  debugger
  return (
    <FormControl {...props}><Input {...input} {...props}/></FormControl>
  );
};
export const MyCheckbox = (props: any) => {
  const {input, meta, children, ...restProps} = props
  return (
    <FormControl {...props}><Checkbox {...input} {...props}/> remember me</FormControl>
  );
}