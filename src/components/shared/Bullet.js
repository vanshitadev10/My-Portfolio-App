import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import bullet from '../../lotties/bullet.json';


const BulletAnimation = () => {
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: bullet,
        });
        return () => lottie.stop();
    }, []);
    return <div style={{ height:'50%', maxWidth: '5vw'}} ref={anime}></div>;
};

export default BulletAnimation;