import React from 'react';
import styles from './AboutUs.module.css'
import lines from '../../img/lines.png'
import bigLine from '../../img/bigLine.png'
import dottedLines from '../../img/svg/dottedLines.svg'

const AboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <img src={lines} alt="lines" className={styles.lines}/>
            <img src={bigLine} alt="big-line" className={styles.bigLine}/>
            <div className={styles.dottedLines}>
                <img src={dottedLines} alt="dotted-lines" className={styles.dottedLine1}/>
                <img src={dottedLines} alt="dotted-lines" className={styles.dottedLine2}/>
                <img src={dottedLines} alt="dotted-lines" className={styles.dottedLine3}/>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.subTitle}>About us</h2>
                <h3 className={styles.title}>Global technologies</h3>
            </div>
            <div className={styles.levelContainer}>
                <div className={styles.levelWrapper}>
                     <div className={styles.progressContainer}>
                         <div className={styles.center}/>
                         <div className={styles.progressBar}/>
                         <div className={styles.progressBar}/>
                         <div className={styles.progressBar}/>
                         <div className={styles.progressBar}/>
                         <div className={styles.progressBar}/>
                         <div className={styles.progressBar}/>
                     </div>
                </div>
                <div className={styles.numbers}>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                </div>
            </div>
            <div className={styles.gradient} />
            <div className={styles.gradientRight} />
        </div>
    );
};

export default AboutUs;