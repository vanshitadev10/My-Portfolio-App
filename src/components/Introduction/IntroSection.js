import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import RabbitAnimation from './RabbitAnimation';
import IconButtons from '../shared/IconButtons';
import HelloAnimation from './Hello';
import Button from '../Button/Button';
import styles from './IntroSection.module.css';


const IntroSection = () => {

    const [link, setLink] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link]);

    return (
        <div className={styles.intro} id='intro'>
            <aside className={styles.intro__aside} data-aos='zoom-out' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                <section>
                    <h1>
                        Hi, I'm Vanshita
                        <span>
                            <HelloAnimation />
                        </span>
                    </h1>
                </section>
                <h2>I design & code beautifully simple user interfaces</h2>
                <p>A passionate Frontend Web Developer with experience of building web applications with React.js / Next.js / Javascript and some other cool libraries and frameworks.</p>
                <IconButtons inverse />
                <div className={styles.intro__btn}>
                    <Button id='btn4' onClick={() => setLink('https://drive.google.com/file/d/11PFig6CH_6Dkb7VTPnFCD5yvHMR-i751/view?usp=sharing')}>SEE MY RESUME</Button>
                    <a href='#contact' alt='Contact Me'><Button id='btn5'>CONTACT ME</Button></a>
                </div>
            </aside>
            <div className={styles.animation}><RabbitAnimation /></div>
        </div>
    );
}

export default IntroSection;