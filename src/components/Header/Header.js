import { useContext, useEffect, useState } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import styles from './Header.module.css';

const Header = () => {

    const modeCtx = useContext(ModeChangeContext);

    const [nameOfClass, setNameOfClass] = useState('links--primary');
    const [check, setCheck] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const pageNavigateHandler = str => {
        setNameOfClass(str);
        setCheck(prevState => prevState === true ? false : true);
    }

    useEffect(() => {
        modeCtx.changeMode(darkMode);
    }, [darkMode]);


    return (
        <div className={check ? styles.backdrop : ''}>
            <div className={styles.header} id={styles.menuToggle} style={{ backgroundColor: !modeCtx.mode ? 'rgb(80, 80, 80)' : 'var(--nav_blue)' }}>
                <p className={styles.name}>{'< Vanshita Dev />'}</p>

                <div className={styles.hamburger}>
                    <input type={'checkbox'} checked={check} onChange={() => setCheck(prevState => prevState === true ? false : true)} />
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <div className={styles.links} id={styles.menu} style={{ backgroundColor: !modeCtx.mode ? 'rgb(80, 80, 80)' : 'var(--nav_blue)' }}>
                        <a href='#intro' alt='Home' onClick={pageNavigateHandler.bind(this, 'links--secondary')}>Home</a>
                        <a href='#skills' alt='Skills' onClick={pageNavigateHandler.bind(this, 'links--tertiary')}>Skills</a>
                        <a href='#open-source' alt='Open Source' onClick={pageNavigateHandler.bind(this, 'links--secondary')} >Open Source</a>
                        <a href='#experience' alt='Experience' onClick={pageNavigateHandler.bind(this, 'links--tertiary')}>Experience</a>
                        <a href='#contact' alt='Contact Me' onClick={pageNavigateHandler.bind(this, 'links--secondary')}>Contact Me</a>
                        <label className={styles.switch}>
                            <input type={'checkbox'} checked={darkMode} onChange={() => setDarkMode(prevState => prevState === true ? false : true)} />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Header;
