import { useContext } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import styles from './Skills.module.css';
import Aos from 'aos';

const Proficiency = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.proficiency} data-aos='fade-right' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-delay='200' data-aos-once='true' data-aos-offset='-200' style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
            <h1 className={styles.heading}>Proficiency</h1>
            <div className={styles.proficiency__points}>
                <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Frontend</p>
                <div className={styles.bar}><div className={styles.bar__color} id={styles.bar1}></div></div>
            </div>
            <div className={styles.proficiency__points}>
                <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Programming</p>
                <div className={styles.bar}><div className={styles.bar__color} id={styles.bar2}></div></div>
            </div>
        </div>
    );

};

export default Proficiency;