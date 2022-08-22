import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
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
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
}


export default User;