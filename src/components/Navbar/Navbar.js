import './Navbar.scss'

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className='nav'>

      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav__item">
          <Link to="/messages">Messages</Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;