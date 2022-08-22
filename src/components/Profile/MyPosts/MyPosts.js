import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
import { Formik, Form, Field } from "formik";


function MyPosts(props) {
  let postsItems = props.postsData.map(item => <Post message={item.message} id={item.id} likesCount={item.likesCount} />)

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.apdateNewPostText(text);
  // };

  return (
    <div className='posts'>
      <div className="posts__new-post">
        <AddPostForm addPost={props.addPost} />
        {/* <textarea className="posts__textarea" ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        <button onClick={onAddPost}>Add</button>
        <button>Delete</button> */}
      </div>

      <div className="posts__list">
        {postsItems}
      </div>

    </div>
  );
}


const AddPostForm = (props) => {

  let addNewPost = (values) => {
    props.addPost(values);
  }

  return (
    <Formik initialValues={{ newPostText: "" }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newPostText);
        resetForm({ values: '' });
      }}>

      {() => (
        <Form>
          <div>
            <Field name={'newPostText'} as={'textarea'} placeholder={'enter text'} />
          </div>
          <button type={'submit'}>Post</button>
        </Form>
      )}
    </Formik>
  )

}


export default MyPosts;
