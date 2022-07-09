import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import Button from '../Button/Button';
import Card from '../shared/Card';
import styles from './PastWork.module.css'

const WorkCard = props => {

    const [link, setLink] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link])

    return (
        <div data-aos='flip-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
            <Card className={styles.workcard}>
                <img src={props.src} alt={props.alt} />
                <div>
                    <h1>{props.heading}</h1>
                    <h2>{props.position}</h2>
                    <p>{props.detail}</p>
                    {props.button && <Button green onClick={() => setLink(`${props.link}`)}>Have a look at project</Button>}
                </div>
            </Card>
        </div>
    )
}

export default WorkCard;