const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
  peopleData: [
    { id: 1, name: 'Peta' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Clara' },
    { id: 4, name: 'Sam' },
    { id: 5, name: 'Claus' },
    { id: 6, name: 'Geoge' }
  ],

  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'by' },
    { id: 4, message: 'how are you' }
  ],
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText
      };

    case SEND_MESSAGE:
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, { id: 6, message: text }]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text, })

export default messagesReducer;