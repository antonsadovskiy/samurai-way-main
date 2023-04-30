import React, {FC} from 'react';
import openedEyes from "../../../../../asssets/images/openedEyes.png";
import closedEyes from "../../../../../asssets/images/closedEyes.png";
import s from './SearchJob.module.css'

type StatusPropsType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

const SearchJob: FC<StatusPropsType> = (props) => {
    return (
        props.lookingForAJob ?
            <div>
                <div className={s.status}>Job status:
                    <img src={openedEyes} alt="looking for a job" width={25} height={25}/>
                </div>
                <p className={s.statusText}>{props.lookingForAJobDescription}</p>
            </div>
            :
            <div>
                <div className={s.status}>Status:
                    <img src={closedEyes} alt="don't looking for a job" width={25} height={25}/>
                </div>
                <div className={s.padding}/>
            </div>
    );
};

export default SearchJob;