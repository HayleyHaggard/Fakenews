import './Header.scss'
import logo from '../../img/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="header__logo" >
            <img className="header__image" src={logo} alt="logo"></img>
          </a>
          <div>search</div>
        </div>
      </div>

    </header>
  );
}

export default Header;