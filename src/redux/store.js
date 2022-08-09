import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";


let store = {
  _state: {
  },
  _callSubscriber() {
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.postsData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubsriber(this._state);
  // },

  // apdateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubsriber(this._state);
  // },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  }
}


export default store;