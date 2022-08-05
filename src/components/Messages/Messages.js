import { NavLink } from 'react-router-dom';
import './Messages.scss';


function MessagesPeopleItem(props) {
  let path = "/messages/" + props.id;

  return (
    <div className="messages__people-item">
      <NavLink className="messages__people-link" to={path}>{props.name}</NavLink>
    </div>
  );
}

function MessagesDialogsItem(props) {

  return (
    <div className="messages__dialogs-item">{props.message}</div>
  );
}


function Messages(props) {

  let messagesPeopleData = [
    { id: 1, name: 'Peta' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Clara' },
    { id: 4, name: 'Sam' },
    { id: 5, name: 'Claus' },
    { id: 6, name: 'Geoge' }
  ]

  let messagesDialogsData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'by' },
    { id: 4, message: 'how are you' }
  ]

  let messagesPeopleItems = messagesPeopleData.map(item =>
    <MessagesPeopleItem name={item.name} id={item.id} />)

  let messagesDialogsItems = messagesDialogsData.map(item => <MessagesDialogsItem message={item.message} id={item.id} />)



  return (
    <div className='messages'>
      <div className="messages__people ">

        {messagesPeopleItems}

      </div>
      <div className="messages__dialogs">
        {messagesDialogsItems}
      </div>
    </div>
  );
}

export default Messages;