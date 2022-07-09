import React from 'react';
import Aos from 'aos';

import Home from './Home/Home';
import Header from './Header/Header';
import IntroSection from './Introduction/IntroSection';
import WebSkills from './Skills/WebSkills';
import Proficiency from './Skills/Proficiency';
import Education from './Education/Education';
import OpenSource from './OpenSource/OpenSource';
import Experience from './Experience/Experience';
import Achievements from './Experience/Achievements';
import Contact from './Contact/Contact'

const Main = () => {

    Aos.init();

    return (
        <>
            <Header />
            <Home />
            <IntroSection />
            <WebSkills />
            <Proficiency />
            <OpenSource />
            <Education />
            <Experience />
            <Achievements />
            <Contact />
        </>
    );
}

export default Main;