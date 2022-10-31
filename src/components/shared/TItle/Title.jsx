import React from 'react';
import styles from './Title.module.css'

const Title = () => {
    return (
        <div className={styles.title}>
            <div className={styles.mobileTitle}>
                Engineers
                <div>
                    <span>Meet</span>
                    <span className={styles.traders}>Traders</span>
                </div>
            </div>
            <div className={styles.descTopTitle}>
                Engineers Meet
                <div className={styles.traders}>Traders</div>
            </div>
        </div>
    );
};

export default Title;