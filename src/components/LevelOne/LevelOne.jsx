import React from 'react';
import styles from './LevelOne.module.css'
import triangleBlue from '../../img/svg/triangle-blue.svg'
import triangleRose from '../../img/svg/triangle-rose.svg'

const LevelOne = () => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>Level 1</h4>
            <div>
                <div className={styles.textWrapper}>
                    <div className={styles.triangle}/>
                    <img src={triangleBlue} alt="triangle-blue"/>
                    <p>
                        Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the
                        same order ticket.
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <img src={triangleRose} alt="triangle-rose"/>
                    <p>
                        Place and manage orders based on the Level 2 order book, which provides a live display of all
                        bids and offers waiting to be executed.
                    </p>
                </div>
            </div>
                <button className={styles.button}>Start now</button>
        </div>
    );
};

export default LevelOne;