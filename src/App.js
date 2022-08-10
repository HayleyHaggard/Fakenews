import React from 'react';

import './App.scss';
import './_reset.scss';

import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';


function App(props) {

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app__wrapper">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
        </Routes>

      </div>
    </div>
  );
}




export default App;
