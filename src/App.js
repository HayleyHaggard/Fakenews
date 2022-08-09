import './App.scss';
import './_reset.scss';

import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App(props) {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app__wrapper">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/messages/*" element={<Messages store={props.store} />} />
        </Routes>

      </div>
    </div>
  );
}


export default App;
