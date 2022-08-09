import NewMessage from './MessageTextarea';
import { apdateNewMessageCreator, sendMessageCreator } from '../../redux/messages-reducer';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    apdateNewMessage: (body) => { dispatch(apdateNewMessageCreator(body)); },
    sendMessage: () => { dispatch(sendMessageCreator()); }
  }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);


export default NewMessageContainer;