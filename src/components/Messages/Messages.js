import './Messages.scss';
import MessagesDialogs from './MessagesDialogs';
import MessagesPeople from './MessagesPeople';
import NewMessage from './MessageTextarea';


function Messages(props) {

  return (
    < div className='messages' >
      <MessagesPeople messagesPeopleData={props.state.messagesPeopleData} />
      <div>
        <MessagesDialogs messagesDialogsData={props.state.messagesDialogsData} />
        {/* <NewMessage addMessage={props.addMessage} /> */}
        <NewMessage />
      </div>
    </ div>
  );
}

export default Messages;