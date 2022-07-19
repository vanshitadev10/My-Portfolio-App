import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import styles from './Card.module.css';

const Card = props => {

    const modeCtx = useContext(ModeChangeContext);

    return <div className={`${styles.card} ${props.className}`} style={{ backgroundColor: !modeCtx.mode ? 'rgb(220, 220, 220)' : '#1d212d', borderColor: !modeCtx.mode ? 'rgba(0, 0, 0, 0.7)' : ' var(--light_purple)', boxShadow: !modeCtx.mode ? '4px 4px 7px #737373b3' : '4px 4px 7px rgba(0, 0, 0, 0.7)' }}>{props.children}</div>;

};

export default Card;