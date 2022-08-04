import './User.scss'
import UserImage from './UserImage.js'
import UserBox from './UserBox.js';

function User() {
  return (
    <div className='user'>
      <UserImage />
      <UserBox />
    </div>
  );
}

export default User;