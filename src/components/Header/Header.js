import React, { useState } from 'react';

import styles from './Header.module.css';

const Header = () => {

    const [nameOfClass, setNameOfClass] = useState('links--primary');

    return(
        <div className={styles.header}>
            <p className={styles.name}>{'< Vanshita Dev />'}</p>
            <div className={`${styles.links} ${styles[nameOfClass]}`}>
            <a href='#intro' alt='Home' onClick={() => {setNameOfClass('links--secondary')}}>Home</a>
            <a href='#skills' alt='Skills' onClick={() => {setNameOfClass('links--tertiary')}}>Skills</a>
            <a href='#open-source' alt='Open Source' onClick={() => {setNameOfClass('links--quaternary')}}>Open Source</a>
            <a href='#experience' alt='Experience' onClick={() => {setNameOfClass('links--pentanary')}}>Experience</a>
            <a href='#contact' alt='Contact Me' onClick={() => {setNameOfClass('links--hexnary')}}>Contact Me</a>
            </div>
        </div>
    );
}

export default Header;