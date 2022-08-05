import './Messages.scss';
import MessagesDialogs from './MessagesDialogs';
import MessagesPeople from './MessagesPeople';


function Messages(props) {
  return (
    <div className='messages'>
      <MessagesPeople messagesPeopleData={props.messagesPeopleData} />
      <MessagesDialogs messagesDialogsData={props.messagesDialogsData} />
    </div>
  );
}

export default Messages;