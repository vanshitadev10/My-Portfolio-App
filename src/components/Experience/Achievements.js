import React from 'react';

import microsoft from '../../assets/microsoft.png';
import WorkCard from './WorkCard';
import TrophyAnimation from './TrophyAnimation';
import styles from './PastWork.module.css'

const Achievements = () => {

    return (
        <div className={`${styles.section} ${styles.section2}`}>
            <div className={styles.animation2}>
                <h1 className={styles.heading}>Achievements And Certifications</h1>
                <TrophyAnimation />
            </div>
            <div className={styles.list}>
                <WorkCard src={microsoft} alt={'Microsoft Engage 2022'} heading={'Microsoft Engage 2022'} position={'Mentee'} detail={'I was shortlisted as a mentee for Intern Engage 2022. Under this program I made a Face Recognition Authentication App using React.js, Face-api.js and Firebase Reatime Database. Further I was also shortlisted for the interview round for the post of SDE intern at Microsoft.'} button link={'https://github.com/vanshitadev10/Microsoft-Engage2022-Face-Recognition-App'} />
            </div>
        </div>
    )
}

export default Achievements;