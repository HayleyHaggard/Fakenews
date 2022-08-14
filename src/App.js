import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';
import './_reset.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app__wrapper">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users" element={<UsersContainer />} />

        </Routes>

      </div>
    </div>
  );
}




export default App;
