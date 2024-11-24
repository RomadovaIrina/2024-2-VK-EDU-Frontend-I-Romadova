import React from "react";
import styles from './ModalWindow.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const ModalWindow = ({ title, children, onClose, onConfirm }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modalContent}>
                <div className={styles.header}>
                    <button className={styles.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </button>
                    <h3 className={styles.modalTitle}>{title}</h3>
                    <button className={styles.confirmButton} onClick={onConfirm}>
                        <CheckIcon />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
