const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'Hello', likesCount: 1 },
    { id: 2, message: 'I have a good mood today', likesCount: 6 },
    { id: 3, message: 'by', likesCount: 58 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {

      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case APDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const apdateNewPostTextActionCreator = (text) =>
  ({ type: APDATE_NEW_POST_TEXT, newText: text, })

export default profileReducer;