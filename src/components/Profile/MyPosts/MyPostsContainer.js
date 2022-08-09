import { connect } from 'react-redux'
import { addPostActionCreator, apdateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    apdateNewPostText: (text) => {
      dispatch(apdateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
