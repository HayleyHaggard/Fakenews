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

      <User />
      <MyPostsContainer store={props.store} />
      {/* <MyPostsContainer /> */}
    </div>

  );
}


export default Profile;