import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';


function MyPosts(props) {
  debugger
  let postsItems = props.postsData.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.apdateNewPostText(text);
  };

  return (
    <div className='posts'>
      <div className="posts__new-post">
        <textarea className="posts__textarea" ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        <button onClick={onAddPost}>Add</button>
        <button>Delete</button>
      </div>
      <div className="posts__list">
        {postsItems}
      </div>

    </div>
  );
}


export default MyPosts;
