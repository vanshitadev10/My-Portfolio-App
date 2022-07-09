import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import animation from '../../lotties/experience.json';


const ExpAnimation = () => {
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation,
        });
        return () => lottie.stop();
    }, []);
    return <div style={{ height:'30vh', maxWidth:'30vw', marginTop: '-1rem', marginLeft: '-6vw' }} ref={anime}></div>;
};

export default ExpAnimation;