import React from 'react';
import './MessageTextarea.scss'

function NewMessage(props) {

  let state = props.messagesPage;

  let newMessageBody = state.newMessageText;



  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.apdateNewMessage(text);
  };

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  return (
    <div>
      <textarea className="posts__textarea" placeholder='Введите ваше сообщение' value={newMessageBody} onChange={onNewMessageChange}></textarea>
      <button onClick={onSendMessageClick}>Send</button>
    </div>
  );
}

export default NewMessage;