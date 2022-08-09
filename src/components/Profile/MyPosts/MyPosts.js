import React from 'react';
import { addPostActionCreator, apdateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import './MyPosts.scss';
import Post from './Post/Post';


function MyPosts(props) {

  let postsItems = props.postsData.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  let onPostChange = () => {

    let text = newPostElement.current.value;
    let action = apdateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className='posts'>
      <div className="posts__new-post">
        <textarea className="posts__textarea" ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        <button onClick={addPost}>Add</button>
        <button>Delete</button>
      </div>
      <div className="posts__list">
        {postsItems}
      </div>

    </div>
  );
}


export default MyPosts;
