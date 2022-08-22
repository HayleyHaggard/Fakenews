
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
  ]
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: text }]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })


export default messagesReducer;