import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

const Messages = ({ messages, name, room, date }) => (
  <ScrollToBottom className="messages">
    <div className="startedAt">Your entered room "{room}" at: {date}</div>
    {messages.map((message, i) => <div className="key" key={i}><Message message={message} name={name} /></div>)}
  </ScrollToBottom>
);

export default Messages;