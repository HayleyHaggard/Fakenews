import './Navbar.scss'


function Navbar() {
  return (
    <nav className='nav'>

      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link">Profile</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Messages</a>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;