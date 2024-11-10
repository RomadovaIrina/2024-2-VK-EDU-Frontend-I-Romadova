import React from "react";
import styles from './ModalWindow.module.scss';
import CloseIcon from '@mui/icons-material/Close';

const ModalWindow = ({ title, children, onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    <CloseIcon />
                </button>
                <h3 className={styles.modalTitle}>{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
