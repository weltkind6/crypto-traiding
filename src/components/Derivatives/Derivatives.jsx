import React from 'react';
import styles from './Derivatives.module.css'
import LearnMore from "../shared/LearnMore/LearnMore";
import Subtitle from "../shared/Subtitle/Subtitle";
import Container from "../shared/Container/Container";

const Derivatives = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Subtitle>derivatives</Subtitle>
                <div className={styles.title}>
                    40+ quarterly futures and contracts
                </div>
                <LearnMore/>
            </div>
        </Container>
    );
};

export default Derivatives;