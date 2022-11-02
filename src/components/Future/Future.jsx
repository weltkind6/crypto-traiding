import React from 'react';
import styles from './Future.module.css'
import classNames from "classnames";
import logo from '../../img/svg/logo.svg'
import arrows from '../../img/svg/arrows.svg'
import circle from '../../img/svg/circle.svg'
import circle2 from '../../img/svg/circle2.svg'
import circle3 from '../../img/svg/circle3.svg'
import circle4 from '../../img/svg/circle4.svg'

const Future = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.shadow}/>
            <div className={styles.gradient}/>
            <div className={styles.circleWrapper}>
                <img src={circle} alt="circle" className={styles.circle}/>
                <img src={circle2} alt="circle" className={styles.circle2}/>
                <img src={circle3} alt="circle" className={styles.circle3}/>
                <img src={circle4} alt="circle" className={styles.circle4}/>
            </div>
            <div className={styles.lines}>
                <div className={styles.line1}/>
                <div className={styles.line2}/>
                <div className={styles.line3}/>
                <div className={styles.line4}/>
                <div className={styles.line5}/>
                <div className={styles.line6}/>
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.descTopContainer}>
                    <h5 className={styles.title}>
                        The future <span style={{color: "#aaaaaa"}}>of</span> Cryptocurrency trading
                        <span className={styles.platform}> platform</span>
                    </h5>
                    <p className={styles.text}>
                        Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from
                        charts.
                    </p>
                    <a className={styles.learnMore} href="#">Learn more</a>
                </div>
                <div className={styles.blockContainer}>
                    <div className={styles.usageWrapper}>
                        <div className={classNames(styles.networks, styles.block)}>P2P Networks</div>
                        <div className={styles.blockWrapper}>
                            <div className={classNames(styles.usageBlock, styles.block)}>Artificial Intelligence</div>
                            <div className={classNames(styles.usageBlock, styles.block)}>Storage <br/> Networks</div>
                        </div>
                    </div>
                    <div className={styles.centerWrapper}>
                        <div className={classNames(styles.centerBlock, styles.block)}>Public data</div>
                        <div className={classNames(styles.centerBlock, styles.block)}>Encrypted Private Data *</div>
                    </div>
                    <div className={styles.bottomBlock}>
                        <div className={styles.bottomWrapper}>
                            <div className={classNames(styles.usageBlock, styles.block)}>Indexing</div>
                            <div className={classNames(styles.usageBlock, styles.block)}>API</div>
                        </div>
                        <div className={styles.descTopWrapper}>
                            <div className={styles.logo}>
                                <img src={logo} alt="logo"/>
                            </div>
                            <p className={styles.futureText}>
                                Easy to use digital service and exclusive personal service for our active traders
                            </p>
                        </div>
                        <img src={arrows} alt="arrows" className={styles.arrows}/>
                    </div>
                </div>
            </div>
            <div className={styles.consumers}>Consumers</div>
            <div className={styles.bottomGradient}/>
        </div>
    );
};

export default Future;