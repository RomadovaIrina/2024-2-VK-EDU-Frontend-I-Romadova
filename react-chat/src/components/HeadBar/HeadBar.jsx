import React from 'react';
import styles from "./HeadBar.module.scss";
const HeadBar = ({ leftPlace, centerPlace, rightPlace }) => {
    return (
        <header className={styles.topBar}>
            <div className={styles.leftPlace}>{leftPlace}</div>
            <div className={styles.centerPlace}>
                {centerPlace}
            </div>
            <div className={styles.rightPlace}>{rightPlace}</div>
        </header>
    );
};

export default HeadBar;
