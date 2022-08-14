import Preloader from '../../common/Preloader/Preloader';
import './User.scss'
// import userImage from './user.jpg';


function User(props) {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className='user'>
      <div className="user__image-box">
        <div className="user__image-wrapper">
          <img className="user__image" src={props.profile.photos.large} alt="user logo" />
        </div>
      </div>
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



export default User;