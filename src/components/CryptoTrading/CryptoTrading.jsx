import React from 'react';
import styles from './CryptoTrading.module.css'
import Title from "../shared/TItle/Title";
import Button from "../shared/Button/Button";

const CryptoTrading = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>crypto trading</div>
            <Title/>
            <p className={styles.description}>
                Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.
            </p>
            <Button>Learn more</Button>
        </div>
    );
};

export default CryptoTrading;