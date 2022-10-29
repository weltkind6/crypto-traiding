import React from 'react';
import styles from './Button.module.css'
import arrow from '../../../img/arrow.svg'

const Button = () => {
    return (
        <div>
            <button className={styles.wrapper}>
                <div>Learn More</div>
                <div className={styles.learnMore}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </button>
        </div>
    );
};

export default Button;