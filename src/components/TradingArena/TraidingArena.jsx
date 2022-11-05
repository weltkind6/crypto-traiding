import React from 'react';
import styles from './TradingArena.module.css'
import Subtitle from "../shared/Subtitle/Subtitle";
import LearnMore from "../shared/LearnMore/LearnMore";

const TradingArena = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backing}/>
            <div className={styles.wrapper}>
                <div className={styles.gradient} />
                <Subtitle>trading arena</Subtitle>
                <div className={styles.title}>
                    Prize pools worth up to USD 1,000,000
                </div>
                <LearnMore/>
            </div>
        </div>
    );
};

export default TradingArena;