import './MyPosts.scss';
import Post from './Post/Post';


function MyPosts(props) {
  let postsData = [
    { id: 1, message: 'Hello', likesCount: 1 },
    { id: 2, message: 'I have a good mood today', likesCount: 6 },
    { id: 3, message: 'by', likesCount: 58 }
  ]

  let postsItems = postsData.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)


  return (
    <div className='posts'>
      <div className="posts__new-post">
        <textarea className="posts__textarea">Введите ваш пост</textarea>
        <button>Add</button>
        <button>Delete</button>
      </div>
      <div className="posts__list">
        {postsItems}
      </div>

    </div>
  );
}


export default MyPosts;
