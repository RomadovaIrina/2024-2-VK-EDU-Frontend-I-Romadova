import React from "react";
import classNames from "classnames";
import styles from './MakeMessage.module.scss';

const MakeMessage = ({ sender, text, time, isLastMessage, images = [], voice}) => {
  const classParamsLIB = classNames(styles.message, {
    [styles.messageFly]: isLastMessage
  });

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parseLink = (link) => {
    return link.split(urlRegex).map((part) => 
      urlRegex.test(part) ? (
        <a  href={part} target="_blank" rel="noopener noreferrer" className={styles.geoLink}>
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <li className={classParamsLIB}>
      <div className={styles.messageHeader}>{sender}</div>
      <div className={styles.messageBody}>
        {text && (
          <div className={styles.textContainer}>{parseLink(text)}</div>
        )}
        {images.length > 0 && (
          <div className={styles.imageContainer}>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`image-${index}`} className={styles.image} />
            ))}
          </div>
        )}
         {voice && (
          <audio controls className={styles.audioPlayer}>
            <source src={voice} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      <div className={styles.messageFooter}>{time}</div>
    </li>
  );
}

export default MakeMessage;