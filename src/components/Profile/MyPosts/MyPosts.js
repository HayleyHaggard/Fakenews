import './MyPosts.scss';
import Post from './Post/Post';


function MyPosts(props) {
  return (
    <div className='posts'>
      <div className="posts__new-post">
        <textarea className="posts__textarea">Введите ваш пост</textarea>
        <button>Add</button>
        <button>Delete</button>
      </div>
      <div className="posts__list">
        <Post message='Hello' />
        <Post message='How are you' />
        <Post message='I have a good mood today' />
      </div>


    </div>
  );
}


export default MyPosts;
