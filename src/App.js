import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';
import './_reset.scss';

import Navbar from './components/Navbar/Navbar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


function App(props) {

  return (
    <div className="app">
      <HeaderContainer />
      <Navbar />
      <div className="app__wrapper">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </div>
    </div>
  );
}




export default App;
