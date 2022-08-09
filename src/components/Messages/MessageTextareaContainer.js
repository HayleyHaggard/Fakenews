import React from 'react';
import NewMessage from './MessageTextarea';
import { apdateNewMessageCreator, sendMessageCreator } from '../../redux/messages-reducer';


function NewMessageContainer(props) {

  let state = props.store.getState().messagesPage;

  let onNewMessageChange = (body) => {
    props.store.dispatch(apdateNewMessageCreator(body));
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <NewMessage
      apdateNewMessage={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messagesPage={state} />
  );
}

export default NewMessageContainer;