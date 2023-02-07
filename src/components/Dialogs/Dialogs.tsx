import React, {FC} from 'react';
import s from './Dialogs.module.css'

const Dialogs:FC = (props) => {
    return (
        <div>
            <div className={s.dialogsContainer}>
                <div className={s.dialogItems}>
                    <div className={`${s.item} ${s.activeItem}`}>Anton</div>
                    <div className={s.item}>Julia</div>
                    <div className={s.item}>Diana</div>
                    <div className={s.item}>Sasha</div>
                    <div className={s.item}>Alex</div>
                </div>
                <div className={s.messageItems}>
                    <div className={s.item}>message 1</div>
                    <div className={s.item}>message 2</div>
                    <div className={s.item}>message 3</div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;