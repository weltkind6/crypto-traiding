import React from 'react';
import styles from './Union.module.css'
import stepsArrow1 from '../../img/svg/stepsArrow1.svg'
import dottedArrow from '../../img/svg/dotted-arrow.svg';
import straightArrow from '../../img/svg/straight-arrow.svg';
import difficultArrow from '../../img/svg/difficult-arrow.svg';

const Union = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.secondStep}>Second step</div>
            <div className={styles.firstStep}>First step</div>
            <div className={styles.trading}>
                <div className={styles.trade}>Trading</div>
            </div>
            <div className={styles.earning}>Earning</div>
            <img src={stepsArrow1} className={styles.stepsArrow1} alt="steps-arrow"/>
            <img src={dottedArrow} className={styles.dottedArrow} alt="steps-arrow"/>
            <img src={straightArrow} className={styles.straightArrow} alt="steps-arrow"/>
            <img src={difficultArrow} className={styles.difficultArrow} alt="steps-arrow"/>
        </div>
    );
};

export default Union;