import './Messages.scss';
import MessagesDialogs from './MessagesDialogs';
import MessagesPeople from './MessagesPeople';
import NewMessageContainer from './MessageTextareaContainer';


function Messages(props) {

  return (
    < div className='messages' >
      <MessagesPeople messagesPeopleData={props.state.messagesPeopleData} />
      <div>
        <MessagesDialogs messagesDialogsData={props.state.messagesDialogsData} />
        <NewMessageContainer store={props.store} />
      </div>
    </ div>
  );
}

export default Messages;