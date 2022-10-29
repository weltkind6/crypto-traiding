import React from 'react';
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.subTitle}>About us</h2>
            <h3 className={styles.title}>Global technologies</h3>
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
                <div style={{color: '#FFF'}}>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;