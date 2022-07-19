import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import styles from './IconButtons.module.css'
import github from '../../assets/github-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import mail from '../../assets/mail-icon.png'

const IconButtons = props => {

    const [link, setLink] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link]);


    return (
        <div className={styles.icon__btn} >
            <Button id='btn1' inverse={props.inverse ? true : false} round onClick={() => setLink('https://github.com/vanshitadev10')}><img src={github} alt='Github' /></Button>
            <Button id='btn2' inverse={props.inverse ? true : false} round onClick={() => setLink('https://www.linkedin.com/in/vanshita-dev-022ba721a/')}><img src={linkedin} alt='LinkedIn' /></Button>
            <Button id='btn3' inverse={props.inverse ? true : false} round onClick={() => setLink('mailto:vanshitadev10@gmail.com')}><img src={mail} alt='Email' /></Button>
        </div >
    );
    
};

export default IconButtons;