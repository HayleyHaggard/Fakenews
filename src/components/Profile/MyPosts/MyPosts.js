import './MyPosts.scss';
import Post from './Post/Post';


function MyPosts() {
  return (
    <div className='posts'>
      <div className="posts__new-post">
        <textarea className="posts__textarea">Введите ваш пост</textarea>
        <button>Add</button>
        <button>Delete</button>
      </div>
      <div className="posts__list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>


    </div>
  );
}


export default MyPosts;
