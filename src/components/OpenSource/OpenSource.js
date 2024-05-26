import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import img1a from '../../assets/project1a.png';
import img1b from '../../assets/project1b.png';
import img2a from '../../assets/project2a.jpg';
import img2b from '../../assets/project2b.jpg';
import img3a from '../../assets/project3a.jpg';
import img3b from '../../assets/project3b.jpg';
import img4a from '../../assets/project4a.jpg';
import img4b from '../../assets/project4b.jpg';
import ProjectCard from './ProjectCard';
import styles from './OpenSource.module.css';

const OpenSource = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.project} id='open-source' style={{ color: !modeCtx.mode ? '#000' : '#fff', background: !modeCtx.mode ? '#fff' : 'rgba(14,19,31,1)' }}>
            <div>
                <h1 className={styles.project__heading}>Open Source project</h1>
                <p className={styles.project__detail} style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Some cool projects that I built till now...</p>
            </div>
            <div className={styles.project__list}>
                <ProjectCard project='1' src1={img1a} src2={img1b} heading='Website Builder App' detail1='This is a ' name='Website Builder AppApplication ' detail2="made using React.js that significantly reduces the time it takes to create a website. Developers don't need to write code from scratch, speeding up the development process." link='https://web-application-builder-nu.vercel.app/' />
                <ProjectCard project='2' src1={img2a} src2={img2b} heading='Expense Tracker App' detail1='This is a' name=' Full-Stack Expense Tracker App' detail2='made using React.js, Firebase, Google Charts. This application helps users gain a better understanding of their spending habits, enabling them to make informed financial decisions.' link='https://expense-tracker-app-delta-one.vercel.app/sign-in' />
                <ProjectCard project='3' src1={img3a} src2={img3b} heading='Notes Taking App' detail1='' name='' detail2='This is a notes taking web application which contains a rich text editor made using JQuery and Javascript for making eye-catching notes. It also contains an option for editing already saved notes as per the requirement.' link='http://notes-taking-app-5pyt.vercel.app/' note />
                <ProjectCard project='4' src1={img4a} src2={img4b} heading='Cafe Online Order App' detail1='' name='' detail2='This is an online order cafe application made using React with Cart functionality and other required calculations for items in cart' link='https://cafe-app-i12w-l8ac072xz-vanshitadev10.vercel.app/' />
            </div>
        </div>
    );

};

export default OpenSource;