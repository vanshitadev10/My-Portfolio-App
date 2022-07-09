import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import animation from '../../lotties/trophy.json';


const TrophyAnimation = () => {
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
    return <div style={{ height:'10vh', maxWidth:'10vw', marginTop: '6vh' }} ref={anime}></div>;
};

export default TrophyAnimation;