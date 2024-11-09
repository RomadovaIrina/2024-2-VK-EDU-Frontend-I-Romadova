import React from 'react';
import styles from "./ChatPlace.module.scss";
import DEFAULT_AVATAR from '../../../public/temp.png';

import DoneAllIcon from '@mui/icons-material/DoneAll';

const ChatPlace = (props) => {
    const {
        avatar = DEFAULT_AVATAR,
        name,
        lastMessage,
        time,
        isRead
    } = props;

    const userPicture = avatar || DEFAULT_AVATAR;

    return (
        <div className={styles.chatPlace}>
            <img src={userPicture} className={styles.chatImage} alt="User avatar" />
            <div className={styles.chatComponents}>
                <div className={styles.chatName}>{name}</div>
                <div className={styles.lastSent}>{lastMessage}</div>
                <div className={styles.chatFooter}>
                    <div className={styles.chatTime}>{time}</div>
                    {isRead && <DoneAllIcon className={styles.readStatus} />}
                </div>
            </div>
        </div>
    );
};

export default ChatPlace;
