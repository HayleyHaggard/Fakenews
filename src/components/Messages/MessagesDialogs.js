import './MessagesDialogs.scss';

function MessagesDialogs(props) {


  let messagesDialogsItems = props.messagesDialogsData.map(item => <MessagesDialogsItem message={item.message} id={item.id} />)

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