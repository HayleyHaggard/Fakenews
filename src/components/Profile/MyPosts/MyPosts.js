import './MyPosts.scss';
import Post from './Post/Post';


function MyPosts(props) {

  let postsItems = props.postsData.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)

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
