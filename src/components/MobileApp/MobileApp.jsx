import React from 'react';
import styles from './MobileApp.module.css'
import Subtitle from "../shared/Subtitle/Subtitle";
import LearnMore from "../shared/LearnMore/LearnMore";
import Container from "../shared/Container/Container";

const MobileApp = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Subtitle>mobile app</Subtitle>
                <div className={styles.title}>
                    Trade anytime,
                    anywhere
                </div>
                <LearnMore/>
            </div>
        </Container>
    );
};

export default MobileApp;