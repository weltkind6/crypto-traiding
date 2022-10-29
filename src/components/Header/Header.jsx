import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>C</div>
            <div className={styles.mobileMenu}>
                <div className={styles.menuLine}/>
            </div>
        </div>
    );
};

export default Header;