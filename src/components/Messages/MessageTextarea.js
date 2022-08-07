import React from 'react';
import { apdateNewMessageCreator, sendMessageCreator } from '../../redux/state';
import './MessageTextarea.scss'

function NewMessage(props) {

  let state = props.store.getState().messagesPage;

  let newMessageBody = state.newMessageText;



  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(apdateNewMessageCreator(body));
  };

  let onSendMessageClick = () => {
    debugger;

    props.store.dispatch(sendMessageCreator());
  }

  return (
    <div>
      <textarea className="posts__textarea" placeholder='Введите ваше сообщение' value={newMessageBody} onChange={onNewMessageChange}></textarea>
      <button onClick={onSendMessageClick}>Send</button>
    </div>
  );
}

export default NewMessage;