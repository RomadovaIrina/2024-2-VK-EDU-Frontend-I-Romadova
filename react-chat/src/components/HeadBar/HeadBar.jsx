import React from 'react';
import styles from "./HeadBar.module.scss";
import { useEffect } from 'react';
import axios from 'axios';
const HeadBar = ({ leftPlace, centerPlace, rightPlace, userPic, userName }) => {
    useEffect(() => {
        const customAxios = axios.create({baseURL: "http://localhost:8000"});

        customAxios.get('/api/auth').then((response) => console.log(response));
    }, []);
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
