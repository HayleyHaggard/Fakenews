import userImage from '../../../img/user.jpg';
import './UserImage.scss';


function UserImage() {
  return (
    <div className="user__image-box">
      <div className="user__image-wrapper">
        <img className="user__image" src={userImage} alt="user logo" />
      </div>
    </div>
  );
}

export default UserImage;