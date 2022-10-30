import React from 'react';
import styles from './Subtitle.module.css'

const Subtitle = ({children}) => {
    return (
        <div className={styles.subtitle}>
            {children}
        </div>
    );
};

export default Subtitle;