import React from 'react';
import s from "./About.module.css";

const About = () => {
    return (
        <div className={s.about}>
            <span>Anton Sadovskiy</span>
            <span>Minsk</span>
            <div className={s.info}>
                <h3>About:</h3>
                <span>Age: 18 y.o.</span><br></br>
                <span>Birth: March 18</span><br></br>
                <span>Education: BNTU</span><br></br>
                <p className={s.status}>Status: <br></br>Work smarter, not harder</p>
            </div>
        </div>
    );
};

export default About;