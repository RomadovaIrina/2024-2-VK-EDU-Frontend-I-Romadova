import React from "react";

const MakeMessage = ({id, sender, text, time}) => {
    return (
        <li className="message">
      <div className="message-header">{sender}</div>
      <div className="message-body">{text}</div>
      <div className="message-footer">{time}</div>
        </li>
    );
}

export default MakeMessage;