import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import './Messages.scss';

import { Formik, Form, Field } from "formik";



const Messages = (props) => {

  let state = props.messagesPage;

  let dialogsElements = state.peopleData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id} />);
  // let newMessageBody = state.newMessageText;


  return (
    <div className='messages'>
      <div >
        {dialogsElements}
      </div>
      <div >
        <div>{messagesElements}</div>
        <AddMassageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  )
}


const AddMassageForm = (props) => {

  let addNewMessage = (values) => {
    props.sendMessage(values);
  }

  return (
    <Formik initialValues={{ newMessageText: "" }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageText);
        resetForm({ values: '' });
      }}>
      {() => (
        <Form>
          <div>
            <Field name={'newMessageText'} as={'textarea'} placeholder={'enter text'} />
          </div>
          <button type={'submit'}>Send</button>
        </Form>
      )}
    </Formik>
  )
}

export default Messages;