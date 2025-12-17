import React from 'react';

const MessageBox = ({ text }) => {
  return (
    <div className="message-box">
      <div className="message-text">{text}</div>
      <input type="text" placeholder="Send message to admin" />
    </div>
  );
};

export default MessageBox;
