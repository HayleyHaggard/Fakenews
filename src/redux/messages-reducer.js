const APDATE_NEW_MESSAGE_TEXT = 'APDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


const messagesReducer = (state, action) => {


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