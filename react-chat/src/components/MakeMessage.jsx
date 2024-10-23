import React from "react";

const MakeMessage = ({id, sender, text, time, isLastMessage}) => {
  const classParams = `message ${isLastMessage ? 'message-fly' : ''}`;
    return (
        <li className={classParams}>
      <div className="message-header">{sender}</div>
      <div className="message-body">{text}</div>
      <div className="message-footer">{time}</div>
        </li>
    );
}

export default MakeMessage;