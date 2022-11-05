import React from 'react';
import styles from './MobileApp.module.css'
import Subtitle from "../shared/Subtitle/Subtitle";
import LearnMore from "../shared/LearnMore/LearnMore";

const MobileApp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cover} />
            <div className={styles.wrapper}>
                <Subtitle>mobile app</Subtitle>
                <div className={styles.title}>
                    Trade anytime,
                    anywhere
                </div>
                <LearnMore/>
                <div className={styles.gradient}/>
            </div>
        </div>
    );
};

export default MobileApp;