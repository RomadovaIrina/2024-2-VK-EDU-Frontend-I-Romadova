import React, { useEffect } from 'react';
import styles from './Notification.module.scss';
import DEFAULT_AVATAR from '../../../../public/temp.png';

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), 5000); // Убираем уведомление через 5 секунд
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className={styles.notification}>
        <img src={message.sender?.avatar || DEFAULT_AVATAR} alt="Avatar" />
        <span>
          {`${message.sender?.userName || 'Unknown'}: ${message.text}`}
        </span>
      </div>
    )
  );
};

export default Notification;