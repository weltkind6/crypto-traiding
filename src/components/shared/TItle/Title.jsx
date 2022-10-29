import React from 'react';
import styles from './Title.module.css'

const Title = () => {
    return (
        <h1 className={styles.title}>
            Engineers
            <div>Meet
                <span className={styles.traders}>Traders</span>
            </div>
        </h1>
    );
};

export default Title;