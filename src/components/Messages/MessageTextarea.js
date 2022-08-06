import React from 'react';
import './MessageTextarea.scss'

function NewMessage(props) {

  let newMessageElement = React.createRef();

  // let addMessage = () => {

  //   let message = newMessageElement.current.value;
  //   props.addMessage(message);
  //   newMessageElement.current.value = '';
  // };

  return (
    <div>
      <textarea className="posts__textarea" ref={newMessageElement}>Введите ваш пост</textarea>
      {/* <button onClick={addMessage}>Add</button> */}
      <button>Add</button>
    </div>
  );
}

export default NewMessage;