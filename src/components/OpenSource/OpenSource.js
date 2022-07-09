import React from 'react';

import img1a from '../../assets/project1a.jpg';
import img1b from '../../assets/project1b.jpg';
import img2a from '../../assets/project2a.jpg';
import img2b from '../../assets/project2b.jpg';
import img3a from '../../assets/project3a.jpg';
import img3b from '../../assets/project3b.jpg';
import img4a from '../../assets/project4a.jpg';
import img4b from '../../assets/project4b.jpg';
import ProjectCard from './ProjectCard';
import styles from './OpenSource.module.css';

const OpenSource = () => {

    return (
        <div className={styles.project} id='open-source'>
            <div>
                <h1 className={styles.project__heading}>Open Source project</h1>
                <p className={styles.project__detail}>Some cool projects that I built till now...</p>
            </div>
            <div className={styles.project__list}>
                <ProjectCard project='1' src1={img1a} src2={img1b} heading='Expense Tracker App' detail1='This is a' name='Full-Stack' detail2='Expense Tracker App made using React.js, Firebase Authentication and Firebase Realtime Database. This app also uses React Google Charts for better analysis of the expenses and Lottie Animations to enhance the user experience' link='https://github.com/vanshitadev10/Expense-Tracker-App' />
                <ProjectCard project='2' src1={img2a} src2={img2b} heading='Notes Taking App' detail1='' name='' detail2='This is a notes taking web application which contains a rich text editor made using JQuery and Javascript for making fascinating notes.' link='https://github.com/vanshitadev10/Notes_Taking_App' note />
                <ProjectCard project='3' src1={img3a} src2={img3b} heading='Asynchronous Redux Calls' detail1='' name='' detail2='This was basically a practice application for practicing asynchronous data fetching using Redux.js' link='https://github.com/vanshitadev10/Asynchronous-Redux-Actions' />
                <ProjectCard project='4' src1={img4a} src2={img4b} heading='E-Commerce Website' detail1='' name='' detail2='This was my first website after I started exploring web development. This is an e-commerce website made using Vanilla Javascript, CSS and HTML' link='https://github.com/vanshitadev10/E-Commerce-Website' />
            </div>
        </div>
    )
}

export default OpenSource;