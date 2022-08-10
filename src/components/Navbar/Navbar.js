import './Navbar.scss'
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className='nav'>

      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/messages">Messages</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;