import React from "react";

const MakeMessage = ({id, sender, text, time, isLastMessage}) => {
    return (
        <li className={`message ${isLastMessage ? 'message-fly' : ''}`}>
      <div className="message-header">{sender}</div>
      <div className="message-body">{text}</div>
      <div className="message-footer">{time}</div>
        </li>
    );
}

export default MakeMessage;