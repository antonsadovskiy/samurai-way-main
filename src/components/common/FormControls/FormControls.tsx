import React from 'react';
import s from './FormControls.module.css'

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
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    );
};
export const Input = (props: any) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><input className={s.input} {...input} {...props}/></FormControl>
    );
};