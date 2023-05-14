import React, {ChangeEvent, FC, FocusEvent, MouseEvent, useEffect, useState} from 'react';
import s from './Status.module.css'

type StatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

const StatusWithHooks: FC<StatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = (e: MouseEvent<HTMLSpanElement>) => setEditMode(true)
    const deactivateEditMode = (e: FocusEvent<HTMLInputElement>) => {
        props.updateStatus(e.currentTarget.value)
        setEditMode(false)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.statusContainer}>
            {
                editMode
                    ? <div>
                        <input value={status}
                               onBlur={deactivateEditMode}
                               onChange={onChangeHandler}
                               autoFocus/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                    </div>
            }
        </div>
    );
}

export default StatusWithHooks;