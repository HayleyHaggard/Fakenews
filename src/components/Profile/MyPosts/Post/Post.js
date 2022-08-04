import './Post.scss';
import userImage from '../../../../img/user.jpg';


function Post() {
  return (
    <div className="post">
      <img src={userImage} alt="user logo" className="post__image" />
      <p className="post__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates repudiandae sed magni velit molestias? Ipsam distinctio saepe repellat a sequi dolorem rerum et repellendus? Delectus quibusdam facere fugit distinctio porro.
      </p>
    </div>
  );
}

export default Post;