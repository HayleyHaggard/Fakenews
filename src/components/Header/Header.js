import './Header.scss'
import logo from '../../img/logo.svg';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="header__logo" >
            <img className="header__image" src={logo} alt="logo"></img>
          </a>
          <div>search</div>
          <div>
            {props.isAuth
              ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
              : <NavLink to='/login'> Login  </NavLink>
            }
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;