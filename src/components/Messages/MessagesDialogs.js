import './MessagesDialogs.scss';

function MessagesDialogs(props) {

  let messagesDialogsData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'by' },
    { id: 4, message: 'how are you' }
  ]

  let messagesDialogsItems = messagesDialogsData.map(item => <MessagesDialogsItem message={item.message} id={item.id} />)

  return (
    <div className="messages__dialogs">
      {messagesDialogsItems}
    </div>
  );
}


function MessagesDialogsItem(props) {
  return (
    <div className="messages__dialogs-item">{props.message}</div>
  );
}


export default MessagesDialogs;