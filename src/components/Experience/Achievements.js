import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import microsoft from '../../assets/microsoft.png';
import WorkCard from './WorkCard';
import TrophyAnimation from './TrophyAnimation';
import styles from './PastWork.module.css'

const Achievements = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.section} style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
            <div className={styles.animation}>
                <h1 className={styles.heading}>Achievements & Certifications</h1>
                <div><TrophyAnimation /></div>
            </div>
            <div className={styles.list}>
                <WorkCard src={microsoft} alt={'Microsoft Engage 2022'} heading={'Microsoft Engage 2022'} position={'Mentee'} detail={'I was shortlisted as a mentee for Intern Engage 2022. Under this program I made a Face Recognition Authentication App using React.js, Face-api.js and Firebase Reatime Database. Further I was also shortlisted for the interview round for the post of SDE intern at Microsoft.'} button link1={'https://github.com/vanshitadev10/Microsoft-Engage2022-Face-Recognition-App'} btn1='Have A Look At Project' />
            </div>
        </div>
    );

};

export default Achievements;