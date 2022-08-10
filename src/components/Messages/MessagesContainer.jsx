import { sendMessageCreator, apdateNewMessageCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(apdateNewMessageCreator(body));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;