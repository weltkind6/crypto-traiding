import React from 'react';
import styles from './Derivatives.module.css'
import LearnMore from "../shared/LearnMore/LearnMore";
import Subtitle from "../shared/Subtitle/Subtitle";

const Derivatives = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backing}/>
            <div className={styles.wrapper}>
                <Subtitle>derivatives</Subtitle>
                <div className={styles.title}>
                    40+ quarterly futures and contracts
                </div>
                <LearnMore/>
            </div>
            <div className={styles.roundGradient} />
        </div>
    );
};

export default Derivatives;