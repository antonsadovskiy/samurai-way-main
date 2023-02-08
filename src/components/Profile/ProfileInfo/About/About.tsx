import React from 'react';
import s from "./About.module.css";

const About = () => {
    return (
        <div className={s.about}>
            <p className={s.name}>Anton Sadovskiy</p>
            <p className={s.city}>Minsk</p>
            <div className={s.info}>
                <h3>About:</h3>
                <span>Age: 18 y.o.</span><br></br>
                <span>Birth: March 18</span><br></br>
                <span>Education: BNTU</span><br></br>
                <p className={s.status}>Status: </p>
                <p className={s.statusText}>Work smarter, not harder</p>
            </div>
        </div>
    );
};

export default About;