import { NavLink } from 'react-router-dom';
import './Messages.scss';

function Messages(props) {
  return (
    <div className='messages'>
      <div className="messages__people ">
        <div className="messages__people-item">
          <NavLink className="messages__people-link" to="/messages/1">Pete</NavLink>
        </div>
        <div className="messages__people-item">
          <NavLink className="messages__people-link" to="/messages/2">Clara</NavLink>

        </div>
        <div className="meassages__people-item">
          <NavLink className="messages__people-link" to="/messages/3">Sam</NavLink>

        </div>
      </div>
      <div className="messages__dialogs">
        <div className="messages__dialogs-item">Hello</div>
        <div className="messages__dialogs-item">Hi</div>
        <div className="messages__dialogs-item">How are you</div>
      </div>
    </div>
  );
}

export default Messages;