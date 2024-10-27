import React from "react";
import classNames from "classnames"

const MakeMessage = ({ id, sender, text, time, isLastMessage }) => {
  const classParamsLIB = classNames('message', {
    'message-fly': isLastMessage
  });
  return (
    <li className={classParamsLIB}>
      <div className="message-header">{sender}</div>
      <div className="message-body">{text}</div>
      <div className="message-footer">{time}</div>
    </li>
  );
}

export default MakeMessage;