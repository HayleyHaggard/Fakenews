import './User.scss'
import userImage from './user.jpg';


function User(props) {
  return (
    <div className='user'>
      <UserImage />
      <UserBox />
    </div>
  );
}

function UserBox(props) {
  return (
    <div className="user__box">
      <p className="user__box-name">Ella Stefan</p>
      <p className="user__box-status">Your life is beautiful</p>
    </div>
  );
}

function UserImage(props) {
  return (
    <div className="user__image-box">
      <div className="user__image-wrapper">
        <img className="user__image" src={userImage} alt="user logo" />
      </div>
    </div>
  );
}



export default User;