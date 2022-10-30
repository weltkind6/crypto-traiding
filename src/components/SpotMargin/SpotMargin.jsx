import React from 'react';
import styles from './SpotMargin.module.css'
import Subtitle from "../shared/Subtitle/Subtitle";
import LearnMore from "../shared/LearnMore/LearnMore";
import Container from "../shared/Container/Container";

const SpotMargin = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Subtitle>Spot & Margin</Subtitle>
                <div className={styles.title}>
                    Trade
                    <span> 200+ </span>
                    <br/>pairs with up <br/>
                    to 10x leverage
                </div>
                <LearnMore/>
            </div>
        </Container>
    );
};

export default SpotMargin;