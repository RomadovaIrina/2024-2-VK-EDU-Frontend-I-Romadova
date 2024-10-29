import React from "react";
import classNames from "classnames";
import styles from './MakeMessage.module.scss';

const MakeMessage = ({ sender, text, time, isLastMessage }) => {
  const classParamsLIB = classNames(styles.message, {
    [styles.messageFly]: isLastMessage 
  });

  return (
    <li className={classParamsLIB}>
      <div className={styles.messageHeader}>{sender}</div>
      <div className={styles.messageBody}>{text}</div>
      <div className={styles.messageFooter}>{time}</div>
    </li>
  );
}

export default MakeMessage;
