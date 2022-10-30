import React from 'react';
import styles from './Button.module.css'
import arrow from '../../../img/svg/arrow.svg'
import classNames from "classnames";

const Button = ({children}) => {
    return (
        <div>
            <button className={styles.wrapper}>
                <div>{children}</div>
                <div className={classNames(styles.learnMore)}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </button>
        </div>
    );
};

export default Button;