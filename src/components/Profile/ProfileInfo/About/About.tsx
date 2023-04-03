import React, {FC} from 'react';
import s from "./About.module.css";
import Status from "./Status/Status";

type AboutPropsType = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

const About: FC<AboutPropsType> = (props) => {
    return (
        <div className={s.about}>
            <div className={s.name}>{props.fullName}</div>
            <p className={s.city}>user.location</p>
            <div className={s.info}>
                <h3>About:</h3>
                <span>user.age</span><br/>
                <span>Birth: user.dateBirth</span><br/>
                <span>Education: user.education</span><br/>
                <Status lookingForAJob={props.lookingForAJob}
                        lookingForAJobDescription={props.lookingForAJobDescription}/>

            </div>
        </div>
    );
};

export default About;