import React from 'react';
import 'aos/dist/aos.css';

import styles from './Skills.module.css';
import Aos from 'aos';

const Proficiency = () => {

    return (
        <div className={styles.proficiency} data-aos='fade-right' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-delay='200' data-aos-once='true'>
                <h1 className={styles.heading}>Proficiency</h1>
                <div className={styles.proficiency__points}>
                    <p>Frontend</p>
                    <div className={styles.bar}><div className={styles.bar__color} id={styles.bar1}></div></div>
                </div>
                <div className={styles.proficiency__points}>
                    <p>Programming</p>
                    <div className={styles.bar}><div className={styles.bar__color} id={styles.bar2}></div></div>
                </div>
        </div>
    )
}

export default Proficiency;