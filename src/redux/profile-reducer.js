import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'Hello', likesCount: 1 },
    { id: 2, message: 'I have a good mood today', likesCount: 6 },
    { id: 3, message: 'by', likesCount: 58 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost]
      };
    }

    case APDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const apdateNewPostTextActionCreator = (text) => ({ type: APDATE_NEW_POST_TEXT, newText: text, })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })




export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
}

export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}


export default profileReducer;