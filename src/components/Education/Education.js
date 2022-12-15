import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import nit from '../../assets/NITJ-logo.png';
import twelth from '../../assets/school-logo-12.png';
import tenth from '../../assets/school-logo-10.png';
import EducationCard from './EducationCard';
import styles from './Education.module.css';

const Education = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.education} style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
            <h1 className={styles.heading}>Education</h1>
            <EducationCard src={nit} alt={'NIT Jalandhar'} heading={'Dr. B R Ambedkar National Institute Of Technology, Jalandhar'} degree={`Bachelor's Of Technology (2020 - Present)`} subject={'Electronics & Communication Engineering'} />
            <EducationCard src={twelth} alt={'Class 12th'} heading={'Narain Public School, Patiala'} degree={`Class 12th (2018 - 2020)`} subject={'Non-Medical (PCM)'} />
            <EducationCard src={tenth} alt={'Class 10th'} heading={'Our Lady Of Fatima Convent Secondary School, Patiala'} degree={`Class 10th (2006 - 2018)`} subject={''} />
        </div>
    );

};

export default Education;