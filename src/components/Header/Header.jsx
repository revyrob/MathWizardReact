//custom
import "./Header.scss";
import backArrow from "../../assets/back-arrow-icon.svg";

//libraries
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={backArrow} alt="wizard hat" />
      </Link>
      <h1 className="header__title">Math Wizards</h1>
    </header>
  );
}

export default Header;
