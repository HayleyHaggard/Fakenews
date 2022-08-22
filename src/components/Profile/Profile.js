
import './Profile.scss'
import contentImage from '../../img/content-bg.jpg';

import User from './User/User';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {

  return (
    <div className='content'>
      <div className="content__image-wrapper">
        <img className="content__image" src={contentImage} alt="background" />
      </div>

      <User profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer store={props.store} />
    </div>

  );
}


export default Profile;