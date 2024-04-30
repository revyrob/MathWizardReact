import "./Header.scss";
import logo from "../../assets/logo/logo_hat.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="wizard hat" />
      </Link>
      <h1 className="header__title">Math Wizards</h1>
    </header>
  );
}

export default Header;
