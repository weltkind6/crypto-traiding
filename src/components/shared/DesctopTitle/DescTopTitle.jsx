import React from 'react';
import styles from './DesctopTitle.module.css'
import mouse from "../../../img/svg/mouse.svg";

const DescTopTitle = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <div className={styles.mouseDote}/>
                <img src={mouse} alt="mouse" className={styles.mouseImg}/>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.subTitle}>About us</h2>
                <h3 className={styles.title}>Global technologies</h3>
            </div>
        </div>
    );
};

export default DescTopTitle;