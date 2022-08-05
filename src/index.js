import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hello', likesCount: 1 },
  { id: 2, message: 'I have a good mood today', likesCount: 6 },
  { id: 3, message: 'by', likesCount: 58 }
];

let messagesDialogsData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'by' },
  { id: 4, message: 'how are you' }
]

let messagesPeopleData = [
  { id: 1, name: 'Peta' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Clara' },
  { id: 4, name: 'Sam' },
  { id: 5, name: 'Claus' },
  { id: 6, name: 'Geoge' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesDialogsData={messagesDialogsData} messagesPeopleData={messagesPeopleData} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
