import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, apdateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <App state={state} addMessage={addMessage} /> */}
        <App state={state} addPost={addPost} apdateNewPostText={apdateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

