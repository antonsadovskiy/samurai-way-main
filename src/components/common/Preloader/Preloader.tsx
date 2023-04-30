import React from 'react';
import preloader from "../../../asssets/images/preloader.svg";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="loading" width={50} height={50}/>
        </div>
    );
};

export default Preloader;