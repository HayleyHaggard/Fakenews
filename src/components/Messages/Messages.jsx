import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import './Messages.scss';

const Messages = (props) => {

  let state = props.messagesPage;

  let dialogsElements = state.peopleData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id} />);
  let newMessageBody = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className='messages'>
      <div >
        {dialogsElements}
      </div>
      <div >
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Messages;