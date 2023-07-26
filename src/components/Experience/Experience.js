import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import mastork from '../../assets/mastork.png';
import nit from '../../assets/NITJ-logo.png';
import skillypandaz from '../../assets/skillypandaz.png';
import WorkCard from './WorkCard';
import styles from './PastWork.module.css'

const Experience = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.section} id='experience' style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
            <div>
                <h1 className={styles.heading}>Experience</h1>
                <p className={styles.detail} style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>My Experience as a Front-end Web Developer...</p>
            </div>
            <div className={styles.list}>
                <WorkCard src={mastork} alt={'Mastork Technologies'} heading={'Mastork Technologies'} duration={'May 2023 - July 2023'} position={'Front-End Developer'} detail={'Responsible for creating clean and well-tested react components according to specifications, working with the design team to reproduce the design and interacting with the back-end team to integrate the front-end with the Node.js back-end.'} button link1={'https://spotlet.in'} btn1='Project Website' />
                <WorkCard src={nit} alt={'NIT Jalandhar'} heading={'ECE Department NITJ'} duration={'2022 - Present'} position={'Front-End Developer'} detail={'Responsible for expanding features and creating a website producing smoother operations which enhance user engagement and contains interactive features. Contributed in:'} button link1={'https://www.nitj.ac.in/ece/'} btn1='Official Website' link2={'https://www.nitj.ac.in/WREC23/index.html'} btn2='Women Researchers In Electronics & Computing Website' />
                <WorkCard src={skillypandaz} alt={'Skilly Pandaz'} heading={'Skilly Pandaz'} duration={'2021 - Present'} position={'Front-End Developer'} detail={'Responsible for producing visual elements by translating UI/UX design wireframes into code and thus producing high quality, reusable markup using React.js, Javascript, CSS3, HTML5.'} button link1={'https://github.com/goellavish10/project-repo'} btn1='Project (ATC Couriers)' />
            </div>
        </div>
    );

};

export default Experience;
