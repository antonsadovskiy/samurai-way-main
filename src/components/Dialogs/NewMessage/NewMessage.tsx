import React, {createRef, RefObject} from 'react';
import s from './NewMessage.module.css'

const NewMessage = () => {

    const addMessageTextarea:RefObject<HTMLTextAreaElement> = createRef()

    const onClickHandler = () => {
        const text = addMessageTextarea.current?.value
        alert(text)
    }

    return (
        <div className={s.newMessage}>
            <textarea ref={addMessageTextarea}/>
            <button className={s.button} onClick={onClickHandler}>Send</button>
        </div>
    );
};

export default NewMessage;