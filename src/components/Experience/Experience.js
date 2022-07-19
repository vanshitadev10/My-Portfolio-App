import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import nit from '../../assets/NITJ-logo.png';
import skillypandaz from '../../assets/skillypandaz.png';
import WorkCard from './WorkCard';
import styles from './PastWork.module.css'

const Experience = props => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.section} id='experience' style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
            <div>
                <h1 className={styles.heading}>Experience</h1>
                <p className={styles.detail} style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>My Experience as a Front-end Web Developer...</p>
            </div>
            <div className={styles.list}>
                <WorkCard src={nit} alt={'NIT Jalandhar'} heading={'ECE Department NITJ'} duration={'2022 - Present'} position={'Front-End Developer'} detail={'I am responsible for expanding features and creating a website producing smoother operations which enhance user engagement and contains interactive features.'} button link={'https://www.nitj.ac.in/ece/'} btn='Website' />
                <WorkCard src={skillypandaz} alt={'Skilly Pandaz'} heading={'Skilly Pandaz'} duration={'2021 - Present'} position={'Front-End Developer'} detail={'I am responsible for producing visual elements by translating UI/UX design wireframes into code and thus producing high quality, reusable markup using React.js, Javascript, CSS3, HTML5.'} button link={'https://github.com/goellavish10/project-repo'} btn='Project (ATC Couriers)' />
            </div>
        </div>
    );

};

export default Experience;