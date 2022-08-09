import React from 'react';
import { addPostActionCreator, apdateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {

  let state = props.store.getState();

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onPostChange = (text) => {


    let action = apdateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      apdateNewPostText={onPostChange}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
}


export default MyPostsContainer;
