const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const APDATE_NEW_MESSAGE_TEXT = 'APDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


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
  // addMessage(textMessage) {
  //   let newMessage = {
  //     id: 5, message: textMessage,
  //   };

  //   state.messagesPage.messagesDialogsData.push(newMessage);
  //   _callSubsriber(state);
  // },

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === APDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === APDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
      let text = this._state.messagesPage.newMessageText;

      this._state.messagesPage.messagesDialogsData.push({ id: 6, message: text });
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
  }
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
}

export const apdateNewPostTextActionCreator = (text) => {
  return {
    type: APDATE_NEW_POST_TEXT,
    newText: text,
  };
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
}


export const apdateNewMessageCreator = (text) => {
  return {
    type: APDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
  };
}



export default store;
window.store = store;