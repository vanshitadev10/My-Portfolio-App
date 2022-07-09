import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import myimg from '../../assets/vanshita.jpg';
import IconButtons from '../shared/IconButtons';
import styles from './Contact.module.css';

const Contact = () => {

    const [margin, setMargin] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause) {
            return;
        }

        const interval = setInterval(() => {
            setMargin(prevState => {
                if (prevState == -5200) {
                    return 1500;
                } else {
                    return prevState - 1;
                }
            })
        }, [5]);

        return () => clearInterval(interval);
    }, [margin, pause]);

    return (
        <div className={styles.contact} id='contact'>
            <p data-aos='fade-up' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
            <div className={`${styles.train__margin} ${styles['train__margin--up']}`}></div>
            <div className={styles['contact--train']}>
                <h1 style={{ marginLeft: `${margin}px` }} onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}><span>WANNA BE STARTING SOMETHING? LET’S TALK - LET’S COLLABORATE - SAY HELLO!</span></h1>
            </div>
            <div className={`${styles.train__margin} ${styles['train__margin--down']}`}></div>
            <div className={styles.contact__details} data-aos='fade-down' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                <div>
                    <h1 className={styles.heading}>Reach out to me!</h1>
                    <p>I am available to work on your projects and bring your ideas to life. I am just a click away!</p>
                    <h2>Frontend Developer</h2>
                    <h2>India</h2>
                    <IconButtons grey />
                </div>
                <img src={myimg} className={styles.img} alt='Vanshita Dev' />
            </div>
            <footer><p>Designed By Vanshita Dev | &#169; 2022 All Rights Reserved</p></footer>
        </div>
    )
}

export default Contact;