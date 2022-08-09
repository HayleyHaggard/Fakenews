const APDATE_NEW_MESSAGE_TEXT = 'APDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {


  switch (action.type) {
    case APDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;

    case SEND_MESSAGE:
      let text = state.newMessageText;
      state.messagesDialogsData.push({ id: 6, message: text });
      state.newMessageText = '';
      return state;

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const apdateNewMessageCreator = (text) =>
  ({ type: APDATE_NEW_MESSAGE_TEXT, newMessageText: text, })

export default messagesReducer;