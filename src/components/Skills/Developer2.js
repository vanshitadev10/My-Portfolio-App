import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import developerAni2 from '../../lotties/developer3.json';


const Developer2Animation = () => {
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: developerAni2,
        });
        return () => lottie.stop();
    }, []);
    return <div style={{ height:'50vh', maxWidth: '20vw'}} ref={anime}></div>;
};

export default Developer2Animation;