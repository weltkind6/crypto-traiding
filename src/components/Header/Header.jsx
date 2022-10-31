import React from 'react';
import styles from './Header.module.css'
import arrowLeftUp from '../../img/svg/arrow-left-up.svg'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>C</div>
            <div className={styles.mobileMenu}/>
            <nav>
                <ul className={styles.descTopMenu}>
                    <li><a href="#">Activities</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">R&D</a></li>
                    <li><a href="#">Community</a></li>
                    <button className={styles.headerButton}>
                        <span>Career</span>
                        <img src={arrowLeftUp} alt="arrow-left-up"/>
                    </button>
                </ul>
            </nav>
            <div className={styles.headerShadow}/>
            <div className={styles.headerShadowEllipse}/>
        </div>
    );
};

export default Header;