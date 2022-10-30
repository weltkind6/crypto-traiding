import React from 'react';
import styles from './TradingArena.module.css'
import Subtitle from "../shared/Subtitle/Subtitle";
import LearnMore from "../shared/LearnMore/LearnMore";
import Container from "../shared/Container/Container";

const TradingArena = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Subtitle>trading arena</Subtitle>
                <div className={styles.title}>
                    Prize pools worth up to USD 1,000,000
                </div>
                <LearnMore/>
            </div>
        </Container>
    );
};

export default TradingArena;