import './Profile.scss'
import contentImage from '../../img/content-bg.jpg';

import User from './User/User';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {


  return (
    <div className='content'>
      <div className="content__image-wrapper">
        <img className="content__image" src={contentImage} alt="background" />
      </div>

      <User />
      <MyPosts postsData={props.state.postsData} />

    </div>

  );
}


export default Profile;