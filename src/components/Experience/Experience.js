import React from 'react';

import ExpAnimation from './ExpAnimation';
import nit from '../../assets/NITJ-logo.png';
import skillypandaz from '../../assets/skillypandaz.png';
import WorkCard from './WorkCard';
import styles from './PastWork.module.css'

const Experience = () => {

    return (
        <div className={`${styles.section} ${styles.section1}`} id='experience'>
            <div className={styles.animation1}>
            <div>
                <h1 className={styles.heading}>Experience</h1>
                <p className={styles.detail}>My Experience being a Front-end Web Developer...</p>
                </div>
                <ExpAnimation />
            </div>
            <div className={styles.list}>
                <WorkCard src={nit} alt={'NIT Jalandhar'} heading={'ECE Department NITJ'} position={'Front-End Developer'} detail={'Here, I am responsible to expand features and create website producing smoother operations which enhance user engagement and contains interactive features.'} />
                <WorkCard src={skillypandaz} alt={'Skilly Pandaz'} heading={'Skilly Pandaz'} position={'Front-End Developer'} detail={'Here, I am responsible to produce visual elements by translating UI/UX design wireframes into code and thus producing high quality, reusable markup using React.js, Javascript, CSS3, HTML5.'} />
            </div>
        </div>
    )
}

export default Experience;