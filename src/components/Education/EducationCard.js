import React from 'react';
import 'aos/dist/aos.css';

import styles from './EducationCard.module.css';

const EducationCard = props => {

    return (
        <div className={styles.list} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
            <div className={styles.points}>
                <img src={props.src} alt={props.alt} />
                <div>
                    <h1>{props.heading}</h1>
                    <h2>{props.degree}</h2>
                    <p>{props.subject}</p>
                </div>
            </div>
            <div className={styles['extendable-line']}></div>
        </div>
    )
}

export default EducationCard;