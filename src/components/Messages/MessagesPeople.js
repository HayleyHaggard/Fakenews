import './MessagesPeople.scss';

import { NavLink } from 'react-router-dom';



function MessagesPeople(props) {
  let messagesPeopleData = [
    { id: 1, name: 'Peta' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Clara' },
    { id: 4, name: 'Sam' },
    { id: 5, name: 'Claus' },
    { id: 6, name: 'Geoge' }
  ]

  let messagesPeopleItems = messagesPeopleData.map(item =>
    <MessagesPeopleItem name={item.name} id={item.id} />)

  return (
    <div className="messages__people ">
      {messagesPeopleItems}
    </div>
  );
}


function MessagesPeopleItem(props) {
  let path = "/messages/" + props.id;

  return (
    <div className="messages__people-item">
      <NavLink className="messages__people-link" to={path}>{props.name}</NavLink>
    </div>
  );
}

export default MessagesPeople;