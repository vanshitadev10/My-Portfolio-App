import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import Button from '../Button/Button';
import Card from '../shared/Card';

import styles from './ProjectCard.module.css';

const ProjectCard = props => {

    const [link, setLink] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link])

    const imageChangeHandler = imgName => {
        setId(imgName);
    }

    return (
        <div data-aos='zoom-out' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
            <Card className={`${styles.project__card} ${id === `img${props.project}b` ? styles['image--remove'] : ''}`}>
                <div className={styles.project__image}>
                    <img className={`${styles.image__pc} ${props.note ? styles.note : ''}`} src={props.src1} alt={`Project-${props.project} wide view`} />
                </div>
                <div>
                    <h1>{props.heading}</h1>
                    <p>{props.detail1}<strong>{props.name}</strong>{props.detail2}</p>
                    <div className={styles.btns}>
                        <Button peach onClick={() => setLink(`${props.link}`)}>Have A Look</Button>
                        <Button peach onClick={imageChangeHandler.bind(this, `img${props.project}b`)}>Mobile View</Button>
                    </div>
                </div>
            </Card>


            <Card className={`${styles.image__mobile} ${id === `img${props.project}b` ? styles['image--display'] : ''}`}>
                <img className={styles.image__pc} src={props.src2} alt='Project-1 mobile view' />
                <Button peach onClick={imageChangeHandler.bind(this, '')}>Desktop View</Button>
            </Card>
        </div>
    )
}

export default ProjectCard;