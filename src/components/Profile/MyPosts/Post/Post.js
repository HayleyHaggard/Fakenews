import './Post.scss';
import userImage from '../../../../img/user.jpg';


function Post(props) {
  return (
    <div className="post">
      <img src={userImage} alt="user logo" className="post__image" />
      <p className="post__text">{props.message}
      </p>
    </div>
  );
}

export default Post;