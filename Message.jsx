import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="message-header">
        <span className="sender">{message.sender}</span>
        <span className="timestamp">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      <div className="message-content">{message.content}</div>
    </div>
  );
};

export default Message;