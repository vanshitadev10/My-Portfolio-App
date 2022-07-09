import React from 'react';
import 'aos/dist/aos.css';

import Developer1Animation from './Developer1';
import BulletAnimation from '../shared/Bullet';
import nextjs from '../../assets/nextjs.png';
import reactjs from '../../assets/reactjs.png';
import reduxjs from '../../assets/redux.png';
import javascript from '../../assets/javascript.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import cpp from '../../assets/c-plus-plus.png';
import cLang from '../../assets/c-program.png'
import styles from './Skills.module.css';


const WebSkills = () => {

    return (
        <div className={styles.skill} id='skills'>
            <div>
                <Developer1Animation />
            </div>
            <div>
                <h1 className={styles.heading}>Web Skills</h1>
                <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                    <BulletAnimation />
                    <p>Front-end developer who creates attractive websites which converts visitors to customers.</p>
                </div>
                <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                    <BulletAnimation />
                    <p>Develop creative and responsive website layouts.</p>
                </div>
                <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                    <BulletAnimation />
                    <p>The websites are easy to use and are built with best practices.</p>
                </div>
                <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                    <BulletAnimation />
                    <p>The main area of my expertise is making React applications. I also have experience of making websites with Javascript, CSS, HTML, custom plugins, features, animations, and coding interactive layouts.</p>
                </div>
                <div className={styles.images}>
                    <div>
                        <img className={styles.img} src={nextjs} alt='Next.js' />
                        <p>Next.js</p>
                    </div>
                    <div>
                        <img src={reactjs} alt='React.js' />
                        <p>React.js</p>
                    </div>
                    <div>
                        <img src={reduxjs} alt='Redux.js' />
                        <p>Redux.js</p>
                    </div>
                    <div>
                        <img src={javascript} alt='Javascript' />
                        <p>Javascript</p>
                    </div>
                    <div>
                        <img src={css} alt='CSS' />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <img src={html} alt='HTML' />
                        <p>HTML5</p>
                    </div>
                </div>
                <div className={`${styles.images} ${styles.program}`}>
                    <h1>Programming Skills:</h1>
                    <div>
                        <img src={cpp} alt='C++' />
                        <p>C++</p>
                    </div>
                    <div>
                        <img src={cLang} alt='C' />
                        <p>C</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebSkills;