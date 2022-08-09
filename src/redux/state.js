import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hello', likesCount: 1 },
        { id: 2, message: 'I have a good mood today', likesCount: 6 },
        { id: 3, message: 'by', likesCount: 58 },
      ],
      newPostText: '',
    },

    messagesPage: {
      messagesPeopleData: [
        { id: 1, name: 'Peta' },
        { id: 2, name: 'Peter' },
        { id: 3, name: 'Clara' },
        { id: 4, name: 'Sam' },
        { id: 5, name: 'Claus' },
        { id: 6, name: 'Geoge' }
      ],

      messagesDialogsData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'by' },
        { id: 4, message: 'how are you' }
      ],
      newMessageText: '',
    },
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