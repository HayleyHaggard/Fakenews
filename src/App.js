import './App.scss';
import './_reset.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App(props) {




  return (
    <BrowserRouter>

      <div className="app">
        <Header />
        <Navbar />
        <div className="app__wrapper">
          <Routes>
            <Route path="/profile" element={<Profile postsData={props.postsData} />} />
            <Route path="/messages/*" element={<Messages messagesDialogsData={props.messagesDialogsData} messagesPeopleData={props.messagesPeopleData} />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
