import { rerenderEntireTree } from "../render";

let state = {
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
  },
}

// export let addMessage = (textMessage) => {

//   let newMessage = {
//     id: 5, message: textMessage,
//   };

//   state.messagesPage.messagesDialogsData.push(newMessage);
//   rerenderEntireTree(state);
// }

export let addPost = () => {

  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let apdateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;