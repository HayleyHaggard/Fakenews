import './Messages.scss';
import MessagesDialogs from './MessagesDialogs';
import MessagesPeople from './MessagesPeople';


function Messages(props) {
  return (
    <div className='messages'>
      <MessagesPeople />
      <MessagesDialogs />
    </div>
  );
}

export default Messages;