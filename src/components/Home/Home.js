import React, { useLayoutEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';

import Button from '../Button/Button';
import styles from './Home.module.css';

const Home = () => {

    const scrollRef = useRef(null);
    // const [currentWidth, setCurrentWidth] = useState(100);
    const [currentMargin, setCurrentMargin] = useState(151);

    const scrollEffect = () => {
        const topPos = scrollRef.current.getBoundingClientRect().top;
        const scrollPos = window.scrollY + window.innerHeight;
        // setCurrentWidth(scrollPos / 7.46);
        setCurrentMargin(topPos);
        console.log(currentMargin)
    }


    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);
    }, [currentMargin])

    return (
        <div className={styles.home} ref={scrollRef} data-aos='fade-up' data-aos-duration='700' data-aos-easing='ease-in-out'>
            <div className={styles['home--first']} style={{ width: (currentMargin > 130) ? '1500px' : `calc(${-currentMargin*5}px + 2200px` }}>
                <h1 style={{ marginLeft: (currentMargin > 130) ? '73px' : `calc(${currentMargin}px - 65px)` }}><span>F</span><span>R</span><span>O</span><span>N</span><span>T</span></h1>
                <div className={styles['extendable-line']} style={{ width:(currentMargin > 130) ? '290px' : `calc(${-currentMargin*2}px + 540px)` }}></div>
                <h1><span>E</span><span>N</span><span>D</span></h1>
            </div>
            <div className={styles['home--second']}>
                <h1><span>D</span><span>E</span><span>V</span><span>E</span><span>L</span><span>O</span><span>P</span><span>E</span><span>R</span></h1>
                <div>
                    <p>Available For Freelance!</p>
                    <a href='#contact' alt='Contact Me'><Button grey className={styles.btn}>Contact me</Button></a>
                </div>
            </div>
        </div>
    )
}

export default Home;